import React, {useState} from 'react';
import { View, Linking, Text, StyleSheet, FlatList, Image, ImageBackground, Button } from 'react-native';


export default function SpecialtyHeros({navigation}){
    const[BasicHeros, setName] = useState([
        {
            id: 0,
            name: "'A' St. - Roast Beef & Cheddar",
            image: require('./img/mapsPhoto1.jpg'),
        },
        {
            id: 1,
            name:"'B' St. - Pastrami & Cheese",
            image: require('./img/mapsPhoto1.jpg'),
        },
        {
            id: 2,
            name:"'C' St. - Corned Beef & Cheese",
            image: require('./img/mapsPhoto1.jpg'),
        },
        {
            id: 3,
            name:"'I' St. - Pepperoni, Cappicola, & Provolone",
            image: require('./img/mapsPhoto1.jpg'),
        },
        {
            id: 4,
            name:"'N' St. - Ham, Turkey, Bacon, Swiss, & American",
            image: require('./img/mapsPhoto1.jpg'),
        },
        {
            id: 5,
            name:"'O' St. Ham, Salami, Cappicola, Prosciutto, & Provolone",
            image: require('./img/mapsPhoto1.jpg'),
    
        },
        {
            id: 6,
            name:"'X' St. Roast Beef, Turkey, & Cheddar",
            image: require('./img/mapsPhoto1.jpg'),
    
        },
        {
            id: 7,
            name:"'Y' St. Cappicola, Prosciutto, Cheddar & Monterey Jack",
            image: require('./img/mapsPhoto1.jpg'),
    
        },
        {
            id: 8,
            name:"'Z' St. Cappicola, Prosciutto, Cheddar & Monterey Jack",
            image: require('./img/mapsPhoto1.jpg'),
    
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
                <Button onPress={()=>{Linking.openURL('tel:119');}} title='Order Now!' color='green'></Button>
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