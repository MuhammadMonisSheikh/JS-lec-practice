//IS EVEN
// function isEven(num) {
//     // RETURN TRUE IF EVEN 
//     if (num % 2 === 0) {
//         return true;
//     }
//     // RETURN FALSE OTHERWISE
//     else {
//         return false;
//     }

// }

function isEven(num) {
    return num % 2 === 0;
}

function factorial(num) {
    // Define a Result Variable
    var result = 1;
    // Calculate Factorial and Store Value in Result
    for (var i = 2; i <= num; i++) {
        result *= i;
    }

    // Return the Result Variable
    return result;

}
//factorial(4) 4 x 3 x 2 x 1

function kebabToSnake(str) {
    //replace all "-" with "_" s
    var newstr = str.replace(/-/g, "_")
        // return str
    return newstr;
}