webpackHotUpdate("main",{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-logger */ "./node_modules/redux-logger/dist/redux-logger.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/App */ "./src/components/App.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var initialState = {
  userName: 'Jahara'
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'SET_NAME':
      state = _objectSpread({}, state, {
        userName: 'Dongje'
      });
      break;
  }

  return state;
};

var store = Object(redux__WEBPACK_IMPORTED_MODULE_2__["createStore"])(reducer, initialState, Object(redux__WEBPACK_IMPORTED_MODULE_2__["applyMiddleware"])(redux_logger__WEBPACK_IMPORTED_MODULE_4___default.a));
Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["render"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
  store: store
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_App__WEBPACK_IMPORTED_MODULE_5__["default"], null)), document.getElementById('root'));

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwidXNlck5hbWUiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsImFwcGx5TWlkZGxld2FyZSIsImxvZ2dlciIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUEsSUFBTUEsWUFBWSxHQUFHO0FBQ2pCQyxVQUFRLEVBQUU7QUFETyxDQUFyQjs7QUFJQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFrQztBQUFBLE1BQWpDQyxLQUFpQyx1RUFBekJILFlBQXlCO0FBQUEsTUFBWEksTUFBVzs7QUFDOUMsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0ksU0FBSyxVQUFMO0FBQ0lGLFdBQUsscUJBQ0VBLEtBREY7QUFFREYsZ0JBQVEsRUFBRTtBQUZULFFBQUw7QUFJSjtBQU5KOztBQVNBLFNBQU9FLEtBQVA7QUFDSCxDQVhEOztBQWFBLElBQU1HLEtBQUssR0FBR0MseURBQVcsQ0FBQ0wsT0FBRCxFQUFVRixZQUFWLEVBQXdCUSw2REFBZSxDQUFDQyxtREFBRCxDQUF2QyxDQUF6QjtBQUdBQyx3REFBTSxDQUNGLDJEQUFDLG9EQUFEO0FBQVUsT0FBSyxFQUFFSjtBQUFqQixHQUNLLDJEQUFDLHVEQUFELE9BREwsQ0FERSxFQUlGSyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FKRSxDQUFOLEMiLCJmaWxlIjoibWFpbi4xM2NmMzIzNGYyZDRiYmYyN2FkYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtyZW5kZXJ9IGZyb20gJ3JlYWN0LWRvbSdcblxuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSwgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IGxvZ2dlciBmcm9tICdyZWR1eC1sb2dnZXInXG5cbmltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL0FwcCcgIFxuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgdXNlck5hbWU6ICdKYWhhcmEnXG59XG5cbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnU0VUX05BTUUnOiBcbiAgICAgICAgICAgIHN0YXRlID0ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIHVzZXJOYW1lOiAnRG9uZ2plJ1xuICAgICAgICAgICAgfVxuICAgICAgICBicmVha1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZVxufVxuXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSwgYXBwbHlNaWRkbGV3YXJlKGxvZ2dlcikpXG5cblxucmVuZGVyKFxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgICAgPEFwcCAvPlxuICAgIDwvUHJvdmlkZXI+LCBcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKSJdLCJzb3VyY2VSb290IjoiIn0=