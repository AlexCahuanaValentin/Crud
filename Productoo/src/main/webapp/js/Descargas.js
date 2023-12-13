// Función para exportar la tabla a formato XLS
function exportToXLS() {
	// Obtener la tabla HTML
	let table = document.getElementById("detalleTabla");

	// Crear un libro de trabajo (workbook)
	let wb = XLSX.utils.table_to_book(table);

	// Guardar el libro de trabajo como archivo XLS
	XLSX.writeFile(wb, 'exported_data.xls');
}

// Función para exportar la tabla a formato CSV
function exportToCSV() {
	// Obtener la tabla HTML
	let table = document.getElementById("detalleTabla");

	// Crear un libro de trabajo (workbook)
	let wb = XLSX.utils.table_to_book(table);

	// Obtener la primera hoja del libro de trabajo
	let ws = wb.Sheets[Object.keys(wb.Sheets)[0]];

	// Convertir la hoja de trabajo a formato CSV
	let csv = XLSX.utils.sheet_to_csv(ws);

	// Guardar el contenido CSV como archivo
	let blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
	let link = document.createElement("a");

	// Crear un enlace y descargar el archivo CSV
	link.href = URL.createObjectURL(blob);
	link.download = 'exported_data.csv';
	link.click();
}

// Asociar las funciones a los botones correspondientes
document.getElementById("btnExportCSV").addEventListener("click", exportToCSV);
document.getElementById("btnExportXLS").addEventListener("click", exportToXLS);