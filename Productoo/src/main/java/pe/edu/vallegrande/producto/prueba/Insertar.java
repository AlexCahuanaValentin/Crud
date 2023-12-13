package pe.edu.vallegrande.producto.prueba;

import pe.edu.vallegrande.producto.model.Producto;
import pe.edu.vallegrande.producto.service.CrudProductoService;

public class Insertar {
	public static void main(String[] args) {
		try {
			// Datos de consulta
			Producto model = new Producto();
			model.setId(123450);
			model.setName("audifono blu");
			model.setDescription("solo negro");
			model.setPoints("1500");
			model.setStock(03);
			model.setType("audifonos");
			model.setBrand("nokia");
			model.setCategory_name("SAMSUNG");
			
			// Proceso
			CrudProductoService service = new CrudProductoService();
			service.insert(model); // Llama al método insert de CrudClienteService
			// Reporte
			System.out.println("Registro grabado correctamente");
		} catch (Exception e) {
			System.err.println(e.getMessage());
		}
	}

}
