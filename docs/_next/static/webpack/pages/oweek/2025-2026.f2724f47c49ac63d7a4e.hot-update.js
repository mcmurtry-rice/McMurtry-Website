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
  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
    touchStart = _useState2[0],
    setTouchStart = _useState2[1];
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
    touchEnd = _useState3[0],
    setTouchEnd = _useState3[1];
  var carouselRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  // Minimum swipe distance (in px)
  var minSwipeDistance = 50;
  var isAnimatingRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!autoplay) return;
    var delay = window.matchMedia('(max-width: 768px)').matches ? 12000 : 5000;
    var interval = setInterval(function () {
      if (isAnimatingRef.current) return;
      isAnimatingRef.current = true;
      setIsAnimating(true);
      setCurrentIndex(function (prev) {
        return (prev + 1) % images.length;
      });
      setTimeout(function () {
        isAnimatingRef.current = false;
        setIsAnimating(false);
      }, 600);
    }, delay);
    return function () {
      return clearInterval(interval);
    };
  }, [autoplay, images.length]);
  var handleNext = function handleNext() {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    setIsAnimating(true);
    setCurrentIndex(function (prev) {
      return (prev + 1) % images.length;
    });
    setTimeout(function () {
      isAnimatingRef.current = false;
      setIsAnimating(false);
    }, 600);
  };
  var handlePrev = function handlePrev() {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    setIsAnimating(true);
    setCurrentIndex(function (prev) {
      return (prev - 1 + images.length) % images.length;
    });
    setTimeout(function () {
      isAnimatingRef.current = false;
      setIsAnimating(false);
    }, 600);
  };
  var goToSlide = function goToSlide(index) {
    if (isAnimatingRef.current || index === currentIndex) return;
    isAnimatingRef.current = true;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(function () {
      isAnimatingRef.current = false;
      setIsAnimating(false);
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
      lineNumber: 76,
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
      lineNumber: 77,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "carousel-slides",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  }, images.map(function (image, index) {
    return __jsx("div", {
      key: index,
      className: "carousel-slide ".concat(index === currentIndex ? 'active' : index < currentIndex ? 'prev' : 'next'),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 13
      }
    }, __jsx("img", {
      src: image.src,
      alt: image.alt || "Slide ".concat(index + 1),
      className: "carousel-image",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 15
      }
    }), image.caption && __jsx("div", {
      className: "carousel-caption",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 17
      }
    }, __jsx("h3", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 19
      }
    }, image.caption), image.description && __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
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
      lineNumber: 111,
      columnNumber: 9
    }
  }, "\u2039"), __jsx("button", {
    className: "carousel-button carousel-button-next",
    onClick: handleNext,
    "aria-label": "Next slide",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 9
    }
  }, "\u203A"), __jsx("div", {
    className: "carousel-pagination",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
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
        lineNumber: 128,
        columnNumber: 13
      }
    });
  }))));
};
_s(ImageCarousel, "YijgWsr38anSZz6oc6f1/2lp6v8=");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbWFnZUNhcm91c2VsL0ltYWdlQ2Fyb3VzZWwuanMiXSwibmFtZXMiOlsiSW1hZ2VDYXJvdXNlbCIsIl9yZWYiLCJfcyIsImltYWdlcyIsIl9yZWYkYXV0b3BsYXkiLCJhdXRvcGxheSIsIl91c2VTdGF0ZSIsInVzZVN0YXRlIiwiY3VycmVudEluZGV4Iiwic2V0Q3VycmVudEluZGV4IiwiX3VzZVN0YXRlMiIsInRvdWNoU3RhcnQiLCJzZXRUb3VjaFN0YXJ0IiwiX3VzZVN0YXRlMyIsInRvdWNoRW5kIiwic2V0VG91Y2hFbmQiLCJjYXJvdXNlbFJlZiIsInVzZVJlZiIsIm1pblN3aXBlRGlzdGFuY2UiLCJpc0FuaW1hdGluZ1JlZiIsInVzZUVmZmVjdCIsImRlbGF5Iiwid2luZG93IiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY3VycmVudCIsInNldElzQW5pbWF0aW5nIiwicHJldiIsImxlbmd0aCIsInNldFRpbWVvdXQiLCJjbGVhckludGVydmFsIiwiaGFuZGxlTmV4dCIsImhhbmRsZVByZXYiLCJnb1RvU2xpZGUiLCJpbmRleCIsIm9uVG91Y2hTdGFydCIsImUiLCJ0YXJnZXRUb3VjaGVzIiwiY2xpZW50WCIsIm9uVG91Y2hNb3ZlIiwib25Ub3VjaEVuZCIsImRpc3RhbmNlIiwiaXNMZWZ0U3dpcGUiLCJpc1JpZ2h0U3dpcGUiLCJfX2pzeCIsImNsYXNzTmFtZSIsIl9fc2VsZiIsIl90aGlzIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJyZWYiLCJtYXAiLCJpbWFnZSIsImtleSIsImNvbmNhdCIsInNyYyIsImFsdCIsImNhcHRpb24iLCJkZXNjcmlwdGlvbiIsIm9uQ2xpY2siLCJfIiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QVc7SUFDcEIsY0FBVyxZQUFZO0lBQUFlLE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLFdBR2pCLENBQUMsRUFFVFIsS0FBQTtJQUFLQyxTQUFTLEVBQUMscUJBQXFCO0lBQUFDLE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQ2pDbkQsTUFBTSxDQUFDcUQsR0FBRyxDQUFDLFVBQUNTLENBQUMsRUFBRTdCLEtBQUs7SUFBQSxPQUNuQlUsS0FBQTtNQUNFWSxHQUFHLEVBQUV0QixLQUFNO01BQ1hXLFNBQVMsa0JBQUFZLE1BQUEsQ0FBa0J2QixLQUFLLEtBQUs1QixZQUFZLEdBQUcsUUFBUSxHQUFHLEVBQUUsQ0FBRztNQUNwRXdELE9BQU8sRUFBRSxTQUFBQSxRQUFBO1FBQUEsT0FBTTdCLFNBQVMsQ0FBQ0MsS0FBSyxDQUFDO01BQUEsQ0FBQztNQUNoQyw2QkFBQXVCLE1BQUEsQ0FBMkJ2QixLQUFLLEdBQUcsQ0FBQyxDQUFHO01BQUFZLE1BQUEsRUFBQUMsS0FBQTtNQUFBQyxRQUFBO1FBQUFDLFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQTtJQUFBLENBQ3hDLENBQUM7RUFBQSxDQUNILENBQ0UsQ0FDRixDQUNGLENBQUM7QUFFVixDQUFDO0FBQUNwRCxFQUFBLENBdklJRixhQUFhO0FBQUFrRSxFQUFBLEdBQWJsRSxhQUFhO0FBeUlKQSw0RUFBYSxFQUFDO0FBQUEsSUFBQWtFLEVBQUE7QUFBQUMsWUFBQSxDQUFBRCxFQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL293ZWVrLzIwMjUtMjAyNi5mMjcyNGY0N2M0OWFjNjNkN2E0ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi9JbWFnZUNhcm91c2VsLmNzcyc7XG5cbmNvbnN0IEltYWdlQ2Fyb3VzZWwgPSAoeyBpbWFnZXMsIGF1dG9wbGF5ID0gdHJ1ZSB9KSA9PiB7XG4gIGNvbnN0IFtjdXJyZW50SW5kZXgsIHNldEN1cnJlbnRJbmRleF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3RvdWNoU3RhcnQsIHNldFRvdWNoU3RhcnRdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFt0b3VjaEVuZCwgc2V0VG91Y2hFbmRdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IGNhcm91c2VsUmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIC8vIE1pbmltdW0gc3dpcGUgZGlzdGFuY2UgKGluIHB4KVxuICBjb25zdCBtaW5Td2lwZURpc3RhbmNlID0gNTA7XG4gIGNvbnN0IGlzQW5pbWF0aW5nUmVmID0gdXNlUmVmKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghYXV0b3BsYXkpIHJldHVybjtcbiAgICBjb25zdCBkZWxheSA9IHdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiA3NjhweCknKS5tYXRjaGVzID8gMTIwMDAgOiA1MDAwO1xuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgaWYgKGlzQW5pbWF0aW5nUmVmLmN1cnJlbnQpIHJldHVybjtcbiAgICAgIGlzQW5pbWF0aW5nUmVmLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgc2V0SXNBbmltYXRpbmcodHJ1ZSk7XG4gICAgICBzZXRDdXJyZW50SW5kZXgoKHByZXYpID0+IChwcmV2ICsgMSkgJSBpbWFnZXMubGVuZ3RoKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4geyBpc0FuaW1hdGluZ1JlZi5jdXJyZW50ID0gZmFsc2U7IHNldElzQW5pbWF0aW5nKGZhbHNlKTsgfSwgNjAwKTtcbiAgICB9LCBkZWxheSk7XG5cbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gIH0sIFthdXRvcGxheSwgaW1hZ2VzLmxlbmd0aF0pO1xuXG4gIGNvbnN0IGhhbmRsZU5leHQgPSAoKSA9PiB7XG4gICAgaWYgKGlzQW5pbWF0aW5nUmVmLmN1cnJlbnQpIHJldHVybjtcbiAgICBpc0FuaW1hdGluZ1JlZi5jdXJyZW50ID0gdHJ1ZTtcbiAgICBzZXRJc0FuaW1hdGluZyh0cnVlKTtcbiAgICBzZXRDdXJyZW50SW5kZXgoKHByZXYpID0+IChwcmV2ICsgMSkgJSBpbWFnZXMubGVuZ3RoKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHsgaXNBbmltYXRpbmdSZWYuY3VycmVudCA9IGZhbHNlOyBzZXRJc0FuaW1hdGluZyhmYWxzZSk7IH0sIDYwMCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlUHJldiA9ICgpID0+IHtcbiAgICBpZiAoaXNBbmltYXRpbmdSZWYuY3VycmVudCkgcmV0dXJuO1xuICAgIGlzQW5pbWF0aW5nUmVmLmN1cnJlbnQgPSB0cnVlO1xuICAgIHNldElzQW5pbWF0aW5nKHRydWUpO1xuICAgIHNldEN1cnJlbnRJbmRleCgocHJldikgPT4gKHByZXYgLSAxICsgaW1hZ2VzLmxlbmd0aCkgJSBpbWFnZXMubGVuZ3RoKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHsgaXNBbmltYXRpbmdSZWYuY3VycmVudCA9IGZhbHNlOyBzZXRJc0FuaW1hdGluZyhmYWxzZSk7IH0sIDYwMCk7XG4gIH07XG5cbiAgY29uc3QgZ29Ub1NsaWRlID0gKGluZGV4KSA9PiB7XG4gICAgaWYgKGlzQW5pbWF0aW5nUmVmLmN1cnJlbnQgfHwgaW5kZXggPT09IGN1cnJlbnRJbmRleCkgcmV0dXJuO1xuICAgIGlzQW5pbWF0aW5nUmVmLmN1cnJlbnQgPSB0cnVlO1xuICAgIHNldElzQW5pbWF0aW5nKHRydWUpO1xuICAgIHNldEN1cnJlbnRJbmRleChpbmRleCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7IGlzQW5pbWF0aW5nUmVmLmN1cnJlbnQgPSBmYWxzZTsgc2V0SXNBbmltYXRpbmcoZmFsc2UpOyB9LCA2MDApO1xuICB9O1xuXG4gIGNvbnN0IG9uVG91Y2hTdGFydCA9IChlKSA9PiB7XG4gICAgc2V0VG91Y2hFbmQobnVsbCk7XG4gICAgc2V0VG91Y2hTdGFydChlLnRhcmdldFRvdWNoZXNbMF0uY2xpZW50WCk7XG4gIH07XG5cbiAgY29uc3Qgb25Ub3VjaE1vdmUgPSAoZSkgPT4ge1xuICAgIHNldFRvdWNoRW5kKGUudGFyZ2V0VG91Y2hlc1swXS5jbGllbnRYKTtcbiAgfTtcblxuICBjb25zdCBvblRvdWNoRW5kID0gKCkgPT4ge1xuICAgIGlmICghdG91Y2hTdGFydCB8fCAhdG91Y2hFbmQpIHJldHVybjtcbiAgICBcbiAgICBjb25zdCBkaXN0YW5jZSA9IHRvdWNoU3RhcnQgLSB0b3VjaEVuZDtcbiAgICBjb25zdCBpc0xlZnRTd2lwZSA9IGRpc3RhbmNlID4gbWluU3dpcGVEaXN0YW5jZTtcbiAgICBjb25zdCBpc1JpZ2h0U3dpcGUgPSBkaXN0YW5jZSA8IC1taW5Td2lwZURpc3RhbmNlO1xuXG4gICAgaWYgKGlzTGVmdFN3aXBlKSB7XG4gICAgICBoYW5kbGVOZXh0KCk7XG4gICAgfSBlbHNlIGlmIChpc1JpZ2h0U3dpcGUpIHtcbiAgICAgIGhhbmRsZVByZXYoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcm91c2VsLWNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBcbiAgICAgICAgY2xhc3NOYW1lPVwicHJvZmVzc2lvbmFsLWNhcm91c2VsXCJcbiAgICAgICAgcmVmPXtjYXJvdXNlbFJlZn1cbiAgICAgICAgb25Ub3VjaFN0YXJ0PXtvblRvdWNoU3RhcnR9XG4gICAgICAgIG9uVG91Y2hNb3ZlPXtvblRvdWNoTW92ZX1cbiAgICAgICAgb25Ub3VjaEVuZD17b25Ub3VjaEVuZH1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJvdXNlbC1zbGlkZXNcIj5cbiAgICAgICAgICB7aW1hZ2VzLm1hcCgoaW1hZ2UsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGNhcm91c2VsLXNsaWRlICR7XG4gICAgICAgICAgICAgICAgaW5kZXggPT09IGN1cnJlbnRJbmRleFxuICAgICAgICAgICAgICAgICAgPyAnYWN0aXZlJ1xuICAgICAgICAgICAgICAgICAgOiBpbmRleCA8IGN1cnJlbnRJbmRleFxuICAgICAgICAgICAgICAgICAgPyAncHJldidcbiAgICAgICAgICAgICAgICAgIDogJ25leHQnXG4gICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8aW1nIFxuICAgICAgICAgICAgICAgIHNyYz17aW1hZ2Uuc3JjfSBcbiAgICAgICAgICAgICAgICBhbHQ9e2ltYWdlLmFsdCB8fCBgU2xpZGUgJHtpbmRleCArIDF9YH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJvdXNlbC1pbWFnZVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIHtpbWFnZS5jYXB0aW9uICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcm91c2VsLWNhcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgIDxoMz57aW1hZ2UuY2FwdGlvbn08L2gzPlxuICAgICAgICAgICAgICAgICAge2ltYWdlLmRlc2NyaXB0aW9uICYmIDxwPntpbWFnZS5kZXNjcmlwdGlvbn08L3A+fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxidXR0b24gXG4gICAgICAgICAgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtYnV0dG9uIGNhcm91c2VsLWJ1dHRvbi1wcmV2XCIgXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlUHJldn1cbiAgICAgICAgICBhcmlhLWxhYmVsPVwiUHJldmlvdXMgc2xpZGVcIlxuICAgICAgICA+XG4gICAgICAgICAg4oC5XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgIGNsYXNzTmFtZT1cImNhcm91c2VsLWJ1dHRvbiBjYXJvdXNlbC1idXR0b24tbmV4dFwiIFxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU5leHR9XG4gICAgICAgICAgYXJpYS1sYWJlbD1cIk5leHQgc2xpZGVcIlxuICAgICAgICA+XG4gICAgICAgICAg4oC6XG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtcGFnaW5hdGlvblwiPlxuICAgICAgICAgIHtpbWFnZXMubWFwKChfLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BjYXJvdXNlbC1kb3QgJHtpbmRleCA9PT0gY3VycmVudEluZGV4ID8gJ2FjdGl2ZScgOiAnJ31gfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBnb1RvU2xpZGUoaW5kZXgpfVxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPXtgR28gdG8gc2xpZGUgJHtpbmRleCArIDF9YH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbWFnZUNhcm91c2VsO1xuXG4iXSwic291cmNlUm9vdCI6IiJ9