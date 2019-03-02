//VAR STACK
var failCount = 0;
var armorComplete = 0;
var button1 = 'Serpent';
var button2 = 'Witch';
var button3 = 'Ogre';
var submitButton = 'Submit';
//VAR STACK

var armorRoom = {
	start: function() {
		if (armorComplete == 0) {

			var description = "";
			description =
				"<p>" +
				"You leave the first " +
				"<a href='#' onclick='cave.examineCave()'>room</a> " +
				"and enter an enormous cave. It is completely open except for a large stone pillar " +
				"protruding through the rock floor, with a " +
				"<a href='#' onclick='puzzleRoom.climbStaircase()'>staircase</a>" +
				" bored into one side spiraling up the pillar. " +
				"There appears to be no exits in any direction on the floor of the cavern. " +
				"</p>";

				var armorRoomAscii = "";
				armorRoomAscii =
"	<pre>														 " +
"															 " +
"															 " +
"											         " +
" __________        __________ " +
"|          \      /          |" +
"|           |    |           |" +
"|       ____|    |___        |" +
"|      /             \       |" +
"|______|              |______|" +
"															 " +
" ______                ______ " +
"|      |              |      |" +
"|       \__        __/       |" +
"|          \_    _/          |" +
"|            |  |            |" +
"|____________|  |____________|" +
				"</pre>";


			roomPara = document.getElementById("RoomDesc");
			roomPara.innerHTML = description;

			roomPara = document.getElementById("ascii");
			roomPara.innerHTML = armorRoomAscii;
/*
			var description = "";
			description =
				"<p>" +
				"There's nothing left for you this way. " +
				"<a href='#' onclick='cave.examineCave()'>Go back</a>"
				"</p>";

			roomPara = document.getElementById("RoomDesc");
			roomPara.innerHTML = description;*/
		}


	}
};

var puzzleRoom = {

		cycle1: function(value) {
			if (value == 'Serpent') {
				button1 = 'Witch';
			} else if (value == 'Witch') {
				button1 = 'Ogre';
			} else {
				button1 = 'Serpent';
			}
			puzzleRoom.puzzle();
		},

		cycle2: function(value) {
			if (value == 'Serpent') {
				button2 = 'Witch';
			} else if (value == 'Witch') {
				button2 = 'Ogre';
			} else {
				button2 = 'Serpent';
			}
			puzzleRoom.puzzle();
		},

		cycle3: function(value) {
			if (value == 'Serpent') {
				button3 = 'Witch';
			} else if (value == 'Witch') {
				button3 = 'Ogre';
			} else {
				button3 = 'Serpent';
			}
			puzzleRoom.puzzle();
		},

		climbStaircase: function() {
			var description =
			"<p>" +
			"With no where else to go, you decide to climb the spiral staircase. " +
			"Towards the end of the draining climb you see what appears to be a " +
			"<a href='#' onclick='puzzleRoom.puzzle()'>puzzle.</a>" +
			"</p>";

			roomPara = document.getElementById("RoomDesc");
			roomPara.innerHTML = roomPara.innerHTML + description;
		},

		puzzle: function() {
			var description =
			"<p>" +
			"The first button has a " + button1 +
			"<br>" +
			" The second button has a " + button2 +
			"<br>" +
			" The third button has a " + button3 +
			"<br>" +
			"<br>" +
			"<a href='#' onclick='puzzleRoom.cycle1(button1)'> Rotate button 1 </a>" +
			"<br>" +
			"<a href='#' onclick='puzzleRoom.cycle2(button2)'>Rotate button 2 </a>" +
			"<br>" +
			"<a href='#' onclick='puzzleRoom.cycle3(button3)'>Rotate button 3</a>" +
			"<br>" +
			"<a href='#' onclick='puzzleRoom.submit()'>Submit</a>" +
			"</p>";

			roomPara = document.getElementById("RoomDesc");
			roomPara.innerHTML = description;
		},

		submit: function() {
			if ((button1 == 'Witch') && (button2 == 'Serpent') && (button3 == 'Ogre')) {
				puzzleRoom.success();
			} else {
				failCount ++;
				console.log(failCount);
				puzzleRoom.fail();
			}
		},

		success: function() {
			armorComplete = 1;

			var description =
			"<p>" +
			"After completing the ancient puzzle, the sound of rusty gears grinding on eachother " +
			"echo throughout the room. A stone drawbridge slowly lowers from the top of the pillar. " +
			"The crude bridge forms a path across the large gap, and you reluctantly step onto it, cautiously making your way across the bridge. " +
			"The other side appears to be a small chunk of rock that has fallen out of the " +
			"<a href='#' onclick='puzzleRoom.armorRoom()'>side</a> " +
			" of the room, with crudely placed pillars supporting the weight of the rock above. " +
			"</p>" ;

			roomPara = document.getElementById("RoomDesc");
			roomPara.innerHTML = description;
		},

		fail: function() {
			if (failCount == 5) {
				dead();
			} else {
			}
		},

		armorRoom: function() {
			console.log('armorSideRoom');
			var description =
			"<p>" +
			"Upon entering the room a muddled white figure catches your eye. To the right appears to be a long dead adventurer. Nothing but a " +
			"skeleton remains of the poor soul. The skeleton is wearing a full suit of bloodied " + armor.menuCreate() + "." +
			"</p>";

			roomPara = document.getElementById("RoomDesc");
			roomPara.innerHTML = roomPara.innerHTML + description;
		}
};
