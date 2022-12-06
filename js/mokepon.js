

const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionSeleccionarMascota= document.getElementById('seleccionar-mascota')

const contenedorTarjetas=document.getElementById('contenedor-Tarjetas')
const mascotaJugador=document.getElementById('mascota-jugador')
const botonMascotaJugador = document.getElementById('boton-mascota')
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


let radioHipodoge 
let radioCapipepo 
let radioRatigueya 

let ataqueJugador = ""
let ataqueEnemigo = ""

let vidasJugador = 3
let vidasEnemigo = 3

let opcionDeMokepnes = ''
let mokepones = [];

class Mokepon {
     constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
     }
}

let hipodoge = new Mokepon('Hipodoge','./assests/mokepons_mokepon_hipodoge_attack.png','5')
let capipepo = new Mokepon('Capipepo','./assests/mokepons_mokepon_capipepo_attack.png','5')
let ratigueya = new Mokepon('Ratigueya','./assests/mokepons_mokepon_ratigueya_attack.png','5')

hipodoge.ataques.push(

    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🌼', id: 'boton-planta' }
)

ratigueya.ataques.push(

    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🌼', id: 'boton-planta' },
    { nombre: '💧', id: 'boton-agua' }
)

capipepo.ataques.push(

    { nombre: '🌼', id: 'boton-planta' },
    { nombre: '🌼', id: 'boton-planta' },
    { nombre: '🌼', id: 'boton-planta' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '💧', id: 'boton-agua' }
)

mokepones.push(hipodoge,capipepo,ratigueya)

/*window.addEventListener('load', iniciarJuego)*/

iniciarJuego()
function iniciarJuego() {
    
    mokepones.forEach((mokepon) => {
        opcionDeMokepnes = `
                            <input type="radio" name="mascota" id=${mokepon.nombre} >
                            <label class="tarjeta-de-mokepon" for=${mokepon.nombre} >
                                <p>${mokepon.nombre}</p>
                                <img src=${mokepon.foto} alt=${mokepon.nombre}>
                            </label>
                            `
        
        contenedorTarjetas.innerHTML += opcionDeMokepnes

    })
    
    radioHipodoge = document.getElementById('Hipodoge')
    radioCapipepo = document.getElementById('Capipepo')
    radioRatigueya = document.getElementById('Ratigueya')
    
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
        nombreMascotaJugador = radioHipodoge.id
    } else if (radioCapipepo.checked){
        nombreMascotaJugador = radioCapipepo.id
    } else if (radioRatigueya.checked) {
        nombreMascotaJugador = radioRatigueya.id
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

    let mascotaEnemigoAleatoria = aleatorio(0,mokepones.length-1) 

    mascotaEnemigo.innerHTML = mokepones[mascotaEnemigoAleatoria].nombre
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

function aleatorio(min,max) {

    return Math.floor(Math.random() * (max - min + 1) + min)
  }



