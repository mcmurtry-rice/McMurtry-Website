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


var PDFViewer = function PDFViewer(_ref) {
  _s();
  var src = _ref.src,
    title = _ref.title,
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? 800 : _ref$height;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(100),
    zoom = _useState[0],
    setZoom = _useState[1];
  var ZOOM_STEP = 25;
  var ZOOM_MIN = 50;
  var ZOOM_MAX = 200;
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
  var isMobile =  true && /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  var embedSrc = "".concat(src, "#zoom=").concat(zoom, "&toolbar=0&navpanes=0&scrollbar=1");
  var filename = title || src.split('/').pop().replace(/_/g, ' ').replace(/\.pdf$/i, '');
  return __jsx("div", {
    className: "pv-wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "pv-toolbar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "pv-toolbar-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
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
      lineNumber: 22,
      columnNumber: 21
    }
  }), __jsx("span", {
    className: "pv-filename",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 21
    }
  }, filename)), __jsx("div", {
    className: "pv-toolbar-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "pv-zoom-controls",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 21
    }
  }, __jsx("button", {
    className: "pv-btn",
    onClick: zoomOut,
    disabled: zoom <= ZOOM_MIN,
    "aria-label": "Zoom out",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 25
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
      lineNumber: 28,
      columnNumber: 29
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
      lineNumber: 29,
      columnNumber: 33
    }
  }))), __jsx("button", {
    className: "pv-zoom-label",
    onClick: reset,
    title: "Reset zoom",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 25
    }
  }, zoom, "%"), __jsx("button", {
    className: "pv-btn",
    onClick: zoomIn,
    disabled: zoom >= ZOOM_MAX,
    "aria-label": "Zoom in",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 25
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
      lineNumber: 34,
      columnNumber: 29
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
      lineNumber: 35,
      columnNumber: 33
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
      lineNumber: 36,
      columnNumber: 33
    }
  })))), __jsx("div", {
    className: "pv-toolbar-divider",
    "aria-hidden": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 21
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
      lineNumber: 41,
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
      lineNumber: 42,
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
      lineNumber: 43,
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
      lineNumber: 44,
      columnNumber: 29
    }
  })), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 25
    }
  }, "Download")))), isMobile ? __jsx("div", {
    className: "pv-mobile",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }, __jsx("svg", {
    width: "48",
    height: "48",
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
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
      lineNumber: 54,
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
      lineNumber: 55,
      columnNumber: 25
    }
  }), __jsx("line", {
    x1: "16",
    y1: "13",
    x2: "8",
    y2: "13",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 25
    }
  }), __jsx("line", {
    x1: "16",
    y1: "17",
    x2: "8",
    y2: "17",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 25
    }
  })), __jsx("p", {
    className: "pv-mobile-name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 21
    }
  }, filename), __jsx("a", {
    href: src,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "pv-fallback-link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 21
    }
  }, "Open PDF ", __jsx("span", {
    "aria-hidden": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 34
    }
  }, "\u2192"))) : __jsx("div", {
    className: "pv-body",
    style: {
      '--pv-height': "".concat(height, "px")
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  }, __jsx("iframe", {
    src: embedSrc,
    title: filename,
    width: "100%",
    height: "100%",
    className: "pv-embed",
    style: {
      border: 'none'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: "pv-fallback",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 21
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 25
    }
  }, "Can't display the PDF inline?"), __jsx("a", {
    href: src,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "pv-fallback-link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 25
    }
  }, "Open PDF ", __jsx("span", {
    "aria-hidden": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 38
    }
  }, "\u2192")))));
};
_s(PDFViewer, "fU0A5mtrrg0dg943QFmiEPcLzYE=");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QREZWaWV3ZXIvUERGVmlld2VyLmpzIl0sIm5hbWVzIjpbIlBERlZpZXdlciIsIl9yZWYiLCJfcyIsInNyYyIsInRpdGxlIiwiX3JlZiRoZWlnaHQiLCJoZWlnaHQiLCJfdXNlU3RhdGUiLCJ1c2VTdGF0ZSIsInpvb20iLCJzZXRab29tIiwiWk9PTV9TVEVQIiwiWk9PTV9NSU4iLCJaT09NX01BWCIsInpvb21JbiIsInVzZUNhbGxiYWNrIiwieiIsIk1hdGgiLCJtaW4iLCJ6b29tT3V0IiwibWF4IiwicmVzZXQiLCJpc01vYmlsZSIsInRlc3QiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJlbWJlZFNyYyIsImNvbmNhdCIsImZpbGVuYW1lIiwic3BsaXQiLCJwb3AiLCJyZXBsYWNlIiwiX19qc3giLCJjbGFzc05hbWUiLCJfX3NlbGYiLCJfdGhpcyIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiYWx0Iiwib25DbGljayIsImRpc2FibGVkIiwid2lkdGgiLCJ2aWV3Qm94IiwiZmlsbCIsIngiLCJ5IiwicngiLCJocmVmIiwiZG93bmxvYWQiLCJ0YXJnZXQiLCJyZWwiLCJkIiwic3Ryb2tlIiwic3Ryb2tlV2lkdGgiLCJzdHJva2VMaW5lY2FwIiwic3Ryb2tlTGluZWpvaW4iLCJwb2ludHMiLCJ4MSIsInkxIiwieDIiLCJ5MiIsInN0eWxlIiwiYm9yZGVyIiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBcUQ7QUFDNUI7QUFFekIsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVNBLENBQUFDLElBQUEsRUFBcUM7RUFBQUMsRUFBQTtFQUFBLElBQS9CQyxHQUFHLEdBQUFGLElBQUEsQ0FBSEUsR0FBRztJQUFFQyxLQUFLLEdBQUFILElBQUEsQ0FBTEcsS0FBSztJQUFBQyxXQUFBLEdB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QUFRO0lBQUNDLEdBQUcsRUFBQyxxQkFBcUI7SUFBQ3BCLFNBQVMsRUFBQyxrQkFBa0I7SUFBQUMsTUFBQSxFQUFBQyxLQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsZ0JBQ3ZFUixLQUFBO0lBQU0sZUFBWSxNQUFNO0lBQUFFLE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLFdBQWEsQ0FDL0MsQ0FDRixDQUNKLENBRVIsQ0FBQztBQUVkLENBQUM7QUFBQ3RDLEVBQUEsQ0FoRklGLFNBQVM7QUFBQWtFLEVBQUEsR0FBVGxFLFNBQVM7QUFrRkFBLHdFQUFTLEVBQUM7QUFBQSxJQUFBa0UsRUFBQTtBQUFBQyxZQUFBLENBQUFELEVBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVzb3VyY2VzL21jbGVnaXNsYXRpb24uMGQ4NDFkYmE1YzI0N2YyZWFjMGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJy4vUERGVmlld2VyLmNzcyc7XG5cbmNvbnN0IFBERlZpZXdlciA9ICh7IHNyYywgdGl0bGUsIGhlaWdodCA9IDgwMCB9KSA9PiB7XG4gICAgY29uc3QgW3pvb20sIHNldFpvb21dID0gdXNlU3RhdGUoMTAwKTtcbiAgICBjb25zdCBaT09NX1NURVAgPSAyNTtcbiAgICBjb25zdCBaT09NX01JTiA9IDUwO1xuICAgIGNvbnN0IFpPT01fTUFYID0gMjAwO1xuXG4gICAgY29uc3Qgem9vbUluICA9IHVzZUNhbGxiYWNrKCgpID0+IHNldFpvb20oeiA9PiBNYXRoLm1pbih6ICsgWk9PTV9TVEVQLCBaT09NX01BWCkpLCBbXSk7XG4gICAgY29uc3Qgem9vbU91dCA9IHVzZUNhbGxiYWNrKCgpID0+IHNldFpvb20oeiA9PiBNYXRoLm1heCh6IC0gWk9PTV9TVEVQLCBaT09NX01JTikpLCBbXSk7XG4gICAgY29uc3QgcmVzZXQgICA9IHVzZUNhbGxiYWNrKCgpID0+IHNldFpvb20oMTAwKSwgW10pO1xuXG4gICAgY29uc3QgaXNNb2JpbGUgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAvaVBob25lfGlQYWR8aVBvZHxBbmRyb2lkL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICBjb25zdCBlbWJlZFNyYyA9IGAke3NyY30jem9vbT0ke3pvb219JnRvb2xiYXI9MCZuYXZwYW5lcz0wJnNjcm9sbGJhcj0xYDtcbiAgICBjb25zdCBmaWxlbmFtZSA9IHRpdGxlIHx8IHNyYy5zcGxpdCgnLycpLnBvcCgpLnJlcGxhY2UoL18vZywgJyAnKS5yZXBsYWNlKC9cXC5wZGYkL2ksICcnKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwdi13cmFwJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwdi10b29sYmFyJz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHYtdG9vbGJhci1sZWZ0Jz5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9Jy9zdGF0aWMvaWNvbnMvZmlsZS5zdmcnIGFsdD0nJyBjbGFzc05hbWU9J3B2LWZpbGUtaWNvbicgYXJpYS1oaWRkZW49J3RydWUnIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ncHYtZmlsZW5hbWUnPntmaWxlbmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3B2LXRvb2xiYXItcmlnaHQnPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHYtem9vbS1jb250cm9scyc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0ncHYtYnRuJyBvbkNsaWNrPXt6b29tT3V0fSBkaXNhYmxlZD17em9vbSA8PSBaT09NX01JTn0gYXJpYS1sYWJlbD0nWm9vbSBvdXQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9JzE0JyBoZWlnaHQ9JzE0JyB2aWV3Qm94PScwIDAgMTQgMTQnIGZpbGw9J25vbmUnIGFyaWEtaGlkZGVuPSd0cnVlJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD0nMicgeT0nNi41JyB3aWR0aD0nMTAnIGhlaWdodD0nMS41JyByeD0nMC43NScgZmlsbD0nY3VycmVudENvbG9yJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0ncHYtem9vbS1sYWJlbCcgb25DbGljaz17cmVzZXR9IHRpdGxlPSdSZXNldCB6b29tJz57em9vbX0lPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0ncHYtYnRuJyBvbkNsaWNrPXt6b29tSW59IGRpc2FibGVkPXt6b29tID49IFpPT01fTUFYfSBhcmlhLWxhYmVsPSdab29tIGluJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPScxNCcgaGVpZ2h0PScxNCcgdmlld0JveD0nMCAwIDE0IDE0JyBmaWxsPSdub25lJyBhcmlhLWhpZGRlbj0ndHJ1ZSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9JzYuMjUnIHk9JzInIHdpZHRoPScxLjUnIGhlaWdodD0nMTAnIHJ4PScwLjc1JyBmaWxsPSdjdXJyZW50Q29sb3InIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9JzInIHk9JzYuMjUnIHdpZHRoPScxMCcgaGVpZ2h0PScxLjUnIHJ4PScwLjc1JyBmaWxsPSdjdXJyZW50Q29sb3InIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwdi10b29sYmFyLWRpdmlkZXInIGFyaWEtaGlkZGVuPSd0cnVlJyAvPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J3B2LWJ0biBwdi1kb3dubG9hZCcgaHJlZj17c3JjfSBkb3dubG9hZCB0YXJnZXQ9J19ibGFuaycgcmVsPSdub29wZW5lciBub3JlZmVycmVyJyBhcmlhLWxhYmVsPSdEb3dubG9hZCBQREYnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD0nMTQnIGhlaWdodD0nMTQnIHZpZXdCb3g9JzAgMCAxNCAxNCcgZmlsbD0nbm9uZScgYXJpYS1oaWRkZW49J3RydWUnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9J003IDF2Ny41TTcgOC41bC0yLjUtMi41TTcgOC41bDIuNS0yLjUnIHN0cm9rZT0nY3VycmVudENvbG9yJyBzdHJva2VXaWR0aD0nMS41JyBzdHJva2VMaW5lY2FwPSdyb3VuZCcgc3Ryb2tlTGluZWpvaW49J3JvdW5kJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9J00yIDExaDEwJyBzdHJva2U9J2N1cnJlbnRDb2xvcicgc3Ryb2tlV2lkdGg9JzEuNScgc3Ryb2tlTGluZWNhcD0ncm91bmQnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkRvd25sb2FkPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAge2lzTW9iaWxlID8gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwdi1tb2JpbGUnPlxuICAgICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPSc0OCcgaGVpZ2h0PSc0OCcgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBhcmlhLWhpZGRlbj0ndHJ1ZSc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSdNMTQgMkg2YTIgMiAwIDAgMC0yIDJ2MTZhMiAyIDAgMCAwIDIgMmgxMmEyIDIgMCAwIDAgMi0yVjh6JyBzdHJva2U9J2N1cnJlbnRDb2xvcicgc3Ryb2tlV2lkdGg9JzEuNScgc3Ryb2tlTGluZWNhcD0ncm91bmQnIHN0cm9rZUxpbmVqb2luPSdyb3VuZCcgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwb2x5bGluZSBwb2ludHM9JzE0IDIgMTQgOCAyMCA4JyBzdHJva2U9J2N1cnJlbnRDb2xvcicgc3Ryb2tlV2lkdGg9JzEuNScgc3Ryb2tlTGluZWNhcD0ncm91bmQnIHN0cm9rZUxpbmVqb2luPSdyb3VuZCcgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaW5lIHgxPScxNicgeTE9JzEzJyB4Mj0nOCcgeTI9JzEzJyBzdHJva2U9J2N1cnJlbnRDb2xvcicgc3Ryb2tlV2lkdGg9JzEuNScgc3Ryb2tlTGluZWNhcD0ncm91bmQnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGluZSB4MT0nMTYnIHkxPScxNycgeDI9JzgnIHkyPScxNycgc3Ryb2tlPSdjdXJyZW50Q29sb3InIHN0cm9rZVdpZHRoPScxLjUnIHN0cm9rZUxpbmVjYXA9J3JvdW5kJyAvPlxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdwdi1tb2JpbGUtbmFtZSc+e2ZpbGVuYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17c3JjfSB0YXJnZXQ9J19ibGFuaycgcmVsPSdub29wZW5lciBub3JlZmVycmVyJyBjbGFzc05hbWU9J3B2LWZhbGxiYWNrLWxpbmsnPlxuICAgICAgICAgICAgICAgICAgICAgICAgT3BlbiBQREYgPHNwYW4gYXJpYS1oaWRkZW49J3RydWUnPiZyYXJyOzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHYtYm9keScgc3R5bGU9e3sgJy0tcHYtaGVpZ2h0JzogYCR7aGVpZ2h0fXB4YCB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGlmcmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtlbWJlZFNyY31cbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtmaWxlbmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPScxMDAlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PScxMDAlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdwdi1lbWJlZCdcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlcjogJ25vbmUnIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwdi1mYWxsYmFjayc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5DYW4mYXBvczt0IGRpc3BsYXkgdGhlIFBERiBpbmxpbmU/PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17c3JjfSB0YXJnZXQ9J19ibGFuaycgcmVsPSdub29wZW5lciBub3JlZmVycmVyJyBjbGFzc05hbWU9J3B2LWZhbGxiYWNrLWxpbmsnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9wZW4gUERGIDxzcGFuIGFyaWEtaGlkZGVuPSd0cnVlJz4mcmFycjs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBERlZpZXdlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=