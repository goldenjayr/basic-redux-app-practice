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

  return state;
};

var store = Object(redux__WEBPACK_IMPORTED_MODULE_2__["createStore"])(reducer, initialState, Object(redux__WEBPACK_IMPORTED_MODULE_2__["applyMiddleware"])(redux_logger__WEBPACK_IMPORTED_MODULE_4___default.a));
Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["render"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
  store: store
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_App__WEBPACK_IMPORTED_MODULE_5__["default"], null)), document.getElementById('root'));

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwidXNlck5hbWUiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicGF5bG9hZCIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJhcHBseU1pZGRsZXdhcmUiLCJsb2dnZXIiLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBLElBQU1BLFlBQVksR0FBRztBQUNqQkMsVUFBUSxFQUFFO0FBRE8sQ0FBckI7O0FBSUEsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBa0M7QUFBQSxNQUFqQ0MsS0FBaUMsdUVBQXpCSCxZQUF5QjtBQUFBLE1BQVhJLE1BQVc7O0FBQzlDLFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNJLFNBQUssVUFBTDtBQUNJRixXQUFLLHFCQUNFQSxLQURGO0FBRURGLGdCQUFRLEVBQUVHLE1BQU0sQ0FBQ0U7QUFGaEIsUUFBTDtBQUlKO0FBTko7O0FBU0EsU0FBT0gsS0FBUDtBQUNILENBWEQ7O0FBYUEsSUFBTUksS0FBSyxHQUFHQyx5REFBVyxDQUFDTixPQUFELEVBQVVGLFlBQVYsRUFBd0JTLDZEQUFlLENBQUNDLG1EQUFELENBQXZDLENBQXpCO0FBR0FDLHdEQUFNLENBQ0YsMkRBQUMsb0RBQUQ7QUFBVSxPQUFLLEVBQUVKO0FBQWpCLEdBQ0ssMkRBQUMsdURBQUQsT0FETCxDQURFLEVBSUZLLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixNQUF4QixDQUpFLENBQU4sQyIsImZpbGUiOiJtYWluLmY0MjExOGZiMDU3ZDdiNjlmZGI5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge3JlbmRlcn0gZnJvbSAncmVhY3QtZG9tJ1xuXG5pbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlLCBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCdcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgbG9nZ2VyIGZyb20gJ3JlZHV4LWxvZ2dlcidcblxuaW1wb3J0IEFwcCBmcm9tICcuL2NvbXBvbmVudHMvQXBwJyAgXG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICB1c2VyTmFtZTogJ0phaGFyYSdcbn1cblxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlICdTRVRfTkFNRSc6IFxuICAgICAgICAgICAgc3RhdGUgPSB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgdXNlck5hbWU6IGFjdGlvbi5wYXlsb2FkXG4gICAgICAgICAgICB9XG4gICAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlXG59XG5cbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlciwgaW5pdGlhbFN0YXRlLCBhcHBseU1pZGRsZXdhcmUobG9nZ2VyKSlcblxuXG5yZW5kZXIoXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICAgICA8QXBwIC8+XG4gICAgPC9Qcm92aWRlcj4sIFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpIl0sInNvdXJjZVJvb3QiOiIifQ==