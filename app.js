//  USING AN ARRAY INSIDE OF AN OBJECT
const adventurer = {
    name: "Randy",
    hitPoint: 10,
    belongings: ["sack", "sword", "potions", "daggers"],
    companion: {
        name: "ember",
        type: "dragon",
        belongings: ["potions", "elemental orbs", "sack"]
    }
};

// ACCESS THE VALUES IN THE PLAYERS BELONGINGS ARRAY
console.log(adventurer.belongings);

// ACCESS ADVENTURER'S FIRST BELONGING
console.log(`${adventurer.name}'s first belongin: ${adventurer.belongings[0]}`)

// ITERATE OVER AN ARRAY WITHIN AN OBJECT
for (let i =0; i<adventurer.belongings.length; i++) {
    console.log(adventurer.belongings[i])
};

// ACCESS NESTED ELEMENTS WITHIN OUR OBJECT
console.log(`${adventurer.name}'s companion's name is ${adventurer.companion.name}`);
console.log(`${adventurer.companion.name}'s belongings is ${adventurer.companion.belongings[2]}`);

//
const movies = [
    {title:"SpiderMan"},
    {title:"A Goofy Movie"},
    {title:"A Christmas Story"},
];

console.log(movies[0]);
console.log(movies[0].title);
console.log("-------------------------------------");
// LOOPING OVER ARRAY OF OBJECTS
for (let i=0; i < movies.length; i++) {
    console.log(movies[i].title);
};
console.log("-------------------------------------");

// COMBINE OBJECTS, ARRAYS AND FUNCTIONS
const foo ={
    arr: [1,2,3],
    obj: {
        prop: "My object's property"
    },
    doSomething: () => {
        console.log("I did something!");
    }
};

console.log(foo.arr[0]);
console.log(foo.obj.prop);
foo.doSomething();
console.log("-------------------------------------");

// AN ARRAY OF ARRAYS
const bar = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    () => {
        console.log("I am a function within this array!");
    },
];

console.log(bar[0]);
console.log(bar[0][1]);
console.log(bar[3]());
console.log("-------------------------------------");

// CREATING VIDEOGAME CHARACTERS USING FUNCTIONS
const player = {
    name: 'Josh the great',
    health: 1000,
    power: 1000,
    stamina: 1000
  }

const bigBadBoss = {
name: 'Magnardo the Merciless',
health: 1000000000000000000,
power: 10000000000000000,
stamina: Infinity
}
// CAN BE EXTREMELY TEDIOUS, ESPECIALLY WITH HUNDREDS
//  OF PLAYERS AND CHARACTERS

// CEREATING THESE OBJECTS USING CLASSES MAKES THE WORK
// A LOT LESS TEDIOUS
class Character {
    constructor(name, age=20, arms=2, legs=2, eyes="brown", hair="black", lovesDogs, lovesCats) {
        this.name = name;
        this.arms = arms;
        this.eyes = eyes;
        this.hair = hair;
        this.legs = legs;
        this.lovesDogs = lovesDogs || false;
        this.lovesCats = lovesCats || true;
    };
    
    greet(otherCharacter) {
        console.log(`Hello, ${otherCharacter}`);
    };

    smite () {
        console.log(`I smite thee, vile creature!!`)
    };

    changeHairColor(newColor) {
        this.hair = newColor;
    };
};

const Alexander = new Character("Alexander", 25, 2, 2, "red", "grey");
const Brock = new Character();

console.log(Alexander);
console.log(typeof Alexander);
Alexander.greet("Brock");
Brock.greet("Alexander");
Brock.smite();
Alexander.changeHairColor("purple");
console.log(Alexander);
console.log("-------------------------------------");

class Hobbit extends Character {
    constructor(name, age, eyes, hair) {
        super(name, age, eyes, hair)
        this.skills= ["thievery", "speed", "willpower"]
    }
    steal() {
        console.log("Let's get away!")
    }

    smite() {
        super.smite();
        this.steal();
    }
}

const frodo = new Hobbit("Frodo", 30, 2, 2, "blue", "black");
console.log(frodo);
frodo.greet("Human");
frodo.smite();
console.log("-------------------------------------");

// FACTORY FUNCTIONS
class Car {
    constructor(make, vin) {
        this.make=make;
        this.vin=vin;
    }
    // METHODS
    drive() {
        console.log("Vroom, vroom!");
    }
}

const mazda= new Car("Mazda", 123456789);
console.log(mazda);

class Factory {
    constructor(company) {
        this.company=company;
        this.cars=[]
    }

    generateCar() {
        const newCar = new Car(this.company, this.cars.length);
    }

    findCar (index) {
        return this.cars[index]
    }
}

const tesla = new Factory("Tesla");
console.log(tesla);
tesla.generateCar();
tesla.generateCar();
tesla.generateCar();
tesla.generateCar();
tesla.generateCar();
console.log(tesla);
console.log(tesla.findCar(1));

const porsche = new Factory("Porsche");
porsche.generateCar();
porsche.generateCar();
porsche.generateCar();
porsche.generateCar();
console.log(porsche);
console.log("-------------------------------------");


// CREATING A PERSON FACTORY AND A SUPERHERO
class Person {
    constructor(name, age, eyeColor, hair,) {
        this.name=name;
        this.age=age;
        this.hair=hair;
        this.eyeColor=eyeColor;
    };

    static eyeColor() {
        return ["brown", "blue", "green"];
    };
};

class SuperHero extends Person {
};

const superman = new SuperHero("Clark Kent", 30, Person.eyeColor()[1], "black");
console.log(superman);