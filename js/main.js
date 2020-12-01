$(function(){
	$(window).scroll(function(event){
		$(".fo h2").each(function(){
			var pos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();

			if(pos < topOfWindow + 650){
				$(this).addClass("fadeInLeft");
			}

		});
	});
})