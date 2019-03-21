/* object */

var object = {



	// Create a variable to track the location of the object.
	// Valid values are: hook, inventory, body

	// object MENU CREATE
	menuCreate: function(obj) {

		var location = "";

		var name = "";

		


		if (obj == 'armor') {
			this.name = "armor",
			this.location = "skeleton"
				//var	tempObject = eval(obj);
		} else {

		}
	  console.log('Step 1 if. Location (should be skeleton) now set to = ' + this.location);

		// Store the HTML for the object's popup menu in a variable
		// EXAMINE option is always in the popup menu
		var a = this.name+"LinkId";
		var b = this.name+"MenuId";
		console.log(a);
		console.log(b);

		menu =
			"<span id=\""+a+"\" class='popup'>" +
				"<a href='#' onclick='object.menuDisplay(\""+this.name+"\")'>" +
					"Armor" +
				"</a>" +
				"<span id=\""+b+"\" class='popuptext'>" +
					"<u onclick='object.examine(\""+this.name+"\")'>" +
						"Examine" +
					"</u>";
		console.log(menu);
		// GET option is in the popup menu if the object is on the
		if (this.location == 'skeleton') {
			console.log('worked');
			console.log();
			menu = menu +
					"<br>" +
					"<u onclick='object.get()>" +
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
	menuDisplay: function() {
		var men = this.name+"MenuId";
		console.log('tempt.menuDisplay');
		// Make the browser display the popup menu
		popup = document.getElementById(men);
		console.log(popup);
		console.log(men);
		popup.style.visibility = 'visible';
	},

	// EXAMINE
	examine: function () {
		if (this.name == "armor") {
			detail =
				"<p>The object appears to be a once" +
				"beautiful piece, covered now in scorch " +
				"marks and deep gouges from years of" +
				"service. It isn't much, but is" +
				"definently better than nothing." +
				"</p>";
		} else if (this.name == 'sword') {

		} else if (this.name == 'potion') {

		} else {

		}
		console.log('object.examine');
		// Store HTML to describe the object in a variable


		// Hide the object menu popup menu
		popup = document.getElementById(this.name+"MenuId");
		popup.style.visibility = 'hidden';

		// Make the browser display the HTML
		roomPara = document.getElementById('RoomDesc');
		roomPara.innerHTML = roomPara.innerHTML + detail;
	},

	// GET
	get: function() {

		console.log('object.get');
		// Change the object location
		this.location = 'inventory';
		console.log(this.location);

		// Hide the object popup menu
		popup = document.getElementById(this.name+"menuID");
		popup.style.visibility = 'hidden';

		// Recreate the object popup menu to hold appropriate options
		popup = document.getElementById(this.name+"LinkID");
		popup.innerHTML = this.menuCreate();

		// Store the HTML to describe the action of getting the object
		detail = "<p>You take the object from the disgruntled skeletal man. " +
				 "There is nothing left of interest for you here, so you decide to " +
				 "<a href='#' onclick='cave.examineCave()'>go back.</a>" +
				/* "<a href='#' onclick='examineCave()'>room</a>" +
				 " you awoke in." +*/
				 "</p>";
		document.getElementById("item1").innerHTML = this.name.menuCreate();


		// Make the browser display the HTML
		roomPara = document.getElementById('RoomDesc');
		roomPara.innerHTML = roomPara.innerHTML + detail;
	},

	// PUT ON
	putOn: function () {
		console.log('object.putOn');

		// Change the locaton of the object
		armor.location = 'body';

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
}
