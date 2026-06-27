webpackHotUpdate_N_E("pages/home/index",{

/***/ "./pages/home/index/index.js":
/*!***********************************!*\
  !*** ./pages/home/index/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/Header/Header */ "./components/Header/Header.js");
/* harmony import */ var _components_navbar_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/navbar/Navbar */ "./components/navbar/Navbar.js");
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/Footer/Footer */ "./components/Footer/Footer.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.css */ "./pages/home/index/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_5__);
var _this = undefined,
  _jsxFileName = "C:\\Users\\anton\\Documents\\Projects\\MurtWebsite\\pages\\home\\index\\index.js",
  _s = $RefreshSig$();
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var heroPills = [{
  label: 'Calendar',
  href: '/home/calendar'
}, {
  label: 'Book a Room',
  href: '/resources/room-reservations'
}, {
  label: 'P-Card Requests',
  href: '/resources/pcard-requests'
}, {
  label: 'Financial Inclusivity',
  href: '/resources/financial-inclusivity'
}, {
  label: 'Donate',
  href: 'https://riceconnect.rice.edu/donation/mcmurtry-college'
}];
var tripleStrip = [{
  src: '/static/general_pics/mcm-quad.png',
  caption: 'McMurtry College',
  subcap: 'Our home on campus'
}, {
  src: '/static/general_pics/oweek-coords.png',
  caption: 'O-Week Coordinators',
  subcap: 'Leading you through the week'
}, {
  src: '/static/general_pics/yurt-evening.png',
  caption: 'The Yurt at Night',
  subcap: 'Our award-winning dome'
}, {
  src: '/static/general_pics/yurt.jpg',
  caption: 'Inside the Yurt',
  subcap: 'The heart of the college'
}, {
  src: '/static/general_pics/mcm-event.png',
  caption: 'McMurtry O-Week',
  subcap: 'Every class, one home'
}, {
  src: '/static/oweek/2025-2026/images/hero/arrival.jpg',
  caption: 'O-Week Arrival',
  subcap: 'Move-in day energy'
}, {
  src: '/static/general_pics/accioweek.jpg',
  caption: 'AcciO-Week',
  subcap: 'A magical O-Week theme'
}, {
  src: '/static/general_pics/marshmalloweek.jpg',
  caption: 'MarshmallO-Week',
  subcap: 'Sweet memories at McMurtry'
}, {
  src: '/static/general_pics/mcscottishnight.jpg',
  caption: 'Scottish Night',
  subcap: 'McMurtry traditions'
}, {
  src: '/static/general_pics/ufoweek.jpg',
  caption: 'UFO-Week',
  subcap: 'Out of this world O-Week'
}];
var Home = function Home() {
  _s();
  var stripRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(null);
  var speedRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef({
    current: 1,
    target: 1
  });
  var dragRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef({
    active: false,
    startX: 0,
    startScroll: 0,
    moved: false,
    lastX: 0,
    lastT: 0,
    velocity: 0
  });
  var inertiaVelRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(0);
  var handleScroll = react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback(function () {
    var el = stripRef.current;
    if (!el) return;
    var half = el.scrollWidth / 2;
    if (!half) return;
    var quarter = half / 2;
    if (el.scrollLeft >= half + quarter) {
      el.scrollLeft = el.scrollLeft - half;
    } else if (el.scrollLeft <= quarter) {
      el.scrollLeft = el.scrollLeft + half;
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var el = stripRef.current;
    if (!el) return;
    var id = requestAnimationFrame(function () {
      var half = el.scrollWidth / 2;
      if (half > 0) el.scrollLeft = half;
    });
    return function () {
      return cancelAnimationFrame(id);
    };
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (false) {}
    var AUTO_SPEED = 1.2;
    var FRICTION = 0.94;
    var VEL_FLOOR = 0.05;
    var raf;
    var scrollAcc = null;
    var tick = function tick() {
      var el = stripRef.current;
      if (el && !dragRef.current.active) {
        var s = speedRef.current;
        s.current = s.target;
        if (scrollAcc === null) scrollAcc = el.scrollLeft;
        if (Math.abs(scrollAcc - el.scrollLeft) > 1) scrollAcc = el.scrollLeft;
        if (Math.abs(inertiaVelRef.current) > VEL_FLOOR) {
          scrollAcc += inertiaVelRef.current;
          inertiaVelRef.current *= FRICTION;
        } else {
          inertiaVelRef.current = 0;
          scrollAcc += AUTO_SPEED * s.current;
        }
        el.scrollLeft = scrollAcc;
      }
      raf = window.requestAnimationFrame(tick);
    };
    raf = window.requestAnimationFrame(tick);
    return function () {
      return window.cancelAnimationFrame(raf);
    };
  }, []);
  var onPointerDown = function onPointerDown(e) {
    var el = stripRef.current;
    if (!el) return;
    dragRef.current = {
      active: true,
      startX: e.clientX,
      startScroll: el.scrollLeft,
      moved: false,
      lastX: e.clientX,
      lastT: e.timeStamp || performance.now(),
      velocity: 0
    };
    inertiaVelRef.current = 0;
    el.setPointerCapture && el.setPointerCapture(e.pointerId);
    el.classList.add('mc-strip-dragging');
  };
  var onPointerMove = function onPointerMove(e) {
    var d = dragRef.current;
    if (!d.active) return;
    var el = stripRef.current;
    if (!el) return;
    var dx = e.clientX - d.startX;
    if (Math.abs(dx) > 5) d.moved = true;
    var instX = e.clientX - d.lastX;
    el.scrollLeft -= instX;
    var now = e.timeStamp || performance.now();
    var dt = Math.max(now - d.lastT, 1);
    d.velocity = -instX * (16.67 / dt);
    d.lastX = e.clientX;
    d.lastT = now;
  };
  var onPointerUp = function onPointerUp(e) {
    var el = stripRef.current;
    var d = dragRef.current;
    var moved = d.moved;
    var releaseVel = d.velocity;
    d.active = false;
    if (!el) return;
    try {
      el.releasePointerCapture && el.releasePointerCapture(e.pointerId);
    } catch (_) {}
    el.classList.remove('mc-strip-dragging');
    inertiaVelRef.current = Math.max(-40, Math.min(40, releaseVel));
    if (moved) {
      var block = function block(ev) {
        ev.preventDefault();
        ev.stopPropagation();
      };
      el.addEventListener('click', block, {
        capture: true,
        once: true
      });
      setTimeout(function () {
        return el.removeEventListener('click', block, true);
      }, 0);
    }
  };
  return __jsx("div", {
    className: "page page-light",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 9
    }
  }, __jsx(_components_Header_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 13
    }
  }), __jsx(_components_navbar_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "intro-mc",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 13
    }
  }, __jsx("section", {
    className: "mc-hero",
    "aria-label": "McMurtry College hero",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "mc-hero-bg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/static/general_pics/mcm-quad.png",
    alt: "",
    className: "mc-hero-bg-img",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 25
    }
  }), __jsx("div", {
    className: "mc-hero-bg-overlay",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 25
    }
  })), __jsx("h1", {
    className: "mc-hero-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "mc-hero-title-word",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 25
    }
  }, "McMurtry"), __jsx("img", {
    src: "/static/logos/hero-crest.png",
    alt: "",
    className: "mc-hero-crest",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 25
    }
  }), __jsx("span", {
    className: "mc-hero-title-word",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 25
    }
  }, "College")), __jsx("nav", {
    className: "mc-hero-pills",
    "aria-label": "Quick links",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 21
    }
  }, heroPills.map(function (pill) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: pill.href,
      key: pill.label,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 29
      }
    }, __jsx("a", {
      className: "mc-hero-pill",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 33
      }
    }, pill.label));
  })), __jsx("img", {
    src: "/static/logos/yurt-band.png",
    alt: "",
    className: "mc-yurt-band",
    "aria-hidden": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 21
    }
  })), __jsx("section", {
    className: "mc-strip",
    "aria-label": "College highlights",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "mc-strip-row",
    ref: stripRef,
    onScroll: handleScroll,
    onPointerDown: onPointerDown,
    onPointerMove: onPointerMove,
    onPointerUp: onPointerUp,
    onPointerCancel: onPointerUp,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 21
    }
  }, [].concat(tripleStrip, tripleStrip).map(function (item, i) {
    return __jsx("figure", {
      className: "mc-strip-card",
      key: "".concat(item.caption, "-").concat(i),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "mc-strip-image-wrap",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 33
      }
    }, __jsx("img", {
      src: item.src,
      alt: i < tripleStrip.length ? item.caption : '',
      className: "mc-strip-image",
      draggable: false,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 37
      }
    })), __jsx("figcaption", {
      className: "mc-strip-caption",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 33
      }
    }, __jsx("span", {
      className: "mc-strip-caption-main",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 37
      }
    }, item.caption), __jsx("span", {
      className: "mc-strip-caption-sub",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 37
      }
    }, item.subcap)));
  })), __jsx("div", {
    className: "mc-strip-fade mc-strip-fade-left",
    "aria-hidden": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: "mc-strip-fade mc-strip-fade-right",
    "aria-hidden": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 21
    }
  })), __jsx("section", {
    className: "mc-find-us",
    "aria-label": "Find us at Rice",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "mc-find-us-inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 21
    }
  }, __jsx("h2", {
    className: "mc-find-us-heading",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 25
    }
  }, "Find Us at Rice"), __jsx("p", {
    className: "mc-find-us-address",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 25
    }
  }, "McMurtry College \xB7 1605 Rice Blvd \xB7 Houston, TX 77005"), __jsx("div", {
    className: "mc-find-us-map-wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 25
    }
  }, __jsx("iframe", {
    title: "Map to McMurtry College at Rice University",
    className: "mc-find-us-map",
    src: "https://map.concept3d.com/?id=473#!ce/12631?m/119194?s/?sbc/",
    loading: "lazy",
    referrerPolicy: "no-referrer-when-downgrade",
    allowFullScreen: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 29
    }
  })), __jsx("a", {
    className: "mc-find-us-cta",
    href: "https://www.google.com/maps/dir/?api=1&destination=McMurtry+College+Rice+University+1605+Rice+Blvd+Houston+TX+77005",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 25
    }
  }, "Get Directions", __jsx("span", {
    "aria-hidden": "true",
    className: "mc-find-us-cta-arrow",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 29
    }
  }, "\u203A")))), __jsx(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 17
    }
  })));
};
_s(Home, "HOUmrBOaaguJ49onpNqqjKmOly0=");
_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);
var _c;
$RefreshReg$(_c, "Home");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaG9tZS9pbmRleC9pbmRleC5qcyJdLCJuYW1lcyI6WyJoZXJvUGlsbHMiLCJsYWJlbCIsImhyZWYiLCJ0cmlwbGVTdHJpcCIsInNyYyIsImNhcHRpb24iLCJzdWJjYXAiLCJIb21lIiwiX3MiLCJzdHJpcFJlZiIsIlJlYWN0IiwidXNlUmVmIiwic3BlZWRSZWYiLCJjdXJyZW50IiwidGFyZ2V0IiwiZHJhZ1JlZiIsImFjdGl2ZSIsInN0YXJ0WCIsInN0YXJ0U2Nyb2xsIiwibW92ZWQiLCJsYXN0WCIsImxhc3RUIiwidmVsb2NpdHkiLCJpbmVydGlhVmVsUmVmIiwiaGFuZGxlU2Nyb2xsIiwidXNlQ2FsbGJhY2siLCJlbCIsImhhbGYiLCJzY3JvbGxXaWR0aCIsInF1YXJ0ZXIiLCJzY3JvbGxMZWZ0IiwidXNlRWZmZWN0IiwiaWQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsIkFVVE9fU1BFRUQiLCJGUklDVElPTiIsIlZFTF9GTE9PUiIsInJhZiIsInNjcm9sbEFjYyIsInRpY2siLCJzIiwiTWF0aCIsImFicyIsIndpbmRvdyIsIm9uUG9pbnRlckRvd24iLCJlIiwiY2xpZW50WCIsInRpbWVTdGFtcCIsInBlcmZvcm1hbmNlIiwibm93Iiwic2V0UG9pbnRlckNhcHR1cmUiLCJwb2ludGVySWQiLCJjbGFzc0xpc3QiLCJhZGQiLCJvblBvaW50ZXJNb3ZlIiwiZCIsImR4IiwiaW5zdFgiLCJkdCIsIm1heCIsIm9uUG9pbnRlclVwIiwicmVsZWFzZVZlbCIsInJlbGVhc2VQb2ludGVyQ2FwdHVyZSIsIl8iLCJyZW1vdmUiLCJtaW4iLCJibG9jayIsImV2IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJhZGRFdmVudExpc3RlbmVyIiwiY2FwdHVyZSIsIm9uY2UiLCJzZXRUaW1lb3V0IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIl9fanN4IiwiY2xhc3NOYW1lIiwiX19zZWxmIiwiX3RoaXMiLCJfX3NvdXJjZSIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsIkhlYWRlciIsIlNpdGVOYXZiYXIiLCJhbHQiLCJtYXAiLCJwaWxsIiwiTGluayIsImtleSIsInJlZiIsIm9uU2Nyb2xsIiwib25Qb2ludGVyQ2FuY2VsIiwiY29uY2F0IiwiaXRlbSIsImkiLCJsZW5ndGgiLCJkcmFnZ2FibGUiLCJ0aXRsZSIsImxvYWRpbmciLCJyZWZlcnJlclBvbGljeSIsImFsbG93RnVsbFNjcmVlbiIsInJlbCIsIlNpdGVGb290ZXIiLCJfYyIsIiRSZWZyZXNoUmVnJCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ1o7QUFDMEI7QUFDSTtBQUNBO0FBQ3RDO0FBRXJCLElBQU1BLFNBQVMsR0FBRyxDQUNkO0VBQUVDLEtBQUssRUFBRSxVQUFVO0VBQWVDLElBQUksRUFBRTtBQUFpQixDQUFDLEVBQzFEO0VBQUVELEtBQUssRUFBRSxhQUFhO0VBQVlDLElBQUksRUFBRTtBQUErQixDQUFDLEVBQ3hFO0VBQUVELEtBQUssRUFBRSxpQkFBaUI7RUFBUUMsSUFBSSxFQUFFO0FBQTRCLENBQUMsRUFDckU7RUFBRUQsS0FBSyxFQUFFLHVCQUF1QjtFQUFFQyxJQUFJLEVBQUU7QUFBbUMsQ0FBQyxFQUM1RTtFQUFFRCxLQUFLLEVBQUUsUUFBUTtFQUFpQkMsSUFBSSxFQUFFO0FBQXlELENBQUMsQ0FDckc7QUFFRCxJQUFNQyxXQUFXLEdBQUcsQ0FDaEI7RUFBRUMsR0FBRyxFQUFFLG1DQUFtQztFQUFPQyxPQUFPLEVBQUUsa0JBQWtCO0VBQVVDLE1BQU0sRUFBRTtBQUFxQixDQUFDLEVBQ3BIO0VBQUVGLEdBQUcsRUFBRSx1Q0FBdUM7RUFBRUMsT0FBTyxFQUFFLHFCQUFxQjtFQUFPQyxNQUFNLEVBQUU7QUFBK0IsQ0FBQyxFQUM3SDtFQUFFRixHQUFHLEVBQUUsdUNBQXVDO0VBQUVDLE9BQU8sRUFB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SUFBSTtBQUFBbUcsRUFBQSxHQUFKbkcsSUFBSTtBQW9NS0EsbUVBQUksRUFBQztBQUFBLElBQUFtRyxFQUFBO0FBQUFDLFlBQUEsQ0FBQUQsRUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ob21lL2luZGV4LjViNGEzOGFmMjE1N2MxNjFjOWRlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyJztcbmltcG9ydCBTaXRlTmF2YmFyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvbmF2YmFyL05hdmJhcic7XG5pbXBvcnQgU2l0ZUZvb3RlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXInO1xuaW1wb3J0ICcuL2luZGV4LmNzcyc7XG5cbmNvbnN0IGhlcm9QaWxscyA9IFtcbiAgICB7IGxhYmVsOiAnQ2FsZW5kYXInLCAgICAgICAgICAgICAgaHJlZjogJy9ob21lL2NhbGVuZGFyJyB9LFxuICAgIHsgbGFiZWw6ICdCb29rIGEgUm9vbScsICAgICAgICAgICBocmVmOiAnL3Jlc291cmNlcy9yb29tLXJlc2VydmF0aW9ucycgfSxcbiAgICB7IGxhYmVsOiAnUC1DYXJkIFJlcXVlc3RzJywgICAgICAgaHJlZjogJy9yZXNvdXJjZXMvcGNhcmQtcmVxdWVzdHMnIH0sXG4gICAgeyBsYWJlbDogJ0ZpbmFuY2lhbCBJbmNsdXNpdml0eScsIGhyZWY6ICcvcmVzb3VyY2VzL2ZpbmFuY2lhbC1pbmNsdXNpdml0eScgfSxcbiAgICB7IGxhYmVsOiAnRG9uYXRlJywgICAgICAgICAgICAgICAgaHJlZjogJ2h0dHBzOi8vcmljZWNvbm5lY3QucmljZS5lZHUvZG9uYXRpb24vbWNtdXJ0cnktY29sbGVnZScgfVxuXTtcblxuY29uc3QgdHJpcGxlU3RyaXAgPSBbXG4gICAgeyBzcmM6ICcvc3RhdGljL2dlbmVyYWxfcGljcy9tY20tcXVhZC5wbmcnLCAgICAgIGNhcHRpb246ICdNY011cnRyeSBDb2xsZWdlJywgICAgICAgICBzdWJjYXA6ICdPdXIgaG9tZSBvbiBjYW1wdXMnIH0sXG4gICAgeyBzcmM6ICcvc3RhdGljL2dlbmVyYWxfcGljcy9vd2Vlay1jb29yZHMucG5nJywgY2FwdGlvbjogJ08tV2VlayBDb29yZGluYXRvcnMnLCAgICAgIHN1YmNhcDogJ0xlYWRpbmcgeW91IHRocm91Z2ggdGhlIHdlZWsnIH0sXG4gICAgeyBzcmM6ICcvc3RhdGljL2dlbmVyYWxfcGljcy95dXJ0LWV2ZW5pbmcucG5nJywgY2FwdGlvbjogJ1RoZSBZdXJ0IGF0IE5pZ2h0JywgICAgICAgIHN1YmNhcDogJ091ciBhd2FyZC13aW5uaW5nIGRvbWUnIH0sXG4gICAgeyBzcmM6ICcvc3RhdGljL2dlbmVyYWxfcGljcy95dXJ0LmpwZycsICAgICAgICAgY2FwdGlvbjogJ0luc2lkZSB0aGUgWXVydCcsICAgICAgICAgIHN1YmNhcDogJ1RoZSBoZWFydCBvZiB0aGUgY29sbGVnZScgfSxcbiAgICB7IHNyYzogJy9zdGF0aWMvZ2VuZXJhbF9waWNzL21jbS1ldmVudC5wbmcnLCAgICBjYXB0aW9uOiAnTWNNdXJ0cnkgTy1XZWVrJywgICAgICAgICAgc3ViY2FwOiAnRXZlcnkgY2xhc3MsIG9uZSBob21lJyB9LFxuICAgIHsgc3JjOiAnL3N0YXRpYy9vd2Vlay8yMDI1LTIwMjYvaW1hZ2VzL2hlcm8vYXJyaXZhbC5qcGcnLCBjYXB0aW9uOiAnTy1XZWVrIEFycml2YWwnLCAgICAgICAgICAgc3ViY2FwOiAnTW92ZS1pbiBkYXkgZW5lcmd5JyB9LFxuICAgIHsgc3JjOiAnL3N0YXRpYy9nZW5lcmFsX3BpY3MvYWNjaW93ZWVrLmpwZycsICAgICAgICAgICAgICBjYXB0aW9uOiAnQWNjaU8tV2VlaycsICAgICAgICAgICAgICAgc3ViY2FwOiAnQSBtYWdpY2FsIE8tV2VlayB0aGVtZScgfSxcbiAgICB7IHNyYzogJy9zdGF0aWMvZ2VuZXJhbF9waWNzL21hcnNobWFsbG93ZWVrLmpwZycsICAgICAgICAgY2FwdGlvbjogJ01hcnNobWFsbE8tV2VlaycsICAgICAgICAgIHN1YmNhcDogJ1N3ZWV0IG1lbW9yaWVzIGF0IE1jTXVydHJ5JyB9LFxuICAgIHsgc3JjOiAnL3N0YXRpYy9nZW5lcmFsX3BpY3MvbWNzY290dGlzaG5pZ2h0LmpwZycsICAgICAgICBjYXB0aW9uOiAnU2NvdHRpc2ggTmlnaHQnLCAgICAgICAgICAgc3ViY2FwOiAnTWNNdXJ0cnkgdHJhZGl0aW9ucycgfSxcbiAgICB7IHNyYzogJy9zdGF0aWMvZ2VuZXJhbF9waWNzL3Vmb3dlZWsuanBnJywgICAgICAgICAgICAgICAgY2FwdGlvbjogJ1VGTy1XZWVrJywgICAgICAgICAgICAgICAgIHN1YmNhcDogJ091dCBvZiB0aGlzIHdvcmxkIE8tV2VlaycgfSxcbl07XG5cblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgICBjb25zdCBzdHJpcFJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgICBjb25zdCBzcGVlZFJlZiA9IFJlYWN0LnVzZVJlZih7IGN1cnJlbnQ6IDEsIHRhcmdldDogMSB9KTtcbiAgICBjb25zdCBkcmFnUmVmID0gUmVhY3QudXNlUmVmKHtcbiAgICAgICAgYWN0aXZlOiBmYWxzZSwgc3RhcnRYOiAwLCBzdGFydFNjcm9sbDogMCxcbiAgICAgICAgbW92ZWQ6IGZhbHNlLCBsYXN0WDogMCwgbGFzdFQ6IDAsIHZlbG9jaXR5OiAwXG4gICAgfSk7XG4gICAgY29uc3QgaW5lcnRpYVZlbFJlZiA9IFJlYWN0LnVzZVJlZigwKTtcblxuICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgY29uc3QgZWwgPSBzdHJpcFJlZi5jdXJyZW50O1xuICAgICAgICBpZiAoIWVsKSByZXR1cm47XG4gICAgICAgIGNvbnN0IGhhbGYgPSBlbC5zY3JvbGxXaWR0aCAvIDI7XG4gICAgICAgIGlmICghaGFsZikgcmV0dXJuO1xuICAgICAgICBjb25zdCBxdWFydGVyID0gaGFsZiAvIDI7XG4gICAgICAgIGlmIChlbC5zY3JvbGxMZWZ0ID49IGhhbGYgKyBxdWFydGVyKSB7XG4gICAgICAgICAgICBlbC5zY3JvbGxMZWZ0ID0gZWwuc2Nyb2xsTGVmdCAtIGhhbGY7XG4gICAgICAgIH0gZWxzZSBpZiAoZWwuc2Nyb2xsTGVmdCA8PSBxdWFydGVyKSB7XG4gICAgICAgICAgICBlbC5zY3JvbGxMZWZ0ID0gZWwuc2Nyb2xsTGVmdCArIGhhbGY7XG4gICAgICAgIH1cbiAgICB9LCBbXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBlbCA9IHN0cmlwUmVmLmN1cnJlbnQ7XG4gICAgICAgIGlmICghZWwpIHJldHVybjtcbiAgICAgICAgY29uc3QgaWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaGFsZiA9IGVsLnNjcm9sbFdpZHRoIC8gMjtcbiAgICAgICAgICAgIGlmIChoYWxmID4gMCkgZWwuc2Nyb2xsTGVmdCA9IGhhbGY7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gKCkgPT4gY2FuY2VsQW5pbWF0aW9uRnJhbWUoaWQpO1xuICAgIH0sIFtdKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuO1xuICAgICAgICBjb25zdCBBVVRPX1NQRUVEID0gMS4yO1xuICAgICAgICBjb25zdCBGUklDVElPTiA9IDAuOTQ7XG4gICAgICAgIGNvbnN0IFZFTF9GTE9PUiA9IDAuMDU7XG4gICAgICAgIGxldCByYWY7XG4gICAgICAgIGxldCBzY3JvbGxBY2MgPSBudWxsO1xuICAgICAgICBjb25zdCB0aWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZWwgPSBzdHJpcFJlZi5jdXJyZW50O1xuICAgICAgICAgICAgaWYgKGVsICYmICFkcmFnUmVmLmN1cnJlbnQuYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcyA9IHNwZWVkUmVmLmN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgcy5jdXJyZW50ID0gcy50YXJnZXQ7XG4gICAgICAgICAgICAgICAgaWYgKHNjcm9sbEFjYyA9PT0gbnVsbCkgc2Nyb2xsQWNjID0gZWwuc2Nyb2xsTGVmdDtcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMoc2Nyb2xsQWNjIC0gZWwuc2Nyb2xsTGVmdCkgPiAxKSBzY3JvbGxBY2MgPSBlbC5zY3JvbGxMZWZ0O1xuICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhpbmVydGlhVmVsUmVmLmN1cnJlbnQpID4gVkVMX0ZMT09SKSB7XG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbEFjYyArPSBpbmVydGlhVmVsUmVmLmN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgICAgIGluZXJ0aWFWZWxSZWYuY3VycmVudCAqPSBGUklDVElPTjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpbmVydGlhVmVsUmVmLmN1cnJlbnQgPSAwO1xuICAgICAgICAgICAgICAgICAgICBzY3JvbGxBY2MgKz0gQVVUT19TUEVFRCAqIHMuY3VycmVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWwuc2Nyb2xsTGVmdCA9IHNjcm9sbEFjYztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJhZiA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGljayk7XG4gICAgICAgIH07XG4gICAgICAgIHJhZiA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGljayk7XG4gICAgICAgIHJldHVybiAoKSA9PiB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUocmFmKTtcbiAgICB9LCBbXSk7XG5cbiAgICBjb25zdCBvblBvaW50ZXJEb3duID0gKGUpID0+IHtcbiAgICAgICAgY29uc3QgZWwgPSBzdHJpcFJlZi5jdXJyZW50O1xuICAgICAgICBpZiAoIWVsKSByZXR1cm47XG4gICAgICAgIGRyYWdSZWYuY3VycmVudCA9IHtcbiAgICAgICAgICAgIGFjdGl2ZTogdHJ1ZSwgc3RhcnRYOiBlLmNsaWVudFgsIHN0YXJ0U2Nyb2xsOiBlbC5zY3JvbGxMZWZ0LFxuICAgICAgICAgICAgbW92ZWQ6IGZhbHNlLCBsYXN0WDogZS5jbGllbnRYLFxuICAgICAgICAgICAgbGFzdFQ6IGUudGltZVN0YW1wIHx8IHBlcmZvcm1hbmNlLm5vdygpLCB2ZWxvY2l0eTogMFxuICAgICAgICB9O1xuICAgICAgICBpbmVydGlhVmVsUmVmLmN1cnJlbnQgPSAwO1xuICAgICAgICBlbC5zZXRQb2ludGVyQ2FwdHVyZSAmJiBlbC5zZXRQb2ludGVyQ2FwdHVyZShlLnBvaW50ZXJJZCk7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ21jLXN0cmlwLWRyYWdnaW5nJyk7XG4gICAgfTtcbiAgICBjb25zdCBvblBvaW50ZXJNb3ZlID0gKGUpID0+IHtcbiAgICAgICAgY29uc3QgZCA9IGRyYWdSZWYuY3VycmVudDtcbiAgICAgICAgaWYgKCFkLmFjdGl2ZSkgcmV0dXJuO1xuICAgICAgICBjb25zdCBlbCA9IHN0cmlwUmVmLmN1cnJlbnQ7XG4gICAgICAgIGlmICghZWwpIHJldHVybjtcbiAgICAgICAgY29uc3QgZHggPSBlLmNsaWVudFggLSBkLnN0YXJ0WDtcbiAgICAgICAgaWYgKE1hdGguYWJzKGR4KSA+IDUpIGQubW92ZWQgPSB0cnVlO1xuICAgICAgICBjb25zdCBpbnN0WCA9IGUuY2xpZW50WCAtIGQubGFzdFg7XG4gICAgICAgIGVsLnNjcm9sbExlZnQgLT0gaW5zdFg7XG4gICAgICAgIGNvbnN0IG5vdyA9IGUudGltZVN0YW1wIHx8IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICBjb25zdCBkdCA9IE1hdGgubWF4KG5vdyAtIGQubGFzdFQsIDEpO1xuICAgICAgICBkLnZlbG9jaXR5ID0gLWluc3RYICogKDE2LjY3IC8gZHQpO1xuICAgICAgICBkLmxhc3RYID0gZS5jbGllbnRYO1xuICAgICAgICBkLmxhc3RUID0gbm93O1xuICAgIH07XG4gICAgY29uc3Qgb25Qb2ludGVyVXAgPSAoZSkgPT4ge1xuICAgICAgICBjb25zdCBlbCA9IHN0cmlwUmVmLmN1cnJlbnQ7XG4gICAgICAgIGNvbnN0IGQgPSBkcmFnUmVmLmN1cnJlbnQ7XG4gICAgICAgIGNvbnN0IG1vdmVkID0gZC5tb3ZlZDtcbiAgICAgICAgY29uc3QgcmVsZWFzZVZlbCA9IGQudmVsb2NpdHk7XG4gICAgICAgIGQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGlmICghZWwpIHJldHVybjtcbiAgICAgICAgdHJ5IHsgZWwucmVsZWFzZVBvaW50ZXJDYXB0dXJlICYmIGVsLnJlbGVhc2VQb2ludGVyQ2FwdHVyZShlLnBvaW50ZXJJZCk7IH0gY2F0Y2ggKF8pIHt9XG4gICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ21jLXN0cmlwLWRyYWdnaW5nJyk7XG4gICAgICAgIGluZXJ0aWFWZWxSZWYuY3VycmVudCA9IE1hdGgubWF4KC00MCwgTWF0aC5taW4oNDAsIHJlbGVhc2VWZWwpKTtcbiAgICAgICAgaWYgKG1vdmVkKSB7XG4gICAgICAgICAgICBjb25zdCBibG9jayA9IChldikgPT4geyBldi5wcmV2ZW50RGVmYXVsdCgpOyBldi5zdG9wUHJvcGFnYXRpb24oKTsgfTtcbiAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYmxvY2ssIHsgY2FwdHVyZTogdHJ1ZSwgb25jZTogdHJ1ZSB9KTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBibG9jaywgdHJ1ZSksIDApO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYWdlIHBhZ2UtbGlnaHQnPlxuICAgICAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICAgICAgPFNpdGVOYXZiYXIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbnRyby1tYyc+XG5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J21jLWhlcm8nIGFyaWEtbGFiZWw9J01jTXVydHJ5IENvbGxlZ2UgaGVybyc+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYy1oZXJvLWJnJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPScvc3RhdGljL2dlbmVyYWxfcGljcy9tY20tcXVhZC5wbmcnIGFsdD0nJyBjbGFzc05hbWU9J21jLWhlcm8tYmctaW1nJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21jLWhlcm8tYmctb3ZlcmxheScgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J21jLWhlcm8tdGl0bGUnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdtYy1oZXJvLXRpdGxlLXdvcmQnPk1jTXVydHJ5PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9Jy9zdGF0aWMvbG9nb3MvaGVyby1jcmVzdC5wbmcnIGFsdD0nJyBjbGFzc05hbWU9J21jLWhlcm8tY3Jlc3QnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J21jLWhlcm8tdGl0bGUtd29yZCc+Q29sbGVnZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9J21jLWhlcm8tcGlsbHMnIGFyaWEtbGFiZWw9J1F1aWNrIGxpbmtzJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtoZXJvUGlsbHMubWFwKChwaWxsKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17cGlsbC5ocmVmfSBrZXk9e3BpbGwubGFiZWx9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J21jLWhlcm8tcGlsbCc+e3BpbGwubGFiZWx9PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9Jy9zdGF0aWMvbG9nb3MveXVydC1iYW5kLnBuZycgYWx0PScnIGNsYXNzTmFtZT0nbWMteXVydC1iYW5kJyBhcmlhLWhpZGRlbj0ndHJ1ZScgLz5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J21jLXN0cmlwJyBhcmlhLWxhYmVsPSdDb2xsZWdlIGhpZ2hsaWdodHMnPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J21jLXN0cmlwLXJvdydcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17c3RyaXBSZWZ9XG4gICAgICAgICAgICAgICAgICAgICAgICBvblNjcm9sbD17aGFuZGxlU2Nyb2xsfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25Qb2ludGVyRG93bj17b25Qb2ludGVyRG93bn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uUG9pbnRlck1vdmU9e29uUG9pbnRlck1vdmV9XG4gICAgICAgICAgICAgICAgICAgICAgICBvblBvaW50ZXJVcD17b25Qb2ludGVyVXB9XG4gICAgICAgICAgICAgICAgICAgICAgICBvblBvaW50ZXJDYW5jZWw9e29uUG9pbnRlclVwfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Wy4uLnRyaXBsZVN0cmlwLCAuLi50cmlwbGVTdHJpcF0ubWFwKChpdGVtLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9J21jLXN0cmlwLWNhcmQnIGtleT17YCR7aXRlbS5jYXB0aW9ufS0ke2l9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYy1zdHJpcC1pbWFnZS13cmFwJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2l0ZW0uc3JjfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17aSA8IHRyaXBsZVN0cmlwLmxlbmd0aCA/IGl0ZW0uY2FwdGlvbiA6ICcnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbWMtc3RyaXAtaW1hZ2UnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJhZ2dhYmxlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmlnY2FwdGlvbiBjbGFzc05hbWU9J21jLXN0cmlwLWNhcHRpb24nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdtYy1zdHJpcC1jYXB0aW9uLW1haW4nPntpdGVtLmNhcHRpb259PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdtYy1zdHJpcC1jYXB0aW9uLXN1Yic+e2l0ZW0uc3ViY2FwfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9maWdjYXB0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWMtc3RyaXAtZmFkZSBtYy1zdHJpcC1mYWRlLWxlZnQnIGFyaWEtaGlkZGVuPSd0cnVlJyAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWMtc3RyaXAtZmFkZSBtYy1zdHJpcC1mYWRlLXJpZ2h0JyBhcmlhLWhpZGRlbj0ndHJ1ZScgLz5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J21jLWZpbmQtdXMnIGFyaWEtbGFiZWw9J0ZpbmQgdXMgYXQgUmljZSc+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYy1maW5kLXVzLWlubmVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J21jLWZpbmQtdXMtaGVhZGluZyc+RmluZCBVcyBhdCBSaWNlPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbWMtZmluZC11cy1hZGRyZXNzJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNY011cnRyeSBDb2xsZWdlICZtaWRkb3Q7IDE2MDUgUmljZSBCbHZkICZtaWRkb3Q7IEhvdXN0b24sIFRYIDc3MDA1XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWMtZmluZC11cy1tYXAtd3JhcCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlmcmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT0nTWFwIHRvIE1jTXVydHJ5IENvbGxlZ2UgYXQgUmljZSBVbml2ZXJzaXR5J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J21jLWZpbmQtdXMtbWFwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9J2h0dHBzOi8vbWFwLmNvbmNlcHQzZC5jb20vP2lkPTQ3MyMhY2UvMTI2MzE/bS8xMTkxOTQ/cy8/c2JjLydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZz0nbGF6eSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmZXJyZXJQb2xpY3k9J25vLXJlZmVycmVyLXdoZW4tZG93bmdyYWRlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxvd0Z1bGxTY3JlZW49JydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbWMtZmluZC11cy1jdGEnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2Rpci8/YXBpPTEmZGVzdGluYXRpb249TWNNdXJ0cnkrQ29sbGVnZStSaWNlK1VuaXZlcnNpdHkrMTYwNStSaWNlK0JsdmQrSG91c3RvbitUWCs3NzAwNSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWw9J25vb3BlbmVyIG5vcmVmZXJyZXInXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgR2V0IERpcmVjdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj0ndHJ1ZScgY2xhc3NOYW1lPSdtYy1maW5kLXVzLWN0YS1hcnJvdyc+JnJzYXF1bzs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICAgICAgICAgIDxTaXRlRm9vdGVyIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwic291cmNlUm9vdCI6IiJ9