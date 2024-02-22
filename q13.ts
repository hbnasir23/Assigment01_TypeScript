// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

let cars: string[] = ["Toyota Corolla", "Honda City", "Kia Sportage", "Suzuki Cervo","Chevrolet Tahoe"];

for (let car of cars) {
    console.log(`I would like to drive ${car}.\n${car} is the best car.\nI would love to own ${car}.`);
}
