const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');


form.addEventListener('submit',e => {
    e.preventDefault();

    var firstName = fname.value.trim();
    var lastName = lname.value.trim();
    var emailValue = email.value.trim();
    var passwordValue = password.value.trim();

    if(firstName === '' || !firstName){
        errorFunc(fname,'First Name must not be empty')
    } else successFunc(fname)
    
    if(lastName === '' || !lastName){
        errorFunc(lname,'Last Name must not be empty')
    } else successFunc(lname)

    if(emailValue === '' || !emailValue){
        errorFunc(email,'Looks like this is not an email')
    } else successFunc(email)

    if(passwordValue === '' || !passwordValue){
        errorFunc(password,'password can not be empty')
    } else successFunc(password)

})

function errorFunc(req,message) {
    const formControl = req.parentElement;
    const span = formControl.querySelector('span');
    span.innerText = message;
    console.log()
    req.className += 'error';
    req.classList.add("error");
    span.className += 'error-text';

}

function successFunc(req) {
    // req.className += 'success'
    req.classList.add("success");
    req.classList.remove("error");

    const formControl = req.parentElement;
    const span = formControl.querySelector('span');
    span.innerText = '';
}
