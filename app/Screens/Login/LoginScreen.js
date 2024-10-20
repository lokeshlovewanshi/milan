import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, HelperText } from 'react-native-paper';
import { Formik } from 'formik';
import * as Yup from 'yup';

const LoginScreen = () => {
  const LoginSchema = Yup.object().shape({
    identifier: Yup.string().required('Email or Username is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ identifier: '', password: '' }}
        validationSchema={LoginSchema}
        onSubmit={(values) => {
          console.log(values);
          // Handle login here (e.g., call an API to log the user in)
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
              label="Email or Username"
              value={values.identifier}
              onChangeText={handleChange('identifier')}
              onBlur={handleBlur('identifier')}
              style={styles.input}
              mode="outlined"
              autoCapitalize="none"
              autoComplete="off"
            />
            <HelperText type="error" visible={touched.identifier && errors.identifier}>
              {errors.identifier}
            </HelperText>

            <TextInput
              label="Password"
              value={values.password}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              style={styles.input}
              mode="outlined"
              secureTextEntry
            />
            <HelperText type="error" visible={touched.password && errors.password}>
              {errors.password}
            </HelperText>

            <Button mode="contained" onPress={handleSubmit} style={styles.submitButton}>
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
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  form: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    marginBottom: 10,
  },
  submitButton: {
    marginTop: 20,
  },
});

export default LoginScreen;
