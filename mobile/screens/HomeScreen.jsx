import { ImageBackground, StyleSheet, Text, View } from "react-native";
import Gate from "../features/Gate";
import { useSelector } from "react-redux";
import SD from "../SD";
import Wait from "../components/WaitComponent";
import { useEffect } from "react";
import { socket } from "../socket";
const bakcgroundimg = require("../assets/background.jpg");

export default function HomeScreen() {
  const gameSlice = useSelector((state) => state.game);
  // reconnect after game end
  useEffect(()=>{
    if(!socket.connected) socket.connect()
  },[socket.connected])
  return (
    <ImageBackground style={styles.home} source={bakcgroundimg}>
      <View style={styles.center}>
        {gameSlice.gameState == SD.gameStates.home && <Gate></Gate>}
        {gameSlice.gameState == SD.gameStates.search && <Wait></Wait>}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  home: {
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
  },
});
