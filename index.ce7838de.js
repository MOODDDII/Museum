!function(){let e=document.querySelector("#slider"),t=document.querySelectorAll(".gallery_btns_btn"),n=0;function c(e){t.forEach(e=>{e.classList.remove("gallery_btns_btn--active")}),e.classList.add("gallery_btns_btn--active")}function r(t){(n=t)>106&&(n=106),n<0&&(n=0),e.style.transform=`translateX(-${n}%)`}document.querySelector("#slider-btn-1").addEventListener("click",function(){r(0),c(this)}),document.querySelector("#slider-btn-2").addEventListener("click",function(){r(33),c(this)}),document.querySelector("#slider-btn-3").addEventListener("click",function(){r(66),c(this)}),document.querySelector("#slider-btn-4").addEventListener("click",function(){r(106),c(this)})}();
//# sourceMappingURL=index.ce7838de.js.map