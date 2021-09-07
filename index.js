//option #1
// function receivesAFunction(callback){
//     return callback();
// }

//option #2
// const receivesAFunction = (callback) => {
//     return callback()
// }

//option #3
const receivesAFunction = (callback) => callback()

//test 2 option 1
// function returnsANamedFunction() {
//     return function callback(){
//     }
// }
//test 2 option 2
const returnsANamedFunction = () => {
    return function callback(){
    }
}

const returnsAnAnonymousFunction = () => {
    return function(){}
}

//const returnsAnAnonymousFunction() => ()