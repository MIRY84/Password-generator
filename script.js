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

//added more variables storing the prompts + pass length + choices

var passwordLength = 0;
var Userchoice = [];
var isLowercase;
var isUppercase;
var isNumber;
var isSpecialchar;


// Function to prompt user for password options and prompt if password not in parameters

//I just summed it up to one function
function generatePassword() {

  var passwordLength = parseInt(prompt("Choose your password length: 10-64 characters"))
  while (passwordLength < 10 || passwordLength > 64 || isNaN(passwordLength)) {
    alert("You must choose only numbers 10-64!");
    passwordLength = parseInt(prompt("Choose your password length: 10-64 characters"));
  }

  //Declared all users options and prompts

  var isSpecialchar = confirm("would you include  specialcharacters?")//changed prompt to confirm
  var isUppercase = confirm("Would you include uppercase letters?")
  var isLowercase = confirm("Would you include lower case letters?")
  var isNumber = confirm("Would you include numbers?")

  //Loops for user inputs, using concat method to attach the results

  if (isSpecialchar === true) {
    Userchoice = Userchoice.concat(specialCharacters);
  }

  if (isUppercase === true) {
    Userchoice = Userchoice.concat(upperCasedCharacters);
  }

  if (isLowercase === true) {
    Userchoice = Userchoice.concat(lowerCasedCharacters);
  }

  if (isNumber === true) {
    Userchoice = Userchoice.concat(numericCharacters);
  }
  //added the if statement for false returns of users parameters
  while (isNumber === false && isLowercase === false && isUppercase === false && isSpecialchar === false) {
    alert("you must choose at least one parameter!");
    return generatePassword();
  }


  // Function for getting a random element from an array/ still not working

  //I created a new var with password to semplify the code

  var Newpassword = "";
  for (var i = 0; i < passwordLength; i++) {
    Newpassword = Newpassword + Userchoice[Math.floor(Math.random() * Userchoice.length)];
  }
  return Newpassword;
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