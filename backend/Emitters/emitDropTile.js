const { getIO } = require("../socket-setup");

function emitDropTile({socketid , tileuuid}){
    const io = getIO();
    io.to(socketid).emit("droptile",tileuuid)
}
module.exports ={emitDropTile}