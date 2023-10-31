let usuario = [];
let bot = [];
victorias = 0;
derrotas = 0;

function RepartirCarta() 
{
    return Math.floor(Math.random() * 11) + 1;
}

function CalcularPuntuacion(mano) 
{
    return mano.reduce((a, b) => a + b, 0);
}

function jugar() 
{
    usuario.push(RepartirCarta());
    bot.push(RepartirCarta());

    console.log("Jugador: ", usuario);
    console.log("Computadora: ", bot[0]);

    let opcion = prompt("¿Quieres otra carta? (s/n)");

    while (opcion == 's') 
    {
        usuario.push(RepartirCarta());
        console.log("Jugador: ", usuario);

        if (CalcularPuntuacion(usuario) > 21) 
        {
            derrotas++;
            return "Perdiste";
        }

        opcion = prompt("¿Quieres otra carta? (s/n)");
    }

    while (CalcularPuntuacion(bot) < 17) 
    {
        bot.push(RepartirCarta());
    }

    console.log("Computadora: ", bot);

    if (CalcularPuntuacion(bot) > 21) 
    {
        victorias++;
        return "Ganaste";
    }

    if (CalcularPuntuacion(usuario) > CalcularPuntuacion(bot)) 
    {
        return "Ganaste";
    } else if (CalcularPuntuacion(usuario) < CalcularPuntuacion(bot)) 
    {
        return "Perdiste";
    } else {
        return "Empate";
    }
}
function Puntaje()
{
    console.log("Victorias: " + victorias)
    console.log("Derrotas: " + derrotas)
}
console.log(jugar());
Puntaje();