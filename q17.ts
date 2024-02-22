// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

let guests_list: string[] = ["Haris", "Yasir", "Nasir"];

for(let guest of guests_list){
    console.log(`Hi ${guest}. You are cordially invited to dinner. Bye ${guest}`);
}
console.log(`\n${guests_list[2]} cant come for some reason.\n`)

guests_list[2] = "Faraz"

for(let guest of guests_list){
    console.log(`Hi ${guest}. You are cordially invited to dinner. Bye ${guest}`);
}

console.log("\nHi everyone. I've found a bigger diner table. so I would be inviting more guests.\n");

guests_list.unshift("Sohail");
guests_list.push("Amir");
guests_list.splice(Math.floor(guests_list.length/2), 0, "Sarfaraz");

for(let guest of guests_list){
    console.log(`Hi ${guest}. You are cordially invited to dinner. Bye ${guest}`);
}

console.log("\nI am sorry. My table didn't arrive. I will only invite 2 guests.\n");

let ListLenght: number = guests_list.length;
for(let i = 0; i < (ListLenght-2); i++){
    console.log(`I am really sorry ${guests_list.pop()}. I can't invite you.`)
}

for(let guest of guests_list){
    console.log(`\nHi ${guest}. You are still invited to dinner`);
}

guests_list.pop();
guests_list.pop();

console.log(guests_list);