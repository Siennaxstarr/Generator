
lower_case = "abcdefghijklmnopqrstuvwxyz"
upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
Number = "1234567890"
ans = lower_case + upper_case + Number
length = 8
password = ("travelthewrld")
print = ("Generated password is ", password)

var generateBtn = document.querySelector("#generate");
function generatePassword() {
    console.log("Hello! You clicked the button!")
// 1. Prompt the user for the password criteria
//      a. Password Length 8 < 128
//      b. Lowercase, uppercase, numbers, special characters
// 2. Validate the input.
// 3. Generate Password based on Criteria 

// 4.Display password on to the page 
 return "1xTvuMbrE2";
}
function writePassword(){
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}


generateBtn.addEventListener("click", writePassword);



