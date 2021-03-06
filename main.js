
var lore = ["You've heard of the people in the United States and the Soviet Union trying to make spaceships. You kind of want to make one yourself.", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];

function switchAutoRocket(rocket) {
	switch(rocket) {
		case 'basicRocket':
			rocket1.switchAuto(!rocket1.properties.auto);
			break;
		case 'explorer':
			rocket2.switchAuto(!rocket2.properties.auto);
			break;
		case 'mercury':
			rocket3.switchAuto(!rocket3.properties.auto);
			break;
		case 'gemini':			
			break;
		case 'apollo':
			break;
		default:
			console.log('missing "rocket" parameter');
	}	
		
}

function launchRocket(rocket) {
	switch(rocket) {
		case 'basicRocket':
			rocket1.launch();
			break;
		case 'explorer':
			rocket2.launch();
			break;
		case 'mercury':
			rocket3.launch();
			break;
		case 'gemini':			
			break;
		case 'apollo':
			break;
		default:
			console.log('missing "rocket" parameter');
	}	
}

function buyRocketFuel(rocket) {
	switch(rocket) {
		case 'basicRocket':
			rocket1.buyFuel();
			break;
		case 'explorer':
			rocket2.buyFuel();
			break;
		case 'mercury':
			rocket3.buyFuel();
			break;
		case 'gemini':			
			break;
		case 'apollo':
			break;
		default:
			console.log('missing "rocket" parameter');
	}	
}

function buyRocketUpgrade(rocket, upgrade) {
	switch(rocket) {
		case 'basicRocket':
			switch(upgrade) {
				case 1:
					rocket1.buyUpgrade1();
					break;
				case 2:
					rocket1.buyUpgrade2();
					break;
				case 3:
					rocket1.buyUpgrade3();
					break;
				case 4:
					console.log('Basic Rocket does not have 4 upgrades');
					break;				
				default:
					console.log('parameter "upgrade" is missing');
			}
			break;
		case 'explorer':
			switch(upgrade) {
				case 1:
					rocket2.buyUpgrade1();
					break;
				case 2:
					rocket2.buyUpgrade2();
					break;
				case 3:
					rocket2.buyUpgrade3();
					break;
				case 4:
					rocket2.buyUpgrade4();
					break;				
				default:
					console.log('parameter "upgrade" is missing');
			}
			break;
		case 'mercury':
			switch(upgrade) {
				case 1:
					rocket3.buyUpgrade1();
					break;
				case 2:
					rocket3.buyUpgrade2();
					break;
				case 3:
					rocket3.buyUpgrade3();
					break;
				case 4:
					rocket3.buyUpgrade4();
					break;				
				default:
					console.log('parameter "upgrade" is missing');
			}
			break;
		case 'gemini':
			switch(upgrade) {
				case 1:
					rocket3.buyUpgrade1();
					break;
				case 2:
					rocket3.buyUpgrade2();
					break;
				case 3:
					rocket3.buyUpgrade3();
					break;
				case 4:
					rocket3.buyUpgrade4();
					break;				
				default:
					console.log('parameter "upgrade" is missing');
			}
			break;
		case 'apollo':
			switch(upgrade) {
				case 1:
					rocket4.buyUpgrade1();
					break;
				case 2:
					rocket4.buyUpgrade2();
					break;
				case 3:
					rocket4.buyUpgrade3();
					break;
				case 4:
					rocket4.buyUpgrade4();
					break;				
				default:
					console.log('parameter "upgrade" is missing');
			}
			break;		
		default:
			console.log('missing "rocket" parameter');
	}		
}

function buyRocketTech(rocket, upgrade) {
	switch(rocket) {
		case 'basicRocket':
			switch(upgrade) {
				case 1:
					rocket1.buyTech1();
					break;
				case 2:
					rocket1.buyTech2();
					break;
				case 3:
					rocket1.buyTech3();
					break;
				case 4:
					rocket1.buyTech4();
					break;
				case 5:
					rocket1.buyTech5();
					break;
				case 6:
					rocket1.buyTech6();
					break;
				case 7:
					console.log('Basic Rocket does not have 7 Techs');
					break;
				case 8:
					console.log('Basic Rocket does not have 8 techs');
					break;
				default:
					console.log('parameter "upgrade" is missing');
			}
			break;
		case 'explorer':
			switch(upgrade) {
				case 1:
					rocket2.buyTech1();
					break;
				case 2:
					rocket2.buyTech2();
					break;
				case 3:
					rocket2.buyTech3();
					break;
				case 4:
					rocket2.buyTech4();
					break;
				case 5:
					rocket2.buyTech5();
					break;
				case 6:
					rocket2.buyTech6();
					break;
				case 7:
					rocket2.buyTech7();
					break;
				case 8:
					rocket2.buyTech8();
					break;
				default:
					console.log('parameter "upgrade" is missing');
			}
			break;
		case 'mercury':
			switch(upgrade) {
				case 1:
					rocket3.buyTech1();
					break;
				case 2:
					rocket3.buyTech2();
					break;
				case 3:
					rocket3.buyTech3();
					break;
				case 4:
					rocket3.buyTech4();
					break;
				case 5:
					rocket3.buyTech5();
					break;
				case 6:
					rocket3.buyTech6();
					break;
				case 7:
					rocket3.buyTech7();
					break;
				case 8:
					rocket3.buyTech8();
					break;
				default:
					console.log('parameter "upgrade" is missing');
			}
			break;
		case 'gemini':
			switch(upgrade) {
				case 1:
					rocket4.buyTech1();
					break;
				case 2:
					rocket4.buyTech2();
					break;
				case 3:
					rocket4.buyTech3();
					break;
				case 4:
					rocket4.buyTech4();
					break;
				case 5:
					rocket4.buyTech5();
					break;
				case 6:
					rocket4.buyTech6();
					break;
				case 7:
					rocket4.buyTech7();
					break;
				case 8:
					rocket4.buyTech8();
					break;
				default:
					console.log('parameter "upgrade" is missing');
			}
			break;
		case 'apollo':
			switch(upgrade) {
				case 1:
					rocket5.buyTech1();
					break;
				case 2:
					rocket5.buyTech2();
					break;
				case 3:
					rocket5.buyTech3();
					break;
				case 4:
					rocket5.buyTech4();
					break;
				case 5:
					rocket5.buyTech5();
					break;
				case 6:
					rocket5.buyTech6();
					break;
				case 7:
					rocket5.buyTech7();
					break;
				case 8:
					rocket5.buyTech8();
					break;
				default:
					console.log('parameter "upgrade" is missing');
			}
			break;
	}
}

function rocketTechReset(rocket) {
	switch(rocket) {
		case 'basicRocket':
			rocket1.resetTech();
			break;
		case 'explorer':
			rocket2.resetTech();
			break;
		case 'mercury':
			rocket3.resetTech();
			break;
		case 'gemini':
			break;
		case 'apollo':
			break;
		default:
			console.log('parameter "rocket" is missing');
	}
	
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function p1Gain() {
	game.creativity.gainReset = Math.floor(Math.sqrt(game.money / 50000) * game.creativity.multiplier * ((rocket1.properties.techs.cmx / 2) + 1) * ((rocket2.properties.techs.cmx / 1.5) + 1) * ((game.rock3.techs.cmx / 1.5) + 1));
}

function prestige1() {

	if (rocket1.properties.up1.buys >= 5 && 
		rocket1.properties.up2.buys >= 5 && 
		rocket1.properties.up3.buys >= 5 && 
		game.money >= 50000) {

		game.prestige.enabled = true;
		lore[7] = "You decide it's time to brainstorm up some better ideas for your rocket, so you deconstruct it using the money you have left.";
		game.creativity.total += Math.floor(Math.sqrt(game.money / 50000) * game.creativity.multiplier * ((rocket1.properties.techs.cmx / 2) + 1) * ((rocket2.properties.techs.cmx / 1.5) + 1) * ((game.rock3.techs.cmx / 1.5) + 1));
		game.money = 0;
		
		rocket1.prestige();			
		rocket2.prestige();
		rocket3.prestige();
		
		// game.rock4.rockLaunched = 0;
		// game.rock5.rockLaunched = 0;		
		// game.rock4.fuel.cost = 1e21;
		// game.rock4.fuel.amount = 0;
		// game.rock4.fuel.scaleDown = 1;
		// game.rock4.fuel.max = 150;
		// game.rock5.fuel.cost = 1e28;
		// game.rock5.fuel.amount = 0;
		// game.rock5.fuel.scaleDown = 1;
		// game.rock5.fuel.max = 150;		
		// game.rock4.up1.buys = 0;
		// game.rock4.up2.buys = 0;
		// game.rock4.up3.buys = 0;
		// game.rock4.up4.buys = 0;
		// game.rock5.up1.buys = 0;
		// game.rock5.up2.buys = 0;
		// game.rock5.up3.buys = 0;
		// game.rock5.up4.buys = 0;		
		// game.rock4.up1.cost = 2.5e23;
		// game.rock4.up2.cost = 4e23;
		// game.rock4.up3.cost = 6e23;
		// game.rock4.up4.cost = 4e23;
		// game.rock5.up1.cost = 2.5e30;
		// game.rock5.up2.cost = 4e30;
		// game.rock5.up3.cost = 6e30;
		// game.rock5.up4.cost = 4e30;
	}
}

function save() {
	localStorage.sri = btoa(JSON.stringify(game));
	localStorage.beta = btoa(JSON.stringify(rocket1.properties));
	localStorage.explorer = btoa(JSON.stringify(rocket2.properties));
	localStorage.mercury = btoa(JSON.stringify(rocket3.properties));

	// Get the snackbar DIV
	var x = document.getElementById("snackbar");

	x.innerHTML = "Game Saved";

	// Add the "show" class to DIV
	x.className = "show";

	// After 3 seconds, remove the show class from DIV
	setTimeout(function(){ x.className = x.className.replace("show", ""); }, 2000);

}

function load() {
	if (localStorage.sri) {
		game = JSON.parse(atob(localStorage.sri));	
	}

	if (localStorage.beta) {
		rocket1.properties = JSON.parse(atob(localStorage.beta));
		if (rocket1.properties.auto) {			
			document.getElementById('basicBtnLaunch').style.display = 'none';
			document.getElementById('basicBtnFuel').style.display = 'none';
			rocket1.launch();
		}
	}

	if (localStorage.explorer) {
		rocket2.properties = JSON.parse(atob(localStorage.explorer));
		if (rocket2.properties.auto) {			
			document.getElementById('explorerBtnLaunch').style.display = 'none';
			document.getElementById('explorerBtnFuel').style.display = 'none';
			rocket2.launch();
		}
	}
	
	if (localStorage.mercury) {
		rocket3.properties = JSON.parse(atob(localStorage.mercury));
		if (rocket3.properties.auto) {
			document.getElementById('mercuryBtnLaunch').style.display = 'none';
			document.getElementById('mercuryBtnFuel').style.display = 'none';
			rocket3.launch();
		}
	}
}

function upgradeGame() {	
	game.prestige.upgrades.push({name: 'MaxETP', cost: 2500000000, bought: false});
	game.prestige.upgrades.push({name: 'More Money', cost: 7500000000, bought: false});
	game.prestige.upgrades.push({name: 'Max Explorer', cost: 15000000000, bought: false});
	game.prestige.upgrades.push({name: 'Explorer Unlock Technology', cost: 50000, bought: false});
	game.prestige.upgrades.push({name: 'Mercury Automate Launches', cost: 50000000000, bought: false});
	game.prestige.upgrades.push({name: 'Gemini Program', cost: 10000000000000, bought: false});
	save();
	location.reload();
}

function outof() {
	var tempInput = document.createElement("input");
	tempInput.style = "position: absolute; left: -1000px; top: -1000px";
	tempInput.value = btoa(JSON.stringify(game));
	document.body.appendChild(tempInput);
	tempInput.select();
	document.execCommand("copy");
	document.body.removeChild(tempInput);
	alert("Save copied to clipboard");
}

function into() {
	var imp = prompt("Paste your save file here");
	if (imp == null) alert("That save file doesn't work, sorry.");
	else game = JSON.parse(atob(imp));
}

function pUpgrade1() {
	if (!game.prestige.upgrades[0].bought && game.creativity.total >= 1) {		
		lore[8] = "Suddenly, you get a letter from NASA saying, \'Hello. We have heard of your \'accomplishments\' from FM, and was wondering if you'd like to join us\'. You gladly accept.";
		game.creativity.total -= 1;		
		game.prestige.upgrades[0].bought = true;
	}
}

function pUpgrade2() {
	if (game.creativity.total >= game.prestige.upgrades[1].cost) {
		lore[9] = "You now have enough ideas that you think you can launch multiple rockets.";
		game.creativity.total -= game.prestige.upgrades[1].cost;		
		game.prestige.upgrades[1].cost = Math.round(game.prestige.upgrades[1].cost * 3);
		game.prestige.upgrades[1].bought = true;
		rocket1.properties.limit += 1;
	}
}

function pUpgrade3() {
	if (game.creativity.total >= game.prestige.upgrades[2].cost) {
		lore[10] = "After a good brainstorm, you find a better place to think, making you more creative.";
		game.creativity.total -= game.prestige.upgrades[2].cost;
		game.creativity.multiplier = game.creativity.multiplier * 1.5;
		game.prestige.upgrades[2].cost = Math.round(game.prestige.upgrades[2].cost * 3);
		game.prestige.upgrades[2].bought = true;
	}
}

function pUpgrade4() {
	if (game.creativity.total >= game.prestige.upgrades[3].cost) {
		lore[11] = "You have recieved additional funding to make better rockets with things called Technology Points. Pretty cool.";
		game.creativity.total -= game.prestige.upgrades[3].cost;
		rocket1.properties.techs.techStart = true;
		game.prestige.upgrades[3].bought = true;
	}

}

function pUpgrade5() {
	if (game.creativity.total >= game.prestige.upgrades[4].cost) {
		lore[13] = "NASA has sent some engineers to help you launch this rocket. They say it's for a new project you're going to be working on soon.";
		game.creativity.total -= game.prestige.upgrades[4].cost;
		game.prestige.upgrades[4].bought = true;
		rocket1.switchAuto(true);
	}
}

function pUpgrade6() {
	if (game.creativity.total >= 250 && !game.prestige.upgrades[5].bought && 
		rocket1.properties.up1.buys === 25 && rocket1.properties.up2.buys === 25 && rocket1.properties.up3.buys === 25) {
		lore[14] = "You begin work on the Explorers project. The Explorers project was a massive project designed to get a satellite into space.";
		game.creativity.total -= game.prestige.upgrades[5].cost;
		game.prestige.upgrades[5].bought = true;
		rocket2.properties.unlocked = true;		
	}
}

function pUpgrade7() {
	if (!game.prestige.upgrades[5].bought) {
		return;
	}

	if (game.creativity.total >= game.prestige.upgrades[6].cost && !game.prestige.upgrades[6].bought) {
		lore[15] = "There's not much left to do with your basic rocket, but it's really close to perfection. Best to give it a little more power.";
		game.creativity.total -= game.prestige.upgrades[6].cost;
		game.prestige.upgrades[6].bought = true;
		rocket1.properties.techs.maxTP = 18;
	}
}

function pUpgrade8() {
	if (!game.prestige.upgrades[5].bought) {
		return;
	}

	if (game.creativity.total >= game.prestige.upgrades[7].cost && !game.prestige.upgrades[7].bought) {
		lore[16] = "The Explorers project is looking very good so far. You have all sorts of ideas for how to make it better.";		
		game.creativity.total -= game.prestige.upgrades[7].cost;
		game.prestige.upgrades[7].bought = true;
		rocket2.properties.affectByCreat = true;
	}
}

function pUpgrade9() {	

	if (game.creativity.total > game.prestige.upgrades[8].cost && !game.prestige.upgrades[8].bought) {
		lore[17] = "The first rocket is useless now. Moreso a stepping stone than anything.";
		game.creativity.total -= game.prestige.upgrades[8].cost;
		game.prestige.upgrades[8].bought = true;
	}
}

function pUpgrade10() {
	if (game.creativity.total >= game.prestige.upgrades[9].cost && !game.prestige.upgrades[9].bought) {
		game.creativity.total -= game.prestige.upgrades[9].cost;
		game.prestige.upgrades[9].bought = true;
		rocket2.properties.techs.techStart = true;
	}
}

function pUpgrade11() {
	if (game.creativity.total > game.prestige.upgrades[10].cost && !game.prestige.upgrades[10].bought) {
		game.creativity.total -= game.prestige.upgrades[10].cost;
		game.prestige.upgrades[10].bought = true;
		rocket2.switchAuto(true);
	}
}

function pUpgrade12() {
	if (game.creativity.total >= game.prestige.upgrades[11].cost && !game.prestige.upgrades[11].bought) {
		game.creativity.total -= game.prestige.upgrades[11].cost;
		game.prestige.upgrades[11].bought = true;
		rocket3.properties.unlocked = true;		
	}
}

function pUpgrade13() {
	if (game.creat > 100000000 && game.rock3.techs.techStart === false) {
		game.creat -= 100000000;
		rocket3.properties.techs.techStart = true;

	}
}

function buyPrestige31() {
	if (!game.prestige.upgrades[11].bought) {
		return;
	}

	if (game.creativity.total >= game.prestige.upgrades[12].cost && !game.prestige.upgrades[12].bought) {
		lore[15] = "There's not much left to do with your explorer, but it's really close to perfection. Best to give it a little more power.";
		game.creativity.total -= game.prestige.upgrades[12].cost;
		game.prestige.upgrades[12].bought = true;
		rocket2.properties.techs.maxTP = 24;
	}
}

function buyPrestige32() {
	if (!game.prestige.upgrades[11].bought) {
		return;
	}

	if (game.creativity.total >= game.prestige.upgrades[13].cost && !game.prestige.upgrades[13].bought) {
		lore[16] = "The Explorers project is looking very good so far. You have all sorts of ideas for how to make it better.";		
		game.creativity.total -= game.prestige.upgrades[13].cost;
		game.prestige.upgrades[13].bought = true;
		rocket3.properties.affectByCreat = true;
	}
}

function buyPrestige33() {
	if (game.creativity.total >= game.prestige.upgrades[14].cost && !game.prestige.upgrades[14].bought) {
		lore[17] = "The first rocket is useless now. Moreso a stepping stone than anything.";
		game.creativity.total -= game.prestige.upgrades[14].cost;
		game.prestige.upgrades[14].bought = true;
	}
}

function buyPrestige34() {
	if (game.creativity.total >= game.prestige.upgrades[15].cost && !game.prestige.upgrades[15].bought) {
		game.creativity.total -= game.prestige.upgrades[15].cost;
		game.prestige.upgrades[15].bought = true;
		rocket3.properties.techs.techStart = true;
	}
}

function buyPrestige35() {
	if (game.creativity.total > game.prestige.upgrades[16].cost && !game.prestige.upgrades[16].bought) {
		game.creativity.total -= game.prestige.upgrades[16].cost;
		game.prestige.upgrades[16].bought = true;
		rocket3.switchAuto(true);
	}
}

function buyPrestige36() {
	if (game.creativity.total >= game.prestige.upgrades[17].cost && !game.prestige.upgrades[17].bought) {
		game.creativity.total -= game.prestige.upgrades[17].cost;
		rocket4.properties.unlocked = true;		
	}
}

function ruinTheFun() {
	if (game.funRuined === false) {
		rocket1.properties.up1.buys = 25;
		rocket1.properties.up2.buys = 25;
		rocket1.properties.up3.buys = 25;
		game.creat = 200000;
		game.money = 50001;
		game.funRuined = true;
	}
}

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

function putSomeoneOnYourFrickingRocket() {

}

function rocklaunch4() {
	if (game.rock4.rockLaunched < game.rock4.rockLimit) {
		var failChance = getRandomInt(100);
		if (failChance < game.rock4.successChance) {
			game.rock4.rockLaunched += 1;
			var rocketAuto4 = setInterval(function () {
				if (game.rock4.fuel.amount > 0) {

					game.money += game.rock4.moneyPerFuel;
					game.rock4.fuel.amount -= 1;
					game.money = Math.round(game.money * 100) / 100;
				} else if (game.rock4.auto.rocket === false) {
					game.rock4.rockLaunched = 0;
					clearInterval(rocketAuto4);
				}
			}, 40);
		} else {
			game.money -= game.money / 2;
			game.rock4.fuel.amount = 0;
			lore[18] = "This is a disaster. The rocket failed. You need to make it a lot safer.";
		}
	}
}

function gemBuyFuel() {
	if (game.money >= game.rock4.fuel.cost * game.rock4.fuel.max) {
		if (game.rock4.fuel.amount === 0) {
			game.money -= game.rock4.fuel.cost * game.rock4.fuel.max;
			game.rock4.fuel.amount += game.rock4.fuel.max;
			game.rock4.fuel.cost = game.rock4.fuel.cost * (1 + (0.0001 * game.rock4.fuel.max));
			lore[3] = "You decide to get more fuel, so you can continue to launch rockets.";
		}
	}
}

function gemUp1() {
	if (game.money >= game.rock4.up1.cost && game.rock4.up1.buys < 50) {
		game.rock4.fuel.max = Math.floor(game.rock4.fuel.max * 1.1);
		game.money -= game.rock4.up1.cost;
		if (game.rock4.techs.cs1 === 0) {
			game.rock4.up1.cost = Math.round(game.rock4.up1.cost * 1.3);
		}
		if (game.rock4.techs.cs1 === 1) {
			game.rock4.up1.cost = Math.round(game.rock4.up1.cost * 1.28);
		}
		if (game.rock4.techs.cs1 === 2) {
			game.rock4.up1.cost = Math.round(game.rock4.up1.cost * 1.25);
		}
		if (game.rock4.techs.cs1 === 3) {
			game.rock4.up1.cost = Math.round(game.rock4.up1.cost * 1.22);
		}
		game.rock4.up1.buys += 1;
		game.rock4.successChance -= 1;
	}
}

function gemUp2() {
	if (game.money >= game.rock4.up2.cost) {
		lore[5] = "Amazingly, you find some way to mess up the fuel industry, and lower the cost of fuel to $2.";
		if (game.rock4.up2.buys < 50) {
			game.rock4.fuel.cost = 50000;
			game.rock4.fuel.scaleDown = 0.9 * game.rock4.fuel.scaleDown;
			game.money -= game.rock4.up2.cost;
			if (game.rock4.techs.cs2 === 0) {
				game.rock4.up2.cost = Math.round(game.rock4.up2.cost * 1.5);
			}
			if (game.rock4.techs.cs2 === 1) {
				game.rock4.up2.cost = Math.round(game.rock4.up2.cost * 1.46);
			}
			if (game.rock4.techs.cs2 === 2) {
				game.rock4.up2.cost = Math.round(game.rock4.up2.cost * 1.43);
			}
			if (game.rock4.techs.cs2 === 3) {
				game.rock4.up2.cost = Math.round(game.rock4.up2.cost * 1.4);
			}
			game.rock4.up2.buys += 1;
			game.rock4.successChance -= 1;
		}
	}
}

function gemUp3() {
	if (game.money >= game.rock4.up3.cost) {
		lore[6] = "Better engines mean more speed. More speed means more height. And FM seems to be sending you money based on how high the rocket goes.";
		if (game.rock4.up3.buys < 50) {
			if (game.rock4.techs.ef3 === 0) {
				game.rock4.moneyPerFuel = game.rock4.moneyPerFuel * 1.25;
			}
			if (game.rock4.techs.ef3 === 1) {
				game.rock4.moneyPerFuel = game.rock4.moneyPerFuel * 1.29;
			}
			if (game.rock4.techs.ef3 === 2) {
				game.rock4.moneyPerFuel = game.rock4.moneyPerFuel * 1.32;
			}
			if (game.rock4.techs.ef3 === 3) {
				game.rock4.moneyPerFuel = game.rock4.moneyPerFuel * 1.34;
			}
			game.money -= game.rock2.up3.cost;
			if (game.rock4.techs.cs3 === 0) {
				game.rock4.up3.cost = Math.round(game.rock4.up3.cost * 1.6);
			}
			if (game.rock4.techs.cs3 === 1) {
				game.rock4.up3.cost = Math.round(game.rock4.up3.cost * 1.56);
			}
			if (game.rock4.techs.cs3 === 2) {
				game.rock4.up3.cost = Math.round(game.rock4.up3.cost * 1.53);
			}
			if (game.rock4.techs.cs3 === 3) {
				game.rock4.up3.cost = Math.round(game.rock4.up3.cost * 1.5);
			}
			game.rock4.up3.buys += 1;
			game.rock4.successChance -= 1;
		}
	}
}

function gemUp4() {
	if (game.money >= game.rock4.up4.cost) {
		lore[5] = "Amazingly, you find some way to mess up the fuel industry, and lower the cost of fuel to $2.";
		if (game.rock4.up4.buys < 50) {
			if (game.rock4.techs.ef4 === 0) {
				game.rock4.successChance += 2;
			}
			if (game.rock2.techs.ef4 === 1) {
				game.rock4.successChance += 2.2;
			}
			if (game.rock2.techs.ef4 === 2) {
				game.rock4.successChance += 2.5;
			}
			if (game.rock2.techs.ef4 === 3) {
				game.rock4.successChance += 2.9;
			}
			game.money -= game.rock4.up4.cost;
			if (game.rock4.techs.cs4 === 0) {
				game.rock4.up4.cost = Math.round(game.rock4.up4.cost * 1.5);
			}
			if (game.rock2.techs.cs4 === 1) {
				game.rock4.up4.cost = Math.round(game.rock4.up4.cost * 1.48);
			}
			if (game.rock2.techs.cs4 === 2) {
				game.rock4.up4.cost = Math.round(game.rock4.up4.cost * 1.45);
			}
			if (game.rock2.techs.cs4 === 3) {
				game.rock4.up4.cost = Math.round(game.rock4.up4.cost * 1.41);
			}
			game.rock4.up4.buys += 1;
		}
	}
}

function rocklaunch5() {
	if (game.rock5.rockLaunched < game.rock5.rockLimit) {
		var failChance = getRandomInt(100);
		if (failChance < game.rock5.successChance) {
			game.rock5.rockLaunched += 1;
			var rocketAuto5 = setInterval(function () {
				if (game.rock5.fuel.amount > 0) {

					game.money += game.rock5.moneyPerFuel;
					game.rock5.fuel.amount -= 1;
					game.money = Math.round(game.money * 100) / 100;
				} else if (game.rock5.auto.rocket === false) {
					game.rock5.rockLaunched = 0;
					clearInterval(rocketAuto5);
				}
			}, 40);
		} else {
			game.money -= game.money / 2;
			game.rock5.fuel.amount = 0;
			lore[18] = "This is a disaster. The rocket failed. You need to make it a lot safer.";
		}
	}
}

function apBuyFuel() {
	if (game.money >= game.rock5.fuel.cost * game.rock5.fuel.max) {
		if (game.rock5.fuel.amount === 0) {
			game.money -= game.rock5.fuel.cost * game.rock5.fuel.max;
			game.rock5.fuel.amount += game.rock5.fuel.max;
			game.rock5.fuel.cost = game.rock5.fuel.cost * (1 + (0.0001 * game.rock5.fuel.max));
			lore[3] = "You decide to get more fuel, so you can continue to launch rockets.";
		}
	}
}

function apUp1() {
	if (game.money >= game.rock5.up1.cost && game.rock5.up1.buys < 50) {
		game.rock5.fuel.max = Math.floor(game.rock5.fuel.max * 1.1);
		game.money -= game.rock5.up1.cost;
		if (game.rock5.techs.cs1 === 0) {
			game.rock5.up1.cost = Math.round(game.rock5.up1.cost * 1.3);
		}
		if (game.rock5.techs.cs1 === 1) {
			game.rock5.up1.cost = Math.round(game.rock5.up1.cost * 1.28);
		}
		if (game.rock5.techs.cs1 === 2) {
			game.rock5.up1.cost = Math.round(game.rock5.up1.cost * 1.25);
		}
		if (game.rock5.techs.cs1 === 3) {
			game.rock5.up1.cost = Math.round(game.rock5.up1.cost * 1.22);
		}
		game.rock5.up1.buys += 1;
		game.rock5.successChance -= 1;
	}
}

function apUp2() {
	if (game.money >= game.rock5.up2.cost) {
		lore[5] = "Amazingly, you find some way to mess up the fuel industry, and lower the cost of fuel to $2.";
		if (game.rock5.up2.buys < 50) {
			game.rock5.fuel.cost = 50000;
			game.rock5.fuel.scaleDown = 0.9 * game.rock5.fuel.scaleDown;
			game.money -= game.rock5.up2.cost;
			if (game.rock5.techs.cs2 === 0) {
				game.rock5.up2.cost = Math.round(game.rock5.up2.cost * 1.5);
			}
			if (game.rock5.techs.cs2 === 1) {
				game.rock5.up2.cost = Math.round(game.rock5.up2.cost * 1.46);
			}
			if (game.rock5.techs.cs2 === 2) {
				game.rock5.up2.cost = Math.round(game.rock5.up2.cost * 1.43);
			}
			if (game.rock5.techs.cs2 === 3) {
				game.rock5.up2.cost = Math.round(game.rock5.up2.cost * 1.4);
			}
			game.rock5.up2.buys += 1;
			game.rock5.successChance -= 1;
		}
	}
}

function apUp3() {
	if (game.money >= game.rock5.up3.cost) {
		lore[6] = "Better engines mean more speed. More speed means more height. And FM seems to be sending you money based on how high the rocket goes.";
		if (game.rock5.up3.buys < 50) {
			if (game.rock5.techs.ef3 === 0) {
				game.rock5.moneyPerFuel = game.rock5.moneyPerFuel * 1.25;
			}
			if (game.rock5.techs.ef3 === 1) {
				game.rock5.moneyPerFuel = game.rock5.moneyPerFuel * 1.29;
			}
			if (game.rock5.techs.ef3 === 2) {
				game.rock5.moneyPerFuel = game.rock5.moneyPerFuel * 1.32;
			}
			if (game.rock5.techs.ef3 === 3) {
				game.rock5.moneyPerFuel = game.rock5.moneyPerFuel * 1.34;
			}
			game.money -= game.rock2.up3.cost;
			if (game.rock5.techs.cs3 === 0) {
				game.rock5.up3.cost = Math.round(game.rock5.up3.cost * 1.6);
			}
			if (game.rock5.techs.cs3 === 1) {
				game.rock5.up3.cost = Math.round(game.rock5.up3.cost * 1.56);
			}
			if (game.rock5.techs.cs3 === 2) {
				game.rock5.up3.cost = Math.round(game.rock5.up3.cost * 1.53);
			}
			if (game.rock5.techs.cs3 === 3) {
				game.rock5.up3.cost = Math.round(game.rock5.up3.cost * 1.5);
			}
			game.rock5.up3.buys += 1;
			game.rock5.successChance -= 1;
		}
	}
}

function apUp4() {
	if (game.money >= game.rock5.up4.cost) {
		lore[5] = "Amazingly, you find some way to mess up the fuel industry, and lower the cost of fuel to $2.";
		if (game.rock5.up4.buys < 50) {
			if (game.rock5.techs.ef4 === 0) {
				game.rock5.successChance += 2;
			}
			if (game.rock2.techs.ef4 === 1) {
				game.rock5.successChance += 2.2;
			}
			if (game.rock2.techs.ef4 === 2) {
				game.rock5.successChance += 2.5;
			}
			if (game.rock2.techs.ef4 === 3) {
				game.rock5.successChance += 2.9;
			}
			game.money -= game.rock5.up4.cost;
			if (game.rock5.techs.cs4 === 0) {
				game.rock5.up4.cost = Math.round(game.rock5.up4.cost * 1.5);
			}
			if (game.rock2.techs.cs4 === 1) {
				game.rock5.up4.cost = Math.round(game.rock5.up4.cost * 1.48);
			}
			if (game.rock2.techs.cs4 === 2) {
				game.rock5.up4.cost = Math.round(game.rock5.up4.cost * 1.45);
			}
			if (game.rock2.techs.cs4 === 3) {
				game.rock5.up4.cost = Math.round(game.rock5.up4.cost * 1.41);
			}
			game.rock5.up4.buys += 1;
		}
	}
}

window.setInterval(function () {	
	document.getElementById("money").innerHTML = format(game.money);	
	document.getElementById("creativity").innerHTML = format(game.creativity.total);
	document.getElementById("gainOnBrainstorm").innerHTML = format(game.creativity.gainReset);	
	document.getElementById("geminiFuel").innerHTML = game.rock4.fuel.amount;
	document.getElementById("apolloFuel").innerHTML = game.rock5.fuel.amount;		
	document.getElementById("geminiFuelCost").innerHTML = format(game.rock4.fuel.cost);
	document.getElementById("apolloFuelCost").innerHTML = format(game.rock5.fuel.cost);		
	document.getElementById("geminiFuelMax").innerHTML = game.rock4.fuel.max;
	document.getElementById("apolloFuelMax").innerHTML = game.rock5.fuel.max;		
	document.getElementById("geminiUpgrade1Cost").innerHTML = format(game.rock4.up1.cost);
	document.getElementById("apolloUpgrade1Cost").innerHTML = format(game.rock5.up1.cost);	
	document.getElementById("geminiUpgrade2Cost").innerHTML = format(game.rock4.up2.cost);
	document.getElementById("apolloUpgrade2Cost").innerHTML = format(game.rock5.up2.cost);		
	document.getElementById("geminiUpgrade3Cost").innerHTML = format(game.rock4.up3.cost);
	document.getElementById("apolloUpgrade3Cost").innerHTML = format(game.rock5.up3.cost);	
	document.getElementById("geminiUpgrade4Cost").innerHTML = format(game.rock4.up4.cost);
	document.getElementById("apolloUpgrade4Cost").innerHTML = format(game.rock5.up4.cost);	
	document.getElementById("geminiUpgrade1Buys").innerHTML = game.rock4.up1.buys;
	document.getElementById("geminiUpgrade2Buys").innerHTML = game.rock4.up2.buys;
	document.getElementById("geminiUpgrade3Buys").innerHTML = game.rock4.up3.buys;
	document.getElementById("geminiUpgrade4Buys").innerHTML = game.rock4.up4.buys;	
	document.getElementById("apolloUpgrade1Buys").innerHTML = game.rock3.up1.buys;
	document.getElementById("apolloUpgrade2Buys").innerHTML = game.rock3.up2.buys;
	document.getElementById("apolloUpgrade3Buys").innerHTML = game.rock3.up3.buys;
	document.getElementById("apolloUpgrade4Buys").innerHTML = game.rock3.up4.buys;	
	
	document.getElementById("lore1").innerHTML = lore[0];
	document.getElementById("lore2").innerHTML = lore[1];
	document.getElementById("lore3").innerHTML = lore[2];
	document.getElementById("lore4").innerHTML = lore[3];
	document.getElementById("lore5").innerHTML = lore[4];
	document.getElementById("lore6").innerHTML = lore[5];
	document.getElementById("lore7").innerHTML = lore[6];
	document.getElementById("lore8").innerHTML = lore[7];
	document.getElementById("lore9").innerHTML = lore[8];
	document.getElementById("lore10").innerHTML = lore[9];
	document.getElementById("lore11").innerHTML = lore[10];
	document.getElementById("lore12").innerHTML = lore[11];
	document.getElementById("lore13").innerHTML = lore[12];
	document.getElementById("lore14").innerHTML = lore[13];
	document.getElementById("lore15").innerHTML = lore[14];
	document.getElementById("lore16").innerHTML = lore[15];
	document.getElementById("lore17").innerHTML = lore[16];
	document.getElementById("lore18").innerHTML = lore[17];
	document.getElementById("lore19").innerHTML = lore[18];
	if (game.prestige.upgrades[0].bought) {
		document.getElementById('pUpgrade1').classList.add('disabled');
	} else {
		document.getElementById('pUpgrade1').classList.remove('disabled');
	}
	if (game.prestige.upgrades[3].bought) {
		document.getElementById('pUpgrade4').classList.add('disabled');
	} else {
		document.getElementById('pUpgrade4').classList.remove('disabled');
	}
	if (game.prestige.upgrades[4].bought) {
		document.getElementById('pUpgrade5').classList.add('disabled');
	} else {
		document.getElementById('pUpgrade5').classList.remove('disabled');
	}
	if (game.prestige.upgrades[5].bought) {
		document.getElementById('pUpgrade6').classList.add('disabled');
	} else {
		document.getElementById('pUpgrade6').classList.remove('disabled');
	}
	if (game.prestige.upgrades[6].bought) {
		document.getElementById('pUpgrade7').classList.add('disabled');
	} else {
		document.getElementById('pUpgrade7').classList.remove('disabled');
	}
	if (game.prestige.upgrades[7].bought) {
		document.getElementById('pUpgrade8').classList.add('disabled');
	} else {
		document.getElementById('pUpgrade8').classList.remove('disabled');
	}
	if (game.prestige.upgrades[8].bought) {
		document.getElementById('pUpgrade9').classList.add('disabled');
	} else {
		document.getElementById('pUpgrade9').classList.remove('disabled');
	}
	if (game.prestige.upgrades[9].bought) {
		document.getElementById('pUpgrade10').classList.add('disabled');
	} else {
		document.getElementById('pUpgrade10').classList.remove('disabled');
	}
	if (game.prestige.upgrades[10].bought) {
		document.getElementById('pUpgrade11').classList.add('disabled');
	} else {
		document.getElementById('pUpgrade11').classList.remove('disabled');
	}
	if (game.prestige.upgrades[11].bought) {
		document.getElementById('pUpgrade12').classList.add('disabled');
	} else {
		document.getElementById('pUpgrade12').classList.remove('disabled');
	}
	
	document.getElementById("pUpgrade2Cost").innerHTML = format(game.prestige.upgrades[1].cost);
	document.getElementById("pUpgrade3Cost").innerHTML = format(game.prestige.upgrades[2].cost);
	document.getElementById('basicRocketLimit').innerHTML = rocket1.properties.limit;
	document.getElementById("creativityMultiplier").innerHTML = game.creativity.multiplier.toFixed(2);	
	document.getElementById("geminiMoneyPerFuel").innerHTML = format(Math.round(game.rock4.moneyPerFuel));
	document.getElementById("apolloMoneyPerFuel").innerHTML = format(Math.round(game.rock5.moneyPerFuel));	
	document.getElementById("geminiTechPoints").innerHTML = game.rock3.techs.currentTP;
	document.getElementById("maxGTP").innerHTML = game.rock3.techs.maxTP;
	document.getElementById("apolloTechPoints").innerHTML = game.rock3.techs.currentTP;
	document.getElementById("maxATP").innerHTML = game.rock3.techs.maxTP;
	
	if (game.money > 50000 || game.prestige.enabled === true) {
		document.getElementById("brainstormContent").style.display = "inline";
	} else {
		document.getElementById("brainstormContent").style.display = "none";
	}	

	p1Gain();
}, 100);

window.setInterval(function () {
	save();
}, 60000);

function fullReset() {
	swal({
		title: "Reset Game",
		text: "Are you sure you want to reset?",
		icon: "warning",
		buttons: true,
		dangerMode: true

	}).then(function(reset) {
		if(reset) {
			localStorage.removeItem("sri");
			localStorage.removeItem("beta");
			localStorage.removeItem('explorer');
			localStorage.removeItem('mercury');
			location.reload();
		}
	});
	
}

function format(number, decPlaces = 2) {
    // 2 decimal places => 100, 3 => 1000, etc
    decPlaces = Math.pow(10, decPlaces);

    // Enumerate number abbreviations
    var abbrev = ["K", "M", "B", "T", "q", "Q", "s", "S", "O", "N", "D"];

    // Go through the array backwards, so we do the largest first
    for (var i = abbrev.length - 1; i >= 0; i--) {

        // Convert array index to "1000", "1000000", etc
        var size = Math.pow(10, (i + 1) * 3);

        // If the number is bigger or equal do the abbreviation
        if (size <= number) {
            // Here, we multiply by decPlaces, round, and then divide by decPlaces.
            // This gives us nice rounding to a particular decimal place.
            number = Math.round(number * decPlaces / size) / decPlaces;

            // Handle special case where we round up to the next abbreviation
            if ((number == 1000) && (i < abbrev.length - 1)) {
                number = 1;
                i++;
            }

            // Add the letter for the abbreviation
            number += abbrev[i];

            // We are done... stop
            break;
        }
    }

    return number;
}

function tab(t) {
	var classList = document.getElementsByClassName("tab");
	for (var i = 0; i < classList.length; i++) {
		classList[i].style.display = "none";
	}
	document.getElementById(t).style.display = "";

	var menuList = document.getElementsByClassName('menu');
	var items = menuList[0].getElementsByTagName('li');
	for (var j = 0; j < items.length; j++) {
		items[j].classList.remove('is-active');
	}

	document.getElementById(t + 'Content').classList.add('is-active');
}

function subTab(tabName) {
	var tabs = document.getElementsByClassName('pSubTab');
	var tab;
	for (var i = 0; i < tabs.length; i++) {
		tab = tabs.item(i);
		if (tab.id === tabName) {
			tab.style.display = 'block';
		} else {
			tab.style.display = 'none';
		}
	}
}

load();
tab("basicrocket");
subTab("basicPUps");