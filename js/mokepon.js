

const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionSeleccionarMascota= document.getElementById('seleccionar-mascota')

const contenedorTarjetas=document.getElementById('contenedor-Tarjetas')
const mascotaJugador=document.getElementById('mascota-jugador')
const botonMascotaJugador = document.getElementById('boton-mascota')
const mascotaEnemigo=document.getElementById('mascota-enemigo')

const contenedorBotonesAtaques = document.getElementById('contenedor-botones-ataques')

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

let botonesAtaques = []
let secuenciaAtaquesJugador = []
let secuenciaAtaquesEnemigo = []
let botonFuego
let botonAgua
let botonPlanta

let ataqueJugador = ""
let ataqueEnemigo = ""

let ataquesMokeponEnemigo

let vidasJugador
let vidasEnemigo

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

        agregarAtaques(nombreMascotaJugador)
        seleccionarMascotaEnemigo() 
    }   

}

function agregarAtaques(nombreMascotaJugador){
    
    mokepones.forEach((mokepon) => {

            if(mokepon.nombre === nombreMascotaJugador){

                mokepon.ataques.forEach( (ataque) => {

                    contenedorBotonesAtaques.innerHTML += `<button class="botones-ataques" id=${ataque.id}>${ataque.nombre}</button>`
                })
            }
            
    })    
    botonesAtaques = document.querySelectorAll('.botones-ataques')
    
}

function secuenciaAtaques(){

    botonesAtaques.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            secuenciaAtaquesJugador.push(e.target.textContent)
            boton.style.background = '#009EFF'
            boton.disabled = true
            iniciarPelea()
        })
    })
}

function seleccionarMascotaEnemigo() {

    let mascotaEnemigoAleatoria = aleatorio(0,mokepones.length-1)   

    mascotaEnemigo.innerHTML = mokepones[mascotaEnemigoAleatoria].nombre
    ataquesMokeponEnemigo = mokepones[mascotaEnemigoAleatoria].ataques

    ataquesAleatoriosEnemigo()
    secuenciaAtaques()
    
}


function ataquesAleatoriosEnemigo(){

    ataquesMokeponEnemigo = ataquesMokeponEnemigo.sort(()=>Math.random()-0.5);
    ataquesMokeponEnemigo.forEach((ataque)=> {

        secuenciaAtaquesEnemigo.push(ataque.nombre)
    })     
}

function iniciarPelea(){

    let contador = 3
    vidasJugador = secuenciaAtaquesJugador.length
    vidasEnemigo = secuenciaAtaquesEnemigo.length

    if(secuenciaAtaquesEnemigo.length === secuenciaAtaquesJugador.length){

        for (let x = 0; x <= secuenciaAtaquesEnemigo.length-1; x++) {
            setTimeout(function () {
                if (
                    (secuenciaAtaquesJugador[x] === '🌼' && secuenciaAtaquesEnemigo[x] === '💧') 
                ||  (secuenciaAtaquesJugador[x] === '🔥' && secuenciaAtaquesEnemigo[x] === '🌼') 
                ||  (secuenciaAtaquesJugador[x] === '💧' && secuenciaAtaquesEnemigo[x] === '🔥')

                ) {      

                    resultado='GANASTE'
                    vidasEnemigo--
                } else if (secuenciaAtaquesEnemigo[x] === secuenciaAtaquesJugador[x]) {

                    resultado='EMPATE'
                } else {

                    resultado='PERDISTE'
                    vidasJugador--
                }
                contador = x+2
                crearMensaje(resultado,secuenciaAtaquesJugador[x],secuenciaAtaquesEnemigo[x])
                }, 3000 * x);
           
        }
        setTimeout(function () {
            revisarVidas() 
        }, 4000 * contador);
    }
   

    
}    


function revisarVidas() {

    if(vidasJugador>vidasEnemigo){
        crearMensajeFinal("¡FELICITACIONES! GANASTE")
    } else if (vidasJugador<vidasEnemigo) {
        crearMensajeFinal("QUE LASTIMA! PERDISTE")
    } else{ 
        crearMensajeFinal("¡EMPATE!")   
 }
}

function crearMensaje(resultado,ataqueDelJugador,ataqueDelEnemigo){

        let nuevoAtaqueJugador = document.createElement('p')
        let nuevoAtaqueEnemigo = document.createElement('p')
    
        spanVidasEnemigo.innerHTML = vidasEnemigo
        spanVidasJugador.innerHTML = vidasJugador
    
        seccionMensajes.innerHTML = resultado
    
        nuevoAtaqueJugador.innerHTML = ataqueDelJugador
        nuevoAtaqueEnemigo.innerHTML = ataqueDelEnemigo  
    
        ataquesjugador.appendChild(nuevoAtaqueJugador)
        ataquesEnemigo.appendChild(nuevoAtaqueEnemigo)       
}

function crearMensajeFinal(resultadoFinal){
       
    seccionMensajes.innerHTML = resultadoFinal

    seccionReiniciar.style.display = 'flex'
}

function reiniciarPartida(){
    location.reload()
}

function aleatorio(min,max) {

    return Math.floor(Math.random() * (max - min + 1) + min)
  }



