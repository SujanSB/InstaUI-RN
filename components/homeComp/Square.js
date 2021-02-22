import React,{useState} from 'react'
import { View, Text,Image } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';


export default function Square(props) {
    const [count,setCount]= useState(0)
    const [you,setYou]=useState('')
    const [clicked,setClicked]=useState(false)

    const likeHandler= ()=>{
        setCount(count+1);
        setClicked(true)
        setYou("You")
        console.log("button clicked")
    }
    const dislikeHandler= ()=>{
        setCount(count-1);
        setClicked(false)
        setYou("")
        console.log("button clicked")
    }
    return (
        <View style={{flex:1,borderWidth:0.3,borderBottomColor:"teal"}}>
            <View style={{flexDirection:"row",justifyContent:"space-between",alignContent:"center",alignItems:"center",margin:8}}>
            <Image source={{uri: props.item.pimg}} style={{height:36,width:36,borderRadius:18,borderColor:"#ff1a1a",borderWidth:1}}/>
    <Text style={{color:'white',justifyContent:"center",position:'absolute',marginLeft:50,fontWeight:"bold"}}>{props.item.name}</Text>
    <Entypo name="dots-three-vertical" size={20} color="white" />
            </View>
            <Image source={{uri: props.item.uimg}} style={{height:360,width:'100%',padding:10,}}/>
            
            <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",margin:10,}}>
                <View style={{flexDirection:"row",justifyContent:"space-between",width:"33%"}}>
                {clicked ?<Text><AntDesign name="heart" size={24} color="red" onPress={dislikeHandler}/></Text> :
                   <Text><AntDesign name="hearto" size={24} color="white"  onPress={likeHandler}  /></Text>
                }

                
                    <Fontisto name="hipchat" size={24} color="white" />
                    <Feather name="send" size={24} color="white" />
                </View>
                <Feather name="bookmark" size={24} color="white" />
            </View>
            <View style={{padding:10}}>
                <View style={{display:'flex',flexDirection:"row",}}>
                    <View style={{display:'flex',flexDirection:"row"}}>

                        <Image source={{uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.apNHCUoRRZQS5sH0kmsstQHaEK%26pid%3DApi&f=1'}} style={{height:26,width:26,borderRadius:13,borderColor:"black",borderWidth:2,position:"absolute",marginLeft:12}}/>
                        <Image source={{uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIF.6b%252fyU6bn3GGjuBl2ToiTCw%26pid%3DApi&f=1'}} style={{height:26,width:26,borderRadius:13,borderColor:"black",borderWidth:2,position:"absolute",marginLeft:25}}/>
                    {clicked?
                        <Image source={{uri: 'https://instagram.fktm6-1.fna.fbcdn.net/v/t51.2885-19/s150x150/122776188_650006025678209_7178406714170148208_n.jpg?_nc_ht=instagram.fktm6-1.fna.fbcdn.net&_nc_ohc=RMRJ1XtiRGoAX-yYGMW&tp=1&oh=d8987c8f62b4ec58c2dec3ad08fa5b55&oe=5FE9A18C'}} style={{height:26,width:26,borderRadius:13,borderColor:"#000061",borderWidth:2}}/>:<Text></Text>
                    }
                    </View>
                   {clicked?
                <Text style={{position:"relative",left:30,width:'85%',color:"white",fontSize:14,justifyContent:"center",}} numberOfLines={2}>Liked by {you} ,ah_san98 , shashank977, san_tosand {count} others </Text>:
                <Text style={{position:"relative",left:55,width:'85%',color:"white",fontSize:14,justifyContent:"center",}} numberOfLines={2}>Liked by {you} ,ah_san98 , shashank977, san_tosand {count} others </Text>
            }

                </View>
                    <View>
                        <View style={{display:"flex",marginVertical:5}}>
                         <Text style={{color:"white",fontSize:16,}}  numberOfLines={2}>{props.item.name }&nbsp;&nbsp;
    <Text style={{color:"#b3b3b3",fontSize:16,width:"100%"}}>{props.item.caption}</Text></Text>
                        </View>

                        <Text style={{color:'gray'}}>View all 3 comments</Text>
                        <Text></Text>
                    </View>
            </View>
        </View>
    )
}
