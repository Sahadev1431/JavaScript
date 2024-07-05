function First(arr, n = 1) {
    if (n === 1) {
        console.log("First element is", arr[0])
    }
    else {
        var newArr = []
        if (n > arr.length) {
            console.log("There are not", n, "elements in array")
        }
        else {
            for (let i = 0; i < n; ++i) {
                newArr.push(arr[i]);
            }
            console.log("First", n, "elements are", newArr)
        }
    }
}


let arr = [4, 56, 8, 9, 2, 5]
First(arr)
First(arr, 6)