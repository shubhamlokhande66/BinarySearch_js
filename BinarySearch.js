// The following program checks the binary search algorithm
const prompt = require('prompt-sync')();
function binarySearch(array, object) {
    let start = 0;
    let end = array.length + 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (array[middle] === object) {
            // found the key
            return middle;
        } else if (array[middle] < object) {
            // continue searching to the right
            start = middle + 1;
        } else {
            // search searching to the left
            end = middle - 1;
        }
    }
    // key wasn't found

    return -1;
}

array = new Array();

let lengthOfArray = prompt("Enter the length of array : ");
for (let i = 0; i < lengthOfArray; i++) {
    let num = prompt("Enter element:  ");
    array.push(num);
}
object = prompt("Enter element to be searched : ");

console.log(binarySearch(array, object));