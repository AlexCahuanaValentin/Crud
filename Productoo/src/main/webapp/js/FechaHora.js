//JS PARA QUE FUNCIONE LA BARRA DE HORA

// Obtener el elemento para mostrar la hora y fecha y actualizarlo cada segundo
var currentDateTimeElement = document
	.getElementById("currentDateTime");

// Funcion para obtener la hora actual en formato HH:MM:SS
function getCurrentTime() {
	var currentDate = new Date();
	var hours = currentDate.getHours().toString().padStart(2,
		"0");
	var minutes = currentDate.getMinutes().toString().padStart(
		2, "0");
	var seconds = currentDate.getSeconds().toString().padStart(
		2, "0");
	return hours + ":" + minutes + ":" + seconds;
}

// Funcion para obtener la fecha actual en formato DD/MM/YYYY
function getCurrentDate() {
	var currentDate = new Date();
	var days = ['Domingo', 'Lunes', 'Martes', 'Miercoles',
		'Jueves', 'Viernes', 'Sabado'];
	var day = days[currentDate.getDay()];
	var date = currentDate.getDate().toString()
		.padStart(2, "0");
	var months = ['enero', 'febrero', 'marzo', 'abril',
		'mayo', 'junio', 'julio', 'agosto', 'septiembre',
		'octubre', 'noviembre', 'diciembre'];
	var month = months[currentDate.getMonth()];
	var year = currentDate.getFullYear().toString();
	return day + ' ' + date + ' de ' + month + ' de ' + year;
}

// Actualizar la hora y fecha cada segundo
function updateCurrentDateTime() {
	var currentTime = getCurrentTime();
	var currentDate = getCurrentDate();
	currentDateTimeElement.textContent = currentTime + " - "
		+ currentDate;
}

// Actualizar la hora y fecha inicial y luego cada segundo
updateCurrentDateTime();
setInterval(updateCurrentDateTime, 1000);

function updateCurrentDateTime() {
	var currentTimeElement = document
		.getElementById("currentTime");
	var currentDateElement = document
		.getElementById("currentDate");

	var currentTime = getCurrentTime();
	var currentDate = getCurrentDate();

	currentTimeElement.textContent = currentTime;
	currentDateElement.textContent = currentDate;
}