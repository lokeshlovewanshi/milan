
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../Screens/Login/LoginScreen';
import SignUpScreen from '../Screens/Login/SignupScreen';
import WelcomeScreen from '../Screens/Login/WelcomeScreen';

const Stack = createStackNavigator();

const  LoginNavigation=()=> {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown:false}}/>
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default LoginNavigation