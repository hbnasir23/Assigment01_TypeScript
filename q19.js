// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
var guests_lst = ["Haris", "Yasir", "Nasir"];
for (var _i = 0, guests_lst_1 = guests_lst; _i < guests_lst_1.length; _i++) {
    var guest = guests_lst_1[_i];
    console.log("Hi ".concat(guest, ". You are cordially invited to dinner. Bye ").concat(guest));
}
console.log("\n".concat(guests_lst[2], " cant come for some reason.\n"));
guests_lst[2] = "Faraz";
for (var _a = 0, guests_lst_2 = guests_lst; _a < guests_lst_2.length; _a++) {
    var guest = guests_lst_2[_a];
    console.log("Hi ".concat(guest, ". You are cordially invited to dinner. Bye ").concat(guest));
}
console.log("\nHi everyone. I've found a bigger diner table. so I would be inviting more guests.\n");
guests_lst.unshift("Sohail");
guests_lst.push("Amir");
guests_lst.splice(Math.floor(guests_lst.length / 2), 0, "Sarfaraz");
for (var _b = 0, guests_lst_3 = guests_lst; _b < guests_lst_3.length; _b++) {
    var guest = guests_lst_3[_b];
    console.log("Hi ".concat(guest, ". You are cordially invited to dinner. Bye ").concat(guest));
}
console.log(guests_lst.length);
