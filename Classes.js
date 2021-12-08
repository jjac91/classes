class Vehicle{
    constructor(make, model, year){
        this.make = make
        this.model = model
        this.year = year
    }
    honk(){
        return "Beep"
    }
    toString(){
        `This vehicle is a ${year} ${make} ${model}`
    }
}

class Car extends Vehicle{
    constructor(make, model, year){
        super(make,model,year)
    }
    numWheels = 4
}

class Motorcycle extends Vehicle{
    constructor(make, model, year){
        super(make,model,year)
    }
    numWheels = 2
    revEngine(){
        return "VROOM!!!"
    }
}

class Garage{
    constructor(capacity){
        this.capacity = capacity
        this.vehicles = []
    }
    add(thing){
        if(thing instanceof Vehicle !== true){
            return "Only vehicles are allowed in here!"
        }
        if(this.vehicles.length >= this.capacity){
            return "Sorry, we're full"
        }
        this.vehicles.push(thing)
        return "Vehicle added"
    }
}