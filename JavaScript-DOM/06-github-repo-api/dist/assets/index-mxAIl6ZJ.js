(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();let n=["bearcin46","esakki2104prsnl","mshajid","muthukumarimoorthi","muthuakalya","dineshdevelope","jeya-rosini","swethadsalvatore","Vk2401","suriyamassmsd","riyaz1000","hema-venkat3","mushkir","danielace1","sharif-22","gayathrihg","kishorekumar-kp","vedhatech002"];for(let o=0;o<n.length;o++){let t=new XMLHttpRequest;t.open("GET",` https://api.github.com/users/${n[o]}`,!0),t.onload=function(i){if(t.readyState===4)if(t.status===200){var s=JSON.parse(t.responseText);const e=document.createElement("div");e.setAttribute("class","flex flex-col bg-lime-100 gap-3 hover:bg-lime-50 bg-white rounded-md shadow-sm shadow-blue-700 items-center justify-between hover:shadow-lg hover:shadow-blue-400 px-8 py-3"),e.innerHTML+=` 
        <h3 class="text-center font-bold">${s.name}</h3>
        <img
          src="${s.avatar_url}"
          alt=""
          class="w-28 h-28 rounded-full  object-cover border-4 border-blue-600"
        />
       
         
          
        
        <div class=" flex flex-col items-center">
        <div class="flex gap-1 items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" class="text-blue-600"><path fill="currentColor" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </svg>
          <h3 class="font-bold text-blue-600 text-center">User Name</h3>
          </div>
          <h3 class="text-center">${s.login}</h3>
        
      </div>
      <div class="flex gap-6 items-start">
        <div>
          <h3 class="font-bold text-blue-600">Following</h3>
          <h3 class="text-center">${s.following}</h3>
        </div>
        <div>
          <h3 class="font-bold text-blue-600">Total Repo</h3>
          <h3 class="text-center">${s.public_repos}</h3>
        </div>
      </div>
        <div>
        <a href="${s.repos_url}" target="_blank">
        <button
          class="px-4 py-2 bg-blue-600  hover:blue-red-700 font-bold text-white rounded-full"
        >
          Repositories
        </button>
      </a>
        </div>
      </div>`,document.getElementById("mainContainer").append(e)}else console.error(t.status,t.statusText)},t.onerror=function(i){console.error(t.statusText)},t.send(null)}
