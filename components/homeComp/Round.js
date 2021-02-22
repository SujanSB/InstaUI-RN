import React from 'react'
import { View,Image, Text } from 'react-native'

export default function Round(props) {
    const {item}=props
    console.log(item.img)
    return (
        <View  >
            {props.item.id==1 ?
            <View style={{flexDirection:"row"}}>
                <Image source={{uri:  props.item.img}} style={{height:74,width:74,marginRight:10,marginBottom:5,borderWidth:2,borderColor:"gray",borderRadius:37}}/> 
                <Text style={{position:"absolute",left:53,fontSize:10,textAlign:"center",justifyContent:"center",bottom:5,backgroundColor:"#ccffcc",height:15,width:15,borderRadius:7}} >+</Text>
            </View>:
            <Image source={{uri:  props.item.img}} style={{height:74,width:74,marginRight:10,marginBottom:5,borderWidth:2,borderColor:"#ff3300",borderRadius:37}}/>
        }

    <Text style={{textAlign:"center",color:"white",width:80}} numberOfLines={1}>{item.name}</Text>
        </View>
    )
}
