package pe.edu.vallegrande.producto.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class CategoryProductModel {
	private Integer id;
	private String name;
	private String description;
	private String state;
	private String idStr; // Agrega esta propiedad
}
