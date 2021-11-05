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

/***/ "./app/main.js":
/*!*********************!*\
  !*** ./app/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ \"./app/styles/style.css\");\n\n\n/*---------- VARIIABLES DECLARATION ----------*/\nconst BASEURL = \"http://localhost:3000\";\nconst errorDiv = document.getElementById(\"error-display\");\n\n//Nav-bar\nconst homeBtn = document.getElementById(\"home-nevBar\");\nconst homeDiv = document.querySelector(\".input-container\");\nconst statsNavBarBtn = document.getElementById(\"stats-nevBar\");\nconst statsDiv = document.getElementById(\"statistics\");\nconst usersBtn = document.getElementById(\"users-nevBar\");\nconst usersDiv = document.getElementById(\"usres-div\");\n\n//UserName\nconst loginBtn = document.getElementById(\"login-btn\");\nconst swichBtn = document.getElementById(\"swich-btn\");\nconst userNameInput = document.getElementById(\"userName-input\");\n\n//Answer\nconst urlInput = document.getElementById(\"url_input\");\nconst submitBtn = document.getElementById(\"submitBtn\");\nconst answerDiv = document.getElementById(\"answer\");\n\n//Stats\n// const statisticsDiv = document.getElementById(\"statistics\");\nconst statInput = document.getElementById(\"stat_input\");\nconst statsBtn = document.getElementById(\"statsBtn\");\nconst statsInfoDiv = document.getElementById(\"statistics-info\");\nconst idInfo = document.getElementById(\"id\");\nconst originalUrlInfo = document.getElementById(\"originalUrl\");\nconst redirectCountInfo = document.getElementById(\"redirectCount\");\nconst creationDateInfo = document.getElementById(\"creationDate\");\n\n//User managment\nconst helloHeader = document.getElementById(\"hello-user\");\n\n/*---------- EVENT LISTENERS ----------*/\nsubmitBtn.addEventListener(\"click\", postUrl);\nstatsBtn.addEventListener(\"click\", getStats);\n\nhomeBtn.addEventListener(\"click\", ()=> {\n  homeDiv.classList.toggle(\"hide\");\n  homeBtn.classList.toggle(\"active\");\n});\n\nstatsNavBarBtn.addEventListener(\"click\", ()=> {\n  statsDiv.classList.toggle(\"hide\");\n  statsNavBarBtn.classList.toggle(\"active\");\n});\n\nusersBtn.addEventListener(\"click\", ()=> {\n  if (!userNameInput.value) {\n    errorMessege(\"You must enter a username for this service\", errorDiv);\n    return;\n  }\n  usersDiv.classList.toggle(\"hide\");\n  usersBtn.classList.toggle(\"active\");\n  helloHeader.textContent = `Hello ${userNameInput.value} !`;\n})\n\n/*---------- NETWORK ----------*/\n//A url shortcut request\nasync function postUrl() {\n  try {\n    cleanStats();\n    const response = await axios.post(`${BASEURL}/api`, {\n      \"longUrl\" : urlInput.value\n    });\n    const shortUrl = response.data;\n\n    //Show answer = \n    answerDiv.style.display = \"block\";\n    answerDiv.textContent = `${shortUrl}`;\n    //Append close button\n    const closeAnsBtn = createElement(\"button\", \"❌\", \"close-btn\");\n    closeAnsBtn.addEventListener(\"click\", cleanAnswerUrl);\n    answerDiv.appendChild(closeAnsBtn);\n\n    urlInput.value = \"\";\n  } catch (error) {\n    errorMessege(error.response.data.error, errorDiv);\n    urlInput.value = \"\";\n  }\n}\n\n//Request statistics for short url\nasync function getStats() {\n  try {\n    cleanAnswerUrl();\n    cleanStats();\n    const shortUrl = statInput.value;\n    const splitUrlArr = shortUrl.split(\"/\");\n    const urlId = splitUrlArr[splitUrlArr.length -1];\n    const response = await axios.get(`${BASEURL}/statistic/${urlId}`);\n    const statsObj = response.data;\n\n    document.querySelectorAll(\".stats-label\").forEach((element)=> element.classList.toggle(\"hide\"));\n    creationDateInfo.textContent = `${statsObj.creationDate}`;\n    redirectCountInfo.textContent = `${statsObj.redirectCount}`;\n    originalUrlInfo.textContent = `${statsObj.originalUrl}`;\n    idInfo.textContent = `${statsObj.id} `;\n\n    statInput.value = \"\";\n  } catch (error) {\n    errorMessege(error.response.data.error, errorDiv);\n    statInput.value = \"\";\n  }\n}\n\n\n/*---------- ERROR HANDLER ----------*/\n//Display Error massege\nfunction errorMessege(messege, element) {\n  const errorElem = document.createElement('div');\n  errorElem.textContent = `Sorry ${messege}, please try again! ❌`;\n  errorElem.classList.add('error-messege');\n  element.appendChild(errorElem);\n  setTimeout(() => errorElem.remove(), 5000);\n}\n\n/*---------- DOM RELATED ----------*/\n//\nfunction createElement(tagName, textContent, className) {\n  const newElem = document.createElement(tagName);\n  newElem.textContent = textContent;\n  newElem.classList.add(className);\n  return newElem;\n}\n//Clean old information in stats area\nfunction cleanStats() {\n  document.querySelectorAll(\".stats-label\").forEach((element)=> element.classList.add(\"hide\"));\n  creationDateInfo.textContent = \"\";\n  redirectCountInfo.textContent = \"\";\n  originalUrlInfo.textContent = \"\";\n  idInfo.textContent = \"\";\n}\n//Clean old information in answer area\nfunction cleanAnswerUrl() {\n  answerDiv.style.display = \"none\";\n  answerDiv.textContent = \"\";\n}\n\n\n//# sourceURL=webpack://calc/./app/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./app/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./app/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Heebo&family=Oxygen&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n  font-family: 'Staatliches', cursive;\\r\\n  font-size: 16px;\\r\\n  color: #222;\\r\\n  background-color:#869296;\\r\\n  background-image: linear-gradient(315deg, #829196 0%, #c1cdd6 74%);\\r\\n  /* background-image: url(\\\"https://docrdsfx76ssb.cloudfront.net/static/1635458173/pages/wp-content/uploads/2019/03/linkshortening_mobile2.jpg\\\"); */\\r\\n  text-align: center;\\r\\n  line-height: 1.4em;\\r\\n}\\r\\n\\r\\nmain {\\r\\n  padding: 0;\\r\\n  margin-top: 40px;\\r\\n}\\r\\n\\r\\n/*---------- NAV-BAR ----------*/\\r\\nul {\\r\\n  list-style-type: none;\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  overflow: hidden;\\r\\n  background-color: #333;\\r\\n}\\r\\n\\r\\nli {\\r\\n  float: left;\\r\\n  border-right:1px solid #bbb;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\nli:last-child {\\r\\n  border-right: none;\\r\\n}\\r\\n\\r\\nli a {\\r\\n  display: block;\\r\\n  color: white;\\r\\n  text-align: center;\\r\\n  padding: 14px 16px;\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\nli a:hover:not(.active) {\\r\\n  background-color: #111;\\r\\n}\\r\\n\\r\\n.active {\\r\\n  background-color: #ffc421;\\r\\n}\\r\\n\\r\\n#login-btn, #swich-btn {\\r\\n  margin: 0.75em;\\r\\n  background-color: #ffc421;\\r\\n  cursor: pointer;\\r\\n\\tfont-size: 1em;\\r\\n\\tfont-family: 'Staatliches', cursive;\\r\\n\\tletter-spacing: 2px;\\r\\n\\tborder: 2px solid black;\\r\\n\\tbox-shadow: 0px 0px 0px rgba(0,0,0,0.4);\\r\\n}\\r\\n#login-btn:hover, #swich-btn:hover {\\r\\n  transform: translateY(-5px);\\r\\n\\tbox-shadow: 0px 10px 10px rgba(0,0,0,0.4);\\r\\n}\\r\\n\\r\\n#userName-input {\\r\\n  font-family: 'Staatliches', cursive;\\r\\n  font-size: 1em;\\r\\n  width: 15em;\\r\\n  height: 75%;\\r\\n  text-align: center;\\r\\n  border-radius: 5em;\\r\\n}\\r\\n/*---------- HEADERS ----------*/\\r\\nh1 {\\r\\n  font-family: 'Staatliches', cursive;\\r\\n  letter-spacing: 4px;\\r\\n  font-size: 3em;\\r\\n  color: whitesmoke;\\r\\n}\\r\\nh3 {\\r\\n  font-family: 'Staatliches', cursive;\\r\\n  letter-spacing: 4px;\\r\\n  font-size: 2.5em;\\r\\n  padding: 1%;\\r\\n  color:darkcyan;\\r\\n  margin-bottom: 0.5%;\\r\\n}\\r\\n\\r\\n/*---------- IMAGES ----------*/\\r\\n#logo {\\r\\n  float: left;\\r\\n  height: 3em;\\r\\n}\\r\\n\\r\\n/*---------- INPUT AREA ----------*/\\r\\n.input-container {\\r\\n  background-color: rgba(48, 136, 136, 0.5);\\r\\n  margin-top: 5%;\\r\\n  padding: 1%;\\r\\n}\\r\\nlegend {\\r\\n  font-family: 'Staatliches', cursive;\\r\\n  letter-spacing: 4px;\\r\\n  font-size: 2.5em;\\r\\n  padding: 1%;\\r\\n  color:darkcyan;\\r\\n  margin-bottom: 0.5%;\\r\\n}\\r\\n#url_input{\\r\\n  font-family: 'Staatliches', cursive;\\r\\n  font-size: 1.5em;\\r\\n  width: 50%;\\r\\n  height: 2em;\\r\\n  text-align: center;\\r\\n  padding: 5px;\\r\\n  border-radius: 5em;\\r\\n}\\r\\n\\r\\n/*---------- BUTTONS ----------*/\\r\\n.noselect {\\r\\n  -webkit-touch-callout: none;\\r\\n    -webkit-user-select: none;\\r\\n     -khtml-user-select: none;\\r\\n       -moz-user-select: none;\\r\\n        -ms-user-select: none;\\r\\n            user-select: none;\\r\\n\\t\\t-webkit-tap-highlight-color: transparent;\\r\\n}\\r\\n\\r\\n#submitBtn, #statsBtn, #custom-submitBtn {\\r\\n\\twidth: 150px;\\r\\n\\theight: 50px;\\r\\n\\tcursor: pointer;\\r\\n\\tfont-size: 20px;\\r\\n\\tfont-family: 'Staatliches', cursive;\\r\\n\\tletter-spacing: 5px;\\r\\n\\tbackground: #ffc421;\\r\\n\\tborder: 2px solid black;\\r\\n\\tbox-shadow: 0px 0px 0px rgba(0,0,0,0.4);\\r\\n\\ttransition: 500ms;\\r\\n}\\r\\n\\r\\n#submitBtn:after, #statsBtn:after, #custom-submitBtn:after {\\r\\n\\tcontent: '';\\r\\n\\tposition: absolute;\\r\\n\\ttransform: translateX(-55px) translateY(-40px);\\r\\n\\twidth: 25px;\\r\\n\\theight: 25px;\\r\\n\\tborder-radius: 50%;\\r\\n\\tbackground: transparent;\\r\\n\\tbox-shadow: 0px 0px 50px transparent;\\r\\n\\ttransition: 500ms;\\r\\n}\\r\\n\\r\\n#statsBtn:hover, #submitBtn:hover, #custom-submitBtn:hover {\\r\\n\\ttransform: translateY(-5px);\\r\\n\\tbox-shadow: 0px 10px 10px rgba(0,0,0,0.4);\\r\\n}\\r\\n\\r\\n#submitBtn:hover:after, #statsBtn:hover:after, #custom-submitBtn:hover::after {\\r\\n\\tbackground: white;\\r\\n\\tbox-shadow: 0px 0px 20px #ffc421, 0px 0px 30px #ffc421, inset 0px 0px 10px #ffc421;\\r\\n\\tanimation: spin 1s infinite linear;\\r\\n}\\r\\n\\r\\n@keyframes spin{\\r\\n\\t25%{transform: translateX(-25px) translateY(-35px);\\r\\n\\t\\t\\twidth: 15px;\\r\\n\\t\\t\\theight: 15px;}\\r\\n\\t50% {transform: translateX(-55px) translateY(-30px);\\r\\n\\t\\t\\twidth: 5px;\\r\\n\\t\\t\\theight: 5px;}\\r\\n\\t75% {transform: translateX(-85px) translateY(-35px);\\r\\n\\t\\t\\twidth: 15px;\\r\\n\\t\\t\\theight: 15px;}\\r\\n}\\r\\n\\r\\n#submitBtn:focus, #statsBtn:focus, #custom-submitBtn:focus {\\r\\n\\toutline: none;\\r\\n}\\r\\n\\r\\n.close-btn {\\r\\n  float: right;\\r\\n  height: 2em;\\r\\n  width: 4em;\\r\\n  background-color: rgba(61, 55, 143, 0.904);\\r\\n  cursor: pointer;\\r\\n}\\r\\n.close-btn:hover {\\r\\n  background-color: rgba(111, 103, 212, 0.904);\\r\\n}\\r\\n\\r\\n/*---------- ERROR ----------*/\\r\\n.error-messege {\\r\\n  color: #de463b;\\r\\n  font-size: 2em;\\r\\n  margin: 1em;\\r\\n}\\r\\n\\r\\n/*---------- ANSWER ----------*/\\r\\n#answer {\\r\\n  font-family: 'Staatliches', cursive;\\r\\n  display: none;\\r\\n  font-size: 25px;\\r\\n  margin: 2em;\\r\\n  padding: 1em;\\r\\n  background-color: floralwhite;\\r\\n  border-width: 0.2em;\\r\\n  border-color: rgb(65, 125, 165);\\r\\n  border-style: solid;\\r\\n  border-radius: 0.5em;\\r\\n}\\r\\n\\r\\n/*---------- STATISTICS ----------*/\\r\\n.statistics-div {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  height: auto;\\r\\n  margin-top: 1em;\\r\\n  background-color:lightslategrey;\\r\\n}\\r\\n#stat_input {\\r\\n  font-family: 'Staatliches', cursive;\\r\\n  font-size: 1.5em;\\r\\n  width: 50%;\\r\\n  height: 1em;\\r\\n  text-align: center;\\r\\n  padding: 5px;\\r\\n  border-radius: 5em;\\r\\n  align-self: center;\\r\\n}\\r\\n#stats-container {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  justify-content: space-around;\\r\\n  margin: 1em;\\r\\n}\\r\\n#statistics-logo {\\r\\n  background-color: inherit;\\r\\n  height: 15em;\\r\\n  width: 20em;\\r\\n}\\r\\n#statistics-info {\\r\\n  line-height: 3em;\\r\\n  text-align: left;\\r\\n}\\r\\n#creationDate, #redirectCount, #originalUrl, #id {\\r\\n  color: #ffc421;\\r\\n  font-family: \\\"Poppins\\\", sans-serif;\\r\\n  font-size: 1.5em;\\r\\n  text-align: center;\\r\\n  margin-left: 1em;\\r\\n}\\r\\n#originalUrl {\\r\\n  width: 1px !important; \\r\\n  overflow-x: scroll !important; \\r\\n}\\r\\n.stats-label{\\r\\n  font-family: 'Staatliches', cursive;\\r\\n  font-size: 2em;\\r\\n  color: #222;\\r\\n  text-align: center;\\r\\n} \\r\\n\\r\\n/*---------- USER MANAGMENT ----------*/\\r\\n#usres-div {\\r\\n    background-color: rgba(48, 136, 102, 0.5);\\r\\n    margin-top: 1em;\\r\\n    padding: 1%;\\r\\n}\\r\\n#hello-user {\\r\\n  color: #222;\\r\\n  text-align: left;\\r\\n}\\r\\n#slash {\\r\\n  font-size: 2em;\\r\\n  margin: 0.5em;\\r\\n}\\r\\n#custom-url_input, #custom-word_input {\\r\\n  font-family: 'Staatliches', cursive;\\r\\n  font-size: 1em;\\r\\n  width: 25%;\\r\\n  height: 1em;\\r\\n  text-align: center;\\r\\n  padding: 5px;\\r\\n  border-radius: 5em;\\r\\n}\\r\\n#history-btn {\\r\\n  margin: 0.75em;\\r\\n  background-color: #ffc421;\\r\\n  cursor: pointer;\\r\\n\\tfont-size: 1em;\\r\\n\\tfont-family: 'Staatliches', cursive;\\r\\n\\tletter-spacing: 2px;\\r\\n\\tborder: 2px solid black;\\r\\n\\tbox-shadow: 0px 0px 0px rgba(0,0,0,0.4);\\r\\n}\\r\\n#history-btn:hover {\\r\\n  transform: translateY(-5px);\\r\\n\\tbox-shadow: 0px 10px 10px rgba(0,0,0,0.4);\\r\\n}\\r\\n\\r\\n/*---------- FOOTER ----------*/\\r\\nfooter {\\r\\n  background-color: #f0da9f;\\r\\n  width: 100%;\\r\\n  position: relative;\\r\\n  top: 85%;\\r\\n  font-family: \\\"Poppins\\\", sans-serif;\\r\\n}\\r\\n\\r\\n*:focus,\\r\\n*:active {\\r\\n  outline: none !important;\\r\\n  -webkit-tap-highlight-color: transparent;\\r\\n}\\r\\n.wrapper {\\r\\n  display: inline-flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.wrapper .icon {\\r\\n  position: relative;\\r\\n  background-color: #ffffff;\\r\\n  border-radius: 50%;\\r\\n  padding: 10px;\\r\\n  margin-top: 5px;\\r\\n  margin-left: 25px;\\r\\n  width: 30px;\\r\\n  height: 30px;\\r\\n  font-size: 18px;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  flex-direction: column;\\r\\n  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);\\r\\n  cursor: pointer;\\r\\n  transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);\\r\\n}\\r\\n\\r\\n.wrapper .tooltip {\\r\\n  position: absolute;\\r\\n  top: 0;\\r\\n  font-size: 14px;\\r\\n  background-color: #ffffff;\\r\\n  color: #ffffff;\\r\\n  padding: 5px 8px;\\r\\n  border-radius: 5px;\\r\\n  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);\\r\\n  opacity: 0;\\r\\n  pointer-events: none;\\r\\n  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);\\r\\n}\\r\\n\\r\\n.wrapper .tooltip::before {\\r\\n  position: absolute;\\r\\n  content: \\\"\\\";\\r\\n  height: 8px;\\r\\n  width: 8px;\\r\\n  background-color: #ffffff;\\r\\n  bottom: -3px;\\r\\n  left: 50%;\\r\\n  transform: translate(-50%) rotate(45deg);\\r\\n  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);\\r\\n}\\r\\n\\r\\n.wrapper .icon:hover .tooltip {\\r\\n  top: -45px;\\r\\n  opacity: 1;\\r\\n  visibility: visible;\\r\\n  pointer-events: auto;\\r\\n}\\r\\n\\r\\n.wrapper .icon:hover span,\\r\\n.wrapper .icon:hover .tooltip {\\r\\n  text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);\\r\\n}\\r\\n\\r\\n.wrapper .facebook:hover,\\r\\n.wrapper .facebook:hover .tooltip,\\r\\n.wrapper .facebook:hover .tooltip::before {\\r\\n  background-color: #3b5999;\\r\\n  color: #ffffff;\\r\\n}\\r\\n\\r\\n.wrapper .github:hover,\\r\\n.wrapper .github:hover .tooltip,\\r\\n.wrapper .github:hover .tooltip::before {\\r\\n  background-color: #333333;\\r\\n  color: #ffffff;\\r\\n}\\r\\n\\r\\n.wrapper .youtube:hover,\\r\\n.wrapper .youtube:hover .tooltip,\\r\\n.wrapper .youtube:hover .tooltip::before {\\r\\n  background-color: #de463b;\\r\\n  color: #ffffff;\\r\\n}\\r\\n\\r\\n/*  */\\r\\n.hide {\\r\\n  display: none;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://calc/./app/styles/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://calc/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://calc/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./app/styles/style.css":
/*!******************************!*\
  !*** ./app/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./app/styles/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://calc/./app/styles/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://calc/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://calc/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://calc/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://calc/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://calc/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://calc/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./app/main.js");
/******/ 	
/******/ })()
;