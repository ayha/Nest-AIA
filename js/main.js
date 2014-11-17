$(document).ready(function(){
	$(".faq_section").each(function(ele){
		//console.log($(this));
		if(!$(this).hasClass("active")){
			$(this).children(".faq_list").hide();
		}
	});
	
	$(".faq_section h3").click(function(e){
		e.preventDefault();
		$(this).parent().toggleClass("active");
		if($(this).parent().hasClass("active")){
			$(this).parent().children(".faq_list").show(500);
		}else{
			$(this).parent().children(".faq_list").hide(500);
		}
	});
	
	setupSideNav();
	
});


function setupSideNav(){
	//var children = $(".navbar .navbar-nav").children();
	//console.log(children);
	//$("#sidenav").append(children);
	$(".navbar .navbar-nav").children().each(function(ele){
		console.log($(this));
		if(!$(this).children("a").hasClass("homelink") && !$(this).children("a").hasClass("applynow")){
			$("#sidenav").children(".nav").append($(this));
		}
		$("#sidenav").children(".nav").children("li").removeClass();
	});
	
}
