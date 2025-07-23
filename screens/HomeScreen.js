import React from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons, MaterialIcons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.headerTitle}>6787 Trimble <Ionicons name="chevron-down" size={18} color="#222" /></Text>
          <Text style={styles.headerDate}>Tuesday, June 3, 2025</Text>
        </View>
        <TouchableOpacity style={styles.bellButton}>
          <Ionicons name="notifications" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={styles.mainContent}>
        {/* Sidebar */}
        <View style={styles.sidebar}>
          <View style={styles.sidebarItem}>
            <Ionicons name="chatbubble-outline" size={28} color="#3557A6" />
            <Text style={styles.sidebarLabel}>chat</Text>
          </View>
          <View style={styles.sidebarItem}>
            <MaterialIcons name="insert-drive-file" size={28} color="#3557A6" />
            <Text style={styles.sidebarLabel}>Files</Text>
          </View>
          <View style={styles.sidebarItem}>
            <MaterialCommunityIcons name="cube-outline" size={28} color="#3557A6" />
            <Text style={styles.sidebarLabel}>Material</Text>
          </View>
          <View style={styles.sidebarItem}>
            <FontAwesome5 name="users" size={26} color="#3557A6" />
            <Text style={styles.sidebarLabel}>Personnel</Text>
          </View>
        </View>
        {/* Cards */}
        <ScrollView contentContainerStyle={styles.cardsContainer} showsVerticalScrollIndicator={false}>
          <View style={styles.card}>
            <View style={styles.cardImagePlaceholder} />
            <TouchableOpacity style={styles.cardButton}>
              <Text style={styles.cardButtonText}>View Tasks</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.card}>
            <View style={styles.cardImagePlaceholder} />
            <TouchableOpacity style={styles.cardButton}>
              <Text style={styles.cardButtonText}>Daily Log</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      {/* Bottom Tab Bar */}
      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tabItem}>
          <Ionicons name="home" size={24} color="#3557A6" />
          <Text style={styles.tabLabel}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <MaterialCommunityIcons name="calendar-month-outline" size={24} color="#3557A6" />
          <Text style={styles.tabLabel}>Schedule</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Ionicons name="person-outline" size={24} color="#3557A6" />
          <Text style={styles.tabLabel}>Account</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 18,
    paddingBottom: 8,
    backgroundColor: '#fff',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    zIndex: 2,
  },
  headerLeft: {
    flexDirection: 'column',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#222',
    marginBottom: 2,
  },
  headerDate: {
    fontSize: 15,
    color: '#222',
    fontWeight: '400',
  },
  bellButton: {
    backgroundColor: '#3557A6',
    borderRadius: 20,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainContent: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingTop: 8,
  },
  sidebar: {
    width: 80,
    alignItems: 'center',
    paddingTop: 16,
    paddingBottom: 16,
    justifyContent: 'flex-start',
  },
  sidebarItem: {
    alignItems: 'center',
    marginBottom: 28,
  },
  sidebarLabel: {
    fontSize: 13,
    color: '#3557A6',
    marginTop: 4,
    fontWeight: '500',
  },
  cardsContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingLeft: 12,
    paddingRight: 8,
  },
  card: {
    backgroundColor: '#F7F8FA',
    borderRadius: 18,
    padding: 18,
    marginBottom: 22,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 2,
  },
  cardImagePlaceholder: {
    width: 140,
    height: 110,
    backgroundColor: '#C9CCD6',
    borderRadius: 12,
    marginBottom: 16,
  },
  cardButton: {
    backgroundColor: '#3557A6',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 22,
    alignItems: 'center',
  },
  cardButtonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#222',
    borderRadius: 50, // Pill shape
    paddingVertical: 18,
    paddingHorizontal: 32,
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    left: 12,
    right: 12,
    bottom: 24,
    elevation: 12,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 16,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabLabel: {
    color: '#B0B6C3',
    fontSize: 16,
    marginTop: 4,
    fontWeight: '500',
  },
});

export default HomeScreen;