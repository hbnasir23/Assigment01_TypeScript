// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
var guestlist = ["Haris", "Yasir", "Nasir"];
for (var _i = 0, guestlist_1 = guestlist; _i < guestlist_1.length; _i++) {
    var guest = guestlist_1[_i];
    console.log("Hi ".concat(guest, ". You are cordially invited to dinner. Bye ").concat(guest));
}
console.log("\n".concat(guestlist[2], " cant come for some reason.\n"));
guestlist[2] = "Faraz";
for (var _a = 0, guestlist_2 = guestlist; _a < guestlist_2.length; _a++) {
    var guest = guestlist_2[_a];
    console.log("Hi ".concat(guest, ". You are cordially invited to dinner. Bye ").concat(guest));
}
