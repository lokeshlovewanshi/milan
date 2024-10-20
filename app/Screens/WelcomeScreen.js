import React from 'react';
import { Text } from 'react-native-paper';

// WebBrowser.maybeCompleteAuthSession();

// export default function WelcomeScreen({ navigation }) {
//   const [request, response, promptAsync] = Google.useAuthRequest({
//     expoClientId: 'YOUR_EXPO_CLIENT_ID',
//     iosClientId: 'YOUR_IOS_CLIENT_ID',
//     androidClientId: 'YOUR_ANDROID_CLIENT_ID',
//   });

//   React.useEffect(() => {
//     if (response?.type === 'success') {
//       const { authentication } = response;
//       console.log('Google Authentication successful:', authentication);
//       // Handle successful Google login here (e.g., navigate or save token)
//     }
//   }, [response]);

//  console.log(navigation)
//   return (
//     <View style={styles.container}>
//       <IconButton 
//         icon="google" 
//         mode="contained" 
//         onPress={() => promptAsync()} 
//         style={styles.googleButton} 
//         size={40}
//         color="#4285F4"
//       />
//       <Text style={styles.googleButtonText}>Sign up with Google</Text>
//       <Button 
//         mode="contained" 
//         onPress={() => navigation.navigate('SignUp')} 
//         style={styles.signupButton}
//       >
//         Go to Sign Up Page
//       </Button>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//   },
//   googleButton: {
//     marginBottom: 10,
//   },
//   googleButtonText: {
//     marginBottom: 20,
//     fontSize: 16,
//     color: '#4285F4',
//   },
//   signupButton: {
//     width: '80%',
//   },
// });

const WelcomeScreen=()=>{
  return <Text>thtiyhtruiy irtuyhuirtrtyrtyurthyrtioyrtioyomirtuyimtryuotrjyitruyitryuitryuiortyhoitjhijoihjtriojhiortjhiortjhjrtiohjitrjhtirjhitrhtrjhj</Text>
}
export default WelcomeScreen
