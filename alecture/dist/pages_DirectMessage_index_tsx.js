"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkalecture"] = self["webpackChunkalecture"] || []).push([["pages_DirectMessage_index_tsx"],{

/***/ "./pages/DirectMessage/index.tsx":
/*!***************************************!*\
  !*** ./pages/DirectMessage/index.tsx ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_ChatBox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/ChatBox */ \"./components/ChatBox/index.tsx\");\n/* harmony import */ var _components_ChatList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/ChatList */ \"./components/ChatList/index.tsx\");\n/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hooks/useInput */ \"./hooks/useInput.ts\");\n/* harmony import */ var _hooks_useSocket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @hooks/useSocket */ \"./hooks/useSocket.ts\");\n/* harmony import */ var _pages_DirectMessage_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @pages/DirectMessage/styles */ \"./pages/DirectMessage/styles.tsx\");\n/* harmony import */ var _utils_fetcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @utils/fetcher */ \"./utils/fetcher.ts\");\n/* harmony import */ var _utils_makeSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @utils/makeSection */ \"./utils/makeSection.ts\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'axios'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'gravatar'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'react-router'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'swr'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\nfunction _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if (\"string\" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(r) { if (Array.isArray(r)) return r; }\n\n\n\n\n\n\n\n\n\n\n\n\nvar DirectMessage = function DirectMessage() {\n  var _chatData$, _chatData;\n  var _useParams = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'react-router'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(),\n    workspace = _useParams.workspace,\n    id = _useParams.id;\n  var _useSWR = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'swr'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(\"/api/workspaces/\".concat(workspace, \"/users/\").concat(id), _utils_fetcher__WEBPACK_IMPORTED_MODULE_5__[\"default\"]),\n    userData = _useSWR.data;\n  var _useSWR2 = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'swr'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('/api/users', _utils_fetcher__WEBPACK_IMPORTED_MODULE_5__[\"default\"]),\n    myData = _useSWR2.data;\n  var _useInput = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(''),\n    _useInput2 = _slicedToArray(_useInput, 3),\n    chat = _useInput2[0],\n    onChangeChat = _useInput2[1],\n    setChat = _useInput2[2];\n  var _useSWRInfinite = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'swr'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(function (index) {\n      return \"/api/workspaces/\".concat(workspace, \"/dms/\").concat(id, \"/chats?perPage=20&page=\").concat(index + 1);\n    }, _utils_fetcher__WEBPACK_IMPORTED_MODULE_5__[\"default\"]),\n    chatData = _useSWRInfinite.data,\n    mutateChat = _useSWRInfinite.mutate,\n    revalidate = _useSWRInfinite.revalidate,\n    setSize = _useSWRInfinite.setSize;\n  var _useSocket = (0,_hooks_useSocket__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(workspace),\n    _useSocket2 = _slicedToArray(_useSocket, 1),\n    socket = _useSocket2[0];\n  var isEmpty = (chatData === null || chatData === void 0 || (_chatData$ = chatData[0]) === null || _chatData$ === void 0 ? void 0 : _chatData$.length) === 0;\n  var isReachingEnd = isEmpty || chatData && ((_chatData = chatData[chatData.length - 1]) === null || _chatData === void 0 ? void 0 : _chatData.length) < 20 || false;\n  var scrollbarRef = (0,react__WEBPACK_IMPORTED_MODULE_8__.useRef)(null);\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false),\n    _useState2 = _slicedToArray(_useState, 2),\n    dragOver = _useState2[0],\n    setDragOver = _useState2[1];\n  var onSubmitForm = (0,react__WEBPACK_IMPORTED_MODULE_8__.useCallback)(function (e) {\n    e.preventDefault();\n    console.log(chat);\n    if (chat !== null && chat !== void 0 && chat.trim() && chatData) {\n      var savedChat = chat;\n      mutateChat(function (prevChatData) {\n        var _chatData$0$;\n        prevChatData === null || prevChatData === void 0 || prevChatData[0].unshift({\n          id: (((_chatData$0$ = chatData[0][0]) === null || _chatData$0$ === void 0 ? void 0 : _chatData$0$.id) || 0) + 1,\n          content: savedChat,\n          SenderId: myData.id,\n          Sender: myData,\n          ReceiverId: userData.id,\n          Receiver: userData,\n          createdAt: new Date()\n        });\n        return prevChatData;\n      }, false).then(function () {\n        var _scrollbarRef$current;\n        setChat('');\n        (_scrollbarRef$current = scrollbarRef.current) === null || _scrollbarRef$current === void 0 || _scrollbarRef$current.scrollToBottom();\n      });\n      Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'axios'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(\"/api/workspaces/\".concat(workspace, \"/dms/\").concat(id, \"/chats\"), {\n        content: chat\n      }).then(function () {\n        revalidate();\n      }).catch(console.error);\n    }\n  }, [chat, chatData, myData, userData, workspace, id]);\n  var onMessage = (0,react__WEBPACK_IMPORTED_MODULE_8__.useCallback)(function (data) {\n    // id는 상대방 아이디\n    if (data.SenderId === Number(id) && myData.id !== Number(id)) {\n      mutateChat(function (chatData) {\n        chatData === null || chatData === void 0 || chatData[0].unshift(data);\n        return chatData;\n      }, false).then(function () {\n        if (scrollbarRef.current) {\n          if (scrollbarRef.current.getScrollHeight() < scrollbarRef.current.getClientHeight() + scrollbarRef.current.getScrollTop() + 150) {\n            var _scrollbarRef$current2;\n            console.log('scrollToBottom!', (_scrollbarRef$current2 = scrollbarRef.current) === null || _scrollbarRef$current2 === void 0 ? void 0 : _scrollbarRef$current2.getValues());\n            setTimeout(function () {\n              var _scrollbarRef$current3;\n              (_scrollbarRef$current3 = scrollbarRef.current) === null || _scrollbarRef$current3 === void 0 || _scrollbarRef$current3.scrollToBottom();\n            }, 50);\n          }\n        }\n      });\n    }\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(function () {\n    socket === null || socket === void 0 || socket.on('dm', onMessage);\n    return function () {\n      socket === null || socket === void 0 || socket.off('dm', onMessage);\n    };\n  }, [socket, onMessage]);\n\n  // 로딩 시 스크롤바 제일 아래로\n  (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(function () {\n    if ((chatData === null || chatData === void 0 ? void 0 : chatData.length) === 1) {\n      setTimeout(function () {\n        var _scrollbarRef$current4;\n        (_scrollbarRef$current4 = scrollbarRef.current) === null || _scrollbarRef$current4 === void 0 || _scrollbarRef$current4.scrollToBottom();\n      }, 100);\n    }\n  }, [chatData]);\n  var onDrop = (0,react__WEBPACK_IMPORTED_MODULE_8__.useCallback)(function (e) {\n    e.preventDefault();\n    console.log(e);\n    var formData = new FormData();\n    if (e.dataTransfer.items) {\n      // Use DataTransferItemList interface to access the file(s)\n      for (var i = 0; i < e.dataTransfer.items.length; i++) {\n        // If dropped items aren't files, reject them\n        if (e.dataTransfer.items[i].kind === 'file') {\n          var file = e.dataTransfer.items[i].getAsFile();\n          console.log('... file[' + i + '].name = ' + file.name);\n          formData.append('image', file);\n        }\n      }\n    } else {\n      // Use DataTransfer interface to access the file(s)\n      for (var _i = 0; _i < e.dataTransfer.files.length; _i++) {\n        console.log('... file[' + _i + '].name = ' + e.dataTransfer.files[_i].name);\n        formData.append('image', e.dataTransfer.files[_i]);\n      }\n    }\n    Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'axios'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(\"/api/workspaces/\".concat(workspace, \"/dms/\").concat(id, \"/images\"), formData).then(function () {\n      setDragOver(false);\n      revalidate();\n    });\n  }, [revalidate, workspace, id]);\n  var onDragOver = (0,react__WEBPACK_IMPORTED_MODULE_8__.useCallback)(function (e) {\n    e.preventDefault();\n    console.log(e);\n    setDragOver(true);\n  }, []);\n  if (!userData || !myData) {\n    return null;\n  }\n  var chatSections = (0,_utils_makeSection__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(chatData ? chatData.flat().reverse() : []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(_pages_DirectMessage_styles__WEBPACK_IMPORTED_MODULE_4__.Container, {\n    onDrop: onDrop,\n    onDragOver: onDragOver\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(_pages_DirectMessage_styles__WEBPACK_IMPORTED_MODULE_4__.Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(\"img\", {\n    src: Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'gravatar'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(userData.email, {\n      s: '24px',\n      d: 'retro'\n    }),\n    alt: userData.nickname\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(\"span\", null, userData.nickname)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(_components_ChatList__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    chatSections: chatSections,\n    ref: scrollbarRef,\n    setSize: setSize,\n    isReachingEnd: isReachingEnd\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(_components_ChatBox__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n    chat: chat,\n    onChangeChat: onChangeChat,\n    onSubmitForm: onSubmitForm\n  }), dragOver && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(_pages_DirectMessage_styles__WEBPACK_IMPORTED_MODULE_4__.DragOver, null, \"\\uC5C5\\uB85C\\uB4DC!\"));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DirectMessage);\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (typeof __react_refresh_error_overlay__ !== 'undefined') {\n\t\t\terrorOverlay = __react_refresh_error_overlay__;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}\n\n//# sourceURL=webpack://alecture/./pages/DirectMessage/index.tsx?");

/***/ }),

/***/ "./pages/DirectMessage/styles.tsx":
/*!****************************************!*\
  !*** ./pages/DirectMessage/styles.tsx ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Container: () => (/* binding */ Container),\n/* harmony export */   DragOver: () => (/* binding */ DragOver),\n/* harmony export */   Header: () => (/* binding */ Header)\n/* harmony export */ });\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '@emotion/styled'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\nvar _templateObject, _templateObject2, _templateObject3;\nfunction _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }\n\nvar Container = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '@emotion/styled'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_templateObject || (_templateObject = _taggedTemplateLiteral([\"\\n  display: flex;\\n  flex-wrap: wrap;\\n  height: calc(100vh - 38px);\\n  flex-flow: column;\\n  position: relative;\\n\"])));\nvar Header = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '@emotion/styled'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([\"\\n  height: 64px;\\n  display: flex;\\n  width: 100%;\\n  --saf-0: rgba(var(--sk_foreground_low, 29, 28, 29), 0.13);\\n  box-shadow: 0 1px 0 var(--saf-0);\\n  padding: 20px 16px 20px 20px;\\n  font-weight: bold;\\n  align-items: center;\\n  & img {\\n    margin-right: 5px;\\n  }\\n\"])));\nvar DragOver = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '@emotion/styled'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral([\"\\n  position: absolute;\\n  top: 64px;\\n  left: 0;\\n  width: 100%;\\n  height: calc(100% - 64px);\\n  background: white;\\n  opacity: 0.7;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  font-size: 40px;\\n\"])));\n\nconst $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nconst $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tlet errorOverlay;\n\t\tif (typeof __react_refresh_error_overlay__ !== 'undefined') {\n\t\t\terrorOverlay = __react_refresh_error_overlay__;\n\t\t}\n\t\tlet testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}\n\n//# sourceURL=webpack://alecture/./pages/DirectMessage/styles.tsx?");

/***/ })

}]);