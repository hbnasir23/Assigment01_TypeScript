// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
function shows_magicians(list: string[]): string[] {
    return list;
}

function makes_great(magicians: string[]): string[] {
    let modifiedMagicians: string[] = [];
    for (let magician of magicians) {
        modifiedMagicians.push("the Great " + magician);
    }
    return modifiedMagicians;
}

let originalMagicians: string[] = ["Harry Potter", "Tom Cruise", "Anonymous", "Peter Parker"];
let modifiedMagicians:string[] = shows_magicians(originalMagicians);

console.log(makes_great(modifiedMagicians));
console.log(originalMagicians);
