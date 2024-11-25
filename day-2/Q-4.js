let arr = [1, 2, 3, 2, 4];
let target = 2;

function findLastOccurrence(arr, target) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === target) {
            return i; 
        }
    }
    
    return -1;  
}

console.log(findLastOccurrence(arr, target));  
