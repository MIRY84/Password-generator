// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

//added 2 more variables storing the prompts + pass length

var passwordLength = 0;
var Userchoice = "";

// Function to prompt user for password options
function getPasswordOptions() {
  var passwordLength = parseInt(prompt("Choose your password length: 10-64 characters"))
  if (passwordLength < 10 || passwordLength > 64) {
    alert("You must choose only numbers 10-64!")
    return getPasswordOptions
  }

  //Declared all users options and prompts

  var isSpecialchar = prompt("would you include  specialcharacters?")
  var isUppercase = prompt ("Would you include uppercase letters?")
  var isLowercase = prompt ("Would you include lower case letters?")
  var isNumber = prompt ("Would you include numbers?")

  //Loops for user inputs, using concat method to attach the results

  if (isSpecialchar === true) {
    Userchoice = Userchoice.concat(specialCharacters)
  }

  if (isUppercase ===true) {
    Userchoice = Userchoice.concat(upperCasedCharacters)
  }

  if(isLowercase ===true) {
    Userchoice = Userchoice.concat(lowerCasedCharacters)
  }

  if(isNumber ===true) {
    Userchoice = Userchoice.concat(numericCharacters)
  }

  console.log(Userchoice);


}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);