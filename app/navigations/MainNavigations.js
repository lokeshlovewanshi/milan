// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { Provider as PaperProvider } from 'react-native-paper';
import WelcomeScreen from '../Screens/WelcomeScreen';
import SignUpScreen from '../Screens/Login/SignupScreen';

// const Stack = createNativeStackNavigator();

// const MainNavigations = () => {
//   return (
//     // Wrap with PaperProvider to ensure Paper components have the correct theme context
//     // <PaperProvider>
//         <Stack.Navigator>
//           <Stack.Screen 
//             name="Welcome" 
//             component={WelcomeScreen} 
//             // options={{ headerShown: false }} 
//             options={{title:"Welcome to app"}}
//           />
//           <Stack.Screen 
//             name="Login" 
//             component={WelcomeScreen} 
//             // options={{ headerShown: false }} 
//           />
//           <Stack.Screen 
//             name="SignUp" 
//             component={SignUpScreen}  
//             options={{ title: 'Sign Up' }} 
//           />
//         </Stack.Navigator>
//     // </PaperProvider>
//   );
// }

// export default MainNavigations;


import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const  MainNavigations=()=> {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      {/* <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} /> */}
    </Stack.Navigator>
  );
}

export default MainNavigations