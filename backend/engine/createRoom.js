const uuid = require("uuid");
const { Room, allRooms } = require("../db/room");
const { generateAllTiles } = require("./tile");
const { allPlayers } = require("../db/player");
function createRoom({ playerkeys }) {
  const newRoom = new Room({ uuid: uuid.v1() });
  newRoom.allPlayers = playerkeys;
  newRoom.mainStack = generateAllTiles();
  newRoom.activePlayerCount = 4;

  for (let i = 0; i < 4; i++) {
    let playerFromdb = allPlayers[playerkeys[i]];
    playerFromdb.no = i + 1;
    if (i == 0) {
      playerFromdb.turn = true;
      playerFromdb.allTiles = newRoom.mainStack.splice(0, 15);
    } else {
      playerFromdb.turn = false;
      playerFromdb.allTiles = newRoom.mainStack.splice(0, 14);
    }
    playerFromdb.roomuuid = newRoom.uuid;

    const socketidtop = playerkeys[(i + 2) % 4];
    playerFromdb.opponents.top = {
      socketid: socketidtop,
      name: allPlayers[socketidtop].name,
    };
    const socketidleft = playerkeys[(i + 3) % 4];
    playerFromdb.opponents.left = {
      socketid: socketidleft,
      name: allPlayers[socketidleft].name,
    };
    const socketidright = playerkeys[(i + 1) % 4];
    playerFromdb.opponents.right = {
      socketid: socketidright,
      name: allPlayers[socketidright].name,
    };
  }

  allRooms[newRoom.uuid] = newRoom;
}

module.exports = { createRoom };
