import { View } from "react-native";
import { Stack } from "expo-router";

import AppBar from "../src/components/AppBar";

export default function Layout() {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </View>
  );
}
