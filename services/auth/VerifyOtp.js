import { API_URL } from '@env';

export async function verifyOtp(email, code) {
  try {
    // Check if API_URL is defined
    if (!API_URL) {
      throw new Error('API_URL is not configured. Please check your environment variables.');
    }

    // Try different endpoint patterns
    const endpoints = [
      '/auth/verify-otp',
      '/api/auth/verify-otp',
      '/verify-otp',
      '/api/verify-otp'
    ];

    let lastError = null;

    for (const endpoint of endpoints) {
      try {
        console.log(`Trying endpoint: ${API_URL}${endpoint}`);
        
        const response = await fetch(`${API_URL}${endpoint}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, code }),
        });

        console.log(`Response status: ${response.status} for ${endpoint}`);

        // Check if response is ok before trying to parse JSON
        if (!response.ok) {
          // Try to parse error response as JSON, fallback to text if it fails
          let errorMessage = 'Failed to verify OTP';
          try {
            const errorData = await response.json();
            errorMessage = errorData.message || errorMessage;
          } catch (parseError) {
            // If JSON parsing fails, try to get text response
            try {
              const errorText = await response.text();
              errorMessage = `Server error: ${response.status} - ${errorText}`;
            } catch (textError) {
              errorMessage = `Server error: ${response.status}`;
            }
          }
          
          if (response.status === 404) {
            lastError = new Error(`Endpoint not found: ${endpoint}. Status: ${response.status}`);
            continue; // Try next endpoint
          } else {
            throw new Error(errorMessage);
          }
        }

        // Parse successful response
        const data = await response.json();
        console.log(`Success with endpoint: ${endpoint}`);
        return data;
      } catch (error) {
        if (error.message.includes('Endpoint not found')) {
          lastError = error;
          continue; // Try next endpoint
        }
        throw error; // Re-throw other errors
      }
    }

    // If we get here, all endpoints failed
    throw lastError || new Error('All API endpoints failed. Please check your server configuration.');

  } catch (error) {
    // If it's already a custom error, re-throw it
    if (error.message.includes('API_URL') || error.message.includes('Server error') || error.message.includes('Endpoint not found')) {
      throw error;
    }
    
    // Handle network errors and JSON parse errors
    if (error.name === 'TypeError' && error.message.includes('fetch')) {
      throw new Error('Network error. Please check your internet connection and server status.');
    }
    
    if (error.name === 'SyntaxError' && error.message.includes('JSON')) {
      throw new Error('Invalid response from server. Please try again later.');
    }
    
    throw new Error(error.message || 'An unexpected error occurred');
  }
}
