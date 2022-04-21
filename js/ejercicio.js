/* JavaScript Básico - Ejercicio asincrónico 03 - Solución 1*/
function calcularDiasEdad() {
    var edad = parseInt(document.getElementById('edad').value);
    var diasEdad = edad * 365;
    alert("Tienes " + edad + " años, eso significa que has vivido " + diasEdad + " días.");

}

/* JavaScript Básico - Ejercicio asincrónico 03 - Solución 1*/
function calcularDiasVividos() {
    // Se recupera la fecha de nacimiento
    var fechaNacimiento = new Date(document.getElementById('fechaNacimiento').value);
    /* Obtener la fecha de hoy */
    var fechaHoy = new Date();
    //Calculamos los milisegundos que tiene cada día (Esto es necesario para utilizar el metodo getTime() de la clase Date)
    var milisegundos = 24 * 60 * 60 * 1000;

    if (fechaNacimiento.getTime() > fechaHoy.getTime()) {
        alert("Ingresaste una fecha de nacimiento que es mayor a la fecha de hoy. ¿Eres un viajero del futuro?")
    } else {
        //Se calcula la cantidad de milisegundos transcurridos entre las dos fechas señaladas
        var tiempoTranscurrido = fechaHoy.getTime() - fechaNacimiento.getTime();
        // Ahora dividimos los milisegundos transcurridos entre ambas fechas con los milisegundos de un día
        //Con el metodo round() de la clase Math redondeamos al entero más cercano, asi evitamos tener días con decimales
        var cantDias = Math.round(tiempoTranscurrido / milisegundos);
        alert("Hasta el día de hoy has vivido " + cantDias + " días");
    }
}

/* JavaScript Básico - Ejercicio asincrónico 04 */
function calcularAbastecimiento() {
    var fechaHoy = new Date();
    var fechaMaxima = new Date(document.getElementById('fechaMaxima').value);
    var snacks = document.getElementById('snacks').value;
    var cantSnacksAlDia = parseInt(document.getElementById('cantSnacksAlDia').value);
    var milisegundos = 24 * 60 * 60 * 1000;
    var tiempoTranscurrido = fechaMaxima.getTime() - fechaHoy.getTime();
    var cantDias = Math.round(tiempoTranscurrido / milisegundos);
    var snacksNecesarios = cantSnacksAlDia * cantDias;
    var precio = snacksNecesarios * 900;
    alert("Necesitas tener snacks para " + cantDias + " días, por lo que necesitas un total de " + snacksNecesarios + " " + snacks + ", lo que significa que necesitas $" + precio + " para mantenerte abastecido.");
}
