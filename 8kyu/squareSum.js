/*
Complete the square sum function so that it squares each number passed into it and then sums the results together.
For example, for [1, 2, 2], it should return 9 because 1**2 + 2**2 + 2**2 = 9.
 */

const squareSum = (numbers) => numbers.reduce( (sum, n) => (n*n) + sum, 0);

// alternative way
function sumSquare(numbers){
    var sum = 0;
    numbers.forEach(function(n) {
        sum += n * n
    });
    return sum;
}