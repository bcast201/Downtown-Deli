import React from 'react'
import { View } from 'react-native';


export const Center=({}) =>{
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
