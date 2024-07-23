/**
 *  Tablas de Multiplicar
 * Autor: Johan Cuellar
 * Fecha: 9 de Julio de 2024
 */

document.addEventListener('DOMContentLoaded', function(){
    //alert('hola');
    let tabla = [];
    let multiplo = [];
    let resultado;
    let numeroTabla;
    let numeroMultiplo;
    let iteracionTabla;
    let iteracionMultiplo;
    let printResultado = "";

    for (iteracionTabla = 0; iteracionTabla < 5; iteracionTabla++) {
        numeroTabla = iteracionTabla + 1;
        multiplo = [];
        for (iteracionMultiplo = 0; iteracionMultiplo < 10; iteracionMultiplo++) {
            numeroMultiplo = iteracionMultiplo + 1;
            resultado = numeroTabla * numeroMultiplo;
            multiplo.push(resultado);
        }
        tabla.push(multiplo);
    }

    for (iteracionTabla = 0; iteracionTabla < 5; iteracionTabla++) {
        numeroTabla = iteracionTabla + 1;
        printResultado += '<div class="card" style="width: 18rem; margin-left: 5px">';
        printResultado += '<div class="card-body">';
        printResultado += '<h5 class="card-title">Tabla '+numeroTabla+'</h5>';
        printResultado += '<ul class="list-group list-group-flush">';
        for (iteracionMultiplo = 0; iteracionMultiplo < 10; iteracionMultiplo++) {
            numeroMultiplo = iteracionMultiplo + 1;
            printResultado += '<li class="list-group-item">'+numeroTabla+'X'+numeroMultiplo+'='+tabla[iteracionTabla][iteracionMultiplo]+'</li>';
            
        }
        printResultado += '';
        printResultado += '</div>';
        printResultado += '</div>';
    }
    document.getElementById('resultadoTablas').innerHTML = printResultado;
    //console.log(tabla);
})