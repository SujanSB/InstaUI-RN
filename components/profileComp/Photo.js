import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FlatGrid } from 'react-native-super-grid';

export default function Photo() {
  const [items, setItems] = React.useState([
      { Likes: '83 ', imageUrl: 'https://cdn.pixabay.com/photo/2015/05/15/14/35/tiger-768574__340.jpg' },
      { Likes: '117', imageUrl: 'https://cdn.pixabay.com/photo/2020/01/28/19/55/mascot-4800858__340.png' },
      { Likes: '140', imageUrl: 'https://cdn.pixabay.com/photo/2017/09/05/10/19/business-2717063__340.jpg' },
      { Likes: '140', imageUrl: 'https://cdn.pixabay.com/photo/2020/05/26/21/33/pigeon-5224888__340.png' },
      { Likes: '94', imageUrl: 'https://cdn.pixabay.com/photo/2020/11/10/15/51/bear-5730216__340.png' },
      { Likes: '140', imageUrl: 'https://cdn.pixabay.com/photo/2010/11/29/mount-everest-413__340.jpg' },
      { Likes: '94', imageUrl: 'https://cdn.pixabay.com/photo/2020/06/29/20/15/season-12-5354254__340.png' },
      { Likes: '78', imageUrl: 'https://cdn.pixabay.com/photo/2016/10/15/15/19/digital-1742687__340.jpg' },
      { Likes: '78', imageUrl: 'https://cdn.pixabay.com/photo/2020/11/10/15/46/man-5730206__340.png' },
      { Likes: '94', imageUrl: 'https://cdn.pixabay.com/photo/2018/06/08/00/48/developer-3461405__340.png' },
      { Likes: '101', imageUrl: 'https://cdn.pixabay.com/photo/2018/07/31/21/58/lion-3576031__340.jpg' },
      { Likes: '89', imageUrl: 'https://cdn.pixabay.com/photo/2014/07/31/23/10/biker-407123__340.jpg' },
    { Likes: '117', imageUrl: 'https://cdn.pixabay.com/photo/2019/04/19/09/47/work-4138983__340.png' },
    { Likes: '107', imageUrl: 'https://cdn.pixabay.com/photo/2015/06/03/14/13/cricket-796465__340.jpg' },
  ]);

  return (
    <FlatGrid
      itemDimension={106}
      data={items}
      style={styles.gridView}
      // staticDimension={300}
      // fixed
      spacing={0}
      renderItem={({ item }) => (
        <View style={[styles.itemContainer]}>
            <TouchableOpacity>

            <Image source={{uri:  item.imageUrl}} style={{height:150,zIndex:0}}/>
            </TouchableOpacity>
{/* 
          <Text style={styles.itemName}>{item.Likes}</Text>
          <Text style={styles.itemCode}>{item.cmnt}</Text> */}
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  gridView: {
    flex: 1,
    backgroundColor:"black"
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 0,
    height: 155,
  },
  itemName: {
    fontSize: 16,
    color: 'red',
    fontWeight: '600',
    zIndex:1
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
});
