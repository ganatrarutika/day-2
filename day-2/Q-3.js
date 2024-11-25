let arr = [1, 2, 2, 3, 4, 2];
let target = 2;

function countOccurrences(arr, target) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            count++;
        }
    }

    return count;
}

console.log(countOccurrences(arr, target));  
