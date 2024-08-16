import React from "react";
import Constants from 'expo-constants'
import { StyleSheet, View, TouchableWithoutFeedback } from "react-native";

import Text from './Text'

const styles =  StyleSheet.create({
    conatainer: {
        paddingTop: Constants.statusBarHeight,
        paddingBottom: 20,
        paddingLeft: 15,
        backgroundColor: '#24292e',
    }
})

const AppBar = () => {
    return (
        <View style={styles.conatainer}>
            <TouchableWithoutFeedback >
            <Text fontWeight={'bold'} style={{color: 'white'}}>Repositories</Text>
            </TouchableWithoutFeedback>
        </View>
    )
}

export default AppBar
    