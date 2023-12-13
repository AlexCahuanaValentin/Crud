package pe.edu.vallegrande.producto.prueba;

import java.util.List;

import pe.edu.vallegrande.producto.model.Producto;
import pe.edu.vallegrande.producto.service.CrudProductoService;

public class ListarInactivos {
	public static void main(String[] args) {
		try {
			// Datos de consulta
			Producto model = new Producto();
			model.setName("");
			model.setType("");
			// Proceso
			CrudProductoService service = new CrudProductoService();
			List<Producto> lista = service.getInactive(model);
			// Reporte
			System.out.println("LISTADO");
			System.out.println("Registros: " + lista.size());
			for (Producto rec : lista) {
				System.out.println(
						rec.getId() + "|" + rec.getName() + "|" + rec.getDescription() + "|" + rec.getPoints()
								+ "|" + rec.getType() + "|" + rec.getStock() + "|" + rec.getBrand() + "|" + rec.getCategory_name());
			}
		} catch (Exception e) {
			System.err.println(e.getMessage());
		}
	}
}