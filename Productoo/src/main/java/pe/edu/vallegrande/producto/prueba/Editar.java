package pe.edu.vallegrande.producto.prueba;


import pe.edu.vallegrande.producto.model.Producto;
import pe.edu.vallegrande.producto.service.CrudProductoService;
public class Editar {

	public static void main(String[] args) {
		try {
			// Datos del cliente a editar
			int clienteId = 123478;
			// Consultar el cliente actual
			CrudProductoService consultaService = new CrudProductoService();
			Producto cliente = consultaService.getById(clienteId);

			if (cliente != null) {
				// Modificar los datos del producto
				cliente.setName("diego");
				cliente.setDescription("quiere su huevo");
				cliente.setPoints("3000");
				cliente.setStock(20);
				cliente.setType("CUPON");
				cliente.setBrand("akita");
				cliente.setCategory_name("IPHON");

				// Actualizar el cliente
				CrudProductoService servicio = new CrudProductoService();
				servicio.update(cliente);

				// Reporte
				System.out.println("Cliente actualizado con éxito");
			} else {
				System.out.println("El cliente con ID " + clienteId + " no existe.");
			}
		} catch (Exception e) {
			System.err.println(e.getMessage());
		}
	}
}


