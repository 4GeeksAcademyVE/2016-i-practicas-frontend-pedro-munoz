$('#comprobar').click(function(){
	var nombre = $('#nombre').val();
	var apellido = $('#apellido').val();
    	var validacion = /^[a-zA-Z]*$/;
    	if( !validacion.test(nombre) || nombre === "") {
    		alert("Campo nombre Incorrecto");
        }else if(!validacion.test(apellido) || apellido === " " ){
        	alert("Campo apellido Incorrecto");
        }
});

		