import React from 'react'
import { View, Text } from 'react-native';


export const Center=({children}) =>{
    return(
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
        {children}
            <Text>I am a login screen</Text>
        </View>
    )
}
