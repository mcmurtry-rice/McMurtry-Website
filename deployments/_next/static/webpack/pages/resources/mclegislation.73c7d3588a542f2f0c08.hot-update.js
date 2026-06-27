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
  var embedSrc = "".concat(src, "#zoom=").concat(zoom, "&toolbar=0&navpanes=0&scrollbar=1");
  var filename = title || src.split('/').pop().replace(/_/g, ' ').replace(/\.pdf$/i, '');
  return __jsx("div", {
    className: "pv-wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "pv-toolbar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "pv-toolbar-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
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
      lineNumber: 21,
      columnNumber: 21
    }
  }), __jsx("span", {
    className: "pv-filename",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 21
    }
  }, filename)), __jsx("div", {
    className: "pv-toolbar-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "pv-zoom-controls",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
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
      lineNumber: 26,
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
      lineNumber: 27,
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
      lineNumber: 28,
      columnNumber: 33
    }
  }))), __jsx("button", {
    className: "pv-zoom-label",
    onClick: reset,
    title: "Reset zoom",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
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
      lineNumber: 32,
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
      lineNumber: 33,
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
      lineNumber: 34,
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
      lineNumber: 35,
      columnNumber: 33
    }
  })))), __jsx("div", {
    className: "pv-toolbar-divider",
    "aria-hidden": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
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
      lineNumber: 40,
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
      lineNumber: 41,
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
      lineNumber: 42,
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
      lineNumber: 43,
      columnNumber: 29
    }
  })), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 25
    }
  }, "Download")))), __jsx("div", {
    className: "pv-body",
    style: {
      '--pv-height': "".concat(height, "px")
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
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
      lineNumber: 51,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "pv-fallback",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 21
    }
  }, "Can't display the PDF inline?"), __jsx("a", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QREZWaWV3ZXIvUERGVmlld2VyLmpzIl0sIm5hbWVzIjpbIlBERlZpZXdlciIsIl9yZWYiLCJfcyIsInNyYyIsInRpdGxlIiwiX3JlZiRoZWlnaHQiLCJoZWlnaHQiLCJfdXNlU3RhdGUiLCJ1c2VTdGF0ZSIsInpvb20iLCJzZXRab29tIiwiWk9PTV9TVEVQIiwiWk9PTV9NSU4iLCJaT09NX01BWCIsInpvb21JbiIsInVzZUNhbGxiYWNrIiwieiIsIk1hdGgiLCJtaW4iLCJ6b29tT3V0IiwibWF4IiwicmVzZXQiLCJlbWJlZFNyYyIsImNvbmNhdCIsImZpbGVuYW1lIiwic3BsaXQiLCJwb3AiLCJyZXBsYWNlIiwiX19qc3giLCJjbGFzc05hbWUiLCJfX3NlbGYiLCJfdGhpcyIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiYWx0Iiwib25DbGljayIsImRpc2FibGVkIiwid2lkdGgiLCJ2aWV3Qm94IiwiZmlsbCIsIngiLCJ5IiwicngiLCJocmVmIiwiZG93bmxvYWQiLCJ0YXJnZXQiLCJyZWwiLCJkIiwic3Ryb2tlIiwic3Ryb2tlV2lkdGgiLCJzdHJva2VMaW5lY2FwIiwic3Ryb2tlTGluZWpvaW4iLCJzdHlsZSIsInR5cGUiLCJfYyIsIiRSZWZyZXNoUmVnJCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFxRDtBQUM1QjtBQUV6QixJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBU0EsQ0FBQUMsSUFBQSxFQUFxQztFQUFBQyxFQUFBO0VBQUEsSUFBL0JDLEdBQUcsR0FBQUYsSUFBQSxDQUFIRSxHQUFHO0lBQUVDLEtBQUssR0FBQUgsSUFBQSxDQUFMRyxLQUFLO0lBQUFDLFdBQUEsR0FBQUosSUFBQSxDQUFFSyxNQUFNO0lBQU5BLE1BQU0sR0FBQUQsV0FBQSxjQUFHLEdBQUcsR0FBQUEsV0FBQTtFQUN6QyxJQUFB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QUFBO0lBQU0sZUFBWSxNQUFNO0lBQUFFLE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLFdBQWEsQ0FDL0MsQ0FDRixDQUNKLENBQ0osQ0FBQztBQUVkLENBQUM7QUFBQ2xDLEVBQUEsQ0EvRElGLFNBQVM7QUFBQXlELEVBQUEsR0FBVHpELFNBQVM7QUFpRUFBLHdFQUFTLEVBQUM7QUFBQSxJQUFBeUQsRUFBQTtBQUFBQyxZQUFBLENBQUFELEVBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVzb3VyY2VzL21jbGVnaXNsYXRpb24uNzNjN2QzNTg4YTU0MmYyZjBjMDguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJy4vUERGVmlld2VyLmNzcyc7XG5cbmNvbnN0IFBERlZpZXdlciA9ICh7IHNyYywgdGl0bGUsIGhlaWdodCA9IDgwMCB9KSA9PiB7XG4gICAgY29uc3QgW3pvb20sIHNldFpvb21dID0gdXNlU3RhdGUoMTAwKTtcbiAgICBjb25zdCBaT09NX1NURVAgPSAyNTtcbiAgICBjb25zdCBaT09NX01JTiA9IDUwO1xuICAgIGNvbnN0IFpPT01fTUFYID0gMjAwO1xuXG4gICAgY29uc3Qgem9vbUluICA9IHVzZUNhbGxiYWNrKCgpID0+IHNldFpvb20oeiA9PiBNYXRoLm1pbih6ICsgWk9PTV9TVEVQLCBaT09NX01BWCkpLCBbXSk7XG4gICAgY29uc3Qgem9vbU91dCA9IHVzZUNhbGxiYWNrKCgpID0+IHNldFpvb20oeiA9PiBNYXRoLm1heCh6IC0gWk9PTV9TVEVQLCBaT09NX01JTikpLCBbXSk7XG4gICAgY29uc3QgcmVzZXQgICA9IHVzZUNhbGxiYWNrKCgpID0+IHNldFpvb20oMTAwKSwgW10pO1xuXG4gICAgY29uc3QgZW1iZWRTcmMgPSBgJHtzcmN9I3pvb209JHt6b29tfSZ0b29sYmFyPTAmbmF2cGFuZXM9MCZzY3JvbGxiYXI9MWA7XG4gICAgY29uc3QgZmlsZW5hbWUgPSB0aXRsZSB8fCBzcmMuc3BsaXQoJy8nKS5wb3AoKS5yZXBsYWNlKC9fL2csICcgJykucmVwbGFjZSgvXFwucGRmJC9pLCAnJyk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHYtd3JhcCc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHYtdG9vbGJhcic+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3B2LXRvb2xiYXItbGVmdCc+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPScvc3RhdGljL2ljb25zL2ZpbGUuc3ZnJyBhbHQ9JycgY2xhc3NOYW1lPSdwdi1maWxlLWljb24nIGFyaWEtaGlkZGVuPSd0cnVlJyAvPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3B2LWZpbGVuYW1lJz57ZmlsZW5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwdi10b29sYmFyLXJpZ2h0Jz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3B2LXpvb20tY29udHJvbHMnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J3B2LWJ0bicgb25DbGljaz17em9vbU91dH0gZGlzYWJsZWQ9e3pvb20gPD0gWk9PTV9NSU59IGFyaWEtbGFiZWw9J1pvb20gb3V0Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPScxNCcgaGVpZ2h0PScxNCcgdmlld0JveD0nMCAwIDE0IDE0JyBmaWxsPSdub25lJyBhcmlhLWhpZGRlbj0ndHJ1ZSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9JzInIHk9JzYuNScgd2lkdGg9JzEwJyBoZWlnaHQ9JzEuNScgcng9JzAuNzUnIGZpbGw9J2N1cnJlbnRDb2xvcicgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J3B2LXpvb20tbGFiZWwnIG9uQ2xpY2s9e3Jlc2V0fSB0aXRsZT0nUmVzZXQgem9vbSc+e3pvb219JTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J3B2LWJ0bicgb25DbGljaz17em9vbUlufSBkaXNhYmxlZD17em9vbSA+PSBaT09NX01BWH0gYXJpYS1sYWJlbD0nWm9vbSBpbic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD0nMTQnIGhlaWdodD0nMTQnIHZpZXdCb3g9JzAgMCAxNCAxNCcgZmlsbD0nbm9uZScgYXJpYS1oaWRkZW49J3RydWUnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PSc2LjI1JyB5PScyJyB3aWR0aD0nMS41JyBoZWlnaHQ9JzEwJyByeD0nMC43NScgZmlsbD0nY3VycmVudENvbG9yJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PScyJyB5PSc2LjI1JyB3aWR0aD0nMTAnIGhlaWdodD0nMS41JyByeD0nMC43NScgZmlsbD0nY3VycmVudENvbG9yJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHYtdG9vbGJhci1kaXZpZGVyJyBhcmlhLWhpZGRlbj0ndHJ1ZScgLz5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdwdi1idG4gcHYtZG93bmxvYWQnIGhyZWY9e3NyY30gZG93bmxvYWQgdGFyZ2V0PSdfYmxhbmsnIHJlbD0nbm9vcGVuZXIgbm9yZWZlcnJlcicgYXJpYS1sYWJlbD0nRG93bmxvYWQgUERGJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9JzE0JyBoZWlnaHQ9JzE0JyB2aWV3Qm94PScwIDAgMTQgMTQnIGZpbGw9J25vbmUnIGFyaWEtaGlkZGVuPSd0cnVlJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSdNNyAxdjcuNU03IDguNWwtMi41LTIuNU03IDguNWwyLjUtMi41JyBzdHJva2U9J2N1cnJlbnRDb2xvcicgc3Ryb2tlV2lkdGg9JzEuNScgc3Ryb2tlTGluZWNhcD0ncm91bmQnIHN0cm9rZUxpbmVqb2luPSdyb3VuZCcgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSdNMiAxMWgxMCcgc3Ryb2tlPSdjdXJyZW50Q29sb3InIHN0cm9rZVdpZHRoPScxLjUnIHN0cm9rZUxpbmVjYXA9J3JvdW5kJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Eb3dubG9hZDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwdi1ib2R5JyBzdHlsZT17eyAnLS1wdi1oZWlnaHQnOiBgJHtoZWlnaHR9cHhgIH19PlxuICAgICAgICAgICAgICAgIDxlbWJlZFxuICAgICAgICAgICAgICAgICAgICBzcmM9e2VtYmVkU3JjfVxuICAgICAgICAgICAgICAgICAgICB0eXBlPSdhcHBsaWNhdGlvbi9wZGYnXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPScxMDAlJ1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9JzEwMCUnXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ncHYtZW1iZWQnXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHYtZmFsbGJhY2snPlxuICAgICAgICAgICAgICAgICAgICA8cD5DYW4mYXBvczt0IGRpc3BsYXkgdGhlIFBERiBpbmxpbmU/PC9wPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtzcmN9IHRhcmdldD0nX2JsYW5rJyByZWw9J25vb3BlbmVyIG5vcmVmZXJyZXInIGNsYXNzTmFtZT0ncHYtZmFsbGJhY2stbGluayc+XG4gICAgICAgICAgICAgICAgICAgICAgICBPcGVuIFBERiA8c3BhbiBhcmlhLWhpZGRlbj0ndHJ1ZSc+JnJhcnI7PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBERlZpZXdlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=