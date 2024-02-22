// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.


function show_magicians(magicians: string[]): void {
    let anotherList: string[] = []
    for (let magician of magicians) {
        let list: string[] = [magician];
        console.log(list);
        anotherList.push(magician);
    }
    console.log(anotherList);
}

let magicians: string[] = ["Harry Potter", "Tom Cruise", "Anonymous", "Peter Parker"];
show_magicians(magicians);
