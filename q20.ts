// Think of something you could store in a Array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

let languages: string[] = ["Spanish","German","Russian","Urdu","French","Turkish"];
console.log("List of Countries:");
for (let language of languages) {
    console.log(language);
}