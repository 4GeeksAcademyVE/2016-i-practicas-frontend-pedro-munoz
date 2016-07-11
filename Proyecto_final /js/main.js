$('#comprobar').click(function(){
	var nombre = $('#nombre').val();
	var apellido = $('#apellido').val();
	var empresa = $('#empresa').val();
    	
    	var validacion = /^[a-zA-Z]*$/;
    	if( !validacion.test(nombre) || nombre === "") {
    			alertify.alert("Opps","CAMPO NOMBRE INCORRECTO");
        }else if(!validacion.test(apellido) || apellido === " " ){
        	alertify.alert("Opps","CAMPO APELLIDO INCORRECTO");
        }else if(empresa === ""){
        	alertify.alert("Opps","CAMPO EMPRESA NO PUEDE ESTAR VACIO");
        }
});

		