// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
var nmes = ["Haris", "Umar", "Rayyan", "Maaz", "Aun"];
for (var _i = 0, nmes_1 = nmes; _i < nmes_1.length; _i++) {
    var nme = nmes_1[_i];
    console.log("Hi ".concat(nme, ".\nHow are you?\nIts a fine day.\nBye ").concat(nme));
}
