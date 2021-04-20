function binarySearch(array, target) {
    if(!array.length) return -1
    
    let left = 0
    let right = array.length - 1
    
    while(left <= right){
        const mid = Math.floor(left + (( right - left ) / 2 ))
        if(array[mid] === target){
            console.log('check', array[mid] === target)
            return mid}
        
        else if(target < array[mid]) right = mid - 1
        else left = mid + 1
    }
    return -1
}

// Test Cases
var array = [1, 2, 3, 6, 8, 13, 113, 153, 200]
console.log(binarySearch(array, 1)) // 0
console.log(binarySearch(array, 200)) // 8
console.log(binarySearch(array, 8)) // 4
console.log(binarySearch(array, 154)) // -1
