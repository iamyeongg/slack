"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkalecture"] = self["webpackChunkalecture"] || []).push([["components_ChatBox_index_tsx-components_ChatList_index_tsx-utils_makeSection_ts"],{

/***/ "./components/Chat/index.tsx":
/*!***********************************!*\
  !*** ./components/Chat/index.tsx ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_Chat_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/Chat/styles */ \"./components/Chat/styles.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'gravatar'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'dayjs'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'regexify-string'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'react-router-dom'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\n\n\n\n\n\n\nvar BACK_URL =  true ? 'http://localhost:3095' : 0;\nvar Chat = function Chat(_ref) {\n  var data = _ref.data;\n  var _useParams = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'react-router-dom'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(),\n    workspace = _useParams.workspace;\n  var user = 'Sender' in data ? data.Sender : data.User;\n  var result = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {\n    return (\n      // uploads\\\\서버주소\n      data.content.startsWith('uploads\\\\') || data.content.startsWith('uploads/') ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"img\", {\n        src: \"\".concat(BACK_URL, \"/\").concat(data.content),\n        style: {\n          maxHeight: 200\n        }\n      }) : Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'regexify-string'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({\n        input: data.content,\n        pattern: /@\\[(.+?)]\\((\\d+?)\\)|\\n/g,\n        decorator: function decorator(match, index) {\n          var arr = match.match(/@\\[(.+?)]\\((\\d+?)\\)/);\n          if (arr) {\n            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'react-router-dom'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {\n              key: match + index,\n              to: \"/workspace/\".concat(workspace, \"/dm/\").concat(arr[2])\n            }, \"@\", arr[1]);\n          }\n          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"br\", {\n            key: index\n          });\n        }\n      })\n    );\n  }, [workspace, data.content]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_Chat_styles__WEBPACK_IMPORTED_MODULE_0__.ChatWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n    className: \"chat-img\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"img\", {\n    src: Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'gravatar'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(user.email, {\n      s: '36px',\n      d: 'retro'\n    }),\n    alt: user.nickname\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n    className: \"chat-text\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n    className: \"chat-user\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"b\", null, user.nickname), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"span\", null, Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'dayjs'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(data.createdAt).format('h:mm A'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"p\", null, result)));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(Chat));\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (typeof __react_refresh_error_overlay__ !== 'undefined') {\n\t\t\terrorOverlay = __react_refresh_error_overlay__;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}\n\n//# sourceURL=webpack://alecture/./components/Chat/index.tsx?");

/***/ }),

/***/ "./components/Chat/styles.tsx":
/*!************************************!*\
  !*** ./components/Chat/styles.tsx ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ChatWrapper: () => (/* binding */ ChatWrapper)\n/* harmony export */ });\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '@emotion/styled'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\nvar _templateObject;\nfunction _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }\n\nvar ChatWrapper = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '@emotion/styled'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_templateObject || (_templateObject = _taggedTemplateLiteral([\"\\n  display: flex;\\n  padding: 8px 20px;\\n  &:hover {\\n    background: #eee;\\n  }\\n  & .chat-img {\\n    display: flex;\\n    width: 36px;\\n    margin-right: 8px;\\n    & img {\\n      width: 36px;\\n      height: 36px;\\n    }\\n  }\\n\"])));\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (typeof __react_refresh_error_overlay__ !== 'undefined') {\n\t\t\terrorOverlay = __react_refresh_error_overlay__;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}\n\n//# sourceURL=webpack://alecture/./components/Chat/styles.tsx?");

/***/ }),

/***/ "./components/ChatBox/index.tsx":
/*!**************************************!*\
  !*** ./components/ChatBox/index.tsx ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_ChatBox_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/ChatBox/styles */ \"./components/ChatBox/styles.tsx\");\n/* harmony import */ var _utils_fetcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @utils/fetcher */ \"./utils/fetcher.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'autosize'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'react-mentions'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'react-router'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'swr'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'gravatar'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\n\n\n\n\n\n\n\n\nvar ChatBox = function ChatBox(_ref) {\n  var chat = _ref.chat,\n    onSubmitForm = _ref.onSubmitForm,\n    onChangeChat = _ref.onChangeChat,\n    placeholder = _ref.placeholder;\n  var _useParams = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'react-router'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(),\n    workspace = _useParams.workspace;\n  var _useSWR = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'swr'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('/api/users', _utils_fetcher__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      dedupingInterval: 2000 // 2초\n    }),\n    userData = _useSWR.data,\n    error = _useSWR.error,\n    revalidate = _useSWR.revalidate,\n    mutate = _useSWR.mutate;\n  var _useSWR2 = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'swr'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(userData ? \"/api/workspaces/\".concat(workspace, \"/members\") : null, _utils_fetcher__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n    memberData = _useSWR2.data;\n  var textareaRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    if (textareaRef.current) {\n      Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'autosize'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(textareaRef.current);\n    }\n  }, []);\n  var onKeydownChat = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function (e) {\n    if (!e.nativeEvent.isComposing && e.key === 'Enter') {\n      if (!e.shiftKey) {\n        e.preventDefault();\n        onSubmitForm(e);\n      }\n    }\n  }, [onSubmitForm]);\n  var renderSuggestion = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function (suggestion, search, highlightedDisplay, index, focus) {\n    if (!memberData) return;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_ChatBox_styles__WEBPACK_IMPORTED_MODULE_0__.EachMention, {\n      focus: focus\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(\"img\", {\n      src: Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'gravatar'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(memberData[index].email, {\n        s: '20px',\n        d: 'retro'\n      }),\n      alt: memberData[index].nickname\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(\"span\", null, highlightedDisplay));\n  }, [memberData]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_ChatBox_styles__WEBPACK_IMPORTED_MODULE_0__.ChatArea, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_ChatBox_styles__WEBPACK_IMPORTED_MODULE_0__.Form, {\n    onSubmit: onSubmitForm\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_ChatBox_styles__WEBPACK_IMPORTED_MODULE_0__.MentionsTextarea, {\n    id: \"editor-chat\",\n    value: chat,\n    onChange: onChangeChat,\n    onKeyPress: onKeydownChat,\n    placeholder: placeholder,\n    inputRef: textareaRef,\n    allowSuggestionsAboveCursor: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'react-mentions'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {\n    appendSpaceOnAdd: true,\n    trigger: \"@\",\n    data: (memberData === null || memberData === void 0 ? void 0 : memberData.map(function (v) {\n      return {\n        id: v.id,\n        display: v.nickname\n      };\n    })) || [],\n    renderSuggestion: renderSuggestion\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_ChatBox_styles__WEBPACK_IMPORTED_MODULE_0__.Toolbox, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_ChatBox_styles__WEBPACK_IMPORTED_MODULE_0__.SendButton, {\n    className: 'c-button-unstyled c-icon_button c-icon_button--light c-icon_button--size_medium c-texty_input__button c-texty_input__button--send' + (chat !== null && chat !== void 0 && chat.trim() ? '' : ' c-texty_input__button--disabled'),\n    \"data-qa\": \"texty_send_button\",\n    \"aria-label\": \"Send message\",\n    \"data-sk\": \"tooltip_parent\",\n    type: \"submit\",\n    disabled: !(chat !== null && chat !== void 0 && chat.trim())\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(\"i\", {\n    className: \"c-icon c-icon--paperplane-filled\",\n    \"aria-hidden\": \"true\"\n  })))));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatBox);\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (typeof __react_refresh_error_overlay__ !== 'undefined') {\n\t\t\terrorOverlay = __react_refresh_error_overlay__;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}\n\n//# sourceURL=webpack://alecture/./components/ChatBox/index.tsx?");

/***/ }),

/***/ "./components/ChatBox/styles.tsx":
/*!***************************************!*\
  !*** ./components/ChatBox/styles.tsx ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ChatArea: () => (/* binding */ ChatArea),\n/* harmony export */   EachMention: () => (/* binding */ EachMention),\n/* harmony export */   Form: () => (/* binding */ Form),\n/* harmony export */   MentionsTextarea: () => (/* binding */ MentionsTextarea),\n/* harmony export */   SendButton: () => (/* binding */ SendButton),\n/* harmony export */   Toolbox: () => (/* binding */ Toolbox)\n/* harmony export */ });\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '@emotion/styled'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'react-mentions'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\nvar _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;\nfunction _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }\n\n\nvar ChatArea = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '@emotion/styled'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_templateObject || (_templateObject = _taggedTemplateLiteral([\"\\n  display: flex;\\n  width: 100%;\\n  padding: 20px;\\n  padding-top: 0;\\n\"])));\nvar Form = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '@emotion/styled'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([\"\\n  color: rgb(29, 28, 29);\\n  font-size: 15px;\\n  width: 100%;\\n  border-radius: 4px;\\n  border: 1px solid rgb(29, 28, 29);\\n\"])));\nvar MentionsTextarea = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '@emotion/styled'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'react-mentions'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral([\"\\n  font-family: Slack-Lato, appleLogo, sans-serif;\\n  font-size: 15px;\\n  padding: 8px 9px;\\n  width: 100%;\\n  & strong {\\n    background: skyblue;\\n  }\\n  & textarea {\\n    height: 44px;\\n    padding: 9px 10px !important;\\n    outline: none !important;\\n    border-radius: 4px !important;\\n    resize: none !important;\\n    line-height: 22px;\\n    border: none;\\n  }\\n  & ul {\\n    border: 1px solid lightgray;\\n    max-height: 200px;\\n    overflow-y: auto;\\n    padding: 9px 10px;\\n    background: white;\\n    border-radius: 4px;\\n    width: 150px;\\n  }\\n\"])));\nvar Toolbox = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '@emotion/styled'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral([\"\\n  position: relative;\\n  background: rgb(248, 248, 248);\\n  height: 41px;\\n  display: flex;\\n  border-top: 1px solid rgb(221, 221, 221);\\n  align-items: center;\\n  border-bottom-left-radius: 4px;\\n  border-bottom-right-radius: 4px;\\n\"])));\nvar SendButton = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '@emotion/styled'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral([\"\\n  position: absolute;\\n  right: 5px;\\n  top: 5px;\\n\"])));\nvar EachMention = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '@emotion/styled'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral([\"\\n  padding: 4px 20px;\\n  background: transparent;\\n  border: none;\\n  display: flex;\\n  align-items: center;\\n  color: rgb(28, 29, 28);\\n  width: 100%;\\n  & img {\\n    margin-right: 5px;\\n  }\\n  \", \";\\n\"])), function (_ref) {\n  var focus = _ref.focus;\n  return focus && \"\\n    background: #1264a3;\\n    color: white;\\n  \";\n});\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (typeof __react_refresh_error_overlay__ !== 'undefined') {\n\t\t\terrorOverlay = __react_refresh_error_overlay__;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}\n\n//# sourceURL=webpack://alecture/./components/ChatBox/styles.tsx?");

/***/ }),

/***/ "./components/ChatList/index.tsx":
/*!***************************************!*\
  !*** ./components/ChatList/index.tsx ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_Chat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/Chat */ \"./components/Chat/index.tsx\");\n/* harmony import */ var _components_ChatList_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/ChatList/styles */ \"./components/ChatList/styles.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'react-custom-scrollbars'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\nfunction _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if (\"string\" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(r) { if (Array.isArray(r)) return r; }\n\n\n\n\nvar ChatList = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(function (_ref, scrollRef) {\n  var chatSections = _ref.chatSections,\n    setSize = _ref.setSize,\n    isReachingEnd = _ref.isReachingEnd;\n  var onScroll = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function (values) {\n    if (values.scrollTop === 0 && !isReachingEnd) {\n      console.log('가장 위');\n      setSize(function (prevSize) {\n        return prevSize + 1;\n      }).then(function () {\n        // 스크롤 위치 유지\n        var current = scrollRef === null || scrollRef === void 0 ? void 0 : scrollRef.current;\n        if (current) {\n          current.scrollTop(current.getScrollHeight() - values.scrollHeight);\n        }\n      });\n    }\n  }, [scrollRef, isReachingEnd, setSize]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_ChatList_styles__WEBPACK_IMPORTED_MODULE_1__.ChatZone, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'react-custom-scrollbars'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {\n    autoHide: true,\n    ref: scrollRef,\n    onScrollFrame: onScroll\n  }, Object.entries(chatSections).map(function (_ref2) {\n    var _ref3 = _slicedToArray(_ref2, 2),\n      date = _ref3[0],\n      chats = _ref3[1];\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_ChatList_styles__WEBPACK_IMPORTED_MODULE_1__.Section, {\n      className: \"section-\".concat(date),\n      key: date\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_ChatList_styles__WEBPACK_IMPORTED_MODULE_1__.StickyHeader, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(\"button\", null, date)), chats.map(function (chat) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_Chat__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        key: chat.id,\n        data: chat\n      });\n    }));\n  })));\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatList);\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (typeof __react_refresh_error_overlay__ !== 'undefined') {\n\t\t\terrorOverlay = __react_refresh_error_overlay__;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}\n\n//# sourceURL=webpack://alecture/./components/ChatList/index.tsx?");

/***/ }),

/***/ "./components/ChatList/styles.tsx":
/*!****************************************!*\
  !*** ./components/ChatList/styles.tsx ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ChatZone: () => (/* binding */ ChatZone),\n/* harmony export */   Section: () => (/* binding */ Section),\n/* harmony export */   StickyHeader: () => (/* binding */ StickyHeader)\n/* harmony export */ });\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '@emotion/styled'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\nvar _templateObject, _templateObject2, _templateObject3;\nfunction _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }\n\nvar ChatZone = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '@emotion/styled'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_templateObject || (_templateObject = _taggedTemplateLiteral([\"\\n  width: 100%;\\n  display: flex;\\n  flex: 1;\\n\"])));\nvar Section = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '@emotion/styled'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([\"\\n  margin-top: 20px;\\n  border-top: 1px solid #eee;\\n\"])));\nvar StickyHeader = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '@emotion/styled'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral([\"\\n  display: flex;\\n  justify-content: center;\\n  flex: 1;\\n  width: 100%;\\n  position: sticky;\\n  top: 14px;\\n  & button {\\n    font-weight: bold;\\n    font-size: 13px;\\n    height: 28px;\\n    line-height: 27px;\\n    padding: 0 16px;\\n    z-index: 2;\\n    --saf-0: rgba(var(--sk_foreground_low, 29, 28, 29), 0.13);\\n    box-shadow: 0 0 0 1px var(--saf-0), 0 1px 3px 0 rgba(0, 0, 0, 0.08);\\n    border-radius: 24px;\\n    position: relative;\\n    top: -13px;\\n    background: white;\\n    border: none;\\n    outline: none;\\n  }\\n\"])));\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (typeof __react_refresh_error_overlay__ !== 'undefined') {\n\t\t\terrorOverlay = __react_refresh_error_overlay__;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}\n\n//# sourceURL=webpack://alecture/./components/ChatList/styles.tsx?");

/***/ }),

/***/ "./utils/makeSection.ts":
/*!******************************!*\
  !*** ./utils/makeSection.ts ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ makeSection)\n/* harmony export */ });\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'dayjs'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\n\nfunction makeSection(chatList) {\n  var sections = {};\n  chatList.forEach(function (chat) {\n    var monthDate = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'dayjs'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(chat.createdAt).format('YYYY-MM-DD');\n    if (Array.isArray(sections[monthDate])) {\n      sections[monthDate].push(chat);\n    } else {\n      sections[monthDate] = [chat];\n    }\n  });\n  return sections;\n}\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (typeof __react_refresh_error_overlay__ !== 'undefined') {\n\t\t\terrorOverlay = __react_refresh_error_overlay__;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}\n\n//# sourceURL=webpack://alecture/./utils/makeSection.ts?");

/***/ })

}]);