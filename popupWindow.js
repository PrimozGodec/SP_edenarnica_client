$(function() {
	$( "#dialog" ).dialog({
		autoOpen: false,
		show: {
			effect: "bounce",
			duration: 800
     		},
      		hide: {
			effect: "clip",
			duration: 400
      		}
    	});
 
	$( "#dataTab" ).click(function() {
		$( "#dialog" ).dialog( "open" );
	});
});
