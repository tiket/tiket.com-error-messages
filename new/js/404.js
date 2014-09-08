$(function(){
	animateLoadLeft=function(){
		$(".load-1, .load-2, .load-3, .load-4").rotate({
			angle:-20,
			animateTo:40,
			center: [0,0],
			easing: $.easing.easeInOutExpo,
			duration:"2000",
			callback:animateLoadRight
		});
	};
	animateLoadRight=function(){
		$(".load-1, .load-2, .load-3, .load-4").rotate({
			angle:20,
			animateTo:-40,
			center: [0,0],
			easing: $.easing.easeInOutExpo,
			duration:"2000",
			callback:animateLoadLeft
		});
	};
	$(".balloon-big").animate(
		{
			"margin-top":0
		},
		"fast",
		"swing",
		function(){
			$(".balloon-small").fadeIn(
				"slow",function(){
					$(".question-mark").fadeIn(
						"slow",
						function(){
							$(".cloud-1, .cloud-2, .cloud-3").fadeIn("slow");
							$(".cloud-1, .cloud-2, .cloud-3").plaxify({"xRange":75,"yRange":75});
							$(".balloon-big").plaxify({"xRange":25,"yRange":25});
							$(".balloon-small").plaxify({"xRange":150,"yRange":150});
							$(".question-mark").plaxify({"xRange":10,"yRange":10});
							$.plax.enable();
						}
					);
				}
			);
			animateLoadRight();
		}
	);
});