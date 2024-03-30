const crypto = require('crypto');
const {fisher_yates} = require('../util/fisher_yates')
class Tile{
    static colors = ['red','blue','green','black']
    constructor({number ,color ,uuid}){
        this.number = number;
        this.color = color;
        this.uuid = uuid;
    }
}

const generateAllTiles = ()=>{
    const allTiles = []
    for(let i = 1 ; i <= 13 ; i++){
        for(let color of Tile.colors){
            allTiles.push(new Tile({color , number:i ,uuid:crypto.randomUUID()}))
            allTiles.push(new Tile({color , number:i ,uuid:crypto.randomUUID()}))
        }
    }
    return fisher_yates(allTiles)
}

module.exports = {Tile , generateAllTiles}
