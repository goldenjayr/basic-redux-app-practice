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
/* harmony import */ var _pages_Main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/Main */ "./src/components/pages/Main.js");
/* harmony import */ var _pages_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/User */ "./src/components/pages/User.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");





var App = function App(props) {
  console.dir(props);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_Main__WEBPACK_IMPORTED_MODULE_1__["default"], {
    changeUserName: props.setUserName
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_User__WEBPACK_IMPORTED_MODULE_2__["default"], {
    userName: props.userName
  }));
};

var mapStateToProps = function mapStateToProps(state) {
  console.log(state);
  return {
    userName: state
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    setUserName: function setUserName(name) {
      dispatch({
        type: 'SET_NAME',
        payload: name
      });
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(App));

/***/ }),

/***/ "./src/components/pages/Main.js":
/*!**************************************!*\
  !*** ./src/components/pages/Main.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Main = function Main(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Main Page"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: function onClick() {
      return props.changeUserName('Dongjeee');
    }
  }, "Change the Username"));
};

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ }),

/***/ "./src/components/pages/User.js":
/*!**************************************!*\
  !*** ./src/components/pages/User.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var User = function User(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "The User Page"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "User Name: ", props.userName));
};

/* harmony default export */ __webpack_exports__["default"] = (User);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGFnZXMvTWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wYWdlcy9Vc2VyLmpzIl0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwiY29uc29sZSIsImRpciIsInNldFVzZXJOYW1lIiwidXNlck5hbWUiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImxvZyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwibmFtZSIsInR5cGUiLCJwYXlsb2FkIiwiY29ubmVjdCIsIk1haW4iLCJjaGFuZ2VVc2VyTmFtZSIsIlVzZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxDQUFDQyxLQUFELEVBQVc7QUFFbkJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBRUEsU0FDSSx3RUFDSSwyREFBQyxtREFBRDtBQUFNLGtCQUFjLEVBQUVBLEtBQUssQ0FBQ0c7QUFBNUIsSUFESixFQUVJLDJEQUFDLG1EQUFEO0FBQU0sWUFBUSxFQUFFSCxLQUFLLENBQUNJO0FBQXRCLElBRkosQ0FESjtBQU1ILENBVkQ7O0FBWUEsSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFELEVBQVc7QUFDL0JMLFNBQU8sQ0FBQ00sR0FBUixDQUFZRCxLQUFaO0FBQ0EsU0FBTztBQUNIRixZQUFRLEVBQUVFO0FBRFAsR0FBUDtBQUdILENBTEQ7O0FBT0EsSUFBTUUsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDQyxRQUFELEVBQWM7QUFDckMsU0FBTztBQUNITixlQUFXLEVBQUUscUJBQUNPLElBQUQsRUFBVTtBQUNuQkQsY0FBUSxDQUFDO0FBQ0xFLFlBQUksRUFBRSxVQUREO0FBRUxDLGVBQU8sRUFBRUY7QUFGSixPQUFELENBQVI7QUFJSDtBQU5FLEdBQVA7QUFRSCxDQVREOztBQVdlRywwSEFBTyxDQUFDUixlQUFELEVBQWtCRyxrQkFBbEIsQ0FBUCxDQUE2Q1QsR0FBN0MsQ0FBZixFOzs7Ozs7Ozs7Ozs7QUNyQ0E7QUFBQTtBQUFBO0FBQUE7O0FBRUEsSUFBTWUsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ2QsS0FBRCxFQUFXO0FBQ3BCLFNBQ0ksd0VBQ0ksbUZBREosRUFFSTtBQUFRLFdBQU8sRUFBRTtBQUFBLGFBQU1BLEtBQUssQ0FBQ2UsY0FBTixDQUFxQixVQUFyQixDQUFOO0FBQUE7QUFBakIsMkJBRkosQ0FESjtBQU1ILENBUEQ7O0FBU2VELG1FQUFmLEU7Ozs7Ozs7Ozs7OztBQ1hBO0FBQUE7QUFBQTtBQUFBOztBQUVBLElBQU1FLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNoQixLQUFELEVBQVc7QUFDcEIsU0FDSSx3RUFDSSx1RkFESixFQUVJLHVGQUFpQkEsS0FBSyxDQUFDSSxRQUF2QixDQUZKLENBREo7QUFNSCxDQVBEOztBQVNlWSxtRUFBZixFIiwiZmlsZSI6Im1haW4uNzJmNmM2ZGU5YzI2ZjkxZDFlMDEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IE1haW4gZnJvbSAnLi9wYWdlcy9NYWluJ1xuaW1wb3J0IFVzZXIgZnJvbSAnLi9wYWdlcy9Vc2VyJ1xuXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5jb25zdCBBcHAgPSAocHJvcHMpID0+IHtcblxuICAgIGNvbnNvbGUuZGlyKHByb3BzKVxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPE1haW4gY2hhbmdlVXNlck5hbWU9e3Byb3BzLnNldFVzZXJOYW1lfSAvPlxuICAgICAgICAgICAgPFVzZXIgdXNlck5hbWU9e3Byb3BzLnVzZXJOYW1lfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHN0YXRlKVxuICAgIHJldHVybiB7XG4gICAgICAgIHVzZXJOYW1lOiBzdGF0ZVxuICAgIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2V0VXNlck5hbWU6IChuYW1lKSA9PiB7XG4gICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgdHlwZTogJ1NFVF9OQU1FJyxcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiBuYW1lXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShBcHApXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IE1haW4gPSAocHJvcHMpID0+IHtcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDE+TWFpbiBQYWdlPC9oMT5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gcHJvcHMuY2hhbmdlVXNlck5hbWUoJ0RvbmdqZWVlJyl9PkNoYW5nZSB0aGUgVXNlcm5hbWU8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBVc2VyID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMT5UaGUgVXNlciBQYWdlPC9oMT5cbiAgICAgICAgICAgIDxkaXY+VXNlciBOYW1lOiB7cHJvcHMudXNlck5hbWV9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlciJdLCJzb3VyY2VSb290IjoiIn0=