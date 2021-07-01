/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@midzer/tobii/dist/tobii.module.js":
/*!*********************************************************!*\
  !*** ./node_modules/@midzer/tobii/dist/tobii.module.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function e(t){const r=['a[href]:not([tabindex^="-"]):not([inert])','area[href]:not([tabindex^="-"]):not([inert])',"input:not([disabled]):not([inert])","select:not([disabled]):not([inert])","textarea:not([disabled]):not([inert])","button:not([disabled]):not([inert])",'iframe:not([tabindex^="-"]):not([inert])','audio:not([tabindex^="-"]):not([inert])','video:not([tabindex^="-"]):not([inert])','[contenteditable]:not([tabindex^="-"]):not([inert])','[tabindex]:not([tabindex^="-"]):not([inert])'],i=[],n={gallery:[],slider:null,sliderElements:[],elementsLength:0,currentIndex:0,x:0},a=[];let o={},s=0,d=null,l=null,u=null,c=null,p=null,b={},m=!1,h=!1,g=!1,f=null,v=null,y=null,w=!1,x=!1,A=0,E={},L=null,_=null;const I={image:{checkSupport:e=>!e.hasAttribute("data-type")&&e.href.match(/\.(png|jpe?g|tiff|tif|gif|bmp|webp|avif|svg|ico)(\?.*)?$/i),init(e,t){const r=document.createElement("figure"),i=document.createElement("figcaption"),n=document.createElement("img"),a=e.querySelector("img"),d=document.createElement("div");r.style.opacity="0",a&&(n.alt=a.alt||""),n.setAttribute("src",""),n.setAttribute("data-src",e.href),r.appendChild(n),o.captions&&("function"==typeof o.captionText?i.textContent=o.captionText(e):"self"===o.captionsSelector&&e.getAttribute(o.captionAttribute)?i.textContent=e.getAttribute(o.captionAttribute):"img"===o.captionsSelector&&a&&a.getAttribute(o.captionAttribute)&&(i.textContent=a.getAttribute(o.captionAttribute)),i.textContent&&(i.id=`tobii-figcaption-${s}`,r.appendChild(i),n.setAttribute("aria-labelledby",i.id),++s)),t.appendChild(r),d.className="tobii__loader",d.setAttribute("role","progressbar"),d.setAttribute("aria-label",o.loadingIndicatorLabel),t.appendChild(d),t.setAttribute("data-type","image")},onPreload(e){I.image.onLoad(e)},onLoad(e){const t=e.querySelector("img");if(!t.hasAttribute("data-src"))return;const r=e.querySelector("figure"),i=e.querySelector(".tobii__loader");t.onload=()=>{e.removeChild(i),r.style.opacity="1"},t.setAttribute("src",t.getAttribute("data-src")),t.removeAttribute("data-src")},onLeave(e){},onCleanup(e){}},html:{checkSupport:e=>ne(e,"html"),init(e,t){const r=e.hasAttribute("href")?e.getAttribute("href"):e.getAttribute("data-target"),i=document.querySelector(r);if(!i)throw new Error(`Ups, I can't find the target ${r}.`);t.appendChild(i),t.setAttribute("data-type","html")},onPreload(e){},onLoad(e){const t=e.querySelector("video");t&&(t.hasAttribute("data-time")&&t.readyState>0&&(t.currentTime=t.getAttribute("data-time")),o.autoplayVideo&&t.play())},onLeave(e){const t=e.querySelector("video");t&&(t.paused||t.pause(),t.readyState>0&&t.setAttribute("data-time",t.currentTime))},onCleanup(e){const t=e.querySelector("video");if(t&&t.readyState>0&&t.readyState<3&&t.duration!==t.currentTime){const r=t.cloneNode(!0);ae(t),t.load(),t.parentNode.removeChild(t),e.appendChild(r)}}},iframe:{checkSupport:e=>ne(e,"iframe"),init(e,t){const r=document.createElement("iframe"),i=e.hasAttribute("href")?e.getAttribute("href"):e.getAttribute("data-target");r.setAttribute("frameborder","0"),r.setAttribute("src",""),r.setAttribute("data-src",i),e.getAttribute("data-width")&&(r.style.maxWidth=`${e.getAttribute("data-width")}px`),e.getAttribute("data-height")&&(r.style.maxHeight=`${e.getAttribute("data-height")}px`),t.appendChild(r),t.setAttribute("data-type","iframe")},onPreload(e){},onLoad(e){const t=e.querySelector("iframe");t.setAttribute("src",t.getAttribute("data-src"))},onLeave(e){},onCleanup(e){}},youtube:{checkSupport:e=>ne(e,"youtube"),init(e,t){const r=document.createElement("div");t.appendChild(r),a[A]=new window.YT.Player(r,{host:"https://www.youtube-nocookie.com",height:e.getAttribute("data-height")||"360",width:e.getAttribute("data-width")||"640",videoId:e.getAttribute("data-id"),playerVars:{controls:e.getAttribute("data-controls")||1,rel:0,playsinline:1}}),t.setAttribute("data-player",A),t.setAttribute("data-type","youtube"),A++},onPreload(e){},onLoad(e){o.autoplayVideo&&a[e.getAttribute("data-player")].playVideo()},onLeave(e){1===a[e.getAttribute("data-player")].getPlayerState()&&a[e.getAttribute("data-player")].pauseVideo()},onCleanup(e){1===a[e.getAttribute("data-player")].getPlayerState()&&a[e.getAttribute("data-player")].pauseVideo()}}},C=e=>{if(null===document.querySelector('[data-type="youtube"]')||x)T(e);else{if(null===document.getElementById("iframe_api")){const e=document.createElement("script"),t=document.getElementsByTagName("script")[0];e.id="iframe_api",e.src="https://www.youtube.com/iframe_api",t.parentNode.insertBefore(e,t)}-1===i.indexOf(e)&&i.push(e),window.onYouTubePlayerAPIReady=()=>{i.forEach(e=>{T(e)}),x=!0}}},S=e=>e.hasAttribute("data-group")?e.getAttribute("data-group"):"default",T=e=>{if(L=S(e),Object.prototype.hasOwnProperty.call(E,L)||(E[L]=JSON.parse(JSON.stringify(n)),N()),-1!==E[L].gallery.indexOf(e))throw new Error("Ups, element already added.");if(E[L].gallery.push(e),E[L].elementsLength++,o.zoom&&e.querySelector("img")){const t=document.createElement("div");t.className="tobii-zoom__icon",t.innerHTML=o.zoomText,e.classList.add("tobii-zoom"),e.appendChild(t)}e.addEventListener("click",j),P(e),le()&&L===_&&(oe(),se())},k=e=>{const t=S(e);if(-1===E[t].gallery.indexOf(e))throw new Error(`Ups, I can't find a slide for the element ${e}.`);{const r=E[t].gallery.indexOf(e),i=E[t].sliderElements[r];if(le()&&t===_&&r===E[t].currentIndex){if(1===E[t].elementsLength)throw O(),new Error("Ups, I've closed. There are no slides more to show.");0===E[t].currentIndex?$():Y()}if(E[t].elementsLength--,o.zoom&&e.querySelector(".tobii-zoom__icon")){const t=e.querySelector(".tobii-zoom__icon");t.parentNode.classList.remove("tobii-zoom"),t.parentNode.removeChild(t)}e.removeEventListener("click",j),i.parentNode.removeChild(i)}},N=()=>{E[L].slider=document.createElement("div"),E[L].slider.className="tobii__slider",E[L].slider.setAttribute("aria-hidden","true"),d.appendChild(E[L].slider)},P=e=>{for(const t in I)if(Object.prototype.hasOwnProperty.call(I,t)&&I[t].checkSupport(e)){const r=document.createElement("div"),i=document.createElement("div");r.className="tobii__slide",r.style.position="absolute",r.style.left=100*E[L].x+"%",r.setAttribute("aria-hidden","true"),I[t].init(e,i),r.appendChild(i),E[L].slider.appendChild(r),E[L].sliderElements.push(r),++E[L].x;break}},q=e=>{if(_=null!==_?_:L,le())throw new Error("Ups, I'm aleady open.");if(!le()&&(e||(e=0),-1===e||e>=E[_].elementsLength))throw new Error(`Ups, I can't find slide ${e}.`);o.hideScrollbar&&(document.documentElement.classList.add("tobii-is-open"),document.body.classList.add("tobii-is-open")),oe(),o.close||(c.disabled=!1,c.setAttribute("aria-hidden","true")),f=document.activeElement;const t=window.location.href;window.history.pushState({tobii:"close"},"Image",t),E[_].currentIndex=e,H(),re(),U(E[_].currentIndex),E[_].slider.setAttribute("aria-hidden","false"),d.setAttribute("aria-hidden","false"),se(),X(E[_].currentIndex+1),X(E[_].currentIndex-1),setTimeout(()=>{E[_].slider.classList.add("tobii__slider--animate")},1e3);const r=new window.CustomEvent("open");d.dispatchEvent(r)},O=()=>{if(!le())throw new Error("Ups, I'm already closed.");o.hideScrollbar&&(document.documentElement.classList.remove("tobii-is-open"),document.body.classList.remove("tobii-is-open")),ie(),null!==window.history.state&&"close"===window.history.state.tobii&&window.history.back(),f.focus(),z(E[_].currentIndex),M(E[_].currentIndex),d.setAttribute("aria-hidden","true"),E[_].slider.setAttribute("aria-hidden","true"),E[_].currentIndex=0,E[_].slider.classList.remove("tobii__slider--animate")},X=e=>{if(void 0===E[_].sliderElements[e])return;const t=E[_].sliderElements[e].querySelector("[data-type]"),r=t.getAttribute("data-type");I[r].onPreload(t)},U=e=>{if(void 0===E[_].sliderElements[e])return;const t=E[_].sliderElements[e].querySelector("[data-type]"),r=t.getAttribute("data-type");E[_].sliderElements[e].classList.add("tobii__slide--is-active"),E[_].sliderElements[e].setAttribute("aria-hidden","false"),I[r].onLoad(t)},Y=()=>{if(!le())throw new Error("Ups, I'm closed.");E[_].currentIndex>0&&(z(E[_].currentIndex),U(--E[_].currentIndex),se("left"),M(E[_].currentIndex+1),X(E[_].currentIndex-1));const e=new window.CustomEvent("previous");d.dispatchEvent(e)},$=()=>{if(!le())throw new Error("Ups, I'm closed.");E[_].currentIndex<E[_].elementsLength-1&&(z(E[_].currentIndex),U(++E[_].currentIndex),se("right"),M(E[_].currentIndex-1),X(E[_].currentIndex+1));const e=new window.CustomEvent("next");d.dispatchEvent(e)},z=e=>{if(void 0===E[_].sliderElements[e])return;const t=E[_].sliderElements[e].querySelector("[data-type]"),r=t.getAttribute("data-type");E[_].sliderElements[e].classList.remove("tobii__slide--is-active"),E[_].sliderElements[e].setAttribute("aria-hidden","true"),I[r].onLeave(t)},M=e=>{if(void 0===E[_].sliderElements[e])return;const t=E[_].sliderElements[e].querySelector("[data-type]"),r=t.getAttribute("data-type");I[r].onCleanup(t)},D=()=>{_=null!==_?_:L,v=-E[_].currentIndex*d.offsetWidth,E[_].slider.style.transform=`translate3d(${v}px, 0, 0)`,y=v},H=()=>{b={startX:0,endX:0,startY:0,endY:0}},B=()=>{const e=b.endX-b.startX,t=b.endY-b.startY,r=Math.abs(e),i=Math.abs(t);e>0&&r>o.threshold&&E[_].currentIndex>0?Y():e<0&&r>o.threshold&&E[_].currentIndex!==E[_].elementsLength-1?$():t<0&&i>o.threshold&&o.swipeClose?O():D()},V=()=>{w||(w=!0,window.requestAnimationFrame(()=>{D(),w=!1}))},j=e=>{e.preventDefault(),_=S(e.currentTarget),q(E[_].gallery.indexOf(e.currentTarget))},R=e=>{e.target===l?Y():e.target===u?$():(e.target===c||!1===m&&!1===h&&e.target.classList.contains("tobii__slide")&&o.docClose)&&O(),e.stopPropagation()},W=e=>{const t=Array.prototype.slice.call(d.querySelectorAll(`.tobii__btn:not([disabled]), .tobii__slide--is-active + ${r.join(", .tobii__slide--is-active ")}`)).filter(e=>!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)),i=t.indexOf(document.activeElement);9===e.keyCode||"Tab"===e.code?e.shiftKey&&0===i?(t[t.length-1].focus(),e.preventDefault()):e.shiftKey||i!==t.length-1||(t[0].focus(),e.preventDefault()):27===e.keyCode||"Escape"===e.code?(e.preventDefault(),O()):37===e.keyCode||"ArrowLeft"===e.code?(e.preventDefault(),Y()):39!==e.keyCode&&"ArrowRight"!==e.code||(e.preventDefault(),$())},G=e=>{ce(e.target)||(e.stopPropagation(),m=!1,h=!1,g=!0,b.startX=e.touches[0].pageX,b.startY=e.touches[0].pageY,E[_].slider.classList.add("tobii__slider--is-dragging"))},J=e=>{e.stopPropagation(),g&&(e.preventDefault(),b.endX=e.touches[0].pageX,b.endY=e.touches[0].pageY,te())},K=e=>{e.stopPropagation(),g=!1,E[_].slider.classList.remove("tobii__slider--is-dragging"),b.endX&&B(),H()},F=e=>{ce(e.target)||(e.preventDefault(),e.stopPropagation(),m=!1,h=!1,g=!0,b.startX=e.pageX,b.startY=e.pageY,E[_].slider.classList.add("tobii__slider--is-dragging"))},Q=e=>{e.preventDefault(),g&&(b.endX=e.pageX,b.endY=e.pageY,te())},Z=e=>{e.stopPropagation(),g=!1,E[_].slider.classList.remove("tobii__slider--is-dragging"),b.endX&&B(),H()},ee=()=>{g=!1},te=()=>{Math.abs(b.startX-b.endX)>0&&!h&&E[_].elementsLength>1?(E[_].slider.style.transform=`translate3d(${y-Math.round(b.startX-b.endX)}px, 0, 0)`,m=!0,h=!1):Math.abs(b.startY-b.endY)>0&&!m&&o.swipeClose&&(E[_].slider.style.transform=`translate3d(${y}px, -${Math.round(b.startY-b.endY)}px, 0)`,m=!1,h=!0)},re=()=>{o.keyboard&&window.addEventListener("keydown",W),window.addEventListener("resize",V),window.addEventListener("popstate",O),d.addEventListener("click",R),o.draggable&&(ue()&&(d.addEventListener("touchstart",G),d.addEventListener("touchmove",J),d.addEventListener("touchend",K)),d.addEventListener("mousedown",F),d.addEventListener("mouseup",Z),d.addEventListener("mousemove",Q),d.addEventListener("contextmenu",ee))},ie=()=>{o.keyboard&&window.removeEventListener("keydown",W),window.removeEventListener("resize",V),window.removeEventListener("popstate",O),d.removeEventListener("click",R),o.draggable&&(ue()&&(d.removeEventListener("touchstart",G),d.removeEventListener("touchmove",J),d.removeEventListener("touchend",K)),d.removeEventListener("mousedown",F),d.removeEventListener("mouseup",Z),d.removeEventListener("mousemove",Q),d.removeEventListener("contextmenu",ee))},ne=(e,t)=>e.getAttribute("data-type")===t,ae=e=>{const t=e.querySelectorAll("src");t&&t.forEach(e=>{e.setAttribute("src","")})},oe=()=>{(o.draggable&&o.swipeClose&&!E[_].slider.classList.contains("tobii__slider--is-draggable")||o.draggable&&E[_].elementsLength>1&&!E[_].slider.classList.contains("tobii__slider--is-draggable"))&&E[_].slider.classList.add("tobii__slider--is-draggable"),!o.nav||1===E[_].elementsLength||"auto"===o.nav&&ue()?(l.setAttribute("aria-hidden","true"),l.disabled=!0,u.setAttribute("aria-hidden","true"),u.disabled=!0):(l.setAttribute("aria-hidden","false"),l.disabled=!1,u.setAttribute("aria-hidden","false"),u.disabled=!1),p.setAttribute("aria-hidden",o.counter&&1!==E[_].elementsLength?"false":"true")},se=e=>{D(),p.textContent=`${E[_].currentIndex+1}/${E[_].elementsLength}`,(e=>{(!0===o.nav||"auto"===o.nav)&&!ue()&&E[_].elementsLength>1?(l.setAttribute("aria-hidden","true"),l.disabled=!0,u.setAttribute("aria-hidden","true"),u.disabled=!0,1===E[_].elementsLength?o.close&&c.focus():0===E[_].currentIndex?(u.setAttribute("aria-hidden","false"),u.disabled=!1,u.focus()):E[_].currentIndex===E[_].elementsLength-1?(l.setAttribute("aria-hidden","false"),l.disabled=!1,l.focus()):(l.setAttribute("aria-hidden","false"),l.disabled=!1,u.setAttribute("aria-hidden","false"),u.disabled=!1,"left"===e?l.focus():u.focus())):o.close&&c.focus()})(e)},de=()=>{le()&&O(),Object.entries(E).forEach(e=>{e[1].gallery.forEach(e=>{k(e)})}),E={},L=_=null,s=0},le=()=>"false"===d.getAttribute("aria-hidden"),ue=()=>"ontouchstart"in window,ce=e=>-1!==["TEXTAREA","OPTION","INPUT","SELECT"].indexOf(e.nodeName)||e===l||e===u||e===c;return(e=>{o=(e=>({selector:".lightbox",captions:!0,captionsSelector:"img",captionAttribute:"alt",captionText:null,nav:"auto",navText:['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path stroke="none" d="M0 0h24v24H0z"/><polyline points="15 6 9 12 15 18" /></svg>','<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path stroke="none" d="M0 0h24v24H0z"/><polyline points="9 6 15 12 9 18" /></svg>'],navLabel:["Previous image","Next image"],close:!0,closeText:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path stroke="none" d="M0 0h24v24H0z"/><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>',closeLabel:"Close lightbox",loadingIndicatorLabel:"Image loading",counter:!0,download:!1,downloadText:"",downloadLabel:"Download image",keyboard:!0,zoom:!0,zoomText:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path stroke="none" d="M0 0h24v24H0z"/><polyline points="16 4 20 4 20 8" /><line x1="14" y1="10" x2="20" y2="4" /><polyline points="8 20 4 20 4 16" /><line x1="4" y1="20" x2="10" y2="14" /><polyline points="16 20 20 20 20 16" /><line x1="14" y1="14" x2="20" y2="20" /><polyline points="8 4 4 4 4 8" /><line x1="4" y1="4" x2="10" y2="10" /></svg>',docClose:!0,swipeClose:!0,hideScrollbar:!0,draggable:!0,threshold:100,rtl:!1,loop:!1,autoplayVideo:!1,modal:!1,theme:"tobii--theme-default",...e}))(e),d||(d=document.createElement("div"),d.setAttribute("role","dialog"),d.setAttribute("aria-hidden","true"),d.classList.add("tobii"),d.classList.add(o.theme),l=document.createElement("button"),l.className="tobii__btn tobii__btn--previous",l.setAttribute("type","button"),l.setAttribute("aria-label",o.navLabel[0]),l.innerHTML=o.navText[0],d.appendChild(l),u=document.createElement("button"),u.className="tobii__btn tobii__btn--next",u.setAttribute("type","button"),u.setAttribute("aria-label",o.navLabel[1]),u.innerHTML=o.navText[1],d.appendChild(u),c=document.createElement("button"),c.className="tobii__btn tobii__btn--close",c.setAttribute("type","button"),c.setAttribute("aria-label",o.closeLabel),c.innerHTML=o.closeText,d.appendChild(c),p=document.createElement("div"),p.className="tobii__counter",d.appendChild(p),document.body.appendChild(d));const t=document.querySelectorAll(o.selector);if(!t)throw new Error(`Ups, I can't find the selector ${o.selector} on this website.`);t.forEach(e=>{C(e)})})(t),e.open=q,e.previous=Y,e.next=$,e.close=O,e.add=C,e.remove=k,e.reset=de,e.destroy=()=>{de(),d.parentNode.removeChild(d)},e.isOpen=le,e.slidesIndex=()=>E[_].currentIndex,e.select=e=>{const t=E[_].currentIndex;if(!le())throw new Error("Ups, I'm closed.");if(le()){if(!e&&0!==e)throw new Error("Ups, no slide specified.");if(e===E[_].currentIndex)throw new Error(`Ups, slide ${e} is already selected.`);if(-1===e||e>=E[_].elementsLength)throw new Error(`Ups, I can't find slide ${e}.`)}E[_].currentIndex=e,z(t),U(e),e<t&&(se("left"),M(t),X(e-1)),e>t&&(se("right"),M(t),X(e+1))},e.slidesCount=()=>E[_].elementsLength,e.selectGroup=e=>{if(le())throw new Error("Ups, I'm open.");if(!e)throw new Error("Ups, no group specified.");if(e&&!Object.prototype.hasOwnProperty.call(E,e))throw new Error(`Ups, I don't have a group called "${e}".`);_=e},e.currentGroup=()=>null!==_?_:L,e.on=(e,t)=>{d.addEventListener(e,t)},e.off=(e,t)=>{d.removeEventListener(e,t)},e}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (e);


/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lazysizes */ "./node_modules/lazysizes/lazysizes.js");
/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lazysizes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _midzer_tobii__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @midzer/tobii */ "./node_modules/@midzer/tobii/dist/tobii.module.js");
/* harmony import */ var _tabs_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs.js */ "./src/tabs.js");
/* harmony import */ var _years_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./years.js */ "./src/years.js");




var tobii = new _midzer_tobii__WEBPACK_IMPORTED_MODULE_1__.default();

if (document.querySelector('[data-tabs]')) {
  (0,_tabs_js__WEBPACK_IMPORTED_MODULE_2__.default)('[data-tabs]');
}

if (document.getElementById('years')) {
  (0,_years_js__WEBPACK_IMPORTED_MODULE_3__.default)();
}

function burger() {
  var button = document.querySelector('[data-burger]');
  var menu = document.getElementById(button.getAttribute('aria-controls'));
  button.addEventListener('click', function (e) {
    menu.classList.toggle('is-open');
    button.setAttribute('aria-expanded', !button.getAttribute('aria-expanded'));
  });
}

burger();

function inquire() {
  var inquireButtons = document.querySelectorAll('[data-inquire]');
  inquireButtons.forEach(function (button) {
    var target = document.getElementById(button.getAttribute('data-inquire'));
    button.addEventListener('click', function () {
      target.classList.toggle('is-visible');
    });
  });
  var inquireClose = document.querySelectorAll('[data-inquire-close]');
  inquireClose.forEach(function (button) {
    var target = document.getElementById(button.getAttribute('data-inquire-close'));
    button.addEventListener('click', function () {
      target.classList.toggle('is-visible');
    });
  });
}

inquire();

/***/ }),

/***/ "./src/tabs.js":
/*!*********************!*\
  !*** ./src/tabs.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ tabs)
/* harmony export */ });
// https://inclusive-components.design/tabbed-interfaces/
function tabs(tabsSelector) {
  var tabbed = document.querySelector(tabsSelector);
  var tablist = tabbed.querySelector('ul');
  var tabs = tablist.querySelectorAll('a');
  var panels = tabbed.querySelectorAll('section'); // The tab switching function

  var switchTab = function switchTab(oldTab, newTab) {
    newTab.focus(); // Make the active tab focusable by the user (Tab key)

    newTab.removeAttribute('tabindex'); // Set the selected state

    newTab.setAttribute('aria-selected', 'true');
    oldTab.removeAttribute('aria-selected');
    oldTab.setAttribute('tabindex', '-1'); // Get the indices of the new and old tabs to find the correct
    // tab panels to show and hide

    var index = Array.prototype.indexOf.call(tabs, newTab);
    var oldIndex = Array.prototype.indexOf.call(tabs, oldTab);
    panels[oldIndex].hidden = true;
    panels[index].hidden = false;
  }; // Add the tablist role to the first <ul> in the .tabbed container


  tablist.setAttribute('role', 'tablist'); // Add semantics are remove user focusability for each tab

  Array.prototype.forEach.call(tabs, function (tab, i) {
    tab.setAttribute('role', 'tab');
    tab.setAttribute('id', 'tab' + (i + 1));
    tab.setAttribute('tabindex', '-1');
    tab.parentNode.setAttribute('role', 'presentation'); // Handle clicking of tabs for mouse users

    tab.addEventListener('click', function (e) {
      e.preventDefault();
      var currentTab = tablist.querySelector('[aria-selected]');

      if (e.currentTarget !== currentTab) {
        switchTab(currentTab, e.currentTarget);
      }
    }); // Handle keydown events for keyboard users

    tab.addEventListener('keydown', function (e) {
      // Get the index of the current tab in the tabs node list
      var index = Array.prototype.indexOf.call(tabs, e.currentTarget); // Work out which key the user is pressing and
      // Calculate the new tab's index where appropriate

      var dir = e.which === 37 ? index - 1 : e.which === 39 ? index + 1 : e.which === 40 ? 'down' : null;

      if (dir !== null) {
        e.preventDefault(); // If the down key is pressed, move focus to the open panel,
        // otherwise switch to the adjacent tab

        dir === 'down' ? panels[i].focus() : tabs[dir] ? switchTab(e.currentTarget, tabs[dir]) : void 0;
      }
    });
  }); // Add tab panel semantics and hide them all

  Array.prototype.forEach.call(panels, function (panel, i) {
    panel.setAttribute('role', 'tabpanel');
    panel.setAttribute('tabindex', '-1');
    var id = panel.getAttribute('id');
    panel.setAttribute('aria-labelledby', tabs[i].id);
    panel.hidden = true;
  }); // Initially activate the first tab and reveal the first tab panel

  tabs[0].removeAttribute('tabindex');
  tabs[0].setAttribute('aria-selected', 'true');
  panels[0].hidden = false;
}
;

/***/ }),

/***/ "./src/years.js":
/*!**********************!*\
  !*** ./src/years.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ yeras)
/* harmony export */ });
function yeras() {
  var allButtons = Array.from(document.getElementById('years').children);
  allButtons = allButtons.filter(function (b) {
    return b.getAttribute('type') === 'button';
  });
  var exhibitions = Array.from(document.getElementById('exhibition-items').children);
  var allButton = document.getElementById('all');
  var yearButtons = allButtons.filter(function (item) {
    return item !== allButton;
  });
  yearButtons.forEach(function (button) {
    button.addEventListener('click', function (e) {
      e.preventDefault();
      button.classList.add('font-medium');
      button.classList.remove('font-light');
      allButton.classList.remove('font-medium');
      allButton.classList.add('font-light');
      yearButtons.forEach(function (item) {
        if (item !== button) {
          item.classList.remove('font-medium');
          item.classList.add('font-light');
        }
      });
      var target = button.getAttribute('data-target');
      exhibitions.forEach(function (exhibition) {
        if (exhibition.getAttribute('data-year') === target) {
          exhibition.classList.remove('hidden');
        } else {
          exhibition.classList.add('hidden');
        }
      });
    });
  });
  allButton.addEventListener('click', function (e) {
    e.preventDefault();
    allButton.classList.add('font-medium');
    allButton.classList.remove('font-light');
    yearButtons.forEach(function (item) {
      item.classList.remove('font-medium');
      item.classList.add('font-light');
    });
    exhibitions.forEach(function (exhibition) {
      exhibition.classList.remove('hidden');
    });
  });
}

/***/ }),

/***/ "./node_modules/lazysizes/lazysizes.js":
/*!*********************************************!*\
  !*** ./node_modules/lazysizes/lazysizes.js ***!
  \*********************************************/
/***/ ((module) => {

(function(window, factory) {
	var lazySizes = factory(window, window.document, Date);
	window.lazySizes = lazySizes;
	if( true && module.exports){
		module.exports = lazySizes;
	}
}(typeof window != 'undefined' ?
      window : {}, 
/**
 * import("./types/global")
 * @typedef { import("./types/lazysizes-config").LazySizesConfigPartial } LazySizesConfigPartial
 */
function l(window, document, Date) { // Pass in the window Date function also for SSR because the Date class can be lost
	'use strict';
	/*jshint eqnull:true */

	var lazysizes,
		/**
		 * @type { LazySizesConfigPartial }
		 */
		lazySizesCfg;

	(function(){
		var prop;

		var lazySizesDefaults = {
			lazyClass: 'lazyload',
			loadedClass: 'lazyloaded',
			loadingClass: 'lazyloading',
			preloadClass: 'lazypreload',
			errorClass: 'lazyerror',
			//strictClass: 'lazystrict',
			autosizesClass: 'lazyautosizes',
			fastLoadedClass: 'ls-is-cached',
			iframeLoadMode: 0,
			srcAttr: 'data-src',
			srcsetAttr: 'data-srcset',
			sizesAttr: 'data-sizes',
			//preloadAfterLoad: false,
			minSize: 40,
			customMedia: {},
			init: true,
			expFactor: 1.5,
			hFac: 0.8,
			loadMode: 2,
			loadHidden: true,
			ricTimeout: 0,
			throttleDelay: 125,
		};

		lazySizesCfg = window.lazySizesConfig || window.lazysizesConfig || {};

		for(prop in lazySizesDefaults){
			if(!(prop in lazySizesCfg)){
				lazySizesCfg[prop] = lazySizesDefaults[prop];
			}
		}
	})();

	if (!document || !document.getElementsByClassName) {
		return {
			init: function () {},
			/**
			 * @type { LazySizesConfigPartial }
			 */
			cfg: lazySizesCfg,
			/**
			 * @type { true }
			 */
			noSupport: true,
		};
	}

	var docElem = document.documentElement;

	var supportPicture = window.HTMLPictureElement;

	var _addEventListener = 'addEventListener';

	var _getAttribute = 'getAttribute';

	/**
	 * Update to bind to window because 'this' becomes null during SSR
	 * builds.
	 */
	var addEventListener = window[_addEventListener].bind(window);

	var setTimeout = window.setTimeout;

	var requestAnimationFrame = window.requestAnimationFrame || setTimeout;

	var requestIdleCallback = window.requestIdleCallback;

	var regPicture = /^picture$/i;

	var loadEvents = ['load', 'error', 'lazyincluded', '_lazyloaded'];

	var regClassCache = {};

	var forEach = Array.prototype.forEach;

	/**
	 * @param ele {Element}
	 * @param cls {string}
	 */
	var hasClass = function(ele, cls) {
		if(!regClassCache[cls]){
			regClassCache[cls] = new RegExp('(\\s|^)'+cls+'(\\s|$)');
		}
		return regClassCache[cls].test(ele[_getAttribute]('class') || '') && regClassCache[cls];
	};

	/**
	 * @param ele {Element}
	 * @param cls {string}
	 */
	var addClass = function(ele, cls) {
		if (!hasClass(ele, cls)){
			ele.setAttribute('class', (ele[_getAttribute]('class') || '').trim() + ' ' + cls);
		}
	};

	/**
	 * @param ele {Element}
	 * @param cls {string}
	 */
	var removeClass = function(ele, cls) {
		var reg;
		if ((reg = hasClass(ele,cls))) {
			ele.setAttribute('class', (ele[_getAttribute]('class') || '').replace(reg, ' '));
		}
	};

	var addRemoveLoadEvents = function(dom, fn, add){
		var action = add ? _addEventListener : 'removeEventListener';
		if(add){
			addRemoveLoadEvents(dom, fn);
		}
		loadEvents.forEach(function(evt){
			dom[action](evt, fn);
		});
	};

	/**
	 * @param elem { Element }
	 * @param name { string }
	 * @param detail { any }
	 * @param noBubbles { boolean }
	 * @param noCancelable { boolean }
	 * @returns { CustomEvent }
	 */
	var triggerEvent = function(elem, name, detail, noBubbles, noCancelable){
		var event = document.createEvent('Event');

		if(!detail){
			detail = {};
		}

		detail.instance = lazysizes;

		event.initEvent(name, !noBubbles, !noCancelable);

		event.detail = detail;

		elem.dispatchEvent(event);
		return event;
	};

	var updatePolyfill = function (el, full){
		var polyfill;
		if( !supportPicture && ( polyfill = (window.picturefill || lazySizesCfg.pf) ) ){
			if(full && full.src && !el[_getAttribute]('srcset')){
				el.setAttribute('srcset', full.src);
			}
			polyfill({reevaluate: true, elements: [el]});
		} else if(full && full.src){
			el.src = full.src;
		}
	};

	var getCSS = function (elem, style){
		return (getComputedStyle(elem, null) || {})[style];
	};

	/**
	 *
	 * @param elem { Element }
	 * @param parent { Element }
	 * @param [width] {number}
	 * @returns {number}
	 */
	var getWidth = function(elem, parent, width){
		width = width || elem.offsetWidth;

		while(width < lazySizesCfg.minSize && parent && !elem._lazysizesWidth){
			width =  parent.offsetWidth;
			parent = parent.parentNode;
		}

		return width;
	};

	var rAF = (function(){
		var running, waiting;
		var firstFns = [];
		var secondFns = [];
		var fns = firstFns;

		var run = function(){
			var runFns = fns;

			fns = firstFns.length ? secondFns : firstFns;

			running = true;
			waiting = false;

			while(runFns.length){
				runFns.shift()();
			}

			running = false;
		};

		var rafBatch = function(fn, queue){
			if(running && !queue){
				fn.apply(this, arguments);
			} else {
				fns.push(fn);

				if(!waiting){
					waiting = true;
					(document.hidden ? setTimeout : requestAnimationFrame)(run);
				}
			}
		};

		rafBatch._lsFlush = run;

		return rafBatch;
	})();

	var rAFIt = function(fn, simple){
		return simple ?
			function() {
				rAF(fn);
			} :
			function(){
				var that = this;
				var args = arguments;
				rAF(function(){
					fn.apply(that, args);
				});
			}
		;
	};

	var throttle = function(fn){
		var running;
		var lastTime = 0;
		var gDelay = lazySizesCfg.throttleDelay;
		var rICTimeout = lazySizesCfg.ricTimeout;
		var run = function(){
			running = false;
			lastTime = Date.now();
			fn();
		};
		var idleCallback = requestIdleCallback && rICTimeout > 49 ?
			function(){
				requestIdleCallback(run, {timeout: rICTimeout});

				if(rICTimeout !== lazySizesCfg.ricTimeout){
					rICTimeout = lazySizesCfg.ricTimeout;
				}
			} :
			rAFIt(function(){
				setTimeout(run);
			}, true)
		;

		return function(isPriority){
			var delay;

			if((isPriority = isPriority === true)){
				rICTimeout = 33;
			}

			if(running){
				return;
			}

			running =  true;

			delay = gDelay - (Date.now() - lastTime);

			if(delay < 0){
				delay = 0;
			}

			if(isPriority || delay < 9){
				idleCallback();
			} else {
				setTimeout(idleCallback, delay);
			}
		};
	};

	//based on http://modernjavascript.blogspot.de/2013/08/building-better-debounce.html
	var debounce = function(func) {
		var timeout, timestamp;
		var wait = 99;
		var run = function(){
			timeout = null;
			func();
		};
		var later = function() {
			var last = Date.now() - timestamp;

			if (last < wait) {
				setTimeout(later, wait - last);
			} else {
				(requestIdleCallback || run)(run);
			}
		};

		return function() {
			timestamp = Date.now();

			if (!timeout) {
				timeout = setTimeout(later, wait);
			}
		};
	};

	var loader = (function(){
		var preloadElems, isCompleted, resetPreloadingTimer, loadMode, started;

		var eLvW, elvH, eLtop, eLleft, eLright, eLbottom, isBodyHidden;

		var regImg = /^img$/i;
		var regIframe = /^iframe$/i;

		var supportScroll = ('onscroll' in window) && !(/(gle|ing)bot/.test(navigator.userAgent));

		var shrinkExpand = 0;
		var currentExpand = 0;

		var isLoading = 0;
		var lowRuns = -1;

		var resetPreloading = function(e){
			isLoading--;
			if(!e || isLoading < 0 || !e.target){
				isLoading = 0;
			}
		};

		var isVisible = function (elem) {
			if (isBodyHidden == null) {
				isBodyHidden = getCSS(document.body, 'visibility') == 'hidden';
			}

			return isBodyHidden || !(getCSS(elem.parentNode, 'visibility') == 'hidden' && getCSS(elem, 'visibility') == 'hidden');
		};

		var isNestedVisible = function(elem, elemExpand){
			var outerRect;
			var parent = elem;
			var visible = isVisible(elem);

			eLtop -= elemExpand;
			eLbottom += elemExpand;
			eLleft -= elemExpand;
			eLright += elemExpand;

			while(visible && (parent = parent.offsetParent) && parent != document.body && parent != docElem){
				visible = ((getCSS(parent, 'opacity') || 1) > 0);

				if(visible && getCSS(parent, 'overflow') != 'visible'){
					outerRect = parent.getBoundingClientRect();
					visible = eLright > outerRect.left &&
						eLleft < outerRect.right &&
						eLbottom > outerRect.top - 1 &&
						eLtop < outerRect.bottom + 1
					;
				}
			}

			return visible;
		};

		var checkElements = function() {
			var eLlen, i, rect, autoLoadElem, loadedSomething, elemExpand, elemNegativeExpand, elemExpandVal,
				beforeExpandVal, defaultExpand, preloadExpand, hFac;
			var lazyloadElems = lazysizes.elements;

			if((loadMode = lazySizesCfg.loadMode) && isLoading < 8 && (eLlen = lazyloadElems.length)){

				i = 0;

				lowRuns++;

				for(; i < eLlen; i++){

					if(!lazyloadElems[i] || lazyloadElems[i]._lazyRace){continue;}

					if(!supportScroll || (lazysizes.prematureUnveil && lazysizes.prematureUnveil(lazyloadElems[i]))){unveilElement(lazyloadElems[i]);continue;}

					if(!(elemExpandVal = lazyloadElems[i][_getAttribute]('data-expand')) || !(elemExpand = elemExpandVal * 1)){
						elemExpand = currentExpand;
					}

					if (!defaultExpand) {
						defaultExpand = (!lazySizesCfg.expand || lazySizesCfg.expand < 1) ?
							docElem.clientHeight > 500 && docElem.clientWidth > 500 ? 500 : 370 :
							lazySizesCfg.expand;

						lazysizes._defEx = defaultExpand;

						preloadExpand = defaultExpand * lazySizesCfg.expFactor;
						hFac = lazySizesCfg.hFac;
						isBodyHidden = null;

						if(currentExpand < preloadExpand && isLoading < 1 && lowRuns > 2 && loadMode > 2 && !document.hidden){
							currentExpand = preloadExpand;
							lowRuns = 0;
						} else if(loadMode > 1 && lowRuns > 1 && isLoading < 6){
							currentExpand = defaultExpand;
						} else {
							currentExpand = shrinkExpand;
						}
					}

					if(beforeExpandVal !== elemExpand){
						eLvW = innerWidth + (elemExpand * hFac);
						elvH = innerHeight + elemExpand;
						elemNegativeExpand = elemExpand * -1;
						beforeExpandVal = elemExpand;
					}

					rect = lazyloadElems[i].getBoundingClientRect();

					if ((eLbottom = rect.bottom) >= elemNegativeExpand &&
						(eLtop = rect.top) <= elvH &&
						(eLright = rect.right) >= elemNegativeExpand * hFac &&
						(eLleft = rect.left) <= eLvW &&
						(eLbottom || eLright || eLleft || eLtop) &&
						(lazySizesCfg.loadHidden || isVisible(lazyloadElems[i])) &&
						((isCompleted && isLoading < 3 && !elemExpandVal && (loadMode < 3 || lowRuns < 4)) || isNestedVisible(lazyloadElems[i], elemExpand))){
						unveilElement(lazyloadElems[i]);
						loadedSomething = true;
						if(isLoading > 9){break;}
					} else if(!loadedSomething && isCompleted && !autoLoadElem &&
						isLoading < 4 && lowRuns < 4 && loadMode > 2 &&
						(preloadElems[0] || lazySizesCfg.preloadAfterLoad) &&
						(preloadElems[0] || (!elemExpandVal && ((eLbottom || eLright || eLleft || eLtop) || lazyloadElems[i][_getAttribute](lazySizesCfg.sizesAttr) != 'auto')))){
						autoLoadElem = preloadElems[0] || lazyloadElems[i];
					}
				}

				if(autoLoadElem && !loadedSomething){
					unveilElement(autoLoadElem);
				}
			}
		};

		var throttledCheckElements = throttle(checkElements);

		var switchLoadingClass = function(e){
			var elem = e.target;

			if (elem._lazyCache) {
				delete elem._lazyCache;
				return;
			}

			resetPreloading(e);
			addClass(elem, lazySizesCfg.loadedClass);
			removeClass(elem, lazySizesCfg.loadingClass);
			addRemoveLoadEvents(elem, rafSwitchLoadingClass);
			triggerEvent(elem, 'lazyloaded');
		};
		var rafedSwitchLoadingClass = rAFIt(switchLoadingClass);
		var rafSwitchLoadingClass = function(e){
			rafedSwitchLoadingClass({target: e.target});
		};

		var changeIframeSrc = function(elem, src){
			var loadMode = elem.getAttribute('data-load-mode') || lazySizesCfg.iframeLoadMode;

			// loadMode can be also a string!
			if (loadMode == 0) {
				elem.contentWindow.location.replace(src);
			} else if (loadMode == 1) {
				elem.src = src;
			}
		};

		var handleSources = function(source){
			var customMedia;

			var sourceSrcset = source[_getAttribute](lazySizesCfg.srcsetAttr);

			if( (customMedia = lazySizesCfg.customMedia[source[_getAttribute]('data-media') || source[_getAttribute]('media')]) ){
				source.setAttribute('media', customMedia);
			}

			if(sourceSrcset){
				source.setAttribute('srcset', sourceSrcset);
			}
		};

		var lazyUnveil = rAFIt(function (elem, detail, isAuto, sizes, isImg){
			var src, srcset, parent, isPicture, event, firesLoad;

			if(!(event = triggerEvent(elem, 'lazybeforeunveil', detail)).defaultPrevented){

				if(sizes){
					if(isAuto){
						addClass(elem, lazySizesCfg.autosizesClass);
					} else {
						elem.setAttribute('sizes', sizes);
					}
				}

				srcset = elem[_getAttribute](lazySizesCfg.srcsetAttr);
				src = elem[_getAttribute](lazySizesCfg.srcAttr);

				if(isImg) {
					parent = elem.parentNode;
					isPicture = parent && regPicture.test(parent.nodeName || '');
				}

				firesLoad = detail.firesLoad || (('src' in elem) && (srcset || src || isPicture));

				event = {target: elem};

				addClass(elem, lazySizesCfg.loadingClass);

				if(firesLoad){
					clearTimeout(resetPreloadingTimer);
					resetPreloadingTimer = setTimeout(resetPreloading, 2500);
					addRemoveLoadEvents(elem, rafSwitchLoadingClass, true);
				}

				if(isPicture){
					forEach.call(parent.getElementsByTagName('source'), handleSources);
				}

				if(srcset){
					elem.setAttribute('srcset', srcset);
				} else if(src && !isPicture){
					if(regIframe.test(elem.nodeName)){
						changeIframeSrc(elem, src);
					} else {
						elem.src = src;
					}
				}

				if(isImg && (srcset || isPicture)){
					updatePolyfill(elem, {src: src});
				}
			}

			if(elem._lazyRace){
				delete elem._lazyRace;
			}
			removeClass(elem, lazySizesCfg.lazyClass);

			rAF(function(){
				// Part of this can be removed as soon as this fix is older: https://bugs.chromium.org/p/chromium/issues/detail?id=7731 (2015)
				var isLoaded = elem.complete && elem.naturalWidth > 1;

				if( !firesLoad || isLoaded){
					if (isLoaded) {
						addClass(elem, lazySizesCfg.fastLoadedClass);
					}
					switchLoadingClass(event);
					elem._lazyCache = true;
					setTimeout(function(){
						if ('_lazyCache' in elem) {
							delete elem._lazyCache;
						}
					}, 9);
				}
				if (elem.loading == 'lazy') {
					isLoading--;
				}
			}, true);
		});

		/**
		 *
		 * @param elem { Element }
		 */
		var unveilElement = function (elem){
			if (elem._lazyRace) {return;}
			var detail;

			var isImg = regImg.test(elem.nodeName);

			//allow using sizes="auto", but don't use. it's invalid. Use data-sizes="auto" or a valid value for sizes instead (i.e.: sizes="80vw")
			var sizes = isImg && (elem[_getAttribute](lazySizesCfg.sizesAttr) || elem[_getAttribute]('sizes'));
			var isAuto = sizes == 'auto';

			if( (isAuto || !isCompleted) && isImg && (elem[_getAttribute]('src') || elem.srcset) && !elem.complete && !hasClass(elem, lazySizesCfg.errorClass) && hasClass(elem, lazySizesCfg.lazyClass)){return;}

			detail = triggerEvent(elem, 'lazyunveilread').detail;

			if(isAuto){
				 autoSizer.updateElem(elem, true, elem.offsetWidth);
			}

			elem._lazyRace = true;
			isLoading++;

			lazyUnveil(elem, detail, isAuto, sizes, isImg);
		};

		var afterScroll = debounce(function(){
			lazySizesCfg.loadMode = 3;
			throttledCheckElements();
		});

		var altLoadmodeScrollListner = function(){
			if(lazySizesCfg.loadMode == 3){
				lazySizesCfg.loadMode = 2;
			}
			afterScroll();
		};

		var onload = function(){
			if(isCompleted){return;}
			if(Date.now() - started < 999){
				setTimeout(onload, 999);
				return;
			}


			isCompleted = true;

			lazySizesCfg.loadMode = 3;

			throttledCheckElements();

			addEventListener('scroll', altLoadmodeScrollListner, true);
		};

		return {
			_: function(){
				started = Date.now();

				lazysizes.elements = document.getElementsByClassName(lazySizesCfg.lazyClass);
				preloadElems = document.getElementsByClassName(lazySizesCfg.lazyClass + ' ' + lazySizesCfg.preloadClass);

				addEventListener('scroll', throttledCheckElements, true);

				addEventListener('resize', throttledCheckElements, true);

				addEventListener('pageshow', function (e) {
					if (e.persisted) {
						var loadingElements = document.querySelectorAll('.' + lazySizesCfg.loadingClass);

						if (loadingElements.length && loadingElements.forEach) {
							requestAnimationFrame(function () {
								loadingElements.forEach( function (img) {
									if (img.complete) {
										unveilElement(img);
									}
								});
							});
						}
					}
				});

				if(window.MutationObserver){
					new MutationObserver( throttledCheckElements ).observe( docElem, {childList: true, subtree: true, attributes: true} );
				} else {
					docElem[_addEventListener]('DOMNodeInserted', throttledCheckElements, true);
					docElem[_addEventListener]('DOMAttrModified', throttledCheckElements, true);
					setInterval(throttledCheckElements, 999);
				}

				addEventListener('hashchange', throttledCheckElements, true);

				//, 'fullscreenchange'
				['focus', 'mouseover', 'click', 'load', 'transitionend', 'animationend'].forEach(function(name){
					document[_addEventListener](name, throttledCheckElements, true);
				});

				if((/d$|^c/.test(document.readyState))){
					onload();
				} else {
					addEventListener('load', onload);
					document[_addEventListener]('DOMContentLoaded', throttledCheckElements);
					setTimeout(onload, 20000);
				}

				if(lazysizes.elements.length){
					checkElements();
					rAF._lsFlush();
				} else {
					throttledCheckElements();
				}
			},
			checkElems: throttledCheckElements,
			unveil: unveilElement,
			_aLSL: altLoadmodeScrollListner,
		};
	})();


	var autoSizer = (function(){
		var autosizesElems;

		var sizeElement = rAFIt(function(elem, parent, event, width){
			var sources, i, len;
			elem._lazysizesWidth = width;
			width += 'px';

			elem.setAttribute('sizes', width);

			if(regPicture.test(parent.nodeName || '')){
				sources = parent.getElementsByTagName('source');
				for(i = 0, len = sources.length; i < len; i++){
					sources[i].setAttribute('sizes', width);
				}
			}

			if(!event.detail.dataAttr){
				updatePolyfill(elem, event.detail);
			}
		});
		/**
		 *
		 * @param elem {Element}
		 * @param dataAttr
		 * @param [width] { number }
		 */
		var getSizeElement = function (elem, dataAttr, width){
			var event;
			var parent = elem.parentNode;

			if(parent){
				width = getWidth(elem, parent, width);
				event = triggerEvent(elem, 'lazybeforesizes', {width: width, dataAttr: !!dataAttr});

				if(!event.defaultPrevented){
					width = event.detail.width;

					if(width && width !== elem._lazysizesWidth){
						sizeElement(elem, parent, event, width);
					}
				}
			}
		};

		var updateElementsSizes = function(){
			var i;
			var len = autosizesElems.length;
			if(len){
				i = 0;

				for(; i < len; i++){
					getSizeElement(autosizesElems[i]);
				}
			}
		};

		var debouncedUpdateElementsSizes = debounce(updateElementsSizes);

		return {
			_: function(){
				autosizesElems = document.getElementsByClassName(lazySizesCfg.autosizesClass);
				addEventListener('resize', debouncedUpdateElementsSizes);
			},
			checkElems: debouncedUpdateElementsSizes,
			updateElem: getSizeElement
		};
	})();

	var init = function(){
		if(!init.i && document.getElementsByClassName){
			init.i = true;
			autoSizer._();
			loader._();
		}
	};

	setTimeout(function(){
		if(lazySizesCfg.init){
			init();
		}
	});

	lazysizes = {
		/**
		 * @type { LazySizesConfigPartial }
		 */
		cfg: lazySizesCfg,
		autoSizer: autoSizer,
		loader: loader,
		init: init,
		uP: updatePolyfill,
		aC: addClass,
		rC: removeClass,
		hC: hasClass,
		fire: triggerEvent,
		gW: getWidth,
		rAF: rAF,
	};

	return lazysizes;
}
));


/***/ }),

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/app": 0,
/******/ 			"app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["app"], () => (__webpack_require__("./src/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["app"], () => (__webpack_require__("./src/app.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;