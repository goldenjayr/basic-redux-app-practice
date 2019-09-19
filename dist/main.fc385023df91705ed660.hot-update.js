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
    userName: state.reducer
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BcHAuanMiXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJjb25zb2xlIiwiZGlyIiwic2V0VXNlck5hbWUiLCJ1c2VyTmFtZSIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwicmVkdWNlciIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwibmFtZSIsInR5cGUiLCJwYXlsb2FkIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBOztBQUVBLElBQU1BLEdBQUcsR0FBRyxTQUFOQSxHQUFNLENBQUNDLEtBQUQsRUFBVztBQUVuQkMsU0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFFQSxTQUNJLHdFQUNJLDJEQUFDLG1EQUFEO0FBQU0sa0JBQWMsRUFBRUEsS0FBSyxDQUFDRztBQUE1QixJQURKLEVBRUksMkRBQUMsbURBQUQ7QUFBTSxZQUFRLEVBQUVILEtBQUssQ0FBQ0k7QUFBdEIsSUFGSixDQURKO0FBTUgsQ0FWRDs7QUFZQSxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQsRUFBVztBQUMvQixTQUFPO0FBQ0hGLFlBQVEsRUFBRUUsS0FBSyxDQUFDQztBQURiLEdBQVA7QUFHSCxDQUpEOztBQU1BLElBQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsUUFBRCxFQUFjO0FBQ3JDLFNBQU87QUFDSE4sZUFBVyxFQUFFLHFCQUFDTyxJQUFELEVBQVU7QUFDbkJELGNBQVEsQ0FBQztBQUNMRSxZQUFJLEVBQUUsVUFERDtBQUVMQyxlQUFPLEVBQUVGO0FBRkosT0FBRCxDQUFSO0FBSUg7QUFORSxHQUFQO0FBUUgsQ0FURDs7QUFXZUcsMEhBQU8sQ0FBQ1IsZUFBRCxFQUFrQkcsa0JBQWxCLENBQVAsQ0FBNkNULEdBQTdDLENBQWYsRSIsImZpbGUiOiJtYWluLmZjMzg1MDIzZGY5MTcwNWVkNjYwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCBNYWluIGZyb20gJy4vcGFnZXMvTWFpbidcbmltcG9ydCBVc2VyIGZyb20gJy4vcGFnZXMvVXNlcidcblxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuY29uc3QgQXBwID0gKHByb3BzKSA9PiB7XG5cbiAgICBjb25zb2xlLmRpcihwcm9wcylcblxuICAgIHJldHVybihcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxNYWluIGNoYW5nZVVzZXJOYW1lPXtwcm9wcy5zZXRVc2VyTmFtZX0gLz5cbiAgICAgICAgICAgIDxVc2VyIHVzZXJOYW1lPXtwcm9wcy51c2VyTmFtZX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB1c2VyTmFtZTogc3RhdGUucmVkdWNlclxuICAgIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2V0VXNlck5hbWU6IChuYW1lKSA9PiB7XG4gICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgdHlwZTogJ1NFVF9OQU1FJyxcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiBuYW1lXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShBcHApXG4iXSwic291cmNlUm9vdCI6IiJ9