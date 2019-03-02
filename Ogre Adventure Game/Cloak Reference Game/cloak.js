/* CLOAK */
var cloak = {
	// Create a variable to track the location of the cloak.
	// Valid values are: hook, inventory, body
	location:'hook',
	
	// CLOAK MENU CREATE
	menuCreate: function () {
		console.log('cloak.menuCreate');
		console.log('   location = ' + this.location);
		// Store the HTML for the cloak's popup menu in a variable
		// EXAMINE option is always in the popup menu
		menu = 
			"<span id='cloakLinkId' class='popup'>" +
				"<a href='#' onclick='cloak.menuDisplay()'>" +
					"cloak" +
				"</a>" +
				"<span id='cloakMenuId' class='popuptext'>" +
					"<u onclick='cloak.examine()'>" +
						"Examine" +
					"</u>";
		// GET option is in the popup menu if the cloak is on the hook
		if (cloak.location == 'hook') {
			menu = menu +
					"<br>" +
					"<u onclick='cloak.get()'>" +
						"Get" +
					"</u>" +
				"</span>" +
			"</span>";
		}
		// DROP and PUT ON are options if the cloak is in the inventory
		else if (this.location == 'inventory') {
			menu = menu +
					"<br>" +
					"<u onclick='cloak.drop()'>" +
						"Drop" +
					"</u>" +
					"<br>" +
					"<u onclick='cloak.putOn()'>" +
						"Put On" +
					"</u>" +
				"</span>" +
			"</span>";					
		}
		// DISROBE is an option if the cloak is on the body
		else if (this.location == 'body'){
			menu = menu +
					"<br>" +
					"<u onclick='cloak.takeOff()'>" +
						"Disrobe" +
					"</u>" +
				"</span>" +
			"</span>";						
		}
		// Detect errors in the cloak location
		else {
			console.log('ERROR! Invalid location');
		}

		// Give the HTML for the popup menu to the caller
		return(menu)
	},

	// CLOAK MENU DISPLAY
	menuDisplay: function () {
		console.log('cloak.menuDisplay');
		// Make the browser display the popup menu
		popup = document.getElementById('cloakMenuId');
		popup.style.visibility = 'visible';
	},

	// EXAMINE
	examine: function () {
		console.log('cloak.examine');
		// Store HTML to describe the cloak in a variable
		detail = 
			"<p>A handsome cloak, of velvet trimmed with " +
				"satin, and slightly spattered with raindrops. " +
				"Its blackness is so deep that it almost seems " +
				"to suck light from the room." +
			"</p>";
			
		// Hide the cloak menu popup menu
		popup = document.getElementById('cloakMenuId');
		popup.style.visibility = 'hidden';
		
		// Make the browser display the HTML
		roomPara = document.getElementById('RoomDesc');
		roomPara.innerHTML = roomPara.innerHTML + detail;
	},

	// GET
	get: function () {
		console.log('cloak.get');
		// Change the cloak location
		this.location = 'inventory';
		
		// Hide the cloak popup menu
		popup = document.getElementById('cloakMenuId');
		popup.style.visibility = 'hidden';
		
		// Recreate the cloak popup menu to hold appropriate options
		popup = document.getElementById('cloakLinkId');
		popup.innerHTML = cloak.menuCreate();
		
		// Store the HTML to describe the action of getting the cloak
		detail = "<p>You take the cloak from the hook with you.</p>"
		document.getElementById("inventoryList").innerHTML = "Cloak";
		
		
		// Make the browser display the HTML
		roomPara = document.getElementById('RoomDesc');
		roomPara.innerHTML = roomPara.innerHTML + detail;
	},
	
	// DROP
	drop: function () {
		console.log('cloak.drop');
		
		// Hide the cloak popup menu
		popup = document.getElementById('cloakMenuId');
		popup.style.visibility = 'hidden';

		// Store the HTML that describes the drop action
		detail =
			"<p>This isn't the best place to leave a smart cloak lying around.</p>"
			
		// Make the browser display the HTML
		roomPara = document.getElementById('RoomDesc');
		roomPara.innerHTML = roomPara.innerHTML + detail;		
	},
	
	// PUT ON
	putOn: function () {
		console.log('cloak.putOn');
		
		// Change the locaton of the cloak
		this.location = 'body';
		
		// Hide the cloak popup menu
		popup = document.getElementById('cloakMenuId');
		popup.style.visibility = 'hidden';
		
		// Put appropriate options in the cloak popup menu
		popup = document.getElementById('cloakLinkId');
		popup.innerHTML = cloak.menuCreate();
		
		// Store the HTML to describe the action of putting on the cloak
		detail = "<p>You put on the cloak. It dresses fine on you!.</p>"
		
		// Make the browser display the HTML
		roomPara = document.getElementById('RoomDesc');
		roomPara.innerHTML = roomPara.innerHTML + detail;
	},
	
	// DISROBE
	takeOff: function () {
		console.log('cloak.takeOff');
		
		// Change the location of the cloak
		this.location = 'inventory';

		// Hide the cloak popup menu
		popup = document.getElementById('cloakMenuId');
		popup.style.visibility = 'hidden';
		
		// Put appropriate options in the cloak popup menu
		popup = document.getElementById('cloakLinkId');
		popup.innerHTML = cloak.menuCreate();
		
		// Store the HTML that describes the action of taking off the cloak
		detail =
			"<p>The cloak slides off and into the crook of your arm.</p>"
			
		// Make the browser display the HTML
		roomPara = document.getElementById('RoomDesc');
		roomPara.innerHTML = roomPara.innerHTML + detail;
	}
};