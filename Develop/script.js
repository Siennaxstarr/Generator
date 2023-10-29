var lower_case = "abcdefghijklmnopqrstuvwxyz";
var upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var special_chars = "!@#$%^&*()_+[]{}|;:,.<>?";

function generatePassword() {
    var length = parseInt(prompt("Enter the password length (8-128):"));

    if (isNaN(length) || length < 8 || length > 128) {
        return "Invalid password length. Please enter a number between 8 and 128.";
    }

var includeLowercase = confirm("Include lowercase characters?");
var includeUppercase = confirm("Include uppercase characters?");
var includeNumbers = confirm("Include numbers?");
var includeSpecialChars = confirm("Include special characters?");


    if (!(includeLowercase || includeUppercase || includeNumbers || includeSpecialChars)) {
        return "At least one character type must be selected.";
    }

    var charset = "";
    if (includeLowercase) charset += lower_case;
    if (includeUppercase) charset += upper_case;
    if (includeNumbers) charset += numbers;
    if (includeSpecialChars) charset += special_chars;

    var password = "";
    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    return password;
}

var generateBtn = document.querySelector("#generate");

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
