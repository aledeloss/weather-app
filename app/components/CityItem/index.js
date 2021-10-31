import React from 'react'
import { View, Text, StyleSheet } from "react-native"
import { Icon } from "react-native-elements";

export const CityItem = ({ number, cityName }) => {

    const styles = StyleSheet.create({
        cityItem: {
            width: '100%',
            backgoundColor: 'green',
            border: 'solid 1px blue'
        }
    })

    return (
        <View style={styles.cityItem}>
            <Text>{number}</Text>
            <Text>{cityName}una ciudad</Text>
            <Icon type="material-community" name='trash-can-outline' size={22} color='red' />;
        </View>

    )
}
