import {View, Text, Image} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useEffect } from 'react'

export default function OrderPrepairing(){
    const navigation = useNavigation()
    useEffect(()=>{;
        setTimeout(()=>{
            //
            navigation.navigate('Delivery');
        },3000)
    },[])
    return(
        <View className="flex-1 bg-white justify-center items-center">
            <Image source={require('../assets/images/delivery.gif')} className="h-80 w-80"/>

            <Text>OrderPrepairing</Text>
        </View>
    )
}