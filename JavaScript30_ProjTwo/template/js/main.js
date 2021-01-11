/*
Create a function that takes in 3 numbers. The function should return the 
first number multiplied by the second and then subtract the third. Console.log() the resulting value
*/

takeThreeNums = (a,b,c) => {
    // actual 'return'
    let result = a * b - c  
   return result 
}

let displayWinner = takeThreeNums(10,2,10)
console.log(displayWinner)


/*
takeFinalResult = (x) => {
    let finalResult = x * 5
    console.log(finalResult)
    return finalResult
}
let completeResult =takeFinalResult(displayWinner)

console.log(completeResult)
*/