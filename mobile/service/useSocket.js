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
  setPlayerNo,
  throwTile,
  updateStacksUI,
  switchPlayerTurn,
  takeTileUI,
  setGameEnderName
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
    function dropTile(tileuuid){
      store.dispatch(throwTile(tileuuid))
    }
    function udpatestacks(stacks){
      store.dispatch(updateStacksUI(stacks))
    }
    function switchturn(){
      store.dispatch(switchPlayerTurn())
    }
    function newtile(tile){
      store.dispatch(takeTileUI(tile))
    }
    function gameend(name){
      store.dispatch(setGameState(SD.gameStates.end))
      store.dispatch(setGameEnderName(name))
    }
    socket.on("initialdata", startGame);
    socket.on("newchat",newChat)
    socket.on("droptile",dropTile)
    socket.on("udpatestacks",udpatestacks)
    socket.on("switchturn",switchturn)
    socket.on("newtile",newtile)
    socket.on("gameend",gameend)
    return () => {
      socket.off("initialdata", startGame);
      socket.off("newchat",newChat)
      socket.off("droptile",dropTile)
      socket.off("switchturn",switchturn)
      socket.off("newtile",newtile)
      socket.off("gameend",gameend)
    };
  }, []);
}
