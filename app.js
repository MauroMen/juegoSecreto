/*let titulos = document.querySelector('h1');
titulos.innerHTML = 'Juego del número secreto'; 
Ya no se usa esto */

// let parrafo = document.querySelector('p');
// parrafo.innerHTML = 'Elige un número del 1 al 10';





        limpiarCaja();
    
return;



function limpiarCaja() {
   /* let valorCaja =*/ document.querySelector('#valorUsuario').value = ''; //poniendo ".value = '' " al final de la linea logramos la misma funcion 
    //  valorCaja.value = '';
    //lo que esta comentado no es necesario, se puede achicar
}


// ACÁ SE GENERA UN NÚMERO ALEATORIO
function generarNumeroSecreto() {
   return Math.floor(Math.random()*10)+1;
} 


function condicionesIniciales() {
    asignarTextoElemento ("h1", 'Juego del número secreto');
    asignarTextoElemento ("p", 'Elige un número del 1 al 10');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}



function reiniciarJuego() {
    // LIAMPIAR CAJA
    limpiarCaja();
    // INDICAR MENSAEJ DE INTERVALO DE NÚMEROS
    // GENERAR NÚMERO ALEATORIO
    // REINICIAR NÚMEROS DE INTENTOS
    condicionesIniciales();
    // DESHABILITAR EL BOTÓN
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();




