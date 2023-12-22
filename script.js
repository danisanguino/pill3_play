//User
let userName;

//Steps of html
const welcomePage = document.getElementById("welcome");
const startPage = document.getElementById("start");
const gamePage = document.getElementById("game");
const resumePage = document.getElementById("resume");

//Start button declarar
const startButton = document.getElementById("start-button");

//Declarar funcion pasar de primera página a segunda
const firstStep = function(){
    welcomePage.classList.add("hidden");
    startPage.classList.remove("hidden");
}

//Función del primer boton al paso 2 (dar vida al boton)
startButton.addEventListener("click", firstStep);


//Declarar la constante del segundo boton
const startGameButton = document.getElementById("startGame-button")

// Declarar funcion de segunda a tercera pagina
const secondStep = function() {
    startPage.classList.add("hidden");
    gamePage.classList.remove("hidden");
}

startGameButton.addEventListener("click", secondStep);

//Hacer que al pasar 10 segundos pase de pantalla a la ultima
function thirdStep() {
    gamePage.classList.add("hidden");
    resumePage.classList.remove("hidden");
  }

// Llamada a la funcion thirdStep con el TimeOut
setTimeout(thirdStep, 10000);
