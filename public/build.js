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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/boom.png */ \"./assets/boom.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/miss.png */ \"./assets/miss.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `*,\n*:before,\n*:after {\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-family: 'Permanent Marker', cursive;\n}\nbody {\n    background: #cae5ff;\n}\n#blur {\n    text-align: center;\n    font-size: 4rem;\n    color: white;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    background-color: black;\n    opacity: 0.5;\n    z-index: 0;\n}\n/*======================== BATTLEFIELD START ========================*/\n#battle-field {\n    text-align: center;\n    font-size: 2.5rem;\n}\n#battle-field h1 {\n    margin-bottom: 25px;\n}\n#battle-field h3 {\n    margin-top: 25px;\n    font-size: 1.5rem;\n}\n/*======================== BATTLEFIELD END ========================*/\n/*======================== FORM START ========================*/\nform {\n    position: absolute;\n    top: 25%;\n    left: 50%;\n    transform: translate(-50%, 0);\n    font-size: 4rem;\n    z-index: 1;\n    text-align: center;\n}\nform > * {\n    margin: 12px 0px;\n}\ninput {\n    font-size: 2rem;\n    width: 300px;\n    padding: 0.25em 0.5em;\n    border-radius: 0.25em;\n}\nbutton {\n    font-size: 1.5rem;\n    padding: 0.5em 1em;\n    border-radius: 0.25em;\n}\n#winner {\n    display: none;\n    font-size: 2rem;\n}\n/*======================== FORM END ========================*/\n/*======================== FIELDS START ========================*/\n@keyframes fade {\n    from {\n        opacity: 0;\n    }\n    to {\n        opacity: 1;\n    }\n}\n.fields {\n    display: flex;\n    gap: 200px;\n    justify-content: center;\n}\n#player-field,\n#bot-field {\n    display: grid;\n    grid-template-columns: repeat(10, 50px);\n    grid-template-rows: repeat(10, 50px);\n    background-color: #89bbfe;\n    border: 2px solid #6f8ab7;\n    animation-name: fade;\n    animation-duration: 2s;\n}\n#player-field > div,\n#bot-field > div {\n    border: 2px solid #6f8ab7;\n}\n#bot-field > div:hover {\n    background-color: brown !important ;\n    cursor: pointer;\n}\n/*======================== FIELDS END ========================*/\n\n/*======================== CELL STATES START ========================*/\n.attacked {\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n    background-size: cover;\n}\n.missed {\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n    background-size: cover;\n}\n.ship {\n    background-color: darkblue;\n}\n/*======================== CELL STATES END ========================*/\n/*======================== FOOTER START ========================*/\n#footer {\n    display: flex;\n    width: 100%;\n    /* padding: 1.75em 0em; */\n    justify-content: center;\n    align-items: center;\n}\n/*======================== FOOTER END ========================*/\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GameBoard)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n\n\nclass GameBoard {\n  constructor() {\n    this.battleField = this.createBattleField();\n    this.sunkShips = 0;\n  }\n  createBattleField() {\n    const battleField = new Array(10);\n    for (let i = 0; i < 10; i++) {\n      battleField[i] = [];\n      for (let j = 0; j < 10; j++) {\n        battleField[i][j] = { ship: null, hit: false };\n      }\n    }\n\n    return battleField;\n  }\n  getBattleField() {\n    return this.battleField;\n  }\n  receiveAttack(x, y) {\n    const cell = this.battleField[x][y];\n    if (!cell.ship) return (cell.hit = true);\n    cell.ship.hit();\n    cell.hit = true;\n    return cell.ship.isSunk() ? this.sunkShips++ : this.sunkShips;\n  }\n  placeShipsRandom() {\n    [5, 4, 3, 3, 2, 2].forEach((length) => {\n      const ship = new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](length);\n      let x = this.randomNum(length);\n      let y = this.randomNum(length);\n      let axis = Math.floor(Math.random() * 2);\n      for (let i = 0; i < length; i++) {\n        if (axis === 0) {\n          this.battleField[x][y + i].ship = ship;\n        } else {\n          this.battleField[x + i][y].ship = ship;\n        }\n      }\n    });\n  }\n  placeShips() {\n    const ship1 = new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](5);\n    const ship2 = new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](4);\n    const ship3 = new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](3);\n    const ship4 = new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](3);\n    const ship5 = new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](2);\n    const ship6 = new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](2);\n    const shipArr = [ship1, ship2, ship3, ship4, ship5, ship6];\n    for (let i = 0; i < shipArr.length; i++) {\n      let x = this.randomNum(shipArr[i].length);\n      let y = this.randomNum(shipArr[i].length);\n      let axis = Math.floor(Math.random() * 2) === 0 ? 'x' : 'y';\n      if (!this.isShip(x, y, shipArr[i].length, axis)) {\n        for (let j = 0; j < shipArr[i].length; j++) {\n          if (axis === 'x') {\n            this.battleField[x][y + j].ship = shipArr[i];\n          } else {\n            this.battleField[x + j][y].ship = shipArr[i];\n          }\n        }\n      } else {\n        i--;\n      }\n    }\n  }\n  isHit(x, y) {\n    return this.battleField[x][y].hit ? true : false;\n  }\n  isShip(x, y, length, axis) {\n    for (let i = 0; i < length; i++) {\n      if (axis === 'x') {\n        if (this.battleField[x][y + i].ship) return true;\n      } else {\n        if (this.battleField[x + i][y].ship) return true;\n      }\n    }\n    return false;\n  }\n  randomNum(length) {\n    let random = Math.floor(Math.random() * 10);\n    return random + length >= 10 ? this.randomNum(length) : random;\n  }\n  isShipsSunk() {\n    if (this.sunkShips === 6) return true;\n  }\n}\n\n\n//# sourceURL=webpack://battleship/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n\n\n\n\naddBlur();\nformHandler();\nconst player = new _player__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('');\nconst bot = new _player__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('bot');\nconst playerBoard = new _gameboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\nconst botBoard = new _gameboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\nplayerBoard.placeShips();\nconsole.log('player');\nbotBoard.placeShips();\nconsole.log('bot');\ngeneratePlayerGrid();\ngenerateBotGrid();\nconst playerGrid = document.getElementById('player-field');\nconst botGrid = document.getElementById('bot-field');\nfunction formHandler() {\n  const form = document.getElementById('start');\n  form.addEventListener('submit', (e) => {\n    e.preventDefault();\n    const name = document.getElementById('name').value;\n    player.name = name;\n    form.style.display = 'none';\n    removeBlur();\n    updateGrid(playerGrid, playerBoard);\n  });\n}\nfunction generatePlayerGrid() {\n  const fields = document.querySelector('.fields');\n  const player = document.createElement('div');\n  player.setAttribute('id', 'player-field');\n  fields.appendChild(player);\n  for (let i = 0; i < 10; i++) {\n    for (let j = 0; j < 10; j++) {\n      const playerDiv = document.createElement('div');\n\n      player.appendChild(playerDiv);\n      playerDiv.dataset.column = i;\n      playerDiv.dataset.row = j;\n    }\n  }\n}\nfunction generateBotGrid() {\n  const fields = document.querySelector('.fields');\n  const bot = document.createElement('div');\n  bot.setAttribute('id', 'bot-field');\n  fields.appendChild(bot);\n  for (let i = 0; i < 10; i++) {\n    for (let j = 0; j < 10; j++) {\n      const botDiv = document.createElement('div');\n\n      bot.appendChild(botDiv);\n      botDiv.addEventListener('click', (e) => attackHandler(e.target));\n      botDiv.dataset.column = i;\n      botDiv.dataset.row = j;\n    }\n  }\n}\nfunction updateGrid(grid, gameBoard) {\n  const children = grid.childNodes;\n  const board = gameBoard.getBattleField();\n  for (let i = 0; i < 10; i++) {\n    for (let j = 0; j < 10; j++) {\n      const cell = board[i][j];\n      let index = (i === 0 ? '' : i.toString()) + j.toString();\n      let child = children[index];\n      if (cell.ship && grid.getAttribute('id') === 'player-field') {\n        child.classList.add('ship');\n      }\n      if (cell.hit && cell.ship) {\n        child.classList.add('attacked');\n        child.classList.remove('ship');\n        child.style.pointerEvents = 'none';\n        continue;\n      }\n      if (cell.hit && !cell.ship) {\n        child.classList.add('missed');\n        child.classList.remove('ship');\n        child.style.pointerEvents = 'none';\n        continue;\n      }\n    }\n  }\n}\nfunction attackHandler(element) {\n  let x = element.dataset.column;\n  let y = element.dataset.row;\n\n  player.playerAttack(x, y, botBoard);\n  updateGrid(botGrid, botBoard);\n\n  bot.botAttack(playerBoard);\n  updateGrid(playerGrid, playerBoard);\n\n  if (playerBoard.isShipsSunk()) return showWinner(bot.name);\n  if (botBoard.isShipsSunk()) return showWinner(player.name);\n}\nfunction addBlur() {\n  const blur = document.createElement('div');\n  blur.setAttribute('id', 'blur');\n  document.body.append(blur);\n}\nfunction removeBlur() {\n  const blur = document.getElementById('blur');\n  document.body.removeChild(blur);\n}\nfunction showWinner(name) {\n  const form = document.getElementById('winner');\n  const winner = document.getElementById('winner-congrats');\n  addBlur();\n  form.style.display = 'block';\n  form.addEventListener('submit', (e) => {\n    e.preventDefault();\n    location.reload();\n  });\n  winner.textContent = `Congratulations captain ${name} won!`;\n}\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Player)\n/* harmony export */ });\nclass Player {\n  constructor(name) {\n    this.name = name;\n  }\n  playerAttack(x, y, enemyBoard) {\n    return enemyBoard.receiveAttack(x, y);\n  }\n  botAttack(enemyBoard) {\n    let x = Math.floor(Math.random() * 10);\n    let y = Math.floor(Math.random() * 10);\n    if (enemyBoard.isHit(x, y)) return this.botAttack(enemyBoard);\n    return enemyBoard.receiveAttack(x, y);\n  }\n}\n\n\n\n//# sourceURL=webpack://battleship/./src/player.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Ship)\n/* harmony export */ });\nclass Ship {\n  constructor(length) {\n    this.length = length;\n    this.hitCount = 0;\n  }\n  hit() {\n    this.hitCount = this.hitCount + 1;\n    return this.hitCount;\n  }\n  isSunk() {\n    return this.hitCount === this.length ? true : false;\n  }\n}\n\n\n//# sourceURL=webpack://battleship/./src/ship.js?");

/***/ }),

/***/ "./assets/boom.png":
/*!*************************!*\
  !*** ./assets/boom.png ***!
  \*************************/
/***/ ((module) => {

eval("module.exports = \"data:image/png;base64,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\";\n\n//# sourceURL=webpack://battleship/./assets/boom.png?");

/***/ }),

/***/ "./assets/miss.png":
/*!*************************!*\
  !*** ./assets/miss.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1b6f2f800f466d993d0c.png\";\n\n//# sourceURL=webpack://battleship/./assets/miss.png?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
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
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;