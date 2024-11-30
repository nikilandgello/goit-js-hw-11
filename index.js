import{S as d,i as y}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const S="47345355-bb5adb35ee772e90f4db69f75";function b(t){const r=new URLSearchParams({key:S,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${r}`).then(s=>{if(!s.ok)throw l(n.error.type,n.error.message),new Error("Failed to fetch data");return s.json()}).catch(s=>{console.error("Error:",s.message)})}const w=new d(".gallery a",{captionsData:"alt",captionDelay:250});function L(t,r){r.innerHTML=v(t),w.refresh()}function v(t){return t.map(({webformatURL:r,largeImageURL:s,tags:c,likes:e,views:o,comments:a,downloads:h})=>`<li class = 'list-item'>
            <a class='gallery-link' href='${s}'>
                <img
                    class = 'gallery-image'
                    src = '${r}'
                    alt =  '${c}'>
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
        </li>`).join("")}const g=document.querySelector(".search-form"),E=document.querySelector('[name="search"]'),i=document.querySelector(".gallery"),f=document.createElement("span");g.addEventListener("input",I);g.addEventListener("submit",M);const p="input-name-image",m=JSON.parse(localStorage.getItem(p)),u={search:""};m&&(E.value=m.search,u.search=m.search);function I(t){u.search=t.target.value.trim(),localStorage.setItem(p,JSON.stringify(u))}function M(t){t.preventDefault(),O(),i.innerHTML="";const r=t.target.elements.search;if(!r.value.trim()){l(n.info.type,n.info.message),i.innerHTML="";return}b(r.value.trim()).then(s=>{if(!s.hits.length){l(n.warning.type,n.warning.message),i.innerHTML="";return}l(n.success.type,n.success.message),L(s.hits,i)}).finally(()=>{localStorage.removeItem(p),u.search="",g.reset()})}function O(){f.classList.add("loader"),i.append(f)}const n={success:{type:"success",message:"Request completed successfully"},info:{type:"info",message:"The field must be filled"},warning:{type:"warning",message:"Sorry, there are no images matching your search query. Please try again!"},error:{type:"error",message:"Something went wrong. Please try again later!"}};function l(t,r){const s={success:"rgb(0, 255, 128, 0.7)",info:"rgb(76, 153, 255, 0.7)",warning:"rgb(255, 193, 7, 0.7)",error:"rgb(255, 76, 76, 0.7)"};y.show({message:r,messageColor:"white",position:"topRight",backgroundColor:s[t]})}
//# sourceMappingURL=index.js.map
