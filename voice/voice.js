function sound(data){
	var value = $('#' + data).val();
	responsiveVoice.speak(value, "Norwegian Male");
}

function solution(data){
	var text = $('#' + data).val();
	$('#text' + data).val(text);
}

function stave(data){
	var text = $('#' + data).val();
	var text = text.replace(/ /g,'');
	count(text);
}

function count(text){
	var i = 0;
	counter();

	function counter() {           
	   setTimeout(function () {    
	    if(text[i]){
	    	responsiveVoice.speak(text[i], "Norwegian Male");
	    }
	                           
		if (i < text.length) {            	
			counter();                
		}    
		i++;                    
	   }, 600)
	}
}
