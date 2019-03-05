/* armor */
var armor = {
	// Create a variable to track the location of the armor.
	// Valid values are: hook, inventory, body
	location:'skeleton',

	// armor MENU CREATE
	menuCreate: function () {
		console.log('armor.menuCreate');
		console.log('   location = ' + this.location);
		// Store the HTML for the armor's popup menu in a variable
		// EXAMINE option is always in the popup menu
		menu =
			"<span id='armorLinkId' class='popup'>" +
				"<a href='#' onclick='armor.menuDisplay()'>" +
					"Armor" +
				"</a>" +
				"<span id='armorMenuId' class='popuptext'>" +
					"<u onclick='object.examine()'>" +
						"Examine" +
					"</u>";
		// GET option is in the popup menu if the armor is on the
		if (armor.location == 'skeleton') {
			menu = menu +
					"<br>" +
					"<u onclick='armor.get()'>" +
						"Get" +
					"</u>" +
				"</span>" +
			"</span>";
		}
		// DROP and PUT ON are options if the armor is in the inventory
		else if (this.location == 'inventory') {
			menu = menu +
					"<br>" +
					"<u onclick='armor.putOn()'>" +
						"Put On" +
					"</u>" +
				"</span>" +
			"</span>";
		}
		// DISROBE is an option if the armor is on the body
		else if (this.location == 'body'){
			menu = menu +
					"<br>" +
					"<u onclick='armor.takeOff()'>" +
						"Take off" +
					"</u>" +
				"</span>" +
			"</span>";
		}
		// Detect errors in the armor location
		else {
			console.log('ERROR! Invalid location');
		}

		// Give the HTML for the popup menu to the caller
		return(menu)
	},

	// armor MENU DISPLAY
	menuDisplay: function () {
		console.log('armor.menuDisplay');
		// Make the browser display the popup menu
		popup = document.getElementById('armorMenuId');
		popup.style.visibility = 'visible';
	},

	// EXAMINE
	examine: function () {
		console.log('armor.examine');
		// Store HTML to describe the armor in a variable
		detail =
			"<p>The armor appears to be a once" +
			"beautiful piece, covered now in scorch " +
			"marks and deep gouges from years of" +
			"service. It isn't much, but is" +
			"definently better than nothing." +
			"</p>";

		// Hide the armor menu popup menu
		popup = document.getElementById('armorMenuId');
		popup.style.visibility = 'hidden';

		// Make the browser display the HTML
		roomPara = document.getElementById('RoomDesc');
		roomPara.innerHTML = roomPara.innerHTML + detail;
	},

	// GET
	get: function () {
		console.log('armor.get');
		// Change the armor location
		armor.location = 'inventory';

		// Hide the armor popup menu
		popup = document.getElementById('armorMenuId');
		popup.style.visibility = 'hidden';

		// Recreate the armor popup menu to hold appropriate options
		popup = document.getElementById('armorLinkId');
		popup.innerHTML = armor.menuCreate();

		// Store the HTML to describe the action of getting the armor
		detail = "<p>You take the armor from the disgruntled skeletal man. " +
				 "There is nothing left of interest for you here, so you decide to " +
				 "<a href='#' onclick='cave.examineCave()'>go back.</a>" +
				/* "<a href='#' onclick='examineCave()'>room</a>" +
				 " you awoke in." +*/
				 "</p>";
		document.getElementById("item1").innerHTML = armor.menuCreate();


		// Make the browser display the HTML
		roomPara = document.getElementById('RoomDesc');
		roomPara.innerHTML = roomPara.innerHTML + detail;
	},

	// PUT ON
	putOn: function () {
		console.log('armor.putOn');

		// Change the locaton of the armor
		this.location = 'body';

		// Hide the armor popup menu
		popup = document.getElementById('armorMenuId');
		popup.style.visibility = 'hidden';

		// Put appropriate options in the armor popup menu
		popup = document.getElementById('armorLinkId');
		popup.innerHTML = armor.menuCreate();

		// Store the HTML to describe the action of putting on the armor
		detail = "<p>You put on the battered armor, in hopes that it will protect you in this unknown cave.</p>"

		// Make the browser display the HTML
		roomPara = document.getElementById('RoomDesc');
		roomPara.innerHTML = roomPara.innerHTML + detail;
	},

	// DISROBE
	takeOff: function () {
		console.log('armor.takeOff');

		// Change the location of the armor
		this.location = 'inventory';

		// Hide the armor popup menu
		popup = document.getElementById('armorMenuId');
		popup.style.visibility = 'hidden';

		// Put appropriate options in the armor popup menu
		popup = document.getElementById('armorLinkId');
		popup.innerHTML = armor.menuCreate();

		// Store the HTML that describes the action of taking off the armor
		detail =
			"<p>You pull off the armor.</p>"

		// Make the browser display the HTML
		roomPara = document.getElementById('RoomDesc');
		roomPara.innerHTML = roomPara.innerHTML + detail;
	}
};
