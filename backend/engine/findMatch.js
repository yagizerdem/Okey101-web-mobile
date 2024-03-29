const {emitInitialData} = require('../Emitters/emitInitialData');
const {allPlayers} = require('../db/player');
const {fisher_yates} = require('../util/fisher_yates')
const {createRoom} = require('./createRoom')
var waitQueue = [] // only keys 
var loop = null;
function findMatch(){
    if(Object.keys(waitQueue).length < 4){
        clearInterval(loop)
        loop = null
        return
    }
    const listofkeys = fisher_yates(waitQueue.splice(0,4))
    // sanity check
    var flag = true
    listofkeys.forEach((item)=>{
        if(!allPlayers[item]) flag = false 
    })
    if(!flag) return
    //
   
    createRoom({playerkeys:listofkeys})
     
    // send data
    for(let key of listofkeys){
        emitInitialData(key)
    }
}
function addToWaitQueue({key , io , socket}){
    waitQueue.push(key)
    if(Object.keys(waitQueue).length >= 4) loop = setInterval(findMatch , 100)
}
function removeKeyFromWaitQueue({key}){
    waitQueue = waitQueue.filter(item => item != key)
}
module.exports = {findMatch , addToWaitQueue , removeKeyFromWaitQueue}

