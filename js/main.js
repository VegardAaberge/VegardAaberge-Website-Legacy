$(document).ready(function(){
	var loading = $.loading();
	loading.ajax(true);
	

	$('#submitMessage').submit(function(e){
		e.preventDefault();
		var values = $(this).serialize();
		$('#contact').modal('hide');

		$.ajax({
			type: "POST",
			url: 'php/email.php',
			data: values,
				
			success: function (data) {
				if(data=='1'){
					alert('Melding sendt.');
				}else{
					alert(data);
				}
				$('#submitMessage')[0].reset();				
			},
			cache: false
		});
	});
});