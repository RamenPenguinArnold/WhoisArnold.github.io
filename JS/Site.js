const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  
  console.log("Name:", form.elements[1].value);
  console.log("Email:", form.elements[2].value);
  event.preventDefault();
});
