/* object */
var object = {
	// Create a variable to track the location of the object.
	// Valid values are: hook, inventory, body
	location:'',

	// object MENU CREATE
	menuCreate: function(obj) {

		if (obj == 'armor') {

			var objTemp = {
				location:'skeleton'
			}
		} else if (obj == 'sword') {
			location:'chest'
		} else {
			location:'witch'
			console.log(obj);
		}

		console.log('object.menuCreate');
		console.log('   location = ' + this.location);
		// Store the HTML for the object's popup menu in a variable
		// EXAMINE option is always in the popup menu
		menu =
			"<span id='objectLinkId' class='popup'>" +
				"<a href='#' onclick='object.menuDisplay()'>" +
					"object" +
				"</a>" +
				"<span id='objectMenuId' class='popuptext'>" +
					"<u onclick='object.examine()'>" +
						"Examine" +
					"</u>";
		// GET option is in the popup menu if the object is on the
		if (objTemp.location == 'skeleton') {
			console.log('worked');

			menu = menu +
					"<br>" +
					"<u onclick='object.get()'>" +
						"Get" +
					"</u>" +
				"</span>" +
			"</span>";
		}
		// DROP and PUT ON are options if the object is in the inventory
		else if (this.location == 'inventory') {
			menu = menu +
					"<br>" +
					"<u onclick='object.putOn()'>" +
						"Put On" +
					"</u>" +
				"</span>" +
			"</span>";
		}
		// DISROBE is an option if the object is on the body
		else if (this.location == 'body'){
			menu = menu +
					"<br>" +
					"<u onclick='object.takeOff()'>" +
						"Take off" +
					"</u>" +
				"</span>" +
			"</span>";
		}
		// Detect errors in the object location
		else {
			console.log('ERROR! Invalid location');
		}

		// Give the HTML for the popup menu to the caller
		return(menu)
	},

	// object MENU DISPLAY
	menuDisplay: function () {
		console.log('object.menuDisplay');
		// Make the browser display the popup menu
		popup = document.getElementById('objectMenuId');
		popup.style.visibility = 'visible';
	},

	// EXAMINE
	examine: function () {
		console.log('object.examine');
		// Store HTML to describe the object in a variable
		detail =
			"<p>The object appears to be a once" +
			"beautiful piece, covered now in scorch " +
			"marks and deep gouges from years of" +
			"service. It isn't much, but is" +
			"definently better than nothing." +
			"</p>";

		// Hide the object menu popup menu
		popup = document.getElementById('objectMenuId');
		popup.style.visibility = 'hidden';

		// Make the browser display the HTML
		roomPara = document.getElementById('RoomDesc');
		roomPara.innerHTML = roomPara.innerHTML + detail;
	},

	// GET
	get: function() {
		console.log('object.get');
		// Change the object location
		objTemp.location = 'inventory';
		console.log('double worked');

		// Hide the object popup menu
		popup = document.getElementById('objectMenuId');
		popup.style.visibility = 'hidden';

		// Recreate the object popup menu to hold appropriate options
		popup = document.getElementById('objectLinkId');
		popup.innerHTML = object.menuCreate();

		// Store the HTML to describe the action of getting the object
		detail = "<p>You take the object from the disgruntled skeletal man. " +
				 "There is nothing left of interest for you here, so you decide to " +
				 "<a href='#' onclick='cave.examineCave()'>go back.</a>" +
				/* "<a href='#' onclick='examineCave()'>room</a>" +
				 " you awoke in." +*/
				 "</p>";
		document.getElementById("item1").innerHTML = object.menuCreate();


		// Make the browser display the HTML
		roomPara = document.getElementById('RoomDesc');
		roomPara.innerHTML = roomPara.innerHTML + detail;
	},

	// PUT ON
	putOn: function () {
		console.log('object.putOn');

		// Change the locaton of the object
		this.location = 'body';

		// Hide the object popup menu
		popup = document.getElementById('objectMenuId');
		popup.style.visibility = 'hidden';

		// Put appropriate options in the object popup menu
		popup = document.getElementById('objectLinkId');
		popup.innerHTML = object.menuCreate();

		// Store the HTML to describe the action of putting on the object
		detail = "<p>You put on the battered object, in hopes that it will protect you in this unknown cave.</p>"

		// Make the browser display the HTML
		roomPara = document.getElementById('RoomDesc');
		roomPara.innerHTML = roomPara.innerHTML + detail;
	},

	// DISROBE
	takeOff: function () {
		console.log('object.takeOff');

		// Change the location of the object
		this.location = 'inventory';

		// Hide the object popup menu
		popup = document.getElementById('objectMenuId');
		popup.style.visibility = 'hidden';

		// Put appropriate options in the object popup menu
		popup = document.getElementById('objectLinkId');
		popup.innerHTML = object.menuCreate();

		// Store the HTML that describes the action of taking off the object
		detail =
			"<p>You pull off the object.</p>"

		// Make the browser display the HTML
		roomPara = document.getElementById('RoomDesc');
		roomPara.innerHTML = roomPara.innerHTML + detail;
	}
};
