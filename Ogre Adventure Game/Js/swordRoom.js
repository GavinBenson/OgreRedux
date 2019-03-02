var swordComplete = 0;

var weaponKey = {
	location: 'witch'

}

var swordRoom = {
	start: function() {
		if (swordComplete == 0) {

			var description = "";
			description =
				"<p>You enter the opening and see a large room. This room has a wooden floor covered in splotches of mold."+
					"The walls have what appear to be weapon racks all over. All of the racks are empty, except "+
					"<a href='#' onclick='swordRoom.badSword()'>one</a>. "+
					"You can also see a large "+
					"<a href='#' onclick='swordRoom.openChest()'>chest</a> "+
					"in one of the corners of the room."+
					"There is an opening back to the "+
					"<a href='#' onclick='cave.examineCave()'>area</a>"+
					" you woke up in."+
				"</p>"

			roomPara = document.getElementById("RoomDesc");
			roomPara.innerHTML = description;
		} else {

			var description = "";
			description =
				"<p>" +
				"There's nothing left for you this way. " +
				"<a href='#' onclick='cave.examineCave()'>Go back</a>"
				"</p>";

			roomPara = document.getElementById("RoomDesc");
			roomPara.innerHTML = description;
		}

	},

	openChest: function() {

		if (weaponKey.location == 'inventory') {

			if (sword.location == 'chest') {
				description =
				"<p>"+
					"You see the chest has a keyhole. It appears the key you found will fit into the hole. "+
					"You put the key into the keyhole, turn it and you hear a click. "+
					"Inside of the chest, you find a large "+
					sword.menuCreate() + "." +
				  "</p>";

				roomPara = document.getElementById("RoomDesc");
				roomPara.innerHTML = roomPara.innerHTML + description;
			}
			else if (sword.location == 'inventory') {
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
	},

	badSword: function() {

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
}
