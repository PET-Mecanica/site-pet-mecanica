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
      href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
      rel: "stylesheet",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }
    }), __jsx("link", {
      href: "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap",
      rel: "stylesheet",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }
    }), __jsx("link", {
      href: "https://fonts.googleapis.com/css2?family=Asap:ital,wght@0,400;1,600&display=swap",
      rel: "stylesheet",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }
    }), __jsx("link", {
      href: "https://fonts.googleapis.com/css?family=Rubik&display=swap",
      rel: "stylesheet",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }
    }), __jsx("link", {
      href: "https://fonts.googleapis.com/css?family=Bowlby+One+SC|Palanquin+Dark|Rubik+Mono+One&display=swap",
      rel: "stylesheet",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
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
        lineNumber: 29,
        columnNumber: 17
      }
    })), __jsx(_layouts_HeaderToolbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 13
      }
    }), __jsx("div", {
      className: "container-fluid",
      style: {
        padding: '0',
        zIndex: '2'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 13
      }
    }, __jsx(_layouts_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }
    }), __jsx(_layouts_Main__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }
    })), __jsx("svg", {
      className: "svg-retangle-footer",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 13
      }
    }, __jsx("rect", {
      className: "retangle",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 21
      }
    })), __jsx(_layouts_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
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
    LetterSpacing: '0.15rem !important',
    color: theme.palette.getContrastText(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_3__["red"][500]),
    backgroundColor: '#B62638',
    '&:hover': {
      backgroundColor: '#A01F35'
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
      style: {
        color: '#000000 !important',
        fontFamily: 'Poppins',
        LetterSpacing: '0.15rem !important',
        backgroundColor: '#B62638',
        '&:hover': {
          backgroundColor: '#A01F35'
        },
        margin: theme.spacing(1)
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
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
        lineNumber: 18,
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
        lineNumber: 19,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a, {
      item: true,
      xs: 6,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_7___default.a, {
      component: "navbar",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 1
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 1
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      variant: "h6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 1
      }
    }, "PROJETOS")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 5
      }
    }, "Fala S\xE9rio"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 5
      }
    }, "Poli Mundi"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 5
      }
    }, "Apostilas"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 5
      }
    }, "SERES"))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a, {
      item: true,
      xs: 6,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 25
      }
    }, __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_7___default.a, {
      component: "navbar",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 1
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 1
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      variant: "h6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 1
      }
    }, "APOIO")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 5
      }
    }, "PET no Minist\xE9rio da Educa\xE7\xE3o"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 5
      }
    }, "Departamento de Engenharia Mec\xE2nica"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 5
      }
    }, "Escola Polit\xE9cnica USP"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 5
      }
    }, "Universidade de S\xE3o Paulo")))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      variant: "body2",
      align: "center",
      color: "initial",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 21
      }
    }, "Escola Polit\xE9cnica da USP Pr\xE9dio de Eng. Mec\xE2nica, sala HT-17 ao lado das oficinas do PMR. Av. Prof. Mello Moraes, 2231 - Cidade Universit\xE1ria- CEP 05508-030, S\xE3o Paulo - SP"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      variant: "body2",
      align: "center",
      color: "initial",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 21
      }
    }, __jsx("b", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
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
        lineNumber: 54,
        columnNumber: 21
      }
    }, __jsx(_material_ui_icons_Facebook__WEBPACK_IMPORTED_MODULE_3___default.a, {
      color: "primary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
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
        lineNumber: 55,
        columnNumber: 21
      }
    }, __jsx(_material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_4___default.a, {
      color: "primary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
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
        lineNumber: 56,
        columnNumber: 21
      }
    }, __jsx(_material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_5___default.a, {
      color: "primary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 108
      }
    }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      variant: "body2",
      align: "center",
      color: "initial",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 25
      }
    }, "Hosted with \u2764 by ", __jsx("a", {
      href: "https://github.com/danielvitorpd",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
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
        lineNumber: 60,
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
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__);
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
        lineNumber: 19,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "background-header size-header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }
    }), __jsx("svg", {
      className: "svg-retangle",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }
    }, __jsx("rect", {
      className: "retangle",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 21
      }
    })), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1___default.a, {
      className: "row justify-content-between",
      style: {
        display: 'flex',
        alignItems: 'center',
        paddingTop: '200px',
        paddingBottom: '120px',
        maxWidth: '1280px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
      item: true,
      xs: 5,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 21
      }
    }, __jsx("h3", {
      style: {
        fontSize: '1.4em',
        color: '#B62638'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 29
      }
    }, "Bem-vindo ao "), __jsx("h1", {
      style: {
        fontWeight: '600',
        fontSize: '4.5em'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 29
      }
    }, "PET Mec\xE2nica"), __jsx("h3", {
      style: {
        fontSize: '1.4em',
        fontWeight: '400'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 29
      }
    }, "O PET Mec\xE2nica \xE9 um grupo que abra\xE7a projetos para serem desenvolvidos em equipe"), __jsx(_Botao__WEBPACK_IMPORTED_MODULE_4__["default"], {
      value: "Comece a explorar",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 29
      }
    })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
      item: true,
      xs: 6,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "",
      style: {
        padding: '40px 0px',
        height: '600px',
        width: '600px',
        margin: 'auto'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 21
      }
    }, __jsx("img", {
      src: "/zuado.jpg",
      className: "float-right",
      style: {
        boxShadow: '2px',
        borderRadius: '0 !important',
        width: 'auto',
        height: 'auto',
        maxWidth: '600px',
        maxHeight: '600px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 25
      }
    })))));
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
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Container */ "@material-ui/core/Container");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\Users\\Daniel\\Documents\\PET Mec\xE2nica\\github\\site-pet-mecanica\\pages\\layouts\\HeaderToolbar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





class HeaderToolbar extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_1___default.a, {
      variant: "nav-bar",
      style: {
        zIndex: '10',
        position: 'absolute',
        minWidth: '100%',
        paddingTop: '40px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }
    }, __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_4___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_1___default.a, {
      style: {
        justifyContent: 'space-between',
        padding: '0 !important'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 11
      }
    }, __jsx("a", {
      className: "navbar-brand",
      href: "/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 11
      }
    }, __jsx("img", {
      width: "200px",
      src: "/logoPET.svg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 48
      }
    })), __jsx("ul", {
      className: "nav justify-content-flex-end",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }
    }, __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 13
      }
    }, __jsx("a", {
      className: "nav-link",
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }
    }, "Sobre")), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 13
      }
    }, __jsx("a", {
      className: "nav-link",
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }
    }, "Petianos")), __jsx("li", {
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
    }, "Pesquisas")), __jsx("li", {
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
    }, "Contato")))))));
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
    backgroundColor: '#1F1F1F',
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
        height: 300,
        width: 300,
        backgroundColor: '#1F1F1F',
        color: '#78787A'
      },
      className: classes.paper,
      elevation: 2,
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
        lineNumber: 57,
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
        lineNumber: 58,
        columnNumber: 33
      }
    })), __jsx("div", {
      style: {
        paddingTop: '20px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 33
      }
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
      variant: "h5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 37
      }
    }, "Eventos com o Grupo")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
      item: true,
      xs: 4,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 25
      }
    }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3___default.a, {
      style: {
        height: 300,
        width: 300,
        backgroundColor: '#1F1F1F',
        color: '#78787A'
      },
      className: classes.paper,
      elevation: 2,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 25
      }
    }, __jsx("div", {
      style: {
        padding: '50px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
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
        lineNumber: 74,
        columnNumber: 33
      }
    })), __jsx("div", {
      style: {
        paddingTop: '20px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 33
      }
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
      variant: "h5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 37
      }
    }, "Feira de Profiss\xF5es")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
      item: true,
      xs: 4,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 25
      }
    }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3___default.a, {
      style: {
        height: 300,
        width: 300,
        backgroundColor: '#1F1F1F',
        color: '#78787A'
      },
      className: classes.paper,
      elevation: 2,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 25
      }
    }, __jsx("div", {
      style: {
        padding: '50px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
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
        lineNumber: 90,
        columnNumber: 33
      }
    })), __jsx("div", {
      style: {
        paddingTop: '20px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 33
      }
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
      variant: "h5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 37
      }
    }, "Cursos feitos pelos pr\xF3prios estudantes")))))), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1___default.a, {
      className: "row justify-content-between",
      style: {
        display: 'flex',
        alignItems: 'center',
        padding: '80px 0',
        maxWidth: '1000px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 17
      }
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
      item: true,
      xs: 6,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
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
        lineNumber: 103,
        columnNumber: 21
      }
    })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
      item: true,
      xs: 5,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
      variant: "h6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 29
      }
    }, "O PET-MEC\xC2NICA DA ESCOLA POLIT\xC9CNICA DA USP"), __jsx("p", {
      className: "text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 29
      }
    }, "O PET-Mec\xE2nica foi criado em 1991, ao mesmo tempo que o PET-Mecatr\xF4nica e o extinto PET-Minas, sendo estes os tr\xEAs primeiros grupos PET da Escola Polit\xE9cnica da USP. "), __jsx(_Botao__WEBPACK_IMPORTED_MODULE_10__["default"], {
      value: "Saiba mais",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 29
      }
    }))), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1___default.a, {
      className: "row justify-content-between",
      style: {
        display: 'flex',
        alignItems: 'center',
        padding: '80px 0',
        maxWidth: '1000px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 17
      }
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
      item: true,
      xs: 5,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
      variant: "h6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 29
      }
    }, "PRINCIPAIS ATIVIDADES DO PET-MEC\xC2NICA DA POLI-USP"), __jsx("p", {
      className: "text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 29
      }
    }, "Nas atividades desenvolvidas pelo PET-Mec\xE2nica busca-se sempre disseminar algum tipo de conhecimento ou conceito ao mesmo tempo em que se agregam outros conhecimentos e conceitos aos pr\xF3prios integrantes do grupo, o que faz com que os integrantes do PET desenvolvam uma postura diferenciada e treinem t\xE9cnicas pedag\xF3gicas:"), __jsx(_Botao__WEBPACK_IMPORTED_MODULE_10__["default"], {
      value: "Saiba mais",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 29
      }
    })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
      item: true,
      xs: 6,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
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
        lineNumber: 123,
        columnNumber: 21
      }
    }))), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1___default.a, {
      className: "row justify-content-between",
      style: {
        display: 'flex',
        alignItems: 'center',
        padding: '80px 0',
        maxWidth: '1000px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 17
      }
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
      item: true,
      xs: 6,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
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
        lineNumber: 130,
        columnNumber: 21
      }
    })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
      item: true,
      xs: 5,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
      variant: "h6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 29
      }
    }, "OS PETIANOS"), __jsx("p", {
      className: "text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 29
      }
    }, "Conhe\xE7a os alunos por tr\xE1s do PET-Mec\xE2nica"), __jsx(_Botao__WEBPACK_IMPORTED_MODULE_10__["default"], {
      value: "Saiba mais",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 29
      }
    }))), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1___default.a, {
      className: "row justify-content-between",
      style: {
        display: 'flex',
        alignItems: 'center',
        padding: '80px 0',
        maxWidth: '1000px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 17
      }
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
      item: true,
      xs: 5,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
      variant: "h6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 29
      }
    }, "PROJETOS"), __jsx("p", {
      className: "text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 29
      }
    }, "Descubra os Projetos que est\xE3o em desenvolvimento"), __jsx(_Botao__WEBPACK_IMPORTED_MODULE_10__["default"], {
      value: "Saiba mais",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 29
      }
    })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
      item: true,
      xs: 6,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
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
        lineNumber: 148,
        columnNumber: 25
      }
    }))), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1___default.a, {
      className: "row justify-content-between",
      style: {
        display: 'flex',
        alignItems: 'center',
        padding: '80px 0',
        maxWidth: '1000px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 17
      }
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
      item: true,
      xs: 6,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
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
        lineNumber: 153,
        columnNumber: 26
      }
    })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
      item: true,
      xs: 5,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
      variant: "h6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 29
      }
    }, "PESQUISAS"), __jsx("p", {
      className: "text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 29
      }
    }, "Conhe\xE7a as Pesquisas que o PET Mec\xE2nica j\xE1 fez"), __jsx(_Botao__WEBPACK_IMPORTED_MODULE_10__["default"], {
      value: "Saiba mais",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvbGF5b3V0cy9Cb3Rhby5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9sYXlvdXRzL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9sYXlvdXRzL0hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9sYXlvdXRzL0hlYWRlclRvb2xiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvbGF5b3V0cy9NYWluLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0ZhY2Vib29rXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0dpdEh1YlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9JbnN0YWdyYW1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTGlua2VkSW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWxvdHRpZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwibmFtZXMiOlsiVGl0bGUiLCJzdHlsZWQiLCJoMSIsInRoZW1lIiwiY29sb3JzIiwicHJpbWFyeSIsIkhvbWVQYWdlIiwiQ29tcG9uZW50IiwicmVuZGVyIiwicGFkZGluZyIsInpJbmRleCIsImNyZWF0ZU11aVRoZW1lIiwic3R5bGVzIiwicm9vdCIsIkxldHRlclNwYWNpbmciLCJjb2xvciIsInBhbGV0dGUiLCJnZXRDb250cmFzdFRleHQiLCJyZWQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtYXJnaW4iLCJzcGFjaW5nIiwiQm90YW8iLCJjbGFzc2VzIiwicHJvcHMiLCJmb250RmFtaWx5IiwidmFsdWUiLCJ3aXRoU3R5bGVzIiwiRm9vdGVyIiwicGFkZGluZ0JvdHRvbSIsInBhZGRpbmdSaWdodCIsIkhlYWRlciIsImNvbnN0cnVjdG9yIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJwYWRkaW5nVG9wIiwibWF4V2lkdGgiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJoZWlnaHQiLCJ3aWR0aCIsImJveFNoYWRvdyIsImJvcmRlclJhZGl1cyIsIm1heEhlaWdodCIsIkhlYWRlclRvb2xiYXIiLCJwb3NpdGlvbiIsIm1pbldpZHRoIiwianVzdGlmeUNvbnRlbnQiLCJwYXBlciIsIk1haW4iLCJkZWZhdWx0T3B0aW9ucyIsImxvb3AiLCJhdXRvcGxheSIsImFuaW1hdGlvbkRhdGEiLCJyb2NrZXQiLCJyZW5kZXJlclNldHRpbmdzIiwicHJlc2Vy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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFETCxDQURKLEVBSUksTUFBQyw2REFBRDtBQUFNLFVBQUksTUFBVjtBQUFXLFFBQUUsRUFBRSxDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDUSxNQUFDLG1FQUFEO0FBQVksYUFBTyxFQUFDLElBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRFIsRUFFUTtBQUFHLGVBQVMsRUFBQyxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUVBRlIsRUFHUSxNQUFDLCtDQUFEO0FBQU8sV0FBSyxFQUFDLFlBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUhSLENBSkosQ0F6R0osQ0FGSjtBQXVISDs7QUF2SXVDO0FBMEk1Q0QsSUFBSSxHQUFHdEIsb0VBQVUsQ0FBQ2YsTUFBRCxDQUFWLENBQW1CcUMsSUFBbkIsQ0FBUCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcktBLDhDOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBNYWluIGZyb20gJy4vbGF5b3V0cy9NYWluJ1xyXG5pbXBvcnQgSGVhZGVyVG9vbGJhciBmcm9tICcuL2xheW91dHMvSGVhZGVyVG9vbGJhcidcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuL2xheW91dHMvRm9vdGVyJ1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vbGF5b3V0cy9IZWFkZXInXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcblxyXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5oMWBcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5wcmltYXJ5fTtcclxuYFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZVBhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIHJlbmRlcigpe1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiLi4vcHVibGljL2xvZ28ucG5nXCIgLz5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5QRVQgTWVjw6JuaWNhPC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwOzEsOTAwJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIi8+XHJcbiAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNzAwOzAsOTAwOzEsMTAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNzAwOzEsOTAwJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIj48L2xpbms+XHJcbiAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Bc2FwOml0YWwsd2dodEAwLDQwMDsxLDYwMCZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCIvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1SdWJpayZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCIvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Cb3dsYnkrT25lK1NDfFBhbGFucXVpbitEYXJrfFJ1YmlrK01vbm8rT25lJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIj48L2xpbms+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vc3RhY2twYXRoLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuNS4wL2Nzcy9ib290c3RyYXAubWluLmNzc1wiIGludGVncml0eT1cInNoYTM4NC05YUl0Mm5ScEMxMlVrOWdTOWJhRGw0MTFOUUFwRm1DMjZFd0FPSDhXZ1psNU1ZWXhGZmMrTmNQYjFkS0dqN1NrXCIgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIj48L2xpbms+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPEhlYWRlclRvb2xiYXI+PC9IZWFkZXJUb29sYmFyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyLWZsdWlkJyBzdHlsZT17e3BhZGRpbmc6ICcwJywgekluZGV4OiAnMid9fT5cclxuICAgICAgICAgICAgICAgIDxIZWFkZXI+PC9IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8TWFpbj48L01haW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInN2Zy1yZXRhbmdsZS1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cmVjdCBjbGFzc05hbWU9J3JldGFuZ2xlJz48L3JlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgPEZvb3Rlcj48L0Zvb3Rlcj5cclxuXHJcblxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCB7IGNyZWF0ZU11aVRoZW1lLCB3aXRoU3R5bGVzLCBtYWtlU3R5bGVzLCBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgcmVkLCBwdXJwbGUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMnO1xyXG5cclxuY29uc3QgdGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh7XHJcblxyXG59KTtcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuXHJcbiAgICByb290OiB7XHJcbiAgICAgICAgTGV0dGVyU3BhY2luZzogJzAuMTVyZW0gIWltcG9ydGFudCcsXHJcbiAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuZ2V0Q29udHJhc3RUZXh0KHJlZFs1MDBdKSxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjQjYyNjM4JyxcclxuICAgICAgICAnJjpob3Zlcic6IHtcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNBMDFGMzUnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG5cclxuICAgICAgfSxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm90YW8gZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuXHJcbiAgICAgICAgY29uc3QgeyBjbGFzc2VzIH0gPSB0aGlzLnByb3BzXHJcblxyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHNpemU9J2xhcmdlJyB2YXJpYW50PVwib3V0bGluZWRcIiBzdHlsZT17e2NvbG9yOiAnIzAwMDAwMCAhaW1wb3J0YW50JyxcclxuICAgICAgICBmb250RmFtaWx5OiAnUG9wcGlucycsXHJcbiAgICAgICAgTGV0dGVyU3BhY2luZzogJzAuMTVyZW0gIWltcG9ydGFudCcsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0I2MjYzOCcsXHJcbiAgICAgICAgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjQTAxRjM1JyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSx9fT5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy52YWx1ZX1cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5Cb3RhbyA9IHdpdGhTdHlsZXMoc3R5bGVzKShCb3Rhbyk7XHJcbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFR5cG9ncmFwaHksIENvbnRhaW5lciwgTGlzdEl0ZW0gIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCBHaXRIdWJJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9HaXRIdWInO1xyXG5pbXBvcnQgRmFjZWJvb2tJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9GYWNlYm9vayc7XHJcbmltcG9ydCBJbnN0YWdyYW1JY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9JbnN0YWdyYW0nO1xyXG5pbXBvcnQgTGlua2VkSW5JY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9MaW5rZWRJbic7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnXHJcbmltcG9ydCBMaXN0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9vdGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICByZW5kZXIoKXtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgICAgIDxmb290ZXI+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9J2xnJz5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIganVzdGlmeT0nY2VudGVyJyBzcGFjaW5nPXsyfSBzdHlsZT17e3BhZGRpbmdCb3R0b206ICczMHB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG48TGlzdCBjb21wb25lbnQ9J25hdmJhcic+XHJcbjxMaXN0SXRlbT5cclxuPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+UFJPSkVUT1M8L1R5cG9ncmFwaHk+XHJcblxyXG48L0xpc3RJdGVtPlxyXG4gICAgPExpc3RJdGVtPlxyXG4gICAgRmFsYSBTw6lyaW9cclxuICAgIDwvTGlzdEl0ZW0+XHJcbiAgICA8TGlzdEl0ZW0+UG9saSBNdW5kaTwvTGlzdEl0ZW0+XHJcbiAgICA8TGlzdEl0ZW0+QXBvc3RpbGFzPC9MaXN0SXRlbT5cclxuICAgIDxMaXN0SXRlbT5TRVJFUzwvTGlzdEl0ZW0+XHJcbjwvTGlzdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuPExpc3QgY29tcG9uZW50PSduYXZiYXInPlxyXG48TGlzdEl0ZW0+XHJcbjxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPkFQT0lPPC9UeXBvZ3JhcGh5PlxyXG5cclxuPC9MaXN0SXRlbT5cclxuICAgIDxMaXN0SXRlbT5cclxuICAgIFBFVCBubyBNaW5pc3TDqXJpbyBkYSBFZHVjYcOnw6NvXHJcbiAgICA8L0xpc3RJdGVtPlxyXG4gICAgPExpc3RJdGVtPkRlcGFydGFtZW50byBkZSBFbmdlbmhhcmlhIE1lY8OibmljYTwvTGlzdEl0ZW0+XHJcbiAgICA8TGlzdEl0ZW0+RXNjb2xhIFBvbGl0w6ljbmljYSBVU1A8L0xpc3RJdGVtPlxyXG4gICAgPExpc3RJdGVtPlVuaXZlcnNpZGFkZSBkZSBTw6NvIFBhdWxvPC9MaXN0SXRlbT5cclxuPC9MaXN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGFsaWduPVwiY2VudGVyXCIgY29sb3I9XCJpbml0aWFsXCI+RXNjb2xhIFBvbGl0w6ljbmljYSBkYSBVU1AgUHLDqWRpbyBkZSBFbmcuIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBNZWPDom5pY2EsIHNhbGEgSFQtMTcgYW8gbGFkbyBkYXMgb2ZpY2luYXMgZG8gUE1SLiBBdi4gUHJvZi4gTWVsbG8gTW9yYWVzLCAyMjMxIC1cclxuICAgICAgICAgICAgICAgICAgICAgICAgIENpZGFkZSBVbml2ZXJzaXTDoXJpYS0gQ0VQIDA1NTA4LTAzMCwgU8OjbyBQYXVsbyAtIFNQPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGFsaWduPSdjZW50ZXInIGNvbG9yPSdpbml0aWFsJz5cclxuICAgICAgICAgICAgICAgICAgICA8Yj5QRVQgTUVDw4JOSUNBPC9iPiAtIDIwMjAgLSBUZWxlZm9uZTogKDExKSAzMDkxLTk2NTMgLSBcclxuICAgICAgICAgICAgICAgICAgICA8YSBzdHlsZT17e3BhZGRpbmdSaWdodDogJzEwcHgnfX0gaHJlZj0naHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3BldG1lY2FuaWNhJz48RmFjZWJvb2tJY29uIGNvbG9yPSdwcmltYXJ5Jy8+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIHN0eWxlPXt7cGFkZGluZ1JpZ2h0OiAnMTBweCd9fSBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9wZXRfbWVjYW5pY2EvXCI+PEluc3RhZ3JhbUljb24gY29sb3I9J3ByaW1hcnknLz48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgc3R5bGU9e3twYWRkaW5nUmlnaHQ6ICcxMHB4J319IGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vY29tcGFueS9wZXRtZWNhbmljYS9cIj48TGlua2VkSW5JY29uIGNvbG9yPVwicHJpbWFyeVwiLz48L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nYm9keTInIGFsaWduPSdjZW50ZXInIGNvbG9yPSdpbml0aWFsJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhvc3RlZCB3aXRoIOKdpCBieSA8YSBocmVmPSdodHRwczovL2dpdGh1Yi5jb20vZGFuaWVsdml0b3JwZCc+PEdpdEh1Ykljb24gc3R5bGU9e3sgY29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTQpJyB9fSBmb250U2l6ZT0nc21hbGwnPjwvR2l0SHViSWNvbj48L2E+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJ1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXInXHJcbmltcG9ydCBCb3RhbyBmcm9tICcuL0JvdGFvJ1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgICAgICA8aGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kLWhlYWRlciBzaXplLWhlYWRlclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJzdmctcmV0YW5nbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cmVjdCBjbGFzc05hbWU9J3JldGFuZ2xlJz48L3JlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCIgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBwYWRkaW5nVG9wOiAnMjAwcHgnLCBwYWRkaW5nQm90dG9tOiAnMTIwcHgnLCBtYXhXaWR0aDogJzEyODBweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs1fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBzdHlsZT17e2ZvbnRTaXplOiAnMS40ZW0nLCBjb2xvcjogJyNCNjI2MzgnfX0+QmVtLXZpbmRvIGFvIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgc3R5bGU9e3tmb250V2VpZ2h0OiAnNjAwJywgZm9udFNpemU6ICc0LjVlbSd9fT5QRVQgTWVjw6JuaWNhPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBzdHlsZT17e2ZvbnRTaXplOiAnMS40ZW0nLCBmb250V2VpZ2h0OiAnNDAwJ319Pk8gUEVUIE1lY8OibmljYSDDqSB1bSBncnVwbyBxdWUgYWJyYcOnYSBwcm9qZXRvcyBwYXJhIHNlcmVtIGRlc2Vudm9sdmlkb3MgZW0gZXF1aXBlPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3RhbyB2YWx1ZT1cIkNvbWVjZSBhIGV4cGxvcmFyXCI+PC9Cb3Rhbz5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9Jycgc3R5bGU9e3twYWRkaW5nOiAnNDBweCAwcHgnLGhlaWdodDogJzYwMHB4Jywgd2lkdGg6ICc2MDBweCcsIG1hcmdpbjogJ2F1dG8nfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3p1YWRvLmpwZ1wiIGNsYXNzTmFtZT0nZmxvYXQtcmlnaHQnIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3hTaGFkb3c6ICcycHgnLCBib3JkZXJSYWRpdXM6ICcwICFpbXBvcnRhbnQnLCB3aWR0aDogJ2F1dG8nLCBoZWlnaHQ6ICdhdXRvJywgbWF4V2lkdGg6ICc2MDBweCcsIG1heEhlaWdodDogJzYwMHB4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufSIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXInXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJ1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5J1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lcidcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyVG9vbGJhciBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxUb29sYmFyIHZhcmlhbnQ9XCJuYXYtYmFyXCIgc3R5bGU9e3t6SW5kZXg6ICcxMCcsIHBvc2l0aW9uOiAnYWJzb2x1dGUnLCBtaW5XaWR0aDogJzEwMCUnLCBwYWRkaW5nVG9wOiAnNDBweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgPFRvb2xiYXIgc3R5bGU9e3tqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLCBwYWRkaW5nOiAnMCAhaW1wb3J0YW50J319PlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCIgaHJlZj1cIi9cIj48aW1nIHdpZHRoPVwiMjAwcHhcIiBzcmM9XCIvbG9nb1BFVC5zdmdcIi8+PC9hPlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXYganVzdGlmeS1jb250ZW50LWZsZXgtZW5kXCI+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiI1wiPlNvYnJlPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cIiNcIj5QZXRpYW5vczwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIjXCI+UGVzcXVpc2FzPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cIiNcIj5Db250YXRvPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXInXHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnXHJcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcidcclxuaW1wb3J0IHsgY3JlYXRlTXVpVGhlbWUsIHdpdGhTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nXHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknXHJcbmltcG9ydCBMb3R0aWUgZnJvbSAncmVhY3QtbG90dGllJ1xyXG5pbXBvcnQgcm9ja2V0IGZyb20gJy4uLy4uLzExMDIyLXJvY2tldC5qc29uJ1xyXG5pbXBvcnQgcHJvamVjdCBmcm9tICcuLi8uLi9wcm9qZWN0Lmpzb24nXHJcbmltcG9ydCBCb3RhbyBmcm9tICcuL0JvdGFvJ1xyXG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyJ1xyXG5cclxuY29uc3QgdGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh7XHJcblxyXG59KTtcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuXHJcbiAgICBwYXBlcjoge1xyXG4gICAgICAgIGhlaWdodDogMzAwLFxyXG4gICAgICAgIHdpZHRoOiAzMDAsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzFGMUYxRicsXHJcbiAgICAgICAgY29sb3I6ICcjZmZmJ1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xyXG4gICAgICAgICAgICBsb29wOiB0cnVlLFxyXG4gICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgYW5pbWF0aW9uRGF0YTogcm9ja2V0LFxyXG4gICAgICAgICAgICByZW5kZXJlclNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgcHJlc2VydmVBc3BlY3RSYXRpbzogJ3hNaWRZTWlkIHNsaWNlJyxcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IHsgY2xhc3NlcyB9ID0gdGhpcy5wcm9wc1xyXG5cclxuICAgICAgICByZXR1cm4oXHJcblxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPFRvb2xiYXI+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICAgICAgICAgICAgPENvbnRhaW5lciBhbGlnbj0nY2VudGVyJyBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4JywgbWFyZ2luOiAnYXV0bycsIGZsZXhXcmFwOiAnd3JhcCd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIganVzdGlmeT0nY2VudGVyJyBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGFwZXIgc3R5bGU9e3toZWlnaHQ6IDMwMCxcclxuICAgICAgICB3aWR0aDogMzAwLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMxRjFGMUYnLFxyXG4gICAgICAgIGNvbG9yOiAnIzc4Nzg3QSd9fSAgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfSBlbGV2YXRpb249ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nOiAnNTBweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7cGFkZGluZ0JvdHRvbTogJzIwcHgnfX0gaGVpZ2h0PSc5MHB4JyB3aWR0aD0nOTBweCcgc3JjPScvY29uZmV0dGkyLnN2ZycvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nVG9wOiAnMjBweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFdmVudG9zIGNvbSBvIEdydXBvXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT48L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFBhcGVyIHN0eWxlPXt7aGVpZ2h0OiAzMDAsXHJcbiAgICAgICAgd2lkdGg6IDMwMCxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMUYxRjFGJyxcclxuICAgICAgICBjb2xvcjogJyM3ODc4N0EnfX0gIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0gZWxldmF0aW9uPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZzogJzUwcHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17e3BhZGRpbmdCb3R0b206ICcyMHB4J319IGhlaWdodD0nOTBweCcgd2lkdGg9JzkwcHgnIHNyYz0nL2NvbmZldHRpMi5zdmcnLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZ1RvcDogJzIwcHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g1Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmVpcmEgZGUgUHJvZmlzc8O1ZXNcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UGFwZXIgc3R5bGU9e3toZWlnaHQ6IDMwMCxcclxuICAgICAgICB3aWR0aDogMzAwLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMxRjFGMUYnLFxyXG4gICAgICAgIGNvbG9yOiAnIzc4Nzg3QSd9fSAgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfSBlbGV2YXRpb249ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nOiAnNTBweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7cGFkZGluZ0JvdHRvbTogJzIwcHgnfX0gaGVpZ2h0PSc5MHB4JyB3aWR0aD0nOTBweCcgc3JjPScvY29uZmV0dGkyLnN2ZycvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nVG9wOiAnMjBweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3Vyc29zIGZlaXRvcyBwZWxvcyBwcsOzcHJpb3MgZXN0dWRhbnRlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT48L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWJldHdlZW5cIiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIHBhZGRpbmc6ICc4MHB4IDAnLCBtYXhXaWR0aDogJzEwMDBweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9wZXQuanBnXCIgY2xhc3NOYW1lPSdyb3VuZGVkIGZsb2F0LWxlZnQnIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICdub25lJywgd2lkdGg6ICdhdXRvJywgaGVpZ2h0OiAnYXV0bycsIG1heFdpZHRoOiAnNTAwcHgnLCBtYXhIZWlnaHQ6ICc2MDBweCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj5PIFBFVC1NRUPDgk5JQ0EgREEgRVNDT0xBIFBPTElUw4lDTklDQSBEQSBVU1A8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQnPk8gUEVULU1lY8OibmljYSBmb2kgY3JpYWRvIGVtIDE5OTEsIGFvIG1lc21vIHRlbXBvIHF1ZSBvIFBFVC1NZWNhdHLDtG5pY2EgZSBvIGV4dGludG8gUEVULU1pbmFzLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZW5kbyBlc3RlcyBvcyB0csOqcyBwcmltZWlyb3MgZ3J1cG9zIFBFVCBkYSBFc2NvbGEgUG9saXTDqWNuaWNhIGRhIFVTUC4gPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJvdGFvIHZhbHVlPSdTYWliYSBtYWlzJz48L0JvdGFvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWJldHdlZW5cIiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIHBhZGRpbmc6ICc4MHB4IDAnLCBtYXhXaWR0aDogJzEwMDBweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs1fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPlBSSU5DSVBBSVMgQVRJVklEQURFUyBETyBQRVQtTUVDw4JOSUNBIERBIFBPTEktVVNQPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0Jz5OYXMgYXRpdmlkYWRlcyBkZXNlbnZvbHZpZGFzIHBlbG8gUEVULU1lY8OibmljYSBidXNjYS1zZSBzZW1wcmUgZGlzc2VtaW5hciBhbGd1bSB0aXBvIGRlIGNvbmhlY2ltZW50byBvdSBjb25jZWl0byBhbyBtZXNtbyB0ZW1wbyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbSBxdWUgc2UgYWdyZWdhbSBvdXRyb3MgY29uaGVjaW1lbnRvcyBlIGNvbmNlaXRvcyBhb3MgcHLDs3ByaW9zIGludGVncmFudGVzIGRvIGdydXBvLCBvIHF1ZSBmYXogY29tIHF1ZSBvcyBpbnRlZ3JhbnRlcyBkbyBQRVQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzZW52b2x2YW0gdW1hIHBvc3R1cmEgZGlmZXJlbmNpYWRhIGUgdHJlaW5lbSB0w6ljbmljYXMgcGVkYWfDs2dpY2FzOjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3RhbyB2YWx1ZT0nU2FpYmEgbWFpcyc+PC9Cb3Rhbz5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvZ3J1cG8uanBnXCIgY2xhc3NOYW1lPSdyb3VuZGVkIGZsb2F0LXJpZ2h0JyBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnbm9uZScsIHdpZHRoOiAnYXV0bycsIGhlaWdodDogJ2F1dG8nLCBtYXhXaWR0aDogJzUwMHB4JywgbWF4SGVpZ2h0OiAnNjAwcHgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiIHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgcGFkZGluZzogJzgwcHggMCcsIG1heFdpZHRoOiAnMTAwMHB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2pwLmpwZ1wiIGNsYXNzTmFtZT0ncm91bmRlZCBmbG9hdC1sZWZ0JyBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnbm9uZScsIHdpZHRoOiAnYXV0bycsIGhlaWdodDogJ2F1dG8nLCBtYXhXaWR0aDogJzUwMHB4JywgbWF4SGVpZ2h0OiAnNjAwcHgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+T1MgUEVUSUFOT1M8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQnPkNvbmhlw6dhIG9zIGFsdW5vcyBwb3IgdHLDoXMgZG8gUEVULU1lY8OibmljYTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3RhbyB2YWx1ZT0nU2FpYmEgbWFpcyc+PC9Cb3Rhbz5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCIgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBwYWRkaW5nOiAnODBweCAwJywgbWF4V2lkdGg6ICcxMDAwcHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj5QUk9KRVRPUzwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dCc+RGVzY3VicmEgb3MgUHJvamV0b3MgcXVlIGVzdMOjbyBlbSBkZXNlbnZvbHZpbWVudG88L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm90YW8gdmFsdWU9J1NhaWJhIG1haXMnPjwvQm90YW8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TG90dGllIG9wdGlvbnM9e3thbmltYXRpb25EYXRhOiBwcm9qZWN0fX0gaGVpZ2h0PXszMDB9IHdpZHRoPXszMDB9PjwvTG90dGllPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWJldHdlZW5cIiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIHBhZGRpbmc6ICc4MHB4IDAnLCBtYXhXaWR0aDogJzEwMDBweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgezxMb3R0aWUgc3R5bGU9e3tmbG9hdDogJ2xlZnQnfX0gb3B0aW9ucz17ZGVmYXVsdE9wdGlvbnN9IGhlaWdodD17MzAwfSB3aWR0aD17MzAwfT48L0xvdHRpZT59XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+UEVTUVVJU0FTPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0Jz5Db25oZcOnYSBhcyBQZXNxdWlzYXMgcXVlIG8gUEVUIE1lY8OibmljYSBqw6EgZmV6PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJvdGFvIHZhbHVlPSdTYWliYSBtYWlzJz48L0JvdGFvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5NYWluID0gd2l0aFN0eWxlcyhzdHlsZXMpKE1haW4pOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9GYWNlYm9va1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvR2l0SHViXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9JbnN0YWdyYW1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0xpbmtlZEluXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1sb3R0aWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==