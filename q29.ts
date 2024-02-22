// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

let favorite_fruits: string[] = ["banana", "mango", "strawberry"];

for (let fruit of favorite_fruits) {
    if (fruit === "banana") {
        console.log("You really like bananas!");
    }
    if (fruit === "apple") {
        console.log("You really enjoy apples!");
    }
    if (fruit === "strawberry") {
        console.log("You really eat strawberries!");
    }
    if (fruit === "orange") {
        console.log("You really like to eat oranges!");
    }
    if (fruit === "mango") {
        console.log("You really love mangoes!");
    }
}