	$(document).ready(function(){
		

		TweenLite.from(".skillset", 2, {opacity: 0, delay:2});

		TweenMax.staggerFrom([".main-txt h2",".my-name"], 1, {opacity:0, letterSpacing:"1em"}, 3);



});