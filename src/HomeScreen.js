import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Button } from 'react-native';

export default function Home({navigation}){
    return ( 
         <ImageBackground source={require('./img/bigbellydeli.jpeg')} style={styles.container}>   
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Danny's Downtown Deli</Text>
                <Button title='Check out our Menu' onPress={() => navigation.navigate('Menu')}></Button>
            </View>
        </ImageBackground>
        
    );


}

const styles = StyleSheet.create({
container: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
},
title:{
    fontWeight: "bold",
    fontSize: 60
}
});