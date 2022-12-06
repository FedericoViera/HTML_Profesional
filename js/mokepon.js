let ataqueJugador = ""
let ataqueEnemigo = ""

let vidasJugador = 3;
let vidasEnemigo = 3;

window.addEventListener('load',iniciarJuego)

function iniciarJuego() {

    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'none'

    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
    
    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    
    let botonPlanta = document.getElementById('boton-planta')
    botonPlanta.addEventListener('click', ataquePlanta)
    
    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarPartida)

    let seccionReiniciar = document.getElementById('seccion-reiniciar')
    seccionReiniciar.style.display = 'none'

}

function seleccionarMascotaJugador() {


    let radioHipodoge = document.getElementById('Hipodoge')
    let radioCapipepo = document.getElementById('Capipepo')
    let radioRatigueya = document.getElementById('Ratigueya')
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

    let mascotaJugador=document.getElementById('mascota-jugador')

    if(nombreMascotaJugador!=""){
        mascotaJugador.innerHTML=nombreMascotaJugador

        let botonMascotaJugador = document.getElementById('boton-mascota')
        botonMascotaJugador.disabled=true

        let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
        sectionSeleccionarAtaque.style.display = 'flex'

        let sectionSeleccionarMascota= document.getElementById('seleccionar-mascota')
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
    combate()
}
function combate(){

    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')

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

    let seccionMensajes = document.getElementById('resultado')
    let ataquesjugador = document.getElementById('ataques-jugador')
    let ataquesEnemigo = document.getElementById('ataques-enemigo')

    let nuevoAtaqueJugador = document.createElement('p')
    let nuevoAtaqueEnemigo = document.createElement('p')

    seccionMensajes.innerHTML = resultado
    nuevoAtaqueJugador.innerHTML = ataqueJugador
    nuevoAtaqueEnemigo.innerHTML = ataqueEnemigo

    ataquesjugador.appendChild(nuevoAtaqueJugador)
    ataquesEnemigo.appendChild(nuevoAtaqueEnemigo)
}
function crearMensajeFinal(resultadoFinal){

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true
    
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true

    let botonPlanta = document.getElementById('boton-planta')
    botonPlanta.disabled = true

    let seccionMensajes = document.getElementById('resultado')

    
    seccionMensajes.innerHTML = resultadoFinal

    let seccionReiniciar = document.getElementById('seccion-reiniciar')
    seccionReiniciar.style.display = 'flex'
}
function reiniciarPartida(){
    location.reload()
}
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }



