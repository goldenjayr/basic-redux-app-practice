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
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-logger */ "./node_modules/redux-logger/dist/redux-logger.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pages_Main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/Main */ "./src/components/pages/Main.js");
/* harmony import */ var _pages_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/User */ "./src/components/pages/User.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_Main__WEBPACK_IMPORTED_MODULE_3__["default"], {
    changeUserName: changeUserName
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_User__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
        result: state.result + action.payload,
        lastValues: [].concat(_toConsumableArray(state.lastValues), [action.payload])
      });
      break;

    case 'SUBTRACT':
      state = _objectSpread({}, state, {
        result: state.result - action.payload,
        lastValues: [].concat(_toConsumableArray(state.lastValues), [action.payload])
      });
      break;
  }

  return state;
};

var store = Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(reducer, initialState, Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])(redux_logger__WEBPACK_IMPORTED_MODULE_2___default.a));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BcHAuanMiXSwibmFtZXMiOlsiQXBwIiwidXNlU3RhdGUiLCJ1c2VyTmFtZSIsInNldFVzZXJOYW1lIiwiY2hhbmdlVXNlck5hbWUiLCJpbml0aWFsU3RhdGUiLCJyZXN1bHQiLCJsYXN0VmFsdWVzIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiYXBwbHlNaWRkbGV3YXJlIiwibG9nZ2VyIiwic3Vic2NyaWJlIiwiY29uc29sZSIsImxvZyIsImdldFN0YXRlIiwiZGlzcGF0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBLElBQU1BLEdBQUcsR0FBRyxTQUFOQSxHQUFNLEdBQU07QUFBQSxrQkFFa0JDLHNEQUFRLENBQUMsUUFBRCxDQUYxQjtBQUFBO0FBQUEsTUFFUEMsUUFGTztBQUFBLE1BRUdDLFdBRkg7O0FBSWQsTUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDRixRQUFEO0FBQUEsV0FBY0MsV0FBVyxDQUFDRCxRQUFELENBQXpCO0FBQUEsR0FBdkI7O0FBRUEsU0FDSSx3RUFDSSwyREFBQyxtREFBRDtBQUFNLGtCQUFjLEVBQUVFO0FBQXRCLElBREosRUFFSSwyREFBQyxtREFBRDtBQUFNLFlBQVEsRUFBRUY7QUFBaEIsSUFGSixDQURKO0FBTUgsQ0FaRDs7QUFjZUYsa0VBQWY7QUFFQSxJQUFNSyxZQUFZLEdBQUc7QUFDakJDLFFBQU0sRUFBRSxDQURTO0FBRWpCQyxZQUFVLEVBQUU7QUFGSyxDQUFyQjs7QUFLQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFrQztBQUFBLE1BQWpDQyxLQUFpQyx1RUFBekJKLFlBQXlCO0FBQUEsTUFBWEssTUFBVzs7QUFDOUMsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0ksU0FBSyxLQUFMO0FBQ0lGLFdBQUsscUJBQ0VBLEtBREY7QUFFREgsY0FBTSxFQUFFRyxLQUFLLENBQUNILE1BQU4sR0FBZUksTUFBTSxDQUFDRSxPQUY3QjtBQUdETCxrQkFBVSwrQkFBTUUsS0FBSyxDQUFDRixVQUFaLElBQXdCRyxNQUFNLENBQUNFLE9BQS9CO0FBSFQsUUFBTDtBQUtBOztBQUNKLFNBQUssVUFBTDtBQUNJSCxXQUFLLHFCQUNFQSxLQURGO0FBRURILGNBQU0sRUFBRUcsS0FBSyxDQUFDSCxNQUFOLEdBQWVJLE1BQU0sQ0FBQ0UsT0FGN0I7QUFHREwsa0JBQVUsK0JBQU1FLEtBQUssQ0FBQ0YsVUFBWixJQUF3QkcsTUFBTSxDQUFDRSxPQUEvQjtBQUhULFFBQUw7QUFLQTtBQWRSOztBQWlCQSxTQUFPSCxLQUFQO0FBQ0gsQ0FuQkQ7O0FBc0JBLElBQU1JLEtBQUssR0FBR0MseURBQVcsQ0FBQ04sT0FBRCxFQUFVSCxZQUFWLEVBQXdCVSw2REFBZSxDQUFDQyxtREFBRCxDQUF2QyxDQUF6QjtBQUVBSCxLQUFLLENBQUNJLFNBQU4sQ0FBZ0IsWUFBTTtBQUNsQkMsU0FBTyxDQUFDQyxHQUFSLENBQVksaUJBQVosRUFBK0JOLEtBQUssQ0FBQ08sUUFBTixFQUEvQjtBQUNILENBRkQ7QUFJQVAsS0FBSyxDQUFDUSxRQUFOLENBQWU7QUFDWFYsTUFBSSxFQUFFLEtBREs7QUFFWEMsU0FBTyxFQUFFO0FBRkUsQ0FBZjtBQUtBQyxLQUFLLENBQUNRLFFBQU4sQ0FBZTtBQUNYVixNQUFJLEVBQUUsVUFESztBQUVYQyxTQUFPLEVBQUU7QUFGRSxDQUFmO0FBS0FDLEtBQUssQ0FBQ1EsUUFBTixDQUFlO0FBQ1hWLE1BQUksRUFBRSxLQURLO0FBRVhDLFNBQU8sRUFBRTtBQUZFLENBQWYsRSIsImZpbGUiOiJtYWluLmEyYzQzYzVhYjc2NjAwNjNiYWEyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQgbG9nZ2VyIGZyb20gJ3JlZHV4LWxvZ2dlcidcblxuaW1wb3J0IE1haW4gZnJvbSAnLi9wYWdlcy9NYWluJ1xuaW1wb3J0IFVzZXIgZnJvbSAnLi9wYWdlcy9Vc2VyJ1xuXG5jb25zdCBBcHAgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBbdXNlck5hbWUsIHNldFVzZXJOYW1lXSA9IHVzZVN0YXRlKCdKYWhhcmEnKVxuXG4gICAgY29uc3QgY2hhbmdlVXNlck5hbWUgPSAodXNlck5hbWUpID0+IHNldFVzZXJOYW1lKHVzZXJOYW1lKSBcblxuICAgIHJldHVybihcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxNYWluIGNoYW5nZVVzZXJOYW1lPXtjaGFuZ2VVc2VyTmFtZX0gLz5cbiAgICAgICAgICAgIDxVc2VyIHVzZXJOYW1lPXt1c2VyTmFtZX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHBcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICAgIHJlc3VsdDogMSxcbiAgICBsYXN0VmFsdWVzOiBbXVxufVxuXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHsgXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlICdBREQnOlxuICAgICAgICAgICAgc3RhdGUgPSB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgcmVzdWx0OiBzdGF0ZS5yZXN1bHQgKyBhY3Rpb24ucGF5bG9hZCxcbiAgICAgICAgICAgICAgICBsYXN0VmFsdWVzOiBbLi4uc3RhdGUubGFzdFZhbHVlcywgYWN0aW9uLnBheWxvYWRdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlICdTVUJUUkFDVCc6XG4gICAgICAgICAgICBzdGF0ZSA9IHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICByZXN1bHQ6IHN0YXRlLnJlc3VsdCAtIGFjdGlvbi5wYXlsb2FkLFxuICAgICAgICAgICAgICAgIGxhc3RWYWx1ZXM6IFsuLi5zdGF0ZS5sYXN0VmFsdWVzLCBhY3Rpb24ucGF5bG9hZF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrXG4gICAgfSBcblxuICAgIHJldHVybiBzdGF0ZVxufVxuXG5cbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlciwgaW5pdGlhbFN0YXRlLCBhcHBseU1pZGRsZXdhcmUobG9nZ2VyKSlcblxuc3RvcmUuc3Vic2NyaWJlKCgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnU3RvcmUgdXBkYXRlZDogJywgc3RvcmUuZ2V0U3RhdGUoKSlcbn0pXG5cbnN0b3JlLmRpc3BhdGNoKHtcbiAgICB0eXBlOiAnQUREJyxcbiAgICBwYXlsb2FkOiAyMFxufSlcblxuc3RvcmUuZGlzcGF0Y2goe1xuICAgIHR5cGU6ICdTVUJUUkFDVCcsXG4gICAgcGF5bG9hZDogNjdcbn0pXG5cbnN0b3JlLmRpc3BhdGNoKHtcbiAgICB0eXBlOiAnQUREJyxcbiAgICBwYXlsb2FkOiAzXG59KSJdLCJzb3VyY2VSb290IjoiIn0=