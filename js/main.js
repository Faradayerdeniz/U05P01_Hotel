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
function getConsola() {
    let hotel = document.getElementById("hotel").value;

}