

var sword = {
	// Create a variable to track the location of the sword.
	// Valid values are: hook, inventory, body
	swordComplete: 0,

	location:'chest',

	// sword MENU CREATE
	menuCreate: function () {
		console.log('sword.menuCreate');
		console.log('   location = ' + this.location);
		// Store the HTML for the sword's popup menu in a variable
		// EXAMINE option is always in the popup menu
		menu =
			"<span id='swordLinkId' class='popup'>" +
				"<a href='#' onclick='sword.menuDisplay()'>" +
					"Sword" +
				"</a>" +
				"<span id='swordMenuId' class='popuptext'>" +
					"<u onclick='sword.examine()'>" +
						"Examine" +
					"</u>";
		// GET option is in the popup menu if the sword is on the
		if (sword.location == 'chest') {
			menu = menu +
					"<br>" +
					"<u onclick='sword.get()'>" +
						"Get" +
					"</u>" +
				"</span>" +
			"</span>";
		}
		// DROP and PUT ON are options if the sword is in the inventory
		else if (this.location == 'inventory') {
			menu = menu +
					"<br>" +
					"<u onclick='sword.equip()'>" + [[[]]]
						"Put On" +
					"</u>" +
				"</span>" +
			"</span>";
		}
		// DISROBE is an option if the sword is on the body
		else if (this.location == 'body'){
			menu = menu +
					"<br>" +
					"<u onclick='sword.equip()'>" + [[[]]]
						"Take off" +
					"</u>" +
				"</span>" +
			"</span>";
		}
		// Detect errors in the sword location
		else {
			console.log('ERROR! Invalid location');
		}

		// Give the HTML for the popup menu to the caller
		return(menu)
	},

	// sword MENU DISPLAY
	menuDisplay: function () {
		console.log('sword.menuDisplay');
		// Make the browser display the popup menu
		popup = document.getElementById('swordMenuId');
		popup.style.visibility = 'visible';
	},

	// EXAMINE
	examine: function () {
		console.log('sword.examine');
		// Store HTML to describe the sword in a variable
		detail =
		"<p>A large sword, make of a shining silver metal."+
			"The edge is very sharp, so sharp that just looking at it makes your eyes hurt."+
		"</p>";

		// Hide the sword menu popup menu
		popup = document.getElementById('swordMenuId');
		popup.style.visibility = 'hidden';

		// Make the browser display the HTML
		roomPara = document.getElementById('RoomDesc');
		roomPara.innerHTML = roomPara.innerHTML + detail;
	},

	// GET
	get: function () {
		console.log('sword.get');
		// Change the sword location
		sword.location = 'inventory';

		// Hide the sword popup menu
		popup = document.getElementById('swordMenuId');
		popup.style.visibility = 'hidden';

		// Recreate the sword popup menu to hold appropriate options
		popup = document.getElementById('swordLinkId');
		popup.innerHTML = sword.menuCreate();

		// Store the HTML to describe the action of getting the sword
		detail = "<p>You take the sword from the CHEST. " +
				 "There is nothing left of interest for you here, so you decide to " +
				 "<a href='#' onclick='cave.examineCave()'>go back.</a>" +
				/* "<a href='#' onclick='examineCave()'>room</a>" +
				 " you awoke in." +*/
				 "</p>";
		document.getElementById("item2").innerHTML = sword.menuCreate();


		// Make the browser display the HTML
		roomPara = document.getElementById('RoomDesc');
		roomPara.innerHTML = roomPara.innerHTML + detail;
	},

	// PUT ON
	equip: function () {
		console.log('sword.equip');

		// Change the locaton of the sword
		this.location = 'body';

		// Hide the sword popup menu
		popup = document.getElementById('swordMenuId');
		popup.style.visibility = 'hidden';

		// Put appropriate options in the sword popup menu
		popup = document.getElementById('swordLinkId');
		popup.innerHTML = sword.menuCreate();

		// Store the HTML to describe the action of putting on the sword
		detail = "<p>You equip the battered sword, in hopes that it will protect you in this unknown cave.</p>"

		// Make the browser display the HTML
		roomPara = document.getElementById('RoomDesc');
		roomPara.innerHTML = roomPara.innerHTML + detail;
	},

	// DISROBE
	unequip: function () {
		console.log('sword.unequip');

		// Change the location of the sword
		this.location = 'inventory';

		// Hide the sword popup menu
		popup = document.getElementById('swordMenuId');
		popup.style.visibility = 'hidden';

		// Put appropriate options in the sword popup menu
		popup = document.getElementById('swordLinkId');
		popup.innerHTML = sword.menuCreate();

		// Store the HTML that describes the action of taking off the sword
		detail =
			"<p>You unequip the sword.</p>"

		// Make the browser display the HTML
		roomPara = document.getElementById('RoomDesc');
		roomPara.innerHTML = roomPara.innerHTML + detail;
	}
};
