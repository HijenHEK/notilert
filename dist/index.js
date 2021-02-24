/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Notilert)\n/* harmony export */ });\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nclass Notilert {\n  // ---- static count per corner ----\n  constructor(opt = {}) {\n    // ---- initializing parameters ----\n    this.content = opt.content ?? 'test';\n    this.position = opt.position ?? 'bottom-right';\n    this.color = opt.color ?? '#0a0a0a';\n    this.bgColor = opt.bgColor ?? '#e3e3e3';\n    this.width = opt.width ?? '250px';\n    this.height = opt.height ?? null;\n    this.size = opt.size ?? '1rem';\n    this.font = opt.font ?? 'system-ui';\n    this.timeout = opt.timeout * 1000 ?? null;\n    this.closeable = opt.closeable ?? true;\n    this.type = opt.type ?? null;\n    this.class = opt.class ?? null;\n    this.link = opt.link ?? null;\n    Notilert.n[this.position] += 1;\n    this.index = Notilert.n[this.position];\n    this.id = `_${this.position}_${new Date().getTime()}_${this.index}`;\n    document.body.style.overflowX = 'hidden'; // ---- setting types ----\n\n    if (this.type) this.color = '#fff';\n\n    switch (this.type) {\n      case 'success':\n        this.bgColor = '#68CD86';\n        break;\n\n      case 'alert':\n        this.bgColor = '#FDB64A';\n        break;\n\n      case 'danger':\n        this.bgColor = '#E54D42';\n        break;\n\n      case 'default':\n        this.bgColor = '#ededed';\n        this.color = '#000';\n        break;\n\n      default:\n        break;\n    } // ---- creating the html element ----\n\n\n    window[`el${this.id}`] = document.createElement('div');\n    window[`elIdAtt${this.id}`] = document.createAttribute('id');\n    window[`elIdAtt${this.id}`].value = `Notilert${this.id}`;\n    window[`el${this.id}`].setAttributeNode(window[`elIdAtt${this.id}`]); // -- testing for html-content and parsing it to cnt element\n\n    if (/<(?=.*? .*?\\/ ?>|br|h?|input|!--|wbr)[a-z]+.*?>|<([a-z]+).*?<\\/\\1>/i.test(this.content)) {\n      window[`el${this.id}`].innerHTML = this.content;\n\n      if (window[`el${this.id}`].children.length > 1) {\n        window[`el${this.id}`].innerHTML = '';\n        window[`cnt${this.id}`] = document.createElement('div');\n        window[`cnt${this.id}`].innerHTML = this.content;\n        window[`el${this.id}`].appendChild(window[`cnt${this.id}`]);\n      }\n    } else {\n      window[`cnt${this.id}`] = document.createElement('div');\n      window[`cnt${this.id}`].innerText = this.content;\n      window[`el${this.id}`].appendChild(window[`cnt${this.id}`]);\n    }\n\n    window[`el${this.id}`].children[0].id = `cnt${this.id}`;\n\n    if (this.closeable) {\n      window[`cl${this.id}`] = document.createElement('div');\n      window[`cl${this.id}`].innerHTML = ' &#10006; ';\n      window[`clStyleAtt${this.id}`] = document.createAttribute('style');\n      window[`clStyleAtt${this.id}`].value = `font-weight:500;cursor:pointer;font-size : ${this.size} ; padding : 0.2rem; flex-shrink : 0; \n                                                width:calc(${this.size}*1.5);height:calc(${this.size}*1.5);margin:0 1rem 0 0 ;display :flex; justify-content:center; align-item:center;align-self:start;\n                                                border-radius:100% ; background-color : ${this.color} ;font-family : ${this.font} ,sans-serif ; color : ${this.bgColor}`;\n      window[`clIdAtt${this.id}`] = document.createAttribute('id');\n      window[`clIdAtt${this.id}`].value = `close${this.id}`;\n      window[`cl${this.id}`].setAttributeNode(window[`clIdAtt${this.id}`]);\n      window[`cl${this.id}`].setAttributeNode(window[`clStyleAtt${this.id}`]);\n      window[`el${this.id}`].appendChild(window[`cl${this.id}`]);\n    }\n\n    document.body.appendChild(window[`el${this.id}`]); // ---- grabbing the notif element ----\n\n    window[`notif${this.id}`] = document.getElementById(`Notilert${this.id}`);\n    window[`close${this.id}`] = document.getElementById(`close${this.id}`);\n    window[`notifStyleAtt${this.id}`] = document.createAttribute('style');\n    window[`close${this.id}`].style.opacity = '0.5';\n    window[`notifStyleAtt${this.id}`].value = `padding : 1rem ; display: flex ; max-width: 40%;\n                                                justify-content : space-between ; align-items : center ; font-size : ${this.size} ;\n                                                color : ${this.color} ; border-radius : 5px ; font-family : ${this.font} ,sans-serif ;\n                                                box-shadow : 1px 1px 3px 1px ${this.bgColor} ;\n                                                background-color : ${this.bgColor} ; width : ${this.width} ; \n                                                height : ${this.height} ; position : absolute ; z-index : 9999999999 ; opacity : 0.8`;\n    window[`notif${this.id}`].setAttributeNode(window[`notifStyleAtt${this.id}`]); // ---- positioning ----\n\n    if (this.position.includes('bottom')) {\n      window[`notif${this.id}`].style.bottom = `calc( 5% + calc(10px + ${this.height ?? `${window[`notif${this.id}`].offsetHeight}px`}) * ${this.index - 1}) `;\n    } else {\n      window[`notif${this.id}`].style.top = `calc( 2% + calc(10px + ${this.height ?? `${window[`notif${this.id}`].offsetHeight}px`}) * ${this.index - 1}) `;\n    }\n\n    if (this.position.includes('right')) {\n      window[`notif${this.id}`].style.right = '2%';\n      window[`notif${this.id}`].style.flexDirection = 'row-reverse';\n      window[`notif${this.id}`].style.transform = 'translateX(150%)';\n    } else {\n      window[`notif${this.id}`].style.left = '2%';\n      window[`notif${this.id}`].style.transform = 'translateX(-150%)';\n    } //  ---- showing ----\n\n\n    setTimeout(() => {\n      this.show();\n    }, 500); // closing\n\n    if (this.timeout) {\n      // on this.timeout\n      setTimeout(() => {\n        this.hide();\n      }, this.timeout + 500);\n      setTimeout(() => {\n        this.close();\n      }, this.timeout + 1000);\n    } else if (this.closeable) {\n      // manually\n      window[`close${this.id}`].addEventListener('click', () => {\n        this.hide();\n        setTimeout(() => {\n          this.close();\n        }, 500);\n      });\n    } // ---- click event ----\n\n\n    if (this.link) {\n      window[`notif${this.id}`].style.cursor = 'pointer';\n      window[`notif${this.id}`].addEventListener('click', e => {\n        if (e.target !== window[`cl${this.id}`]) {\n          window[`notif${this.id}`].style.opacity = '0.8';\n\n          if (Array.isArray(this.link)) {\n            const l = this.link[0];\n            if (this.link[1]) window.open(l, '_blank');else window.location.href = l;\n          } else {\n            window.location.href = this.link;\n          }\n\n          this.close();\n        }\n      });\n    }\n\n    window[`notif${this.id}`].addEventListener('mouseenter', () => {\n      window[`notif${this.id}`].style.opacity = '1';\n    });\n    window[`notif${this.id}`].addEventListener('mouseleave', () => {\n      window[`notif${this.id}`].style.opacity = '0.7';\n    });\n    window[`close${this.id}`].addEventListener('mouseenter', () => {\n      window[`close${this.id}`].style.opacity = '1';\n    });\n    window[`close${this.id}`].addEventListener('mouseleave', () => {\n      window[`close${this.id}`].style.opacity = '0.7';\n    });\n  }\n\n  hide() {\n    window[`notif${this.id}`].style.transform = `translateX(${this.position.includes('left') ? '-' : ''}150%)`;\n    window[`notif${this.id}`].style.opacity = '0.2';\n    window[`notif${this.id}`].style.transition = 'all 0.5s ease-in';\n  }\n\n  show() {\n    window[`notif${this.id}`].style.transform = 'translateX(0)';\n    window[`notif${this.id}`].style.opacity = '0.8';\n    window[`notif${this.id}`].style.transition = 'all 0.3s ease-in';\n  }\n\n  close() {\n    document.body.querySelectorAll(`[id^='Notilert_${this.position}_']`).forEach(e => {\n      const id = parseInt(e.id.split('_')[3], 10);\n\n      if (id > this.index) {\n        if (this.position.includes('top')) {\n          e.style.top = `calc(${e.style.top} - ${e.offsetHeight + 10}px )`;\n        } else {\n          e.style.bottom = `calc(${e.style.bottom} - ${e.offsetHeight + 10}px )`;\n        }\n      }\n    });\n    Notilert.n[this.position] -= 1;\n    window[`notif${this.id}`].parentNode.removeChild(window[`notif${this.id}`]);\n    document.body.style.overflowX = 'scroll';\n  }\n\n  update(opt = {}) {\n    this.content = opt.content ?? this.content;\n    this.position = opt.position ?? this.position;\n    this.color = opt.color ?? this.color;\n    this.bgColor = opt.bgColor ?? this.bgColor;\n    this.width = opt.width ?? this.width;\n    this.height = opt.height ?? this.height;\n    this.size = opt.size ?? this.size;\n    this.font = opt.font ?? this.font;\n    this.timeout = opt.timeout ?? this.timeout;\n  }\n\n}\n\n_defineProperty(Notilert, \"n\", {\n  'top-left': 0,\n  'top-right': 0,\n  'bottom-left': 0,\n  'bottom-right': 0\n});\n\n//# sourceURL=webpack://notilert/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});