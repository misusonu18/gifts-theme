let name = document.getElementById('name');
let phoneNumber = document.getElementById('phone-number');
let email = document.getElementById('email');
let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirm-password');

let nameValidation = document.getElementById('name-validation');
let phoneNumberValidation = document.getElementById('phone-number-validation');
let emailValidation = document.getElementById('email-validation');
let passwordValidation = document.getElementById('password-validation');
let confirmPasswordValidation = document.getElementById('confirm-password-validation');

let emailFlag = 0;
let passwordFlag = 0;
let nameFlag = 0;
let phoneNumberFlag = 0;
let confirmPasswordFlag = 0;

function onChangeInput(idName) {
    if (idName === 'email') {
        let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        let result = (email.value).match(emailRegex);
        if (email.value === '') {
            emailValidation.innerText = 'Please Enter Email Address'; 
            emailFlag =  0;
        }
        else {
            if (!result) {
                emailValidation.innerText = 'Invalid Email Address';
                emailFlag =  0;
            }
            else 
                emailValidation.innerText = '';
                emailFlag =  1;
        }

    }
    if (idName === 'name') {
        let nameRegex = /^[a-zA-Z ]{2,30}$/;

        let result = (name.value).match(nameRegex);
        if (name.value === '') {
            nameValidation.innerText = 'Please Enter Name'; 
            nameFlag =  0;
        }
        else {
            if (!result) {
                nameValidation.innerText = 'Invalid First Name';
                nameFlag = 0;
            }
            else {
                nameValidation.innerText = '';
                nameFlag = 1;
            }
        }
    }
    if (idName === 'phone-number') {
        let phoneRegex = /^[+]?(1\-|1\s|1|\d{3}\-|\d{3}\s|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/g;

        let result = (phoneNumber.value).match(phoneRegex);
        if (phoneNumber.value === '') {
            phoneNumberValidation.innerText = 'Please Enter Phone Number';
            phoneNumberFlag = 0
        }
        else {
            if(!result) {
                phoneNumberValidation.innerText = 'Invalid Phone Number';
                phoneNumberFlag = 0
            }
            else {
                phoneNumberValidation.innerText = '';    
                phoneNumberFlag = 1;
            }
        }
    }
    if (idName === 'password') {
        
        if (password.value === '') {
            passwordValidation.innerText = 'Please Enter Password'; 
            passwordFlag =  0;
        }
        else {
            passwordValidation.innerText = '';
            passwordFlag =  1;
        }
    }
    if (idName === 'confirm-password') {
        
        if (confirmPassword.value === '') {
            confirmPasswordValidation.innerText = 'Please Enter Confirm Password'; 
            confirmPasswordFlag =  0;
        }
        else {
            if (password.value === confirmPassword.value) {
                confirmPasswordValidation.innerText = '';
                confirmPasswordFlag =  1;
            }
            else {
                confirmPasswordValidation.innerText = 'Confirm Password Does Not Match. Please Enter Proper Password';
                confirmPasswordFlag =  0;
            }
        }
    }
}

function submitForm() {
    if (emailFlag === 0 && passwordFlag === 0) {
        if (emailFlag == 0) {
            emailValidation.innerText = 'Please Enter Email Address'; 
        }
        if (passwordFlag == 0) {
            passwordValidation.innerText = 'Please Enter Password';
        }
        console.log('ew');
    }
    else {
        window.location.replace('index.html');
    }
}

function submitFormRegister() {
    console.log(nameFlag + " " +  phoneNumberFlag + " " + emailFlag + " " + passwordFlag + " " + confirmPasswordFlag);
    if (nameFlag === 0 && phoneNumberFlag === 0 && emailFlag === 0 && passwordFlag === 0 && confirmPasswordFlag === 0) {
        if (nameFlag == 0) {
            nameValidation.innerText = 'Please Enter Name';
        }
        if (phoneNumberFlag == 0) {
            phoneNumberValidation.innerText = 'Please Enter Phone Number';
        }
        if (emailFlag == 0) {
            emailValidation.innerText = 'Please Enter Email Address'; 
        }
        if (passwordFlag == 0) {
            passwordValidation.innerText = 'Please Enter Password';
        }
        if (confirmPasswordFlag == 0) {
            confirmPasswordValidation.innerText = 'Please Enter Confirm Password';
        }
    }
    else {
        window.location.replace('login.html');
    }
}