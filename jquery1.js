
var object = {'key','value'}

$(document).ready(function(){
	
	//selector
	var button = $("#tfs");
	//alert(button);
	button.click(function() {
		$("#_MM_ICO_NLABS").animate({
		    width: [ "toggle", "swing" ],
		    height: [ "toggle", "swing" ],
		    opacity: "toggle"
		  });
	});
	
	
	
});