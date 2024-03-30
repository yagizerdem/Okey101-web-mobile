const { allPlayers } = require("../db/player");
const {allRooms} =require('../db/room')
const { checkFinishGame } = require("../engine/checkFinishGame");

module.exports = (io, socket) => {
    function finishGame(boardMatrix){
        let flag = checkFinishGame({boardMatrix ,socketid:socket.id})
        if(flag){
            // valid
            let name = allPlayers[socket.id].name
            let allPlayersinroom = allRooms[allPlayers[socket.id].roomuuid].allPlayers
            for(let socketid of allPlayersinroom){
                io.to(socketid).emit("gameend",name)
            }
        }
        else{
            // not valid
            console.log("not valid")
        }
    }
    socket.on("finishGame",finishGame);
  }