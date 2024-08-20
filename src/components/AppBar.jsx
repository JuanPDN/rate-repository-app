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
        marginRight: 10,
        marginLeft: 10
    }
})

const AppBar = () => {
    return (
        <View style={styles.conatainer}>
            <ScrollView horizontal >
                <TouchableWithoutFeedback >
                    <Link asChild href={'/'} style={styles.link}>
                        <Text fontWeight={'bold'} style={{color: 'white'}}>Repositories</Text>
                    </Link>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback >
                    <Link href={'/SigIn'} asChild style={styles.link} >
                        <Text fontWeight={'bold'} style={{color: 'white'}}>Sig In</Text>
                    </Link>
                </TouchableWithoutFeedback>
            </ScrollView>
        </View>
    )
}

export default AppBar
    