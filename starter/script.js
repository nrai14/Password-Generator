// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Function to prompt user for password options

var lengthChosen;
var lowerCase;
var upperCase;
var numeric;
var specialChar;

var potentialCharacters = [];

function generatePassword() {
  var lengthChosen = prompt("Enter the length of the password");
  lengthChosen = parseInt(lengthChosen);

  // parseInt converts its first argument to a string, parses that string then returns an integer or NaN

  if (isNaN(lengthChosen) || lengthChosen === null) {
    alert("Please choose a numerical value");
    return;
  } else if (lengthChosen < 10 || lengthChosen > 64) {
    console.log(lengthChosen);
    alert("Please choose length between 10 to 64 characters");
    return;
  }

  lowerCase = confirm("Do you want lowercase letters in your password?");
  upperCase = confirm("Do you want uppercase letters in your password?");
  numeric = confirm("Do you want numbers in your password?");
  specialChar = confirm(
    "Do you want special characters such as @#!-\\ in your password?"
  );

  if (upperCase === true) {  // Same as upperCasedCharacters[6] --> it's literally getting a random number/letter
    // console.log(upperCasedCharacters[Math.floor(Math.random() * upperCasedCharacters.length)]);
    potentialCharacters = potentialCharacters.concat(upperCasedCharacters);
  }

  if (lowerCase === true) {
    potentialCharacters = potentialCharacters.concat(lowerCasedCharacters);
  }

 // remember you can do potentialCharacters.push(upperCasedCharacters.join(""));
  
  if (numeric === true) {
    potentialCharacters = potentialCharacters.concat(numericCharacters);
  }

  if (specialChar === true) {
    potentialCharacters = potentialCharacters.concat(specialCharacters);
  }
  
  else 
    alert("Please choose at least one option");


 var generatedPasswordArray = [];


 console.log(potentialCharacters);

  for(i = 0; i < lengthChosen; i++) {
    // console.log("i: ", i);
    var randomIndex = Math.floor(Math.random() * potentialCharacters.length);
    randomCharacter = potentialCharacters[randomIndex];
    generatedPasswordArray.push(randomCharacter);
    // console.log(generatedPasswordArray);
    
  }

  var absolutePassword = generatedPasswordArray.join("");

  return absolutePassword;

 
 
}

  

  


// Function for getting a random element from an array
function getRandom() {

}



// Function to generate password with user input
function userPassword() {
 
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

/* 

Yes no on the options
send options into array 
do a for loop 
condition.length
repeat using math.floor(math.rnadom() * condition.length )

*/