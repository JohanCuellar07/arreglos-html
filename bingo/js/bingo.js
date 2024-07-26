/**
 * Bingo
 * Autor: Johan Cuellar
 * Fecha: 9 de Julio de 2024
 */

document.addEventListener('DOMContentLoaded', function(){
    let bingo = [];
    let interno = [];
    let arregloCabeza = [];
    let colColors = [];
    let iterarF;
    let iterarC;
    let iterarH;
    let impResultado = '';
    let resaltadoClase;
    let posF;
    let posC;
    let posF1;
    let posC1;
    let posF2;
    let posC2;
    
    arregloCabeza = ['B', 'I', 'N', 'G', 'O'];
    
    for (iterarF = 0; iterarF < 5; iterarF++) {
        interno = [];
        for (iterarC = 0; iterarC < 5; iterarC++) {
            num = Math.floor(Math.random() * (99 - 10 + 1)+ 10);
            interno.push(num);
        }
        bingo.push(interno);
    }

    //  Bingo Vacío

    impResultado += '<div class="card" style="width: 22rem">';
    impResultado += '<div class="card-header cabeza">';
    impResultado += '<div class="row">';
    for (iterarH = 0; iterarH < arregloCabeza.length; iterarH++) {
        impResultado += '<div class="col text-center">'+arregloCabeza[iterarH]+'</div>';        
    }
    impResultado += '</div>';
    impResultado += '</div>';
    impResultado += '<div class="card-body">';
    for (iterarF = 0; iterarF < bingo.length; iterarF++) {
        impResultado += '<div class="row">';
        for (iterarC = 0; iterarC < bingo.length; iterarC++) {
            impResultado += '<div class="col text-center num">'+bingo[iterarF][iterarC]+'</div>';
        }
        impResultado += '</div>';
    }
    impResultado += '</div>';
    impResultado += '</div>';

    document.getElementById('bingoImp').innerHTML = impResultado;

    //  Bingo Letras

    impResultado = '';

    colColors = ['col-b', 'col-i', 'col-n', 'col-g', 'col-o'];

    impResultado += '<div class="card" style="width: 22rem">';
    impResultado += '<div class="card-header cabeza">';
    impResultado += '<div class="row">';
    for (iterarH = 0; iterarH < arregloCabeza.length; iterarH++) {
        impResultado += '<div class="col text-center">'+arregloCabeza[iterarH]+'</div>';        
    }
    impResultado += '</div>';
    impResultado += '</div>';
    impResultado += '<div class="card-body">';
    for (iterarF = 0; iterarF < bingo.length; iterarF++) {
        impResultado += '<div class="row">';
        for (iterarC = 0; iterarC < bingo.length; iterarC++) {
            impResultado += '<div class="col text-center num '+colColors[iterarC]+'">'+bingo[iterarF][iterarC]+'</div>';
        }
        impResultado += '</div>';
    }
    impResultado += '</div>';
    impResultado += '</div>';

    document.getElementById('bingoLet').innerHTML = impResultado;

    //  Bingo Equis (X)
    //  X1

    impResultado = '';
    posF = 0;
    posC = 0;

    impResultado += '<div class="card" style="width: 22rem">';
    impResultado += '<div class="card-header cabeza">';
    impResultado += '<div class="row">';
    for (iterarH = 0; iterarH < arregloCabeza.length; iterarH++) {
        impResultado += '<div class="col text-center">'+arregloCabeza[iterarH]+'</div>';        
    }
    impResultado += '</div>';
    impResultado += '</div>';
    impResultado += '<div class="card-body">';
    for (iterarF = 0; iterarF < bingo.length; iterarF++) {
        impResultado += '<div class="row">';
        for (iterarC = 0; iterarC < bingo.length; iterarC++) {
            resaltadoClase = '';
            if ((iterarF === posF && iterarC === posC) || (iterarF === posF && iterarC === posC + 2) ||
                (iterarF === posF + 1 && iterarC === posC + 1) ||
                (iterarF === posF + 2 && iterarC === posC) || (iterarF === posF + 2 && iterarC === posC + 2)) {
                    resaltadoClase = 'resaltado';
            }
            else{
                resaltadoClase = '';
            }
            impResultado += '<div class="col text-center num '+resaltadoClase+'">'+bingo[iterarF][iterarC]+'</div>';
        }
        impResultado += '</div>';
    }
    impResultado += '</div>';
    impResultado += '</div>';

    document.getElementById('bingoX1').innerHTML = impResultado;

    //  X2

    impResultado = '';
    posF = 0;
    posC = 2;

    impResultado += '<div class="card" style="width: 22rem">';
    impResultado += '<div class="card-header cabeza">';
    impResultado += '<div class="row">';
    for (iterarH = 0; iterarH < arregloCabeza.length; iterarH++) {
        impResultado += '<div class="col text-center">'+arregloCabeza[iterarH]+'</div>';        
    }
    impResultado += '</div>';
    impResultado += '</div>';
    impResultado += '<div class="card-body">';
    for (iterarF = 0; iterarF < bingo.length; iterarF++) {
        impResultado += '<div class="row">';
        for (iterarC = 0; iterarC < bingo.length; iterarC++) {
            resaltadoClase = '';
            if ((iterarF === posF && iterarC === posC) || (iterarF === posF && iterarC === posC + 2) ||
                (iterarF === posF + 1 && iterarC === posC + 1) ||
                (iterarF === posF + 2 && iterarC === posC) || (iterarF === posF + 2 && iterarC === posC + 2)) {
                    resaltadoClase = 'resaltado';
            }
            else{
                resaltadoClase = '';
            }
            impResultado += '<div class="col text-center num '+resaltadoClase+'">'+bingo[iterarF][iterarC]+'</div>';
        }
        impResultado += '</div>';
    }
    impResultado += '</div>';
    impResultado += '</div>';

    document.getElementById('bingoX2').innerHTML = impResultado;

    //  X3

    impResultado = '';
    posF = 2;
    posC = 0;

    impResultado += '<div class="card" style="width: 22rem">';
    impResultado += '<div class="card-header cabeza">';
    impResultado += '<div class="row">';
    for (iterarH = 0; iterarH < arregloCabeza.length; iterarH++) {
        impResultado += '<div class="col text-center">'+arregloCabeza[iterarH]+'</div>';        
    }
    impResultado += '</div>';
    impResultado += '</div>';
    impResultado += '<div class="card-body">';
    for (iterarF = 0; iterarF < bingo.length; iterarF++) {
        impResultado += '<div class="row">';
        for (iterarC = 0; iterarC < bingo.length; iterarC++) {
            resaltadoClase = '';
            if ((iterarF === posF && iterarC === posC) || (iterarF === posF && iterarC === posC + 2) ||
                (iterarF === posF + 1 && iterarC === posC + 1) ||
                (iterarF === posF + 2 && iterarC === posC) || (iterarF === posF + 2 && iterarC === posC + 2)) {
                    resaltadoClase = 'resaltado';
            }
            else{
                resaltadoClase = '';
            }
            impResultado += '<div class="col text-center num '+resaltadoClase+'">'+bingo[iterarF][iterarC]+'</div>';
        }
        impResultado += '</div>';
    }
    impResultado += '</div>';
    impResultado += '</div>';

    document.getElementById('bingoX3').innerHTML = impResultado;

    //  X

    impResultado = '';

    impResultado += '<div class="card" style="width: 22rem">';
    impResultado += '<div class="card-header cabeza">';
    impResultado += '<div class="row">';
    for (iterarH = 0; iterarH < arregloCabeza.length; iterarH++) {
        impResultado += '<div class="col text-center">'+arregloCabeza[iterarH]+'</div>';        
    }
    impResultado += '</div>';
    impResultado += '</div>';
    impResultado += '<div class="card-body">';
    for (iterarF = 0; iterarF < bingo.length; iterarF++) {
        impResultado += '<div class="row">';
        for (iterarC = 0; iterarC < bingo.length; iterarC++) {
            resaltadoClase = '';
            if ((iterarF === 0 && iterarC === 0) || (iterarF === 0 && iterarC === 2) || (iterarF === 0 && iterarC === 4) ||
                (iterarF === 1 && iterarC === 1) || (iterarF === 1 && iterarC === 3) ||
                (iterarF === 2 && iterarC === 0) || (iterarF === 2 && iterarC === 2) || (iterarF === 2 && iterarC === 4) ||
                (iterarF === 3 && iterarC === 1) ||
                (iterarF === 4 && iterarC === 0) || (iterarF === 4 && iterarC === 2)) {
                    resaltadoClase = 'resaltado';
            }
            else{
                resaltadoClase = '';
            }
            impResultado += '<div class="col text-center num '+resaltadoClase+'">'+bingo[iterarF][iterarC]+'</div>';
        }
        impResultado += '</div>';
    }
    impResultado += '</div>';
    impResultado += '</div>';

    document.getElementById('bingoX').innerHTML = impResultado;

    //  X Grande

    impResultado = '';
    posF1 = 2;
    posC1 = 0;
    posF2 = 2;
    posC2 = 4;

    impResultado += '<div class="card" style="width: 22rem">';
    impResultado += '<div class="card-header cabeza">';
    impResultado += '<div class="row">';
    for (iterarH = 0; iterarH < arregloCabeza.length; iterarH++) {
        impResultado += '<div class="col text-center">'+arregloCabeza[iterarH]+'</div>';        
    }
    impResultado += '</div>';
    impResultado += '</div>';
    impResultado += '<div class="card-body">';
    for (iterarF = 0; iterarF < bingo.length; iterarF++) {
        impResultado += '<div class="row">';
        for (iterarC = 0; iterarC < bingo.length; iterarC++) {
            resaltadoClase = '';
            if ((iterarF === posF1 && iterarC === posC1) || (iterarF === posF2 && iterarC === posC2) ||
                (iterarF === posF1 + 1 && iterarC === posC1 + 1) || (iterarF === posF2 + 1 && iterarC === posC2 - 1) ||
                (iterarF === posF1 + 2 && iterarC === posC1 + 2) || (iterarF === posF2 + 2 && iterarC === posC2 - 2) ||
                (iterarF === posF1 + 3 && iterarC === posC1 + 3) || (iterarF === posF2 + 3 && iterarC === posC2 - 3) ||
                (iterarF === posF1 + 4 && iterarC === posC1 + 4) || (iterarF === posF2 + 4 && iterarC === posC2 - 4)) {
                    resaltadoClase = 'resaltado';
            }
            else{
                resaltadoClase = '';
            }
            impResultado += '<div class="col text-center num '+resaltadoClase+'">'+bingo[iterarF][iterarC]+'</div>';
        }
        impResultado += '</div>';
    }
    impResultado += '</div>';
    impResultado += '</div>';

    document.getElementById('bingoXBig').innerHTML = impResultado;
})
