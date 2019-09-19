webpackHotUpdate("main",{

/***/ "./src/components/App.js":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _pages_Main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/Main */ "./src/components/pages/Main.js");
/* harmony import */ var _pages_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/User */ "./src/components/pages/User.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var App = function App() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('Jahara'),
      _useState2 = _slicedToArray(_useState, 2),
      userName = _useState2[0],
      setUserName = _useState2[1];

  var changeUserName = function changeUserName(userName) {
    return setUserName(userName);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_Main__WEBPACK_IMPORTED_MODULE_2__["default"], {
    changeUserName: changeUserName
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_User__WEBPACK_IMPORTED_MODULE_3__["default"], {
    userName: userName
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (App);
var initialState = {
  result: 1,
  lastValues: []
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'ADD':
      state.result += action.payload;
      break;

    case 'SUBTRACT':
      state.result -= action.payload;
      break;
  }

  return state;
};

var store = Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(reducer);
store.subscribe(function () {
  console.log('Store updated: ', store.getState());
});
store.dispatch({
  type: 'ADD',
  payload: 20
});
store.dispatch({
  type: 'SUBTRACT',
  payload: 67
});
store.dispatch({
  type: 'ADD',
  payload: 3
});

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BcHAuanMiXSwibmFtZXMiOlsiQXBwIiwidXNlU3RhdGUiLCJ1c2VyTmFtZSIsInNldFVzZXJOYW1lIiwiY2hhbmdlVXNlck5hbWUiLCJpbml0aWFsU3RhdGUiLCJyZXN1bHQiLCJsYXN0VmFsdWVzIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwic3Vic2NyaWJlIiwiY29uc29sZSIsImxvZyIsImdldFN0YXRlIiwiZGlzcGF0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBOztBQUVBLElBQU1BLEdBQUcsR0FBRyxTQUFOQSxHQUFNLEdBQU07QUFBQSxrQkFFa0JDLHNEQUFRLENBQUMsUUFBRCxDQUYxQjtBQUFBO0FBQUEsTUFFUEMsUUFGTztBQUFBLE1BRUdDLFdBRkg7O0FBSWQsTUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDRixRQUFEO0FBQUEsV0FBY0MsV0FBVyxDQUFDRCxRQUFELENBQXpCO0FBQUEsR0FBdkI7O0FBRUEsU0FDSSx3RUFDSSwyREFBQyxtREFBRDtBQUFNLGtCQUFjLEVBQUVFO0FBQXRCLElBREosRUFFSSwyREFBQyxtREFBRDtBQUFNLFlBQVEsRUFBRUY7QUFBaEIsSUFGSixDQURKO0FBTUgsQ0FaRDs7QUFjZUYsa0VBQWY7QUFFQSxJQUFNSyxZQUFZLEdBQUc7QUFDakJDLFFBQU0sRUFBRSxDQURTO0FBRWpCQyxZQUFVLEVBQUU7QUFGSyxDQUFyQjs7QUFLQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFrQztBQUFBLE1BQWpDQyxLQUFpQyx1RUFBekJKLFlBQXlCO0FBQUEsTUFBWEssTUFBVzs7QUFDOUMsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0ksU0FBSyxLQUFMO0FBQ0lGLFdBQUssQ0FBQ0gsTUFBTixJQUFnQkksTUFBTSxDQUFDRSxPQUF2QjtBQUNBOztBQUNKLFNBQUssVUFBTDtBQUNJSCxXQUFLLENBQUNILE1BQU4sSUFBZ0JJLE1BQU0sQ0FBQ0UsT0FBdkI7QUFDQTtBQU5SOztBQVNBLFNBQU9ILEtBQVA7QUFDSCxDQVhEOztBQWFBLElBQU1JLEtBQUssR0FBR0MseURBQVcsQ0FBQ04sT0FBRCxDQUF6QjtBQUVBSyxLQUFLLENBQUNFLFNBQU4sQ0FBZ0IsWUFBTTtBQUNsQkMsU0FBTyxDQUFDQyxHQUFSLENBQVksaUJBQVosRUFBK0JKLEtBQUssQ0FBQ0ssUUFBTixFQUEvQjtBQUNILENBRkQ7QUFJQUwsS0FBSyxDQUFDTSxRQUFOLENBQWU7QUFDWFIsTUFBSSxFQUFFLEtBREs7QUFFWEMsU0FBTyxFQUFFO0FBRkUsQ0FBZjtBQUtBQyxLQUFLLENBQUNNLFFBQU4sQ0FBZTtBQUNYUixNQUFJLEVBQUUsVUFESztBQUVYQyxTQUFPLEVBQUU7QUFGRSxDQUFmO0FBS0FDLEtBQUssQ0FBQ00sUUFBTixDQUFlO0FBQ1hSLE1BQUksRUFBRSxLQURLO0FBRVhDLFNBQU8sRUFBRTtBQUZFLENBQWYsRSIsImZpbGUiOiJtYWluLmYxOWNjMzJiZGE2MjA0YWE5MTJkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gJ3JlZHV4J1xuXG5pbXBvcnQgTWFpbiBmcm9tICcuL3BhZ2VzL01haW4nXG5pbXBvcnQgVXNlciBmcm9tICcuL3BhZ2VzL1VzZXInXG5cbmNvbnN0IEFwcCA9ICgpID0+IHtcblxuICAgIGNvbnN0IFt1c2VyTmFtZSwgc2V0VXNlck5hbWVdID0gdXNlU3RhdGUoJ0phaGFyYScpXG5cbiAgICBjb25zdCBjaGFuZ2VVc2VyTmFtZSA9ICh1c2VyTmFtZSkgPT4gc2V0VXNlck5hbWUodXNlck5hbWUpIFxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPE1haW4gY2hhbmdlVXNlck5hbWU9e2NoYW5nZVVzZXJOYW1lfSAvPlxuICAgICAgICAgICAgPFVzZXIgdXNlck5hbWU9e3VzZXJOYW1lfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcFxuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgcmVzdWx0OiAxLFxuICAgIGxhc3RWYWx1ZXM6IFtdXG59XG5cbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnQUREJzpcbiAgICAgICAgICAgIHN0YXRlLnJlc3VsdCArPSBhY3Rpb24ucGF5bG9hZFxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAnU1VCVFJBQ1QnOlxuICAgICAgICAgICAgc3RhdGUucmVzdWx0IC09IGFjdGlvbi5wYXlsb2FkXG4gICAgICAgICAgICBicmVha1xuICAgIH0gXG5cbiAgICByZXR1cm4gc3RhdGVcbn1cblxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyKVxuXG5zdG9yZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdTdG9yZSB1cGRhdGVkOiAnLCBzdG9yZS5nZXRTdGF0ZSgpKVxufSlcblxuc3RvcmUuZGlzcGF0Y2goe1xuICAgIHR5cGU6ICdBREQnLFxuICAgIHBheWxvYWQ6IDIwXG59KVxuXG5zdG9yZS5kaXNwYXRjaCh7XG4gICAgdHlwZTogJ1NVQlRSQUNUJyxcbiAgICBwYXlsb2FkOiA2N1xufSlcblxuc3RvcmUuZGlzcGF0Y2goe1xuICAgIHR5cGU6ICdBREQnLFxuICAgIHBheWxvYWQ6IDNcbn0pIl0sInNvdXJjZVJvb3QiOiIifQ==