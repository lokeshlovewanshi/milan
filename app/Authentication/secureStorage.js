import * as SecureStore from "expo-secure-store";
import { jwtDecode } from "jwt-decode";

export const storeToken = async (authToken) => {
  try {
    await SecureStore.setItemAsync("token", authToken);
  } catch {
    console.log("there is some error in storing token");
  }
};

export const getToken = async () => {
  try {
    return await SecureStore.getItemAsync("token");
  } catch {
    console.log("there is some error in getting token");
    return null;
  }
};

export const getUser = async () => {
  try {
    const authToken = await getToken();
    if (!authToken) return null;
    return jwtDecode(authToken);
  } catch {
    console.log("There is no some error in decode token");
    return null;
  }
};

export const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync("token");
  } catch {
    console.log("There is some error in delete token ");
  }
};
