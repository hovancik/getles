$( document ).ready(function() {
	//move first article down
	$("article").css('margin-top', ($('header').height())+15);
        //flattr
        $("#hearts").click(function(){
          $("#flattr").show("slow");
          $("#flattr").focus();
        });
});


