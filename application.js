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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.scss */ \"./main.scss\");\n/* harmony import */ var _src_components_search_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/components/search-bar */ \"./src/components/search-bar.js\");\n/* harmony import */ var _src_js_restaurant_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/js/restaurant-container */ \"./src/js/restaurant-container.js\");\n/* harmony import */ var _src_js_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/js/search */ \"./src/js/search.js\");\n\n\n\n //\n// const success = (pos) =>  {\n//     new AlgoliaSearch(pos.coords)\n//     new RestaurantContainer().render()\n//     registerSearchBar()\n// }\n//\n// function error() {\n//     new AlgoliaSearch()\n//     new RestaurantContainer().render()\n//     registerSearchBar()\n// }\n//\n// navigator.geolocation\n//     .getCurrentPosition(success, error);\n\nnew _src_js_search__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\nnew _src_js_restaurant_container__WEBPACK_IMPORTED_MODULE_2__[\"default\"]().render();\n(0,_src_components_search_bar__WEBPACK_IMPORTED_MODULE_1__.registerSearchBar)();\n\n//# sourceURL=webpack://algolia-fe-hangry/./app.js?");

/***/ }),

/***/ "./src/components/render-food-filter.js":
/*!**********************************************!*\
  !*** ./src/components/render-food-filter.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderFoodFacets\": () => (/* binding */ renderFoodFacets)\n/* harmony export */ });\n/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./templates */ \"./src/components/templates.js\");\n\nvar renderFoodFacets = function renderFoodFacets(content) {\n  var facetValues = content.results.getFacetValues('food_type');\n  var facets = document.querySelector('#facets');\n\n  var allElements = function allElements(elements) {\n    elements.map(function (facet) {\n      if (facet.count > 4) {\n        var restaurantClone = _templates__WEBPACK_IMPORTED_MODULE_0__.foodFacetTemplate.content.cloneNode(true);\n        var name = restaurantClone.querySelector('#food-facet-name');\n        var count = restaurantClone.querySelector('#food-facet-count');\n        name.textContent = facet.name;\n        count.textContent = facet.count;\n        facets.appendChild(restaurantClone);\n      }\n    });\n  };\n\n  allElements(facetValues);\n};\n\n//# sourceURL=webpack://algolia-fe-hangry/./src/components/render-food-filter.js?");

/***/ }),

/***/ "./src/components/render-no-results.js":
/*!*********************************************!*\
  !*** ./src/components/render-no-results.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderNoResults\": () => (/* binding */ renderNoResults)\n/* harmony export */ });\nvar renderNoResults = function renderNoResults() {\n  var noResults = document.createElement('div');\n  noResults.setAttribute('class', 'no-results');\n  noResults.innerHTML = \"\\n        <img src=\\\"./images/icn-no-results.png\\\">\\n        <div class=\\\"no-results-text\\\">Ooops... looks like there were no restaurants found</div>\\n    \";\n  var elementsContainer = document.querySelector('#container');\n  elementsContainer.innerHTML = '';\n  elementsContainer.appendChild(noResults);\n};\n\n//# sourceURL=webpack://algolia-fe-hangry/./src/components/render-no-results.js?");

/***/ }),

/***/ "./src/components/render-restaurant-cards.js":
/*!***************************************************!*\
  !*** ./src/components/render-restaurant-cards.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderRestaurantCards\": () => (/* binding */ renderRestaurantCards)\n/* harmony export */ });\n/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./templates */ \"./src/components/templates.js\");\n/* harmony import */ var _js_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/utils */ \"./src/js/utils.js\");\n\n\nvar renderRestaurantCards = function renderRestaurantCards(content) {\n  var hits = window._.get(content, ['results', 'hits']);\n\n  var elementsList = document.createElement('div');\n  elementsList.setAttribute('class', 'search-result');\n\n  var allElements = function allElements(elements) {\n    elements.map(function (hit) {\n      var restaurantClone = _templates__WEBPACK_IMPORTED_MODULE_0__.cardTemplate.content.cloneNode(true);\n      var name = restaurantClone.querySelector('#restaurant-name');\n      var price = restaurantClone.querySelector('#price');\n      var foodType = restaurantClone.querySelector('#food-type');\n      var location = restaurantClone.querySelector('#location');\n      var rating = restaurantClone.querySelector('#rating');\n      var ratingStars = restaurantClone.querySelector('#rating-stars');\n      (0,_js_utils__WEBPACK_IMPORTED_MODULE_1__.generateStarRating)(_templates__WEBPACK_IMPORTED_MODULE_0__.starSolid, ratingStars, hit.rounded_stars_count);\n      (0,_js_utils__WEBPACK_IMPORTED_MODULE_1__.generateStarRating)(_templates__WEBPACK_IMPORTED_MODULE_0__.starOutline, ratingStars, 5 - hit.rounded_stars_count);\n      name.textContent = hit.name;\n      price.textContent = hit.price_range;\n      foodType.textContent = hit.food_type;\n      location.textContent = hit.neighborhood;\n      rating.textContent = hit.stars_count;\n      elementsList.appendChild(restaurantClone);\n    });\n    var elementsContainer = document.querySelector('#container');\n    elementsContainer.innerHTML = '';\n    elementsContainer.appendChild(elementsList);\n  };\n\n  allElements(hits);\n};\n\n//# sourceURL=webpack://algolia-fe-hangry/./src/components/render-restaurant-cards.js?");

/***/ }),

/***/ "./src/components/search-bar.js":
/*!**************************************!*\
  !*** ./src/components/search-bar.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SearchBar\": () => (/* binding */ SearchBar),\n/* harmony export */   \"registerSearchBar\": () => (/* binding */ registerSearchBar)\n/* harmony export */ });\n/* harmony import */ var _js_search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/search */ \"./src/js/search.js\");\n/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./templates */ \"./src/components/templates.js\");\n/* harmony import */ var _render_restaurant_cards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render-restaurant-cards */ \"./src/components/render-restaurant-cards.js\");\n/* harmony import */ var _render_no_results__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./render-no-results */ \"./src/components/render-no-results.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } Object.defineProperty(subClass, \"prototype\", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _wrapNativeSuper(Class) { var _cache = typeof Map === \"function\" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== \"function\") { throw new TypeError(\"Super expression must either be null or a function\"); } if (typeof _cache !== \"undefined\") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }\n\nfunction _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _isNativeFunction(fn) { return Function.toString.call(fn).indexOf(\"[native code]\") !== -1; }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\nvar SearchBar = /*#__PURE__*/function (_HTMLElement) {\n  _inherits(SearchBar, _HTMLElement);\n\n  var _super = _createSuper(SearchBar);\n\n  function SearchBar() {\n    var _this;\n\n    _classCallCheck(this, SearchBar);\n\n    _this = _super.call(this);\n    _this.algoliaSearch = new _js_search__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    _this.helper = null;\n    _this.search = null;\n\n    _this.addEventListener('keyup', function () {\n      _this.helper.setQuery(_this.getElementsByTagName('input')[0].value).search();\n    });\n\n    return _this;\n  }\n\n  _createClass(SearchBar, [{\n    key: \"connectedCallback\",\n    value: function connectedCallback() {\n      this.helper = this.algoliaSearch.getHelper();\n      this.search = this.algoliaSearch.executeSearch();\n      this.render();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var nextButton = document.getElementById('next');\n      nextButton.addEventListener('click', function () {\n        _this2.helper.nextPage().search();\n      });\n      var prevButton = document.getElementById('previous');\n      prevButton.addEventListener('click', function () {\n        _this2.helper.previousPage().search();\n      });\n      this.helper.on('result', function (content) {\n        content.results.hits.length > 0 ? (0,_render_restaurant_cards__WEBPACK_IMPORTED_MODULE_2__.renderRestaurantCards)(content) : (0,_render_no_results__WEBPACK_IMPORTED_MODULE_3__.renderNoResults)();\n      });\n      this.appendChild(_templates__WEBPACK_IMPORTED_MODULE_1__.searchBar.content.cloneNode(true));\n    }\n  }]);\n\n  return SearchBar;\n}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));\nvar registerSearchBar = function registerSearchBar() {\n  return customElements.define('search-bar', SearchBar);\n};\n\n//# sourceURL=webpack://algolia-fe-hangry/./src/components/search-bar.js?");

/***/ }),

/***/ "./src/components/templates.js":
/*!*************************************!*\
  !*** ./src/components/templates.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"searchBar\": () => (/* binding */ searchBar),\n/* harmony export */   \"nextButton\": () => (/* binding */ nextButton),\n/* harmony export */   \"prevButton\": () => (/* binding */ prevButton),\n/* harmony export */   \"cardTemplate\": () => (/* binding */ cardTemplate),\n/* harmony export */   \"starSolid\": () => (/* binding */ starSolid),\n/* harmony export */   \"starOutline\": () => (/* binding */ starOutline),\n/* harmony export */   \"foodFacetTemplate\": () => (/* binding */ foodFacetTemplate)\n/* harmony export */ });\nvar searchBar = document.createElement('template');\nsearchBar.innerHTML = \"\\n<input class=\\\"search-box-container\\\" autocomplete=\\\"off\\\" id=\\\"search-box-input\\\" placeholder=\\\"What do you feel like eating today?...\\\"/>\\n\";\nvar nextButton = document.createElement('template');\nnextButton.innerHTML = \"\\n<button class=\\\"primary-btn\\\">\\n    Next\\n</button>\\n\";\nvar prevButton = document.createElement('template');\nprevButton.innerHTML = \"\\n<button class=\\\"primary-btn\\\">\\n    Previous\\n</button>\\n\";\nvar cardTemplate = document.createElement('template');\ncardTemplate.innerHTML = \"\\n<div class=\\\"restaurant-card\\\">\\n    <img class=\\\"restaurant-image\\\" src=\\\"https://source.unsplash.com/random/310x160/?restaurant\\\">\\n    <div id=\\\"restaurant-name\\\" class=\\\"restaurant-name\\\"></div>\\n    <div class=\\\"restaurant-subheader\\\">\\n        <div id=\\\"price\\\"></div>\\n        <div id=\\\"food-type\\\"></div>\\n        <div id=\\\"location\\\"></div>\\n    </div>\\n    <div class=\\\"rating\\\">\\n        <div id=\\\"rating\\\" class=\\\"rating-score\\\"></div>\\n        <div id=\\\"rating-stars\\\"></div>\\n    </div>\\n</div>\\n\";\nvar starSolid = document.createElement('template');\nstarSolid.innerHTML = \"<i class=\\\"fas fa-star star\\\"></i>\";\nvar starOutline = document.createElement('template');\nstarOutline.innerHTML = \"<i class=\\\"far fa-star star\\\"></i>\";\nvar foodFacetTemplate = document.createElement('template');\nfoodFacetTemplate.innerHTML = \"\\n    <div class=\\\"food-facet\\\">\\n        <div class=\\\"food-facet-text food-facet-name\\\" id=\\\"food-facet-name\\\"></div>\\n        <div class=\\\"food-facet-text\\\" id=\\\"food-facet-count\\\"></div>\\n    </div>\\n\";\n\n//# sourceURL=webpack://algolia-fe-hangry/./src/components/templates.js?");

/***/ }),

/***/ "./src/js/restaurant-container.js":
/*!****************************************!*\
  !*** ./src/js/restaurant-container.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"RestaurantContainer\": () => (/* binding */ RestaurantContainer),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search */ \"./src/js/search.js\");\n/* harmony import */ var _components_render_restaurant_cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/render-restaurant-cards */ \"./src/components/render-restaurant-cards.js\");\n/* harmony import */ var _components_render_food_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/render-food-filter */ \"./src/components/render-food-filter.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\n\n\nvar RestaurantContainer = /*#__PURE__*/function () {\n  function RestaurantContainer() {\n    _classCallCheck(this, RestaurantContainer);\n\n    this.algoliaSearch = new _search__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.helper = this.algoliaSearch.getHelper();\n    this.search = this.algoliaSearch.executeSearch();\n  }\n\n  _createClass(RestaurantContainer, [{\n    key: \"render\",\n    value: function render() {\n      var _this = this;\n\n      this.search;\n      var foodFilter = document.getElementById('food-type');\n      var facets = document.getElementById('facets');\n      foodFilter.addEventListener('click', function () {\n        facets.classList.add('open');\n      });\n      var nextButton = document.getElementById('next');\n      nextButton.addEventListener('click', function () {\n        _this.helper.nextPage().search();\n      });\n      var prevButton = document.getElementById('previous');\n      prevButton.addEventListener('click', function () {\n        _this.helper.previousPage().search();\n      });\n      this.helper.on('result', function (content) {\n        (0,_components_render_restaurant_cards__WEBPACK_IMPORTED_MODULE_1__.renderRestaurantCards)(content);\n        (0,_components_render_food_filter__WEBPACK_IMPORTED_MODULE_2__.renderFoodFacets)(content);\n      });\n    }\n  }]);\n\n  return RestaurantContainer;\n}();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RestaurantContainer);\n\n//# sourceURL=webpack://algolia-fe-hangry/./src/js/restaurant-container.js?");

/***/ }),

/***/ "./src/js/search.js":
/*!**************************!*\
  !*** ./src/js/search.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AlgoliaSearch\": () => (/* binding */ AlgoliaSearch),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar applicationID = '7PKCLB5WKZ';\nvar apiKey = '253e1b38b67534943884ddee5c7bc2d7';\nvar index = 'fe_restaurants';\nvar AlgoliaSearch = /*#__PURE__*/_createClass(function AlgoliaSearch(coordinates) {\n  var _this = this;\n\n  _classCallCheck(this, AlgoliaSearch);\n\n  _defineProperty(this, \"executeSearch\", function () {\n    _this.helper.search();\n  });\n\n  _defineProperty(this, \"getHelper\", function () {\n    return _this.helper;\n  });\n\n  console.log('here', coordinates);\n  var client = algoliasearch(applicationID, apiKey);\n  this.helper = algoliasearchHelper(client, index, {\n    // aroundLatLng: String(coordinates.latitude + \",\" + coordinates.longitude),\n    page: 0,\n    facets: ['food_type', 'rounded_stars_count', 'payment_options']\n  });\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AlgoliaSearch);\n\n//# sourceURL=webpack://algolia-fe-hangry/./src/js/search.js?");

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateStarRating\": () => (/* binding */ generateStarRating)\n/* harmony export */ });\nvar generateStarRating = function generateStarRating(starType, parentNode, conditionCeil) {\n  for (var star = 0; star < conditionCeil; star++) {\n    var starClone = starType.content.cloneNode(true);\n    parentNode.appendChild(starClone);\n  }\n};\n\n//# sourceURL=webpack://algolia-fe-hangry/./src/js/utils.js?");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./main.scss":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./main.scss ***!
  \******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://algolia-fe-hangry/./main.scss?./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./main.scss":
/*!*******************!*\
  !*** ./main.scss ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./main.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://algolia-fe-hangry/./main.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://algolia-fe-hangry/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://algolia-fe-hangry/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://algolia-fe-hangry/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://algolia-fe-hangry/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://algolia-fe-hangry/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://algolia-fe-hangry/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./app.js");
/******/ 	
/******/ })()
;