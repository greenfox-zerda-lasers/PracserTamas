// Create a constructor for creating Aircrafts,
// and one for creating Carriers,
// based on the specification in the python exam: https://github.com/greenfox-academy/zerda-exam-python-retake

function Aircraft(type){
    this.type = type;
    this.ammo = 0;
    if(this.type === "F16"){
        this.maxAmmo = 8;
        this.baseDamage = 30;
    } else if(this.type === "F35"){
        this.maxAmmo = 12;
        this.baseDamage = 50;
    }
    this.toString = function(){
        return "Type:" + this.type + " Ammo: " + this.ammo + " Base damage: " + this.baseDamage + " All damage: " + (this.ammo * this.baseDamage);
    }
}

Aircraft.prototype.fight = function(){
    	var allDamage = this.ammo * this.baseDamage
        this.ammo = 0;
        return allDamage;
}

Aircraft.prototype.refill = function(newAmmo){
    var ammoNeed = this.maxAmmo - this.ammo;
    var tmp = (newAmmo - ammoNeed) >= 0;
    if(tmp){
        this.ammo += ammoNeed;
        return newAmmo - ammoNeed;
    } else {
        this.ammo += newAmmo;
        return 0;
    }
}

function Carrier(totalAmmo){
    this.aircrafts = [];
    this.totalAmmo = totalAmmo;
    this.hp = 3000;
    this.status = function(){
        if(this.hp <= 0){
            return "It's dead Jim :("
        } else {
            var totalDamge = 0;
            var totalAircrafts = "";
            for(var i = 0; i < this.aircrafts.length; i++){
                totalDamge += this.aircrafts[i].ammo * this.aircrafts[i].baseDamage
                totalAircrafts += this.aircrafts[i].toString() + "\n";
            }

            return "Aircraft count: " + this.aircrafts.length + " Ammo Storage: " + this.totalAmmo + " Total damage: " + totalDamge + " Health Remaining: " + this.hp + "\nAircrafts:\n" + totalAircrafts;
        }
    }
}

Carrier.prototype.add_aircraft = function(type){
    this.aircrafts.push(type);
}

Carrier.prototype.fill = function(){
    if (this.totalAmmo === 0){
        throw Error('No more ammo!');
    }
    for(var i = 0; i < this.aircrafts.length; i++){
      this.totalAmmo = this.aircrafts[i].refill(this.totalAmmo)
    }
}

Carrier.prototype.fight = function(){
    var allAircraftDamage = 0;
    for(var i = 0; i < this.aircrafts.length; i++){
        allAircraftDamage += this.aircrafts[i].fight();
    }
    return allAircraftDamage;
}

var aircraft = new Aircraft("F16")
var aircraft2 = new Aircraft("F16")
var aircraft3 = new Aircraft("F35")
console.log(aircraft.toString());
console.log(aircraft.refill(3));
console.log(aircraft.toString());
console.log(aircraft.refill(100));
console.log(aircraft.toString());
// console.log(aircraft.fight());
console.log(aircraft.toString());
var carrier = new Carrier(10000);
// carrier.add_aircraft(aircraft)
// carrier.add_aircraft(aircraft2)
carrier.add_aircraft(aircraft3)
console.log(carrier.status());

carrier.fill();
console.log(carrier.fight());
