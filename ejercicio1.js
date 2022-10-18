//principio de abstraccion - simplificacion, crear diferentes objetos o funciones

const suma = (number1, number2) => {
    //const number1 = 1, number2 = 2
    const resultado = number1 + number2
    console.log(`La suma de ${number1} + ${number2} es ` + resultado)

}
//suma(5,2)


const resta = (number1, number2) => {
    //const number1 = 1, number2 = 2
    const resultado = number1 - number2
    console.log(`La resta de ${number1} y ${number2} es ` + resultado)

}
resta(8,2)


const multiplicacion = (number1, number2) => {
    //const number1 = 1, number2 = 2
    const resultado = number1 * number2
    console.log(`La multiplicacion de ${number1} y ${number2} es ${resultado}`)

}
multiplicacion(2,7)


const division = (number1, number2) => {
    //const number1 = 1, number2 = 2
    const resultado = number1 / number2
    console.log(`La division de ${number1} y ${number2} es ${resultado}`)

}
division(3,14)

/*exports.suma=suma
exports.resta=resta
exports.multiplicacion=multiplicacion
exports.division=division
*/


//generacion de modulos

const operaciones={}

//objeto
operaciones.suma=suma
operaciones.resta=resta
operaciones.multiplicacion=multiplicacion
operaciones.division=division

//exportar el modulo
module.exports=operaciones

//MODULOS
//OBJETO              //PROPIEDADES
    //OPERACIONES  .  SUMA = SUMA

