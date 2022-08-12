function receivesAFunction(callBackFunction) {
    callBackFunction()
}

function returnsANamedFunction() {
    return function notFun() {return console.log("hello world")} 
}

function returnsAnAnonymousFunction() {
    return (() => {return console.log("Hi, Anon")})
}

