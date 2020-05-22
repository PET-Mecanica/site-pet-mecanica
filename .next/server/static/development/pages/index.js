module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./11022-rocket.json":
/*!***************************!*\
  !*** ./11022-rocket.json ***!
  \***************************/
/*! exports provided: v, fr, ip, op, w, h, nm, ddd, assets, layers, markers, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"v\":\"5.5.8\",\"fr\":24,\"ip\":0,\"op\":47,\"w\":800,\"h\":600,\"nm\":\"完成效果\",\"ddd\":0,\"assets\":[{\"id\":\"comp_0\",\"layers\":[{\"ddd\":0,\"ind\":1,\"ty\":4,\"nm\":\"大气4\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":52,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[1242.529,704,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[120.529,-276,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0]],\"o\":[[0,0],[0,0]],\"v\":[[526,-276],[-386,-276]],\"c\":false},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"tm\",\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":0,\"s\":[47]},{\"t\":48,\"s\":[47]}],\"ix\":1},\"e\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":0,\"s\":[62]},{\"t\":48,\"s\":[57]}],\"ix\":2},\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":0,\"s\":[-134]},{\"t\":48,\"s\":[546]}],\"ix\":3},\"m\":1,\"ix\":2,\"nm\":\"修剪路径 1\",\"mn\":\"ADBE Vector Filter - Trim\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.674509803922,0.674509803922,0.674509803922,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":8,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"bm\":0,\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"形状 1\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":192,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":2,\"ty\":4,\"nm\":\"大气3\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":52,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[822.529,108,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[120.529,-276,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0]],\"o\":[[0,0],[0,0]],\"v\":[[526,-276],[-386,-276]],\"c\":false},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"tm\",\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":0,\"s\":[47]},{\"t\":48,\"s\":[47]}],\"ix\":1},\"e\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":0,\"s\":[62]},{\"t\":48,\"s\":[57]}],\"ix\":2},\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":0,\"s\":[-134]},{\"t\":48,\"s\":[546]}],\"ix\":3},\"m\":1,\"ix\":2,\"nm\":\"修剪路径 1\",\"mn\":\"ADBE Vector Filter - Trim\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.674509803922,0.674509803922,0.674509803922,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":8,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"bm\":0,\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"形状 1\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":192,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":3,\"ty\":4,\"nm\":\"大气 2\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":52,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[760,456,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,-100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[-20.321,-7.419],[0,0],[0,0]],\"o\":[[0,0],[0,0],[63,23],[0,0],[0,0]],\"v\":[[-438,-160.5],[-34,-159.5],[91,-130.5],[245,-57.5],[466,-56.5]],\"c\":false},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.67409620098,0.67409620098,0.67409620098,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":8,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"bm\":0,\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"形状 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tm\",\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":0,\"s\":[70]},{\"t\":39,\"s\":[33]}],\"ix\":1},\"e\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":0,\"s\":[90]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":18,\"s\":[100]},{\"t\":48,\"s\":[33]}],\"ix\":2},\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":0,\"s\":[0]},{\"t\":48,\"s\":[-527]}],\"ix\":3},\"m\":1,\"ix\":2,\"nm\":\"修剪路径 1\",\"mn\":\"ADBE Vector Filter - Trim\",\"hd\":false}],\"ip\":0,\"op\":49,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":4,\"ty\":4,\"nm\":\"大气 3\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":52,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[760,368,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[-20.321,-7.419],[0,0],[0,0]],\"o\":[[0,0],[0,0],[63,23],[0,0],[0,0]],\"v\":[[-222,-159.5],[-34,-159.5],[91,-130.5],[245,-57.5],[614,-55.5]],\"c\":false},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.67409620098,0.67409620098,0.67409620098,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":8,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"bm\":0,\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"形状 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tm\",\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":0,\"s\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":21,\"s\":[98.077]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":30,\"s\":[75.538]},{\"t\":39,\"s\":[52]}],\"ix\":1},\"e\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":0,\"s\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":7,\"s\":[84]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":18,\"s\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":21,\"s\":[91]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":30,\"s\":[82]},{\"t\":48,\"s\":[33]}],\"ix\":2},\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":0,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":7,\"s\":[10.146]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":21,\"s\":[-197.562]},{\"t\":48,\"s\":[-527]}],\"ix\":3},\"m\":1,\"ix\":2,\"nm\":\"修剪路径 1\",\"mn\":\"ADBE Vector Filter - Trim\",\"hd\":false}],\"ip\":0,\"op\":49,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":5,\"ty\":4,\"nm\":\"大气\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":52,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[760,368,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[-20.321,-7.419],[0,0],[0,0]],\"o\":[[0,0],[0,0],[63,23],[0,0],[0,0]],\"v\":[[-222,-159.5],[-34,-159.5],[91,-130.5],[245,-57.5],[614,-55.5]],\"c\":false},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.67409620098,0.67409620098,0.67409620098,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":8,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"bm\":0,\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"形状 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tm\",\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":0,\"s\":[70]},{\"t\":39,\"s\":[33]}],\"ix\":1},\"e\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":0,\"s\":[90]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":18,\"s\":[100]},{\"t\":48,\"s\":[33]}],\"ix\":2},\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":0,\"s\":[0]},{\"t\":48,\"s\":[-527]}],\"ix\":3},\"m\":1,\"ix\":2,\"nm\":\"修剪路径 1\",\"mn\":\"ADBE Vector Filter - Trim\",\"hd\":false}],\"ip\":0,\"op\":49,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":6,\"ty\":4,\"nm\":\"小火箭 5\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.312,\"y\":1},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":24,\"s\":[652.834,508.132,0],\"to\":[0,-33.167,0],\"ti\":[0,33.167,0]},{\"t\":48,\"s\":[652.834,309.132,0]}],\"ix\":2},\"a\":{\"a\":0,\"k\":[78.766,27.831,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[9.571,20.331],[-9.571,20.331],[-9.571,-20.331],[9.571,-20.331]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0,0,0,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":3,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":10,\"bm\":0,\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[73.201,27.832],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[1.738,0],[0,0],[0,1.738],[0,0],[-1.738,0],[0,0],[0,-1.738],[0,0]],\"o\":[[0,0],[-1.738,0],[0,0],[0,-1.738],[0,0],[1.738,0],[0,0],[0,1.738]],\"v\":[[1.551,11.514],[-1.552,11.514],[-4.699,8.368],[-4.699,-8.367],[-1.552,-11.514],[1.551,-11.514],[4.699,-8.367],[4.699,8.368]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0,0,0,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":3,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":10,\"bm\":0,\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[12.198,27.832],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 2\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[16.505,0],[0,0],[0,5.185],[0,0],[-5.184,0],[0,0],[-14.149,-8.498],[5.541,-3.328]],\"o\":[[0,0],[-5.184,0],[0,0],[0,-5.184],[0,0],[16.505,0],[5.541,3.328],[-14.149,8.499]],\"v\":[[14.178,20.331],[-57.18,20.331],[-66.568,10.945],[-66.568,-10.944],[-57.18,-20.331],[14.178,-20.331],[61.027,-7.343],[61.027,7.344]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0,0,0,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":3,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":10,\"bm\":0,\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.827451040231,0.827451040231,0.827451040231,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[83.464,27.831],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 3\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":3,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":24,\"op\":50,\"st\":35,\"bm\":0},{\"ddd\":0,\"ind\":7,\"ty\":4,\"nm\":\"小火箭\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[581.568,310.132,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[7.5,27.832,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[9.571,20.331],[-9.571,20.331],[-9.571,-20.331],[9.571,-20.331]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0,0,0,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":3,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":10,\"bm\":0,\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[73.201,27.832],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[1.738,0],[0,0],[0,1.738],[0,0],[-1.738,0],[0,0],[0,-1.738],[0,0]],\"o\":[[0,0],[-1.738,0],[0,0],[0,-1.738],[0,0],[1.738,0],[0,0],[0,1.738]],\"v\":[[1.551,11.514],[-1.552,11.514],[-4.699,8.368],[-4.699,-8.367],[-1.552,-11.514],[1.551,-11.514],[4.699,-8.367],[4.699,8.368]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0,0,0,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":3,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":10,\"bm\":0,\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[12.198,27.832],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 2\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[16.505,0],[0,0],[0,5.185],[0,0],[-5.184,0],[0,0],[-14.149,-8.498],[5.541,-3.328]],\"o\":[[0,0],[-5.184,0],[0,0],[0,-5.184],[0,0],[16.505,0],[5.541,3.328],[-14.149,8.499]],\"v\":[[14.178,20.331],[-57.18,20.331],[-66.568,10.945],[-66.568,-10.944],[-57.18,-20.331],[14.178,-20.331],[61.027,-7.343],[61.027,7.344]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0,0,0,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":3,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":10,\"bm\":0,\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.827451040231,0.827451040231,0.827451040231,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[83.464,27.831],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 3\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":3,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":2,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":8,\"ty\":4,\"nm\":\"小火箭 3\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.245,\"y\":1},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":2,\"s\":[652.834,504.132,0],\"to\":[0,-32.333,0],\"ti\":[0,32.333,0]},{\"t\":23,\"s\":[652.834,310.132,0]}],\"ix\":2},\"a\":{\"a\":0,\"k\":[78.766,27.831,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[9.571,20.331],[-9.571,20.331],[-9.571,-20.331],[9.571,-20.331]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0,0,0,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":3,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":10,\"bm\":0,\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[73.201,27.832],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[1.738,0],[0,0],[0,1.738],[0,0],[-1.738,0],[0,0],[0,-1.738],[0,0]],\"o\":[[0,0],[-1.738,0],[0,0],[0,-1.738],[0,0],[1.738,0],[0,0],[0,1.738]],\"v\":[[1.551,11.514],[-1.552,11.514],[-4.699,8.368],[-4.699,-8.367],[-1.552,-11.514],[1.551,-11.514],[4.699,-8.367],[4.699,8.368]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0,0,0,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":3,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":10,\"bm\":0,\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[12.198,27.832],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 2\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[16.505,0],[0,0],[0,5.185],[0,0],[-5.184,0],[0,0],[-14.149,-8.498],[5.541,-3.328]],\"o\":[[0,0],[-5.184,0],[0,0],[0,-5.184],[0,0],[16.505,0],[5.541,3.328],[-14.149,8.499]],\"v\":[[14.178,20.331],[-57.18,20.331],[-66.568,10.945],[-66.568,-10.944],[-57.18,-20.331],[14.178,-20.331],[61.027,-7.343],[61.027,7.344]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0,0,0,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":3,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":10,\"bm\":0,\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.827451040231,0.827451040231,0.827451040231,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[83.464,27.831],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 3\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":3,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":2,\"op\":24,\"st\":1,\"bm\":0},{\"ddd\":0,\"ind\":9,\"ty\":4,\"nm\":\"OC Trails 3\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[750,400,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"ef\":[{\"ty\":5,\"nm\":\"Point 1 Control Layer\",\"np\":3,\"mn\":\"ADBE Layer Control\",\"ix\":1,\"en\":1,\"ef\":[{\"ty\":10,\"nm\":\"图层\",\"mn\":\"ADBE Layer Control-0001\",\"ix\":1,\"v\":{\"a\":0,\"k\":6,\"ix\":1}}]},{\"ty\":5,\"nm\":\"OC Trails\",\"np\":37,\"mn\":\"Pseudo/OC Trails\",\"ix\":2,\"en\":1,\"ef\":[{\"ty\":0,\"nm\":\"Trail Length\",\"mn\":\"Pseudo/OC Trails-0001\",\"ix\":1,\"v\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":36,\"s\":[5]},{\"t\":48,\"s\":[-0.1]}],\"ix\":1}},{\"ty\":0,\"nm\":\"Point Samples\",\"mn\":\"Pseudo/OC Trails-0002\",\"ix\":2,\"v\":{\"a\":0,\"k\":18.9,\"ix\":2}},{\"ty\":6,\"nm\":\"Dynamic Effects\",\"mn\":\"Pseudo/OC Trails-0003\",\"ix\":3,\"v\":0},{\"ty\":7,\"nm\":\"Velocity Trails\",\"mn\":\"Pseudo/OC Trails-0004\",\"ix\":4,\"v\":{\"a\":0,\"k\":0,\"ix\":4}},{\"ty\":6,\"nm\":\"Velocity Trail Options\",\"mn\":\"Pseudo/OC Trails-0005\",\"ix\":5,\"v\":0},{\"ty\":0,\"nm\":\"Velocity Amount\",\"mn\":\"Pseudo/OC Trails-0006\",\"ix\":6,\"v\":{\"a\":0,\"k\":0,\"ix\":6}},{\"ty\":0,\"nm\":\"Velocity at Start\",\"mn\":\"Pseudo/OC Trails-0007\",\"ix\":7,\"v\":{\"a\":0,\"k\":100,\"ix\":7}},{\"ty\":0,\"nm\":\"Velocity at End\",\"mn\":\"Pseudo/OC Trails-0008\",\"ix\":8,\"v\":{\"a\":0,\"k\":100,\"ix\":8}},{\"ty\":7,\"nm\":\"Velocity X\",\"mn\":\"Pseudo/OC Trails-0009\",\"ix\":9,\"v\":{\"a\":0,\"k\":1,\"ix\":9}},{\"ty\":7,\"nm\":\"Velocity Y\",\"mn\":\"Pseudo/OC Trails-0010\",\"ix\":10,\"v\":{\"a\":0,\"k\":1,\"ix\":10}},{\"ty\":6,\"nm\":\"\",\"mn\":\"Pseudo/OC Trails-0011\",\"ix\":11,\"v\":0},{\"ty\":6,\"nm\":\"\",\"mn\":\"Pseudo/OC Trails-0012\",\"ix\":12,\"v\":0},{\"ty\":6,\"nm\":\"\",\"mn\":\"Pseudo/OC Trails-0013\",\"ix\":13,\"v\":0},{\"ty\":7,\"nm\":\"Wiggler\",\"mn\":\"Pseudo/OC Trails-0014\",\"ix\":14,\"v\":{\"a\":0,\"k\":0,\"ix\":14}},{\"ty\":6,\"nm\":\"Wiggler Options\",\"mn\":\"Pseudo/OC Trails-0015\",\"ix\":15,\"v\":0},{\"ty\":0,\"nm\":\"Wiggles/Second\",\"mn\":\"Pseudo/OC Trails-0016\",\"ix\":16,\"v\":{\"a\":0,\"k\":0,\"ix\":16}},{\"ty\":0,\"nm\":\"Wiggle Amount\",\"mn\":\"Pseudo/OC Trails-0017\",\"ix\":17,\"v\":{\"a\":0,\"k\":40,\"ix\":17}},{\"ty\":0,\"nm\":\"Wiggle Cohesion\",\"mn\":\"Pseudo/OC Trails-0018\",\"ix\":18,\"v\":{\"a\":0,\"k\":0,\"ix\":18}},{\"ty\":0,\"nm\":\"Wiggle at Start\",\"mn\":\"Pseudo/OC Trails-0019\",\"ix\":19,\"v\":{\"a\":0,\"k\":0,\"ix\":19}},{\"ty\":0,\"nm\":\"Wiggle at End\",\"mn\":\"Pseudo/OC Trails-0020\",\"ix\":20,\"v\":{\"a\":0,\"k\":100,\"ix\":20}},{\"ty\":7,\"nm\":\"Wiggle X\",\"mn\":\"Pseudo/OC Trails-0021\",\"ix\":21,\"v\":{\"a\":0,\"k\":1,\"ix\":21}},{\"ty\":7,\"nm\":\"Wiggle Y\",\"mn\":\"Pseudo/OC Trails-0022\",\"ix\":22,\"v\":{\"a\":0,\"k\":1,\"ix\":22}},{\"ty\":6,\"nm\":\"\",\"mn\":\"Pseudo/OC Trails-0023\",\"ix\":23,\"v\":0},{\"ty\":6,\"nm\":\"\",\"mn\":\"Pseudo/OC Trails-0024\",\"ix\":24,\"v\":0},{\"ty\":6,\"nm\":\"\",\"mn\":\"Pseudo/OC Trails-0025\",\"ix\":25,\"v\":0},{\"ty\":7,\"nm\":\"Add Movement\",\"mn\":\"Pseudo/OC Trails-0026\",\"ix\":26,\"v\":{\"a\":0,\"k\":1,\"ix\":26}},{\"ty\":6,\"nm\":\"Add Movement\",\"mn\":\"Pseudo/OC Trails-0027\",\"ix\":27,\"v\":0},{\"ty\":3,\"nm\":\"Movement Direction\",\"mn\":\"Pseudo/OC Trails-0028\",\"ix\":28,\"v\":{\"a\":0,\"k\":[-937.5,0],\"ix\":28}},{\"ty\":0,\"nm\":\"Movement at Start\",\"mn\":\"Pseudo/OC Trails-0029\",\"ix\":29,\"v\":{\"a\":0,\"k\":8,\"ix\":29}},{\"ty\":0,\"nm\":\"Movement at End\",\"mn\":\"Pseudo/OC Trails-0030\",\"ix\":30,\"v\":{\"a\":0,\"k\":100,\"ix\":30}},{\"ty\":6,\"nm\":\"\",\"mn\":\"Pseudo/OC Trails-0031\",\"ix\":31,\"v\":0},{\"ty\":6,\"nm\":\"\",\"mn\":\"Pseudo/OC Trails-0032\",\"ix\":32,\"v\":0},{\"ty\":6,\"nm\":\"\",\"mn\":\"Pseudo/OC Trails-0033\",\"ix\":33,\"v\":0},{\"ty\":6,\"nm\":\"\",\"mn\":\"Pseudo/OC Trails-0034\",\"ix\":34,\"v\":0},{\"ty\":7,\"nm\":\"Velocity Based Line Length\",\"mn\":\"Pseudo/OC Trails-0035\",\"ix\":35,\"v\":{\"a\":0,\"k\":0,\"ix\":35}}]}],\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[],\"o\":[],\"v\":[],\"c\":false},\"ix\":2,\"x\":\"var $bm_rt;\\n$bm_rt = thisLayer.content('LEAVE ME ALONE').content('Trail Base Path 1').path;\"},\"nm\":\"Point 1 Trail\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"Appearance Paths\",\"np\":1,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.468275122549,0.468275122549,0.468275122549,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":10,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"Appearance\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[],\"o\":[],\"v\":[],\"c\":false},\"ix\":2,\"x\":\"var $bm_rt;\\nvar p, curVel, sP, tL, wigCheck, velCheck, movCheck, velLength, w1, w2, wC, wS, wE, wigCheckX, wigCheckY, velA, velS, velE, velCheckX, velCheckY, movD, movS, movE, v, f, fD, posPoints, off, pCalc, pOrig, pMod, pMod, pMod, pMod, pVel, pPoint;\\np = effect('Point 1 Control Layer')(1);\\ncurVel = content('LEAVE ME ALONE').content('Trail 1 Extra Calcs ').transform.anchorPoint[0];\\nsP = effect('OC Trails')('Point Samples');\\ntL = $bm_div($bm_mul(effect('OC Trails')('Trail Length'), -1), 10);\\nwigCheck = effect('OC Trails')('Wiggler');\\nvelCheck = effect('OC Trails')('Velocity Trails');\\nmovCheck = effect('OC Trails')('Add Movement');\\nvelLength = effect('OC Trails')('Velocity Based Line Length');\\nw1 = effect('OC Trails')('Wiggles/Second');\\nw2 = effect('OC Trails')('Wiggle Amount');\\nwC = effect('OC Trails')('Wiggle Cohesion');\\nwS = effect('OC Trails')('Wiggle at Start');\\nwE = effect('OC Trails')('Wiggle at End');\\nwigCheckX = effect('OC Trails')('Wiggle X');\\nwigCheckY = effect('OC Trails')('Wiggle Y');\\nvelA = effect('OC Trails')('Velocity Amount');\\nvelS = effect('OC Trails')('Velocity at Start');\\nvelE = effect('OC Trails')('Velocity at End');\\nvelCheckX = effect('OC Trails')('Velocity X');\\nvelCheckY = effect('OC Trails')('Velocity Y');\\nmovD = effect('OC Trails')('Movement Direction');\\nmovS = effect('OC Trails')('Movement at Start');\\nmovE = effect('OC Trails')('Movement at End');\\nv = 0;\\nf = 30;\\nfD = thisComp.frameDuration;\\nposPoints = [];\\noff = $bm_div(tL, sP);\\nfor (var i = 0; i < sP; i++) {\\n    pCalc = trailPos(p);\\n    pOrig = p.toWorld([\\n        0,\\n        0,\\n        0\\n    ]);\\n    pMod = pCalc;\\n    if (wigCheck == 1) {\\n        pMod = $bm_sum(pMod, wiggler(p, i));\\n    }\\n    if (velCheck == 1) {\\n        pMod = $bm_sum(pMod, velMod(p));\\n    }\\n    if (movCheck == 1) {\\n        pMod = $bm_sum(pMod, movMod(p, i));\\n    }\\n    pVel = linear(curVel, 0, 100, pCalc, pMod);\\n    pPoint = $bm_sub(pVel, thisLayer.toComp([\\n        0,\\n        0,\\n        0\\n    ]));\\n    posPoints.push(pPoint);\\n}\\nfunction StEndStrength(inSlid, outSlid, maxVal) {\\n    var sT, eT;\\n    sT = linear(inSlid, -100, 100, $bm_mul(maxVal, -1), maxVal);\\n    eT = linear(outSlid, -100, 100, $bm_mul(maxVal, -1), maxVal);\\n    return [\\n        sT,\\n        eT\\n    ];\\n}\\nfunction trailPos(x) {\\n    var tP;\\n    tP = x.toComp(x.transform.anchorPoint, $bm_sum(time, $bm_mul(off, i)));\\n    return [\\n        tP[0],\\n        tP[1]\\n    ];\\n}\\nfunction wiggler(pPos, x) {\\n    var Co, w, minMax, wig, wigX, wigY, wFinal;\\n    Co = linear(wC, 0, 100, 1, 100);\\n    w = $bm_sub(pPos.transform.position.wiggle(w1, w2, 1, 0.5, $bm_sub(time, $bm_div(x, Co))), pPos.transform.position);\\n    minMax = StEndStrength(wS, wE, w);\\n    wig = linear(x, 0, sP, minMax[0], minMax[1]);\\n    if (wigCheckX == 1) {\\n        wigX = wig[0];\\n    } else {\\n        wigX = 0;\\n    }\\n    if (wigCheckY == 1) {\\n        wigY = wig[1];\\n    } else {\\n        wigY = 0;\\n    }\\n    wFinal = [\\n        wigX,\\n        wigY\\n    ];\\n    return wFinal;\\n}\\nfunction velMod(x) {\\n    var vP1, vP2, minMax, vE, velX, velY, velFinal;\\n    vP1 = x.toWorld([\\n        0,\\n        0,\\n        0\\n    ], $bm_sum($bm_sum(time, $bm_mul(off, i)), $bm_mul(thisComp.frameDuration, 2)));\\n    vP2 = x.toWorld([\\n        0,\\n        0,\\n        0\\n    ], $bm_sub($bm_sum(time, $bm_mul(off, i)), $bm_mul(thisComp.frameDuration, 2)));\\n    v = $bm_mul($bm_div($bm_div($bm_sub(vP1, vP2), thisComp.frameDuration), 15000), $bm_mul(velA, 5));\\n    minMax = StEndStrength(velS, velE, v);\\n    vE = linear(i, velS, sP, minMax[0], minMax[1]);\\n    if (velCheckX == 1) {\\n        velX = vE[0];\\n    } else {\\n        velX = 0;\\n    }\\n    if (velCheckY == 1) {\\n        velY = vE[1];\\n    } else {\\n        velY = 0;\\n    }\\n    velFinal = [\\n        velX,\\n        velY\\n    ];\\n    return velFinal;\\n}\\nfunction movMod(pPos, x) {\\n    var tMod, minMax, mMod;\\n    tMod = movD;\\n    minMax = StEndStrength(movS, movE, tMod);\\n    mMod = linear(x, 0, sP, minMax[0], minMax[1]);\\n    return mMod;\\n}\\nfunction timeVel(o, p) {\\n    var vP1, vP2, v1;\\n    vP1 = p.toWorld([\\n        0,\\n        0,\\n        0\\n    ], $bm_sum($bm_sum(time, o), thisComp.frameDuration));\\n    vP2 = p.toWorld([\\n        0,\\n        0,\\n        0\\n    ], $bm_sub($bm_sum(time, o), thisComp.frameDuration));\\n    v1 = length(vP1, vP2);\\n    return v1;\\n}\\nfunction velLength() {\\n    var m;\\n    for (m = 0; m < f; m++) {\\n        v = $bm_sum(v, timeVel($bm_mul(fD, $bm_neg(m)), p));\\n    }\\n    return v;\\n}\\nfunction findVelLength() {\\n    var vL;\\n    vL = $bm_div(velLength(), f);\\n    return vL;\\n}\\n$bm_rt = createPath(posPoints, [], [], false);\"},\"nm\":\"Trail Base Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1,\"x\":\"var $bm_rt;\\nvar x, velLenCheck, v, f, fD, velFinal, velFinal, velFinal;\\nfunction timeVel(e) {\\n    return vP1 = x.toWorld([\\n        0,\\n        0,\\n        0\\n    ], time + e + thisComp.frameDuration), vP2 = x.toWorld([\\n        0,\\n        0,\\n        0\\n    ], time + e - thisComp.frameDuration), v1 = length(vP1, vP2), v1;\\n}\\nfunction velLength() {\\n    var i;\\n    for (i = 0; i < f; i++)\\n        v = $bm_sum(v, timeVel($bm_mul(fD, $bm_neg(i))));\\n    return v;\\n}\\nx = effect('Point 1 Control Layer')(1), velLenCheck = effect('OC Trails')('Velocity Based Line Length'), v = 0, f = 30, fD = thisComp.frameDuration, 1 == velLenCheck ? velFinal = $bm_div(velLength(), f) : velFinal = 100, $bm_rt = [\\n    velFinal,\\n    velFinal\\n];\"},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"Trail 1 Extra Calcs \",\"np\":0,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"LEAVE ME ALONE\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":24,\"op\":50,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":10,\"ty\":3,\"nm\":\"OC Trails 1- Point 1\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":0,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[750,400,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"ip\":0,\"op\":2,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":11,\"ty\":4,\"nm\":\"OC Trails 5\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[750,400,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"ef\":[{\"ty\":5,\"nm\":\"Point 1 Control Layer\",\"np\":3,\"mn\":\"ADBE Layer Control\",\"ix\":1,\"en\":1,\"ef\":[{\"ty\":10,\"nm\":\"图层\",\"mn\":\"ADBE Layer Control-0001\",\"ix\":1,\"v\":{\"a\":0,\"k\":7,\"ix\":1}}]},{\"ty\":5,\"nm\":\"OC Trails\",\"np\":37,\"mn\":\"Pseudo/OC Trails\",\"ix\":2,\"en\":1,\"ef\":[{\"ty\":0,\"nm\":\"Trail Length\",\"mn\":\"Pseudo/OC Trails-0001\",\"ix\":1,\"v\":{\"a\":0,\"k\":5,\"ix\":1}},{\"ty\":0,\"nm\":\"Point Samples\",\"mn\":\"Pseudo/OC Trails-0002\",\"ix\":2,\"v\":{\"a\":0,\"k\":10,\"ix\":2}},{\"ty\":6,\"nm\":\"Dynamic Effects\",\"mn\":\"Pseudo/OC Trails-0003\",\"ix\":3,\"v\":0},{\"ty\":7,\"nm\":\"Velocity Trails\",\"mn\":\"Pseudo/OC Trails-0004\",\"ix\":4,\"v\":{\"a\":0,\"k\":0,\"ix\":4}},{\"ty\":6,\"nm\":\"Velocity Trail Options\",\"mn\":\"Pseudo/OC Trails-0005\",\"ix\":5,\"v\":0},{\"ty\":0,\"nm\":\"Velocity Amount\",\"mn\":\"Pseudo/OC Trails-0006\",\"ix\":6,\"v\":{\"a\":0,\"k\":20,\"ix\":6}},{\"ty\":0,\"nm\":\"Velocity at Start\",\"mn\":\"Pseudo/OC Trails-0007\",\"ix\":7,\"v\":{\"a\":0,\"k\":0,\"ix\":7}},{\"ty\":0,\"nm\":\"Velocity at End\",\"mn\":\"Pseudo/OC Trails-0008\",\"ix\":8,\"v\":{\"a\":0,\"k\":100,\"ix\":8}},{\"ty\":7,\"nm\":\"Velocity X\",\"mn\":\"Pseudo/OC Trails-0009\",\"ix\":9,\"v\":{\"a\":0,\"k\":1,\"ix\":9}},{\"ty\":7,\"nm\":\"Velocity Y\",\"mn\":\"Pseudo/OC Trails-0010\",\"ix\":10,\"v\":{\"a\":0,\"k\":1,\"ix\":10}},{\"ty\":6,\"nm\":\"\",\"mn\":\"Pseudo/OC Trails-0011\",\"ix\":11,\"v\":0},{\"ty\":6,\"nm\":\"\",\"mn\":\"Pseudo/OC Trails-0012\",\"ix\":12,\"v\":0},{\"ty\":6,\"nm\":\"\",\"mn\":\"Pseudo/OC Trails-0013\",\"ix\":13,\"v\":0},{\"ty\":7,\"nm\":\"Wiggler\",\"mn\":\"Pseudo/OC Trails-0014\",\"ix\":14,\"v\":{\"a\":0,\"k\":0,\"ix\":14}},{\"ty\":6,\"nm\":\"Wiggler Options\",\"mn\":\"Pseudo/OC Trails-0015\",\"ix\":15,\"v\":0},{\"ty\":0,\"nm\":\"Wiggles/Second\",\"mn\":\"Pseudo/OC Trails-0016\",\"ix\":16,\"v\":{\"a\":0,\"k\":1,\"ix\":16}},{\"ty\":0,\"nm\":\"Wiggle Amount\",\"mn\":\"Pseudo/OC Trails-0017\",\"ix\":17,\"v\":{\"a\":0,\"k\":40,\"ix\":17}},{\"ty\":0,\"nm\":\"Wiggle Cohesion\",\"mn\":\"Pseudo/OC Trails-0018\",\"ix\":18,\"v\":{\"a\":0,\"k\":20,\"ix\":18}},{\"ty\":0,\"nm\":\"Wiggle at Start\",\"mn\":\"Pseudo/OC Trails-0019\",\"ix\":19,\"v\":{\"a\":0,\"k\":0,\"ix\":19}},{\"ty\":0,\"nm\":\"Wiggle at End\",\"mn\":\"Pseudo/OC Trails-0020\",\"ix\":20,\"v\":{\"a\":0,\"k\":100,\"ix\":20}},{\"ty\":7,\"nm\":\"Wiggle X\",\"mn\":\"Pseudo/OC Trails-0021\",\"ix\":21,\"v\":{\"a\":0,\"k\":1,\"ix\":21}},{\"ty\":7,\"nm\":\"Wiggle Y\",\"mn\":\"Pseudo/OC Trails-0022\",\"ix\":22,\"v\":{\"a\":0,\"k\":1,\"ix\":22}},{\"ty\":6,\"nm\":\"\",\"mn\":\"Pseudo/OC Trails-0023\",\"ix\":23,\"v\":0},{\"ty\":6,\"nm\":\"\",\"mn\":\"Pseudo/OC Trails-0024\",\"ix\":24,\"v\":0},{\"ty\":6,\"nm\":\"\",\"mn\":\"Pseudo/OC Trails-0025\",\"ix\":25,\"v\":0},{\"ty\":7,\"nm\":\"Add Movement\",\"mn\":\"Pseudo/OC Trails-0026\",\"ix\":26,\"v\":{\"a\":0,\"k\":1,\"ix\":26}},{\"ty\":6,\"nm\":\"Add Movement\",\"mn\":\"Pseudo/OC Trails-0027\",\"ix\":27,\"v\":0},{\"ty\":3,\"nm\":\"Movement Direction\",\"mn\":\"Pseudo/OC Trails-0028\",\"ix\":28,\"v\":{\"a\":0,\"k\":[-937.5,0],\"ix\":28}},{\"ty\":0,\"nm\":\"Movement at Start\",\"mn\":\"Pseudo/OC Trails-0029\",\"ix\":29,\"v\":{\"a\":0,\"k\":0,\"ix\":29}},{\"ty\":0,\"nm\":\"Movement at End\",\"mn\":\"Pseudo/OC Trails-0030\",\"ix\":30,\"v\":{\"a\":0,\"k\":100,\"ix\":30}},{\"ty\":6,\"nm\":\"\",\"mn\":\"Pseudo/OC Trails-0031\",\"ix\":31,\"v\":0},{\"ty\":6,\"nm\":\"\",\"mn\":\"Pseudo/OC Trails-0032\",\"ix\":32,\"v\":0},{\"ty\":6,\"nm\":\"\",\"mn\":\"Pseudo/OC Trails-0033\",\"ix\":33,\"v\":0},{\"ty\":6,\"nm\":\"\",\"mn\":\"Pseudo/OC Trails-0034\",\"ix\":34,\"v\":0},{\"ty\":7,\"nm\":\"Velocity Based Line Length\",\"mn\":\"Pseudo/OC Trails-0035\",\"ix\":35,\"v\":{\"a\":0,\"k\":0,\"ix\":35}}]}],\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[],\"o\":[],\"v\":[],\"c\":false},\"ix\":2,\"x\":\"var $bm_rt;\\n$bm_rt = thisLayer.content('LEAVE ME ALONE').content('Trail Base Path 1').path;\"},\"nm\":\"Point 1 Trail\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"Appearance Paths\",\"np\":1,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.468275122549,0.468275122549,0.468275122549,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":10,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"Appearance\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[],\"o\":[],\"v\":[],\"c\":false},\"ix\":2,\"x\":\"var $bm_rt;\\nvar p, curVel, sP, tL, wigCheck, velCheck, movCheck, velLength, w1, w2, wC, wS, wE, wigCheckX, wigCheckY, velA, velS, velE, velCheckX, velCheckY, movD, movS, movE, v, f, fD, posPoints, off, pCalc, pOrig, pMod, pMod, pMod, pMod, pVel, pPoint;\\np = effect('Point 1 Control Layer')(1);\\ncurVel = content('LEAVE ME ALONE').content('Trail 1 Extra Calcs ').transform.anchorPoint[0];\\nsP = effect('OC Trails')('Point Samples');\\ntL = $bm_div($bm_mul(effect('OC Trails')('Trail Length'), -1), 10);\\nwigCheck = effect('OC Trails')('Wiggler');\\nvelCheck = effect('OC Trails')('Velocity Trails');\\nmovCheck = effect('OC Trails')('Add Movement');\\nvelLength = effect('OC Trails')('Velocity Based Line Length');\\nw1 = effect('OC Trails')('Wiggles/Second');\\nw2 = effect('OC Trails')('Wiggle Amount');\\nwC = effect('OC Trails')('Wiggle Cohesion');\\nwS = effect('OC Trails')('Wiggle at Start');\\nwE = effect('OC Trails')('Wiggle at End');\\nwigCheckX = effect('OC Trails')('Wiggle X');\\nwigCheckY = effect('OC Trails')('Wiggle Y');\\nvelA = effect('OC Trails')('Velocity Amount');\\nvelS = effect('OC Trails')('Velocity at Start');\\nvelE = effect('OC Trails')('Velocity at End');\\nvelCheckX = effect('OC Trails')('Velocity X');\\nvelCheckY = effect('OC Trails')('Velocity Y');\\nmovD = effect('OC Trails')('Movement Direction');\\nmovS = effect('OC Trails')('Movement at Start');\\nmovE = effect('OC Trails')('Movement at End');\\nv = 0;\\nf = 30;\\nfD = thisComp.frameDuration;\\nposPoints = [];\\noff = $bm_div(tL, sP);\\nfor (var i = 0; i < sP; i++) {\\n    pCalc = trailPos(p);\\n    pOrig = p.toWorld([\\n        0,\\n        0,\\n        0\\n    ]);\\n    pMod = pCalc;\\n    if (wigCheck == 1) {\\n        pMod = $bm_sum(pMod, wiggler(p, i));\\n    }\\n    if (velCheck == 1) {\\n        pMod = $bm_sum(pMod, velMod(p));\\n    }\\n    if (movCheck == 1) {\\n        pMod = $bm_sum(pMod, movMod(p, i));\\n    }\\n    pVel = linear(curVel, 0, 100, pCalc, pMod);\\n    pPoint = $bm_sub(pVel, thisLayer.toComp([\\n        0,\\n        0,\\n        0\\n    ]));\\n    posPoints.push(pPoint);\\n}\\nfunction StEndStrength(inSlid, outSlid, maxVal) {\\n    var sT, eT;\\n    sT = linear(inSlid, -100, 100, $bm_mul(maxVal, -1), maxVal);\\n    eT = linear(outSlid, -100, 100, $bm_mul(maxVal, -1), maxVal);\\n    return [\\n        sT,\\n        eT\\n    ];\\n}\\nfunction trailPos(x) {\\n    var tP;\\n    tP = x.toComp(x.transform.anchorPoint, $bm_sum(time, $bm_mul(off, i)));\\n    return [\\n        tP[0],\\n        tP[1]\\n    ];\\n}\\nfunction wiggler(pPos, x) {\\n    var Co, w, minMax, wig, wigX, wigY, wFinal;\\n    Co = linear(wC, 0, 100, 1, 100);\\n    w = $bm_sub(pPos.transform.position.wiggle(w1, w2, 1, 0.5, $bm_sub(time, $bm_div(x, Co))), pPos.transform.position);\\n    minMax = StEndStrength(wS, wE, w);\\n    wig = linear(x, 0, sP, minMax[0], minMax[1]);\\n    if (wigCheckX == 1) {\\n        wigX = wig[0];\\n    } else {\\n        wigX = 0;\\n    }\\n    if (wigCheckY == 1) {\\n        wigY = wig[1];\\n    } else {\\n        wigY = 0;\\n    }\\n    wFinal = [\\n        wigX,\\n        wigY\\n    ];\\n    return wFinal;\\n}\\nfunction velMod(x) {\\n    var vP1, vP2, minMax, vE, velX, velY, velFinal;\\n    vP1 = x.toWorld([\\n        0,\\n        0,\\n        0\\n    ], $bm_sum($bm_sum(time, $bm_mul(off, i)), $bm_mul(thisComp.frameDuration, 2)));\\n    vP2 = x.toWorld([\\n        0,\\n        0,\\n        0\\n    ], $bm_sub($bm_sum(time, $bm_mul(off, i)), $bm_mul(thisComp.frameDuration, 2)));\\n    v = $bm_mul($bm_div($bm_div($bm_sub(vP1, vP2), thisComp.frameDuration), 15000), $bm_mul(velA, 5));\\n    minMax = StEndStrength(velS, velE, v);\\n    vE = linear(i, velS, sP, minMax[0], minMax[1]);\\n    if (velCheckX == 1) {\\n        velX = vE[0];\\n    } else {\\n        velX = 0;\\n    }\\n    if (velCheckY == 1) {\\n        velY = vE[1];\\n    } else {\\n        velY = 0;\\n    }\\n    velFinal = [\\n        velX,\\n        velY\\n    ];\\n    return velFinal;\\n}\\nfunction movMod(pPos, x) {\\n    var tMod, minMax, mMod;\\n    tMod = movD;\\n    minMax = StEndStrength(movS, movE, tMod);\\n    mMod = linear(x, 0, sP, minMax[0], minMax[1]);\\n    return mMod;\\n}\\nfunction timeVel(o, p) {\\n    var vP1, vP2, v1;\\n    vP1 = p.toWorld([\\n        0,\\n        0,\\n        0\\n    ], $bm_sum($bm_sum(time, o), thisComp.frameDuration));\\n    vP2 = p.toWorld([\\n        0,\\n        0,\\n        0\\n    ], $bm_sub($bm_sum(time, o), thisComp.frameDuration));\\n    v1 = length(vP1, vP2);\\n    return v1;\\n}\\nfunction velLength() {\\n    var m;\\n    for (m = 0; m < f; m++) {\\n        v = $bm_sum(v, timeVel($bm_mul(fD, $bm_neg(m)), p));\\n    }\\n    return v;\\n}\\nfunction findVelLength() {\\n    var vL;\\n    vL = $bm_div(velLength(), f);\\n    return vL;\\n}\\n$bm_rt = createPath(posPoints, [], [], false);\"},\"nm\":\"Trail Base Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1,\"x\":\"var $bm_rt;\\nvar x, velLenCheck, v, f, fD, velFinal, velFinal, velFinal;\\nfunction timeVel(e) {\\n    return vP1 = x.toWorld([\\n        0,\\n        0,\\n        0\\n    ], time + e + thisComp.frameDuration), vP2 = x.toWorld([\\n        0,\\n        0,\\n        0\\n    ], time + e - thisComp.frameDuration), v1 = length(vP1, vP2), v1;\\n}\\nfunction velLength() {\\n    var i;\\n    for (i = 0; i < f; i++)\\n        v = $bm_sum(v, timeVel($bm_mul(fD, $bm_neg(i))));\\n    return v;\\n}\\nx = effect('Point 1 Control Layer')(1), velLenCheck = effect('OC Trails')('Velocity Based Line Length'), v = 0, f = 30, fD = thisComp.frameDuration, 1 == velLenCheck ? velFinal = $bm_div(velLength(), f) : velFinal = 100, $bm_rt = [\\n    velFinal,\\n    velFinal\\n];\"},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"Trail 1 Extra Calcs \",\"np\":0,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"LEAVE ME ALONE\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":2,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":12,\"ty\":3,\"nm\":\"OC Trails 5- Point 1\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":0,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[750,400,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"ip\":0,\"op\":193,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":16,\"ty\":3,\"nm\":\"OC Trails 3- Point 1\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":0,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[750,400,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"ip\":24,\"op\":50,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":17,\"ty\":4,\"nm\":\"OC Trails 1\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[750,400,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"ef\":[{\"ty\":5,\"nm\":\"Point 1 Control Layer\",\"np\":3,\"mn\":\"ADBE Layer Control\",\"ix\":1,\"en\":1,\"ef\":[{\"ty\":10,\"nm\":\"图层\",\"mn\":\"ADBE Layer Control-0001\",\"ix\":1,\"v\":{\"a\":0,\"k\":8,\"ix\":1}}]},{\"ty\":5,\"nm\":\"OC Trails\",\"np\":37,\"mn\":\"Pseudo/OC Trails\",\"ix\":2,\"en\":1,\"ef\":[{\"ty\":0,\"nm\":\"Trail Length\",\"mn\":\"Pseudo/OC Trails-0001\",\"ix\":1,\"v\":{\"a\":0,\"k\":5,\"ix\":1}},{\"ty\":0,\"nm\":\"Point Samples\",\"mn\":\"Pseudo/OC Trails-0002\",\"ix\":2,\"v\":{\"a\":0,\"k\":10,\"ix\":2}},{\"ty\":6,\"nm\":\"Dynamic Effects\",\"mn\":\"Pseudo/OC Trails-0003\",\"ix\":3,\"v\":0},{\"ty\":7,\"nm\":\"Velocity Trails\",\"mn\":\"Pseudo/OC Trails-0004\",\"ix\":4,\"v\":{\"a\":0,\"k\":0,\"ix\":4}},{\"ty\":6,\"nm\":\"Velocity Trail Options\",\"mn\":\"Pseudo/OC Trails-0005\",\"ix\":5,\"v\":0},{\"ty\":0,\"nm\":\"Velocity Amount\",\"mn\":\"Pseudo/OC Trails-0006\",\"ix\":6,\"v\":{\"a\":0,\"k\":20,\"ix\":6}},{\"ty\":0,\"nm\":\"Velocity at Start\",\"mn\":\"Pseudo/OC Trails-0007\",\"ix\":7,\"v\":{\"a\":0,\"k\":0,\"ix\":7}},{\"ty\":0,\"nm\":\"Velocity at End\",\"mn\":\"Pseudo/OC Trails-0008\",\"ix\":8,\"v\":{\"a\":0,\"k\":100,\"ix\":8}},{\"ty\":7,\"nm\":\"Velocity X\",\"mn\":\"Pseudo/OC Trails-0009\",\"ix\":9,\"v\":{\"a\":0,\"k\":1,\"ix\":9}},{\"ty\":7,\"nm\":\"Velocity Y\",\"mn\":\"Pseudo/OC Trails-0010\",\"ix\":10,\"v\":{\"a\":0,\"k\":1,\"ix\":10}},{\"ty\":6,\"nm\":\"\",\"mn\":\"Pseudo/OC Trails-0011\",\"ix\":11,\"v\":0},{\"ty\":6,\"nm\":\"\",\"mn\":\"Pseudo/OC Trails-0012\",\"ix\":12,\"v\":0},{\"ty\":6,\"nm\":\"\",\"mn\":\"Pseudo/OC Trails-0013\",\"ix\":13,\"v\":0},{\"ty\":7,\"nm\":\"Wiggler\",\"mn\":\"Pseudo/OC Trails-0014\",\"ix\":14,\"v\":{\"a\":0,\"k\":0,\"ix\":14}},{\"ty\":6,\"nm\":\"Wiggler Options\",\"mn\":\"Pseudo/OC Trails-0015\",\"ix\":15,\"v\":0},{\"ty\":0,\"nm\":\"Wiggles/Second\",\"mn\":\"Pseudo/OC Trails-0016\",\"ix\":16,\"v\":{\"a\":0,\"k\":1,\"ix\":16}},{\"ty\":0,\"nm\":\"Wiggle Amount\",\"mn\":\"Pseudo/OC Trails-0017\",\"ix\":17,\"v\":{\"a\":0,\"k\":40,\"ix\":17}},{\"ty\":0,\"nm\":\"Wiggle Cohesion\",\"mn\":\"Pseudo/OC Trails-0018\",\"ix\":18,\"v\":{\"a\":0,\"k\":20,\"ix\":18}},{\"ty\":0,\"nm\":\"Wiggle at Start\",\"mn\":\"Pseudo/OC Trails-0019\",\"ix\":19,\"v\":{\"a\":0,\"k\":0,\"ix\":19}},{\"ty\":0,\"nm\":\"Wiggle at End\",\"mn\":\"Pseudo/OC Trails-0020\",\"ix\":20,\"v\":{\"a\":0,\"k\":100,\"ix\":20}},{\"ty\":7,\"nm\":\"Wiggle X\",\"mn\":\"Pseudo/OC Trails-0021\",\"ix\":21,\"v\":{\"a\":0,\"k\":1,\"ix\":21}},{\"ty\":7,\"nm\":\"Wiggle Y\",\"mn\":\"Pseudo/OC Trails-0022\",\"ix\":22,\"v\":{\"a\":0,\"k\":1,\"ix\":22}},{\"ty\":6,\"nm\":\"\",\"mn\":\"Pseudo/OC Trails-0023\",\"ix\":23,\"v\":0},{\"ty\":6,\"nm\":\"\",\"mn\":\"Pseudo/OC Trails-0024\",\"ix\":24,\"v\":0},{\"ty\":6,\"nm\":\"\",\"mn\":\"Pseudo/OC Trails-0025\",\"ix\":25,\"v\":0},{\"ty\":7,\"nm\":\"Add Movement\",\"mn\":\"Pseudo/OC Trails-0026\",\"ix\":26,\"v\":{\"a\":0,\"k\":1,\"ix\":26}},{\"ty\":6,\"nm\":\"Add Movement\",\"mn\":\"Pseudo/OC Trails-0027\",\"ix\":27,\"v\":0},{\"ty\":3,\"nm\":\"Movement Direction\",\"mn\":\"Pseudo/OC Trails-0028\",\"ix\":28,\"v\":{\"a\":0,\"k\":[-937.5,0],\"ix\":28}},{\"ty\":0,\"nm\":\"Movement at Start\",\"mn\":\"Pseudo/OC Trails-0029\",\"ix\":29,\"v\":{\"a\":0,\"k\":8,\"ix\":29}},{\"ty\":0,\"nm\":\"Movement at End\",\"mn\":\"Pseudo/OC Trails-0030\",\"ix\":30,\"v\":{\"a\":0,\"k\":100,\"ix\":30}},{\"ty\":6,\"nm\":\"\",\"mn\":\"Pseudo/OC Trails-0031\",\"ix\":31,\"v\":0},{\"ty\":6,\"nm\":\"\",\"mn\":\"Pseudo/OC Trails-0032\",\"ix\":32,\"v\":0},{\"ty\":6,\"nm\":\"\",\"mn\":\"Pseudo/OC Trails-0033\",\"ix\":33,\"v\":0},{\"ty\":6,\"nm\":\"\",\"mn\":\"Pseudo/OC Trails-0034\",\"ix\":34,\"v\":0},{\"ty\":7,\"nm\":\"Velocity Based Line Length\",\"mn\":\"Pseudo/OC Trails-0035\",\"ix\":35,\"v\":{\"a\":0,\"k\":0,\"ix\":35}}]}],\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[],\"o\":[],\"v\":[],\"c\":false},\"ix\":2,\"x\":\"var $bm_rt;\\n$bm_rt = thisLayer.content('LEAVE ME ALONE').content('Trail Base Path 1').path;\"},\"nm\":\"Point 1 Trail\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"Appearance Paths\",\"np\":1,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.468275122549,0.468275122549,0.468275122549,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":10,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"Appearance\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[],\"o\":[],\"v\":[],\"c\":false},\"ix\":2,\"x\":\"var $bm_rt;\\nvar p, curVel, sP, tL, wigCheck, velCheck, movCheck, velLength, w1, w2, wC, wS, wE, wigCheckX, wigCheckY, velA, velS, velE, velCheckX, velCheckY, movD, movS, movE, v, f, fD, posPoints, off, pCalc, pOrig, pMod, pMod, pMod, pMod, pVel, pPoint;\\np = effect('Point 1 Control Layer')(1);\\ncurVel = content('LEAVE ME ALONE').content('Trail 1 Extra Calcs ').transform.anchorPoint[0];\\nsP = effect('OC Trails')('Point Samples');\\ntL = $bm_div($bm_mul(effect('OC Trails')('Trail Length'), -1), 10);\\nwigCheck = effect('OC Trails')('Wiggler');\\nvelCheck = effect('OC Trails')('Velocity Trails');\\nmovCheck = effect('OC Trails')('Add Movement');\\nvelLength = effect('OC Trails')('Velocity Based Line Length');\\nw1 = effect('OC Trails')('Wiggles/Second');\\nw2 = effect('OC Trails')('Wiggle Amount');\\nwC = effect('OC Trails')('Wiggle Cohesion');\\nwS = effect('OC Trails')('Wiggle at Start');\\nwE = effect('OC Trails')('Wiggle at End');\\nwigCheckX = effect('OC Trails')('Wiggle X');\\nwigCheckY = effect('OC Trails')('Wiggle Y');\\nvelA = effect('OC Trails')('Velocity Amount');\\nvelS = effect('OC Trails')('Velocity at Start');\\nvelE = effect('OC Trails')('Velocity at End');\\nvelCheckX = effect('OC Trails')('Velocity X');\\nvelCheckY = effect('OC Trails')('Velocity Y');\\nmovD = effect('OC Trails')('Movement Direction');\\nmovS = effect('OC Trails')('Movement at Start');\\nmovE = effect('OC Trails')('Movement at End');\\nv = 0;\\nf = 30;\\nfD = thisComp.frameDuration;\\nposPoints = [];\\noff = $bm_div(tL, sP);\\nfor (var i = 0; i < sP; i++) {\\n    pCalc = trailPos(p);\\n    pOrig = p.toWorld([\\n        0,\\n        0,\\n        0\\n    ]);\\n    pMod = pCalc;\\n    if (wigCheck == 1) {\\n        pMod = $bm_sum(pMod, wiggler(p, i));\\n    }\\n    if (velCheck == 1) {\\n        pMod = $bm_sum(pMod, velMod(p));\\n    }\\n    if (movCheck == 1) {\\n        pMod = $bm_sum(pMod, movMod(p, i));\\n    }\\n    pVel = linear(curVel, 0, 100, pCalc, pMod);\\n    pPoint = $bm_sub(pVel, thisLayer.toComp([\\n        0,\\n        0,\\n        0\\n    ]));\\n    posPoints.push(pPoint);\\n}\\nfunction StEndStrength(inSlid, outSlid, maxVal) {\\n    var sT, eT;\\n    sT = linear(inSlid, -100, 100, $bm_mul(maxVal, -1), maxVal);\\n    eT = linear(outSlid, -100, 100, $bm_mul(maxVal, -1), maxVal);\\n    return [\\n        sT,\\n        eT\\n    ];\\n}\\nfunction trailPos(x) {\\n    var tP;\\n    tP = x.toComp(x.transform.anchorPoint, $bm_sum(time, $bm_mul(off, i)));\\n    return [\\n        tP[0],\\n        tP[1]\\n    ];\\n}\\nfunction wiggler(pPos, x) {\\n    var Co, w, minMax, wig, wigX, wigY, wFinal;\\n    Co = linear(wC, 0, 100, 1, 100);\\n    w = $bm_sub(pPos.transform.position.wiggle(w1, w2, 1, 0.5, $bm_sub(time, $bm_div(x, Co))), pPos.transform.position);\\n    minMax = StEndStrength(wS, wE, w);\\n    wig = linear(x, 0, sP, minMax[0], minMax[1]);\\n    if (wigCheckX == 1) {\\n        wigX = wig[0];\\n    } else {\\n        wigX = 0;\\n    }\\n    if (wigCheckY == 1) {\\n        wigY = wig[1];\\n    } else {\\n        wigY = 0;\\n    }\\n    wFinal = [\\n        wigX,\\n        wigY\\n    ];\\n    return wFinal;\\n}\\nfunction velMod(x) {\\n    var vP1, vP2, minMax, vE, velX, velY, velFinal;\\n    vP1 = x.toWorld([\\n        0,\\n        0,\\n        0\\n    ], $bm_sum($bm_sum(time, $bm_mul(off, i)), $bm_mul(thisComp.frameDuration, 2)));\\n    vP2 = x.toWorld([\\n        0,\\n        0,\\n        0\\n    ], $bm_sub($bm_sum(time, $bm_mul(off, i)), $bm_mul(thisComp.frameDuration, 2)));\\n    v = $bm_mul($bm_div($bm_div($bm_sub(vP1, vP2), thisComp.frameDuration), 15000), $bm_mul(velA, 5));\\n    minMax = StEndStrength(velS, velE, v);\\n    vE = linear(i, velS, sP, minMax[0], minMax[1]);\\n    if (velCheckX == 1) {\\n        velX = vE[0];\\n    } else {\\n        velX = 0;\\n    }\\n    if (velCheckY == 1) {\\n        velY = vE[1];\\n    } else {\\n        velY = 0;\\n    }\\n    velFinal = [\\n        velX,\\n        velY\\n    ];\\n    return velFinal;\\n}\\nfunction movMod(pPos, x) {\\n    var tMod, minMax, mMod;\\n    tMod = movD;\\n    minMax = StEndStrength(movS, movE, tMod);\\n    mMod = linear(x, 0, sP, minMax[0], minMax[1]);\\n    return mMod;\\n}\\nfunction timeVel(o, p) {\\n    var vP1, vP2, v1;\\n    vP1 = p.toWorld([\\n        0,\\n        0,\\n        0\\n    ], $bm_sum($bm_sum(time, o), thisComp.frameDuration));\\n    vP2 = p.toWorld([\\n        0,\\n        0,\\n        0\\n    ], $bm_sub($bm_sum(time, o), thisComp.frameDuration));\\n    v1 = length(vP1, vP2);\\n    return v1;\\n}\\nfunction velLength() {\\n    var m;\\n    for (m = 0; m < f; m++) {\\n        v = $bm_sum(v, timeVel($bm_mul(fD, $bm_neg(m)), p));\\n    }\\n    return v;\\n}\\nfunction findVelLength() {\\n    var vL;\\n    vL = $bm_div(velLength(), f);\\n    return vL;\\n}\\n$bm_rt = createPath(posPoints, [], [], false);\"},\"nm\":\"Trail Base Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1,\"x\":\"var $bm_rt;\\nvar x, velLenCheck, v, f, fD, velFinal, velFinal, velFinal;\\nfunction timeVel(e) {\\n    return vP1 = x.toWorld([\\n        0,\\n        0,\\n        0\\n    ], time + e + thisComp.frameDuration), vP2 = x.toWorld([\\n        0,\\n        0,\\n        0\\n    ], time + e - thisComp.frameDuration), v1 = length(vP1, vP2), v1;\\n}\\nfunction velLength() {\\n    var i;\\n    for (i = 0; i < f; i++)\\n        v = $bm_sum(v, timeVel($bm_mul(fD, $bm_neg(i))));\\n    return v;\\n}\\nx = effect('Point 1 Control Layer')(1), velLenCheck = effect('OC Trails')('Velocity Based Line Length'), v = 0, f = 30, fD = thisComp.frameDuration, 1 == velLenCheck ? velFinal = $bm_div(velLength(), f) : velFinal = 100, $bm_rt = [\\n    velFinal,\\n    velFinal\\n];\"},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"Trail 1 Extra Calcs \",\"np\":0,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"LEAVE ME ALONE\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":24,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":18,\"ty\":4,\"nm\":\"尾巴\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":-6,\"s\":[536.889,406.5,0],\"to\":[-4,0.105,0],\"ti\":[2.542,0,0]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":18,\"s\":[512.889,407.133,0],\"to\":[-2.542,0,0],\"ti\":[-4,0.105,0]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":28,\"s\":[521.639,406.5,0],\"to\":[4,-0.105,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":42,\"s\":[536.889,406.5,0],\"to\":[-4,0.105,0],\"ti\":[2.542,0,0]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":66,\"s\":[512.889,407.133,0],\"to\":[-2.542,0,0],\"ti\":[-4,0.105,0]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":76,\"s\":[521.639,406.5,0],\"to\":[4,-0.105,0],\"ti\":[-2.542,0,0]},{\"t\":90,\"s\":[536.889,406.5,0]}],\"ix\":2},\"a\":{\"a\":0,\"k\":[13.499,43.577,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":-6,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[5.999,36.077],[0.001,31.698],[0.001,-31.576],[5.999,-36.077]],\"c\":true}]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":18,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[5.999,36.077],[-12.999,31.45],[-12.999,-31.824],[5.999,-36.077]],\"c\":true}]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":28,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[5.999,36.077],[-5.999,31.681],[-5.999,-31.593],[5.999,-36.077]],\"c\":true}]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":42,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[5.999,36.077],[0.001,31.698],[0.001,-31.576],[5.999,-36.077]],\"c\":true}]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":66,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[5.999,36.077],[-12.999,31.45],[-12.999,-31.824],[5.999,-36.077]],\"c\":true}]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":76,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[5.999,36.077],[-5.999,31.681],[-5.999,-31.593],[5.999,-36.077]],\"c\":true}]},{\"t\":90,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[5.999,36.077],[0.001,31.698],[0.001,-31.576],[5.999,-36.077]],\"c\":true}]}],\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0,0,0,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":3,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":10,\"bm\":0,\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[13.499,43.578],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":144,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":19,\"ty\":4,\"nm\":\"尾巴\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[535.637,407.133,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[24.249,68.532,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":-6,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[16.749,61.031],[7.251,52.154],[7.251,-51.899],[16.749,-61.031]],\"c\":true}]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":18,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[16.749,61.031],[-16.749,51.909],[-16.749,-52.144],[16.749,-61.031]],\"c\":true}]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":28,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[16.749,61.031],[-7.749,51.92],[-7.749,-52.133],[16.749,-61.031]],\"c\":true}]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":42,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[16.749,61.031],[7.251,52.154],[7.251,-51.899],[16.749,-61.031]],\"c\":true}]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":66,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[16.749,61.031],[-16.749,51.909],[-16.749,-52.144],[16.749,-61.031]],\"c\":true}]},{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":76,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[16.749,61.031],[-7.749,51.92],[-7.749,-52.133],[16.749,-61.031]],\"c\":true}]},{\"t\":90,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[16.749,61.031],[7.251,52.154],[7.251,-51.899],[16.749,-61.031]],\"c\":true}]}],\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0,0,0,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":3,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":10,\"bm\":0,\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.827451040231,0.827451040231,0.827451040231,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[24.249,68.532],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":144,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":20,\"ty\":4,\"nm\":\"身体\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[791.774,408.913,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[246.888,106.411,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0]],\"v\":[[-27.456,-9.048],[27.456,1.168],[-26.507,9.048]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0,0,0,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":3,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[458.82,105.245],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0]],\"o\":[[0,0],[0,0]],\"v\":[[328,30.512],[328,182.313]],\"c\":false},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0,0,0,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":3,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":10,\"bm\":0,\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 2\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0]],\"o\":[[0,0],[0,0]],\"v\":[[315.461,26.514],[315.461,186.307]],\"c\":false},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0,0,0,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":3,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":10,\"bm\":0,\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 3\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":3,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[110.948,0],[46.825,-19.409],[0,0],[-64.676,0],[-42.919,49.097],[7.798,8.92]],\"o\":[[-64.676,0],[0,0],[46.825,19.41],[110.948,0],[7.798,-8.921],[-42.919,-49.097]],\"v\":[[-43.129,-98.911],[-214.049,-67.885],[-214.049,67.885],[-43.129,98.911],[206.251,15.652],[206.251,-15.65]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0,0,0,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":3,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":10,\"bm\":0,\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[221.549,106.411],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 4\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":4,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":144,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":21,\"ty\":3,\"nm\":\"OC Trails 4- Point 1\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":0,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[750,400,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"ip\":2,\"op\":24,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":22,\"ty\":4,\"nm\":\"OC Trails 6\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[750,400,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"ef\":[{\"ty\":5,\"nm\":\"Point 1 Control Layer\",\"np\":3,\"mn\":\"ADBE Layer Control\",\"ix\":1,\"en\":1,\"ef\":[{\"ty\":10,\"nm\":\"图层\",\"mn\":\"ADBE Layer Control-0001\",\"ix\":1,\"v\":{\"a\":0,\"k\":18,\"ix\":1}}]},{\"ty\":5,\"nm\":\"OC Trails\",\"np\":37,\"mn\":\"Pseudo/OC Trails\",\"ix\":2,\"en\":1,\"ef\":[{\"ty\":0,\"nm\":\"Trail Length\",\"mn\":\"Pseudo/OC Trails-0001\",\"ix\":1,\"v\":{\"a\":0,\"k\":4.722,\"ix\":1}},{\"ty\":0,\"nm\":\"Point Samples\",\"mn\":\"Pseudo/OC Trails-0002\",\"ix\":2,\"v\":{\"a\":0,\"k\":3.765,\"ix\":2}},{\"ty\":6,\"nm\":\"Dynamic Effects\",\"mn\":\"Pseudo/OC Trails-0003\",\"ix\":3,\"v\":0},{\"ty\":7,\"nm\":\"Velocity Trails\",\"mn\":\"Pseudo/OC Trails-0004\",\"ix\":4,\"v\":{\"a\":0,\"k\":0,\"ix\":4}},{\"ty\":6,\"nm\":\"Velocity Trail Options\",\"mn\":\"Pseudo/OC Trails-0005\",\"ix\":5,\"v\":0},{\"ty\":0,\"nm\":\"Velocity Amount\",\"mn\":\"Pseudo/OC Trails-0006\",\"ix\":6,\"v\":{\"a\":0,\"k\":20,\"ix\":6}},{\"ty\":0,\"nm\":\"Velocity at Start\",\"mn\":\"Pseudo/OC Trails-0007\",\"ix\":7,\"v\":{\"a\":0,\"k\":0,\"ix\":7}},{\"ty\":0,\"nm\":\"Velocity at End\",\"mn\":\"Pseudo/OC Trails-0008\",\"ix\":8,\"v\":{\"a\":0,\"k\":100,\"ix\":8}},{\"ty\":7,\"nm\":\"Velocity X\",\"mn\":\"Pseudo/OC Trails-0009\",\"ix\":9,\"v\":{\"a\":0,\"k\":1,\"ix\":9}},{\"ty\":7,\"nm\":\"Velocity Y\",\"mn\":\"Pseudo/OC Trails-0010\",\"ix\":10,\"v\":{\"a\":0,\"k\":1,\"ix\":10}},{\"ty\":6,\"nm\":\"\",\"mn\":\"Pseudo/OC Trails-0011\",\"ix\":11,\"v\":0},{\"ty\":6,\"nm\":\"\",\"mn\":\"Pseudo/OC Trails-0012\",\"ix\":12,\"v\":0},{\"ty\":6,\"nm\":\"\",\"mn\":\"Pseudo/OC Trails-0013\",\"ix\":13,\"v\":0},{\"ty\":7,\"nm\":\"Wiggler\",\"mn\":\"Pseudo/OC Trails-0014\",\"ix\":14,\"v\":{\"a\":0,\"k\":0,\"ix\":14}},{\"ty\":6,\"nm\":\"Wiggler Options\",\"mn\":\"Pseudo/OC Trails-0015\",\"ix\":15,\"v\":0},{\"ty\":0,\"nm\":\"Wiggles/Second\",\"mn\":\"Pseudo/OC Trails-0016\",\"ix\":16,\"v\":{\"a\":0,\"k\":1,\"ix\":16}},{\"ty\":0,\"nm\":\"Wiggle Amount\",\"mn\":\"Pseudo/OC Trails-0017\",\"ix\":17,\"v\":{\"a\":0,\"k\":40,\"ix\":17}},{\"ty\":0,\"nm\":\"Wiggle Cohesion\",\"mn\":\"Pseudo/OC Trails-0018\",\"ix\":18,\"v\":{\"a\":0,\"k\":20,\"ix\":18}},{\"ty\":0,\"nm\":\"Wiggle at Start\",\"mn\":\"Pseudo/OC Trails-0019\",\"ix\":19,\"v\":{\"a\":0,\"k\":0,\"ix\":19}},{\"ty\":0,\"nm\":\"Wiggle at End\",\"mn\":\"Pseudo/OC Trails-0020\",\"ix\":20,\"v\":{\"a\":0,\"k\":100,\"ix\":20}},{\"ty\":7,\"nm\":\"Wiggle X\",\"mn\":\"Pseudo/OC Trails-0021\",\"ix\":21,\"v\":{\"a\":0,\"k\":1,\"ix\":21}},{\"ty\":7,\"nm\":\"Wiggle Y\",\"mn\":\"Pseudo/OC Trails-0022\",\"ix\":22,\"v\":{\"a\":0,\"k\":1,\"ix\":22}},{\"ty\":6,\"nm\":\"\",\"mn\":\"Pseudo/OC Trails-0023\",\"ix\":23,\"v\":0},{\"ty\":6,\"nm\":\"\",\"mn\":\"Pseudo/OC Trails-0024\",\"ix\":24,\"v\":0},{\"ty\":6,\"nm\":\"\",\"mn\":\"Pseudo/OC Trails-0025\",\"ix\":25,\"v\":0},{\"ty\":7,\"nm\":\"Add Movement\",\"mn\":\"Pseudo/OC Trails-0026\",\"ix\":26,\"v\":{\"a\":0,\"k\":1,\"ix\":26}},{\"ty\":6,\"nm\":\"Add Movement\",\"mn\":\"Pseudo/OC Trails-0027\",\"ix\":27,\"v\":0},{\"ty\":3,\"nm\":\"Movement Direction\",\"mn\":\"Pseudo/OC Trails-0028\",\"ix\":28,\"v\":{\"a\":0,\"k\":[-500,0],\"ix\":28}},{\"ty\":0,\"nm\":\"Movement at Start\",\"mn\":\"Pseudo/OC Trails-0029\",\"ix\":29,\"v\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":0,\"s\":[21.547]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":13.75,\"s\":[37.017]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":27.5,\"s\":[21.547]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":41.25,\"s\":[12.707]},{\"t\":55,\"s\":[21.547]}],\"ix\":29}},{\"ty\":0,\"nm\":\"Movement at End\",\"mn\":\"Pseudo/OC Trails-0030\",\"ix\":30,\"v\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":0,\"s\":[9.392]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":13.75,\"s\":[12.707]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":27.5,\"s\":[9.392]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":41.25,\"s\":[9.392]},{\"t\":55,\"s\":[9.392]}],\"ix\":30}},{\"ty\":6,\"nm\":\"\",\"mn\":\"Pseudo/OC Trails-0031\",\"ix\":31,\"v\":0},{\"ty\":6,\"nm\":\"\",\"mn\":\"Pseudo/OC Trails-0032\",\"ix\":32,\"v\":0},{\"ty\":6,\"nm\":\"\",\"mn\":\"Pseudo/OC Trails-0033\",\"ix\":33,\"v\":0},{\"ty\":6,\"nm\":\"\",\"mn\":\"Pseudo/OC Trails-0034\",\"ix\":34,\"v\":0},{\"ty\":7,\"nm\":\"Velocity Based Line Length\",\"mn\":\"Pseudo/OC Trails-0035\",\"ix\":35,\"v\":{\"a\":0,\"k\":0,\"ix\":35}}]}],\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[],\"o\":[],\"v\":[],\"c\":false},\"ix\":2,\"x\":\"var $bm_rt;\\n$bm_rt = thisLayer.content('LEAVE ME ALONE').content('Trail Base Path 1').path;\"},\"nm\":\"Point 1 Trail\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"Appearance Paths\",\"np\":1,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.468275122549,0.468275122549,0.468275122549,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":20,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"Appearance\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[],\"o\":[],\"v\":[],\"c\":false},\"ix\":2,\"x\":\"var $bm_rt;\\nvar p, curVel, sP, tL, wigCheck, velCheck, movCheck, velLength, w1, w2, wC, wS, wE, wigCheckX, wigCheckY, velA, velS, velE, velCheckX, velCheckY, movD, movS, movE, v, f, fD, posPoints, off, pCalc, pOrig, pMod, pMod, pMod, pMod, pVel, pPoint;\\np = effect('Point 1 Control Layer')(1);\\ncurVel = content('LEAVE ME ALONE').content('Trail 1 Extra Calcs ').transform.anchorPoint[0];\\nsP = effect('OC Trails')('Point Samples');\\ntL = $bm_div($bm_mul(effect('OC Trails')('Trail Length'), -1), 10);\\nwigCheck = effect('OC Trails')('Wiggler');\\nvelCheck = effect('OC Trails')('Velocity Trails');\\nmovCheck = effect('OC Trails')('Add Movement');\\nvelLength = effect('OC Trails')('Velocity Based Line Length');\\nw1 = effect('OC Trails')('Wiggles/Second');\\nw2 = effect('OC Trails')('Wiggle Amount');\\nwC = effect('OC Trails')('Wiggle Cohesion');\\nwS = effect('OC Trails')('Wiggle at Start');\\nwE = effect('OC Trails')('Wiggle at End');\\nwigCheckX = effect('OC Trails')('Wiggle X');\\nwigCheckY = effect('OC Trails')('Wiggle Y');\\nvelA = effect('OC Trails')('Velocity Amount');\\nvelS = effect('OC Trails')('Velocity at Start');\\nvelE = effect('OC Trails')('Velocity at End');\\nvelCheckX = effect('OC Trails')('Velocity X');\\nvelCheckY = effect('OC Trails')('Velocity Y');\\nmovD = effect('OC Trails')('Movement Direction');\\nmovS = effect('OC Trails')('Movement at Start');\\nmovE = effect('OC Trails')('Movement at End');\\nv = 0;\\nf = 30;\\nfD = thisComp.frameDuration;\\nposPoints = [];\\noff = $bm_div(tL, sP);\\nfor (var i = 0; i < sP; i++) {\\n    pCalc = trailPos(p);\\n    pOrig = p.toWorld([\\n        0,\\n        0,\\n        0\\n    ]);\\n    pMod = pCalc;\\n    if (wigCheck == 1) {\\n        pMod = $bm_sum(pMod, wiggler(p, i));\\n    }\\n    if (velCheck == 1) {\\n        pMod = $bm_sum(pMod, velMod(p));\\n    }\\n    if (movCheck == 1) {\\n        pMod = $bm_sum(pMod, movMod(p, i));\\n    }\\n    pVel = linear(curVel, 0, 100, pCalc, pMod);\\n    pPoint = $bm_sub(pVel, thisLayer.toComp([\\n        0,\\n        0,\\n        0\\n    ]));\\n    posPoints.push(pPoint);\\n}\\nfunction StEndStrength(inSlid, outSlid, maxVal) {\\n    var sT, eT;\\n    sT = linear(inSlid, -100, 100, $bm_mul(maxVal, -1), maxVal);\\n    eT = linear(outSlid, -100, 100, $bm_mul(maxVal, -1), maxVal);\\n    return [\\n        sT,\\n        eT\\n    ];\\n}\\nfunction trailPos(x) {\\n    var tP;\\n    tP = x.toComp(x.transform.anchorPoint, $bm_sum(time, $bm_mul(off, i)));\\n    return [\\n        tP[0],\\n        tP[1]\\n    ];\\n}\\nfunction wiggler(pPos, x) {\\n    var Co, w, minMax, wig, wigX, wigY, wFinal;\\n    Co = linear(wC, 0, 100, 1, 100);\\n    w = $bm_sub(pPos.transform.position.wiggle(w1, w2, 1, 0.5, $bm_sub(time, $bm_div(x, Co))), pPos.transform.position);\\n    minMax = StEndStrength(wS, wE, w);\\n    wig = linear(x, 0, sP, minMax[0], minMax[1]);\\n    if (wigCheckX == 1) {\\n        wigX = wig[0];\\n    } else {\\n        wigX = 0;\\n    }\\n    if (wigCheckY == 1) {\\n        wigY = wig[1];\\n    } else {\\n        wigY = 0;\\n    }\\n    wFinal = [\\n        wigX,\\n        wigY\\n    ];\\n    return wFinal;\\n}\\nfunction velMod(x) {\\n    var vP1, vP2, minMax, vE, velX, velY, velFinal;\\n    vP1 = x.toWorld([\\n        0,\\n        0,\\n        0\\n    ], $bm_sum($bm_sum(time, $bm_mul(off, i)), $bm_mul(thisComp.frameDuration, 2)));\\n    vP2 = x.toWorld([\\n        0,\\n        0,\\n        0\\n    ], $bm_sub($bm_sum(time, $bm_mul(off, i)), $bm_mul(thisComp.frameDuration, 2)));\\n    v = $bm_mul($bm_div($bm_div($bm_sub(vP1, vP2), thisComp.frameDuration), 15000), $bm_mul(velA, 5));\\n    minMax = StEndStrength(velS, velE, v);\\n    vE = linear(i, velS, sP, minMax[0], minMax[1]);\\n    if (velCheckX == 1) {\\n        velX = vE[0];\\n    } else {\\n        velX = 0;\\n    }\\n    if (velCheckY == 1) {\\n        velY = vE[1];\\n    } else {\\n        velY = 0;\\n    }\\n    velFinal = [\\n        velX,\\n        velY\\n    ];\\n    return velFinal;\\n}\\nfunction movMod(pPos, x) {\\n    var tMod, minMax, mMod;\\n    tMod = movD;\\n    minMax = StEndStrength(movS, movE, tMod);\\n    mMod = linear(x, 0, sP, minMax[0], minMax[1]);\\n    return mMod;\\n}\\nfunction timeVel(o, p) {\\n    var vP1, vP2, v1;\\n    vP1 = p.toWorld([\\n        0,\\n        0,\\n        0\\n    ], $bm_sum($bm_sum(time, o), thisComp.frameDuration));\\n    vP2 = p.toWorld([\\n        0,\\n        0,\\n        0\\n    ], $bm_sub($bm_sum(time, o), thisComp.frameDuration));\\n    v1 = length(vP1, vP2);\\n    return v1;\\n}\\nfunction velLength() {\\n    var m;\\n    for (m = 0; m < f; m++) {\\n        v = $bm_sum(v, timeVel($bm_mul(fD, $bm_neg(m)), p));\\n    }\\n    return v;\\n}\\nfunction findVelLength() {\\n    var vL;\\n    vL = $bm_div(velLength(), f);\\n    return vL;\\n}\\n$bm_rt = createPath(posPoints, [], [], false);\"},\"nm\":\"Trail Base Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1,\"x\":\"var $bm_rt;\\nvar x, velLenCheck, v, f, fD, velFinal, velFinal, velFinal;\\nfunction timeVel(e) {\\n    return vP1 = x.toWorld([\\n        0,\\n        0,\\n        0\\n    ], time + e + thisComp.frameDuration), vP2 = x.toWorld([\\n        0,\\n        0,\\n        0\\n    ], time + e - thisComp.frameDuration), v1 = length(vP1, vP2), v1;\\n}\\nfunction velLength() {\\n    var i;\\n    for (i = 0; i < f; i++)\\n        v = $bm_sum(v, timeVel($bm_mul(fD, $bm_neg(i))));\\n    return v;\\n}\\nx = effect('Point 1 Control Layer')(1), velLenCheck = effect('OC Trails')('Velocity Based Line Length'), v = 0, f = 30, fD = thisComp.frameDuration, 1 == velLenCheck ? velFinal = $bm_div(velLength(), f) : velFinal = 100, $bm_rt = [\\n    velFinal,\\n    velFinal\\n];\"},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"Trail 1 Extra Calcs \",\"np\":0,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"LEAVE ME ALONE\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":192,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":23,\"ty\":4,\"nm\":\"OC Trails 2\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[750,400,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"ef\":[{\"ty\":5,\"nm\":\"Point 1 Control Layer\",\"np\":3,\"mn\":\"ADBE Layer Control\",\"ix\":1,\"en\":1,\"ef\":[{\"ty\":10,\"nm\":\"图层\",\"mn\":\"ADBE Layer Control-0001\",\"ix\":1,\"v\":{\"a\":0,\"k\":25,\"ix\":1}}]},{\"ty\":5,\"nm\":\"OC Trails\",\"np\":37,\"mn\":\"Pseudo/OC Trails\",\"ix\":2,\"en\":1,\"ef\":[{\"ty\":0,\"nm\":\"Trail Length\",\"mn\":\"Pseudo/OC Trails-0001\",\"ix\":1,\"v\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":36,\"s\":[5]},{\"t\":48,\"s\":[-0.6]}],\"ix\":1}},{\"ty\":0,\"nm\":\"Point Samples\",\"mn\":\"Pseudo/OC Trails-0002\",\"ix\":2,\"v\":{\"a\":0,\"k\":10,\"ix\":2}},{\"ty\":6,\"nm\":\"Dynamic Effects\",\"mn\":\"Pseudo/OC Trails-0003\",\"ix\":3,\"v\":0},{\"ty\":7,\"nm\":\"Velocity Trails\",\"mn\":\"Pseudo/OC Trails-0004\",\"ix\":4,\"v\":{\"a\":0,\"k\":0,\"ix\":4}},{\"ty\":6,\"nm\":\"Velocity Trail Options\",\"mn\":\"Pseudo/OC Trails-0005\",\"ix\":5,\"v\":0},{\"ty\":0,\"nm\":\"Velocity Amount\",\"mn\":\"Pseudo/OC Trails-0006\",\"ix\":6,\"v\":{\"a\":0,\"k\":20,\"ix\":6}},{\"ty\":0,\"nm\":\"Velocity at Start\",\"mn\":\"Pseudo/OC Trails-0007\",\"ix\":7,\"v\":{\"a\":0,\"k\":0,\"ix\":7}},{\"ty\":0,\"nm\":\"Velocity at End\",\"mn\":\"Pseudo/OC Trails-0008\",\"ix\":8,\"v\":{\"a\":0,\"k\":100,\"ix\":8}},{\"ty\":7,\"nm\":\"Velocity X\",\"mn\":\"Pseudo/OC Trails-0009\",\"ix\":9,\"v\":{\"a\":0,\"k\":1,\"ix\":9}},{\"ty\":7,\"nm\":\"Velocity Y\",\"mn\":\"Pseudo/OC Trails-0010\",\"ix\":10,\"v\":{\"a\":0,\"k\":1,\"ix\":10}},{\"ty\":6,\"nm\":\"\",\"mn\":\"Pseudo/OC Trails-0011\",\"ix\":11,\"v\":0},{\"ty\":6,\"nm\":\"\",\"mn\":\"Pseudo/OC Trails-0012\",\"ix\":12,\"v\":0},{\"ty\":6,\"nm\":\"\",\"mn\":\"Pseudo/OC Trails-0013\",\"ix\":13,\"v\":0},{\"ty\":7,\"nm\":\"Wiggler\",\"mn\":\"Pseudo/OC Trails-0014\",\"ix\":14,\"v\":{\"a\":0,\"k\":0,\"ix\":14}},{\"ty\":6,\"nm\":\"Wiggler Options\",\"mn\":\"Pseudo/OC Trails-0015\",\"ix\":15,\"v\":0},{\"ty\":0,\"nm\":\"Wiggles/Second\",\"mn\":\"Pseudo/OC Trails-0016\",\"ix\":16,\"v\":{\"a\":0,\"k\":1,\"ix\":16}},{\"ty\":0,\"nm\":\"Wiggle Amount\",\"mn\":\"Pseudo/OC Trails-0017\",\"ix\":17,\"v\":{\"a\":0,\"k\":40,\"ix\":17}},{\"ty\":0,\"nm\":\"Wiggle Cohesion\",\"mn\":\"Pseudo/OC Trails-0018\",\"ix\":18,\"v\":{\"a\":0,\"k\":20,\"ix\":18}},{\"ty\":0,\"nm\":\"Wiggle at Start\",\"mn\":\"Pseudo/OC Trails-0019\",\"ix\":19,\"v\":{\"a\":0,\"k\":0,\"ix\":19}},{\"ty\":0,\"nm\":\"Wiggle at End\",\"mn\":\"Pseudo/OC Trails-0020\",\"ix\":20,\"v\":{\"a\":0,\"k\":100,\"ix\":20}},{\"ty\":7,\"nm\":\"Wiggle X\",\"mn\":\"Pseudo/OC Trails-0021\",\"ix\":21,\"v\":{\"a\":0,\"k\":1,\"ix\":21}},{\"ty\":7,\"nm\":\"Wiggle Y\",\"mn\":\"Pseudo/OC Trails-0022\",\"ix\":22,\"v\":{\"a\":0,\"k\":1,\"ix\":22}},{\"ty\":6,\"nm\":\"\",\"mn\":\"Pseudo/OC Trails-0023\",\"ix\":23,\"v\":0},{\"ty\":6,\"nm\":\"\",\"mn\":\"Pseudo/OC Trails-0024\",\"ix\":24,\"v\":0},{\"ty\":6,\"nm\":\"\",\"mn\":\"Pseudo/OC Trails-0025\",\"ix\":25,\"v\":0},{\"ty\":7,\"nm\":\"Add Movement\",\"mn\":\"Pseudo/OC Trails-0026\",\"ix\":26,\"v\":{\"a\":0,\"k\":1,\"ix\":26}},{\"ty\":6,\"nm\":\"Add Movement\",\"mn\":\"Pseudo/OC Trails-0027\",\"ix\":27,\"v\":0},{\"ty\":3,\"nm\":\"Movement Direction\",\"mn\":\"Pseudo/OC Trails-0028\",\"ix\":28,\"v\":{\"a\":0,\"k\":[-937.5,0],\"ix\":28}},{\"ty\":0,\"nm\":\"Movement at Start\",\"mn\":\"Pseudo/OC Trails-0029\",\"ix\":29,\"v\":{\"a\":0,\"k\":8,\"ix\":29}},{\"ty\":0,\"nm\":\"Movement at End\",\"mn\":\"Pseudo/OC Trails-0030\",\"ix\":30,\"v\":{\"a\":0,\"k\":100,\"ix\":30}},{\"ty\":6,\"nm\":\"\",\"mn\":\"Pseudo/OC Trails-0031\",\"ix\":31,\"v\":0},{\"ty\":6,\"nm\":\"\",\"mn\":\"Pseudo/OC Trails-0032\",\"ix\":32,\"v\":0},{\"ty\":6,\"nm\":\"\",\"mn\":\"Pseudo/OC Trails-0033\",\"ix\":33,\"v\":0},{\"ty\":6,\"nm\":\"\",\"mn\":\"Pseudo/OC Trails-0034\",\"ix\":34,\"v\":0},{\"ty\":7,\"nm\":\"Velocity Based Line Length\",\"mn\":\"Pseudo/OC Trails-0035\",\"ix\":35,\"v\":{\"a\":0,\"k\":0,\"ix\":35}}]}],\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[],\"o\":[],\"v\":[],\"c\":false},\"ix\":2,\"x\":\"var $bm_rt;\\n$bm_rt = thisLayer.content('LEAVE ME ALONE').content('Trail Base Path 1').path;\"},\"nm\":\"Point 1 Trail\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"Appearance Paths\",\"np\":1,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.468275122549,0.468275122549,0.468275122549,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":10,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"Appearance\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[],\"o\":[],\"v\":[],\"c\":false},\"ix\":2,\"x\":\"var $bm_rt;\\nvar p, curVel, sP, tL, wigCheck, velCheck, movCheck, velLength, w1, w2, wC, wS, wE, wigCheckX, wigCheckY, velA, velS, velE, velCheckX, velCheckY, movD, movS, movE, v, f, fD, posPoints, off, pCalc, pOrig, pMod, pMod, pMod, pMod, pVel, pPoint;\\np = effect('Point 1 Control Layer')(1);\\ncurVel = content('LEAVE ME ALONE').content('Trail 1 Extra Calcs ').transform.anchorPoint[0];\\nsP = effect('OC Trails')('Point Samples');\\ntL = $bm_div($bm_mul(effect('OC Trails')('Trail Length'), -1), 10);\\nwigCheck = effect('OC Trails')('Wiggler');\\nvelCheck = effect('OC Trails')('Velocity Trails');\\nmovCheck = effect('OC Trails')('Add Movement');\\nvelLength = effect('OC Trails')('Velocity Based Line Length');\\nw1 = effect('OC Trails')('Wiggles/Second');\\nw2 = effect('OC Trails')('Wiggle Amount');\\nwC = effect('OC Trails')('Wiggle Cohesion');\\nwS = effect('OC Trails')('Wiggle at Start');\\nwE = effect('OC Trails')('Wiggle at End');\\nwigCheckX = effect('OC Trails')('Wiggle X');\\nwigCheckY = effect('OC Trails')('Wiggle Y');\\nvelA = effect('OC Trails')('Velocity Amount');\\nvelS = effect('OC Trails')('Velocity at Start');\\nvelE = effect('OC Trails')('Velocity at End');\\nvelCheckX = effect('OC Trails')('Velocity X');\\nvelCheckY = effect('OC Trails')('Velocity Y');\\nmovD = effect('OC Trails')('Movement Direction');\\nmovS = effect('OC Trails')('Movement at Start');\\nmovE = effect('OC Trails')('Movement at End');\\nv = 0;\\nf = 30;\\nfD = thisComp.frameDuration;\\nposPoints = [];\\noff = $bm_div(tL, sP);\\nfor (var i = 0; i < sP; i++) {\\n    pCalc = trailPos(p);\\n    pOrig = p.toWorld([\\n        0,\\n        0,\\n        0\\n    ]);\\n    pMod = pCalc;\\n    if (wigCheck == 1) {\\n        pMod = $bm_sum(pMod, wiggler(p, i));\\n    }\\n    if (velCheck == 1) {\\n        pMod = $bm_sum(pMod, velMod(p));\\n    }\\n    if (movCheck == 1) {\\n        pMod = $bm_sum(pMod, movMod(p, i));\\n    }\\n    pVel = linear(curVel, 0, 100, pCalc, pMod);\\n    pPoint = $bm_sub(pVel, thisLayer.toComp([\\n        0,\\n        0,\\n        0\\n    ]));\\n    posPoints.push(pPoint);\\n}\\nfunction StEndStrength(inSlid, outSlid, maxVal) {\\n    var sT, eT;\\n    sT = linear(inSlid, -100, 100, $bm_mul(maxVal, -1), maxVal);\\n    eT = linear(outSlid, -100, 100, $bm_mul(maxVal, -1), maxVal);\\n    return [\\n        sT,\\n        eT\\n    ];\\n}\\nfunction trailPos(x) {\\n    var tP;\\n    tP = x.toComp(x.transform.anchorPoint, $bm_sum(time, $bm_mul(off, i)));\\n    return [\\n        tP[0],\\n        tP[1]\\n    ];\\n}\\nfunction wiggler(pPos, x) {\\n    var Co, w, minMax, wig, wigX, wigY, wFinal;\\n    Co = linear(wC, 0, 100, 1, 100);\\n    w = $bm_sub(pPos.transform.position.wiggle(w1, w2, 1, 0.5, $bm_sub(time, $bm_div(x, Co))), pPos.transform.position);\\n    minMax = StEndStrength(wS, wE, w);\\n    wig = linear(x, 0, sP, minMax[0], minMax[1]);\\n    if (wigCheckX == 1) {\\n        wigX = wig[0];\\n    } else {\\n        wigX = 0;\\n    }\\n    if (wigCheckY == 1) {\\n        wigY = wig[1];\\n    } else {\\n        wigY = 0;\\n    }\\n    wFinal = [\\n        wigX,\\n        wigY\\n    ];\\n    return wFinal;\\n}\\nfunction velMod(x) {\\n    var vP1, vP2, minMax, vE, velX, velY, velFinal;\\n    vP1 = x.toWorld([\\n        0,\\n        0,\\n        0\\n    ], $bm_sum($bm_sum(time, $bm_mul(off, i)), $bm_mul(thisComp.frameDuration, 2)));\\n    vP2 = x.toWorld([\\n        0,\\n        0,\\n        0\\n    ], $bm_sub($bm_sum(time, $bm_mul(off, i)), $bm_mul(thisComp.frameDuration, 2)));\\n    v = $bm_mul($bm_div($bm_div($bm_sub(vP1, vP2), thisComp.frameDuration), 15000), $bm_mul(velA, 5));\\n    minMax = StEndStrength(velS, velE, v);\\n    vE = linear(i, velS, sP, minMax[0], minMax[1]);\\n    if (velCheckX == 1) {\\n        velX = vE[0];\\n    } else {\\n        velX = 0;\\n    }\\n    if (velCheckY == 1) {\\n        velY = vE[1];\\n    } else {\\n        velY = 0;\\n    }\\n    velFinal = [\\n        velX,\\n        velY\\n    ];\\n    return velFinal;\\n}\\nfunction movMod(pPos, x) {\\n    var tMod, minMax, mMod;\\n    tMod = movD;\\n    minMax = StEndStrength(movS, movE, tMod);\\n    mMod = linear(x, 0, sP, minMax[0], minMax[1]);\\n    return mMod;\\n}\\nfunction timeVel(o, p) {\\n    var vP1, vP2, v1;\\n    vP1 = p.toWorld([\\n        0,\\n        0,\\n        0\\n    ], $bm_sum($bm_sum(time, o), thisComp.frameDuration));\\n    vP2 = p.toWorld([\\n        0,\\n        0,\\n        0\\n    ], $bm_sub($bm_sum(time, o), thisComp.frameDuration));\\n    v1 = length(vP1, vP2);\\n    return v1;\\n}\\nfunction velLength() {\\n    var m;\\n    for (m = 0; m < f; m++) {\\n        v = $bm_sum(v, timeVel($bm_mul(fD, $bm_neg(m)), p));\\n    }\\n    return v;\\n}\\nfunction findVelLength() {\\n    var vL;\\n    vL = $bm_div(velLength(), f);\\n    return vL;\\n}\\n$bm_rt = createPath(posPoints, [], [], false);\"},\"nm\":\"Trail Base Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1,\"x\":\"var $bm_rt;\\nvar x, velLenCheck, v, f, fD, velFinal, velFinal, velFinal;\\nfunction timeVel(e) {\\n    return vP1 = x.toWorld([\\n        0,\\n        0,\\n        0\\n    ], time + e + thisComp.frameDuration), vP2 = x.toWorld([\\n        0,\\n        0,\\n        0\\n    ], time + e - thisComp.frameDuration), v1 = length(vP1, vP2), v1;\\n}\\nfunction velLength() {\\n    var i;\\n    for (i = 0; i < f; i++)\\n        v = $bm_sum(v, timeVel($bm_mul(fD, $bm_neg(i))));\\n    return v;\\n}\\nx = effect('Point 1 Control Layer')(1), velLenCheck = effect('OC Trails')('Velocity Based Line Length'), v = 0, f = 30, fD = thisComp.frameDuration, 1 == velLenCheck ? velFinal = $bm_div(velLength(), f) : velFinal = 100, $bm_rt = [\\n    velFinal,\\n    velFinal\\n];\"},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"Trail 1 Extra Calcs \",\"np\":0,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"LEAVE ME ALONE\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":24,\"op\":49,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":24,\"ty\":3,\"nm\":\"OC Trails 2- Point 1\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":0,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[750,400,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"ip\":24,\"op\":49,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":25,\"ty\":4,\"nm\":\"小火箭 6\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":24,\"s\":[652.834,310.132,0],\"to\":[0,32.667,0],\"ti\":[0,-32.667,0]},{\"t\":48,\"s\":[652.834,506.132,0]}],\"ix\":2},\"a\":{\"a\":0,\"k\":[78.766,27.831,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[9.571,20.331],[-9.571,20.331],[-9.571,-20.331],[9.571,-20.331]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0,0,0,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":3,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":10,\"bm\":0,\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[73.201,27.832],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[1.738,0],[0,0],[0,1.738],[0,0],[-1.738,0],[0,0],[0,-1.738],[0,0]],\"o\":[[0,0],[-1.738,0],[0,0],[0,-1.738],[0,0],[1.738,0],[0,0],[0,1.738]],\"v\":[[1.551,11.514],[-1.552,11.514],[-4.699,8.368],[-4.699,-8.367],[-1.552,-11.514],[1.551,-11.514],[4.699,-8.367],[4.699,8.368]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0,0,0,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":3,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":10,\"bm\":0,\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[12.198,27.832],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 2\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[16.505,0],[0,0],[0,5.185],[0,0],[-5.184,0],[0,0],[-14.149,-8.498],[5.541,-3.328]],\"o\":[[0,0],[-5.184,0],[0,0],[0,-5.184],[0,0],[16.505,0],[5.541,3.328],[-14.149,8.499]],\"v\":[[14.178,20.331],[-57.18,20.331],[-66.568,10.945],[-66.568,-10.944],[-57.18,-20.331],[14.178,-20.331],[61.027,-7.343],[61.027,7.344]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0,0,0,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":3,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":10,\"bm\":0,\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.827451040231,0.827451040231,0.827451040231,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[83.464,27.831],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 3\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":3,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":24,\"op\":49,\"st\":24,\"bm\":0},{\"ddd\":0,\"ind\":26,\"ty\":4,\"nm\":\"小火箭 4\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.833,\"y\":0.833},\"o\":{\"x\":0.167,\"y\":0.167},\"t\":2,\"s\":[652.834,310.132,0],\"to\":[0,33,0],\"ti\":[0,-33,0]},{\"t\":23,\"s\":[652.834,508.132,0]}],\"ix\":2},\"a\":{\"a\":0,\"k\":[78.766,27.831,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[9.571,20.331],[-9.571,20.331],[-9.571,-20.331],[9.571,-20.331]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0,0,0,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":3,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":10,\"bm\":0,\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[73.201,27.832],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[1.738,0],[0,0],[0,1.738],[0,0],[-1.738,0],[0,0],[0,-1.738],[0,0]],\"o\":[[0,0],[-1.738,0],[0,0],[0,-1.738],[0,0],[1.738,0],[0,0],[0,1.738]],\"v\":[[1.551,11.514],[-1.552,11.514],[-4.699,8.368],[-4.699,-8.367],[-1.552,-11.514],[1.551,-11.514],[4.699,-8.367],[4.699,8.368]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0,0,0,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":3,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":10,\"bm\":0,\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[12.198,27.832],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 2\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[16.505,0],[0,0],[0,5.185],[0,0],[-5.184,0],[0,0],[-14.149,-8.498],[5.541,-3.328]],\"o\":[[0,0],[-5.184,0],[0,0],[0,-5.184],[0,0],[16.505,0],[5.541,3.328],[-14.149,8.499]],\"v\":[[14.178,20.331],[-57.18,20.331],[-66.568,10.945],[-66.568,-10.944],[-57.18,-20.331],[14.178,-20.331],[61.027,-7.343],[61.027,7.344]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0,0,0,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":3,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":10,\"bm\":0,\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.827451040231,0.827451040231,0.827451040231,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[83.464,27.831],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 3\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":3,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":2,\"op\":24,\"st\":1,\"bm\":0},{\"ddd\":0,\"ind\":27,\"ty\":4,\"nm\":\"小火箭 2\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[581.568,504.132,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[7.5,27.832,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[9.571,20.331],[-9.571,20.331],[-9.571,-20.331],[9.571,-20.331]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0,0,0,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":3,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":10,\"bm\":0,\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[73.201,27.832],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[1.738,0],[0,0],[0,1.738],[0,0],[-1.738,0],[0,0],[0,-1.738],[0,0]],\"o\":[[0,0],[-1.738,0],[0,0],[0,-1.738],[0,0],[1.738,0],[0,0],[0,1.738]],\"v\":[[1.551,11.514],[-1.552,11.514],[-4.699,8.368],[-4.699,-8.367],[-1.552,-11.514],[1.551,-11.514],[4.699,-8.367],[4.699,8.368]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0,0,0,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":3,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":10,\"bm\":0,\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[12.198,27.832],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 2\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[16.505,0],[0,0],[0,5.185],[0,0],[-5.184,0],[0,0],[-14.149,-8.498],[5.541,-3.328]],\"o\":[[0,0],[-5.184,0],[0,0],[0,-5.184],[0,0],[16.505,0],[5.541,3.328],[-14.149,8.499]],\"v\":[[14.178,20.331],[-57.18,20.331],[-66.568,10.945],[-66.568,-10.944],[-57.18,-20.331],[14.178,-20.331],[61.027,-7.343],[61.027,7.344]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0,0,0,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":3,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":10,\"bm\":0,\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.827451040231,0.827451040231,0.827451040231,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[83.464,27.831],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 3\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":3,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":2,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":28,\"ty\":4,\"nm\":\"OC Trails 4\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[750,400,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"ef\":[{\"ty\":5,\"nm\":\"Point 1 Control Layer\",\"np\":3,\"mn\":\"ADBE Layer Control\",\"ix\":1,\"en\":1,\"ef\":[{\"ty\":10,\"nm\":\"图层\",\"mn\":\"ADBE Layer Control-0001\",\"ix\":1,\"v\":{\"a\":0,\"k\":26,\"ix\":1}}]},{\"ty\":5,\"nm\":\"OC Trails\",\"np\":37,\"mn\":\"Pseudo/OC Trails\",\"ix\":2,\"en\":1,\"ef\":[{\"ty\":0,\"nm\":\"Trail Length\",\"mn\":\"Pseudo/OC Trails-0001\",\"ix\":1,\"v\":{\"a\":0,\"k\":5,\"ix\":1}},{\"ty\":0,\"nm\":\"Point Samples\",\"mn\":\"Pseudo/OC Trails-0002\",\"ix\":2,\"v\":{\"a\":0,\"k\":10,\"ix\":2}},{\"ty\":6,\"nm\":\"Dynamic Effects\",\"mn\":\"Pseudo/OC Trails-0003\",\"ix\":3,\"v\":0},{\"ty\":7,\"nm\":\"Velocity Trails\",\"mn\":\"Pseudo/OC Trails-0004\",\"ix\":4,\"v\":{\"a\":0,\"k\":0,\"ix\":4}},{\"ty\":6,\"nm\":\"Velocity Trail Options\",\"mn\":\"Pseudo/OC Trails-0005\",\"ix\":5,\"v\":0},{\"ty\":0,\"nm\":\"Velocity Amount\",\"mn\":\"Pseudo/OC Trails-0006\",\"ix\":6,\"v\":{\"a\":0,\"k\":20,\"ix\":6}},{\"ty\":0,\"nm\":\"Velocity at Start\",\"mn\":\"Pseudo/OC Trails-0007\",\"ix\":7,\"v\":{\"a\":0,\"k\":0,\"ix\":7}},{\"ty\":0,\"nm\":\"Velocity at End\",\"mn\":\"Pseudo/OC Trails-0008\",\"ix\":8,\"v\":{\"a\":0,\"k\":100,\"ix\":8}},{\"ty\":7,\"nm\":\"Velocity X\",\"mn\":\"Pseudo/OC Trails-0009\",\"ix\":9,\"v\":{\"a\":0,\"k\":1,\"ix\":9}},{\"ty\":7,\"nm\":\"Velocity Y\",\"mn\":\"Pseudo/OC Trails-0010\",\"ix\":10,\"v\":{\"a\":0,\"k\":1,\"ix\":10}},{\"ty\":6,\"nm\":\"\",\"mn\":\"Pseudo/OC Trails-0011\",\"ix\":11,\"v\":0},{\"ty\":6,\"nm\":\"\",\"mn\":\"Pseudo/OC Trails-0012\",\"ix\":12,\"v\":0},{\"ty\":6,\"nm\":\"\",\"mn\":\"Pseudo/OC Trails-0013\",\"ix\":13,\"v\":0},{\"ty\":7,\"nm\":\"Wiggler\",\"mn\":\"Pseudo/OC Trails-0014\",\"ix\":14,\"v\":{\"a\":0,\"k\":0,\"ix\":14}},{\"ty\":6,\"nm\":\"Wiggler Options\",\"mn\":\"Pseudo/OC Trails-0015\",\"ix\":15,\"v\":0},{\"ty\":0,\"nm\":\"Wiggles/Second\",\"mn\":\"Pseudo/OC Trails-0016\",\"ix\":16,\"v\":{\"a\":0,\"k\":1,\"ix\":16}},{\"ty\":0,\"nm\":\"Wiggle Amount\",\"mn\":\"Pseudo/OC Trails-0017\",\"ix\":17,\"v\":{\"a\":0,\"k\":40,\"ix\":17}},{\"ty\":0,\"nm\":\"Wiggle Cohesion\",\"mn\":\"Pseudo/OC Trails-0018\",\"ix\":18,\"v\":{\"a\":0,\"k\":20,\"ix\":18}},{\"ty\":0,\"nm\":\"Wiggle at Start\",\"mn\":\"Pseudo/OC Trails-0019\",\"ix\":19,\"v\":{\"a\":0,\"k\":0,\"ix\":19}},{\"ty\":0,\"nm\":\"Wiggle at End\",\"mn\":\"Pseudo/OC Trails-0020\",\"ix\":20,\"v\":{\"a\":0,\"k\":100,\"ix\":20}},{\"ty\":7,\"nm\":\"Wiggle X\",\"mn\":\"Pseudo/OC Trails-0021\",\"ix\":21,\"v\":{\"a\":0,\"k\":1,\"ix\":21}},{\"ty\":7,\"nm\":\"Wiggle Y\",\"mn\":\"Pseudo/OC Trails-0022\",\"ix\":22,\"v\":{\"a\":0,\"k\":1,\"ix\":22}},{\"ty\":6,\"nm\":\"\",\"mn\":\"Pseudo/OC Trails-0023\",\"ix\":23,\"v\":0},{\"ty\":6,\"nm\":\"\",\"mn\":\"Pseudo/OC Trails-0024\",\"ix\":24,\"v\":0},{\"ty\":6,\"nm\":\"\",\"mn\":\"Pseudo/OC Trails-0025\",\"ix\":25,\"v\":0},{\"ty\":7,\"nm\":\"Add Movement\",\"mn\":\"Pseudo/OC Trails-0026\",\"ix\":26,\"v\":{\"a\":0,\"k\":1,\"ix\":26}},{\"ty\":6,\"nm\":\"Add Movement\",\"mn\":\"Pseudo/OC Trails-0027\",\"ix\":27,\"v\":0},{\"ty\":3,\"nm\":\"Movement Direction\",\"mn\":\"Pseudo/OC Trails-0028\",\"ix\":28,\"v\":{\"a\":0,\"k\":[-937.5,0],\"ix\":28}},{\"ty\":0,\"nm\":\"Movement at Start\",\"mn\":\"Pseudo/OC Trails-0029\",\"ix\":29,\"v\":{\"a\":0,\"k\":8,\"ix\":29}},{\"ty\":0,\"nm\":\"Movement at End\",\"mn\":\"Pseudo/OC Trails-0030\",\"ix\":30,\"v\":{\"a\":0,\"k\":100,\"ix\":30}},{\"ty\":6,\"nm\":\"\",\"mn\":\"Pseudo/OC Trails-0031\",\"ix\":31,\"v\":0},{\"ty\":6,\"nm\":\"\",\"mn\":\"Pseudo/OC Trails-0032\",\"ix\":32,\"v\":0},{\"ty\":6,\"nm\":\"\",\"mn\":\"Pseudo/OC Trails-0033\",\"ix\":33,\"v\":0},{\"ty\":6,\"nm\":\"\",\"mn\":\"Pseudo/OC Trails-0034\",\"ix\":34,\"v\":0},{\"ty\":7,\"nm\":\"Velocity Based Line Length\",\"mn\":\"Pseudo/OC Trails-0035\",\"ix\":35,\"v\":{\"a\":0,\"k\":0,\"ix\":35}}]}],\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[],\"o\":[],\"v\":[],\"c\":false},\"ix\":2,\"x\":\"var $bm_rt;\\n$bm_rt = thisLayer.content('LEAVE ME ALONE').content('Trail Base Path 1').path;\"},\"nm\":\"Point 1 Trail\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"Appearance Paths\",\"np\":1,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.468275122549,0.468275122549,0.468275122549,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":10,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"Appearance\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[],\"o\":[],\"v\":[],\"c\":false},\"ix\":2,\"x\":\"var $bm_rt;\\nvar p, curVel, sP, tL, wigCheck, velCheck, movCheck, velLength, w1, w2, wC, wS, wE, wigCheckX, wigCheckY, velA, velS, velE, velCheckX, velCheckY, movD, movS, movE, v, f, fD, posPoints, off, pCalc, pOrig, pMod, pMod, pMod, pMod, pVel, pPoint;\\np = effect('Point 1 Control Layer')(1);\\ncurVel = content('LEAVE ME ALONE').content('Trail 1 Extra Calcs ').transform.anchorPoint[0];\\nsP = effect('OC Trails')('Point Samples');\\ntL = $bm_div($bm_mul(effect('OC Trails')('Trail Length'), -1), 10);\\nwigCheck = effect('OC Trails')('Wiggler');\\nvelCheck = effect('OC Trails')('Velocity Trails');\\nmovCheck = effect('OC Trails')('Add Movement');\\nvelLength = effect('OC Trails')('Velocity Based Line Length');\\nw1 = effect('OC Trails')('Wiggles/Second');\\nw2 = effect('OC Trails')('Wiggle Amount');\\nwC = effect('OC Trails')('Wiggle Cohesion');\\nwS = effect('OC Trails')('Wiggle at Start');\\nwE = effect('OC Trails')('Wiggle at End');\\nwigCheckX = effect('OC Trails')('Wiggle X');\\nwigCheckY = effect('OC Trails')('Wiggle Y');\\nvelA = effect('OC Trails')('Velocity Amount');\\nvelS = effect('OC Trails')('Velocity at Start');\\nvelE = effect('OC Trails')('Velocity at End');\\nvelCheckX = effect('OC Trails')('Velocity X');\\nvelCheckY = effect('OC Trails')('Velocity Y');\\nmovD = effect('OC Trails')('Movement Direction');\\nmovS = effect('OC Trails')('Movement at Start');\\nmovE = effect('OC Trails')('Movement at End');\\nv = 0;\\nf = 30;\\nfD = thisComp.frameDuration;\\nposPoints = [];\\noff = $bm_div(tL, sP);\\nfor (var i = 0; i < sP; i++) {\\n    pCalc = trailPos(p);\\n    pOrig = p.toWorld([\\n        0,\\n        0,\\n        0\\n    ]);\\n    pMod = pCalc;\\n    if (wigCheck == 1) {\\n        pMod = $bm_sum(pMod, wiggler(p, i));\\n    }\\n    if (velCheck == 1) {\\n        pMod = $bm_sum(pMod, velMod(p));\\n    }\\n    if (movCheck == 1) {\\n        pMod = $bm_sum(pMod, movMod(p, i));\\n    }\\n    pVel = linear(curVel, 0, 100, pCalc, pMod);\\n    pPoint = $bm_sub(pVel, thisLayer.toComp([\\n        0,\\n        0,\\n        0\\n    ]));\\n    posPoints.push(pPoint);\\n}\\nfunction StEndStrength(inSlid, outSlid, maxVal) {\\n    var sT, eT;\\n    sT = linear(inSlid, -100, 100, $bm_mul(maxVal, -1), maxVal);\\n    eT = linear(outSlid, -100, 100, $bm_mul(maxVal, -1), maxVal);\\n    return [\\n        sT,\\n        eT\\n    ];\\n}\\nfunction trailPos(x) {\\n    var tP;\\n    tP = x.toComp(x.transform.anchorPoint, $bm_sum(time, $bm_mul(off, i)));\\n    return [\\n        tP[0],\\n        tP[1]\\n    ];\\n}\\nfunction wiggler(pPos, x) {\\n    var Co, w, minMax, wig, wigX, wigY, wFinal;\\n    Co = linear(wC, 0, 100, 1, 100);\\n    w = $bm_sub(pPos.transform.position.wiggle(w1, w2, 1, 0.5, $bm_sub(time, $bm_div(x, Co))), pPos.transform.position);\\n    minMax = StEndStrength(wS, wE, w);\\n    wig = linear(x, 0, sP, minMax[0], minMax[1]);\\n    if (wigCheckX == 1) {\\n        wigX = wig[0];\\n    } else {\\n        wigX = 0;\\n    }\\n    if (wigCheckY == 1) {\\n        wigY = wig[1];\\n    } else {\\n        wigY = 0;\\n    }\\n    wFinal = [\\n        wigX,\\n        wigY\\n    ];\\n    return wFinal;\\n}\\nfunction velMod(x) {\\n    var vP1, vP2, minMax, vE, velX, velY, velFinal;\\n    vP1 = x.toWorld([\\n        0,\\n        0,\\n        0\\n    ], $bm_sum($bm_sum(time, $bm_mul(off, i)), $bm_mul(thisComp.frameDuration, 2)));\\n    vP2 = x.toWorld([\\n        0,\\n        0,\\n        0\\n    ], $bm_sub($bm_sum(time, $bm_mul(off, i)), $bm_mul(thisComp.frameDuration, 2)));\\n    v = $bm_mul($bm_div($bm_div($bm_sub(vP1, vP2), thisComp.frameDuration), 15000), $bm_mul(velA, 5));\\n    minMax = StEndStrength(velS, velE, v);\\n    vE = linear(i, velS, sP, minMax[0], minMax[1]);\\n    if (velCheckX == 1) {\\n        velX = vE[0];\\n    } else {\\n        velX = 0;\\n    }\\n    if (velCheckY == 1) {\\n        velY = vE[1];\\n    } else {\\n        velY = 0;\\n    }\\n    velFinal = [\\n        velX,\\n        velY\\n    ];\\n    return velFinal;\\n}\\nfunction movMod(pPos, x) {\\n    var tMod, minMax, mMod;\\n    tMod = movD;\\n    minMax = StEndStrength(movS, movE, tMod);\\n    mMod = linear(x, 0, sP, minMax[0], minMax[1]);\\n    return mMod;\\n}\\nfunction timeVel(o, p) {\\n    var vP1, vP2, v1;\\n    vP1 = p.toWorld([\\n        0,\\n        0,\\n        0\\n    ], $bm_sum($bm_sum(time, o), thisComp.frameDuration));\\n    vP2 = p.toWorld([\\n        0,\\n        0,\\n        0\\n    ], $bm_sub($bm_sum(time, o), thisComp.frameDuration));\\n    v1 = length(vP1, vP2);\\n    return v1;\\n}\\nfunction velLength() {\\n    var m;\\n    for (m = 0; m < f; m++) {\\n        v = $bm_sum(v, timeVel($bm_mul(fD, $bm_neg(m)), p));\\n    }\\n    return v;\\n}\\nfunction findVelLength() {\\n    var vL;\\n    vL = $bm_div(velLength(), f);\\n    return vL;\\n}\\n$bm_rt = createPath(posPoints, [], [], false);\"},\"nm\":\"Trail Base Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1,\"x\":\"var $bm_rt;\\nvar x, velLenCheck, v, f, fD, velFinal, velFinal, velFinal;\\nfunction timeVel(e) {\\n    return vP1 = x.toWorld([\\n        0,\\n        0,\\n        0\\n    ], time + e + thisComp.frameDuration), vP2 = x.toWorld([\\n        0,\\n        0,\\n        0\\n    ], time + e - thisComp.frameDuration), v1 = length(vP1, vP2), v1;\\n}\\nfunction velLength() {\\n    var i;\\n    for (i = 0; i < f; i++)\\n        v = $bm_sum(v, timeVel($bm_mul(fD, $bm_neg(i))));\\n    return v;\\n}\\nx = effect('Point 1 Control Layer')(1), velLenCheck = effect('OC Trails')('Velocity Based Line Length'), v = 0, f = 30, fD = thisComp.frameDuration, 1 == velLenCheck ? velFinal = $bm_div(velLength(), f) : velFinal = 100, $bm_rt = [\\n    velFinal,\\n    velFinal\\n];\"},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"Trail 1 Extra Calcs \",\"np\":0,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"LEAVE ME ALONE\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":2,\"op\":24,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":29,\"ty\":3,\"nm\":\"OC Trails 6- Point 1\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":0,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[750,400,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"ip\":0,\"op\":192,\"st\":0,\"bm\":0}]}],\"layers\":[{\"ddd\":0,\"ind\":1,\"ty\":0,\"nm\":\"火箭\",\"refId\":\"comp_0\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":-37,\"ix\":10},\"p\":{\"a\":0,\"k\":[412,288,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[750,400,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[66,66,100],\"ix\":6}},\"ao\":0,\"w\":1500,\"h\":800,\"ip\":0,\"op\":47,\"st\":0,\"bm\":0}],\"markers\":[]}");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HomePage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layouts_Main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layouts/Main */ "./pages/layouts/Main.js");
/* harmony import */ var _layouts_HeaderToolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layouts/HeaderToolbar */ "./pages/layouts/HeaderToolbar.js");
/* harmony import */ var _layouts_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layouts/Footer */ "./pages/layouts/Footer.js");
/* harmony import */ var _layouts_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layouts/Header */ "./pages/layouts/Header.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "D:\\Users\\Daniel\\Documents\\PET Mec\xE2nica\\github\\site-pet-mecanica\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const Title = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.h1`
    font-size: 50px;
    color: ${({
  theme
}) => theme.colors.primary};
`;
class HomePage extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 13
      }
    }, __jsx("link", {
      rel: "icon",
      href: "../public/logo.png",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }
    }), __jsx("title", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }
    }, "PET Mec\xE2nica"), __jsx("link", {
      href: "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap",
      rel: "stylesheet",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }
    }), __jsx("link", {
      href: "https://fonts.googleapis.com/css2?family=Asap:ital,wght@0,400;1,600&display=swap",
      rel: "stylesheet",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }
    }), __jsx("link", {
      href: "https://fonts.googleapis.com/css?family=Rubik&display=swap",
      rel: "stylesheet",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }
    }), __jsx("link", {
      href: "https://fonts.googleapis.com/css?family=Bowlby+One+SC|Palanquin+Dark|Rubik+Mono+One&display=swap",
      rel: "stylesheet",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }
    }), __jsx("link", {
      rel: "stylesheet",
      href: "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css",
      integrity: "sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk",
      crossorigin: "anonymous",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }
    })), __jsx(_layouts_HeaderToolbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 13
      }
    }), __jsx("div", {
      className: "container-fluid",
      style: {
        padding: '0'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 13
      }
    }, __jsx(_layouts_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }
    }), __jsx(_layouts_Main__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }
    })), __jsx(_layouts_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 13
      }
    }));
  }

}

/***/ }),

/***/ "./pages/layouts/Botao.js":
/*!********************************!*\
  !*** ./pages/layouts/Botao.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Botao; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/colors */ "@material-ui/core/colors");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\Users\\Daniel\\Documents\\PET Mec\xE2nica\\github\\site-pet-mecanica\\pages\\layouts\\Botao.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["createMuiTheme"])({});
const styles = {
  root: {
    fontFamily: 'Roboto',
    LetterSpacing: '0.15rem !important',
    color: theme.palette.getContrastText(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_3__["red"][500]),
    backgroundColor: '#FF6666',
    '&:hover': {
      backgroundColor: '#DD505E'
    },
    margin: theme.spacing(1)
  }
};
class Botao extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      classes
    } = this.props;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
      size: "large",
      variant: "outlined",
      className: classes.root,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }
    }, this.props.value));
  }

}
Botao = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(Botao);

/***/ }),

/***/ "./pages/layouts/Footer.js":
/*!*********************************!*\
  !*** ./pages/layouts/Footer.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/GitHub */ "@material-ui/icons/GitHub");
/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_Facebook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Facebook */ "@material-ui/icons/Facebook");
/* harmony import */ var _material_ui_icons_Facebook__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Facebook__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Instagram */ "@material-ui/icons/Instagram");
/* harmony import */ var _material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/LinkedIn */ "@material-ui/icons/LinkedIn");
/* harmony import */ var _material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/List */ "@material-ui/core/List");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "D:\\Users\\Daniel\\Documents\\PET Mec\xE2nica\\github\\site-pet-mecanica\\pages\\layouts\\Footer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








class Footer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("footer", {
      style: {
        backgroundColor: '#424556'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Container"], {
      maxWidth: "lg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a, {
      container: true,
      justify: "center",
      spacing: 2,
      style: {
        paddingBottom: '30px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a, {
      item: true,
      xs: 6,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_7___default.a, {
      component: "navbar",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 1
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 1
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      variant: "h6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 1
      }
    }, "PROJETOS")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 5
      }
    }, "Fala S\xE9rio"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 5
      }
    }, "Poli Mundi"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 5
      }
    }, "Apostilas"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 5
      }
    }, "SERES"))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a, {
      item: true,
      xs: 6,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 25
      }
    }, __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_7___default.a, {
      component: "navbar",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 1
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 1
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      variant: "h6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 1
      }
    }, "APOIO")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 5
      }
    }, "PET no Minist\xE9rio da Educa\xE7\xE3o"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 5
      }
    }, "Departamento de Engenharia Mec\xE2nica"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 5
      }
    }, "Escola Polit\xE9cnica USP"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 5
      }
    }, "Universidade de S\xE3o Paulo")))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      variant: "body2",
      align: "center",
      color: "initial",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 21
      }
    }, "Escola Polit\xE9cnica da USP Pr\xE9dio de Eng. Mec\xE2nica, sala HT-17 ao lado das oficinas do PMR. Av. Prof. Mello Moraes, 2231 - Cidade Universit\xE1ria- CEP 05508-030, S\xE3o Paulo - SP"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      variant: "body2",
      align: "center",
      color: "initial",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 21
      }
    }, __jsx("b", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 21
      }
    }, "PET MEC\xC2NICA"), " - 2020 - Telefone: (11) 3091-9653 -", __jsx("a", {
      style: {
        paddingRight: '10px'
      },
      href: "https://www.facebook.com/petmecanica",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 21
      }
    }, __jsx(_material_ui_icons_Facebook__WEBPACK_IMPORTED_MODULE_3___default.a, {
      color: "primary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 99
      }
    })), __jsx("a", {
      style: {
        paddingRight: '10px'
      },
      href: "https://www.instagram.com/pet_mecanica/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 21
      }
    }, __jsx(_material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_4___default.a, {
      color: "primary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 102
      }
    })), __jsx("a", {
      style: {
        paddingRight: '10px'
      },
      href: "https://www.linkedin.com/company/petmecanica/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 21
      }
    }, __jsx(_material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_5___default.a, {
      color: "primary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 108
      }
    }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      variant: "body2",
      align: "center",
      color: "initial",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 25
      }
    }, "Hosted with \u2764 by ", __jsx("a", {
      href: "https://github.com/danielvitorpd",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 46
      }
    }, __jsx(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_2___default.a, {
      style: {
        color: 'rgba(255, 255, 255, 0.54)'
      },
      fontSize: "small",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 89
      }
    })))));
  }

}

/***/ }),

/***/ "./pages/layouts/Header.js":
/*!*********************************!*\
  !*** ./pages/layouts/Header.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Container */ "@material-ui/core/Container");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "@material-ui/core/Toolbar");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Botao__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Botao */ "./pages/layouts/Botao.js");
var _jsxFileName = "D:\\Users\\Daniel\\Documents\\PET Mec\xE2nica\\github\\site-pet-mecanica\\pages\\layouts\\Header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





class Header extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();
  }

  render() {
    return __jsx("header", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "background-header size-header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }
    }), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1___default.a, {
      style: {
        display: 'flex',
        alignItems: 'center',
        padding: '56px 0 0'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "text-content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 21
      }
    }, __jsx("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 29
      }
    }, "Bem-vindo ao PET Mec\xE2nica"), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 29
      }
    }, "O PET Mec\xE2nica \xE9 um grupo que abra\xE7a projetos para serem desenvolvidos em equipe"), __jsx(_Botao__WEBPACK_IMPORTED_MODULE_4__["default"], {
      value: "Comece a explorar",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 29
      }
    })), __jsx("div", {
      className: "",
      style: {
        padding: '40px 20px',
        height: '600px',
        width: '600px',
        margin: 'auto'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 21
      }
    }, __jsx("img", {
      src: "/galera.jpg",
      className: "rounded float-right",
      style: {
        borderRadius: 'none',
        width: 'auto',
        height: 'auto',
        maxWidth: '600px',
        maxHeight: '600px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 25
      }
    }))));
  }

}

/***/ }),

/***/ "./pages/layouts/HeaderToolbar.js":
/*!****************************************!*\
  !*** ./pages/layouts/HeaderToolbar.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HeaderToolbar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "@material-ui/core/Toolbar");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\Users\\Daniel\\Documents\\PET Mec\xE2nica\\github\\site-pet-mecanica\\pages\\layouts\\HeaderToolbar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class HeaderToolbar extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_1___default.a, {
      style: {
        zIndex: '10',
        position: 'absolute',
        padding: '0px 20px 60px',
        minWidth: '100%',
        maxWidth: '1000px',
        marginLeft: 'auto',
        marginRight: 'auto'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
      component: "h2",
      variant: "h5",
      color: "inherit",
      align: "left",
      noWrap: true,
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 21
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 11
      }
    }, __jsx("img", {
      width: "90px",
      height: "90px",
      src: "/PET.svg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 14
      }
    }))), __jsx("ul", {
      className: "nav justify-content-flex-end",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }
    }, __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 13
      }
    }, __jsx("a", {
      className: "nav-link",
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }
    }, "Sobre")), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 13
      }
    }, __jsx("a", {
      className: "nav-link",
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }
    }, "Petianos")), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 13
      }
    }, __jsx("a", {
      className: "nav-link",
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }
    }, "Pesquisas")), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 13
      }
    }, __jsx("a", {
      className: "nav-link",
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }
    }, "Contato")))));
  }

}

/***/ }),

/***/ "./pages/layouts/Main.js":
/*!*******************************!*\
  !*** ./pages/layouts/Main.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Main; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Container */ "@material-ui/core/Container");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_lottie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-lottie */ "react-lottie");
/* harmony import */ var react_lottie__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_lottie__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _11022_rocket_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../11022-rocket.json */ "./11022-rocket.json");
var _11022_rocket_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../11022-rocket.json */ "./11022-rocket.json", 1);
/* harmony import */ var _project_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../project.json */ "./project.json");
var _project_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../project.json */ "./project.json", 1);
/* harmony import */ var _Botao__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Botao */ "./pages/layouts/Botao.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "@material-ui/core/Toolbar");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_11__);
var _jsxFileName = "D:\\Users\\Daniel\\Documents\\PET Mec\xE2nica\\github\\site-pet-mecanica\\pages\\layouts\\Main.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












const theme = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["createMuiTheme"])({});
const styles = {
  paper: {
    height: 300,
    width: 300,
    backgroundColor: '#424556',
    color: '#fff'
  }
};
class Main extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: _11022_rocket_json__WEBPACK_IMPORTED_MODULE_8__,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };
    const {
      classes
    } = this.props;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_11___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }
    }), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1___default.a, {
      align: "center",
      style: {
        display: 'flex',
        margin: 'auto',
        flexWrap: 'wrap'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
      container: true,
      justify: "center",
      spacing: 2,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
      item: true,
      xs: 4,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 25
      }
    }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3___default.a, {
      style: {
        backgroundColor: '#424556'
      },
      className: classes.paper,
      elevation: 0,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 29
      }
    }, __jsx("div", {
      style: {
        padding: '50px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 33
      }
    }, __jsx("img", {
      style: {
        paddingBottom: '20px'
      },
      height: "90px",
      width: "90px",
      src: "/confetti2.svg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 33
      }
    })), __jsx("div", {
      style: {
        paddingTop: '20px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 33
      }
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
      variant: "h5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 37
      }
    }, "Eventos com o Grupo")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
      item: true,
      xs: 4,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 25
      }
    }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3___default.a, {
      className: classes.paper,
      elevation: 0,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 25
      }
    }, __jsx("div", {
      style: {
        padding: '50px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 33
      }
    }, __jsx("img", {
      style: {
        paddingBottom: '20px'
      },
      height: "90px",
      width: "90px",
      src: "/confetti2.svg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 33
      }
    })), __jsx("div", {
      style: {
        paddingTop: '20px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 33
      }
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
      variant: "h5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 37
      }
    }, "Feira de Profiss\xF5es")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
      item: true,
      xs: 4,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 25
      }
    }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3___default.a, {
      className: classes.paper,
      elevation: 0,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 25
      }
    }, __jsx("div", {
      style: {
        padding: '50px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 33
      }
    }, __jsx("img", {
      style: {
        paddingBottom: '20px'
      },
      height: "90px",
      width: "90px",
      src: "/confetti2.svg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 33
      }
    })), __jsx("div", {
      style: {
        paddingTop: '20px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 33
      }
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
      variant: "h5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 37
      }
    }, "Cursos feitos pelos pr\xF3prios estudantes")))))), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1___default.a, {
      style: {
        display: 'flex',
        alignItems: 'center',
        padding: '56px 0',
        maxWidth: '1280px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 17
      }
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
      item: true,
      xs: 6,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 21
      }
    }, __jsx("img", {
      src: "/pet.jpg",
      className: "rounded float-left",
      style: {
        borderRadius: 'none',
        width: 'auto',
        height: 'auto',
        maxWidth: '500px',
        maxHeight: '600px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 21
      }
    })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
      item: true,
      xs: 6,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
      variant: "h6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 29
      }
    }, "O PET-MEC\xC2NICA DA ESCOLA POLIT\xC9CNICA DA USP"), __jsx("p", {
      className: "text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 29
      }
    }, "O PET-Mec\xE2nica foi criado em 1991, ao mesmo tempo que o PET-Mecatr\xF4nica e o extinto PET-Minas, sendo estes os tr\xEAs primeiros grupos PET da Escola Polit\xE9cnica da USP. "), __jsx(_Botao__WEBPACK_IMPORTED_MODULE_10__["default"], {
      value: "Saiba mais",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 29
      }
    }))), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1___default.a, {
      style: {
        display: 'flex',
        alignItems: 'center',
        padding: '56px 0',
        maxWidth: '1280px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 17
      }
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
      item: true,
      xs: 6,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
      variant: "h6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 29
      }
    }, "PRINCIPAIS ATIVIDADES DO PET-MEC\xC2NICA DA POLI-USP"), __jsx("p", {
      className: "text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 29
      }
    }, "Nas atividades desenvolvidas pelo PET-Mec\xE2nica busca-se sempre disseminar algum tipo de conhecimento ou conceito ao mesmo tempo em que se agregam outros conhecimentos e conceitos aos pr\xF3prios integrantes do grupo, o que faz com que os integrantes do PET desenvolvam uma postura diferenciada e treinem t\xE9cnicas pedag\xF3gicas:"), __jsx(_Botao__WEBPACK_IMPORTED_MODULE_10__["default"], {
      value: "Saiba mais",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 29
      }
    })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
      item: true,
      xs: 6,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 21
      }
    }, __jsx("img", {
      src: "/grupo.jpg",
      className: "rounded float-right",
      style: {
        borderRadius: 'none',
        width: 'auto',
        height: 'auto',
        maxWidth: '500px',
        maxHeight: '600px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 21
      }
    }))), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1___default.a, {
      style: {
        display: 'flex',
        alignItems: 'center',
        padding: '56px 0',
        maxWidth: '1280px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 17
      }
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
      item: true,
      xs: 6,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 21
      }
    }, __jsx("img", {
      src: "/jp.jpg",
      className: "rounded float-left",
      style: {
        borderRadius: 'none',
        width: 'auto',
        height: 'auto',
        maxWidth: '500px',
        maxHeight: '600px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 21
      }
    })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
      item: true,
      xs: 6,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
      variant: "h6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 29
      }
    }, "OS PETIANOS"), __jsx("p", {
      className: "text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 29
      }
    }, "Conhe\xE7a os alunos por tr\xE1s do PET-Mec\xE2nica"), __jsx(_Botao__WEBPACK_IMPORTED_MODULE_10__["default"], {
      value: "Saiba mais",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 29
      }
    }))), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1___default.a, {
      style: {
        display: 'flex',
        alignItems: 'center',
        padding: '56px 0',
        maxWidth: '1280px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 17
      }
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
      item: true,
      xs: 6,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
      variant: "h6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 29
      }
    }, "PROJETOS"), __jsx("p", {
      className: "text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 29
      }
    }, "Descubra os Projetos que est\xE3o em desenvolvimento"), __jsx(_Botao__WEBPACK_IMPORTED_MODULE_10__["default"], {
      value: "Saiba mais",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 29
      }
    })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
      item: true,
      xs: 6,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 21
      }
    }, __jsx(react_lottie__WEBPACK_IMPORTED_MODULE_7___default.a, {
      options: {
        animationData: _project_json__WEBPACK_IMPORTED_MODULE_9__
      },
      height: 300,
      width: 300,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 25
      }
    }))), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1___default.a, {
      style: {
        display: 'flex',
        alignItems: 'center',
        padding: '56px 0',
        maxWidth: '1280px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 17
      }
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
      item: true,
      xs: 6,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 21
      }
    }, __jsx(react_lottie__WEBPACK_IMPORTED_MODULE_7___default.a, {
      style: {
        float: 'left'
      },
      options: defaultOptions,
      height: 300,
      width: 300,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 26
      }
    })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
      item: true,
      xs: 6,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
      variant: "h6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 29
      }
    }, "PESQUISAS"), __jsx("p", {
      className: "text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 29
      }
    }, "Conhe\xE7a as Pesquisas que o PET Mec\xE2nica j\xE1 fez"), __jsx(_Botao__WEBPACK_IMPORTED_MODULE_10__["default"], {
      value: "Saiba mais",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 29
      }
    }))));
  }

}
Main = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["withStyles"])(styles)(Main);

/***/ }),

/***/ "./project.json":
/*!**********************!*\
  !*** ./project.json ***!
  \**********************/
/*! exports provided: v, fr, ip, op, w, h, nm, ddd, assets, layers, markers, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"v\":\"5.5.10\",\"fr\":30,\"ip\":0,\"op\":300,\"w\":450,\"h\":450,\"nm\":\"Track and accelerate the growth of your MSP\",\"ddd\":0,\"assets\":[],\"layers\":[{\"ddd\":0,\"ind\":1,\"ty\":3,\"nm\":\"Null 1\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":0,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[225,225,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[105,105,100],\"ix\":6}},\"ao\":0,\"ip\":0,\"op\":300,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":2,\"ty\":4,\"nm\":\"Shape Layer 1\",\"parent\":1,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0.59,\"ix\":10},\"p\":{\"a\":0,\"k\":[2.071,-26.201,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[-8.5,-22,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-59,10],[-21,11],[-20,-4],[-20,9],[-19,19]],\"o\":[[0,0],[59,-10],[21,-11],[20,4],[20,-9],[19,-19]],\"v\":[[-145,53],[-86,7],[-4,-41],[50,-52],[91,-81],[128,-97]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"tm\",\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.228],\"y\":[1]},\"o\":{\"x\":[0.762],\"y\":[0]},\"t\":258,\"s\":[0]},{\"t\":292,\"s\":[100]}],\"ix\":1},\"e\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.237],\"y\":[1]},\"o\":{\"x\":[0.906],\"y\":[-0.013]},\"t\":51,\"s\":[0]},{\"t\":94,\"s\":[100]}],\"ix\":2},\"o\":{\"a\":0,\"k\":0,\"ix\":3},\"m\":1,\"ix\":2,\"nm\":\"Trim Paths 1\",\"mn\":\"ADBE Vector Filter - Trim\",\"hd\":false},{\"ty\":\"gs\",\"o\":{\"a\":0,\"k\":100,\"ix\":9},\"w\":{\"a\":0,\"k\":2,\"ix\":10},\"g\":{\"p\":3,\"k\":{\"a\":0,\"k\":[0,0.427,0.929,0.008,0.496,0.306,0.684,0.502,0.992,0.08627450980392157,0.7490196078431373,0.9921568627450981],\"ix\":8}},\"s\":{\"a\":0,\"k\":[0,0],\"ix\":4},\"e\":{\"a\":0,\"k\":[100,0],\"ix\":5},\"t\":1,\"lc\":2,\"lj\":1,\"ml\":4,\"ml2\":{\"a\":0,\"k\":4,\"ix\":13},\"bm\":0,\"nm\":\"Gradient Stroke 1\",\"mn\":\"ADBE Vector Graphic - G-Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[1,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Shape 1\",\"np\":4,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":300,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":3,\"ty\":4,\"nm\":\"notification right curve 2 Outlines\",\"parent\":1,\"sr\":1,\"ks\":{\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":80,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":87,\"s\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":160,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":167,\"s\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":234,\"s\":[0]},{\"t\":241,\"s\":[100]}],\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[0,7.634,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[225,225,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[4.693,0]],\"o\":[[0,-4.694],[0,0]],\"v\":[[4.25,4.25],[-4.25,-4.25]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0,0,0,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":1,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[302.25,129.75],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":300,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":4,\"ty\":4,\"nm\":\"notification right curve 1 Outlines\",\"parent\":1,\"sr\":1,\"ks\":{\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":73,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":80,\"s\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":157,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":164,\"s\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":230,\"s\":[0]},{\"t\":237,\"s\":[100]}],\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[0,7.634,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[225,225,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[3.035,0]],\"o\":[[0,-3.037],[0,0]],\"v\":[[2.75,2.75],[-2.75,-2.75]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0,0,0,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":1,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[300.75,131.25],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":300,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":5,\"ty\":4,\"nm\":\"notification left curve 2 Outlines\",\"parent\":1,\"sr\":1,\"ks\":{\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":65,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":72,\"s\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":153,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":160,\"s\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":227,\"s\":[0]},{\"t\":234,\"s\":[100]}],\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[0,7.634,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[225,225,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-4.695,0]],\"o\":[[0,-4.694],[0,0]],\"v\":[[-4.25,4.25],[4.25,-4.25]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0,0,0,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":1,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[287.75,129.75],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":300,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":6,\"ty\":4,\"nm\":\"notification left curve 1 Outlines\",\"parent\":1,\"sr\":1,\"ks\":{\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":62,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":69,\"s\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":150,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":157,\"s\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":224,\"s\":[0]},{\"t\":231,\"s\":[100]}],\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[0,7.634,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[225,225,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-3.04,0]],\"o\":[[0,-3.037],[0,0]],\"v\":[[-2.75,2.75],[2.75,-2.75]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0,0,0,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":1,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[289.25,131.25],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":300,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":7,\"ty\":4,\"nm\":\"notification down curve Outlines\",\"parent\":1,\"sr\":1,\"ks\":{\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":55,\"s\":[0]},{\"t\":62,\"s\":[100]}],\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[0,7.634,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[225,225,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[1.104,0],[0,1.104]],\"o\":[[0,1.104],[-1.106,0],[0,0]],\"v\":[[2,-1],[0,1],[-2,-1]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0,0,0,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":1,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[295,147.5],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":300,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":8,\"ty\":4,\"nm\":\"notification base Outlines\",\"parent\":1,\"sr\":1,\"ks\":{\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":55,\"s\":[0]},{\"t\":62,\"s\":[100]}],\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[0,7.634,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[225,225,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,1.104],[0,0],[2.348,0.979],[1.379,0],[0,-1.381],[0,-2.703],[0,0],[1.104,0],[0,0]],\"o\":[[0,0],[0,-2.703],[0,-1.381],[-1.382,0],[-2.351,0.979],[0,0],[0,1.104],[0,0],[-1.105,0]],\"v\":[[6.5,5.5],[6.5,1],[2.5,-5],[0,-7.5],[-2.5,-5],[-6.5,1],[-6.5,5.5],[-8.5,7.5],[8.5,7.5]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0,0,0,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":1,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[295,139],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":300,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":9,\"ty\":4,\"nm\":\"Document\",\"parent\":1,\"sr\":1,\"ks\":{\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":40,\"s\":[0]},{\"t\":47,\"s\":[100]}],\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[0,0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[225,225,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0]],\"o\":[[0,0],[0,0]],\"v\":[[199.39,176.647],[208.39,176.647]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0,0,0,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":1,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0]],\"o\":[[0,0],[0,0]],\"v\":[[199.39,173.647],[208.39,173.647]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0,0,0,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":1,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 2\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0]],\"o\":[[0,0],[0,0]],\"v\":[[199.39,170.647],[208.39,170.647]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0,0,0,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":1,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 3\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":3,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0]],\"o\":[[0,0],[0,0]],\"v\":[[199.39,167.647],[208.39,167.647]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0,0,0,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":1,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 4\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":4,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0]],\"o\":[[0,0],[0,0]],\"v\":[[199.39,164.647],[203.89,164.647]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0,0,0,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":1,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 5\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":5,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0]],\"v\":[[-3,-3],[-3,3],[3,3]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0,0,0,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":1,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[209.39,160.647],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 6\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":6,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[8.5,11.5],[-8.5,11.5],[-8.5,-11.5],[2.5,-11.5],[8.5,-5.5]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0,0,0,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":1,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[203.89,169.147],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 7\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":7,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":300,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":10,\"ty\":4,\"nm\":\"users Outlines\",\"parent\":1,\"sr\":1,\"ks\":{\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":28,\"s\":[0]},{\"t\":35,\"s\":[100]}],\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[0,0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[225,225,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.778,0],[0,0],[-0.066,0.775],[-4.803,0],[-0.533,-6.238]],\"o\":[[0,0],[-0.778,0],[0.534,-6.238],[4.805,0],[0.066,0.775]],\"v\":[[8.017,5.583],[-8.017,5.583],[-9.361,4.148],[0,-5.583],[9.361,4.148]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0,0,0,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":1,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[156.89,206.917],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,-2.657],[2.658,0],[0,2.655],[-2.658,0]],\"o\":[[0,2.655],[-2.658,0],[0,-2.657],[2.658,0]],\"v\":[[4.81,0],[-0.001,4.81],[-4.809,0],[-0.001,-4.81]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0,0,0,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":1,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[156.89,193.06],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 2\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":300,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":11,\"ty\":4,\"nm\":\"solid circle 4 Outlines\",\"parent\":1,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[-137.524,88.524,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[97,304,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":77,\"s\":[100,100,100]},{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":83,\"s\":[120,120,100]},{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":89,\"s\":[100,100,100]},{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":196,\"s\":[100,100,100]},{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":202,\"s\":[120,120,100]},{\"t\":208,\"s\":[100,100,100]}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,4.418],[-4.418,0],[0,-4.418],[4.418,0]],\"o\":[[0,-4.418],[4.418,0],[0,4.418],[-4.418,0]],\"v\":[[-8,0],[0,-8],[8,0],[0,8]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.08627450980392157,0.7490196078431373,0.9921568627450981,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[97,304],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":300,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":12,\"ty\":4,\"nm\":\"chat dot 3 Outlines\",\"parent\":1,\"sr\":1,\"ks\":{\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":58,\"s\":[0]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":62,\"s\":[100]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":94,\"s\":[0]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":98,\"s\":[100]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":124,\"s\":[0]},{\"t\":128,\"s\":[100]}],\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[0,0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[225,225,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,-0.701],[0.701,0],[0,0.699],[-0.7,0]],\"o\":[[0,0.699],[-0.7,0],[0,-0.701],[0.701,0]],\"v\":[[1.268,0],[-0.001,1.268],[-1.269,0],[-0.001,-1.268]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0,0,0,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":1,\"ix\":5},\"lc\":1,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[255.35,150.833],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":300,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":13,\"ty\":4,\"nm\":\"chat dot 2 Outlines\",\"parent\":1,\"sr\":1,\"ks\":{\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":57,\"s\":[0]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":61,\"s\":[100]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":92,\"s\":[0]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":96,\"s\":[100]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":122,\"s\":[0]},{\"t\":126,\"s\":[100]}],\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[0,0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[225,225,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,-0.701],[0.701,0],[0,0.699],[-0.7,0]],\"o\":[[0,0.699],[-0.7,0],[0,-0.701],[0.701,0]],\"v\":[[1.268,0],[-0.001,1.268],[-1.268,0],[-0.001,-1.268]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0,0,0,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":1,\"ix\":5},\"lc\":1,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[250.277,150.833],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":300,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":14,\"ty\":4,\"nm\":\"chat dot 1 Outlines\",\"parent\":1,\"sr\":1,\"ks\":{\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":54,\"s\":[0]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":58,\"s\":[100]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":90,\"s\":[0]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":94,\"s\":[100]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":120,\"s\":[0]},{\"t\":124,\"s\":[100]}],\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[0,0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[225,225,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,-0.701],[0.701,0],[0,0.699],[-0.7,0]],\"o\":[[0,0.699],[-0.7,0],[0,-0.701],[0.701,0]],\"v\":[[1.268,0],[-0.001,1.268],[-1.268,0],[-0.001,-1.268]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0,0,0,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":1,\"ix\":5},\"lc\":1,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[245.204,150.833],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":300,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":15,\"ty\":4,\"nm\":\"Chat Background Outlines\",\"parent\":1,\"sr\":1,\"ks\":{\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"t\":49,\"s\":[0]},{\"t\":56,\"s\":[100]}],\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[0,0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[225,225,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,-4.381],[5.37,0],[1.06,0.324],[0,0],[0,0],[0,2.218],[-5.37,0]],\"o\":[[0,4.38],[-1.198,0],[0,0],[0,0],[-1.801,-1.44],[0,-4.381],[5.37,0]],\"v\":[[9.724,-1.05],[-0.001,6.883],[-3.406,6.382],[-8.994,8.984],[-6.805,4.615],[-9.723,-1.05],[-0.001,-8.984]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0,0,0,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":1,\"ix\":5},\"lc\":1,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[250.276,151.784],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":300,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":16,\"ty\":4,\"nm\":\"Line Chart 04 Outlines\",\"parent\":1,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[71.5,56.5,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[296.5,281.5,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833,0.771,0.833],\"y\":[1,0.726,1]},\"o\":{\"x\":[0.167,1,0.167],\"y\":[0,0,0]},\"t\":40,\"s\":[100,0,100]},{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":50.02,\"s\":[100,100,100]},{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[0.855,1,1]},\"o\":{\"x\":[0.333,0.96,0.333],\"y\":[0,-0.02,0]},\"t\":52.5,\"s\":[100,111,100]},{\"t\":55.259765625,\"s\":[100,100,100]}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[12,50.5],[-12,50.5],[-12,-50.5],[12,-50.5]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0,0,0,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":1,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[296.5,231],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":300,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":17,\"ty\":4,\"nm\":\"Line Chart 03 Outlines\",\"parent\":1,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[24.5,56.5,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[249.5,281.5,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833,0.771,0.833],\"y\":[1,0.726,1]},\"o\":{\"x\":[0.167,1,0.167],\"y\":[0,0,0]},\"t\":31,\"s\":[100,0,100]},{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":41.02,\"s\":[100,100,100]},{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[0.855,1,1]},\"o\":{\"x\":[0.333,0.96,0.333],\"y\":[0,-0.02,0]},\"t\":43.5,\"s\":[100,111,100]},{\"t\":46.259765625,\"s\":[100,100,100]}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[12,48],[-12,48],[-12,-48],[12,-48]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0,0,0,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":1,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[249.5,233.5],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":300,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":18,\"ty\":4,\"nm\":\"Line Chart 02 Outlines\",\"parent\":1,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[-21.5,56.5,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[203.5,281.5,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833,0.771,0.833],\"y\":[1,0.726,1]},\"o\":{\"x\":[0.167,1,0.167],\"y\":[0,0,0]},\"t\":22,\"s\":[100,0,100]},{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":32.02,\"s\":[100,100,100]},{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[0.855,1,1]},\"o\":{\"x\":[0.333,0.96,0.333],\"y\":[0,-0.02,0]},\"t\":34.5,\"s\":[100,111,100]},{\"t\":37.259765625,\"s\":[100,100,100]}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[12,32],[-12,32],[-12,-32],[12,-32]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0,0,0,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":1,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[203.5,249.5],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":300,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":19,\"ty\":4,\"nm\":\"Line Chart 01 Outlines\",\"parent\":1,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[-68.5,56.5,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[156.5,281.5,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833,0.771,0.833],\"y\":[1,0.726,1]},\"o\":{\"x\":[0.167,1,0.167],\"y\":[0,0,0]},\"t\":15,\"s\":[100,0,100]},{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":25.02,\"s\":[100,100,100]},{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[0.855,1,1]},\"o\":{\"x\":[0.333,0.96,0.333],\"y\":[0,-0.02,0]},\"t\":27.5,\"s\":[100,111,100]},{\"t\":30.259765625,\"s\":[100,100,100]}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[12,21.5],[-12,21.5],[-12,-21.5],[12,-21.5]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0,0,0,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":1,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[156.5,260],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":300,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":20,\"ty\":4,\"nm\":\"Layer 31 Outlines\",\"parent\":1,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[-118.619,-111.503,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[114.778,133.519,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":197,\"s\":[100,100,100]},{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":203,\"s\":[120,120,100]},{\"t\":209,\"s\":[100,100,100]}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-11.2,-12.197],[-1.126,26.442],[0,0]],\"o\":[[-12.197,11.2],[18.127,19.738],[0,0],[0,0]],\"v\":[[-18.618,-31.053],[-20.422,11.314],[31.622,-7.691],[1.663,-8.967]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0,0,0,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":1,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[113.128,138.525],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":300,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":21,\"ty\":4,\"nm\":\"pie chart 02 Outlines\",\"parent\":1,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[-99.015,-130.206,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[134.382,111.762,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":225,\"s\":[100,100,100]},{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":231,\"s\":[120,120,100]},{\"t\":237,\"s\":[100,100,100]}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[5.602,6.099],[0,0]],\"o\":[[0.326,-7.667],[0,0],[0,0]],\"v\":[[14.817,10.778],[6.943,-10.778],[-15.142,9.503]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0,0,0,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":1,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[134.531,111.762],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":300,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":22,\"ty\":4,\"nm\":\"pie chart 03 Outlines\",\"parent\":1,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[-117.926,-138.587,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[116.234,101.855,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":252,\"s\":[100,100,100]},{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":258,\"s\":[120,120,100]},{\"t\":264,\"s\":[100,100,100]}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[12.199,-11.203]],\"o\":[[0,0],[-11.2,-12.197],[0,0]],\"v\":[[-0.902,16.644],[21.184,-3.637],[-21.184,-5.441]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0,0,0,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":1,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[116.234,100.204],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":3,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":300,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":23,\"ty\":4,\"nm\":\"Main Browser Outlines 2\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[226.89,193.146,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[101.621,80.074,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[129,129,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0]],\"o\":[[0,0],[0,0]],\"v\":[[2.5,25.597],[200.743,25.597]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0,0,0,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":1,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[9.528,0],[0,0],[0,9.52],[0,0],[-9.529,0],[0,0],[0,-9.52]],\"o\":[[0,9.52],[0,0],[-9.529,0],[0,0],[0,-9.52],[0,0],[9.528,0],[0,0]],\"v\":[[99.122,60.335],[81.883,77.574],[-81.883,77.574],[-99.122,60.335],[-99.122,-60.335],[-81.883,-77.574],[81.883,-77.574],[99.122,-60.335]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0,0,0,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":1,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[101.621,80.074],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 2\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":302,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":24,\"ty\":4,\"nm\":\"Right Line Outlines\",\"parent\":1,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[27.655,0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[225,225,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0]],\"o\":[[0,0],[0,0]],\"v\":[[350.5,168.996],[350.5,167]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"gs\",\"o\":{\"a\":0,\"k\":100,\"ix\":9},\"w\":{\"a\":0,\"k\":1,\"ix\":10},\"g\":{\"p\":3,\"k\":{\"a\":0,\"k\":[0.059,0.425,0.425,0.425,0.526,0.597,0.597,0.597,0.992,0.769,0.769,0.769],\"ix\":8}},\"s\":{\"a\":0,\"k\":[0,0],\"ix\":4},\"e\":{\"a\":0,\"k\":[100,0],\"ix\":5},\"t\":1,\"lc\":1,\"lj\":1,\"ml\":10,\"ml2\":{\"a\":0,\"k\":10,\"ix\":13},\"bm\":0,\"nm\":\"Gradient Stroke 1\",\"mn\":\"ADBE Vector Graphic - G-Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[5.825,-0.501]],\"o\":[[0,0],[0,13.534],[0,0]],\"v\":[[6.71,-44.431],[6.71,27.445],[-6.711,44.431]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"gs\",\"o\":{\"a\":0,\"k\":100,\"ix\":9},\"w\":{\"a\":0,\"k\":1,\"ix\":10},\"g\":{\"p\":3,\"k\":{\"a\":0,\"k\":[0.059,0.425,0.425,0.425,0.526,0.597,0.597,0.597,0.992,0.769,0.769,0.769],\"ix\":8}},\"s\":{\"a\":0,\"k\":[0,0],\"ix\":4},\"e\":{\"a\":0,\"k\":[100,0],\"ix\":5},\"t\":1,\"lc\":1,\"lj\":1,\"ml\":10,\"ml2\":{\"a\":0,\"k\":10,\"ix\":13},\"bm\":0,\"d\":[{\"n\":\"d\",\"nm\":\"dash\",\"v\":{\"a\":0,\"k\":4.092,\"ix\":1}},{\"n\":\"g\",\"nm\":\"gap\",\"v\":{\"a\":0,\"k\":4.092,\"ix\":2}},{\"n\":\"o\",\"nm\":\"offset\",\"v\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":0,\"s\":[3]},{\"t\":300,\"s\":[145]}],\"ix\":7}}],\"nm\":\"Gradient Stroke 1\",\"mn\":\"ADBE Vector Graphic - G-Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[343.79,215.48],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 2\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-0.873,-0.046]],\"o\":[[0.428,0],[0,0]],\"v\":[[-0.996,-0.053],[0.996,0.053]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"gs\",\"o\":{\"a\":0,\"k\":100,\"ix\":9},\"w\":{\"a\":0,\"k\":1,\"ix\":10},\"g\":{\"p\":3,\"k\":{\"a\":0,\"k\":[0.059,0.425,0.425,0.425,0.526,0.597,0.597,0.597,0.992,0.769,0.769,0.769],\"ix\":8}},\"s\":{\"a\":0,\"k\":[0,0],\"ix\":4},\"e\":{\"a\":0,\"k\":[100,0],\"ix\":5},\"t\":1,\"lc\":1,\"lj\":1,\"ml\":10,\"ml2\":{\"a\":0,\"k\":10,\"ix\":13},\"bm\":0,\"nm\":\"Gradient Stroke 1\",\"mn\":\"ADBE Vector Graphic - G-Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[331.996,259.891],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 3\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":3,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":300,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":25,\"ty\":4,\"nm\":\"solid circle 3 Outlines\",\"parent\":1,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[153.37,-75.2,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[357.5,154.5,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,2.485],[-2.485,0],[0,-2.485],[2.485,0]],\"o\":[[0,-2.485],[2.485,0],[0,2.485],[-2.485,0]],\"v\":[[-4.5,0],[0,-4.5],[4.5,0],[0,4.5]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.08627450980392157,0.7490196078431373,0.9921568627450981,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[357.5,154.5],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":300,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":26,\"ty\":4,\"nm\":\"solid circle 2 Outlines\",\"parent\":1,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[13.024,-159.925,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[228.5,97.5,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":12,\"s\":[100,100,100]},{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":18,\"s\":[120,120,100]},{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":24,\"s\":[100,100,100]},{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":153,\"s\":[100,100,100]},{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":159,\"s\":[120,120,100]},{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":165,\"s\":[100,100,100]},{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":268,\"s\":[100,100,100]},{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":274,\"s\":[120,120,100]},{\"t\":280,\"s\":[100,100,100]}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,3.59],[-3.59,0],[0,-3.59],[3.59,0]],\"o\":[[0,-3.59],[3.59,0],[0,3.59],[-3.59,0]],\"v\":[[-6.5,0],[0,-6.5],[6.5,0],[0,6.5]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.08627450980392157,0.7490196078431373,0.9921568627450981,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[228.5,97.5],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":300,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":27,\"ty\":4,\"nm\":\"solid circle 1 Outlines\",\"parent\":1,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[98.5,104.071,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[323.5,300.5,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":130,\"s\":[100,100,100]},{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":136,\"s\":[120,120,100]},{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":142,\"s\":[100,100,100]},{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":284,\"s\":[100,100,100]},{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"t\":290,\"s\":[120,120,100]},{\"t\":296,\"s\":[100,100,100]}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,5.247],[-5.247,0],[0,-5.247],[5.247,0]],\"o\":[[0,-5.247],[5.247,0],[0,5.247],[-5.247,0]],\"v\":[[-9.5,0],[0,-9.5],[9.5,0],[0,9.5]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.08627450980392157,0.7490196078431373,0.9921568627450981,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[323.5,300.5],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":300,\"st\":0,\"bm\":0}],\"markers\":[]}");

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Users\Daniel\Documents\PET Mecânica\github\site-pet-mecanica\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/Container":
/*!**********************************************!*\
  !*** external "@material-ui/core/Container" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Container");

/***/ }),

/***/ "@material-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "@material-ui/core/List":
/*!*****************************************!*\
  !*** external "@material-ui/core/List" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),

/***/ "@material-ui/core/Paper":
/*!******************************************!*\
  !*** external "@material-ui/core/Paper" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "@material-ui/core/Toolbar":
/*!********************************************!*\
  !*** external "@material-ui/core/Toolbar" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/colors":
/*!*******************************************!*\
  !*** external "@material-ui/core/colors" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons/Facebook":
/*!**********************************************!*\
  !*** external "@material-ui/icons/Facebook" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Facebook");

/***/ }),

/***/ "@material-ui/icons/GitHub":
/*!********************************************!*\
  !*** external "@material-ui/icons/GitHub" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/GitHub");

/***/ }),

/***/ "@material-ui/icons/Instagram":
/*!***********************************************!*\
  !*** external "@material-ui/icons/Instagram" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Instagram");

/***/ }),

/***/ "@material-ui/icons/LinkedIn":
/*!**********************************************!*\
  !*** external "@material-ui/icons/LinkedIn" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/LinkedIn");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-lottie":
/*!*******************************!*\
  !*** external "react-lottie" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-lottie");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvbGF5b3V0cy9Cb3Rhby5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9sYXlvdXRzL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9sYXlvdXRzL0hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9sYXlvdXRzL0hlYWRlclRvb2xiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvbGF5b3V0cy9NYWluLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0ZhY2Vib29rXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0dpdEh1YlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9JbnN0YWdyYW1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTGlua2VkSW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWxvdHRpZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwibmFtZXMiOlsiVGl0bGUiLCJzdHlsZWQiLCJoMSIsInRoZW1lIiwiY29sb3JzIiwicHJpbWFyeSIsIkhvbWVQYWdlIiwiQ29tcG9uZW50IiwicmVuZGVyIiwicGFkZGluZyIsImNyZWF0ZU11aVRoZW1lIiwic3R5bGVzIiwicm9vdCIsImZvbnRGYW1pbHkiLCJMZXR0ZXJTcGFjaW5nIiwiY29sb3IiLCJwYWxldHRlIiwiZ2V0Q29udHJhc3RUZXh0IiwicmVkIiwiYmFja2dyb3VuZENvbG9yIiwibWFyZ2luIiwic3BhY2luZyIsIkJvdGFvIiwiY2xhc3NlcyIsInByb3BzIiwidmFsdWUiLCJ3aXRoU3R5bGVzIiwiRm9vdGVyIiwicGFkZGluZ0JvdHRvbSIsInBhZGRpbmdSaWdodCIsIkhlYWRlciIsImNvbnN0cnVjdG9yIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJoZWlnaHQiLCJ3aWR0aCIsImJvcmRlclJhZGl1cyIsIm1heFdpZHRoIiwibWF4SGVpZ2h0IiwiSGVhZGVyVG9vbGJhciIsInpJbmRleCIsInBvc2l0aW9uIiwibWluV2lkdGgiLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJwYXBlciIsIk1haW4iLCJkZWZhdWx0T3B0aW9ucyIsImxvb3AiLCJhdXRvcGxheSIsImFuaW1hdGlvbkRhdGEiLCJyb2NrZXQiLCJyZW5kZXJlclNldHRpbmdzIiwicHJlc2VydmVBc3BlY3RSYXRpbyIsImZsZXhXcmFwIiwicGFkZGluZ1RvcCIs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QzVKQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSx5RDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSx5RDs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG4iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTWFpbiBmcm9tICcuL2xheW91dHMvTWFpbidcclxuaW1wb3J0IEhlYWRlclRvb2xiYXIgZnJvbSAnLi9sYXlvdXRzL0hlYWRlclRvb2xiYXInXHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9sYXlvdXRzL0Zvb3RlcidcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuL2xheW91dHMvSGVhZGVyJ1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5cclxuY29uc3QgVGl0bGUgPSBzdHlsZWQuaDFgXHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMucHJpbWFyeX07XHJcbmBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWVQYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICByZW5kZXIoKXtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi4uL3B1YmxpYy9sb2dvLnBuZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+UEVUIE1lY8OibmljYTwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNzAwOzAsOTAwOzEsMTAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNzAwOzEsOTAwJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIj48L2xpbms+XHJcbiAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Bc2FwOml0YWwsd2dodEAwLDQwMDsxLDYwMCZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCIvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1SdWJpayZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCIvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Cb3dsYnkrT25lK1NDfFBhbGFucXVpbitEYXJrfFJ1YmlrK01vbm8rT25lJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIj48L2xpbms+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vc3RhY2twYXRoLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuNS4wL2Nzcy9ib290c3RyYXAubWluLmNzc1wiIGludGVncml0eT1cInNoYTM4NC05YUl0Mm5ScEMxMlVrOWdTOWJhRGw0MTFOUUFwRm1DMjZFd0FPSDhXZ1psNU1ZWXhGZmMrTmNQYjFkS0dqN1NrXCIgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIj48L2xpbms+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPEhlYWRlclRvb2xiYXI+PC9IZWFkZXJUb29sYmFyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyLWZsdWlkJyBzdHlsZT17e3BhZGRpbmc6ICcwJ319PlxyXG4gICAgICAgICAgICAgICAgPEhlYWRlcj48L0hlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxNYWluPjwvTWFpbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxGb290ZXI+PC9Gb290ZXI+XHJcblxyXG5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgeyBjcmVhdGVNdWlUaGVtZSwgd2l0aFN0eWxlcywgbWFrZVN0eWxlcywgVGhlbWVQcm92aWRlciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IHJlZCwgcHVycGxlIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzJztcclxuXHJcbmNvbnN0IHRoZW1lID0gY3JlYXRlTXVpVGhlbWUoe1xyXG5cclxufSk7XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcblxyXG4gICAgcm9vdDoge1xyXG4gICAgICAgIGZvbnRGYW1pbHk6ICdSb2JvdG8nLFxyXG4gICAgICAgIExldHRlclNwYWNpbmc6ICcwLjE1cmVtICFpbXBvcnRhbnQnLFxyXG4gICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmdldENvbnRyYXN0VGV4dChyZWRbNTAwXSksXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0ZGNjY2NicsXHJcbiAgICAgICAgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjREQ1MDVFJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcclxuXHJcbiAgICAgIH0sXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvdGFvIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHsgY2xhc3NlcyB9ID0gdGhpcy5wcm9wc1xyXG5cclxuXHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBzaXplPSdsYXJnZScgdmFyaWFudD1cIm91dGxpbmVkXCIgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkJvdGFvID0gd2l0aFN0eWxlcyhzdHlsZXMpKEJvdGFvKTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgVHlwb2dyYXBoeSwgQ29udGFpbmVyLCBMaXN0SXRlbSAgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IEdpdEh1Ykljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0dpdEh1Yic7XHJcbmltcG9ydCBGYWNlYm9va0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0ZhY2Vib29rJztcclxuaW1wb3J0IEluc3RhZ3JhbUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0luc3RhZ3JhbSc7XHJcbmltcG9ydCBMaW5rZWRJbkljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0xpbmtlZEluJztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCdcclxuaW1wb3J0IExpc3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb290ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIHJlbmRlcigpe1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICAgICAgPGZvb3RlciBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJyM0MjQ1NTYnfX0+XHJcbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPSdsZyc+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGp1c3RpZnk9J2NlbnRlcicgc3BhY2luZz17Mn0gc3R5bGU9e3twYWRkaW5nQm90dG9tOiAnMzBweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuPExpc3QgY29tcG9uZW50PSduYXZiYXInPlxyXG48TGlzdEl0ZW0+XHJcbjxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPlBST0pFVE9TPC9UeXBvZ3JhcGh5PlxyXG5cclxuPC9MaXN0SXRlbT5cclxuICAgIDxMaXN0SXRlbT5cclxuICAgIEZhbGEgU8OpcmlvXHJcbiAgICA8L0xpc3RJdGVtPlxyXG4gICAgPExpc3RJdGVtPlBvbGkgTXVuZGk8L0xpc3RJdGVtPlxyXG4gICAgPExpc3RJdGVtPkFwb3N0aWxhczwvTGlzdEl0ZW0+XHJcbiAgICA8TGlzdEl0ZW0+U0VSRVM8L0xpc3RJdGVtPlxyXG48L0xpc3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbjxMaXN0IGNvbXBvbmVudD0nbmF2YmFyJz5cclxuPExpc3RJdGVtPlxyXG48VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj5BUE9JTzwvVHlwb2dyYXBoeT5cclxuXHJcbjwvTGlzdEl0ZW0+XHJcbiAgICA8TGlzdEl0ZW0+XHJcbiAgICBQRVQgbm8gTWluaXN0w6lyaW8gZGEgRWR1Y2HDp8Ojb1xyXG4gICAgPC9MaXN0SXRlbT5cclxuICAgIDxMaXN0SXRlbT5EZXBhcnRhbWVudG8gZGUgRW5nZW5oYXJpYSBNZWPDom5pY2E8L0xpc3RJdGVtPlxyXG4gICAgPExpc3RJdGVtPkVzY29sYSBQb2xpdMOpY25pY2EgVVNQPC9MaXN0SXRlbT5cclxuICAgIDxMaXN0SXRlbT5Vbml2ZXJzaWRhZGUgZGUgU8OjbyBQYXVsbzwvTGlzdEl0ZW0+XHJcbjwvTGlzdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBhbGlnbj1cImNlbnRlclwiIGNvbG9yPVwiaW5pdGlhbFwiPkVzY29sYSBQb2xpdMOpY25pY2EgZGEgVVNQIFByw6lkaW8gZGUgRW5nLiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgTWVjw6JuaWNhLCBzYWxhIEhULTE3IGFvIGxhZG8gZGFzIG9maWNpbmFzIGRvIFBNUi4gQXYuIFByb2YuIE1lbGxvIE1vcmFlcywgMjIzMSAtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBDaWRhZGUgVW5pdmVyc2l0w6FyaWEtIENFUCAwNTUwOC0wMzAsIFPDo28gUGF1bG8gLSBTUDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBhbGlnbj0nY2VudGVyJyBjb2xvcj0naW5pdGlhbCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGI+UEVUIE1FQ8OCTklDQTwvYj4gLSAyMDIwIC0gVGVsZWZvbmU6ICgxMSkgMzA5MS05NjUzIC0gXHJcbiAgICAgICAgICAgICAgICAgICAgPGEgc3R5bGU9e3twYWRkaW5nUmlnaHQ6ICcxMHB4J319IGhyZWY9J2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9wZXRtZWNhbmljYSc+PEZhY2Vib29rSWNvbiBjb2xvcj0ncHJpbWFyeScvPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBzdHlsZT17e3BhZGRpbmdSaWdodDogJzEwcHgnfX0gaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vcGV0X21lY2FuaWNhL1wiPjxJbnN0YWdyYW1JY29uIGNvbG9yPSdwcmltYXJ5Jy8+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIHN0eWxlPXt7cGFkZGluZ1JpZ2h0OiAnMTBweCd9fSBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2NvbXBhbnkvcGV0bWVjYW5pY2EvXCI+PExpbmtlZEluSWNvbiBjb2xvcj1cInByaW1hcnlcIi8+PC9hPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2JvZHkyJyBhbGlnbj0nY2VudGVyJyBjb2xvcj0naW5pdGlhbCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBIb3N0ZWQgd2l0aCDinaQgYnkgPGEgaHJlZj0naHR0cHM6Ly9naXRodWIuY29tL2RhbmllbHZpdG9ycGQnPjxHaXRIdWJJY29uIHN0eWxlPXt7IGNvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU0KScgfX0gZm9udFNpemU9J3NtYWxsJz48L0dpdEh1Ykljb24+PC9hPiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lcidcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyJ1xyXG5pbXBvcnQgQm90YW8gZnJvbSAnLi9Cb3RhbydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlciBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICAgICAgPGhlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFja2dyb3VuZC1oZWFkZXIgc2l6ZS1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyIHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgcGFkZGluZzogJzU2cHggMCAwJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LWNvbnRlbnQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPkJlbS12aW5kbyBhbyBQRVQgTWVjw6JuaWNhPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPk8gUEVUIE1lY8OibmljYSDDqSB1bSBncnVwbyBxdWUgYWJyYcOnYSBwcm9qZXRvcyBwYXJhIHNlcmVtIGRlc2Vudm9sdmlkb3MgZW0gZXF1aXBlPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJvdGFvIHZhbHVlPVwiQ29tZWNlIGEgZXhwbG9yYXJcIj48L0JvdGFvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPScnIHN0eWxlPXt7cGFkZGluZzogJzQwcHggMjBweCcsaGVpZ2h0OiAnNjAwcHgnLCB3aWR0aDogJzYwMHB4JywgbWFyZ2luOiAnYXV0byd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvZ2FsZXJhLmpwZ1wiIGNsYXNzTmFtZT0ncm91bmRlZCBmbG9hdC1yaWdodCcgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJ25vbmUnLCB3aWR0aDogJ2F1dG8nLCBoZWlnaHQ6ICdhdXRvJywgbWF4V2lkdGg6ICc2MDBweCcsIG1heEhlaWdodDogJzYwMHB4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyJ1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbidcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSdcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyVG9vbGJhciBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxUb29sYmFyIHN0eWxlPXt7ekluZGV4OiAnMTAnLCBwb3NpdGlvbjogJ2Fic29sdXRlJywgcGFkZGluZzogJzBweCAyMHB4IDYwcHgnLCBtaW5XaWR0aDogJzEwMCUnLCBtYXhXaWR0aDogJzEwMDBweCcsIG1hcmdpbkxlZnQ6ICdhdXRvJywgbWFyZ2luUmlnaHQ6ICdhdXRvJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICBjb21wb25lbnQ9XCJoMlwiXHJcbiAgICAgICAgICB2YXJpYW50PVwiaDVcIlxyXG4gICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgIGFsaWduPSdsZWZ0J1xyXG4gICAgICAgICAgbm9XcmFwXHJcbiAgICAgICAgICBjbGFzc05hbWU9J3RpdGxlJ1xyXG4gICAgICAgID5cclxuICAgICAgICAgIDxhPjxpbWcgd2lkdGg9XCI5MHB4XCIgaGVpZ2h0PVwiOTBweFwiIHNyYz1cIi9QRVQuc3ZnXCIvPjwvYT5cclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdiBqdXN0aWZ5LWNvbnRlbnQtZmxleC1lbmRcIj5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIjXCI+U29icmU8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiI1wiPlBldGlhbm9zPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cIiNcIj5QZXNxdWlzYXM8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiI1wiPkNvbnRhdG88L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lcidcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCdcclxuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJ1xyXG5pbXBvcnQgeyBjcmVhdGVNdWlUaGVtZSwgd2l0aFN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbidcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSdcclxuaW1wb3J0IExvdHRpZSBmcm9tICdyZWFjdC1sb3R0aWUnXHJcbmltcG9ydCByb2NrZXQgZnJvbSAnLi4vLi4vMTEwMjItcm9ja2V0Lmpzb24nXHJcbmltcG9ydCBwcm9qZWN0IGZyb20gJy4uLy4uL3Byb2plY3QuanNvbidcclxuaW1wb3J0IEJvdGFvIGZyb20gJy4vQm90YW8nXHJcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXInXHJcblxyXG5jb25zdCB0aGVtZSA9IGNyZWF0ZU11aVRoZW1lKHtcclxuXHJcbn0pO1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG5cclxuICAgIHBhcGVyOiB7XHJcbiAgICAgICAgaGVpZ2h0OiAzMDAsXHJcbiAgICAgICAgd2lkdGg6IDMwMCxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjNDI0NTU2JyxcclxuICAgICAgICBjb2xvcjogJyNmZmYnXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW4gZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuXHJcbiAgICAgICAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICBhbmltYXRpb25EYXRhOiByb2NrZXQsXHJcbiAgICAgICAgICAgIHJlbmRlcmVyU2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvOiAneE1pZFlNaWQgc2xpY2UnLFxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgeyBjbGFzc2VzIH0gPSB0aGlzLnByb3BzXHJcblxyXG4gICAgICAgIHJldHVybihcclxuXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8VG9vbGJhcj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyIGFsaWduPSdjZW50ZXInIHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnLCBtYXJnaW46ICdhdXRvJywgZmxleFdyYXA6ICd3cmFwJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBqdXN0aWZ5PSdjZW50ZXInIHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQYXBlciBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJyM0MjQ1NTYnfX0gIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0gZWxldmF0aW9uPXswfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZzogJzUwcHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17e3BhZGRpbmdCb3R0b206ICcyMHB4J319IGhlaWdodD0nOTBweCcgd2lkdGg9JzkwcHgnIHNyYz0nL2NvbmZldHRpMi5zdmcnLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZ1RvcDogJzIwcHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g1Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRXZlbnRvcyBjb20gbyBHcnVwb1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+PC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQYXBlciAgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfSBlbGV2YXRpb249ezB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nOiAnNTBweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7cGFkZGluZ0JvdHRvbTogJzIwcHgnfX0gaGVpZ2h0PSc5MHB4JyB3aWR0aD0nOTBweCcgc3JjPScvY29uZmV0dGkyLnN2ZycvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nVG9wOiAnMjBweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGZWlyYSBkZSBQcm9maXNzw7Vlc1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+PC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQYXBlciAgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfSBlbGV2YXRpb249ezB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nOiAnNTBweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7cGFkZGluZ0JvdHRvbTogJzIwcHgnfX0gaGVpZ2h0PSc5MHB4JyB3aWR0aD0nOTBweCcgc3JjPScvY29uZmV0dGkyLnN2ZycvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nVG9wOiAnMjBweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3Vyc29zIGZlaXRvcyBwZWxvcyBwcsOzcHJpb3MgZXN0dWRhbnRlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT48L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPENvbnRhaW5lciBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIHBhZGRpbmc6ICc1NnB4IDAnLCBtYXhXaWR0aDogJzEyODBweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9wZXQuanBnXCIgY2xhc3NOYW1lPSdyb3VuZGVkIGZsb2F0LWxlZnQnIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICdub25lJywgd2lkdGg6ICdhdXRvJywgaGVpZ2h0OiAnYXV0bycsIG1heFdpZHRoOiAnNTAwcHgnLCBtYXhIZWlnaHQ6ICc2MDBweCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj5PIFBFVC1NRUPDgk5JQ0EgREEgRVNDT0xBIFBPTElUw4lDTklDQSBEQSBVU1A8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQnPk8gUEVULU1lY8OibmljYSBmb2kgY3JpYWRvIGVtIDE5OTEsIGFvIG1lc21vIHRlbXBvIHF1ZSBvIFBFVC1NZWNhdHLDtG5pY2EgZSBvIGV4dGludG8gUEVULU1pbmFzLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZW5kbyBlc3RlcyBvcyB0csOqcyBwcmltZWlyb3MgZ3J1cG9zIFBFVCBkYSBFc2NvbGEgUG9saXTDqWNuaWNhIGRhIFVTUC4gPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJvdGFvIHZhbHVlPSdTYWliYSBtYWlzJz48L0JvdGFvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPENvbnRhaW5lciBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIHBhZGRpbmc6ICc1NnB4IDAnLCBtYXhXaWR0aDogJzEyODBweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPlBSSU5DSVBBSVMgQVRJVklEQURFUyBETyBQRVQtTUVDw4JOSUNBIERBIFBPTEktVVNQPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0Jz5OYXMgYXRpdmlkYWRlcyBkZXNlbnZvbHZpZGFzIHBlbG8gUEVULU1lY8OibmljYSBidXNjYS1zZSBzZW1wcmUgZGlzc2VtaW5hciBhbGd1bSB0aXBvIGRlIGNvbmhlY2ltZW50byBvdSBjb25jZWl0byBhbyBtZXNtbyB0ZW1wbyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbSBxdWUgc2UgYWdyZWdhbSBvdXRyb3MgY29uaGVjaW1lbnRvcyBlIGNvbmNlaXRvcyBhb3MgcHLDs3ByaW9zIGludGVncmFudGVzIGRvIGdydXBvLCBvIHF1ZSBmYXogY29tIHF1ZSBvcyBpbnRlZ3JhbnRlcyBkbyBQRVQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzZW52b2x2YW0gdW1hIHBvc3R1cmEgZGlmZXJlbmNpYWRhIGUgdHJlaW5lbSB0w6ljbmljYXMgcGVkYWfDs2dpY2FzOjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3RhbyB2YWx1ZT0nU2FpYmEgbWFpcyc+PC9Cb3Rhbz5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvZ3J1cG8uanBnXCIgY2xhc3NOYW1lPSdyb3VuZGVkIGZsb2F0LXJpZ2h0JyBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnbm9uZScsIHdpZHRoOiAnYXV0bycsIGhlaWdodDogJ2F1dG8nLCBtYXhXaWR0aDogJzUwMHB4JywgbWF4SGVpZ2h0OiAnNjAwcHgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyIHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgcGFkZGluZzogJzU2cHggMCcsIG1heFdpZHRoOiAnMTI4MHB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2pwLmpwZ1wiIGNsYXNzTmFtZT0ncm91bmRlZCBmbG9hdC1sZWZ0JyBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnbm9uZScsIHdpZHRoOiAnYXV0bycsIGhlaWdodDogJ2F1dG8nLCBtYXhXaWR0aDogJzUwMHB4JywgbWF4SGVpZ2h0OiAnNjAwcHgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+T1MgUEVUSUFOT1M8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQnPkNvbmhlw6dhIG9zIGFsdW5vcyBwb3IgdHLDoXMgZG8gUEVULU1lY8OibmljYTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3RhbyB2YWx1ZT0nU2FpYmEgbWFpcyc+PC9Cb3Rhbz5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxDb250YWluZXIgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBwYWRkaW5nOiAnNTZweCAwJywgbWF4V2lkdGg6ICcxMjgwcHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj5QUk9KRVRPUzwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dCc+RGVzY3VicmEgb3MgUHJvamV0b3MgcXVlIGVzdMOjbyBlbSBkZXNlbnZvbHZpbWVudG88L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm90YW8gdmFsdWU9J1NhaWJhIG1haXMnPjwvQm90YW8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TG90dGllIG9wdGlvbnM9e3thbmltYXRpb25EYXRhOiBwcm9qZWN0fX0gaGVpZ2h0PXszMDB9IHdpZHRoPXszMDB9PjwvTG90dGllPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPENvbnRhaW5lciBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIHBhZGRpbmc6ICc1NnB4IDAnLCBtYXhXaWR0aDogJzEyODBweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgezxMb3R0aWUgc3R5bGU9e3tmbG9hdDogJ2xlZnQnfX0gb3B0aW9ucz17ZGVmYXVsdE9wdGlvbnN9IGhlaWdodD17MzAwfSB3aWR0aD17MzAwfT48L0xvdHRpZT59XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+UEVTUVVJU0FTPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0Jz5Db25oZcOnYSBhcyBQZXNxdWlzYXMgcXVlIG8gUEVUIE1lY8OibmljYSBqw6EgZmV6PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJvdGFvIHZhbHVlPSdTYWliYSBtYWlzJz48L0JvdGFvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5NYWluID0gd2l0aFN0eWxlcyhzdHlsZXMpKE1haW4pOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9GYWNlYm9va1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvR2l0SHViXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9JbnN0YWdyYW1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0xpbmtlZEluXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1sb3R0aWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==