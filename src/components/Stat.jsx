import React from "react";
import { View, StyleSheet } from "react-native";

import Text from "./Text";

const formatCount = (count) => count >= 1000 
        ? `${(count / 1000).toFixed(1)}k` 
        : count

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        gap: 5,
        alignItems: 'center', 
    }
})


const Stat = ({ label, value }) => {
    return (
        <View style={styles.container}>
            <Text>{formatCount(value)}</Text>
            <Text fontWeight={'bold'} style={styles.label}>{label}</Text>
        </View>
    )
}

export default Stat