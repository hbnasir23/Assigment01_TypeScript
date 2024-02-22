// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.



function toTitleCase(name: string): string {
     let separated: string[] = name.split(' ');
     for(let i = 0; i < separated.length; i++){
         if(i == 0){
             let word: string =  separated[i];
             separated[i] = word[0].toUpperCase() + word.substring(1).toLowerCase();
         }
         else{
             separated[i] = separated[i].toLowerCase();
         }
     }
     return separated.join(' ');
 }
 
let AnyName: string = "Haris Bin Nasir";

let NameLowerCase: string = AnyName.toLocaleLowerCase();
console.log(NameLowerCase);

let NameUpperCase: string = AnyName.toUpperCase();
console.log(NameUpperCase);


let NameTitleCase: string = toTitleCase(AnyName);
console.log(NameTitleCase);