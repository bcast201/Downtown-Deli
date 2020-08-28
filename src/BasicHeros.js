import React, {useState} from 'react';
import { View, Text, StyleSheet, FlatList, Image, ImageBackground, Button } from 'react-native';


export default function BasicHeros({navigation}){
    const[BasicHeros, setName] = useState([
        {
            id: 0,
            name: "Ham & Swiss",
            image: require('./img/bigbellydeli.jpeg'),
        },
        {
            id: 1,
            name:"Ham, Salami, Provalone",
            image: require('./img/bigbellydeli.jpeg'),
        },
        {
            id: 2,
            name:"Ham & Turkey",
            image: require('./img/bigbellydeli.jpeg'),
        },
        {
            id: 3,
            name:"Pepperoni & Provolone",
            image: require('./img/bigbellydeli.jpeg'),
        },
        {
            id: 4,
            name:"Seafood",
            image: require('./img/bigbellydeli.jpeg'),
        },
        {
            id: 5,
            name:"Tuna",
            image: require('./img/bigbellydeli.jpeg'),
    
        },
        {
            id: 6,
            name:"Turkey & Hard Salami",
            image: require('./img/bigbellydeli.jpeg'),
    
        },
        {
            id: 7,
            name:"Pepperoni & Cheese",
            image: require('./img/bigbellydeli.jpeg'),
    
        },
        {
            id: 8,
            name:"Veggie",
            image: require('./img/bigbellydeli.jpeg'),
    
        },
        {
            id: 9,
            name:"3 Cheese",
            image: require('./img/bigbellydeli.jpeg'),
    
        },
    ]);   
     
    
    
    
    return(
        <ImageBackground source={require('./img/bigbellydeli.jpeg')} style={styles.container}>   
         <View style={styles.container}>
         <FlatList
             data={BasicHeros}
             renderItem={({ item }) => (   
                    <View style={styles.item}>
                    <Image style={styles.image} source={item.image} />           
                     <Text style={styles.title}>
                         {item.name}
                     </Text>
                     </View>
             )}            
             />
            <View style={styles.button}>
                <Button title='Order Now!' color='green'></Button>
            </View>
         </View>
         </ImageBackground>
 )
}


const styles = StyleSheet.create({
 container: {

 backgroundColor: 'rgba(0, 0, 0, .5)',
 paddingTop: 10,
 paddingHorizontal: 10,
 alignItems: 'center',
 },
 item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: '#c2d148',
    flex: 1,
    flexDirection: 'row',
    borderRadius: 5,
    padding: 10,
},
button:{
    width: "90%",
    margin: 10,
    backgroundColor: "green"
},
title: {
    fontSize: 24,
    flexWrap: 'wrap',
    flexShrink: 1,
    paddingLeft: 10,
    paddingTop: 30,
    paddingRight: 100

},
descriptionText: {
    fontSize: 14
},
 image: {
     width: 100,
     height: 100,
     borderRadius: 10,
 }
});