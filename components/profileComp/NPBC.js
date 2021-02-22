import React,{useState} from 'react'
import { View, Text, Button,StyleSheet } from 'react-native'
import RoundHS from './RoundHS'
import { FlatList } from 'react-native-gesture-handler'

export default function NPBC() {


    const People=[
        {   
            id:1,
            img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.s-q_5KSqxCx_QKKKZ2uGVAAAAA%26pid%3DApi&f=1",
            title:"Myself"
        },
        {
            id:2,
            img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.6dQAGMdDeuxyjniICb6H2QHaHa%26pid%3DApi&f=1",
            title:"DYK | Fact"
        },
        {
            id:3,
            img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.6czphIDQWv7R6o8xQRRyDwHaFE%26pid%3DApi&f=1",
            title:"Love"
        },
        {
            id:4,
            img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.NlLCNw59P19HjBsklQavtwHaIq%26pid%3DApi&f=1",
            title:"PUBG"
        
        },
        {
            id:5,
            img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.-GawVGIxxmL1wPvnklJbDQAAAA%26pid%3DApi&f=1",
            title:"Travel diaries"
        
        },
        {
            id:6,
            img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.MP2XCpX7DXipacqqaWj9EwHaLm%26pid%3DApi&f=1  ",
            title:"Cricket"
        },
        {
            id:7,
            img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.hOBC2AY-THYip2WLwH3iRQHaFj%26pid%3DApi&f=1",
            title:"Study"
        }
    ]



    const[see,setSee]=useState(false)
    const [msg,setMsg]=useState("More...")
    const seeHandler=()=>{
        setSee(true)
        setMsg('')
    }
    const notseeHandler=()=>{
        setMsg("More...")
        setSee(false)
    }

    return (
        <View>
            <View style={{marginHorizontal:10}}>
                <Text style={{color:"white",}}>🇳🇵Sujan Bhattarai</Text>
                <Text style={{color:"gray",}}>Digital Creater</Text>
                <View style={{color:"white",flexDirection:"column"}} >
                    <Text style={{color:"white"}} >"Your mindset is Your everything । </Text>
                    
                                <Text style={{color:"white",width:"95%",fontSize:13}}numberOfLines={1} >- Undergrad Computer_Engineer <Text onPress={seeHandler} >{msg}</Text></Text>
                    {see ?
                    <>
                    <Text style={{color:"white",fontSize:13}}>-Javascript + Python ❣️</Text>
                    <Text style={{color:"white",fontSize:13}}>-Cricket (MI)(Rohit45)(ShL)</Text>
                    <Text style={{color:"white",fontSize:13}}>" Interested in Data Science "</Text>
                    <Text style={{color:"gray",fontSize:13}} onPress={notseeHandler}>see less</Text>
                    </>:
                    <Text style={{height:5}}></Text>
                    }
                    <Text style={{color:"#ccffcc"}}>invalidsb.me</Text>
                </View>
                <View style={{flexDirection:"row",marginVertical:15,justifyContent:"space-between"}}>
                    <Button title="Edit Profi..." color='black'/>
                    <Button title="Promoti..." color='black'/>
                    <Button title="Insights" color='black'/>
                    
                </View>


                <View style={{paddingVertical:8,paddingHorizontal:0,borderBottomColor:'teal',borderTopColor:'teal',borderWidth:0.4}}>
                            <FlatList
                                data={People}
                                horizontal={true}
                                renderItem={({item}) => 
                                <RoundHS item={item}/>
                                
                            }
                            keyExtractor={(item)=>item.id}
                            />
                    </View>     
            </View>
        </View>
    )
}



