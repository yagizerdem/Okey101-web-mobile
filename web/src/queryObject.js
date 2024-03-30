import { socket } from "./socket"
const queryObject = {
    findMatch:(name)=>{
        socket.emit("searchmatch",{name:name})
    },
    sendChat:(chat)=>{
        socket.emit("sendchat",chat)
    },
    dropPiece:(uuid, no)=>{
        socket.emit("droppiece",{uuid , no})
    },
    takePiece:({stackno})=>{
        socket.emit("takepiece",{stackno})
    },
    finishGame:({boardMatrix})=>{
        socket.emit("finishGame",boardMatrix)
    }
}

export default queryObject