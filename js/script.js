
//create each object
var randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    numeric: getRandomNumeric,
    special: getRandomSpecialCharacter
}


//get info from the element that has the ID attribute
var specialElement = document.getElementById('specialchar');
var numericElement = document.getElementById('numbers');
var lowercaseElement = document.getElementById('lowercase');
var uppercaseElement = document.getElementById('uppercase');

var resultElement = document.getElementById('result');
var lengthElement = document.getElementById('length');

var generateElement = document.getElementById('generate');



//get random function for each array
function getRandomLower() {
    var lowerLength = lowerCasedCharacters.length;
    var randomLower = lowerCasedCharacters[Math.floor(Math.random() * lowerLength)];
    return randomLower;
}

function getRandomUpper() {
    var upperLength = upperCasedCharacters.length;
    var randomUpper = upperCasedCharacters[Math.floor(Math.random() * upperLength)];
    return randomUpper;
}

function getRandomNumeric() {
    var numericLength = numericCharacters.length;
    var randomNumeric = numericCharacters[Math.floor(Math.random() * numericLength)]
    return randomNumeric;
}

function getRandomSpecialCharacter() {
    var specialLength = specialCharacters.length;
    var specialRandom = specialCharacters[Math.floor(Math.random() * specialLength)];
    return specialRandom;
}



//algorithm for password
function generatePassword(lower, upper, numeric, special, length) {

    //initiliaze password variable
    var generatedPassword = '';

    //count the number of unchecked items
    var userCheckBox = special + numeric + lower + upper;

    //create array object and filter for checked variables (true)
    var objectArray = [{ special }, { numeric }, { lower }, { upper }].filter(item => Object.values(item)[0]);

    // Doesn't have a selected type
    if (userCheckBox === 0) {
        return '';
    }

    // create a loop
    for (var i = 0; i < length; i += userCheckBox) {
        objectArray.forEach(type => {
            var funcName = Object.keys(type)[0];
            generatedPassword += randomFunc[funcName]();
        });
    }

    var password = generatedPassword.slice(0, length);

    return password;
}


// Add event listener to generate button
generate.addEventListener('click', () => {
    var length = +lengthElement.value;
    var hasLower = lowercaseElement.checked;
    var hasUpper = uppercaseElement.checked;
    var hasNumeric = numericElement.checked;
    var hasSpecial = specialElement.checked;

    resultElement.innerText = generatePassword(hasLower, hasUpper, hasNumeric, hasSpecial, length);
});

