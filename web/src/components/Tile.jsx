import '../styles/tile.css'
import { useDrag } from 'react-dnd'
import { setFrom } from '../gameSlice'
import { useDispatch } from 'react-redux'
export default function Tile({number, color , row ,col}){
    const dispatch = useDispatch()
    const [{isDragging}, drag] = useDrag(() => ({
        type: 'tile',
        collect: monitor => ({
          isDragging: !!monitor.isDragging(),
        }),
      }))
      function onMouseDown(){
        dispatch(setFrom([row,col]))
      }
    return (
        <div className="tile" style={{color:color}} ref={drag} onMouseDown={onMouseDown}>
            {number}
            <p>{color}</p>
        </div>
    )
}