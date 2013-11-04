$( document ).ready(function() {
	//move first article down
	$("article").css('margin-top', ($('header').height())+15);
        //flattr
        $("#flattr").click(function(){ 
          $('footer').first().append('<a href="https://flattr.com/submit/auto?user_id=conta&url=http%3A%2F%2Fgetles.tk" target="_blank"><img src="https://api.flattr.com/button/flattr-badge-large.png" alt="Flattr this" title="Flattr this" border="0"></a>');
        });
});


