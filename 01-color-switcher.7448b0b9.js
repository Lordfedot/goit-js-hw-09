const t={startButton:document.querySelector("[data-start]"),closeButton:document.querySelector("[data-stop]"),body:document.querySelector("body")};let o=null;function e(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}t.startButton.addEventListener("click",(function(){t.body.style.backgroundColor=e(),o=setInterval((()=>{t.body.style.backgroundColor=e()}),1e3),t.startButton.disabled=!0})),t.closeButton.addEventListener("click",(function(){clearInterval(o),t.startButton.disabled=!1})),console.log(t.body);
//# sourceMappingURL=01-color-switcher.7448b0b9.js.map
