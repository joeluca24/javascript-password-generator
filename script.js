  
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // GIVEN I need a new, secure password
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// WHEN I click the button to generate a password
//??????? what series
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password

// ************* 1 prompt ***********
//************** Need validation*******
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// We need a prompt here and ask for the length from the user
// Check if the number is < 8 and > 128

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// Each prompt and it needs to be validated...

//*********************4 confirms****************
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// We need a Confirm and ask the user if they want to use lowercase?
// We need a Confirm and ask the user if they want to use uppercase?
// We need a Confirm and ask the user if they want to use numeric?
// We need a Confirm and ask the user if they want to use special Characters?


//************ need a function *******************
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// All the information is gathered (all prompts finished getting input)
// All the hard logic goes here ???????


// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
// Either do an alert with password.. .or just check to see if my variable has a password

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// Ask user how long password is going to be.

// Store users answer to how long the password is going to be.
 var passwordLength = prompt("How long do you want youre password to be?")

// Ask user if they want numbers in thier password.
// Store user answer to if they want number in their password.
var passwordNumber = confirm("Do you want number in youre password?")


// Ask user if they want special charcters in their password.
// Store user answer if they special characters in their password.
 var passworCharacter = confirm("Do you want special characters in youre password?")


console.log(passwordLength)
console.log(passwordNumber)
console.log(passworCharacter)