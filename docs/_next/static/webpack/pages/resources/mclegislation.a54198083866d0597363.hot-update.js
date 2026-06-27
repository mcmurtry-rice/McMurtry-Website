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
  var embedSrc =  true && /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ? "".concat(src, "#toolbar=0&navpanes=0") : "".concat(src, "#zoom=").concat(zoom, "&toolbar=0&navpanes=0&scrollbar=1");
  var filename = title || src.split('/').pop().replace(/_/g, ' ').replace(/\.pdf$/i, '');
  return __jsx("div", {
    className: "pv-wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "pv-toolbar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "pv-toolbar-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
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
      lineNumber: 23,
      columnNumber: 21
    }
  }), __jsx("span", {
    className: "pv-filename",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 21
    }
  }, filename)), __jsx("div", {
    className: "pv-toolbar-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "pv-zoom-controls",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
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
      lineNumber: 28,
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
      lineNumber: 29,
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
      lineNumber: 30,
      columnNumber: 33
    }
  }))), __jsx("button", {
    className: "pv-zoom-label",
    onClick: reset,
    title: "Reset zoom",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
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
      lineNumber: 34,
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
      lineNumber: 35,
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
      lineNumber: 36,
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
      lineNumber: 37,
      columnNumber: 33
    }
  })))), __jsx("div", {
    className: "pv-toolbar-divider",
    "aria-hidden": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
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
      lineNumber: 42,
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
      lineNumber: 43,
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
      lineNumber: 44,
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
      lineNumber: 45,
      columnNumber: 29
    }
  })), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
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
      lineNumber: 52,
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
      lineNumber: 53,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "pv-fallback",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
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
      lineNumber: 62,
      columnNumber: 21
    }
  }, "Open PDF ", __jsx("span", {
    "aria-hidden": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QREZWaWV3ZXIvUERGVmlld2VyLmpzIl0sIm5hbWVzIjpbIlBERlZpZXdlciIsIl9yZWYiLCJfcyIsInNyYyIsInRpdGxlIiwiX3JlZiRoZWlnaHQiLCJoZWlnaHQiLCJfdXNlU3RhdGUiLCJ1c2VTdGF0ZSIsInpvb20iLCJzZXRab29tIiwiWk9PTV9TVEVQIiwiWk9PTV9NSU4iLCJaT09NX01BWCIsInpvb21JbiIsInVzZUNhbGxiYWNrIiwieiIsIk1hdGgiLCJtaW4iLCJ6b29tT3V0IiwibWF4IiwicmVzZXQiLCJlbWJlZFNyYyIsInRlc3QiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJjb25jYXQiLCJmaWxlbmFtZSIsInNwbGl0IiwicG9wIiwicmVwbGFjZSIsIl9fanN4IiwiY2xhc3NOYW1lIiwiX19zZWxmIiwiX3RoaXMiLCJfX3NvdXJjZSIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsImFsdCIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsIndpZHRoIiwidmlld0JveCIsImZpbGwiLCJ4IiwieSIsInJ4IiwiaHJlZiIsImRvd25sb2FkIiwidGFyZ2V0IiwicmVsIiwiZCIsInN0cm9rZSIsInN0cm9rZVdpZHRoIiwic3Ryb2tlTGluZWNhcCIsInN0cm9rZUxpbmVqb2luIiwic3R5bGUiLCJ0eXBlIiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBcUQ7QUFDNUI7QUFFekIsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVNBLENBQUFDLElBQUEsRUFBcUM7RUFBQUMsRUFBQTtFQUFBLElBQS9CQyxHQUFHLEdBQUFGLElBQUEsQ0FBSEUsR0FBRztJQUFFQyxLQUFLLEdBQUFILElBQUEsQ0FBTEcsS0FBSztJQUFBQyxXQUFBLEdBQUFKLElBQUEsQ0FBRUssTUFBTTtJQUFOQSxNQUFNLEdBQUFELFdBQUEs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QixTQUFTLEVBQUMsa0JBQWtCO0lBQUFDLE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLGdCQUN2RVIsS0FBQTtJQUFNLGVBQVksTUFBTTtJQUFBRSxNQUFBLEVBQUFDLEtBQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxXQUFhLENBQy9DLENBQ0YsQ0FDSixDQUNKLENBQUM7QUFFZCxDQUFDO0FBQUNyQyxFQUFBLENBakVJRixTQUFTO0FBQUE0RCxFQUFBLEdBQVQ1RCxTQUFTO0FBbUVBQSx3RUFBUyxFQUFDO0FBQUEsSUFBQTRELEVBQUE7QUFBQUMsWUFBQSxDQUFBRCxFQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Jlc291cmNlcy9tY2xlZ2lzbGF0aW9uLmE1NDE5ODA4Mzg2NmQwNTk3MzYzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICcuL1BERlZpZXdlci5jc3MnO1xuXG5jb25zdCBQREZWaWV3ZXIgPSAoeyBzcmMsIHRpdGxlLCBoZWlnaHQgPSA4MDAgfSkgPT4ge1xuICAgIGNvbnN0IFt6b29tLCBzZXRab29tXSA9IHVzZVN0YXRlKDEwMCk7XG4gICAgY29uc3QgWk9PTV9TVEVQID0gMjU7XG4gICAgY29uc3QgWk9PTV9NSU4gPSA1MDtcbiAgICBjb25zdCBaT09NX01BWCA9IDIwMDtcblxuICAgIGNvbnN0IHpvb21JbiAgPSB1c2VDYWxsYmFjaygoKSA9PiBzZXRab29tKHogPT4gTWF0aC5taW4oeiArIFpPT01fU1RFUCwgWk9PTV9NQVgpKSwgW10pO1xuICAgIGNvbnN0IHpvb21PdXQgPSB1c2VDYWxsYmFjaygoKSA9PiBzZXRab29tKHogPT4gTWF0aC5tYXgoeiAtIFpPT01fU1RFUCwgWk9PTV9NSU4pKSwgW10pO1xuICAgIGNvbnN0IHJlc2V0ICAgPSB1c2VDYWxsYmFjaygoKSA9PiBzZXRab29tKDEwMCksIFtdKTtcblxuICAgIGNvbnN0IGVtYmVkU3JjID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgL2lQaG9uZXxpUGFkfGlQb2R8QW5kcm9pZC9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudClcbiAgICAgICAgPyBgJHtzcmN9I3Rvb2xiYXI9MCZuYXZwYW5lcz0wYFxuICAgICAgICA6IGAke3NyY30jem9vbT0ke3pvb219JnRvb2xiYXI9MCZuYXZwYW5lcz0wJnNjcm9sbGJhcj0xYDtcbiAgICBjb25zdCBmaWxlbmFtZSA9IHRpdGxlIHx8IHNyYy5zcGxpdCgnLycpLnBvcCgpLnJlcGxhY2UoL18vZywgJyAnKS5yZXBsYWNlKC9cXC5wZGYkL2ksICcnKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwdi13cmFwJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwdi10b29sYmFyJz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHYtdG9vbGJhci1sZWZ0Jz5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9Jy9zdGF0aWMvaWNvbnMvZmlsZS5zdmcnIGFsdD0nJyBjbGFzc05hbWU9J3B2LWZpbGUtaWNvbicgYXJpYS1oaWRkZW49J3RydWUnIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ncHYtZmlsZW5hbWUnPntmaWxlbmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3B2LXRvb2xiYXItcmlnaHQnPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHYtem9vbS1jb250cm9scyc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0ncHYtYnRuJyBvbkNsaWNrPXt6b29tT3V0fSBkaXNhYmxlZD17em9vbSA8PSBaT09NX01JTn0gYXJpYS1sYWJlbD0nWm9vbSBvdXQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9JzE0JyBoZWlnaHQ9JzE0JyB2aWV3Qm94PScwIDAgMTQgMTQnIGZpbGw9J25vbmUnIGFyaWEtaGlkZGVuPSd0cnVlJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD0nMicgeT0nNi41JyB3aWR0aD0nMTAnIGhlaWdodD0nMS41JyByeD0nMC43NScgZmlsbD0nY3VycmVudENvbG9yJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0ncHYtem9vbS1sYWJlbCcgb25DbGljaz17cmVzZXR9IHRpdGxlPSdSZXNldCB6b29tJz57em9vbX0lPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0ncHYtYnRuJyBvbkNsaWNrPXt6b29tSW59IGRpc2FibGVkPXt6b29tID49IFpPT01fTUFYfSBhcmlhLWxhYmVsPSdab29tIGluJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPScxNCcgaGVpZ2h0PScxNCcgdmlld0JveD0nMCAwIDE0IDE0JyBmaWxsPSdub25lJyBhcmlhLWhpZGRlbj0ndHJ1ZSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9JzYuMjUnIHk9JzInIHdpZHRoPScxLjUnIGhlaWdodD0nMTAnIHJ4PScwLjc1JyBmaWxsPSdjdXJyZW50Q29sb3InIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9JzInIHk9JzYuMjUnIHdpZHRoPScxMCcgaGVpZ2h0PScxLjUnIHJ4PScwLjc1JyBmaWxsPSdjdXJyZW50Q29sb3InIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwdi10b29sYmFyLWRpdmlkZXInIGFyaWEtaGlkZGVuPSd0cnVlJyAvPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J3B2LWJ0biBwdi1kb3dubG9hZCcgaHJlZj17c3JjfSBkb3dubG9hZCB0YXJnZXQ9J19ibGFuaycgcmVsPSdub29wZW5lciBub3JlZmVycmVyJyBhcmlhLWxhYmVsPSdEb3dubG9hZCBQREYnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD0nMTQnIGhlaWdodD0nMTQnIHZpZXdCb3g9JzAgMCAxNCAxNCcgZmlsbD0nbm9uZScgYXJpYS1oaWRkZW49J3RydWUnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9J003IDF2Ny41TTcgOC41bC0yLjUtMi41TTcgOC41bDIuNS0yLjUnIHN0cm9rZT0nY3VycmVudENvbG9yJyBzdHJva2VXaWR0aD0nMS41JyBzdHJva2VMaW5lY2FwPSdyb3VuZCcgc3Ryb2tlTGluZWpvaW49J3JvdW5kJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9J00yIDExaDEwJyBzdHJva2U9J2N1cnJlbnRDb2xvcicgc3Ryb2tlV2lkdGg9JzEuNScgc3Ryb2tlTGluZWNhcD0ncm91bmQnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkRvd25sb2FkPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3B2LWJvZHknIHN0eWxlPXt7ICctLXB2LWhlaWdodCc6IGAke2hlaWdodH1weGAgfX0+XG4gICAgICAgICAgICAgICAgPGVtYmVkXG4gICAgICAgICAgICAgICAgICAgIHNyYz17ZW1iZWRTcmN9XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9J2FwcGxpY2F0aW9uL3BkZidcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9JzEwMCUnXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD0nMTAwJSdcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdwdi1lbWJlZCdcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwdi1mYWxsYmFjayc+XG4gICAgICAgICAgICAgICAgICAgIDxwPkNhbiZhcG9zO3QgZGlzcGxheSB0aGUgUERGIGlubGluZT88L3A+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3NyY30gdGFyZ2V0PSdfYmxhbmsnIHJlbD0nbm9vcGVuZXIgbm9yZWZlcnJlcicgY2xhc3NOYW1lPSdwdi1mYWxsYmFjay1saW5rJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIE9wZW4gUERGIDxzcGFuIGFyaWEtaGlkZGVuPSd0cnVlJz4mcmFycjs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUERGVmlld2VyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==