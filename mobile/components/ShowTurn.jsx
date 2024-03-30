import { Fragment } from 'react';
import { View, StyleSheet ,Text } from 'react-native';
import { useSelector } from 'react-redux';
export default function ShowTurn(){ 
    const gameSlice = useSelector(state => state.game)
    return(
        <Fragment>
        {gameSlice.turn  &&        <View style={styles.container}>
            <Text style={{fontWeight:'bold',fontSize:16}}>your turn ...</Text>
        </View> }
        </Fragment>
    )
}
const styles = StyleSheet.create({
    container:{
        width:100,
        height:40,
        backgroundColor:'#d0bdf4',
        position:'absolute',
        top:0,
        right:0,
        marginTop:100,
        marginRight:50,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    }
})