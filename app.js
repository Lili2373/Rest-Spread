const filterOutOdds = (...nums) => nums.filter(num => num % 2 === 0)

// const filterOutOdds = (...args) => args.filter(v => v % 2 === 0)


function findMin(...args) {
    return Math.min(...args);
}

console.log(findMin(1, 4, 12, -3)); // : -3
console.log(findMin(1, -1)); // t: -1
console.log(findMin(3, 1)); // : 1



const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });

const result = mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 });
console.log(result); // {a: 1, b: 2, c: 3, d: 4}


const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(v => v * 2)];

console.log(doubleAndReturnArgs([1, 2, 3], 4, 4)); // : [1, 2, 3, 8, 8]
console.log(doubleAndReturnArgs([2], 10, 4)); // : [2, 20, 8]



// Remove a random element in the items array and return a new array without that item.
const removeRandom = (items) => {
    const randomIndex = Math.floor(Math.random() * items.length);
    return [...items.slice(0, randomIndex), ...items.slice(randomIndex + 1)];
};

// Return a new array with every item in array1 and array2.
const extend = (array1, array2) => [...array1, ...array2];

// Return a new object with all the keys and values from obj and a new key/value pair.
const addKeyVal = (obj, key, val) => ({ ...obj, [key]: val });

// Return a new object with a key removed.
const removeKey = (obj, key) => {
    const { [key]: removedKey, ...newObj } = obj;
    return newObj;
};

// Combine two objects and return a new object.
const combine = (obj1, obj2) => ({ ...obj1, ...obj2 });

// Return a new object with a modified key and value.
const update = (obj, key, val) => ({ ...obj, [key]: val });

