import React from 'react'
import { View, Text,Image } from 'react-native'

export default function Profilepic() {
    return (
        <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginTop:10,marginLeft:10}}>
            <View >
            <Image source={{uri:  "https://instagram.fktm6-1.fna.fbcdn.net/v/t51.2885-19/s150x150/122776188_650006025678209_7178406714170148208_n.jpg?_nc_ht=instagram.fktm6-1.fna.fbcdn.net&_nc_ohc=RMRJ1XtiRGoAX-yYGMW&tp=1&oh=d8987c8f62b4ec58c2dec3ad08fa5b55&oe=5FE9A18C"}} style={{height:96,width:96,marginRight:10,marginBottom:5,borderRadius:48}}/>
            </View>
            <View style={{flexDirection:"row",position:"relative",width:'66%',justifyContent:"space-between"}}>
                <View style={{alignItems:"center"}} >
                    <Text style={{color:"white",fontSize:20}}>25</Text>
                    <Text style={{width:'100%',color:"white",fontSize:16}}numberOfLines={1}>Posts</Text>
                </View>
                <View style={{alignItems:"center"}}>
                    <Text style={{color:"white",fontSize:20}}>524</Text>
                    <Text style={{width:'98%',color:"white",fontSize:16}}numberOfLines={1}>Followers</Text>

                </View>
                <View style={{alignItems:"center"}}>
                    <Text style={{color:"white",fontSize:20}}>456</Text>
                    <Text style={{width:'96%',color:"white",fontSize:16}}numberOfLines={1}>Following</Text>

                </View>
            </View>
        </View>
    )
}
