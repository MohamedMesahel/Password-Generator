
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Declare Global Data
// list of lower Case Letters
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 
'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// list of upper Case Letters
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',
 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
// List of Numbers
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// List of Special Characters
var special = ['@', '%', '+', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', 
'(', '}', '{', ']', '[', '~', '-', '_', '.'];

// Welcom Message
window.alert("Hello! Please press Generate password to start");


// Created function to ask user regarding input options 
function questions() {
  var isValid = false;
  do {
    // Prompt message upon clicking on Generate passowrd.
    var length = prompt("Please choose password length between 8 and 128 characters");
    // Confirmation message for Lowercase letter question.
    var askLowerCase = confirm("Would you like your password to include lower case letters?");
    // Confirmation message for Uppercase letter question.
    var askUpperCase = confirm("Would you like your password to include upper case letters?");
    // Confrimation message for Number question.
    var askNumbers = confirm("Would you like your password to include numbers?");
    // Confirmation message for special charachter question.
    var askSpecial = confirm("Would you like your password to include special characters?");
    // Delcaring responses.
    var responses = {
      length: length,
      askNumbers: askNumbers,
      askLowerCase: askLowerCase,
      askUpperCase: askUpperCase,
      askSpecial: askSpecial
    } 
    // Asked the user how long the password will be and sore their ansers in a variable `length`
    // Validate the users answer to verify that it was between 8 and 128
    if((length < 8)||(length > 128))
    alert("Choose number between 8 and 128");
    else if((!askNumbers)&&(!askLowerCase)&&(!askUpperCase)&&(!askSpecial))
    alert("Must choose at least one type.");
    else
    isValid = true;
// In Case the response is not valid return
  } while(!isValid);
  return responses;
}
// This function joins all the user responses, arrange them in possible combination and then obtaining final password.
function generatePassword() {
  var passwordOptions = questions();
  var combination = [];
  var finalPassword = "";

// lunching and Combining the (if) statment for getting the Final Passowrd 

  if (passwordOptions.askNumbers) {
    for (var i of numbers)
    combination.push(i);
  }
  if (passwordOptions.askLowerCase) {
    for (var i of lowerCase)
    combination.push(i);
  }
  if (passwordOptions.askUpperCase) {
    for (var i of upperCase)
    combination.push(i);
  }
  if (passwordOptions.askSpecial) {
    for (var i of special)
    combination.push(i);
  }

// Establishing forloop to generate random choices
  for (var i = 0; i < passwordOptions.length; i++) {
    finalPassword += combination[Math.floor(Math.random() * combination.length)];
    
  }

  return finalPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
