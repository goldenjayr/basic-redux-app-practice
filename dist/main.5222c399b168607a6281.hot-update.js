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
        result: state.result + action.payload,
        lastValues: [].concat(_toConsumableArray(state.lastValues), [action.payload])
      });
      break;

    case 'SUBTRACT':
      state = _objectSpread({}, state, {
        result: state.result + action.payload,
        lastValues: [].concat(_toConsumableArray(state.lastValues), [action.payload])
      });
      break;
  }

  return state;
};

var myMiddleware = function myMiddleware(store) {
  return function (next) {
    return function (action) {
      console.log('Logged Action : ', action);
      next(action);
    };
  };
};

var store = Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(reducer, {}, redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BcHAuanMiXSwibmFtZXMiOlsiQXBwIiwidXNlU3RhdGUiLCJ1c2VyTmFtZSIsInNldFVzZXJOYW1lIiwiY2hhbmdlVXNlck5hbWUiLCJpbml0aWFsU3RhdGUiLCJyZXN1bHQiLCJsYXN0VmFsdWVzIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiLCJteU1pZGRsZXdhcmUiLCJzdG9yZSIsIm5leHQiLCJjb25zb2xlIiwibG9nIiwiY3JlYXRlU3RvcmUiLCJhcHBseU1pZGRsZXdhcmUiLCJzdWJzY3JpYmUiLCJnZXRTdGF0ZSIsImRpc3BhdGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBOztBQUVBLElBQU1BLEdBQUcsR0FBRyxTQUFOQSxHQUFNLEdBQU07QUFBQSxrQkFFa0JDLHNEQUFRLENBQUMsUUFBRCxDQUYxQjtBQUFBO0FBQUEsTUFFUEMsUUFGTztBQUFBLE1BRUdDLFdBRkg7O0FBSWQsTUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDRixRQUFEO0FBQUEsV0FBY0MsV0FBVyxDQUFDRCxRQUFELENBQXpCO0FBQUEsR0FBdkI7O0FBRUEsU0FDSSx3RUFDSSwyREFBQyxtREFBRDtBQUFNLGtCQUFjLEVBQUVFO0FBQXRCLElBREosRUFFSSwyREFBQyxtREFBRDtBQUFNLFlBQVEsRUFBRUY7QUFBaEIsSUFGSixDQURKO0FBTUgsQ0FaRDs7QUFjZUYsa0VBQWY7QUFFQSxJQUFNSyxZQUFZLEdBQUc7QUFDakJDLFFBQU0sRUFBRSxDQURTO0FBRWpCQyxZQUFVLEVBQUU7QUFGSyxDQUFyQjs7QUFLQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFrQztBQUFBLE1BQWpDQyxLQUFpQyx1RUFBekJKLFlBQXlCO0FBQUEsTUFBWEssTUFBVzs7QUFDOUMsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0ksU0FBSyxLQUFMO0FBQ0lGLFdBQUsscUJBQ0VBLEtBREY7QUFFREgsY0FBTSxFQUFFRyxLQUFLLENBQUNILE1BQU4sR0FBZUksTUFBTSxDQUFDRSxPQUY3QjtBQUdETCxrQkFBVSwrQkFBTUUsS0FBSyxDQUFDRixVQUFaLElBQXdCRyxNQUFNLENBQUNFLE9BQS9CO0FBSFQsUUFBTDtBQUtBOztBQUNKLFNBQUssVUFBTDtBQUNJSCxXQUFLLHFCQUNNQSxLQUROO0FBRUdILGNBQU0sRUFBRUcsS0FBSyxDQUFDSCxNQUFOLEdBQWVJLE1BQU0sQ0FBQ0UsT0FGakM7QUFHR0wsa0JBQVUsK0JBQU1FLEtBQUssQ0FBQ0YsVUFBWixJQUF3QkcsTUFBTSxDQUFDRSxPQUEvQjtBQUhiLFFBQUw7QUFLQTtBQWRSOztBQWlCQSxTQUFPSCxLQUFQO0FBQ0gsQ0FuQkQ7O0FBcUJBLElBQU1JLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQ7QUFBQSxTQUFXLFVBQUNDLElBQUQ7QUFBQSxXQUFVLFVBQUNMLE1BQUQsRUFBWTtBQUNqRE0sYUFBTyxDQUFDQyxHQUFSLENBQVksa0JBQVosRUFBZ0NQLE1BQWhDO0FBQ0FLLFVBQUksQ0FBQ0wsTUFBRCxDQUFKO0FBQ0osS0FIK0I7QUFBQSxHQUFYO0FBQUEsQ0FBckI7O0FBS0EsSUFBTUksS0FBSyxHQUFHSSx5REFBVyxDQUFDVixPQUFELEVBQVUsRUFBVixFQUFjVyxxREFBZCxDQUF6QjtBQUVBTCxLQUFLLENBQUNNLFNBQU4sQ0FBZ0IsWUFBTTtBQUNsQkosU0FBTyxDQUFDQyxHQUFSLENBQVksaUJBQVosRUFBK0JILEtBQUssQ0FBQ08sUUFBTixFQUEvQjtBQUNILENBRkQ7QUFJQVAsS0FBSyxDQUFDUSxRQUFOLENBQWU7QUFDWFgsTUFBSSxFQUFFLEtBREs7QUFFWEMsU0FBTyxFQUFFO0FBRkUsQ0FBZjtBQUtBRSxLQUFLLENBQUNRLFFBQU4sQ0FBZTtBQUNYWCxNQUFJLEVBQUUsVUFESztBQUVYQyxTQUFPLEVBQUU7QUFGRSxDQUFmO0FBS0FFLEtBQUssQ0FBQ1EsUUFBTixDQUFlO0FBQ1hYLE1BQUksRUFBRSxLQURLO0FBRVhDLFNBQU8sRUFBRTtBQUZFLENBQWYsRSIsImZpbGUiOiJtYWluLjUyMjJjMzk5YjE2ODYwN2E2MjgxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnXG5cbmltcG9ydCBNYWluIGZyb20gJy4vcGFnZXMvTWFpbidcbmltcG9ydCBVc2VyIGZyb20gJy4vcGFnZXMvVXNlcidcblxuY29uc3QgQXBwID0gKCkgPT4ge1xuXG4gICAgY29uc3QgW3VzZXJOYW1lLCBzZXRVc2VyTmFtZV0gPSB1c2VTdGF0ZSgnSmFoYXJhJylcblxuICAgIGNvbnN0IGNoYW5nZVVzZXJOYW1lID0gKHVzZXJOYW1lKSA9PiBzZXRVc2VyTmFtZSh1c2VyTmFtZSkgXG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8TWFpbiBjaGFuZ2VVc2VyTmFtZT17Y2hhbmdlVXNlck5hbWV9IC8+XG4gICAgICAgICAgICA8VXNlciB1c2VyTmFtZT17dXNlck5hbWV9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwXG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICByZXN1bHQ6IDEsXG4gICAgbGFzdFZhbHVlczogW11cbn1cblxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7IFxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnQUREJzpcbiAgICAgICAgICAgIHN0YXRlID0ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIHJlc3VsdDogc3RhdGUucmVzdWx0ICsgYWN0aW9uLnBheWxvYWQsXG4gICAgICAgICAgICAgICAgbGFzdFZhbHVlczogWy4uLnN0YXRlLmxhc3RWYWx1ZXMsIGFjdGlvbi5wYXlsb2FkXVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAnU1VCVFJBQ1QnOlxuICAgICAgICAgICAgc3RhdGUgPSB7XG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IHN0YXRlLnJlc3VsdCArIGFjdGlvbi5wYXlsb2FkLFxuICAgICAgICAgICAgICAgICAgICBsYXN0VmFsdWVzOiBbLi4uc3RhdGUubGFzdFZhbHVlcywgYWN0aW9uLnBheWxvYWRdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVha1xuICAgIH0gXG5cbiAgICByZXR1cm4gc3RhdGVcbn1cblxuY29uc3QgbXlNaWRkbGV3YXJlID0gKHN0b3JlKSA9PiAobmV4dCkgPT4gKGFjdGlvbikgPT4ge1xuICAgICBjb25zb2xlLmxvZygnTG9nZ2VkIEFjdGlvbiA6ICcsIGFjdGlvbilcbiAgICAgbmV4dChhY3Rpb24pXG59XG5cbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlciwge30sIGFwcGx5TWlkZGxld2FyZSlcblxuc3RvcmUuc3Vic2NyaWJlKCgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnU3RvcmUgdXBkYXRlZDogJywgc3RvcmUuZ2V0U3RhdGUoKSlcbn0pXG5cbnN0b3JlLmRpc3BhdGNoKHtcbiAgICB0eXBlOiAnQUREJyxcbiAgICBwYXlsb2FkOiAyMFxufSlcblxuc3RvcmUuZGlzcGF0Y2goe1xuICAgIHR5cGU6ICdTVUJUUkFDVCcsXG4gICAgcGF5bG9hZDogNjdcbn0pXG5cbnN0b3JlLmRpc3BhdGNoKHtcbiAgICB0eXBlOiAnQUREJyxcbiAgICBwYXlsb2FkOiAzXG59KSJdLCJzb3VyY2VSb290IjoiIn0=