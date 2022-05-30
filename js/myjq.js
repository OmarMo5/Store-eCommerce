$(document).ready(function(){
	$('.carousel').carousel({
		interval: 6000
	});
});
    /* section price_table */
$(function(){
	
	$(".center-block").hover(function(){
		$(this).animate( {fontSize:'50px'},5 );
	});
	$(".center-block").mouseleave(function(){
		$(this).animate( {fontSize:'40px'} );
	});
	
});
    /* SEction Option Box */
$(document).ready(function(){
	$(".glyph1").click(function(){
		$(".color-option").fadeToggle(2000);
	});
});
    /* Change Color from Opation box */
$(document).ready(function(){
	var colorLi = $(".color-option ul li");
	
	colorLi	
		.eq(0).css("backgroundColor","#E426D5").end()
		.eq(1).css("backgroundColor","#337ab7").end()
		.eq(2).css("backgroundColor","#258963").end()
		.eq(3).css("backgroundColor","#E41B17");

	colorLi.click(function(){
		$("link[href*='theme']").attr("href",$(this).attr("data-value"));
	});
	
});  
	/*Sectoin loading*/
$(function(){
	$("#di1").fadeOut(3000, function(){
		$("body").css("overflow","auto");
		$(".loading-overlay").fadeOut(2000, function(){
			$(this).remove();
		});
	});
});
    /* section scroll top*/
$(document).ready(function(){
	var scrollbutton = $("#scroll-top");
	
	$(window).scroll(function(){
		if($(this).scrollTop()>=200) {scrollbutton.show(1000);}
		else                        {scrollbutton.hide(2000);}
	});
	scrollbutton.click(function(){
		$("html,body").animate({scrollTop:0}, 1000);
	});
});		
	/*Strat With Page About.html (jumbotron)*/
$(function(){
	$(".jumbotron").mouseenter(function(){
		$("#hov").slideUp(2000, function(){
			$(this).slideDown(3500);
		});
	});
	
	$("#che").mouseenter(function(){
		$(this).animate( {opacity:'0.8'}, function(){
			$(this).mouseleave(function(){
				$(this).animate( {opacity:'1'} );
			});
		});
	});
});