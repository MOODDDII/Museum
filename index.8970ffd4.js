const e=document.querySelector("#body"),o=document.querySelector("#menu"),t=document.querySelector("#background"),c=document.querySelector("#menu-open"),n=document.querySelector("#menu-open-2"),r=document.querySelector("#menu-close"),d=document.querySelector("#to-top"),l=document.querySelector("#form"),u=document.querySelector("#input"),s=document.querySelectorAll(".menu_top_wrapper_link");function i(){o.classList.remove("menu--closed"),e.classList.add("body--no-scroll"),t.classList.remove("body_background--not-visible")}function a(){o.classList.add("menu--closed"),e.classList.remove("body--no-scroll"),t.classList.add("body_background--not-visible")}c.addEventListener("click",i),n.addEventListener("click",i),r.addEventListener("click",a),t.addEventListener("click",a),d.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})}),l.addEventListener("submit",function(e){e.preventDefault(),u.value=""}),s.forEach(e=>{e.addEventListener("click",a)});
//# sourceMappingURL=index.8970ffd4.js.map