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
  gameState: SD.gameStates.home,
  globalChat:[],
  from:[],
  no:null,
  gameendername:''
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
    },
    pushGlobalChat:(state ,action)=>{
      state.globalChat.push(action.payload)
    },
    setFrom:(state , action)=>{
      state.from = action.payload
    },
    moveInBoard:(state ,action)=>{
      const {from , to} = action.payload
      const temp = state.boardMatrix[from[0]][from[1]]
      state.boardMatrix[from[0]][from[1]] = state.boardMatrix[to[0]][to[1]]
      state.boardMatrix[to[0]][to[1]] = temp
    },
    setPlayerNo:(state , action)=>{
      state.no = action.payload
    },
    throwTile:(state , action)=>{
      const tileuuid = action.payload
      console.log(tileuuid)
      for(let i = 0 ; i <2 ; i++){
        for(let j = 0 ; j < 15 ; j++){
          if(state.boardMatrix[i][j] == 0) continue
          if(state.boardMatrix[i][j].uuid == tileuuid){
            state.boardMatrix[i][j] = 0
          } 
        }
      }
    },
    updateStacksUI:(state , action)=>{
      const {stack1 , stack2 , stack3 , stack4} = action.payload
      state.stack1 = stack1
      state.stack2 = stack2
      state.stack3 = stack3
      state.stack4 = stack4
    },
    switchPlayerTurn:(state ,action)=>{
      state.turn = !state.turn
    },
    takeTileUI:(state ,action)=>{
      let newTile = action.payload
      while(true){
        let rndrow = Math.floor(Math.random()*2)
        let rndcol = Math.floor(Math.random()*15)
        if(state.boardMatrix[rndrow][rndcol] == 0){
          state.boardMatrix[rndrow][rndcol]  = newTile
          break
        }
        else  continue
        
      }
      
    },
    setGameEnderName:(state ,action)=>{
      state.gameendername = action.payload
    }
  },
});

export const {setGameEnderName,takeTileUI,switchPlayerTurn,updateStacksUI,throwTile,setPlayerNo, setTurn, setGameState,setStack,setOpponents ,setBoardMatrix ,pushGlobalChat , setFrom , moveInBoard} = gameSlice.actions;
export default gameSlice.reducer;
