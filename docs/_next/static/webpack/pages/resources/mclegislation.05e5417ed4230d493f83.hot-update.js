webpackHotUpdate_N_E("pages/resources/mclegislation",{

/***/ "./components/PDFViewer/PDFViewer.js":
/*!*******************************************!*\
  !*** ./components/PDFViewer/PDFViewer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PDFViewer_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PDFViewer.css */ "./components/PDFViewer/PDFViewer.css");
/* harmony import */ var _PDFViewer_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_PDFViewer_css__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
  _jsxFileName = "C:\\Users\\anton\\Documents\\Projects\\MurtWebsite\\components\\PDFViewer\\PDFViewer.js",
  _s = $RefreshSig$();
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var isMobileBrowser = function isMobileBrowser() {
  if (typeof navigator === 'undefined') return false;
  return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
};
var PDFViewer = function PDFViewer(_ref) {
  _s();
  var src = _ref.src,
    title = _ref.title,
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? 800 : _ref$height;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(100),
    zoom = _useState[0],
    setZoom = _useState[1];
  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    isMobile = _useState2[0],
    setIsMobile = _useState2[1];
  var ZOOM_STEP = 25;
  var ZOOM_MIN = 50;
  var ZOOM_MAX = 200;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setIsMobile(isMobileBrowser());
  }, []);
  var zoomIn = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    return setZoom(function (z) {
      return Math.min(z + ZOOM_STEP, ZOOM_MAX);
    });
  }, []);
  var zoomOut = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    return setZoom(function (z) {
      return Math.max(z - ZOOM_STEP, ZOOM_MIN);
    });
  }, []);
  var reset = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    return setZoom(100);
  }, []);
  var embedSrc = "".concat(src, "#zoom=").concat(zoom, "&toolbar=0&navpanes=0&scrollbar=1");
  var filename = title || src.split('/').pop().replace(/_/g, ' ').replace(/\.pdf$/i, '');
  return __jsx("div", {
    className: "pv-wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "pv-toolbar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "pv-toolbar-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/static/icons/file.svg",
    alt: "",
    className: "pv-file-icon",
    "aria-hidden": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 21
    }
  }), __jsx("span", {
    className: "pv-filename",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 21
    }
  }, filename)), __jsx("div", {
    className: "pv-toolbar-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }, !isMobile && __jsx("div", {
    className: "pv-zoom-controls",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 25
    }
  }, __jsx("button", {
    className: "pv-btn",
    onClick: zoomOut,
    disabled: zoom <= ZOOM_MIN,
    "aria-label": "Zoom out",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 29
    }
  }, __jsx("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    "aria-hidden": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 33
    }
  }, __jsx("rect", {
    x: "2",
    y: "6.5",
    width: "10",
    height: "1.5",
    rx: "0.75",
    fill: "currentColor",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 37
    }
  }))), __jsx("button", {
    className: "pv-zoom-label",
    onClick: reset,
    title: "Reset zoom",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 29
    }
  }, zoom, "%"), __jsx("button", {
    className: "pv-btn",
    onClick: zoomIn,
    disabled: zoom >= ZOOM_MAX,
    "aria-label": "Zoom in",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 29
    }
  }, __jsx("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    "aria-hidden": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 33
    }
  }, __jsx("rect", {
    x: "6.25",
    y: "2",
    width: "1.5",
    height: "10",
    rx: "0.75",
    fill: "currentColor",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 37
    }
  }), __jsx("rect", {
    x: "2",
    y: "6.25",
    width: "10",
    height: "1.5",
    rx: "0.75",
    fill: "currentColor",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 37
    }
  })))), !isMobile && __jsx("div", {
    className: "pv-toolbar-divider",
    "aria-hidden": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 35
    }
  }), __jsx("a", {
    className: "pv-btn pv-download",
    href: src,
    download: true,
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": "Download PDF",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 21
    }
  }, __jsx("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    "aria-hidden": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 25
    }
  }, __jsx("path", {
    d: "M7 1v7.5M7 8.5l-2.5-2.5M7 8.5l2.5-2.5",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 29
    }
  }), __jsx("path", {
    d: "M2 11h10",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 29
    }
  })), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 25
    }
  }, "Download")))), isMobile ? __jsx("div", {
    className: "pv-mobile-fallback",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  }, __jsx("svg", {
    width: "40",
    height: "40",
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": "true",
    className: "pv-mobile-icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 21
    }
  }, __jsx("path", {
    d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 25
    }
  }), __jsx("polyline", {
    points: "14 2 14 8 20 8",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 25
    }
  })), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 21
    }
  }, "PDFs can't be displayed inline on mobile."), __jsx("a", {
    href: src,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "pv-fallback-link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 21
    }
  }, "Open PDF ", __jsx("span", {
    "aria-hidden": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 34
    }
  }, "\u2192"))) : __jsx("div", {
    className: "pv-body",
    style: {
      height: height
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 17
    }
  }, __jsx("embed", {
    src: embedSrc,
    type: "application/pdf",
    width: "100%",
    height: "100%",
    className: "pv-embed",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: "pv-fallback",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 21
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 25
    }
  }, "Your browser can't display this PDF inline."), __jsx("a", {
    href: src,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "pv-fallback-link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 25
    }
  }, "Open PDF ", __jsx("span", {
    "aria-hidden": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 38
    }
  }, "\u2192")))));
};
_s(PDFViewer, "xXRmLg50I2WIvbOVNEazl1VSQUc=");
_c = PDFViewer;
/* harmony default export */ __webpack_exports__["default"] = (PDFViewer);
var _c;
$RefreshReg$(_c, "PDFViewer");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QREZWaWV3ZXIvUERGVmlld2VyLmpzIl0sIm5hbWVzIjpbImlzTW9iaWxlQnJvd3NlciIsIm5hdmlnYXRvciIsInRlc3QiLCJ1c2VyQWdlbnQiLCJQREZWaWV3ZXIiLCJfcmVmIiwiX3MiLCJzcmMiLCJ0aXRsZSIsIl9yZWYkaGVpZ2h0IiwiaGVpZ2h0IiwiX3VzZVN0YXRlIiwidXNlU3RhdGUiLCJ6b29tIiwic2V0Wm9vbSIsIl91c2VTdGF0ZTIiLCJpc01vYmlsZSIsInNldElzTW9iaWxlIiwiWk9PTV9TVEVQIiwiWk9PTV9NSU4iLCJaT09NX01BWCIsInVzZUVmZmVjdCIsInpvb21JbiIsInVzZUNhbGxiYWNrIiwieiIsIk1hdGgiLCJtaW4iLCJ6b29tT3V0IiwibWF4IiwicmVzZXQiLCJlbWJlZFNyYyIsImNvbmNhdCIsImZpbGVuYW1lIiwic3BsaXQiLCJwb3AiLCJyZXBsYWNlIiwiX19qc3giLCJjbGFzc05hbWUiLCJfX3NlbGYiLCJfdGhpcyIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiYWx0Iiwib25DbGljayIsImRpc2FibGVkIiwid2lkdGgiLCJ2aWV3Qm94IiwiZmlsbCIsIngiLCJ5IiwicngiLCJocmVmIiwiZG93bmxvYWQiLCJ0YXJnZXQiLCJyZWwiLCJkIiwic3Ryb2tlIiwic3Ryb2tlV2lkdGgiLCJzdHJva2VMaW5lY2FwIiwic3Ryb2tlTGluZWpvaW4iLCJwb2ludHMiLCJzdHlsZSIsInR5cGUiLCJfYyIsIiRSZWZyZXNoUmVnJCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFnRTtBQUN2QztBQUV6QixJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWVBLENBQUEsRUFBUztFQUMxQixJQUFJLE9BQU9DLFNBQVMsS0FBSyxXQUFXLEVBQUUsT0FBTyxLQUFLO0VBQ2xELE9BQU8sMkJBQTJCLENB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QUFBO0VBQUEsV0FBYSxDQUMvQyxDQUNGLENBQ0osQ0FFUixDQUFDO0FBRWQsQ0FBQztBQUFDdEMsRUFBQSxDQW5GSUYsU0FBUztBQUFBOEQsRUFBQSxHQUFUOUQsU0FBUztBQXFGQUEsd0VBQVMsRUFBQztBQUFBLElBQUE4RCxFQUFBO0FBQUFDLFlBQUEsQ0FBQUQsRUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZXNvdXJjZXMvbWNsZWdpc2xhdGlvbi4wNWU1NDE3ZWQ0MjMwZDQ5M2Y4My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICcuL1BERlZpZXdlci5jc3MnO1xuXG5jb25zdCBpc01vYmlsZUJyb3dzZXIgPSAoKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIC9pUGhvbmV8aVBhZHxpUG9kfEFuZHJvaWQvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xufTtcblxuY29uc3QgUERGVmlld2VyID0gKHsgc3JjLCB0aXRsZSwgaGVpZ2h0ID0gODAwIH0pID0+IHtcbiAgICBjb25zdCBbem9vbSwgc2V0Wm9vbV0gPSB1c2VTdGF0ZSgxMDApO1xuICAgIGNvbnN0IFtpc01vYmlsZSwgc2V0SXNNb2JpbGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFpPT01fU1RFUCA9IDI1O1xuICAgIGNvbnN0IFpPT01fTUlOID0gNTA7XG4gICAgY29uc3QgWk9PTV9NQVggPSAyMDA7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4geyBzZXRJc01vYmlsZShpc01vYmlsZUJyb3dzZXIoKSk7IH0sIFtdKTtcblxuICAgIGNvbnN0IHpvb21JbiAgPSB1c2VDYWxsYmFjaygoKSA9PiBzZXRab29tKHogPT4gTWF0aC5taW4oeiArIFpPT01fU1RFUCwgWk9PTV9NQVgpKSwgW10pO1xuICAgIGNvbnN0IHpvb21PdXQgPSB1c2VDYWxsYmFjaygoKSA9PiBzZXRab29tKHogPT4gTWF0aC5tYXgoeiAtIFpPT01fU1RFUCwgWk9PTV9NSU4pKSwgW10pO1xuICAgIGNvbnN0IHJlc2V0ICAgPSB1c2VDYWxsYmFjaygoKSA9PiBzZXRab29tKDEwMCksIFtdKTtcblxuICAgIGNvbnN0IGVtYmVkU3JjID0gYCR7c3JjfSN6b29tPSR7em9vbX0mdG9vbGJhcj0wJm5hdnBhbmVzPTAmc2Nyb2xsYmFyPTFgO1xuICAgIGNvbnN0IGZpbGVuYW1lID0gdGl0bGUgfHwgc3JjLnNwbGl0KCcvJykucG9wKCkucmVwbGFjZSgvXy9nLCAnICcpLnJlcGxhY2UoL1xcLnBkZiQvaSwgJycpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3B2LXdyYXAnPlxuICAgICAgICAgICAgey8qIFRvb2xiYXIgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHYtdG9vbGJhcic+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3B2LXRvb2xiYXItbGVmdCc+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPScvc3RhdGljL2ljb25zL2ZpbGUuc3ZnJyBhbHQ9JycgY2xhc3NOYW1lPSdwdi1maWxlLWljb24nIGFyaWEtaGlkZGVuPSd0cnVlJyAvPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3B2LWZpbGVuYW1lJz57ZmlsZW5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwdi10b29sYmFyLXJpZ2h0Jz5cbiAgICAgICAgICAgICAgICAgICAgeyFpc01vYmlsZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHYtem9vbS1jb250cm9scyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J3B2LWJ0bicgb25DbGljaz17em9vbU91dH0gZGlzYWJsZWQ9e3pvb20gPD0gWk9PTV9NSU59IGFyaWEtbGFiZWw9J1pvb20gb3V0Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD0nMTQnIGhlaWdodD0nMTQnIHZpZXdCb3g9JzAgMCAxNCAxNCcgZmlsbD0nbm9uZScgYXJpYS1oaWRkZW49J3RydWUnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD0nMicgeT0nNi41JyB3aWR0aD0nMTAnIGhlaWdodD0nMS41JyByeD0nMC43NScgZmlsbD0nY3VycmVudENvbG9yJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0ncHYtem9vbS1sYWJlbCcgb25DbGljaz17cmVzZXR9IHRpdGxlPSdSZXNldCB6b29tJz57em9vbX0lPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J3B2LWJ0bicgb25DbGljaz17em9vbUlufSBkaXNhYmxlZD17em9vbSA+PSBaT09NX01BWH0gYXJpYS1sYWJlbD0nWm9vbSBpbic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9JzE0JyBoZWlnaHQ9JzE0JyB2aWV3Qm94PScwIDAgMTQgMTQnIGZpbGw9J25vbmUnIGFyaWEtaGlkZGVuPSd0cnVlJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9JzYuMjUnIHk9JzInIHdpZHRoPScxLjUnIGhlaWdodD0nMTAnIHJ4PScwLjc1JyBmaWxsPSdjdXJyZW50Q29sb3InIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PScyJyB5PSc2LjI1JyB3aWR0aD0nMTAnIGhlaWdodD0nMS41JyByeD0nMC43NScgZmlsbD0nY3VycmVudENvbG9yJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICB7IWlzTW9iaWxlICYmIDxkaXYgY2xhc3NOYW1lPSdwdi10b29sYmFyLWRpdmlkZXInIGFyaWEtaGlkZGVuPSd0cnVlJyAvPn1cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdwdi1idG4gcHYtZG93bmxvYWQnIGhyZWY9e3NyY30gZG93bmxvYWQgdGFyZ2V0PSdfYmxhbmsnIHJlbD0nbm9vcGVuZXIgbm9yZWZlcnJlcicgYXJpYS1sYWJlbD0nRG93bmxvYWQgUERGJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9JzE0JyBoZWlnaHQ9JzE0JyB2aWV3Qm94PScwIDAgMTQgMTQnIGZpbGw9J25vbmUnIGFyaWEtaGlkZGVuPSd0cnVlJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSdNNyAxdjcuNU03IDguNWwtMi41LTIuNU03IDguNWwyLjUtMi41JyBzdHJva2U9J2N1cnJlbnRDb2xvcicgc3Ryb2tlV2lkdGg9JzEuNScgc3Ryb2tlTGluZWNhcD0ncm91bmQnIHN0cm9rZUxpbmVqb2luPSdyb3VuZCcgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSdNMiAxMWgxMCcgc3Ryb2tlPSdjdXJyZW50Q29sb3InIHN0cm9rZVdpZHRoPScxLjUnIHN0cm9rZUxpbmVjYXA9J3JvdW5kJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Eb3dubG9hZDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHsvKiBQREYgZW1iZWQgb3IgbW9iaWxlIGZhbGxiYWNrICovfVxuICAgICAgICAgICAge2lzTW9iaWxlID8gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwdi1tb2JpbGUtZmFsbGJhY2snPlxuICAgICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPSc0MCcgaGVpZ2h0PSc0MCcgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBhcmlhLWhpZGRlbj0ndHJ1ZScgY2xhc3NOYW1lPSdwdi1tb2JpbGUtaWNvbic+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSdNMTQgMkg2YTIgMiAwIDAgMC0yIDJ2MTZhMiAyIDAgMCAwIDIgMmgxMmEyIDIgMCAwIDAgMi0yVjh6JyBzdHJva2U9J2N1cnJlbnRDb2xvcicgc3Ryb2tlV2lkdGg9JzEuNScgc3Ryb2tlTGluZWNhcD0ncm91bmQnIHN0cm9rZUxpbmVqb2luPSdyb3VuZCcgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwb2x5bGluZSBwb2ludHM9JzE0IDIgMTQgOCAyMCA4JyBzdHJva2U9J2N1cnJlbnRDb2xvcicgc3Ryb2tlV2lkdGg9JzEuNScgc3Ryb2tlTGluZWNhcD0ncm91bmQnIHN0cm9rZUxpbmVqb2luPSdyb3VuZCcgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIDxwPlBERnMgY2FuJmFwb3M7dCBiZSBkaXNwbGF5ZWQgaW5saW5lIG9uIG1vYmlsZS48L3A+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3NyY30gdGFyZ2V0PSdfYmxhbmsnIHJlbD0nbm9vcGVuZXIgbm9yZWZlcnJlcicgY2xhc3NOYW1lPSdwdi1mYWxsYmFjay1saW5rJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIE9wZW4gUERGIDxzcGFuIGFyaWEtaGlkZGVuPSd0cnVlJz4mcmFycjs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3B2LWJvZHknIHN0eWxlPXt7IGhlaWdodCB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGVtYmVkXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2VtYmVkU3JjfVxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0nYXBwbGljYXRpb24vcGRmJ1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9JzEwMCUnXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9JzEwMCUnXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3B2LWVtYmVkJ1xuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHYtZmFsbGJhY2snPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+WW91ciBicm93c2VyIGNhbiZhcG9zO3QgZGlzcGxheSB0aGlzIFBERiBpbmxpbmUuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17c3JjfSB0YXJnZXQ9J19ibGFuaycgcmVsPSdub29wZW5lciBub3JlZmVycmVyJyBjbGFzc05hbWU9J3B2LWZhbGxiYWNrLWxpbmsnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9wZW4gUERGIDxzcGFuIGFyaWEtaGlkZGVuPSd0cnVlJz4mcmFycjs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBERlZpZXdlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=