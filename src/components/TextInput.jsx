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
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style, styles.container];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
