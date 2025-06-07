// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Animos mi corazon de melon!", time: 15 },
  { text: "ni mintiri", time: 18 },
  { text: "Estare siempre apoyandote", time: 27 },
  { text: "Eres especial para mi", time: 32 },
  { text: "Te amo!", time: 33 },
  { text: "Jaquilin Pinguin!", time: 41 },
  { text: "Aun sigue aqui :0", time: 47 },
  { text: "Espero estar contigo mucho tiempo", time: 54 },
  { text: "Señoritaaa", time: 59 },
  { text: "Nunca olvides lo increíble que eres", time: 65 },
  { text: "Tu sonrisa ilumina mi día", time: 70 },
  { text: "Estoy aquí para ti, siempre", time: 76 },
  { text: "Cada momento contigo es un regalo", time: 83 },
  { text: "Eres mi alegría constante", time: 90 },
  { text: "Gracias por ser tú", time: 95 },
  { text: "Contigo todo es mejor", time: 102 },
  { text: "No importa la distancia, siempre te siento cerca", time: 110 },
  { text: "Mi profe de confianza", time: 118 },
  { text: "Eres mi inspiración diaria", time: 125 },
  { text: "Te amo, mi amor", time: 132 },
  { text: "Rockanloversss!", time: 138 },
  { text: "El chisme", time: 144 },

];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}
function updateLoveTimer() {
  const startDate = new Date('2025-05-10T00:00:00'); // 10 mayo 2025
  const now = new Date();

  let diff = now - startDate;

  if (diff < 0) {
    document.getElementById('love-timer').textContent = 'Aún no empieza...';
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  diff -= days * (1000 * 60 * 60 * 24);

  const hours = Math.floor(diff / (1000 * 60 * 60));
  diff -= hours * (1000 * 60 * 60);

  const minutes = Math.floor(diff / (1000 * 60));
  diff -= minutes * (1000 * 60);

  const seconds = Math.floor(diff / 1000);

  const formatted = `${days} días, ${hours}h ${minutes}m ${seconds}s`;

  document.getElementById('love-timer').textContent = formatted;
}

updateLoveTimer();
setInterval(updateLoveTimer, 1000);

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);


const words = document.querySelectorAll('.word');
let index = 0;

function showWord(i) {
  words.forEach((word, idx) => {
    word.classList.toggle('visible', idx === i);
  });
}

showWord(index); // mostrar la primera palabra

setInterval(() => {
  index = (index + 1) % words.length;
  showWord(index);
}, 3000); // cambia cada 2 segundos