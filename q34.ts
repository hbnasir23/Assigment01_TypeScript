// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!

let favorite_pizzas: string[] = ["Cheesy", "Afghani", "Pepperoni"];

console.log("Pizza Names:");
for (let pizza of favorite_pizzas) {
    console.log(`I like ${pizza} pizza.\nI really love ${pizza} pizza!`);
    if (pizza === "Pepperoni") {
        console.log("The spicy pepperoni combined with gooey cheese is heavenly.");
    } else if (pizza === "Cheesy") {
        console.log("The simplicity of Cheesiness with fresh mushrooms classic.");
    } else if (pizza === "Afghani") {
        console.log("The combination of meats and veggies in Afghani pizza is irresistible.");
    }
}




