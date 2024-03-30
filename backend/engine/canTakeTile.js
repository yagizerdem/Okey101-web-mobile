const { allPlayers } = require("../db/player")

function canTakeTile({socketid , stackno}){
    const playerfromdb = allPlayers[socketid]
    if(!playerfromdb.turn) return false
    if(playerfromdb.allTiles.length ==15) return false
    if(!((playerfromdb.no-1) % 4 + 1 == stackno || stackno == 5)) return false
    return true
}
module.exports ={canTakeTile}