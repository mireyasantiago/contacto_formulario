
// IIFE 
(function () {

    var contador = 0;

var cargarPagina = function () {
	var formulario = $("#formularioContenedor");
	formulario.submit(contactosNuevos); 
};
    var contactosNuevos =  function (e) {
		e.preventDefault();
		// se obtienen los datos
		var contenedor = $("#contacto");
        // .required = true; si no esta completado el campo no se envia
		var nombreContenedor = $("#nombre");
		var nombreContacto = nombreContenedor.val();
		var telefonoContenedor = $("#telefono");
		var telefonoContacto = telefonoContenedor.val();
		// se crean los elementos
		var caja = $("<article/>", {'class': 'card'});
		var parrafo = $("<p/>");
		var telefono = $("<p/>");
		
		parrafo.text(nombreContacto);
		telefono.text(telefonoContacto);

		// Agregarlos al DOM
		caja.append(parrafo);
		caja.append(telefono);
		// Agregarlo a un elemento existente
		contenedor.prepend(caja);
		// para borrar el contenido del input
		nombreContenedor.val("");
		telefonoContenedor.val("");
	};
    $(document).ready(cargarPagina);
    })();

