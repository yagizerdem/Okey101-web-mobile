import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';
import { setFrom } from '../gameSlice';

export default function Tile({ number, row, col ,color }) {
    const gameSlice = useSelector(state => state.game)
    const dispatch = useDispatch()
    function  pressHandler(){
        dispatch(setFrom([row,col]))
    }
    const isSelected = gameSlice.from[0] == row && gameSlice.from[1] == col

    return (
    <TouchableOpacity onPress={pressHandler}>
    <View style={!isSelected ? {...styles.tile} : {...styles.tile,backgroundColor:'#d0bdf4'}}>
        {!isSelected &&(
                  <LinearGradient
                  colors={['#dbcdcc', '#c4b9b9', '#c4b9b9', '#b3abab', '#dbcdcc']}
                  style={styles.background}
                />
        )}

      <Text style={{color:color}}>{number}</Text>
      <Text style={{color:color , fontSize:8}}>{color}</Text>
    </View>
    </TouchableOpacity>

  );
}

const styles = StyleSheet.create({
  tile: {
    width: 500 / 15,
    height: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5, // Add border width
    borderColor: 'black', // Add border color
    overflow: 'hidden', // Ensure border doesn't overflow
  },
  background: {
    width: '100%', // Use percentage width
    height: '100%', // Use percentage height
    position: 'absolute',
  },
});
