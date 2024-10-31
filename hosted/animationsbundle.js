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

eval("/* eslint-disable linebreak-style */\n/* eslint-disable no-undef */\ngsap.set('g', {\n  autoAlpha: 1 // changes visibility AND opacity of an element -\n  // default to hidden to prevent flashes of unwanted content (this shows once the script loads)\n});\n\n// Hide the Dice elements at start\ngsap.set('#Dice-Inner', {\n  autoAlpha: 1\n});\n\n//define an array of dice elements and their animationData\nconst dieElements = [{\n  element: document.querySelector(\"#S\"),\n  animationData: {\n    transform: 'matrix(0.917814,0,0,0.917814,-224.843,253.089)'\n  }\n}, {\n  element: document.querySelector(\"#G\"),\n  animationData: {\n    transform: 'matrix(0.926224,0,0,0.926224,-167.038,74.3847)'\n  }\n}, {\n  element: document.querySelector(\"#E\"),\n  animationData: {\n    transform: 'matrix(0.939177,0,0,0.968939,-114.394,233.49)'\n  }\n}, {\n  element: document.querySelector(\"#Lettering\"),\n  animationData: {\n    transform: 'matrix(0.693363,0,0,0.693363,150.43,222.234)'\n  }\n}, {\n  element: document.querySelector(\"#CenterTri path\"),\n  isTimeline: true,\n  animationData: [{\n    strokeWidth: 20,\n    duration: 1\n  }],\n  timelineStart: 1.5\n}, {\n  element: document.querySelector(\"#UpperLeft path\"),\n  animationData: {\n    attr: {\n      d: \"M104.701,287.546L267.095,376.901\"\n    }\n  }\n}, {\n  element: document.querySelector(\"#UpperRight path\"),\n  animationData: {\n    attr: {\n      d: \"M812.453,377.149L976.601,286.278\"\n    }\n  }\n}, {\n  element: document.querySelector(\"#UpperCenterLeft path\"),\n  animationData: {\n    attr: {\n      d: \"M267.547,377.149L540.651,44.858\"\n    }\n  }\n}, {\n  element: document.querySelector(\"#UpperCenterRight path\"),\n  animationData: {\n    attr: {\n      d: \"M540.71,44.93L812.433,377.124\"\n    }\n  }\n}, {\n  element: document.querySelector(\"#MidLeft path\"),\n  animationData: {\n    attr: {\n      d: \"M267.664,369.025L96.382,793.074\"\n    }\n  }\n}, {\n  element: document.querySelector(\"#MidRight path\"),\n  animationData: {\n    attr: {\n      d: \"M979.893,793.074L813.338,372.346\"\n    }\n  }\n}, {\n  element: document.querySelector(\"#LowerLeft path\"),\n  animationData: {\n    attr: {\n      d: \"M104.701,789.218L540.908,847.152\"\n    }\n  }\n}, {\n  element: document.querySelector(\"#LowerCenter path\"),\n  animationData: {\n    attr: {\n      d: \"M538.789,849.052L538.138,1050.62\"\n    }\n  }\n}, {\n  element: document.querySelector(\"#LowerRight path\"),\n  animationData: {\n    attr: {\n      d: \"M975.888,752.44L539.905,812.026\"\n    }\n  }\n}];\n\n//set some animation constants, such as ease and duration:\nconst dieAnimDuration = 2.5;\nconst dieAnimEase = \"power3.inOut\";\n\n//set them for all animations where they don't have existing data\ndieElements.forEach(element => {\n  if (!element.isTimeline) {\n    if (!element.animationData.duration) {\n      element.animationData.duration = dieAnimDuration;\n    }\n    if (!element.animationData.ease) {\n      element.animationData.ease = dieAnimEase;\n    }\n  } else {\n    element.animationData.forEach(data => {\n      if (!data.duration) {\n        data.duration = dieAnimDuration;\n      }\n      if (!data.ease) {\n        data.ease = dieAnimEase;\n      }\n    });\n  }\n});\n\n//set all of the animations (as 'finished', reversed is true)\ndieElements.forEach(element => {\n  if (element.isTimeline !== true) {\n    element.anim = gsap.to(element.element, element.animationData).reversed(true);\n  } else {\n    const elementTimeline = gsap.timeline();\n    element.animationData.forEach(data => {\n      elementTimeline.to(element.element, data, element.timelineStart).reversed(true);\n    });\n    element.anim = elementTimeline;\n  }\n});\nconst DieAnimation = () => {\n  dieElements.forEach(element => {\n    element.anim.reversed(!element.anim.reversed());\n  });\n};\ndieElements[1].element.addEventListener('click', DieAnimation);\n\n//# sourceURL=webpack://portfolio_project/./client/js/animations.js?");

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