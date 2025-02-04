
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './src/screens/SplashScreen';  // Adjust the import path if needed
import Onboarding1 from './src/screens/Onboarding1';  // Ensure this path is correct
import Onboarding2 from './src/screens/Onboarding2';
import Onboarding3 from './src/screens/Onboarding3';
import OnboardingNavigator from './OnboardingNavigator';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown: false}} />
        <Stack.Screen name="Onboarding1" component={Onboarding1} options={{headerShown: false}} />
        <Stack.Screen name="Onboarding2" component={Onboarding2} options={{headerShown: false}}/>
        <Stack.Screen name="Onboarding3" component={Onboarding3} options={{headerShown: false}}/>
        <Stack.Screen name="OnboardingNavigator" component={OnboardingNavigator} options={{headerShown: false}}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

