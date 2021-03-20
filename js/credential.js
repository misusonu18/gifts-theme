let email = document.getElementById('email');
let password = document.getElementById('password');

let emailValidation = document.getElementById('email-validation');
let passwordValidation = document.getElementById('password-validation');

function onChangeInput(idName) {
    if (idName === 'email') {
        let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        let result = (email.value).match(emailRegex);
        if (email.value === '') {
            emailValidation.innerText = 'Please Enter Email Address'; 
        }
        else {
            if (!result) {
                emailValidation.innerText = 'Invalid Email Address';
            }
            else 
                emailValidation.innerText = '';
        }

    }
    else {
        if (password.value === '') {
            passwordValidation.innerText = 'Please Enter Password'; 
        }
        else 
            passwordValidation.innerText = '';
    }
}

function submitForm() {
    if (email.value === '' && password.value === '') {
        emailValidation.innerText = 'Please Enter Email Address'; 
        passwordValidation.innerText = 'Please Enter Password';
        console.log('ew');
    }
    else {
        window.location.replace('index.html');
    }
}