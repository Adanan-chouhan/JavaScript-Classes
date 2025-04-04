class square{
    constructor(width){
        this.width = width;
        this.height = width;
    }

    get area () {
        return this.width * this.height;
    }

    set area(area){
        this.width = Math.sqrt(area);
        this.height = this.width;  
    }
}

let square1 = new square(4);

// before set area area value is 16
console.log(square1.area); // 4 * 4 = 16

// set area 25 
square1.area = 25;

// After set area area value is 25 
console.log(square1.area);  // 25
console.log(square1.area);  // 25
console.log(square1.area);  // 25
console.log(square1.area);  // 25

// area width and height after 
console.log(square1.width);    // 5
console.log(square1.height);   // 5

// 2 => Example 
class Car {
    constructor(brand) {
      this._brand = brand; // underscore convention is used to denote a private property
    }
  
    // Getter method
    get brand() {
      return this._brand;
    }
  
    // Setter method
    set brand(newBrand) {
      if (newBrand.length > 0) {
        this._brand = newBrand;
      } else {
        console.log("Brand name can't be empty");
      }
    }
  }
  
  const myCar = new Car('Toyota');
  
  // Using getter to get the brand
  console.log(myCar.brand);  // Output: Toyota
  
  // Using setter to update the brand
  myCar.brand = 'Honda';
  console.log(myCar.brand);  // Output: Honda
  
  // Trying to set an empty brand
  myCar.brand = '';  // Output: Brand name can't be empty
  