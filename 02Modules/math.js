// function add(a,b){
//     return a + b;
// }

// module.exports = add; // for Single functions..

// function sub(a,b){
//     return a - b;
// }

// module.exports = {
//     addFn : add,
//      subFn: sub,
    // }; // for multiple functions..

// module.exports = {add};
// it throws an error if u use this with require math.js in result.js with one function

exports.addFn =(a, b) => a + b;
exports.subFn =(a, b) => a - b;