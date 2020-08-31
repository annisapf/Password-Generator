
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

function getRandomSpecial() {
    var specialLength = specialCharacters.length;
    var specialRandom = specialCharacters[Math.floor(Math.random() * specialLength)];
    return specialRandom;
}


//create each object to checked/unchecked variables
var randomFunction = {
    lower: getRandomLower,
    upper: getRandomUpper,
    numeric: getRandomNumeric,
    special: getRandomSpecial
}

//algorithm for password
function generatePassword(lower, upper, numeric, special, length) {


    //initiliaze password variable
    var generatedPassword = '';

    //count the number of unchecked items
    var userCheckBox = special + numeric + lower + upper;

    console.log("-----------------------------------");
    console.log(userCheckBox);
    console.log("-----------------------------------");

    //create array object and filter out for checked / unchecked variables 
    var objectArray = [{ special }, { numeric }, { lower }, { upper }].filter(item => Object.values(item)[0]);

    // conditional for unchecked box
    if (userCheckBox === 0) {
        return '';
    }

    // create a loop over length to call a generator function for each type (checked)
    for (var i = 0; i < length; i += userCheckBox) {
        objectArray.forEach(type => {
            var functionName = Object.keys(type)[0];
            generatedPassword += randomFunction[functionName]();
        });
    }

    var password = generatedPassword.slice(0, length);

    return password;
}


//get info from the element that has the ID attribute
var specialElement = document.getElementById('specialchar');
var numericElement = document.getElementById('numbers');
var lowercaseElement = document.getElementById('lowercase');
var uppercaseElement = document.getElementById('uppercase');

var resultElement = document.getElementById('result');
var lengthElement = document.getElementById('length');

var generateElement = document.getElementById('generate');



// Add event listener to generate button
generate.addEventListener('click', () => {
    var length = +lengthElement.value;
    var hasLower = lowercaseElement.checked;
    var hasUpper = uppercaseElement.checked;
    var hasNumeric = numericElement.checked;
    var hasSpecial = specialElement.checked;

    resultElement.innerText = generatePassword(hasLower, hasUpper, hasNumeric, hasSpecial, length);
});

