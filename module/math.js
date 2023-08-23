const mathe ={};

function getRandomInt (max)   {
    return Math.floor(Math.random()* max);
}

function add(a,b) {
    return a + b;
}

function substract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    if ((b == 0 && a ==0) || (b == 0 )){
        return 'ERROR: N/A :: valores a = ${a} y b = ${b}'
    } else {
        return a / b;
}
}



Math.add = add;
Math.substract = substract;
Math.multiply = multiply;
Math.divide = divide;
Math.getRandomInt = getRandomInt;

module.exports = Math;