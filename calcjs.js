window.addEventListener("DOMContentLoaded", function(){ //window.onload
    //memory of our application-- i'm declaring the two variables where i'll store the number chosen and the operation sign
    let operation="";
    let previousResult =0;

    //i'm declaring the 4 function/operation that i'll need to execute, with some random params that will be replaced by the number i'll type in the calculator
    const add=(x,y)=>{
        return x+y
    }
    const diff=(x,y)=>{
        return x-y
    }
    const mul=(x,y)=>{
        return x*y
    }
    const div=(x,y)=>{
        return x/y
    }


    //this is the function that it's executed whenever i press a button (only opreation buttons)
    const functionButtonPressed = function (event){
       const keyPressed= event.target.value;  //i'm storing in a variable the value of the button that i'm pressing on
       switch (keyPressed) { //doing two nested switch statement. (why nested? i need to divide the = and c symbols from the operation one)
               case "=":
                   switch (operation) {
                       case "+":
                           result.value =add(previousResult, parseFloat(result.value));  //calling the function add, mul, diff and div that i declared before with my params,
                           break;                                                         //my params are the previous resoult (where i'm storing the first number) and the result number where i'm storing the second number
                           case "*":                                                       
                            result.value = mul(previousResult,parseFloat(result.value));
                            break;
                            case "-":
                            result.value = diff(previousResult,parseFloat(result.value));
                            break;
                            case "/":
                            result.value = div(previousResult, parseFloat(result.value));
                            break;              
                        default:
                           console.log("default case")
                        break;
                   }             
               break;  
               case "C":   //in the case of typing the c button i'm declaring as at the beginning both my first number and the default value of the input component as 0
               result.value="0";
               previousResult="0";
                break;
           default:
              previousResult = parseFloat(result.value);
              operation = keyPressed;
              result.value = "0";
               break;
       }
    }
//this is the function that is been called whenever i press a numeric value/button
    const numericButtonPressed = function (event){
        const result = document.querySelector('#result'); //selecting my result input
       const numberPressed = event.target.value;   //taking the value from the buttons that i'm pressing
       if(result.value==="0"){
        result.value = numberPressed; //if the input displays 0, i'm just replacing it with the number i type
       }else{
           result.value += numberPressed;//if it isn't 0, i'm concat the number typed
       }
    }
//random console logging of the num and operator that i'm typing
    const numericButton = document.getElementsByClassName('numericButton');   
    console.log(numericButton);
    const functionButton = document.getElementsByClassName('functionButton');
    console.log(functionButton);

    //calling the 2 previous functions for every button (number and function) that i'm clicking
    for(let button of numericButton) {
        button.addEventListener("click", numericButtonPressed)
    }
    for (let button of functionButton){
        button.addEventListener("click", functionButtonPressed)
    }
    })
