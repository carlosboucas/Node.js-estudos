function soma(a,b){
    return a + b;
}

function mult(a,b){
    return a*b;
}

function sub(a,b){
    return a-b;
}

function div(a,b){
    return a/b;
}

var calculadora = {
    soma,
    mult,
    sub,
    div
}

module.exports = calculadora;