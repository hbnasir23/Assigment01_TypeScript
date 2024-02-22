// Think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

interface Cars {
    Name: string;
    Company: string;
    Color: string;
    RegistratationYear: number;
}

// Create book objects
let car1: Cars = {
    Name: "Corolla",
    Company: "Toyota",
    Color: "Black",
    RegistratationYear: 2012,
};

let car2: Cars = {
    Name: "Cervo",
    Company: "Suzuki",
    Color: "Grey",
    RegistratationYear: 2013,
};

let car3: Cars = {
    Name: "City",
    Company: "Honda",
    Color: "Grey",
    RegistratationYear: 2003,
};

console.log("Car 1:");
console.log(car1);
console.log("\Car 2:");
console.log(car2);
console.log("\nCar 3:");
console.log(car3);
