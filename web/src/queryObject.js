import { socket } from "./socket"
const queryObject = {
    findMatch:(name)=>{
        socket.emit("searchmatch",{name:name})
    }
}

export default queryObject