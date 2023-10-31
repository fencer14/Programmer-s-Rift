let personajes = [];

Menu()

function Menu()
{
    let inputMenu = prompt("Menú:\n1.Cargar Datos\n2.Mostrar Datos\n3.Salir");
    inputMenu = parseInt(inputMenu);
    switch (inputMenu) 
    {
        case 1:
            personaje = prompt("Personaje: ");
            Cargar(personaje);
            break;
        case 2:
            Mostrar();
            break;
        case 3:
            Salir();
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

function Cargar(personaje)
{
    personajes.push(personaje); 
    Menu();
}
function Mostrar()
{
    console.log(personajes);
    Menu();
}