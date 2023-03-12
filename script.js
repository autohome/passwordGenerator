// Assignment code here

// empty pool array
var pool = [];
var count;
// alpha arrays
const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const upperCaseArray = alpha.map((x) => String.fromCharCode(x));
const lowerCaseArray = upperCaseArray.map(upperCaseArray => upperCaseArray.toLowerCase())

// numeric array
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// special char array
const string = '!#$%&()*+,-./:;<=>?@[\]^_{|}~'
const specialCharArray = [...string]




// console.log (upperCaseArray)
// console.log (lowerCaseArray)
// console.log (numbers)
// console.log (specialChar)

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var writePassword = function() {
  // first prompt
  count = window.prompt ("Choose a length of 8 to 128 characters");
    // error 
    if (count === null) {
      return;
    } else if (count > 128 || count < 8) {
      window.alert ("ERROR: Please enter a numeric character between 8 and 128")
        writePassword();
    } else if (count === "") {
      window.alert ("ERROR: Please enter a numeric character between 8 and 128")
        writePassword();
    } else (
      lowerCase ()
    )
    }

 // second Prompt
var lowerCase = function() {
  var x = window.confirm ('Would you like to include lowercase characters?')
  
  if (x) { 
    pool.push(lowerCaseArray);
    console.log("ifthisisilowercasetrue",pool);
    upperCase()
  } else upperCase();
}



  // Third prompt

  
var upperCase = function() { 
  var x = window.confirm ('Would you like to include UPPERCASE characters?')
    if (x) {
      pool.push(...upperCaseArray);
      specialChar();
    } else 
      specialChar()
}

  // F  ourth Prompt

var specialChar = function () {
  var x = window.confirm ('Would you like to include Special characters?')
  
  if (x) { 
    pool.push(...specialCharArray);
      generatePassword();
  } else if (!x && pool === null){
    window.alert ('ERROR: Please choose at least one set of characters.')
  } else (
    generatePassword()
    )
  }


var generatePassword = function () {

  var password = '';
    for (var i = 0; i < count; i++) {
        password += pool[Math.floor(Math.random() * pool.length)]
      }
      return password
    }

      

  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  




// // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
