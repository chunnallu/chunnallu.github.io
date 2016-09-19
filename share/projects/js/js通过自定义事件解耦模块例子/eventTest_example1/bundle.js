/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _b = __webpack_require__(1);

	var _b2 = _interopRequireDefault(_b);

	var _c = __webpack_require__(2);

	var _c2 = _interopRequireDefault(_c);

	var _d = __webpack_require__(3);

	var _d2 = _interopRequireDefault(_d);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var a = document.getElementById("a"); /**
	                                       * Created by Administrator on 2016/9/8.
	                                       */

	a.addEventListener("click", function (e) {
	    var clickA = new CustomEvent("clickA", { 'detail': '123' });
	    document.dispatchEvent(clickA);
	});
	a.addEventListener("dblclick", function (e) {
	    var clickB = new CustomEvent("clickB", { 'detail': '123' });
	    document.dispatchEvent(clickB);
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Created by Administrator on 2016/9/8.
	 */
	var b = document.getElementById("b");
	document.addEventListener("clickA", function (e) {
	  b.innerHTML = ":" + e.detail;
	});

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Created by Administrator on 2016/9/8.
	 */

	var c = document.getElementById("c");
	document.addEventListener("clickA", function (e) {
	  c.innerHTML = "你点了A";
	});

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Created by Administrator on 2016/9/8.
	 */
	var d = document.getElementById("d");
	document.addEventListener("clickB", function (e) {
	  d.style.background = "#89e733";
	});

/***/ }
/******/ ]);