const { allPlayers } = require("../db/player");
const { getIO } = require("../socket-setup");
function emitSwitchTurn({player}){
    const io = getIO();
    io.to(player.socketid).emit("switchturn")
    if(allPlayers[player.opponents.right.socketid])io.to(player.opponents.right.socketid).emit("switchturn")
}
module.exports ={emitSwitchTurn}