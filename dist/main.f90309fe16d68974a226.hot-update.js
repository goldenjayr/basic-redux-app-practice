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
        userName: action.payload
      });
      break;
  }

  console.warn(state);
  return state;
};

var store = Object(redux__WEBPACK_IMPORTED_MODULE_2__["createStore"])(reducer, initialState, Object(redux__WEBPACK_IMPORTED_MODULE_2__["applyMiddleware"])(redux_logger__WEBPACK_IMPORTED_MODULE_4___default.a));
Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["render"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
  store: store
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_App__WEBPACK_IMPORTED_MODULE_5__["default"], null)), document.getElementById('root'));

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwidXNlck5hbWUiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicGF5bG9hZCIsImNvbnNvbGUiLCJ3YXJuIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsImFwcGx5TWlkZGxld2FyZSIsImxvZ2dlciIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUEsSUFBTUEsWUFBWSxHQUFHO0FBQ2pCQyxVQUFRLEVBQUU7QUFETyxDQUFyQjs7QUFJQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFrQztBQUFBLE1BQWpDQyxLQUFpQyx1RUFBekJILFlBQXlCO0FBQUEsTUFBWEksTUFBVzs7QUFDOUMsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0ksU0FBSyxVQUFMO0FBQ0lGLFdBQUsscUJBQ0VBLEtBREY7QUFFREYsZ0JBQVEsRUFBRUcsTUFBTSxDQUFDRTtBQUZoQixRQUFMO0FBSUo7QUFOSjs7QUFRQUMsU0FBTyxDQUFDQyxJQUFSLENBQWFMLEtBQWI7QUFDQSxTQUFPQSxLQUFQO0FBQ0gsQ0FYRDs7QUFhQSxJQUFNTSxLQUFLLEdBQUdDLHlEQUFXLENBQUNSLE9BQUQsRUFBVUYsWUFBVixFQUF3QlcsNkRBQWUsQ0FBQ0MsbURBQUQsQ0FBdkMsQ0FBekI7QUFHQUMsd0RBQU0sQ0FDRiwyREFBQyxvREFBRDtBQUFVLE9BQUssRUFBRUo7QUFBakIsR0FDSywyREFBQyx1REFBRCxPQURMLENBREUsRUFJRkssUUFBUSxDQUFDQyxjQUFULENBQXdCLE1BQXhCLENBSkUsQ0FBTixDIiwiZmlsZSI6Im1haW4uZjkwMzA5ZmUxNmQ2ODk3NGEyMjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7cmVuZGVyfSBmcm9tICdyZWFjdC1kb20nXG5cbmltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUsIGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBsb2dnZXIgZnJvbSAncmVkdXgtbG9nZ2VyJ1xuXG5pbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50cy9BcHAnICBcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICAgIHVzZXJOYW1lOiAnSmFoYXJhJ1xufVxuXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgJ1NFVF9OQU1FJzogXG4gICAgICAgICAgICBzdGF0ZSA9IHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICB1c2VyTmFtZTogYWN0aW9uLnBheWxvYWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgYnJlYWtcbiAgICB9XG4gICAgY29uc29sZS53YXJuKHN0YXRlKVxuICAgIHJldHVybiBzdGF0ZVxufVxuXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSwgYXBwbHlNaWRkbGV3YXJlKGxvZ2dlcikpXG5cblxucmVuZGVyKFxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgICAgPEFwcCAvPlxuICAgIDwvUHJvdmlkZXI+LCBcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKSJdLCJzb3VyY2VSb290IjoiIn0=