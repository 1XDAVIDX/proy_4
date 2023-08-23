require("colors");


const math = require('./module/math.js')

console.clear();
/*console.log(math);
*/
const main = async() => {
    let j= (math.getRandomInt(10));
    let d= (math.getRandomInt(10));

    console.log('***************************************'.yellow);
    console.log('*      '.yellow, 'Funciones Matematicas'.bgRed, '        *'.yellow);
    console.log('***************************************\n'.yellow);
    console.log('***************************************'.grey);
    console.log('*    '.gray, "Numeros Generados".cyan," =>"+" "+j+""+","+d+'    *'.gray);
    console.log('***************************************'.gray);
    console.log('*    '.gray,   "suma".yellow,"("+j+" + " +d + ") =" +  math.add(j,d), '                *'.gray);
    console.log('*    '.gray,   "resta".yellow,"("+j+" - "+d + ") =" + math.substract(j,d), '               *'.gray);
    console.log('*    '.gray,    "multiplica".yellow,"("+j+" * "+d + ") =" + math.multiply(j,d), '          *'.gray);
    console.log('*    '.gray,   "divide".yellow,"("+j+" / "+d + ") =" + math.divide(j,d), '            *'.gray);

    console.log('***************************************\n'.gray);
}


main();