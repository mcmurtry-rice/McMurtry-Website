webpackHotUpdate_N_E("pages/people/committees",{

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
  }), " ", props.subjects) : null, props.room !== undefined ? __jsx("h2", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nZW5lcmFsL2NvbnRhY3RjYXJkcy5qcyJdLCJuYW1lcyI6WyJDYXJkIiwicHJvcHMiLCJfX2pzeCIsIkJveCIsImNsYXNzTmFtZSIsIndpZHRoIiwiX19zZWxmIiwiX3RoaXMiLCJfX3NvdXJjZSIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsInN0eWxlIiwibWluSGVpZ2h0IiwicGhvdG8iLCJ1bmRlZmluZWQiLCJJbWFnZSIsInNyYyIsImFsdCIsImNvbmNhdCIsIm5hbWUiLCJwb3NpdGlvbiIsInBob25lIiwiZW1haWwiLCJocmVmIiwieWVhciIsIm1ham9yIiwic3ViamVjdHMiLCJyb29tIiwicHJlX3Byb2ZfcGF0aCIsIl9jIiwiQ2FyZHMiLCJtbCIsIm1yIiwiRmxleCIsImZsZXhXcmFwIiwiZmxleERpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50IiwiY29udGVudCIsIm1hcCIsIl9yZWYiLCJrZXkiLCJfYzIiLCIkUmVmcmVzaFJlZyQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ2dCO0FBQ2Q7QUFFNUIsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQUlBLENBQUdDLEtBQUs7RUFBQSxPQUNkQyxLQUFBLENBQUNDLDBDQUFHO0lBQUNDLFNBQVMsRUFBQyxlQUFlO0lBQUNDLEtBQUssRUFBRUosS0FBSyxDQUFDSSxLQUFNO0lBQUFDLE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQzlDVixLQUFBO0lBQUtFLFNBQVMsRUFBQyxzQkFBc0I7SUFBQ1MsS0FBSyxFQUFFO01BQUVDLFNBQVMsRUFBRWIsS0FBSyxDQUFDYTtJQUFVLENBQUU7SUFBQVIsTUFBQSxFQUFBQyxLQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDdkVYLEtBQUssQ0FBQ2MsS0FBSyxLQUFLQyxTQUFTLElBQ3RCZCxLQUFBLENBQUNlLDRDQUFLO0lBQUNDLEdBQUcsRUFBRWpCLEtBQUssQ0FBQ2MsS0FBTTtJQUFDSSxHQUFHLEtBQUFDLE1BQUEsQ0FBS25CLEtBQUssQ0FBQ29CLElBQUksYUFBVztJQUFBZixNQUFBLEVBQUFDLEtBQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxDQUFFLENBQzNELEVBQ0FYLEtBQUssQ0FBQ3FCLFFBQVEsS0FBS04sU0FBUyxJQUN6QmQsS0FBQTtJQUFJRSxTQUFTLEVBQUMsVUFBVTtJQUFBRSxNQUFBLEVBQUFDLEtBQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUFFWCxLQUFLLENBQUNxQixRQUFhLENBQ2hELEVBQ0RwQixLQUFBO0lBQUlFLFNBQVMsRUFBQyxNQUFNO0lBQUFFLE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQUVYLEtBQUssQ0FBQ29CLElBQVMsQ0FBQyxFQUVsQ3BCLEtBQUssQ0FBQ3NCLEtBQUssS0FBS1AsU0FBUyxHQUNyQmQsS0FBQTtJQUFJRSxTQUFTLEVBQUMsZUFBZTtJQUFBRSxNQUFBLEVBQUFDLEtBQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUFDVixLQUFBO0lBQUtnQixHQUFHLEVBQUMseUJBQXlCO0lBQUNDLEdBQUcsRUFBQyxTQUFTO0lBQUFiLE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLENBQUUsQ0FBQyxFQUFDLEdBQUcsRUFBRVgsS0FBSyxDQUFDc0IsS0FBVSxDQUFDLEdBRXBHLElBQ0gsRUFHTHRCLEtBQUssQ0FBQ3VCLEtBQUssR0FDUHRCLEtBQUE7SUFBR3VCLElBQUksWUFBQUwsTUFBQSxDQUFZbkIsS0FBSyxDQUFDdUIsS0FBSyxDQUFHO0lBQUNwQixTQUFTLEVBQUMsTUFBTTtJQUFBRSxNQUFBLEVBQUFDLEtBQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUM5Q1YsS0FBQTtJQUFJRSxTQUFTLEVBQUMsZUFBZTtJQUFBRSxNQUFBLEVBQUFDLEtBQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUFDVixLQUFBO0lBQUtnQixHQUFHLEVBQUMseUJBQXlCO0lBQUNDLEdBQUcsRUFBQyxTQUFTO0lBQUFiLE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLENBQUUsQ0FBQyxFQUFDLEdBQUcsRUFBRVgsS0FBSyxDQUFDdUIsS0FBVSxDQUN4RyxDQUFDLEdBRUEsSUFDSCxFQUdMdkIsS0FBSyxDQUFDeUIsSUFBSSxLQUFLVixTQUFTLEdBQ3BCZCxLQUFBO0lBQUlFLFNBQVMsRUFBQyxNQUFNO0lBQUFFLE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLGFBQVFYLEtBQUssQ0FBQ3lCLElBQVMsQ0FBQyxHQUV4QyxJQUNILEVBR0x6QixLQUFLLENBQUMwQixLQUFLLEtBQUtYLFNBQVMsR0FDckJkLEtBQUE7SUFBSUUsU0FBUyxFQUFDLE9BQU87SUFBQUUsTUFBQSxFQUFBQyxLQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FBQ1YsS0FBQTtJQUFLZ0IsR0FBRyxFQUFDLHdCQUF3QjtJQUFDQyxHQUFHLEVBQUMsU0FBUztJQUFBYixNQUFBLEVBQUFDLEtBQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxDQUFFLENBQUMsT0FBRVgsS0FBSyxDQUFDMEIsS0FBVSxDQUFDLEdBRXZGLElBQ0gsRUFHTDFCLEtBQUssQ0FBQzJCLFFBQVEsS0FBS1osU0FBUyxHQUN4QmQsS0FBQTtJQUFJRSxTQUFTLEVBQUMsVUFBVTtJQUFBRSxNQUFBLEVBQUFDLEtBQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUFDVixLQUFBO0lBQUtnQixHQUFHLEVBQUMsd0JBQXdCO0lBQUNDLEdBQUcsRUFBQyxZQUFZO0lBQUFiLE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLENBQUUsQ0FBQyxPQUFFWCxLQUFLLENBQUMyQixRQUFhLENBQUMsR0FHaEcsSUFDSCxFQUdMM0IsS0FBSyxDQUFDNEIsSUFBSSxLQUFLYixTQUFTLEdBQ3BCZCxLQUFBO0lBQUlFLFNBQVMsRUFBQyxNQUFNO0lBQUFFLE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLGFBQVFYLEtBQUssQ0FBQzRCLElBQVMsQ0FBQyxHQUV4QyxJQUNILEVBR0w1QixLQUFLLENBQUM2QixhQUFhLEtBQUtkLFNBQVMsR0FDN0JkLEtBQUE7SUFBSUUsU0FBUyxFQUFDLGVBQWU7SUFBQUUsTUFBQSxFQUFBQyxLQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FBQ1YsS0FBQTtJQUFLZ0IsR0FBRyxFQUFDLHdCQUF3QjtJQUFDQyxHQUFHLEVBQUMseUJBQXlCO0lBQUFiLE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLENBQUUsQ0FBQyxPQUFFWCxLQUFLLENBQUM2QixhQUFrQixDQUFDLEdBRXZILElBR1gsQ0FDSixDQUFDO0FBQUEsQ0FDVDtBQUFBQyxFQUFBLEdBaEVLL0IsSUFBSTtBQWtFVixJQUFNZ0MsS0FBSyxHQUFHLFNBQVJBLEtBQUtBLENBQUcvQixLQUFLO0VBQUEsT0FDZkMsS0FBQSxDQUFDQywwQ0FBRztJQUFDRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUU7SUFBQzRCLEVBQUUsRUFBQyxNQUFNO0lBQUNDLEVBQUUsRUFBQyxNQUFNO0lBQUE1QixNQUFBLEVBQUFDLEtBQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUM3Q1YsS0FBQSxDQUFDaUMsMkNBQUk7SUFBQ0MsUUFBUSxFQUFDLE1BQU07SUFBQ0MsYUFBYSxFQUFDLEtBQUs7SUFBQ0MsY0FBYyxFQUFDLFFBQVE7SUFBQWhDLE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBRXpEWCxLQUFLLENBQUNzQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxVQUFBQyxJQUFBO0lBQUEsSUFBRzFCLEtBQUssR0FBQTBCLElBQUEsQ0FBTDFCLEtBQUs7TUFBRU8sUUFBUSxHQUFBbUIsSUFBQSxDQUFSbkIsUUFBUTtNQUFFRCxJQUFJLEdBQUFvQixJQUFBLENBQUpwQixJQUFJO01BQUVLLElBQUksR0FBQWUsSUFBQSxDQUFKZixJQUFJO01BQUVGLEtBQUssR0FBQWlCLElBQUEsQ0FBTGpCLEtBQUs7TUFBRUQsS0FBSyxHQUFBa0IsSUFBQSxDQUFMbEIsS0FBSztNQUFFSSxLQUFLLEdBQUFjLElBQUEsQ0FBTGQsS0FBSztNQUFFQyxRQUFRLEdBQUFhLElBQUEsQ0FBUmIsUUFBUTtNQUFFQyxJQUFJLEdBQUFZLElBQUEsQ0FBSlosSUFBSTtNQUFFQyxhQUFhLEdBQUFXLElBQUEsQ0FBYlgsYUFBYTtJQUFBLE9BQ2hHNUIsS0FBQSxDQUFDRixJQUFJO01BQ0RLLEtBQUssRUFBRUosS0FBSyxDQUFDSSxLQUFNO01BQ25CUyxTQUFTLEVBQUViLEtBQUssQ0FBQ2EsU0FBVTtNQUMzQjRCLEdBQUcsS0FBQXRCLE1BQUEsQ0FBS0MsSUFBSSxPQUFBRCxNQUFBLENBQUlFLFFBQVEsSUFBSSxFQUFFLENBQUc7TUFDakNQLEtBQUssRUFBRUEsS0FBTTtNQUNiTyxRQUFRLEVBQUVBLFFBQVM7TUFDbkJELElBQUksRUFBRUEsSUFBSztNQUNYSyxJQUFJLEVBQUVBLElBQUs7TUFDWEYsS0FBSyxFQUFFQSxLQUFNO01BQ2JELEtBQUssRUFBRUEsS0FBTTtNQUNiSSxLQUFLLEVBQUVBLEtBQU07TUFDYkMsUUFBUSxFQUFFQSxRQUFTO01BQ25CQyxJQUFJLEVBQUVBLElBQUs7TUFDWEMsYUFBYSxFQUFFQSxhQUFjO01BQUF4QixNQUFBLEVBQUFDLEtBQUE7TUFBQUMsUUFBQTtRQUFBQyxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUE7SUFBQSxDQUNoQyxDQUFDO0VBQUEsQ0FDTCxDQUVILENBQ0wsQ0FBQztBQUFBLENBQ1Q7QUFBQStCLEdBQUEsR0F4QktYLEtBQUs7QUEwQklBLG9FQUFLLEVBQUM7QUFBQSxJQUFBRCxFQUFBLEVBQUFZLEdBQUE7QUFBQUMsWUFBQSxDQUFBYixFQUFBO0FBQUFhLFlBQUEsQ0FBQUQsR0FBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wZW9wbGUvY29tbWl0dGVlcy4xNDE0MDUzNzYwZjBkMGM3OTlhZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQm94LCBGbGV4LCBJbWFnZSB9IGZyb20gJ3JlYmFzcyc7XHJcbmltcG9ydCAnLi9jb250YWN0Y2FyZHMuY3NzJztcclxuXHJcbmNvbnN0IENhcmQgPSBwcm9wcyA9PiAoXHJcbiAgICA8Qm94IGNsYXNzTmFtZT0ncG9zaXRpb24tY2FyZCcgd2lkdGg9e3Byb3BzLndpZHRofT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtY2FyZC1jb250ZW50XCIgc3R5bGU9e3sgbWluSGVpZ2h0OiBwcm9wcy5taW5IZWlnaHQgfX0+XHJcbiAgICAgICAgICAgIHtwcm9wcy5waG90byAhPT0gdW5kZWZpbmVkICYmIChcclxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e3Byb3BzLnBob3RvfSBhbHQ9e2Ake3Byb3BzLm5hbWV9J3MgcGhvdG9gfSAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7cHJvcHMucG9zaXRpb24gIT09IHVuZGVmaW5lZCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwicG9zaXRpb25cIj57cHJvcHMucG9zaXRpb259PC9oMj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm5hbWVcIj57cHJvcHMubmFtZX08L2gyPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5waG9uZSAhPT0gdW5kZWZpbmVkID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJjb250YWN0LXBob25lXCI+PGltZyBzcmM9XCIvc3RhdGljL2ljb25zL3Bob25lLnN2Z1wiIGFsdD1cIlBob25lOiBcIiAvPnsnICd9e3Byb3BzLnBob25lfTwvaDM+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHByb3BzLmVtYWlsID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2BtYWlsdG86JHtwcm9wcy5lbWFpbH1gfSBjbGFzc05hbWU9J2xpbmsnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiY29udGFjdC1lbWFpbFwiPjxpbWcgc3JjPVwiL3N0YXRpYy9pY29ucy9lbWFpbC5zdmdcIiBhbHQ9XCJFbWFpbDogXCIgLz57JyAnfXtwcm9wcy5lbWFpbH08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcHJvcHMueWVhciAhPT0gdW5kZWZpbmVkID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9J3llYXInPlllYXI6IHtwcm9wcy55ZWFyfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHByb3BzLm1ham9yICE9PSB1bmRlZmluZWQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0nbWFqb3InPjxpbWcgc3JjPVwiL3N0YXRpYy9pY29ucy9maWxlLnN2Z1wiIGFsdD0nTWFqb3I6ICcgLz4ge3Byb3BzLm1ham9yfTwvaDI+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHByb3BzLnN1YmplY3RzICE9PSB1bmRlZmluZWQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInN1YmplY3RzXCI+PGltZyBzcmM9XCIvc3RhdGljL2ljb25zL2Jvb2suc3ZnXCIgYWx0PSdTdWJqZWN0czogJyAvPiB7cHJvcHMuc3ViamVjdHN9PC9oMj5cclxuXHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHByb3BzLnJvb20gIT09IHVuZGVmaW5lZCA/IChcclxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdyb29tJz5Sb29tOiB7cHJvcHMucm9vbX08L2gyPlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5wcmVfcHJvZl9wYXRoICE9PSB1bmRlZmluZWQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0ncHJlX3Byb2ZfcGF0aCc+PGltZyBzcmM9XCIvc3RhdGljL2ljb25zL2ZpbGUuc3ZnXCIgYWx0PSdQcmUtUHJvZmVzc2lvbmFsIFBhdGg6ICcgLz4ge3Byb3BzLnByZV9wcm9mX3BhdGh9PC9oMj5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvQm94PlxyXG4pXHJcblxyXG5jb25zdCBDYXJkcyA9IHByb3BzID0+IChcclxuICAgIDxCb3ggd2lkdGg9e1sxLCAxLCAwLjksIDAuOF19IG1sPSdhdXRvJyBtcj0nYXV0byc+XHJcbiAgICAgICAgPEZsZXggZmxleFdyYXA9J3dyYXAnIGZsZXhEaXJlY3Rpb249J3JvdycganVzdGlmeUNvbnRlbnQ9J2NlbnRlcic+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHByb3BzLmNvbnRlbnQubWFwKCh7IHBob3RvLCBwb3NpdGlvbiwgbmFtZSwgeWVhciwgZW1haWwsIHBob25lLCBtYWpvciwgc3ViamVjdHMsIHJvb20sIHByZV9wcm9mX3BhdGggfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17cHJvcHMud2lkdGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbkhlaWdodD17cHJvcHMubWluSGVpZ2h0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2Ake25hbWV9LSR7cG9zaXRpb24gfHwgJyd9YH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBob3RvPXtwaG90b30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uPXtwb3NpdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17bmFtZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHllYXI9e3llYXJ9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbWFpbD17ZW1haWx9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwaG9uZT17cGhvbmV9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYWpvcj17bWFqb3J9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJqZWN0cz17c3ViamVjdHN9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByb29tPXtyb29tfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVfcHJvZl9wYXRoPXtwcmVfcHJvZl9wYXRofSBcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvRmxleD5cclxuICAgIDwvQm94PlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkczsiXSwic291cmNlUm9vdCI6IiJ9