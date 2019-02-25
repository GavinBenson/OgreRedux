// Justin Fernandez: Final room where you confront the ogre. if pots, weapon, and armor fight ogre, else, die. Make scripted fight. alert victory msg*//*
function ogreRoom()
{
	console.log("ogreRoom() called.");
	battleStage = 1;
	if (potion.location == 'inventory' && armor.location == 'inventory' && weapon.location == 'inventory')
	{
	console.log("Battle Stage: " + battleStage);
		description = "<p>You face the ogre who blocks the exit." +
			" He immediately takes a swing at you with his giant club." +
			"</br>" +
			" Do you: Use <a href='#' onclick='weaponBattle()'>Weapon</a>, Use <a href='#' onclick='armorBattle()'>Armor</a>, or Use <a href='#' onclick='potionBattle()'>Potion</a>?</p>"
	}
	else
	{
		player.isAlive == false;
		description = "<p>You came unprepared and have died. Press 'F5' to refresh and start over.</p>"
	}

	roomPara = document.getElementById("desc");
	roomPara.innerHTML = description;
	
}


// TEMP OBJECTS
/*var potion = 
{
	location: 'inventory'
}
var armor = 
{
	location: 'inventory'
}
var weapon = 
{
	location: 'inventory'
}
*/
function weaponBattle()
{
	if (battleStage == 1)
	{
		description = "<p>You chose the wrong choice and died. Press 'F5' to refresh and start over.</p>";
		roomPara = document.getElementById("desc");
		roomPara.innerHTML = description;
		description = " ";
		roomPara = document.getElementById("desc2")
		roomPara.innerHTML = description;
	}
	if (battleStage == 2)
	{
		description = "<p>In between the blows, you stab the ogre.</p>"
		battleStage++;
		roomPara = document.getElementById("desc");
		roomPara.innerHTML = description;
		description = "<p>Do you: Use <a href='#' onclick='weaponBattle()'>Weapon</a>, Use <a href='#' onclick='armorBattle()'>Armor</a>, or Use <a href='#' onclick='potionBattle()'>Potion</a>?</p>"
		roomPara = document.getElementById("desc2");
		roomPara.innerHTML = description;
		console.log("BattleStage: " + battleStage);
		return battleStage;
	}
	if (battleStage == 3)
	{
		description = "<p>You chose the wrong choice and died. Press 'F5' to refresh and start over.</p>";
		roomPara = document.getElementById("desc");
		roomPara.innerHTML = description;
		description = " ";
		roomPara = document.getElementById("desc2")
		roomPara.innerHTML = description;
	}
}

function armorBattle()
{
	if (battleStage == 1)
	{
		description = "<p>Your armor takes the brunt of the damage. The ogre readies another blow.</p>";
		battleStage++;
		roomPara = document.getElementById("desc");
		roomPara.innerHTML = description;
		description = "<p>Do you: Use <a href='#' onclick='weaponBattle()'>Weapon</a>, Use <a href='#' onclick='armorBattle()'>Armor</a>, or Use <a href='#' onclick='potionBattle()'>Potion</a>?</p>"
		roomPara = document.getElementById("desc2");
		roomPara.innerHTML = description;
		console.log("BattleStage: " + battleStage);
		return battleStage;
	}
	if (battleStage == 2)
	{
		description = "<p>You chose the wrong choice and died. Press 'F5' to refresh and start over.</p>";
		roomPara = document.getElementById("desc");
		roomPara.innerHTML = description;
		description = " ";
		roomPara = document.getElementById("desc2")
		roomPara.innerHTML = description;
	}
	if (battleStage == 3)
	{
		description = "<p>You chose the wrong choice and died. Press 'F5' to refresh and start over.</p>";
		roomPara = document.getElementById("desc");
		roomPara.innerHTML = description;
		description = " ";
		roomPara = document.getElementById("desc2")
		roomPara.innerHTML = description;
	}
}

function potionBattle()
{
	if (battleStage == 1)
	{
		description = "<p>You chose the wrong choice and died. Press 'F5' to refresh and start over.</p>";
		roomPara = document.getElementById("desc");
		roomPara.innerHTML = description;
		description = " ";
		roomPara = document.getElementById("desc2")
		roomPara.innerHTML = description;
	}
	if (battleStage == 2)
	{	
		description = "<p>You chose the wrong choice and died. Press 'F5' to refresh and start over.</p>";
		roomPara = document.getElementById("desc");
		roomPara.innerHTML = description;
		description = " ";
		roomPara = document.getElementById("desc2")
		roomPara.innerHTML = description;
	}
	if (battleStage == 3)
	{
		description = "<p>You drink the potion and gain strength and speed, as you dodge a blow from the ogre you thrust and it dies.</p>"
		battleStage++;
		roomPara = document.getElementById("desc");
		roomPara.innerHTML = description;
		description = "<p>You see the light of the <a href='#' onclick='exit()'>exit</a>.</p>"
		roomPara = document.getElementById("desc2");
		roomPara.innerHTML = description;
		console.log("BattleStage: " + battleStage);
		return battleStage;
	}
}

function exit()
{
	description = "<p>You have escaped the cave. You win.</p>"
	roomPara = document.getElementById("desc")
	roomPara.innerHTML = description;
	description = " ";
	roomPara = document.getElementById("desc2")
	roomPara.innerHTML = description;
}


















