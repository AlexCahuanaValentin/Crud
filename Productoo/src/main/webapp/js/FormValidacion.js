/*-------------------------------------------------------------------------------------------------------*/
//VALIDACIONES

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
	'use strict'

	// Fetch all the forms we want to apply custom Bootstrap validation styles to
	var forms = document.querySelectorAll('.needs-validation')

	// Loop over them and prevent submission
	Array.prototype.slice.call(forms)
		.forEach(function(form) {
			form.addEventListener('submit', function(event) {
				if (!form.checkValidity()) {
					event.preventDefault()
					event.stopPropagation()
				}

				form.classList.add('was-validated')
			}, false)
		})
})()

//VALIDACION DE CODIGO
// Función para verificar si el codigo ya existe en el array (ya sea activo o inactivo)
function isNumberDocumentExists(numberDocument) {
	const activeExists = arreglo.some(item => (item.id + '').trim() === numberDocument.trim());
	const inactiveExists = arregloInactivos.some(item => (item.id + '').trim() === numberDocument.trim());
	return activeExists || inactiveExists;
}
function showError(input, message) {
	const formControl = input.parentElement;
	formControl.classList.remove('is-valid');
	formControl.classList.add('is-invalid');
	input.nextElementSibling.textContent = message;
}

document.addEventListener('DOMContentLoaded', function() {
	const frmId = document.getElementById('frmId');
	const numDocError = document.getElementById('numDocError');


	const phoneRegex = /^1\d{5}$/;

	// Agregar un evento input al campo de codigo
	frmId.addEventListener('input', function(event) {
		const value = event.target.value;

		// Verificar si el valor contiene caracteres no válidos
		if (/[^0-9]/.test(value)) {
				frmId.setCustomValidity('No se permiten letras ni símbolos en este campo.');
				numDocError.textContent = 'Por favor, ingrese un número de celular válido.';
			} else if (phoneRegex.test(value)) {
				frmId.setCustomValidity(''); // Valor válido, eliminar el mensaje de error
				numDocError.textContent = ''; // Clear the error message
			} else {
				frmId.setCustomValidity('Ingrese un codigo válido que comience con "1" y tenga 6 dígitos.');
				if (value.charAt(0) !== '1') {
				numDocError.textContent = 'El primer dígito debe ser "1".';
				} else {
				numDocError.textContent = 'Por favor, ingrese un Codigo válido de 6 dígitos.';
				}
			}
		if (isNumberDocumentExists(value)) {
			frmId.setCustomValidity('El Codigo ya existe en la lista');
			showError(frmId, 'El Codigo ya existe');
		}
	});
});

//VALIDACION DE NOMBRES
document.addEventListener('DOMContentLoaded', function() {
	// Obtener el elemento del nombre
	const frmName = document.getElementById('frmName');
	// Expresión regular para permitir nombres con letras, números, guiones, puntos y espacios
	const regex = /^[A-Za-z0-9.-\s]+$/;

	// Agregar un evento input al campo de nombre
	frmName.addEventListener('input', function() {
		if (!regex.test(frmName.value)) {
			frmName.setCustomValidity('Ingrese un nombre válido');
		} else {
			frmName.setCustomValidity('');
		}
	});
});


document.addEventListener('DOMContentLoaded', function() {
	const forms = document.querySelectorAll('.needs-validation');

	forms.forEach(function(form) {
		const inputs = form.querySelectorAll('input, select');

		inputs.forEach(function(input) {
			input.addEventListener('input', function() {
				if (input.checkValidity()) {
					input.classList.remove('is-invalid');
					input.classList.add('is-valid');
				} else {
					input.classList.remove('is-valid');
					input.classList.add('is-invalid');
				}
			});
		});
	});
});
//VALIDACION DE STOCK
document.addEventListener('DOMContentLoaded', function() {
	const frmStock = document.getElementById('frmStock');

	frmStock.addEventListener('input', function(event) {
		const value = event.target.value;

		// Verificar si el valor contiene exactamente dos dígitos
		if (/^\d{1,2}$/.test(value)) {
			frmStock.setCustomValidity(''); // Valor válido, eliminar el mensaje de error
			frmStock.classList.remove('is-invalid');
			frmStock.classList.add('is-valid');
		} else {
			frmStock.setCustomValidity('Por favor, ingrese exactamente 2 números.');
			frmStock.classList.remove('is-valid');
			frmStock.classList.add('is-invalid');
		}
	});
});

//VALIDACION DE PUNTOS
document.addEventListener("DOMContentLoaded", function() {
	var frmPointsInput = document.getElementById("frmPoints");

	frmPointsInput.addEventListener("input", function() {
		var inputValue = frmPointsInput.value;

		// Verificar si el valor tiene 4 dígitos
		if (/^\d{4}$/.test(inputValue)) {
			frmPointsInput.classList.remove("is-invalid");
			frmPointsInput.classList.add("is-valid");
		} else {
			frmPointsInput.classList.remove("is-valid");
			frmPointsInput.classList.add("is-invalid");
		}
	});
});

//BOTON GUARDAR

document.addEventListener('DOMContentLoaded', function() {
	const forms = document.querySelectorAll('.needs-validation');
	const saveButton = document.getElementById('btnProcesar'); // Obtén el botón "Guardar"

	forms.forEach(function(form) {
		const inputs = form.querySelectorAll('input, select');

		inputs.forEach(function(input) {
			input.addEventListener('input', function() {
				if (form.checkValidity()) {
					// Habilitar el botón si el formulario es válido
					saveButton.removeAttribute('disabled');
				} else {
					// Deshabilitar el botón si el formulario no es válido
					saveButton.setAttribute('disabled', 'disabled');
				}
			});
		});
	});
});

// En el archivo de validaciones
function reiniciarValidacion() {
	// Reiniciar la validación del formulario
	const forms = document.querySelectorAll('.needs-validation');
	forms.forEach(function(form) {
		form.classList.remove('was-validated');
	});
	// Eliminar clases de validación de Bootstrap
	frmId.classList.remove('is-valid', 'is-invalid');
	frmName.classList.remove('is-valid', 'is-invalid');
	frmDescription.classList.remove('is-valid', 'is-invalid');
	frmPoints.classList.remove('is-valid', 'is-invalid');
	frmStock.classList.remove('is-valid', 'is-invalid');
	frmType.classList.remove('is-valid', 'is-invalid');
	frmBrand.classList.remove('is-valid', 'is-invalid');
}

