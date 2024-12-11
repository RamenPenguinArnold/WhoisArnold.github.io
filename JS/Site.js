const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Name:", form.elements[1].value);
  console.log("Email:", form.elements[2].value);
});
