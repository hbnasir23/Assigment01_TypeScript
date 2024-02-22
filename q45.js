// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
function store_Car_Info(manufacturer, modelName, color, year) {
    var car_Info = { manufacturer: manufacturer, modelName: modelName };
    if (color !== undefined) {
        car_Info.color = color;
    }
    if (year !== undefined) {
        car_Info.year = year;
    }
    return car_Info;
}
var car = store_Car_Info("Toyota", "Corolla", "Black", 2012);
console.log(car); // Output the Object directly
var car1 = store_Car_Info("Suzuki", "Cervo", "Grey", 2013);
console.log(car1); // Output the Object directly
var car2 = store_Car_Info("Toyota", "Corolla", "BlSilverack", 2003);
console.log(car2); // Output the Object directly
