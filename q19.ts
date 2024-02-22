// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

let guests_lst: string[] = ["Haris", "Yasir", "Nasir"];

for(let guest of guests_lst){
    console.log(`Hi ${guest}. You are cordially invited to dinner. Bye ${guest}`);
}
console.log(`\n${guests_lst[2]} cant come for some reason.\n`)

guests_lst[2] = "Faraz"

for(let guest of guests_lst){
    console.log(`Hi ${guest}. You are cordially invited to dinner. Bye ${guest}`);
}

console.log("\nHi everyone. I've found a bigger diner table. so I would be inviting more guests.\n");

guests_lst.unshift("Sohail");
guests_lst.push("Amir");
guests_lst.splice(Math.floor(guests_lst.length/2), 0, "Sarfaraz");

for(let guest of guests_lst){
    console.log(`Hi ${guest}. You are cordially invited to dinner. Bye ${guest}`);
}

console.log(`Total numbers at the end are ${guests_lst.length}`);
