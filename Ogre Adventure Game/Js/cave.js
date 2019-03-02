var cave = {

	start: function() {

		var description = "";
			description =
			"<p>You wake up on the floor of a damp cave. "+
				"You don't remember much, but you do remember being attacked by some ogre. "+
				"All you have left on is some ragged clothes and a large bag. "+
				"You stand up and "+
				"<a href='#' onclick='cave.examineCave()'>observe</a>"+
				" your surroundings. "+
			"</p>";

		roomPara = document.getElementById("RoomDesc");
		roomPara.innerHTML = description;
	},

	examineCave: function() {
		document.getElementById('ascii').style.visibility = 'visible';
		var a = 'armor';

		description =
			"<p> You are standing in a small cave, with 3 different openings. "+
			"There is one to the "+
			"<a href='#' onclick='armorRoom.start()'>east</a>, "+
			"that has moss and other plants covering the entrance. "+
			"It is difficult to see into due to the plants covering it. "+
			"There is another opening to the "+
			"<a href='#' onclick='tunnelRoom.start()'>north</a>, "+
			" and it is quite small. However, you can see light coming from it. "+
			"To the "+
			"<a href='#' onclick='swordRoom.start()'>west</a> "+
			" you see another opening, which has wooden supports holding it up. "+
			"Some of the wooden supports have fallen over, others are covered in moss and mold. "+
			"Behind you, you see another "+
      "<a href='#' onclick='witchRoom()'>opening</a>, "+
      " covered in moss. There are cracked and broken stone pillars around the entrance. "+
      "You can hear a faint cackling and screaming coming from the room. "+
			"<a href='#' onclick='object.menuCreate(\""+a+"\")'>opening</a>, "+
			"</p>"
		roomPara = document.getElementById("RoomDesc");
		roomPara.innerHTML =  description;
	}
}
