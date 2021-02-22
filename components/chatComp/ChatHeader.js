import React from "react";

import { Text,TextInput, View, } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native"
import { Entypo } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";
export default function ChatHeader() {
  const navigation = useNavigation() 

  return (
    <View style={{ backgroundColor: "#1a1a1a" }}>
      <View
        style={{
          height: 55,
          color: "white",
          margin: 0,
          padding: 10,
          display: "flex",
          flexDirection: "row",
          backgroundColor: "#1a1a1a",
          justifyContent: "space-between",
          alignItems: "center",
          levation: 4,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}> 
        <AntDesign name="arrowleft" size={28} color="white" />
        </TouchableOpacity>
       
       <Text style={{display:"flex",fontSize:22,color:"white",position:"absolute",left:50,flexDirection:"row"}}>invalid_sb 

       <Entypo name="chevron-small-down" size={22} color="white" />

       </Text>
        <View style={{flexDirection:"row",width:80,justifyContent:"space-between"}}>
       <Entypo name="list" size={30} color="white" />
       <SimpleLineIcons name="note" size={24} color="white" />
        </View>
      </View>
    </View>
  );
}
