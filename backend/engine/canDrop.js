const { allPlayers } = require("../db/player")

function canDrop({uuid , stackno , socketid}){
    let playerFromDb = allPlayers[socketid]
    if(!playerFromDb.turn) return false
    if(playerFromDb.allTiles.length < 15)return false // must has 15 tiles in okey
    // tile exist for anicheat 
    let flag = false
    for(let piece of playerFromDb.allTiles){
        if(piece.uuid == uuid){
            flag = true
            break
        }
    }
    if(!flag) return false
    
    // check correct stack no
    if((playerFromDb.no % 4 + 1) != stackno) return false

    return true
}

module.exports = {canDrop}