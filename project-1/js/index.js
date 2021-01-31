// ======= FOCUS =======

const inputs = document.querySelectorAll(".field-input");

// ======= Add focus ===

function addfocus() {
  let parent = this.parentNode.parentNode;
  parent.classList.add("focus");
}

// ======= Remove focus =======

function remfocus() {
  let parent = this.parentNode.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

//  ======  To Call function ===

inputs.forEach((input) => {
  input.addEventListener("focus", addfocus);
  input.addEventListener("blur", remfocus);
});
