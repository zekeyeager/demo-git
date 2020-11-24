function validateEmail(email) {
    var count = 0;
    for (var i = 0; i < email.length; i++) {
        if (email[i] == "@")
            count++;
    }

    return count == 1;
}

function validatePsw(psw) {
    if (psw.length < 6)
        return false;

    var flagSpecialChar = false;
    var flagCapital = false;
    for (var i = 0; i < psw.length; i++) {
        if (!(psw[i] >= "A" && psw[i] <= "Z" || psw[i] >= "a" && psw[i] <= "z"))
            flagSpecialChar = true;
        else if (psw[i] >= "A" && psw[i] <= "Z")
            flagCapital = true;
    }
    return flagSpecialChar && flagCapital;
}

const submitButton = document.getElementsByClassName('signupbtn')[0];

submitButton.onclick = function() {
    const inputs = document.getElementsByTagName('input');
    const emailElement = inputs[0];
    const passwordElement = inputs[1];

    const errorEmail = document.getElementById("err-email");
    const errorPassword = document.getElementById("err-psw");

    const emailInput = emailElement.value;
    const passwordInput = passwordElement.value;

    if (!validateEmail(emailInput)) {
        errorEmail.innerHTML = 'Vui lòng nhập đúng định dạng email.';
    }

    if (!validatePsw(passwordInput)) {
        errorPassword.innerHTML = 'Password có ít nhất 6 ký tự, có ít nhất 1 ký tự đặc biệt, có ít nhất 1 ký tự hoa';
    }
}