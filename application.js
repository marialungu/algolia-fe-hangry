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

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_components_restaurant_card_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/components/restaurant-card.js */ \"./src/components/restaurant-card.js\");\n/* harmony import */ var _src_js_search_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/js/search.js */ \"./src/js/search.js\");\n// import { test, Search } from \"./src/js/search.js\"\n\n/**\n * Main application element, simply registers the web components\n//  */\n\n\nnew _src_js_search_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({}).renderResults();\nalert('connected');\n\n//# sourceURL=webpack://algolia-fe-hangry/./app.js?");

/***/ }),

/***/ "./src/components/restaurant-card.js":
/*!*******************************************!*\
  !*** ./src/components/restaurant-card.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"RestaurantContainer\": () => (/* binding */ RestaurantContainer),\n/* harmony export */   \"restaurantCardsContainer\": () => (/* binding */ restaurantCardsContainer)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } Object.defineProperty(subClass, \"prototype\", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _wrapNativeSuper(Class) { var _cache = typeof Map === \"function\" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== \"function\") { throw new TypeError(\"Super expression must either be null or a function\"); } if (typeof _cache !== \"undefined\") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }\n\nfunction _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _isNativeFunction(fn) { return Function.toString.call(fn).indexOf(\"[native code]\") !== -1; }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nvar cardTemplate = document.createElement('template');\ncardTemplate.innerHTML = \"\\n<div class=\\\"restaurant-card\\\">\\n        <img class=\\\"restaurant-image\\\" src=\\\"https://source.unsplash.com/random/310x160/?restaurant\\\">\\n        <div id=\\\"restaurant-name\\\" class=\\\"restaurant-name\\\"></div>\\n        <div class=\\\"restaurant-subheader\\\">\\n            <div id=\\\"price\\\"></div>\\n            <div id=\\\"food-type\\\"></div>\\n            <div id=\\\"location\\\"></div>\\n        </div>\\n        <div class=\\\"rating\\\">\\n            <div id=\\\"rating\\\" class=\\\"rating-score\\\"></div>\\n            <div id=\\\"rating-stars\\\"></div>\\n        </div>\\n    </div>\\n\";\nvar RestaurantContainer = /*#__PURE__*/function (_HTMLElement) {\n  _inherits(RestaurantContainer, _HTMLElement);\n\n  var _super = _createSuper(RestaurantContainer);\n\n  function RestaurantContainer() {\n    _classCallCheck(this, RestaurantContainer);\n\n    return _super.call(this); // this.appendChild(cardTemplate.content.cloneNode(true));\n  }\n\n  _createClass(RestaurantContainer, [{\n    key: \"renderItems\",\n    value: function renderItems(content) {\n      console.log(content);\n    }\n  }, {\n    key: \"renderCard\",\n    value: function renderCard(hit) {\n      var restaurantClone = cardTemplate.content.cloneNode(true);\n      var name = restaurantClone.querySelector('#restaurant-name');\n      var price = restaurantClone.querySelector('#price');\n      var foodType = restaurantClone.querySelector('#food-type');\n      var location = restaurantClone.querySelector('#location');\n      var rating = restaurantClone.querySelector('#rating'); // const ratingStars = restaurantClone.querySelector('#rating-stars');\n      // generateStarRating(starSolid, ratingStars, hit.rounded_stars_count)\n      // generateStarRating(starOutline, ratingStars, 5 - hit.rounded_stars_count)\n\n      name.textContent = hit.name;\n      price.textContent = hit.price_range;\n      foodType.textContent = hit.food_type;\n      location.textContent = hit.neighborhood;\n      rating.textContent = hit.stars_count; // elementsList.appendChild(restaurantClone)\n    }\n  }]);\n\n  return RestaurantContainer;\n}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));\nvar restaurantCardsContainer = function restaurantCardsContainer() {\n  return customElements.define('restaurant-card', RestaurantContainer);\n};\n\n//# sourceURL=webpack://algolia-fe-hangry/./src/components/restaurant-card.js?");

/***/ }),

/***/ "./src/js/search.js":
/*!**************************!*\
  !*** ./src/js/search.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SearchContainer\": () => (/* binding */ SearchContainer),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_restaurant_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/restaurant-card */ \"./src/components/restaurant-card.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\nvar applicationID = '7PKCLB5WKZ';\nvar apiKey = '253e1b38b67534943884ddee5c7bc2d7';\nvar index = 'fe_restaurants'; //\n// class Hello {\n//     constructor(config) {\n//         this.target = config.target;\n//         console.log('here')\n//     }\n//\n//     run() {\n//         console.log('here')\n//         this.target.innerHTML = `\n//       <p>\n//         Hello from ES2015\n//       </p>\n//     `;\n//     }\n// }\n//\n// export default Hello\n\nvar SearchContainer = /*#__PURE__*/function () {\n  function SearchContainer() {\n    _classCallCheck(this, SearchContainer);\n\n    // super();\n    console.log('here');\n    this.searchBar = '';\n    this.container = '';\n    var client = algoliasearch(applicationID, apiKey);\n    this.helper = algoliasearchHelper(client, index); // this.container = new restaurantCardsContainer()\n  }\n\n  _createClass(SearchContainer, [{\n    key: \"connectedCallback\",\n    value: function connectedCallback() {\n      this.searchBar = this.querySelector(\"#search-box-input\");\n      this.container = this.querySelector(\"#main\");\n      this.renderResults();\n    }\n  }, {\n    key: \"onSearch\",\n    value: function onSearch() {\n      var _this = this;\n\n      this.searchBar.addEventListener('keyup', function () {\n        _this.helper.setQuery(_this.searchBar.value).search();\n      });\n    }\n  }, {\n    key: \"renderResults\",\n    value: function renderResults() {\n      this.helper.search();\n      console.log('here');\n      this.helper.on('result', function (content) {\n        console.log(content);\n      });\n    }\n  }]);\n\n  return SearchContainer;\n}();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchContainer); // export const Search = () => customElements.define('algolia-search', SearchContainer);\n\n//# sourceURL=webpack://algolia-fe-hangry/./src/js/search.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./app.js");
/******/ 	
/******/ })()
;