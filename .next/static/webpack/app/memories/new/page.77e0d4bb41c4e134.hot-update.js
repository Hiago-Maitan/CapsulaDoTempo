"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/memories/new/page",{

/***/ "(app-client)/./src/components/MediaPicker.tsx":
/*!****************************************!*\
  !*** ./src/components/MediaPicker.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MediaPicker\": function() { return /* binding */ MediaPicker; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ MediaPicker auto */ \nvar _s = $RefreshSig$();\n\nfunction MediaPicker() {\n    _s();\n    const [preview, setPreview] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    function onFileSelected(event) {\n        const { files  } = event.target;\n        if (!files) {\n            return;\n        }\n        const previewURL = URL.createObjectURL(files[0]);\n        const videoURL = URL.createObjectURL(files[0]);\n        setPreview(previewURL);\n        setPreview(videoURL);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                onChange: onFileSelected,\n                type: \"file\",\n                accept: \"image/*\",\n                id: \"media\",\n                className: \"invisible h-0 w-0\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Hiago\\\\Documents\\\\Rocketseat\\\\NLW SpaceTime\\\\web\\\\src\\\\components\\\\MediaPicker.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            preview && // eslint-disable-next-line\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: preview,\n                alt: \"\",\n                className: \"aspect-video w-full rounded-lg object-cover\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Hiago\\\\Documents\\\\Rocketseat\\\\NLW SpaceTime\\\\web\\\\src\\\\components\\\\MediaPicker.tsx\",\n                lineNumber: 34,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                onChange: onFileSelected,\n                type: \"file\",\n                accept: \"video/*\",\n                id: \"video\",\n                className: \"invisible h-0 w-0\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Hiago\\\\Documents\\\\Rocketseat\\\\NLW SpaceTime\\\\web\\\\src\\\\components\\\\MediaPicker.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this),\n            preview && // eslint-disable-next-line\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                src: preview,\n                controls: true\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Hiago\\\\Documents\\\\Rocketseat\\\\NLW SpaceTime\\\\web\\\\src\\\\components\\\\MediaPicker.tsx\",\n                lineNumber: 51,\n                columnNumber: 8\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(MediaPicker, \"t8Nng1ldVKjrjHlYd43cRRwCnEU=\");\n_c = MediaPicker;\nvar _c;\n$RefreshReg$(_c, \"MediaPicker\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2NvbXBvbmVudHMvTWVkaWFQaWNrZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUU2QztBQUV0QyxTQUFTQyxjQUFjOztJQUM1QixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR0gsK0NBQVFBLENBQWdCLElBQUk7SUFFMUQsU0FBU0ksZUFBZUMsS0FBb0MsRUFBRTtRQUM1RCxNQUFNLEVBQUVDLE1BQUssRUFBRSxHQUFHRCxNQUFNRSxNQUFNO1FBRTlCLElBQUksQ0FBQ0QsT0FBTztZQUNWO1FBQ0YsQ0FBQztRQUVELE1BQU1FLGFBQWFDLElBQUlDLGVBQWUsQ0FBQ0osS0FBSyxDQUFDLEVBQUU7UUFDL0MsTUFBTUssV0FBV0YsSUFBSUMsZUFBZSxDQUFDSixLQUFLLENBQUMsRUFBRTtRQUU3Q0gsV0FBV0s7UUFDWEwsV0FBV1E7SUFDYjtJQUVBLHFCQUNFOzswQkFDRSw4REFBQ0M7Z0JBQ0NDLFVBQVVUO2dCQUNWVSxNQUFLO2dCQUNMQyxRQUFPO2dCQUNQQyxJQUFHO2dCQUNIQyxXQUFVOzs7Ozs7WUFHWGYsV0FDQywyQkFBMkI7MEJBQzNCLDhEQUFDZ0I7Z0JBQ0NDLEtBQUtqQjtnQkFDTGtCLEtBQUk7Z0JBQ0pILFdBQVU7Ozs7OzswQkFJZCw4REFBQ0w7Z0JBQ0NDLFVBQVVUO2dCQUNWVSxNQUFLO2dCQUNMQyxRQUFPO2dCQUNQQyxJQUFHO2dCQUNIQyxXQUFVOzs7Ozs7WUFHWGYsV0FDQywyQkFBMkI7MEJBQzVCLDhEQUFDbUI7Z0JBQU1GLEtBQUtqQjtnQkFBU29CLFFBQVE7Ozs7Ozs7O0FBSXBDLENBQUM7R0FsRGVyQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9NZWRpYVBpY2tlci50c3g/ZTc1NiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuXHJcbmltcG9ydCB7IENoYW5nZUV2ZW50LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIE1lZGlhUGlja2VyKCkge1xyXG4gIGNvbnN0IFtwcmV2aWV3LCBzZXRQcmV2aWV3XSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpXHJcblxyXG4gIGZ1bmN0aW9uIG9uRmlsZVNlbGVjdGVkKGV2ZW50OiBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50Pikge1xyXG4gICAgY29uc3QgeyBmaWxlcyB9ID0gZXZlbnQudGFyZ2V0XHJcblxyXG4gICAgaWYgKCFmaWxlcykge1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwcmV2aWV3VVJMID0gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlc1swXSlcclxuICAgIGNvbnN0IHZpZGVvVVJMID0gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlc1swXSlcclxuXHJcbiAgICBzZXRQcmV2aWV3KHByZXZpZXdVUkwpXHJcbiAgICBzZXRQcmV2aWV3KHZpZGVvVVJMKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIG9uQ2hhbmdlPXtvbkZpbGVTZWxlY3RlZH1cclxuICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgYWNjZXB0PVwiaW1hZ2UvKlwiXHJcbiAgICAgICAgaWQ9XCJtZWRpYVwiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiaW52aXNpYmxlIGgtMCB3LTBcIlxyXG4gICAgICAvPlxyXG5cclxuICAgICAge3ByZXZpZXcgJiYgKFxyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHNyYz17cHJldmlld31cclxuICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJhc3BlY3QtdmlkZW8gdy1mdWxsIHJvdW5kZWQtbGcgb2JqZWN0LWNvdmVyXCJcclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgb25DaGFuZ2U9e29uRmlsZVNlbGVjdGVkfVxyXG4gICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICBhY2NlcHQ9XCJ2aWRlby8qXCJcclxuICAgICAgICBpZD1cInZpZGVvXCJcclxuICAgICAgICBjbGFzc05hbWU9XCJpbnZpc2libGUgaC0wIHctMFwiXHJcbiAgICAgIC8+XHJcblxyXG4gICAgICB7cHJldmlldyAmJiAoXHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbiAgICAgICA8dmlkZW8gc3JjPXtwcmV2aWV3fSBjb250cm9scz48L3ZpZGVvPlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIk1lZGlhUGlja2VyIiwicHJldmlldyIsInNldFByZXZpZXciLCJvbkZpbGVTZWxlY3RlZCIsImV2ZW50IiwiZmlsZXMiLCJ0YXJnZXQiLCJwcmV2aWV3VVJMIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwidmlkZW9VUkwiLCJpbnB1dCIsIm9uQ2hhbmdlIiwidHlwZSIsImFjY2VwdCIsImlkIiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiYWx0IiwidmlkZW8iLCJjb250cm9scyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/components/MediaPicker.tsx\n"));

/***/ })

});