import { socket } from "./socket"
const queryObject = {
    findMatch:(name)=>{
        socket.emit("searchmatch",{name:name})
    },
    sendChat:(chat)=>{
        socket.emit("sendchat",chat)
    }
}

export default queryObject