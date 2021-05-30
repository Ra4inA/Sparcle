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
	i++;
	if(i==2){i=0;}
}
let $height;
$(window).ready(function(){
	$height = $(".footer__column__content").height();
	if($(window).width() < 861){
		$('nav').append($('.btn-request'));
	};
	$height = $(".footer__column__content").height();
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

	} else {
		$('nav').append($('.btn-request'));
	}
	

});

$(".menu__btn").on("click", showMenu);

// ===============================================================
let $type = $("#typeOfCleaning");
let $typeTime;
let $typePrice;
function readValue($input){
	value = $input.val();
	return value;
}

$("input, .number__button").on("change click", function(){
	if($("#commercial").is(":checked")){
		$type.text("Commercial");
		$typeTime = 2;
		$typePrice = 50;
	} else {
		$type.text("Residential");
		$typeTime = 1.5;
		$typePrice = 35;
	}



	$("#bedrooms").text(readValue($("#count-bedrooms")));
	$("#bathrooms").text(readValue($("#count-bathrooms")));

	$("#timeOfCleaning").text(function(){
		if($("#bedrooms").text() == "0" & $("#bathrooms").text() == "0"){return 0};
		return ($typeTime + readValue($("#count-bedrooms")) * 1.5 + readValue($("#count-bathrooms")) * 1.5);
	})
	$("#price").text(function(){
		if($("#bedrooms").text() == "0" & $("#bathrooms").text() == "0"){return 0};
		return ($typePrice + readValue($("#count-bedrooms")) * 15.44 + readValue($("#count-bathrooms")) * 10.47).toFixed(2);
	});
});


// ===============================================


$('.testimonials__slider').slick({
	arrows: false,
	infinite: false,
	slidesToShow: 1,
	responsive: [{
            breakpoint: 500,
            settings: {
             	slidesToShow: 1,
            }
        }, ]
}
);


// ===============================================
$(".footer__column__title").on("click", function(){
	if($(this).next().height() == 0){
		$(this).next().animate({
			"height": $height,
		});
	} else {
		$(this).next().animate({
			"height": "0px",
		});
	};
});


$("footer ._left-anim li").addClass("_animate _animate-left");
$("footer ._right-anim li").addClass("_animate _animate-right");
$(".testimonial").addClass("_animate _animate-right");
	$(".book ._animate").addClass("_anim-no-hide");
	const animItems = document.querySelectorAll("._animate");
	$(window).on("scroll", function(){
		for (let index = 0; index < animItems.length; index++){
			if($(window).scrollTop() + $(window).height() > $(animItems[index]).offset().top + $(animItems[index]).height() / 2 
				& $(window).scrollTop() < $(animItems[index]).offset().top + $(animItems[index]).height() / 2){
				$(animItems[index]).addClass("_animate-Active");
			} else {
				if($(animItems[index]).hasClass("_anim-no-hide") !== true){$(animItems[index]).removeClass("_animate-Active");}
			}
		}
});