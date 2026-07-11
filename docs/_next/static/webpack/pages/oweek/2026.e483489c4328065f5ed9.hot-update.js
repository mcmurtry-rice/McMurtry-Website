webpackHotUpdate_N_E("pages/oweek/2026",{

/***/ "./components/oweek2026/LandingPage.js":
/*!*********************************************!*\
  !*** ./components/oweek2026/LandingPage.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _StripCarousel_StripCarousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../StripCarousel/StripCarousel */ "./components/StripCarousel/StripCarousel.js");
/* harmony import */ var _WatercolorFilters__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./WatercolorFilters */ "./components/oweek2026/WatercolorFilters.js");
/* harmony import */ var _ScrollToTop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ScrollToTop */ "./components/oweek2026/ScrollToTop.js");
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Sidebar */ "./components/oweek2026/Sidebar.js");
/* harmony import */ var _PageNav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PageNav */ "./components/oweek2026/PageNav.js");





var _jsxFileName = "C:\\Users\\anton\\Documents\\Projects\\MurtWebsite\\components\\oweek2026\\LandingPage.js",
  _this2 = undefined;
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;
function _callSuper(t, o, e) { return o = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(o), Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }






var countdown = __webpack_require__(/*! countdown */ "./node_modules/countdown/countdown.js");
var MOVE_IN_DATE = new Date(2026, 7, 16);
var CAROUSEL_IMAGES = [{
  src: '/static/oweek/2026/carousel/photo4.jpg',
  alt: 'Color Run',
  caption: 'McMurtry Spirit'
}, {
  src: '/static/oweek/2026/carousel/photo3.jpg',
  alt: 'Cheering in the Stands',
  caption: 'Murt Pride'
}, {
  src: '/static/oweek/2026/carousel/photo1.jpg',
  alt: 'Dancing in the Commons',
  caption: 'O-Week Traditions'
}, {
  src: '/static/general_pics/building.jpg',
  alt: 'McMurtry College Quad',
  caption: 'Your New Home'
}];
var Countdown = /*#__PURE__*/function (_React$Component) {
  function Countdown(props) {
    var _this;
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Countdown);
    _this = _callSuper(this, Countdown, [props]);
    _this.state = {
      time: ''
    };
    _this.updateTime = _this.updateTime.bind(_this);
    return _this;
  }
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Countdown, _React$Component);
  return Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Countdown, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateTime();
      this.interval = window.setInterval(this.updateTime, 1000);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.interval);
    }
  }, {
    key: "updateTime",
    value: function updateTime() {
      var ts = countdown(MOVE_IN_DATE);
      this.setState({
        time: ts.toString(),
        begun: ts.value >= 0
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
        time = _this$state.time,
        begun = _this$state.begun;
      if (begun) {
        return __jsx("div", {
          className: "groweek-countdown-wrap groweek-countdown-lilac groweek-countdown-begun",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 17
          }
        }, __jsx("p", {
          className: "groweek-countdown-time",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 21
          }
        }, "LET IT GRO-WEEK HAS BEGUN!!!!"));
      }
      return __jsx("div", {
        className: "groweek-countdown-wrap groweek-countdown-lilac",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 13
        }
      }, __jsx("p", {
        className: "groweek-countdown-time",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 17
        }
      }, time), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 17
        }
      }, "until O-Week!"));
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);
var LandingPage = function LandingPage() {
  return __jsx("div", {
    className: "groweek",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 5
    }
  }, __jsx(_WatercolorFilters__WEBPACK_IMPORTED_MODULE_7__["WatercolorFilters"], {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }), __jsx(_Sidebar__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }), __jsx(_ScrollToTop__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }), __jsx(_WatercolorFilters__WEBPACK_IMPORTED_MODULE_7__["WatercolorBlotch"], {
    color: "#c4aeda",
    size: 450,
    style: {
      top: '0%',
      left: '-12%'
    },
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }), __jsx(_WatercolorFilters__WEBPACK_IMPORTED_MODULE_7__["WatercolorBlotch"], {
    color: "#e8a4c8",
    size: 380,
    style: {
      top: '2%',
      right: '-8%'
    },
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }), __jsx(_WatercolorFilters__WEBPACK_IMPORTED_MODULE_7__["WatercolorBlotch"], {
    color: "#f0d86e",
    size: 300,
    style: {
      top: '22%',
      right: '-10%'
    },
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }), __jsx(_WatercolorFilters__WEBPACK_IMPORTED_MODULE_7__["WatercolorBlotch"], {
    color: "#c8e2f0",
    size: 420,
    style: {
      top: '40%',
      left: '-11%'
    },
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }), __jsx(_WatercolorFilters__WEBPACK_IMPORTED_MODULE_7__["WatercolorBlotch"], {
    color: "#e8985a",
    size: 350,
    style: {
      top: '55%',
      right: '-9%'
    },
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }), __jsx(_WatercolorFilters__WEBPACK_IMPORTED_MODULE_7__["WatercolorBlotch"], {
    color: "#c4aeda",
    size: 400,
    style: {
      top: '70%',
      left: '-10%'
    },
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }), __jsx(_WatercolorFilters__WEBPACK_IMPORTED_MODULE_7__["WatercolorBlotch"], {
    color: "#e8a4c8",
    size: 320,
    style: {
      top: '85%',
      right: '-7%'
    },
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }), __jsx(_WatercolorFilters__WEBPACK_IMPORTED_MODULE_7__["WatercolorBlotch"], {
    color: "#7db87a",
    size: 280,
    style: {
      bottom: '0%',
      left: '-8%'
    },
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }), __jsx("section", {
    className: "groweek-hero-seuss",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }, __jsx("h1", {
    className: "groweek-sr-only",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }, "Let It GrO-Week 2026 - McMurtry College Orientation Week"), __jsx("img", {
    className: "groweek-decor groweek-unless-decor",
    src: "/static/oweek/2026/decor/unless-stone.png",
    alt: "",
    "aria-hidden": "true",
    style: {
      top: '140px',
      right: '11%',
      width: '210px'
    },
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "groweek-hero-row",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "groweek-hero-illustration",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }
  }, __jsx("img", {
    className: "groweek-logo",
    src: "/static/oweek/2026/logo.png",
    alt: "Let It GrO-Week 2026 - McMurtry College",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "groweek-hero-text",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 17
    }
  }, __jsx("blockquote", {
    className: "groweek-hero-quote",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 21
    }
  }, "\"Unless someone like you cares a whole awful lot, nothing is going to get better. It's not.\""), __jsx("cite", {
    className: "groweek-hero-cite",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 21
    }
  }, "- Dr. Seuss, The Lorax"), __jsx("p", {
    className: "groweek-hero-welcome",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 21
    }
  }, "Welcome to McMurtry College, Class of 2030!"))), __jsx(Countdown, {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }
  })), __jsx("section", {
    className: "groweek-section groweek-decorated-section",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "groweek-section-title",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 13
    }
  }, "What is O-Week?"), __jsx("div", {
    className: "groweek-info-grid",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "groweek-info-card groweek-card-accented",
    style: {
      '--card-accent': 'var(--gw-purple)'
    },
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 17
    }
  }, __jsx("h3", {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 21
    }
  }, "The Basics"), __jsx("p", {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 21
    }
  }, "Orientation Week (O-Week) is your exciting introduction to life at Rice University and McMurtry College. Led by our dedicated coordinators and advisors, you'll participate in fun activities, college traditions, and bonding experiences that will help you make lifelong friends and feel at home.")), __jsx("div", {
    className: "groweek-info-card groweek-card-accented",
    style: {
      '--card-accent': 'var(--gw-pink)'
    },
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 17
    }
  }, __jsx("h3", {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 21
    }
  }, "Your O-Week Group"), __jsx("p", {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 21
    }
  }, "You'll be placed into an O-Week group with a small team of advisors who will guide you through the week. They're upperclassmen who've been in your shoes and are here to help you navigate everything - from finding your classes to finding your people.")))), __jsx("section", {
    className: "groweek-section groweek-decorated-section",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 9
    }
  }, __jsx("img", {
    className: "groweek-decor",
    src: "/static/oweek/2026/decor/truffula-patch.png",
    alt: "",
    "aria-hidden": "true",
    style: {
      bottom: '-30px',
      left: '-30px',
      width: '170px'
    },
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 13
    }
  }), __jsx("h2", {
    className: "groweek-section-title",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 13
    }
  }, "What to Expect"), __jsx("div", {
    className: "groweek-expect-grid",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "groweek-expect-item",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: "groweek-expect-icon",
    "aria-hidden": "true",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "ph ph-house",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 78
    }
  })), __jsx("div", {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 21
    }
  }, __jsx("h3", {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 25
    }
  }, "Moving In"), __jsx("p", {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 25
    }
  }, "You'll arrive on campus, move into your room at McMurtry, and meet your O-Week group and advisors for the first time. We'll be there to help you carry your stuff and welcome you home. This is your room for the entire academic year."))), __jsx("div", {
    className: "groweek-expect-item",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: "groweek-expect-icon",
    "aria-hidden": "true",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "ph ph-confetti",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 78
    }
  })), __jsx("div", {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 21
    }
  }, __jsx("h3", {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 25
    }
  }, "Activities & Traditions"), __jsx("p", {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 25
    }
  }, "From icebreakers and team-building to campus tours and Rice traditions, O-Week is packed with memorable moments. You'll explore Houston, bond with your group, and discover what makes McMurtry special."))), __jsx("div", {
    className: "groweek-expect-item",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: "groweek-expect-icon",
    "aria-hidden": "true",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "ph ph-books",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 78
    }
  })), __jsx("div", {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 21
    }
  }, __jsx("h3", {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 25
    }
  }, "Academic Prep"), __jsx("p", {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 25
    }
  }, "Meet with your academic advisors, learn about course registration, and get oriented to Rice's academic resources. You'll feel confident and ready before classes even start."))), __jsx("div", {
    className: "groweek-expect-item",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: "groweek-expect-icon",
    "aria-hidden": "true",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "ph ph-hands-clapping",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 78
    }
  })), __jsx("div", {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 21
    }
  }, __jsx("h3", {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 25
    }
  }, "Finding Your Community"), __jsx("p", {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 25
    }
  }, "O-Week is where lifelong friendships begin. Whether it's your O-Week family, your hallmates, or the clubs you discover at the activities fair - you'll find your people."))))), __jsx("section", {
    className: "groweek-carousel-section",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 9
    }
  }, __jsx(_StripCarousel_StripCarousel__WEBPACK_IMPORTED_MODULE_6__["default"], {
    images: CAROUSEL_IMAGES,
    fadeWidth: "8%",
    fadeColor: "245,234,214",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 13
    }
  })), __jsx("section", {
    className: "groweek-section groweek-decorated-section groweek-mission-section",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "groweek-section-title",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 13
    }
  }, "Our Mission"), __jsx("div", {
    className: "groweek-mission",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 13
    }
  }, __jsx("p", {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 17
    }
  }, "In the ", __jsx("strong", {
    className: "groweek-mission-pink",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 27
    }
  }, "McMurTREE forest"), ", every New Student will have the opportunity to grow, change, and adapt to their new environments. Just like a ", __jsx("strong", {
    className: "groweek-mission-pink",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 205
    }
  }, "truffula seed"), ", students need the right conditions to thrive. ", __jsx("strong", {
    className: "groweek-mission-blue",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 316
    }
  }, "Let It GrO-Week 2026"), " nurtures those conditions through ", __jsx("strong", {
    className: "groweek-mission-orange",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 421
    }
  }, "connection, guidance, and empathy"), ". With these resources, the newest sprouts can begin to plant their roots into both the McMurtry family we hold so much pride for and Rice University as a whole. New Students may think that college is daunting, but ", __jsx("strong", {
    className: "groweek-mission-pink",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 721
    }
  }, __jsx("em", {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 762
    }
  }, "how bad could it possibly be?"))), __jsx("p", {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 17
    }
  }, "Through being encouraged to ", __jsx("strong", {
    className: "groweek-mission-orange",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 48
    }
  }, "step outside their comfort zones, try something new, and learn through experience"), ", they will have all that they ", __jsx("strong", {
    className: "groweek-mission-pink",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 212
    }
  }, "thneed"), "."), __jsx("p", {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 17
    }
  }, "By the end of ", __jsx("strong", {
    className: "groweek-mission-blue",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 34
    }
  }, "Let It GrO-Week"), ", New Students will understand that growth comes from ", __jsx("strong", {
    className: "groweek-mission-orange",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 153
    }
  }, "asking for help, making mistakes, and taking initiative"), ". After all, ", __jsx("strong", {
    className: "groweek-mission-pink",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 273
    }
  }, "you can't reap what you don't sow"), ". A forest will flourish through community; advisors, the McTeam, affiliates, and fellow Murts are eager to offer the water, light, and nutrients needed to ", __jsx("strong", {
    className: "groweek-mission-pink",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 512
    }
  }, "celebrate each Murt's rebirth"), " in their new community."), __jsx("p", {
    className: "groweek-mission-tagline",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 17
    }
  }, "This is the place to Let It Grow!!!"))), __jsx("section", {
    className: "groweek-section groweek-decorated-section groweek-last-section",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "groweek-section-title",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 13
    }
  }, "Quick Info"), __jsx("div", {
    className: "groweek-info-grid groweek-quickinfo-grid",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "groweek-info-card groweek-card-accented",
    style: {
      '--card-accent': 'var(--gw-orange)'
    },
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 17
    }
  }, __jsx("h3", {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "ph ph-envelope",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 25
    }
  }), " Your Mailing Address"), __jsx("p", {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 21
    }
  }, "(Your Name)", __jsx("br", {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 35
    }
  }), "McMurtry College", __jsx("br", {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 57
    }
  }), "1605 Rice Blvd.", __jsx("br", {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 78
    }
  }), "Houston, TX 77005"), __jsx("p", {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 21
    }
  }, __jsx("strong", {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 24
    }
  }, __jsx("em", {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 32
    }
  }, "Nothing should be shipped to the college until after O-Week.")))), __jsx("div", {
    className: "groweek-info-card groweek-card-accented",
    style: {
      '--card-accent': 'var(--gw-green)'
    },
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 17
    }
  }, __jsx("h3", {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "ph ph-chat-circle-dots",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 25
    }
  }), " Questions?"), __jsx("p", {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 21
    }
  }, "Reach us anytime at ", __jsx("a", {
    href: "mailto:mcmurtryoweek@gmail.com",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 44
    }
  }, "mcmurtryoweek@gmail.com"))))), __jsx(_PageNav__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 9
    }
  }));
};
_c = LandingPage;
/* harmony default export */ __webpack_exports__["default"] = (LandingPage);
var _c;
$RefreshReg$(_c, "LandingPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9vd2VlazIwMjYvTGFuZGluZ1BhZ2UuanMiXSwibmFtZXMiOlsiY291bnRkb3duIiwicmVxdWlyZSIsIk1PVkVfSU5fREFURSIsIkRhdGUiLCJDQVJPVVNFTF9JTUFHRVMiLCJzcmMiLCJhbHQiLCJjYXB0aW9uIiwiQ291bnRkb3duIiwiX1JlYWN0JENvbXBvbmVudCIsInByb3BzIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY2FsbFN1cGVyIiwic3RhdGUiLCJ0aW1lIiwidXBkYXRlVGltZSIsImJpbmQiLCJfaW5oZXJpdHMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImNvbXBvbmVudERpZE1vdW50IiwiaW50ZXJ2YWwiLCJ3aW5kb3ciLCJzZXRJbnRlcnZhbCIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiY2xlYXJJbnRlcnZhbCIsInRzIiwic2V0U3RhdGUiLCJ0b1N0cmluZyIsImJlZ3VuIiwicmVuZGVyIiwiX3RoaXMkc3RhdGUiLCJfX2pzeCIsImNsYXNzTmFtZSIsIl9fc2VsZiIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiUmVhY3QiLCJDb21wb25lbnQiLCJMYW5kaW5nUGFnZSIsIl90aGlzMiIsIldhdGVyY29sb3JGaWx0ZXJzIiwiU2lkZWJhciIsIlNjcm9sbFRvVG9wIiwiV2F0ZXJjb2xvckJsb3RjaCIsImNvbG9yIiwic2l6ZSIsInN0eWxlIiwidG9wIiwibGVmdCIsInJpZ2h0IiwiYm90dG9tIiwid2lkdGgiLCJTdHJpcENhcm91c2VsIiwiaW1hZ2VzIiwiZmFkZVdpZHRoIiwiZmFkZUNvbG9yIiwiaHJlZiIsIlBhZ2VOYXYiLCJfYyIsIiRSZWZyZXNoUmVnJCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ2lDO0FBQ2U7QUFDbEM7QUFDUjtB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QyxLQUFLLEVBQUU7TUFBRUMsR0FBRyxFQUFFLElBQUk7TUFBRUMsSUFBSSxFQUFFO0lBQU8sQ0FBRTtJQUFBbEIsTUFBQSxFQUFBUyxNQUFBO0lBQUFSLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsQ0FBRSxDQUFDLEVBQ25GUCxLQUFBLENBQUNlLG1FQUFnQjtJQUFDQyxLQUFLLEVBQUMsU0FBUztJQUFDQyxJQUFJLEVBQUUsR0FBSTtJQUFDQyxLQUFLLEVBQUU7TUFBRUMsR0FBRyxFQUFFLElBQUk7TUFBRUUsS0FBSyxFQUFFO0lBQU0sQ0FBRTtJQUFBbkIsTUFBQSxFQUFBUyxNQUFBO0lBQUFSLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsQ0FBRSxDQUFDLEVBQ25GUCxLQUFBLENBQUNlLG1FQUFnQjtJQUFDQyxLQUFLLEVBQUMsU0FBUztJQUFDQyxJQUFJLEVBQUUsR0FBSTtJQUFDQyxLQUFLLEVBQUU7TUFBRUMsR0FBRyxFQUFFLEtBQUs7TUFBRUUsS0FBSyxFQUFFO0lBQU8sQ0FBRTtJQUFBbkIsTUFBQSxFQUFBUyxNQUFBO0lBQUFSLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsQ0FBRSxDQUFDLEVBQ3JGUCxLQUFBLENBQUNlLG1FQUFnQjtJQUFDQyxLQUFLLEVBQUMsU0FBUztJQUFDQyxJQUFJLEVBQUUsR0FBSTtJQUFDQyxLQUFLLEVBQUU7TUFBRUMsR0FBRyxFQUFFLEtBQUs7TUFBRUMsSUFBSSxFQUFFO0lBQU8sQ0FBRTtJQUFBbEIsTUFBQSxFQUFBUyxNQUFBO0lBQUFSLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsQ0FBRSxDQUFDLEVBQ3BGUCxLQUFBLENBQUNlLG1FQUFnQjtJQUFDQyxLQUFLLEVBQUMsU0FBUztJQUFDQyxJQUFJLEVBQUUsR0FBSTtJQUFDQyxLQUFLLEVBQUU7TUFBRUMsR0FBRyxFQUFFLEtBQUs7TUFBRUUsS0FBSyxFQUFFO0lBQU0sQ0FBRTtJQUFBbkIsTUFBQSxFQUFBUyxNQUFBO0lBQUFSLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsQ0FBRSxDQUFDLEVBQ3BGUCxLQUFBLENBQUNlLG1FQUFnQjtJQUFDQyxLQUFLLEVBQUMsU0FBUztJQUFDQyxJQUFJLEVBQUUsR0FBSTtJQUFDQyxLQUFLLEVBQUU7TUFBRUMsR0FBRyxFQUFFLEtBQUs7TUFBRUMsSUFBSSxFQUFFO0lBQU8sQ0FBRTtJQUFBbEIsTUFBQSxFQUFBUyxNQUFBO0lBQUFSLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsQ0FBRSxDQUFDLEVBQ3BGUCxLQUFBLENBQUNlLG1FQUFnQjtJQUFDQyxLQUFLLEVBQUMsU0FBUztJQUFDQyxJQUFJLEVBQUUsR0FBSTtJQUFDQyxLQUFLLEVBQUU7TUFBRUMsR0FBRyxFQUFFLEtBQUs7TUFBRUUsS0FBSyxFQUFFO0lBQU0sQ0FBRTtJQUFBbkIsTUFBQSxFQUFBUyxNQUFBO0lBQUFSLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsQ0FBRSxDQUFDLEVBQ3BGUCxLQUFBLENBQUNlLG1FQUFnQjtJQUFDQyxLQUFLLEVBQUMsU0FBUztJQUFDQyxJQUFJLEVBQUUsR0FBSTtJQUFDQyxLQUFLLEVBQUU7TUFBRUksTUFBTSxFQUFFLElBQUk7TUFBRUYsSUFBSSxFQUFFO0lBQU0sQ0FBRTtJQUFBbEIsTUFBQSxFQUFBUyxNQUFBO0lBQUFSLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsQ0FBRSxDQUFDLEVBR3JGUCxLQUFBO0lBQVNDLFNBQVMsRUFBQyxvQkFBb0I7SUFBQUMsTUFBQSxFQUFBUyxNQUFBO0lBQUFSLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDbkNQLEtBQUE7SUFBSUMsU0FBUyxFQUFDLGlCQUFpQjtJQUFBQyxNQUFBLEVBQUFTLE1BQUE7SUFBQVIsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSw2REFBNkQsQ0FBQyxFQUM3RlAsS0FBQTtJQUFLQyxTQUFTLEVBQUMsb0NBQW9DO0lBQUM5QixHQUFHLEVBQUMsMkNBQTJDO0lBQUNDLEdBQUcsRUFBQyxFQUFFO0lBQUMsZUFBWSxNQUFNO0lBQUM4QyxLQUFLLEVBQUU7TUFBRUMsR0FBRyxFQUFFLE9BQU87TUFBRUUsS0FBSyxFQUFFLEtBQUs7TUFBRUUsS0FBSyxFQUFFO0lBQVEsQ0FBRTtJQUFBckIsTUFBQSxFQUFBUyxNQUFBO0lBQUFSLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsQ0FBRSxDQUFDLEVBQ3ZMUCxLQUFBO0lBQUtDLFNBQVMsRUFBQyxrQkFBa0I7SUFBQUMsTUFBQSxFQUFBUyxNQUFBO0lBQUFSLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDN0JQLEtBQUE7SUFBS0MsU0FBUyxFQUFDLDJCQUEyQjtJQUFBQyxNQUFBLEVBQUFTLE1BQUE7SUFBQVIsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUN0Q1AsS0FBQTtJQUNJQyxTQUFTLEVBQUMsY0FBYztJQUN4QjlCLEdBQUcsRUFBQyw2QkFBNkI7SUFDakNDLEdBQUcsRUFBQyx5Q0FBeUM7SUFBQThCLE1BQUEsRUFBQVMsTUFBQTtJQUFBUixRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLENBQ2hELENBQ0EsQ0FBQyxFQUNOUCxLQUFBO0lBQUtDLFNBQVMsRUFBQyxtQkFBbUI7SUFBQUMsTUFBQSxFQUFBUyxNQUFBO0lBQUFSLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDOUJQLEtBQUE7SUFBWUMsU0FBUyxFQUFDLG9CQUFvQjtJQUFBQyxNQUFBLEVBQUFTLE1BQUE7SUFBQVIsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxtR0FFOUIsQ0FBQyxFQUNiUCxLQUFBO0lBQU1DLFNBQVMsRUFBQyxtQkFBbUI7SUFBQUMsTUFBQSxFQUFBUyxNQUFBO0lBQUFSLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsMkJBQTZCLENBQUMsRUFDakVQLEtBQUE7SUFBR0MsU0FBUyxFQUFDLHNCQUFzQjtJQUFBQyxNQUFBLEVBQUFTLE1BQUE7SUFBQVIsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxnREFBK0MsQ0FDakYsQ0FDSixDQUFDLEVBQ05QLEtBQUEsQ0FBQzFCLFNBQVM7SUFBQTRCLE1BQUEsRUFBQVMsTUFBQTtJQUFBUixRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLENBQUUsQ0FDUCxDQUFDLEVBR1ZQLEtBQUE7SUFBU0MsU0FBUyxFQUFDLDJDQUEyQztJQUFBQyxNQUFBLEVBQUFTLE1BQUE7SUFBQVIsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUMxRFAsS0FBQTtJQUFJQyxTQUFTLEVBQUMsdUJBQXVCO0lBQUFDLE1BQUEsRUFBQVMsTUFBQTtJQUFBUixRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLG9CQUFvQixDQUFDLEVBQzFEUCxLQUFBO0lBQUtDLFNBQVMsRUFBQyxtQkFBbUI7SUFBQUMsTUFBQSxFQUFBUyxNQUFBO0lBQUFSLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDOUJQLEtBQUE7SUFBS0MsU0FBUyxFQUFDLHlDQUF5QztJQUFDaUIsS0FBSyxFQUFFO01BQUUsZUFBZSxFQUFFO0lBQW1CLENBQUU7SUFBQWhCLE1BQUEsRUFBQVMsTUFBQTtJQUFBUixRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQ3BHUCxLQUFBO0lBQUFFLE1BQUEsRUFBQVMsTUFBQTtJQUFBUixRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLGVBQWtCLENBQUMsRUFDbkJQLEtBQUE7SUFBQUUsTUFBQSxFQUFBUyxNQUFBO0lBQUFSLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsMFNBS0csQ0FDRixDQUFDLEVBQ05QLEtBQUE7SUFBS0MsU0FBUyxFQUFDLHlDQUF5QztJQUFDaUIsS0FBSyxFQUFFO01BQUUsZUFBZSxFQUFFO0lBQWlCLENBQUU7SUFBQWhCLE1BQUEsRUFBQVMsTUFBQTtJQUFBUixRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQ2xHUCxLQUFBO0lBQUFFLE1BQUEsRUFBQVMsTUFBQTtJQUFBUixRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLHNCQUF5QixDQUFDLEVBQzFCUCxLQUFBO0lBQUFFLE1BQUEsRUFBQVMsTUFBQTtJQUFBUixRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLDhQQUtHLENBQ0YsQ0FDSixDQUNBLENBQUMsRUFHVlAsS0FBQTtJQUFTQyxTQUFTLEVBQUMsMkNBQTJDO0lBQUFDLE1BQUEsRUFBQVMsTUFBQTtJQUFBUixRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQzFEUCxLQUFBO0lBQUtDLFNBQVMsRUFBQyxlQUFlO0lBQUM5QixHQUFHLEVBQUMsNkNBQTZDO0lBQUNDLEdBQUcsRUFBQyxFQUFFO0lBQUMsZUFBWSxNQUFNO0lBQUM4QyxLQUFLLEVBQUU7TUFBRUksTUFBTSxFQUFFLE9BQU87TUFBRUYsSUFBSSxFQUFFLE9BQU87TUFBRUcsS0FBSyxFQUFFO0lBQVEsQ0FBRTtJQUFBckIsTUFBQSxFQUFBUyxNQUFBO0lBQUFSLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsQ0FBRSxDQUFDLEVBQ3hLUCxLQUFBO0lBQUlDLFNBQVMsRUFBQyx1QkFBdUI7SUFBQUMsTUFBQSxFQUFBUyxNQUFBO0lBQUFSLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsbUJBQW1CLENBQUMsRUFDekRQLEtBQUE7SUFBS0MsU0FBUyxFQUFDLHFCQUFxQjtJQUFBQyxNQUFBLEVBQUFTLE1BQUE7SUFBQVIsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUNoQ1AsS0FBQTtJQUFLQyxTQUFTLEVBQUMscUJBQXFCO0lBQUFDLE1BQUEsRUFBQVMsTUFBQTtJQUFBUixRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQ2hDUCxLQUFBO0lBQU1DLFNBQVMsRUFBQyxxQkFBcUI7SUFBQyxlQUFZLE1BQU07SUFBQUMsTUFBQSxFQUFBUyxNQUFBO0lBQUFSLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FBQ1AsS0FBQTtJQUFHQyxTQUFTLEVBQUMsYUFBYTtJQUFBQyxNQUFBLEVBQUFTLE1BQUE7SUFBQVIsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxDQUFFLENBQU8sQ0FBQyxFQUM3RlAsS0FBQTtJQUFBRSxNQUFBLEVBQUFTLE1BQUE7SUFBQVIsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUNJUCxLQUFBO0lBQUFFLE1BQUEsRUFBQVMsTUFBQTtJQUFBUixRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLGNBQWlCLENBQUMsRUFDbEJQLEtBQUE7SUFBQUUsTUFBQSxFQUFBUyxNQUFBO0lBQUFSLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsNE9BQTZPLENBQzVPLENBQ0osQ0FBQyxFQUNOUCxLQUFBO0lBQUtDLFNBQVMsRUFBQyxxQkFBcUI7SUFBQUMsTUFBQSxFQUFBUyxNQUFBO0lBQUFSLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDaENQLEtBQUE7SUFBTUMsU0FBUyxFQUFDLHFCQUFxQjtJQUFDLGVBQVksTUFBTTtJQUFBQyxNQUFBLEVBQUFTLE1BQUE7SUFBQVIsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUFDUCxLQUFBO0lBQUdDLFNBQVMsRUFBQyxnQkFBZ0I7SUFBQUMsTUFBQSxFQUFBUyxNQUFBO0lBQUFSLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsQ0FBRSxDQUFPLENBQUMsRUFDaEdQLEtBQUE7SUFBQUUsTUFBQSxFQUFBUyxNQUFBO0lBQUFSLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDSVAsS0FBQTtJQUFBRSxNQUFBLEVBQUFTLE1BQUE7SUFBQVIsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSw0QkFBbUMsQ0FBQyxFQUNwQ1AsS0FBQTtJQUFBRSxNQUFBLEVBQUFTLE1BQUE7SUFBQVIsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSw2TUFBOE0sQ0FDN00sQ0FDSixDQUFDLEVBQ05QLEtBQUE7SUFBS0MsU0FBUyxFQUFDLHFCQUFxQjtJQUFBQyxNQUFBLEVBQUFTLE1BQUE7SUFBQVIsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUNoQ1AsS0FBQTtJQUFNQyxTQUFTLEVBQUMscUJBQXFCO0lBQUMsZUFBWSxNQUFNO0lBQUFDLE1BQUEsRUFBQVMsTUFBQTtJQUFBUixRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQUNQLEtBQUE7SUFBR0MsU0FBUyxFQUFDLGFBQWE7SUFBQUMsTUFBQSxFQUFBUyxNQUFBO0lBQUFSLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsQ0FBRSxDQUFPLENBQUMsRUFDN0ZQLEtBQUE7SUFBQUUsTUFBQSxFQUFBUyxNQUFBO0lBQUFSLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDSVAsS0FBQTtJQUFBRSxNQUFBLEVBQUFTLE1BQUE7SUFBQVIsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxrQkFBcUIsQ0FBQyxFQUN0QlAsS0FBQTtJQUFBRSxNQUFBLEVBQUFTLE1BQUE7SUFBQVIsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxpTEFBa0wsQ0FDakwsQ0FDSixDQUFDLEVBQ05QLEtBQUE7SUFBS0MsU0FBUyxFQUFDLHFCQUFxQjtJQUFBQyxNQUFBLEVBQUFTLE1BQUE7SUFBQVIsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUNoQ1AsS0FBQTtJQUFNQyxTQUFTLEVBQUMscUJBQXFCO0lBQUMsZUFBWSxNQUFNO0lBQUFDLE1BQUEsRUFBQVMsTUFBQTtJQUFBUixRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQUNQLEtBQUE7SUFBR0MsU0FBUyxFQUFDLHNCQUFzQjtJQUFBQyxNQUFBLEVBQUFTLE1BQUE7SUFBQVIsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxDQUFFLENBQU8sQ0FBQyxFQUN0R1AsS0FBQTtJQUFBRSxNQUFBLEVBQUFTLE1BQUE7SUFBQVIsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUNJUCxLQUFBO0lBQUFFLE1BQUEsRUFBQVMsTUFBQTtJQUFBUixRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLDJCQUE4QixDQUFDLEVBQy9CUCxLQUFBO0lBQUFFLE1BQUEsRUFBQVMsTUFBQTtJQUFBUixRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLDZLQUE4SyxDQUM3SyxDQUNKLENBQ0osQ0FDQSxDQUFDLEVBR1ZQLEtBQUE7SUFBU0MsU0FBUyxFQUFDLDBCQUEwQjtJQUFBQyxNQUFBLEVBQUFTLE1BQUE7SUFBQVIsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUN6Q1AsS0FBQSxDQUFDd0Isb0VBQWE7SUFBQ0MsTUFBTSxFQUFFdkQsZUFBZ0I7SUFBQ3dELFNBQVMsRUFBQyxJQUFJO0lBQUNDLFNBQVMsRUFBQyxhQUFhO0lBQUF6QixNQUFBLEVBQUFTLE1BQUE7SUFBQVIsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxDQUFFLENBQzNFLENBQUMsRUFHVlAsS0FBQTtJQUFTQyxTQUFTLEVBQUMsbUVBQW1FO0lBQUFDLE1BQUEsRUFBQVMsTUFBQTtJQUFBUixRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQ2xGUCxLQUFBO0lBQUlDLFNBQVMsRUFBQyx1QkFBdUI7SUFBQUMsTUFBQSxFQUFBUyxNQUFBO0lBQUFSLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsZ0JBQWdCLENBQUMsRUFDdERQLEtBQUE7SUFBS0MsU0FBUyxFQUFDLGlCQUFpQjtJQUFBQyxNQUFBLEVBQUFTLE1BQUE7SUFBQVIsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUM1QlAsS0FBQTtJQUFBRSxNQUFBLEVBQUFTLE1BQUE7SUFBQVIsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxjQUFVUCxLQUFBO0lBQVFDLFNBQVMsRUFBQyxzQkFBc0I7SUFBQUMsTUFBQSxFQUFBUyxNQUFBO0lBQUFSLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEscUJBQXlCLENBQUMsc0hBQWdIUCxLQUFBO0lBQVFDLFNBQVMsRUFBQyxzQkFBc0I7SUFBQUMsTUFBQSxFQUFBUyxNQUFBO0lBQUFSLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsa0JBQXNCLENBQUMsc0RBQWdEUCxLQUFBO0lBQVFDLFNBQVMsRUFBQyxzQkFBc0I7SUFBQUMsTUFBQSxFQUFBUyxNQUFBO0lBQUFSLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEseUJBQTZCLENBQUMseUNBQW1DUCxLQUFBO0lBQVFDLFNBQVMsRUFBQyx3QkFBd0I7SUFBQUMsTUFBQSxFQUFBUyxNQUFBO0lBQUFSLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsc0NBQTBDLENBQUMsNk5BQXVOUCxLQUFBO0lBQVFDLFNBQVMsRUFBQyxzQkFBc0I7SUFBQUMsTUFBQSxFQUFBUyxNQUFBO0lBQUFSLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FBQ1AsS0FBQTtJQUFBRSxNQUFBLEVBQUFTLE1BQUE7SUFBQVIsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxrQ0FBcUMsQ0FBUyxDQUFJLENBQUMsRUFDNXhCUCxLQUFBO0lBQUFFLE1BQUEsRUFBQVMsTUFBQTtJQUFBUixRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLG1DQUErQlAsS0FBQTtJQUFRQyxTQUFTLEVBQUMsd0JBQXdCO0lBQUFDLE1BQUEsRUFBQVMsTUFBQTtJQUFBUixRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLHNGQUEwRixDQUFDLHFDQUErQlAsS0FBQTtJQUFRQyxTQUFTLEVBQUMsc0JBQXNCO0lBQUFDLE1BQUEsRUFBQVMsTUFBQTtJQUFBUixRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLFdBQWUsQ0FBQyxLQUFJLENBQUMsRUFDaFFQLEtBQUE7SUFBQUUsTUFBQSxFQUFBUyxNQUFBO0lBQUFSLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEscUJBQWlCUCxLQUFBO0lBQVFDLFNBQVMsRUFBQyxzQkFBc0I7SUFBQUMsTUFBQSxFQUFBUyxNQUFBO0lBQUFSLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsb0JBQXdCLENBQUMsNERBQXNEUCxLQUFBO0lBQVFDLFNBQVMsRUFBQyx3QkFBd0I7SUFBQUMsTUFBQSxFQUFBUyxNQUFBO0lBQUFSLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsNERBQWdFLENBQUMsbUJBQWFQLEtBQUE7SUFBUUMsU0FBUyxFQUFDLHNCQUFzQjtJQUFBQyxNQUFBLEVBQUFTLE1BQUE7SUFBQVIsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxzQ0FBMEMsQ0FBQyxrS0FBNEpQLEtBQUE7SUFBUUMsU0FBUyxFQUFDLHNCQUFzQjtJQUFBQyxNQUFBLEVBQUFTLE1BQUE7SUFBQVIsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxrQ0FBc0MsQ0FBQyw0QkFBMkIsQ0FBQyxFQUMxbEJQLEtBQUE7SUFBR0MsU0FBUyxFQUFDLHlCQUF5QjtJQUFBQyxNQUFBLEVBQUFTLE1BQUE7SUFBQVIsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSx3Q0FBdUMsQ0FDNUUsQ0FDQSxDQUFDLEVBR1ZQLEtBQUE7SUFBU0MsU0FBUyxFQUFDLGdFQUFnRTtJQUFBQyxNQUFBLEVBQUFTLE1BQUE7SUFBQVIsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUMvRVAsS0FBQTtJQUFJQyxTQUFTLEVBQUMsdUJBQXVCO0lBQUFDLE1BQUEsRUFBQVMsTUFBQTtJQUFBUixRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLGVBQWUsQ0FBQyxFQUNyRFAsS0FBQTtJQUFLQyxTQUFTLEVBQUMsMENBQTBDO0lBQUFDLE1BQUEsRUFBQVMsTUFBQTtJQUFBUixRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQ3JEUCxLQUFBO0lBQUtDLFNBQVMsRUFBQyx5Q0FBeUM7SUFBQ2lCLEtBQUssRUFBRTtNQUFFLGVBQWUsRUFBRTtJQUFtQixDQUFFO0lBQUFoQixNQUFBLEVBQUFTLE1BQUE7SUFBQVIsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUNwR1AsS0FBQTtJQUFBRSxNQUFBLEVBQUFTLE1BQUE7SUFBQVIsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUFJUCxLQUFBO0lBQUdDLFNBQVMsRUFBQyxnQkFBZ0I7SUFBQUMsTUFBQSxFQUFBUyxNQUFBO0lBQUFSLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsQ0FBRSxDQUFDLHlCQUF5QixDQUFDLEVBQzlEUCxLQUFBO0lBQUFFLE1BQUEsRUFBQVMsTUFBQTtJQUFBUixRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLGtCQUFjUCxLQUFBO0lBQUFFLE1BQUEsRUFBQVMsTUFBQTtJQUFBUixRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLENBQUssQ0FBQyxzQkFBZ0JQLEtBQUE7SUFBQUUsTUFBQSxFQUFBUyxNQUFBO0lBQUFSLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsQ0FBSyxDQUFDLHFCQUFlUCxLQUFBO0lBQUFFLE1BQUEsRUFBQVMsTUFBQTtJQUFBUixRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLENBQUssQ0FBQyxxQkFBb0IsQ0FBQyxFQUNwRlAsS0FBQTtJQUFBRSxNQUFBLEVBQUFTLE1BQUE7SUFBQVIsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUFHUCxLQUFBO0lBQUFFLE1BQUEsRUFBQVMsTUFBQTtJQUFBUixRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQVFQLEtBQUE7SUFBQUUsTUFBQSxFQUFBUyxNQUFBO0lBQUFSLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsaUVBQW9FLENBQVMsQ0FBSSxDQUMzRixDQUFDLEVBQ05QLEtBQUE7SUFBS0MsU0FBUyxFQUFDLHlDQUF5QztJQUFDaUIsS0FBSyxFQUFFO01BQUUsZUFBZSxFQUFFO0lBQWtCLENBQUU7SUFBQWhCLE1BQUEsRUFBQVMsTUFBQTtJQUFBUixRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQ25HUCxLQUFBO0lBQUFFLE1BQUEsRUFBQVMsTUFBQTtJQUFBUixRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQUlQLEtBQUE7SUFBR0MsU0FBUyxFQUFDLHdCQUF3QjtJQUFBQyxNQUFBLEVBQUFTLE1BQUE7SUFBQVIsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxDQUFFLENBQUMsZUFBZSxDQUFDLEVBQzVEUCxLQUFBO0lBQUFFLE1BQUEsRUFBQVMsTUFBQTtJQUFBUixRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLDJCQUF1QlAsS0FBQTtJQUFHNEIsSUFBSSxFQUFDLGdDQUFnQztJQUFBMUIsTUFBQSxFQUFBUyxNQUFBO0lBQUFSLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsNEJBQTJCLENBQUksQ0FDN0YsQ0FDSixDQUNBLENBQUMsRUFFVlAsS0FBQSxDQUFDNkIsaURBQU87SUFBQTNCLE1BQUEsRUFBQVMsTUFBQTtJQUFBUixRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLENBQUUsQ0FDVCxDQUFDO0FBQUEsQ0FDVDtBQUFDdUIsRUFBQSxHQXRJSXBCLFdBQVc7QUF3SUZBLDBFQUFXLEVBQUM7QUFBQSxJQUFBb0IsRUFBQTtBQUFBQyxZQUFBLENBQUFELEVBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvb3dlZWsvMjAyNi5lNDgzNDg5YzQzMjgwNjVmNWVkOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFN0cmlwQ2Fyb3VzZWwgZnJvbSAnLi4vU3RyaXBDYXJvdXNlbC9TdHJpcENhcm91c2VsJztcclxuaW1wb3J0IHsgV2F0ZXJjb2xvckZpbHRlcnMsIFdhdGVyY29sb3JCbG90Y2ggfSBmcm9tICcuL1dhdGVyY29sb3JGaWx0ZXJzJztcclxuaW1wb3J0IFNjcm9sbFRvVG9wIGZyb20gJy4vU2Nyb2xsVG9Ub3AnO1xyXG5pbXBvcnQgU2lkZWJhciBmcm9tICcuL1NpZGViYXInO1xyXG5pbXBvcnQgUGFnZU5hdiBmcm9tICcuL1BhZ2VOYXYnO1xyXG52YXIgY291bnRkb3duID0gcmVxdWlyZSgnY291bnRkb3duJyk7XHJcblxyXG5jb25zdCBNT1ZFX0lOX0RBVEUgPSBuZXcgRGF0ZSgyMDI2LCA3LCAxNik7XHJcblxyXG5jb25zdCBDQVJPVVNFTF9JTUFHRVMgPSBbXHJcbiAgICB7IHNyYzogJy9zdGF0aWMvb3dlZWsvMjAyNi9jYXJvdXNlbC9waG90bzQuanBnJywgYWx0OiAnQ29sb3IgUnVuJywgY2FwdGlvbjogJ01jTXVydHJ5IFNwaXJpdCcgfSxcclxuICAgIHsgc3JjOiAnL3N0YXRpYy9vd2Vlay8yMDI2L2Nhcm91c2VsL3Bob3RvMy5qcGcnLCBhbHQ6ICdDaGVlcmluZyBpbiB0aGUgU3RhbmRzJywgY2FwdGlvbjogJ011cnQgUHJpZGUnIH0sXHJcbiAgICB7IHNyYzogJy9zdGF0aWMvb3dlZWsvMjAyNi9jYXJvdXNlbC9waG90bzEuanBnJywgYWx0OiAnRGFuY2luZyBpbiB0aGUgQ29tbW9ucycsIGNhcHRpb246ICdPLVdlZWsgVHJhZGl0aW9ucycgfSxcclxuICAgIHsgc3JjOiAnL3N0YXRpYy9nZW5lcmFsX3BpY3MvYnVpbGRpbmcuanBnJywgYWx0OiAnTWNNdXJ0cnkgQ29sbGVnZSBRdWFkJywgY2FwdGlvbjogJ1lvdXIgTmV3IEhvbWUnIH0sXHJcbl07XHJcblxyXG5jbGFzcyBDb3VudGRvd24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgdGltZTogJycgfTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVRpbWUgPSB0aGlzLnVwZGF0ZVRpbWUuYmluZCh0aGlzKTtcclxuICAgIH1cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlVGltZSgpO1xyXG4gICAgICAgIHRoaXMuaW50ZXJ2YWwgPSB3aW5kb3cuc2V0SW50ZXJ2YWwodGhpcy51cGRhdGVUaW1lLCAxMDAwKTtcclxuICAgIH1cclxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkgeyBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpOyB9XHJcbiAgICB1cGRhdGVUaW1lKCkge1xyXG4gICAgICAgIGNvbnN0IHRzID0gY291bnRkb3duKE1PVkVfSU5fREFURSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRpbWU6IHRzLnRvU3RyaW5nKCksIGJlZ3VuOiB0cy52YWx1ZSA+PSAwIH0pO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgdGltZSwgYmVndW4gfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgaWYgKGJlZ3VuKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3dlZWstY291bnRkb3duLXdyYXAgZ3Jvd2Vlay1jb3VudGRvd24tbGlsYWMgZ3Jvd2Vlay1jb3VudGRvd24tYmVndW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJncm93ZWVrLWNvdW50ZG93bi10aW1lXCI+TEVUIElUIEdSTy1XRUVLIEhBUyBCRUdVTiEhISE8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm93ZWVrLWNvdW50ZG93bi13cmFwIGdyb3dlZWstY291bnRkb3duLWxpbGFjXCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJncm93ZWVrLWNvdW50ZG93bi10aW1lXCI+e3RpbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+dW50aWwgTy1XZWVrITwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgTGFuZGluZ1BhZ2UgPSAoKSA9PiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3dlZWtcIj5cclxuICAgICAgICA8V2F0ZXJjb2xvckZpbHRlcnMgLz5cclxuICAgICAgICA8U2lkZWJhciAvPlxyXG4gICAgICAgIDxTY3JvbGxUb1RvcCAvPlxyXG5cclxuICAgICAgICB7LyogSW50ZW50aW9uYWwgYmxvdGNoZXMgLSBjbHVzdGVyZWQgYXQgdHJhbnNpdGlvbnMsIG5vdCBtZWNoYW5pY2FsICovfVxyXG4gICAgICAgIDxXYXRlcmNvbG9yQmxvdGNoIGNvbG9yPVwiI2M0YWVkYVwiIHNpemU9ezQ1MH0gc3R5bGU9e3sgdG9wOiAnMCUnLCBsZWZ0OiAnLTEyJScgfX0gLz5cclxuICAgICAgICA8V2F0ZXJjb2xvckJsb3RjaCBjb2xvcj1cIiNlOGE0YzhcIiBzaXplPXszODB9IHN0eWxlPXt7IHRvcDogJzIlJywgcmlnaHQ6ICctOCUnIH19IC8+XHJcbiAgICAgICAgPFdhdGVyY29sb3JCbG90Y2ggY29sb3I9XCIjZjBkODZlXCIgc2l6ZT17MzAwfSBzdHlsZT17eyB0b3A6ICcyMiUnLCByaWdodDogJy0xMCUnIH19IC8+XHJcbiAgICAgICAgPFdhdGVyY29sb3JCbG90Y2ggY29sb3I9XCIjYzhlMmYwXCIgc2l6ZT17NDIwfSBzdHlsZT17eyB0b3A6ICc0MCUnLCBsZWZ0OiAnLTExJScgfX0gLz5cclxuICAgICAgICA8V2F0ZXJjb2xvckJsb3RjaCBjb2xvcj1cIiNlODk4NWFcIiBzaXplPXszNTB9IHN0eWxlPXt7IHRvcDogJzU1JScsIHJpZ2h0OiAnLTklJyB9fSAvPlxyXG4gICAgICAgIDxXYXRlcmNvbG9yQmxvdGNoIGNvbG9yPVwiI2M0YWVkYVwiIHNpemU9ezQwMH0gc3R5bGU9e3sgdG9wOiAnNzAlJywgbGVmdDogJy0xMCUnIH19IC8+XHJcbiAgICAgICAgPFdhdGVyY29sb3JCbG90Y2ggY29sb3I9XCIjZThhNGM4XCIgc2l6ZT17MzIwfSBzdHlsZT17eyB0b3A6ICc4NSUnLCByaWdodDogJy03JScgfX0gLz5cclxuICAgICAgICA8V2F0ZXJjb2xvckJsb3RjaCBjb2xvcj1cIiM3ZGI4N2FcIiBzaXplPXsyODB9IHN0eWxlPXt7IGJvdHRvbTogJzAlJywgbGVmdDogJy04JScgfX0gLz5cclxuXHJcbiAgICAgICAgey8qIEhlcm8gLSBzdG9yeWJvb2sgb3BlbmluZzogaWxsdXN0cmF0aW9uICsgcXVvdGUsIGNvdW50ZG93biBjZW50ZXJlZCBiZWxvdyAqL31cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJncm93ZWVrLWhlcm8tc2V1c3NcIj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImdyb3dlZWstc3Itb25seVwiPkxldCBJdCBHck8tV2VlayAyMDI2IC0gTWNNdXJ0cnkgQ29sbGVnZSBPcmllbnRhdGlvbiBXZWVrPC9oMT5cclxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJncm93ZWVrLWRlY29yIGdyb3dlZWstdW5sZXNzLWRlY29yXCIgc3JjPVwiL3N0YXRpYy9vd2Vlay8yMDI2L2RlY29yL3VubGVzcy1zdG9uZS5wbmdcIiBhbHQ9XCJcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBzdHlsZT17eyB0b3A6ICcxNDBweCcsIHJpZ2h0OiAnMTElJywgd2lkdGg6ICcyMTBweCcgfX0gLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm93ZWVrLWhlcm8tcm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3dlZWstaGVyby1pbGx1c3RyYXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyb3dlZWstbG9nb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9zdGF0aWMvb3dlZWsvMjAyNi9sb2dvLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkxldCBJdCBHck8tV2VlayAyMDI2IC0gTWNNdXJ0cnkgQ29sbGVnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm93ZWVrLWhlcm8tdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxibG9ja3F1b3RlIGNsYXNzTmFtZT1cImdyb3dlZWstaGVyby1xdW90ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlVubGVzcyBzb21lb25lIGxpa2UgeW91IGNhcmVzIGEgd2hvbGUgYXdmdWwgbG90LCBub3RoaW5nIGlzIGdvaW5nIHRvIGdldCBiZXR0ZXIuIEl0J3Mgbm90LlwiXHJcbiAgICAgICAgICAgICAgICAgICAgPC9ibG9ja3F1b3RlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxjaXRlIGNsYXNzTmFtZT1cImdyb3dlZWstaGVyby1jaXRlXCI+LSBEci4gU2V1c3MsIFRoZSBMb3JheDwvY2l0ZT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJncm93ZWVrLWhlcm8td2VsY29tZVwiPldlbGNvbWUgdG8gTWNNdXJ0cnkgQ29sbGVnZSwgQ2xhc3Mgb2YgMjAzMCE8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxDb3VudGRvd24gLz5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgIHsvKiBXaGF0IGlzIE8tV2VlayAqL31cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJncm93ZWVrLXNlY3Rpb24gZ3Jvd2Vlay1kZWNvcmF0ZWQtc2VjdGlvblwiPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZ3Jvd2Vlay1zZWN0aW9uLXRpdGxlXCI+V2hhdCBpcyBPLVdlZWs/PC9oMj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm93ZWVrLWluZm8tZ3JpZFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm93ZWVrLWluZm8tY2FyZCBncm93ZWVrLWNhcmQtYWNjZW50ZWRcIiBzdHlsZT17eyAnLS1jYXJkLWFjY2VudCc6ICd2YXIoLS1ndy1wdXJwbGUpJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+VGhlIEJhc2ljczwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE9yaWVudGF0aW9uIFdlZWsgKE8tV2VlaykgaXMgeW91ciBleGNpdGluZyBpbnRyb2R1Y3Rpb24gdG8gbGlmZSBhdCBSaWNlIFVuaXZlcnNpdHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5kIE1jTXVydHJ5IENvbGxlZ2UuIExlZCBieSBvdXIgZGVkaWNhdGVkIGNvb3JkaW5hdG9ycyBhbmQgYWR2aXNvcnMsIHlvdSdsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNpcGF0ZSBpbiBmdW4gYWN0aXZpdGllcywgY29sbGVnZSB0cmFkaXRpb25zLCBhbmQgYm9uZGluZyBleHBlcmllbmNlcyB0aGF0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbGwgaGVscCB5b3UgbWFrZSBsaWZlbG9uZyBmcmllbmRzIGFuZCBmZWVsIGF0IGhvbWUuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3dlZWstaW5mby1jYXJkIGdyb3dlZWstY2FyZC1hY2NlbnRlZFwiIHN0eWxlPXt7ICctLWNhcmQtYWNjZW50JzogJ3ZhcigtLWd3LXBpbmspJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+WW91ciBPLVdlZWsgR3JvdXA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBZb3UnbGwgYmUgcGxhY2VkIGludG8gYW4gTy1XZWVrIGdyb3VwIHdpdGggYSBzbWFsbCB0ZWFtIG9mIGFkdmlzb3JzIHdobyB3aWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGd1aWRlIHlvdSB0aHJvdWdoIHRoZSB3ZWVrLiBUaGV5J3JlIHVwcGVyY2xhc3NtZW4gd2hvJ3ZlIGJlZW4gaW4geW91ciBzaG9lcyBhbmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJlIGhlcmUgdG8gaGVscCB5b3UgbmF2aWdhdGUgZXZlcnl0aGluZyAtIGZyb20gZmluZGluZyB5b3VyIGNsYXNzZXMgdG8gZmluZGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB5b3VyIHBlb3BsZS5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgICB7LyogV2hhdCB0byBFeHBlY3QgLSB2YXJpZWQgY2FyZCBhY2NlbnRzICovfVxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImdyb3dlZWstc2VjdGlvbiBncm93ZWVrLWRlY29yYXRlZC1zZWN0aW9uXCI+XHJcbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZ3Jvd2Vlay1kZWNvclwiIHNyYz1cIi9zdGF0aWMvb3dlZWsvMjAyNi9kZWNvci90cnVmZnVsYS1wYXRjaC5wbmdcIiBhbHQ9XCJcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBzdHlsZT17eyBib3R0b206ICctMzBweCcsIGxlZnQ6ICctMzBweCcsIHdpZHRoOiAnMTcwcHgnIH19IC8+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJncm93ZWVrLXNlY3Rpb24tdGl0bGVcIj5XaGF0IHRvIEV4cGVjdDwvaDI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3Jvd2Vlay1leHBlY3QtZ3JpZFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm93ZWVrLWV4cGVjdC1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3Jvd2Vlay1leHBlY3QtaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjxpIGNsYXNzTmFtZT1cInBoIHBoLWhvdXNlXCIgLz48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPk1vdmluZyBJbjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPllvdSdsbCBhcnJpdmUgb24gY2FtcHVzLCBtb3ZlIGludG8geW91ciByb29tIGF0IE1jTXVydHJ5LCBhbmQgbWVldCB5b3VyIE8tV2VlayBncm91cCBhbmQgYWR2aXNvcnMgZm9yIHRoZSBmaXJzdCB0aW1lLiBXZSdsbCBiZSB0aGVyZSB0byBoZWxwIHlvdSBjYXJyeSB5b3VyIHN0dWZmIGFuZCB3ZWxjb21lIHlvdSBob21lLiBUaGlzIGlzIHlvdXIgcm9vbSBmb3IgdGhlIGVudGlyZSBhY2FkZW1pYyB5ZWFyLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm93ZWVrLWV4cGVjdC1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3Jvd2Vlay1leHBlY3QtaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjxpIGNsYXNzTmFtZT1cInBoIHBoLWNvbmZldHRpXCIgLz48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkFjdGl2aXRpZXMgJmFtcDsgVHJhZGl0aW9uczwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkZyb20gaWNlYnJlYWtlcnMgYW5kIHRlYW0tYnVpbGRpbmcgdG8gY2FtcHVzIHRvdXJzIGFuZCBSaWNlIHRyYWRpdGlvbnMsIE8tV2VlayBpcyBwYWNrZWQgd2l0aCBtZW1vcmFibGUgbW9tZW50cy4gWW91J2xsIGV4cGxvcmUgSG91c3RvbiwgYm9uZCB3aXRoIHlvdXIgZ3JvdXAsIGFuZCBkaXNjb3ZlciB3aGF0IG1ha2VzIE1jTXVydHJ5IHNwZWNpYWwuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3dlZWstZXhwZWN0LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJncm93ZWVrLWV4cGVjdC1pY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PGkgY2xhc3NOYW1lPVwicGggcGgtYm9va3NcIiAvPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+QWNhZGVtaWMgUHJlcDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPk1lZXQgd2l0aCB5b3VyIGFjYWRlbWljIGFkdmlzb3JzLCBsZWFybiBhYm91dCBjb3Vyc2UgcmVnaXN0cmF0aW9uLCBhbmQgZ2V0IG9yaWVudGVkIHRvIFJpY2UncyBhY2FkZW1pYyByZXNvdXJjZXMuIFlvdSdsbCBmZWVsIGNvbmZpZGVudCBhbmQgcmVhZHkgYmVmb3JlIGNsYXNzZXMgZXZlbiBzdGFydC48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3Jvd2Vlay1leHBlY3QtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdyb3dlZWstZXhwZWN0LWljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48aSBjbGFzc05hbWU9XCJwaCBwaC1oYW5kcy1jbGFwcGluZ1wiIC8+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5GaW5kaW5nIFlvdXIgQ29tbXVuaXR5PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+Ty1XZWVrIGlzIHdoZXJlIGxpZmVsb25nIGZyaWVuZHNoaXBzIGJlZ2luLiBXaGV0aGVyIGl0J3MgeW91ciBPLVdlZWsgZmFtaWx5LCB5b3VyIGhhbGxtYXRlcywgb3IgdGhlIGNsdWJzIHlvdSBkaXNjb3ZlciBhdCB0aGUgYWN0aXZpdGllcyBmYWlyIC0geW91J2xsIGZpbmQgeW91ciBwZW9wbGUuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgey8qIFBob3RvIENhcm91c2VsICovfVxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImdyb3dlZWstY2Fyb3VzZWwtc2VjdGlvblwiPlxyXG4gICAgICAgICAgICA8U3RyaXBDYXJvdXNlbCBpbWFnZXM9e0NBUk9VU0VMX0lNQUdFU30gZmFkZVdpZHRoPVwiOCVcIiBmYWRlQ29sb3I9XCIyNDUsMjM0LDIxNFwiIC8+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgICB7LyogTWlzc2lvbiBTdGF0ZW1lbnQgLSB3b3JkLWZvci13b3JkIGZyb20gdGhlIDIwMjYgQWR2aXNvciBBcHBsaWNhdGlvbiAqL31cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJncm93ZWVrLXNlY3Rpb24gZ3Jvd2Vlay1kZWNvcmF0ZWQtc2VjdGlvbiBncm93ZWVrLW1pc3Npb24tc2VjdGlvblwiPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZ3Jvd2Vlay1zZWN0aW9uLXRpdGxlXCI+T3VyIE1pc3Npb248L2gyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3dlZWstbWlzc2lvblwiPlxyXG4gICAgICAgICAgICAgICAgPHA+SW4gdGhlIDxzdHJvbmcgY2xhc3NOYW1lPVwiZ3Jvd2Vlay1taXNzaW9uLXBpbmtcIj5NY011clRSRUUgZm9yZXN0PC9zdHJvbmc+LCBldmVyeSBOZXcgU3R1ZGVudCB3aWxsIGhhdmUgdGhlIG9wcG9ydHVuaXR5IHRvIGdyb3csIGNoYW5nZSwgYW5kIGFkYXB0IHRvIHRoZWlyIG5ldyBlbnZpcm9ubWVudHMuIEp1c3QgbGlrZSBhIDxzdHJvbmcgY2xhc3NOYW1lPVwiZ3Jvd2Vlay1taXNzaW9uLXBpbmtcIj50cnVmZnVsYSBzZWVkPC9zdHJvbmc+LCBzdHVkZW50cyBuZWVkIHRoZSByaWdodCBjb25kaXRpb25zIHRvIHRocml2ZS4gPHN0cm9uZyBjbGFzc05hbWU9XCJncm93ZWVrLW1pc3Npb24tYmx1ZVwiPkxldCBJdCBHck8tV2VlayAyMDI2PC9zdHJvbmc+IG51cnR1cmVzIHRob3NlIGNvbmRpdGlvbnMgdGhyb3VnaCA8c3Ryb25nIGNsYXNzTmFtZT1cImdyb3dlZWstbWlzc2lvbi1vcmFuZ2VcIj5jb25uZWN0aW9uLCBndWlkYW5jZSwgYW5kIGVtcGF0aHk8L3N0cm9uZz4uIFdpdGggdGhlc2UgcmVzb3VyY2VzLCB0aGUgbmV3ZXN0IHNwcm91dHMgY2FuIGJlZ2luIHRvIHBsYW50IHRoZWlyIHJvb3RzIGludG8gYm90aCB0aGUgTWNNdXJ0cnkgZmFtaWx5IHdlIGhvbGQgc28gbXVjaCBwcmlkZSBmb3IgYW5kIFJpY2UgVW5pdmVyc2l0eSBhcyBhIHdob2xlLiBOZXcgU3R1ZGVudHMgbWF5IHRoaW5rIHRoYXQgY29sbGVnZSBpcyBkYXVudGluZywgYnV0IDxzdHJvbmcgY2xhc3NOYW1lPVwiZ3Jvd2Vlay1taXNzaW9uLXBpbmtcIj48ZW0+aG93IGJhZCBjb3VsZCBpdCBwb3NzaWJseSBiZT88L2VtPjwvc3Ryb25nPjwvcD5cclxuICAgICAgICAgICAgICAgIDxwPlRocm91Z2ggYmVpbmcgZW5jb3VyYWdlZCB0byA8c3Ryb25nIGNsYXNzTmFtZT1cImdyb3dlZWstbWlzc2lvbi1vcmFuZ2VcIj5zdGVwIG91dHNpZGUgdGhlaXIgY29tZm9ydCB6b25lcywgdHJ5IHNvbWV0aGluZyBuZXcsIGFuZCBsZWFybiB0aHJvdWdoIGV4cGVyaWVuY2U8L3N0cm9uZz4sIHRoZXkgd2lsbCBoYXZlIGFsbCB0aGF0IHRoZXkgPHN0cm9uZyBjbGFzc05hbWU9XCJncm93ZWVrLW1pc3Npb24tcGlua1wiPnRobmVlZDwvc3Ryb25nPi48L3A+XHJcbiAgICAgICAgICAgICAgICA8cD5CeSB0aGUgZW5kIG9mIDxzdHJvbmcgY2xhc3NOYW1lPVwiZ3Jvd2Vlay1taXNzaW9uLWJsdWVcIj5MZXQgSXQgR3JPLVdlZWs8L3N0cm9uZz4sIE5ldyBTdHVkZW50cyB3aWxsIHVuZGVyc3RhbmQgdGhhdCBncm93dGggY29tZXMgZnJvbSA8c3Ryb25nIGNsYXNzTmFtZT1cImdyb3dlZWstbWlzc2lvbi1vcmFuZ2VcIj5hc2tpbmcgZm9yIGhlbHAsIG1ha2luZyBtaXN0YWtlcywgYW5kIHRha2luZyBpbml0aWF0aXZlPC9zdHJvbmc+LiBBZnRlciBhbGwsIDxzdHJvbmcgY2xhc3NOYW1lPVwiZ3Jvd2Vlay1taXNzaW9uLXBpbmtcIj55b3UgY2FuJ3QgcmVhcCB3aGF0IHlvdSBkb24ndCBzb3c8L3N0cm9uZz4uIEEgZm9yZXN0IHdpbGwgZmxvdXJpc2ggdGhyb3VnaCBjb21tdW5pdHk7IGFkdmlzb3JzLCB0aGUgTWNUZWFtLCBhZmZpbGlhdGVzLCBhbmQgZmVsbG93IE11cnRzIGFyZSBlYWdlciB0byBvZmZlciB0aGUgd2F0ZXIsIGxpZ2h0LCBhbmQgbnV0cmllbnRzIG5lZWRlZCB0byA8c3Ryb25nIGNsYXNzTmFtZT1cImdyb3dlZWstbWlzc2lvbi1waW5rXCI+Y2VsZWJyYXRlIGVhY2ggTXVydCdzIHJlYmlydGg8L3N0cm9uZz4gaW4gdGhlaXIgbmV3IGNvbW11bml0eS48L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJncm93ZWVrLW1pc3Npb24tdGFnbGluZVwiPlRoaXMgaXMgdGhlIHBsYWNlIHRvIExldCBJdCBHcm93ISEhPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgIHsvKiBRdWljayBJbmZvICovfVxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImdyb3dlZWstc2VjdGlvbiBncm93ZWVrLWRlY29yYXRlZC1zZWN0aW9uIGdyb3dlZWstbGFzdC1zZWN0aW9uXCI+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJncm93ZWVrLXNlY3Rpb24tdGl0bGVcIj5RdWljayBJbmZvPC9oMj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm93ZWVrLWluZm8tZ3JpZCBncm93ZWVrLXF1aWNraW5mby1ncmlkXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3dlZWstaW5mby1jYXJkIGdyb3dlZWstY2FyZC1hY2NlbnRlZFwiIHN0eWxlPXt7ICctLWNhcmQtYWNjZW50JzogJ3ZhcigtLWd3LW9yYW5nZSknIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz48aSBjbGFzc05hbWU9XCJwaCBwaC1lbnZlbG9wZVwiIC8+IFlvdXIgTWFpbGluZyBBZGRyZXNzPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8cD4oWW91ciBOYW1lKTxiciAvPk1jTXVydHJ5IENvbGxlZ2U8YnIgLz4xNjA1IFJpY2UgQmx2ZC48YnIgLz5Ib3VzdG9uLCBUWCA3NzAwNTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD48c3Ryb25nPjxlbT5Ob3RoaW5nIHNob3VsZCBiZSBzaGlwcGVkIHRvIHRoZSBjb2xsZWdlIHVudGlsIGFmdGVyIE8tV2Vlay48L2VtPjwvc3Ryb25nPjwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm93ZWVrLWluZm8tY2FyZCBncm93ZWVrLWNhcmQtYWNjZW50ZWRcIiBzdHlsZT17eyAnLS1jYXJkLWFjY2VudCc6ICd2YXIoLS1ndy1ncmVlbiknIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz48aSBjbGFzc05hbWU9XCJwaCBwaC1jaGF0LWNpcmNsZS1kb3RzXCIgLz4gUXVlc3Rpb25zPzwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+UmVhY2ggdXMgYW55dGltZSBhdCA8YSBocmVmPVwibWFpbHRvOm1jbXVydHJ5b3dlZWtAZ21haWwuY29tXCI+bWNtdXJ0cnlvd2Vla0BnbWFpbC5jb208L2E+PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgPFBhZ2VOYXYgLz5cclxuICAgIDwvZGl2PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGFuZGluZ1BhZ2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=