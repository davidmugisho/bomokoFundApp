import React from 'react';
import { View, Text, Image, StatusBar, StyleSheet } from 'react-native';

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      {/* Status Bar */}
      <StatusBar barStyle="light-content" backgroundColor="#020A3C" />

      {/* App Name and Version at the Top */}
      <View style={styles.header}>
        <Text style={styles.appName}>Bomoko Fund</Text>
        <Text style={styles.version}>Version 1.1.0</Text>
      </View>

      {/* Group 47 - Circular Graphics */}
      <View style={styles.graphicsContainer}>
        <View style={styles.largeCircle}>
          <View style={styles.smallCircle}>
            <Image
              source={require('../../assets/images/2hands.jpg')}
              style={styles.iconImage}
              resizeMode="cover"
            />
          </View>
        </View>
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
  header: {
    position: 'absolute',
    bottom: 50,
    alignItems: 'center',
  },
  appName: {
    color: 'white',
    fontSize: 22,
    fontWeight: '800',
  },
  version: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 5,
  },
  graphicsContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  largeCircle: {
    width: 442,
    height: 442,
    borderRadius: 221,
    borderWidth: 1,
    borderColor: '#B0B0B0',
    opacity: 0.5,
    position: 'static',
    top: 185,
    left: -33,
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallCircle: {
    width: 218,
    height: 218,
    borderRadius: 109,
    borderWidth: 1,
    borderColor: '#B0B0B0',
    opacity: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});

