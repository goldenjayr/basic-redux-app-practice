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
  type: 'SUBTRACT',
  payload: 67
});
store.dispatch({
  type: 'ADD',
  payload: 3
});

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BcHAuanMiXSwibmFtZXMiOlsiQXBwIiwidXNlU3RhdGUiLCJ1c2VyTmFtZSIsInNldFVzZXJOYW1lIiwiY2hhbmdlVXNlck5hbWUiLCJpbml0aWFsU3RhdGUiLCJyZXN1bHQiLCJsYXN0VmFsdWVzIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwic3Vic2NyaWJlIiwiY29uc29sZSIsImxvZyIsImdldFN0YXRlIiwiZGlzcGF0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBOztBQUVBLElBQU1BLEdBQUcsR0FBRyxTQUFOQSxHQUFNLEdBQU07QUFBQSxrQkFFa0JDLHNEQUFRLENBQUMsUUFBRCxDQUYxQjtBQUFBO0FBQUEsTUFFUEMsUUFGTztBQUFBLE1BRUdDLFdBRkg7O0FBSWQsTUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDRixRQUFEO0FBQUEsV0FBY0MsV0FBVyxDQUFDRCxRQUFELENBQXpCO0FBQUEsR0FBdkI7O0FBRUEsU0FDSSx3RUFDSSwyREFBQyxtREFBRDtBQUFNLGtCQUFjLEVBQUVFO0FBQXRCLElBREosRUFFSSwyREFBQyxtREFBRDtBQUFNLFlBQVEsRUFBRUY7QUFBaEIsSUFGSixDQURKO0FBTUgsQ0FaRDs7QUFjZUYsa0VBQWY7QUFFQSxJQUFNSyxZQUFZLEdBQUc7QUFDakJDLFFBQU0sRUFBRSxDQURTO0FBRWpCQyxZQUFVLEVBQUU7QUFGSyxDQUFyQjs7QUFLQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxLQUFELEVBQVFDLE1BQVIsRUFBbUI7QUFDL0IsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0ksU0FBSyxLQUFMO0FBQ0lGLFdBQUssR0FBR0EsS0FBSyxHQUFHQyxNQUFNLENBQUNFLE9BQXZCO0FBQ0E7O0FBQ0osU0FBSyxVQUFMO0FBQ0lILFdBQUssR0FBR0EsS0FBSyxHQUFHQyxNQUFNLENBQUNFLE9BQXZCO0FBQ0E7QUFOUjs7QUFTQSxTQUFPSCxLQUFQO0FBQ0gsQ0FYRDs7QUFhQSxJQUFNSSxLQUFLLEdBQUdDLHlEQUFXLENBQUNOLE9BQUQsRUFBVSxFQUFWLENBQXpCO0FBRUFLLEtBQUssQ0FBQ0UsU0FBTixDQUFnQixZQUFNO0FBQ2xCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxpQkFBWixFQUErQkosS0FBSyxDQUFDSyxRQUFOLEVBQS9CO0FBQ0gsQ0FGRDtBQUlBTCxLQUFLLENBQUNNLFFBQU4sQ0FBZTtBQUNYUixNQUFJLEVBQUUsS0FESztBQUVYQyxTQUFPLEVBQUU7QUFGRSxDQUFmO0FBS0FDLEtBQUssQ0FBQ00sUUFBTixDQUFlO0FBQ1hSLE1BQUksRUFBRSxVQURLO0FBRVhDLFNBQU8sRUFBRTtBQUZFLENBQWY7QUFLQUMsS0FBSyxDQUFDTSxRQUFOLENBQWU7QUFDWFIsTUFBSSxFQUFFLEtBREs7QUFFWEMsU0FBTyxFQUFFO0FBRkUsQ0FBZixFIiwiZmlsZSI6Im1haW4uMjE5ZDQ5YzcyYjZjZDg0ZGEyYTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNyZWF0ZVN0b3JlIH0gZnJvbSAncmVkdXgnXG5cbmltcG9ydCBNYWluIGZyb20gJy4vcGFnZXMvTWFpbidcbmltcG9ydCBVc2VyIGZyb20gJy4vcGFnZXMvVXNlcidcblxuY29uc3QgQXBwID0gKCkgPT4ge1xuXG4gICAgY29uc3QgW3VzZXJOYW1lLCBzZXRVc2VyTmFtZV0gPSB1c2VTdGF0ZSgnSmFoYXJhJylcblxuICAgIGNvbnN0IGNoYW5nZVVzZXJOYW1lID0gKHVzZXJOYW1lKSA9PiBzZXRVc2VyTmFtZSh1c2VyTmFtZSkgXG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8TWFpbiBjaGFuZ2VVc2VyTmFtZT17Y2hhbmdlVXNlck5hbWV9IC8+XG4gICAgICAgICAgICA8VXNlciB1c2VyTmFtZT17dXNlck5hbWV9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwXG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICByZXN1bHQ6IDEsXG4gICAgbGFzdFZhbHVlczogW11cbn1cblxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlICdBREQnOlxuICAgICAgICAgICAgc3RhdGUgPSBzdGF0ZSArIGFjdGlvbi5wYXlsb2FkXG4gICAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlICdTVUJUUkFDVCc6XG4gICAgICAgICAgICBzdGF0ZSA9IHN0YXRlIC0gYWN0aW9uLnBheWxvYWRcbiAgICAgICAgICAgIGJyZWFrXG4gICAgfSBcblxuICAgIHJldHVybiBzdGF0ZVxufVxuXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIDMwKVxuXG5zdG9yZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdTdG9yZSB1cGRhdGVkOiAnLCBzdG9yZS5nZXRTdGF0ZSgpKVxufSlcblxuc3RvcmUuZGlzcGF0Y2goe1xuICAgIHR5cGU6ICdBREQnLFxuICAgIHBheWxvYWQ6IDIwXG59KVxuXG5zdG9yZS5kaXNwYXRjaCh7XG4gICAgdHlwZTogJ1NVQlRSQUNUJyxcbiAgICBwYXlsb2FkOiA2N1xufSlcblxuc3RvcmUuZGlzcGF0Y2goe1xuICAgIHR5cGU6ICdBREQnLFxuICAgIHBheWxvYWQ6IDNcbn0pIl0sInNvdXJjZVJvb3QiOiIifQ==