"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(home)/page",{

/***/ "(app-pages-browser)/./app/_components/header.tsx":
/*!************************************!*\
  !*** ./app/_components/header.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _ui_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/card */ \"(app-pages-browser)/./app/_components/ui/card.tsx\");\n/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/button */ \"(app-pages-browser)/./app/_components/ui/button.tsx\");\n/* harmony import */ var _barrel_optimize_names_HomeIcon_LogInIcon_LogOutIcon_MenuIcon_User2Icon_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=HomeIcon,LogInIcon,LogOutIcon,MenuIcon,User2Icon!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/menu.js\");\n/* harmony import */ var _barrel_optimize_names_HomeIcon_LogInIcon_LogOutIcon_MenuIcon_User2Icon_lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=HomeIcon,LogInIcon,LogOutIcon,MenuIcon,User2Icon!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/log-out.js\");\n/* harmony import */ var _barrel_optimize_names_HomeIcon_LogInIcon_LogOutIcon_MenuIcon_User2Icon_lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=HomeIcon,LogInIcon,LogOutIcon,MenuIcon,User2Icon!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/user-round.js\");\n/* harmony import */ var _barrel_optimize_names_HomeIcon_LogInIcon_LogOutIcon_MenuIcon_User2Icon_lucide_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=HomeIcon,LogInIcon,LogOutIcon,MenuIcon,User2Icon!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/log-in.js\");\n/* harmony import */ var _barrel_optimize_names_HomeIcon_LogInIcon_LogOutIcon_MenuIcon_User2Icon_lucide_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! __barrel_optimize__?names=HomeIcon,LogInIcon,LogOutIcon,MenuIcon,User2Icon!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/home.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _ui_sheet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui/sheet */ \"(app-pages-browser)/./app/_components/ui/sheet.tsx\");\n/* harmony import */ var _ui_avatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui/avatar */ \"(app-pages-browser)/./app/_components/ui/avatar.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Header = ()=>{\n    var _data_user, _data_user1;\n    _s();\n    const { data, status } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession)();\n    const handleLogin = ()=>{\n        (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.signIn)(\"google\");\n    };\n    const handleLogout = ()=>{\n        (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.signOut)();\n    };\n    var _data_user_image;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_card__WEBPACK_IMPORTED_MODULE_2__.Card, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardContent, {\n            className: \"p-5 justify-between flex flex-row items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    src: \"/logo.png\",\n                    alt: \"FSW Barber\",\n                    height: 22,\n                    width: 120\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Hugo\\\\OneDrive\\\\Documentos\\\\programacao\\\\projects_next\\\\fsw_barber\\\\app\\\\_components\\\\header.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_sheet__WEBPACK_IMPORTED_MODULE_5__.Sheet, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_sheet__WEBPACK_IMPORTED_MODULE_5__.SheetTrigger, {\n                            asChild: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                variant: \"outline\",\n                                size: \"icon\",\n                                className: \"h-8 w-8\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_HomeIcon_LogInIcon_LogOutIcon_MenuIcon_User2Icon_lucide_react__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                    size: 18\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Hugo\\\\OneDrive\\\\Documentos\\\\programacao\\\\projects_next\\\\fsw_barber\\\\app\\\\_components\\\\header.tsx\",\n                                    lineNumber: 32,\n                                    columnNumber: 29\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Hugo\\\\OneDrive\\\\Documentos\\\\programacao\\\\projects_next\\\\fsw_barber\\\\app\\\\_components\\\\header.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 25\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Hugo\\\\OneDrive\\\\Documentos\\\\programacao\\\\projects_next\\\\fsw_barber\\\\app\\\\_components\\\\header.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_sheet__WEBPACK_IMPORTED_MODULE_5__.SheetContent, {\n                            className: \"p-0\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_sheet__WEBPACK_IMPORTED_MODULE_5__.SheetHeader, {\n                                    className: \"border-b border-solid border-secondary p-5\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_sheet__WEBPACK_IMPORTED_MODULE_5__.SheetTitle, {\n                                        children: \"Menu\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Hugo\\\\OneDrive\\\\Documentos\\\\programacao\\\\projects_next\\\\fsw_barber\\\\app\\\\_components\\\\header.tsx\",\n                                        lineNumber: 38,\n                                        columnNumber: 29\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Hugo\\\\OneDrive\\\\Documentos\\\\programacao\\\\projects_next\\\\fsw_barber\\\\app\\\\_components\\\\header.tsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 25\n                                }, undefined),\n                                (data === null || data === void 0 ? void 0 : data.user) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex justify-between px-5 py-6 items-center\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex items-center gap-3\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_avatar__WEBPACK_IMPORTED_MODULE_6__.Avatar, {\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_avatar__WEBPACK_IMPORTED_MODULE_6__.AvatarImage, {\n                                                        src: (_data_user_image = (_data_user = data.user) === null || _data_user === void 0 ? void 0 : _data_user.image) !== null && _data_user_image !== void 0 ? _data_user_image : \"\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\Hugo\\\\OneDrive\\\\Documentos\\\\programacao\\\\projects_next\\\\fsw_barber\\\\app\\\\_components\\\\header.tsx\",\n                                                        lineNumber: 45,\n                                                        columnNumber: 37\n                                                    }, undefined)\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Hugo\\\\OneDrive\\\\Documentos\\\\programacao\\\\projects_next\\\\fsw_barber\\\\app\\\\_components\\\\header.tsx\",\n                                                    lineNumber: 44,\n                                                    columnNumber: 33\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                    className: \"font-bold\",\n                                                    children: (_data_user1 = data.user) === null || _data_user1 === void 0 ? void 0 : _data_user1.name\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Hugo\\\\OneDrive\\\\Documentos\\\\programacao\\\\projects_next\\\\fsw_barber\\\\app\\\\_components\\\\header.tsx\",\n                                                    lineNumber: 48,\n                                                    columnNumber: 33\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\Hugo\\\\OneDrive\\\\Documentos\\\\programacao\\\\projects_next\\\\fsw_barber\\\\app\\\\_components\\\\header.tsx\",\n                                            lineNumber: 43,\n                                            columnNumber: 33\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                            variant: \"secondary\",\n                                            size: \"icon\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_HomeIcon_LogInIcon_LogOutIcon_MenuIcon_User2Icon_lucide_react__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                                onClick: handleLogout\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Hugo\\\\OneDrive\\\\Documentos\\\\programacao\\\\projects_next\\\\fsw_barber\\\\app\\\\_components\\\\header.tsx\",\n                                                lineNumber: 52,\n                                                columnNumber: 37\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Hugo\\\\OneDrive\\\\Documentos\\\\programacao\\\\projects_next\\\\fsw_barber\\\\app\\\\_components\\\\header.tsx\",\n                                            lineNumber: 51,\n                                            columnNumber: 33\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Hugo\\\\OneDrive\\\\Documentos\\\\programacao\\\\projects_next\\\\fsw_barber\\\\app\\\\_components\\\\header.tsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 29\n                                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-col px-5 py-6 gap-3\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex items-center gap-2 p-1\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_HomeIcon_LogInIcon_LogOutIcon_MenuIcon_User2Icon_lucide_react__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                                    size: 32\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Hugo\\\\OneDrive\\\\Documentos\\\\programacao\\\\projects_next\\\\fsw_barber\\\\app\\\\_components\\\\header.tsx\",\n                                                    lineNumber: 58,\n                                                    columnNumber: 37\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                    className: \"font-bold\",\n                                                    children: \"Ol\\xe1, fa\\xe7a seu login\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Hugo\\\\OneDrive\\\\Documentos\\\\programacao\\\\projects_next\\\\fsw_barber\\\\app\\\\_components\\\\header.tsx\",\n                                                    lineNumber: 59,\n                                                    columnNumber: 37\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\Hugo\\\\OneDrive\\\\Documentos\\\\programacao\\\\projects_next\\\\fsw_barber\\\\app\\\\_components\\\\header.tsx\",\n                                            lineNumber: 57,\n                                            columnNumber: 33\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                            onClick: handleLogin,\n                                            variant: \"secondary\",\n                                            size: \"icon\",\n                                            className: \"w-full justify-start\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_HomeIcon_LogInIcon_LogOutIcon_MenuIcon_User2Icon_lucide_react__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                                    className: \"mr-2 ml-2\",\n                                                    size: 18\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Hugo\\\\OneDrive\\\\Documentos\\\\programacao\\\\projects_next\\\\fsw_barber\\\\app\\\\_components\\\\header.tsx\",\n                                                    lineNumber: 66,\n                                                    columnNumber: 37\n                                                }, undefined),\n                                                \"Fazer login\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\Hugo\\\\OneDrive\\\\Documentos\\\\programacao\\\\projects_next\\\\fsw_barber\\\\app\\\\_components\\\\header.tsx\",\n                                            lineNumber: 61,\n                                            columnNumber: 33\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Hugo\\\\OneDrive\\\\Documentos\\\\programacao\\\\projects_next\\\\fsw_barber\\\\app\\\\_components\\\\header.tsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-col gap-3 px-5\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                            variant: \"outline\",\n                                            className: \"justify-start\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_HomeIcon_LogInIcon_LogOutIcon_MenuIcon_User2Icon_lucide_react__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                                    size: 18,\n                                                    className: \"mr-2\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Hugo\\\\OneDrive\\\\Documentos\\\\programacao\\\\projects_next\\\\fsw_barber\\\\app\\\\_components\\\\header.tsx\",\n                                                    lineNumber: 74,\n                                                    columnNumber: 29\n                                                }, undefined),\n                                                \"Inicio\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\Hugo\\\\OneDrive\\\\Documentos\\\\programacao\\\\projects_next\\\\fsw_barber\\\\app\\\\_components\\\\header.tsx\",\n                                            lineNumber: 73,\n                                            columnNumber: 29\n                                        }, undefined),\n                                        (data === null || data === void 0 ? void 0 : data.user) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                            variant: \"outline\",\n                                            className: \"justify-start\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_HomeIcon_LogInIcon_LogOutIcon_MenuIcon_User2Icon_lucide_react__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                                    size: 18,\n                                                    className: \"mr-2\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Hugo\\\\OneDrive\\\\Documentos\\\\programacao\\\\projects_next\\\\fsw_barber\\\\app\\\\_components\\\\header.tsx\",\n                                                    lineNumber: 80,\n                                                    columnNumber: 33\n                                                }, undefined),\n                                                \"Inicio\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\Hugo\\\\OneDrive\\\\Documentos\\\\programacao\\\\projects_next\\\\fsw_barber\\\\app\\\\_components\\\\header.tsx\",\n                                            lineNumber: 79,\n                                            columnNumber: 33\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Hugo\\\\OneDrive\\\\Documentos\\\\programacao\\\\projects_next\\\\fsw_barber\\\\app\\\\_components\\\\header.tsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Hugo\\\\OneDrive\\\\Documentos\\\\programacao\\\\projects_next\\\\fsw_barber\\\\app\\\\_components\\\\header.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Hugo\\\\OneDrive\\\\Documentos\\\\programacao\\\\projects_next\\\\fsw_barber\\\\app\\\\_components\\\\header.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Hugo\\\\OneDrive\\\\Documentos\\\\programacao\\\\projects_next\\\\fsw_barber\\\\app\\\\_components\\\\header.tsx\",\n            lineNumber: 26,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Hugo\\\\OneDrive\\\\Documentos\\\\programacao\\\\projects_next\\\\fsw_barber\\\\app\\\\_components\\\\header.tsx\",\n        lineNumber: 25,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Header, \"veXTdcMu9GiBUzcjw6BYmVQGSPw=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9fY29tcG9uZW50cy9oZWFkZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHK0I7QUFDZTtBQUNUO0FBQytDO0FBQ3RCO0FBQzBCO0FBQ3RDO0FBRWxELE1BQU1tQixTQUFTO1FBaUN1Q0MsWUFHTUE7O0lBbEN4RCxNQUFNLEVBQUNBLElBQUksRUFBRUMsTUFBTSxFQUFDLEdBQUdWLDJEQUFVQTtJQUVqQyxNQUFNVyxjQUFjO1FBQ2hCYix1REFBTUEsQ0FBQztJQUNYO0lBRUEsTUFBTWMsZUFBZTtRQUNqQmIsd0RBQU9BO0lBQ1g7UUF1QmtEVTtJQXJCbEQscUJBQ0ksOERBQUNuQiwwQ0FBSUE7a0JBQ0QsNEVBQUNDLGlEQUFXQTtZQUFDc0IsV0FBVTs7OEJBQ25CLDhEQUFDeEIsa0RBQUtBO29CQUFDeUIsS0FBSTtvQkFBWUMsS0FBSTtvQkFBYUMsUUFBUTtvQkFBSUMsT0FBTzs7Ozs7OzhCQUUzRCw4REFBQ2hCLDRDQUFLQTs7c0NBQ0YsOERBQUNJLG1EQUFZQTs0QkFBQ2EsT0FBTztzQ0FDakIsNEVBQUMxQiw4Q0FBTUE7Z0NBQUMyQixTQUFRO2dDQUFVQyxNQUFLO2dDQUFPUCxXQUFVOzBDQUM1Qyw0RUFBQ2pCLDRIQUFRQTtvQ0FBQ3dCLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7c0NBSXhCLDhEQUFDbEIsbURBQVlBOzRCQUFDVyxXQUFVOzs4Q0FDcEIsOERBQUNWLGtEQUFXQTtvQ0FBQ1UsV0FBVTs4Q0FDbkIsNEVBQUNULGlEQUFVQTtrREFBQzs7Ozs7Ozs7Ozs7Z0NBR2ZLLENBQUFBLGlCQUFBQSwyQkFBQUEsS0FBTVksSUFBSSxrQkFDUCw4REFBQ0M7b0NBQUlULFdBQVU7O3NEQUNYLDhEQUFDUzs0Q0FBSVQsV0FBVTs7OERBQ2YsOERBQUNQLDhDQUFNQTs4REFDSCw0RUFBQ0MsbURBQVdBO3dEQUFDTyxLQUFLTCxDQUFBQSxvQkFBQUEsYUFBQUEsS0FBS1ksSUFBSSxjQUFUWixpQ0FBQUEsV0FBV2MsS0FBSyxjQUFoQmQsOEJBQUFBLG1CQUFvQjs7Ozs7Ozs7Ozs7OERBRzFDLDhEQUFDZTtvREFBR1gsV0FBVTsrREFBY0osY0FBQUEsS0FBS1ksSUFBSSxjQUFUWixrQ0FBQUEsWUFBV2dCLElBQUk7Ozs7Ozs7Ozs7OztzREFHM0MsOERBQUNqQyw4Q0FBTUE7NENBQUMyQixTQUFROzRDQUFZQyxNQUFLO3NEQUM3Qiw0RUFBQ3pCLDRIQUFVQTtnREFBQytCLFNBQVNkOzs7Ozs7Ozs7Ozs7Ozs7OzhEQUk3Qiw4REFBQ1U7b0NBQUlULFdBQVU7O3NEQUNYLDhEQUFDUzs0Q0FBSVQsV0FBVTs7OERBQ1gsOERBQUNoQiw0SEFBU0E7b0RBQUN1QixNQUFNOzs7Ozs7OERBQ2pCLDhEQUFDSTtvREFBR1gsV0FBVTs4REFBYTs7Ozs7Ozs7Ozs7O3NEQUUvQiw4REFBQ3JCLDhDQUFNQTs0Q0FDUGtDLFNBQVNmOzRDQUNUUSxTQUFROzRDQUNSQyxNQUFLOzRDQUNMUCxXQUFVOzs4REFDTiw4REFBQ25CLDZIQUFTQTtvREFBQ21CLFdBQVU7b0RBQVlPLE1BQU07Ozs7OztnREFBTTs7Ozs7Ozs7Ozs7Ozs4Q0FNekQsOERBQUNFO29DQUFJVCxXQUFVOztzREFDWCw4REFBQ3JCLDhDQUFNQTs0Q0FBQzJCLFNBQVE7NENBQVVOLFdBQVU7OzhEQUNwQyw4REFBQ3BCLDZIQUFRQTtvREFBQzJCLE1BQU07b0RBQUlQLFdBQVU7Ozs7OztnREFBUTs7Ozs7Ozt3Q0FJckNKLENBQUFBLGlCQUFBQSwyQkFBQUEsS0FBTVksSUFBSSxtQkFDUCw4REFBQzdCLDhDQUFNQTs0Q0FBQzJCLFNBQVE7NENBQVVOLFdBQVU7OzhEQUNwQyw4REFBQ3BCLDZIQUFRQTtvREFBQzJCLE1BQU07b0RBQUlQLFdBQVU7Ozs7OztnREFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVXRFO0dBOUVNTDs7UUFFcUJSLHVEQUFVQTs7O0tBRi9CUTtBQWdGTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvX2NvbXBvbmVudHMvaGVhZGVyLnRzeD9iMWY4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuXHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgeyBDYXJkLCBDYXJkQ29udGVudCB9IGZyb20gXCIuL3VpL2NhcmRcIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIi4vdWkvYnV0dG9uXCI7XHJcbmltcG9ydCB7IEhvbWVJY29uLCBMb2dJbkljb24sIExvZ091dEljb24sIE1lbnVJY29uLCBVc2VyMkljb24gfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XHJcbmltcG9ydCB7IHNpZ25Jbiwgc2lnbk91dCwgdXNlU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcclxuaW1wb3J0IHsgU2hlZXQsIFNoZWV0Q29udGVudCwgU2hlZXRIZWFkZXIsIFNoZWV0VGl0bGUsIFNoZWV0VHJpZ2dlciB9IGZyb20gXCIuL3VpL3NoZWV0XCI7XHJcbmltcG9ydCB7IEF2YXRhciwgQXZhdGFySW1hZ2UgfSBmcm9tIFwiLi91aS9hdmF0YXJcIjtcclxuXHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCB7ZGF0YSwgc3RhdHVzfSA9IHVzZVNlc3Npb24oKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVMb2dpbiA9ICgpID0+IHtcclxuICAgICAgICBzaWduSW4oXCJnb29nbGVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgICAgIHNpZ25PdXQoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKCBcclxuICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgPENhcmRDb250ZW50IGNsYXNzTmFtZT1cInAtNSBqdXN0aWZ5LWJldHdlZW4gZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXJcIiA+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2xvZ28ucG5nXCIgYWx0PVwiRlNXIEJhcmJlclwiIGhlaWdodD17MjJ9IHdpZHRoPXsxMjB9IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPFNoZWV0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxTaGVldFRyaWdnZXIgYXNDaGlsZCA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVcIiBzaXplPVwiaWNvblwiIGNsYXNzTmFtZT1cImgtOCB3LThcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUljb24gc2l6ZT17MTh9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU2hlZXRUcmlnZ2VyPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8U2hlZXRDb250ZW50IGNsYXNzTmFtZT1cInAtMFwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNoZWV0SGVhZGVyIGNsYXNzTmFtZT1cImJvcmRlci1iIGJvcmRlci1zb2xpZCBib3JkZXItc2Vjb25kYXJ5IHAtNVwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTaGVldFRpdGxlPk1lbnU8L1NoZWV0VGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2hlZXRIZWFkZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YT8udXNlciA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gcHgtNSBweS02IGl0ZW1zLWNlbnRlclwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBdmF0YXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBdmF0YXJJbWFnZSBzcmM9e2RhdGEudXNlcj8uaW1hZ2UgPz8gJyd9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BdmF0YXI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmb250LWJvbGRcIiA+e2RhdGEudXNlcj8ubmFtZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBzaXplPVwiaWNvblwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvZ091dEljb24gb25DbGljaz17aGFuZGxlTG9nb3V0fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgcHgtNSBweS02IGdhcC0zXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgcC0xXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VXNlcjJJY29uIHNpemU9ezMyfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCIgPk9sw6EsIGZhw6dhIHNldSBsb2dpbjwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVMb2dpbn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJpY29uXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGp1c3RpZnktc3RhcnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvZ0luSWNvbiBjbGFzc05hbWU9XCJtci0yIG1sLTJcIiBzaXplPXsxOH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmF6ZXIgbG9naW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC0zIHB4LTVcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lXCIgY2xhc3NOYW1lPVwianVzdGlmeS1zdGFydFwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIb21lSWNvbiBzaXplPXsxOH0gY2xhc3NOYW1lPVwibXItMlwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbmljaW9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhPy51c2VyICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lXCIgY2xhc3NOYW1lPVwianVzdGlmeS1zdGFydFwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SG9tZUljb24gc2l6ZT17MTh9IGNsYXNzTmFtZT1cIm1yLTJcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluaWNpb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TaGVldENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICA8L1NoZWV0PlxyXG4gICAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgIDwvQ2FyZD5cclxuICAgICApO1xyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyJdLCJuYW1lcyI6WyJJbWFnZSIsIkNhcmQiLCJDYXJkQ29udGVudCIsIkJ1dHRvbiIsIkhvbWVJY29uIiwiTG9nSW5JY29uIiwiTG9nT3V0SWNvbiIsIk1lbnVJY29uIiwiVXNlcjJJY29uIiwic2lnbkluIiwic2lnbk91dCIsInVzZVNlc3Npb24iLCJTaGVldCIsIlNoZWV0Q29udGVudCIsIlNoZWV0SGVhZGVyIiwiU2hlZXRUaXRsZSIsIlNoZWV0VHJpZ2dlciIsIkF2YXRhciIsIkF2YXRhckltYWdlIiwiSGVhZGVyIiwiZGF0YSIsInN0YXR1cyIsImhhbmRsZUxvZ2luIiwiaGFuZGxlTG9nb3V0IiwiY2xhc3NOYW1lIiwic3JjIiwiYWx0IiwiaGVpZ2h0Iiwid2lkdGgiLCJhc0NoaWxkIiwidmFyaWFudCIsInNpemUiLCJ1c2VyIiwiZGl2IiwiaW1hZ2UiLCJoMiIsIm5hbWUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/_components/header.tsx\n"));

/***/ })

});