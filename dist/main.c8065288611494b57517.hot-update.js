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
  return {
    userName: state.reducer()
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BcHAuanMiXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJjb25zb2xlIiwiZGlyIiwic2V0VXNlck5hbWUiLCJ1c2VyTmFtZSIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwicmVkdWNlciIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwibmFtZSIsInR5cGUiLCJwYXlsb2FkIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBOztBQUVBLElBQU1BLEdBQUcsR0FBRyxTQUFOQSxHQUFNLENBQUNDLEtBQUQsRUFBVztBQUVuQkMsU0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFFQSxTQUNJLHdFQUNJLDJEQUFDLG1EQUFEO0FBQU0sa0JBQWMsRUFBRUEsS0FBSyxDQUFDRztBQUE1QixJQURKLEVBRUksMkRBQUMsbURBQUQ7QUFBTSxZQUFRLEVBQUVILEtBQUssQ0FBQ0k7QUFBdEIsSUFGSixDQURKO0FBTUgsQ0FWRDs7QUFZQSxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQsRUFBVztBQUMvQixTQUFPO0FBQ0hGLFlBQVEsRUFBRUUsS0FBSyxDQUFDQyxPQUFOO0FBRFAsR0FBUDtBQUdILENBSkQ7O0FBTUEsSUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDQyxRQUFELEVBQWM7QUFDckMsU0FBTztBQUNITixlQUFXLEVBQUUscUJBQUNPLElBQUQsRUFBVTtBQUNuQkQsY0FBUSxDQUFDO0FBQ0xFLFlBQUksRUFBRSxVQUREO0FBRUxDLGVBQU8sRUFBRUY7QUFGSixPQUFELENBQVI7QUFJSDtBQU5FLEdBQVA7QUFRSCxDQVREOztBQVdlRywwSEFBTyxDQUFDUixlQUFELEVBQWtCRyxrQkFBbEIsQ0FBUCxDQUE2Q1QsR0FBN0MsQ0FBZixFIiwiZmlsZSI6Im1haW4uYzgwNjUyODg2MTE0OTRiNTc1MTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IE1haW4gZnJvbSAnLi9wYWdlcy9NYWluJ1xuaW1wb3J0IFVzZXIgZnJvbSAnLi9wYWdlcy9Vc2VyJ1xuXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5jb25zdCBBcHAgPSAocHJvcHMpID0+IHtcblxuICAgIGNvbnNvbGUuZGlyKHByb3BzKVxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPE1haW4gY2hhbmdlVXNlck5hbWU9e3Byb3BzLnNldFVzZXJOYW1lfSAvPlxuICAgICAgICAgICAgPFVzZXIgdXNlck5hbWU9e3Byb3BzLnVzZXJOYW1lfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHVzZXJOYW1lOiBzdGF0ZS5yZWR1Y2VyKClcbiAgICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHNldFVzZXJOYW1lOiAobmFtZSkgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgIHR5cGU6ICdTRVRfTkFNRScsXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogbmFtZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQXBwKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==