const button_1 = document.getElementById("button-1");
const button_2 = document.getElementById("button-2");
const responsive_login = document.getElementById("responsive-login");
const responsive_create = document.getElementById("responsive-create");
const circle = document.getElementById("circle");
const pannel_right = document.getElementById("pannel-right");
const pannel_left = document.getElementById("pannel-left");
const img_1 = document.getElementById("img-1");
const img_2 = document.getElementById("img-2");
const signin_signup = document.getElementById("signin-signup");
button_1.addEventListener("click", () => {
  circle.classList.add("click-circle-1");
  pannel_right.classList.add("pannel-right-1");
  pannel_left.classList.add("pannel-left-1");
  img_2.classList.add("img-2-part-1");
  img_1.classList.add("img-1-part-1");
  signin_signup.classList.add("sign_in_form_1");
});
button_2.addEventListener("click", () => {
  circle.classList.remove("click-circle-1");
  pannel_right.classList.remove("pannel-right-1");
  pannel_left.classList.remove("pannel-left-1");
  img_2.classList.remove("img-2-part-1");
  img_1.classList.remove("img-1-part-1");
  signin_signup.classList.remove("sign_in_form_1");
});
responsive_login.addEventListener("click", () => {
  circle.classList.toggle("click-circle-responsive");
  signin_signup.classList.toggle("sign_in_form_1");
});
responsive_create.addEventListener("click", () => {
  circle.classList.toggle("click-circle-responsive");
  signin_signup.classList.toggle("sign_in_form_1");
});
