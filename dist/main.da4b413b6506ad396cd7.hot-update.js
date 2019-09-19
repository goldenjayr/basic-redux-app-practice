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
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
      state = _objectSpread({}, state, {
        result: state.result + action.payload
      });
      break;

    case 'SUBTRACT':
      state = _objectSpread({}, state, {
        result: state.result + action.payload
      });
      break;
  }

  return state;
};

var store = Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(reducer);
store.subscribe(function () {
  console.warn('Store updated: ', store.getState());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BcHAuanMiXSwibmFtZXMiOlsiQXBwIiwidXNlU3RhdGUiLCJ1c2VyTmFtZSIsInNldFVzZXJOYW1lIiwiY2hhbmdlVXNlck5hbWUiLCJpbml0aWFsU3RhdGUiLCJyZXN1bHQiLCJsYXN0VmFsdWVzIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwic3Vic2NyaWJlIiwiY29uc29sZSIsIndhcm4iLCJnZXRTdGF0ZSIsImRpc3BhdGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTs7QUFFQSxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxHQUFNO0FBQUEsa0JBRWtCQyxzREFBUSxDQUFDLFFBQUQsQ0FGMUI7QUFBQTtBQUFBLE1BRVBDLFFBRk87QUFBQSxNQUVHQyxXQUZIOztBQUlkLE1BQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0YsUUFBRDtBQUFBLFdBQWNDLFdBQVcsQ0FBQ0QsUUFBRCxDQUF6QjtBQUFBLEdBQXZCOztBQUVBLFNBQ0ksd0VBQ0ksMkRBQUMsbURBQUQ7QUFBTSxrQkFBYyxFQUFFRTtBQUF0QixJQURKLEVBRUksMkRBQUMsbURBQUQ7QUFBTSxZQUFRLEVBQUVGO0FBQWhCLElBRkosQ0FESjtBQU1ILENBWkQ7O0FBY2VGLGtFQUFmO0FBRUEsSUFBTUssWUFBWSxHQUFHO0FBQ2pCQyxRQUFNLEVBQUUsQ0FEUztBQUVqQkMsWUFBVSxFQUFFO0FBRkssQ0FBckI7O0FBS0EsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBa0M7QUFBQSxNQUFqQ0MsS0FBaUMsdUVBQXpCSixZQUF5QjtBQUFBLE1BQVhLLE1BQVc7O0FBQzlDLFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNJLFNBQUssS0FBTDtBQUNJRixXQUFLLHFCQUNFQSxLQURGO0FBRURILGNBQU0sRUFBRUcsS0FBSyxDQUFDSCxNQUFOLEdBQWVJLE1BQU0sQ0FBQ0U7QUFGN0IsUUFBTDtBQUlBOztBQUNKLFNBQUssVUFBTDtBQUNJSCxXQUFLLHFCQUNNQSxLQUROO0FBRUdILGNBQU0sRUFBRUcsS0FBSyxDQUFDSCxNQUFOLEdBQWVJLE1BQU0sQ0FBQ0U7QUFGakMsUUFBTDtBQUlBO0FBWlI7O0FBZUEsU0FBT0gsS0FBUDtBQUNILENBakJEOztBQW1CQSxJQUFNSSxLQUFLLEdBQUdDLHlEQUFXLENBQUNOLE9BQUQsQ0FBekI7QUFFQUssS0FBSyxDQUFDRSxTQUFOLENBQWdCLFlBQU07QUFDbEJDLFNBQU8sQ0FBQ0MsSUFBUixDQUFhLGlCQUFiLEVBQWdDSixLQUFLLENBQUNLLFFBQU4sRUFBaEM7QUFDSCxDQUZEO0FBSUFMLEtBQUssQ0FBQ00sUUFBTixDQUFlO0FBQ1hSLE1BQUksRUFBRSxLQURLO0FBRVhDLFNBQU8sRUFBRTtBQUZFLENBQWY7QUFLQUMsS0FBSyxDQUFDTSxRQUFOLENBQWU7QUFDWFIsTUFBSSxFQUFFLFVBREs7QUFFWEMsU0FBTyxFQUFFO0FBRkUsQ0FBZjtBQUtBQyxLQUFLLENBQUNNLFFBQU4sQ0FBZTtBQUNYUixNQUFJLEVBQUUsS0FESztBQUVYQyxTQUFPLEVBQUU7QUFGRSxDQUFmLEUiLCJmaWxlIjoibWFpbi5kYTRiNDEzYjY1MDZhZDM5NmNkNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tICdyZWR1eCdcblxuaW1wb3J0IE1haW4gZnJvbSAnLi9wYWdlcy9NYWluJ1xuaW1wb3J0IFVzZXIgZnJvbSAnLi9wYWdlcy9Vc2VyJ1xuXG5jb25zdCBBcHAgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBbdXNlck5hbWUsIHNldFVzZXJOYW1lXSA9IHVzZVN0YXRlKCdKYWhhcmEnKVxuXG4gICAgY29uc3QgY2hhbmdlVXNlck5hbWUgPSAodXNlck5hbWUpID0+IHNldFVzZXJOYW1lKHVzZXJOYW1lKSBcblxuICAgIHJldHVybihcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxNYWluIGNoYW5nZVVzZXJOYW1lPXtjaGFuZ2VVc2VyTmFtZX0gLz5cbiAgICAgICAgICAgIDxVc2VyIHVzZXJOYW1lPXt1c2VyTmFtZX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHBcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICAgIHJlc3VsdDogMSxcbiAgICBsYXN0VmFsdWVzOiBbXVxufVxuXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgJ0FERCc6XG4gICAgICAgICAgICBzdGF0ZSA9IHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICByZXN1bHQ6IHN0YXRlLnJlc3VsdCArIGFjdGlvbi5wYXlsb2FkXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlICdTVUJUUkFDVCc6XG4gICAgICAgICAgICBzdGF0ZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdDogc3RhdGUucmVzdWx0ICsgYWN0aW9uLnBheWxvYWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrXG4gICAgfSBcblxuICAgIHJldHVybiBzdGF0ZVxufVxuXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIpXG5cbnN0b3JlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgY29uc29sZS53YXJuKCdTdG9yZSB1cGRhdGVkOiAnLCBzdG9yZS5nZXRTdGF0ZSgpKVxufSlcblxuc3RvcmUuZGlzcGF0Y2goe1xuICAgIHR5cGU6ICdBREQnLFxuICAgIHBheWxvYWQ6IDIwXG59KVxuXG5zdG9yZS5kaXNwYXRjaCh7XG4gICAgdHlwZTogJ1NVQlRSQUNUJyxcbiAgICBwYXlsb2FkOiA2N1xufSlcblxuc3RvcmUuZGlzcGF0Y2goe1xuICAgIHR5cGU6ICdBREQnLFxuICAgIHBheWxvYWQ6IDNcbn0pIl0sInNvdXJjZVJvb3QiOiIifQ==