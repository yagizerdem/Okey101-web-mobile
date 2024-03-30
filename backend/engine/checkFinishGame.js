const { allPlayers } = require("../db/player");

function checkFinishGame({ socketid, boardMatrix }) {
  let playerFromdb = allPlayers[socketid];
  let filtered = boardMatrix[0]
    .concat(boardMatrix[1])
    .filter((item) => item != 0);
  if (filtered.length != 14) {
    return false;
  }
  // anit cheat
  let allTilesuuid = playerFromdb.allTiles.map((item) => item.uuid);
  for (let t of filtered) {
    if (!allTilesuuid.includes(t.uuid)) return false;
  }

  // parse to slices
  let allSlice = [];
  for (let i = 0; i < 2; i++) {
    let slice = [];
    for (let j = 0; j < 15; j++) {
      if (boardMatrix[i][j] != 0) {
        slice.push(boardMatrix[i][j]);
      } else {
        if (slice.length > 0) {
          allSlice.push(slice);
          slice = [];
        }
      }
    }
    if(slice.length > 0)allSlice.push(slice)
  }
  
  // validation 
  let flag = true; // valid
  for (let slice of allSlice) {
    if (slice.length < 3) {
      flag = false
      break
    }
    const isColorSeries = slice[0].color != slice[1].color;
    const isNuberSeries = slice[0].color == slice[1].color;
    let colors = [];
  
    // check duplicate colors
    if(isColorSeries){
      for(let p of slice){
          if(colors.includes(p.color)) flag = false
          else colors.push(p.color)
        }
    }
  
    for (let i = 0; i < slice.length - 1; i++) {
      if (isColorSeries) {
        if (
          slice[i].number != slice[i + 1].number ||
          !colors.includes(slice[i].color)
        ) {
          flag = false;
          break;
        }
      }
      if (isNuberSeries) {
        if (slice[i].number != slice[i + 1].number - 1) {
          flag = false;
          break;
        }
      }
    }
    if (!flag) break;
  }
  return flag
}
module.exports = { checkFinishGame };
