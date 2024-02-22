// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. 
// • Use append() to add one new guest to the end of your list. 
// • Print a new set of invitation messages, one for each person in your list.

let guestslist: string[] = ["Haris", "Yasir", "Nasir"];

for(let guest of guestslist){
    console.log(`Hi ${guest}. You are cordially invited to dinner. Bye ${guest}`);
}
console.log(`\n${guestslist[2]} cant come for some reason.\n`)

guestslist[2] = "Faraz"

for(let guest of guestslist){
    console.log(`Hi ${guest}. You are cordially invited to dinner. Bye ${guest}`);
}

console.log("\nHi everyone. I've found a bigger diner table. so I would be inviting more guests.\n");

guestslist.unshift("Sohail");
guestslist.push("Amir");
guestslist.splice(Math.floor(guestslist.length/2), 0, "Sarfaraz");

for(let guest of guestslist){
    console.log(`Hi ${guest}. You are cordially invited to dinner. Bye ${guest}`);
}