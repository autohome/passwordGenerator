// Assignment code here

// global empty pool array
var pool = [];

// global count variable
var count;

// alpha arrays
const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const upperCaseArray = alpha.map((x) => String.fromCharCode(x));
const lowerCaseArray = upperCaseArray.map(upperCaseArray => upperCaseArray.toLowerCase())

// numeric array
const numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// special char array
const string = '!#$%&()*+,-./:;<=>?@[\]^_{|}~'
const specialCharArray = [...string]

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// first prompt
function writePassword() {
  count = window.prompt ("Choose a length of 8 to 128 characters");
    // error prompts
    if (count === null) {
      return;
    } else if (count > 128 || count < 8) {
      window.alert ("ERROR: Please enter a numeric character between 8 and 128");
      writePassword();
    } else if (count === "") {
      window.alert ("ERROR: Please enter a numeric character between 8 and 128");
      writePassword();
    // if correct
    } else (
      lowerCase ()
    )
}

// second Prompt
function lowerCase() {
  var x = window.confirm('Would you like to include lowercase characters?');
    if (x) {
      pool.push(...lowerCaseArray);
      upperCase();
    } else
      upperCase();
}

// Third prompt
function upperCase() { 
  var x = window.confirm ('Would you like to include UPPERCASE characters?');
    if (x) {
      pool.push(...upperCaseArray);
      numbers();
    } else 
      numbers();
}

// fourth prompt
function numbers() { 
  var x = window.confirm ('Would you like to include numeric characters?');
    if (x) {
      pool.push(...numbersArray);
      specialChar();
    } else 
      specialChar();
  }

// Final Prompt
function specialChar () {
  var x = window.confirm ('Would you like to include special characters?')  ;
    if (x) { 
      pool.push(...specialCharArray);
      generatePassword();
    } else if (!x || pool === null){
      window.alert ('ERROR: Please choose at least one set of characters.');
    } else (
      generatePassword()
    )
}

// generate random string from pool
function generatePassword() {
  var password = '';
    for (var i = 0; i < count; i++) {
        password += pool[Math.floor(Math.random() * pool.length)]
    }
    // Write password to the #password input
    displayPassword(password)    
}

function displayPassword(password) {
  var passwordText = document.querySelector("#password");
   passwordText.value = password;
   showCopy();
}

// adds copy text button
function showCopy () {
  document.getElementById('copy').style.visibility='visible';
}

// copys text
function copy() {
  var copyText = document.getElementById("password");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
  var tooltip = document.getElementById("copy");
  tooltip.innerHTML = "Copied 😀 ";
}

function outFunc() {
  var tooltip = document.getElementById("copy");
  tooltip.innerHTML = "Copy Text";
}

// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



