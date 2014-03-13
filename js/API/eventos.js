//Eventos

$(function(){
	document.addEventListener("deviceready",function(){
		//Registro
		window.location.href = "#registro";
		$('#regEnv').tap(function(){
			var nom = $('#regNom').val();
			var email = $('#regEmail').val();
			var tel = $('#regTel').val();
			
			enviarRegistro(nom,email,tel);
		});
	},false);
});