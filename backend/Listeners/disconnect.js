const {allPlayers} = require('../db/player')
const { allRooms } = require('../db/room')
const {removeKeyFromWaitQueue} = require('../engine/findMatch')
module.exports = (io, socket) => {
    const disconnect = (reason) => {
      const roomkey = allPlayers[socket.id].roomuuid
      delete allPlayers[socket.id]
      removeKeyFromWaitQueue({key:socket.id})

      if(allRooms[roomkey]){
        allRooms[roomkey].activePlayerCount--
        if(allRooms[roomkey].activePlayerCount == 0){
          delete allRooms[roomkey]
        }
      }

      console.log(`reason --> ${reason}`)
    }
    socket.on("disconnect",disconnect);
  }