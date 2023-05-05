// let num = Math.round(Math.random() * 100) + 1;
// let guessed = false
// let guess

// do {
//     guess = prompt('gushakeq tiv@')
//     if (num < guess) {
//         alert("greq aveli poqr tiv")
//         guessed = false
//     }
//     else if (num > guess) {
//         alert("greq aveli mec tiv");
//         guessed = false

//     }
//     else {
//         alert("chisht patasxan")
//         guessed = true
//     }
// } while (guessed === false)



//211
// function sum(x, n) {
//     let s = 1
//     let multi = 1

//     for (let i = 0; i < n; i++) {
//         multi *= x
//         s += multi
//         console.log(multi);
//     }
//     return s
// }
// console.log(sum(2, 5));


//213
// function factorialSum(n) {
//     let multi = 1
//     let sum = 0

//     for (let i = 1; i <= n; i++) {
//         multi *= i
//         sum += multi
//     }
//     return sum
// }
// console.log(factorialSum(2));


//214
// function factorialSum(n) {
//     let multi = 1
//     let sum = 1

//     for (let i = 1; i <= n; i++) {
//         multi *= i
//         sum += 1 / multi
//     }
//     return sum
// }
// console.log(factorialSum(3));


//215
// function sum(x, n) {
//     let s = 1
//     let multi = 1
//     let m = 1
//     for (let i = 1; i <= n; i++) {
//         multi *= x
//         m *= i
//         s += multi / m
//     }
//     return s
// }
// console.log(sum(3, 3));