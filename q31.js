// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
var users = ["Haris", "Yasir", "Umar", "admin", "Rayyan"];
if (users.length > 0) {
    for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
        var user = users_1[_i];
        console.log("Hello, ".concat(user, "!"));
    }
}
else {
    console.log("We need to find some users!");
}
users = [];
if (users.length > 0) {
    for (var _a = 0, users_2 = users; _a < users_2.length; _a++) {
        var user = users_2[_a];
        console.log("Hello, ".concat(user, "!"));
    }
}
else {
    console.log("We need to find some users!");
}
