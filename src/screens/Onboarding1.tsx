import React from 'react';
import { View, Text, Image, StatusBar, TouchableOpacity, StyleSheet } from 'react-native';

export default function Onboarding1() {
  return (
    <View style={styles.container}>
      {/* Status Bar */}
      <StatusBar barStyle="light-content" backgroundColor="#000000" />
      
      {/* SKIP Button */}
      <TouchableOpacity style={styles.skipButton}>
        <Text style={styles.skipText}>SKIP</Text>
      </TouchableOpacity>
      
      {/* Image and Ellipses */}
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/hello.png')}
          style={styles.image}
          resizeMode="contain"
        />
        <View style={styles.blueEllipse} />
        <View style={styles.greenEllipse} />
      </View>

      {/* Text Content */}
      <View style={styles.textContainer}>
        <Text style={styles.heading}>Welcome to App name</Text>
        <Text style={styles.description}>
          Bring your ideas to life. Fund projects, support causes, and join a community of backers.
        </Text>
      </View>

      {/* Pagination Dots */}
      <View style={styles.paginationContainer}>
        <View style={styles.activeDot} />
        <View style={styles.inactiveDot} />
        <View style={styles.inactiveDot} />
      </View>

      {/* Get Started Button */}
      <TouchableOpacity style={styles.getStartedButton}>
        <Text style={styles.getStartedText}>Get started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  skipButton: {
    position: 'absolute',
    top: 16,
    right: 16,
  },
  skipText: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '600',
  },
  imageContainer: {
    position: 'absolute',
    top: 80,
    left: 32,
  },
  image: {
    width: 144,
    height: 144,
  },
  blueEllipse: {
    position: 'absolute',
    top: 48,
    left: -20,
    width: 8,
    height: 8,
    backgroundColor: '#3B82F6',
    borderRadius: 4,
  },
  greenEllipse: {
    position: 'absolute',
    top: 96,
    left: -10,
    width: 16,
    height: 16,
    backgroundColor: '#10B981',
    borderRadius: 8,
  },
  textContainer: {
    position: 'absolute',
    top: 400,
    left: 32,
    width: 320,
    alignItems: 'center',
  },
  heading: {
    color: '#000000',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 40,
    letterSpacing: -0.5,
  },
  description: {
    color: '#6B7280',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 16,
  },
  paginationContainer: {
    position: 'absolute',
    top: 600,
    left: 128,
    flexDirection: 'row',
    gap: 16,
  },
  activeDot: {
    width: 10,
    height: 10,
    backgroundColor: '#3B82F6',
    borderRadius: 5,
  },
  inactiveDot: {
    width: 10,
    height: 10,
    borderColor: '#9CA3AF',
    borderWidth: 1,
    borderRadius: 5,
  },
  getStartedButton: {
    position: 'absolute',
    bottom: 80,
    left: 32,
    width: 320,
    height: 56,
    backgroundColor: '#020A3C',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  getStartedText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
});
