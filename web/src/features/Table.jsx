import { useSelector } from "react-redux";
import "../styles/table.css";
import SD from "../SD";
import TileStack from "../components/TileStack";
export default function Table() {
  const gameSlice = useSelector((state) => state.game);
  const no = gameSlice.no;
  
  return (
    <div className="table">
      <div className="grid-item">
      <TileStack no={(no+2)%4+1}></TileStack>
      </div>
      <div className="grid-item">
        <img src={SD.ppimgPaths.top}></img>
        <br />
        <span className="opponentname">{gameSlice.opponents.top.name}</span>
      </div>
      <div className="grid-item">
      <TileStack no={(no+1)%4+1}></TileStack>
      </div>
      <div className="grid-item">
      <img src={SD.ppimgPaths.left}></img>
      <br />
        <span className="opponentname">{gameSlice.opponents.left.name}</span>
      </div>
      <div className="grid-item">
        {/* main stack */}
      <TileStack no={5}></TileStack>
      </div>
      <div className="grid-item">
      <img src={SD.ppimgPaths.right}></img>
      <br />
        <span className="opponentname">{gameSlice.opponents.right.name}</span>
      </div>
      <div className="grid-item">
      <TileStack no={no}></TileStack>
      </div>
      <div className="grid-item">
        {/* player */}
        <span className="you">you</span>
      </div>
      <div className="grid-item">
      <TileStack no={(no)%4 + 1}></TileStack>
      </div>
    </div>
  );
}
