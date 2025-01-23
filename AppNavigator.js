// import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';


// import SplashScreen from './src/screens/SplashScreen.tsx';
// import Onboarding1 from './src/screens/Onboarding1.tsx';
// import Onboarding2 from './src/screens/Onboarding2.js';

// const Stack = createStackNavigator();

// export default function AppNavigator() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: false }}>
//         <Stack.Screen name="SplashScreen" component={SplashScreen} />
//         <Stack.Screen name="Onboarding1" component={Onboarding1} />
//         <Stack.Screen name="Onboarding2" component={Onboarding1} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
// import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';

// import SplashScreen from './src/screens/SplashScreen.tsx';
// import Onboarding1 from './src/screens/Onboarding1.tsx';
// import Onboarding2 from './src/screens/Onboarding2.js';

// const Stack = createStackNavigator();

// export default function AppNavigator() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: false }}>
//         <Stack.Screen name="SplashScreen" component={SplashScreen} />
//         <Stack.Screen name="Onboarding1" component={Onboarding1} />
//         <Stack.Screen name="Onboarding2" component={Onboarding2} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './src/screens/SplashScreen';
import OnboardingNavigator from './OnboardingNavigator';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Onboarding" component={OnboardingNavigator} />
    </Stack.Navigator>
  );
}

