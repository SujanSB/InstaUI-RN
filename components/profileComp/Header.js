import React from 'react'
import { View, Text } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
export default function Header() {
    return (
        <View  style={{color:"white",display:"flex",flexDirection:"row",justifyContent:"space-between",paddingHorizontal:10,backgroundColor:"black", padding:15,}}>
            <View style={{display:"flex",flexDirection:"row",width:180}}>
            <Text  style={{color:"white",fontSize:25,marginLeft:20}}>invalid_sb</Text>
            <Entypo name="chevron-small-down" size={24} color="white" style={{marginTop:10}} />
            </View>
            <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",width:80}}>
            <MaterialIcons name="add" size={34} color="white" />
            <FontAwesome name="bars" size={24} color="white" />
            </View>
        </View>
    )
}
