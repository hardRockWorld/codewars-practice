/* 
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'
*/

const solution = (word) => {
    // 1. need to split the letters and convert into an array
    let splitWord = word.split("");
    // 2. reverse the array
    let reverseArr = splitWord.reverse();
    // 3. join the letters in the array to make a string again
    let joinArr = reverseArr.join("");

    // return the join array
    return joinArr;
};

// chain the above methods for efficiency

// const solution = (word) => word.split("").reverse().join("");
