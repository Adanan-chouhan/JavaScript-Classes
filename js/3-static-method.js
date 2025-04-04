class square {
    constructor(width) {
        this.width = width;
        this.height = width;
    }

    static equals(a, b) {
        return a.width * a.height === b.width * b.height;
    }

    static isValidDimension(width, height) {
        return width === height;
    }

}

let square1 = new square(6);
let square2 = new square(6);

console.log(square.equals(square1, square2));
console.log(square.isValidDimension(7, 7));

// 2 => Example
class Calculator {
    // Static method to add two numbers
    static add(a, b) {
      return a + b;
    }
  
    // Static method to subtract two numbers
    static subtract(a, b) {
      return a - b;
    }
  }
  
  // Calling static methods directly on the class
  console.log(Calculator.add(5, 3));      // Output: 8
  console.log(Calculator.subtract(10, 4)); // Output: 6
  
  // You can't call static methods on an instance of the class
  const calc = new Calculator();
//   console.log(calc.add(5, 3)); // Error: calc.add is not a function
  