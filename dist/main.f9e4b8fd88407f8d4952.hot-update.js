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

var reducer = function reducer(state, action) {
  switch (action.type) {
    case 'ADD':
      state = state + action.payload;
      break;

    case 'SUBTRACT':
      state = state - action.payload;
      break;
  }

  return state;
};

var store = Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(reducer, 30);
store.subscribe(function () {
  console.log('Store updated: ', store.getState());
});
store.dispatch({
  type: 'ADD',
  payload: 20
});
store.dispatch({
  type: 'SUBSTRACT',
  payload: 6
});

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BcHAuanMiXSwibmFtZXMiOlsiQXBwIiwidXNlU3RhdGUiLCJ1c2VyTmFtZSIsInNldFVzZXJOYW1lIiwiY2hhbmdlVXNlck5hbWUiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicGF5bG9hZCIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJzdWJzY3JpYmUiLCJjb25zb2xlIiwibG9nIiwiZ2V0U3RhdGUiLCJkaXNwYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsSUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdBQU0sR0FBTTtBQUFBLGtCQUVrQkMsc0RBQVEsQ0FBQyxRQUFELENBRjFCO0FBQUE7QUFBQSxNQUVQQyxRQUZPO0FBQUEsTUFFR0MsV0FGSDs7QUFJZCxNQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNGLFFBQUQ7QUFBQSxXQUFjQyxXQUFXLENBQUNELFFBQUQsQ0FBekI7QUFBQSxHQUF2Qjs7QUFFQSxTQUNJLHdFQUNJLDJEQUFDLG1EQUFEO0FBQU0sa0JBQWMsRUFBRUU7QUFBdEIsSUFESixFQUVJLDJEQUFDLG1EQUFEO0FBQU0sWUFBUSxFQUFFRjtBQUFoQixJQUZKLENBREo7QUFNSCxDQVpEOztBQWNlRixrRUFBZjs7QUFFQSxJQUFNSyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxLQUFELEVBQVFDLE1BQVIsRUFBbUI7QUFDL0IsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0ksU0FBSyxLQUFMO0FBQ0lGLFdBQUssR0FBR0EsS0FBSyxHQUFHQyxNQUFNLENBQUNFLE9BQXZCO0FBQ0E7O0FBQ0osU0FBSyxVQUFMO0FBQ0lILFdBQUssR0FBR0EsS0FBSyxHQUFHQyxNQUFNLENBQUNFLE9BQXZCO0FBQ0E7QUFOUjs7QUFTQSxTQUFPSCxLQUFQO0FBQ0gsQ0FYRDs7QUFhQSxJQUFNSSxLQUFLLEdBQUdDLHlEQUFXLENBQUNOLE9BQUQsRUFBVSxFQUFWLENBQXpCO0FBRUFLLEtBQUssQ0FBQ0UsU0FBTixDQUFnQixZQUFNO0FBQ2xCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxpQkFBWixFQUErQkosS0FBSyxDQUFDSyxRQUFOLEVBQS9CO0FBQ0gsQ0FGRDtBQUlBTCxLQUFLLENBQUNNLFFBQU4sQ0FBZTtBQUNYUixNQUFJLEVBQUUsS0FESztBQUVYQyxTQUFPLEVBQUU7QUFGRSxDQUFmO0FBS0FDLEtBQUssQ0FBQ00sUUFBTixDQUFlO0FBQ1hSLE1BQUksRUFBRSxXQURLO0FBRVhDLFNBQU8sRUFBRTtBQUZFLENBQWYsRSIsImZpbGUiOiJtYWluLmY5ZTRiOGZkODg0MDdmOGQ0OTUyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gJ3JlZHV4J1xuXG5pbXBvcnQgTWFpbiBmcm9tICcuL3BhZ2VzL01haW4nXG5pbXBvcnQgVXNlciBmcm9tICcuL3BhZ2VzL1VzZXInXG5cbmNvbnN0IEFwcCA9ICgpID0+IHtcblxuICAgIGNvbnN0IFt1c2VyTmFtZSwgc2V0VXNlck5hbWVdID0gdXNlU3RhdGUoJ0phaGFyYScpXG5cbiAgICBjb25zdCBjaGFuZ2VVc2VyTmFtZSA9ICh1c2VyTmFtZSkgPT4gc2V0VXNlck5hbWUodXNlck5hbWUpIFxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPE1haW4gY2hhbmdlVXNlck5hbWU9e2NoYW5nZVVzZXJOYW1lfSAvPlxuICAgICAgICAgICAgPFVzZXIgdXNlck5hbWU9e3VzZXJOYW1lfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcFxuXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgJ0FERCc6XG4gICAgICAgICAgICBzdGF0ZSA9IHN0YXRlICsgYWN0aW9uLnBheWxvYWRcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgJ1NVQlRSQUNUJzpcbiAgICAgICAgICAgIHN0YXRlID0gc3RhdGUgLSBhY3Rpb24ucGF5bG9hZFxuICAgICAgICAgICAgYnJlYWtcbiAgICB9IFxuXG4gICAgcmV0dXJuIHN0YXRlXG59XG5cbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlciwgMzApXG5cbnN0b3JlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ1N0b3JlIHVwZGF0ZWQ6ICcsIHN0b3JlLmdldFN0YXRlKCkpXG59KVxuXG5zdG9yZS5kaXNwYXRjaCh7XG4gICAgdHlwZTogJ0FERCcsXG4gICAgcGF5bG9hZDogMjBcbn0pXG5cbnN0b3JlLmRpc3BhdGNoKHtcbiAgICB0eXBlOiAnU1VCU1RSQUNUJyxcbiAgICBwYXlsb2FkOiA2XG59KSJdLCJzb3VyY2VSb290IjoiIn0=