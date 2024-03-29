class Player{
    constructor({socketid }){
        this.socketid = socketid;
        this.name = null;
        this.turn = null;
        this.allTiles = [];
        this.opponents = {
            top:null,
            right:null,
            left:null
        };
        this.roomuuid = null,
        this.no = -1;
    }
}
const allPlayers ={}

module.exports ={Player , allPlayers}