let interns = [
  "bearcin46",
  "esakki2104prsnl",
  "mshajid",
  "muthukumarimoorthi",
  "muthuakalya",
  "dineshdevelope",
  "jeya-rosini",
  "swethadsalvatore",
  "Vk2401",
  "suriyamassmsd",
  "riyaz1000",
  "hema-venkat3",
  "mushkir",
  "danielace1",
  "sharif-22",
  "gayathrihg",
  "kishorekumar-kp",
  "vedhatech002",
];

for (let i = 0; i < interns.length; i++) {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", ` https://api.github.com/users/${interns[i]}`, true);

  xhr.onload = function (e) {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        var responseText = JSON.parse(xhr.responseText);
        //if you want to get then use this
        //xhr.open("GET", ` https://api.github.com/users/${interns[i]}/repos`, true);
        // responseText.forEach((element) => {
        //   // console.log(`${interns[i]}:${element.name}`);
        //   console.log(element.name);
        // });

        const mainDiv = document.createElement("div");
        mainDiv.setAttribute(
          "class",
          "flex flex-col bg-lime-100 gap-3 hover:bg-lime-50 bg-blue-50 hover:bg-gray-100 border-2 border-blue-600 rounded-xl shadow-sm shadow-blue-700 items-center justify-between hover:shadow-lg hover:shadow-blue-400 px-8 py-3"
        );
        mainDiv.innerHTML += ` 
        <h3 class="text-center text-blue-600 text-xl font-pacifico">${responseText.name}</h3>
        <img
          src="${responseText.avatar_url}"
          alt=""
          class="w-28 p-1 h-28 rounded-full  object-cover border-4 border-blue-600"
        />

        <div class="flex flex-col items-center">
        <div class="flex gap-1 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            class="text-blue-600"
          >
            <path
              fill="currentColor"
              d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
            />
          </svg>
          <h3 class=" font-pacifico text-lg text-blue-600 text-center">User Name</h3>
        </div>
        <h3 class="text-center font-serif">${responseText.login}</h3>
      </div>
      <div class="flex gap-3 items-start justify-between">
        <div>
          <div class="flex gap-1 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              class="text-blue-600"
            >
              <g fill="none" fill-rule="evenodd">
                <path
                  d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036c-.01-.003-.019 0-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"
                />
                <path
                  fill="currentColor"
                  d="M11 2a5 5 0 1 0 0 10a5 5 0 0 0 0-10m0 11c-2.395 0-4.575.694-6.178 1.672c-.8.488-1.484 1.064-1.978 1.69C2.358 16.976 2 17.713 2 18.5c0 .845.411 1.511 1.003 1.986c.56.45 1.299.748 2.084.956C6.665 21.859 8.771 22 11 22c.23 0 .46-.002.685-.005a1 1 0 0 0 .89-1.428A5.973 5.973 0 0 1 12 18c0-1.252.383-2.412 1.037-3.373a1 1 0 0 0-.72-1.557c-.43-.046-.87-.07-1.317-.07m10.708 3.068a1 1 0 0 0-1.414-1.414l-3.182 3.182l-1.414-1.414a1 1 0 0 0-1.414 1.414l2.05 2.05a1.1 1.1 0 0 0 1.556 0z"
                />
              </g>
            </svg>
            <h3 class="font-serif text-lg text-blue-600">Following</h3>
          </div>

          <h3 class="text-center">${responseText.following}</h3>
        </div>

        <div class="">
          <div class="flex gap-1 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              class="text-blue-600"
            >
              <path
                fill="currentColor"
                d="M11 2.275Q11.475 2 12 2t1 .275L20 6.3q.475.275.738.725t.262 1v4.25q-.45-.325-.95-.562T19 11.3V9.1l-3.6 2.075q-1.4.35-2.537 1.188T11 14.4v-1.825L5 9.1v6.85l5.05 2.925q.1.8.375 1.538t.7 1.387q-.05-.025-.062-.038T11 21.726L4 17.7q-.475-.275-.737-.725t-.263-1v-7.95q0-.55.263-1T4 6.3zM12 4L6.075 7.425L12 10.85l5.925-3.425zm5 19q-2.075 0-3.537-1.463T12 18q0-2.075 1.463-3.537T17 13q2.075 0 3.538 1.463T22 18q0 2.075-1.463 3.538T17 23m0-2q.2 0 .35-.15t.15-.35q0-.2-.15-.35T17 20q-.2 0-.35.15t-.15.35q0 .2.15.35T17 21m-.5-2h1v-4h-1z"
              />
            </svg>
            <h3 class="font-serif text-lg text-blue-600">Total Repo</h3>
          </div>

          <h3 class="text-center">${responseText.public_repos}</h3>
        </div>
      </div>
      <div class="flex items-center justify-center w-full">
        <a href="${responseText.repos_url}" target="_blank" >
          <button
            class="px-4 py-2 bg-blue-400 hover:bg-blue-700 font-serif  text-white rounded-full"
          >
           View Repo's
          </button>
        </a>
      </div>
    </div>
      `;

        // Append the created div
        const container = document.getElementById("mainContainer");
        container.append(mainDiv);
      } else {
        console.error(xhr.status, xhr.statusText);
      }
    }
  };

  xhr.onerror = function (e) {
    console.error(xhr.statusText);
  };

  xhr.send(null);
}
