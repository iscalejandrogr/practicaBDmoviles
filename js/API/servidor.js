//Servidor
function enviarRegistro(nombre,email,telefono){
	alert(nombre+email+telefono);
	$.ajax({
		type: "POST",
		url: "http://itslmoviles.260mb.net/procesar.php",
		data: "Nom="+nombre+"&Mail="+email+"&Telef="+telefono,
		error: function(){
			alert('Ajax error');
		}
	}).done(function( msg ){
		alert( "Data Saved: " + msg );
	});
}