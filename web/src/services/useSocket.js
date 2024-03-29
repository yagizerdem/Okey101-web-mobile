import { useEffect } from "react";
import { socket } from "../socket";
import { store } from "../store";
import {
  setTurn,
  setGameState,
  setStack,
  setOpponents,
  setBoardMatrix,
  pushGlobalChat,
  setPlayerNo
} from "../gameSlice";
import SD from "../SD";
export default function useSocket() {
  useEffect(() => {
    function startGame(data) {
      const { turn, mainstack, opponents, tiles , no} = data;
      store.dispatch(setTurn(turn));
      store.dispatch(setStack({ no: 5, tile: mainstack }));
      store.dispatch(setOpponents(opponents));
      store.dispatch(setGameState(SD.gameStates.match));
      store.dispatch(setBoardMatrix(tiles));
      store.dispatch(setPlayerNo(no))
    }
    function newChat(chat){
      store.dispatch(pushGlobalChat(chat))
    }
    socket.on("initialdata", startGame);
    socket.on("newchat",newChat)

    return () => {
      socket.off("initialdata", startGame);
      socket.off("newchat",newChat)
    };
  }, []);
}
