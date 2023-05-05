// printer('aaa', 3)
// printer('bbb', 2)
// printer('ccc')
// printer()

// function declaration 

// function printer(text = 'ooo', count = 7) {
//     console.log(count);

//     for (let i = 1; i <= count; i++) {
//         console.log(`${i}: ${text}`);
//     }
// }


// function expression
// const printer = function (text = 'ooo', count = 7) {
//     console.log(count);
//     for (let i = 1; i <= count; i++) {
//         console.log(`${i}: ${text}`);
//     }
// }

//arrow function
// const printer = (text = 'ooo', count = 7) => {
//     console.log(count);
//     for (let i = 1; i <= count; i++) {
//         console.log(`${i}: ${text}`);
//     }
// }

// printer('aaa', 3)
// printer('bbb', 2)
// printer('ccc')
// printer()



// recursiv function , ete function-i nersum eli kanchac a iran
//n! === n * (n-1)!

//5! === 5 * 4!
//          4! === 4 * 3!
//                      3! === 3 * 2!
//                                  2! === 2 * 1!
//                                              1! === 1 * 0!
//                                                          0! === 1
//                                  

// function factorial(x) {
//     if (x === 0) {
//         return 1
//     }
//     return x * factorial(x - 1)
// }

// console.log(factorial(5));

