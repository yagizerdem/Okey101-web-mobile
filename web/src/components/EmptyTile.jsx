import { useDispatch, useSelector } from 'react-redux'
import '../styles/emptytile.css'
import { useDrop } from 'react-dnd'
import { setFrom , moveInBoard} from '../gameSlice'
export default function EmptyTile({show , row , col}){
    const gameSlice = useSelector(state => state.game)
    const dispatch = useDispatch()
    let class_ = "emptytile "
    if(show) class_ += "showborder"

    function checkDrop(){
        return true
    }
    function move(){
        const to = [row , col]
        dispatch(moveInBoard({from:gameSlice.from ,  to}))
        dispatch(setFrom([]))
    }
    const [{ isOver, canDrop }, drop] = useDrop(
        () => ({
          accept: 'tile',
          drop: () => move(),
          canDrop: () => checkDrop(),
          collect: (monitor) => ({
            canDrop: !!monitor.canDrop()
          })
        }),
        [move , checkDrop,row,col]
      )


    return(
        <div className={class_} ref={drop}>


        </div>
    )
}