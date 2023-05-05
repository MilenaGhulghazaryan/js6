// const num = Math.floor(Math.random() * 100) + 1;
// function guess() {
//     let num_guess = +prompt('Ներմուծել Թիվը')
//     if (num_guess > 100) {
//         alert("Այդ թիվը միջակայքում չէ, նորից փորձեք")
//         guess();
//     }
//     if (num_guess > num) {
//         alert("Ոչ, փորձեք ավելի ցածր թվով.")
//         guess();
//     }
//     else if (num_guess < num) {
//         alert("Ոչ, փորձեք ավելի մեծ թիվ.")
//         guess();
//     }
//     else if (num_guess === num) {
//         alert("HALALA")
//     }
// }
// guess();
// function sum(x) {

//     if (x === 0) {
//         return 0
//     }
//     return x + sum(x - 1)
// }

// console.log(sum(10));

// function pow(x, y) {
//     if( y === 0){
//         return 1
//     }
//     return x * pow(x, y - 1)

// }

// console.log(pow(2, 5));


// function evenSum(x) {
//     if (x === 0) {
//         return 0
//     }
//     if (x % 2 === 0) {
//         return x + evenSum(x-2)
//     }
//     else{
//         return evenSum(x-1)
//     }
// }

// console.log(evenSum(17));

// function oddSum(x) {
//     if(x <= 0){
//         return 0
//     }
//     if (x % 2 !== 0) {
//         return x + oddSum(x - 2)
//     }
//     if (x % 2 === 0) {
//         return oddSum(x - 1)
//     }
// }

//
// 1001 === 1 * 2^3 + 0 * 2^2 + 0 * 2^1 + 1 * 2^0
// 62
// 
// 
// 
// 
// 
// paintX(5)

// ☻---☻
// -☻-☻-
// --☻--
// -☻-☻-
// ☻---☻

//paintTriangle(5)

// +
// ++
// +++
// ++++
// +++++

//     +
//    ++
//   +++
//  ++++
// +++++

// simple(17) === "parz tiv"
// simple(121) === "parz chi, vorovhetev bajanvum a 11-i"