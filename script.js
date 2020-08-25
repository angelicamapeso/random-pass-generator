// Get a reference to the "Generate Password" button element
let generateBtn = document.getElementById('generate')
// Add a "click" event listener to the button that will display a new password
generateBtn.addEventListener('click', displayNewPassword)

/**
 * This `click` event handler function will generate a new password
 * and then display it as the value for the `#password` element
 * @returns {void} Nothing
 */
function displayNewPassword () {
  try {
  let criteria = getCriteria()
  let password = generatePassword(criteria)
  let passwordText = document.getElementById('password')
  passwordText.value = password
  }
  catch(e) {
    console.log(e);
  }
}

/* Your solution code goes here ... */

function getCriteria() {
  
  const userCriteria = {
    length: 8,
    characterTypes: ['L'],
  }

  userCriteria.length = askPasswordLength();
  //console.log(userCriteria.length);

  userCriteria.characterTypes = askCharacterTypes();
  //console.log(userCriteria.characterTypes);

}

function askCharacterTypes() {
  let characterTypes = prompt("Select the character type(s) you wish to include in your password by typing the corresponding letter. If you want to include multiple types, please use a comma separated list of letters. \n - lowercase (L) \n - uppercase (U) \n - numberic (N) \n - special characters (S)");

  while (!areCharactersValid(characterTypes)) {
    //console.log("Non-valid input: " + characterTypes);
    characterTypes = prompt(`Sorry, "${characterTypes}" isn't a valid answer.` + "\nYour input should only use the corresponding letter from these options: \n - lowercase (L) \n - uppercase (U) \n - numberic (N) \n - special characters (S) \nAnd should be a comma separated list for multiple selections.");
  }
  //console.log("Valid input: " + characterTypes);

  return characterTypes;
}

function areCharactersValid(characterTypes) {
  if (characterTypes === "" || characterTypes === null) {
    throw 'Character length not entered. Password generation canceled.';
  }

  const convertedCharacterTypes = characterTypes.toUpperCase().replace(/\s+/g, "").split(",");

  for (let i = 0; i < convertedCharacterTypes.length; i ++) {
    if (convertedCharacterTypes[i].length > 1 
      || (convertedCharacterTypes[i] !== "L"
      && convertedCharacterTypes[i] !== "U"
      && convertedCharacterTypes[i] !== "N"
      && convertedCharacterTypes[i] !== "S")) {
        return false;
      }
  }
  return true;
}

function askPasswordLength() {
  let length = prompt("How long would you like the password to be? (Must be a number from 8 to 128)");

  while (!isPasswordLengthValid(length)) {
    //console.log("Invalid length: " + length);
    length = prompt(`Sorry, ${length} is an invalid length.` + '\n The length must be: \n - An integer \n - At minimum, 8 \n - At maximum, 128 \nHow long would you like the password to be?');
  }
  //console.log("Valid length: " + length);
  return length;
}

function isPasswordLengthValid(length) {
  if (length === ""|| length === null) {
    throw 'Length not entered. Password generation canceled.';
  }
  const convertedLength = Number(length);
  const validCondition = (!Number.isNaN(convertedLength)
    && convertedLength % 1 === 0
    && convertedLength >= 8 
    && convertedLength <= 128); 

  return validCondition;
}

function generatePassword(criteriaObject) {
  //go through each criteria Object
  //if it is active, push the criteria to the generating array

  //have the computer generate a random numnber for the length
  //have the computer generate random number n times to select an index in this huge array of possible characters/etc

  //return the password
}
