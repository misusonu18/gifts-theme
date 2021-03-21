let email = document.getElementById('email');
let password = document.getElementById('password');
let emailValidation = document.getElementById('email-validation');
let passwordValidation = document.getElementById('password-validation');
let emailFlag = true;
let passwordFlag = true;

function onChangeInput(idName) {
    if (idName === 'email') {
        let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        let result = (email.value).match(emailRegex);
        if (email.value === '') {
            emailValidation.innerText = 'Please Enter Email Address'; 
            emailFlag =  false;
        }
        else {
            if (!result) {
                emailValidation.innerText = 'Invalid Email Address';
                emailFlag =  false;
            }
            else 
                emailValidation.innerText = '';
                emailFlag =  true;
        }

    }
    else {
        if (password.value === '') {
            passwordValidation.innerText = 'Please Enter Password'; 
            passwordFlag =  false;
        }
        else 
            passwordValidation.innerText = '';
            passwordFlag =  true;
    }
}

function submitForm() {
    if (emailFlag === false && passwordFlag === false) {
        emailValidation.innerText = 'Please Enter Email Address'; 
        passwordValidation.innerText = 'Please Enter Password';
        console.log('ew');
    }
    else {
        console.log(emailFlag);
        // window.location.replace('index.html');
    }
}