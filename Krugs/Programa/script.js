let gasto = prompt("Cuál fue tu gasto mensual: ")
let bajo = 500
let alto = 1000
if(gasto < bajo)
{
    console.log("Tu gasto fue muy bajo")
}
if(gasto > alto)
{
    console.log("Tu gasto fue demasiado alto")
}
if(gasto >= bajo && gasto <= alto)
{
    console.log("Tu gasto fue moderado")
}
console.log("¡Gracias por usar la calculadora de gastos!")
