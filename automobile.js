let automobile = {
    numberOfWheels : 4,
    numberOfEngines : 1,
    fuelType : "petrol",
    hasBrake : true,
    honk : function(){
        console.log("Honking sound")
    }
}


let car = Object.create(automobile);
car.numberOfSeats = 7;
car.maxSpeed = 180;
car.color = white;
car.honk();
console.log(car.color);
console.log(car.maxSpeed);
console.log(car);

function Bus(numberOfSeats,maxSpeed,color){
  Object.setPrototypeOf(this,automobile),
  this.numberOfSeats = numberOfSeats,
  this.maxSpeed = maxSpeed,
  this.color = color
}

let Bus1 = new Bus(60,200,yellow);
console.log(Bus1.numberOfSeats);
console.log(Bus1.color);




