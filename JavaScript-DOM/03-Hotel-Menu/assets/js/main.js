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
  priceDiv.setAttribute("class", "mt-1 mb-1 flex gap-2 pr-7");
  priceDiv.appendChild(price);

  //if free delievery feature it
  if (menu.delievery === "free") {
    const deliveryDiv = document.createElement("div");
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svg.setAttribute("width", "26");
    svg.setAttribute("height", "26");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("class", "text-[#e01b70ff]");

    // Create the first path element
    var path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path1.setAttribute("fill", "currentColor");
    path1.setAttribute(
      "d",
      "M19 7c0-1.1-.9-2-2-2h-3v2h3v2.65L13.52 14H10V9H6c-2.21 0-4 1.79-4 4v3h2c0 1.66 1.34 3 3 3s3-1.34 3-3h4.48L19 10.35V7z"
    );

    // Create the second path element
    var path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path2.setAttribute("fill", "white");
    path2.setAttribute(
      "d",
      "M4 14v-1c0-1.1.9-2 2-2h2v3H4zm3 3c-.55 0-1-.45-1-1h2c0 .55-.45 1-1 1z"
    );

    // Create the third path element
    var path3 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path3.setAttribute("fill", "currentColor");
    path3.setAttribute(
      "d",
      "M5 6h5v2H5zm14 7c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3zm0 4c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1z"
    );

    // Append the path elements to the SVG
    svg.appendChild(path1);
    svg.appendChild(path2);
    svg.appendChild(path3);
    //span tag
    const spanEl = document.createElement("span");
    spanEl.setAttribute("class", "text-[#e01b70ff] text-[14px] font-semibold");
    spanEl.textContent = "Free Delievery";

    //append to div
    deliveryDiv.append(svg, spanEl);
    deliveryDiv.setAttribute("class", "flex items-center");
    //append with price
    priceDiv.append(deliveryDiv);
  }
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
