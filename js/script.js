//Assignment code 
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", generatePassword);


// Retrieve the DOM object
var cbSpecialChar = document.querySelector("#specialchar");
var cbNumbers = document.querySelector("#numbers");
var cbUpperCase = document.querySelector("#uppercase");
var cbLowerCase = document.querySelector("#lowercase");

var cbSpecialCharChecked = false;
var cbNumbersChecked = false;
var cbUpperCasedChecked = false;
var cbLowerCaseChecked = false;

//checkbox event handler
cbSpecialChar.addEventListener("click", setSpecialChar);
cbNumbers.addEventListener("click", setNumbers);
cbUpperCase.addEventListener("click", setUpperCase);
cbLowerCase.addEventListener("click", setLowerCase);

//function to handle checkbox action
function setSpecialChar() {
    cbSpecialCharChecked = cbSpecialChar.checked;
}
function setNumbers() {
    cbNumbersChecked = cbNumbers.checked;
}
function setUpperCase() {
    cbUpperCasedChecked = cbUpperCase.checked;
}
function setLowerCase() {
    cbLowerCaseChecked = cbLowerCase.checked;
}

//function to shuffle array to generate random output
function shuffle(arrayShuffle) {
    var counter = arrayShuffle.length;
    var temp = null;
    var index = 0;

    //while there are elements in the array
    while (counter > 0) {
        //pick a random index
        index = Math.floor(Math.random() * counter);
        //decrease counter by 1
        counter--;
        //swap the last element
        temp = arrayShuffle[counter];
        arrayShuffle[counter] = arrayShuffle[index];
        arrayShuffle[index] = temp;
    }
    return arrayShuffle;
}

//algorithm for password 
function generatePassword() {
    //check the length of password and change into integer
    var passwordLength = document.querySelector("#length").value;
    var passwordLength = parseInt(passwordLength);

    var spin = 0;
    var characters = [];
    //while loop to generate password from checked box
    while (spin < passwordLength) {

        if (cbSpecialCharChecked) {
            var arrayLength = specialCharacters.length;
            var randomSpecialCase = specialCharacters[Math.floor(Math.random() * arrayLength)];
            characters.push(randomSpecialCase);
            spin = characters.length;
            if (spin >= passwordLength)
                break;
        }

        if (cbNumbersChecked) {
            var arrayLength = numericCharacters.length;
            var randomNumeric = numericCharacters[Math.floor(Math.random() * arrayLength)];
            characters.push(randomNumeric);
            spin = characters.length;
            if (spin >= passwordLength)
                break;
        }

        if (cbLowerCaseChecked) {
            var arrayLength = lowerCasedCharacters.length;
            var randomLower = lowerCasedCharacters[Math.floor(Math.random() * arrayLength)];
            characters.push(randomLower);
            spin = characters.length;
            if (spin >= passwordLength)
                break;
        }

        if (cbUpperCasedChecked) {
            var arrayLength = upperCasedCharacters.length;
            var randomUpper = upperCasedCharacters[Math.floor(Math.random() * arrayLength)];
            characters.push(randomUpper);
            spin = characters.length;
            if (spin >= passwordLength)
                break;
        }
    }
    characters = shuffle(characters);
    passwordString = characters.join("");
    console.log(passwordString);
    document.querySelector("#result_password").value = passwordString;
}