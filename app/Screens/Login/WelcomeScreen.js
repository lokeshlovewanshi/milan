import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text, IconButton } from "react-native-paper";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import SafeAreaScreen from "../../common/SafeAreaScreen";

WebBrowser.maybeCompleteAuthSession();

const WelcomeScree = ({ navigation }) => {
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: "YOUR_EXPO_CLIENT_ID",
    iosClientId: "YOUR_IOS_CLIENT_ID",
    androidClientId: "YOUR_ANDROID_CLIENT_ID",
  });

  React.useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;
      console.log("Google Authentication successful:", authentication);
    }
  }, [response]);

  return (
    <SafeAreaScreen>
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.textTitle}>Welcome to milan </Text>
        </View>
        <View style={styles.loginContainer}>
          <IconButton
            icon="google"
            mode="contained"
            onPress={() => promptAsync()}
            style={styles.googleButton}
            size={40}
            color="#4285F4"
          />
          <Text style={styles.googleButtonText}>Sign up with Google</Text>
          <Button
            mode="contained"
            onPress={() => navigation.navigate("Login")}
            style={styles.button}
          >
            Login
          </Button>
          <Button
            mode="contained"
            onPress={() => navigation.navigate("SignUp")}
            style={styles.button}
          >
            Go to Sign Up Page
          </Button>
        </View>
      </View>
    </SafeAreaScreen>
  );
};

const styles = StyleSheet.create({
  title: {
    marginTop: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  textTitle: {
    fontSize: 30,
    fontWeight: 10,
  },
  loginContainer: {
    paddingTop: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
  googleButton: {
    marginBottom: 10,
  },
  googleButtonText: {
    marginBottom: 20,
    fontSize: 16,
    color: "#4285F4",
  },
  button: {
    width: "80%",
    marginBottom: 16,
  },
});

export default WelcomeScree;
