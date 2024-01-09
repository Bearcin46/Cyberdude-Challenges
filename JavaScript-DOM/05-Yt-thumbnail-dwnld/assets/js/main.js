const inputUrlEl = document.getElementById("inputUrl");
const imgEl = document.getElementById("image");
const linkTag = document.getElementById("linkTag");

inputUrlEl.addEventListener("change", (e) => {
  e.preventDefault();
  const input = e.target.value;
  const headTag = input.substring(0, 17);
  const headTag2 = input.substring(0, 32);

  console.log(headTag2.length);
  if (headTag === "https://youtu.be/") {
    const subStringVal = input.substring(17, 28);
    const formattedUrl = `https://img.youtube.com/vi/${subStringVal}/sddefault.jpg`;
    imgEl.src = formattedUrl;
    const imgDiv = document.getElementById("imgContainer");
    imgDiv.classList.remove("hidden");
    linkTag.href = formattedUrl;
  } else if (headTag2 === "https://www.youtube.com/watch?v=") {
    const live = input.substring(32, 43);
    const formattedLiveUrl = `https://img.youtube.com/vi/${live}/sddefault.jpg`;
    imgEl.src = formattedLiveUrl;
    const imgDiv = document.getElementById("imgContainer");
    imgDiv.classList.remove("hidden");
    linkTag.href = formattedLiveUrl;
  } else {
    alert("Recheck the Url");
  }

  //   console.log(e.target.value);
});

//https://img.youtube.com/vi/lje9-Ft71IA/sddefault.jpg
//https://youtu.be/OLZvAocak-g?si=LDkWNEV4QtvfDqqK
//https://youtu.be/YAKMJpBWSqA?si=7dkYVaqDc_37FTf5
//https://youtu.be/mMt0DY8szZk?si=tCyF7j1dfgrWUUp0
// let a="YAKMJpBWSqA"
// console.log(a.length)
//https://www.youtube.com/watch?v=aGHVddspRq0&list=PL73Obo20O_7gcXt0cfQA14jey8zavtKAq&pp=iAQB
