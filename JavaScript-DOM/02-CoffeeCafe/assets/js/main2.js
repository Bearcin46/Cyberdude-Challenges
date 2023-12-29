function hamburger() {
  let x = document.getElementById("links");
  if (x.classList.contains("hidden")) {
    x.classList.remove("hidden");
  } else {
    x.classList.add("hidden");
  }
}
