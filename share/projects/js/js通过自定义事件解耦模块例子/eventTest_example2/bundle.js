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

	var _loadImage = __webpack_require__(1);

	var _loadImage2 = _interopRequireDefault(_loadImage);

	var _loadMusic = __webpack_require__(2);

	var _loadMusic2 = _interopRequireDefault(_loadMusic);

	var _initScene = __webpack_require__(3);

	var _initScene2 = _interopRequireDefault(_initScene);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//一定要加载各个模块

	var start = document.getElementById("start"); /**
	                                               * Created by Administrator on 2016/9/8.
	                                               */

	start.addEventListener("click", function (e) {
	    console.log("游戏开始！");
	    var gameStart = new Event("gameStart");
	    document.dispatchEvent(gameStart);
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Created by Administrator on 2016/9/8.
	 */
	document.addEventListener("gameStart", function () {
	    console.log("加载图片...");
	    setTimeout(function () {
	        console.log("加载图片完成");
	        var loadImageSuccess = new Event("loadImageSuccess");
	        document.dispatchEvent(loadImageSuccess);
	    }, 1000);
	});

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Created by Administrator on 2016/9/8.
	 */
	document.addEventListener("gameStart", function () {
	    console.log("加载音乐...");
	    setTimeout(function () {
	        console.log("加载音乐完成");
	        document.dispatchEvent(new Event("loadMusicSuccess"));
	    }, 2000);
	});

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Created by Administrator on 2016/9/8.
	 */

	var init_img_success = false;
	var init_music_success = false;
	document.addEventListener("loadImageSuccess", function (e) {
	    console.log("使用图片创建场景...");
	    setTimeout(function () {
	        console.log("创建场景完成");
	        init_img_success = true;
	        checkShow();
	    }, 2000);
	});

	document.addEventListener("loadMusicSuccess", function (e) {
	    console.log("使用音乐创建音效...");
	    setTimeout(function () {
	        console.log("创建音效完成");
	        init_music_success = true;
	        checkShow();
	    }, 500);
	});

	function checkShow() {
	    if (init_music_success && init_img_success) {
	        var scene = document.getElementById("scene");
	        scene.className = "show";
	    }
	}

/***/ }
/******/ ]);