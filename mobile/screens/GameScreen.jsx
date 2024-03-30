import {ImageBackground, Text ,View , StyleSheet} from 'react-native'
import { useSelector } from 'react-redux'
import Board from '../features/Board';
const bakcgroundimg = require("../assets/background.jpg");
import Table from "../features/Table";
import ShowTurn from '../components/ShowTurn';
import Chat from '../features/Chat';
import GameEndButton from '../features/GameEndButton';


export default function GameScreen(){
    const gameSlice = useSelector(state => state.game)
    return(
        <ImageBackground  style={styles.container} source={bakcgroundimg}>
                <Table></Table>
            <Board></Board>
            <ShowTurn></ShowTurn>
            <Chat></Chat>
            <GameEndButton></GameEndButton>
        </ImageBackground>

    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }

  });
  