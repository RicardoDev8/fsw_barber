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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _ui_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/card */ \"(app-pages-browser)/./app/_components/ui/card.tsx\");\n/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/button */ \"(app-pages-browser)/./app/_components/ui/button.tsx\");\n/* harmony import */ var _barrel_optimize_names_CalendarIcon_HomeIcon_LogInIcon_LogOutIcon_MenuIcon_User2Icon_lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=CalendarIcon,HomeIcon,LogInIcon,LogOutIcon,MenuIcon,User2Icon!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/menu.js\");\n/* harmony import */ var _barrel_optimize_names_CalendarIcon_HomeIcon_LogInIcon_LogOutIcon_MenuIcon_User2Icon_lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=CalendarIcon,HomeIcon,LogInIcon,LogOutIcon,MenuIcon,User2Icon!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/log-out.js\");\n/* harmony import */ var _barrel_optimize_names_CalendarIcon_HomeIcon_LogInIcon_LogOutIcon_MenuIcon_User2Icon_lucide_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=CalendarIcon,HomeIcon,LogInIcon,LogOutIcon,MenuIcon,User2Icon!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/user-round.js\");\n/* harmony import */ var _barrel_optimize_names_CalendarIcon_HomeIcon_LogInIcon_LogOutIcon_MenuIcon_User2Icon_lucide_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! __barrel_optimize__?names=CalendarIcon,HomeIcon,LogInIcon,LogOutIcon,MenuIcon,User2Icon!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/log-in.js\");\n/* harmony import */ var _barrel_optimize_names_CalendarIcon_HomeIcon_LogInIcon_LogOutIcon_MenuIcon_User2Icon_lucide_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! __barrel_optimize__?names=CalendarIcon,HomeIcon,LogInIcon,LogOutIcon,MenuIcon,User2Icon!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/home.js\");\n/* harmony import */ var _barrel_optimize_names_CalendarIcon_HomeIcon_LogInIcon_LogOutIcon_MenuIcon_User2Icon_lucide_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! __barrel_optimize__?names=CalendarIcon,HomeIcon,LogInIcon,LogOutIcon,MenuIcon,User2Icon!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/calendar.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _ui_sheet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui/sheet */ \"(app-pages-browser)/./app/_components/ui/sheet.tsx\");\n/* harmony import */ var _ui_avatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui/avatar */ \"(app-pages-browser)/./app/_components/ui/avatar.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst Header = ()=>{\n    var _data_user, _data_user1;\n    _s();\n    const { data, status } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession)();\n    const handleLogin = ()=>{\n        (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.signIn)(\"google\");\n    };\n    const handleLogout = ()=>{\n        (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.signOut)();\n    };\n    var _data_user_image;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_card__WEBPACK_IMPORTED_MODULE_2__.Card, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardContent, {\n            className: \"p-5 justify-between flex flex-row items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    src: \"/logo.png\",\n                    alt: \"FSW Barber\",\n                    height: 22,\n                    width: 120\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Hugo\\\\OneDrive\\\\Documentos\\\\programacao\\\\projects_next\\\\fsw_barber\\\\app\\\\_components\\\\header.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_sheet__WEBPACK_IMPORTED_MODULE_5__.Sheet, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_sheet__WEBPACK_IMPORTED_MODULE_5__.SheetTrigger, {\n                            asChild: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                variant: \"outline\",\n                                size: \"icon\",\n                                className: \"h-8 w-8\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CalendarIcon_HomeIcon_LogInIcon_LogOutIcon_MenuIcon_User2Icon_lucide_react__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                    size: 18\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Hugo\\\\OneDrive\\\\Documentos\\\\programacao\\\\projects_next\\\\fsw_barber\\\\app\\\\_components\\\\header.tsx\",\n                                    lineNumber: 33,\n                                    columnNumber: 29\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Hugo\\\\OneDrive\\\\Documentos\\\\programacao\\\\projects_next\\\\fsw_barber\\\\app\\\\_components\\\\header.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 25\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Hugo\\\\OneDrive\\\\Documentos\\\\programacao\\\\projects_next\\\\fsw_barber\\\\app\\\\_components\\\\header.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_sheet__WEBPACK_IMPORTED_MODULE_5__.SheetContent, {\n                            className: \"p-0\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_sheet__WEBPACK_IMPORTED_MODULE_5__.SheetHeader, {\n                                    className: \"border-b border-solid border-secondary p-5\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_sheet__WEBPACK_IMPORTED_MODULE_5__.SheetTitle, {\n                                        children: \"Menu\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Hugo\\\\OneDrive\\\\Documentos\\\\programacao\\\\projects_next\\\\fsw_barber\\\\app\\\\_components\\\\header.tsx\",\n                                        lineNumber: 39,\n                                        columnNumber: 29\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Hugo\\\\OneDrive\\\\Documentos\\\\programacao\\\\projects_next\\\\fsw_barber\\\\app\\\\_components\\\\header.tsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 25\n                                }, undefined),\n                                (data === null || data === void 0 ? void 0 : data.user) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex justify-between px-5 py-6 items-center\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex items-center gap-3\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_avatar__WEBPACK_IMPORTED_MODULE_6__.Avatar, {\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_avatar__WEBPACK_IMPORTED_MODULE_6__.AvatarImage, {\n                                                        src: (_data_user_image = (_data_user = data.user) === null || _data_user === void 0 ? void 0 : _data_user.image) !== null && _data_user_image !== void 0 ? _data_user_image : \"\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\Hugo\\\\OneDrive\\\\Documentos\\\\programacao\\\\projects_next\\\\fsw_barber\\\\app\\\\_components\\\\header.tsx\",\n                                                        lineNumber: 46,\n                                                        columnNumber: 37\n                                                    }, undefined)\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Hugo\\\\OneDrive\\\\Documentos\\\\programacao\\\\projects_next\\\\fsw_barber\\\\app\\\\_components\\\\header.tsx\",\n                                                    lineNumber: 45,\n                                                    columnNumber: 33\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                    className: \"font-bold\",\n                                                    children: (_data_user1 = data.user) === null || _data_user1 === void 0 ? void 0 : _data_user1.name\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Hugo\\\\OneDrive\\\\Documentos\\\\programacao\\\\projects_next\\\\fsw_barber\\\\app\\\\_components\\\\header.tsx\",\n                                                    lineNumber: 49,\n                                                    columnNumber: 33\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\Hugo\\\\OneDrive\\\\Documentos\\\\programacao\\\\projects_next\\\\fsw_barber\\\\app\\\\_components\\\\header.tsx\",\n                                            lineNumber: 44,\n                                            columnNumber: 33\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                            variant: \"secondary\",\n                                            size: \"icon\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CalendarIcon_HomeIcon_LogInIcon_LogOutIcon_MenuIcon_User2Icon_lucide_react__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                                onClick: handleLogout\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Hugo\\\\OneDrive\\\\Documentos\\\\programacao\\\\projects_next\\\\fsw_barber\\\\app\\\\_components\\\\header.tsx\",\n                                                lineNumber: 53,\n                                                columnNumber: 37\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Hugo\\\\OneDrive\\\\Documentos\\\\programacao\\\\projects_next\\\\fsw_barber\\\\app\\\\_components\\\\header.tsx\",\n                                            lineNumber: 52,\n                                            columnNumber: 33\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Hugo\\\\OneDrive\\\\Documentos\\\\programacao\\\\projects_next\\\\fsw_barber\\\\app\\\\_components\\\\header.tsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 29\n                                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-col px-5 py-6 gap-3\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex items-center gap-2 p-1\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CalendarIcon_HomeIcon_LogInIcon_LogOutIcon_MenuIcon_User2Icon_lucide_react__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                                    size: 32\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Hugo\\\\OneDrive\\\\Documentos\\\\programacao\\\\projects_next\\\\fsw_barber\\\\app\\\\_components\\\\header.tsx\",\n                                                    lineNumber: 59,\n                                                    columnNumber: 37\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                    className: \"font-bold\",\n                                                    children: \"Ol\\xe1, fa\\xe7a seu login\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Hugo\\\\OneDrive\\\\Documentos\\\\programacao\\\\projects_next\\\\fsw_barber\\\\app\\\\_components\\\\header.tsx\",\n                                                    lineNumber: 60,\n                                                    columnNumber: 37\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\Hugo\\\\OneDrive\\\\Documentos\\\\programacao\\\\projects_next\\\\fsw_barber\\\\app\\\\_components\\\\header.tsx\",\n                                            lineNumber: 58,\n                                            columnNumber: 33\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                            onClick: handleLogin,\n                                            variant: \"secondary\",\n                                            size: \"icon\",\n                                            className: \"w-full justify-start\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CalendarIcon_HomeIcon_LogInIcon_LogOutIcon_MenuIcon_User2Icon_lucide_react__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                                    className: \"mr-2 ml-2\",\n                                                    size: 18\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Hugo\\\\OneDrive\\\\Documentos\\\\programacao\\\\projects_next\\\\fsw_barber\\\\app\\\\_components\\\\header.tsx\",\n                                                    lineNumber: 67,\n                                                    columnNumber: 37\n                                                }, undefined),\n                                                \"Fazer login\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\Hugo\\\\OneDrive\\\\Documentos\\\\programacao\\\\projects_next\\\\fsw_barber\\\\app\\\\_components\\\\header.tsx\",\n                                            lineNumber: 62,\n                                            columnNumber: 33\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Hugo\\\\OneDrive\\\\Documentos\\\\programacao\\\\projects_next\\\\fsw_barber\\\\app\\\\_components\\\\header.tsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-col gap-3 px-5\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                            variant: \"outline\",\n                                            className: \"justify-start\",\n                                            asChild: true,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CalendarIcon_HomeIcon_LogInIcon_LogOutIcon_MenuIcon_User2Icon_lucide_react__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                                                        size: 18,\n                                                        className: \"mr-2\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\Hugo\\\\OneDrive\\\\Documentos\\\\programacao\\\\projects_next\\\\fsw_barber\\\\app\\\\_components\\\\header.tsx\",\n                                                        lineNumber: 76,\n                                                        columnNumber: 29\n                                                    }, undefined),\n                                                    \"Inicio\"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\Hugo\\\\OneDrive\\\\Documentos\\\\programacao\\\\projects_next\\\\fsw_barber\\\\app\\\\_components\\\\header.tsx\",\n                                                lineNumber: 75,\n                                                columnNumber: 33\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Hugo\\\\OneDrive\\\\Documentos\\\\programacao\\\\projects_next\\\\fsw_barber\\\\app\\\\_components\\\\header.tsx\",\n                                            lineNumber: 74,\n                                            columnNumber: 29\n                                        }, undefined),\n                                        (data === null || data === void 0 ? void 0 : data.user) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                            variant: \"outline\",\n                                            className: \"justify-start\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CalendarIcon_HomeIcon_LogInIcon_LogOutIcon_MenuIcon_User2Icon_lucide_react__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                                                    size: 18,\n                                                    className: \"mr-2\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Hugo\\\\OneDrive\\\\Documentos\\\\programacao\\\\projects_next\\\\fsw_barber\\\\app\\\\_components\\\\header.tsx\",\n                                                    lineNumber: 83,\n                                                    columnNumber: 29\n                                                }, undefined),\n                                                \"Agendamentos\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\Hugo\\\\OneDrive\\\\Documentos\\\\programacao\\\\projects_next\\\\fsw_barber\\\\app\\\\_components\\\\header.tsx\",\n                                            lineNumber: 82,\n                                            columnNumber: 29\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Hugo\\\\OneDrive\\\\Documentos\\\\programacao\\\\projects_next\\\\fsw_barber\\\\app\\\\_components\\\\header.tsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Hugo\\\\OneDrive\\\\Documentos\\\\programacao\\\\projects_next\\\\fsw_barber\\\\app\\\\_components\\\\header.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Hugo\\\\OneDrive\\\\Documentos\\\\programacao\\\\projects_next\\\\fsw_barber\\\\app\\\\_components\\\\header.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Hugo\\\\OneDrive\\\\Documentos\\\\programacao\\\\projects_next\\\\fsw_barber\\\\app\\\\_components\\\\header.tsx\",\n            lineNumber: 27,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Hugo\\\\OneDrive\\\\Documentos\\\\programacao\\\\projects_next\\\\fsw_barber\\\\app\\\\_components\\\\header.tsx\",\n        lineNumber: 26,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Header, \"veXTdcMu9GiBUzcjw6BYmVQGSPw=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9fY29tcG9uZW50cy9oZWFkZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUcrQjtBQUNlO0FBQ1Q7QUFDNkQ7QUFDcEM7QUFDMEI7QUFDdEM7QUFDckI7QUFFN0IsTUFBTXFCLFNBQVM7UUFpQ3VDQyxZQUdNQTs7SUFsQ3hELE1BQU0sRUFBQ0EsSUFBSSxFQUFFQyxNQUFNLEVBQUMsR0FBR1gsMkRBQVVBO0lBRWpDLE1BQU1ZLGNBQWM7UUFDaEJkLHVEQUFNQSxDQUFDO0lBQ1g7SUFFQSxNQUFNZSxlQUFlO1FBQ2pCZCx3REFBT0E7SUFDWDtRQXVCa0RXO0lBckJsRCxxQkFDSSw4REFBQ3JCLDBDQUFJQTtrQkFDRCw0RUFBQ0MsaURBQVdBO1lBQUN3QixXQUFVOzs4QkFDbkIsOERBQUMxQixrREFBS0E7b0JBQUMyQixLQUFJO29CQUFZQyxLQUFJO29CQUFhQyxRQUFRO29CQUFJQyxPQUFPOzs7Ozs7OEJBRTNELDhEQUFDakIsNENBQUtBOztzQ0FDRiw4REFBQ0ksbURBQVlBOzRCQUFDYyxPQUFPO3NDQUNqQiw0RUFBQzVCLDhDQUFNQTtnQ0FBQzZCLFNBQVE7Z0NBQVVDLE1BQUs7Z0NBQU9QLFdBQVU7MENBQzVDLDRFQUFDbEIseUlBQVFBO29DQUFDeUIsTUFBTTs7Ozs7Ozs7Ozs7Ozs7OztzQ0FJeEIsOERBQUNuQixtREFBWUE7NEJBQUNZLFdBQVU7OzhDQUNwQiw4REFBQ1gsa0RBQVdBO29DQUFDVyxXQUFVOzhDQUNuQiw0RUFBQ1YsaURBQVVBO2tEQUFDOzs7Ozs7Ozs7OztnQ0FHZk0sQ0FBQUEsaUJBQUFBLDJCQUFBQSxLQUFNWSxJQUFJLGtCQUNQLDhEQUFDQztvQ0FBSVQsV0FBVTs7c0RBQ1gsOERBQUNTOzRDQUFJVCxXQUFVOzs4REFDZiw4REFBQ1IsOENBQU1BOzhEQUNILDRFQUFDQyxtREFBV0E7d0RBQUNRLEtBQUtMLENBQUFBLG9CQUFBQSxhQUFBQSxLQUFLWSxJQUFJLGNBQVRaLGlDQUFBQSxXQUFXYyxLQUFLLGNBQWhCZCw4QkFBQUEsbUJBQW9COzs7Ozs7Ozs7Ozs4REFHMUMsOERBQUNlO29EQUFHWCxXQUFVOytEQUFjSixjQUFBQSxLQUFLWSxJQUFJLGNBQVRaLGtDQUFBQSxZQUFXZ0IsSUFBSTs7Ozs7Ozs7Ozs7O3NEQUczQyw4REFBQ25DLDhDQUFNQTs0Q0FBQzZCLFNBQVE7NENBQVlDLE1BQUs7c0RBQzdCLDRFQUFDMUIseUlBQVVBO2dEQUFDZ0MsU0FBU2Q7Ozs7Ozs7Ozs7Ozs7Ozs7OERBSTdCLDhEQUFDVTtvQ0FBSVQsV0FBVTs7c0RBQ1gsOERBQUNTOzRDQUFJVCxXQUFVOzs4REFDWCw4REFBQ2pCLDBJQUFTQTtvREFBQ3dCLE1BQU07Ozs7Ozs4REFDakIsOERBQUNJO29EQUFHWCxXQUFVOzhEQUFhOzs7Ozs7Ozs7Ozs7c0RBRS9CLDhEQUFDdkIsOENBQU1BOzRDQUNQb0MsU0FBU2Y7NENBQ1RRLFNBQVE7NENBQ1JDLE1BQUs7NENBQ0xQLFdBQVU7OzhEQUNOLDhEQUFDcEIsMElBQVNBO29EQUFDb0IsV0FBVTtvREFBWU8sTUFBTTs7Ozs7O2dEQUFNOzs7Ozs7Ozs7Ozs7OzhDQU16RCw4REFBQ0U7b0NBQUlULFdBQVU7O3NEQUNYLDhEQUFDdkIsOENBQU1BOzRDQUFDNkIsU0FBUTs0Q0FBVU4sV0FBVTs0Q0FBZ0JLLE9BQU87c0RBQ3ZELDRFQUFDWCxpREFBSUE7O2tFQUNULDhEQUFDZiwwSUFBUUE7d0RBQUM0QixNQUFNO3dEQUFJUCxXQUFVOzs7Ozs7b0RBQVE7Ozs7Ozs7Ozs7Ozt3Q0FLckNKLENBQUFBLGlCQUFBQSwyQkFBQUEsS0FBTVksSUFBSSxtQkFDWCw4REFBQy9CLDhDQUFNQTs0Q0FBQzZCLFNBQVE7NENBQVVOLFdBQVU7OzhEQUNwQyw4REFBQ3RCLDBJQUFZQTtvREFBQzZCLE1BQU07b0RBQUlQLFdBQVU7Ozs7OztnREFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVXRFO0dBaEZNTDs7UUFFcUJULHVEQUFVQTs7O0tBRi9CUztBQWtGTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvX2NvbXBvbmVudHMvaGVhZGVyLnRzeD9iMWY4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuXHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgeyBDYXJkLCBDYXJkQ29udGVudCB9IGZyb20gXCIuL3VpL2NhcmRcIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIi4vdWkvYnV0dG9uXCI7XHJcbmltcG9ydCB7IENhbGVuZGFySWNvbiwgSG9tZUljb24sIExvZ0luSWNvbiwgTG9nT3V0SWNvbiwgTWVudUljb24sIFVzZXIySWNvbiB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcclxuaW1wb3J0IHsgc2lnbkluLCBzaWduT3V0LCB1c2VTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xyXG5pbXBvcnQgeyBTaGVldCwgU2hlZXRDb250ZW50LCBTaGVldEhlYWRlciwgU2hlZXRUaXRsZSwgU2hlZXRUcmlnZ2VyIH0gZnJvbSBcIi4vdWkvc2hlZXRcIjtcclxuaW1wb3J0IHsgQXZhdGFyLCBBdmF0YXJJbWFnZSB9IGZyb20gXCIuL3VpL2F2YXRhclwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3Qge2RhdGEsIHN0YXR1c30gPSB1c2VTZXNzaW9uKCk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlTG9naW4gPSAoKSA9PiB7XHJcbiAgICAgICAgc2lnbkluKFwiZ29vZ2xlXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcclxuICAgICAgICBzaWduT3V0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuICggXHJcbiAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9XCJwLTUganVzdGlmeS1iZXR3ZWVuIGZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyXCIgPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9sb2dvLnBuZ1wiIGFsdD1cIkZTVyBCYXJiZXJcIiBoZWlnaHQ9ezIyfSB3aWR0aD17MTIwfSAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxTaGVldD5cclxuICAgICAgICAgICAgICAgICAgICA8U2hlZXRUcmlnZ2VyIGFzQ2hpbGQgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lXCIgc2l6ZT1cImljb25cIiBjbGFzc05hbWU9XCJoLTggdy04XCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJY29uIHNpemU9ezE4fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L1NoZWV0VHJpZ2dlcj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPFNoZWV0Q29udGVudCBjbGFzc05hbWU9XCJwLTBcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTaGVldEhlYWRlciBjbGFzc05hbWU9XCJib3JkZXItYiBib3JkZXItc29saWQgYm9yZGVyLXNlY29uZGFyeSBwLTVcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2hlZXRUaXRsZT5NZW51PC9TaGVldFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NoZWV0SGVhZGVyPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2RhdGE/LnVzZXIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIHB4LTUgcHktNiBpdGVtcy1jZW50ZXJcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtM1wiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXZhdGFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXZhdGFySW1hZ2Ugc3JjPXtkYXRhLnVzZXI/LmltYWdlID8/ICcnfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQXZhdGFyPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCIgPntkYXRhLnVzZXI/Lm5hbWV9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwic2Vjb25kYXJ5XCIgc2l6ZT1cImljb25cIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2dPdXRJY29uIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHB4LTUgcHktNiBnYXAtM1wiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHAtMVwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFVzZXIySWNvbiBzaXplPXszMn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiID5PbMOhLCBmYcOnYSBzZXUgbG9naW48L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTG9naW59IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwiaWNvblwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBqdXN0aWZ5LXN0YXJ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2dJbkljb24gY2xhc3NOYW1lPVwibXItMiBtbC0yXCIgc2l6ZT17MTh9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZhemVyIGxvZ2luXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtMyBweC01XCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZVwiIGNsYXNzTmFtZT1cImp1c3RpZnktc3RhcnRcIiBhc0NoaWxkID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIb21lSWNvbiBzaXplPXsxOH0gY2xhc3NOYW1lPVwibXItMlwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbmljaW9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YT8udXNlciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lXCIgY2xhc3NOYW1lPVwianVzdGlmeS1zdGFydFwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYWxlbmRhckljb24gc2l6ZT17MTh9IGNsYXNzTmFtZT1cIm1yLTJcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWdlbmRhbWVudG9zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU2hlZXRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgPC9TaGVldD5cclxuICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICA8L0NhcmQ+XHJcbiAgICAgKTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiXSwibmFtZXMiOlsiSW1hZ2UiLCJDYXJkIiwiQ2FyZENvbnRlbnQiLCJCdXR0b24iLCJDYWxlbmRhckljb24iLCJIb21lSWNvbiIsIkxvZ0luSWNvbiIsIkxvZ091dEljb24iLCJNZW51SWNvbiIsIlVzZXIySWNvbiIsInNpZ25JbiIsInNpZ25PdXQiLCJ1c2VTZXNzaW9uIiwiU2hlZXQiLCJTaGVldENvbnRlbnQiLCJTaGVldEhlYWRlciIsIlNoZWV0VGl0bGUiLCJTaGVldFRyaWdnZXIiLCJBdmF0YXIiLCJBdmF0YXJJbWFnZSIsIkxpbmsiLCJIZWFkZXIiLCJkYXRhIiwic3RhdHVzIiwiaGFuZGxlTG9naW4iLCJoYW5kbGVMb2dvdXQiLCJjbGFzc05hbWUiLCJzcmMiLCJhbHQiLCJoZWlnaHQiLCJ3aWR0aCIsImFzQ2hpbGQiLCJ2YXJpYW50Iiwic2l6ZSIsInVzZXIiLCJkaXYiLCJpbWFnZSIsImgyIiwibmFtZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/_components/header.tsx\n"));

/***/ })

});