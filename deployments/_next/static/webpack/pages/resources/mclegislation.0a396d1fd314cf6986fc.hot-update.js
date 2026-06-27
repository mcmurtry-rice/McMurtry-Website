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
  }, "Download")))), __jsx("div", {
    className: "pv-body",
    style: {
      '--pv-height': "".concat(height, "px")
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
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
      lineNumber: 52,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QREZWaWV3ZXIvUERGVmlld2VyLmpzIl0sIm5hbWVzIjpbIlBERlZpZXdlciIsIl9yZWYiLCJfcyIsInNyYyIsInRpdGxlIiwiX3JlZiRoZWlnaHQiLCJoZWlnaHQiLCJfdXNlU3RhdGUiLCJ1c2VTdGF0ZSIsInpvb20iLCJzZXRab29tIiwiWk9PTV9TVEVQIiwiWk9PTV9NSU4iLCJaT09NX01BWCIsInpvb21JbiIsInVzZUNhbGxiYWNrIiwieiIsIk1hdGgiLCJtaW4iLCJ6b29tT3V0IiwibWF4IiwicmVzZXQiLCJpc01vYmlsZSIsInRlc3QiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJlbWJlZFNyYyIsImNvbmNhdCIsImZpbGVuYW1lIiwic3BsaXQiLCJwb3AiLCJyZXBsYWNlIiwiX19qc3giLCJjbGFzc05hbWUiLCJfX3NlbGYiLCJfdGhpcyIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiYWx0Iiwib25DbGljayIsImRpc2FibGVkIiwid2lkdGgiLCJ2aWV3Qm94IiwiZmlsbCIsIngiLCJ5IiwicngiLCJocmVmIiwiZG93bmxvYWQiLCJ0YXJnZXQiLCJyZWwiLCJkIiwic3Ryb2tlIiwic3Ryb2tlV2lkdGgiLCJzdHJva2VMaW5lY2FwIiwic3Ryb2tlTGluZWpvaW4iLCJzdHlsZSIsImJvcmRlciIsIl9jIiwiJFJlZnJlc2hSZWckIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXFEO0FBQzVCO0FBRXpCLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFTQSxDQUFBQyxJQUFBLEVBQXFDO0VBQUFDLEVBQUE7RUFBQSxJQUEvQkMsR0FBRyxHQUFBRixJQUFBLENBQUhFLEdBQUc7SUFBRUMsS0FBSyxHQUFBSCxJQUFBLENBQUxHLEtBQUs7SUFBQUMsV0FBQSxHQUFBSixJQUFBLENBQUVLLE1BQU07SUFBTkEsTUFB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QUFDaUQsTUFBTSxFQUFDLFFBQVE7SUFBQ0MsR0FBRyxFQUFDLHFCQUFxQjtJQUFDcEIsU0FBUyxFQUFDLGtCQUFrQjtJQUFBQyxNQUFBLEVBQUFDLEtBQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxnQkFDdkVSLEtBQUE7SUFBTSxlQUFZLE1BQU07SUFBQUUsTUFBQSxFQUFBQyxLQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsV0FBYSxDQUMvQyxDQUNGLENBQ0osQ0FDSixDQUFDO0FBRWQsQ0FBQztBQUFDdEMsRUFBQSxDQWpFSUYsU0FBUztBQUFBNkQsRUFBQSxHQUFUN0QsU0FBUztBQW1FQUEsd0VBQVMsRUFBQztBQUFBLElBQUE2RCxFQUFBO0FBQUFDLFlBQUEsQ0FBQUQsRUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZXNvdXJjZXMvbWNsZWdpc2xhdGlvbi4wYTM5NmQxZmQzMTRjZjY5ODZmYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi9QREZWaWV3ZXIuY3NzJztcblxuY29uc3QgUERGVmlld2VyID0gKHsgc3JjLCB0aXRsZSwgaGVpZ2h0ID0gODAwIH0pID0+IHtcbiAgICBjb25zdCBbem9vbSwgc2V0Wm9vbV0gPSB1c2VTdGF0ZSgxMDApO1xuICAgIGNvbnN0IFpPT01fU1RFUCA9IDI1O1xuICAgIGNvbnN0IFpPT01fTUlOID0gNTA7XG4gICAgY29uc3QgWk9PTV9NQVggPSAyMDA7XG5cbiAgICBjb25zdCB6b29tSW4gID0gdXNlQ2FsbGJhY2soKCkgPT4gc2V0Wm9vbSh6ID0+IE1hdGgubWluKHogKyBaT09NX1NURVAsIFpPT01fTUFYKSksIFtdKTtcbiAgICBjb25zdCB6b29tT3V0ID0gdXNlQ2FsbGJhY2soKCkgPT4gc2V0Wm9vbSh6ID0+IE1hdGgubWF4KHogLSBaT09NX1NURVAsIFpPT01fTUlOKSksIFtdKTtcbiAgICBjb25zdCByZXNldCAgID0gdXNlQ2FsbGJhY2soKCkgPT4gc2V0Wm9vbSgxMDApLCBbXSk7XG5cbiAgICBjb25zdCBpc01vYmlsZSA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIC9pUGhvbmV8aVBhZHxpUG9kfEFuZHJvaWQvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICAgIGNvbnN0IGVtYmVkU3JjID0gYCR7c3JjfSN6b29tPSR7em9vbX0mdG9vbGJhcj0wJm5hdnBhbmVzPTAmc2Nyb2xsYmFyPTFgO1xuICAgIGNvbnN0IGZpbGVuYW1lID0gdGl0bGUgfHwgc3JjLnNwbGl0KCcvJykucG9wKCkucmVwbGFjZSgvXy9nLCAnICcpLnJlcGxhY2UoL1xcLnBkZiQvaSwgJycpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3B2LXdyYXAnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3B2LXRvb2xiYXInPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwdi10b29sYmFyLWxlZnQnPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz0nL3N0YXRpYy9pY29ucy9maWxlLnN2ZycgYWx0PScnIGNsYXNzTmFtZT0ncHYtZmlsZS1pY29uJyBhcmlhLWhpZGRlbj0ndHJ1ZScgLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdwdi1maWxlbmFtZSc+e2ZpbGVuYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHYtdG9vbGJhci1yaWdodCc+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwdi16b29tLWNvbnRyb2xzJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdwdi1idG4nIG9uQ2xpY2s9e3pvb21PdXR9IGRpc2FibGVkPXt6b29tIDw9IFpPT01fTUlOfSBhcmlhLWxhYmVsPSdab29tIG91dCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD0nMTQnIGhlaWdodD0nMTQnIHZpZXdCb3g9JzAgMCAxNCAxNCcgZmlsbD0nbm9uZScgYXJpYS1oaWRkZW49J3RydWUnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PScyJyB5PSc2LjUnIHdpZHRoPScxMCcgaGVpZ2h0PScxLjUnIHJ4PScwLjc1JyBmaWxsPSdjdXJyZW50Q29sb3InIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdwdi16b29tLWxhYmVsJyBvbkNsaWNrPXtyZXNldH0gdGl0bGU9J1Jlc2V0IHpvb20nPnt6b29tfSU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdwdi1idG4nIG9uQ2xpY2s9e3pvb21Jbn0gZGlzYWJsZWQ9e3pvb20gPj0gWk9PTV9NQVh9IGFyaWEtbGFiZWw9J1pvb20gaW4nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9JzE0JyBoZWlnaHQ9JzE0JyB2aWV3Qm94PScwIDAgMTQgMTQnIGZpbGw9J25vbmUnIGFyaWEtaGlkZGVuPSd0cnVlJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD0nNi4yNScgeT0nMicgd2lkdGg9JzEuNScgaGVpZ2h0PScxMCcgcng9JzAuNzUnIGZpbGw9J2N1cnJlbnRDb2xvcicgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD0nMicgeT0nNi4yNScgd2lkdGg9JzEwJyBoZWlnaHQ9JzEuNScgcng9JzAuNzUnIGZpbGw9J2N1cnJlbnRDb2xvcicgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3B2LXRvb2xiYXItZGl2aWRlcicgYXJpYS1oaWRkZW49J3RydWUnIC8+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0ncHYtYnRuIHB2LWRvd25sb2FkJyBocmVmPXtzcmN9IGRvd25sb2FkIHRhcmdldD0nX2JsYW5rJyByZWw9J25vb3BlbmVyIG5vcmVmZXJyZXInIGFyaWEtbGFiZWw9J0Rvd25sb2FkIFBERic+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPScxNCcgaGVpZ2h0PScxNCcgdmlld0JveD0nMCAwIDE0IDE0JyBmaWxsPSdub25lJyBhcmlhLWhpZGRlbj0ndHJ1ZSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0nTTcgMXY3LjVNNyA4LjVsLTIuNS0yLjVNNyA4LjVsMi41LTIuNScgc3Ryb2tlPSdjdXJyZW50Q29sb3InIHN0cm9rZVdpZHRoPScxLjUnIHN0cm9rZUxpbmVjYXA9J3JvdW5kJyBzdHJva2VMaW5lam9pbj0ncm91bmQnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0nTTIgMTFoMTAnIHN0cm9rZT0nY3VycmVudENvbG9yJyBzdHJva2VXaWR0aD0nMS41JyBzdHJva2VMaW5lY2FwPSdyb3VuZCcgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+RG93bmxvYWQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHYtYm9keScgc3R5bGU9e3sgJy0tcHYtaGVpZ2h0JzogYCR7aGVpZ2h0fXB4YCB9fT5cbiAgICAgICAgICAgICAgICA8aWZyYW1lXG4gICAgICAgICAgICAgICAgICAgIHNyYz17ZW1iZWRTcmN9XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtmaWxlbmFtZX1cbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9JzEwMCUnXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD0nMTAwJSdcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdwdi1lbWJlZCdcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyOiAnbm9uZScgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwdi1mYWxsYmFjayc+XG4gICAgICAgICAgICAgICAgICAgIDxwPkNhbiZhcG9zO3QgZGlzcGxheSB0aGUgUERGIGlubGluZT88L3A+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3NyY30gdGFyZ2V0PSdfYmxhbmsnIHJlbD0nbm9vcGVuZXIgbm9yZWZlcnJlcicgY2xhc3NOYW1lPSdwdi1mYWxsYmFjay1saW5rJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIE9wZW4gUERGIDxzcGFuIGFyaWEtaGlkZGVuPSd0cnVlJz4mcmFycjs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUERGVmlld2VyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==