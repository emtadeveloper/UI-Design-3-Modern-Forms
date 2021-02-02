// LOGIN SHOW annd HIDDEN
const signUp = document.getElementById("sign-up"),
  signIn = document.getElementById("sign-in"),
  loginIn = document.getElementById("login-in"),
  loginUp = document.getElementById("login-up");

signUp.addEventListener("click", () => {
  console.log("======");
  //   Remove classes first if they exist
  loginIn.classList.remove("block");
  loginUp.classList.remove("none");

  //Add Classes
  loginIn.classList.add("none");
  loginUp.classList.add("block");
});
signIn.addEventListener("click", () => {
  console.log("======");
  //   Remove classes first if they exist
  loginIn.classList.remove("none");
  loginUp.classList.remove("block");

  //Add Classes
  loginIn.classList.add("block");
  loginUp.classList.add("none");
});
