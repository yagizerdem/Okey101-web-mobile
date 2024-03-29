const { allPlayers } = require("../db/player");
const { getIO } = require("../socket-setup");
const { allRooms } = require("../db/room");

function emitInitialData(key) {
  const io = getIO();
  const playerFromdb = allPlayers[key];
  const roomFromdb = allRooms[playerFromdb.roomuuid];
  const dto = {
    turn: playerFromdb.turn,
    mainstack: roomFromdb.mainStack[roomFromdb.mainStack.length - 1],
    opponents: playerFromdb.opponents,
    tiles: playerFromdb.allTiles,
    no:playerFromdb.no
  };
  io.to(playerFromdb.socketid).emit("initialdata", dto);
}
module.exports = { emitInitialData };
