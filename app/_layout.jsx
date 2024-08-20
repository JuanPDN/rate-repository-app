import { View } from "react-native"
import { Slot } from "expo-router"

import AppBar from "../src/components/AppBar"

export default function Layout({ children }) {
    return (
        <View>
            <AppBar/>
            <Slot />
        </View>
    )
}