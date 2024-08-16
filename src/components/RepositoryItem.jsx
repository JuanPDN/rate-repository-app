import React from 'react';
import { View, Image, StyleSheet } from "react-native";

import Text from './Text';
import Stat from './Stat';

const RepositoryItem = ({item}) => {   

    const styles = StyleSheet.create({
        image: {
            width: 50,
            height: 50,
            borderRadius: 5
        },
        containerInfo: {
            flexDirection: 'row',
            gap: 20,
            padding: 10
        },
        card:{
            padding: 10,
            backgroundColor: 'white',
            borderRadius: 15
        },
        info: {
            flexDirection: 'column',
            gap: 8,
            alignItems: 'flex-start',
            flexShrink: 1
        },
        tag:{
            borderRadius: 5,
            padding: 5,
            backgroundColor: '#0366d6',
        }, stats : {
            padding: 10,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
        }
    })
    
    return (
        <View style={styles.card}>
            <View style={styles.containerInfo}>
                <Image source={{uri:item.ownerAvatarUrl}}  style={styles.image}/>
                <View style={styles.info}>
                    <Text fontWeight={'bold'} fontSize={'subheading'}>{item.fullName}</Text>
                    <Text color={'textSecundary'}>{item.description}</Text>
                    <View style={styles.tag}>
                        <Text color={'white'}>{item.language}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.stats}>
                <Stat label={'Stars'} value={item.stargazersCount}/>
                <Stat label={'Forks'} value={item.forksCount}/>
                <Stat label={'Reviews'} value={item.reviewCount}/>
                <Stat label={'Rating'} value={item.ratingAverage}/>
            </View>
        </View>
    )
}

export default RepositoryItem