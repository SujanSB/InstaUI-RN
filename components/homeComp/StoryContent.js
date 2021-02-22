import React from 'react'
import { View, Text } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import Round from './Round'

export default function StoryContent() {

    const People=[
        {   
            id:1,
            img:"https://instagram.fktm6-1.fna.fbcdn.net/v/t51.2885-19/s150x150/122776188_650006025678209_7178406714170148208_n.jpg?_nc_ht=instagram.fktm6-1.fna.fbcdn.net&_nc_ohc=RMRJ1XtiRGoAX-yYGMW&tp=1&oh=d8987c8f62b4ec58c2dec3ad08fa5b55&oe=5FE9A18C",
            name:"sujan"
        },
        {
            id:2,
            img:"https://cdn.pixabay.com/photo/2014/06/10/10/25/sun-365981__340.jpg",
            name:"san_tosh"
        },
        {
            id:3,
            img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.KL9ZSkzdrGTJqkuTo1BA6wHaDt%26pid%3DApi&f=1",
            name:"dhungel_s"
        },
        {
            id:4,
            img:"https://cdn.pixabay.com/photo/2015/12/07/10/40/strategy-1080528__340.jpg",
            name:"Sushil"
        
        },
        {
            id:5,
            img:"https://cdn.pixabay.com/photo/2016/05/19/17/09/girl-1403418__340.jpg",
            name:"cerena"
        
        },
        {
            id:5,
            img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.UZMV_gkQkWiSNoysUOjWvgHaEK%26pid%3DApi&f=1",
            name:"parasKhadka"
        
        },
        {
            id:7,
            img:"https://cdn.pixabay.com/photo/2018/01/06/09/25/hijab-3064633__340.jpg",
            name:"kaira"
        },
        {
            id:8,
            img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.EYWUoJwu63yE6_AMbZ_X9gHaFj%26pid%3DApi&f=1",
            name:"sushrit"
        }
    ]




    return (
        <View style={{paddingVertical:8,paddingHorizontal:5,backgroundColor:"black",}}>
            <FlatList
                data={People}
                horizontal={true}
                renderItem={({item}) => 
                <Round item={item}/>
                
            }
            keyExtractor={(item)=>item.id}
            />
        </View>
    )
}
