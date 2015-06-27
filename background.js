var cpeState = 0;

chrome.browserAction.onClicked.addListener(function (tab) {
	cpeState = ((cpeState+1)%3);
	chrome.tabs.insertCSS(null, {
		file: "rainbow.css"
	});
	if(cpeState == 1){
		chrome.tabs.executeScript(null, {
			file: "rainbowify.js"
		});
		
	} else if (cpeState == 2){
		chrome.tabs.executeScript(null, {
			file: "addKoolAndTheGang.js"
		});
	} else if (cpeState == 0){
		chrome.tabs.executeScript(null, {
			file: "unrainbowify.js"
		});
	}
});