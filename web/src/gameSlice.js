import { createSlice } from "@reduxjs/toolkit";
import SD from "./SD";
const initialState = {
  opponents: {
    top: null,
    left: null,
    right: null,
  },
  mainstack: null, // no 5
  stack1: null, // no 1
  stack2: null, // no 2
  stack3: null,
  stack4: null,
  boardMatrix: [Array(15).fill(0),Array(15).fill(0)], // initial board matrix empty
  turn: null,
  gameState: SD.gameStates.match,
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
    setStack: (state, action) => {
      const { no, tile } = action.payload;
      switch (no) {
        case 1:
          state.stack1 = tile;
          break;
        case 2:
          state.stack2 = tile;
          break;
        case 3:
          state.stack3 = tile;
          break;
        case 4:
          state.stack4 = tile;
          break;
        case 5:
          state.mainstack = tile;
          break;
      }
    },
    setOpponents: (state, action) => {
      state.opponents = action.payload;
    },
    setBoardMatrix:(state , action)=>{
      const tiles = action.payload
      while(tiles.length > 0){
        let tile = tiles.pop()
        let row = Math.floor(Math.random()*2)
        let col = Math.floor(Math.random()*15)
        if(state.boardMatrix[row][col] == 0) state.boardMatrix[row][col] = tile
        else tiles.push(tile)
      }
    }
  },
});

export const { setTurn, setGameState,setStack,setOpponents ,setBoardMatrix} = gameSlice.actions;
export default gameSlice.reducer;
