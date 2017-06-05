
// al cargar la pagina
window.addEventListener("load", function () {
	// Envío de formulario
	var formulario = document.getElementById("formularioContenedor");
	formulario.addEventListener("submit", function (event) {
		event.preventDefault();
		// se obtienen los datos
		var contenedor = document.getElementById("contacto");
    // .required = true; si no esta completado el campo no se envia
		var nombreContenedor = document.getElementById("nombre");
		var nombreContacto = nombreContenedor.value;
		var telefonoContenedor =document.getElementById("telefono");
		var telefonoContacto = telefonoContenedor.value;
		// se crean los elementos
		var caja = document.createElement("article");
		var parrafo = document.createElement("p");
		var telefono = document.createElement("p");

		caja.className = "card";
		parrafo.textContent = nombreContacto;
		telefono.textContent =telefonoContacto;

		// Agregarlos al DOM
		caja.appendChild(parrafo);
		caja.appendChild(telefono);
		// Agregarlo a un elemento existente
		contenedor.appendChild(caja);
		// para borrar el contenido del input
		nombreContenedor.value = "";
		telefonoContenedor.value ="";
	});
});


/*
(function(){
  var contador=0;

  var iniciar= function (){

    $("#formulario").submit(agregarFormulario);
    $("#nombre").keyup(validacionContenido);

  };

  var agregarFormulario= function(event){
    event.preventDefault();
    var contenedor = $("#contacto");
    var nombreContenedor = $("#nombre");
    var telefonoContenedor = $("#telefono");
    var botonFormulario = $("#boton");
    var nombreContacto = nombreContenedor.val();
    var telefonoContacto = telefonoContenedor.val();

  // creamos los elementos
    var caja = $("<article />", { "class": "card"});
    var parrafo = $("<input type='text' />");
    var telefono = $("<label />");

    var identificador = "marcador-" + contador;

    parrafo.id = identificador;
    telefono.attr("for", identificador);
    telefono.text(mensaje);

    parrafo.click(eliminar);


  // Agregarlos al DOM
  caja.append(parrafo);
  caja.append(telefono);
  // Agregarlo a un elemento existente
  contenedor.prepend(caja);

  // para borrar el contenido del input
  nombreContenedor.val("");
  telefonoContenedor.val("");
  botonFormulario.attr("disabled", true);

  contador++;
};

  var eliminar = function(){
    $(this).parent().remove();
  };

  var validacionContenido = function(){
    var botonValidar = $("#boton");
    if($(this).val().trim().length > 0){
      botonValidar.removeAttr("disabled");
    }
    else{
      botonValidar.attr("disabled", true);
    }
  };

  $(document).ready(iniciar);
})();
*/
