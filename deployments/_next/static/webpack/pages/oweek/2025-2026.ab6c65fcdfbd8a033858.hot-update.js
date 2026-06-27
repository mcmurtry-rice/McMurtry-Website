webpackHotUpdate_N_E("pages/oweek/2025-2026",{

/***/ "./components/ImageCarousel/ImageCarousel.js":
/*!***************************************************!*\
  !*** ./components/ImageCarousel/ImageCarousel.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ImageCarousel_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImageCarousel.css */ "./components/ImageCarousel/ImageCarousel.css");
/* harmony import */ var _ImageCarousel_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ImageCarousel_css__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
  _jsxFileName = "C:\\Users\\anton\\Documents\\Projects\\MurtWebsite\\components\\ImageCarousel\\ImageCarousel.js",
  _s = $RefreshSig$();
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var ImageCarousel = function ImageCarousel(_ref) {
  _s();
  var images = _ref.images,
    _ref$autoplay = _ref.autoplay,
    autoplay = _ref$autoplay === void 0 ? true : _ref$autoplay;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
    currentIndex = _useState[0],
    setCurrentIndex = _useState[1];
  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    isAnimating = _useState2[0],
    setIsAnimating = _useState2[1];
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
    touchStart = _useState3[0],
    setTouchStart = _useState3[1];
  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
    touchEnd = _useState4[0],
    setTouchEnd = _useState4[1];
  var carouselRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  // Minimum swipe distance (in px)
  var minSwipeDistance = 50;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!autoplay) return;
    var delay = window.matchMedia('(max-width: 768px)').matches ? 12000 : 5000;
    var interval = setInterval(function () {
      handleNext();
    }, delay);
    return function () {
      return clearInterval(interval);
    };
  }, [currentIndex, autoplay]);
  var handleNext = function handleNext() {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(function (prev) {
      return (prev + 1) % images.length;
    });
    setTimeout(function () {
      return setIsAnimating(false);
    }, 600);
  };
  var handlePrev = function handlePrev() {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(function (prev) {
      return (prev - 1 + images.length) % images.length;
    });
    setTimeout(function () {
      return setIsAnimating(false);
    }, 600);
  };
  var goToSlide = function goToSlide(index) {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(function () {
      return setIsAnimating(false);
    }, 600);
  };
  var onTouchStart = function onTouchStart(e) {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  var onTouchMove = function onTouchMove(e) {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  var onTouchEnd = function onTouchEnd() {
    if (!touchStart || !touchEnd) return;
    var distance = touchStart - touchEnd;
    var isLeftSwipe = distance > minSwipeDistance;
    var isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };
  return __jsx("div", {
    className: "carousel-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "professional-carousel",
    ref: carouselRef,
    onTouchStart: onTouchStart,
    onTouchMove: onTouchMove,
    onTouchEnd: onTouchEnd,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "carousel-slides",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }
  }, images.map(function (image, index) {
    return __jsx("div", {
      key: index,
      className: "carousel-slide ".concat(index === currentIndex ? 'active' : index < currentIndex ? 'prev' : 'next'),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 13
      }
    }, __jsx("img", {
      src: image.src,
      alt: image.alt || "Slide ".concat(index + 1),
      className: "carousel-image",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 15
      }
    }), image.caption && __jsx("div", {
      className: "carousel-caption",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 17
      }
    }, __jsx("h3", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 19
      }
    }, image.caption), image.description && __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 41
      }
    }, image.description)));
  })), __jsx("button", {
    className: "carousel-button carousel-button-prev",
    onClick: handlePrev,
    "aria-label": "Previous slide",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 9
    }
  }, "\u2039"), __jsx("button", {
    className: "carousel-button carousel-button-next",
    onClick: handleNext,
    "aria-label": "Next slide",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 9
    }
  }, "\u203A"), __jsx("div", {
    className: "carousel-pagination",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 9
    }
  }, images.map(function (_, index) {
    return __jsx("button", {
      key: index,
      className: "carousel-dot ".concat(index === currentIndex ? 'active' : ''),
      onClick: function onClick() {
        return goToSlide(index);
      },
      "aria-label": "Go to slide ".concat(index + 1),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 13
      }
    });
  }))));
};
_s(ImageCarousel, "S3vZadMjVip0YkcbdWPo4O9E3aE=");
_c = ImageCarousel;
/* harmony default export */ __webpack_exports__["default"] = (ImageCarousel);
var _c;
$RefreshReg$(_c, "ImageCarousel");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbWFnZUNhcm91c2VsL0ltYWdlQ2Fyb3VzZWwuanMiXSwibmFtZXMiOlsiSW1hZ2VDYXJvdXNlbCIsIl9yZWYiLCJfcyIsImltYWdlcyIsIl9yZWYkYXV0b3BsYXkiLCJhdXRvcGxheSIsIl91c2VTdGF0ZSIsInVzZVN0YXRlIiwiY3VycmVudEluZGV4Iiwic2V0Q3VycmVudEluZGV4IiwiX3VzZVN0YXRlMiIsImlzQW5pbWF0aW5nIiwic2V0SXNBbmltYXRpbmciLCJfdXNlU3RhdGUzIiwidG91Y2hTdGFydCIsInNldFRvdWNoU3RhcnQiLCJfdXNlU3RhdGU0IiwidG91Y2hFbmQiLCJzZXRUb3VjaEVuZCIsImNhcm91c2VsUmVmIiwidXNlUmVmIiwibWluU3dpcGVEaXN0YW5jZSIsInVzZUVmZmVjdCIsImRlbGF5Iiwid2luZG93IiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiaGFuZGxlTmV4dCIsImNsZWFySW50ZXJ2YWwiLCJwcmV2IiwibGVuZ3RoIiwic2V0VGltZW91dCIsImhhbmRsZVByZXYiLCJnb1RvU2xpZGUiLCJpbmRleCIsIm9uVG91Y2hTdGFydCIsImUiLCJ0YXJnZXRUb3VjaGVzIiwiY2xpZW50WCIsIm9uVG91Y2hNb3ZlIiwib25Ub3VjaEVuZCIsImRpc3RhbmNlIiwiaXNMZWZ0U3dpcGUiLCJpc1JpZ2h0U3dpcGUiLCJfX2pzeCIsImNsYXNzTmFtZSIsIl9fc2VsZiIsIl90aGlzIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJyZWYiLCJtYXAiLCJpbWFnZSIsImtleSIsImNvbmNhdCIsInNyYyIsImFsdCIsImNhcHRpb24iLCJkZXNjcmlwdGlvbiIsIm9uQ2xpY2siLCJfIiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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Q0FBQztNQUNoQyw2QkFBQXVCLE1BQUEsQ0FBMkJ2QixLQUFLLEdBQUcsQ0FBQyxDQUFHO01BQUFZLE1BQUEsRUFBQUMsS0FBQTtNQUFBQyxRQUFBO1FBQUFDLFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQTtJQUFBLENBQ3hDLENBQUM7RUFBQSxDQUNILENBQ0UsQ0FDRixDQUNGLENBQUM7QUFFVixDQUFDO0FBQUNwRCxFQUFBLENBaElJRixhQUFhO0FBQUFrRSxFQUFBLEdBQWJsRSxhQUFhO0FBa0lKQSw0RUFBYSxFQUFDO0FBQUEsSUFBQWtFLEVBQUE7QUFBQUMsWUFBQSxDQUFBRCxFQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL293ZWVrLzIwMjUtMjAyNi5hYjZjNjVmY2RmYmQ4YTAzMzg1OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi9JbWFnZUNhcm91c2VsLmNzcyc7XG5cbmNvbnN0IEltYWdlQ2Fyb3VzZWwgPSAoeyBpbWFnZXMsIGF1dG9wbGF5ID0gdHJ1ZSB9KSA9PiB7XG4gIGNvbnN0IFtjdXJyZW50SW5kZXgsIHNldEN1cnJlbnRJbmRleF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2lzQW5pbWF0aW5nLCBzZXRJc0FuaW1hdGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt0b3VjaFN0YXJ0LCBzZXRUb3VjaFN0YXJ0XSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbdG91Y2hFbmQsIHNldFRvdWNoRW5kXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBjYXJvdXNlbFJlZiA9IHVzZVJlZihudWxsKTtcblxuICAvLyBNaW5pbXVtIHN3aXBlIGRpc3RhbmNlIChpbiBweClcbiAgY29uc3QgbWluU3dpcGVEaXN0YW5jZSA9IDUwO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFhdXRvcGxheSkgcmV0dXJuO1xuICAgIGNvbnN0IGRlbGF5ID0gd2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDc2OHB4KScpLm1hdGNoZXMgPyAxMjAwMCA6IDUwMDA7XG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBoYW5kbGVOZXh0KCk7XG4gICAgfSwgZGVsYXkpO1xuXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICB9LCBbY3VycmVudEluZGV4LCBhdXRvcGxheV0pO1xuXG4gIGNvbnN0IGhhbmRsZU5leHQgPSAoKSA9PiB7XG4gICAgaWYgKGlzQW5pbWF0aW5nKSByZXR1cm47XG4gICAgc2V0SXNBbmltYXRpbmcodHJ1ZSk7XG4gICAgc2V0Q3VycmVudEluZGV4KChwcmV2KSA9PiAocHJldiArIDEpICUgaW1hZ2VzLmxlbmd0aCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiBzZXRJc0FuaW1hdGluZyhmYWxzZSksIDYwMCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlUHJldiA9ICgpID0+IHtcbiAgICBpZiAoaXNBbmltYXRpbmcpIHJldHVybjtcbiAgICBzZXRJc0FuaW1hdGluZyh0cnVlKTtcbiAgICBzZXRDdXJyZW50SW5kZXgoKHByZXYpID0+IChwcmV2IC0gMSArIGltYWdlcy5sZW5ndGgpICUgaW1hZ2VzLmxlbmd0aCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiBzZXRJc0FuaW1hdGluZyhmYWxzZSksIDYwMCk7XG4gIH07XG5cbiAgY29uc3QgZ29Ub1NsaWRlID0gKGluZGV4KSA9PiB7XG4gICAgaWYgKGlzQW5pbWF0aW5nIHx8IGluZGV4ID09PSBjdXJyZW50SW5kZXgpIHJldHVybjtcbiAgICBzZXRJc0FuaW1hdGluZyh0cnVlKTtcbiAgICBzZXRDdXJyZW50SW5kZXgoaW5kZXgpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0SXNBbmltYXRpbmcoZmFsc2UpLCA2MDApO1xuICB9O1xuXG4gIGNvbnN0IG9uVG91Y2hTdGFydCA9IChlKSA9PiB7XG4gICAgc2V0VG91Y2hFbmQobnVsbCk7XG4gICAgc2V0VG91Y2hTdGFydChlLnRhcmdldFRvdWNoZXNbMF0uY2xpZW50WCk7XG4gIH07XG5cbiAgY29uc3Qgb25Ub3VjaE1vdmUgPSAoZSkgPT4ge1xuICAgIHNldFRvdWNoRW5kKGUudGFyZ2V0VG91Y2hlc1swXS5jbGllbnRYKTtcbiAgfTtcblxuICBjb25zdCBvblRvdWNoRW5kID0gKCkgPT4ge1xuICAgIGlmICghdG91Y2hTdGFydCB8fCAhdG91Y2hFbmQpIHJldHVybjtcbiAgICBcbiAgICBjb25zdCBkaXN0YW5jZSA9IHRvdWNoU3RhcnQgLSB0b3VjaEVuZDtcbiAgICBjb25zdCBpc0xlZnRTd2lwZSA9IGRpc3RhbmNlID4gbWluU3dpcGVEaXN0YW5jZTtcbiAgICBjb25zdCBpc1JpZ2h0U3dpcGUgPSBkaXN0YW5jZSA8IC1taW5Td2lwZURpc3RhbmNlO1xuXG4gICAgaWYgKGlzTGVmdFN3aXBlKSB7XG4gICAgICBoYW5kbGVOZXh0KCk7XG4gICAgfSBlbHNlIGlmIChpc1JpZ2h0U3dpcGUpIHtcbiAgICAgIGhhbmRsZVByZXYoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcm91c2VsLWNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBcbiAgICAgICAgY2xhc3NOYW1lPVwicHJvZmVzc2lvbmFsLWNhcm91c2VsXCJcbiAgICAgICAgcmVmPXtjYXJvdXNlbFJlZn1cbiAgICAgICAgb25Ub3VjaFN0YXJ0PXtvblRvdWNoU3RhcnR9XG4gICAgICAgIG9uVG91Y2hNb3ZlPXtvblRvdWNoTW92ZX1cbiAgICAgICAgb25Ub3VjaEVuZD17b25Ub3VjaEVuZH1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJvdXNlbC1zbGlkZXNcIj5cbiAgICAgICAgICB7aW1hZ2VzLm1hcCgoaW1hZ2UsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGNhcm91c2VsLXNsaWRlICR7XG4gICAgICAgICAgICAgICAgaW5kZXggPT09IGN1cnJlbnRJbmRleFxuICAgICAgICAgICAgICAgICAgPyAnYWN0aXZlJ1xuICAgICAgICAgICAgICAgICAgOiBpbmRleCA8IGN1cnJlbnRJbmRleFxuICAgICAgICAgICAgICAgICAgPyAncHJldidcbiAgICAgICAgICAgICAgICAgIDogJ25leHQnXG4gICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8aW1nIFxuICAgICAgICAgICAgICAgIHNyYz17aW1hZ2Uuc3JjfSBcbiAgICAgICAgICAgICAgICBhbHQ9e2ltYWdlLmFsdCB8fCBgU2xpZGUgJHtpbmRleCArIDF9YH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJvdXNlbC1pbWFnZVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIHtpbWFnZS5jYXB0aW9uICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcm91c2VsLWNhcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgIDxoMz57aW1hZ2UuY2FwdGlvbn08L2gzPlxuICAgICAgICAgICAgICAgICAge2ltYWdlLmRlc2NyaXB0aW9uICYmIDxwPntpbWFnZS5kZXNjcmlwdGlvbn08L3A+fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxidXR0b24gXG4gICAgICAgICAgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtYnV0dG9uIGNhcm91c2VsLWJ1dHRvbi1wcmV2XCIgXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlUHJldn1cbiAgICAgICAgICBhcmlhLWxhYmVsPVwiUHJldmlvdXMgc2xpZGVcIlxuICAgICAgICA+XG4gICAgICAgICAg4oC5XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgIGNsYXNzTmFtZT1cImNhcm91c2VsLWJ1dHRvbiBjYXJvdXNlbC1idXR0b24tbmV4dFwiIFxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU5leHR9XG4gICAgICAgICAgYXJpYS1sYWJlbD1cIk5leHQgc2xpZGVcIlxuICAgICAgICA+XG4gICAgICAgICAg4oC6XG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtcGFnaW5hdGlvblwiPlxuICAgICAgICAgIHtpbWFnZXMubWFwKChfLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BjYXJvdXNlbC1kb3QgJHtpbmRleCA9PT0gY3VycmVudEluZGV4ID8gJ2FjdGl2ZScgOiAnJ31gfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBnb1RvU2xpZGUoaW5kZXgpfVxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPXtgR28gdG8gc2xpZGUgJHtpbmRleCArIDF9YH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbWFnZUNhcm91c2VsO1xuXG4iXSwic291cmNlUm9vdCI6IiJ9