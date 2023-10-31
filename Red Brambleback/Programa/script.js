Menu()

function Menu()
{
    let inputMenu = prompt("Menú:\n1.Sumar\n2.Restar\n3.Multiplicar\n4.Dividir\n5.Salir");
    inputMenu = parseInt(inputMenu);
    if(inputMenu != 5)
    {
        Pedir(inputMenu);
    }
    else
    {
        Salir();
    }
    
}
function Pedir(input)
{
    let numero1 = prompt("Primer número: ");
    let numero2 = prompt("Segundonúmero: ");
    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);
    switch (input) 
    {
        case 1:
            console.log("El resultado es: " + Sumar(numero1, numero2));
            Confirmacion();
            break;
        case 2:
            console.log("El resultado es: " + Restar(numero1, numero2));
            Confirmacion();
            break;
        case 3:
            console.log("El resultado es: " + Multiplicar(numero1, numero2));
            Confirmacion();
            break;
        case 4:
            if(anonima(numero2))
            {
                console.log("El resultado es: " + Dividir(numero1, numero2));
            }
            else
            {
                console.log("No se puede dividir por cero");
            }
            Confirmacion();
            break;
        default:
            console.log("no válido");
            Menu();
            break;
    }
    
}
function Salir()
{
    console.log("gracias por elegirnos");
}
function Confirmacion()
{
    let input = prompt("¿Quieres realizar otra operación?\n1.Si\n2.No");
    input = parseInt(input)
    switch (input) {
        case 1:
            Menu();
            break;
        case 2:
            Salir();
            break;
    
        default:
            console.log("error")
            Confirmacion();
            break;
    }
}
function Sumar(num1, num2)
{
    return num1 + num2;
}
function Restar(num1, num2)
{
    return num1 - num2;
}
function Multiplicar(num1, num2)
{
    return num1 * num2;
}
function Dividir(num1, num2)
{
        return num1 / num2;
}
function anonima(num2)
{
    if (num2 != 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}