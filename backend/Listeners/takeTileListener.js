const { canTakeTile } = require("../engine/canTakeTile");
const { takeTile } = require("../engine/takeTile");

module.exports = (io, socket) => {
    function takePieceListener({stackno}){
        const flag = canTakeTile({socketid:socket.id , stackno})
        if(flag){
            // take tile
            takeTile({socketid:socket.id , stackno:stackno})
        }
        else{
            // invalid
        }
    }
    socket.on("takepiece",takePieceListener)
};
  