import { Formik } from "formik";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";
import * as Yup from "yup";
import TextFieldBox from "../../common/TextFieldBox";
import { storeToken } from "../../Authentication/secureStorage";
import Auth from "../../Authentication/authentication";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ikxva2VzaCBMb3Zld2Fuc2hpIiwiZW1haWxJZCI6Imxva2VzaGxvdmV3YW5zaGk5OEBnbWFpbC5jb20iLCJpYXQiOjE1MTYyMzkwMjJ9.C2OQtGOmg-1CCcgbc5UxChvKcuuAi5AZAk9iM6OELEU";

const LoginSchema = Yup.object().shape({
  identifier: Yup.string().required("Email or Username is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const LoginScreen = () => {
  const { login } = Auth();

  const handleLogin = (values, action) => {
    console.log(values);
    login(token);
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ identifier: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={handleLogin}
      >
        {({ handleSubmit }) => (
          <View style={styles.form}>
            <TextFieldBox
              param="identifier"
              label="Email or Username"
              autoCapitalize="none"
              autoComplete="off"
            />
            <TextFieldBox param="password" label="Password" secureTextEntry />
            <Button
              mode="contained"
              onPress={handleSubmit}
              style={styles.submitButton}
            >
              Login
            </Button>
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 200,
    padding: 16,
    backgroundColor: "#fff",
  },
  form: {
    justifyContent: "center",
  },
  input: {},
  submitButton: {
    marginTop: 20,
  },
});

export default LoginScreen;
