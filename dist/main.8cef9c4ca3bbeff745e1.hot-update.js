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
    userName: props.userName.userName
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BcHAuanMiXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzZXRVc2VyTmFtZSIsInVzZXJOYW1lIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJyZWR1Y2VyIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJuYW1lIiwidHlwZSIsInBheWxvYWQiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdBQU0sQ0FBQ0MsS0FBRCxFQUFXO0FBR25CLFNBQ0ksd0VBQ0ksMkRBQUMsbURBQUQ7QUFBTSxrQkFBYyxFQUFFQSxLQUFLLENBQUNDO0FBQTVCLElBREosRUFFSSwyREFBQyxtREFBRDtBQUFNLFlBQVEsRUFBRUQsS0FBSyxDQUFDRSxRQUFOLENBQWVBO0FBQS9CLElBRkosQ0FESjtBQU1ILENBVEQ7O0FBV0EsSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFELEVBQVc7QUFDL0IsU0FBTztBQUNIRixZQUFRLEVBQUVFLEtBQUssQ0FBQ0M7QUFEYixHQUFQO0FBR0gsQ0FKRDs7QUFNQSxJQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNDLFFBQUQsRUFBYztBQUNyQyxTQUFPO0FBQ0hOLGVBQVcsRUFBRSxxQkFBQ08sSUFBRCxFQUFVO0FBQ25CRCxjQUFRLENBQUM7QUFDTEUsWUFBSSxFQUFFLFVBREQ7QUFFTEMsZUFBTyxFQUFFRjtBQUZKLE9BQUQsQ0FBUjtBQUlIO0FBTkUsR0FBUDtBQVFILENBVEQ7O0FBV2VHLDBIQUFPLENBQUNSLGVBQUQsRUFBa0JHLGtCQUFsQixDQUFQLENBQTZDUCxHQUE3QyxDQUFmLEUiLCJmaWxlIjoibWFpbi44Y2VmOWM0Y2EzYmJlZmY3NDVlMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgTWFpbiBmcm9tICcuL3BhZ2VzL01haW4nXG5pbXBvcnQgVXNlciBmcm9tICcuL3BhZ2VzL1VzZXInXG5cbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmNvbnN0IEFwcCA9IChwcm9wcykgPT4ge1xuXG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8TWFpbiBjaGFuZ2VVc2VyTmFtZT17cHJvcHMuc2V0VXNlck5hbWV9IC8+XG4gICAgICAgICAgICA8VXNlciB1c2VyTmFtZT17cHJvcHMudXNlck5hbWUudXNlck5hbWV9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXNlck5hbWU6IHN0YXRlLnJlZHVjZXJcbiAgICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHNldFVzZXJOYW1lOiAobmFtZSkgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgIHR5cGU6ICdTRVRfTkFNRScsXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogbmFtZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQXBwKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==