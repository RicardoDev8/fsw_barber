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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _ui_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/card */ \"(app-pages-browser)/./app/_components/ui/card.tsx\");\n/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/button */ \"(app-pages-browser)/./app/_components/ui/button.tsx\");\n/* harmony import */ var _barrel_optimize_names_CalendarIcon_HomeIcon_LogInIcon_LogOutIcon_MenuIcon_User2Icon_lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=CalendarIcon,HomeIcon,LogInIcon,LogOutIcon,MenuIcon,User2Icon!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/menu.js\");\n/* harmony import */ var _barrel_optimize_names_CalendarIcon_HomeIcon_LogInIcon_LogOutIcon_MenuIcon_User2Icon_lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=CalendarIcon,HomeIcon,LogInIcon,LogOutIcon,MenuIcon,User2Icon!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/log-out.js\");\n/* harmony import */ var _barrel_optimize_names_CalendarIcon_HomeIcon_LogInIcon_LogOutIcon_MenuIcon_User2Icon_lucide_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=CalendarIcon,HomeIcon,LogInIcon,LogOutIcon,MenuIcon,User2Icon!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/user-round.js\");\n/* harmony import */ var _barrel_optimize_names_CalendarIcon_HomeIcon_LogInIcon_LogOutIcon_MenuIcon_User2Icon_lucide_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! __barrel_optimize__?names=CalendarIcon,HomeIcon,LogInIcon,LogOutIcon,MenuIcon,User2Icon!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/log-in.js\");\n/* harmony import */ var _barrel_optimize_names_CalendarIcon_HomeIcon_LogInIcon_LogOutIcon_MenuIcon_User2Icon_lucide_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! __barrel_optimize__?names=CalendarIcon,HomeIcon,LogInIcon,LogOutIcon,MenuIcon,User2Icon!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/home.js\");\n/* harmony import */ var _barrel_optimize_names_CalendarIcon_HomeIcon_LogInIcon_LogOutIcon_MenuIcon_User2Icon_lucide_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! __barrel_optimize__?names=CalendarIcon,HomeIcon,LogInIcon,LogOutIcon,MenuIcon,User2Icon!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/calendar.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _ui_sheet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui/sheet */ \"(app-pages-browser)/./app/_components/ui/sheet.tsx\");\n/* harmony import */ var _ui_avatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui/avatar */ \"(app-pages-browser)/./app/_components/ui/avatar.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst Header = ()=>{\n    var _data_user, _data_user1;\n    _s();\n    const { data, status } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession)();\n    const handleLogin = ()=>{\n        (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.signIn)(\"google\");\n    };\n    const handleLogout = ()=>{\n        (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.signOut)();\n    };\n    var _data_user_image;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_card__WEBPACK_IMPORTED_MODULE_2__.Card, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardContent, {\n            className: \"p-5 justify-between flex flex-row items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    src: \"/logo.png\",\n                    alt: \"FSW Barber\",\n                    height: 22,\n                    width: 120\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Hugo\\\\OneDrive\\\\Documentos\\\\programacao\\\\projects_next\\\\fsw_barber\\\\app\\\\_components\\\\header.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_sheet__WEBPACK_IMPORTED_MODULE_5__.Sheet, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_sheet__WEBPACK_IMPORTED_MODULE_5__.SheetTrigger, {\n                            asChild: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                variant: \"outline\",\n                                size: \"icon\",\n                                className: \"h-8 w-8\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CalendarIcon_HomeIcon_LogInIcon_LogOutIcon_MenuIcon_User2Icon_lucide_react__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                    size: 18\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Hugo\\\\OneDrive\\\\Documentos\\\\programacao\\\\projects_next\\\\fsw_barber\\\\app\\\\_components\\\\header.tsx\",\n                                    lineNumber: 33,\n                                    columnNumber: 29\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Hugo\\\\OneDrive\\\\Documentos\\\\programacao\\\\projects_next\\\\fsw_barber\\\\app\\\\_components\\\\header.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 25\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Hugo\\\\OneDrive\\\\Documentos\\\\programacao\\\\projects_next\\\\fsw_barber\\\\app\\\\_components\\\\header.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_sheet__WEBPACK_IMPORTED_MODULE_5__.SheetContent, {\n                            className: \"p-0\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_sheet__WEBPACK_IMPORTED_MODULE_5__.SheetHeader, {\n                                    className: \"border-b border-solid border-secondary p-5\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_sheet__WEBPACK_IMPORTED_MODULE_5__.SheetTitle, {\n                                        children: \"Menu\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Hugo\\\\OneDrive\\\\Documentos\\\\programacao\\\\projects_next\\\\fsw_barber\\\\app\\\\_components\\\\header.tsx\",\n                                        lineNumber: 39,\n                                        columnNumber: 29\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Hugo\\\\OneDrive\\\\Documentos\\\\programacao\\\\projects_next\\\\fsw_barber\\\\app\\\\_components\\\\header.tsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 25\n                                }, undefined),\n                                (data === null || data === void 0 ? void 0 : data.user) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex justify-between px-5 py-6 items-center\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex items-center gap-3\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_avatar__WEBPACK_IMPORTED_MODULE_6__.Avatar, {\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_avatar__WEBPACK_IMPORTED_MODULE_6__.AvatarImage, {\n                                                        src: (_data_user_image = (_data_user = data.user) === null || _data_user === void 0 ? void 0 : _data_user.image) !== null && _data_user_image !== void 0 ? _data_user_image : \"\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\Hugo\\\\OneDrive\\\\Documentos\\\\programacao\\\\projects_next\\\\fsw_barber\\\\app\\\\_components\\\\header.tsx\",\n                                                        lineNumber: 46,\n                                                        columnNumber: 37\n                                                    }, undefined)\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Hugo\\\\OneDrive\\\\Documentos\\\\programacao\\\\projects_next\\\\fsw_barber\\\\app\\\\_components\\\\header.tsx\",\n                                                    lineNumber: 45,\n                                                    columnNumber: 33\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                    className: \"font-bold\",\n                                                    children: (_data_user1 = data.user) === null || _data_user1 === void 0 ? void 0 : _data_user1.name\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Hugo\\\\OneDrive\\\\Documentos\\\\programacao\\\\projects_next\\\\fsw_barber\\\\app\\\\_components\\\\header.tsx\",\n                                                    lineNumber: 49,\n                                                    columnNumber: 33\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\Hugo\\\\OneDrive\\\\Documentos\\\\programacao\\\\projects_next\\\\fsw_barber\\\\app\\\\_components\\\\header.tsx\",\n                                            lineNumber: 44,\n                                            columnNumber: 33\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                            variant: \"secondary\",\n                                            size: \"icon\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CalendarIcon_HomeIcon_LogInIcon_LogOutIcon_MenuIcon_User2Icon_lucide_react__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                                onClick: handleLogout\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Hugo\\\\OneDrive\\\\Documentos\\\\programacao\\\\projects_next\\\\fsw_barber\\\\app\\\\_components\\\\header.tsx\",\n                                                lineNumber: 53,\n                                                columnNumber: 37\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Hugo\\\\OneDrive\\\\Documentos\\\\programacao\\\\projects_next\\\\fsw_barber\\\\app\\\\_components\\\\header.tsx\",\n                                            lineNumber: 52,\n                                            columnNumber: 33\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Hugo\\\\OneDrive\\\\Documentos\\\\programacao\\\\projects_next\\\\fsw_barber\\\\app\\\\_components\\\\header.tsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 29\n                                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-col px-5 py-6 gap-3\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex items-center gap-2 p-1\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CalendarIcon_HomeIcon_LogInIcon_LogOutIcon_MenuIcon_User2Icon_lucide_react__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                                    size: 32\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Hugo\\\\OneDrive\\\\Documentos\\\\programacao\\\\projects_next\\\\fsw_barber\\\\app\\\\_components\\\\header.tsx\",\n                                                    lineNumber: 59,\n                                                    columnNumber: 37\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                    className: \"font-bold\",\n                                                    children: \"Ol\\xe1, fa\\xe7a seu login\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Hugo\\\\OneDrive\\\\Documentos\\\\programacao\\\\projects_next\\\\fsw_barber\\\\app\\\\_components\\\\header.tsx\",\n                                                    lineNumber: 60,\n                                                    columnNumber: 37\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\Hugo\\\\OneDrive\\\\Documentos\\\\programacao\\\\projects_next\\\\fsw_barber\\\\app\\\\_components\\\\header.tsx\",\n                                            lineNumber: 58,\n                                            columnNumber: 33\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                            onClick: handleLogin,\n                                            variant: \"secondary\",\n                                            size: \"icon\",\n                                            className: \"w-full justify-start\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CalendarIcon_HomeIcon_LogInIcon_LogOutIcon_MenuIcon_User2Icon_lucide_react__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                                    className: \"mr-2 ml-2\",\n                                                    size: 18\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Hugo\\\\OneDrive\\\\Documentos\\\\programacao\\\\projects_next\\\\fsw_barber\\\\app\\\\_components\\\\header.tsx\",\n                                                    lineNumber: 67,\n                                                    columnNumber: 37\n                                                }, undefined),\n                                                \"Fazer login\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\Hugo\\\\OneDrive\\\\Documentos\\\\programacao\\\\projects_next\\\\fsw_barber\\\\app\\\\_components\\\\header.tsx\",\n                                            lineNumber: 62,\n                                            columnNumber: 33\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Hugo\\\\OneDrive\\\\Documentos\\\\programacao\\\\projects_next\\\\fsw_barber\\\\app\\\\_components\\\\header.tsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-col gap-3 px-5\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                            variant: \"outline\",\n                                            className: \"justify-start\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Hugo\\\\OneDrive\\\\Documentos\\\\programacao\\\\projects_next\\\\fsw_barber\\\\app\\\\_components\\\\header.tsx\",\n                                                    lineNumber: 75,\n                                                    columnNumber: 33\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CalendarIcon_HomeIcon_LogInIcon_LogOutIcon_MenuIcon_User2Icon_lucide_react__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                                                    size: 18,\n                                                    className: \"mr-2\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Hugo\\\\OneDrive\\\\Documentos\\\\programacao\\\\projects_next\\\\fsw_barber\\\\app\\\\_components\\\\header.tsx\",\n                                                    lineNumber: 77,\n                                                    columnNumber: 29\n                                                }, undefined),\n                                                \"Inicio\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\Hugo\\\\OneDrive\\\\Documentos\\\\programacao\\\\projects_next\\\\fsw_barber\\\\app\\\\_components\\\\header.tsx\",\n                                            lineNumber: 74,\n                                            columnNumber: 29\n                                        }, undefined),\n                                        (data === null || data === void 0 ? void 0 : data.user) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                            variant: \"outline\",\n                                            className: \"justify-start\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CalendarIcon_HomeIcon_LogInIcon_LogOutIcon_MenuIcon_User2Icon_lucide_react__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                                                    size: 18,\n                                                    className: \"mr-2\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Hugo\\\\OneDrive\\\\Documentos\\\\programacao\\\\projects_next\\\\fsw_barber\\\\app\\\\_components\\\\header.tsx\",\n                                                    lineNumber: 83,\n                                                    columnNumber: 29\n                                                }, undefined),\n                                                \"Agendamentos\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\Hugo\\\\OneDrive\\\\Documentos\\\\programacao\\\\projects_next\\\\fsw_barber\\\\app\\\\_components\\\\header.tsx\",\n                                            lineNumber: 82,\n                                            columnNumber: 29\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Hugo\\\\OneDrive\\\\Documentos\\\\programacao\\\\projects_next\\\\fsw_barber\\\\app\\\\_components\\\\header.tsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Hugo\\\\OneDrive\\\\Documentos\\\\programacao\\\\projects_next\\\\fsw_barber\\\\app\\\\_components\\\\header.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Hugo\\\\OneDrive\\\\Documentos\\\\programacao\\\\projects_next\\\\fsw_barber\\\\app\\\\_components\\\\header.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Hugo\\\\OneDrive\\\\Documentos\\\\programacao\\\\projects_next\\\\fsw_barber\\\\app\\\\_components\\\\header.tsx\",\n            lineNumber: 27,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Hugo\\\\OneDrive\\\\Documentos\\\\programacao\\\\projects_next\\\\fsw_barber\\\\app\\\\_components\\\\header.tsx\",\n        lineNumber: 26,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Header, \"veXTdcMu9GiBUzcjw6BYmVQGSPw=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9fY29tcG9uZW50cy9oZWFkZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUcrQjtBQUNlO0FBQ1Q7QUFDNkQ7QUFDcEM7QUFDMEI7QUFDdEM7QUFDckI7QUFFN0IsTUFBTXFCLFNBQVM7UUFpQ3VDQyxZQUdNQTs7SUFsQ3hELE1BQU0sRUFBQ0EsSUFBSSxFQUFFQyxNQUFNLEVBQUMsR0FBR1gsMkRBQVVBO0lBRWpDLE1BQU1ZLGNBQWM7UUFDaEJkLHVEQUFNQSxDQUFDO0lBQ1g7SUFFQSxNQUFNZSxlQUFlO1FBQ2pCZCx3REFBT0E7SUFDWDtRQXVCa0RXO0lBckJsRCxxQkFDSSw4REFBQ3JCLDBDQUFJQTtrQkFDRCw0RUFBQ0MsaURBQVdBO1lBQUN3QixXQUFVOzs4QkFDbkIsOERBQUMxQixrREFBS0E7b0JBQUMyQixLQUFJO29CQUFZQyxLQUFJO29CQUFhQyxRQUFRO29CQUFJQyxPQUFPOzs7Ozs7OEJBRTNELDhEQUFDakIsNENBQUtBOztzQ0FDRiw4REFBQ0ksbURBQVlBOzRCQUFDYyxPQUFPO3NDQUNqQiw0RUFBQzVCLDhDQUFNQTtnQ0FBQzZCLFNBQVE7Z0NBQVVDLE1BQUs7Z0NBQU9QLFdBQVU7MENBQzVDLDRFQUFDbEIseUlBQVFBO29DQUFDeUIsTUFBTTs7Ozs7Ozs7Ozs7Ozs7OztzQ0FJeEIsOERBQUNuQixtREFBWUE7NEJBQUNZLFdBQVU7OzhDQUNwQiw4REFBQ1gsa0RBQVdBO29DQUFDVyxXQUFVOzhDQUNuQiw0RUFBQ1YsaURBQVVBO2tEQUFDOzs7Ozs7Ozs7OztnQ0FHZk0sQ0FBQUEsaUJBQUFBLDJCQUFBQSxLQUFNWSxJQUFJLGtCQUNQLDhEQUFDQztvQ0FBSVQsV0FBVTs7c0RBQ1gsOERBQUNTOzRDQUFJVCxXQUFVOzs4REFDZiw4REFBQ1IsOENBQU1BOzhEQUNILDRFQUFDQyxtREFBV0E7d0RBQUNRLEtBQUtMLENBQUFBLG9CQUFBQSxhQUFBQSxLQUFLWSxJQUFJLGNBQVRaLGlDQUFBQSxXQUFXYyxLQUFLLGNBQWhCZCw4QkFBQUEsbUJBQW9COzs7Ozs7Ozs7Ozs4REFHMUMsOERBQUNlO29EQUFHWCxXQUFVOytEQUFjSixjQUFBQSxLQUFLWSxJQUFJLGNBQVRaLGtDQUFBQSxZQUFXZ0IsSUFBSTs7Ozs7Ozs7Ozs7O3NEQUczQyw4REFBQ25DLDhDQUFNQTs0Q0FBQzZCLFNBQVE7NENBQVlDLE1BQUs7c0RBQzdCLDRFQUFDMUIseUlBQVVBO2dEQUFDZ0MsU0FBU2Q7Ozs7Ozs7Ozs7Ozs7Ozs7OERBSTdCLDhEQUFDVTtvQ0FBSVQsV0FBVTs7c0RBQ1gsOERBQUNTOzRDQUFJVCxXQUFVOzs4REFDWCw4REFBQ2pCLDBJQUFTQTtvREFBQ3dCLE1BQU07Ozs7Ozs4REFDakIsOERBQUNJO29EQUFHWCxXQUFVOzhEQUFhOzs7Ozs7Ozs7Ozs7c0RBRS9CLDhEQUFDdkIsOENBQU1BOzRDQUNQb0MsU0FBU2Y7NENBQ1RRLFNBQVE7NENBQ1JDLE1BQUs7NENBQ0xQLFdBQVU7OzhEQUNOLDhEQUFDcEIsMElBQVNBO29EQUFDb0IsV0FBVTtvREFBWU8sTUFBTTs7Ozs7O2dEQUFNOzs7Ozs7Ozs7Ozs7OzhDQU16RCw4REFBQ0U7b0NBQUlULFdBQVU7O3NEQUNYLDhEQUFDdkIsOENBQU1BOzRDQUFDNkIsU0FBUTs0Q0FBVU4sV0FBVTs7OERBQ2hDLDhEQUFDTixpREFBSUE7Ozs7OzhEQUVULDhEQUFDZiwwSUFBUUE7b0RBQUM0QixNQUFNO29EQUFJUCxXQUFVOzs7Ozs7Z0RBQVE7Ozs7Ozs7d0NBSXJDSixDQUFBQSxpQkFBQUEsMkJBQUFBLEtBQU1ZLElBQUksbUJBQ1gsOERBQUMvQiw4Q0FBTUE7NENBQUM2QixTQUFROzRDQUFVTixXQUFVOzs4REFDcEMsOERBQUN0QiwwSUFBWUE7b0RBQUM2QixNQUFNO29EQUFJUCxXQUFVOzs7Ozs7Z0RBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVV0RTtHQWhGTUw7O1FBRXFCVCx1REFBVUE7OztLQUYvQlM7QUFrRk4sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL19jb21wb25lbnRzL2hlYWRlci50c3g/YjFmOCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcblxyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHsgQ2FyZCwgQ2FyZENvbnRlbnQgfSBmcm9tIFwiLi91aS9jYXJkXCI7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCIuL3VpL2J1dHRvblwiO1xyXG5pbXBvcnQgeyBDYWxlbmRhckljb24sIEhvbWVJY29uLCBMb2dJbkljb24sIExvZ091dEljb24sIE1lbnVJY29uLCBVc2VyMkljb24gfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XHJcbmltcG9ydCB7IHNpZ25Jbiwgc2lnbk91dCwgdXNlU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcclxuaW1wb3J0IHsgU2hlZXQsIFNoZWV0Q29udGVudCwgU2hlZXRIZWFkZXIsIFNoZWV0VGl0bGUsIFNoZWV0VHJpZ2dlciB9IGZyb20gXCIuL3VpL3NoZWV0XCI7XHJcbmltcG9ydCB7IEF2YXRhciwgQXZhdGFySW1hZ2UgfSBmcm9tIFwiLi91aS9hdmF0YXJcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHtkYXRhLCBzdGF0dXN9ID0gdXNlU2Vzc2lvbigpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUxvZ2luID0gKCkgPT4ge1xyXG4gICAgICAgIHNpZ25JbihcImdvb2dsZVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVMb2dvdXQgPSAoKSA9PiB7XHJcbiAgICAgICAgc2lnbk91dCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoIFxyXG4gICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICA8Q2FyZENvbnRlbnQgY2xhc3NOYW1lPVwicC01IGp1c3RpZnktYmV0d2VlbiBmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlclwiID5cclxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvbG9nby5wbmdcIiBhbHQ9XCJGU1cgQmFyYmVyXCIgaGVpZ2h0PXsyMn0gd2lkdGg9ezEyMH0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8U2hlZXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNoZWV0VHJpZ2dlciBhc0NoaWxkID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZVwiIHNpemU9XCJpY29uXCIgY2xhc3NOYW1lPVwiaC04IHctOFwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SWNvbiBzaXplPXsxOH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TaGVldFRyaWdnZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxTaGVldENvbnRlbnQgY2xhc3NOYW1lPVwicC0wXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2hlZXRIZWFkZXIgY2xhc3NOYW1lPVwiYm9yZGVyLWIgYm9yZGVyLXNvbGlkIGJvcmRlci1zZWNvbmRhcnkgcC01XCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNoZWV0VGl0bGU+TWVudTwvU2hlZXRUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TaGVldEhlYWRlcj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhPy51c2VyID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBweC01IHB5LTYgaXRlbXMtY2VudGVyXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTNcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEF2YXRhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEF2YXRhckltYWdlIHNyYz17ZGF0YS51c2VyPy5pbWFnZSA/PyAnJ30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0F2YXRhcj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiID57ZGF0YS51c2VyPy5uYW1lfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInNlY29uZGFyeVwiIHNpemU9XCJpY29uXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9nT3V0SWNvbiBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBweC01IHB5LTYgZ2FwLTNcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBwLTFcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxVc2VyMkljb24gc2l6ZT17MzJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmb250LWJvbGRcIiA+T2zDoSwgZmHDp2Egc2V1IGxvZ2luPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUxvZ2lufSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImljb25cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwganVzdGlmeS1zdGFydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9nSW5JY29uIGNsYXNzTmFtZT1cIm1yLTIgbWwtMlwiIHNpemU9ezE4fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGYXplciBsb2dpblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTMgcHgtNVwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVcIiBjbGFzc05hbWU9XCJqdXN0aWZ5LXN0YXJ0XCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIb21lSWNvbiBzaXplPXsxOH0gY2xhc3NOYW1lPVwibXItMlwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbmljaW9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhPy51c2VyICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVcIiBjbGFzc05hbWU9XCJqdXN0aWZ5LXN0YXJ0XCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhbGVuZGFySWNvbiBzaXplPXsxOH0gY2xhc3NOYW1lPVwibXItMlwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZ2VuZGFtZW50b3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TaGVldENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICA8L1NoZWV0PlxyXG4gICAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgIDwvQ2FyZD5cclxuICAgICApO1xyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyJdLCJuYW1lcyI6WyJJbWFnZSIsIkNhcmQiLCJDYXJkQ29udGVudCIsIkJ1dHRvbiIsIkNhbGVuZGFySWNvbiIsIkhvbWVJY29uIiwiTG9nSW5JY29uIiwiTG9nT3V0SWNvbiIsIk1lbnVJY29uIiwiVXNlcjJJY29uIiwic2lnbkluIiwic2lnbk91dCIsInVzZVNlc3Npb24iLCJTaGVldCIsIlNoZWV0Q29udGVudCIsIlNoZWV0SGVhZGVyIiwiU2hlZXRUaXRsZSIsIlNoZWV0VHJpZ2dlciIsIkF2YXRhciIsIkF2YXRhckltYWdlIiwiTGluayIsIkhlYWRlciIsImRhdGEiLCJzdGF0dXMiLCJoYW5kbGVMb2dpbiIsImhhbmRsZUxvZ291dCIsImNsYXNzTmFtZSIsInNyYyIsImFsdCIsImhlaWdodCIsIndpZHRoIiwiYXNDaGlsZCIsInZhcmlhbnQiLCJzaXplIiwidXNlciIsImRpdiIsImltYWdlIiwiaDIiLCJuYW1lIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/_components/header.tsx\n"));

/***/ })

});