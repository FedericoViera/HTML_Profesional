let ataqueJugador = ""
let ataqueEnemigo = ""

window.addEventListener('load',iniciarJuego)

function iniciarJuego() {

    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
    
    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    
    let botonPlanta = document.getElementById('boton-planta')
    botonPlanta.addEventListener('click', ataquePlanta)
    
}

function seleccionarMascotaJugador() {

    let radioHipodoge = document.getElementById('Hipodoge')
    let radioCapipepo = document.getElementById('Capipepo')
    let radioRatigueya = document.getElementById('Ratigueya')
    let nombreMascotaJugador = ""

    if(radioHipodoge.checked){
        nombreMascotaJugador = "Hipodoge"
    } else if (radioCapipepo.checked){
        nombreMascotaJugador = "Capipepo"
    } else if (radioRatigueya.checked) {
        nombreMascotaJugador = "Ratigueya"
    } else {
        alert("No has seleccionado ningún mokepon")
    }

    let mascotaJugador=document.getElementById('mascota-jugador')

    if(nombreMascotaJugador!=""){
        mascotaJugador.innerHTML=nombreMascotaJugador
    }   

    seleccionarMascotaEnemigo() 
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

    let mascotaEnemigo=document.getElementById('mascota-enemigo')

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
}
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }



