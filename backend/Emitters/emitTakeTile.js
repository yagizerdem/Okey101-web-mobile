const { getIO } = require("../socket-setup");

function emitTakeTile({ socketid , tile}){
    // emit new tile and show on ui
    const io = getIO();
    io.to(socketid).emit("newtile",tile)
}
module.exports ={emitTakeTile}