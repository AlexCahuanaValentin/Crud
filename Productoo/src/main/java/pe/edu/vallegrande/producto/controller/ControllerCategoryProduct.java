package pe.edu.vallegrande.producto.controller;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

import java.util.List;
import pe.edu.vallegrande.producto.model.CategoryProductModel;
import pe.edu.vallegrande.producto.service.CrudCategoryProductService;

@WebServlet({ "/CategoryProductBuscar", "/CategoryProductInactivos", "/CategoryProductProcesar", "/ListarCategorias" }) // Mapea
// el
// servlet
// a
// la
// URL raíz
public class ControllerCategoryProduct extends HttpServlet {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private CrudCategoryProductService categoryproductService = new CrudCategoryProductService();

	@Override
	protected void service(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		String path = request.getServletPath();
		switch (path) {
		case "/CategoryProductBuscar":
			buscarCategory(request, response);
			break;
		case "/CategoryProductInactivos":
			inactivosCategory(request, response);
			break;
		case "/CategoryProductProcesar":
			procesarCategory(request, response);
			break;
		case "/ListarCategorias":
			listar(request, response);
			break;

		}

	}

	private void listar(HttpServletRequest request, HttpServletResponse response) {
		try {
			// Obtener la lista de todas las categorías activas
			List<CategoryProductModel> listaCategorias = categoryproductService.getAllCategory();

			// Convertir la lista en JSON
			Gson gson = new Gson();
			String data = gson.toJson(listaCategorias);

			// Enviar la respuesta JSON al cliente
			ControllerUtil.responseJson(response, data);
		} catch (Exception e) {
			// Manejar cualquier excepción y enviar un mensaje de error al cliente
			ControllerUtil.responseJson(response, "Error al obtener la lista de categorías.");
		}
	}

	private void procesarCategory(HttpServletRequest request, HttpServletResponse response) {
		// Datos
		String accion = request.getParameter("accion");
		CategoryProductModel bean = new CategoryProductModel();
		String idStr = request.getParameter("id");
		Integer id = Integer.parseInt(idStr);

		bean.setId(Integer.parseInt(request.getParameter("id")));
		bean.setName(request.getParameter("name"));
		bean.setDescription(request.getParameter("description"));
		bean.setState(request.getParameter("state"));
		// Proceso
		try {
			switch (accion) {
			case ControllerUtil.CRUD_NUEVO:
				categoryproductService.insert(bean);
				break;
			case ControllerUtil.CRUD_EDITAR:
				categoryproductService.update(bean);
				break;
			case ControllerUtil.CRUD_ELIMINAR:
				categoryproductService.delete(id);
				break;
			case ControllerUtil.CRUD_ACTIVAR:
				categoryproductService.activar(id);
				break;

			default:
				throw new IllegalArgumentException("Unexpected value: " + accion);
			}
			ControllerUtil.responseJson(response, "Proceso ok.");
		} catch (Exception e) {
			ControllerUtil.responseJson(response, e.getMessage());
		}
	}

	private void buscarCategory(HttpServletRequest request, HttpServletResponse response) {
		// Datos
		String idStr = request.getParameter("id");
		Integer id = null;
		if (idStr != null && !idStr.isEmpty()) {
			id = Integer.parseInt(idStr);
		}
		String nombre = request.getParameter("nombre");
		// Proceso
		CategoryProductModel model = new CategoryProductModel();
		model.setId(id);
		model.setName(nombre);
		List<CategoryProductModel> lista = categoryproductService.get(model);
		// Convertir lista en JSON
		Gson gson = new Gson();
		String data = gson.toJson(lista);
		// Reporte
		ControllerUtil.responseJson(response, data);
	}

	private void inactivosCategory(HttpServletRequest request, HttpServletResponse response) {
		// Datos
		String idStr = request.getParameter("id");
		Integer id = null;
		if (idStr != null && !idStr.isEmpty()) {
			id = Integer.parseInt(idStr);
		}
		String nombre = request.getParameter("nombre");

		// Proceso
		CategoryProductModel model = new CategoryProductModel();
		model.setId(id);
		model.setName(nombre);

		// Si el id es null, puedes establecerlo como una cadena vacía para que se
		// incluyan en la búsqueda
		if (id == null) {
			model.setIdStr("");
		}

		List<CategoryProductModel> lista = categoryproductService.getInactive(model);

		// Convertir lista en JSON
		Gson gson = new Gson();
		String data = gson.toJson(lista);

		// Reporte
		ControllerUtil.responseJson(response, data);
	}

}