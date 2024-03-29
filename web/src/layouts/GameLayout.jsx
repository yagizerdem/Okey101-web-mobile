import {useSelector} from 'react-redux'
import Chat from '../features/Chat'
import { Fragment } from 'react'
export default function GameLayout(){
    const gameSlice = useSelector(state => state.game)

    console.log(gameSlice)
    return(
        <Fragment>
            <Chat></Chat>
        </Fragment>
    )
}