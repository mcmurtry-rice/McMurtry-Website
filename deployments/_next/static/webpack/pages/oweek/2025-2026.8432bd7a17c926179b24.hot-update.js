webpackHotUpdate_N_E("pages/oweek/2025-2026",{

/***/ "./pages/oweek/2025-2026/index.js":
/*!****************************************!*\
  !*** ./pages/oweek/2025-2026/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/Header/Header */ "./components/Header/Header.js");
/* harmony import */ var _components_navbar_Navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/navbar/Navbar */ "./components/navbar/Navbar.js");
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/Footer/Footer */ "./components/Footer/Footer.js");
/* harmony import */ var _components_ImageCarousel_ImageCarousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/ImageCarousel/ImageCarousel */ "./components/ImageCarousel/ImageCarousel.js");
/* harmony import */ var _components_PDFViewer_PDFViewer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/PDFViewer/PDFViewer */ "./components/PDFViewer/PDFViewer.js");
/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./config.json */ "./pages/oweek/2025-2026/config.json");
var _config_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./config.json */ "./pages/oweek/2025-2026/config.json", 1);
/* harmony import */ var _theme_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./theme.json */ "./pages/oweek/2025-2026/theme.json");
var _theme_json__WEBPACK_IMPORTED_MODULE_10___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./theme.json */ "./pages/oweek/2025-2026/theme.json", 1);
/* harmony import */ var _coordinators_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./coordinators.json */ "./pages/oweek/2025-2026/coordinators.json");
var _coordinators_json__WEBPACK_IMPORTED_MODULE_11___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./coordinators.json */ "./pages/oweek/2025-2026/coordinators.json", 1);
/* harmony import */ var _groups_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./groups.json */ "./pages/oweek/2025-2026/groups.json");
var _groups_json__WEBPACK_IMPORTED_MODULE_12___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./groups.json */ "./pages/oweek/2025-2026/groups.json", 1);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./index.css */ "./pages/oweek/2025-2026/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_13__);



var _s = $RefreshSig$(),
  _this = undefined,
  _jsxFileName = "C:\\Users\\anton\\Documents\\Projects\\MurtWebsite\\pages\\oweek\\2025-2026\\index.js",
  _s2 = $RefreshSig$(),
  _s3 = $RefreshSig$();
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }











var IMG = function IMG(rel) {
  return "/static/oweek/2025-2026/".concat(rel);
};
_c = IMG;
var PDF_PATH = "/static/oweek/2025-2026/".concat(_config_json__WEBPACK_IMPORTED_MODULE_9__.pdfFilename);
var coords = _coordinators_json__WEBPACK_IMPORTED_MODULE_11__.coordinators;
var _coordinatorsData$lea = _coordinators_json__WEBPACK_IMPORTED_MODULE_11__.leadership,
  mailingAddress = _coordinatorsData$lea.mailingAddress,
  president = _coordinatorsData$lea.president,
  coordinator = _coordinatorsData$lea.coordinator,
  magisters = _coordinatorsData$lea.magisters;
var groups = _groups_json__WEBPACK_IMPORTED_MODULE_12__.oweek_groups;
var carouselImages = _config_json__WEBPACK_IMPORTED_MODULE_9__.carousel.map(function (s) {
  return _objectSpread(_objectSpread({}, s), {}, {
    src: IMG(s.src)
  });
});
var SECTIONS = [{
  id: 'home',
  label: 'O-Week Home'
}, {
  id: 'theme',
  label: 'About the Theme'
}, {
  id: 'coords',
  label: 'Meet the Coords'
}, {
  id: 'groups',
  label: 'O-Week Groups'
}, {
  id: 'mcmtour',
  label: 'Tour of McMurtry'
}, {
  id: 'yourroom',
  label: 'Your Room'
}, {
  id: 'oweekbook',
  label: 'O-Week Book'
}, {
  id: 'contact',
  label: 'Contact Info'
}];

/* ---- Countdown ---- */
var useCountdown = function useCountdown(dateStr) {
  _s();
  var target = react__WEBPACK_IMPORTED_MODULE_3___default.a.useMemo(function () {
    var _dateStr$split$map = dateStr.split('-').map(Number),
      _dateStr$split$map2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_dateStr$split$map, 3),
      y = _dateStr$split$map2[0],
      m = _dateStr$split$map2[1],
      d = _dateStr$split$map2[2];
    return new Date(y, m - 1, d);
  }, [dateStr]);
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
    parts = _useState[0],
    setParts = _useState[1];
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var calc = function calc() {
      var diff = target - Date.now();
      if (diff <= 0) {
        setParts(null);
        return;
      }
      var s = Math.floor(diff / 1000);
      var days = Math.floor(s / 86400);
      var hrs = Math.floor(s % 86400 / 3600);
      var mins = Math.floor(s % 3600 / 60);
      var secs = s % 60;
      setParts({
        days: days,
        hrs: hrs,
        mins: mins,
        secs: secs
      });
    };
    calc();
    var id = setInterval(calc, 1000);
    return function () {
      return clearInterval(id);
    };
  }, [target]);
  return parts;
};
_s(useCountdown, "8B2/MS9M7tT49Jx99/bZAICYYYc=");
var CountdownDisplay = function CountdownDisplay(_ref) {
  _s2();
  var dateStr = _ref.dateStr;
  var parts = useCountdown(dateStr);
  if (!parts) return null;
  return __jsx("div", {
    className: "ow-countdown",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, [['Days', parts.days], ['Hours', parts.hrs], ['Mins', parts.mins], ['Secs', parts.secs]].map(function (_ref2) {
    var _ref3 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, 2),
      label = _ref3[0],
      val = _ref3[1];
    return __jsx("div", {
      className: "ow-countdown-unit",
      key: label,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 17
      }
    }, __jsx("span", {
      className: "ow-countdown-num",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 21
      }
    }, String(val).padStart(2, '0')), __jsx("span", {
      className: "ow-countdown-label",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 21
      }
    }, label));
  }));
};

/* ---- Sticky section nav ---- */
_s2(CountdownDisplay, "+03DPiZ6jUJAihHJELCNFgqeaio=", false, function () {
  return [useCountdown];
});
_c2 = CountdownDisplay;
var SectionNav = function SectionNav() {
  _s3();
  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])('home'),
    active = _useState2[0],
    setActive = _useState2[1];
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) setActive(e.target.id);
      });
    }, {
      rootMargin: '-40% 0px -55% 0px'
    });
    SECTIONS.forEach(function (s) {
      var el = document.getElementById(s.id);
      if (el) obs.observe(el);
    });
    return function () {
      return obs.disconnect();
    };
  }, []);
  var scrollTo = function scrollTo(id) {
    var el = document.getElementById(id);
    if (el) el.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };
  return __jsx("nav", {
    className: "ow-section-nav",
    "aria-label": "Page sections",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "ow-section-nav-inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }
  }, SECTIONS.map(function (s) {
    return __jsx("button", {
      key: s.id,
      className: "ow-section-nav-btn".concat(active === s.id ? ' ow-section-nav-btn-active' : ''),
      onClick: function onClick() {
        return scrollTo(s.id);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 21
      }
    }, s.label);
  })));
};

/* ---- Page ---- */
_s3(SectionNav, "lx4CMNm/6tB6GO6anNHVJ31sdRw=");
_c3 = SectionNav;
var OWeekPage = function OWeekPage() {
  return __jsx("div", {
    className: "page page-light",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 5
    }
  }, __jsx(_components_Header_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 9
    }
  }), __jsx(_components_navbar_Navbar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "ow-page",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 9
    }
  }, __jsx("section", {
    id: "home",
    className: "ow-section",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }
  }, __jsx("header", {
    className: "ev-hero ow-hero",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/static/icons/about-swoosh.svg",
    alt: "",
    className: "ev-hero-swoosh",
    "aria-hidden": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 21
    }
  }), __jsx("img", {
    src: "/static/icons/ellipse-large.svg",
    alt: "",
    className: "ev-hero-ellipse-large",
    "aria-hidden": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 21
    }
  }), __jsx("img", {
    src: "/static/icons/ellipse-small.svg",
    alt: "",
    className: "ev-hero-ellipse-small",
    "aria-hidden": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 21
    }
  }), __jsx("h1", {
    className: "ev-hero-heading",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 21
    }
  }, "Welcome to McMurtry!"), __jsx("p", {
    className: "ev-hero-lede",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 21
    }
  }, _config_json__WEBPACK_IMPORTED_MODULE_9__.themeSubtitle), __jsx(CountdownDisplay, {
    dateStr: _config_json__WEBPACK_IMPORTED_MODULE_9__.moveInDate,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "ow-carousel-wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 17
    }
  }, __jsx(_components_ImageCarousel_ImageCarousel__WEBPACK_IMPORTED_MODULE_7__["default"], {
    images: carouselImages,
    autoplay: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "ow-info-grid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "ow-info-card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 21
    }
  }, __jsx("h3", {
    className: "ow-info-card-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 25
    }
  }, "What is O-Week?"), __jsx("p", {
    className: "ow-info-card-body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 25
    }
  }, "Orientation Week (O-Week) is an exciting introduction to life at Rice University and McMurtry College. Led by our dedicated O-Week coordinators and advisors, you'll participate in fun activities, college traditions, and bonding experiences that will help you make lifelong friends and feel at home.")), __jsx("div", {
    className: "ow-info-card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 21
    }
  }, __jsx("h3", {
    className: "ow-info-card-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 25
    }
  }, "What to Expect"), __jsx("p", {
    className: "ow-info-card-body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 25
    }
  }, "From icebreakers and team-building activities to exploring campus and learning about Rice traditions, O-Week is packed with memorable moments. You'll meet your college family, discover resources, and prepare for your academic journey while having an incredible time!")))), __jsx(SectionNav, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 13
    }
  }), __jsx("section", {
    id: "theme",
    className: "ow-section ow-content-section",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 13
    }
  }, __jsx("h2", {
    className: "ow-section-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 17
    }
  }, "About the Theme"), __jsx("div", {
    className: "ow-prose-wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: IMG(_theme_json__WEBPACK_IMPORTED_MODULE_10__.heroImage),
    alt: "",
    className: "ow-float-img ow-float-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 21
    }
  }), _theme_json__WEBPACK_IMPORTED_MODULE_10__.paragraphs.map(function (p, i) {
    return __jsx("p", {
      key: i,
      className: "ow-prose",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 57
      }
    }, p);
  }))), __jsx("section", {
    id: "coords",
    className: "ow-section ow-content-section",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 13
    }
  }, __jsx("h2", {
    className: "ow-section-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 17
    }
  }, "Meet the Coords"), __jsx("div", {
    className: "ow-coord-cards",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 17
    }
  }, coords.map(function (_ref4) {
    var name = _ref4.name,
      pronouns = _ref4.pronouns,
      year = _ref4.year,
      major = _ref4.major,
      from = _ref4.from,
      image = _ref4.image,
      linkedin = _ref4.linkedin;
    return __jsx("div", {
      className: "ow-coord-card",
      key: name,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 25
      }
    }, linkedin ? __jsx("a", {
      href: linkedin,
      target: "_blank",
      rel: "noopener noreferrer",
      className: "ow-coord-img-link",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 33
      }
    }, __jsx("img", {
      src: IMG(image),
      alt: name,
      className: "ow-coord-img",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 37
      }
    })) : __jsx("img", {
      src: IMG(image),
      alt: name,
      className: "ow-coord-img",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 33
      }
    }), __jsx("div", {
      className: "ow-coord-info",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 29
      }
    }, __jsx("p", {
      className: "ow-coord-name",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 33
      }
    }, name), __jsx("p", {
      className: "ow-coord-meta",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 33
      }
    }, pronouns), __jsx("p", {
      className: "ow-coord-meta",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 33
      }
    }, year, " \xB7 ", major), __jsx("p", {
      className: "ow-coord-meta",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 33
      }
    }, from)));
  })), coords.map(function (_ref5) {
    var name = _ref5.name,
      image = _ref5.image,
      bio = _ref5.bio,
      bioImageAlign = _ref5.bioImageAlign;
    return __jsx("div", {
      key: name,
      className: "ow-prose-wrap ow-coord-bio",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 21
      }
    }, __jsx("h3", {
      className: "ow-subsection-title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 25
      }
    }, name), __jsx("img", {
      src: IMG(image),
      alt: name,
      className: "ow-float-img ".concat(bioImageAlign === 'right' ? 'ow-float-right' : 'ow-float-left'),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 25
      }
    }), bio.map(function (line, i) {
      return __jsx("p", {
        key: i,
        className: "ow-prose",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 47
        }
      }, line);
    }));
  })), __jsx("section", {
    id: "groups",
    className: "ow-section ow-content-section",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 13
    }
  }, __jsx("h2", {
    className: "ow-section-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 17
    }
  }, "O-Week Groups"), [['What is an O-Week Group?', "Your O-Week group consists of 10-14 New Students and 4-5 upperclassmen Advisors (one will be a Co-Advisor and one may be an Affiliate) who are beyond excited to welcome you to the best residential college on campus! All throughout O-Week, you will be preparing for registration and academic life at Rice and interacting with the rest of your incoming class at McMurtry, but your O-Week group is designed primarily to give you more of a personal support system during the week and throughout the year."], ['What is an Advisor?', "Advisors are a diverse group of students from McMurtry who are so enthusiastic about welcoming you to Rice that they don't mind returning here almost two full weeks before classes start to help you move in and start your time at Rice! These fantastic people have been hand-selected to act as your guides throughout O-Week; they'll make sure you get to all activities and meetings, answer any questions you might have, and serve as all-around resources."], ['What is a Co-Advisor?', "Co-Advisors make up about a fourth of our team and are students who are equally friendly and enthusiastic about welcoming you to Rice, but they hail from other residential colleges! Co-Advisors love McMurtry so much that they choose to join McMurtry's O-Week as an ambassador of their home college."], ['What is an Affiliate?', "Affiliates are O-Week personnel who serve specific roles designed to help you with your transition to Rice. Most O-Week groups will have at least one Affiliate. These Affiliate positions include: Peer Academic Advisors, Diversity Facilitators, Photographer, Videographer, Gopher, Rice Health Advisor, Associates Liaison, Athletic Liaison, Student Maintenance Representative, Chief Justice, and President."]].map(function (_ref6) {
    var _ref7 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref6, 2),
      title = _ref7[0],
      body = _ref7[1];
    return __jsx("div", {
      key: title,
      className: "ow-prose-wrap",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 21
      }
    }, __jsx("h3", {
      className: "ow-subsection-title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 25
      }
    }, title), __jsx("p", {
      className: "ow-prose",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 25
      }
    }, body));
  }), __jsx("h3", {
    className: "ow-subsection-title",
    style: {
      textAlign: 'center',
      marginBottom: '32px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 17
    }
  }, "Find Your O-Week Group"), __jsx("div", {
    className: "ow-groups-grid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 17
    }
  }, groups.map(function (_ref8) {
    var name = _ref8.name,
      image = _ref8.image;
    return __jsx("div", {
      className: "ow-group-card",
      key: name,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 25
      }
    }, __jsx("img", {
      src: IMG(image),
      alt: name,
      className: "ow-group-img",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 29
      }
    }), __jsx("p", {
      className: "ow-group-name",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 29
      }
    }, name));
  }))), __jsx("section", {
    id: "mcmtour",
    className: "ow-section ow-content-section",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 13
    }
  }, __jsx("h2", {
    className: "ow-section-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 17
    }
  }, "Tour of McMurtry"), __jsx("div", {
    className: "ow-prose-wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 17
    }
  }, __jsx("h3", {
    className: "ow-subsection-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 21
    }
  }, "McMurtry Double and Facilities Tour"), __jsx("div", {
    className: "ow-video-wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 21
    }
  }, __jsx("iframe", {
    src: "https://www.youtube.com/embed/09bT6qW7mDw",
    frameBorder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: true,
    title: "McMurtry Tour Video",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 25
    }
  })), __jsx("p", {
    className: "ow-prose",
    style: {
      textAlign: 'center',
      marginTop: '24px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 21
    }
  }, "If you were assigned a single, please email ", __jsx("a", {
    href: "mailto:mcmurtryoweek@gmail.com",
    className: "ow-link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 69
    }
  }, "mcmurtryoweek@gmail.com"), " for your room video."))), __jsx("section", {
    id: "yourroom",
    className: "ow-section ow-content-section",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 13
    }
  }, __jsx("h2", {
    className: "ow-section-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 17
    }
  }, "Your Room"), __jsx("div", {
    className: "ow-prose-wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 17
    }
  }, __jsx("h3", {
    className: "ow-subsection-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 21
    }
  }, "McMurtry Doubles"), __jsx("p", {
    className: "ow-prose",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 21
    }
  }, "Coming in as new students to McMurtry, you will most likely be placed in doubles (a room for two people) with your roommate. We have attached a floor plan of your 18x18 to give you an idea of what your room will look like. When you get to your room on the first day, there will be a bed, desk, dresser, nightstand, and chair. Feel free to move these around as desired!")), __jsx("div", {
    className: "ow-prose-wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 17
    }
  }, __jsx("h3", {
    className: "ow-subsection-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 21
    }
  }, "Included Furniture"), __jsx("img", {
    src: IMG('hero/room.JPG'),
    alt: "McMurtry Room",
    className: "ow-float-img ow-float-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 21
    }
  }), __jsx("p", {
    className: "ow-prose",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 21
    }
  }, __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 45
    }
  }, "Per Person:")), __jsx("ul", {
    className: "ow-list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 21
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 25
    }
  }, "1 Twin XL Sized Bed Frame"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 25
    }
  }, "1 Twin XL Sized Mattress"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 25
    }
  }, "1 Large Dresser"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 25
    }
  }, "1 Small Dresser / Nightstand"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 25
    }
  }, "1 Desk"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 25
    }
  }, "1 Chair")))), __jsx("section", {
    id: "oweekbook",
    className: "ow-section ow-content-section",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 13
    }
  }, __jsx("h2", {
    className: "ow-section-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 17
    }
  }, "O-Week Book"), __jsx("div", {
    className: "ow-book-actions",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: PDF_PATH,
    download: _config_json__WEBPACK_IMPORTED_MODULE_9__.pdfDownloadName,
    className: "ow-book-btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 21
    }
  }, "Download O-Week Book")), __jsx("div", {
    className: "ow-book-viewer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 17
    }
  }, __jsx(_components_PDFViewer_PDFViewer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    src: PDF_PATH,
    title: "McMurtry O-Week Book",
    height: 900,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 21
    }
  }))), __jsx("section", {
    id: "contact",
    className: "ow-section ow-content-section",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 13
    }
  }, __jsx("h2", {
    className: "ow-section-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 17
    }
  }, "Contact Info"), __jsx("div", {
    className: "ow-prose-wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 17
    }
  }, __jsx("h3", {
    className: "ow-subsection-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 21
    }
  }, "Your McMurtry Mailing Address"), __jsx("div", {
    className: "ow-address-card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "ow-address-lines",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 25
    }
  }, mailingAddress.lines.map(function (line, i) {
    return __jsx("p", {
      key: i,
      className: "ow-address-line",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 267,
        columnNumber: 33
      }
    }, i === 0 ? __jsx("strong", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 267,
        columnNumber: 83
      }
    }, line) : line);
  })), __jsx("div", {
    className: "ow-address-note",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 25
    }
  }, __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 29
    }
  }, "Important:"), " ", mailingAddress.note))), __jsx("div", {
    className: "ow-prose-wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 17
    }
  }, __jsx("h3", {
    className: "ow-subsection-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 21
    }
  }, "O-Week Coordinators"), __jsx("p", {
    className: "ow-contact-email-row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 21
    }
  }, "General email: ", __jsx("a", {
    href: "mailto:".concat(_config_json__WEBPACK_IMPORTED_MODULE_9__.generalEmail),
    className: "ow-link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 40
    }
  }, _config_json__WEBPACK_IMPORTED_MODULE_9__.generalEmail)), __jsx("div", {
    className: "ow-contact-grid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 21
    }
  }, coords.map(function (c) {
    return __jsx("div", {
      key: c.name,
      className: "ow-contact-card",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 283,
        columnNumber: 29
      }
    }, __jsx("p", {
      className: "ow-contact-name",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 284,
        columnNumber: 33
      }
    }, c.name), __jsx("a", {
      href: "mailto:".concat(c.email),
      className: "ow-link ow-contact-detail",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 285,
        columnNumber: 33
      }
    }, c.email), __jsx("a", {
      href: "tel:".concat(c.phone.replace(/[^0-9]/g, '')),
      className: "ow-link ow-contact-detail",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 286,
        columnNumber: 33
      }
    }, c.phone));
  }))), __jsx("div", {
    className: "ow-prose-wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 17
    }
  }, __jsx("h3", {
    className: "ow-subsection-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 21
    }
  }, "College Leadership"), __jsx("div", {
    className: "ow-contact-grid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 21
    }
  }, [{
    role: president.role,
    name: president.name,
    details: [{
      label: president.email,
      href: "mailto:".concat(president.email)
    }]
  }, {
    role: coordinator.role,
    name: coordinator.name,
    details: [{
      label: coordinator.email,
      href: "mailto:".concat(coordinator.email)
    }, {
      label: "Office: ".concat(coordinator.office)
    }, {
      label: "Fax: ".concat(coordinator.fax)
    }]
  }, {
    role: magisters.role,
    name: magisters.name,
    details: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(magisters.emails.map(function (e) {
      return {
        label: e,
        href: "mailto:".concat(e)
      };
    })), [{
      label: magisters.phone
    }])
  }].map(function (_ref9) {
    var role = _ref9.role,
      name = _ref9.name,
      details = _ref9.details;
    return __jsx("div", {
      key: name,
      className: "ow-contact-card",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 307,
        columnNumber: 29
      }
    }, __jsx("span", {
      className: "ow-contact-role",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 308,
        columnNumber: 33
      }
    }, role), __jsx("p", {
      className: "ow-contact-name",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 309,
        columnNumber: 33
      }
    }, name), details.map(function (d, i) {
      return d.href ? __jsx("a", {
        key: i,
        href: d.href,
        className: "ow-link ow-contact-detail",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 311,
          columnNumber: 39
        }
      }, d.label) : __jsx("span", {
        key: i,
        className: "ow-contact-detail",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312,
          columnNumber: 39
        }
      }, d.label);
    }));
  }))))), __jsx(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 9
    }
  }));
};
_c4 = OWeekPage;
/* harmony default export */ __webpack_exports__["default"] = (OWeekPage);
var _c, _c2, _c3, _c4;
$RefreshReg$(_c, "IMG");
$RefreshReg$(_c2, "CountdownDisplay");
$RefreshReg$(_c3, "SectionNav");
$RefreshReg$(_c4, "OWeekPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvb3dlZWsvMjAyNS0yMDI2L2luZGV4LmpzIl0sIm5hbWVzIjpbIklNRyIsInJlbCIsImNvbmNhdCIsIl9jIiwiUERGX1BBVEgiLCJjb25maWciLCJwZGZGaWxlbmFtZSIsImNvb3JkcyIsImNvb3JkaW5hdG9yc0RhdGEiLCJjb29yZGluYXRvcnMiLCJfY29vcmRpbmF0b3JzRGF0YSRsZWEiLCJsZWFkZXJzaGlwIiwibWFpbGluZ0FkZHJlc3MiLCJwcmVzaWRlbnQiLCJjb29yZGluYXRvciIsIm1hZ2lzdGVycyIsImdyb3VwcyIsImdyb3Vwc0RhdGEiLCJvd2Vla19ncm91cHMiLCJjYXJvdXNlbEltYWdlcyIsImNhcm91c2VsIiwibWFwIiwicyIsIl9vYmplY3RTcHJlYWQiLCJzcmMiLCJTRUNUSU9OUyIsImlkIiwibGFiZWwiLCJ1c2VDb3VudGRvd24iLCJkYXRlU3RyIiwiX3MiLCJ0YXJnZXQiLCJSZWFjdCIsInVzZU1lbW8iLCJfZGF0ZVN0ciRzcGxpdCRtYXAiLCJzcGxpdCIsIk51bWJlciIsIl9kYXRlU3RyJHNwbGl0JG1hcDIiLCJfc2xpY2VkVG9BcnJheSIsInkiLCJtIiwiZCIsIkRhdGUiLCJfdXNlU3RhdGUiLCJ1c2VTdGF0ZSIsInBhcnRzIiwic2V0UGFydHMiLCJ1c2VFZmZlY3QiLCJjYWxjIiwiZGlmZiIsIm5vdyIsIk1hdGgiLCJmbG9vciIsImRheXMiLCJocnMiLCJtaW5zIiwic2VjcyIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsIkNvdW50ZG93bkRpc3BsYXkiLCJfcmVmIiwiX3MyIiwiX19qc3giLCJjbGFzc05hbWUiLCJfX3NlbGYiLCJfdGhpcyIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiX3JlZjIiLCJfcmVmMyIsInZhbCIsImtleSIsIlN0cmluZyIsInBhZFN0YXJ0IiwiX2MyIiwiU2VjdGlvbk5hdiIsIl9zMyIsIl91c2VTdGF0ZTIiLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJvYnMiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJmb3JFYWNoIiwiZSIsImlzSW50ZXJzZWN0aW5nIiwicm9vdE1hcmdpbiIsImVsIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm9ic2VydmUiLCJkaXNjb25uZWN0Iiwic2Nyb2xsVG8iLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwiYmxvY2siLCJvbkNsaWNrIiwiX2MzIiwiT1dlZWtQYWdlIiwiSGVhZGVyIiwiU2l0ZU5hdmJhciIsImFsdCIsInRoZW1lU3VidGl0bGUiLCJtb3ZlSW5EYXRlIiwiSW1hZ2VDYXJvdXNlbCIsImltYWdlcyIsImF1dG9wbGF5IiwidGhlbWVEYXRhIiwiaGVyb0ltYWdlIiwicGFyYWdyYXBocyIsInAiLCJpIiwiX3JlZjQiLCJuYW1lIiwicHJvbm91bnMiLCJ5ZWFyIiwibWFqb3IiLCJmcm9tIiwiaW1hZ2UiLCJsaW5rZWRpbiIsImhyZWYiLCJfcmVmNSIsImJpbyIsImJpb0ltYWdlQWxpZ24iLCJsaW5lIiwiX3JlZjYiLCJfcmVmNyIsInRpdGxlIiwiYm9keSIsInN0eWxlIiwidGV4dEFsaWduIiwibWFyZ2luQm90dG9tIiwiX3JlZjgiLCJmcmFtZUJvcmRlciIsImFsbG93IiwiYWxsb3dGdWxsU2NyZWVuIiwibWFyZ2luVG9wIiwiZG93bmxvYWQiLCJwZGZEb3dubG9hZE5hbWUiLCJQREZWaWV3ZXIiLCJoZWlnaHQiLCJsaW5lcyIsIm5vdGUiLCJnZW5lcmFsRW1haWwiLCJjIiwiZW1haWwiLCJwaG9uZSIsInJlcGxhY2UiLCJyb2xlIiwiZGV0YWlscyIsIm9mZmljZSIsImZheCIsIl90b0NvbnN1bWFibGVBcnJheSIsImVtYWlscyIsIl9yZWY5IiwiU2l0ZUZvb3RlciIsIl9jNCIsIiRSZWZyZXNoUmVnJCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FB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QUFBQTRELFlBQUEsQ0FBQUQsR0FBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9vd2Vlay8yMDI1LTIwMjYuODQzMmJkN2ExN2M5MjYxNzliMjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL0hlYWRlci9IZWFkZXInO1xuaW1wb3J0IFNpdGVOYXZiYXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9uYXZiYXIvTmF2YmFyJztcbmltcG9ydCBTaXRlRm9vdGVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlcic7XG5pbXBvcnQgSW1hZ2VDYXJvdXNlbCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL0ltYWdlQ2Fyb3VzZWwvSW1hZ2VDYXJvdXNlbCc7XG5pbXBvcnQgUERGVmlld2VyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvUERGVmlld2VyL1BERlZpZXdlcic7XG5pbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnLmpzb24nO1xuaW1wb3J0IHRoZW1lRGF0YSBmcm9tICcuL3RoZW1lLmpzb24nO1xuaW1wb3J0IGNvb3JkaW5hdG9yc0RhdGEgZnJvbSAnLi9jb29yZGluYXRvcnMuanNvbic7XG5pbXBvcnQgZ3JvdXBzRGF0YSBmcm9tICcuL2dyb3Vwcy5qc29uJztcbmltcG9ydCAnLi9pbmRleC5jc3MnO1xuXG5jb25zdCBJTUcgPSAocmVsKSA9PiBgL3N0YXRpYy9vd2Vlay8yMDI1LTIwMjYvJHtyZWx9YDtcbmNvbnN0IFBERl9QQVRIID0gYC9zdGF0aWMvb3dlZWsvMjAyNS0yMDI2LyR7Y29uZmlnLnBkZkZpbGVuYW1lfWA7XG5cbmNvbnN0IGNvb3JkcyA9IGNvb3JkaW5hdG9yc0RhdGEuY29vcmRpbmF0b3JzO1xuY29uc3QgeyBtYWlsaW5nQWRkcmVzcywgcHJlc2lkZW50LCBjb29yZGluYXRvciwgbWFnaXN0ZXJzIH0gPSBjb29yZGluYXRvcnNEYXRhLmxlYWRlcnNoaXA7XG5jb25zdCBncm91cHMgPSBncm91cHNEYXRhLm93ZWVrX2dyb3VwcztcbmNvbnN0IGNhcm91c2VsSW1hZ2VzID0gY29uZmlnLmNhcm91c2VsLm1hcChzID0+ICh7IC4uLnMsIHNyYzogSU1HKHMuc3JjKSB9KSk7XG5cbmNvbnN0IFNFQ1RJT05TID0gW1xuICAgIHsgaWQ6ICdob21lJywgICAgICBsYWJlbDogJ08tV2VlayBIb21lJyB9LFxuICAgIHsgaWQ6ICd0aGVtZScsICAgICBsYWJlbDogJ0Fib3V0IHRoZSBUaGVtZScgfSxcbiAgICB7IGlkOiAnY29vcmRzJywgICAgbGFiZWw6ICdNZWV0IHRoZSBDb29yZHMnIH0sXG4gICAgeyBpZDogJ2dyb3VwcycsICAgIGxhYmVsOiAnTy1XZWVrIEdyb3VwcycgfSxcbiAgICB7IGlkOiAnbWNtdG91cicsICAgbGFiZWw6ICdUb3VyIG9mIE1jTXVydHJ5JyB9LFxuICAgIHsgaWQ6ICd5b3Vycm9vbScsICBsYWJlbDogJ1lvdXIgUm9vbScgfSxcbiAgICB7IGlkOiAnb3dlZWtib29rJywgbGFiZWw6ICdPLVdlZWsgQm9vaycgfSxcbiAgICB7IGlkOiAnY29udGFjdCcsICAgbGFiZWw6ICdDb250YWN0IEluZm8nIH0sXG5dO1xuXG4vKiAtLS0tIENvdW50ZG93biAtLS0tICovXG5jb25zdCB1c2VDb3VudGRvd24gPSAoZGF0ZVN0cikgPT4ge1xuICAgIGNvbnN0IHRhcmdldCA9IFJlYWN0LnVzZU1lbW8oKCkgPT4geyBjb25zdCBbeSxtLGRdID0gZGF0ZVN0ci5zcGxpdCgnLScpLm1hcChOdW1iZXIpOyByZXR1cm4gbmV3IERhdGUoeSwgbS0xLCBkKTsgfSwgW2RhdGVTdHJdKTtcbiAgICBjb25zdCBbcGFydHMsIHNldFBhcnRzXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNhbGMgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkaWZmID0gdGFyZ2V0IC0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgIGlmIChkaWZmIDw9IDApIHsgc2V0UGFydHMobnVsbCk7IHJldHVybjsgfVxuICAgICAgICAgICAgY29uc3QgcyA9IE1hdGguZmxvb3IoZGlmZiAvIDEwMDApO1xuICAgICAgICAgICAgY29uc3QgZGF5cyA9IE1hdGguZmxvb3IocyAvIDg2NDAwKTtcbiAgICAgICAgICAgIGNvbnN0IGhycyAgPSBNYXRoLmZsb29yKChzICUgODY0MDApIC8gMzYwMCk7XG4gICAgICAgICAgICBjb25zdCBtaW5zID0gTWF0aC5mbG9vcigocyAlIDM2MDApIC8gNjApO1xuICAgICAgICAgICAgY29uc3Qgc2VjcyA9IHMgJSA2MDtcbiAgICAgICAgICAgIHNldFBhcnRzKHsgZGF5cywgaHJzLCBtaW5zLCBzZWNzIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjYWxjKCk7XG4gICAgICAgIGNvbnN0IGlkID0gc2V0SW50ZXJ2YWwoY2FsYywgMTAwMCk7XG4gICAgICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGlkKTtcbiAgICB9LCBbdGFyZ2V0XSk7XG4gICAgcmV0dXJuIHBhcnRzO1xufTtcblxuY29uc3QgQ291bnRkb3duRGlzcGxheSA9ICh7IGRhdGVTdHIgfSkgPT4ge1xuICAgIGNvbnN0IHBhcnRzID0gdXNlQ291bnRkb3duKGRhdGVTdHIpO1xuICAgIGlmICghcGFydHMpIHJldHVybiBudWxsO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdvdy1jb3VudGRvd24nPlxuICAgICAgICAgICAge1tbJ0RheXMnLCBwYXJ0cy5kYXlzXSwgWydIb3VycycsIHBhcnRzLmhyc10sIFsnTWlucycsIHBhcnRzLm1pbnNdLCBbJ1NlY3MnLCBwYXJ0cy5zZWNzXV0ubWFwKChbbGFiZWwsIHZhbF0pID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nb3ctY291bnRkb3duLXVuaXQnIGtleT17bGFiZWx9PlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J293LWNvdW50ZG93bi1udW0nPntTdHJpbmcodmFsKS5wYWRTdGFydCgyLCAnMCcpfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdvdy1jb3VudGRvd24tbGFiZWwnPntsYWJlbH08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbi8qIC0tLS0gU3RpY2t5IHNlY3Rpb24gbmF2IC0tLS0gKi9cbmNvbnN0IFNlY3Rpb25OYXYgPSAoKSA9PiB7XG4gICAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKCdob21lJyk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3Qgb2JzID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgICAgICAgICBlbnRyaWVzLmZvckVhY2goZSA9PiB7IGlmIChlLmlzSW50ZXJzZWN0aW5nKSBzZXRBY3RpdmUoZS50YXJnZXQuaWQpOyB9KTtcbiAgICAgICAgfSwgeyByb290TWFyZ2luOiAnLTQwJSAwcHggLTU1JSAwcHgnIH0pO1xuICAgICAgICBTRUNUSU9OUy5mb3JFYWNoKHMgPT4geyBjb25zdCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHMuaWQpOyBpZiAoZWwpIG9icy5vYnNlcnZlKGVsKTsgfSk7XG4gICAgICAgIHJldHVybiAoKSA9PiBvYnMuZGlzY29ubmVjdCgpO1xuICAgIH0sIFtdKTtcbiAgICBjb25zdCBzY3JvbGxUbyA9IChpZCkgPT4ge1xuICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICAgICAgaWYgKGVsKSBlbC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJywgYmxvY2s6ICdzdGFydCcgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8bmF2IGNsYXNzTmFtZT0nb3ctc2VjdGlvbi1uYXYnIGFyaWEtbGFiZWw9J1BhZ2Ugc2VjdGlvbnMnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J293LXNlY3Rpb24tbmF2LWlubmVyJz5cbiAgICAgICAgICAgICAgICB7U0VDVElPTlMubWFwKHMgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3MuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bvdy1zZWN0aW9uLW5hdi1idG4ke2FjdGl2ZSA9PT0gcy5pZCA/ICcgb3ctc2VjdGlvbi1uYXYtYnRuLWFjdGl2ZScgOiAnJ31gfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2Nyb2xsVG8ocy5pZCl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtzLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25hdj5cbiAgICApO1xufTtcblxuLyogLS0tLSBQYWdlIC0tLS0gKi9cbmNvbnN0IE9XZWVrUGFnZSA9ICgpID0+IChcbiAgICA8ZGl2IGNsYXNzTmFtZT0ncGFnZSBwYWdlLWxpZ2h0Jz5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICA8U2l0ZU5hdmJhciAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nb3ctcGFnZSc+XG5cbiAgICAgICAgICAgIHsvKiA9PT09PSBIT01FID09PT09ICovfVxuICAgICAgICAgICAgPHNlY3Rpb24gaWQ9J2hvbWUnIGNsYXNzTmFtZT0nb3ctc2VjdGlvbic+XG4gICAgICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9J2V2LWhlcm8gb3ctaGVybyc+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPScvc3RhdGljL2ljb25zL2Fib3V0LXN3b29zaC5zdmcnIGFsdD0nJyBjbGFzc05hbWU9J2V2LWhlcm8tc3dvb3NoJyBhcmlhLWhpZGRlbj0ndHJ1ZScgLz5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9Jy9zdGF0aWMvaWNvbnMvZWxsaXBzZS1sYXJnZS5zdmcnIGFsdD0nJyBjbGFzc05hbWU9J2V2LWhlcm8tZWxsaXBzZS1sYXJnZScgYXJpYS1oaWRkZW49J3RydWUnIC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPScvc3RhdGljL2ljb25zL2VsbGlwc2Utc21hbGwuc3ZnJyBhbHQ9JycgY2xhc3NOYW1lPSdldi1oZXJvLWVsbGlwc2Utc21hbGwnIGFyaWEtaGlkZGVuPSd0cnVlJyAvPlxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdldi1oZXJvLWhlYWRpbmcnPldlbGNvbWUgdG8gTWNNdXJ0cnkhPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdldi1oZXJvLWxlZGUnPntjb25maWcudGhlbWVTdWJ0aXRsZX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxDb3VudGRvd25EaXNwbGF5IGRhdGVTdHI9e2NvbmZpZy5tb3ZlSW5EYXRlfSAvPlxuICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdvdy1jYXJvdXNlbC13cmFwJz5cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlQ2Fyb3VzZWwgaW1hZ2VzPXtjYXJvdXNlbEltYWdlc30gYXV0b3BsYXk9e3RydWV9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J293LWluZm8tZ3JpZCc+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdvdy1pbmZvLWNhcmQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0nb3ctaW5mby1jYXJkLXRpdGxlJz5XaGF0IGlzIE8tV2Vlaz88L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdvdy1pbmZvLWNhcmQtYm9keSc+T3JpZW50YXRpb24gV2VlayAoTy1XZWVrKSBpcyBhbiBleGNpdGluZyBpbnRyb2R1Y3Rpb24gdG8gbGlmZSBhdCBSaWNlIFVuaXZlcnNpdHkgYW5kIE1jTXVydHJ5IENvbGxlZ2UuIExlZCBieSBvdXIgZGVkaWNhdGVkIE8tV2VlayBjb29yZGluYXRvcnMgYW5kIGFkdmlzb3JzLCB5b3UnbGwgcGFydGljaXBhdGUgaW4gZnVuIGFjdGl2aXRpZXMsIGNvbGxlZ2UgdHJhZGl0aW9ucywgYW5kIGJvbmRpbmcgZXhwZXJpZW5jZXMgdGhhdCB3aWxsIGhlbHAgeW91IG1ha2UgbGlmZWxvbmcgZnJpZW5kcyBhbmQgZmVlbCBhdCBob21lLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdvdy1pbmZvLWNhcmQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0nb3ctaW5mby1jYXJkLXRpdGxlJz5XaGF0IHRvIEV4cGVjdDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J293LWluZm8tY2FyZC1ib2R5Jz5Gcm9tIGljZWJyZWFrZXJzIGFuZCB0ZWFtLWJ1aWxkaW5nIGFjdGl2aXRpZXMgdG8gZXhwbG9yaW5nIGNhbXB1cyBhbmQgbGVhcm5pbmcgYWJvdXQgUmljZSB0cmFkaXRpb25zLCBPLVdlZWsgaXMgcGFja2VkIHdpdGggbWVtb3JhYmxlIG1vbWVudHMuIFlvdSdsbCBtZWV0IHlvdXIgY29sbGVnZSBmYW1pbHksIGRpc2NvdmVyIHJlc291cmNlcywgYW5kIHByZXBhcmUgZm9yIHlvdXIgYWNhZGVtaWMgam91cm5leSB3aGlsZSBoYXZpbmcgYW4gaW5jcmVkaWJsZSB0aW1lITwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgICAgIDxTZWN0aW9uTmF2IC8+XG5cbiAgICAgICAgICAgIHsvKiA9PT09PSBUSEVNRSA9PT09PSAqL31cbiAgICAgICAgICAgIDxzZWN0aW9uIGlkPSd0aGVtZScgY2xhc3NOYW1lPSdvdy1zZWN0aW9uIG93LWNvbnRlbnQtc2VjdGlvbic+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0nb3ctc2VjdGlvbi10aXRsZSc+QWJvdXQgdGhlIFRoZW1lPC9oMj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nb3ctcHJvc2Utd3JhcCc+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtJTUcodGhlbWVEYXRhLmhlcm9JbWFnZSl9IGFsdD0nJyBjbGFzc05hbWU9J293LWZsb2F0LWltZyBvdy1mbG9hdC1sZWZ0JyAvPlxuICAgICAgICAgICAgICAgICAgICB7dGhlbWVEYXRhLnBhcmFncmFwaHMubWFwKChwLCBpKSA9PiA8cCBrZXk9e2l9IGNsYXNzTmFtZT0nb3ctcHJvc2UnPntwfTwvcD4pfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgICAgICB7LyogPT09PT0gQ09PUkRTID09PT09ICovfVxuICAgICAgICAgICAgPHNlY3Rpb24gaWQ9J2Nvb3JkcycgY2xhc3NOYW1lPSdvdy1zZWN0aW9uIG93LWNvbnRlbnQtc2VjdGlvbic+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0nb3ctc2VjdGlvbi10aXRsZSc+TWVldCB0aGUgQ29vcmRzPC9oMj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nb3ctY29vcmQtY2FyZHMnPlxuICAgICAgICAgICAgICAgICAgICB7Y29vcmRzLm1hcCgoeyBuYW1lLCBwcm9ub3VucywgeWVhciwgbWFqb3IsIGZyb20sIGltYWdlLCBsaW5rZWRpbiB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nb3ctY29vcmQtY2FyZCcga2V5PXtuYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGlua2VkaW4gPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2xpbmtlZGlufSB0YXJnZXQ9J19ibGFuaycgcmVsPSdub29wZW5lciBub3JlZmVycmVyJyBjbGFzc05hbWU9J293LWNvb3JkLWltZy1saW5rJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtJTUcoaW1hZ2UpfSBhbHQ9e25hbWV9IGNsYXNzTmFtZT0nb3ctY29vcmQtaW1nJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0lNRyhpbWFnZSl9IGFsdD17bmFtZX0gY2xhc3NOYW1lPSdvdy1jb29yZC1pbWcnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nb3ctY29vcmQtaW5mbyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nb3ctY29vcmQtbmFtZSc+e25hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J293LWNvb3JkLW1ldGEnPntwcm9ub3Vuc308L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nb3ctY29vcmQtbWV0YSc+e3llYXJ9ICZtaWRkb3Q7IHttYWpvcn08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nb3ctY29vcmQtbWV0YSc+e2Zyb219PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHtjb29yZHMubWFwKCh7IG5hbWUsIGltYWdlLCBiaW8sIGJpb0ltYWdlQWxpZ24gfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17bmFtZX0gY2xhc3NOYW1lPSdvdy1wcm9zZS13cmFwIG93LWNvb3JkLWJpbyc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPSdvdy1zdWJzZWN0aW9uLXRpdGxlJz57bmFtZX08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17SU1HKGltYWdlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e25hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgb3ctZmxvYXQtaW1nICR7YmlvSW1hZ2VBbGlnbiA9PT0gJ3JpZ2h0JyA/ICdvdy1mbG9hdC1yaWdodCcgOiAnb3ctZmxvYXQtbGVmdCd9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB7YmlvLm1hcCgobGluZSwgaSkgPT4gPHAga2V5PXtpfSBjbGFzc05hbWU9J293LXByb3NlJz57bGluZX08L3A+KX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgICAgIHsvKiA9PT09PSBHUk9VUFMgPT09PT0gKi99XG4gICAgICAgICAgICA8c2VjdGlvbiBpZD0nZ3JvdXBzJyBjbGFzc05hbWU9J293LXNlY3Rpb24gb3ctY29udGVudC1zZWN0aW9uJz5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdvdy1zZWN0aW9uLXRpdGxlJz5PLVdlZWsgR3JvdXBzPC9oMj5cbiAgICAgICAgICAgICAgICB7W1xuICAgICAgICAgICAgICAgICAgICBbJ1doYXQgaXMgYW4gTy1XZWVrIEdyb3VwPycsIFwiWW91ciBPLVdlZWsgZ3JvdXAgY29uc2lzdHMgb2YgMTAtMTQgTmV3IFN0dWRlbnRzIGFuZCA0LTUgdXBwZXJjbGFzc21lbiBBZHZpc29ycyAob25lIHdpbGwgYmUgYSBDby1BZHZpc29yIGFuZCBvbmUgbWF5IGJlIGFuIEFmZmlsaWF0ZSkgd2hvIGFyZSBiZXlvbmQgZXhjaXRlZCB0byB3ZWxjb21lIHlvdSB0byB0aGUgYmVzdCByZXNpZGVudGlhbCBjb2xsZWdlIG9uIGNhbXB1cyEgQWxsIHRocm91Z2hvdXQgTy1XZWVrLCB5b3Ugd2lsbCBiZSBwcmVwYXJpbmcgZm9yIHJlZ2lzdHJhdGlvbiBhbmQgYWNhZGVtaWMgbGlmZSBhdCBSaWNlIGFuZCBpbnRlcmFjdGluZyB3aXRoIHRoZSByZXN0IG9mIHlvdXIgaW5jb21pbmcgY2xhc3MgYXQgTWNNdXJ0cnksIGJ1dCB5b3VyIE8tV2VlayBncm91cCBpcyBkZXNpZ25lZCBwcmltYXJpbHkgdG8gZ2l2ZSB5b3UgbW9yZSBvZiBhIHBlcnNvbmFsIHN1cHBvcnQgc3lzdGVtIGR1cmluZyB0aGUgd2VlayBhbmQgdGhyb3VnaG91dCB0aGUgeWVhci5cIl0sXG4gICAgICAgICAgICAgICAgICAgIFsnV2hhdCBpcyBhbiBBZHZpc29yPycsIFwiQWR2aXNvcnMgYXJlIGEgZGl2ZXJzZSBncm91cCBvZiBzdHVkZW50cyBmcm9tIE1jTXVydHJ5IHdobyBhcmUgc28gZW50aHVzaWFzdGljIGFib3V0IHdlbGNvbWluZyB5b3UgdG8gUmljZSB0aGF0IHRoZXkgZG9uJ3QgbWluZCByZXR1cm5pbmcgaGVyZSBhbG1vc3QgdHdvIGZ1bGwgd2Vla3MgYmVmb3JlIGNsYXNzZXMgc3RhcnQgdG8gaGVscCB5b3UgbW92ZSBpbiBhbmQgc3RhcnQgeW91ciB0aW1lIGF0IFJpY2UhIFRoZXNlIGZhbnRhc3RpYyBwZW9wbGUgaGF2ZSBiZWVuIGhhbmQtc2VsZWN0ZWQgdG8gYWN0IGFzIHlvdXIgZ3VpZGVzIHRocm91Z2hvdXQgTy1XZWVrOyB0aGV5J2xsIG1ha2Ugc3VyZSB5b3UgZ2V0IHRvIGFsbCBhY3Rpdml0aWVzIGFuZCBtZWV0aW5ncywgYW5zd2VyIGFueSBxdWVzdGlvbnMgeW91IG1pZ2h0IGhhdmUsIGFuZCBzZXJ2ZSBhcyBhbGwtYXJvdW5kIHJlc291cmNlcy5cIl0sXG4gICAgICAgICAgICAgICAgICAgIFsnV2hhdCBpcyBhIENvLUFkdmlzb3I/JywgXCJDby1BZHZpc29ycyBtYWtlIHVwIGFib3V0IGEgZm91cnRoIG9mIG91ciB0ZWFtIGFuZCBhcmUgc3R1ZGVudHMgd2hvIGFyZSBlcXVhbGx5IGZyaWVuZGx5IGFuZCBlbnRodXNpYXN0aWMgYWJvdXQgd2VsY29taW5nIHlvdSB0byBSaWNlLCBidXQgdGhleSBoYWlsIGZyb20gb3RoZXIgcmVzaWRlbnRpYWwgY29sbGVnZXMhIENvLUFkdmlzb3JzIGxvdmUgTWNNdXJ0cnkgc28gbXVjaCB0aGF0IHRoZXkgY2hvb3NlIHRvIGpvaW4gTWNNdXJ0cnkncyBPLVdlZWsgYXMgYW4gYW1iYXNzYWRvciBvZiB0aGVpciBob21lIGNvbGxlZ2UuXCJdLFxuICAgICAgICAgICAgICAgICAgICBbJ1doYXQgaXMgYW4gQWZmaWxpYXRlPycsIFwiQWZmaWxpYXRlcyBhcmUgTy1XZWVrIHBlcnNvbm5lbCB3aG8gc2VydmUgc3BlY2lmaWMgcm9sZXMgZGVzaWduZWQgdG8gaGVscCB5b3Ugd2l0aCB5b3VyIHRyYW5zaXRpb24gdG8gUmljZS4gTW9zdCBPLVdlZWsgZ3JvdXBzIHdpbGwgaGF2ZSBhdCBsZWFzdCBvbmUgQWZmaWxpYXRlLiBUaGVzZSBBZmZpbGlhdGUgcG9zaXRpb25zIGluY2x1ZGU6IFBlZXIgQWNhZGVtaWMgQWR2aXNvcnMsIERpdmVyc2l0eSBGYWNpbGl0YXRvcnMsIFBob3RvZ3JhcGhlciwgVmlkZW9ncmFwaGVyLCBHb3BoZXIsIFJpY2UgSGVhbHRoIEFkdmlzb3IsIEFzc29jaWF0ZXMgTGlhaXNvbiwgQXRobGV0aWMgTGlhaXNvbiwgU3R1ZGVudCBNYWludGVuYW5jZSBSZXByZXNlbnRhdGl2ZSwgQ2hpZWYgSnVzdGljZSwgYW5kIFByZXNpZGVudC5cIl0sXG4gICAgICAgICAgICAgICAgXS5tYXAoKFt0aXRsZSwgYm9keV0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3RpdGxlfSBjbGFzc05hbWU9J293LXByb3NlLXdyYXAnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0nb3ctc3Vic2VjdGlvbi10aXRsZSc+e3RpdGxlfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J293LXByb3NlJz57Ym9keX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9J293LXN1YnNlY3Rpb24tdGl0bGUnIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicsIG1hcmdpbkJvdHRvbTogJzMycHgnIH19PkZpbmQgWW91ciBPLVdlZWsgR3JvdXA8L2gzPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdvdy1ncm91cHMtZ3JpZCc+XG4gICAgICAgICAgICAgICAgICAgIHtncm91cHMubWFwKCh7IG5hbWUsIGltYWdlIH0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdvdy1ncm91cC1jYXJkJyBrZXk9e25hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtJTUcoaW1hZ2UpfSBhbHQ9e25hbWV9IGNsYXNzTmFtZT0nb3ctZ3JvdXAtaW1nJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nb3ctZ3JvdXAtbmFtZSc+e25hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgICAgICB7LyogPT09PT0gTUNNIFRPVVIgPT09PT0gKi99XG4gICAgICAgICAgICA8c2VjdGlvbiBpZD0nbWNtdG91cicgY2xhc3NOYW1lPSdvdy1zZWN0aW9uIG93LWNvbnRlbnQtc2VjdGlvbic+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0nb3ctc2VjdGlvbi10aXRsZSc+VG91ciBvZiBNY011cnRyeTwvaDI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J293LXByb3NlLXdyYXAnPlxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPSdvdy1zdWJzZWN0aW9uLXRpdGxlJz5NY011cnRyeSBEb3VibGUgYW5kIEZhY2lsaXRpZXMgVG91cjwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdvdy12aWRlby13cmFwJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpZnJhbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9J2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLzA5YlQ2cVc3bUR3J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lQm9yZGVyPScwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93PSdhY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxvd0Z1bGxTY3JlZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT0nTWNNdXJ0cnkgVG91ciBWaWRlbydcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J293LXByb3NlJyBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInLCBtYXJnaW5Ub3A6ICcyNHB4JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIElmIHlvdSB3ZXJlIGFzc2lnbmVkIGEgc2luZ2xlLCBwbGVhc2UgZW1haWwgPGEgaHJlZj0nbWFpbHRvOm1jbXVydHJ5b3dlZWtAZ21haWwuY29tJyBjbGFzc05hbWU9J293LWxpbmsnPm1jbXVydHJ5b3dlZWtAZ21haWwuY29tPC9hPiBmb3IgeW91ciByb29tIHZpZGVvLlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgICAgIHsvKiA9PT09PSBZT1VSIFJPT00gPT09PT0gKi99XG4gICAgICAgICAgICA8c2VjdGlvbiBpZD0neW91cnJvb20nIGNsYXNzTmFtZT0nb3ctc2VjdGlvbiBvdy1jb250ZW50LXNlY3Rpb24nPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J293LXNlY3Rpb24tdGl0bGUnPllvdXIgUm9vbTwvaDI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J293LXByb3NlLXdyYXAnPlxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPSdvdy1zdWJzZWN0aW9uLXRpdGxlJz5NY011cnRyeSBEb3VibGVzPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdvdy1wcm9zZSc+Q29taW5nIGluIGFzIG5ldyBzdHVkZW50cyB0byBNY011cnRyeSwgeW91IHdpbGwgbW9zdCBsaWtlbHkgYmUgcGxhY2VkIGluIGRvdWJsZXMgKGEgcm9vbSBmb3IgdHdvIHBlb3BsZSkgd2l0aCB5b3VyIHJvb21tYXRlLiBXZSBoYXZlIGF0dGFjaGVkIGEgZmxvb3IgcGxhbiBvZiB5b3VyIDE4eDE4IHRvIGdpdmUgeW91IGFuIGlkZWEgb2Ygd2hhdCB5b3VyIHJvb20gd2lsbCBsb29rIGxpa2UuIFdoZW4geW91IGdldCB0byB5b3VyIHJvb20gb24gdGhlIGZpcnN0IGRheSwgdGhlcmUgd2lsbCBiZSBhIGJlZCwgZGVzaywgZHJlc3NlciwgbmlnaHRzdGFuZCwgYW5kIGNoYWlyLiBGZWVsIGZyZWUgdG8gbW92ZSB0aGVzZSBhcm91bmQgYXMgZGVzaXJlZCE8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J293LXByb3NlLXdyYXAnPlxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPSdvdy1zdWJzZWN0aW9uLXRpdGxlJz5JbmNsdWRlZCBGdXJuaXR1cmU8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17SU1HKCdoZXJvL3Jvb20uSlBHJyl9IGFsdD0nTWNNdXJ0cnkgUm9vbScgY2xhc3NOYW1lPSdvdy1mbG9hdC1pbWcgb3ctZmxvYXQtcmlnaHQnIC8+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nb3ctcHJvc2UnPjxzdHJvbmc+UGVyIFBlcnNvbjo8L3N0cm9uZz48L3A+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9J293LWxpc3QnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjEgVHdpbiBYTCBTaXplZCBCZWQgRnJhbWU8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjEgVHdpbiBYTCBTaXplZCBNYXR0cmVzczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+MSBMYXJnZSBEcmVzc2VyPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT4xIFNtYWxsIERyZXNzZXIgLyBOaWdodHN0YW5kPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT4xIERlc2s8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjEgQ2hhaXI8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgICAgICB7LyogPT09PT0gTy1XRUVLIEJPT0sgPT09PT0gKi99XG4gICAgICAgICAgICA8c2VjdGlvbiBpZD0nb3dlZWtib29rJyBjbGFzc05hbWU9J293LXNlY3Rpb24gb3ctY29udGVudC1zZWN0aW9uJz5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdvdy1zZWN0aW9uLXRpdGxlJz5PLVdlZWsgQm9vazwvaDI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J293LWJvb2stYWN0aW9ucyc+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e1BERl9QQVRIfSBkb3dubG9hZD17Y29uZmlnLnBkZkRvd25sb2FkTmFtZX0gY2xhc3NOYW1lPSdvdy1ib29rLWJ0bic+XG4gICAgICAgICAgICAgICAgICAgICAgICBEb3dubG9hZCBPLVdlZWsgQm9va1xuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J293LWJvb2stdmlld2VyJz5cbiAgICAgICAgICAgICAgICAgICAgPFBERlZpZXdlciBzcmM9e1BERl9QQVRIfSB0aXRsZT0nTWNNdXJ0cnkgTy1XZWVrIEJvb2snIGhlaWdodD17OTAwfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgICAgICB7LyogPT09PT0gQ09OVEFDVCA9PT09PSAqL31cbiAgICAgICAgICAgIDxzZWN0aW9uIGlkPSdjb250YWN0JyBjbGFzc05hbWU9J293LXNlY3Rpb24gb3ctY29udGVudC1zZWN0aW9uJz5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdvdy1zZWN0aW9uLXRpdGxlJz5Db250YWN0IEluZm88L2gyPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J293LXByb3NlLXdyYXAnPlxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPSdvdy1zdWJzZWN0aW9uLXRpdGxlJz5Zb3VyIE1jTXVydHJ5IE1haWxpbmcgQWRkcmVzczwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdvdy1hZGRyZXNzLWNhcmQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J293LWFkZHJlc3MtbGluZXMnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttYWlsaW5nQWRkcmVzcy5saW5lcy5tYXAoKGxpbmUsIGkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAga2V5PXtpfSBjbGFzc05hbWU9J293LWFkZHJlc3MtbGluZSc+e2kgPT09IDAgPyA8c3Ryb25nPntsaW5lfTwvc3Ryb25nPiA6IGxpbmV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nb3ctYWRkcmVzcy1ub3RlJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPkltcG9ydGFudDo8L3N0cm9uZz4ge21haWxpbmdBZGRyZXNzLm5vdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nb3ctcHJvc2Utd3JhcCc+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9J293LXN1YnNlY3Rpb24tdGl0bGUnPk8tV2VlayBDb29yZGluYXRvcnM8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J293LWNvbnRhY3QtZW1haWwtcm93Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgIEdlbmVyYWwgZW1haWw6IDxhIGhyZWY9e2BtYWlsdG86JHtjb25maWcuZ2VuZXJhbEVtYWlsfWB9IGNsYXNzTmFtZT0nb3ctbGluayc+e2NvbmZpZy5nZW5lcmFsRW1haWx9PC9hPlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdvdy1jb250YWN0LWdyaWQnPlxuICAgICAgICAgICAgICAgICAgICAgICAge2Nvb3Jkcy5tYXAoKGMpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17Yy5uYW1lfSBjbGFzc05hbWU9J293LWNvbnRhY3QtY2FyZCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nb3ctY29udGFjdC1uYW1lJz57Yy5uYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YG1haWx0bzoke2MuZW1haWx9YH0gY2xhc3NOYW1lPSdvdy1saW5rIG93LWNvbnRhY3QtZGV0YWlsJz57Yy5lbWFpbH08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2B0ZWw6JHtjLnBob25lLnJlcGxhY2UoL1teMC05XS9nLCAnJyl9YH0gY2xhc3NOYW1lPSdvdy1saW5rIG93LWNvbnRhY3QtZGV0YWlsJz57Yy5waG9uZX08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nb3ctcHJvc2Utd3JhcCc+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9J293LXN1YnNlY3Rpb24tdGl0bGUnPkNvbGxlZ2UgTGVhZGVyc2hpcDwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdvdy1jb250YWN0LWdyaWQnPlxuICAgICAgICAgICAgICAgICAgICAgICAge1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHJvbGU6IHByZXNpZGVudC5yb2xlLCBuYW1lOiBwcmVzaWRlbnQubmFtZSwgZGV0YWlsczogW3sgbGFiZWw6IHByZXNpZGVudC5lbWFpbCwgaHJlZjogYG1haWx0bzoke3ByZXNpZGVudC5lbWFpbH1gIH1dIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyByb2xlOiBjb29yZGluYXRvci5yb2xlLCBuYW1lOiBjb29yZGluYXRvci5uYW1lLCBkZXRhaWxzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6IGNvb3JkaW5hdG9yLmVtYWlsLCBocmVmOiBgbWFpbHRvOiR7Y29vcmRpbmF0b3IuZW1haWx9YCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiBgT2ZmaWNlOiAke2Nvb3JkaW5hdG9yLm9mZmljZX1gIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6IGBGYXg6ICR7Y29vcmRpbmF0b3IuZmF4fWAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHJvbGU6IG1hZ2lzdGVycy5yb2xlLCBuYW1lOiBtYWdpc3RlcnMubmFtZSwgZGV0YWlsczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5tYWdpc3RlcnMuZW1haWxzLm1hcChlID0+ICh7IGxhYmVsOiBlLCBocmVmOiBgbWFpbHRvOiR7ZX1gIH0pKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogbWFnaXN0ZXJzLnBob25lIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXX0sXG4gICAgICAgICAgICAgICAgICAgICAgICBdLm1hcCgoeyByb2xlLCBuYW1lLCBkZXRhaWxzIH0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17bmFtZX0gY2xhc3NOYW1lPSdvdy1jb250YWN0LWNhcmQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J293LWNvbnRhY3Qtcm9sZSc+e3JvbGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J293LWNvbnRhY3QtbmFtZSc+e25hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGV0YWlscy5tYXAoKGQsIGkpID0+IGQuaHJlZlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyA8YSBrZXk9e2l9IGhyZWY9e2QuaHJlZn0gY2xhc3NOYW1lPSdvdy1saW5rIG93LWNvbnRhY3QtZGV0YWlsJz57ZC5sYWJlbH08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxzcGFuIGtleT17aX0gY2xhc3NOYW1lPSdvdy1jb250YWN0LWRldGFpbCc+e2QubGFiZWx9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8U2l0ZUZvb3RlciAvPlxuICAgIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgT1dlZWtQYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==