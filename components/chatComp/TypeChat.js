import * as React from 'react';
import { Text, View,FlatList } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import PersonalMsg from './PersonalMsg'



function Primary() {
    const Person=[
            {   
                id:1,
                img:"https://cdn.pixabay.com/photo/2017/08/01/01/33/beanie-2562646_1280.jpg",
                name:"sushil",
                msg:"where are you ,mate ?",
                sstory:false
        
            },
            {
                id:2,
                img:"https://cdn.pixabay.com/photo/2012/03/04/01/01/father-22194_1280.jpg",
                name:"san_tosh",
                msg:"aaja class vayexa ta...",
                sstory:false

        
            },
            {
                img:"https://avatars3.githubusercontent.com/u/46107123?s=460&u=c875de430614cd3e98648582db1bb7feae1ed6a8&v=4",
                id:4,
                name:"P r e r i t  B h a n d a r i",
                msg:"oa maile haldiye hai",
                sstory:true

        
            
            },
            {
                img:"https://cdn.pixabay.com/photo/2016/01/19/17/48/woman-1149911__340.jpg",
                id:5,
                name:"_Ansh Parajuli",
                msg:"Thanks Brother",
                sstory:true

        
            
            },
            {
                img:"https://cdn.pixabay.com/photo/2016/03/29/03/14/portrait-1287421__340.jpg",
                id:6,
                name:"Harry Pokhrel",
                msg:"la thik xa ,good",
                sstory:false

        
            },
            {
                img:"https://cdn.pixabay.com/photo/2016/03/26/22/13/black-and-white-1281562__340.jpg",
                id:7,
                name:"Xiwan crazi",
                msg:"aau aau bro,,khelne vaye",
                sstory:false

        
            },
            {
                img:"https://cdn.pixabay.com/photo/2017/02/20/11/57/boy-2082272__340.jpg",
                id:8,
                name:"Sushrit Poudel",
                msg:"ae lala yrr,,",
                sstory:true

        
            },
            {
                img:"https://cdn.pixabay.com/photo/2018/04/21/14/52/portrait-3338642__340.jpg",
                id:9,
                name:"thename is safal",
                msg:"la hunxa daai",
                sstory:true

        
            },
            {
                img:"https://cdn.pixabay.com/photo/2016/11/21/17/36/boy-1846704__340.jpg",
                id:10,
                name:"OOPS Satish hancy",
                msg:"thank you daaai",
                sstory:false

        
            },
            {
                img:"https://cdn.pixabay.com/photo/2016/06/17/09/54/beauty-1462986__340.jpg",
                id:11,
                name:"____Kiara",
                msg:"what's up ,boss",
                sstory:false

        
            },
            {
                img:"https://cdn.pixabay.com/photo/2018/01/06/09/25/hijab-3064633__340.jpg",
                id:12,
                name:"miss_Cerena",
                msg:"see you soon,buddy",
                sstory:true

        
            },
            {
                id:13,
                img:"https://cdn.pixabay.com/photo/2017/08/01/11/48/blue-2564660__340.jpg",
                name:"Linda Dosnesti",
                msg:"30W ago",
                sstory:false

         
            }
        

    ]








  return (
    <View>
        <FlatList
                data={Person}
                horizontal={false}
                renderItem={({item}) => 
                <PersonalMsg item={item}/>
                
            }
            keyExtractor={(item)=>item.id}
            />

    </View>
  );
}

function General() {
    const Person=[
        {   
            id:1,
            img:"https://cdn.pixabay.com/photo/2017/01/23/19/40/woman-2003647__340.jpg",
            name:"Sushreet__ig",
            msg:"Hello sir...",
            sstory:false

    
        },
        {
            id:2,
            img:"https://cdn.pixabay.com/photo/2018/01/25/14/12/nature-3106213__340.jpg",
            name:"ach_santosh",
            msg:"one day one lion .....................",
            sstory:true

    
        },
        {
            img:"https://cdn.pixabay.com/photo/2014/05/02/21/50/blogging-336376__340.jpg",
            id:4,
            name:"Suraj_pandey",
            msg:"Ma kushma aako xuh yrr",
            sstory:false
    
        
        },
    ]


  return (
    <View>
    <FlatList
            data={Person}
            horizontal={false}
            renderItem={({item}) => 
            <PersonalMsg item={item}/>
            
        }
        keyExtractor={(item)=>item.id}
        />

</View>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function TypeChat() {
  return (
    // <NavigationContainer>
      <Tab.Navigator
      
     
      tabBarOptions={{
        showLabel:true,
        showIcon:false,
        activeTintColor: 'white',
        inactiveTintColor: 'gray',
        style:{
          backgroundColor:"black",
          width:200
        }
      }}
      
      
      
      >
        <Tab.Screen name="Primary" component={Primary} />
        <Tab.Screen name="General" component={General} />
      </Tab.Navigator>
    // </NavigationContainer>
  );
}
