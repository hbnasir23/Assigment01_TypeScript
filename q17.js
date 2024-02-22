// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
var guests_list = ["Haris", "Yasir", "Nasir"];
for (var _i = 0, guests_list_1 = guests_list; _i < guests_list_1.length; _i++) {
    var guest = guests_list_1[_i];
    console.log("Hi ".concat(guest, ". You are cordially invited to dinner. Bye ").concat(guest));
}
console.log("\n".concat(guests_list[2], " cant come for some reason.\n"));
guests_list[2] = "Faraz";
for (var _a = 0, guests_list_2 = guests_list; _a < guests_list_2.length; _a++) {
    var guest = guests_list_2[_a];
    console.log("Hi ".concat(guest, ". You are cordially invited to dinner. Bye ").concat(guest));
}
console.log("\nHi everyone. I've found a bigger diner table. so I would be inviting more guests.\n");
guests_list.unshift("Sohail");
guests_list.push("Amir");
guests_list.splice(Math.floor(guests_list.length / 2), 0, "Sarfaraz");
for (var _b = 0, guests_list_3 = guests_list; _b < guests_list_3.length; _b++) {
    var guest = guests_list_3[_b];
    console.log("Hi ".concat(guest, ". You are cordially invited to dinner. Bye ").concat(guest));
}
console.log("\nI am sorry. My table didn't arrive. I will only invite 2 guests.\n");
var ListLenght = guests_list.length;
for (var i = 0; i < (ListLenght - 2); i++) {
    var some = guests_list.pop();
    console.log("I am really sorry ".concat(some, ". I can't invite you. Bye ").concat(some, ". "));
}
for (var _c = 0, guests_list_4 = guests_list; _c < guests_list_4.length; _c++) {
    var guest = guests_list_4[_c];
    console.log("\nHi ".concat(guest, ". You are still invited to dinner"));
}
guests_list.pop();
guests_list.pop();
console.log(guests_list);
