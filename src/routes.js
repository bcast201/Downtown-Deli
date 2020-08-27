import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer} from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import Home from './HomeScreen'
import Menu from './MenuScreen'



function HomeScreen() {
    <Home />
}

function Menu(){
    return(
        <Center>
            <Text>I am a register screen</Text>
        </Center>
    )
}

const Stack = createStackNavigator()

function Routes() {
    return (
        <NavigationContainer initialRouteName='Register'>
            <Stack.Navigator>
                <Stack.Screen name="HomeScreen" component={HomeScreen}/>
                <Stack.Screen name='Menu' component={Menu} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}