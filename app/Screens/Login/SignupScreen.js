import { Formik } from "formik";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import * as Yup from "yup";
import TextFieldBox from "../../common/TextFieldBox";
import Auth from "../../Authentication/authentication";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ikxva2VzaCBMb3Zld2Fuc2hpIiwiZW1haWxJZCI6Imxva2VzaGxvdmV3YW5zaGk5OEBnbWFpbC5jb20iLCJpYXQiOjE1MTYyMzkwMjJ9.C2OQtGOmg-1CCcgbc5UxChvKcuuAi5AZAk9iM6OELEU";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  gotra: Yup.string().required("Gotra is required"),
  dateOfBirth: Yup.date().required("Date of birth is required"),
  fatherName: Yup.string().required("Father's name is required"),
  motherName: Yup.string().required("Mother's name is required"),
  village: Yup.string().required("Village is required"),
  aboutStudy: Yup.string(),
  additionalInfo: Yup.string(),
  workingStatus: Yup.string().required("Working status is required"),
  aboutFamily: Yup.string(),
});

const initialValues = {
  firstName: "",
  lastName: "",
  gotra: "",
  dateOfBirth: "",
  fatherName: "",
  motherName: "",
  phoneNo: "",
  address: "",
};

const SignUpScreen = ({ navigations }) => {
  const { login } = Auth();

  const handleSignUp = (values, action) => {
    console.log(values);
    login(token);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={handleSignUp}
      >
        {({ handleSubmit }) => (
          <View style={styles.form}>
            <TextFieldBox label="First Name" param="firstName" />
            <TextFieldBox param="lastName" label="Last Name" />
            <TextFieldBox param="gotra" label="Gotra" />
            <TextFieldBox param="dateOfBirth" label="Date of Birth" />
            <TextFieldBox param="fatherName" label="Father's Name" />
            <TextFieldBox param="motherName" label="Mother's Name" />
            <TextFieldBox
              param="phoneNo"
              keyboardType="number-pad"
              label="Phone No"
            />
            <TextFieldBox
              param="address"
              label="Address"
              multiline
              numberOfLines={3}
            />
            <Button
              mode="contained"
              onPress={handleSubmit}
              style={styles.submitButton}
            >
              Submit
            </Button>
          </View>
        )}
      </Formik>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  form: {
    flex: 1,
  },
  input: {},
  submitButton: {
    marginTop: 20,
  },
});

export default SignUpScreen;
