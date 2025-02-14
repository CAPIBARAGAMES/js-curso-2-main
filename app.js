let titulo = document.querySelector("h1")
titulo.innerHTML = "Hora del Desafío"

function Console(){
    alert("El botón fue clicado")
}

function Prompt(){
    let country = prompt("Ingresa una ciudad de brasil")
    alert(`Estuve en ${country} y me acordé de ti`)
}

function Alert(){
    alert("Yo amo JS")
}

function suma(){
    let resultado = 0
    let num1 = Number(prompt("Ingresa un numero"))
    let num2= Number(prompt("Ingresa otro numero"))
    resultado = num1 + num2
    alert(`El resultado de la suma es: ${resultado}`)
}