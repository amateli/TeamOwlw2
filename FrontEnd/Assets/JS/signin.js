const user = document.querySelector("#username");
const pass = document.querySelector("#password");
const form = document.querySelector("#form");
const passImg = document.querySelector (".pass")
const show = document.querySelector(".show");
const hide = document.querySelector(".hide");


form.addEventListener("submit", (e) => {
  e.preventDefault();
  // checkInputs();
});

passImg.addEventListener("click", () => {
  if (pass.type === "password") {
    pass.type = "text"
    hide.className = "hide inactive"
    
  } else {
    pass.type = "password"
  }
});

user.addEventListener("input", (e) => {
  checkInputs();   
});

function checkInputs() {
  const userValue = user.value.trim();
  const passValue = pass.value.trim();

  if(userValue === "") {
    setErrorFor(user, "Username cannot be blank"); 
  } else if (userValue.length <= 7) {
    setErrorFor(user, "Username cannot be less than 8 characters")
  } else {
    setSuccessFor(user);
  }
}

function setErrorFor(input, message) {
  const signin = input.parentElement;
  const small = signin.querySelector("small");
  small.innerText = message;
  signin.className = "signin error"
}

function setSuccessFor(input) {
  const signin = input.parentElement;
  signin.className = "signin success";
}