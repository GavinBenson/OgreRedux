/* FOYER */
function enterFoyer() {
	console.log('enterFoyer');
	// Create a variable to hold the HTML that describes the foyer room.
	var description = "";
	// Check if the introduction to the game needs to be displayed.
	if (enterFoyer.init == undefined) {
		// Set a variable to remember if the introduction was displayed.
		enterFoyer.init = 1;
		// Save the game's introduction into a variable
		description =
		"<p>Hurrying through the rainswept November night, you are glad " +
			"to see the bright lights of the Opera House. It is surprising " +
			"that there are not more people about but, hey, what do you " +
			"expect in a cheap demo game...?" +
		"</p>" +
		"<p style='text-align:center'>Cloak of Darkness<br>"+
			"A basic JS demonstration."
		"</p>";
	}
	// Append the description of the room to whatever is stored already.
	description = description +
		"<p>You are standing in a spacious hall, splendidly decorated in red " +
			"and gold, with glittering chandeliers overhead. There is an " +
			"entrance from the " +
			"<a href='#' onclick='enterStreet()'>street</a>, " +
			"and there are doorways " +
			"<a href='#' onclick='enterSouth()'>south</a> " +
			"and " +
			"<a href='#' onclick='enterHall()'>west</a>." +
		"</p>";

	// Make the browser display the HTML
	roomPara = document.getElementById("RoomDesc");
	roomPara.innerHTML = description;
}

/* STREET */
function enterStreet() {
	console.log('enterStreet');
	// Save HTML describing the street in a variable
	var detail = "<p>Why are you leaving so fast? You just got here.</p>";
	
	// Make the browser display the HTML
	roomPara = document.getElementById("RoomDesc");
	roomPara.innerHTML = roomPara.innerHTML + detail;
}