const passwordBox = document.getElementById("Password");
let length = "";
let filterType = document.getElementById("categorySelect");
let filterLength = document.getElementById("lengthSelect");
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbols = "@!#$%^&*(){}[]<>/+-";


const easy = upperCase + lowerCase ;
const hard = upperCase + lowerCase +number +symbols;
// Select Length
filterLength.addEventListener("change",()=>{
    const selectedLength = filterLength.value;
    if(selectedLength === "Six"){
        length = 6;
    }
    else if(selectedLength === "Eight"){
        length = 8;
    }
    else {
        length = 10;
    }
    createPassword();
});


// Generate Random Password

function createPassword (){
    let password = "";
 let allChars= "";
    const selectedCategory  = filterType.value;
    if (selectedCategory === "Easy") {
        allChars = easy;
        password += upperCase[Math.floor(Math.random() * upperCase.length)];
        password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    } else {
   allChars =  hard;
      password += upperCase[Math.floor(Math.random()*upperCase.length)];
        password += lowerCase[Math.floor(Math.random()*lowerCase.length)];
        password += number[Math.floor(Math.random()*number.length)];
        password += symbols[Math.floor(Math.random()*symbols.length)];
    }
 
    while(length > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
}

 function copyPassword (){
    passwordBox.select();
    navigator.clipboard.writeText(passwordBox.value);
 }