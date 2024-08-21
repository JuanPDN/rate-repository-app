import React from "react";
import { TextInput as NativeTextInput, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 15,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 15,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#b8b8b8",
  },
  error: {
    borderColor: "#d73a4a",
  },
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style, styles.container, error && styles.error];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
