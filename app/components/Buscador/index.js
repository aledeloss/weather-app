import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import SearchBar from 'react-native-elements/dist/searchbar/SearchBar-ios'

export const Buscador = ({ navigation }) => {
    
    const [search, setSearch] = useState('') 

    const styles = StyleSheet.create({
        searchBar: {
            marginBottom: 20,
        }
    })
    
    return (
        <View>
            <SearchBar 
            placeholder='Buscar ciudad'
            onChangeText={(e) => setSearch(e)}
            value={search}
            constainerStyle={styles.searchBar}
            />
            <Text>{search}</Text>
        </View>
    )
}
