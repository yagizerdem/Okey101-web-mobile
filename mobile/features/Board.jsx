import { ImageBackground, View ,StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import Tile from "../components/Tile";
import EmptyTile from "../components/EmptyTile";
const bakcgroundimg = require("../assets/board.png");
export default function Board() {
    const gameSlice = useSelector(state => state.game)
  return <ImageBackground style={styles.boardimg} source={bakcgroundimg}>
    {gameSlice.boardMatrix.map((row , i) => row.map((col ,j)=>{
        if(gameSlice.boardMatrix[i][j] != 0){
            return <Tile row={i} col={j} number={gameSlice.boardMatrix[i][j].number} key={i*16 + j} color={gameSlice.boardMatrix[i][j].color}></Tile>
        }
        else {
            return <EmptyTile row={i} col={j} key={i*16 + j} showOutline={gameSlice.from.length > 0}></EmptyTile>
        }
    }))}
  </ImageBackground>;
}
const styles = StyleSheet.create({
    boardimg:{
        width:500,
        height:80,
        position:'absolute',
        bottom:0,
        left:'50%',
        marginLeft:-250,
        marginBottom:10,
        display:'flex',
        flexWrap:'wrap'
    }

  });