<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<link rel="stylesheet" href="CSS/style.css">
<title>CLARO</title>
<script type="text/javascript"
	src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.16.9/xlsx.full.min.js"></script>

<link
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
	rel="stylesheet"
	integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
	crossorigin="anonymous">
<script
	src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
	integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
	crossorigin="anonymous"></script>
<script src="https://rawgit.com/eKoopmans/html2pdf/master/dist/html2pdf.bundle.js"></script>
<script src="https://use.fontawesome.com/releases/v6.3.0/js/all.js"
	crossorigin="anonymous"></script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link
	href="https://fonts.googleapis.com/css2?family=Imprima&display=swap"
	rel="stylesheet">
<link rel="stylesheet" href="CSS/style.css">
</head>

<body>
	<!-- MENU LATERAL -->
	<div class="col">
		<jsp:include page="menu.jsp"></jsp:include>
	</div>

	<!-- MENU SUPERIOR DE HORA -->
	<nav
		class="navbar navbar-expand-lg navbar-danger bg-danger navbar-with-datetime">
		<div class="container-fluid">
			<div
				class="d-flex justify-content-center align-items-center flex-grow-1">
				<span id="currentDateTime"
					class="nav-link text-white text-center w-100"> <span
					id="currentTime" style="font-size: 34px;"></span> - <span
					id="currentDate"></span>
				</span>
			</div>
			<button class="navbar-toggler" type="button"
				data-bs-toggle="collapse" data-bs-target="#navbarNav"
				aria-controls="navbarNav" aria-expanded="false"
				aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse justify-content-end"
				id="navbarNav">
				<ul class="navbar-nav">
					<li class="nav-item dropdown"><a
						class="nav-link dropdown-toggle text-white" href="#"
						id="logoutDropdown" role="button" data-bs-toggle="dropdown"
						aria-expanded="false"> Cerrar sesion </a>
						<ul class="dropdown-menu dropdown-menu-end"
							aria-labelledby="logoutDropdown">
							<li>
								<div class="d-flex flex-column align-items-center p-3">
									<img src="img\Claro.svg.png" alt="Logo CASSIATEC"
										class="logo-img" style="height: 6rem"> <span
										class="align-self-center">Admin</span>
									<button class="btn btn-danger mt-2" data-bs-toggle="modal"
										data-bs-target="#confirmLogoutModal">Cerrar sesion</button>
								</div>
							</li>
						</ul></li>
				</ul>
			</div>
		</div>
	</nav>

	<!-- MENU SUPERIOR DE HORA -->
	<script>
		//JS PARA QUE FUNCIONE LA BARRA DE HORA

		// Obtener el elemento para mostrar la hora y fecha y actualizarlo cada segundo
		var currentDateTimeElement = document.getElementById("currentDateTime");

		// Funcion para obtener la hora actual en formato HH:MM:SS
		function getCurrentTime() {
			var currentDate = new Date();
			var hours = currentDate.getHours().toString().padStart(2, "0");
			var minutes = currentDate.getMinutes().toString().padStart(2, "0");
			var seconds = currentDate.getSeconds().toString().padStart(2, "0");
			return hours + ":" + minutes + ":" + seconds;
		}

		// Funcion para obtener la fecha actual en formato DD/MM/YYYY
		function getCurrentDate() {
			var currentDate = new Date();
			var days = [ 'Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves',
					'Viernes', 'Sabado' ];
			var day = days[currentDate.getDay()];
			var date = currentDate.getDate().toString().padStart(2, "0");
			var months = [ 'enero', 'febrero', 'marzo', 'abril', 'mayo',
					'junio', 'julio', 'agosto', 'septiembre', 'octubre',
					'noviembre', 'diciembre' ];
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
			var currentTimeElement = document.getElementById("currentTime");
			var currentDateElement = document.getElementById("currentDate");

			var currentTime = getCurrentTime();
			var currentDate = getCurrentDate();

			currentTimeElement.textContent = currentTime;
			currentDateElement.textContent = currentDate;
		}
	</script>

	<div class="ajustar">
		<h4 class="h4-cliente">LISTA DE PRODUCTOS</h4>
		<!-- BUSQUEDA DEL CLIENTE -->
		<div class="card">
			<div class="card-header" style="font-weight: bold;">Búsqueda</div>
			<div class="card-body">
				<form method="post" action="#" class="credit-card-div">
					<div class="panel panel-default">
						<div class="panel-heading">
							<div class="row">
								<div class="col-md-3 col-sm-3 col-xs-3">
									<span class="help-block text-muted small-font"
										style="font-weight: bold;">Nombre</span> <input type="text"
										class="form-control border-black" id="name" />
								</div>
								<div class="col-md-3 col-sm-3 col-xs-3">
									<span class="help-block text-muted small-font"
										style="font-weight: bold;">Tipo</span> <input type="text"
										class="form-control border-black" id="type" />
								</div>
								<div class="col-md-2 col-sm-2 col-xs-2" id="Buscar">
									<br>
									<button type="button" class="btn btn-light border-black"
										id="btnBuscar" style="width: auto;" name="btnBuscar">
										<img src="IMG/buscar.png" alt=""
											style="display: block; margin: auto; width: 20px;">
									</button>
								</div>
								<div class="col-md-2 col-sm-2 col-xs-2" id="BuscarInactivos"
									style="display: none;">
									<br>
									<button type="button" class="btn btn-light border-black"
										id="btnBuscarInactivos" style="width: auto;"
										name="btnBuscarInactivos">
										<img src="IMG/buscar.png" alt=""
											style="display: block; margin: auto; width: 20px;">
									</button>
								</div>
								<div class="col-md-2 col-sm-3">
									<br />
									<button type="button" class="btn btn-success" id="btnNuevo"
										name="btnNuevo">
										<img src="" alt="">Nuevo
									</button>
								</div>
								<div class="col-md-2 col-sm-3" id="ocultar_inactivos">
									<br />
									<button type="button" class="btn btn-danger" id="btnInactivos"
										name="btnInactivos">
										<img src="IMG/eliminados.png" alt="">Inactivos
									</button>
								</div>
								<div class="col-md-2 col-sm-3" id="mostrar_activos"
									style="display: none;">
									<br />
									<button type="button" class="btn btn-primary" id="btnActivos"
										name="btnActivos">
										<img src="IMG/activos.png" alt="">Activos
									</button>
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
		<br>
		<div class="card">
			<div class="card-header" style="font-weight: bold;">Exportar
				Datos</div>
			<div class="card-body d-flex">
				<button type="button" id="btnExportXLS"
					class="btn btn-outline-primary">XLS</button>
				<div class="mx-2"></div>
				<button type="button" id="btnExportCSV"
					class="btn btn-outline-success">CSV</button>
				<div class="mx-2"></div>
				<button type="button" class="btn btn-outline-dark" onclick="descargaToPDF()">PDF</button>
			</div>
		</div>
		<script>
		  function descargaToPDF() {
			  const excludedColumns = [9]; // �ndice de la columna "Acciones"

			  // Copia de la tabla para eliminar las columnas no deseadas
			  const table = document.querySelector("table").cloneNode(true);
			  table.querySelectorAll("th, td").forEach((cell) => {
			    const columnIndex = cell.cellIndex;
			    if (excludedColumns.includes(columnIndex)) {
			      cell.remove();
			    } 
			  });

			  const element = document.createElement("div");

			  // Agregar t�tulo a la hoja
			  const title = document.createElement("h1");
			  title.classList.add("pdf-title");
			  title.textContent = "Tabla de Productos";
			  element.appendChild(title);

			  // Agregar l�neas divisorias a las columnas
			  const tableWithLines = document.createElement("table");
			  tableWithLines.classList.add("pdf-table");
			  tableWithLines.style.width = "90%"; // Establecer el ancho de la tabla al 50% del contenedor
			  tableWithLines.style.fontSize = "11px"; // Reducir el tama�o de fuente de la tabla
			  const rows = table.rows;
			  const columns = rows[0].cells.length;

			  for (let i = 0; i < rows.length; i++) {
			    const row = tableWithLines.insertRow();
			    for (let j = 0; j < columns; j++) {
			      const cell = row.insertCell();
			      if (i === 0) {
			        cell.classList.add("pdf-table-header");
			      }
			      cell.innerHTML = rows[i].cells[j].innerHTML;
			    }
			  }

			  element.appendChild(tableWithLines);

			  const opt = {
			    margin: [0.5, 0.1, 1, 0.2], // M�rgenes superior, derecho, inferior, izquierdo
			    filename: "Productos.pdf",
			    image: { type: "jpeg", quality: 0.98 },
			    html2canvas: { scale: 2 },
			    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
			  };

			  html2pdf().set(opt).from(element).save();
			}

			document.getElementById("btnExportarPDF").addEventListener("click", exportToPDF);
		</script>

		<br>
		<!-- LISTAR LOS CLIENTES -->
		<div class="card" id="divResultado">
			<div class="card-header" style="font-weight: bold;">
				<span id="listaClientesTitulo">Lista de Productos Activos</span>
			</div>
			<div class="card-body">

				<table class="table table-hover">
					<thead class="border-black">
						<tr>
							<th scope="col">Codigo</th>
							<th scope="col">Nombre</th>
							<th scope="col">Descripcion</th>
							<th scope="col">Puntos</th>
							<th scope="col">Stock</th>
							<th scope="col">Tipo</th>
							<th scope="col">Marca</th>
							<th scope="col">Categoria</th>
							<th scope="col">Acciones</th>
						</tr>

					</thead>
					<tbody id="detalleTabla">

					</tbody>
				</table>

			</div>
		</div>
	</div>
	<br>
	<!-- Formulario de edición de registro -->
	<div class="fondo bg-dark bg-opacity-75" id="divRegistro"
		style="width: auto; height: 100vh; display: none">
		<div class="card" style="width: 50vw; height: 93vh; margin: auto;">
			<div class="card-header" id="tituloRegistro">{accion}</div>
			<div class="card-body">
				<form class="needs-validation" novalidate>
					<input type="hidden" id="accion" name="accion">
					<div class="row mb-4">
						<label for="frmId" class="col-sm-2 col-form-label">CODIGO</label>
						<div class="col-sm-7">
							<input type="text" class="form-control" id="frmId"
								autocomplete="off" required>
							<div id="numDocError" class="invalid-feedback">Solo es
								válido números en este campo.</div>
							<div class="valid-feedback">Correcto</div>
						</div>
					</div>
					<div class="row mb-4">
						<label for="frmNumber_document" class="col-sm-2 col-form-label">Nombre</label>
						<div class="col-sm-7">
							<input type="text" class="form-control" id="frmName"
								autocomplete="off" required>
							<div id="Num_Doc" class="invalid-feedback">Por favor,
								ingrese un nombre valido</div>
							<div class="valid-feedback">Correcto</div>
						</div>
					</div>



					<div class="row mb-3">
						<label for="frmNames" class="col-sm-2 col-form-label">Description</label>
						<div class="col-sm-7">
							<div id="dynamicInputsContainer">
								<input type="text" class="form-control" id="frmDescription"
									autocomplete="off" required>
							</div>
							<div class="invalid-feedback">Solo se admiten letras en el
								nombre.</div>
							<div class="valid-feedback">Correcto</div>
						</div>
					</div>
					<div class="row mb-4">
						<label for="frmPoints" class="col-sm-2 col-form-label">Puntos</label>
						<div class="col-sm-2">
							<input type="number" class="form-control" autocomplete="off"
								id="frmPoints" required>
							<div class="invalid-feedback">Solo se admiten números de 4
								dígitos</div>
							<div class="valid-feedback">Correcto</div>
						</div>
					</div>

					<div class="row mb-4">
						<label for="frmEmail" class="col-sm-2 col-form-label">Stock</label>
						<div class="col-sm-2">
							<input type="number" class="form-control" id="frmStock"
								autocomplete="off" required>
							<div class="invalid-feedback">Por favor, ingrese un stock
								valido de maximo 2 digitos</div>
							<div class="valid-feedback">Correcto</div>
						</div>
					</div>

					<div class="row mb-3">
						<label for="frmType_document" class="col-sm-2 col-form-label">Tipo
							de Producto</label>
						<div class="col-md-2" style="width: auto;">
							<select class="form-select" id="frmType">
								<option selected>CELULAR</option>
								<option selected>AUDIFONOS</option>
								<option selected>RECARGAS</option>
								<option selected>CUPON</option>
								<option selected>OTROS</option>
							</select>
						</div>
					</div>
					<div class="row mb-4">
						<label for="frmLast_name" class="col-sm-2 col-form-label">Marca</label>
						<div class="col-sm-7">
							<input type="text" class="form-control" autocomplete="off"
								id="frmBrand" required>
							<div class="invalid-feedback">Solo se admiten letras en el
								Campo.</div>
							<div class="valid-feedback">Correcto</div>
						</div>
					</div>
					<div class="row mb-4">
						<label for="frmCategory_name" class="col-sm-3 col-form-label">Categoria</label>
						<div class="col-sm-8" style="width: auto;">
							<select class="form-select" id="frmCategory_name">
							</select>
						</div>
					</div>

					<div class="d-flex justify-content-end">
						<button onclick="alerta()" type="submit" class="btn btn-success"
							id="btnProcesar" style="width: auto;" disabled>
							<i class="fa-solid fa-folder-open fa-2xl" style="color: #000000;"></i>
						</button>
						<div class="mx-2"></div>
						<!-- Espacio horizontal -->
						<button type="button" class="btn btn-danger" id="btnCancelar"
							style="width: auto;">
							<img src="IMG/prohibido.png" alt=""> Cancelar
						</button>
					</div>
					<script>
						function alerta() {
							Swal.fire({
								title : "Guardado!",
								text : "Registro guardado correctamente",
								icon : "success"
							});

						}
					</script>

				</form>
			</div>
		</div>
	</div>
	<script type="text/javascript" src="js/crudProducto.js"></script>
	<script type="text/javascript" src="js/FormValidacion.js"></script>
	<script type="text/javascript" src="js/Descargas.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
</body>
</html>