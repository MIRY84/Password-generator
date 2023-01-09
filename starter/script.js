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

var passwordLength = [];
var Userchoice = "";


// Function to prompt user for password options
function getPasswordOptions() {
  var passwordLength = parseInt(prompt("Choose your password length: 10-64 characters"))
  if (passwordLength < 10 || passwordLength > 64) {
    alert("You must choose only numbers 10-64!")
    return false;
  }

  //Declared all users options and prompts

  var isSpecialchar = confirm("would you include  specialcharacters?")//changed prompt to confirm
  var isUppercase = confirm("Would you include uppercase letters?")
  var isLowercase = confirm ("Would you include lower case letters?")
  var isNumber = confirm ("Would you include numbers?")

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
  return true;
  


}

// Function for getting a random element from an array
function getRandom(arr) {

  var getRandom = Math.floor(Math.random() * Userchoice.length)
}

// Function to generate password with user input
function generatePassword() {
  getPasswordOptions();

  var password = "";
  for(var i=0; i<passwordLength; i++){
    
    
    password = password + Userchoice[getRandom][i]
  }
}

  
  

  



// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
   //added options function to let the button on click working
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
  
}

console.log(password)

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);