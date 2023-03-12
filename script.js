// Assignment code here

// empty pool array
var pool = []
var count = []
// alpha arrays
const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const upperCaseArray = alpha.map((x) => String.fromCharCode(x));
const lowerCaseArray = upperCaseArray.map(upperCaseArray => upperCaseArray.toLowerCase())

// numeric array
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// special char array
const string = '!#$%&()*+,-./:;<=>?@[\]^_{|}~'
const specialChar = [...string]




// console.log (upperCaseArray)
// console.log (lowerCaseArray)
// console.log (numbers)
// console.log (specialChar)

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var writePassword = function() {
  // first prompt
  var charPrompt = window.prompt ("Choose a length of 8 to 128 characters");
    // error 
    if (charPrompt === null) {
      return;
    } else if (charPrompt > 128 || charPrompt < 8) {
      window.alert ("ERROR: Please enter a numeric character between 8 and 128")
        writePassword();
    } else if (charPrompt === "") {
      window.alert ("ERROR: Please enter a numeric character between 8 and 128")
        writePassword();
    } else (
      lowerCase (pool)
    )
    }

count = writePassword

 // second Prompt
var lowerCase = function() {

  var x = window.confirm ('Would you like to include lowercase characters?')
  
  if (x) { 
    pool.push(...lowerCaseArray);
    console.log(pool);
    return pool
  } else test();

// console.log(pool)
}
var test = function() {
console.log(pool)
}
var jjj = function() {
  // Third prompt
  // var upperCase = window.confirm ('Would you like to include UPPERCASE characters?')
  
  if (upperCase) { 
    pool.push(...upperCaseArray);
    console.log(pool);
  } else (
    console.log(pool)
  )

  // Fourth Prompt
  // var char = window.confirm ('Would you like to include Special characters?')
  
  if (upperCase) { 
    pool.push(...specialChar);
      console.log(pool);
  } else if (
    console.log(pool)
  )

    if (pool === null) {
      window.alert ('ERROR: Please choose at least one set of characters.')
    }
        
  console.log(charPrompt);

  var password = '';
    for (var i = 0; i < charPrompt; i++) {
      console.log(pool)
        password += pool[Math.floor(Math.random() * pool.length)]
  }
  
  console.log (password);
      


  // var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;


}



// // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  console.log(count)