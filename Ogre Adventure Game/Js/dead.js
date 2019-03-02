function dead() {
	console.log("dead() called");
	var description = "";
	description =
		"<p>" +
		"You died!" +
		"</p>";

	roomPara = document.getElementById("RoomDesc");
	roomPara.innerHTML = description;
}
