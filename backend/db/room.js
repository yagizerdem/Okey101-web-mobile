class Room {
  constructor({ uuid }) {
    this.uuid = uuid;
    this.mainStack = [];
    this.stack1 = [];
    this.stack2 = [];
    this.stack3 = [];
    this.stack4 = [];
    this.allPlayers=[];
    this.activePlayerCount = 0;
  }
}
const allRooms = {}
module.exports = {Room , allRooms}
