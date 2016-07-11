$('#comprobar').click(function(){
	var nombre = $('#nombre').val();
	var apellido = $('#apellido').val();
	var empresa = $('#empresa').val();
    	
    	var validacion = /^[a-zA-Z]*$/;
    	if( !validacion.test(nombre)) {
    			alertify.alert("Opps","CAMPO NOMBRE INCORRECTO");
        }else if(nombre === ""){
                alertify.alert("Opps","CAMPO NOMBRE NO PUEDE ESTAR VACIO");
        }else if(!validacion.test(apellido)){
        	alertify.alert("Opps","CAMPO APELLIDO INCORRECTO");
        }else if(apellido === ""){
            alertify.alert("Opps","CAMPO APELLIDO NO PUEDE ESTAR VACIO");
        }else if(empresa === ""){
        	alertify.alert("Opps","CAMPO EMPRESA NO PUEDE ESTAR VACIO");
        }
});

		