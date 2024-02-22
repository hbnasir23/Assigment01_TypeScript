// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
function shows_magicians(list) {
    return list;
}
function makes_great(magicians) {
    var modifiedMagicians = [];
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        modifiedMagicians.push("the Great " + magician);
    }
    return modifiedMagicians;
}
var originalMagicians = ["Harry Potter", "Tom Cruise", "Anonymous", "Peter Parker"];
var modifiedMagicians = shows_magicians(originalMagicians);
console.log(makes_great(modifiedMagicians));
console.log(originalMagicians);
