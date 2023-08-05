const DateTime = luxon.DateTime;
const Duration = luxon.Duration;

let tiempoRestante = Duration.fromObject({ minutes: 10 }).as("seconds"); // 10 minutos en segundos
let intervaloContador;

function iniciarContador() {
  intervaloContador = setInterval(actualizarContador, 1000); // Actualizar el contador cada segundo (1000 ms)
}

function actualizarContador() {
  
  if (tiempoRestante > 0) {
    tiempoRestante = Math.max(tiempoRestante - 1, 0);
    
  } else {
    clearInterval(intervaloContador);
    EndGame();
  }
   
}





