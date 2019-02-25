/**************************ANDREW PACKARD*****************************/

//	"<a href='#' onclick=sword.guard()'>guard.</a>"+
var weapon = {
	location: "chest",
	menuCreate: function () {
		console.log('weapon.menuCreate');
		console.log('   location = ' + this.location);
		menu = 
			"<span id='weaponLinkId' class='popup'>" +
				"<a href='#' onclick='weapon.menuDisplay()'>" +
					"Sword" +
				"</a>" +
				"<span id='weaponMenuId' class='popuptext'>" +
					"<u onclick='weapon.examine()'>" +
						"Examine" +
					"</u>";
		
		if (weapon.location == 'chest') {
			menu = menu +
					"<br>" +
					"<u onclick='weapon.get()'>" +
						"Get" +
					"</u>" +
				"</span>" +
			"</span>";
		}
/*		else if (this.location == 'inventory') {
			menu = menu +
					"<br>" +
					"<a onclick='weapon.equip()'>" +
						"Equip" +
					"</u>" +
				"</span>" +
			"</span>";		
		}
*/		
		return(menu);
	},
	
	menuDisplay: function () {
		console.log('weapon.menuDisplay');
		popup = document.getElementById('weaponMenuId');
		popup.style.visibility = 'visible';
	},
	
	examine: function () {
		console.log('weapon.examine');
		
		detail = 
			"<p>A large sword, make of a shining silver metal."+
				"The edge is very sharp, so sharp that just looking at it makes your eyes hurt."+
			"</p>";
	
	
		popup = document.getElementById('weaponMenuId');
		popup.style.visibility = 'hidden';
		
		roomPara = document.getElementById('RoomDesc');
		roomPara.innerHTML = roomPara.innerHTML + detail;
		
	},
	
	get: function () {
		console.log('weapon.get');
		this.location = 'inventory';
		
		popup = document.getElementById('weaponMenuId');
		popup.style.visibility = 'hidden';
		
		popup = document.getElementById('weaponLinkId');
		popup.innerHTML = weapon.menuCreate();
		
		detail = "<p>You take the sword from the chest with you.</p>"
		
		//document.getElementById("inventoryList").innerHTML = "Sword";
		
		roomPara = document.getElementById('RoomDesc');
		roomPara.innerHTML = roomPara.innerHTML + detail;
		
		document.getElementById("inventoryList").innerHTML = weapon.menuCreate();
		
	},
	
/*	equip: function () {
		console.log('weapon.equip');
		weapon.location = 'equipped'
		description = 
			"<p>"+
				"You equip the sword."+
			"</p>";
	},
*/	
	
		
};

/*var blade = {
	location: 'chest',
	
	menuCreate: function () {
		console.log('blade.menuCreate');
		console.log('   location = ' + this.location);
		menu = 
			"<span id='bladeLinkId' class='popup'>" +
				"<a href='#' onclick='blade.menuDisplay()'>" +
					"blade" +
				"</a>" +
				"<span id='bladeMenuId' class='popuptext'>" +
					"<u onclick='blade.examine()'>" +
						"Examine" +
					"</u>";
	}
		
	get: function () {
		if (this.location == 'chest') {
		
			description =
				"<p>"+
					"You pick up the sword blade, being careful not to cut yourself."+
					"You look at the blade, seeing it is sharp, and carefully put it in your bag."+
				"</p>"
				
		
		this.location = 'inventory';
		roomPara = document.getElementById("RoomDesc");
		roomPara.innerHTML = roomPara.innerHTML + description;
		
		document.getElementById('InventoryList').innerHTML = blade.get();
		}
	
		else if (this.location == 'inventory') {
			description =
				"<p>"+
					"It is a large blade, made of a shiny silver colored metal."+
					"The blade is very sharp, and it would be easy to accidentally cut yourself with it."+
				"</p>"
			
			roomPara = document.getElementById("RoomDesc");
			roomPara.innerHTML = roomPara.innerHTML + description;
		}
	}
};

var hilt = {
	//location: '';
};

var guard = {
	//location: '';

};

*/

function weaponRoom() {
	console.log('weaponRoom');
	description =
		"<p>You enter the opening and see a large room. This room has a wooden floor covered in splotches of mold."+
			"The walls have what appear to be weapon racks all over. All of the racks are empty, except "+
			"<a href='#' onclick='badSword()'>one</a>. "+
			"You can also see a large "+
			"<a href='#' onclick='openChest()'>chest</a> "+
			"in one of the corners of the room."+
			"There is an opening back to the "+
			"<a href='#' onclick='examineCave()'>area</a>"+
			" you woke up in."+
		"</p>"
	roomPara = document.getElementById("RoomDesc");
	roomPara.innerHTML = roomPara.innerHTML + description;
}

function caveFall() {
	fall = Math.floor(Math.random()*75);
	if (fall == 42 || fall == 43 ) {
		console.log('caveFall');
		description = 
		"<p> As you enter the opening, by insane chance (probably around 2.674%), the cave crashes down ontop of you."+
			"You hear the loud crunch of your bones shattering as rocks fall onto your arms, legs and chest."+
			" The last thing you see is a large rock falling onto your head."+
		"</p>";
	}
	else {
		weaponRoom();
	}
		
	roomPara = document.getElementById("RoomDesc");
	roomPara.innerHTML = description;
	
		
}

function openChest() {
	console.log("openChest");
	if (weaponKey.location == 'inventory') {
		console.log(weapon.location)
		if (weapon.location == 'chest') {
			description =
			"<p>"+
				"You see the chest has a keyhole. It appears the key you found will fit into the hole. "+
				"You put the key into the keyhole, turn it and you hear a click. "+
				"Inside of the chest, you find a large "+
//				"<a href='#' onclick='blade.get()'>sword blade</a>."+
//				" Seems like if you want a sword you're going to have to make one."+
				weapon.menuCreate() + "." +
			"</p>";
			
			roomPara = document.getElementById("RoomDesc");
			roomPara.innerHTML = roomPara.innerHTML + description;
		}
		else if (weapon.location == 'inventory') {
			console.log('chestEmpty');
			description =
				"<p>It is a large, empty chest.</p>";
			roomPara = document.getElementById("RoomDesc");
			roomPara.innerHTML = roomPara.innerHTML + description;
	}

	}
	else if (weaponKey.location == 'witch') {
		"<p>"+
			"You see a large chest, made of wood with metal bands going around it."+
			"There is a small, golden lock on it."+
		"</p>";
		
		roomPara = document.getElementById("RoomDesc");
		roomPara.innerHTML = roomPara.innerHTML + description;

	}
	
	else {
		"<p>"+
			"You see a large chest, made of wood with metal bands going around it."+
			"There is a small, golden lock on it."+
		"</p>";
		
		roomPara = document.getElementById("RoomDesc");
		roomPara.innerHTML = roomPara.innerHTML + description;
	}
}

function badSword() {
	console.log('badSword');
	description = 
	"<p>"+
		"You pick up a sword off of the rack, but as you pick it up it falls apart in your hands."+
//		"However the "+
//		"<a href='#' onclick=sword.handle()'>handle</a> "+
//		"did not fall apart."+
	"</p>";
	roomPara = document.getElementById("RoomDesc");
	roomPara.innerHTML = roomPara.innerHTML + description;
}

var weaponKey = {
	location: 'inventory',
	
}



