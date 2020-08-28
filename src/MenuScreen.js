import React, {useState} from 'react';
import { View, Text, StyleSheet, FlatList, ImageBackground } from 'react-native';

const image = { uri: "https://i.imgur.com/7UCApfC.jpg" };

export default function Menu({navigation}){
       const[sandwiches, setName] = useState([
        {
            id: 0,
            name: "Basic Heros",
            description: 'Plain and sweet!',
            image: "./img/large1.jpg",
        },
        {
            id: 1,
            name:"Specialty Heros ",
            description:'Description goes here',
            image: "/assets/images/chrome-river.jpg",
        },
        {
            id: 2,
            name:"Hot Heros",
            description: 'Fresh out of the ove, hot and ready!',
            image: "/assets/images/breadcrumb-trail.jpg",
        },
        {
            id: 3,
            name:"Magnificent Seven",
            description: 'Seven of the best sandwiches Lincoln has to offer!',
            image: "/assets/images/redux-woods.jpg",
        },
        {
            id: 4,
            name:"Danny's Salads",
            description: 'Description goes here',
            image: "/assets/images/redux-woods.jpg",
        },
        {
            id: 5,
            name:"Danny's Soups",
            description: 'Description goes here',
            image: "/assets/images/redux-woods.jpg",
    
        }
    ]);    
        
       
       
       
       return(
        <ImageBackground source={require('./img/bigbellydeli.jpeg')} style={styles.container}>    
            <View style={styles.container}>
                <FlatList
                    data={sandwiches}
                    renderItem={({ item }) => (
                            <View style={styles.item}>
                            <Text style={styles.title} onPress={() => navigation.navigate('BasicHeros')}>
                                {item.name}
                            </Text>
                            <Text style={styles.descriptionText}>
                                {item.description}
                            </Text>
                            </View>

                )}/>
            </View>
            </ImageBackground>
    )
}

  const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, .5)',
    paddingTop: 40,
    paddingHorizontal: 20
    },
    item: {
        marginTop: 24,
        padding: 30,
        backgroundColor: '#c2d148',
    },
    title: {
        fontSize: 24
    },
    descriptionText: {
        fontSize: 14
    }
});
