let numeroDeUsuario =

function asignarTextoElemento(elemento, texto) {
   let elementoHTML = document.querySelector(elemento);
 elementoHTML.innerHTML = texto;
 return;
}


function intentoDeUsuario() {
    alert ("Click en el botón");
    return;
 }


function generaraNumeroSecreto() {
    let numeroSecreto = Math.floor(Math.random()*10)+1;
    return numeroSecreto;
}


asignarTextoElemento ("h1",'Juego del número secreto');
asignarTextoElemento ("p",'Elige un número del 1 al 10');




console.log (numeroSecreto);


alert(numeroDeUsuario);



















