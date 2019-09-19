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
        result: state.result - action.payload,
        lastValues: [].concat(_toConsumableArray(state.lastValues), [action.payload])
      });
      break;
  }

  return state;
};

var myLogger = function myLogger(store) {
  return function (next) {
    return function (action) {
      console.log('Logged Action : ', action);
      next(action);
    };
  };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BcHAuanMiXSwibmFtZXMiOlsiQXBwIiwidXNlU3RhdGUiLCJ1c2VyTmFtZSIsInNldFVzZXJOYW1lIiwiY2hhbmdlVXNlck5hbWUiLCJpbml0aWFsU3RhdGUiLCJyZXN1bHQiLCJsYXN0VmFsdWVzIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiLCJteUxvZ2dlciIsInN0b3JlIiwibmV4dCIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGVTdG9yZSIsInN1YnNjcmliZSIsImdldFN0YXRlIiwiZGlzcGF0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsSUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdBQU0sR0FBTTtBQUFBLGtCQUVrQkMsc0RBQVEsQ0FBQyxRQUFELENBRjFCO0FBQUE7QUFBQSxNQUVQQyxRQUZPO0FBQUEsTUFFR0MsV0FGSDs7QUFJZCxNQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNGLFFBQUQ7QUFBQSxXQUFjQyxXQUFXLENBQUNELFFBQUQsQ0FBekI7QUFBQSxHQUF2Qjs7QUFFQSxTQUNJLHdFQUNJLDJEQUFDLG1EQUFEO0FBQU0sa0JBQWMsRUFBRUU7QUFBdEIsSUFESixFQUVJLDJEQUFDLG1EQUFEO0FBQU0sWUFBUSxFQUFFRjtBQUFoQixJQUZKLENBREo7QUFNSCxDQVpEOztBQWNlRixrRUFBZjtBQUVBLElBQU1LLFlBQVksR0FBRztBQUNqQkMsUUFBTSxFQUFFLENBRFM7QUFFakJDLFlBQVUsRUFBRTtBQUZLLENBQXJCOztBQUtBLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQWtDO0FBQUEsTUFBakNDLEtBQWlDLHVFQUF6QkosWUFBeUI7QUFBQSxNQUFYSyxNQUFXOztBQUM5QyxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDSSxTQUFLLEtBQUw7QUFDSUYsV0FBSyxxQkFDRUEsS0FERjtBQUVESCxjQUFNLEVBQUVHLEtBQUssQ0FBQ0gsTUFBTixHQUFlSSxNQUFNLENBQUNFLE9BRjdCO0FBR0RMLGtCQUFVLCtCQUFNRSxLQUFLLENBQUNGLFVBQVosSUFBd0JHLE1BQU0sQ0FBQ0UsT0FBL0I7QUFIVCxRQUFMO0FBS0E7O0FBQ0osU0FBSyxVQUFMO0FBQ0lILFdBQUsscUJBQ0VBLEtBREY7QUFFREgsY0FBTSxFQUFFRyxLQUFLLENBQUNILE1BQU4sR0FBZUksTUFBTSxDQUFDRSxPQUY3QjtBQUdETCxrQkFBVSwrQkFBTUUsS0FBSyxDQUFDRixVQUFaLElBQXdCRyxNQUFNLENBQUNFLE9BQS9CO0FBSFQsUUFBTDtBQUtBO0FBZFI7O0FBaUJBLFNBQU9ILEtBQVA7QUFDSCxDQW5CRDs7QUFxQkEsSUFBTUksUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsS0FBRDtBQUFBLFNBQVcsVUFBQ0MsSUFBRDtBQUFBLFdBQVUsVUFBQ0wsTUFBRCxFQUFZO0FBQzdDTSxhQUFPLENBQUNDLEdBQVIsQ0FBWSxrQkFBWixFQUFnQ1AsTUFBaEM7QUFDQUssVUFBSSxDQUFDTCxNQUFELENBQUo7QUFDSixLQUgyQjtBQUFBLEdBQVg7QUFBQSxDQUFqQjs7QUFLQSxJQUFNSSxLQUFLLEdBQUdJLHlEQUFXLENBQUNWLE9BQUQsQ0FBekI7QUFFQU0sS0FBSyxDQUFDSyxTQUFOLENBQWdCLFlBQU07QUFDbEJILFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaLEVBQStCSCxLQUFLLENBQUNNLFFBQU4sRUFBL0I7QUFDSCxDQUZEO0FBSUFOLEtBQUssQ0FBQ08sUUFBTixDQUFlO0FBQ1hWLE1BQUksRUFBRSxLQURLO0FBRVhDLFNBQU8sRUFBRTtBQUZFLENBQWY7QUFLQUUsS0FBSyxDQUFDTyxRQUFOLENBQWU7QUFDWFYsTUFBSSxFQUFFLFVBREs7QUFFWEMsU0FBTyxFQUFFO0FBRkUsQ0FBZjtBQUtBRSxLQUFLLENBQUNPLFFBQU4sQ0FBZTtBQUNYVixNQUFJLEVBQUUsS0FESztBQUVYQyxTQUFPLEVBQUU7QUFGRSxDQUFmLEUiLCJmaWxlIjoibWFpbi5iOGYzYzBmNGFhMTMzZjU3Y2EyMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4J1xuXG5pbXBvcnQgTWFpbiBmcm9tICcuL3BhZ2VzL01haW4nXG5pbXBvcnQgVXNlciBmcm9tICcuL3BhZ2VzL1VzZXInXG5cbmNvbnN0IEFwcCA9ICgpID0+IHtcblxuICAgIGNvbnN0IFt1c2VyTmFtZSwgc2V0VXNlck5hbWVdID0gdXNlU3RhdGUoJ0phaGFyYScpXG5cbiAgICBjb25zdCBjaGFuZ2VVc2VyTmFtZSA9ICh1c2VyTmFtZSkgPT4gc2V0VXNlck5hbWUodXNlck5hbWUpIFxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPE1haW4gY2hhbmdlVXNlck5hbWU9e2NoYW5nZVVzZXJOYW1lfSAvPlxuICAgICAgICAgICAgPFVzZXIgdXNlck5hbWU9e3VzZXJOYW1lfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcFxuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgcmVzdWx0OiAxLFxuICAgIGxhc3RWYWx1ZXM6IFtdXG59XG5cbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4geyBcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgJ0FERCc6XG4gICAgICAgICAgICBzdGF0ZSA9IHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICByZXN1bHQ6IHN0YXRlLnJlc3VsdCArIGFjdGlvbi5wYXlsb2FkLFxuICAgICAgICAgICAgICAgIGxhc3RWYWx1ZXM6IFsuLi5zdGF0ZS5sYXN0VmFsdWVzLCBhY3Rpb24ucGF5bG9hZF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgJ1NVQlRSQUNUJzpcbiAgICAgICAgICAgIHN0YXRlID0ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIHJlc3VsdDogc3RhdGUucmVzdWx0IC0gYWN0aW9uLnBheWxvYWQsXG4gICAgICAgICAgICAgICAgbGFzdFZhbHVlczogWy4uLnN0YXRlLmxhc3RWYWx1ZXMsIGFjdGlvbi5wYXlsb2FkXVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWtcbiAgICB9IFxuXG4gICAgcmV0dXJuIHN0YXRlXG59XG5cbmNvbnN0IG15TG9nZ2VyID0gKHN0b3JlKSA9PiAobmV4dCkgPT4gKGFjdGlvbikgPT4ge1xuICAgICBjb25zb2xlLmxvZygnTG9nZ2VkIEFjdGlvbiA6ICcsIGFjdGlvbilcbiAgICAgbmV4dChhY3Rpb24pXG59XG5cbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlcilcblxuc3RvcmUuc3Vic2NyaWJlKCgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnU3RvcmUgdXBkYXRlZDogJywgc3RvcmUuZ2V0U3RhdGUoKSlcbn0pXG5cbnN0b3JlLmRpc3BhdGNoKHtcbiAgICB0eXBlOiAnQUREJyxcbiAgICBwYXlsb2FkOiAyMFxufSlcblxuc3RvcmUuZGlzcGF0Y2goe1xuICAgIHR5cGU6ICdTVUJUUkFDVCcsXG4gICAgcGF5bG9hZDogNjdcbn0pXG5cbnN0b3JlLmRpc3BhdGNoKHtcbiAgICB0eXBlOiAnQUREJyxcbiAgICBwYXlsb2FkOiAzXG59KSJdLCJzb3VyY2VSb290IjoiIn0=