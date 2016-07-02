/*$(document).ready(function(){
	$('h2').on('click',function(){
		$(this).next().slideToggle();
	})
*/


$(document).ready(function(){
	$('#ver-mas').click(function(){
		$('.ocultable').slideToggle();
		var text = $(this).text();
		if(text == 'Ver mas'){
			$(this).text('Ver menos');
		}else{
			$(this).text('Ver mas');
		}
	});
});