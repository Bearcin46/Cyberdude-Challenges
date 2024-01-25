(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();async function i(){try{const s=(await(await fetch("https://www.dbooks.org/api/recent")).json()).books;l(s)}catch(n){console.error("Error:",n)}}i();function l(n){n.forEach(o=>{const s=document.createElement("div");s.setAttribute("class","grid  gap-1 rounded-sm shadow-md shadow-[#0bb3a5ff] px-2 py-2 bg-cyan-500"),s.innerHTML=`<div class="w-full py-2 rounded-md flex items-center justify-center">
    <img
    src="${o.image}"
    alt=""
    class="w-[300px] h-[300px] rounded-md object-cover"
  />
 </div>

 <div class="md:mt-2 px-2 flex-none ">
   <h3 class="font-bold text-xl">
     Title : <span class="text-lg font-semibold">${o.title}</span>
   </h3>
   <h3 class="font-bold text-xl">
     ID : <span class="text-lg font-semibold">${o.id}</span>
   </h3>
   <h3 class="font-bold text-xl">
     Author : <span class="text-lg font-thin">${o.authors}</span>
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

   `,document.getElementById("mainContainer").append(s)})}
