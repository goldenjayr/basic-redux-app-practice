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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BcHAuanMiXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJjb25zb2xlIiwiZGlyIiwic2V0VXNlck5hbWUiLCJ1c2VyTmFtZSIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwibG9nIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJuYW1lIiwidHlwZSIsInBheWxvYWQiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdBQU0sQ0FBQ0MsS0FBRCxFQUFXO0FBRW5CQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUVBLFNBQ0ksd0VBQ0ksMkRBQUMsbURBQUQ7QUFBTSxrQkFBYyxFQUFFQSxLQUFLLENBQUNHO0FBQTVCLElBREosRUFFSSwyREFBQyxtREFBRDtBQUFNLFlBQVEsRUFBRUgsS0FBSyxDQUFDSTtBQUF0QixJQUZKLENBREo7QUFNSCxDQVZEOztBQVlBLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQy9CTCxTQUFPLENBQUNNLEdBQVIsQ0FBWUQsS0FBWjtBQUNBLFNBQU87QUFDSEYsWUFBUSxFQUFFRTtBQURQLEdBQVA7QUFHSCxDQUxEOztBQU9BLElBQU1FLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsUUFBRCxFQUFjO0FBQ3JDLFNBQU87QUFDSE4sZUFBVyxFQUFFLHFCQUFDTyxJQUFELEVBQVU7QUFDbkJELGNBQVEsQ0FBQztBQUNMRSxZQUFJLEVBQUUsVUFERDtBQUVMQyxlQUFPLEVBQUVGO0FBRkosT0FBRCxDQUFSO0FBSUg7QUFORSxHQUFQO0FBUUgsQ0FURDs7QUFXZUcsMEhBQU8sQ0FBQ1IsZUFBRCxFQUFrQkcsa0JBQWxCLENBQVAsQ0FBNkNULEdBQTdDLENBQWYsRSIsImZpbGUiOiJtYWluLjBmZTcyYWJmYmY3NTIxNmNmY2RiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCBNYWluIGZyb20gJy4vcGFnZXMvTWFpbidcbmltcG9ydCBVc2VyIGZyb20gJy4vcGFnZXMvVXNlcidcblxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuY29uc3QgQXBwID0gKHByb3BzKSA9PiB7XG5cbiAgICBjb25zb2xlLmRpcihwcm9wcylcblxuICAgIHJldHVybihcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxNYWluIGNoYW5nZVVzZXJOYW1lPXtwcm9wcy5zZXRVc2VyTmFtZX0gLz5cbiAgICAgICAgICAgIDxVc2VyIHVzZXJOYW1lPXtwcm9wcy51c2VyTmFtZX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhzdGF0ZSlcbiAgICByZXR1cm4ge1xuICAgICAgICB1c2VyTmFtZTogc3RhdGVcbiAgICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHNldFVzZXJOYW1lOiAobmFtZSkgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgIHR5cGU6ICdTRVRfTkFNRScsXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogbmFtZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQXBwKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==