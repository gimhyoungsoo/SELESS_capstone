/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/static/index.js":
/*!*****************************!*\
  !*** ./src/static/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _view_footer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/footer.js */ \"./src/static/view/footer.js\");\n\r\n\r\nwindow.onload = () => {\r\n    const main = document.querySelector(\"main\");\r\n\r\n    const footer = document.querySelector(\"footer\");\r\n    new _view_footer_js__WEBPACK_IMPORTED_MODULE_0__.Footer()\r\n    footer.style.display = 'none'\r\n    document.querySelector('.return').addEventListener('click',()=>{\r\n        const targetUrl = \"index.html?foo=bar\";\r\n        const { pathname } = window.location;\r\n\r\n        //* 같은 URL 은 스택에 추가하지 않는다\r\n        if (targetUrl === pathname) {\r\n            return;\r\n        }\r\n        const locationChangeEvent = new CustomEvent(\"locationchange\", {\r\n            composed: true,\r\n            detail: {\r\n                href: \"index.html\"\r\n            },\r\n        });\r\n\r\n        //* 주소변경 이벤트 Dispatch\r\n        window.dispatchEvent(locationChangeEvent);\r\n    })\r\n    \r\n\r\n    const handleLocationChange = (e) => {\r\n        const {\r\n            href\r\n        } = e.detail;\r\n        console.log(href);\r\n\r\n        //* 주소변경\r\n        window.history.pushState(undefined, \"타이틀\", href);\r\n        //* 콘텐츠 렌더링\r\n        renderContents();\r\n    };\r\n    //* locationchange 이벤트리스너\r\n    window.addEventListener(\"locationchange\", handleLocationChange);\r\n\r\n    const homeHTML = `\r\n    <div>\r\n        <button type='button' class=\"menu_rsp\">move to 가위바위보</button>\r\n        <button type='button'>move to /some</button>\r\n        <button type='button'>move to /some</button>\r\n    </div>  `\r\n    main.innerHTML = homeHTML\r\n\r\n    const button = document.querySelector(\"button\");\r\n    button.addEventListener(\"click\", () => {\r\n        const targetUrl = \"some?foo=bar\";\r\n        const { pathname } = window.location;\r\n\r\n        //* 같은 URL 은 스택에 추가하지 않는다\r\n        if (targetUrl === pathname) {\r\n            return;\r\n        }\r\n        const locationChangeEvent = new CustomEvent(\"locationchange\", {\r\n            composed: true,\r\n            detail: {\r\n                href: \"some\"\r\n            },\r\n        });\r\n\r\n        //* 주소변경 이벤트 Dispatch\r\n        window.dispatchEvent(locationChangeEvent);\r\n    });\r\n    \r\n    const renderContents = () => {\r\n        const { pathname } = window.location;\r\n        switch (pathname) {\r\n            case \"/dist/index.html\":\r\n                main.innerHTML = homeHTML;\r\n                footer.style.display = 'none';\r\n                break;\r\n            case \"/dist/some\":\r\n                main.innerHTML = '<div>some Contents</div>';\r\n                footer.style.display = 'block';\r\n                break;\r\n            default:\r\n                main.innerHTML = \"<div>404</div>\";\r\n                footer.style.display = 'none';\r\n        }\r\n    };\r\n\r\n    window.addEventListener(\"popstate\", () => {\r\n        renderContents();\r\n    });\r\n\r\n};\n\n//# sourceURL=webpack://seless_capstone/./src/static/index.js?");

/***/ }),

/***/ "./src/static/view/footer.js":
/*!***********************************!*\
  !*** ./src/static/view/footer.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Footer\": () => (/* binding */ Footer)\n/* harmony export */ });\nclass Footer{\r\n    constructor(){\r\n        document.querySelector('footer').insertAdjacentHTML(\r\n            'beforeend',\r\n            `<div>\r\n                <button class=\"retry\">다시하기</button>\r\n                <button class=\"return\">뒤로가기</button>\r\n            </div>`\r\n        );\r\n    }\r\n}\n\n//# sourceURL=webpack://seless_capstone/./src/static/view/footer.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/static/index.js");
/******/ 	
/******/ })()
;