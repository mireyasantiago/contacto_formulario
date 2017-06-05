
// IIFE 
(function () {
    var contador = 0;

    var cargarPagina = function () {
        var formulario = $("#formularioContenedor");
        formulario.submit(contactosNuevos); 
        
       /* var contactosEliminar = $("#contacto");
        contactosEliminar.click(eliminar);*/
        
    };

    var contactosNuevos =  function (e) {
		e.preventDefault();

		// se obtienen los datos
        var contenedor = $("#contacto");

        var contenedorContactos = contenedor.val().length;
		
        // .required = true; si no esta completado el campo no se envia
		var nombreContenedor = $("#nombre");
		var nombreContacto = nombreContenedor.val();
		var telefonoContenedor = $("#telefono");
		var telefonoContacto = telefonoContenedor.val();

		// se crean los elementos
		var caja = $("<article/>", {'class': 'card blue-grey darken-1'});
		var parrafo = $("<p/>");
		var telefono = $("<p/>");
        var eliminar = $("<input type='button' value='cerrar'/>" ,  { 'class': 'boton__cerrar'});

  
     
    
		parrafo.text(nombreContacto);
		telefono.text(telefonoContacto);

		// Agregarlos al DOM
		caja.append(parrafo);
		caja.append(telefono);
		// Agregarlo a un elemento existente
        caja.append(eliminar);

		contenedor.prepend(caja);
		// para borrar el contenido del input
		nombreContenedor.val("");
		telefonoContenedor.val("");
	};

    /*var eliminar = function () {
    $(this).parent().remove();
    // para actualizar el contador
    //cantidadContactos();
    };*/
    

    $(document).ready(cargarPagina);

})();

