// masala 1

// let nums = [0, 3, 0, 4, 5, 0, 7];
// let filtered = nums.filter((n) =>  n != 0);
// console.log(filtered);
// let ozgar = filtered.toReversed();
// console.log(ozgar);

// masala 2

// let nums = [-2, 8, -1, -3, 1, 3,-2];
// let filtered = nums.filter((n) => n >= 0);
// console.log(filtered);
// let sum = filtered.reduce((total, current) => total + current, 0);
// console.log(sum);

// masala 3

// let numbers = [2, 5, 6, 8, 1];
// let filtered = numbers.filter((n) => n >= 5);
// console.log(filtered);
// let kvadrat = filtered.map((n) => n ** 2);
// console.log(kvadrat);

// masala 4

// let nums = [1, 2, 4, 3, 5];
// let sorted = nums.toSorted();
// console.log(sorted);
// let slices = sorted.slice(3, 5)
// console.log(slices);

// masala 5 

// let arr = [31, 32, 33, 33, 33, 34, 35];
// let unique = arr.filter((item, index) => {
//     return arr.indexOf(item) === index;
// })
// console.log(unique);

// masala 6 

// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let filtred = nums.filter((n) => nums.indexOf(n) % 2 === 1); 
// let dubled = filtred.map((n) => n ** 2);
// console.log(dubled);

// masala 7

let numbers = [10, 20, 30, 40, 50, 60, 70];
let arr = [31, 32, 33, 34, 35];
let newArr = numbers.concat(arr);
console.log(newArr);
let newVersion = [...arr, ...numbers];
console.log(newVersion);