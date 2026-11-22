// datos de la condicion
const cupoCata = 8;
const inscritos = 8;

// condicional de cata abierta o llena
// si el numero de cupos es mayor que el numero de incritos devuelve "hay cupos, abrir reserva"
// si no devuelve "cata llena, ofrecer lista de espera"

if (cupoCata > inscritos) {
    console.log("hay cupos, abrir reserva");
} else {
    console.log("cata llena, ofrecer lista de espera");
}

// operadores de comparacion
8 > 5   // true
3 < 10  // true
8 >= 8  // true
4 <= 9  // true 
5 === 5 // true
5 !== 3 // true