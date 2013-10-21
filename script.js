$( document ).ready(function() {
	//move first article down
	$("#first").css('margin-top', ($('header').height())+15);
	//header and links problem
	$(".anchor").css('padding-top', ($('header').height()));
});


