# Dando vida al código — Anime.js

Proyecto de la materia Laboratorio de Programación - 6° G (IPET N° 249). Página web con animaciones hechas con HTML5, CSS3, JavaScript y la librería Anime.js (v3.2.1).

## Trabajo Práctico N° 12 - Dando Vida al Código con Anime.js

La página tiene dos partes:

- **Hero (introducción interactiva):** el título, las figuras, el texto y los botones se animan juntos con una timeline.
- **Cuadrícula:** 50 cuadrados que reaccionan a los clics con una onda escalonada (stagger).

## Uso de Anime.js

- Timeline de cuatro pasos, con desfasajes (`"-=300"`, `"-=800"`, `"-=1000"`)
- Propiedades animadas: `translateY`, `rotate`, `scale` y `opacity`
- Stagger por letra, por figura y en dos dimensiones (opción `grid`) en la cuadrícula
- Easings: `easeOutExpo`, `easeOutElastic`, `easeOutSine` y `easeInOutQuad`
- Duraciones y delays distintos en cada paso

## Estructura del proyecto

```
├── index.html
├── css/
│   └── estilos.css
├── js/
│   ├── anime.min.js        Librería Anime.js 3.2.1 (local)
│   └── script.js           Animaciones
└── ficha-transparencia-IA.md
```

## Interacción

- Botón "Repetir intro": vuelve a ejecutar la timeline
- Clic en un cuadrado: la onda parte desde ese cuadrado

## Sobre el uso de Inteligencia Artificial

La IA se usó como asistente para generar una base de código y entender Anime.js. El código se revisó y probó antes de integrarlo. El detalle está en `ficha-transparencia-IA.md`.

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- Anime.js 3.2.1
- Google Fonts (Cormorant Garamond y Work Sans)

## Cómo verlo

Online (GitHub Pages): activar Pages en el repositorio (Settings > Pages > Branch: main) y abrir:
```
https://gera100101q.github.io/TU-REPOSITORIO/
```

Local: descargar el proyecto y abrir index.html en el navegador, manteniendo las carpetas css y js.

## Datos de la entrega

- Trabajo Práctico: N° 12 - Dando Vida al Código con Anime.js
- Materia: Laboratorio de Programación
- Curso: 6° G - IPET N° 249
- Modalidad: Individual
- Fecha límite de entrega: 13/08/2026

## Autor

Gerardo Quiroga
