let $nav = $("nav");
let $body = $("body");
let $toggle = $("#menu__toggle")
let i = 0;
let showMenu = function(){
	if(i % 2 == 0){
		$nav.animate({
			"left": "0px",
		}, 200, "swing");
	
		$body.animate({
			"margin-left": "300px"}, 200, "swing"
		);
		$toggle.prop("checked", false);
	}
	else{
		$nav.animate({
			"left": "-300px",
		}, 200, "swing");
	
		$body.animate({
			"margin-left": "0px"}, 200, "swing"
		);
		$toggle.prop("checked", true);
	}
	i = i+1;
	if(i==2){i=0;}
	console.log(i)
}

$(window).ready(function(){
	if($(window).width() < 861){
		$('nav').append($('.btn-request'));
	}
});
$(window).resize(function(){
	if($body.width() > 860){
		$body.css({
			"margin-left": "0px",
		});
		$nav.css({"left": "-300px"});
		$toggle.prop("checked", false);
		i=0;


		$('.head').append($('.btn-request'));
	}

	else {


		$('nav').append($('.btn-request'));
	}
	

});

$(".menu__btn").on("click", showMenu);

