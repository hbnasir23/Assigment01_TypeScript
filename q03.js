// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
function toTitleCase(name) {
    var separated = name.split(' ');
    for (var i = 0; i < separated.length; i++) {
        if (i == 0) {
            var word = separated[i];
            separated[i] = word[0].toUpperCase() + word.substring(1).toLowerCase();
        }
        else {
            separated[i] = separated[i].toLowerCase();
        }
    }
    return separated.join(' ');
}
var AnyName = "Haris Bin Nasir";
var NameLowerCase = AnyName.toLocaleLowerCase();
console.log(NameLowerCase);
var NameUpperCase = AnyName.toUpperCase();
console.log(NameUpperCase);
var NameTitleCase = toTitleCase(AnyName);
console.log(NameTitleCase);
