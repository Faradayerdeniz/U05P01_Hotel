//Fecha actual en el input type date.
function fechaActual() {
    let today = new Date(),
        day = today.getDate(),
        month = today.getMonth() + 1, //January is 0
        year = today.getFullYear();
    if (day < 10) {
        day = '0' + day
    }
    if (month < 10) {
        month = '0' + month
    }
    today = year + '-' + month + '-' + day;

    document.getElementById("dateFecha").setAttribute("min", today);
    document.getElementById("dateFecha").setAttribute("value", today);
}
fechaActual();

//función para ir recogiendo los datos introducidos cuando el cliente
//pulse la tecla "done o submit"
let botonDone = document.getElementById("botonDone");
botonDone.addEventListener("click",getConsola);

function getConsola() {
    let hotel = document.getElementById("hotel").value;
    let fechaEntrada = document.getElementById("dateFecha").value;
    let numNoches = document.getElementById("numNoches").value; 
    
    console.log(`RESERVA HOTELERA: 
    Destino: ${hotel}
    Fecha de entrada: ${fechaEntrada}
    Número de noches: ${numNoches}
    Habitaciones: 

    `);    
}

let botonRoom = document.getElementById("botonRoom");
botonRoom.addEventListener("click", roomDisplay);

const zonaChida = document.body.firstChild.nextElementSibling.nextSibling.nextElementSibling
.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling
.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling

function roomDisplay() {

    let divHabitacion = document.createElement("div");
    let textoDivHabitacion = document.createTextNode("Hola amigo");

    divHabitacion.id = "divHabitacionPrincipal";
    divHabitacion.append(textoDivHabitacion);
    
    zonaChida.appendChild(divHabitacion);
}