const email = document.getElementById("email");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const error = document.getElementById("error-message");
const message = document.getElementById("message");
const messagebody = document.getElementById("messagebody");
const inlineEmail = document.getElementById("inline-email");
function validateEmail() {
  if (!emailRegex.test(email.value)) {
    email.style.borderColor = "#FF644E";
    email.style.backgroundColor = "rgba(255,100,78,0.3)";
    error.style.display = "block";
  } else {
    email.style.borderColor = "black";
    email.style.backgroundColor = "transparent";
    error.style.display = "none";
    message.style.display = "flex";
    messagebody.style.display = "block";
    inlineEmail.innerHTML = email.value;
  }
}
function removeMessage(){
    message.style.display = "none";
    messagebody.style.display = "none";
}
