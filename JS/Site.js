const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  
  console.log("Name:", form.elements[1].value);
  console.log("Email:", form.elements[2].value);
  var inputName = form.elements[1].value;
  var inputEmail = form.elements[2].value;
  localStorage.setItem("Name",inputName);
  localStorage.setItem("Email",inputEmail);
  const check = document.getElementById("checker");
  check.textContent = "Is this right," +  localStorage.getItem("Name")+"?" +"\n"+ "The Email is " +localStorage.getItem("Email");
  event.preventDefault();
});
