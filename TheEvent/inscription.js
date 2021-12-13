var signin_here = document.querySelector(".sign_in_here");
var main_form_login = document.querySelectorAll(".main_login");
var sform = document.querySelectorAll(".s_form");


var signup_here = document.querySelector(".sign_up_here");
var main_form = document.querySelectorAll(".main");
var submit = document.querySelector(".submit_here");
var user_name = document.querySelector("#user-name");
var shown_name = document.querySelector("#shown-name");
let forumnumber = 0;
signup_here.addEventListener('click', function() {
    if (!validateform()) {
        return false;
    }
    forumnumber++;
    updateforum();


});


submit.addEventListener('click', function() {
    if (!validateform()) {
        return false;
    }

    shown_name.innerHTML = user_name.value;
    forumnumber++;
    updateforum();

});

function updateforum() {
    main_form.forEach(function(update_forum_number) {
        update_forum_number.classList.remove('active');

    });
    main_form[forumnumber].classList.add('active');
}

function validateform() {
    var validatesignupinputs = document.querySelectorAll(".main.active input");
    validate = true;
    validatesignupinputs.forEach(function(val_in) {
        val_in.classList.remove('warning');
        if (val_in.hasAttribute('require')) {
            if (val_in.value.length == 0) {
                validate = false;
                val_in.classList.add('warning');
            }
        }
    });
    return validate;
}




var click_eye = document.querySelector(".passcode");
var eye = document.querySelector(".passcode");
var password_input = document.querySelector("#password-input")

var click_eye1 = document.querySelector(".passcode1");
var eye1 = document.querySelector(".passcode1");
var password_input1 = document.querySelector("#password-input1")

click_eye.addEventListener('click', function() {

    if (password_input.type == 'password') {
        password_input.type = "text";
        eye.classList.remove('fa-eye-slash');
        eye.classList.add('fa-eye');
        password_input.classList.add('warning');

    } else {
        password_input.type = "password";
        eye.classList.add('fa-eye-slash');
        eye.classList.remove('fa-eye');
        password_input.classList.remove('warning');

    }
});


click_eye1.addEventListener('click', function() {

    if (password_input1.type == 'password') {
        password_input1.type = "text";
        eye1.classList.remove('fa-eye-slash');
        eye1.classList.add('fa-eye');
        password_input1.classList.add('warning');

    } else {
        password_input1.type = "password";
        eye1.classList.add('fa-eye-slash');
        eye1.classList.remove('fa-eye');
        password_input1.classList.remove('warning');

    } 
});

var tickspan = document.querySelector(".terms span")
var tick = document.querySelector(".terms span i")
tickspan.addEventListener('click', function() {
    tick.classList.toggle('d-none');
});



signin_here.addEventListener('click', function() {
    sform.forEach(function(s_form) {
        s_form.classList.toggle('d-none');
    });
});

var sign_up_back_here = document.querySelector(".sign_up_back_here");
sign_up_back_here.addEventListener('click', function() {
    sform.forEach(function(s_form) {
        s_form.classList.toggle('d-none');
    });

});


let signinnumber = 0;
var signin_submit = document.querySelector(".signin_submit");
signin_submit.addEventListener('click', function() {

    if (!validateform_login()) return false;
    signinnumber++;
    update_signin();
});


function update_signin() {
    main_form_login.forEach(function(update_forum_number) {
        update_forum_number.classList.remove('active');
    });
    main_form_login[signinnumber].classList.add('active');
}




function validateform_login() {
    var validatesigininputs = document.querySelectorAll(".main_login.active input");
    console.log(validatesigininputs);
    validate_signin = true;

    validatesigininputs.forEach(function(valid_in) {
        valid_in.classList.remove('warning');
        if (valid_in.hasAttribute('require')) {
            if (valid_in.value.length == 0) {
                validate_signin = false;
                valid_in.classList.add('warning');
            }
        }
    });
    return validate_signin;
}