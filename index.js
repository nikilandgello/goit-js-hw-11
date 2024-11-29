import{S as d,i as y}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const b="47345355-bb5adb35ee772e90f4db69f75";function S(s){const r=new URLSearchParams({key:b,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${r}`).then(t=>{if(!t.ok)throw l(n.error.type,n.error.message),new Error("Failed to fetch data");return t.json()}).catch(t=>{console.error("Error:",t.message)})}function w(s){return s.map(({webformatURL:r,largeImageURL:t,tags:i,likes:e,views:o,comments:a,downloads:h})=>`<li class = 'list-item'>
            <a class='gallery-link' href='${t}'>
                <img
                    class = 'gallery-image'
                    src = '${r}'
                    alt =  '${i}'>
            </a>
            <ul class = 'description-list'>
                <li class = 'description-item'>
                    <h3>Likes</h3>
                    <p>${e}</p>
                </li>
                <li class = 'description-item'>
                    <h3>Views</h3>
                    <p>${o}</p>
                </li>
                <li class = 'description-item'>
                    <h3>Comments</h3>
                    <p>${a}</p>
                </li>
                <li class = 'description-item'>
                    <h3>Downloads</h3>
                    <p>${h}</p>
                </li>
            </ul>
        </li>`).join("")}function L(s,r){r.innerHTML=w(s),new d(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}const g=document.querySelector(".search-form"),v=document.querySelector('[name="search"]'),c=document.querySelector(".gallery"),f=document.createElement("span");g.addEventListener("input",E);g.addEventListener("submit",I);const p="input-name-image",m=JSON.parse(localStorage.getItem(p)),u={search:""};m&&(v.value=m.search,u.search=m.search);function E(s){u.search=s.target.value.trim(),localStorage.setItem(p,JSON.stringify(u))}function I(s){s.preventDefault(),O();const r=s.target.elements.search;if(!r.value.trim()){l(n.info.type,n.info.message),c.innerHTML="";return}S(r.value.trim()).then(t=>{if(!t.hits.length){l(n.warning.type,n.warning.message),c.innerHTML="";return}l(n.success.type,n.success.message),L(t.hits,c)}).finally(()=>{localStorage.removeItem(p),u.search="",g.reset()})}function O(){f.classList.add("loader"),c.append(f)}const n={success:{type:"success",message:"Request completed successfully"},info:{type:"info",message:"The field must be filled"},warning:{type:"warning",message:"Sorry, there are no images matching your search query. Please try again!"},error:{type:"error",message:"Something went wrong. Please try again later!"}};function l(s,r){const t={success:"rgb(0, 255, 128, 0.7)",info:"rgb(76, 153, 255, 0.7)",warning:"rgb(255, 193, 7, 0.7)",error:"rgb(255, 76, 76, 0.7)"};y.show({message:r,messageColor:"white",position:"topRight",backgroundColor:t[s]})}
//# sourceMappingURL=index.js.map
