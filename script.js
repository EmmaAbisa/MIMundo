// ===== FECHA DE INICIO =====
const inicio = new Date("2025-02-10T00:00:00");

// ===== CONTADOR =====
function actualizarContador() {
    const ahora = new Date();
    const diferencia = ahora - inicio;

    const segundos = Math.floor(diferencia / 1000) % 60;
    const minutos = Math.floor(diferencia / (1000 * 60)) % 60;
    const horas = Math.floor(diferencia / (1000 * 60 * 60)) % 24;
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));

    document.getElementById("contador").innerHTML =
        `${dias} días, ${horas} horas, ${minutos} minutos, ${segundos} segundos`;
}

setInterval(actualizarContador, 1000);
actualizarContador();

// ===== TEXTO ESCRIBIÉNDOSE SOLO =====
const lineas = [
    "Si el mundo tuviera un coeficiente,",
    "sería la luna girando alrededor de la Tierra.",
    "",
    "",
    "Y si mi corazón tiene una órbita,",
    "siempre será alrededor de ti."
];

let lineaActual = 0;
let letraActual = 0;

function escribirTexto() {
    const textoElemento = document.getElementById("texto");

    if (lineaActual < lineas.length) {
        if (letraActual < lineas[lineaActual].length) {
            textoElemento.innerHTML += lineas[lineaActual].charAt(letraActual);
            letraActual++;
            setTimeout(escribirTexto, 40);
        } else {
            textoElemento.innerHTML += "<br>";
            lineaActual++;
            letraActual = 0;
            setTimeout(escribirTexto, 500);
        }
    }
}

// ===== ACELERAR GIRO DEL PLANETA (SEGURO Y SUAVE) =====
const planeta = document.getElementById("planeta");
let rotacion = 0;

planeta.addEventListener("click", () => {
    rotacion += 120; // puedes subir a 180 o 360 si quieres
    planeta.style.setProperty("--rot", `${rotacion}deg`);
});


escribirTexto();
