var rainbowDiv = document.getElementsByClassName("cpeRainbow")[0];

rainbowDiv.addEventListener("animationend", function(){
	document.body.removeChild(rainbowDiv);
});

rainbowDiv.className = "cpeRainbow--leaving";