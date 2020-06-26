
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // GIVEN I need a new, secure password
  var password = generatePassword();
  var passwordText = document.querySelector("#password");



  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




function generatePassword() {
  var possible = [];
  // var possible = "abcdABCD0912#!@#$";
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var specChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
  var password = "";
  var passwordLength = false;

  // WHEN prompted for the length of the password
  // THEN I choose a length of at least 8 characters and no more than 128 characters
  // We need a prompt here and ask for the length from the user
  // Check if the number is < 8 and > 128   

  while (passwordLength < 8 || passwordLength > 128 || passwordLength + "" === 'NaN') {
    // "" < 8
    // 0 < 8
    passwordLength = prompt("Please choose a valid length: Choose a length between 8 and 128");// return string
    passwordLength = parseInt(passwordLength);
  }

  //*********************4 confirms****************
  // WHEN prompted for character types to include in the password
  // THEN I choose lowercase, uppercase, numeric, and/or special characters
  // We need a Confirm and ask the user if they want to use lowercase?
  var otherLowerCase = confirm("Do you want to include lowercase letters in your password?");
  // We need a Confirm and ask the user if they want to use uppercase?
  var otherUpperCase = confirm("Do you want to include uppercase letters your password?");
  // We need a Confirm and ask the user if they want to use numeric?
  var otherNumbers = confirm("Do you want to include numbers in your password?");
  // We need a Confirm and ask the user if they want to use special Characters?
  var passwordCharacter = confirm("Do you want to include special characters in your password?");


  //if lowercase = true 
  if (otherLowerCase) {
    // than we can add into the empty array 
    //possible = possible.concat(lowerCase);
    for (var i = 0; i < lowerCase.length; i++) {
      console.log(lowerCase[i]);
      possible.push(lowerCase[i]);
    }

  }
  if (otherUpperCase) {
    // than we can add into the empty array 
    //possible = possible.concat(lowerCase);
    for (var i = 0; i < upperCase.length; i++) {
      possible.push(upperCase[i]);
    }

  }
  if (otherNumbers) {
    for (var i = 0; i < numbers.length; i++) {
      console.log(numbers[i]);
      possible.push(numbers[i]);
    }
  }
  if (passwordCharacter) {
    for (var i = 0; i < specChar.length; i++) {
      console.log(specChar[i]);
      possible.push(specChar[i]);
    }
  }






  // // ************* 1 prompt ***********
  // //************** Need validation*******

  for (var i = 0; i < passwordLength; i++) {
    var randomChar = possible[Math.floor(Math.random() * possible.length)];
    password = password + randomChar
    console.log(password);
  }
  return password; // return passworfd when input in completeed succesfully. 


}

  // WHEN I answer each prompt
  // THEN my input should be validated and at least one character type should be selected
  // each prompt needs to be validated...


  // WHEN the password is generated
  // THEN the password is either displayed in an alert or written to the page
  // Either do an alert with password.. .or just check to see if my variable has a password




