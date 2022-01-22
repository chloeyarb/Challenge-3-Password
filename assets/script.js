//Global Variables
var allUserCharacter = [];

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "x"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var symbols =["!", "#", "^", "@", "$", "%", "~", "*", "+", "-"];


//Variable focuses on the button
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  //This part of function is collecting data from user
    var length = prompt("What is the length of your password?");
  
    if (isNaN(length)) {
      alert("The length of your password must be a number");
      return;
    }
  
    if (length < 8 || length > 128) {
      alert("The length of your password should be between 8 and 128 characters long.");
      return;
    }
    var useLowerCase = confirm("Select 'OK' to include lowercase.");
    var useUpperCase = confirm("Select 'OK' to include uppercase.");
    var useSymbols = confirm("Select 'OK' to include special charatcers.");
    var useNumbers = confirm("Select 'OK' to include numbers.");
    console.log (useLowerCase,useNumbers,useSymbols,useUpperCase);
  
    if (useLowerCase === false && useUpperCase === false && useSymbols === false && useNumbers === false) {
      alert("Must pick at least one type of character to meet criteria!");
      return;
    }
  
  if (useLowerCase) {
    allUserCharacter = allUserCharacter.concat(lowerCase);
  }

  if (useUpperCase) {
    allUserCharacter = allUserCharacter.concat(upperCase);
  }

  if (useNumbers) {
    allUserCharacter = allUserCharacter.concat(numbers);
  }

  if (useSymbols) {
    allUserCharacter = allUserCharacter.concat(symbols);
  }  
  var createdPassword = "";

  for(var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random()* allUserCharacter.length);
    createdPassword = createdPassword + allUserCharacter[randomIndex];
  }

  return createdPassword;
}

// Write password to the #password input
function writePassword() {
  //need a generatePassword function
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button. When user clicks button calls writePassword function
generateBtn.addEventListener("click", writePassword);
