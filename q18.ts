// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.


let placesToVisit: string[] = ["Gwadar","Paris","Amazon Forest","Swat","Makkah"];

console.log("Original Order:\n");
for (let place of placesToVisit) {
    console.log(place);
}


function bubbleSortForward(list: string[]): void {
    let n = list.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (list[j] > list[j + 1]) {
                let temp = list[j];
                list[j] = list[j + 1];
                list[j + 1] = temp;
            }
        }
    }
    console.log("\nAlphabetical Order:\n");
    console.log(list);
}

let placesToVisitCopy: string[] = placesToVisit.slice();
bubbleSortForward(placesToVisitCopy);
console.log(placesToVisit);


function bubbleSortReversed(list: string[]): void {
    let n = list.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (list[j] < list[j + 1]) { 
                let temp = list[j];
                list[j] = list[j + 1];
                list[j + 1] = temp;
            }
        }
    }
    console.log("\nReversed Alphabetical Order:\n");
    console.log(list);
    
}

bubbleSortReversed(placesToVisitCopy);
console.log(placesToVisit);

console.log("\nReverse order in original:\n");
bubbleSortReversed(placesToVisit);

console.log("\nReverse order again in original:\n");
bubbleSortReversed(placesToVisit);


console.log("\nSorting original:\n");
bubbleSortForward(placesToVisit);
