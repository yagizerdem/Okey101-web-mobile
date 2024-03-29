import { useDrop } from "react-dnd";
import Tile from "../components/Tile";
import "../styles/tilestack.css";
import { useSelector } from "react-redux";

export default function TileStack({ no }) {
  const gameSlice = useSelector((state) => state.game);
  let toppiece = null;
  if (no == 1) toppiece = gameSlice.stack1;
  else if (no == 2) toppiece = gameSlice.stack2;
  else if (no == 3) toppiece = gameSlice.stack3;
  else if (no == 4) toppiece = gameSlice.stack4;
  function takePiece() {
    // emit take peice
    console.log("take piece")
  }

  function throwPiece(){
    // emit leave pice
    console.log("leave pice")
  }
  const [{ isOver, canDrop }, drop] = useDrop(
    () => ({
      accept: "tile",
      drop: () => throwPiece(),
      collect: (monitor) => ({
        canDrop: !!monitor.canDrop(),
      }),
    }),
    [throwPiece]
  );

  return (
    <div className="tile-stack" ref={drop}>
      {no == 5 && <div className="tile" onClick={takePiece}></div>}
      {no != 5 && toppiece != null && (
        <div className="tile" style={{ color: toppiece.color }} onClick={takePiece}>
          {toppiece.number}
        </div>
      )}
    </div>
  );
}
