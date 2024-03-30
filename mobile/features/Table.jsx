import React from 'react';
import { View, StyleSheet ,Text} from 'react-native';
import Card from '../components/Card';
import { useSelector } from 'react-redux';
import TileStack from './TileStack';
const top = require('../assets/bear.jpg')
const left = require('../assets/eagle.jpg')
const right = require('../assets/snake.jpeg')
const Table = () => {
    const gameSlice = useSelector(state => state.game)
    const no = gameSlice.no;
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.cell}>
            <TileStack no={(no+2)%4+1}></TileStack>
        </View>
        <View style={styles.cell}>
            <Card src={top} name={gameSlice.opponents.top.name}></Card>
        </View>
        <View style={styles.cell}>
        <TileStack no={(no+1)%4+1}></TileStack>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.cell}>
        <Card src={left} name={gameSlice.opponents.left.name}></Card>
        </View>
        <View style={styles.cell}>
            {/* main stack */}
        <TileStack no={5}></TileStack>
        </View>
        <View style={styles.cell}>
        <Card src={right} name={gameSlice.opponents.right.name}></Card>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.cell}>
        <TileStack no={no}></TileStack>
        </View>
        <View style={styles.cell}>
            <Text>you ...</Text>
        </View>
        <View style={styles.cell}>
        <TileStack no={(no)%4 + 1}></TileStack>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop:10,
    left:'50%',
    marginLeft:-150,
    position:'absolute',
},
  row: {
    flexDirection: 'row',
  },
  cell: {
    width: 100,
    height: 80,
    borderWidth: 1,
    borderColor: 'black',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#a0d2eb'
  },
});

export default Table;