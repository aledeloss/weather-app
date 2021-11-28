import React from "react";
import { View, Text, Image, StyleSheet } from 'react-native'
import { Card, ListItem} from 'react-native-elements'

export default function AboutUs() {
    const users=[
        {
            name: 'Alejandra De Los Santos',
            subtitle: 'Web Developer'
          },
          {
            name: 'Norberto Llopiz',
            subtitle: 'Web Developer'
          },
          {
            name: 'Verónica Monzón',
            subtitle: 'Web Developer'
          },
          
    ];

 return(
    <Card >
    <Card.Title style={styles.title}>Grupo número 2</Card.Title>
    <Card.Divider/>
    {
      users.map((u, i) => {
        return (
          <View key={i} >
            <Text style={styles.name}>{u.name}</Text>
            <Text style={styles.subtitle}>{u.subtitle}</Text>
            <Card.Divider/>
          </View>
        );
      })
    }
  </Card>
  
 );

}
const styles = StyleSheet.create({

    name: {
     fontSize:20,  
     textAlign:'center', 
    },
    subtitle:{
        textAlign:'center', 
    },
    title:{
      fontSize:22,
      fontWeight:'bold',
      
    }
  });