/**************************ANDREW PACKARD*****************************/


/*****************DEEP CAVE****************/
/*This function creates the starting room.*/
/******************************************/
function deepCave() {
	console.log('deepCave');
	var description = "";
	
	if (deepCave.init == undefined) {
		deepCave.init = 1
		description = 
		"<p>You wake up in a damp cave, wondering how you got there."+
			"You don't remember much, but you do remember being attacked by some ogre. "+
			"You stand up and "+
			"<a href='#' onclick='examineCave()'>observe</a>"+
			" your surroundings."+
		"</p>";
	}
	else {
		examineCave();
	}
	
	roomPara = document.getElementById("RoomDesc");
	roomPara.innerHTML = description;
}
/**********************EXAMINE CAVE******************/
/*This function tells the surroundings in deep cave.*/
/****************************************************/
function examineCave() {
	console.log('examineCave');
	description = 
		"<p> You are standing in a small cave, with 3 different openings."+
			"There is one to the "+
			"<a href='#' onclick='armorRoom()'>east</a>, "+
			"that has moss and other plants covering the entrance. "+
			"It is difficult to see into due to the plants covering it."+
			"There is another opening to the "+
			"<a href='#' onclick='tunnelRoom()'>north</a>, "+
			" and it is quite small. However, you can see light coming from it."+
			"To the "+
			"<a href='#' onclick='weaponRoom()'>west</a>."+
			" you see another opening, which has wooden supports holding it up."+
			"Some of the wooden supports have fallen over, others are covered in moss and mold"+
		"</p>"
		
	roomPara = document.getElementById("RoomDesc");
	roomPara.innerHTML = description;
}

