function show() {
  if (document.getElementById("mobil-menu").style.display == "none") {
    document.getElementById("mobil-menu").style.display = "block";
  }
  document.body.style.overflow = "hidden";
}
function exit() {
  if (document.getElementById("mobil-menu").style.display == "block") {
    document.getElementById("mobil-menu").style.display = "none";
  }
  document.body.style.overflow = "auto";
}

document
  .querySelectorAll(".mobil-menu a, .mobil-menu .exit")
  .forEach((item) => item.addEventListener("click", exit));
