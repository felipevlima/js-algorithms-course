## Big O

We say that an algorithm is O (f(n)) if the number of simple operations the computer has to do is eventually less then a contant times f(n), as n increases

- f(n) could be linear (f(n) = n)
- f(n) could be quadratic (f(n) = n^2)
- f(n) could be constant (f(n) = 1)
- f(n) could be something entirely different!

Example:

```js
// Always 3 operations = O(1)
function addUpTo(n) {
  return (n * (n + 1)) / 2
}
```

```js
// Number of operation is (eventually) bounded by a multiple of n (say, 10n) = O(n)
function addUpTo(n) {
  let total = 0
  for (let i = 1; i <= n; i++) {
    total += i
  }
  return total
}
```

```js
// Same as above = O(n)
function countUpAndDown(n) {
  console.log('Going Up!')
  for (let i = 0; i < n; i++) {
    console.log(i)
  }
  console.log('At the top!\nGoing down...')
  for (let j = n - 1; j >= 0; j--) {
    console.log(j)
  }
  console.log('Back down. Bye!')
}
```

```js
// O(n) operations inside of an O(n) operation = O(n^2)
function printAllPairs(n) {
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      console.log(i, j)
    }
  }
}
```

-------------------

## Big O Shorthands

- Analyzing complexity with big O can get complicated
- There are several rules of thumb that can help
- These rules won't ALWAYS wokr, but are a helpful starting point

1. Arithmetic operations are constant
2. Variable assignment is constant
3. Accessing elements in an array (by index) or object (by key) is constant
4. In a loop, the complexity is the length of the loop times complexity of whatever happens inside of the loop
  
```js
function logAtLeast5(n) {
  for (var i = 1; i <= Math.max(5, n); i++) {
    console.log(i)
  }
}
```