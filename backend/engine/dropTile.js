const { emitDropTile } = require("../Emitters/emitDropTile")
const { allPlayers } = require("../db/player")
const { allRooms } = require("../db/room")
const {emitUpdateStacks} = require("../Emitters/emitUpdateStacks")
const { emitSwitchTurn } = require("../Emitters/emitSwitchTurn")

function dropTile({uuid , stackno , socketid}){
    let playerFromDb = allPlayers[socketid]
    let roomFromDb = allRooms[playerFromDb.roomuuid]
    let tile = playerFromDb.allTiles.find(item => item.uuid == uuid)
    playerFromDb.allTiles = playerFromDb.allTiles.filter(item => item.uuid != uuid)
    if(stackno == 1) roomFromDb.stack1.push(tile)
    else if(stackno == 2) roomFromDb.stack2.push(tile)
    else if(stackno == 3) roomFromDb.stack3.push(tile)
    else if(stackno == 4) roomFromDb.stack4.push(tile)
    
    playerFromDb.turn = false;
    if(allPlayers[playerFromDb.opponents.right.socketid])allPlayers[playerFromDb.opponents.right.socketid].turn = true;

    emitDropTile({socketid:socketid ,tileuuid:uuid})
    emitUpdateStacks({roomuuid:roomFromDb.uuid})
    emitSwitchTurn({player:playerFromDb})
}
module.exports = {dropTile}