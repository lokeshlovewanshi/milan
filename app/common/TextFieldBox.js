import { useFormikContext } from "formik";
import { StyleSheet, View } from "react-native";
import { HelperText, TextInput } from "react-native-paper";

const TextFieldBox = ({ param, label, ...otherParams }) => {
  const { handleChange, handleBlur, values, errors, touched } =
    useFormikContext();
  const hasError = touched[param] && errors[param];
  return (
    <View style={styles.box}>
      <TextInput
        label={label}
        value={values[param]}
        onChangeText={handleChange(param)}
        onBlur={handleBlur(param)}
        activeOutlineColor={hasError ? "red" : "grey"}
        style={[styles.input]}
        mode="outlined"
        {...otherParams}
      />
      <HelperText type="error" visible={hasError}>
        {errors[param]}
      </HelperText>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    // marginBottom: 10,
  },
  input: {
    backgroundColor: "white",
  },
});

export default TextFieldBox;
