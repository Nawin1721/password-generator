const lengthSlider = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");

lengthSlider.addEventListener("input", () => {
    lengthValue.textContent = lengthSlider.value;
});

function generatePassword() {

    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()";

    let allCharacters = "";

    if(document.getElementById("uppercase").checked){
        allCharacters += upper;
    }

    if(document.getElementById("lowercase").checked){
        allCharacters += lower;
    }

    if(document.getElementById("numbers").checked){
        allCharacters += numbers;
    }

    if(document.getElementById("symbols").checked){
        allCharacters += symbols;
    }

    if(allCharacters === ""){
        alert("Please select at least one option!");
        return;
    }

    let password = "";

    for(let i = 0; i < lengthSlider.value; i++){

        let randomIndex =
            Math.floor(Math.random() * allCharacters.length);

        password += allCharacters[randomIndex];
    }

    document.getElementById("password").value = password;
}

function copyPassword(){

    const passwordField =
        document.getElementById("password");

    passwordField.select();

    navigator.clipboard.writeText(passwordField.value);

    alert("Password Copied!");
}