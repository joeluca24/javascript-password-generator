  
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// Ask user how long password is going to be.
// Store users answer to how long the password is going to be.
 var passwordLength = prompt("How long do you want youre password to be?")

// Ask user if they want numbers in thier password.
// Store user answer to if they want number in their password.
var passwordNumber = confirm("Do you want number in youre password?")





// Ask user if they want special charcters in their password.
 var passworCharacter = confirm("Do you want special characters in youre password?")

// Store user answer if they special characters in their password.
console.log(passwordLength)
console.log(passwordNumber)
console.log(passworCharacter)