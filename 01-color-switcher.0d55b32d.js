!function(){var e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),d=document.querySelector("body"),n=null,a=!0;t.disabled=!0,e.addEventListener("click",(function(){a&&(a=!1,n=setInterval((function(){d.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),e.disabled=!0,t.disabled=!1)})),t.addEventListener("click",(function(){a=!0,clearInterval(n),t.disabled=!0,e.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.0d55b32d.js.map
