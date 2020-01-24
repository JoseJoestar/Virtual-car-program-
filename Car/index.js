import "./styles.css";
import "./bootstrap.css";
//import Car from "./car.js";
//import DashBoard from "./dashboard.js"

function DashBoard() {
  this.stations = [107.5, 96.3, 105.1, 95.7, 100.3];
  this.favorites = [100.3];
  this.currentStation = 107.5;
  this.currentVolume = 5; //out of 10
  this.power = false;
  this.radioStatus = false;
  this.engineStatus = false;
  this.milesOnEngine = 0;
  this.statusOfWiper = false;
  this.statusOfHeat = false;
  this.statusOfAC = false;
  this.currentVent = "Off";
  this.currentGear = "Park";

  this.display = null;
  this.targetFavElement = null;

  this.Gears = [
    "Park",
    "Neutral",
    "First",
    "Second",
    "Third",
    "Fourth",
    "Fifth"
  ];
  this.Vents = ["Head", "Legs", "Defrost", "Head and Legs", "Off"];
}

//var display = document.getElementById("display");

DashBoard.prototype.log = function(message) {
  console.log(message);
  var p = document.createElement("p");
  p.textContent = message;
  this.display.append(p);
};

//dashBoard.prototype.
DashBoard.prototype.setPower = function(powerLevel) {
  this.power = powerLevel;
  this.log("power is " + this.power);
};

DashBoard.prototype.togglePower = function() {
  this.power = !this.power;
  if (this.power === true) {
    this.log("Power On");
  } else {
    this.log("Power off");
  }
};

DashBoard.prototype.powerOff = function() {
  this.power = false;
  this.log("Car power is off.");
};

DashBoard.prototype.powerOn = function() {
  this.power = true;
  this.log("Car power is on");
  this.statuses();
};

DashBoard.prototype.leftBlinker = function() {
  if (this.power === true) {
    this.log("your left blinker is on");
  } else {
    this.log("Car is off blinkers wont work");
  }
};

DashBoard.prototype.rightBlinker = function() {
  if (this.power === true) {
    this.log("your right blinker is on");
  } else {
    this.log("Car is off blinkers wont work");
  }
};

DashBoard.prototype.emergencyLights = function() {
  this.log(
    "you turn your emergency lights on, which work regardless if car is on or off"
  );
};

DashBoard.prototype.headLights = function() {
  if (this.power === true) {
    this.log("your lights are so bright they are blinding on coming traffic");
  } else {
    this.log(
      "there is no power for those Xenon headlights you got (thankfully)"
    );
  }
};

DashBoard.prototype.wiper = function() {
  if (this.statusOfWiper === true) {
    this.wiperOn();
  } else {
    this.wiperOff();
  }
};

DashBoard.prototype.wiperOn = function() {
  if (this.power === true) {
    this.statusOfWiper = true;
    this.log("your wipers are on");
  } else {
    this.log("no power wipers cannot turn on");
  }
};

DashBoard.prototype.wiperOff = function() {
  if (this.power === true) {
    this.statusOfWiper = false;
    this.log("your wipers are off");
  } else {
    this.log("no power so wipers cant work anyway");
  }
};

DashBoard.prototype.getIndexGears = function(whichGear) {
  var foundIndex = null;

  for (var g = 0; g < this.Gears.length; g++) {
    var gear = this.Gears[g];
    if (gear === whichGear) {
      foundIndex = g;
      break;
    }
  }
  return foundIndex;
};

DashBoard.prototype.printGears = function() {
  this.log("-----------the Gears are below:--------");
  for (var g = 0; g < this.Gears.length; g++) {
    var gear = this.Gears[g];
    this.log(gear);
  }
};

DashBoard.prototype.printStations = function() {
  this.log("-----------the Radio Stations are below:--------");
  for (var s = 0; s < this.stations.length; s++) {
    var station = this.stations[s];
    this.log(station);
  }
};

DashBoard.prototype.turnRadioOn = function() {
  if (this.power === true) {
    this.radioStatus = true;
    this.log("Radio is on.");
  } else {
    this.log("no power so cannot turn on radio");
  }
};

DashBoard.prototype.turnRadioOff = function() {
  if (this.power === true) {
    this.radioStatus = false;
    this.log("Radio is off.");
  } else {
    this.log("no power so radio is off anyway");
  }
};

DashBoard.prototype.radio = function() {
  if (this.radioStatus === true) {
    this.turnRadioOn();
    this.tuneStation(this.currentStation);
  } else {
    this.turnRadioOff();
  }
};

DashBoard.prototype.addStation = function(newStation) {
  this.stations.push(newStation);
};

DashBoard.prototype.anyStation = function(stationNum) {
  var stationExist = false;
  for (var i = 0; i < this.stations.length; i++) {
    var station = this.stations[i];
    if (stationNum === station) {
      stationExist = true;
      break;
    }
  }
  return stationExist;
};
//------------------

DashBoard.prototype.seekStation = function() {
  for (var i = 0; i < this.stations.length; i++) {
    var station = this.stations[i];
    this.tuneStation(station);
    //this.log("you are tuned into " + station);
  }
};

DashBoard.prototype.tuneStation = function(stationNum) {
  if (this.radioStatus === false && this.power === false) {
    this.log("Can't Tune in, Radio Power and car power is off");
    return;
  }
  if (this.radioStatus === false && this.power === true) {
    this.log("Car is on, but you can't tune in because Radio is off");
    return;
  }
};

DashBoard.prototype.volumeIncrease = function(volume) {
  if (this.power === true && this.radioStatus === true) {
    var temp = this.currentVolume + volume;
    if (temp >= 10) {
      this.currentVolume = 10;
    } else {
      this.currentVolume = temp;
    }
    this.log("volume is now " + this.currentVolume);
  } else {
    this.log("How you gonna set the volume with no power?");
  }
  /*if (power === false) {
    log("How you gonna set the volume with no power?");
  } else {
    if (radioStatus === true) {
      var temp = currentVolume + volume;
      if (temp >= 10) {
        currentVolume = 10;
      } else {
        currentVolume = temp;
      }
      log("volume is now " + currentVolume);
    }else{
      log("Power is on, but radio is off");
    }
  }*/
};

DashBoard.prototype.volumeDecrease = function(volume) {
  if (this.power === false) {
    this.log("How you gonna set the volume with no power?");
  } else {
    var temp = this.currentVolume - volume;
    if (temp <= 0) {
      this.currentVolume = 0;
    } else {
      this.currentVolume = temp;
    }
    this.log("volume is now " + this.currentVolume);
  }
};

DashBoard.prototype.heat = function() {
  if (this.statusOfHeat === true) {
    this.heatOn();
  } else {
    this.heatOff();
  }
};

DashBoard.prototype.heatOn = function() {
  if (this.power === true) {
    this.ACOff();
    this.statusOfHeat = true;
    this.log("Heater is on, warming up car.");
  } else {
    this.log("no power cannot turn on heat.");
  }
};

DashBoard.prototype.heatOff = function() {
  if (this.power === true) {
    this.statusOfHeat = false;
    this.log("Heater is off.");
  } else {
    this.log("Power is off anyway so heater is off");
  }
};

DashBoard.prototype.ACOn = function() {
  if (this.power === true) {
    this.heatOff();
    this.statusOfAC = true;
    this.log("A/C is now on, take a chill pill.");
  } else {
    this.log("no power so A/C cannot turn on.");
  }
};

DashBoard.prototype.ACOff = function() {
  if (this.power === true) {
    this.statusOfAC = false;
    this.log("A/C is off.");
  } else {
    this.log("no power so A/C is off anyway.");
  }
};

DashBoard.prototype.AC = function() {
  if (this.statusOfAC === true) {
    this.ACOn();
  } else {
    this.ACOff();
  }
};

DashBoard.prototype.printVents = function() {
  this.log("-----------the Vents are below:--------");
  for (var v = 0; v < this.Vents.length; v++) {
    var vent = this.Vents[v];
    this.log(vent);
  }
};

DashBoard.prototype.ventCheck = function(selection) {
  var ventExist = false;

  for (var v = 0; v < this.Vents.length; v++) {
    var vent = this.Vents[v];
    if (selection === vent) {
      ventExist = true;
      break;
    }
  }
  return ventExist;
};

DashBoard.prototype.setVent = function(selection) {
  if (this.power === true) {
    if (this.statusOfAC === true && this.statusOfHeat === true) {
      this.log("Cannot set vent, both A/C and Heat cannot be on.");
      return;
    }
    if (this.statusOfAC === false && this.statusOfHeat === false) {
      this.log("Setting vent but Neither A/C or Heat is on.");
    }
    var valid = this.ventCheck(selection);
    if (valid === true) {
      this.currentVent = selection;
      this.log("vent is set to " + this.currentVent);
    } else {
      this.log("Not a valid vent selection.");
    }
  } else {
    this.log("no power unable to set vent.");
  }
};

DashBoard.prototype.vent = function() {
  this.setVent(this.currentVent);
};

DashBoard.prototype.gearExists = function(whichGear) {
  var gearExist = false;
  for (let g = 0; g < this.Gears.length; g++) {
    var gear = this.Gears[g];
    if (gear === whichGear) {
      // with each gear, comparing to one i wanna match (which gear)
      gearExist = true;
      break; // to get out of the loop if a match is found
    }
  }
  return gearExist;
};

DashBoard.prototype.gear = function() {
  if (this.currentGear === "Park") {
    this.log("you are good to go");
  } else {
    this.log("slow down bucko you aren't in the right gear");
    this.currentGear = "Park";
    this.log("Shifting to park, you may now continue.");
  }
};

DashBoard.prototype.shiftTest = function(whichGear) {
  var shiftable = false;
  var shiftToIndex = this.getIndexGears(whichGear);

  if (shiftToIndex === null) {
    return false;
  }
  var currentIndex = this.getIndexGears(this.currentGear);
  var changeIndex = shiftToIndex - currentIndex; //if positive, shifting up, negative shifting down.
  var isUp = changeIndex > 0;
  var isDown = changeIndex < 0;
  if (isUp === true) {
    shiftable = changeIndex === 1;
  } else if (isDown === true) {
    shiftable = changeIndex === -1;
  }

  return shiftable;
};

DashBoard.prototype.setGear = function(whichGear) {
  var gearExist = this.gearExists(whichGear);
  if (this.power === true && this.engineStatus === true && gearExist === true) {
    var shiftable = this.shiftTest(whichGear);
    if (shiftable === true) {
      this.currentGear = whichGear;
      this.log("Shifting into " + whichGear);
    } else {
      this.log("not shiftable");
    }
  } else {
    if (this.power === false) {
      this.log("you have NO POWER you can't shift!");
    } else if (this.engineStatus === false) {
      this.log("Your engine isn't on how you gonna shift?!");
    } else if (gearExist === false) {
      this.log("That gear doesnt exist");
    } else {
      this.log("somethings wrong with your car bro.");
    }
  }
};

DashBoard.prototype.engineOn = function() {
  if (this.power === true) {
    this.engineStatus = true;
    this.log("Cranking Engine... Engine on");
  } else {
    this.log("no power so cannot start engine");
  }
};

DashBoard.prototype.engineStop = function() {
  if (this.power === false) {
    this.engineStatus = false;
    this.log("No Power so engine is already off.");
  } else {
    this.log("Engine is off");
  }
};

DashBoard.prototype.engineMiles = function(Miles) {
  if (this.engineStatus === true) {
    //var mile = milesOnEngine;
    this.milesOnEngine = this.milesOnEngine + Miles;
    this.log("miles on engine are now " + this.milesOnEngine);
  }
};

DashBoard.prototype.drive = function(milesToDrive) {
  if (this.power === true && this.engineStatus === true) {
    this.engineMiles(milesToDrive);
  }
};

DashBoard.prototype.turnKey = function() {
  this.powerOn();
  this.radio();
  this.printFavorites();
  this.wiper();
  this.vent();
  this.heat();
  this.AC();
  this.engineOn();
  this.gear();
};

DashBoard.prototype.turnKeyOff = function() {
  this.engineStop();
  this.powerOff();
  this.turnRadioOff();
};

DashBoard.prototype.statuses = function() {
  this.log("current tuned radio station is " + this.currentStation);
  this.log("Radio is " + this.onOrOff(this.radioStatus));
  this.log("A/C is " + this.onOrOff(this.statusOfAC));
  this.log("Heater is " + this.onOrOff(this.statusOfHeat));
  this.log("wipers are " + this.onOrOff(this.statusOfWiper));
  this.log("Engine is " + this.onOrOff(this.engineStatus));
};

DashBoard.prototype.onPowerOn = function() {
  this.powerOn();
  this.statuses();
};

DashBoard.prototype.onOrOff = function(status) {
  var result = status === true ? "on" : "off";
  return result;
  //return (status === true) ? "on" : "off"
};

DashBoard.prototype.printFavorites = function() {
  var thisDashBoard = this;
  for (var f = 0; f < this.favorites.length; f++) {
    var favs = this.favorites[f];
    var button = document.createElement("button");
    button.setAttribute("id", "favorite-" + f);
    button.textContent = favs;
    button.addEventListener("click", function(){
      thisDashBoard.tuneStation(favs)
    });
    thisDashBoard.targetFavElement.append(button);
  }
};

DashBoard.prototype.addFavorites = function(){
    console.log("hit")
  this.favorites.push(this.currentStation);
  console.log("added current sation to favorites");
  this.printFavorites();
}



function Car(color, year, name, make, model) {
  //var car = {};
  //car.Name = name;
  //car.Color = color;
  //Car.Features = ["sunroof", "bluetooth radio", "navigation"];

  //return car;
  this.Name = name;
  this.Color = color;
  this.Make = make;
  this.Model = model;
  this.Year = year;
  this.Features = ["sunroof", "bluetooth radio", "navigation"];
  this.Dashboard = new DashBoard();
  console.log(this.DashBoard)
}

Car.prototype.getNameandColor = function() {
  return this.Name + " " + this.Color;
};

Car.prototype.getInformation = function() {
  return (
    this.Color +
    " " +
    this.Year +
    " " +
    this.Name +
    " " +
    this.Make +
    " " +
    this.Model
  );
};

Car.prototype.printFeatures = function() {
  for (var f = 0; f < this.Features.length; f++) {
    var feature = this.Features[f];
    console.log(feature);
  }
};

Car.prototype.addFeature = function(feature) {
  this.Features.push(feature);
};

var buttonAssignment = function(Id, Action, functionCall, logFunction) {
  var Identity = document.getElementById(Id);
  if (Identity !== null) {
    Identity.addEventListener(Action, function() {
      functionCall();
    });
  } else logFunction("ERROR");
};

var lexus = new Car();
lexus.Dashboard.display = document.getElementById("display");
lexus.Dashboard.targetFavElement = document.getElementById("addToFavorite");

document.getElementById("turnKeyOn").addEventListener(
  "click",
  function() {
    lexus.Dashboard.turnKey();
  },
  lexus.log
);

document.getElementById("addToFavorite")
.addEventListener("click", function(){
  lexus.Dashboard.addFavorites();
});

/*
buttonAssignment("radioOnButton", "click", lexus.turnRadioOn, lexus.log);
buttonAssignment("radioOffButton", "click", lexus.turnRadioOff, lexus.log);
buttonAssignment(
  "radioVolumeUpButton",
  "click",
  lexus.onVolumeIncrease,
  lexus.log
);
buttonAssignment(
  "radioVolumeDownButton",
  "click",
  lexus.onVolumeDecrease,
  lexus.log
);
buttonAssignment("carPowerOnButton", "click", lexus.onPowerOn, lexus.log);
buttonAssignment("carPowerOffButton", "click", lexus.onPowerOff, lexus.log);
buttonAssignment("carEngineOnButton", "click", lexus.engineOn, lexus.log);
buttonAssignment("carEngineOffButton", "click", lexus.engineStop, lexus.log);

buttonAssignment("headVentButton", "click", lexus.onSetVentHead, lexus.log);*/
//Above and below are same way to set vent. either an anonymous function or
//creating a functon to call on
/*buttonAssignment("legVentButton", "click", function() {
  this.setVent("Legs");
});
buttonAssignment("headAndLegsVentButton", "click", function() {
  this.setVent("Head and Legs");
});
buttonAssignment("defrostVentButton", "click", function() {
  this.setVent("Defrost");
});
buttonAssignment("offVentButton", "click", function() {
  this.setVent("Off");
});

buttonAssignment("P", "click", function() {
  this.setGear("Park");
});
buttonAssignment("N", "click", function() {
  this.setGear("Neutral");
});
buttonAssignment("1", "click", function() {
  this.setGear("First");
});
buttonAssignment("2", "click", function() {
  this.setGear("Second");
});
buttonAssignment("3", "click", function() {
  this.setGear("Third");
});
buttonAssignment("4", "click", function() {
  this.setGear("Fourth");
});
buttonAssignment("5", "click", function() {
  this.setGear("Fifth");
});

buttonAssignment("stationOneButton", "click", function() {
  this.tuneStation(107.5);
});
buttonAssignment("stationTwoButton", "click", function() {
  this.tuneStation(96.3);
});
buttonAssignment("stationThreeButton", "click", function() {
  this.tuneStation(105.1);
});
buttonAssignment("stationFourButton", "click", function() {
  this.tuneStation(95.7);
});
buttonAssignment("stationFiveButton", "click", function() {
  this.tuneStation(100.3);
});*/
/*
buttonAssignment("leftBlinkerButton", "click", lexus.leftBlinker, lexus.log);
buttonAssignment("rightBlinkerButton", "click", lexus.rightBlinker, lexus.log);
buttonAssignment(
  "emergencyLightsButton",
  "click",
  lexus.emergencyLights,
  lexus.log
);
buttonAssignment("headlightsButton", "click", lexus.headLights, lexus.log);
*/
