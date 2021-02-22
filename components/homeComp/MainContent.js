import React from 'react'
import { View, Text,FlatList } from 'react-native'
import Square from './Square'

export default function MainContent() {

    const People=[
        {   
            id:1,
            uimg:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Qtx1LFZU409UVe1jfmB7ZAHaJQ%26pid%3DApi&f=1",
            pimg:"https://scontent.fktm6-1.fna.fbcdn.net/v/t1.0-9/90877460_1128551107477672_6194183988702085120_o.jpg?_nc_cat=101&ccb=2&_nc_sid=8bfeb9&_nc_ohc=aMxW3UpuZrMAX9EhLAK&_nc_ht=scontent.fktm6-1.fna&oh=3fbeba009965507fff96f4eff6d46a96&oe=5FE608BA",
            name:"invalid_sb",
            caption:"In Informatics, dummy data is benign information that does not contain any useful data"

        },
        {
            id:2,
            uimg:"https://cdn.pixabay.com/photo/2017/02/20/10/30/fashion-2082066__340.jpg",
            pimg:"https://cdn.pixabay.com/photo/2014/06/10/10/25/sun-365981__340.jpg",
            name:"san_tosh",
            caption:"In Informatics, dummy data is benign information that does not contain any useful data"

        },
        {
            id:3,
            uimg:"https://cdn.pixabay.com/photo/2016/03/09/15/12/girl-1246525__340.jpg",
            pimg:"https://cdn.pixabay.com/photo/2016/03/09/14/46/model-1246488__340.jpg",
            name:"miss_Dopejo",
            caption:"In Informatics, dummy data is benign information that does not contain any useful data"

        },
        {
            id:4,
            uimg:"https://cdn.pixabay.com/photo/2014/09/11/23/48/rapper-442183__340.jpg",
            pimg:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.KL9ZSkzdrGTJqkuTo1BA6wHaDt%26pid%3DApi&f=1",
            name:"dhungel_s",
            caption:"In Informatics, dummy data is benign information that does not contain any useful data"

        },
        {
            id:5,
            uimg:"https://cdn.pixabay.com/photo/2015/09/05/07/28/writing-923882__340.jpg",
            pimg:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.ccgQ-0vGII74m0ng1Q237gHaEK%26pid%3DApi&f=1",
            name:"takiya_praman",
            caption:"In Informatics, dummy data is benign information that does not contain any useful data"


        
        },
        {
            id:6,
            uimg:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.SoeIZVVwHMj2iQnw_kYkcQAAAA%26pid%3DApi&f=1",
            pimg:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.UZMV_gkQkWiSNoysUOjWvgHaEK%26pid%3DApi&f=1",
            name:"parasKhadka",
            caption:"In Informatics, dummy data is benign information that does not contain any useful data"

        
        },
        {
            id:7,
            uimg:"https://cdn.pixabay.com/photo/2017/02/20/11/57/boy-2082270_960_720.jpg",
            pimg:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.EYWUoJwu63yE6_AMbZ_X9gHaFj%26pid%3DApi&f=1",
            name:"Sushrit_pou",
            caption:"In Informatics, dummy data is benign information that does not contain any useful data"

        }
    ]


    return (
        <View >
              <FlatList
                data={People}
                renderItem={({item}) => 
                <Square item={item}/>
                
            }
            keyExtractor={(item)=>item.id}
            />
            
        </View>
    )
}
