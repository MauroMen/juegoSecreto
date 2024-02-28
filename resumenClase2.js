//ACTIVIDAD 1


// ÉSTE ES EL METODO DE ASIGNAR TEXTO A UN ELEMENTO HTML DE ANTES
let titulos = document.querySelector('h1');
titulos.innerHTML = 'Juego del número secreto'; 


 let parrafo = document.querySelector('p');
 parrafo.innerHTML = 'Elige un número del 1 al 10';



// ÉSTE ES EL MÉTODO DE ASIGNAR TEXTO A UN ELEMENTO HTML DE AHORA

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


asignarTextoElemento ("h1", 'Juego del número secreto');
asignarTextoElemento ("p", 'Elige un número del 1 al 10');














// ACTIVIDAD 2

let numeroSecreto = generarNumeroSecreto();

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;
 } 


 // Cosas sobre el function

 function name(params) {

 }






 // ACTIVIDAD 3

 function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
 }













