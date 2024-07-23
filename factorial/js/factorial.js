/**
 * Números Factoriales
 * Autor: Johan CS
 * Fecha: 8 de julio de 2024
 */
let arregloNumeros = [];
let iteracion;
let numero = 1;
let resultadoPrint = "";

arregloNumeros = [1, 2, 6, 24, 120, 720, 5040, 40320, 362880, 3628800];

for (iteracion = 0; iteracion < arregloNumeros.length; iteracion++) {
    resultadoPrint += '<li class="list-group-item">'+arregloNumeros[iteracion]+'</li>';
}
console.log(resultadoPrint)
document.getElementById('listaNumeros').innerHTML = resultadoPrint;


arregloNumeros = [];

for (iteracion = 0; iteracion < 10; iteracion++) {
    numero *= iteracion + 1;
    arregloNumeros.push(numero);
}

resultadoPrint = "";

for (iteracion = 0; iteracion < arregloNumeros.length; iteracion++) {
    resultadoPrint += '<li class="list-group-item">'+arregloNumeros[iteracion]+'</li>';
}

console.log(resultadoPrint)
document.getElementById('listaNumeros2').innerHTML = resultadoPrint;
