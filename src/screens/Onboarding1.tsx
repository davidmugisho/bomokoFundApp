
import React from 'react';
import { View, Text, Image, StatusBar, TouchableOpacity, StyleSheet } from 'react-native';

export default function Onboarding1() {
  return (
    <View style={styles.container}>
      {/* Status Bar */}
      <StatusBar barStyle="light-content" backgroundColor="#000000" translucent={false}/>

      {/* SKIP Button */}
      <TouchableOpacity style={styles.skipButton}>
        <Text style={styles.skipText}>Skip</Text>
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
        <Text style={styles.heading}>Welcome to {'\n'} Bomoko Fund</Text>
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
    // paddingTop: StatusBar.currentHeight || 50,
    alignItems: 'center',
    justifyContent:'space-evenly'
  },
  skipButton: {
        top: 60,
        width: 70,
        height: 40,
        position: 'absolute',
        left: 24,
        borderRadius: 12,
        backgroundColor: '#f3f5f7',
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight: 16,
        paddingLeft: 16,
        paddingTop: 8,
        paddingBottom: 8,
  },
  skipText: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '600',
  },
  imageContainer: {
    width: 218,
    height: 218,
    marginTop: 150,
    marginBottom: 10,
  },
  image: {
    width: 146,
    height: 146,
    top:20,
    left:40,
  },
  blueEllipse: {
    position: 'absolute',
    top: 100, 
    right: -20,
    width: 8,
    height: 8,
    backgroundColor: '#3B82F6',
    borderRadius: 4,
    left:229, //add 229

  },
  greenEllipse: {
    position: 'absolute',
    top: 150, //40 to 344
    right: -10,
    width: 16,
    height: 16,
    backgroundColor: '#10B981',
    borderRadius: 8,
    left:220, //add 229
  },
  textContainer: {
    marginTop: 40,
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  heading: {
    color: '#000000',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 40,
    letterSpacing: -0.5,
    marginBottom: 5,  
  },
  description: {
    color: '#6B7280',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20, 
  },
  paginationContainer: {
    flexDirection: 'row',
    marginTop: 3,
    justifyContent: 'center',
    gap: 5,
  },
  activeDot: {
    width: 10,
    height: 10,
    backgroundColor: '#3B82F6',
    borderRadius: 5,
    marginHorizontal: 8,
  },
  inactiveDot: {
    width: 10,
    height: 10,
    borderColor: '#9CA3AF',
    borderWidth: 1,
    borderRadius: 5,
    marginHorizontal: 8,
  },
  getStartedButton: {
    marginTop: -20,
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
