var tunnelRoom = {

	start: function() {

		var description = "";
		description =
			"<p>" +
			"You enter the northern cave from the " +
			"<a href='#' onclick='cave.examineCave()'>room </a>" +
			"you awoke in, which leads you to a long tunnel with a strange " +
			"<a href='#' onclick='tunnelRoom.examineDoor()'>door</a>" +
			" partly opened at the end. " +
			"To the right is a small <a href='#' onclick='tunnelRoom.examineAlcove()'>alcove</a>. with what appears to be blood all over the " +
			"walls." +
			"</p>";

		roomPara = document.getElementById("RoomDesc");
		roomPara.innerHTML =  description;
	},

	examineDoor: function() {

		description =
			"<p>" +
			"You slowly make your way to the end of the tunnel. There is a sign on the door " +
			"that reads, <b>Enter if you dare!</b> " +
			"You can hear a loud deep grumbling from inside. " +
			"<a href='#' onclick='ogreRoom()'>Enter?</a>" +
			"</p>";

		roomPara = document.getElementById('RoomDesc');
		roomPara.innerHTML = roomPara.innerHTML + description;
	},

	examineAlcove: function() {

		description =
			"<p>" +
			"Upon further inspection the splatter of blood across the walls look more and more like " +
			"letters. You decide to move closer, and finally you can see clear sentences " +
			"written in dark blood." +
			"You decide to " +
			"<a href='#' onclick='tunnelRoom.readMessage()'>read </a>" +
			"the sentences." +
			"</p>";

		roomPara = document.getElementById("RoomDesc");
		roomPara.innerHTML = roomPara.innerHTML + description;
	},

	readMessage: function() {

		description =
			"<p>" +
			"You read the message. You can barely make out three words among the multiple sentences. " +
			"All you can gather from the gory letters is <i>Witch | Serpent | Ogre</i>. " +
			"There is little of interest left in the small alcove." +
			"</p>";

		roomPara = document.getElementById("RoomDesc");
		roomPara.innerHTML = roomPara.innerHTML + description;
	}
}
