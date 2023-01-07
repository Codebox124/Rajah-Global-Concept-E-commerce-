const form = document.querySelector("#form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const passwordCheck = document.querySelector("#password2");
function checkInput() {
  const nameValue = name.value.trim();
  const emailValue = email.value.trim();
  const paswordValue = password.value.trim();
 const passwordCheckValue = passwordCheck.value.trim();
//  validation for name
  if (nameValue === "") {
    errorMsg(name, "Name cannot be empty");
  } else if (nameValue.length < 3) {
    errorMsg(name, "Atleast three characters");
  } else {
    success(name);
  }
// email validation
if(emailValue === ''){
  errorMsg(email, "Email cannot be empty")
}
else if(!isEmail(emailValue)){
  errorMsg(email, "Email is not valid")
}
else{
  success(email)
}

}
function errorMsg(input, value) {
  const formControl = input.parentElement;
  const message = formControl.querySelector("small");
  message.innerText = value;
  formControl.className = "form-control error";
}
function success(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success"
}
function isEmail(email) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInput();
});
