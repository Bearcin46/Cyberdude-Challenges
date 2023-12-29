const hamburgerBtn = document.getElementById("hamburger");
hamburgerBtn.addEventListener("click", () => {
  let x = document.getElementById("links");
  if (x.classList.contains("hidden")) {
    x.classList.remove("hidden");
  } else {
    x.classList.add("hidden");
  }
});
