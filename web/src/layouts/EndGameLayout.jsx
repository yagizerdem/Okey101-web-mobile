import{useSelector} from 'react-redux'
import '../styles/endgamelayout.css'
export default function EndGameLayout(){
    const finishername = useSelector(state => state.game).gameendername
    function onClick(){
        window.location.reload()
    }
    return(
        <div className='endgamelayoutcontainer'>
           <h1> game end ... </h1>
            <hr />
            <span>{finishername} won </span>
            <button onClick={onClick}>play again ... </button>
        </div>
    )
}