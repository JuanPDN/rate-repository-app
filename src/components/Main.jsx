import React from 'react';
import { StyleSheet, View } from "react-native";

import RespositoryList from './RepositoryList';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e1e4e8',
        flexGrow: 1,
        flexShrink: 1,
    }
})

const Main = () => {
    return (
        <View style={styles.container}>
            <RespositoryList />
        </View>
    )
}

export default Main