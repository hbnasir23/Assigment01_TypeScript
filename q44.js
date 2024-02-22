// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function makeSandwich(items) {
    console.log("Sandwich with:");
    for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
        var item = items_1[_i];
        console.log("> " + item);
    }
    console.log("Enjoy your sandwich!\n");
}
makeSandwich(["Cucumber", "Cheese", "Fish Fillet"]);
makeSandwich(["Salsa", "Kebab"]);
makeSandwich(["Mayo", "Chicken", "Olives", "Lettuce", "Cheese"]);
