import React from "react";
import Constants from 'expo-constants'
import { StyleSheet, View, TouchableWithoutFeedback, ScrollView } from "react-native";

import Text from './Text'
import { Link } from "expo-router";

const styles =  StyleSheet.create({
    conatainer: {
        paddingTop: Constants.statusBarHeight,
        paddingBottom: 20,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#24292e',
    },link: {
        color: 'white',
        fontWeight: 'bold',
        margin: 10
    }
})

const AppBar = () => {
    return (
        <View style={styles.conatainer}>
            <ScrollView horizontal >
                <TouchableWithoutFeedback >
                    <Link href={'/'} fontWeight={'bold'} style={styles.link}>Repositories</Link>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback >
                    <Link href={'/SigIn'} fontWeight={'bold'} style={styles.link}>Sig In</Link>
                </TouchableWithoutFeedback>
            </ScrollView>
        </View>
    )
}

export default AppBar
    