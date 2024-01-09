const inputUrlEl = document.getElementById("inputUrl");
inputUrlEl.addEventListener("change", (e) => {
  e.preventDefault();
  const input = e.target.value;

  const subStringVal = input.substring(17, 28);
  const formattedUrl = `https://img.youtube.com/vi/${subStringVal}/sddefault.jpg`;
  const imgEl = document.getElementById("image");
  imgEl.src = formattedUrl;
  const imgDiv = document.getElementById("imgContainer");
  imgDiv.classList.remove("hidden");
  const linkTag = document.getElementById("linkTag");
  linkTag.href = formattedUrl;
  //   console.log(e.target.value);
});

// const downloadBtn = document.getElementById("btn");
// downloadBtn.addEventListener("click", () => {
//   var imageUrl = document.getElementById("image").src;
//   document.getElementById("linkTag").href = imageUrl;
//   document.getElementById("linkTag").click();
// });
//https://img.youtube.com/vi/lje9-Ft71IA/sddefault.jpg
//https://youtu.be/OLZvAocak-g?si=LDkWNEV4QtvfDqqK
//https://youtu.be/YAKMJpBWSqA?si=7dkYVaqDc_37FTf5
//https://youtu.be/mMt0DY8szZk?si=tCyF7j1dfgrWUUp0
// let a="YAKMJpBWSqA"
// console.log(a.length)
