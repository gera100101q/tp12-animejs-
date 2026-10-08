/* =========================================================
   TP12 — Dando vida al código con Anime.js (v3.2.1)
   script.js
   =========================================================
   1. Separar el título en letras
   2. Hero: timeline
   3. Cuadrícula: onda con stagger al hacer clic
   ========================================================= */

// ---------- 1. Separar el título en letras ----------
// Para animar cada letra por separado, la envolvemos en un <span>.

const titulo = document.getElementById("titulo");
const palabras = titulo.textContent.trim().split(" ");
titulo.innerHTML = "";

palabras.forEach((palabra) => {
  const spanPalabra = document.createElement("span");
  spanPalabra.className = "palabra";

  palabra.split("").forEach((caracter) => {
    const spanLetra = document.createElement("span");
    spanLetra.className = "letra";
    spanLetra.textContent = caracter;
    spanPalabra.appendChild(spanLetra);
  });

  titulo.appendChild(spanPalabra);
});

// ---------- 2. Hero: timeline ----------
// Una timeline encadena animaciones una detrás de otra.
// El segundo parámetro ("-=300") hace que el paso empiece
// 300 ms antes de que termine el anterior.

const timeline = anime.timeline({
  easing: "easeOutExpo",
  duration: 900
});

timeline
  // Paso 1: el pretítulo baja y aparece
  .add({
    targets: ".contenido-hero .pretitulo",
    opacity: [0, 1],
    translateY: [-20, 0],
    duration: 600
  })
  // Paso 2: las letras entran una por una (stagger)
  .add({
    targets: ".letra",
    opacity: [0, 1],
    translateY: [70, 0],
    rotate: [14, 0],
    delay: anime.stagger(35),
    duration: 1000
  }, "-=300")
  // Paso 3: las figuras aparecen girando y creciendo
  .add({
    targets: ".figura",
    opacity: [0, 1],
    scale: [0, 1],
    rotate: [-120, 0],
    delay: anime.stagger(150),
    easing: "easeOutElastic(1, .6)",
    duration: 1400
  }, "-=800")
  // Paso 4: aparecen el texto y los botones
  .add({
    targets: [".texto-hero", ".acciones-hero"],
    opacity: [0, 1],
    translateY: [24, 0],
    delay: anime.stagger(150),
    duration: 800
  }, "-=1000");

// ---------- 3. Cuadrícula ----------

const COLUMNAS = 10;
const FILAS = 5;
const cuadricula = document.getElementById("cuadricula");

// Creamos los cuadrados (10 x 5 = 50)
for (let i = 0; i < COLUMNAS * FILAS; i++) {
  const punto = document.createElement("div");
  punto.className = "punto";
  punto.dataset.indice = i;
  cuadricula.appendChild(punto);
}

// Onda que parte desde el cuadrado donde se hizo clic.
// stagger con "grid" calcula el retraso según la distancia
// entre cuadrados, en dos dimensiones.
function lanzarOnda(origen) {
  anime({
    targets: ".punto",
    scale: [
      { value: 2, duration: 250, easing: "easeOutSine" },
      { value: 1, duration: 500, easing: "easeInOutQuad" }
    ],
    opacity: [
      { value: 1, duration: 250 },
      { value: 0.35, duration: 500 }
    ],
    delay: anime.stagger(70, { grid: [COLUMNAS, FILAS], from: origen })
  });
}

cuadricula.addEventListener("click", (evento) => {
  if (evento.target.classList.contains("punto")) {
    lanzarOnda(Number(evento.target.dataset.indice));
  }
});

// ---------- Botón para repetir la intro ----------

document.getElementById("boton-repetir").addEventListener("click", () => {
  timeline.restart();
});
