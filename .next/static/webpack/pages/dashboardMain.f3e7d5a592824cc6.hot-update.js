"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboardMain",{

/***/ "./pages/Carousel2.js":
/*!****************************!*\
  !*** ./pages/Carousel2.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\n// import { images } from \"./images\";\nvar Carousel2 = function() {\n    var _this1 = _this;\n    _s();\n    // We will start by storing the index of the current image in the state.\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), currentImage = ref[0], setCurrentImage = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        \"img1.jpg\",\n        \"img2.jpg\",\n        \"img3.jpg\"\n    ]), images = ref1[0], setImg = ref1[1];\n    /**\n   * Render the next card when the user clicks on right button\n   */ var moveRight = function() {\n        if (currentImage < images.length - 1) {\n            setCurrentImage(currentImage + 1);\n        }\n    };\n    /**\n   * Render the next card when the user clicks on left button\n   */ var moveLeft = function() {\n        if (currentImage > 0) {\n            setCurrentImage(currentImage - 1);\n        }\n    };\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {}, void 0, false, {\n        fileName: \"/Users/chenyian261/Documents/GitHub/newNFTMarket/pages/Carousel2.js\",\n        lineNumber: 27,\n        columnNumber: 3\n    }, _this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex justify-center \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"button\",\n                    className: \"btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full h-5 my-10\",\n                    onClick: moveLeft,\n                    children: \"HACK\"\n                }, void 0, false, {\n                    fileName: \"/Users/chenyian261/Documents/GitHub/newNFTMarket/pages/Carousel2.js\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, _this),\n                images.slice(currentImage, currentImage + 1).map(function(img, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card w-75\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"carosel-img-body\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: img,\n                                alt: \"cannot render image\",\n                                className: \"carosel-img\"\n                            }, void 0, false, {\n                                fileName: \"/Users/chenyian261/Documents/GitHub/newNFTMarket/pages/Carousel2.js\",\n                                lineNumber: 43,\n                                columnNumber: 15\n                            }, _this1)\n                        }, void 0, false, {\n                            fileName: \"/Users/chenyian261/Documents/GitHub/newNFTMarket/pages/Carousel2.js\",\n                            lineNumber: 42,\n                            columnNumber: 13\n                        }, _this1)\n                    }, index, false, {\n                        fileName: \"/Users/chenyian261/Documents/GitHub/newNFTMarket/pages/Carousel2.js\",\n                        lineNumber: 41,\n                        columnNumber: 11\n                    }, _this1);\n                }),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"button\",\n                    className: \"btn bg-orange-500 h-5 my-10\",\n                    onClick: moveRight,\n                    children: \">\"\n                }, void 0, false, {\n                    fileName: \"/Users/chenyian261/Documents/GitHub/newNFTMarket/pages/Carousel2.js\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/chenyian261/Documents/GitHub/newNFTMarket/pages/Carousel2.js\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/chenyian261/Documents/GitHub/newNFTMarket/pages/Carousel2.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, _this);\n};\n_s(Carousel2, \"RlR+RCMC25+AQN9vDX/Bm6OQfN8=\");\n_c = Carousel2;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Carousel2);\nvar _c;\n$RefreshReg$(_c, \"Carousel2\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9DYXJvdXNlbDIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFBd0M7QUFDTzs7QUFDL0MscUNBQXFDO0FBRXJDLElBQU1HLFNBQVMsR0FBRyxXQUFNOzs7SUFDdEIsd0VBQXdFO0lBQ3hFLElBQXdDRixHQUFXLEdBQVhBLCtDQUFRLENBQUMsQ0FBQyxDQUFDLEVBTnJELFlBTXFCLEdBQXFCQSxHQUFXLEdBQWhDLEVBTnJCLGVBTXNDLEdBQUlBLEdBQVcsR0FBZjtJQUNwQyxJQUF5QkEsSUFBOEMsR0FBOUNBLCtDQUFRLENBQUM7UUFBQyxVQUFVO1FBQUUsVUFBVTtRQUFFLFVBQVU7S0FBQyxDQUFDLEVBUHpFLE1BT2UsR0FBWUEsSUFBOEMsR0FBMUQsRUFQZixNQU91QixHQUFJQSxJQUE4QyxHQUFsRDtJQUVyQjs7S0FFRyxDQUNILElBQUlPLFNBQVMsR0FBRyxXQUFNO1FBQ3BCLElBQUlKLFlBQVksR0FBR0UsTUFBTSxDQUFDRyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3BDSixlQUFlLENBQUNELFlBQVksR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNuQztLQUNGO0lBRUQ7O0tBRUcsQ0FDSCxJQUFJTSxRQUFRLEdBQUcsV0FBTTtRQUNuQixJQUFJTixZQUFZLEdBQUcsQ0FBQyxFQUFFO1lBQ3BCQyxlQUFlLENBQUNELFlBQVksR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNuQztLQUNGO2tCQUNELDhEQUFDTyxRQUFNOzs7O2FBQVUsQ0FBQztJQUNsQixxQkFDRSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUMsRUFBRTtrQkFDZiw0RUFBQ0QsS0FBRztZQUFDQyxTQUFTLEVBQUMsc0JBQXNCOzs4QkFFbkMsOERBQUNGLFFBQU07b0JBQ0xHLElBQUksRUFBQyxRQUFRO29CQUNiRCxTQUFTLEVBQUMseUZBQXlGO29CQUNuR0UsT0FBTyxFQUFFTCxRQUFROzhCQUNsQixNQUVEOzs7Ozt5QkFBUztnQkFFUkosTUFBTSxDQUFDVSxLQUFLLENBQUNaLFlBQVksRUFBRUEsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDYSxHQUFHLENBQUMsU0FBQ0MsR0FBRyxFQUFFQyxLQUFLO3lDQUMzRCw4REFBQ1AsS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLFdBQVc7a0NBQ3hCLDRFQUFDRCxLQUFHOzRCQUFDQyxTQUFTLEVBQUMsa0JBQWtCO3NDQUMvQiw0RUFBQ0ssS0FBRztnQ0FDRkUsR0FBRyxFQUFFRixHQUFHO2dDQUNSRyxHQUFHLEVBQUMscUJBQXFCO2dDQUN6QlIsU0FBUyxFQUFDLGFBQWE7Ozs7O3NDQUN2Qjs7Ozs7a0NBQ0U7dUJBUHdCTSxLQUFLOzs7OzhCQVEvQjtpQkFDUCxDQUFDOzhCQUNGLDhEQUFDUixRQUFNO29CQUNMRyxJQUFJLEVBQUMsUUFBUTtvQkFDYkQsU0FBUyxFQUFDLDZCQUE2QjtvQkFDdkNFLE9BQU8sRUFBRVAsU0FBUzs4QkFFakIsR0FBRzs7Ozs7eUJBQ0c7Ozs7OztpQkFDTDs7Ozs7YUFDRixDQUNOO0NBQ0g7R0F4REtMLFNBQVM7QUFBVEEsS0FBQUEsU0FBUztBQTBEZiwrREFBZUEsU0FBUyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0Nhcm91c2VsMi5qcz9mOWNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlIGZyb20gXCIuLi9zdHlsZXMvc3R5bGUubW9kdWxlLmNzc1wiO1xuLy8gaW1wb3J0IHsgaW1hZ2VzIH0gZnJvbSBcIi4vaW1hZ2VzXCI7XG5cbmNvbnN0IENhcm91c2VsMiA9ICgpID0+IHtcbiAgLy8gV2Ugd2lsbCBzdGFydCBieSBzdG9yaW5nIHRoZSBpbmRleCBvZiB0aGUgY3VycmVudCBpbWFnZSBpbiB0aGUgc3RhdGUuXG4gIGNvbnN0IFtjdXJyZW50SW1hZ2UsIHNldEN1cnJlbnRJbWFnZV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2ltYWdlcywgc2V0SW1nXSA9IHVzZVN0YXRlKFtcImltZzEuanBnXCIsIFwiaW1nMi5qcGdcIiwgXCJpbWczLmpwZ1wiXSk7XG5cbiAgLyoqXG4gICAqIFJlbmRlciB0aGUgbmV4dCBjYXJkIHdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIHJpZ2h0IGJ1dHRvblxuICAgKi9cbiAgbGV0IG1vdmVSaWdodCA9ICgpID0+IHtcbiAgICBpZiAoY3VycmVudEltYWdlIDwgaW1hZ2VzLmxlbmd0aCAtIDEpIHtcbiAgICAgIHNldEN1cnJlbnRJbWFnZShjdXJyZW50SW1hZ2UgKyAxKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlbmRlciB0aGUgbmV4dCBjYXJkIHdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIGxlZnQgYnV0dG9uXG4gICAqL1xuICBsZXQgbW92ZUxlZnQgPSAoKSA9PiB7XG4gICAgaWYgKGN1cnJlbnRJbWFnZSA+IDApIHtcbiAgICAgIHNldEN1cnJlbnRJbWFnZShjdXJyZW50SW1hZ2UgLSAxKTtcbiAgICB9XG4gIH07XG4gIDxidXR0b24+PC9idXR0b24+O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgXCI+XG4gICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cIlwiPiAqL31cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBiZy1ibHVlLTUwMCBob3ZlcjpiZy1ibHVlLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZC1mdWxsIGgtNSBteS0xMFwiXG4gICAgICAgICAgb25DbGljaz17bW92ZUxlZnR9XG4gICAgICAgID5cbiAgICAgICAgICBIQUNLXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICB7LyogPC9kaXY+ICovfVxuICAgICAgICB7aW1hZ2VzLnNsaWNlKGN1cnJlbnRJbWFnZSwgY3VycmVudEltYWdlICsgMSkubWFwKChpbWcsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIHctNzVcIiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2Fyb3NlbC1pbWctYm9keVwiPlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3JjPXtpbWd9XG4gICAgICAgICAgICAgICAgYWx0PVwiY2Fubm90IHJlbmRlciBpbWFnZVwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2Fyb3NlbC1pbWdcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJnLW9yYW5nZS01MDAgaC01IG15LTEwXCJcbiAgICAgICAgICBvbkNsaWNrPXttb3ZlUmlnaHR9XG4gICAgICAgID5cbiAgICAgICAgICB7XCI+XCJ9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbDI7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInN0eWxlIiwiQ2Fyb3VzZWwyIiwiY3VycmVudEltYWdlIiwic2V0Q3VycmVudEltYWdlIiwiaW1hZ2VzIiwic2V0SW1nIiwibW92ZVJpZ2h0IiwibGVuZ3RoIiwibW92ZUxlZnQiLCJidXR0b24iLCJkaXYiLCJjbGFzc05hbWUiLCJ0eXBlIiwib25DbGljayIsInNsaWNlIiwibWFwIiwiaW1nIiwiaW5kZXgiLCJzcmMiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Carousel2.js\n");

/***/ })

});