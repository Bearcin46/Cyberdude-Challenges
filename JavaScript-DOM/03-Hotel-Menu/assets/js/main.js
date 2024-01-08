import menulist from "../../public/food.json";

menulist.forEach((menu) => {
  const mainDiv = document.createElement("div");
  mainDiv.setAttribute(
    "class",
    "border-2 w-fit px-2 pt-2 border-green-800 relative rounded-md"
  );

  //div for img
  const imgContainer = document.createElement("div");
  imgContainer.setAttribute(
    "class",
    "h-[200px] w-[200px] overflow-hidden rounded-md"
  );
  //img
  const foodImage = document.createElement("img");
  foodImage.setAttribute(
    "class",
    "hover:scale-110 transition-all duration-1000 cursor-pointer object-fill w-full h-full h-[200px] w-[200px]"
  );
  foodImage.src = menu.foodImage;
  //append img to imgcontainer
  imgContainer.appendChild(foodImage);

  //food details
  const foodDetails = document.createElement("div");
  //heading
  const headDiv = document.createElement("div");
  const heading = document.createElement("h3");
  heading.textContent = menu.foodName;
  heading.setAttribute("class", "font-bold text-red-700");
  headDiv.setAttribute("class", "mt-1");
  headDiv.appendChild(heading);
  //price
  const priceDiv = document.createElement("div");
  const price = document.createElement("h3");
  price.setAttribute("class", "font-bold ");
  price.innerText = menu.foodPrice;
  priceDiv.setAttribute("class", "mt-1 mb-1");
  priceDiv.appendChild(price);

  foodDetails.append(headDiv, priceDiv);
  //svg
  const svgElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svgElement.setAttribute("width", "36");
  svgElement.setAttribute("height", "36");
  svgElement.setAttribute("viewBox", "0 0 24 24");
  svgElement.setAttribute(
    "class",
    "text-white bg-green-800  py-1 absolute right-0 bottom-0 hover:bg-red-600 cursor-pointer"
  );

  // Create the path element
  const pathElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  pathElement.setAttribute("fill", "currentColor");
  pathElement.setAttribute(
    "d",
    "M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2s-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2s2-.9 2-2s-.9-2-2-2zm-8.9-5h7.45c.75 0 1.41-.41 1.75-1.03L21 4.96L19.25 4l-3.7 7H8.53L4.27 2H1v2h2l3.6 7.59l-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2zM12 2l4 4l-4 4l-1.41-1.41L12.17 7H8V5h4.17l-1.59-1.59L12 2"
  );

  //append path to element
  svgElement.appendChild(pathElement);

  //append imgcontainer,fooddetails,svgelement to mainDiv
  mainDiv.append(imgContainer, foodDetails, svgElement);

  //append this to main container in doc
  const mainContainer = document.getElementById("mainFoodDiv");
  mainContainer.appendChild(mainDiv);
});
