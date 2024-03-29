const { allPlayers } = require("../db/player");
const { allRooms } = require("../db/room");

module.exports = (io, socket) => {
    const newChat = (chat) => {
        const roomkey = allPlayers[socket.id].roomuuid
        const roomFromDb = allRooms[roomkey]
        for(let socketid of roomFromDb.allPlayers){
            io.to(socketid).emit("newchat",chat)
        }
    }
    socket.on("sendchat",newChat);
  }