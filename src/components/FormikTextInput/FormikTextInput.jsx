import { StyleSheet } from "react-native";
import { useField } from "formik";

import TextInput from "../TextInput/TextInput";
import Text from "../Text/Text";

const styles = StyleSheet.create({
  input: {
    height: 40,
  },
  errorText: {
    marginTop: 5,
    color: "red",
  },
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <>
      <TextInput
        style={styles.input}
        onChangeText={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;
