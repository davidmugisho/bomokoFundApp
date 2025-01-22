// src/screens/SplashScreen.tsx

import React from 'react';
import { View, Text, Image, StatusBar, StyleSheet } from 'react-native';

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      {/* Status Bar */}
      <StatusBar barStyle="light-content" backgroundColor="#020A3C" />

      {/* Group 47 - Circular Graphics */}
      <View style={styles.graphicsContainer}>
        <View style={styles.largeCircle} />
        <View style={styles.smallCircle} />
      </View>

      {/* Group 48 - Main Icon */}
      <View style={styles.iconContainer}>
        <View style={styles.iconWrapper}>
          <Image
            source={require('../../assets/images/2hands.jpg')}
            style={styles.iconImage}
            resizeMode="cover"
          />
        </View>
      </View>

      {/* App Name and Version */}
      <View style={styles.footer}>
        <Text style={styles.appName}>Bomoko Fund</Text>
        <Text style={styles.version}>Version 1.1.0</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020A3C',
    justifyContent: 'center',
    alignItems: 'center',
  },
  graphicsContainer: {
    position: 'absolute',
    top: 185,
  },
  largeCircle: {
    width: 442,
    height: 442,
    borderRadius: 221,
    borderWidth: 1,
    borderColor: '#B0B0B0',
    opacity: 0.5,
  },
  smallCircle: {
    width: 218,
    height: 218,
    borderRadius: 109,
    borderWidth: 1,
    borderColor: '#B0B0B0',
    position: 'absolute',
    top: 28,
    left: 28,
    opacity: 0.5,
  },
  iconContainer: {
    position: 'absolute',
    top: '39%',
    left: '36%',
  },
  iconWrapper: {
    width: 30,
    height: 30,
    borderRadius: 15,
    overflow: 'hidden',
  },
  iconImage: {
    width: '100%',
    height: '100%',
  },
  footer: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
    alignItems: 'center',
  },
  appName: {
    color: 'white',
    fontSize: 18,
    fontWeight: '800',
  },
  version: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
    marginTop: 8,
  },
});
