let arr = [10, 20, 30, 40, 50];
let target = 30;

function findFirstOccurrence(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; 
        }
    }
    return -1;
}

console.log(findFirstOccurrence(arr, target));  
