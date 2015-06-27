// Create rainbow
var rainbowDiv = document.createElement("div");
rainbowDiv.className = "cpeRainbow";

// Create colors
var redDiv = document.createElement("div");
redDiv.className = "cpeRed";
var orangeDiv = document.createElement("div");
orangeDiv.className = "cpeOrange";
var yellowDiv = document.createElement("div");
yellowDiv.className = "cpeYellow";
var greenDiv = document.createElement("div");
greenDiv.className = "cpeGreen";
var blueDiv = document.createElement("div");
blueDiv.className = "cpeBlue";
var violetDiv = document.createElement("div");
violetDiv.className = "cpeViolet";

// Add colors to rainbow
rainbowDiv.appendChild(redDiv);
rainbowDiv.appendChild(orangeDiv);
rainbowDiv.appendChild(yellowDiv);
rainbowDiv.appendChild(greenDiv);
rainbowDiv.appendChild(blueDiv);
rainbowDiv.appendChild(violetDiv);

// Add rainbow to page
document.body.appendChild(rainbowDiv);