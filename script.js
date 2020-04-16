
//create function with num as parameter
const yuGiHo = num => {
    //create an array to hold the final result
    let result = [];
    //create a for loop that checks numbers from 1 to the passed argument
    for (let i=1; i<=num; i++) {
        //checks if its divisible by 2,3 & 5
        if (i%2===0 && i%3===0 && i%5===0) {
            result.push('yu-gi-ho');
        } else if (i%2===0 && i%3===0) {//checks if its divisible by 2 & 3
            result.push('yu-gi');
        } else if (i%2===0 && i%5===0) {//checks if its divisible by 2 & 5
            result.push('yu-ho');
        } else if (i%3===0 && i%5===0) {//checks if its divisible by 3 & 5
            result.push('gi-ho');
        } else if (i%2===0) {//checks if its divisible by 2
            result.push('yu');
        } else if (i%3===0) {//checks if its divisible by 3
            result.push('gi');
        } else if (i%5===0) {//checks if its divisible by 5
            result.push('ho');
        } else result.push(i);//pushes the number
        
    }
    return result;//returns the array containing result
}
//call function
yuGiHo(100);
yuGiHo(6);

