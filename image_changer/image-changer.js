var myImage = document.querySelector('img');
myImage.style.border = "10px solid #820020";
myImage.style.borderRadius = "09px";

myImage.onclick = function(){

	var mySrc = myImage.getAttribute('src');

	if(mySrc === 'imagenes/images.jpg'){
		myImage.setAttribute ('src','imagenes/mascotas.jpg');
		myImage.style.border = "10px solid #820020";
	}else{
		myImage.setAttribute ('src','imagenes/images.jpg');
	}
}