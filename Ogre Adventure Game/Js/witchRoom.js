/* Justin Fernandez: Accessed from Armor Room. Contains a witch. Player uses environment to kill her and get a potion. If no armor, die else run.*/
// MAIN FUNCTION

var witchRoom = {
	start: function() {

		if (armor.location == 'inventory')
		{
			description = "<p>You enter a new room and see a witch stirring a substance in her cauldron." +
				"The light is low, but you notice a heavy <a href='#' onclick='rockObject.Get()'>rock</a> on the floor." +
				"You could also try <a href='#' onclick='sneak()'>sneaking</a> behind her.</p>"
		}
		else
		{
			player.isAlive == false;
			description = "<p>You came unprepared and have died. Press 'F5' to refresh and start over.</p>"
		}

		roomPara = document.getElementById("RoomDesc");
		roomPara.innerHTML = description;

	}
}


// VAR & OBJECT STACK
var potion =
{
	location: "witch",
	Get: function() {
		
	console.log("potionGet() called.");
		description = "<p>You picked up a potion.</p>"
		if (weaponKey.location == "ground")
		{
			description = "<p>You picked up a potion. You notice a <a href='#' onclick='weaponKey.Get()'>key</a> near the cauldron.</p>";
		}
		potion.location = "inventory"
		console.log("Potion location: " + potion.location);

		roomPara = document.getElementById("item1");
		item = "Potion";
		roomPara.innerHTML = item;

		roomPara = document.getElementById("RoomDesc");
		roomPara.innerHTML = roomPara.innerHTML + description;
	}
}

var rockObject =
{
	// Default Rock Location
	location: "ground",
	// Get the rock from ground location
	Get: function()
	{
	console.log("rockObject.Get() called.");
		if (rockObject.location == "inventory")
		{
			// If rock is in inventory say it.
			description = "<p>The rock is in your inventory.</p>";
		}
		else
		{
			description = "<p>You have picked up the rock.</p>"
			rockObject.location = "inventory"
			console.log("Rock location: " + rockObject.location);

			// Put Rock in Inventory
			rockObject.InventoryCreate();

		}
		roomPara = document.getElementById("RoomDesc");
		roomPara.innerHTML = roomPara.innerHTML + description;
	},
	// Creates Inventory for Rock Object
	InventoryCreate: function()
	{
		roomPara = document.getElementById("item2");
		item = "<span id='rockLinkId' class='popup'><a href='#' onclick='rockObject.menuDisplay()'>Rock</a><span id='rockMenuId' class='popuptext'><u onclick='rockObject.witchThrow()'>Throw</u>";
		roomPara.innerHTML = item;
	},
	menuDisplay: function()
	{
		console.log('rockObject.menuDisplay called');
		popup = document.getElementById('rockMenuId');
		popup.style.visibility = 'visible';
	},
	witchThrow: function()
	{
		console.log('rockObject.witchThrow called');
		if (witch.isAlive == false)
		{
			description = "<p>You threw the rock away.</p>"
			rockObject.location = "ground"
			console.log("Rock location:" + rockObject.location);
			roomPara = document.getElementById("RoomDesc");
			roomPara.innerHTML = description;
			roomPara = document.getElementById("item2");
			roomPara.innerHTML = "<p> </p>";
		}
		else
		{
			description = "<p>You threw the rock at the witch's head and killed her.</p>";
			witch.isAlive = false;
			console.log("Witch alive: " + witch.isAlive);
			rockObject.location = "ground"
			console.log("Rock location:" + rockObject.location);
			roomPara = document.getElementById("RoomDesc");
			roomPara.innerHTML = description;
			roomPara = document.getElementById("item2");
			roomPara.innerHTML = "<p> </p>";
			roomPara = document.getElementById("RoomDesc");
			description = "<p>The witch is dead. The light is low, but you notice a heavy <a href='#' onclick='rockObject.Get()'>rock</a> on the floor.You can now <a href='#' onclick='sneak()'>loot</a> the room.</p>";
			roomPara.innerHTML = roomPara.innerHTML + description;
		}
	},
};

var witch =
{
	// WITCH STATUS CONDITION TO SEE WHAT THE ROOM CAN DO
	isAlive: true
}

var weaponKey =
{
	// Default Weapon Room Key Location
	location: "ground",
	// Get the key once witch is dead
	Get: function()
	{
	console.log("weaponKey.Get() called.");
		description = "<p>You picked up the key.</p>";
		if (potion.location == "witch")
		{
			description = "<p>You picked up the key. You notice <a href='#' onclick='potion.Get()'>potions</a> near the cauldron.</p>";
		}
		weaponKey.location = "inventory";
		console.log("Weapon Key Location: " + weaponKey.location);

		// Put Weapon Chest Key in inventory list
		weaponKey.InventoryCreate();

		roomPara = document.getElementById("RoomDesc");
		roomPara.innerHTML = roomPara.innerHTML + description;
	},
	// Creates inventory for Weapon Chest Key Object
	InventoryCreate: function()
	{
		roomPara = document.getElementById("item3");
		item = "Weapon Chest Key";
		roomPara.innerHTML = item;
	}
}


// TEMP OBJECTS USED ONLY FOR TESTING OTHERS ARE RESPONSIBLE FOR THIS STUFF
/*var armor =
{
	location: "inventory"
}
var player =
{
	isAlive: true
}*/

// GENERAL FUNCTION STACK WIP OF REFACTORING SPECIFIC FUNCTIONS INTO OBJECTS
function sneak()
{
console.log("sneak() called.");
	if (witch.isAlive == true)
	{
		description = "<p>You are now behind the witch." +
			"You can try to <a href='#' onclick='push()'>push</a> her into the cauldron.</p>"
	}
	else if ((witch.isAlive == false) && (potion.location == "witch") && (weaponKey.location == "ground"))
	{
		description = "<p>You notice <a href='#' onclick='potion.Get()'>potions</a> and a <a href='#' onclick='weaponKey.Get()'>key</a> near the cauldron.</p>"
	}
	else if  ((witch.isAlive == false) && (potion.location == "witch"))
	{
		description = "<p>You notice <a href='#' onclick='potion.Get()'>potions</a> near the cauldron.</p>"
	}
	else if ((witch.isAlive == false) && (weaponKey.location == "ground"))
	{
		description = "<p>You notice a <a href='#' onclick='weaponKey.Get()'>key</a> near the cauldron.</p>"
	}
	else if ((witch.isAlive == false) && (potion.location == "inventory"))
	{
		description = "<p>The witch is dead. You took everything you could.</p>"
	}

	roomPara = document.getElementById("RoomDesc");
	roomPara.innerHTML = roomPara.innerHTML + description;
}

function push()
{
console.log("push() called.");
	description = "<p>You successfully pushed the witch into the cauldron." +
		"You notice <a href='#' onclick='potion.Get()'>potions</a> and a <a href='#' onclick='weaponKey.Get()'>key</a> near the cauldron.</p>";
	witch.isAlive = false;
	console.log("Witch Alive Condition: " + witch.isAlive);

	roomPara = document.getElementById("RoomDesc");
	roomPara.innerHTML = description;

	roomPara = document.getElementById("desc");
	description = "<p>The witch is dead. The light is low, but you notice a heavy <a href='#' onclick='rockObject.Get()'>rock</a> on the floor.You can now <a href='#' onclick='sneak()'>loot</a> the room.</p>";
	roomPara.innerHTML = roomPara.innerHTML + description;
}
