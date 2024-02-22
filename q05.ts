// Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.


let quote: string = "For to be free is not merely to cast off one's chains, but to live in a way that respects and enhances the freedom of others.";
let famous_person: string = "Nelson Mandela";

let message: string = `${famous_person} once said, "${quote}"`
console.log(message);