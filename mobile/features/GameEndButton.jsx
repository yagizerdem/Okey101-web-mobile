import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
  } from "react-native";
import queryObject from "../queryObject";
import { useSelector } from "react-redux";

export default function GameEndButton(){
    const boardMatrix = useSelector(state => state.game.boardMatrix)
    function finish(){
        queryObject.finishGame({boardMatrix})
    }
    return(
        <TouchableOpacity style={styles.container} onPress={finish}>
            <View style={styles.button}>
                <Text>end game ... </Text>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    button:{
        width:100,
        height:30,
        backgroundColor:'#e5eaf5',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    container:{
        position:'absolute',
        top:'50%',
        right:40,
        marginTop:-15,
    }
})