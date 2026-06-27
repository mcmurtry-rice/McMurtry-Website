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
      setCurrentIndex(function (prev) {
        return (prev + 1) % images.length;
      });
      setTimeout(function () {
        isAnimatingRef.current = false;
      }, 600);
    }, delay);
    return function () {
      return clearInterval(interval);
    };
  }, [autoplay, images.length]);
  var handleNext = function handleNext() {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    setCurrentIndex(function (prev) {
      return (prev + 1) % images.length;
    });
    setTimeout(function () {
      isAnimatingRef.current = false;
    }, 600);
  };
  var handlePrev = function handlePrev() {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    setCurrentIndex(function (prev) {
      return (prev - 1 + images.length) % images.length;
    });
    setTimeout(function () {
      isAnimatingRef.current = false;
    }, 600);
  };
  var goToSlide = function goToSlide(index) {
    if (isAnimatingRef.current || index === currentIndex) return;
    isAnimatingRef.current = true;
    setCurrentIndex(index);
    setTimeout(function () {
      isAnimatingRef.current = false;
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
      lineNumber: 72,
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
      lineNumber: 73,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "carousel-slides",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }, images.map(function (image, index) {
    return __jsx("div", {
      key: index,
      className: "carousel-slide ".concat(index === currentIndex ? 'active' : index < currentIndex ? 'prev' : 'next'),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 13
      }
    }, __jsx("img", {
      src: image.src,
      alt: image.alt || "Slide ".concat(index + 1),
      className: "carousel-image",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 15
      }
    }), image.caption && __jsx("div", {
      className: "carousel-caption",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 17
      }
    }, __jsx("h3", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 19
      }
    }, image.caption), image.description && __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
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
      lineNumber: 107,
      columnNumber: 9
    }
  }, "\u2039"), __jsx("button", {
    className: "carousel-button carousel-button-next",
    onClick: handleNext,
    "aria-label": "Next slide",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 9
    }
  }, "\u203A"), __jsx("div", {
    className: "carousel-pagination",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
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
        lineNumber: 124,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbWFnZUNhcm91c2VsL0ltYWdlQ2Fyb3VzZWwuanMiXSwibmFtZXMiOlsiSW1hZ2VDYXJvdXNlbCIsIl9yZWYiLCJfcyIsImltYWdlcyIsIl9yZWYkYXV0b3BsYXkiLCJhdXRvcGxheSIsIl91c2VTdGF0ZSIsInVzZVN0YXRlIiwiY3VycmVudEluZGV4Iiwic2V0Q3VycmVudEluZGV4IiwiX3VzZVN0YXRlMiIsInRvdWNoU3RhcnQiLCJzZXRUb3VjaFN0YXJ0IiwiX3VzZVN0YXRlMyIsInRvdWNoRW5kIiwic2V0VG91Y2hFbmQiLCJjYXJvdXNlbFJlZiIsInVzZVJlZiIsIm1pblN3aXBlRGlzdGFuY2UiLCJpc0FuaW1hdGluZ1JlZiIsInVzZUVmZmVjdCIsImRlbGF5Iiwid2luZG93IiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY3VycmVudCIsInByZXYiLCJsZW5ndGgiLCJzZXRUaW1lb3V0IiwiY2xlYXJJbnRlcnZhbCIsImhhbmRsZU5leHQiLCJoYW5kbGVQcmV2IiwiZ29Ub1NsaWRlIiwiaW5kZXgiLCJvblRvdWNoU3RhcnQiLCJlIiwidGFyZ2V0VG91Y2hlcyIsImNsaWVudFgiLCJvblRvdWNoTW92ZSIsIm9uVG91Y2hFbmQiLCJkaXN0YW5jZSIsImlzTGVmdFN3aXBlIiwiaXNSaWdodFN3aXBlIiwiX19qc3giLCJjbGFzc05hbWUiLCJfX3NlbGYiLCJfdGhpcyIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwicmVmIiwibWFwIiwiaW1hZ2UiLCJrZXkiLCJjb25jYXQiLCJzcmMiLCJhbHQiLCJjYXB0aW9uIiwiZGVzY3JpcHRpb24iLCJvbkNsaWNrIiwiXyIsIl9jIiwiJFJlZnJlc2hSZWckIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTJEO0FBQzlCO0FBRTdCLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBYUEsQ0FBQUMsSUFBQSxFQUFvQztFQUFBQyxFQUFBO0VBQUEsSUFBOUJDLE1BQU0sR0FBQUYsSUFBQSxDQUFORSxNQUFNO0lBQUFDLGFBQUEsR0FBQUgsSUFBQSxDQUFFSSxRQUFRO0lBQVJBLFFBQVEsR0FBQUQsYUFBQSxjQUFHLElBQUksR0FBQUEsYUFBQTtFQUM5QyxJQUFBRSxTQUFBLEdBQXdDQyxzREFBUSxDQUFDLENBQUMsQ0FBQztJQUE1Q0MsWUFBWSxHQUFBRixTQUFBO0lBQUVHLGVBQWUsR0FBQUgsU0FBQTtFQUNwQyxJQUFBSSxVQUFBLEdBQW9DSCxzREFBUSxDQUFDLElBQUksQ0FBQztJQUEzQ0ksVUFBVSxHQUFBRCxVQUFBO0lBQUVFLGFBQWEsR0FBQUYsVUFBQTtFQUNoQyxJQUFBRyxVQUFBLEdBQWdDTixzREFBUSxDQUFDLElBQUksQ0FBQztJQUF2Q08sUUFBUSxHQUFBRCxVQUFBO0lBQUVFLFdBQVcsR0FBQUYsVUFBQTtFQUM1QixJQUFNRyxXQUFXLEdBQUdDLG9EQUFNLENBQUMsSUFBSSxDQUFDOztFQUVoQztFQUNBLElBQU1DLGdCQUFnQixHQUFHLEVBQUU7RUFDM0IsSUFBTUMsY0FBYyxHQUFHRixvREFBTSxDQUFDLEtBQUssQ0FBQztFQUVwQ0csdURBQVMsQ0FBQyxZQUFNO0lBQ2QsSUFBSSxDQUFDZixRQUFRLEVBQUU7SUFDZixJQUFNZ0IsS0FBSyxHQUFHQyxNQUFNLENBQUNDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDQyxPQUFPLEdBQUcsS0FBSyxHQUFHLElBQUk7SUFDNUUsSUFBTUMsUUFBUSxHQUFHQyxXQUFXLENBQUMsWUFBTTtNQUNqQyxJQUFJUCxjQUFjLENBQUNRLE9BQU8sRUFBRTtNQUM1QlIsY0FBYyxDQUFDUSxPQUFPLEdBQUcsSUFBSTtNQUN2QmxCLGVBQWUsQ0FBQyxVQUFDbUIsSUFBSTtRQUFBLE9BQUssQ0FBQ0EsSUFBSSxHQUFHLENBQUMsSUFBSXpCLE1BQU0sQ0FBQzBCLE1BQU07TUFBQSxFQUFDO01BQzNEQyxVQUFVLENBQUMsWUFBTTtRQUFFWCxjQUFjLENBQUNRLE9BQU8sR0FBRyxLQUFLO01BQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQztJQUM1RCxDQUFDLEVBQUVOLEtBQUssQ0FBQztJQUVULE9BQU87TUFBQSxPQUFNVSxhQUFhLENBQUNOLFFBQVEsQ0FBQztJQUFBO0VBQ3RDLENBQUMsRUFBRSxDQUFDcEIsUUFBUSxFQUFFRixNQUFNLENBQUMwQixNQUFNLENBQUMsQ0FBQztFQUU3QixJQUFNRyxVQUFVLEdBQUcsU0FBYkEsVUFBVUEsQ0FBQSxFQUFTO0lBQ3ZCLElBQUliLGNBQWMsQ0FBQ1EsT0FBTyxFQUFFO0lBQzVCUixjQUFjLENBQUNRLE9BQU8sR0FBRyxJQUFJO0lBQ3pCbEIsZUFBZSxDQUFDLFVBQUNtQixJQUFJO01BQUEsT0FBSyxDQUFDQSxJQUFJLEdBQUcsQ0FBQyxJQUFJekIsTUFBTSxDQUFDMEIsTUFBTTtJQUFBLEVBQUM7SUFDekRDLFVBQVUsQ0FBQyxZQUFNO01BQUVYLGNBQWMsQ0FBQ1EsT0FBTyxHQUFHLEtBQUs7SUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDO0VBQzVELENBQUM7RUFFRCxJQUFNTSxVQUFVLEdBQUcsU0FBYkEsVUFBVUEsQ0FBQSxFQUFTO0lBQ3ZCLElBQUlkLGNBQWMsQ0FBQ1EsT0FBTyxFQUFFO0lBQzVCUixjQUFjLENBQUNRLE9BQU8sR0FBRyxJQUFJO0lBQ3pCbEIsZUFBZSxDQUFDLFVBQUNtQixJQUFJO01BQUEsT0FBSyxDQUFDQSxJQUFJLEdBQUcsQ0FBQyxHQUFHekIsTUFBTSxDQUFDMEIsTUFBTSxJQUFJMUIsTUFBTSxDQUFDMEIsTUFBTTtJQUFBLEVBQUM7SUFDekVDLFVBQVUsQ0FBQyxZQUFNO01BQUVYLGNBQWMsQ0FBQ1EsT0FBTyxHQUFHLEtBQUs7SUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDO0VBQzVELENBQUM7RUFFRCxJQUFNTyxTQUFTLEdBQUcsU0FBWkEsU0FBU0EsQ0FBSUMsS0FBSyxFQUFLO0lBQzNCLElBQUloQixjQUFjLENBQUNRLE9BQU8sSUFBSVEsS0FBSyxLQUFLM0IsWUFBWSxFQUFFO0lBQ3REVyxjQUFjLENBQUNRLE9BQU8sR0FBRyxJQUFJO0lBQ3pCbEIsZUFBZSxDQUFDMEIsS0FBSyxDQUFDO0lBQzFCTCxVQUFVLENBQUMsWUFBTTtNQUFFWCxjQUFjLENBQUNRLE9BQU8sR0FBRyxLQUFLO0lBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQztFQUM1RCxDQUFDO0VBRUQsSUFBTVMsWUFBWSxHQUFHLFNBQWZBLFlBQVlBLENBQUlDLENBQUMsRUFBSztJQUMxQnRCLFdBQVcsQ0FBQyxJQUFJLENBQUM7SUFDakJILGFBQWEsQ0FBQ3lCLENBQUMsQ0FBQ0MsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDQyxPQUFPLENBQUM7RUFDM0MsQ0FBQztFQUVELElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFJSCxDQUFDLEVBQUs7SUFDekJ0QixXQUFXLENBQUNzQixDQUFDLENBQUNDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsT0FBTyxDQUFDO0VBQ3pDLENBQUM7RUFFRCxJQUFNRSxVQUFVLEdBQUcsU0FBYkEsVUFBVUEsQ0FBQSxFQUFTO0lBQ3ZCLElBQUksQ0FBQzlCLFVBQVUsSUFBSSxDQUFDRyxRQUFRLEVBQUU7SUFFOUIsSUFBTTRCLFFBQVEsR0FBRy9CLFVBQVUsR0FBR0csUUFBUTtJQUN0QyxJQUFNNkIsV0FBVyxHQUFHRCxRQUFRLEdBQUd4QixnQkFBZ0I7SUFDL0MsSUFBTTBCLFlBQVksR0FBR0YsUUFBUSxHQUFHLENBQUN4QixnQkFBZ0I7SUFFakQsSUFBSXlCLFdBQVcsRUFBRTtNQUNmWCxVQUFVLENBQUMsQ0FBQztJQUNkLENBQUMsTUFBTSxJQUFJWSxZQUFZLEVBQUU7TUFDdkJYLFVBQVUsQ0FBQyxDQUFDO0lBQ2Q7RUFDRixDQUFDO0VBRUQsT0FDRVksS0FBQTtJQUFLQyxTQUFTLEVBQUMsb0JBQW9CO0lBQUFDLE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQ2pDUixLQUFBO0lBQ0VDLFNBQVMsRUFBQyx1QkFBdUI7SUFDakNRLEdBQUcsRUFBRXRDLFdBQVk7SUFDakJvQixZQUFZLEVBQUVBLFlBQWE7SUFDM0JJLFdBQVcsRUFBRUEsV0FBWTtJQUN6QkMsVUFBVSxFQUFFQSxVQUFXO0lBQUFNLE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBRXZCUixLQUFBO0lBQUtDLFNBQVMsRUFBQyxpQkFBaUI7SUFBQUMsTUFBQSxFQUFBQyxLQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDN0JsRCxNQUFNLENBQUNvRCxHQUFHLENBQUMsVUFBQ0MsS0FBSyxFQUFFckIsS0FBSztJQUFBLE9BQ3ZCVSxLQUFBO01BQ0VZLEdBQUcsRUFBRXRCLEtBQU07TUFDWFcsU0FBUyxvQkFBQVksTUFBQSxDQUNQdkIsS0FBSyxLQUFLM0IsWUFBWSxHQUNsQixRQUFRLEdBQ1IyQixLQUFLLEdBQUczQixZQUFZLEdBQ3BCLE1BQU0sR0FDTixNQUFNLENBQ1Q7TUFBQXVDLE1BQUEsRUFBQUMsS0FBQTtNQUFBQyxRQUFBO1FBQUFDLFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQTtJQUFBLEdBRUhSLEtBQUE7TUFDRWMsR0FBRyxFQUFFSCxLQUFLLENBQUNHLEdBQUk7TUFDZkMsR0FBRyxFQUFFSixLQUFLLENBQUNJLEdBQUcsYUFBQUYsTUFBQSxDQUFhdkIsS0FBSyxHQUFHLENBQUMsQ0FBRztNQUN2Q1csU0FBUyxFQUFDLGdCQUFnQjtNQUFBQyxNQUFBLEVBQUFDLEtBQUE7TUFBQUMsUUFBQTtRQUFBQyxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUE7SUFBQSxDQUMzQixDQUFDLEVBQ0RHLEtBQUssQ0FBQ0ssT0FBTyxJQUNaaEIsS0FBQTtNQUFLQyxTQUFTLEVBQUMsa0JBQWtCO01BQUFDLE1BQUEsRUFBQUMsS0FBQTtNQUFBQyxRQUFBO1FBQUFDLFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQTtJQUFBLEdBQy9CUixLQUFBO01BQUFFLE1BQUEsRUFBQUMsS0FBQTtNQUFBQyxRQUFBO1FBQUFDLFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQTtJQUFBLEdBQUtHLEtBQUssQ0FBQ0ssT0FBWSxDQUFDLEVBQ3ZCTCxLQUFLLENBQUNNLFdBQVcsSUFBSWpCLEtBQUE7TUFBQUUsTUFBQSxFQUFBQyxLQUFBO01BQUFDLFFBQUE7UUFBQUMsUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBO0lBQUEsR0FBSUcsS0FBSyxDQUFDTSxXQUFlLENBQzVDLENBRUosQ0FBQztFQUFBLENBQ1AsQ0FDRSxDQUFDLEVBRU5qQixLQUFBO0lBQ0VDLFNBQVMsRUFBQyxzQ0FBc0M7SUFDaERpQixPQUFPLEVBQUU5QixVQUFXO0lBQ3BCLGNBQVcsZ0JBQWdCO0lBQUFjLE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLFdBR3JCLENBQUMsRUFDVFIsS0FBQTtJQUNFQyxTQUFTLEVBQUMsc0NBQXNDO0lBQ2hEaUIsT0FBTyxFQUFFL0IsVUFBVztJQUNwQixjQUFXLFlBQVk7SUFBQWUsTUFBQSxFQUFBQyxLQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsV0FHakIsQ0FBQyxFQUVUUixLQUFBO0lBQUtDLFNBQVMsRUFBQyxxQkFBcUI7SUFBQUMsTUFBQSxFQUFBQyxLQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDakNsRCxNQUFNLENBQUNvRCxHQUFHLENBQUMsVUFBQ1MsQ0FBQyxFQUFFN0IsS0FBSztJQUFBLE9BQ25CVSxLQUFBO01BQ0VZLEdBQUcsRUFBRXRCLEtBQU07TUFDWFcsU0FBUyxrQkFBQVksTUFBQSxDQUFrQnZCLEtBQUssS0FBSzNCLFlBQVksR0FBRyxRQUFRLEdBQUcsRUFBRSxDQUFHO01BQ3BFdUQsT0FBTyxFQUFFLFNBQUFBLFFBQUE7UUFBQSxPQUFNN0IsU0FBUyxDQUFDQyxLQUFLLENBQUM7TUFBQSxDQUFDO01BQ2hDLDZCQUFBdUIsTUFBQSxDQUEyQnZCLEtBQUssR0FBRyxDQUFDLENBQUc7TUFBQVksTUFBQSxFQUFBQyxLQUFBO01BQUFDLFFBQUE7UUFBQUMsUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBO0lBQUEsQ0FDeEMsQ0FBQztFQUFBLENBQ0gsQ0FDRSxDQUNGLENBQ0YsQ0FBQztBQUVWLENBQUM7QUFBQ25ELEVBQUEsQ0FuSUlGLGFBQWE7QUFBQWlFLEVBQUEsR0FBYmpFLGFBQWE7QUFxSUpBLDRFQUFhLEVBQUM7QUFBQSxJQUFBaUUsRUFBQTtBQUFBQyxZQUFBLENBQUFELEVBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvb3dlZWsvMjAyNS0yMDI2LjU3ZTUyMWE0YjQ0MTNmNzI0OWMxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICcuL0ltYWdlQ2Fyb3VzZWwuY3NzJztcblxuY29uc3QgSW1hZ2VDYXJvdXNlbCA9ICh7IGltYWdlcywgYXV0b3BsYXkgPSB0cnVlIH0pID0+IHtcbiAgY29uc3QgW2N1cnJlbnRJbmRleCwgc2V0Q3VycmVudEluZGV4XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbdG91Y2hTdGFydCwgc2V0VG91Y2hTdGFydF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3RvdWNoRW5kLCBzZXRUb3VjaEVuZF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgY2Fyb3VzZWxSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgLy8gTWluaW11bSBzd2lwZSBkaXN0YW5jZSAoaW4gcHgpXG4gIGNvbnN0IG1pblN3aXBlRGlzdGFuY2UgPSA1MDtcbiAgY29uc3QgaXNBbmltYXRpbmdSZWYgPSB1c2VSZWYoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFhdXRvcGxheSkgcmV0dXJuO1xuICAgIGNvbnN0IGRlbGF5ID0gd2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDc2OHB4KScpLm1hdGNoZXMgPyAxMjAwMCA6IDUwMDA7XG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBpZiAoaXNBbmltYXRpbmdSZWYuY3VycmVudCkgcmV0dXJuO1xuICAgICAgaXNBbmltYXRpbmdSZWYuY3VycmVudCA9IHRydWU7XG4gICAgICAgICAgICBzZXRDdXJyZW50SW5kZXgoKHByZXYpID0+IChwcmV2ICsgMSkgJSBpbWFnZXMubGVuZ3RoKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4geyBpc0FuaW1hdGluZ1JlZi5jdXJyZW50ID0gZmFsc2U7IH0sIDYwMCk7XG4gICAgfSwgZGVsYXkpO1xuXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICB9LCBbYXV0b3BsYXksIGltYWdlcy5sZW5ndGhdKTtcblxuICBjb25zdCBoYW5kbGVOZXh0ID0gKCkgPT4ge1xuICAgIGlmIChpc0FuaW1hdGluZ1JlZi5jdXJyZW50KSByZXR1cm47XG4gICAgaXNBbmltYXRpbmdSZWYuY3VycmVudCA9IHRydWU7XG4gICAgICAgIHNldEN1cnJlbnRJbmRleCgocHJldikgPT4gKHByZXYgKyAxKSAlIGltYWdlcy5sZW5ndGgpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4geyBpc0FuaW1hdGluZ1JlZi5jdXJyZW50ID0gZmFsc2U7IH0sIDYwMCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlUHJldiA9ICgpID0+IHtcbiAgICBpZiAoaXNBbmltYXRpbmdSZWYuY3VycmVudCkgcmV0dXJuO1xuICAgIGlzQW5pbWF0aW5nUmVmLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgICBzZXRDdXJyZW50SW5kZXgoKHByZXYpID0+IChwcmV2IC0gMSArIGltYWdlcy5sZW5ndGgpICUgaW1hZ2VzLmxlbmd0aCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7IGlzQW5pbWF0aW5nUmVmLmN1cnJlbnQgPSBmYWxzZTsgfSwgNjAwKTtcbiAgfTtcblxuICBjb25zdCBnb1RvU2xpZGUgPSAoaW5kZXgpID0+IHtcbiAgICBpZiAoaXNBbmltYXRpbmdSZWYuY3VycmVudCB8fCBpbmRleCA9PT0gY3VycmVudEluZGV4KSByZXR1cm47XG4gICAgaXNBbmltYXRpbmdSZWYuY3VycmVudCA9IHRydWU7XG4gICAgICAgIHNldEN1cnJlbnRJbmRleChpbmRleCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7IGlzQW5pbWF0aW5nUmVmLmN1cnJlbnQgPSBmYWxzZTsgfSwgNjAwKTtcbiAgfTtcblxuICBjb25zdCBvblRvdWNoU3RhcnQgPSAoZSkgPT4ge1xuICAgIHNldFRvdWNoRW5kKG51bGwpO1xuICAgIHNldFRvdWNoU3RhcnQoZS50YXJnZXRUb3VjaGVzWzBdLmNsaWVudFgpO1xuICB9O1xuXG4gIGNvbnN0IG9uVG91Y2hNb3ZlID0gKGUpID0+IHtcbiAgICBzZXRUb3VjaEVuZChlLnRhcmdldFRvdWNoZXNbMF0uY2xpZW50WCk7XG4gIH07XG5cbiAgY29uc3Qgb25Ub3VjaEVuZCA9ICgpID0+IHtcbiAgICBpZiAoIXRvdWNoU3RhcnQgfHwgIXRvdWNoRW5kKSByZXR1cm47XG4gICAgXG4gICAgY29uc3QgZGlzdGFuY2UgPSB0b3VjaFN0YXJ0IC0gdG91Y2hFbmQ7XG4gICAgY29uc3QgaXNMZWZ0U3dpcGUgPSBkaXN0YW5jZSA+IG1pblN3aXBlRGlzdGFuY2U7XG4gICAgY29uc3QgaXNSaWdodFN3aXBlID0gZGlzdGFuY2UgPCAtbWluU3dpcGVEaXN0YW5jZTtcblxuICAgIGlmIChpc0xlZnRTd2lwZSkge1xuICAgICAgaGFuZGxlTmV4dCgpO1xuICAgIH0gZWxzZSBpZiAoaXNSaWdodFN3aXBlKSB7XG4gICAgICBoYW5kbGVQcmV2KCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJvdXNlbC1jb250YWluZXJcIj5cbiAgICAgIDxkaXYgXG4gICAgICAgIGNsYXNzTmFtZT1cInByb2Zlc3Npb25hbC1jYXJvdXNlbFwiXG4gICAgICAgIHJlZj17Y2Fyb3VzZWxSZWZ9XG4gICAgICAgIG9uVG91Y2hTdGFydD17b25Ub3VjaFN0YXJ0fVxuICAgICAgICBvblRvdWNoTW92ZT17b25Ub3VjaE1vdmV9XG4gICAgICAgIG9uVG91Y2hFbmQ9e29uVG91Y2hFbmR9XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtc2xpZGVzXCI+XG4gICAgICAgICAge2ltYWdlcy5tYXAoKGltYWdlLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BjYXJvdXNlbC1zbGlkZSAke1xuICAgICAgICAgICAgICAgIGluZGV4ID09PSBjdXJyZW50SW5kZXhcbiAgICAgICAgICAgICAgICAgID8gJ2FjdGl2ZSdcbiAgICAgICAgICAgICAgICAgIDogaW5kZXggPCBjdXJyZW50SW5kZXhcbiAgICAgICAgICAgICAgICAgID8gJ3ByZXYnXG4gICAgICAgICAgICAgICAgICA6ICduZXh0J1xuICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGltZyBcbiAgICAgICAgICAgICAgICBzcmM9e2ltYWdlLnNyY30gXG4gICAgICAgICAgICAgICAgYWx0PXtpbWFnZS5hbHQgfHwgYFNsaWRlICR7aW5kZXggKyAxfWB9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtaW1hZ2VcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7aW1hZ2UuY2FwdGlvbiAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJvdXNlbC1jYXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICA8aDM+e2ltYWdlLmNhcHRpb259PC9oMz5cbiAgICAgICAgICAgICAgICAgIHtpbWFnZS5kZXNjcmlwdGlvbiAmJiA8cD57aW1hZ2UuZGVzY3JpcHRpb259PC9wPn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgIGNsYXNzTmFtZT1cImNhcm91c2VsLWJ1dHRvbiBjYXJvdXNlbC1idXR0b24tcHJldlwiIFxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVByZXZ9XG4gICAgICAgICAgYXJpYS1sYWJlbD1cIlByZXZpb3VzIHNsaWRlXCJcbiAgICAgICAgPlxuICAgICAgICAgIOKAuVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICBjbGFzc05hbWU9XCJjYXJvdXNlbC1idXR0b24gY2Fyb3VzZWwtYnV0dG9uLW5leHRcIiBcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVOZXh0fVxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJOZXh0IHNsaWRlXCJcbiAgICAgICAgPlxuICAgICAgICAgIOKAulxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcm91c2VsLXBhZ2luYXRpb25cIj5cbiAgICAgICAgICB7aW1hZ2VzLm1hcCgoXywgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgY2Fyb3VzZWwtZG90ICR7aW5kZXggPT09IGN1cnJlbnRJbmRleCA/ICdhY3RpdmUnIDogJyd9YH1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZ29Ub1NsaWRlKGluZGV4KX1cbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD17YEdvIHRvIHNsaWRlICR7aW5kZXggKyAxfWB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VDYXJvdXNlbDtcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==