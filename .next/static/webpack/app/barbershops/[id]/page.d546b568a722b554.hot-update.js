"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/barbershops/[id]/page",{

/***/ "(app-pages-browser)/./app/barbershops/[id]/_components/service-item.tsx":
/*!***********************************************************!*\
  !*** ./app/barbershops/[id]/_components/service-item.tsx ***!
  \***********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_components_ui_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/_components/ui/button */ \"(app-pages-browser)/./app/_components/ui/button.tsx\");\n/* harmony import */ var _app_components_ui_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/_components/ui/card */ \"(app-pages-browser)/./app/_components/ui/card.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n\n\n\n\nconst ServiceItem = (param)=>{\n    let { service } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.Card, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardContent, {\n            className: \"p-3\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex gap-4 items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative min-h-[110px] min-w-[110px] max-h-[110px] max-w-[110px]\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            className: \"rounded-lg\",\n                            src: service.imageUrl,\n                            fill: true,\n                            style: {\n                                objectFit: \"contain\"\n                            },\n                            alt: service.name\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Hugo\\\\OneDrive\\\\Documentos\\\\programacao\\\\projects_next\\\\fsw_barber\\\\app\\\\barbershops\\\\[id]\\\\_components\\\\service-item.tsx\",\n                            lineNumber: 18,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Hugo\\\\OneDrive\\\\Documentos\\\\programacao\\\\projects_next\\\\fsw_barber\\\\app\\\\barbershops\\\\[id]\\\\_components\\\\service-item.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col w-full \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"font-bold\",\n                                children: service.name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Hugo\\\\OneDrive\\\\Documentos\\\\programacao\\\\projects_next\\\\fsw_barber\\\\app\\\\barbershops\\\\[id]\\\\_components\\\\service-item.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-sm text-gray-400\",\n                                children: service.description\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Hugo\\\\OneDrive\\\\Documentos\\\\programacao\\\\projects_next\\\\fsw_barber\\\\app\\\\barbershops\\\\[id]\\\\_components\\\\service-item.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center justify-between mt-3\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-primary text-sm font-bold\",\n                                        children: Intl.NumberFormat(\"pt-BR\", {\n                                            style: \"currency\",\n                                            currency: \"BRL\"\n                                        }).format(Number(service.price))\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Hugo\\\\OneDrive\\\\Documentos\\\\programacao\\\\projects_next\\\\fsw_barber\\\\app\\\\barbershops\\\\[id]\\\\_components\\\\service-item.tsx\",\n                                        lineNumber: 31,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_ui_button__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                                        variant: \"secondary\",\n                                        children: \"Reservar\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Hugo\\\\OneDrive\\\\Documentos\\\\programacao\\\\projects_next\\\\fsw_barber\\\\app\\\\barbershops\\\\[id]\\\\_components\\\\service-item.tsx\",\n                                        lineNumber: 36,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Hugo\\\\OneDrive\\\\Documentos\\\\programacao\\\\projects_next\\\\fsw_barber\\\\app\\\\barbershops\\\\[id]\\\\_components\\\\service-item.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Hugo\\\\OneDrive\\\\Documentos\\\\programacao\\\\projects_next\\\\fsw_barber\\\\app\\\\barbershops\\\\[id]\\\\_components\\\\service-item.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Hugo\\\\OneDrive\\\\Documentos\\\\programacao\\\\projects_next\\\\fsw_barber\\\\app\\\\barbershops\\\\[id]\\\\_components\\\\service-item.tsx\",\n                lineNumber: 16,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Hugo\\\\OneDrive\\\\Documentos\\\\programacao\\\\projects_next\\\\fsw_barber\\\\app\\\\barbershops\\\\[id]\\\\_components\\\\service-item.tsx\",\n            lineNumber: 15,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Hugo\\\\OneDrive\\\\Documentos\\\\programacao\\\\projects_next\\\\fsw_barber\\\\app\\\\barbershops\\\\[id]\\\\_components\\\\service-item.tsx\",\n        lineNumber: 14,\n        columnNumber: 9\n    }, undefined);\n};\n_c = ServiceItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ServiceItem);\nvar _c;\n$RefreshReg$(_c, \"ServiceItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9iYXJiZXJzaG9wcy9baWRdL19jb21wb25lbnRzL3NlcnZpY2UtaXRlbS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRXFEO0FBQ1M7QUFFL0I7QUFNL0IsTUFBTUksY0FBYztRQUFDLEVBQUNDLE9BQU8sRUFBbUI7SUFDNUMscUJBQ0ksOERBQUNKLHlEQUFJQTtrQkFDRCw0RUFBQ0MsZ0VBQVdBO1lBQUNJLFdBQVU7c0JBQ25CLDRFQUFDQztnQkFBSUQsV0FBVTs7a0NBQ1gsOERBQUNDO3dCQUFJRCxXQUFVO2tDQUNYLDRFQUFDSCxrREFBS0E7NEJBQ05HLFdBQVU7NEJBQ1ZFLEtBQUtILFFBQVFJLFFBQVE7NEJBQ3JCQyxJQUFJOzRCQUNKQyxPQUFPO2dDQUFDQyxXQUFXOzRCQUFTOzRCQUM1QkMsS0FBS1IsUUFBUVMsSUFBSTs7Ozs7Ozs7Ozs7a0NBR3JCLDhEQUFDUDt3QkFBSUQsV0FBVTs7MENBQ1gsOERBQUNTO2dDQUFHVCxXQUFVOzBDQUFjRCxRQUFRUyxJQUFJOzs7Ozs7MENBQ3hDLDhEQUFDRTtnQ0FBRVYsV0FBVTswQ0FBMEJELFFBQVFZLFdBQVc7Ozs7OzswQ0FFMUQsOERBQUNWO2dDQUFJRCxXQUFVOztrREFDWCw4REFBQ1U7d0NBQUVWLFdBQVU7a0RBQW1DWSxLQUFLQyxZQUFZLENBQUMsU0FBUzs0Q0FDdkVSLE9BQU87NENBQ1BTLFVBQVU7d0NBQ2QsR0FBR0MsTUFBTSxDQUFDQyxPQUFPakIsUUFBUWtCLEtBQUs7Ozs7OztrREFFOUIsOERBQUN2Qiw2REFBTUE7d0NBQUN3QixTQUFRO2tEQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU3pEO0tBakNNcEI7QUFtQ04sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2JhcmJlcnNob3BzL1tpZF0vX2NvbXBvbmVudHMvc2VydmljZS1pdGVtLnRzeD83YWQ4Il0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvYXBwL19jb21wb25lbnRzL3VpL2J1dHRvblwiO1xyXG5pbXBvcnQgeyBDYXJkLCBDYXJkQ29udGVudCB9IGZyb20gXCJAL2FwcC9fY29tcG9uZW50cy91aS9jYXJkXCI7XHJcbmltcG9ydCB7IFNlcnZpY2UgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcblxyXG5pbnRlcmZhY2UgU2VydmljZUl0ZW1Qcm9wcyB7XHJcbiAgICBzZXJ2aWNlOiBTZXJ2aWNlXHJcbn1cclxuXHJcbmNvbnN0IFNlcnZpY2VJdGVtID0gKHtzZXJ2aWNlfTogU2VydmljZUl0ZW1Qcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuICggXHJcbiAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9XCJwLTNcIiA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTQgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBtaW4taC1bMTEwcHhdIG1pbi13LVsxMTBweF0gbWF4LWgtWzExMHB4XSBtYXgtdy1bMTEwcHhdXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1sZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17c2VydmljZS5pbWFnZVVybH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7b2JqZWN0Rml0OiAnY29udGFpbid9fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtzZXJ2aWNlLm5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB3LWZ1bGwgXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCIgPntzZXJ2aWNlLm5hbWV9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNDAwXCIgPntzZXJ2aWNlLmRlc2NyaXB0aW9ufTwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG10LTNcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnkgdGV4dC1zbSBmb250LWJvbGRcIiA+e0ludGwuTnVtYmVyRm9ybWF0KFwicHQtQlJcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiBcImN1cnJlbmN5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVuY3k6IFwiQlJMXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmZvcm1hdChOdW1iZXIoc2VydmljZS5wcmljZSkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwic2Vjb25kYXJ5XCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlc2VydmFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICA8L0NhcmQ+XHJcbiAgICAgKTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IFNlcnZpY2VJdGVtOyJdLCJuYW1lcyI6WyJCdXR0b24iLCJDYXJkIiwiQ2FyZENvbnRlbnQiLCJJbWFnZSIsIlNlcnZpY2VJdGVtIiwic2VydmljZSIsImNsYXNzTmFtZSIsImRpdiIsInNyYyIsImltYWdlVXJsIiwiZmlsbCIsInN0eWxlIiwib2JqZWN0Rml0IiwiYWx0IiwibmFtZSIsImgyIiwicCIsImRlc2NyaXB0aW9uIiwiSW50bCIsIk51bWJlckZvcm1hdCIsImN1cnJlbmN5IiwiZm9ybWF0IiwiTnVtYmVyIiwicHJpY2UiLCJ2YXJpYW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/barbershops/[id]/_components/service-item.tsx\n"));

/***/ })

});