// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
var cars = ["Toyota Corolla", "Honda City", "Kia Sportage", "Suzuki Cervo", "Chevrolet Tahoe"];
for (var _i = 0, cars_1 = cars; _i < cars_1.length; _i++) {
    var car = cars_1[_i];
    console.log("I would like to drive ".concat(car, ".\n").concat(car, " is the best car.\nI would love to own").concat(car, "."));
}
