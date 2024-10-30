/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./client/js/animations.js":
/*!*********************************!*\
  !*** ./client/js/animations.js ***!
  \*********************************/
/***/ (() => {

eval("/* eslint-disable linebreak-style */\n/* eslint-disable no-undef */\ngsap.set('g', {\n  autoAlpha: 1 // changes visibility AND opacity of an element -\n  // default to hidden to prevent flashes of unwanted content (this shows once the script loads)\n});\n\n// Hide the Dice elements at start\ngsap.set('#Dice-Inner', {\n  autoAlpha: 1\n});\ngsap.set('#Lettering2', {\n  autoAlpha: 0\n});\n\n// Get an object\nconst G = document.querySelector('#G');\nconst centerTri = document.querySelector('#CenterTri path');\n// \"Run\" it's animation - set it to be \"completed\" (reverse = true) from default\nG.anim = gsap.to(G, {\n  // json object with the information about the animation\n  transform: 'matrix(0.926224,0,0,0.926224,-167.038,74.3847)',\n  duration: 2,\n  ease: 'power3.inOut'\n}).reversed(true); // set it to it's \"end\" (even if using from, apparently!)\ncenterTri.anim = gsap.from(centerTri, {\n  strokeWidth: 0\n}).reversed(true);\nconst DieAnimation = () => {\n  G.anim.reversed(!G.anim.reversed());\n  centerTri.anim.reversed(!centerTri.anim.reversed());\n};\nG.addEventListener('click', DieAnimation);\n\n//# sourceURL=webpack://portfolio_project/./client/js/animations.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./client/js/animations.js"]();
/******/ 	
/******/ })()
;