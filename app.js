let p1 = {
    name: 'Beyonce',
    sayHello: function () {
        alert(`Hello! My name is ${this.name.first} .`);
    }

};
let p2 = {
    name: 'Jay',
    sayHello: function () {
        alert(`Hello! My name is ${this.name.first}.`);
    }
};

let p3 = {
    name: 'Michael',
    sayHello: function () {
        alert(`Hello! My name is ${this.name.first}.`);
    }
};
let p4 = {
    name: 'Blue',
    sayHello: function () {
        alert(`Hello! My name is ${this.name.first}.`);
    }
};
let p5 = {
    name: 'Havana',
    sayHello: function () {
        alert(`Hello! My name is ${this.name.first}.`);
    }
};
p1.sayHello();
p2.sayHello();
p3.sayHello();
p4.sayHello();
p5.sayHello();

function person(name, age, city) {
    this.name = name
    this.age = age
    this.city = city
}
person.prototype.sayHello = function () {
    alert('Hey! My name is' + this.name + '! I am' + this.age + 'years old and live in' this.city.);
}
let p1 = new Person('Beyonce', 37, Houston);
p1.sayHello();


let p2 = new Person('Jay', 49, New York);
p2.sayHello();

let p3 = new Person('Michael', 50, Gary);
p3.sayHello();

let p4 = new Person('Blue', 6, California);
p4.sayHello();

let p5 = new Person('Havana', 100, Havana);
p5.sayHello();

// Inheritance
class Vehicle {
    truck.aboutVehicle('Truck', Ford, 18)
    console.log(truck)
}
function newTruck () {
    truck.call(this);
}

Class Sedans extends Vehicle {
    constructor (medium);
    super (mpg);
}
Class Motorcycles extends Vehicle {
    constructor (handlebars);
    super (Doors=null);
}
