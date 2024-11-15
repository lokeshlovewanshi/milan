import { useContext } from "react";
import { StyleSheet } from "react-native";
import { DefaultTheme, PaperProvider } from "react-native-paper";
import LoginNavigation from "./app/navigations/LoginNavigation";
import Context, { UserContext } from "./app/store/Context";
import { View } from "react-native";
import SafeAreaScreen from "./app/common/SafeAreaScreen";

import { APP_ENV_NAME } from "@env";
import Constants from "expo-constants";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "tomato",
    secondary: "yellow",
  },
};

const MilanApp = () => {
  const { user, setUser } = useContext(UserContext);

  return <>{/* <LoginNavigation /> */}</>;
};
const App = () => {
  console.log("Environment:", Constants.expoConfig.extra);
  console.log("API URL:", APP_ENV_NAME);
  return (
    <PaperProvider theme={theme}>
      <Context>
        {/* <StatusBar style="auto" /> */}
        <MilanApp />
      </Context>
    </PaperProvider>
  );
};

export default App;
const styles = StyleSheet.create({});
