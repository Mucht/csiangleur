!function(){"use strict";var e,t,n=document.getElementsByClassName("mainSection__checkbox"),s=document.querySelector(".slogan__toggleSections");t=function(){for(var e=0;e<n.length;e++)n[e].checked=!1},e=function(e){if(e.preventDefault(),s.classList.contains("closed"))s.classList.remove("closed"),s.classList.add("open"),t(),s.innerHTML="Seulement les titres";else{s.classList.add("closed"),s.classList.remove("open");for(var c=0;c<n.length;c++)n[c].checked=!0;s.innerHTML="Afficher tout"}},window.addEventListener("load",function(){t(),s.addEventListener("click",e)})}();