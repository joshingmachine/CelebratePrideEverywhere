// Create Kool & The Gang
var koolAndTheGang = document.createElement("div");
koolAndTheGang.innerHTML = "<iframe width='230' height='200' src='https://www.youtube.com/embed/3GwjfUFyY6M?autoplay=1&loop=1' frameborder='0' allowfullscreen></iframe>";
koolAndTheGang.className = "cpeKoolAndTheGang";

// Add Kool & The Gang to the Rainbow
var rainbowDiv = document.getElementsByClassName("cpeRainbow")[0];
rainbowDiv.appendChild(koolAndTheGang);