// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.


function showmagicians(magicians: string[]): void {
    for (let magician of magicians) {
        let list: string[] = [magician];
        console.log(list);
    }
}

function make_great(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
    showmagicians(magicians);
}




let magicianss: string[] = ["Harry Potter", "Tom Cruise", "Anonymous", "Peter Parker"]

make_great(magicianss);

showmagicians(magicianss);
