const { allRooms } = require("../db/room");
const { getIO } = require("../socket-setup");
function emitUpdateStacks({roomuuid}){
    const io = getIO();
    const roomFromdb = allRooms[roomuuid]
    for(let psocketid of roomFromdb.allPlayers){
        const allStacks ={
            stack1:roomFromdb.stack1.lenght == 0 ? null : roomFromdb.stack1[roomFromdb.stack1.length-1],
            stack2:roomFromdb.stack2.lenght == 0 ? null : roomFromdb.stack2[roomFromdb.stack2.length-1],
            stack3:roomFromdb.stack3.lenght == 0 ? null : roomFromdb.stack3[roomFromdb.stack3.length-1],
            stack4:roomFromdb.stack4.lenght == 0 ? null : roomFromdb.stack4[roomFromdb.stack4.length-1],
        }
        io.to(psocketid).emit("udpatestacks",allStacks)
    }
}
module.exports ={emitUpdateStacks}