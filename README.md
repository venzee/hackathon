# Venzee Hackathon

This purpose of this hackathon is to show off your **Javascript** skills. For this set of exercises, you are required to implement a set of utility functions using Javascript to manipulate Arrays and Objects. If you are familiar with such libraries as [Underscore](http://underscorejs.org/) or [Lodash](https://lodash.com), then this will be very similar to those.

While it will be tempting to read the source code of such libraries and/or copy code from other sources. It's recommended that you try to solve this on your own. Your implementation should be written in **pure Javascript** without any use of external libraries or helpers. Also you're not allowed to use the builtin functions of javascript that provide the same behavior (i.e. `[1,2].map()`).


# Submission:


- Fork this repositroy.
- Solve each function in a separate branch.
- Submit a Pull Request to your fork for each separate working function described.
- Send your Pull Request to the *#code* channel on **Slack**.

## What we will look for:

- Working and functional code and described.
- Algorithmic thinking (How you tackled the problem):
  - Number of lines of code.
  - Time complexity.
  - Space complexity.
- Code style and cleanance.


-- 

# Exercise:

## Arrays:

These set of exercises are focused solely on Array manipulations.

### Map

Map each element in an array to a new value based on a supplied function. It should return a new array with the mapped values.

```javascript
function square(n) {
  return n * n;
}
 
map([4, 8], square);
// => [16, 64]
```


### Reduce

Reduces array to a value which is the accumulated result of running each element through a supplied function. It should return a single accumulated value.

```javascript
function sum(a, b){
	return a + b;
}

reduce([1, 2], sum, 0);
// => 3
``` 

### Uniq

Returns the unique elements in an array.

```javascript
uniq([3, 1, 2, 1, 4, 3, 2]);
// => [3, 1, 2, 4]
```

## Objects:

These set of exercises are focused solely on Object manipulations.

### Merge

Marge two objects (object1, object2) into a single one, it should be able to traverse the hierarchy of the object and map nested objects:

Properties with same key: 

- If the value is a literal or a function: take the value of the second object (object2).
- If the value is an array: merge each element from the array with the element from the other array.
- If the value is an object: merge them following the same rules as above.


```javascript
var object = {
  'a': 1,
  'b': [1, 2],
  'c': {
    'd': 'foo',
    'e': 'hello'
   }
};

var other = {
  'a': 2,
  'b': [3, 4],
  'c': {
    'd': 'bar',
    'f': 'world'
   }
};
 
var other = {
  'a': [{ 'c': 3 }, { 'e': 5 }]
};
 
merge(object, other);
// => {
  'a': 2,
  'b': [[1, 3], [2, 4]],
  'c': {
    'd': 'bar',
    'e': 'hello',
    'f': 'world'
   }
};
```