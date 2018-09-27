class Car {
    constructor (options) {
        this.color = options.color;
    }
}
changeColor(newColor) {
    this.color = newColor; 
    }
}


}

let car = new Car ('blue');

car.changeColor('red');

console.log(car);

// anywhere in the object wherever you say 'this' it means this object.




class Motorcycle extends Car {
    constructor (options){ 
        super (options); // new Car ()
        this.wheels=2; 
    
    
    }
}

let bike = new Motorcycle ('purple'); {
bike.changeColor('pink');
    console.log(bike);
}

// class Car {
   // Car.prototype
   //change color
 }

 class BankAccount {
// makes a network request get bank account (this.accountId)
    constructor (accountId) {
     this.accountId = accountId;    
     }
 }
 deposit(amount) {
     let account = BOA.account(this.accountId);
     account.send(amount);
}
withdrawl (){

}

clear() {

}    
close() {

}
let ba = new BankAccount ('123SDfihgia')
ba.deposit (1000000)


//Dicey Business
class Dice {
constructor(){
    this.number = randomNumber();
}
roll () {
    t
}
}