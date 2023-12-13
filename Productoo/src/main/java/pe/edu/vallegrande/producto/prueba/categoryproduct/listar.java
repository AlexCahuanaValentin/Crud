package pe.edu.vallegrande.producto.prueba.categoryproduct;

import java.util.List;

import pe.edu.vallegrande.producto.model.CategoryProductModel;
import pe.edu.vallegrande.producto.service.CrudCategoryProductService;

public class listar {

	public static void main(String[] args) {
		try {
			CrudCategoryProductService service = new CrudCategoryProductService();
			List<CategoryProductModel> lista = service.getAllCategory();
			System.out.println("Filas: " + lista.size());
			for (CategoryProductModel rec : lista) {
				System.out.println(rec.getName());
			}
		} catch (Exception e) {
			System.err.println(e.getMessage());
		}
	}

}
