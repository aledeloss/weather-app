import React from 'react'
import { View, Text, StyleSheet } from "react-native"
import { Icon } from "react-native-elements";

export default function FavoriteItem ({ number, cityName }) {

    const styles = StyleSheet.create({
        cityLine: {
            width: '100%',
            flex: 0.3,
            borderWidth: 1,
            borderBottomColor: 'blue',
            flexDirection: 'row',
            height: 'auto',
            padding: 2,
            margin: 1,
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        cityData: {
            width: '90%',
            flexDirection: 'row'
        },
        cityNumber: {
            width: '10%'
        }
    })

    return (
        <View style={styles.cityLine}>
            <View style={styles.cityData}>                
            <Text style={styles.cityNumber}>{number}</Text>
            <Text>{cityName}</Text>
            </View>
            <Icon type="material-community" name='trash-can-outline' size={22} color='red' />
        </View>
    )
}
