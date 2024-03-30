const { emitUpdateStacks } = require("../Emitters/emitUpdateStacks");
const { allPlayers } = require("../db/player");
const { allRooms } = require("../db/room");
const { emitTakeTile } = require("../Emitters/emitTakeTile");

function takeTile({ socketid, stackno }) {
  const playerFromDb = allPlayers[socketid];
  const roomFromDb = allRooms[playerFromDb.roomuuid];

  let tile = null;
  if (stackno == 1) tile = roomFromDb.stack1.pop();
  else if (stackno == 2) tile = roomFromDb.stack2.pop();
  else if (stackno == 3) tile = roomFromDb.stack3.pop();
  else if (stackno == 4) tile = roomFromDb.stack4.pop();
  else if (stackno == 5) {
    // refresh
    if (roomFromDb.mainStack.length == 0) {
      roomFromDb.mainStack = [
        ...roomFromDb.stack1,
        ...roomFromDb.stack2,
        ...roomFromDb.stack3,
        ...roomFromDb.stack4,
      ];
      roomFromDb.stack1 = [];
      roomFromDb.stack2 = [];
      roomFromDb.stack3 = [];
      roomFromDb.stack4 = [];
    }
    tile = roomFromDb.mainStack.pop();
  }
  if (!tile) return; // cant take tile

  playerFromDb.allTiles.push(tile);
  emitUpdateStacks({ roomuuid: roomFromDb.uuid }); // sync stack
  emitTakeTile({ socketid, tile });
}

module.exports = { takeTile };
