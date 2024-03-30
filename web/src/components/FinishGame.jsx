import '../styles/finishgame.css'
import {useSelector} from 'react-redux'
import queryObject from '../queryObject'
export default function FinishGame(){
    const boardMatrix = useSelector(state => state.game.boardMatrix)
    function finishGame(){
        queryObject.finishGame({boardMatrix})
    }
    return(
        <button className="finishGame" onClick={finishGame}>
            finish game
        </button>
    )
}