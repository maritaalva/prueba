
let title = document.querySelector("#title");
title.setAttribute("fill", "#ffffff");
let dedo = document.querySelector("#dedo");
dedo.setAttribute("fill", "#939393");
let base_cohete = document.querySelector("#base_x5F_cohete");
base_cohete.setAttribute("fill", "#939393");
let cohete_azul = document.querySelector("#cohete_x5F_azul");
cohete_azul.setAttribute("fill", "#939393");
let cohete_tubos = document.querySelector("#cohete_x5F_rojo_x5F_tubos");
cohete_tubos.setAttribute("fill", "#939393");
let cohete_alas = document.querySelector("#cohete_x5F_alas");
cohete_alas.setAttribute("fill", "#939393");
let suelo_amarillo = document.querySelector("#amarillo");

// Cambio de color del título:
let textArray = [
    '#d3465e',
    '#e2d8c9',
    '#80d891',
    '#ffffff',
    '#e891d8'
];
let randomNumber = () => Math.floor(Math.random() * textArray.length);
function changeColor() {
    title.setAttribute('fill', textArray[randomNumber()]);
}
setInterval(changeColor, 1000);


// Animación del género del libro al hacer scroll:
window.onscroll = function () {
    scrollRotate();
};
function scrollRotate() {
    let image = document.getElementById("genero");
    image.style.transform = "rotate(" + window.pageYOffset / -10 + "deg)";
}


// Pintar las partes de la ilustración con el color original:
dedo.addEventListener("mouseover", () => {
    dedo.setAttribute("fill", "#fcfcfc")
});
base_cohete.addEventListener("mouseover", () => {
    base_cohete.setAttribute("fill", "#0083c3")
});
cohete_alas.addEventListener("mouseover", () => {
    cohete_alas.setAttribute("fill", "#ce164a")
});
cohete_tubos.addEventListener("mouseover", () => {
    cohete_tubos.setAttribute("fill", "#ce164a")
});
cohete_azul.addEventListener("mouseover", () => {
    cohete_azul.setAttribute("fill", "#312783")
});


// Pintar las partes de la ilustración con un color random:
let getRandom = () => Math.floor(Math.random(255) * (255 - 1) + 1);
dedo.addEventListener("click", () => {
    let color = `rgb(${getRandom()},${getRandom()},${getRandom()})`;
    dedo.setAttribute("fill", color);
});
base_cohete.addEventListener("click", () => {
    let color = `rgb(${getRandom()},${getRandom()},${getRandom()})`;
    base_cohete.setAttribute("fill", color);
});
cohete_alas.addEventListener("click", () => {
    let color = `rgb(${getRandom()},${getRandom()},${getRandom()})`;
    cohete_alas.setAttribute("fill", color);
});
cohete_tubos.addEventListener("click", () => {
    let color = `rgb(${getRandom()},${getRandom()},${getRandom()})`;
    cohete_tubos.setAttribute("fill", color);
});
cohete_azul.addEventListener("click", () => {
    let color = `rgb(${getRandom()},${getRandom()},${getRandom()})`;
    cohete_azul.setAttribute("fill", color);
});


// Crear el svg del sticker2 :
let cont = document.getElementById('sticker2');
let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg.setAttribute("transform", "rotate(-35)")
svg.setAttribute("width", "400");
svg.setAttribute("height", "100");
svg.setAttribute("version", "1.1");
svg.setAttribute("id", "mysvg");
let myTextElement = document.createElementNS("http://www.w3.org/2000/svg", "text");
let myText = document.createTextNode("Scroll Up! and Paint me");
myTextElement.setAttribute("font-family", "roboto mono");
myTextElement.setAttribute("x", "40");
myTextElement.setAttribute("y", "48");
myTextElement.setAttribute("fill", "#191a1");
myTextElement.setAttribute("font-size", "1rem");
let ellipse = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
ellipse.setAttribute("stroke", "#191a1d");
ellipse.setAttribute("cx", "150");
ellipse.setAttribute("cy", "45");
ellipse.setAttribute("rx", "140");
ellipse.setAttribute("ry", "30");
ellipse.setAttribute("fill", "#e891d8");
cont.appendChild(svg);
svg.appendChild(ellipse);
myTextElement.appendChild(myText);
svg.appendChild(myTextElement);


// Crear el svg del sticker2 versión móvil :
let cont2 = document.getElementById('sticker2_2');
let svg2 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg2.setAttribute("transform", "rotate(-35)")
svg2.setAttribute("width", "200");
svg2.setAttribute("height", "50");
svg2.setAttribute("version", "1.1");
svg2.setAttribute("id", "mysvg");
let myTextElement2 = document.createElementNS("http://www.w3.org/2000/svg", "text");
let myText2 = document.createTextNode("Scroll Up! and Paint me");
myTextElement2.setAttribute("font-family", "roboto mono");
myTextElement2.setAttribute("x", "20");
myTextElement2.setAttribute("y", "25");
myTextElement2.setAttribute("fill", "#191a1");
myTextElement2.setAttribute("font-size", "0.95rem");
let ellipse2 = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
ellipse2.setAttribute("stroke", "#191a1d");
ellipse2.setAttribute("cx", "62");
ellipse2.setAttribute("cy", "24");
ellipse2.setAttribute("rx", "55");
ellipse2.setAttribute("ry", "13");
ellipse2.setAttribute("fill", "#e891d8");
cont2.appendChild(svg2);
svg2.appendChild(ellipse2);
myTextElement2.appendChild(myText2);
svg2.appendChild(myTextElement2);


// Ocultar ciertas partes de la ilustración al hacer Scroll :
function Scroll() {
    let ypos = window.pageYOffset;

    if (ypos > 4000) {
        suelo_amarillo.classList.remove("hidden");
        base_cohete.classList.remove("hidden");
    }
    else {
        suelo_amarillo.classList.add("hidden");
        base_cohete.classList.add("hidden");

    }
    if (ypos > 2000) {
        cohete_tubos.classList.remove("hidden");
    }
    else {
        cohete_tubos.classList.add("hidden");
    }
}


// Posicionar la página al final del scroll :
window.addEventListener("scroll", Scroll);

window.onload = function () {
    window.scrollTo(0, 5000);
}

