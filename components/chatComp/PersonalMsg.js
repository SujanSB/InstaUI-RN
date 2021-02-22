import React from 'react'
import { View, Text,Image } from 'react-native'
import { Feather } from '@expo/vector-icons';

export default function PersonalMsg(props) {
    return (
        <View style={{padding:10,backgroundColor:"black",}}>
            <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                <View style={{display:"flex",flexDirection:"row",width:200,justifyContent:"space-between"}}>
                    {props.item.sstory ?
                    <Image source={{uri:  props.item.img}} style={{height:62,width:62,marginRight:10,marginBottom:5,borderWidth:2,borderColor:"red",borderRadius:31}}/> :
                    <Image source={{uri:  props.item.img}} style={{height:62,width:62,marginRight:10,marginBottom:5,borderWidth:2,borderColor:"gray",borderRadius:31}}/> 
                    
                }
    <View style={{flexDirection:"column",marginLeft:8,marginTop:3}}>
    <Text style={{color:"white",fontSize:16,textAlign:"left"}}>{props.item.name}</Text>
    <Text style={{color:"white",fontSize:13}}>{props.item.msg}</Text>
    </View>
                </View>
            <Feather name="camera" size={24} color="#b3b3b3" />
            </View>
        </View>
    )
}
