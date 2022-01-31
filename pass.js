const inputElement = document.getElementById("inputEl");

const rangeElement = document.getElementById("rangeEl");
const upperCaseCheckBox = document.getElementById("upper"); 
const lowerCaseCheckBox = document.getElementById("lower");
const numberCaseCheckBox = document.getElementById("number");
const symbolCaseCheckBox = document.getElementById("symbol");
const generateButton = document.getElementById("generate");

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbolls = "!@#$%^&*()-+=|\?~_";

function getLowercase() {  
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];  
   }  
   function getUppercase() {  
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];  
   }  
   function getNumber() {  
    return numbers[Math.floor(Math.random() * numbers.length)];  
   }  
   function getSymbol() {  
    return symbolls[Math.floor(Math.random() * symbolls.length)];  
   } 



   function generateX() {  
    const xs = [];  
    if (upperCaseCheckBox.checked) {  
     xs.push(getUppercase());  
    }  
    if (lowerCaseCheckBox.checked) {  
     xs.push(getLowercase());  
    }  
    if (numberCaseCheckBox.checked) {  
     xs.push(getNumber());  
    }  
    if (symbolCaseCheckBox.checked) {  
     xs.push(getSymbol());  
    }  
    if (xs.length === 0) return "";  
    return xs[Math.floor(Math.random() * xs.length)];  
   }  

   function generatePassword() {  
    const len = rangeElement.value;  
    let password = "";  
    for (let i = 0; i < len; i++) {  
     const x = generateX();  
     password += x;  
    }  
    inputElement.innerText = password;  
   }  

   generateButton.addEventListener("click", generatePassword); 
