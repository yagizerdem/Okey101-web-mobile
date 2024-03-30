import * as ScreenOrientation from "expo-screen-orientation";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import SD from "./SD";
import { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import {socket} from "./socket"
import useSocket from "./service/useSocket"
import GameScreen from "./screens/GameScreen";
import GameEndScreen from "./screens/GameEndScreen";

export default function App() {
  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
  const gameSlice = useSelector(state => state.game)
  useEffect(()=>{
    socket.connect()
  },[])
  useSocket()
  return (
    <Fragment>
      {(gameSlice.gameState == SD.gameStates.home || gameSlice.gameState == SD.gameStates.search) && <HomeScreen></HomeScreen>}
      {gameSlice.gameState == SD.gameStates.match && <GameScreen></GameScreen>}
      {gameSlice.gameState == SD.gameStates.end && <GameEndScreen></GameEndScreen>}
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
