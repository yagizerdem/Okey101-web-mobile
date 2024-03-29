const {allPlayers} = require('../db/player')
const {addToWaitQueue} = require('../engine/findMatch')
module.exports = (io, socket) => {
  const searchMatch = (payload) => {
    const {name} = payload
    allPlayers[socket.id].name = name
    addToWaitQueue({key:socket.id})
  };
  socket.on("searchmatch", searchMatch);
};
