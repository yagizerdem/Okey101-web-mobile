import { View ,Text ,StyleSheet, ImageBackground, TouchableOpacity} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import SD from "../SD";
import { socket } from "../socket";
import { setGameState } from "../gameSlice";
const bakcgroundimg = require("../assets/background.jpg");

export default function GameEndScreen(){
    const gameSlice = useSelector((state) => state.game);
    const dispatch = useDispatch()
    function goToHome(){
        socket.disconnect()
        dispatch(setGameState(SD.gameStates.home))
    }
    return(
        <ImageBackground style={styles.container} source={bakcgroundimg}>
        <View style={styles.center}>
            <Text>game ended </Text>
            <Text style={{fontSize:18,fontWeight:'bold'}}>{gameSlice.gameendername} won ...</Text>
            <TouchableOpacity onPress={goToHome}>
                <View style={styles.btn}>
                    <Text>go to home</Text>
                </View>
            </TouchableOpacity>
        </View>
      </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    center: {
      width: 200,
      height: 200,
      backgroundColor: "#fff",
      position: "absolute",
      top: "50%",
      left: "50%",
      marginTop: -100,
      marginLeft: -100,
      borderRadius: 10,
      display:'flex',
      alignItems:'center',
      justifyContent:'center'
    },
    btn:{
        marginTop:20,
        width:100,
        height:40,
        backgroundColor:'#d0bdf4',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    }
  });
  