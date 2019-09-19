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
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_Main__WEBPACK_IMPORTED_MODULE_1__["default"], {
    changeUserName: props.setUserName
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_User__WEBPACK_IMPORTED_MODULE_2__["default"], {
    userName: props.userName
  }));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    userName: state.userName
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BcHAuanMiXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzZXRVc2VyTmFtZSIsInVzZXJOYW1lIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsIm5hbWUiLCJ0eXBlIiwicGF5bG9hZCIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxDQUFDQyxLQUFELEVBQVc7QUFHbkIsU0FDSSx3RUFDSSwyREFBQyxtREFBRDtBQUFNLGtCQUFjLEVBQUVBLEtBQUssQ0FBQ0M7QUFBNUIsSUFESixFQUVJLDJEQUFDLG1EQUFEO0FBQU0sWUFBUSxFQUFFRCxLQUFLLENBQUNFO0FBQXRCLElBRkosQ0FESjtBQU1ILENBVEQ7O0FBV0EsSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFELEVBQVc7QUFDL0IsU0FBTztBQUNIRixZQUFRLEVBQUVFLEtBQUssQ0FBQ0Y7QUFEYixHQUFQO0FBR0gsQ0FKRDs7QUFNQSxJQUFNRyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNDLFFBQUQsRUFBYztBQUNyQyxTQUFPO0FBQ0hMLGVBQVcsRUFBRSxxQkFBQ00sSUFBRCxFQUFVO0FBQ25CRCxjQUFRLENBQUM7QUFDTEUsWUFBSSxFQUFFLFVBREQ7QUFFTEMsZUFBTyxFQUFFRjtBQUZKLE9BQUQsQ0FBUjtBQUlIO0FBTkUsR0FBUDtBQVFILENBVEQ7O0FBV2VHLDBIQUFPLENBQUNQLGVBQUQsRUFBa0JFLGtCQUFsQixDQUFQLENBQTZDTixHQUE3QyxDQUFmLEUiLCJmaWxlIjoibWFpbi43MjA4M2NkYjJhODBmMDMyMzg5My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgTWFpbiBmcm9tICcuL3BhZ2VzL01haW4nXG5pbXBvcnQgVXNlciBmcm9tICcuL3BhZ2VzL1VzZXInXG5cbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmNvbnN0IEFwcCA9IChwcm9wcykgPT4ge1xuXG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8TWFpbiBjaGFuZ2VVc2VyTmFtZT17cHJvcHMuc2V0VXNlck5hbWV9IC8+XG4gICAgICAgICAgICA8VXNlciB1c2VyTmFtZT17cHJvcHMudXNlck5hbWV9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXNlck5hbWU6IHN0YXRlLnVzZXJOYW1lXG4gICAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBzZXRVc2VyTmFtZTogKG5hbWUpID0+IHtcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnU0VUX05BTUUnLFxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IG5hbWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEFwcClcbiJdLCJzb3VyY2VSb290IjoiIn0=