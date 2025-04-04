class person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    describe() {
        console.log(`I am ${this.name} and I am ${this.age} year old`);
    }
}

class programmer extends person {
    constructor(name, age, yearOfExperience) {
        super(name, age);

        this.yearOfExperience = yearOfExperience;
    }

    code() {
        console.log(`${this.name} is coding`);
    }
}

const person1 = new person("Jeff", 45);
const programmer1 = new programmer("Dom", 23, 3);

// person1.code();      // not run this code becuse code is programer class method not a person class method
person1.describe();       // Done
console.log(person1);

programmer1.describe();  // Done
console.log(programmer1);

programmer1.code();       // Done

// Example
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {

    constructor(name, breed) {
        super(name);  // Animal kay constructore ko call keraga
        this.breed = breed;
    }



    speak() {
        super.speak();  // Animal class kay speak method ko call keraga
        console.log(`${this.name} barks.`);
    }
}

let dog = new Dog('Max', 'Golden Retriever');
dog.speak(); // Output: Max makes a noise. Max barks.
