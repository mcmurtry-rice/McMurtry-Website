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

/*
 * Home page — infinite auto-scrolling image strip.
 *
 * IMPORTANT: The strip scroll speed is controlled by AUTO_SPEED (px/frame) inside
 * the rAF loop in the useEffect below — NOT by CSS or any carousel component prop.
 * Mobile and desktop speeds are set separately:
 *   mobile (≤768px): 0.5 px/frame
 *   desktop:         1.2 px/frame
 * If the strip feels too fast or slow on mobile, adjust the 0.5 value there.
 */
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
    var AUTO_SPEED = window.matchMedia('(max-width: 768px)').matches ? 0.5 : 1.2;
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
      lineNumber: 146,
      columnNumber: 9
    }
  }, __jsx(_components_Header_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 13
    }
  }), __jsx(_components_navbar_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "intro-mc",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 13
    }
  }, __jsx("section", {
    className: "mc-hero",
    "aria-label": "McMurtry College hero",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "mc-hero-bg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/static/general_pics/mcm-quad.png",
    alt: "",
    className: "mc-hero-bg-img",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 25
    }
  }), __jsx("div", {
    className: "mc-hero-bg-overlay",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 25
    }
  })), __jsx("h1", {
    className: "mc-hero-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "mc-hero-title-word",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 25
    }
  }, "McMurtry"), __jsx("img", {
    src: "/static/logos/hero-crest.png",
    alt: "",
    className: "mc-hero-crest",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 25
    }
  }), __jsx("span", {
    className: "mc-hero-title-word",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 25
    }
  }, "College")), __jsx("nav", {
    className: "mc-hero-pills",
    "aria-label": "Quick links",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 21
    }
  }, heroPills.map(function (pill) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: pill.href,
      key: pill.label,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 29
      }
    }, __jsx("a", {
      className: "mc-hero-pill",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
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
      lineNumber: 168,
      columnNumber: 21
    }
  })), __jsx("section", {
    className: "mc-strip",
    "aria-label": "College highlights",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
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
      lineNumber: 172,
      columnNumber: 21
    }
  }, [].concat(tripleStrip, tripleStrip).map(function (item, i) {
    return __jsx("figure", {
      className: "mc-strip-card",
      key: "".concat(item.caption, "-").concat(i),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "mc-strip-image-wrap",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183,
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
        lineNumber: 184,
        columnNumber: 37
      }
    })), __jsx("figcaption", {
      className: "mc-strip-caption",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 33
      }
    }, __jsx("span", {
      className: "mc-strip-caption-main",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 37
      }
    }, item.caption), __jsx("span", {
      className: "mc-strip-caption-sub",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 37
      }
    }, item.subcap)));
  })), __jsx("div", {
    className: "mc-strip-fade mc-strip-fade-left",
    "aria-hidden": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: "mc-strip-fade mc-strip-fade-right",
    "aria-hidden": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 21
    }
  })), __jsx("section", {
    className: "mc-find-us",
    "aria-label": "Find us at Rice",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "mc-find-us-inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 21
    }
  }, __jsx("h2", {
    className: "mc-find-us-heading",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 25
    }
  }, "Find Us at Rice"), __jsx("p", {
    className: "mc-find-us-address",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 25
    }
  }, "McMurtry College \xB7 1605 Rice Blvd \xB7 Houston, TX 77005"), __jsx("div", {
    className: "mc-find-us-map-wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
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
      lineNumber: 209,
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
      lineNumber: 218,
      columnNumber: 25
    }
  }, "Get Directions", __jsx("span", {
    "aria-hidden": "true",
    className: "mc-find-us-cta-arrow",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 29
    }
  }, "\u203A")))), __jsx(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaG9tZS9pbmRleC9pbmRleC5qcyJdLCJuYW1lcyI6WyJoZXJvUGlsbHMiLCJsYWJlbCIsImhyZWYiLCJ0cmlwbGVTdHJpcCIsInNyYyIsImNhcHRpb24iLCJzdWJjYXAiLCJIb21lIiwiX3MiLCJzdHJpcFJlZiIsIlJlYWN0IiwidXNlUmVmIiwic3BlZWRSZWYiLCJjdXJyZW50IiwidGFyZ2V0IiwiZHJhZ1JlZiIsImFjdGl2ZSIsInN0YXJ0WCIsInN0YXJ0U2Nyb2xsIiwibW92ZWQiLCJsYXN0WCIsImxhc3RUIiwidmVsb2NpdHkiLCJpbmVydGlhVmVsUmVmIiwiaGFuZGxlU2Nyb2xsIiwidXNlQ2FsbGJhY2siLCJlbCIsImhhbGYiLCJzY3JvbGxXaWR0aCIsInF1YXJ0ZXIiLCJzY3JvbGxMZWZ0IiwidXNlRWZmZWN0IiwiaWQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsIkFVVE9fU1BFRUQiLCJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsIkZSSUNUSU9OIiwiVkVMX0ZMT09SIiwicmFmIiwic2Nyb2xsQWNjIiwidGljayIsInMiLCJNYXRoIiwiYWJzIiwib25Qb2ludGVyRG93biIsImUiLCJjbGllbnRYIiwidGltZVN0YW1wIiwicGVyZm9ybWFuY2UiLCJub3ciLCJzZXRQb2ludGVyQ2FwdHVyZSIsInBvaW50ZXJJZCIsImNsYXNzTGlzdCIsImFkZCIsIm9uUG9pbnRlck1vdmUiLCJkIiwiZHgiLCJpbnN0WCIsImR0IiwibWF4Iiwib25Qb2ludGVyVXAiLCJyZWxlYXNlVmVsIiwicmVsZWFzZVBvaW50ZXJDYXB0dXJlIiwiXyIsInJlbW92ZSIsIm1pbiIsImJsb2NrIiwiZXYiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYXB0dXJlIiwib25jZSIsInNldFRpbWVvdXQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiX19qc3giLCJjbGFzc05hbWUiLCJfX3NlbGYiLCJfdGhpcyIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiSGVhZGVyIiwiU2l0ZU5hdmJhciIsImFsdCIsIm1hcCIsInBpbGwiLCJMaW5rIiwia2V5IiwicmVmIiwib25TY3JvbGwiLCJvblBvaW50ZXJDYW5jZWwiLCJjb25jYXQiLCJpdGVtIiwiaSIsImxlbmd0aCIsImRyYWdnYWJsZSIsInRpdGxlIiwibG9hZGluZyIsInJlZmVycmVyUG9saWN5IiwiYWxsb3dGdWxsU2NyZWVuIiwicmVsIiwiU2l0ZUZvb3RlciIsIl9jIiwiJFJlZnJlc2hSZWckIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDWjtBQUMwQjtBQUNJO0FBQ0E7QUFDdEM7QUFFckIsSUFBTUEsU0FBUyxHQUFHLENBQ2Q7RUFBRUMsS0FBSyxFQUFFLFVBQVU7RUFBZUMsSUFBSSxFQUFFO0FBQWlCLENBQUMsRUFDMUQ7RUFBRUQsS0FBSyxFQUFFLGFBQWE7RUFBWUMsSUFBSSxFQUFFO0FBQStCLENBQUMsRUFDeEU7RUFBRUQsS0FBSyxFQUFFLGlCQUFpQjtFQUFRQyxJQUFJLEVBQUU7QUFBNEIsQ0FBQyxFQUNyRTtFQUFFRCxLQUFLLEVBQUUsdUJBQXVCO0VBQUVDLElBQUksRUFBRTtBQUFtQyxDQUFDLEVBQzVFO0VBQUVELEtBQUssRUFBRSxRQUFRO0VBQWlCQyxJQUFJLEVBQUU7QUFBeUQsQ0FBQyxDQUNyRztBQUVELElBQU1DLFdBQVcsR0FBRyxDQUNoQjtFQUFFQyxHQUFHLEVBQUUsbUNBQW1DO0VBQU9DLE9BQU8sRUFBRSxrQkFBa0I7RUFBVUMsTUFBTSxFQUFFO0FBQXFCLENBQUMsRUFDcEg7RUFBRUYsR0FBRyxFQUFFLHVDQUF1QztFQUFFQyxPQUFPLEVBQUUscUJBQXFCO0VBQU9DLE1BQU0sRUFBRTtBQUErQixDQUFDLEVBQzdIO0VBQUVGLEdBQUcsRUFB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QyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUM1QlIsS0FBQSxDQUFDUyxpRUFBTTtJQUFBUCxNQUFBLEVBQUFDLEtBQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxDQUFFLENBQUMsRUFDVlIsS0FBQSxDQUFDVSxpRUFBVTtJQUFBUixNQUFBLEVBQUFDLEtBQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxDQUFFLENBQUMsRUFDZFIsS0FBQTtJQUFLQyxTQUFTLEVBQUMsVUFBVTtJQUFBQyxNQUFBLEVBQUFDLEtBQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUVyQlIsS0FBQTtJQUFTQyxTQUFTLEVBQUMsU0FBUztJQUFDLGNBQVcsdUJBQXVCO0lBQUFDLE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQzNEUixLQUFBO0lBQUtDLFNBQVMsRUFBQyxZQUFZO0lBQUFDLE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQ3ZCUixLQUFBO0lBQUsxRSxHQUFHLEVBQUMsbUNBQW1DO0lBQUNxRixHQUFHLEVBQUMsRUFBRTtJQUFDVixTQUFTLEVBQUMsZ0JBQWdCO0lBQUFDLE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLENBQUUsQ0FBQyxFQUNqRlIsS0FBQTtJQUFLQyxTQUFTLEVBQUMsb0JBQW9CO0lBQUFDLE1BQUEsRUFBQUMsS0FB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VTtJQUFBM0IsTUFBQSxFQUFBQyxLQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsQ0FBRSxDQUNaLENBQ0osQ0FBQztBQUVkLENBQUM7QUFBQzlFLEVBQUEsQ0FsTUlELElBQUk7QUFBQXFHLEVBQUEsR0FBSnJHLElBQUk7QUFvTUtBLG1FQUFJLEVBQUM7QUFBQSxJQUFBcUcsRUFBQTtBQUFBQyxZQUFBLENBQUFELEVBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaG9tZS9pbmRleC44MWUxZjU2NzE4NzQxMzYyNjE4Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlcic7XG5pbXBvcnQgU2l0ZU5hdmJhciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL25hdmJhci9OYXZiYXInO1xuaW1wb3J0IFNpdGVGb290ZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyJztcbmltcG9ydCAnLi9pbmRleC5jc3MnO1xuXG5jb25zdCBoZXJvUGlsbHMgPSBbXG4gICAgeyBsYWJlbDogJ0NhbGVuZGFyJywgICAgICAgICAgICAgIGhyZWY6ICcvaG9tZS9jYWxlbmRhcicgfSxcbiAgICB7IGxhYmVsOiAnQm9vayBhIFJvb20nLCAgICAgICAgICAgaHJlZjogJy9yZXNvdXJjZXMvcm9vbS1yZXNlcnZhdGlvbnMnIH0sXG4gICAgeyBsYWJlbDogJ1AtQ2FyZCBSZXF1ZXN0cycsICAgICAgIGhyZWY6ICcvcmVzb3VyY2VzL3BjYXJkLXJlcXVlc3RzJyB9LFxuICAgIHsgbGFiZWw6ICdGaW5hbmNpYWwgSW5jbHVzaXZpdHknLCBocmVmOiAnL3Jlc291cmNlcy9maW5hbmNpYWwtaW5jbHVzaXZpdHknIH0sXG4gICAgeyBsYWJlbDogJ0RvbmF0ZScsICAgICAgICAgICAgICAgIGhyZWY6ICdodHRwczovL3JpY2Vjb25uZWN0LnJpY2UuZWR1L2RvbmF0aW9uL21jbXVydHJ5LWNvbGxlZ2UnIH1cbl07XG5cbmNvbnN0IHRyaXBsZVN0cmlwID0gW1xuICAgIHsgc3JjOiAnL3N0YXRpYy9nZW5lcmFsX3BpY3MvbWNtLXF1YWQucG5nJywgICAgICBjYXB0aW9uOiAnTWNNdXJ0cnkgQ29sbGVnZScsICAgICAgICAgc3ViY2FwOiAnT3VyIGhvbWUgb24gY2FtcHVzJyB9LFxuICAgIHsgc3JjOiAnL3N0YXRpYy9nZW5lcmFsX3BpY3Mvb3dlZWstY29vcmRzLnBuZycsIGNhcHRpb246ICdPLVdlZWsgQ29vcmRpbmF0b3JzJywgICAgICBzdWJjYXA6ICdMZWFkaW5nIHlvdSB0aHJvdWdoIHRoZSB3ZWVrJyB9LFxuICAgIHsgc3JjOiAnL3N0YXRpYy9nZW5lcmFsX3BpY3MveXVydC1ldmVuaW5nLnBuZycsIGNhcHRpb246ICdUaGUgWXVydCBhdCBOaWdodCcsICAgICAgICBzdWJjYXA6ICdPdXIgYXdhcmQtd2lubmluZyBkb21lJyB9LFxuICAgIHsgc3JjOiAnL3N0YXRpYy9nZW5lcmFsX3BpY3MveXVydC5qcGcnLCAgICAgICAgIGNhcHRpb246ICdJbnNpZGUgdGhlIFl1cnQnLCAgICAgICAgICBzdWJjYXA6ICdUaGUgaGVhcnQgb2YgdGhlIGNvbGxlZ2UnIH0sXG4gICAgeyBzcmM6ICcvc3RhdGljL2dlbmVyYWxfcGljcy9tY20tZXZlbnQucG5nJywgICAgY2FwdGlvbjogJ01jTXVydHJ5IE8tV2VlaycsICAgICAgICAgIHN1YmNhcDogJ0V2ZXJ5IGNsYXNzLCBvbmUgaG9tZScgfSxcbiAgICB7IHNyYzogJy9zdGF0aWMvb3dlZWsvMjAyNS0yMDI2L2ltYWdlcy9oZXJvL2Fycml2YWwuanBnJywgY2FwdGlvbjogJ08tV2VlayBBcnJpdmFsJywgICAgICAgICAgIHN1YmNhcDogJ01vdmUtaW4gZGF5IGVuZXJneScgfSxcbiAgICB7IHNyYzogJy9zdGF0aWMvZ2VuZXJhbF9waWNzL2FjY2lvd2Vlay5qcGcnLCAgICAgICAgICAgICAgY2FwdGlvbjogJ0FjY2lPLVdlZWsnLCAgICAgICAgICAgICAgIHN1YmNhcDogJ0EgbWFnaWNhbCBPLVdlZWsgdGhlbWUnIH0sXG4gICAgeyBzcmM6ICcvc3RhdGljL2dlbmVyYWxfcGljcy9tYXJzaG1hbGxvd2Vlay5qcGcnLCAgICAgICAgIGNhcHRpb246ICdNYXJzaG1hbGxPLVdlZWsnLCAgICAgICAgICBzdWJjYXA6ICdTd2VldCBtZW1vcmllcyBhdCBNY011cnRyeScgfSxcbiAgICB7IHNyYzogJy9zdGF0aWMvZ2VuZXJhbF9waWNzL21jc2NvdHRpc2huaWdodC5qcGcnLCAgICAgICAgY2FwdGlvbjogJ1Njb3R0aXNoIE5pZ2h0JywgICAgICAgICAgIHN1YmNhcDogJ01jTXVydHJ5IHRyYWRpdGlvbnMnIH0sXG4gICAgeyBzcmM6ICcvc3RhdGljL2dlbmVyYWxfcGljcy91Zm93ZWVrLmpwZycsICAgICAgICAgICAgICAgIGNhcHRpb246ICdVRk8tV2VlaycsICAgICAgICAgICAgICAgICBzdWJjYXA6ICdPdXQgb2YgdGhpcyB3b3JsZCBPLVdlZWsnIH0sXG5dO1xuXG5cbi8qXG4gKiBIb21lIHBhZ2Ug4oCUIGluZmluaXRlIGF1dG8tc2Nyb2xsaW5nIGltYWdlIHN0cmlwLlxuICpcbiAqIElNUE9SVEFOVDogVGhlIHN0cmlwIHNjcm9sbCBzcGVlZCBpcyBjb250cm9sbGVkIGJ5IEFVVE9fU1BFRUQgKHB4L2ZyYW1lKSBpbnNpZGVcbiAqIHRoZSByQUYgbG9vcCBpbiB0aGUgdXNlRWZmZWN0IGJlbG93IOKAlCBOT1QgYnkgQ1NTIG9yIGFueSBjYXJvdXNlbCBjb21wb25lbnQgcHJvcC5cbiAqIE1vYmlsZSBhbmQgZGVza3RvcCBzcGVlZHMgYXJlIHNldCBzZXBhcmF0ZWx5OlxuICogICBtb2JpbGUgKOKJpDc2OHB4KTogMC41IHB4L2ZyYW1lXG4gKiAgIGRlc2t0b3A6ICAgICAgICAgMS4yIHB4L2ZyYW1lXG4gKiBJZiB0aGUgc3RyaXAgZmVlbHMgdG9vIGZhc3Qgb3Igc2xvdyBvbiBtb2JpbGUsIGFkanVzdCB0aGUgMC41IHZhbHVlIHRoZXJlLlxuICovXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICAgIGNvbnN0IHN0cmlwUmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICAgIGNvbnN0IHNwZWVkUmVmID0gUmVhY3QudXNlUmVmKHsgY3VycmVudDogMSwgdGFyZ2V0OiAxIH0pO1xuICAgIGNvbnN0IGRyYWdSZWYgPSBSZWFjdC51c2VSZWYoe1xuICAgICAgICBhY3RpdmU6IGZhbHNlLCBzdGFydFg6IDAsIHN0YXJ0U2Nyb2xsOiAwLFxuICAgICAgICBtb3ZlZDogZmFsc2UsIGxhc3RYOiAwLCBsYXN0VDogMCwgdmVsb2NpdHk6IDBcbiAgICB9KTtcbiAgICBjb25zdCBpbmVydGlhVmVsUmVmID0gUmVhY3QudXNlUmVmKDApO1xuXG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBjb25zdCBlbCA9IHN0cmlwUmVmLmN1cnJlbnQ7XG4gICAgICAgIGlmICghZWwpIHJldHVybjtcbiAgICAgICAgY29uc3QgaGFsZiA9IGVsLnNjcm9sbFdpZHRoIC8gMjtcbiAgICAgICAgaWYgKCFoYWxmKSByZXR1cm47XG4gICAgICAgIGNvbnN0IHF1YXJ0ZXIgPSBoYWxmIC8gMjtcbiAgICAgICAgaWYgKGVsLnNjcm9sbExlZnQgPj0gaGFsZiArIHF1YXJ0ZXIpIHtcbiAgICAgICAgICAgIGVsLnNjcm9sbExlZnQgPSBlbC5zY3JvbGxMZWZ0IC0gaGFsZjtcbiAgICAgICAgfSBlbHNlIGlmIChlbC5zY3JvbGxMZWZ0IDw9IHF1YXJ0ZXIpIHtcbiAgICAgICAgICAgIGVsLnNjcm9sbExlZnQgPSBlbC5zY3JvbGxMZWZ0ICsgaGFsZjtcbiAgICAgICAgfVxuICAgIH0sIFtdKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGVsID0gc3RyaXBSZWYuY3VycmVudDtcbiAgICAgICAgaWYgKCFlbCkgcmV0dXJuO1xuICAgICAgICBjb25zdCBpZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBoYWxmID0gZWwuc2Nyb2xsV2lkdGggLyAyO1xuICAgICAgICAgICAgaWYgKGhhbGYgPiAwKSBlbC5zY3JvbGxMZWZ0ID0gaGFsZjtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiAoKSA9PiBjYW5jZWxBbmltYXRpb25GcmFtZShpZCk7XG4gICAgfSwgW10pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm47XG4gICAgICAgIGNvbnN0IEFVVE9fU1BFRUQgPSB3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogNzY4cHgpJykubWF0Y2hlcyA/IDAuNSA6IDEuMjtcbiAgICAgICAgY29uc3QgRlJJQ1RJT04gPSAwLjk0O1xuICAgICAgICBjb25zdCBWRUxfRkxPT1IgPSAwLjA1O1xuICAgICAgICBsZXQgcmFmO1xuICAgICAgICBsZXQgc2Nyb2xsQWNjID0gbnVsbDtcbiAgICAgICAgY29uc3QgdGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVsID0gc3RyaXBSZWYuY3VycmVudDtcbiAgICAgICAgICAgIGlmIChlbCAmJiAhZHJhZ1JlZi5jdXJyZW50LmFjdGl2ZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHMgPSBzcGVlZFJlZi5jdXJyZW50O1xuICAgICAgICAgICAgICAgIHMuY3VycmVudCA9IHMudGFyZ2V0O1xuICAgICAgICAgICAgICAgIGlmIChzY3JvbGxBY2MgPT09IG51bGwpIHNjcm9sbEFjYyA9IGVsLnNjcm9sbExlZnQ7XG4gICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKHNjcm9sbEFjYyAtIGVsLnNjcm9sbExlZnQpID4gMSkgc2Nyb2xsQWNjID0gZWwuc2Nyb2xsTGVmdDtcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMoaW5lcnRpYVZlbFJlZi5jdXJyZW50KSA+IFZFTF9GTE9PUikge1xuICAgICAgICAgICAgICAgICAgICBzY3JvbGxBY2MgKz0gaW5lcnRpYVZlbFJlZi5jdXJyZW50O1xuICAgICAgICAgICAgICAgICAgICBpbmVydGlhVmVsUmVmLmN1cnJlbnQgKj0gRlJJQ1RJT047XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaW5lcnRpYVZlbFJlZi5jdXJyZW50ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsQWNjICs9IEFVVE9fU1BFRUQgKiBzLmN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsLnNjcm9sbExlZnQgPSBzY3JvbGxBY2M7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByYWYgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRpY2spO1xuICAgICAgICB9O1xuICAgICAgICByYWYgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRpY2spO1xuICAgICAgICByZXR1cm4gKCkgPT4gd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHJhZik7XG4gICAgfSwgW10pO1xuXG4gICAgY29uc3Qgb25Qb2ludGVyRG93biA9IChlKSA9PiB7XG4gICAgICAgIGNvbnN0IGVsID0gc3RyaXBSZWYuY3VycmVudDtcbiAgICAgICAgaWYgKCFlbCkgcmV0dXJuO1xuICAgICAgICBkcmFnUmVmLmN1cnJlbnQgPSB7XG4gICAgICAgICAgICBhY3RpdmU6IHRydWUsIHN0YXJ0WDogZS5jbGllbnRYLCBzdGFydFNjcm9sbDogZWwuc2Nyb2xsTGVmdCxcbiAgICAgICAgICAgIG1vdmVkOiBmYWxzZSwgbGFzdFg6IGUuY2xpZW50WCxcbiAgICAgICAgICAgIGxhc3RUOiBlLnRpbWVTdGFtcCB8fCBwZXJmb3JtYW5jZS5ub3coKSwgdmVsb2NpdHk6IDBcbiAgICAgICAgfTtcbiAgICAgICAgaW5lcnRpYVZlbFJlZi5jdXJyZW50ID0gMDtcbiAgICAgICAgZWwuc2V0UG9pbnRlckNhcHR1cmUgJiYgZWwuc2V0UG9pbnRlckNhcHR1cmUoZS5wb2ludGVySWQpO1xuICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKCdtYy1zdHJpcC1kcmFnZ2luZycpO1xuICAgIH07XG4gICAgY29uc3Qgb25Qb2ludGVyTW92ZSA9IChlKSA9PiB7XG4gICAgICAgIGNvbnN0IGQgPSBkcmFnUmVmLmN1cnJlbnQ7XG4gICAgICAgIGlmICghZC5hY3RpdmUpIHJldHVybjtcbiAgICAgICAgY29uc3QgZWwgPSBzdHJpcFJlZi5jdXJyZW50O1xuICAgICAgICBpZiAoIWVsKSByZXR1cm47XG4gICAgICAgIGNvbnN0IGR4ID0gZS5jbGllbnRYIC0gZC5zdGFydFg7XG4gICAgICAgIGlmIChNYXRoLmFicyhkeCkgPiA1KSBkLm1vdmVkID0gdHJ1ZTtcbiAgICAgICAgY29uc3QgaW5zdFggPSBlLmNsaWVudFggLSBkLmxhc3RYO1xuICAgICAgICBlbC5zY3JvbGxMZWZ0IC09IGluc3RYO1xuICAgICAgICBjb25zdCBub3cgPSBlLnRpbWVTdGFtcCB8fCBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgICAgY29uc3QgZHQgPSBNYXRoLm1heChub3cgLSBkLmxhc3RULCAxKTtcbiAgICAgICAgZC52ZWxvY2l0eSA9IC1pbnN0WCAqICgxNi42NyAvIGR0KTtcbiAgICAgICAgZC5sYXN0WCA9IGUuY2xpZW50WDtcbiAgICAgICAgZC5sYXN0VCA9IG5vdztcbiAgICB9O1xuICAgIGNvbnN0IG9uUG9pbnRlclVwID0gKGUpID0+IHtcbiAgICAgICAgY29uc3QgZWwgPSBzdHJpcFJlZi5jdXJyZW50O1xuICAgICAgICBjb25zdCBkID0gZHJhZ1JlZi5jdXJyZW50O1xuICAgICAgICBjb25zdCBtb3ZlZCA9IGQubW92ZWQ7XG4gICAgICAgIGNvbnN0IHJlbGVhc2VWZWwgPSBkLnZlbG9jaXR5O1xuICAgICAgICBkLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBpZiAoIWVsKSByZXR1cm47XG4gICAgICAgIHRyeSB7IGVsLnJlbGVhc2VQb2ludGVyQ2FwdHVyZSAmJiBlbC5yZWxlYXNlUG9pbnRlckNhcHR1cmUoZS5wb2ludGVySWQpOyB9IGNhdGNoIChfKSB7fVxuICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdtYy1zdHJpcC1kcmFnZ2luZycpO1xuICAgICAgICBpbmVydGlhVmVsUmVmLmN1cnJlbnQgPSBNYXRoLm1heCgtNDAsIE1hdGgubWluKDQwLCByZWxlYXNlVmVsKSk7XG4gICAgICAgIGlmIChtb3ZlZCkge1xuICAgICAgICAgICAgY29uc3QgYmxvY2sgPSAoZXYpID0+IHsgZXYucHJldmVudERlZmF1bHQoKTsgZXYuc3RvcFByb3BhZ2F0aW9uKCk7IH07XG4gICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGJsb2NrLCB7IGNhcHR1cmU6IHRydWUsIG9uY2U6IHRydWUgfSk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYmxvY2ssIHRydWUpLCAwKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGFnZSBwYWdlLWxpZ2h0Jz5cbiAgICAgICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgICAgIDxTaXRlTmF2YmFyIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW50cm8tbWMnPlxuXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdtYy1oZXJvJyBhcmlhLWxhYmVsPSdNY011cnRyeSBDb2xsZWdlIGhlcm8nPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWMtaGVyby1iZyc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz0nL3N0YXRpYy9nZW5lcmFsX3BpY3MvbWNtLXF1YWQucG5nJyBhbHQ9JycgY2xhc3NOYW1lPSdtYy1oZXJvLWJnLWltZycgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYy1oZXJvLWJnLW92ZXJsYXknIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdtYy1oZXJvLXRpdGxlJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nbWMtaGVyby10aXRsZS13b3JkJz5NY011cnRyeTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPScvc3RhdGljL2xvZ29zL2hlcm8tY3Jlc3QucG5nJyBhbHQ9JycgY2xhc3NOYW1lPSdtYy1oZXJvLWNyZXN0JyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdtYy1oZXJvLXRpdGxlLXdvcmQnPkNvbGxlZ2U8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPSdtYy1oZXJvLXBpbGxzJyBhcmlhLWxhYmVsPSdRdWljayBsaW5rcyc+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aGVyb1BpbGxzLm1hcCgocGlsbCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3BpbGwuaHJlZn0ga2V5PXtwaWxsLmxhYmVsfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdtYy1oZXJvLXBpbGwnPntwaWxsLmxhYmVsfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPScvc3RhdGljL2xvZ29zL3l1cnQtYmFuZC5wbmcnIGFsdD0nJyBjbGFzc05hbWU9J21jLXl1cnQtYmFuZCcgYXJpYS1oaWRkZW49J3RydWUnIC8+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdtYy1zdHJpcCcgYXJpYS1sYWJlbD0nQ29sbGVnZSBoaWdobGlnaHRzJz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdtYy1zdHJpcC1yb3cnXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9e3N0cmlwUmVmfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25TY3JvbGw9e2hhbmRsZVNjcm9sbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uUG9pbnRlckRvd249e29uUG9pbnRlckRvd259XG4gICAgICAgICAgICAgICAgICAgICAgICBvblBvaW50ZXJNb3ZlPXtvblBvaW50ZXJNb3ZlfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25Qb2ludGVyVXA9e29uUG9pbnRlclVwfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25Qb2ludGVyQ2FuY2VsPXtvblBvaW50ZXJVcH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge1suLi50cmlwbGVTdHJpcCwgLi4udHJpcGxlU3RyaXBdLm1hcCgoaXRlbSwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPSdtYy1zdHJpcC1jYXJkJyBrZXk9e2Ake2l0ZW0uY2FwdGlvbn0tJHtpfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWMtc3RyaXAtaW1hZ2Utd3JhcCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtpdGVtLnNyY31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2kgPCB0cmlwbGVTdHJpcC5sZW5ndGggPyBpdGVtLmNhcHRpb24gOiAnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J21jLXN0cmlwLWltYWdlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyYWdnYWJsZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ2NhcHRpb24gY2xhc3NOYW1lPSdtYy1zdHJpcC1jYXB0aW9uJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nbWMtc3RyaXAtY2FwdGlvbi1tYWluJz57aXRlbS5jYXB0aW9ufTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nbWMtc3RyaXAtY2FwdGlvbi1zdWInPntpdGVtLnN1YmNhcH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlnY2FwdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21jLXN0cmlwLWZhZGUgbWMtc3RyaXAtZmFkZS1sZWZ0JyBhcmlhLWhpZGRlbj0ndHJ1ZScgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21jLXN0cmlwLWZhZGUgbWMtc3RyaXAtZmFkZS1yaWdodCcgYXJpYS1oaWRkZW49J3RydWUnIC8+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdtYy1maW5kLXVzJyBhcmlhLWxhYmVsPSdGaW5kIHVzIGF0IFJpY2UnPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWMtZmluZC11cy1pbm5lcic+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdtYy1maW5kLXVzLWhlYWRpbmcnPkZpbmQgVXMgYXQgUmljZTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J21jLWZpbmQtdXMtYWRkcmVzcyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTWNNdXJ0cnkgQ29sbGVnZSAmbWlkZG90OyAxNjA1IFJpY2UgQmx2ZCAmbWlkZG90OyBIb3VzdG9uLCBUWCA3NzAwNVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21jLWZpbmQtdXMtbWFwLXdyYXAnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpZnJhbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9J01hcCB0byBNY011cnRyeSBDb2xsZWdlIGF0IFJpY2UgVW5pdmVyc2l0eSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdtYy1maW5kLXVzLW1hcCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPSdodHRwczovL21hcC5jb25jZXB0M2QuY29tLz9pZD00NzMjIWNlLzEyNjMxP20vMTE5MTk0P3MvP3NiYy8nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc9J2xhenknXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZmVycmVyUG9saWN5PSduby1yZWZlcnJlci13aGVuLWRvd25ncmFkZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dGdWxsU2NyZWVuPScnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J21jLWZpbmQtdXMtY3RhJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9kaXIvP2FwaT0xJmRlc3RpbmF0aW9uPU1jTXVydHJ5K0NvbGxlZ2UrUmljZStVbml2ZXJzaXR5KzE2MDUrUmljZStCbHZkK0hvdXN0b24rVFgrNzcwMDUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsPSdub29wZW5lciBub3JlZmVycmVyJ1xuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdldCBEaXJlY3Rpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49J3RydWUnIGNsYXNzTmFtZT0nbWMtZmluZC11cy1jdGEtYXJyb3cnPiZyc2FxdW87PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgICAgICAgICA8U2l0ZUZvb3RlciAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==