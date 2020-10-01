/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- The solution must be pushed to the repository and be available for the tutors by the end of the day
- You can ask for tutor's help
- You can google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculate the area of the rectangle.
*/

const area = function (l1,l2){
    return l1*l2;
}
console.log(area(4,6));



/* EXERCISE 2
Write a function "crazySum" which receives two given integers. If the two values are same, then returns triple their sum.
*/
const triple = function (x,y){
    if(x===y){
        return (x+y)*3;
    } else{
        console.log("Sorry Numbers are different");
    }
}
console.log(triple(6,6));

/* EXERCISE 3
Write a function "crazyDiff" that computes the 
absolute difference between a given number and 19. 
Returns triple their absolute difference if 
the specified
number is greater than 19.
*/

const crazyDiff = function(x){
    if(x<19){
        return Math.abs(x-19);
    } else if(x>19){
        return Math.abs(x-19)*3;
    }
    
}
console.log(crazyDiff(20));


/* EXERCISE 4
Write a function "boundary" which accept an integer N and returns true if N is within 20 and 100 (included) or equal to 400.
*/

const boundary = function(N){
    switch (N) {
        case N>=20 && N<=100:
             return true;
            break;
        case N === 400:
            return true;
            break;
    
        default:
            return null
            break;

    }

}
console.log(boundary(400));
/* EXERCISE 5
Write a function "strivify" which accepts a string S. Add to S "Strive" in front of a given string, if the given string begins with "Strive" then return the original string.
*/

const strivify = function(S=[]){

    const x = 'strive';
    const y =S.indexOf(x);
    if(y===0){
        return S
    }else {
       return S=$(x)+S
    }
}
console.log(strivify("strive"));
/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

let check3and7 = function(x){
    if(x % 3===0|| x %7 ===0){
        return true
    }
}
console.log(check3and7(22))
/* EXERCISE 7
Write a function "reverseString" to reverse programmatically a given string (es.: Strive => evirtS).
*/

let reverseString = function(str){
let splitstr = str.split("");
let reversestr=splitstr.reverse();
let joinedone=reversestr.join("");
return joinedone
}
console.log(reverseString('yazid'))
/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as parameter
*/

const upperFirst = function (WORD){
    
res=WORD.replace(WORD.charAt(0),WORD.charAt(0).toUpperCase());
return res
}
console.log(upperFirst("yazid"))
/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

const cutString = (str) => {
    str1= str.substring(1,str.length-1)
    
    return str1
}
console.log(cutString("yazid"))
/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10
*/

const giveMeRandom=(num)=> {

    const randomArray = []
    for(let i = 0; i<num; i++) {
    randomArray.push(Math.random())
    return randomArray
    }
}
console.log(giveMeRandom(3))
/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit with your tutor.
*/
