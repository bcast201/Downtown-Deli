import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Button } from 'react-native';

export default function Home({navigation}){
    return ( 
         <ImageBackground source={require('./img/bigbellydeli.jpeg')} style={styles.container}>   
            <View style={styles.container}>
                <Text style={styles.title}>Danny's Downtown Deli</Text>
                <View style={styles.button}>
                    <Button color='green' title='Check out our Menu!' onPress={() => navigation.navigate('Menu')}></Button>
                </View>
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
    fontSize: 60,
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
},
button:{
    paddingTop: 50
}
});