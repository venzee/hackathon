var map = function(arr, callback) {
    myArr = [];
    for (k = 0; k < arr.length; k++)
        myArr.push(callback(arr[k], k, arr));
    return myArr;
};

var reduce = function(arr, callback, val) {
    var result = (val === undefined) ? undefined : val;
    for (var k = 0; k < arr.length; k++) {
        if (result) result = callback.call(undefined, result, arr[k], k, arr);
        else result = arr[k];
    }
    return result;
};