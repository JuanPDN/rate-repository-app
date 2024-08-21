import React from "react";
import Constants from "expo-constants";
import { StyleSheet, View, ScrollView } from "react-native";

import Text from "./Text";
import { Link } from "expo-router";

const styles = StyleSheet.create({
  conatainer: {
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#24292e",
  },
  link: {
    marginRight: 10,
    marginLeft: 10,
  },
});

const AppBar = () => {
  return (
    <View style={styles.conatainer}>
      <ScrollView horizontal>
        <Link href={"/"} style={styles.link}>
          <Text fontWeight={"bold"} style={{ color: "white" }}>
            Repositories
          </Text>
        </Link>
        <Link href={"/SigIn"} style={styles.link}>
          <Text fontWeight={"bold"} style={{ color: "white" }}>
            Sig In
          </Text>
        </Link>
      </ScrollView>
    </View>
  );
};

export default AppBar;
