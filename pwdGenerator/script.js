const passwordTxt = document.getElementById("result");
const length = document.getElementById("length");
const clipboardEl = document.getElementById("clipboard");
const numberEl = document.getElementById("numbers");
const symbolEl = document.getElementById("symbols");
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const generateBtn = document.getElementById("generate");


const lower = "abcdefghijklmnopqrstuvwxyz";
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";








const generatePassword = (length, characters) => {
    let password = "";
    for (let i = 0; i < length; i++) {
        password += characters.charAt(
            Math.floor(Math.random() * characters.length)
        );
    }
    return password;
};

generateBtn.addEventListener("click", () => {
    let characters = "";
    numberEl.checked ? (characters += numbers) : "";
    symbolEl.checked ? (characters += symbols) : "";
    uppercaseEl.checked ? (characters += upper) : "";
    lowercaseEl.checked ? (characters += lower) : "";
    passwordTxt.value = generatePassword(length.value, characters);
    console.log(generatePassword(length.value, characters));


});



clipboardEl.addEventListener("click", () => {
    passwordTxt.select()
    document.execCommand("copy");
    alert("Password Copied");
});



passwordTxt.addEventListener('mousemove', () => {
    clipboardEl.style.visibility = "visible"
})