var map = function(arr, callback) {
    myArr = [];
    for (k = 0; k < arr.length; k++)
        myArr.push(callback(arr[k], k, arr));
    return myArr;
};