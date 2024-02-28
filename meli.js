
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
console.log(numeroSecreto);

//Funciones
function asignarTextoElemento(elemento, texto){
    let elementHTML = document.querySelector(elemento); //es un objeto
    elementHTML.innerHTML = texto;
    return;
}
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(numeroDeUsuario === numeroSecreto);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Felicidades, acertaste en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > numeroSecreto) {
             asignarTextoElemento('p', 'El número es menor');
        } else {
            asignarTextoElemento('p', 'El número es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}


function generarNumeroSecreto() {
   let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento ("p", 'Ya se sortearon todos los números posibles');
    } else {

        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado)
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento ("h1", 'Juego del número secreto');
    asignarTextoElemento ("p", `Indica un número del 1 al ${numeroMaximo}`);
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

//atajo asignar texto
//asignarTextoElemento ('h1', "Juego del número secreto");
//asignarTextoElemento ('p', `Indica un número del 1 al ${numeroMaximo}`);


condicionesIniciales();








