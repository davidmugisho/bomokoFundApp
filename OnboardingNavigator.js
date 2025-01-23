import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Onboarding1 from './src/screens/Onboarding1.tsx';
import Onboarding2 from './src/screens/Onboarding2.tsx';
import Onboarding3 from './src/screens/Onboarding3.tsx';

const Tab = createMaterialTopTabNavigator();

export default function OnboardingNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        swipeEnabled: true,
        tabBarStyle: { display: 'none' },  // Hide the tab indicators
      }}
    >
      <Tab.Screen name="Onboarding1" component={Onboarding1} />
      <Tab.Screen name="Onboarding2" component={Onboarding2} />
      <Tab.Screen name="Onboarding3" component={Onboarding3} />
    </Tab.Navigator>
  );
}
