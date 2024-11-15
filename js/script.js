
const opciones = ['piedra', 'papel', 'tijera'];


let puntosUsuario = 0;
let puntosOrdenador = 0;


const botones = document.querySelectorAll('button'); 
const resultadosDiv = document.getElementById('resultados');
const contadorUsuario = document.getElementById('contador-usuario');
const contadorOrdenador = document.getElementById('contador-ordenador');


function obtenerJugadaOrdenador() {
  const indice = Math.floor(Math.random() * opciones.length);
  return opciones[indice];
}


function obtenerResultado(jugadaUsuario, jugadaOrdenador) {
  if (jugadaUsuario === jugadaOrdenador) {
    return 'empate';
  } else if (
    (jugadaUsuario === 'piedra' && jugadaOrdenador === 'tijera') ||
    (jugadaUsuario === 'papel' && jugadaOrdenador === 'piedra') ||
    (jugadaUsuario === 'tijera' && jugadaOrdenador === 'papel')
  ) {
    return 'usuario';
  } else {
    return 'ordenador';
  }
}


function actualizarPuntuacion(resultado) {
  if (resultado === 'usuario') {
    puntosUsuario++;
    contadorUsuario.textContent = puntosUsuario;
  } else if (resultado === 'ordenador') {
    puntosOrdenador++;
    contadorOrdenador.textContent = puntosOrdenador;
  }
}


function mostrarResultado(jugadaUsuario, jugadaOrdenador, resultado) {
  if (resultado === 'empate') {
    resultadosDiv.textContent = `¡Empate! Ambos eligieron ${jugadaUsuario}.`;
  } else if (resultado === 'usuario') {
    resultadosDiv.textContent = `¡Ganaste! ${jugadaUsuario} vence a ${jugadaOrdenador}.`;
  } else {
    resultadosDiv.textContent = `Perdiste. ${jugadaOrdenador} vence a ${jugadaUsuario}.`;
  }
}


botones.forEach((boton) => {
  boton.addEventListener('click', () => {
    const jugadaUsuario = boton.dataset.jugada;
    const jugadaOrdenador = obtenerJugadaOrdenador();
    const resultado = obtenerResultado(jugadaUsuario, jugadaOrdenador);

    
    actualizarPuntuacion(resultado);
    mostrarResultado(jugadaUsuario, jugadaOrdenador, resultado);
  });
});
