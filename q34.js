// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
var favorite_pizzas = ["Cheesy", "Afghani", "Pepperoni"];
console.log("Pizza Names:");
for (var _i = 0, favorite_pizzas_1 = favorite_pizzas; _i < favorite_pizzas_1.length; _i++) {
    var pizza = favorite_pizzas_1[_i];
    console.log("I like ".concat(pizza, " pizza.\nI really love ").concat(pizza, " pizza!"));
    if (pizza === "Pepperoni") {
        console.log("The spicy pepperoni combined with gooey cheese is heavenly.");
    }
    else if (pizza === "Margherita") {
        console.log("The simplicity of Margherita with fresh tomatoes and basil is classic.");
    }
    else if (pizza === "Supreme") {
        console.log("The combination of meats and veggies in Supreme pizza is irresistible.");
    }
}
