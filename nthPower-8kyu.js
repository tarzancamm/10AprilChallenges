function index(arr, n){
    if(arr[n] === undefined) {
        return -1
    }

    return Math.pow(arr[n], n)
}


console.log(index([1,1,1,1,1,1,1,1,1,2], 9)) // 512
console.log(index([75,68,35,61,9,36,89,0,30], 10)) // -1