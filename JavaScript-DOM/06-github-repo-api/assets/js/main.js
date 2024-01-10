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
          "flex flex-col bg-lime-100 gap-3 hover:bg-lime-50 bg-white rounded-md shadow-sm shadow-blue-700 items-center justify-between hover:shadow-lg hover:shadow-blue-400 px-8 py-3"
        );
        mainDiv.innerHTML += ` 
        <h3 class="text-center font-bold">${responseText.name}</h3>
        <img
          src="${responseText.avatar_url}"
          alt=""
          class="w-28 h-28 rounded-full  object-cover border-4 border-blue-600"
        />
       
         
          
        
        <div class=" flex flex-col items-center">
        <div class="flex gap-1 items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" class="text-blue-600"><path fill="currentColor" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </svg>
          <h3 class="font-bold text-blue-600 text-center">User Name</h3>
          </div>
          <h3 class="text-center">${responseText.login}</h3>
        
      </div>
      <div class="flex gap-6 items-start">
        <div>
          <h3 class="font-bold text-blue-600">Following</h3>
          <h3 class="text-center">${responseText.following}</h3>
        </div>
        <div>
          <h3 class="font-bold text-blue-600">Total Repo</h3>
          <h3 class="text-center">${responseText.public_repos}</h3>
        </div>
      </div>
        <div>
        <a href="${responseText.repos_url}" target="_blank">
        <button
          class="px-4 py-2 bg-blue-600  hover:blue-red-700 font-bold text-white rounded-full"
        >
          Repositories
        </button>
      </a>
        </div>
      </div>`;

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
