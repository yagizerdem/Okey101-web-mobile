import { createSlice } from "@reduxjs/toolkit";
import SD from "./SD";
const initialState = {
  opponents: {
    top: null,
    left: null,
    right: null,
  },
  mainstack: null,
  stack1: null,
  stack2: null,
  stack3: null,
  stack4: null,
  boardMatrix: null,
  turn: null,
  gameState: SD.gameStates.home,
};
export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setTurn: (state, action) => {
      state.turn = action.payload;
    },
    setGameState: (state, action) => {
      state.gameState = action.payload;
    },
  },
});

export const {setTurn,setGameState} = gameSlice.actions;
export default gameSlice.reducer;
