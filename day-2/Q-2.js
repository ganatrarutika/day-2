const arr = [3, 7, 1, 5, 9, 0, 2];
function findMaxMin(arr) {
    if (arr.length === 0) {
        return "Array is empty"; 
    }

    let max = arr[0]; 
    let min = arr[0]; 

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];  
        }
        if (arr[i] < min) {
            min = arr[i];  
        }
    }

    return `Maximum: ${max}, Minimum: ${min}`;
}

console.log(findMaxMin(arr));  
