class Vehicle {

    constructor(type, model, parts, fuel) {
        this.type = type;
        this.mode = model;
        this.parts = parts;
        this.parts.quality = parts.engine * parts.power;

        this.fuel = fuel;
        
     
    }
}


drive(flueUsed){
    this.flue=flueUsed

}

 
let parts = {engine: 6, power: 100}
let vehicle = new Vehicle('a', 'b', parts, 200)
vehicle.drive(100)
console.log(vehicle.fuel)
console.log(vehicle.parts.quality)
 
