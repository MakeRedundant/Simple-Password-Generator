// Assignment Code
var generateBtn = document.querySelector("#generate"); //This selects the "Generate Password" button in the HTML using its ID and assigns it to the generateBtn variable.
// document.querySelector() is a method in JavaScript that allows you to select and retrieve the first element in the document that matches a specific CSS selector (ID in this case)

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); //Selects the textarea with the id password and assigns it the passwordText var

  passwordText.value = password; //This function assigns the generated password to the value property of the password input field using passwordText.value = password.
}

// Generate a random password
function generatePassword() { //This function prompts the user to enter the desired length of the password and converts the entered value to an integer using parseInt().
  var length = prompt("Enter the desired length of your password:");
  length = parseInt(length); //parseInt() is a JS function that turns a string into a number 

  // Check if the entered length is valid || Character limit between 8 - 128 
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Please enter a valid length of between 8 and 128 characters.");
    return "";
  }

  var lowercaseCharset = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
  ]; // Lowercase letters

  var uppercaseCharset = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
  ]; // Uppercase letters

  var numberCharset = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
  ]; // Numbers

  var specialCharacters = [
    '@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',',
    ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'
  ]; // Special characters

  //Confirmation prompts
  var charset = [];
  var includeLowercase = confirm("Include lowercase letters?");
  var includeUppercase = confirm("Include uppercase letters?");
  var includeNumbers = confirm("Include numbers?");
  var includeSpecials = confirm("Include special characters?");

  // Define character sets based on user preferences
  if (includeUppercase) {
    charset = charset.concat(uppercaseCharset);
  }
  if (includeLowercase) {
    charset = charset.concat(lowercaseCharset);
  }
  if (includeNumbers) {
    charset = charset.concat(numberCharset);
  }
  if (includeSpecials) {
    charset = charset.concat(specialCharacters);
  }
//It generates the password by randomly selecting characters from the charset arrays and concatenating them to the password variable.

  // Checks if at least one character set is selected
  if (charset.length === 0) {  //=== uses strict equality to check if the variable is empty or has a length of 0 to return the alert
    alert("Please select at least one option.");
    return "";
  }

  // Generates the password
  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * charset.length); //The Math.floor() function rounds down the decimal number to the nearest whole number
    password += charset[randomIndex]; //the characters generated are conatenated to the password string with the += operater and this is repeated with length number of times 
  }

  return password;
}
//Saves Password
// When the user clicks the save button the function is called
function savePassword() { // Retrieves the generated password from the <textarea> element with the ID "password" and assigns it to the passwordText variable.
  var passwordText = document.querySelector("#password").value; //it first retrieves the generated password using document.querySelector("#password").value.
  // The retrieved password is assigned to the passwordText variable.
  if (passwordText.trim() === "") { //trim removes whitespace characters 
    alert("No password generated."); 
    return;
  }
  var savedPasswordsTextarea = document.querySelector("#savedPasswords"); //f the trimmed passwordText is not empty it is added to the textarea with the Id savedPasswords
  var savedPasswords = savedPasswordsTextarea.value;
  savedPasswords += passwordText + "\n";
  savedPasswordsTextarea.value = savedPasswords;
  alert("Password saved!"); //prompts that the password has been saved
}
//Event listerners are functions triggered by the user
var saveBtn = document.querySelector("#save");
saveBtn.addEventListener("click", savePassword);

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);