const form = document.querySelector("#contact-form")
const email = document.querySelector("#email")
const message = document.querySelector("#message")
const subject = document.querySelector("#subject")
const name = document.querySelector("#name")

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

let emailCheck = !true;
let subjectCheck = !true;
let messageCheck = !true;
let nameCheck = !true;



function checkInputs (){
    const emailValue = email.value.trim();
    const messageValue = message.value.trim();
    const nameValue = name.value.trim();
    const subjectvalue = subject.value.trim();

    if (nameValue.length <= 1){
        setErrorFor(name, "Message: Cannot be blank")
    } else {
        setSuccessFor (name)
        nameCheck = true;
    }

    if (subjectvalue.length <= 1){
        setErrorFor(subject, "Message: Cannot be blank")
    } else {
        setSuccessFor(subject)
        subjectCheck = true;
    }

    if (messageValue.length <= 1){
        setErrorFor(message, "Message: Cannot be blank")
    } else {
        setSuccessFor(message)
        messageCheck = true;
    };

    if (emailValue === ""){
        setErrorFor(email, "Email: Input field cannot be blank")
    }   else if (!isEmail(emailValue)){
            setErrorFor(email, "email is not valid")
    }   else {
        setSuccessFor(email);
        emailCheck = true;
    }
    if (emailCheck === true && subjectCheck === true && nameCheck === true && messageCheck === true){
        console.log("yeah")
        email.value = "";
        message.value = "";
        name.value = "";
        subject.value = "";
    }
}  

function setErrorFor (input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    small.innerText = message;
    // formControl.className = "form-control error"
}

function setSuccessFor(input){
    const formControl = input.parentElement;
    const small = formControl.querySelector("small")
    small.style.display = ("none")
}

function isEmail(email){
    return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}