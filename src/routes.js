import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme,} from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import Home from './HomeScreen'
import Menu from './MenuScreen'
import BasicHeros from './BasicHeros'


const Stack = createStackNavigator()

function Routes() {
    return (
        <NavigationContainer initialRouteName='Homescreen'>
            <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: 'green',
        },
        headerTintColor: '#ffff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },}}>
                <Stack.Screen name="Danny's Downtown Deli" component={Home}/>
                <Stack.Screen name='Menu' component={Menu} />
                <Stack.Screen name='BasicHeros' component={BasicHeros} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes