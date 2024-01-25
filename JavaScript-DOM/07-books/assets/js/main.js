async function books() {
  try {
    const response = await fetch("https://www.dbooks.org/api/recent");
    const json = await response.json();
    const bookDetails = json.books;
    getBookDetails(bookDetails);
  } catch (error) {
    console.error("Error:", error);
  }
}
books();

function getBookDetails(data) {
  data.forEach((givenData) => {
    const mainDiv = document.createElement("div");
    mainDiv.setAttribute(
      "class",
      "grid  gap-1 rounded-sm shadow-md shadow-[#0bb3a5ff] px-2 py-2 bg-cyan-500"
    );
    mainDiv.innerHTML = `<div class="w-full py-2 rounded-md flex items-center justify-center">
    <img
    src="${givenData.image}"
    alt=""
    class="w-[300px] h-[300px] rounded-md object-cover"
  />
 </div>

 <div class="md:mt-2 px-2 flex-none ">
   <h3 class="font-bold text-xl">
     Title : <span class="text-lg font-semibold">${givenData.title}</span>
   </h3>
   <h3 class="font-bold text-xl">
     ID : <span class="text-lg font-semibold">${givenData.id}</span>
   </h3>
   <h3 class="font-bold text-xl">
     Author : <span class="text-lg font-thin">${givenData.authors}</span>
   </h3>
   <h3 class="font-bold text-xl">
     Cost : <span class="text-lg font-semibold">$ 8 </span>
   </h3>
   <div class="w-full mt-3 flex items-center justify-center mb-2">
     <button
       class="bg-[#0bb3a5ff] hover:bg-[#39625f] text-white rounded-md px-6 py-2 font-semibold"
     >
       DONATE
     </button>
   </div>
 </div>

   `;
    const container = document.getElementById("mainContainer");
    container.append(mainDiv);
  });
}
