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

var merge = function(obj1, obj2){

	var result = {};

	for (var key in obj1) {

		if(Array.isArray(obj1[key])) result[key] = mergeArrays(obj1[key], obj2[key]);
		else if(isObject(obj1[key])) result[key] = mergeObjects(obj1[key], obj2[key]);
		else result[key] = obj2[key];

	}	

	return result;
  
}

// My Helper Functions

function isObject(x){

	if(Array.isArray(x) === false && typeof x === 'object') return true;
	else return false;

}

function mergeArrays(arr1, arr2){

	var maxLength = Math.max(arr1.length, arr2.length);
	var result = [];

	for(k=0; k<maxLength; k++){

		// One of the elements is undefined in that index

		if(arr1[k] === undefined) result.push([arr2[k]]);
		else if(arr2[k] === undefined) result.push([arr1[k]]);

		// 2 elements in the same index are not undefined 

		else {

			if(isObject(arr1[k]) && isObject(arr2[k])){

				result.push(mergeObjects(arr1[k], arr2[k]));

			}

			else if(Array.isArray(arr1[k]) && Array.isArray(arr2[k])){


				mergeArrays(arr1[k], arr2[k]);

			}

			else {

				result.push([arr1[k], arr2[k]]);

			}

		}


	}

	return result;

}

function mergeObjects(obj1, obj2){

	var tmpObj = {};
    for (var key in obj1) {

    	tmpObj[key] = obj1[key];

    }

    for (var key in obj2) {

    	if(isObject(obj2[key])) tmpObj[key] = mergeObjects(tmpObj[key],obj2[key]);
    	else if(Array.isArray(obj2[key])) tmpObj[key] = mergeArrays(tmpObj[key],obj2[key]);
    	else tmpObj[key] = obj2[key];

    }

    return tmpObj;

}
