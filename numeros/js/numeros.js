/**
 * Números del 1 al 10
 * Autor: Johan CS
 * Fecha: 8 de julio de 2024
 */
let arregloNumeros = [];
let iteracion;
let numero;
let resultadoPrint = "";

arregloNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (iteracion = 0; iteracion < arregloNumeros.length; iteracion++) {
    resultadoPrint += '<li class="list-group-item">'+arregloNumeros[iteracion]+'</li>';
}
console.log(resultadoPrint)
document.getElementById('listaNumeros').innerHTML = resultadoPrint;


arregloNumeros = [];

for (iteracion = 0; iteracion < 10; iteracion++) {
    numero = iteracion+1;
    arregloNumeros.push(numero);
}

resultadoPrint = "";

for (iteracion = 0; iteracion < arregloNumeros.length; iteracion++) {
    resultadoPrint += '<li class="list-group-item">'+arregloNumeros[iteracion]+'</li>';
}

console.log(resultadoPrint)
document.getElementById('listaNumeros2').innerHTML = resultadoPrint;
