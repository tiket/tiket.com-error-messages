$(function(){
	animateLoadLeft=function(){
		$(".load-1, .load-2, .load-3, .load-4").rotate({
			angle:0,
			animateTo:40,
			center: [0,0],
			easing: $.easing.easeInOutExpo,
			duration:2000,
			callback:animateLoadRight
		});
	};
	animateLoadRight=function(){
		$(".load-1, .load-2, .load-3, .load-4").rotate({
			angle:40,
			animateTo:0,
			center: [0,0],
			easing: $.easing.easeInOutExpo,
			duration:2000,
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
							$(".balloon-small").plaxify({"xRange":12.5,"yRange":12.5});
							$(".cloud-1").plaxify({"xRange":25,"yRange":25});
							$(".cloud-2").plaxify({"xRange":50,"yRange":50});
							$(".balloon-big").plaxify({"xRange":100,"yRange":100});
							$(".question-mark").plaxify({"xRange":12.5,"yRange":12.5});
							$(".cloud-3").plaxify({"xRange":125,"yRange":125});
							$.plax.enable();
						}
					);
				}
			);
			animateLoadRight();
		}
	);
});