function binarySearch(array, target) {
   if(!array.length) return -1

    return helper(array, target, 0, array.length - 1)
}

function helper(array, target, low, high){
    if(low > high) return -1
    
    const mid = Math.floor( (high + low ) / 2)
    
    if(array[mid] === target){
        return mid
    } else if( target < array[mid]){
        return helper(array, target, low, mid - 1)
    } else {
        return helper(array, target, mid + 1, high)
    }
    
    return -1
}

// Test Cases                             
console.log(binarySearch(array, 1)) // 0
console.log(binarySearch(array, 200)) // 8
console.log(binarySearch(array, 8)) // 4
console.log(binarySearch(array, 154)) // -1
