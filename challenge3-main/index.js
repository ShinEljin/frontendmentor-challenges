const form = document.querySelector(".right-col form");
const inputs = document.querySelectorAll(".right-col form input");

form.addEventListener("submit", function(e){
  e.preventDefault();
  inputs.forEach(function(input){
    if (!input.value){
      input.parentElement.classList.add("error");
    } else {
      input.parentElement.classList.remove("error");
    }
  });
});
