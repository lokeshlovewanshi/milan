import { useContext } from "react";
import { UserContext } from "../store/Context";
import { removeToken } from "./secureStorage";

const Auth = () => {
  const { setUser } = useContext(UserContext);

  const login = async (authToken) => {
    const user = await jwtDecode(authToken);
    storeToken(authToken);
    setUser(user);
  };

  const logout = () => {
    removeToken();
    setUser(null);
  };
  return { login, logout };
};

export default Auth;
