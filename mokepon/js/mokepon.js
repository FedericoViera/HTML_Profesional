window.addEventListener('load',iniciarJuego)

function iniciarJuego() {

    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
    
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
    
}




