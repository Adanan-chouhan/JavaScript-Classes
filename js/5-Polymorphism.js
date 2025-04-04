class Animal{
    constructor(name){
        this.name = name;
    }

    makeSound(){
        console.log("Genric Animal Sound");
    }
}

class Dog extends Animal{
    constructor(name){
        super(name);
    }

    makeSound(){
        super.makeSound();
        console.log("Woof! Woof");
    }
}

const a1 = new Animal("Dom");
const a2 = new Dog("Jeff");

a1.makeSound();
console.log(a1);

a2.makeSound();
console.log(a2);


// Example
// class Animal {
//     speak() {
//       console.log("Animal is making a sound.");
//     }
//   }
  
//   class Dog extends Animal {
//     speak() {
//       console.log("Dog is barking.");
//     }
//   }
  
//   class Cat extends Animal {
//     speak() {
//       console.log("Cat is meowing.");
//     }
//   }
  
// //   function makeAnimalSpeak(animal) {
// //     animal.speak();  // यह जिस भी animal को pass करेंगे, उसकी speak method को call करेगा
// //   }
  
//   let dog = new Dog();
//   let cat = new Cat();
  

//   dog.speak();   // Output: Dog is barking.
//   cat.speak();   // Output: Cat is meowing.

// //   makeAnimalSpeak(dog); // Output: Dog is barking.
// //   makeAnimalSpeak(cat); // Output: Cat is meowing.
  