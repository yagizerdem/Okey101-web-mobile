import { useSelector } from "react-redux";
import Chat from "../features/Chat";
import { Fragment } from "react";
import Board from "../features/Board";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import ShowTurn from "../components/ShowTurn";
import Table from "../features/Table";
import FinishGame from "../components/FinishGame";

export default function GameLayout() {
  const gameSlice = useSelector((state) => state.game);

  console.log(gameSlice);
  return (
    <DndProvider backend={HTML5Backend}>
        {gameSlice.turn && <ShowTurn></ShowTurn>}
      <Chat></Chat>
      <Table></Table>
      <Board></Board>
      <FinishGame></FinishGame>
    </DndProvider>
  );
}
