import { useEffect } from "react";
import { socket } from "../socket";
import { store } from "../store";
import {
  setTurn,
  setGameState,
  setStack,
  setOpponents,
  setBoardMatrix,
} from "../gameSlice";
import SD from "../SD";
export default function useSocket() {
  useEffect(() => {
    function startGame(data) {
      const { turn, mainstack, opponents, tiles } = data;
      store.dispatch(setTurn(turn));
      store.dispatch(setStack({ no: 5, tile: mainstack }));
      store.dispatch(setOpponents(opponents));
      store.dispatch(setGameState(SD.gameStates.match));
      store.dispatch(setBoardMatrix(tiles));
    }
    socket.on("initialdata", startGame);

    return () => {
      socket.off("initialdata", startGame);
    };
  }, []);
}
