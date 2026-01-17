function toggleMenu() {
  let nav = document.getElementById("navLinks");

  if (nav.style.display === "flex") {
    nav.style.display = "none";
  } else {
    nav.style.display = "flex";
  }
}

function showSpecial() {
  let text = document.getElementById("specialText");
  text.classList.toggle("hidden");
}

function submitForm() {
  let name = document.getElementById("name").value;

  document.getElementById("formResult").innerHTML =
    "✅ Thank you " + name + "! Your message has been sent.";

  return false; // prevents page refresh
}
