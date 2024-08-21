import React from "react";
import { Pressable, View, StyleSheet } from "react-native";

import { Formik } from "formik";

import FormikTextInput from "../src/components/FormikTextInput";
import Text from "../src/components/Text";
import validationSchema from "../src/utils/validationScheme";

const onSubmit = (values) => {
  console.log(values);
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingBottom: 20,
  },
  btn: {
    backgroundColor: "#0366d6",
    borderRadius: 5,
    padding: 18,
    marginTop: 15,
    alignItems: "center",
    marginLeft: 20,
    marginRight: 20,
  },
});
const SigIn = () => {
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => (
          <View>
            <FormikTextInput name="username" placeholder="Username" />
            <FormikTextInput
              name="password"
              placeholder="Password"
              secureTextEntry
            />
            <Pressable style={styles.btn} onPress={handleSubmit}>
              <Text color={"white"} fontSize={"subheading"} fontWeight={"bold"}>
                Submit
              </Text>
            </Pressable>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default SigIn;
