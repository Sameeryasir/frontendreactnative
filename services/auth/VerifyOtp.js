import { API_URL } from '@env';

export async function verifyOtp(email, code) {
  try {
    const response = await fetch(`${API_URL}/auth/verify-otp`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, code }),
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || 'Failed to verify OTP');
    }
    return data;
  } catch (error) {
    throw error;
  }
}
