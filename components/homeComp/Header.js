import React,{useState} from 'react'
import { View, Text } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native"
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Font from "expo-font";
import { AppLoading } from "expo";

 

// const fetchFonts = () => {
//     console.log("hudaixa")
//     return Font.loadAsync({
//       billabong: require('..../assets/fonts/Playball-Regular.ttf'),
//     });
//   };
//   "
  export default function Header() {
    const navigation = useNavigation() 
    // const [fontLoaded, setFontLoaded] = useState(false);
    // if (!fontLoaded) {
    //     return (
    //       <AppLoading
    //         startAsync={fetchFonts}
    //         onFinish={() => setFontLoaded(true)}
    //       />
    //     );
    //   }
    return (
        <View  style={{color:"white",display:"flex",flexDirection:"row",justifyContent:"space-between",paddingHorizontal:10,backgroundColor:"black", padding:15,}}>
            <Text  style={{color:"white",fontSize:20,marginLeft:20 ,
            // fontFamily: "billabong",
            }}>Instagram</Text>
            <TouchableOpacity 
            onPress={()=>navigation.navigate("Chat")}
            >
                <AntDesign name="message1" size={24} color="white" />
            </TouchableOpacity>
        </View>
    )
}
