(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./src/actions/userAction.js":
/*!***********************************!*\
  !*** ./src/actions/userAction.js ***!
  \***********************************/
/*! exports provided: setUserName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUserName", function() { return setUserName; });
function setUserName(name) {
  return {
    type: 'SET_NAME',
    payload: name
  };
}

/***/ }),

/***/ "./src/components/Main.js":
/*!********************************!*\
  !*** ./src/components/Main.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_userAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/userAction */ "./src/actions/userAction.js");




var Main = function Main(props) {
  console.dir(props.setUserName);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Main Page"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: function onClick() {
      return props.setUserName('Dongjeee');
    }
  }, "Change the Username"));
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    setUserName: function setUserName(name) {
      dispatch(Object(_actions_userAction__WEBPACK_IMPORTED_MODULE_2__["setUserName"])(name));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(null, mapDispatchToProps)(Main));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvdXNlckFjdGlvbi5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWFpbi5qcyJdLCJuYW1lcyI6WyJzZXRVc2VyTmFtZSIsIm5hbWUiLCJ0eXBlIiwicGF5bG9hZCIsIk1haW4iLCJwcm9wcyIsImNvbnNvbGUiLCJkaXIiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQTtBQUFBO0FBQU8sU0FBU0EsV0FBVCxDQUFxQkMsSUFBckIsRUFBMkI7QUFDOUIsU0FBTztBQUNIQyxRQUFJLEVBQUUsVUFESDtBQUVIQyxXQUFPLEVBQUVGO0FBRk4sR0FBUDtBQUlILEM7Ozs7Ozs7Ozs7OztBQ05EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUcsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsS0FBRCxFQUFXO0FBRXBCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBSyxDQUFDTCxXQUFsQjtBQUNBLFNBQ0ksd0VBQ0ksbUZBREosRUFFSTtBQUFRLFdBQU8sRUFBRTtBQUFBLGFBQU1LLEtBQUssQ0FBQ0wsV0FBTixDQUFrQixVQUFsQixDQUFOO0FBQUE7QUFBakIsMkJBRkosQ0FESjtBQU1ILENBVEQ7O0FBWUEsSUFBTVEsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDQyxRQUFELEVBQWM7QUFDckMsU0FBTztBQUNIVCxlQUFXLEVBQUUscUJBQUNDLElBQUQsRUFBVTtBQUNuQlEsY0FBUSxDQUFDVCx1RUFBVyxDQUFDQyxJQUFELENBQVosQ0FBUjtBQUNIO0FBSEUsR0FBUDtBQUtILENBTkQ7O0FBUWVTLDBIQUFPLENBQUMsSUFBRCxFQUFPRixrQkFBUCxDQUFQLENBQWtDSixJQUFsQyxDQUFmLEUiLCJmaWxlIjoiMC4yM2M2ZWNiMTNmNTE5MjI1ODMzNS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBmdW5jdGlvbiBzZXRVc2VyTmFtZShuYW1lKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogJ1NFVF9OQU1FJyxcbiAgICAgICAgcGF5bG9hZDogbmFtZVxuICAgIH1cbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQge3NldFVzZXJOYW1lfSBmcm9tICcuLi9hY3Rpb25zL3VzZXJBY3Rpb24nXG5cbmNvbnN0IE1haW4gPSAocHJvcHMpID0+IHtcblxuICAgIGNvbnNvbGUuZGlyKHByb3BzLnNldFVzZXJOYW1lKVxuICAgIHJldHVybihcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMT5NYWluIFBhZ2U8L2gxPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5zZXRVc2VyTmFtZSgnRG9uZ2plZWUnKX0+Q2hhbmdlIHRoZSBVc2VybmFtZTwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2V0VXNlck5hbWU6IChuYW1lKSA9PiB7XG4gICAgICAgICAgICBkaXNwYXRjaChzZXRVc2VyTmFtZShuYW1lKSlcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChudWxsLCBtYXBEaXNwYXRjaFRvUHJvcHMpKE1haW4pIl0sInNvdXJjZVJvb3QiOiIifQ==