import { useSelector } from "react-redux";
import "../styles/board.css";
import EmptyTile from "../components/EmptyTile";
import Tile from "../components/Tile";
export default function Board() {
  const gameSlice = useSelector((state) => state.game);
    
  return (
    <div className="board">
      {gameSlice.boardMatrix.map((row, i) =>
        row.map((col, j) => {
          if (gameSlice.boardMatrix[i][j] != 0) {
            return <Tile key={i * 16 + j} number={gameSlice.boardMatrix[i][j].number} color={gameSlice.boardMatrix[i][j].color} row={i} col={j}></Tile>;
          } else return <EmptyTile key={i * 16 + j} row={i} col={j} show={gameSlice.from.length > 0}></EmptyTile>;
        })
      )}
    </div>
  );
}
