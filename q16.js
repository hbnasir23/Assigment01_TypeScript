// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. 
// • Use append() to add one new guest to the end of your list. 
// • Print a new set of invitation messages, one for each person in your list.
var guestslist = ["Haris", "Yasir", "Nasir"];
for (var _i = 0, guestslist_1 = guestslist; _i < guestslist_1.length; _i++) {
    var guest = guestslist_1[_i];
    console.log("Hi ".concat(guest, ". You are cordially invited to dinner. Bye ").concat(guest));
}
console.log("\n".concat(guestslist[2], " cant come for some reason.\n"));
guestslist[2] = "Faraz";
for (var _a = 0, guestslist_2 = guestslist; _a < guestslist_2.length; _a++) {
    var guest = guestslist_2[_a];
    console.log("Hi ".concat(guest, ". You are cordially invited to dinner. Bye ").concat(guest));
}
console.log("\nHi everyone. I've found a bigger diner table. so I would be inviting more guests.\n");
guestslist.unshift("Sohail");
guestslist.push("Amir");
guestslist.splice(Math.floor(guestslist.length / 2), 0, "Sarfaraz");
for (var _b = 0, guestslist_3 = guestslist; _b < guestslist_3.length; _b++) {
    var guest = guestslist_3[_b];
    console.log("Hi ".concat(guest, ". You are cordially invited to dinner. Bye ").concat(guest));
}
