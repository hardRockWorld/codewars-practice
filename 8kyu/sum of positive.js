/* 
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
*/

const positiveSum = (arrOfNum) => {
    let sum = 0;

    arrOfNum.forEach((ele) => {
        if (ele >= 0) {
            sum += ele;
        }
    });
    return sum;
};

// alternate way:

// const positiveSum = (arr) => {
//     arr.reduce((acc, cur) => {
//         cur > 0 ? (acc += cur) : acc;
//         return acc;
//     }, 0);
// };

// another way:

// function positiveSum(arr) {
//     return arr.filter((x) => x > 0).reduce((a, b) => a + b, 0);
// }
