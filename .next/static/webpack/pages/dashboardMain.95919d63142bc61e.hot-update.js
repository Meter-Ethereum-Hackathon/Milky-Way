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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\n// import { images } from \"./images\";\nvar Carousel2 = function() {\n    var _this1 = _this;\n    _s();\n    // We will start by storing the index of the current image in the state.\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), currentImage = ref[0], setCurrentImage = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        \"img1.jpg\",\n        \"img2.jpg\",\n        \"img3.jpg\"\n    ]), images = ref1[0], setImg = ref1[1];\n    /**\n   * Render the next card when the user clicks on right button\n   */ var moveRight = function() {\n        if (currentImage < images.length - 1) {\n            setCurrentImage(currentImage + 1);\n        }\n    };\n    /**\n   * Render the next card when the user clicks on left button\n   */ var moveLeft = function() {\n        if (currentImage > 0) {\n            setCurrentImage(currentImage - 1);\n        }\n    };\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {}, void 0, false, {\n        fileName: \"/Users/chenyian261/Documents/GitHub/newNFTMarket/pages/Carousel2.js\",\n        lineNumber: 27,\n        columnNumber: 3\n    }, _this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex justify-center \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"button\",\n                    className: \"btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full h-10 my-10\",\n                    onClick: moveLeft,\n                    children: \"HACK\"\n                }, void 0, false, {\n                    fileName: \"/Users/chenyian261/Documents/GitHub/newNFTMarket/pages/Carousel2.js\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, _this),\n                images.slice(currentImage, currentImage + 1).map(function(img, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card w-75\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"box-border h-45 w-100 p-4 border-4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"carosel-img-body\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: img,\n                                    alt: \"cannot render image\",\n                                    className: \"carosel-img \"\n                                }, void 0, false, {\n                                    fileName: \"/Users/chenyian261/Documents/GitHub/newNFTMarket/pages/Carousel2.js\",\n                                    lineNumber: 44,\n                                    columnNumber: 17\n                                }, _this1)\n                            }, void 0, false, {\n                                fileName: \"/Users/chenyian261/Documents/GitHub/newNFTMarket/pages/Carousel2.js\",\n                                lineNumber: 43,\n                                columnNumber: 15\n                            }, _this1)\n                        }, void 0, false, {\n                            fileName: \"/Users/chenyian261/Documents/GitHub/newNFTMarket/pages/Carousel2.js\",\n                            lineNumber: 42,\n                            columnNumber: 13\n                        }, _this1)\n                    }, index, false, {\n                        fileName: \"/Users/chenyian261/Documents/GitHub/newNFTMarket/pages/Carousel2.js\",\n                        lineNumber: 41,\n                        columnNumber: 11\n                    }, _this1);\n                }),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"button\",\n                    className: \"btn bg-orange-500 h-5 my-10\",\n                    onClick: moveRight,\n                    children: \">\"\n                }, void 0, false, {\n                    fileName: \"/Users/chenyian261/Documents/GitHub/newNFTMarket/pages/Carousel2.js\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/chenyian261/Documents/GitHub/newNFTMarket/pages/Carousel2.js\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/chenyian261/Documents/GitHub/newNFTMarket/pages/Carousel2.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, _this);\n};\n_s(Carousel2, \"RlR+RCMC25+AQN9vDX/Bm6OQfN8=\");\n_c = Carousel2;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Carousel2);\nvar _c;\n$RefreshReg$(_c, \"Carousel2\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9DYXJvdXNlbDIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFBd0M7QUFDTzs7QUFDL0MscUNBQXFDO0FBRXJDLElBQU1HLFNBQVMsR0FBRyxXQUFNOzs7SUFDdEIsd0VBQXdFO0lBQ3hFLElBQXdDRixHQUFXLEdBQVhBLCtDQUFRLENBQUMsQ0FBQyxDQUFDLEVBTnJELFlBTXFCLEdBQXFCQSxHQUFXLEdBQWhDLEVBTnJCLGVBTXNDLEdBQUlBLEdBQVcsR0FBZjtJQUNwQyxJQUF5QkEsSUFBOEMsR0FBOUNBLCtDQUFRLENBQUM7UUFBQyxVQUFVO1FBQUUsVUFBVTtRQUFFLFVBQVU7S0FBQyxDQUFDLEVBUHpFLE1BT2UsR0FBWUEsSUFBOEMsR0FBMUQsRUFQZixNQU91QixHQUFJQSxJQUE4QyxHQUFsRDtJQUVyQjs7S0FFRyxDQUNILElBQUlPLFNBQVMsR0FBRyxXQUFNO1FBQ3BCLElBQUlKLFlBQVksR0FBR0UsTUFBTSxDQUFDRyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3BDSixlQUFlLENBQUNELFlBQVksR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNuQztLQUNGO0lBRUQ7O0tBRUcsQ0FDSCxJQUFJTSxRQUFRLEdBQUcsV0FBTTtRQUNuQixJQUFJTixZQUFZLEdBQUcsQ0FBQyxFQUFFO1lBQ3BCQyxlQUFlLENBQUNELFlBQVksR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNuQztLQUNGO2tCQUNELDhEQUFDTyxRQUFNOzs7O2FBQVUsQ0FBQztJQUNsQixxQkFDRSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUMsRUFBRTtrQkFDZiw0RUFBQ0QsS0FBRztZQUFDQyxTQUFTLEVBQUMsc0JBQXNCOzs4QkFFbkMsOERBQUNGLFFBQU07b0JBQ0xHLElBQUksRUFBQyxRQUFRO29CQUNiRCxTQUFTLEVBQUMsMEZBQTBGO29CQUNwR0UsT0FBTyxFQUFFTCxRQUFROzhCQUNsQixNQUVEOzs7Ozt5QkFBUztnQkFFUkosTUFBTSxDQUFDVSxLQUFLLENBQUNaLFlBQVksRUFBRUEsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDYSxHQUFHLENBQUMsU0FBQ0MsR0FBRyxFQUFFQyxLQUFLO3lDQUMzRCw4REFBQ1AsS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLFdBQVc7a0NBQ3hCLDRFQUFDRCxLQUFHOzRCQUFDQyxTQUFTLEVBQUMsb0NBQW9DO3NDQUNqRCw0RUFBQ0QsS0FBRztnQ0FBQ0MsU0FBUyxFQUFDLGtCQUFrQjswQ0FDL0IsNEVBQUNLLEtBQUc7b0NBQ0ZFLEdBQUcsRUFBRUYsR0FBRztvQ0FDUkcsR0FBRyxFQUFDLHFCQUFxQjtvQ0FDekJSLFNBQVMsRUFBQyxjQUFjOzs7OzswQ0FDeEI7Ozs7O3NDQUNFOzs7OztrQ0FDRjt1QkFUd0JNLEtBQUs7Ozs7OEJBVS9CO2lCQUNQLENBQUM7OEJBQ0YsOERBQUNSLFFBQU07b0JBQ0xHLElBQUksRUFBQyxRQUFRO29CQUNiRCxTQUFTLEVBQUMsNkJBQTZCO29CQUN2Q0UsT0FBTyxFQUFFUCxTQUFTOzhCQUVqQixHQUFHOzs7Ozt5QkFDRzs7Ozs7O2lCQUNMOzs7OzthQUNGLENBQ047Q0FDSDtHQTFES0wsU0FBUztBQUFUQSxLQUFBQSxTQUFTO0FBNERmLCtEQUFlQSxTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQ2Fyb3VzZWwyLmpzP2Y5Y2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGUgZnJvbSBcIi4uL3N0eWxlcy9zdHlsZS5tb2R1bGUuY3NzXCI7XG4vLyBpbXBvcnQgeyBpbWFnZXMgfSBmcm9tIFwiLi9pbWFnZXNcIjtcblxuY29uc3QgQ2Fyb3VzZWwyID0gKCkgPT4ge1xuICAvLyBXZSB3aWxsIHN0YXJ0IGJ5IHN0b3JpbmcgdGhlIGluZGV4IG9mIHRoZSBjdXJyZW50IGltYWdlIGluIHRoZSBzdGF0ZS5cbiAgY29uc3QgW2N1cnJlbnRJbWFnZSwgc2V0Q3VycmVudEltYWdlXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbaW1hZ2VzLCBzZXRJbWddID0gdXNlU3RhdGUoW1wiaW1nMS5qcGdcIiwgXCJpbWcyLmpwZ1wiLCBcImltZzMuanBnXCJdKTtcblxuICAvKipcbiAgICogUmVuZGVyIHRoZSBuZXh0IGNhcmQgd2hlbiB0aGUgdXNlciBjbGlja3Mgb24gcmlnaHQgYnV0dG9uXG4gICAqL1xuICBsZXQgbW92ZVJpZ2h0ID0gKCkgPT4ge1xuICAgIGlmIChjdXJyZW50SW1hZ2UgPCBpbWFnZXMubGVuZ3RoIC0gMSkge1xuICAgICAgc2V0Q3VycmVudEltYWdlKGN1cnJlbnRJbWFnZSArIDEpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogUmVuZGVyIHRoZSBuZXh0IGNhcmQgd2hlbiB0aGUgdXNlciBjbGlja3Mgb24gbGVmdCBidXR0b25cbiAgICovXG4gIGxldCBtb3ZlTGVmdCA9ICgpID0+IHtcbiAgICBpZiAoY3VycmVudEltYWdlID4gMCkge1xuICAgICAgc2V0Q3VycmVudEltYWdlKGN1cnJlbnRJbWFnZSAtIDEpO1xuICAgIH1cbiAgfTtcbiAgPGJ1dHRvbj48L2J1dHRvbj47XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBcIj5cbiAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiXCI+ICovfVxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJnLWJsdWUtNTAwIGhvdmVyOmJnLWJsdWUtNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkLWZ1bGwgaC0xMCBteS0xMFwiXG4gICAgICAgICAgb25DbGljaz17bW92ZUxlZnR9XG4gICAgICAgID5cbiAgICAgICAgICBIQUNLXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICB7LyogPC9kaXY+ICovfVxuICAgICAgICB7aW1hZ2VzLnNsaWNlKGN1cnJlbnRJbWFnZSwgY3VycmVudEltYWdlICsgMSkubWFwKChpbWcsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIHctNzVcIiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94LWJvcmRlciBoLTQ1IHctMTAwIHAtNCBib3JkZXItNFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcm9zZWwtaW1nLWJvZHlcIj5cbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBzcmM9e2ltZ31cbiAgICAgICAgICAgICAgICAgIGFsdD1cImNhbm5vdCByZW5kZXIgaW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2Fyb3NlbC1pbWcgXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBiZy1vcmFuZ2UtNTAwIGgtNSBteS0xMFwiXG4gICAgICAgICAgb25DbGljaz17bW92ZVJpZ2h0fVxuICAgICAgICA+XG4gICAgICAgICAge1wiPlwifVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2Fyb3VzZWwyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJzdHlsZSIsIkNhcm91c2VsMiIsImN1cnJlbnRJbWFnZSIsInNldEN1cnJlbnRJbWFnZSIsImltYWdlcyIsInNldEltZyIsIm1vdmVSaWdodCIsImxlbmd0aCIsIm1vdmVMZWZ0IiwiYnV0dG9uIiwiZGl2IiwiY2xhc3NOYW1lIiwidHlwZSIsIm9uQ2xpY2siLCJzbGljZSIsIm1hcCIsImltZyIsImluZGV4Iiwic3JjIiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Carousel2.js\n");

/***/ })

});