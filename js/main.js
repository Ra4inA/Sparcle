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