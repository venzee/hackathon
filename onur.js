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

var uniq = function(arr) {
    var helperArr = [];
    for (i = 0, j = arr.length; i < j; i++)
        if (helperArr.indexOf(arr[i]) === -1 && arr[i] !== '') helperArr.push(arr[i]);
    return helperArr;
}