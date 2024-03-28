const uuid = require('uuid')
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
            allTiles.push(new Tile({color , number:i ,uuid:uuid.v1()}))
        }
    }
    return allTiles.concat(allTiles)
}

module.exports = {generateAllTiles}
