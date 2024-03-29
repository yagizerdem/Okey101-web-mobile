function fisher_yates(array){
    let i = array.length;
    while (--i > 0) {
       let temp = Math.floor(Math.random() * (i + 1));
       [array[temp], array[i]] = [array[i], array[temp]];
    }
    return array
};
module.exports = {fisher_yates}