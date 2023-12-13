// Constantes del CRUD
const ACCION_NUEVO = "NUEVO";
const ACCION_EDITAR = "EDITAR";
const ACCION_ELIMINAR = "ELIMINAR";
const ACCION_ACTIVAR = "ACTIVAR";

// Arreglo de registros
let arreglo = [];
let arregloInactivos = [];
let arregloCategorias = [];
// Acceder a los controles
let btnBuscar = document.getElementById("btnBuscar");
let btnBuscarInactivos = document.getElementById("btnBuscarInactivos");
let btnInactivos = document.getElementById("btnInactivos");
let btnNuevo = document.getElementById("btnNuevo");
let btnProcesar = document.getElementById("btnProcesar");

// Programar los controles
btnBuscar.addEventListener("click", fnBtnBuscar);
btnBuscarInactivos.addEventListener("click", fnBtnBuscarInactivos);
btnInactivos.addEventListener("click", fnBtnInactivos);
btnNuevo.addEventListener("click", fnBtnNuevo);
btnProcesar.addEventListener("click", fnBtnProcesar);

// Campos del formulario
let accion = document.getElementById('accion');
let frmId = document.getElementById('frmId');
let frmName = document.getElementById('frmName')
let frmDescription = document.getElementById('frmDescription')
let frmPoints = document.getElementById('frmPoints');
let frmStock = document.getElementById('frmStock');
let frmType = document.getElementById('frmType');
let frmBrand = document.getElementById('frmBrand');
let frmCategory_name = document.getElementById('frmCategory_name');


// Función para formatear la fecha en el formato "dd-MM-yyyy"
function formatDate(inputDate) {
	const date = new Date(inputDate);
	const day = String(date.getDate()+1).padStart(2, '0');
	const month = String(date.getMonth() + 1).padStart(2, '0');
	const year = date.getFullYear();
	return `${day}/${month}/${year}`;
}


//-------------------------------------------------------------------------------------------------------------//
//--------- BUSCAR --------//

document.addEventListener("DOMContentLoaded", function() {
	// Mostrar la lista de clientes al cargar la página
	fnBtnBuscar();
});
document.addEventListener("DOMContentLoaded", function() {
	// Mostrar la lista de clientes al cargar la página
	listarCategorias();
});

// Función fnBtnBuscar
function listarCategorias() {

	let url = "ListarCategorias"
	// La llama AJAX
	let xhttp = new XMLHttpRequest();
	xhttp.open("GET", url, true);
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			let respuesta = xhttp.responseText;
			arregloCategorias = JSON.parse(respuesta);
			let frmCategory_name = "";
			arregloCategorias.forEach(function(item) {
				frmCategory_name += "<option>" + item.name + "</option>";
			});
			document.getElementById("frmCategory_name").innerHTML = frmCategory_name;
		}
	};
	xhttp.send();
}
// Función fnBtnBuscar
function fnBtnBuscar() {
	// Datos
	let name = document.getElementById("name").value;
	let type = document.getElementById("type").value;

	let url = "ClienteBuscar?name=" + name;
	url += "&type=" + type;
	// La llama AJAX
	let xhttp = new XMLHttpRequest();
	xhttp.open("GET", url, true);
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			let respuesta = xhttp.responseText;
			arreglo = JSON.parse(respuesta);
			let detalleTabla = "";
			arreglo.forEach(function(item) {
				detalleTabla += "<tr>";
				detalleTabla += "<th scope='row'>" + item.id + "</th>";
				detalleTabla += "<td>" + item.name + "</td>";
				detalleTabla += "<td>" + item.description + "</td>";
				detalleTabla += "<td>" + item.points + "</td>";
				detalleTabla += "<td>" + item.stock + "</td>";
				detalleTabla += "<td>" + item.type + "</td>";
				detalleTabla += "<td>" + item.brand + "</td>";
				detalleTabla += "<td>" + item.category_name + "</td>";
				detalleTabla += "<td>";
				detalleTabla += "<button onclick='fnEditar(" + item.id + ");' type='button' class='btn btn-primary' style='width: auto;'><i class='fa-solid fa-pen'></i></button> ";
				detalleTabla += "<button onclick='fnEliminar(" + item.id + ");' type='button' class='btn btn-danger' style='width: auto;'><i class='fa-solid fa-trash'></i></button>";
				detalleTabla += "</td>";
				detalleTabla += "</tr>";
			});
			document.getElementById("detalleTabla").innerHTML = detalleTabla;
		}
	};
	xhttp.send();
}

// Función fnBtnInactivos
function fnBtnInactivos() {
	// Datos
	let name = document.getElementById("name").value;
	let type = document.getElementById("type").value;

	let url = "ClienteInactivos?name=" + name;
	url += "&type=" + type;
	// La llama AJAX
	let xhttp = new XMLHttpRequest();
	xhttp.open("GET", url, true);
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			let respuesta = xhttp.responseText;
			arregloInactivos = JSON.parse(respuesta);
			let detalleTabla = "";
			arregloInactivos.forEach(function(item) {
				detalleTabla += "<tr>";
				detalleTabla += "<th scope='row'>" + item.id + "</th>";
				detalleTabla += "<td>" + item.name + "</td>";
				detalleTabla += "<td>" + item.description + "</td>";
				detalleTabla += "<td>" + item.points + "</td>";
				detalleTabla += "<td>" + item.stock + "</td>";
				detalleTabla += "<td>" + item.type + "</td>";
				detalleTabla += "<td>" + item.brand + "</td>";
				detalleTabla += "<td>" + item.category_name + "</td>";
				detalleTabla += "<td>";
				detalleTabla += "<button onclick='fnActivar(" + item.id + ");' class='btn btn-success' style='width: auto;'><img src='IMG/activar.png' alt=''style='display: block; margin: auto;'>REACTIVAR</button> ";
				detalleTabla += "</td>";
				detalleTabla += "</tr>";
			});
			document.getElementById("detalleTabla").innerHTML = detalleTabla;
		}
	};
	xhttp.send();
}

// Función fnBtnInactivos
function fnBtnBuscarInactivos() {
	// Datos
	let name = document.getElementById("name").value;  
	let type = document.getElementById("type").value;

	let url = "ClienteInactivos?name=" + name;
	url += "&type=" + type;
	// La llama AJAX
	let xhttp = new XMLHttpRequest();
	xhttp.open("GET", url, true);
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			let respuesta = xhttp.responseText;
			arregloInactivos = JSON.parse(respuesta);
			let detalleTabla = "";
			arregloInactivos.forEach(function(item) {
				detalleTabla += "<tr>";
				detalleTabla += "<th scope='row'>" + item.id + "</th>";
				detalleTabla += "<td>" + item.name + "</td>";
				detalleTabla += "<td>" + item.description + "</td>";
				detalleTabla += "<td>" + item.points + "</td>";
				detalleTabla += "<td>" + item.stock + "</td>";
				detalleTabla += "<td>" + item.type + "</td>";
				detalleTabla += "<td>" + item.brand + "</td>";
				detalleTabla += "<td>" + item.category_name + "</td>";
				detalleTabla += "<td>";
				detalleTabla += "<button onclick='fnActivar(" + item.id + ");' class='btn btn-success' style='width: auto;'><img src='IMG/activar.png' alt=''style='display: block; margin: auto;'>REACTIVAR</button> ";
				detalleTabla += "</td>";
				detalleTabla += "</tr>";
			});
			document.getElementById("detalleTabla").innerHTML = detalleTabla;
		}
	};
	xhttp.send();
}



let ocultarInactivos = document.getElementById("ocultar_inactivos");
let Buscar = document.getElementById("Buscar");
let BuscarInactivos = document.getElementById("BuscarInactivos");
let mostrarActivos = document.getElementById("mostrar_activos");

ocultarInactivos.addEventListener("click", function() {
	// Ocultar el botón "Inactivos" y mostrar el botón "Activos"
	ocultarInactivos.style.display = "none";
	mostrarActivos.style.display = "block";
	Buscar.style.display = "none";
	BuscarInactivos.style.display = "block";
	document.getElementById("listaClientesTitulo").textContent = "Lista de Productos Inactivos";

	// Llama a la función para cargar la lista de clientes inactivos
	fnBtnInactivos();
});

mostrarActivos.addEventListener("click", function() {
	// Ocultar el botón "Activos" y mostrar el botón "Inactivos"
	ocultarInactivos.style.display = "block";
	mostrarActivos.style.display = "none";
	Buscar.style.display = "block";
	BuscarInactivos.style.display = "none";
	document.getElementById("listaClientesTitulo").textContent = "Lista de Productos Activos";

	// Llama a la función para cargar la lista de clientes activos
	fnBtnBuscar();
});

//---------------------------------------------------------------------------------------------------------------//
//------------------EDITAR--------------------//
function fnEditar(id) {
	// Preparando el formulario
	document.getElementById("tituloRegistro").innerHTML = ACCION_EDITAR + " REGISTRO";
	document.getElementById("accion").value = ACCION_EDITAR;
	// Cargar los datos del registro que estás editando
	fnCargarForm(id);
	fnEstadoFormulario(ACCION_EDITAR);
	document.getElementById("divRegistro").addEventListener("submit", function(event) {
		event.preventDefault();
	});

	// Mostrar formulario encima de todo
	const divRegistro = document.getElementById("divRegistro");
	divRegistro.style.opacity = "1";
	divRegistro.style.display = "grid";
	divRegistro.style.position = "fixed";
	divRegistro.style.top = "0";
	divRegistro.style.left = "0";
	divRegistro.style.width = "100%";
	divRegistro.style.height = "100%";
	divRegistro.style.zIndex = "1000"; // Asegura que esté en la parte superior
	document.getElementById("divRegistro").style.placeItems = "center";
}

//---------------------------------------------------------------------------------------------------
//-----------------------ELIMINAR--------------------------//

// Función fnEliminar
function fnEliminar(id) {
	Swal.fire({
		text: "Estas seguro de eliminar este Producto?",
		icon: "warning",
		showCancelButton: true,
		confirmButtonColor: "#3085d6",
		cancelButtonColor: "#d33",
		confirmButtonText: "Aceptar"
	}).then((result) => {
		if (result.isConfirmed) {
			// Aquí podrías llamar a tu función de eliminación con el ID
			// fnEliminar(id);
			Swal.fire({
				title: "Eliminado!",
				text: "Producto Eliminado Correctamente",
				icon: "success"
			});
			// Si el usuario elige "Aceptar", procedemos con la eliminación
			document.getElementById("accion").value = ACCION_ELIMINAR;
			fnCargarForm(id);
			fnBtnProcesar();
			fnBtnBuscar();
		}
	});
}

//---------------------------------------------------------------------------------------------------
//-----------------------REACTIVAR--------------------------//

// Funcion fnEliminar
function fnActivar(id) {
	Swal.fire({
		text: "Estas seguro de reactivar a este Producto?",
		icon: "warning",
		showCancelButton: true,
		confirmButtonColor: "#3085d6",
		cancelButtonColor: "#d33",
		confirmButtonText: "Aceptar"
	}).then((result) => {
		if (result.isConfirmed) {
			Swal.fire({
				title: "Reactivado",
				text: "Producto reactivado correctamente",
				icon: "success"
			});
			document.getElementById("accion").value = ACCION_ACTIVAR;
			fnCargarFormInactivos(id);
			fnBtnProcesar();
			fnBtnBuscarInactivos();
		}
	});
}
//----------------------------------------------------------------------------------------------------------
//-------------------------------------PROCESO----------------------------------------------
function fnBtnProcesar() {
	// Validar
	if (!fnValidar()) {
		return; // Aquí simplemente detenemos la ejecución si la validación falla
	}

	// Preparar los datos
	let datos = "accion=" + document.getElementById("accion").value;
	datos += "&id=" + document.getElementById("frmId").value;
	datos += "&name=" + document.getElementById("frmName").value;
	datos += "&description=" + document.getElementById("frmDescription").value;
	datos += "&points=" + document.getElementById("frmPoints").value;
	datos += "&stock=" + document.getElementById("frmStock").value;
	datos += "&type=" + document.getElementById("frmType").value;
	datos += "&brand=" + document.getElementById("frmBrand").value;
	datos += "&category_name=" + document.getElementById("frmCategory_name").value;

	// Obtener el estado actual (activos o inactivos)
	let estadoActual = document.getElementById("listaClientesTitulo").textContent;

	// El envío con AJAX
	let xhr = new XMLHttpRequest();
	xhr.open("POST", "ClienteProcesar", true);
	xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				// La solicitud se completó correctamente
				console.log(xhr.responseText);
				// Actualizar la lista de clientes automáticamente según el estado actual
				if (estadoActual === "Lista de Productos Activos") {
					fnBtnBuscar(); // Actualizar la lista de activos
				} else if (estadoActual === "Lista de Productos Inactivos") {
					fnBtnBuscarInactivos(); // Actualizar la lista de inactivos
				}
			} else {
				// Manejar el error aquí si es necesario
				console.error("Error en la solicitud AJAX");
			}
			// Limpia los campos después de guardar
			limpiarCampos();
			reiniciarValidacion();
		}
	};
	xhr.send(datos);
}
//--------------------------------------------------------------------------------------------------------------------
//------------------------LIMPIAR CAMPOS--------------------------------------
// Función para limpiar los campos y reiniciar la validación
function limpiarCampos() {
	// Limpiar todos los campos del formulario
	frmId.value = "";
	frmName.value = "";
	frmDescription.value = "";
	frmPoints.value = "";
	frmStock.value = "";
	frmType.value = "";
	frmBrand.value = "";
	frmCategory_name.value = "";
	// Eliminar clases de validación de Bootstrap
	frmId.classList.remove('is-valid', 'is-invalid');
	frmName.classList.remove('is-valid', 'is-invalid');
	frmDescription.classList.remove('is-valid', 'is-invalid');
	frmPoints.classList.remove('is-valid', 'is-invalid');
	frmStock.classList.remove('is-valid', 'is-invalid');
	frmType.classList.remove('is-valid', 'is-invalid');
	frmBrand.classList.remove('is-valid', 'is-invalid');
	frmCategory_name.classList.remove('is-valid', 'is-invalid');

	// También puedes ocultar el formulario si lo deseas
	document.getElementById("divRegistro").style.display = "none";
}

//--------------------------------------------------------------------------------------------------------------------
//--------------------NUEVO-------------------------------//
// Funcion fnBtnNuevo
function fnBtnNuevo() {
	// Preparando el formulario
	document.getElementById("tituloRegistro").innerHTML = ACCION_NUEVO + " REGISTRO";
	document.getElementById("accion").value = ACCION_NUEVO;
	fnEstadoFormulario(ACCION_NUEVO);
	document.getElementById("divRegistro").addEventListener("submit", function(event) {
		event.preventDefault();
	});

	// Ocultar el campo frmId
	
	// Limpiar todos los campos del formulario
	frmId.value = "";
	frmName.value = "";
	frmDescription.value = "";
	frmPoints.value = "";
	frmStock.value = "";
	frmType.value = "";
	frmBrand.value = "";
	frmCategory_name.value = "";

	// Mostrar formulario encima de todo
	const divRegistro = document.getElementById("divRegistro");
	divRegistro.style.opacity = "1";
	divRegistro.style.display = "grid";
	divRegistro.style.position = "fixed";
	divRegistro.style.top = "0";
	divRegistro.style.left = "0";
	divRegistro.style.width = "100%";
	divRegistro.style.height = "100%";
	divRegistro.style.zIndex = "1000"; // Asegura que esté en la parte superior
	document.getElementById("divRegistro").style.placeItems = "center";
}


document.getElementById("btnCancelar").addEventListener("click", function() {
	// Oculta el formulario
	document.getElementById("divRegistro").style.display = "none";
	// Limpia los campos después de guardar
	limpiarCampos();
	reiniciarValidacion();
});

//---------------------------------------------------------------------------------------------------------------

function fnCargarForm(id) {
	arreglo.forEach(function(item) {
		if (item.id == id) {
			frmId.value = item.id;
			frmName.value = item.name;
			frmDescription.value = item.description;
			frmPoints.value = item.points;
			frmStock.value = item.stock;
			frmType.value = item.type;
			frmBrand.value = item.brand;
			frmCategory_name.value = item.category_name;

			return true;
		}
	});
}

function fnCargarFormInactivos(id) {
	arregloInactivos.forEach(function(item) {
		if (item.id == id) {
			frmId.value = item.id;
			frmName.value = item.name;
			frmDescription.value = item.description;
			frmPoints.value = item.points;
			frmStock.value = item.stock;
			frmType.value = item.type;
			frmBrand.value = item.brand;
			frmCategory_name.value = item.category_name;

			return true;
		}
	});
}



function fnEstadoFormulario(estado) {
	frmId.disabled = (estado == ACCION_ELIMINAR)
	frmName.disabled = (estado == ACCION_ELIMINAR)
	frmDescription.disabled = (estado == ACCION_ELIMINAR)
	frmPoints.disabled = (estado == ACCION_ELIMINAR)
	frmStock.disabled = (estado == ACCION_ELIMINAR)
	frmType.disabled = (estado == ACCION_ELIMINAR)
	frmBrand.disabled = (estado == ACCION_ELIMINAR)
	frmCategory_name.disabled = (estado == ACCION_ELIMINAR)
	if (estado == ACCION_NUEVO) {
		frmId.value = "0";
		frmName.value = "";
		frmDescription.value = "";
		frmPoints.value = "";
		frmStock.value = "";
		frmType.value = "";
		frmBrand.value = "";
		frmCategory_name.value = "";
	}
}

function fnValidar() {

	return true;
}
