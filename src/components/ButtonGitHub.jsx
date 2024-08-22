import React from "react";
import { Pressable, StyleSheet } from "react-native";

import Text from "./Text";

const styles = StyleSheet.create({
  btn: {
    padding: 10,
    backgroundColor: "#0366d6",
    borderRadius: 5,
    marginTop: 10,
    alignItems: "center",
  },
});
const ButtonGitHub = () => {
  return (
    <Pressable style={styles.btn}>
      <Text fontWeight={"bold"} color={"white"}>
        Open in GitHub
      </Text>
    </Pressable>
  );
};

export default ButtonGitHub;
