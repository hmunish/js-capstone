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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: Poppins, sans-serif;\r\n}\r\n\r\nmain {\r\n  width: 100%;\r\n  min-height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\nheader {\r\n  width: 80%;\r\n  padding: 10px 0;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n}\r\n\r\n.logo {\r\n  width: 20%;\r\n}\r\n\r\nheader ul {\r\n  list-style: none;\r\n  display: flex;\r\n  gap: 0 50px;\r\n}\r\n\r\nheader li {\r\n  font-size: 1.1rem;\r\n}\r\n\r\nli.active {\r\n  font-weight: 1000;\r\n  text-decoration: underline;\r\n}\r\n\r\n/* Article starts here */\r\n.article {\r\n  width: 80%;\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  gap: 50px 0;\r\n  padding: 100px 0;\r\n}\r\n\r\n.item-box {\r\n  flex-basis: 33%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  gap: 15px 0;\r\n}\r\n\r\n.item-box > img {\r\n  width: 50%;\r\n  height: 150px;\r\n}\r\n\r\n.item-box > h3 {\r\n  width: 50%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.item-box > p {\r\n  width: 50%;\r\n  text-align: right;\r\n}\r\n\r\nbutton.comments {\r\n  width: 50%;\r\n  padding: 5px 0;\r\n  background: none;\r\n  font-weight: 1000;\r\n  box-shadow: 5px 5px 3px;\r\n  border: 3px solid;\r\n}\r\n\r\n/* Article ends here */\r\n\r\n.foot-page {\r\n  text-align: center;\r\n  border-top: 1px solid #000;\r\n}\r\n\r\n.foot-page a {\r\n  text-decoration: none;\r\n}\r\n\r\n/* Comments popup starts here */\r\n\r\n.comments-popup {\r\n  width: 50%;\r\n  min-height: 95vh;\r\n  margin: auto;\r\n  /* position: fixed; */\r\n  top: 2%;\r\n  padding: 15px 0;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.popup-close-icon {\r\n  position: absolute;\r\n  top: 15px;\r\n  right: 25px;\r\n  font-size: 2rem;\r\n}\r\n\r\n.comments-popup > .wrapper {\r\n  width: 60%;\r\n  min-height: 90%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n\r\n  /* background-color: aqua; */\r\n}\r\n\r\n.movie-banner {\r\n  width: 100%;\r\n  height: 150px;\r\n}\r\n\r\n.movie-details-box {\r\n  width: 100%;\r\n  height: 110px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.movie-details-wrapper {\r\n  width: 100%;\r\n  display: grid;\r\n  grid-template-columns: auto auto;\r\n  grid-template-rows: auto auto;\r\n  gap: 15px 0;\r\n}\r\n\r\nh3.movie-details {\r\n  font-size: 1.5rem;\r\n}\r\n\r\np.movie-details {\r\n  font-weight: 700;\r\n}\r\n\r\n.comments-box {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 15px 0;\r\n  justify-content: space-between;\r\n}\r\n\r\n.comments-title {\r\n  font-size: 1rem;\r\n}\r\n\r\n.comments-wrapper {\r\n  width: 70%;\r\n}\r\n\r\n.comments-text {\r\n  margin: 3px 0;\r\n}\r\n\r\n.add-comment-box {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  gap: 15px 0;\r\n}\r\n\r\n.add-comment-title {\r\n  font-size: 0.9rem;\r\n}\r\n\r\nform.add-comment {\r\n  align-self: flex-start;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 15px;\r\n}\r\n\r\nform.add-comment > * {\r\n  border: 3px solid;\r\n  background: none;\r\n  font-weight: 1000;\r\n}\r\n\r\ninput::placeholder,\r\ntextarea::placeholder {\r\n  color: #000;\r\n  padding: 5px;\r\n}\r\n\r\n#userName {\r\n  width: 80%;\r\n}\r\n\r\n.submitComment {\r\n  width: 80%;\r\n  padding: 5px;\r\n  box-shadow: 5px 5px 3px;\r\n}\r\n\r\n/* Comments popup ends here */\r\n\r\n.dsp-none {\r\n  display: none;\r\n}\r\n\r\ni,\r\nbutton {\r\n  cursor: pointer;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://js-capstone/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://js-capstone/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://js-capstone/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://js-capstone/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://js-capstone/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://js-capstone/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://js-capstone/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://js-capstone/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://js-capstone/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://js-capstone/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/logo.png */ \"./assets/logo.png\");\n/* harmony import */ var _modules_fetchItems_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/fetchItems.js */ \"./src/modules/fetchItems.js\");\n/* harmony import */ var _modules_renderItems_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/renderItems.js */ \"./src/modules/renderItems.js\");\n/* harmony import */ var _modules_renderCommentPopup_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/renderCommentPopup.js */ \"./src/modules/renderCommentPopup.js\");\n/* harmony import */ var _modules_involvement_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/involvement.js */ \"./src/modules/involvement.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst mainLogo = document.querySelector(\".logo\");\r\nconst article = document.querySelector(\".article\");\r\n\r\nlet episodesData, likesObj;\r\n\r\n// Setting logo\r\nmainLogo.setAttribute(\"src\", _assets_logo_png__WEBPACK_IMPORTED_MODULE_1__);\r\n\r\n// Event listeners\r\nwindow.addEventListener(\"DOMContentLoaded\", async () => {\r\n  episodesData = await (0,_modules_fetchItems_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n  const likesData = await (0,_modules_involvement_js__WEBPACK_IMPORTED_MODULE_5__.getLikes)();\r\n  // Coverting likes array to object for accessibility\r\n  likesObj = {};\r\n  likesData.forEach((e) => {\r\n    likesObj[e.item_id] = e.likes;\r\n  });\r\n  (0,_modules_renderItems_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(article, episodesData, likesObj);\r\n});\r\n\r\n// Click event on article\r\narticle.addEventListener(\"click\", (e) => {\r\n  if (e.target.classList.contains(\"likeIcon\")) {\r\n    e.target.classList.toggle(\"fa-heart-o\");\r\n    e.target.classList.toggle(\"fa-heart\");\r\n    // Like feature will be added here\r\n    const parentItemBox = e.target.parentElement.parentElement;\r\n    const itemNo = Number(parentItemBox.getAttribute(\"data-itemno\"));\r\n    (0,_modules_involvement_js__WEBPACK_IMPORTED_MODULE_5__.updateLikeCount)(itemNo).then((res) => {\r\n      parentItemBox.querySelector(\"p\").innerHTML = `Likes ${\r\n        likesObj[itemNo] ? likesObj[itemNo] + 1 : 1\r\n      }`;\r\n    });\r\n  } else if (e.target.classList.contains(\"comments\")) {\r\n    const existingPopup = document.querySelector(\"dialog\");\r\n    existingPopup && existingPopup.remove();\r\n    const dataNo = e.target.parentElement.getAttribute(\"data-itemno\");\r\n    (0,_modules_involvement_js__WEBPACK_IMPORTED_MODULE_5__.getComments)(dataNo)\r\n      .then((res) => {\r\n        (0,_modules_renderCommentPopup_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(episodesData[dataNo], res);\r\n      })\r\n      .catch((err) => {\r\n        console.log(err);\r\n      });\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack://js-capstone/./src/index.js?");

/***/ }),

/***/ "./src/modules/fetchItems.js":
/*!***********************************!*\
  !*** ./src/modules/fetchItems.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nasync function fetchItems() {\n  try {\n    const res = await fetch('https://api.tvmaze.com/shows');\n    if (res.status !== 200) throw new Error('Error fetching data');\n    const data = await res.json();\n    const episodes = [data[0], data[1], data[2], data[3], data[4], data[5]];\n    return episodes;\n  } catch (err) {\n    return err;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchItems);\n\n//# sourceURL=webpack://js-capstone/./src/modules/fetchItems.js?");

/***/ }),

/***/ "./src/modules/involvement.js":
/*!************************************!*\
  !*** ./src/modules/involvement.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   appId: () => (/* binding */ appId),\n/* harmony export */   createComment: () => (/* binding */ createComment),\n/* harmony export */   getComments: () => (/* binding */ getComments),\n/* harmony export */   getLikes: () => (/* binding */ getLikes),\n/* harmony export */   updateLikeCount: () => (/* binding */ updateLikeCount)\n/* harmony export */ });\nconst appId = \"MEyKHZs5GQJjgTbCoZJe\";\r\n\r\nasync function createComment(appId, itemId, userName, userComment) {\r\n  try {\r\n    const res = await fetch(\r\n      `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments`,\r\n      {\r\n        method: \"POST\",\r\n        headers: {\r\n          \"Content-Type\": \"application/json\",\r\n        },\r\n        body: JSON.stringify({\r\n          item_id: itemId,\r\n          username: userName,\r\n          comment: userComment,\r\n        }),\r\n      }\r\n    );\r\n    if (!res.ok) throw new Error(\"Error creating comment for id \", itemId);\r\n    return res;\r\n  } catch (err) {\r\n    return err;\r\n  }\r\n}\r\n\r\nasync function getComments(itemId) {\r\n  try {\r\n    const res = await fetch(\r\n      `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/MEyKHZs5GQJjgTbCoZJe/comments?item_id=${itemId}`\r\n    );\r\n    if (!res.ok) throw new Error(\"Cannot get comment for id \", itemId);\r\n    const data = await res.json();\r\n    return data;\r\n  } catch (err) {\r\n    return err;\r\n  }\r\n}\r\n\r\nasync function getLikes() {\r\n  try {\r\n    const response = await fetch(\r\n      \"https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/MEyKHZs5GQJjgTbCoZJe/likes\"\r\n    );\r\n    if (!response.ok) throw new Error(\"Cannot get likes\");\r\n    const data = await response.json();\r\n    return data;\r\n  } catch (e) {\r\n    return e;\r\n  }\r\n}\r\n\r\nconst updateLikeCount = async (itemId) => {\r\n  try {\r\n    const fetchData = await fetch(\r\n      \"https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/MEyKHZs5GQJjgTbCoZJe/likes\",\r\n      {\r\n        method: \"POST\",\r\n        headers: {\r\n          \"Content-Type\": \"application/json\",\r\n        },\r\n        body: JSON.stringify({\r\n          item_id: itemId,\r\n        }),\r\n      }\r\n    );\r\n    if (!fetchData.ok) throw new Error(\"like cannot be add\");\r\n    return fetchData;\r\n  } catch (e) {\r\n    return e;\r\n  }\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://js-capstone/./src/modules/involvement.js?");

/***/ }),

/***/ "./src/modules/renderCommentPopup.js":
/*!*******************************************!*\
  !*** ./src/modules/renderCommentPopup.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _involvement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./involvement.js */ \"./src/modules/involvement.js\");\n\n\nfunction removeCommentPopup(e) {\n  e.target.removeEventListener(\"click\", removeCommentPopup);\n  document.querySelector(\"dialog\").remove();\n}\n\nfunction addComment(e) {\n  e.preventDefault();\n  const username = e.target.userName.value;\n  const user_comment = e.target.userComment.value;\n  const dataId = e.target.getAttribute(\"data-id\");\n\n  (0,_involvement_js__WEBPACK_IMPORTED_MODULE_0__.createComment)(_involvement_js__WEBPACK_IMPORTED_MODULE_0__.appId, dataId, username, user_comment).then((res) => {\n    const today = new Date();\n    const html = `<p class=\"comments-text\">${today.getFullYear()}-${\n      today.getMonth() + 1\n    }-${today.getDate()} ${username}: ${user_comment}`;\n    document\n      .querySelector(\".comments-wrapper\")\n      .insertAdjacentHTML(\"beforeend\", html);\n    e.target.reset();\n  });\n}\n\nfunction renderCommentPopup(dataObj, commentsArr) {\n  const html = `<dialog class=\"comments-popup\">\n  <i class=\"fa fa-close popup-close-icon\"></i>\n  <div class=\"wrapper\">\n    <img\n      src=\"${dataObj.image.original}\"\n      alt=\"\"\n      class=\"movie-banner\"\n    />\n    <div class=\"movie-details-box\">\n      <h3 class=\"movie-details\">${dataObj.name}</h3>\n      <div class=\"movie-details-wrapper\">\n        <p class=\"movie-details\">Average Runtime: ${dataObj.averageRuntime}</p>\n        <p class=\"movie-details\">Language: ${dataObj.language}</p>\n        <p class=\"movie-details\">Rating: ${dataObj.rating.average}</p>\n        <p class=\"movie-details\">Status: ${dataObj.status}</p>\n      </div>\n    </div>\n\n    <div class=\"comments-box\">\n      <h3 class=\"comments-title\">Comments (2)</h3>\n      <div class=\"comments-wrapper\">\n      </div>\n    </div>\n\n    <div class=\"add-comment-box\">\n      <h3 class=\"add-comment-title\">Add a comment</h3>\n      <form class=\"add-comment\" data-id=${dataObj.id - 1}>\n        <input\n          type=\"text\"\n          name=\"userName\"\n          id=\"userName\"\n          placeholder=\"Your name\"\n        />\n        <textarea\n          name=\"userComment\"\n          id=\"userComment\"\n          cols=\"30\"\n          rows=\"5\"\n          placeholder=\"Your insights\"\n        ></textarea>\n        <button type=\"submit\" class=\"submitComment\">Comment</button>\n      </form>\n    </div>\n  </div>\n</dialog>`;\n\n  document.body.insertAdjacentHTML(\"beforeend\", html);\n\n  // Adding comments for the popup\n  if (commentsArr.length > 0) {\n    const commentsSection = document.querySelector(\".comments-wrapper\");\n    let commentsHtml = \"\";\n    commentsArr.forEach((e) => {\n      commentsHtml += `<p class=\"comments-text\">${e.creation_date} ${e.username}: ${e.comment}</p>`;\n    });\n    commentsSection.insertAdjacentHTML(\"beforeend\", commentsHtml);\n  }\n\n  // Adding event listener for submitting comment form\n  const commentForm = document.querySelector(\".add-comment\");\n  commentForm.addEventListener(\"submit\", addComment);\n\n  //   Adding event listener on close icon for closing the popup on click\n  const closeIcon = document.querySelector(\".popup-close-icon\");\n  closeIcon.addEventListener(\"click\", removeCommentPopup);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderCommentPopup);\n\n\n//# sourceURL=webpack://js-capstone/./src/modules/renderCommentPopup.js?");

/***/ }),

/***/ "./src/modules/renderItems.js":
/*!************************************!*\
  !*** ./src/modules/renderItems.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderItems = async (parEle, dataArr, likeObj) => {\n  console.log(likeObj);\n  let html = \"\";\n  dataArr.forEach((e, c) => {\n    html += `<div class=\"item-box\" data-itemNo=\"${c}\">\n        <img src=\"${e.image.medium}\" alt=\"Item ${c}\">\n        <h3>${e.name}<i class=\"fa fa-heart-o likeIcon\"></i></h3>\n        <p>Likes ${likeObj[c] || 0}</p>\n        <button class=\"comments\">Comments</button>\n    </div>`;\n  });\n\n  parEle.innerHTML = html;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderItems);\n\n\n//# sourceURL=webpack://js-capstone/./src/modules/renderItems.js?");

/***/ }),

/***/ "./assets/logo.png":
/*!*************************!*\
  !*** ./assets/logo.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4735dde8350ec6fc661b.png\";\n\n//# sourceURL=webpack://js-capstone/./assets/logo.png?");

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