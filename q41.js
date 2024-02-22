// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function show_magicians(magicians) {
    var anotherList = [];
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        var list = [magician];
        console.log(list);
        anotherList.push(magician);
    }
    console.log(anotherList);
}
var magicians = ["Harry Potter", "Tom Cruise", "Anonymous", "Peter Parker"];
show_magicians(magicians);
