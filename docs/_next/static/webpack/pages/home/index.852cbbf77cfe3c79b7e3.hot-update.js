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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaG9tZS9pbmRleC9pbmRleC5qcyJdLCJuYW1lcyI6WyJoZXJvUGlsbHMiLCJsYWJlbCIsImhyZWYiLCJ0cmlwbGVTdHJpcCIsInNyYyIsImNhcHRpb24iLCJzdWJjYXAiLCJIb21lIiwiX3MiLCJzdHJpcFJlZiIsIlJlYWN0IiwidXNlUmVmIiwic3BlZWRSZWYiLCJjdXJyZW50IiwidGFyZ2V0IiwiZHJhZ1JlZiIsImFjdGl2ZSIsInN0YXJ0WCIsInN0YXJ0U2Nyb2xsIiwibW92ZWQiLCJsYXN0WCIsImxhc3RUIiwidmVsb2NpdHkiLCJpbmVydGlhVmVsUmVmIiwiaGFuZGxlU2Nyb2xsIiwidXNlQ2FsbGJhY2siLCJlbCIsImhhbGYiLCJzY3JvbGxXaWR0aCIsInF1YXJ0ZXIiLCJzY3JvbGxMZWZ0IiwidXNlRWZmZWN0IiwiaWQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsIkFVVE9fU1BFRUQiLCJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsIkZSSUNUSU9OIiwiVkVMX0ZMT09SIiwicmFmIiwic2Nyb2xsQWNjIiwidGljayIsInMiLCJNYXRoIiwiYWJzIiwib25Qb2ludGVyRG93biIsImUiLCJjbGllbnRYIiwidGltZVN0YW1wIiwicGVyZm9ybWFuY2UiLCJub3ciLCJzZXRQb2ludGVyQ2FwdHVyZSIsInBvaW50ZXJJZCIsImNsYXNzTGlzdCIsImFkZCIsIm9uUG9pbnRlck1vdmUiLCJkIiwiZHgiLCJpbnN0WCIsImR0IiwibWF4Iiwib25Qb2ludGVyVXAiLCJyZWxlYXNlVmVsIiwicmVsZWFzZVBvaW50ZXJDYXB0dXJlIiwiXyIsInJlbW92ZSIsIm1pbiIsImJsb2NrIiwiZXYiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYXB0dXJlIiwib25jZSIsInNldFRpbWVvdXQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiX19qc3giLCJjbGFzc05hbWUiLCJfX3NlbGYiLCJfdGhpcyIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiSGVhZGVyIiwiU2l0ZU5hdmJhciIsImFsdCIsIm1hcCIsInBpbGwiLCJMaW5rIiwia2V5IiwicmVmIiwib25TY3JvbGwiLCJvblBvaW50ZXJDYW5jZWwiLCJjb25jYXQiLCJpdGVtIiwiaSIsImxlbmd0aCIsImRyYWdnYWJsZSIsInRpdGxlIiwibG9hZGluZyIsInJlZmVycmVyUG9saWN5IiwiYWxsb3dGdWxsU2NyZWVuIiwicmVsIiwiU2l0ZUZvb3RlciIsIl9jIiwiJFJlZnJlc2hSZWckIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDWjtBQUMwQjtBQUNJO0FBQ0E7QUFDdEM7QUFFckIsSUFBTUEsU0FBUyxHQUFHLENBQ2Q7RUFBRUMsS0FBSyxFQUFFLFVBQVU7RUFBZUMsSUFBSSxFQUFFO0FBQWlCLENBQUMsRUFDMUQ7RUFBRUQsS0FBSyxFQUFFLGFBQWE7RUFBWUMsSUFBSSxFQUFFO0FBQStCLENBQUMsRUFDeEU7RUFBRUQsS0FBSyxFQUFFLGlCQUFpQjtFQUFRQyxJQUFJLEVBQUU7QUFBNEIsQ0FBQyxFQUNyRTtFQUFFRCxLQUFLLEVBQUUsdUJBQXVCO0VBQUVDLElBQUksRUFBRTtBQUFtQyxDQUFDLEVBQzVFO0VBQUVELEtBQUssRUFBRSxRQUFRO0VBQWlCQyxJQUFJLEVBQUU7QUFBeUQsQ0FBQyxDQUNyRztBQUVELElBQU1DLFdBQVcsR0FBRyxDQUNoQjtFQUFFQyxHQUFHLEVBQUUsbUNBQW1DO0VBQU9DLE9BQU8sRUFBRSxrQkFBa0I7RUFBVUMsTUFBTSxFQUFFO0FBQXFCLENBQUMsRUFDcEg7RUFBRUYsR0FBRyxFQUFFLHVDQUF1QztFQUFFQyxPQUFPLEVBQUUscUJBQXFCO0VBQU9DLE1BQU0sRUFBRTtBQUErQixDQUFDLEVBQzdIO0VBQUVGLEdBQUcsRUFB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QUM1QlIsS0FBQSxDQUFDUyxpRUFBTTtJQUFBUCxNQUFBLEVBQUFDLEtBQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxDQUFFLENBQUMsRUFDVlIsS0FBQSxDQUFDVSxpRUFBVTtJQUFBUixNQUFBLEVBQUFDLEtBQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxDQUFFLENBQUMsRUFDZFIsS0FBQTtJQUFLQyxTQUFTLEVBQUMsVUFBVTtJQUFBQyxNQUFBLEVBQUFDLEtBQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUVyQlIsS0FBQTtJQUFTQyxTQUFTLEVBQUMsU0FBUztJQUFDLGNBQVcsdUJBQXVCO0lBQUFDLE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQzNEUixLQUFBO0lBQUtDLFNBQVMsRUFBQyxZQUFZO0lBQUFDLE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQ3ZCUixLQUFBO0lBQUsxRSxHQUFHLEVBQUMsbUNBQW1DO0lBQUNxRixHQUFHLEVBQUMsRUFBRTtJQUFDVixTQUFTLEVBQUMsZ0JBQWdCO0lBQUFDLE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLENBQUUsQ0FBQyxFQUNqRlIsS0FBQTtJQUFLQyxTQUFTLEVBQUMsb0JBQW9CO0lBQUFDLE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFD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QyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsQ0FBRSxDQUNaLENBQ0osQ0FBQztBQUVkLENBQUM7QUFBQzlFLEVBQUEsQ0FsTUlELElBQUk7QUFBQXFHLEVBQUEsR0FBSnJHLElBQUk7QUFvTUtBLG1FQUFJLEVBQUM7QUFBQSxJQUFBcUcsRUFBQTtBQUFBQyxZQUFBLENBQUFELEVBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaG9tZS9pbmRleC44NTJjYmJmNzdjZmUzYzc5YjdlMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlcic7XG5pbXBvcnQgU2l0ZU5hdmJhciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL25hdmJhci9OYXZiYXInO1xuaW1wb3J0IFNpdGVGb290ZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyJztcbmltcG9ydCAnLi9pbmRleC5jc3MnO1xuXG5jb25zdCBoZXJvUGlsbHMgPSBbXG4gICAgeyBsYWJlbDogJ0NhbGVuZGFyJywgICAgICAgICAgICAgIGhyZWY6ICcvaG9tZS9jYWxlbmRhcicgfSxcbiAgICB7IGxhYmVsOiAnQm9vayBhIFJvb20nLCAgICAgICAgICAgaHJlZjogJy9yZXNvdXJjZXMvcm9vbS1yZXNlcnZhdGlvbnMnIH0sXG4gICAgeyBsYWJlbDogJ1AtQ2FyZCBSZXF1ZXN0cycsICAgICAgIGhyZWY6ICcvcmVzb3VyY2VzL3BjYXJkLXJlcXVlc3RzJyB9LFxuICAgIHsgbGFiZWw6ICdGaW5hbmNpYWwgSW5jbHVzaXZpdHknLCBocmVmOiAnL3Jlc291cmNlcy9maW5hbmNpYWwtaW5jbHVzaXZpdHknIH0sXG4gICAgeyBsYWJlbDogJ0RvbmF0ZScsICAgICAgICAgICAgICAgIGhyZWY6ICdodHRwczovL3JpY2Vjb25uZWN0LnJpY2UuZWR1L2RvbmF0aW9uL21jbXVydHJ5LWNvbGxlZ2UnIH1cbl07XG5cbmNvbnN0IHRyaXBsZVN0cmlwID0gW1xuICAgIHsgc3JjOiAnL3N0YXRpYy9nZW5lcmFsX3BpY3MvbWNtLXF1YWQucG5nJywgICAgICBjYXB0aW9uOiAnTWNNdXJ0cnkgQ29sbGVnZScsICAgICAgICAgc3ViY2FwOiAnT3VyIGhvbWUgb24gY2FtcHVzJyB9LFxuICAgIHsgc3JjOiAnL3N0YXRpYy9nZW5lcmFsX3BpY3Mvb3dlZWstY29vcmRzLnBuZycsIGNhcHRpb246ICdPLVdlZWsgQ29vcmRpbmF0b3JzJywgICAgICBzdWJjYXA6ICdMZWFkaW5nIHlvdSB0aHJvdWdoIHRoZSB3ZWVrJyB9LFxuICAgIHsgc3JjOiAnL3N0YXRpYy9nZW5lcmFsX3BpY3MveXVydC1ldmVuaW5nLnBuZycsIGNhcHRpb246ICdUaGUgWXVydCBhdCBOaWdodCcsICAgICAgICBzdWJjYXA6ICdPdXIgYXdhcmQtd2lubmluZyBkb21lJyB9LFxuICAgIHsgc3JjOiAnL3N0YXRpYy9nZW5lcmFsX3BpY3MveXVydC5qcGcnLCAgICAgICAgIGNhcHRpb246ICdJbnNpZGUgdGhlIFl1cnQnLCAgICAgICAgICBzdWJjYXA6ICdUaGUgaGVhcnQgb2YgdGhlIGNvbGxlZ2UnIH0sXG4gICAgeyBzcmM6ICcvc3RhdGljL2dlbmVyYWxfcGljcy9tY20tZXZlbnQucG5nJywgICAgY2FwdGlvbjogJ01jTXVydHJ5IE8tV2VlaycsICAgICAgICAgIHN1YmNhcDogJ0V2ZXJ5IGNsYXNzLCBvbmUgaG9tZScgfSxcbiAgICB7IHNyYzogJy9zdGF0aWMvb3dlZWsvMjAyNS0yMDI2L2ltYWdlcy9oZXJvL2Fycml2YWwuanBnJywgY2FwdGlvbjogJ08tV2VlayBBcnJpdmFsJywgICAgICAgICAgIHN1YmNhcDogJ01vdmUtaW4gZGF5IGVuZXJneScgfSxcbiAgICB7IHNyYzogJy9zdGF0aWMvZ2VuZXJhbF9waWNzL2FjY2lvd2Vlay5qcGcnLCAgICAgICAgICAgICAgY2FwdGlvbjogJ0FjY2lPLVdlZWsnLCAgICAgICAgICAgICAgIHN1YmNhcDogJ0EgbWFnaWNhbCBPLVdlZWsgdGhlbWUnIH0sXG4gICAgeyBzcmM6ICcvc3RhdGljL2dlbmVyYWxfcGljcy9tYXJzaG1hbGxvd2Vlay5qcGcnLCAgICAgICAgIGNhcHRpb246ICdNYXJzaG1hbGxPLVdlZWsnLCAgICAgICAgICBzdWJjYXA6ICdTd2VldCBtZW1vcmllcyBhdCBNY011cnRyeScgfSxcbiAgICB7IHNyYzogJy9zdGF0aWMvZ2VuZXJhbF9waWNzL21jc2NvdHRpc2huaWdodC5qcGcnLCAgICAgICAgY2FwdGlvbjogJ1Njb3R0aXNoIE5pZ2h0JywgICAgICAgICAgIHN1YmNhcDogJ01jTXVydHJ5IHRyYWRpdGlvbnMnIH0sXG4gICAgeyBzcmM6ICcvc3RhdGljL2dlbmVyYWxfcGljcy91Zm93ZWVrLmpwZycsICAgICAgICAgICAgICAgIGNhcHRpb246ICdVRk8tV2VlaycsICAgICAgICAgICAgICAgICBzdWJjYXA6ICdPdXQgb2YgdGhpcyB3b3JsZCBPLVdlZWsnIH0sXG5dO1xuXG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gICAgY29uc3Qgc3RyaXBSZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XG4gICAgY29uc3Qgc3BlZWRSZWYgPSBSZWFjdC51c2VSZWYoeyBjdXJyZW50OiAxLCB0YXJnZXQ6IDEgfSk7XG4gICAgY29uc3QgZHJhZ1JlZiA9IFJlYWN0LnVzZVJlZih7XG4gICAgICAgIGFjdGl2ZTogZmFsc2UsIHN0YXJ0WDogMCwgc3RhcnRTY3JvbGw6IDAsXG4gICAgICAgIG1vdmVkOiBmYWxzZSwgbGFzdFg6IDAsIGxhc3RUOiAwLCB2ZWxvY2l0eTogMFxuICAgIH0pO1xuICAgIGNvbnN0IGluZXJ0aWFWZWxSZWYgPSBSZWFjdC51c2VSZWYoMCk7XG5cbiAgICBjb25zdCBoYW5kbGVTY3JvbGwgPSBSZWFjdC51c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIGNvbnN0IGVsID0gc3RyaXBSZWYuY3VycmVudDtcbiAgICAgICAgaWYgKCFlbCkgcmV0dXJuO1xuICAgICAgICBjb25zdCBoYWxmID0gZWwuc2Nyb2xsV2lkdGggLyAyO1xuICAgICAgICBpZiAoIWhhbGYpIHJldHVybjtcbiAgICAgICAgY29uc3QgcXVhcnRlciA9IGhhbGYgLyAyO1xuICAgICAgICBpZiAoZWwuc2Nyb2xsTGVmdCA+PSBoYWxmICsgcXVhcnRlcikge1xuICAgICAgICAgICAgZWwuc2Nyb2xsTGVmdCA9IGVsLnNjcm9sbExlZnQgLSBoYWxmO1xuICAgICAgICB9IGVsc2UgaWYgKGVsLnNjcm9sbExlZnQgPD0gcXVhcnRlcikge1xuICAgICAgICAgICAgZWwuc2Nyb2xsTGVmdCA9IGVsLnNjcm9sbExlZnQgKyBoYWxmO1xuICAgICAgICB9XG4gICAgfSwgW10pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgZWwgPSBzdHJpcFJlZi5jdXJyZW50O1xuICAgICAgICBpZiAoIWVsKSByZXR1cm47XG4gICAgICAgIGNvbnN0IGlkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGhhbGYgPSBlbC5zY3JvbGxXaWR0aCAvIDI7XG4gICAgICAgICAgICBpZiAoaGFsZiA+IDApIGVsLnNjcm9sbExlZnQgPSBoYWxmO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuICgpID0+IGNhbmNlbEFuaW1hdGlvbkZyYW1lKGlkKTtcbiAgICB9LCBbXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybjtcbiAgICAgICAgY29uc3QgQVVUT19TUEVFRCA9IHdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiA3NjhweCknKS5tYXRjaGVzID8gMC41IDogMS4yO1xuICAgICAgICBjb25zdCBGUklDVElPTiA9IDAuOTQ7XG4gICAgICAgIGNvbnN0IFZFTF9GTE9PUiA9IDAuMDU7XG4gICAgICAgIGxldCByYWY7XG4gICAgICAgIGxldCBzY3JvbGxBY2MgPSBudWxsO1xuICAgICAgICBjb25zdCB0aWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZWwgPSBzdHJpcFJlZi5jdXJyZW50O1xuICAgICAgICAgICAgaWYgKGVsICYmICFkcmFnUmVmLmN1cnJlbnQuYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcyA9IHNwZWVkUmVmLmN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgcy5jdXJyZW50ID0gcy50YXJnZXQ7XG4gICAgICAgICAgICAgICAgaWYgKHNjcm9sbEFjYyA9PT0gbnVsbCkgc2Nyb2xsQWNjID0gZWwuc2Nyb2xsTGVmdDtcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMoc2Nyb2xsQWNjIC0gZWwuc2Nyb2xsTGVmdCkgPiAxKSBzY3JvbGxBY2MgPSBlbC5zY3JvbGxMZWZ0O1xuICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhpbmVydGlhVmVsUmVmLmN1cnJlbnQpID4gVkVMX0ZMT09SKSB7XG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbEFjYyArPSBpbmVydGlhVmVsUmVmLmN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgICAgIGluZXJ0aWFWZWxSZWYuY3VycmVudCAqPSBGUklDVElPTjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpbmVydGlhVmVsUmVmLmN1cnJlbnQgPSAwO1xuICAgICAgICAgICAgICAgICAgICBzY3JvbGxBY2MgKz0gQVVUT19TUEVFRCAqIHMuY3VycmVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWwuc2Nyb2xsTGVmdCA9IHNjcm9sbEFjYztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJhZiA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGljayk7XG4gICAgICAgIH07XG4gICAgICAgIHJhZiA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGljayk7XG4gICAgICAgIHJldHVybiAoKSA9PiB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUocmFmKTtcbiAgICB9LCBbXSk7XG5cbiAgICBjb25zdCBvblBvaW50ZXJEb3duID0gKGUpID0+IHtcbiAgICAgICAgY29uc3QgZWwgPSBzdHJpcFJlZi5jdXJyZW50O1xuICAgICAgICBpZiAoIWVsKSByZXR1cm47XG4gICAgICAgIGRyYWdSZWYuY3VycmVudCA9IHtcbiAgICAgICAgICAgIGFjdGl2ZTogdHJ1ZSwgc3RhcnRYOiBlLmNsaWVudFgsIHN0YXJ0U2Nyb2xsOiBlbC5zY3JvbGxMZWZ0LFxuICAgICAgICAgICAgbW92ZWQ6IGZhbHNlLCBsYXN0WDogZS5jbGllbnRYLFxuICAgICAgICAgICAgbGFzdFQ6IGUudGltZVN0YW1wIHx8IHBlcmZvcm1hbmNlLm5vdygpLCB2ZWxvY2l0eTogMFxuICAgICAgICB9O1xuICAgICAgICBpbmVydGlhVmVsUmVmLmN1cnJlbnQgPSAwO1xuICAgICAgICBlbC5zZXRQb2ludGVyQ2FwdHVyZSAmJiBlbC5zZXRQb2ludGVyQ2FwdHVyZShlLnBvaW50ZXJJZCk7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ21jLXN0cmlwLWRyYWdnaW5nJyk7XG4gICAgfTtcbiAgICBjb25zdCBvblBvaW50ZXJNb3ZlID0gKGUpID0+IHtcbiAgICAgICAgY29uc3QgZCA9IGRyYWdSZWYuY3VycmVudDtcbiAgICAgICAgaWYgKCFkLmFjdGl2ZSkgcmV0dXJuO1xuICAgICAgICBjb25zdCBlbCA9IHN0cmlwUmVmLmN1cnJlbnQ7XG4gICAgICAgIGlmICghZWwpIHJldHVybjtcbiAgICAgICAgY29uc3QgZHggPSBlLmNsaWVudFggLSBkLnN0YXJ0WDtcbiAgICAgICAgaWYgKE1hdGguYWJzKGR4KSA+IDUpIGQubW92ZWQgPSB0cnVlO1xuICAgICAgICBjb25zdCBpbnN0WCA9IGUuY2xpZW50WCAtIGQubGFzdFg7XG4gICAgICAgIGVsLnNjcm9sbExlZnQgLT0gaW5zdFg7XG4gICAgICAgIGNvbnN0IG5vdyA9IGUudGltZVN0YW1wIHx8IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICBjb25zdCBkdCA9IE1hdGgubWF4KG5vdyAtIGQubGFzdFQsIDEpO1xuICAgICAgICBkLnZlbG9jaXR5ID0gLWluc3RYICogKDE2LjY3IC8gZHQpO1xuICAgICAgICBkLmxhc3RYID0gZS5jbGllbnRYO1xuICAgICAgICBkLmxhc3RUID0gbm93O1xuICAgIH07XG4gICAgY29uc3Qgb25Qb2ludGVyVXAgPSAoZSkgPT4ge1xuICAgICAgICBjb25zdCBlbCA9IHN0cmlwUmVmLmN1cnJlbnQ7XG4gICAgICAgIGNvbnN0IGQgPSBkcmFnUmVmLmN1cnJlbnQ7XG4gICAgICAgIGNvbnN0IG1vdmVkID0gZC5tb3ZlZDtcbiAgICAgICAgY29uc3QgcmVsZWFzZVZlbCA9IGQudmVsb2NpdHk7XG4gICAgICAgIGQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGlmICghZWwpIHJldHVybjtcbiAgICAgICAgdHJ5IHsgZWwucmVsZWFzZVBvaW50ZXJDYXB0dXJlICYmIGVsLnJlbGVhc2VQb2ludGVyQ2FwdHVyZShlLnBvaW50ZXJJZCk7IH0gY2F0Y2ggKF8pIHt9XG4gICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ21jLXN0cmlwLWRyYWdnaW5nJyk7XG4gICAgICAgIGluZXJ0aWFWZWxSZWYuY3VycmVudCA9IE1hdGgubWF4KC00MCwgTWF0aC5taW4oNDAsIHJlbGVhc2VWZWwpKTtcbiAgICAgICAgaWYgKG1vdmVkKSB7XG4gICAgICAgICAgICBjb25zdCBibG9jayA9IChldikgPT4geyBldi5wcmV2ZW50RGVmYXVsdCgpOyBldi5zdG9wUHJvcGFnYXRpb24oKTsgfTtcbiAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYmxvY2ssIHsgY2FwdHVyZTogdHJ1ZSwgb25jZTogdHJ1ZSB9KTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBibG9jaywgdHJ1ZSksIDApO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYWdlIHBhZ2UtbGlnaHQnPlxuICAgICAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICAgICAgPFNpdGVOYXZiYXIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbnRyby1tYyc+XG5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J21jLWhlcm8nIGFyaWEtbGFiZWw9J01jTXVydHJ5IENvbGxlZ2UgaGVybyc+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYy1oZXJvLWJnJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPScvc3RhdGljL2dlbmVyYWxfcGljcy9tY20tcXVhZC5wbmcnIGFsdD0nJyBjbGFzc05hbWU9J21jLWhlcm8tYmctaW1nJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21jLWhlcm8tYmctb3ZlcmxheScgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J21jLWhlcm8tdGl0bGUnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdtYy1oZXJvLXRpdGxlLXdvcmQnPk1jTXVydHJ5PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9Jy9zdGF0aWMvbG9nb3MvaGVyby1jcmVzdC5wbmcnIGFsdD0nJyBjbGFzc05hbWU9J21jLWhlcm8tY3Jlc3QnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J21jLWhlcm8tdGl0bGUtd29yZCc+Q29sbGVnZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9J21jLWhlcm8tcGlsbHMnIGFyaWEtbGFiZWw9J1F1aWNrIGxpbmtzJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtoZXJvUGlsbHMubWFwKChwaWxsKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17cGlsbC5ocmVmfSBrZXk9e3BpbGwubGFiZWx9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J21jLWhlcm8tcGlsbCc+e3BpbGwubGFiZWx9PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9Jy9zdGF0aWMvbG9nb3MveXVydC1iYW5kLnBuZycgYWx0PScnIGNsYXNzTmFtZT0nbWMteXVydC1iYW5kJyBhcmlhLWhpZGRlbj0ndHJ1ZScgLz5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J21jLXN0cmlwJyBhcmlhLWxhYmVsPSdDb2xsZWdlIGhpZ2hsaWdodHMnPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J21jLXN0cmlwLXJvdydcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17c3RyaXBSZWZ9XG4gICAgICAgICAgICAgICAgICAgICAgICBvblNjcm9sbD17aGFuZGxlU2Nyb2xsfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25Qb2ludGVyRG93bj17b25Qb2ludGVyRG93bn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uUG9pbnRlck1vdmU9e29uUG9pbnRlck1vdmV9XG4gICAgICAgICAgICAgICAgICAgICAgICBvblBvaW50ZXJVcD17b25Qb2ludGVyVXB9XG4gICAgICAgICAgICAgICAgICAgICAgICBvblBvaW50ZXJDYW5jZWw9e29uUG9pbnRlclVwfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Wy4uLnRyaXBsZVN0cmlwLCAuLi50cmlwbGVTdHJpcF0ubWFwKChpdGVtLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9J21jLXN0cmlwLWNhcmQnIGtleT17YCR7aXRlbS5jYXB0aW9ufS0ke2l9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYy1zdHJpcC1pbWFnZS13cmFwJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2l0ZW0uc3JjfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17aSA8IHRyaXBsZVN0cmlwLmxlbmd0aCA/IGl0ZW0uY2FwdGlvbiA6ICcnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbWMtc3RyaXAtaW1hZ2UnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJhZ2dhYmxlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmlnY2FwdGlvbiBjbGFzc05hbWU9J21jLXN0cmlwLWNhcHRpb24nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdtYy1zdHJpcC1jYXB0aW9uLW1haW4nPntpdGVtLmNhcHRpb259PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdtYy1zdHJpcC1jYXB0aW9uLXN1Yic+e2l0ZW0uc3ViY2FwfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9maWdjYXB0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWMtc3RyaXAtZmFkZSBtYy1zdHJpcC1mYWRlLWxlZnQnIGFyaWEtaGlkZGVuPSd0cnVlJyAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWMtc3RyaXAtZmFkZSBtYy1zdHJpcC1mYWRlLXJpZ2h0JyBhcmlhLWhpZGRlbj0ndHJ1ZScgLz5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J21jLWZpbmQtdXMnIGFyaWEtbGFiZWw9J0ZpbmQgdXMgYXQgUmljZSc+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYy1maW5kLXVzLWlubmVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J21jLWZpbmQtdXMtaGVhZGluZyc+RmluZCBVcyBhdCBSaWNlPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbWMtZmluZC11cy1hZGRyZXNzJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNY011cnRyeSBDb2xsZWdlICZtaWRkb3Q7IDE2MDUgUmljZSBCbHZkICZtaWRkb3Q7IEhvdXN0b24sIFRYIDc3MDA1XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWMtZmluZC11cy1tYXAtd3JhcCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlmcmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT0nTWFwIHRvIE1jTXVydHJ5IENvbGxlZ2UgYXQgUmljZSBVbml2ZXJzaXR5J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J21jLWZpbmQtdXMtbWFwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9J2h0dHBzOi8vbWFwLmNvbmNlcHQzZC5jb20vP2lkPTQ3MyMhY2UvMTI2MzE/bS8xMTkxOTQ/cy8/c2JjLydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZz0nbGF6eSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmZXJyZXJQb2xpY3k9J25vLXJlZmVycmVyLXdoZW4tZG93bmdyYWRlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxvd0Z1bGxTY3JlZW49JydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbWMtZmluZC11cy1jdGEnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2Rpci8/YXBpPTEmZGVzdGluYXRpb249TWNNdXJ0cnkrQ29sbGVnZStSaWNlK1VuaXZlcnNpdHkrMTYwNStSaWNlK0JsdmQrSG91c3RvbitUWCs3NzAwNSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWw9J25vb3BlbmVyIG5vcmVmZXJyZXInXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgR2V0IERpcmVjdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj0ndHJ1ZScgY2xhc3NOYW1lPSdtYy1maW5kLXVzLWN0YS1hcnJvdyc+JnJzYXF1bzs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICAgICAgICAgIDxTaXRlRm9vdGVyIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwic291cmNlUm9vdCI6IiJ9