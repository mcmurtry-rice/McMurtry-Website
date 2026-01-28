webpackHotUpdate_N_E("pages/people/court",{

/***/ "./components/general/contactcards.js":
/*!********************************************!*\
  !*** ./components/general/contactcards.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.js");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contactcards_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contactcards.css */ "./components/general/contactcards.css");
/* harmony import */ var _contactcards_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_contactcards_css__WEBPACK_IMPORTED_MODULE_2__);
var _this = undefined,
  _jsxFileName = "C:\\Users\\anton\\Documents\\Projects\\MurtWebsite\\components\\general\\contactcards.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Card = function Card(props) {
  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    className: "position-card",
    width: props.width,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "contact-card-content",
    style: {
      minHeight: props.minHeight
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, props.photo !== undefined && __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: props.photo,
    alt: "".concat(props.name, "'s photo"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }
  }), props.position !== undefined && __jsx("h2", {
    className: "position",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }, props.position), __jsx("h2", {
    className: "name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, props.name), props.phone !== undefined ? __jsx("h3", {
    className: "contact-phone",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/static/icons/phone.svg",
    alt: "Phone: ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 51
    }
  }), ' ', props.phone) : null, props.email ? __jsx("a", {
    href: "mailto:".concat(props.email),
    className: "link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 21
    }
  }, __jsx("h3", {
    className: "contact-email",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: "/static/icons/email.svg",
    alt: "Email: ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 55
    }
  }), ' ', props.email)) : null, props.year !== undefined ? __jsx("h4", {
    className: "year",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 21
    }
  }, "Year: ", props.year) : null, props.major !== undefined ? __jsx("h2", {
    className: "major",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/static/icons/file.svg",
    alt: "Major: ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 43
    }
  }), " ", props.major) : null, props.subjects !== undefined ? __jsx("h2", {
    className: "subjects",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/static/icons/book.svg",
    alt: "Subjects: ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 46
    }
  }), " ", props.subjects) : null, props.room ? __jsx("h2", {
    className: "room",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 21
    }
  }, "Room: ", props.room) : null, props.pre_prof_path !== undefined ? __jsx("h2", {
    className: "pre_prof_path",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/static/icons/file.svg",
    alt: "Pre-Professional Path: ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 51
    }
  }), " ", props.pre_prof_path) : null));
};
_c = Card;
var Cards = function Cards(props) {
  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    width: [1, 1, 0.9, 0.8],
    ml: "auto",
    mr: "auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 5
    }
  }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }, props.content.map(function (_ref) {
    var photo = _ref.photo,
      position = _ref.position,
      name = _ref.name,
      year = _ref.year,
      email = _ref.email,
      phone = _ref.phone,
      major = _ref.major,
      subjects = _ref.subjects,
      room = _ref.room,
      pre_prof_path = _ref.pre_prof_path;
    return __jsx(Card, {
      width: props.width,
      minHeight: props.minHeight,
      key: "".concat(name, "-").concat(position || ''),
      photo: photo,
      position: position,
      name: name,
      year: year,
      email: email,
      phone: phone,
      major: major,
      subjects: subjects,
      room: room,
      pre_prof_path: pre_prof_path,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 21
      }
    });
  })));
};
_c2 = Cards;
/* harmony default export */ __webpack_exports__["default"] = (Cards);
var _c, _c2;
$RefreshReg$(_c, "Card");
$RefreshReg$(_c2, "Cards");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nZW5lcmFsL2NvbnRhY3RjYXJkcy5qcyJdLCJuYW1lcyI6WyJDYXJkIiwicHJvcHMiLCJfX2pzeCIsIkJveCIsImNsYXNzTmFtZSIsIndpZHRoIiwiX19zZWxmIiwiX3RoaXMiLCJfX3NvdXJjZSIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsInN0eWxlIiwibWluSGVpZ2h0IiwicGhvdG8iLCJ1bmRlZmluZWQiLCJJbWFnZSIsInNyYyIsImFsdCIsImNvbmNhdCIsIm5hbWUiLCJwb3NpdGlvbiIsInBob25lIiwiZW1haWwiLCJocmVmIiwieWVhciIsIm1ham9yIiwic3ViamVjdHMiLCJyb29tIiwicHJlX3Byb2ZfcGF0aCIsIl9jIiwiQ2FyZHMiLCJtbCIsIm1yIiwiRmxleCIsImZsZXhXcmFwIiwiZmxleERpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50IiwiY29udGVudCIsIm1hcCIsIl9yZWYiLCJrZXkiLCJfYzIiLCIkUmVmcmVzaFJlZyQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ2dCO0FBQ2Q7QUFFNUIsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQUlBLENBQUdDLEtBQUs7RUFBQSxPQUNkQyxLQUFBLENBQUNDLDBDQUFHO0lBQUNDLFNBQVMsRUFBQyxlQUFlO0lBQUNDLEtBQUssRUFBRUosS0FBSyxDQUFDSSxLQUFNO0lBQUFDLE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQzlDVixLQUFBO0lBQUtFLFNBQVMsRUFBQyxzQkFBc0I7SUFBQ1MsS0FBSyxFQUFFO01BQUVDLFNBQVMsRUFBRWIsS0FBSyxDQUFDYTtJQUFVLENBQUU7SUFBQVIsTUFBQSxFQUFBQyxLQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxF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ZjYyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCb3gsIEZsZXgsIEltYWdlIH0gZnJvbSAncmViYXNzJztcclxuaW1wb3J0ICcuL2NvbnRhY3RjYXJkcy5jc3MnO1xyXG5cclxuY29uc3QgQ2FyZCA9IHByb3BzID0+IChcclxuICAgIDxCb3ggY2xhc3NOYW1lPSdwb3NpdGlvbi1jYXJkJyB3aWR0aD17cHJvcHMud2lkdGh9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC1jYXJkLWNvbnRlbnRcIiBzdHlsZT17eyBtaW5IZWlnaHQ6IHByb3BzLm1pbkhlaWdodCB9fT5cclxuICAgICAgICAgICAge3Byb3BzLnBob3RvICE9PSB1bmRlZmluZWQgJiYgKFxyXG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz17cHJvcHMucGhvdG99IGFsdD17YCR7cHJvcHMubmFtZX0ncyBwaG90b2B9IC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHtwcm9wcy5wb3NpdGlvbiAhPT0gdW5kZWZpbmVkICYmIChcclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJwb3NpdGlvblwiPntwcm9wcy5wb3NpdGlvbn08L2gyPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibmFtZVwiPntwcm9wcy5uYW1lfTwvaDI+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHByb3BzLnBob25lICE9PSB1bmRlZmluZWQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImNvbnRhY3QtcGhvbmVcIj48aW1nIHNyYz1cIi9zdGF0aWMvaWNvbnMvcGhvbmUuc3ZnXCIgYWx0PVwiUGhvbmU6IFwiIC8+eycgJ317cHJvcHMucGhvbmV9PC9oMz5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcHJvcHMuZW1haWwgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YG1haWx0bzoke3Byb3BzLmVtYWlsfWB9IGNsYXNzTmFtZT0nbGluayc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJjb250YWN0LWVtYWlsXCI+PGltZyBzcmM9XCIvc3RhdGljL2ljb25zL2VtYWlsLnN2Z1wiIGFsdD1cIkVtYWlsOiBcIiAvPnsnICd9e3Byb3BzLmVtYWlsfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwcm9wcy55ZWFyICE9PSB1bmRlZmluZWQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT0neWVhcic+WWVhcjoge3Byb3BzLnllYXJ9PC9oND5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcHJvcHMubWFqb3IgIT09IHVuZGVmaW5lZCA/IChcclxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdtYWpvcic+PGltZyBzcmM9XCIvc3RhdGljL2ljb25zL2ZpbGUuc3ZnXCIgYWx0PSdNYWpvcjogJyAvPiB7cHJvcHMubWFqb3J9PC9oMj5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcHJvcHMuc3ViamVjdHMgIT09IHVuZGVmaW5lZCA/IChcclxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwic3ViamVjdHNcIj48aW1nIHNyYz1cIi9zdGF0aWMvaWNvbnMvYm9vay5zdmdcIiBhbHQ9J1N1YmplY3RzOiAnIC8+IHtwcm9wcy5zdWJqZWN0c308L2gyPlxyXG5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcHJvcHMucm9vbSAgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0ncm9vbSc+Um9vbToge3Byb3BzLnJvb219PC9oMj5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcHJvcHMucHJlX3Byb2ZfcGF0aCAhPT0gdW5kZWZpbmVkID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J3ByZV9wcm9mX3BhdGgnPjxpbWcgc3JjPVwiL3N0YXRpYy9pY29ucy9maWxlLnN2Z1wiIGFsdD0nUHJlLVByb2Zlc3Npb25hbCBQYXRoOiAnIC8+IHtwcm9wcy5wcmVfcHJvZl9wYXRofTwvaDI+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L0JveD5cclxuKVxyXG5cclxuY29uc3QgQ2FyZHMgPSBwcm9wcyA9PiAoXHJcbiAgICA8Qm94IHdpZHRoPXtbMSwgMSwgMC45LCAwLjhdfSBtbD0nYXV0bycgbXI9J2F1dG8nPlxyXG4gICAgICAgIDxGbGV4IGZsZXhXcmFwPSd3cmFwJyBmbGV4RGlyZWN0aW9uPSdyb3cnIGp1c3RpZnlDb250ZW50PSdjZW50ZXInPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5jb250ZW50Lm1hcCgoeyBwaG90bywgcG9zaXRpb24sIG5hbWUsIHllYXIsIGVtYWlsLCBwaG9uZSwgbWFqb3IsIHN1YmplY3RzLCByb29tLCBwcmVfcHJvZl9wYXRoIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9e3Byb3BzLndpZHRofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW5IZWlnaHQ9e3Byb3BzLm1pbkhlaWdodH1cclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtgJHtuYW1lfS0ke3Bvc2l0aW9uIHx8ICcnfWB9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwaG90bz17cGhvdG99IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbj17cG9zaXRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e25hbWV9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5ZWFyPXt5ZWFyfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW1haWw9e2VtYWlsfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGhvbmU9e3Bob25lfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFqb3I9e21ham9yfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3ViamVjdHM9e3N1YmplY3RzfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm9vbT17cm9vbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJlX3Byb2ZfcGF0aD17cHJlX3Byb2ZfcGF0aH0gXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L0ZsZXg+XHJcbiAgICA8L0JveD5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZHM7Il0sInNvdXJjZVJvb3QiOiIifQ==