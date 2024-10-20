import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { TextInput, Button, Text, HelperText } from 'react-native-paper';
import { Formik } from 'formik';
import * as Yup from 'yup';

const SignUpScreen = () => {
  const SignupSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    gotra: Yup.string().required('Gotra is required'),
    dateOfBirth: Yup.date().required('Date of birth is required'),
    fatherName: Yup.string().required("Father's name is required"),
    motherName: Yup.string().required("Mother's name is required"),
    village: Yup.string().required('Village is required'),
    aboutStudy: Yup.string(),
    additionalInfo: Yup.string(),
    workingStatus: Yup.string().required('Working status is required'),
    aboutFamily: Yup.string(),
  });

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          gotra: '',
          dateOfBirth: '',
          fatherName: '',
          motherName: '',
          village: '',
          aboutStudy: '',
          additionalInfo: '',
          workingStatus: '',
          aboutFamily: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          console.log(values);
          // You can handle the form submission here (e.g., send to an API)
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View style={styles.form}>
            <TextInput
              label="First Name"
              value={values.firstName}
              onChangeText={handleChange('firstName')}
              onBlur={handleBlur('firstName')}
              style={styles.input}
              mode="outlined"
            />
            <HelperText type="error" visible={touched.firstName && errors.firstName}>
              {errors.firstName}
            </HelperText>

            <TextInput
              label="Last Name"
              value={values.lastName}
              onChangeText={handleChange('lastName')}
              onBlur={handleBlur('lastName')}
              style={styles.input}
              mode="outlined"
            />
            <HelperText type="error" visible={touched.lastName && errors.lastName}>
              {errors.lastName}
            </HelperText>

            <TextInput
              label="Gotra"
              value={values.gotra}
              onChangeText={handleChange('gotra')}
              onBlur={handleBlur('gotra')}
              style={styles.input}
              mode="outlined"
            />
            <HelperText type="error" visible={touched.gotra && errors.gotra}>
              {errors.gotra}
            </HelperText>

            <TextInput
              label="Date of Birth"
              value={values.dateOfBirth}
              onChangeText={handleChange('dateOfBirth')}
              onBlur={handleBlur('dateOfBirth')}
              style={styles.input}
              mode="outlined"
            />
            <HelperText type="error" visible={touched.dateOfBirth && errors.dateOfBirth}>
              {errors.dateOfBirth}
            </HelperText>

            <TextInput
              label="Father's Name"
              value={values.fatherName}
              onChangeText={handleChange('fatherName')}
              onBlur={handleBlur('fatherName')}
              style={styles.input}
              mode="outlined"
            />
            <HelperText type="error" visible={touched.fatherName && errors.fatherName}>
              {errors.fatherName}
            </HelperText>

            <TextInput
              label="Mother's Name"
              value={values.motherName}
              onChangeText={handleChange('motherName')}
              onBlur={handleBlur('motherName')}
              style={styles.input}
              mode="outlined"
            />
            <HelperText type="error" visible={touched.motherName && errors.motherName}>
              {errors.motherName}
            </HelperText>

            <TextInput
              label="Village"
              value={values.village}
              onChangeText={handleChange('village')}
              onBlur={handleBlur('village')}
              style={styles.input}
              mode="outlined"
            />
            <HelperText type="error" visible={touched.village && errors.village}>
              {errors.village}
            </HelperText>

            <TextInput
              label="About Study (Optional)"
              value={values.aboutStudy}
              onChangeText={handleChange('aboutStudy')}
              onBlur={handleBlur('aboutStudy')}
              style={styles.input}
              mode="outlined"
            />

            <TextInput
              label="Additional Information"
              value={values.additionalInfo}
              onChangeText={handleChange('additionalInfo')}
              onBlur={handleBlur('additionalInfo')}
              style={styles.input}
              mode="outlined"
            />

            <TextInput
              label="Working Status (Job or Not)"
              value={values.workingStatus}
              onChangeText={handleChange('workingStatus')}
              onBlur={handleBlur('workingStatus')}
              style={styles.input}
              mode="outlined"
            />
            <HelperText type="error" visible={touched.workingStatus && errors.workingStatus}>
              {errors.workingStatus}
            </HelperText>

            <TextInput
              label="About Family Information"
              value={values.aboutFamily}
              onChangeText={handleChange('aboutFamily')}
              onBlur={handleBlur('aboutFamily')}
              style={styles.input}
              mode="outlined"
            />

            <Button mode="contained" onPress={handleSubmit} style={styles.submitButton}>
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
    backgroundColor: '#fff',
  },
  form: {
    flex: 1,
  },
  input: {
    marginBottom: 10,
  },
  submitButton: {
    marginTop: 20,
  },
});

export default SignUpScreen;
