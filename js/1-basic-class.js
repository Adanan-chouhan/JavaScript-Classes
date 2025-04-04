class Rectangle {
    constructor(width, height, color) {
        // console.log("The Rectangle is being created");

        this.width = width;
        this.height = height;
        this.color = color;
    }

    getArea() {
        return this.width * this.height;   
     }

     printDecription(){
        console.log(`I am a rectangle of ${this.width} x ${this.height} am I am ${this.color}`);
     }
}

let myRectangle1 = new Rectangle(5, 3, "blue");
let myRectangle2 = new Rectangle(10, 8, "black");

// myRectangle1 call 
console.log(myRectangle1);

// myRectangle1 getArea Method call
console.log(myRectangle1.getArea());

// myRectangle2 printDecription Method call
myRectangle2.printDecription();
