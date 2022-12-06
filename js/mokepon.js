
const radioHipodoge = document.getElementById('Hipodoge')
const radioCapipepo = document.getElementById('Capipepo')
const radioRatigueya = document.getElementById('Ratigueya')

const mascotaJugador=document.getElementById('mascota-jugador')
const botonMascotaJugador = document.getElementById('boton-mascota')

const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionSeleccionarMascota= document.getElementById('seleccionar-mascota')

const mascotaEnemigo=document.getElementById('mascota-enemigo')

const botonFuego = document.getElementById('boton-fuego')
const botonAgua = document.getElementById('boton-agua')
const botonPlanta = document.getElementById('boton-planta')

const seccionMensajes = document.getElementById('resultado')
const ataquesjugador = document.getElementById('ataques-jugador')
const ataquesEnemigo = document.getElementById('ataques-enemigo')

const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const seccionReiniciar = document.getElementById('seccion-reiniciar')
const botonReiniciar = document.getElementById('boton-reiniciar')

let ataqueJugador = ""
let ataqueEnemigo = ""

let vidasJugador = 3;
let vidasEnemigo = 3;

window.addEventListener('load',iniciarJuego)

function iniciarJuego() {
    
    sectionSeleccionarAtaque.style.display = 'none'
    seccionReiniciar.style.display = 'none'
    
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador) 
    botonFuego.addEventListener('click', ataqueFuego)
    botonAgua.addEventListener('click', ataqueAgua)
    botonPlanta.addEventListener('click', ataquePlanta)
    botonReiniciar.addEventListener('click', reiniciarPartida)
}

function seleccionarMascotaJugador() {
    
    let nombreMascotaJugador = ""

    if(radioHipodoge.checked){
        nombreMascotaJugador = "Hipodoge"
        radioCapipepo.disabled=true
        radioRatigueya.disabled=true
    } else if (radioCapipepo.checked){
        nombreMascotaJugador = "Capipepo"
        radioHipodoge.disabled=true
        radioRatigueya.disabled=true
    } else if (radioRatigueya.checked) {
        nombreMascotaJugador = "Ratigueya"
        radioHipodoge.disabled=true
        radioCapipepo.disabled=true
    } else {
        alert("No has seleccionado ningún mokepon")
    }


    if(nombreMascotaJugador!=""){

        mascotaJugador.innerHTML=nombreMascotaJugador
        botonMascotaJugador.disabled=true
        sectionSeleccionarAtaque.style.display = 'flex'
        sectionSeleccionarMascota.style.display = 'none'

        seleccionarMascotaEnemigo() 
    }   

}

function seleccionarMascotaEnemigo() {

    let nombreMascotaEnemigo = ""

    let mascotaEnemigoAleatoria=aleatorio(1,3)

    if(mascotaEnemigoAleatoria==1){
        nombreMascotaEnemigo = "Hipodoge"
    } else if (mascotaEnemigoAleatoria==2){
        nombreMascotaEnemigo = "Capipepo"
    } else if (mascotaEnemigoAleatoria==3) {
        nombreMascotaEnemigo = "Ratigueya"
    } 


    mascotaEnemigo.innerHTML=nombreMascotaEnemigo

}

function ataqueFuego() {

    ataqueJugador="FUEGO"
    ataqueAleatorio()
}

function ataqueAgua() {

    ataqueJugador="AGUA"
    ataqueAleatorio()
}

function ataquePlanta() {

    ataqueJugador="PLANTA"
    ataqueAleatorio()
}

function ataqueAleatorio(){

    let ataque=aleatorio(1,3)

    if(ataque==1){
        ataqueEnemigo = "FUEGO"
    } else if (ataque==2){
        ataqueEnemigo = "AGUA"
    } else if (ataque==3) {
        ataqueEnemigo = "PLANTA"
    } 

    combate()
}

function combate(){  

    let resultado = ""

    if (ataqueJugador == ataqueEnemigo) {
        resultado = "EMPATE"
      } else if (ataqueJugador == "FUEGO" && ataqueEnemigo == "PLANTA") {
        resultado = "GANASTE"
        vidasEnemigo= vidasEnemigo-1
        spanVidasEnemigo.innerHTML= vidasEnemigo
      } else if (ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO") {
        resultado = "GANASTE"
        vidasEnemigo= vidasEnemigo-1
        spanVidasEnemigo.innerHTML= vidasEnemigo
      } else if (ataqueJugador == "PLANTA" && ataqueEnemigo == "AGUA") {
        resultado = "GANASTE"
        vidasEnemigo= vidasEnemigo-1
        spanVidasEnemigo.innerHTML= vidasEnemigo
      } else {
        resultado = "PERDISTE"
        vidasJugador= vidasJugador-1
        spanVidasJugador.innerHTML= vidasJugador
      }

      crearMensaje(resultado)
      revisarVidas()
}

function revisarVidas(){

    if(vidasEnemigo==0){
        crearMensajeFinal("FELICITACIONES! GANASTE :D")
    }
    if(vidasJugador==0){
        crearMensajeFinal("Que lastima, has perdido D:")
    }
}
function crearMensaje(resultado){

    let nuevoAtaqueJugador = document.createElement('p')
    let nuevoAtaqueEnemigo = document.createElement('p')

    seccionMensajes.innerHTML = resultado
    nuevoAtaqueJugador.innerHTML = ataqueJugador
    nuevoAtaqueEnemigo.innerHTML = ataqueEnemigo

    ataquesjugador.appendChild(nuevoAtaqueJugador)
    ataquesEnemigo.appendChild(nuevoAtaqueEnemigo)
}

function crearMensajeFinal(resultadoFinal){

    botonFuego.disabled = true    
    botonAgua.disabled = true
    botonPlanta.disabled = true
    
    seccionMensajes.innerHTML = resultadoFinal

    seccionReiniciar.style.display = 'flex'
}

function reiniciarPartida(){
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }



