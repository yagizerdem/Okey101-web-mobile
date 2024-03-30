const {canDrop} = require('../engine/canDrop')
const { dropTile } = require('../engine/dropTile')
module.exports = (io, socket) => {
    function dropPiece({uuid ,no}){
        let flag =  canDrop({uuid , stackno:no , socketid:socket.id})
        if(flag){
            // drop
            dropTile({uuid ,stackno:no , socketid:socket.id})
        }
        else {
            // not valid move
        }
    }
    socket.on("droppiece",dropPiece);
  }