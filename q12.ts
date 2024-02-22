// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

let nmes: string[] = ["Haris", "Umar", "Rayyan", "Maaz", "Aun"];

for(let nme of nmes){
    console.log(`Hi ${nme}.\nHow are you?\nIts a fine day.\nBye ${nme}`);
}