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
  }, _config_json__WEBPACK_IMPORTED_MODULE_9__.themeSubtitle)), __jsx("div", {
    className: "ow-carousel-wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 17
    }
  }, __jsx(_components_ImageCarousel_ImageCarousel__WEBPACK_IMPORTED_MODULE_7__["default"], {
    images: carouselImages,
    autoplay: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "ow-info-grid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "ow-info-card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 21
    }
  }, __jsx("h3", {
    className: "ow-info-card-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 25
    }
  }, "What is O-Week?"), __jsx("p", {
    className: "ow-info-card-body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 25
    }
  }, "Orientation Week (O-Week) is an exciting introduction to life at Rice University and McMurtry College. Led by our dedicated O-Week coordinators and advisors, you'll participate in fun activities, college traditions, and bonding experiences that will help you make lifelong friends and feel at home.")), __jsx("div", {
    className: "ow-info-card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 21
    }
  }, __jsx("h3", {
    className: "ow-info-card-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 25
    }
  }, "What to Expect"), __jsx("p", {
    className: "ow-info-card-body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 25
    }
  }, "From icebreakers and team-building activities to exploring campus and learning about Rice traditions, O-Week is packed with memorable moments. You'll meet your college family, discover resources, and prepare for your academic journey while having an incredible time!")))), __jsx(SectionNav, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 13
    }
  }), __jsx("section", {
    id: "theme",
    className: "ow-section ow-content-section",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 13
    }
  }, __jsx("h2", {
    className: "ow-section-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 17
    }
  }, "About the Theme"), __jsx("div", {
    className: "ow-prose-wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: IMG(_theme_json__WEBPACK_IMPORTED_MODULE_10__.heroImage),
    alt: "",
    className: "ow-float-img ow-float-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 21
    }
  }), _theme_json__WEBPACK_IMPORTED_MODULE_10__.paragraphs.map(function (p, i) {
    return __jsx("p", {
      key: i,
      className: "ow-prose",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 57
      }
    }, p);
  }))), __jsx("section", {
    id: "coords",
    className: "ow-section ow-content-section",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 13
    }
  }, __jsx("h2", {
    className: "ow-section-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 17
    }
  }, "Meet the Coords"), __jsx("div", {
    className: "ow-coord-cards",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
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
        lineNumber: 147,
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
        lineNumber: 149,
        columnNumber: 33
      }
    }, __jsx("img", {
      src: IMG(image),
      alt: name,
      className: "ow-coord-img",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 37
      }
    })) : __jsx("img", {
      src: IMG(image),
      alt: name,
      className: "ow-coord-img",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 33
      }
    }), __jsx("div", {
      className: "ow-coord-info",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 29
      }
    }, __jsx("p", {
      className: "ow-coord-name",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 33
      }
    }, name), __jsx("p", {
      className: "ow-coord-meta",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 33
      }
    }, pronouns), __jsx("p", {
      className: "ow-coord-meta",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 33
      }
    }, year, " \xB7 ", major), __jsx("p", {
      className: "ow-coord-meta",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
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
        lineNumber: 165,
        columnNumber: 21
      }
    }, __jsx("h3", {
      className: "ow-subsection-title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 25
      }
    }, name), __jsx("img", {
      src: IMG(image),
      alt: name,
      className: "ow-float-img ".concat(bioImageAlign === 'right' ? 'ow-float-right' : 'ow-float-left'),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 25
      }
    }), bio.map(function (line, i) {
      return __jsx("p", {
        key: i,
        className: "ow-prose",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172,
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
      lineNumber: 178,
      columnNumber: 13
    }
  }, __jsx("h2", {
    className: "ow-section-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
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
        lineNumber: 186,
        columnNumber: 21
      }
    }, __jsx("h3", {
      className: "ow-subsection-title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 25
      }
    }, title), __jsx("p", {
      className: "ow-prose",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188,
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
      lineNumber: 191,
      columnNumber: 17
    }
  }, "Find Your O-Week Group"), __jsx("div", {
    className: "ow-groups-grid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
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
        lineNumber: 194,
        columnNumber: 25
      }
    }, __jsx("img", {
      src: IMG(image),
      alt: name,
      className: "ow-group-img",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 29
      }
    }), __jsx("p", {
      className: "ow-group-name",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 29
      }
    }, name));
  }))), __jsx("section", {
    id: "mcmtour",
    className: "ow-section ow-content-section",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 13
    }
  }, __jsx("h2", {
    className: "ow-section-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 17
    }
  }, "Tour of McMurtry"), __jsx("div", {
    className: "ow-prose-wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 17
    }
  }, __jsx("h3", {
    className: "ow-subsection-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 21
    }
  }, "McMurtry Double and Facilities Tour"), __jsx("div", {
    className: "ow-video-wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
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
      lineNumber: 208,
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
      lineNumber: 216,
      columnNumber: 21
    }
  }, "If you were assigned a single, please email ", __jsx("a", {
    href: "mailto:mcmurtryoweek@gmail.com",
    className: "ow-link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 69
    }
  }, "mcmurtryoweek@gmail.com"), " for your room video."))), __jsx("section", {
    id: "yourroom",
    className: "ow-section ow-content-section",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 13
    }
  }, __jsx("h2", {
    className: "ow-section-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 17
    }
  }, "Your Room"), __jsx("div", {
    className: "ow-prose-wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 17
    }
  }, __jsx("h3", {
    className: "ow-subsection-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 21
    }
  }, "McMurtry Doubles"), __jsx("p", {
    className: "ow-prose",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 21
    }
  }, "Coming in as new students to McMurtry, you will most likely be placed in doubles (a room for two people) with your roommate. We have attached a floor plan of your 18x18 to give you an idea of what your room will look like. When you get to your room on the first day, there will be a bed, desk, dresser, nightstand, and chair. Feel free to move these around as desired!")), __jsx("div", {
    className: "ow-prose-wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 17
    }
  }, __jsx("h3", {
    className: "ow-subsection-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 21
    }
  }, "Included Furniture"), __jsx("img", {
    src: IMG('hero/room.JPG'),
    alt: "McMurtry Room",
    className: "ow-float-img ow-float-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 21
    }
  }), __jsx("p", {
    className: "ow-prose",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 21
    }
  }, __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 45
    }
  }, "Per Person:")), __jsx("ul", {
    className: "ow-list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 21
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 25
    }
  }, "1 Twin XL Sized Bed Frame"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 25
    }
  }, "1 Twin XL Sized Mattress"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 25
    }
  }, "1 Large Dresser"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 25
    }
  }, "1 Small Dresser / Nightstand"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 25
    }
  }, "1 Desk"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 25
    }
  }, "1 Chair")))), __jsx("section", {
    id: "oweekbook",
    className: "ow-section ow-content-section",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 13
    }
  }, __jsx("h2", {
    className: "ow-section-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 17
    }
  }, "O-Week Book"), __jsx("div", {
    className: "ow-book-actions",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: PDF_PATH,
    download: _config_json__WEBPACK_IMPORTED_MODULE_9__.pdfDownloadName,
    className: "ow-book-btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 21
    }
  }, "Download O-Week Book")), __jsx("div", {
    className: "ow-book-viewer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 17
    }
  }, __jsx(_components_PDFViewer_PDFViewer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    src: PDF_PATH,
    title: "McMurtry O-Week Book",
    height: 900,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 21
    }
  }))), __jsx("section", {
    id: "contact",
    className: "ow-section ow-content-section",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 13
    }
  }, __jsx("h2", {
    className: "ow-section-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 17
    }
  }, "Contact Info"), __jsx("div", {
    className: "ow-prose-wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 17
    }
  }, __jsx("h3", {
    className: "ow-subsection-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 21
    }
  }, "Your McMurtry Mailing Address"), __jsx("div", {
    className: "ow-address-card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "ow-address-lines",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 25
    }
  }, mailingAddress.lines.map(function (line, i) {
    return __jsx("p", {
      key: i,
      className: "ow-address-line",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 266,
        columnNumber: 33
      }
    }, i === 0 ? __jsx("strong", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 266,
        columnNumber: 83
      }
    }, line) : line);
  })), __jsx("div", {
    className: "ow-address-note",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 25
    }
  }, __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 29
    }
  }, "Important:"), " ", mailingAddress.note))), __jsx("div", {
    className: "ow-prose-wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 17
    }
  }, __jsx("h3", {
    className: "ow-subsection-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 21
    }
  }, "O-Week Coordinators"), __jsx("p", {
    className: "ow-contact-email-row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 21
    }
  }, "General email: ", __jsx("a", {
    href: "mailto:".concat(_config_json__WEBPACK_IMPORTED_MODULE_9__.generalEmail),
    className: "ow-link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 40
    }
  }, _config_json__WEBPACK_IMPORTED_MODULE_9__.generalEmail)), __jsx("div", {
    className: "ow-contact-grid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 21
    }
  }, coords.map(function (c) {
    return __jsx("div", {
      key: c.name,
      className: "ow-contact-card",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 282,
        columnNumber: 29
      }
    }, __jsx("p", {
      className: "ow-contact-name",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 283,
        columnNumber: 33
      }
    }, c.name), __jsx("a", {
      href: "mailto:".concat(c.email),
      className: "ow-link ow-contact-detail",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 284,
        columnNumber: 33
      }
    }, c.email), __jsx("a", {
      href: "tel:".concat(c.phone.replace(/[^0-9]/g, '')),
      className: "ow-link ow-contact-detail",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 285,
        columnNumber: 33
      }
    }, c.phone));
  }))), __jsx("div", {
    className: "ow-prose-wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 17
    }
  }, __jsx("h3", {
    className: "ow-subsection-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 21
    }
  }, "College Leadership"), __jsx("div", {
    className: "ow-contact-grid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
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
        lineNumber: 306,
        columnNumber: 29
      }
    }, __jsx("span", {
      className: "ow-contact-role",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 307,
        columnNumber: 33
      }
    }, role), __jsx("p", {
      className: "ow-contact-name",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 308,
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
          lineNumber: 310,
          columnNumber: 39
        }
      }, d.label) : __jsx("span", {
        key: i,
        className: "ow-contact-detail",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 311,
          columnNumber: 39
        }
      }, d.label);
    }));
  }))))), __jsx(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvb3dlZWsvMjAyNS0yMDI2L2luZGV4LmpzIl0sIm5hbWVzIjpbIklNRyIsInJlbCIsImNvbmNhdCIsIl9jIiwiUERGX1BBVEgiLCJjb25maWciLCJwZGZGaWxlbmFtZSIsImNvb3JkcyIsImNvb3JkaW5hdG9yc0RhdGEiLCJjb29yZGluYXRvcnMiLCJfY29vcmRpbmF0b3JzRGF0YSRsZWEiLCJsZWFkZXJzaGlwIiwibWFpbGluZ0FkZHJlc3MiLCJwcmVzaWRlbnQiLCJjb29yZGluYXRvciIsIm1hZ2lzdGVycyIsImdyb3VwcyIsImdyb3Vwc0RhdGEiLCJvd2Vla19ncm91cHMiLCJjYXJvdXNlbEltYWdlcyIsImNhcm91c2VsIiwibWFwIiwicyIsIl9vYmplY3RTcHJlYWQiLCJzcmMiLCJTRUNUSU9OUyIsImlkIiwibGFiZWwiLCJ1c2VDb3VudGRvd24iLCJkYXRlU3RyIiwiX3MiLCJ0YXJnZXQiLCJSZWFjdCIsInVzZU1lbW8iLCJfZGF0ZVN0ciRzcGxpdCRtYXAiLCJzcGxpdCIsIk51bWJlciIsIl9kYXRlU3RyJHNwbGl0JG1hcDIiLCJfc2xpY2VkVG9BcnJheSIsInkiLCJtIiwiZCIsIkRhdGUiLCJfdXNlU3RhdGUiLCJ1c2VTdGF0ZSIsInBhcnRzIiwic2V0UGFydHMiLCJ1c2VFZmZlY3QiLCJjYWxjIiwiZGlmZiIsIm5vdyIsIk1hdGgiLCJmbG9vciIsImRheXMiLCJocnMiLCJtaW5zIiwic2VjcyIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsIkNvdW50ZG93bkRpc3BsYXkiLCJfcmVmIiwiX3MyIiwiX19qc3giLCJjbGFzc05hbWUiLCJfX3NlbGYiLCJfdGhpcyIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiX3JlZjIiLCJfcmVmMyIsInZhbCIsImtleSIsIlN0cmluZyIsInBhZFN0YXJ0IiwiX2MyIiwiU2VjdGlvbk5hdiIsIl9zMyIsIl91c2VTdGF0ZTIiLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJvYnMiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJmb3JFYWNoIiwiZSIsImlzSW50ZXJzZWN0aW5nIiwicm9vdE1hcmdpbiIsImVsIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm9ic2VydmUiLCJkaXNjb25uZWN0Iiwic2Nyb2xsVG8iLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwiYmxvY2siLCJvbkNsaWNrIiwiX2MzIiwiT1dlZWtQYWdlIiwiSGVhZGVyIiwiU2l0ZU5hdmJhciIsImFsdCIsInRoZW1lU3VidGl0bGUiLCJJbWFnZUNhcm91c2VsIiwiaW1hZ2VzIiwiYXV0b3BsYXkiLCJ0aGVtZURhdGEiLCJoZXJvSW1hZ2UiLCJwYXJhZ3JhcGhzIiwicCIsImkiLCJfcmVmNCIsIm5hbWUiLCJwcm9ub3VucyIsInllYXIiLCJtYWpvciIsImZyb20iLCJpbWFnZSIsImxpbmtlZGluIiwiaHJlZiIsIl9yZWY1IiwiYmlvIiwiYmlvSW1hZ2VBbGlnbiIsImxpbmUiLCJfcmVmNiIsIl9yZWY3IiwidGl0bGUiLCJib2R5Iiwic3R5bGUiLCJ0ZXh0QWxpZ24iLCJtYXJnaW5Cb3R0b20iLCJfcmVmOCIsImZyYW1lQm9yZGVyIiwiYWxsb3ciLCJhbGxvd0Z1bGxTY3JlZW4iLCJtYXJnaW5Ub3AiLCJkb3dubG9hZCIsInBkZkRvd25sb2FkTmFtZSIsIlBERlZpZXdlciIsImhlaWdodCIsImxpbmVzIiwibm90ZSIsImdlbmVyYWxFbWFpbCIsImMiLCJlbWFpbCIsInBob25lIiwicmVwbGFjZSIsInJvbGUiLCJkZXRhaWxzIiwib2ZmaWNlIiwiZmF4IiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiZW1haWxzIiwiX3JlZjkiLCJTaXRlRm9vdGVyIiwiX2M0IiwiJFJlZnJlc2hSZWckIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDSTtBQUNJ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R0FBRyxFQUFFdUMsQ0FBRTtRQUFDUyxJQUFJLEVBQUVqRixDQUFDLENBQUNpRixJQUFLO1FBQUMzRCxTQUFTLEVBQUMsMkJBQTJCO1FBQUFDLE1BQUEsRUFBQUMsS0FBQTtRQUFBQyxRQUFBO1VBQUFDLFFBQUEsRUFBQUMsWUFBQTtVQUFBQyxVQUFBO1VBQUFDLFlBQUE7UUFBQTtNQUFBLEdBQUU3QixDQUFDLENBQUNkLEtBQVMsQ0FBQyxHQUM1RW1DLEtBQUE7UUFBTVksR0FBRyxFQUFFdUMsQ0FBRTtRQUFDbEQsU0FBUyxFQUFDLG1CQUFtQjtRQUFBQyxNQUFBLEVBQUFDLEtBQUE7UUFBQUMsUUFBQTtVQUFBQyxRQUFBLEVBQUFDLFlBQUE7VUFBQUMsVUFBQTtVQUFBQyxZQUFBO1FBQUE7TUFBQSxHQUFFN0IsQ0FBQyxDQUFDZCxLQUFZLENBQUM7SUFBQSxDQUNsRSxDQUNDLENBQUM7RUFBQSxDQUNULENBQ0EsQ0FDSixDQUNBLENBRVIsQ0FBQyxFQUNObUMsS0FBQSxDQUFDK0YsaUVBQVU7SUFBQTdGLE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLENBQUUsQ0FDWixDQUFDO0FBQUEsQ0FDVDtBQUFDd0YsR0FBQSxHQTdOSXpELFNBQVM7QUErTkFBLHdFQUFTLEVBQUM7QUFBQSxJQUFBbEcsRUFBQSxFQUFBMEUsR0FBQSxFQUFBdUIsR0FBQSxFQUFBMEQsR0FBQTtBQUFBQyxZQUFBLENBQUE1SixFQUFBO0FBQUE0SixZQUFBLENBQUFsRixHQUFBO0FBQUFrRixZQUFBLENBQUEzRCxHQUFBO0FBQUEyRCxZQUFBLENBQUFELEdBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvb3dlZWsvMjAyNS0yMDI2LjM4ZjUxMTgwNjI1NmE3MGU4MjEwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyJztcbmltcG9ydCBTaXRlTmF2YmFyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvbmF2YmFyL05hdmJhcic7XG5pbXBvcnQgU2l0ZUZvb3RlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXInO1xuaW1wb3J0IEltYWdlQ2Fyb3VzZWwgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9JbWFnZUNhcm91c2VsL0ltYWdlQ2Fyb3VzZWwnO1xuaW1wb3J0IFBERlZpZXdlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL1BERlZpZXdlci9QREZWaWV3ZXInO1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZy5qc29uJztcbmltcG9ydCB0aGVtZURhdGEgZnJvbSAnLi90aGVtZS5qc29uJztcbmltcG9ydCBjb29yZGluYXRvcnNEYXRhIGZyb20gJy4vY29vcmRpbmF0b3JzLmpzb24nO1xuaW1wb3J0IGdyb3Vwc0RhdGEgZnJvbSAnLi9ncm91cHMuanNvbic7XG5pbXBvcnQgJy4vaW5kZXguY3NzJztcblxuY29uc3QgSU1HID0gKHJlbCkgPT4gYC9zdGF0aWMvb3dlZWsvMjAyNS0yMDI2LyR7cmVsfWA7XG5jb25zdCBQREZfUEFUSCA9IGAvc3RhdGljL293ZWVrLzIwMjUtMjAyNi8ke2NvbmZpZy5wZGZGaWxlbmFtZX1gO1xuXG5jb25zdCBjb29yZHMgPSBjb29yZGluYXRvcnNEYXRhLmNvb3JkaW5hdG9ycztcbmNvbnN0IHsgbWFpbGluZ0FkZHJlc3MsIHByZXNpZGVudCwgY29vcmRpbmF0b3IsIG1hZ2lzdGVycyB9ID0gY29vcmRpbmF0b3JzRGF0YS5sZWFkZXJzaGlwO1xuY29uc3QgZ3JvdXBzID0gZ3JvdXBzRGF0YS5vd2Vla19ncm91cHM7XG5jb25zdCBjYXJvdXNlbEltYWdlcyA9IGNvbmZpZy5jYXJvdXNlbC5tYXAocyA9PiAoeyAuLi5zLCBzcmM6IElNRyhzLnNyYykgfSkpO1xuXG5jb25zdCBTRUNUSU9OUyA9IFtcbiAgICB7IGlkOiAnaG9tZScsICAgICAgbGFiZWw6ICdPLVdlZWsgSG9tZScgfSxcbiAgICB7IGlkOiAndGhlbWUnLCAgICAgbGFiZWw6ICdBYm91dCB0aGUgVGhlbWUnIH0sXG4gICAgeyBpZDogJ2Nvb3JkcycsICAgIGxhYmVsOiAnTWVldCB0aGUgQ29vcmRzJyB9LFxuICAgIHsgaWQ6ICdncm91cHMnLCAgICBsYWJlbDogJ08tV2VlayBHcm91cHMnIH0sXG4gICAgeyBpZDogJ21jbXRvdXInLCAgIGxhYmVsOiAnVG91ciBvZiBNY011cnRyeScgfSxcbiAgICB7IGlkOiAneW91cnJvb20nLCAgbGFiZWw6ICdZb3VyIFJvb20nIH0sXG4gICAgeyBpZDogJ293ZWVrYm9vaycsIGxhYmVsOiAnTy1XZWVrIEJvb2snIH0sXG4gICAgeyBpZDogJ2NvbnRhY3QnLCAgIGxhYmVsOiAnQ29udGFjdCBJbmZvJyB9LFxuXTtcblxuLyogLS0tLSBDb3VudGRvd24gLS0tLSAqL1xuY29uc3QgdXNlQ291bnRkb3duID0gKGRhdGVTdHIpID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSBSZWFjdC51c2VNZW1vKCgpID0+IHsgY29uc3QgW3ksbSxkXSA9IGRhdGVTdHIuc3BsaXQoJy0nKS5tYXAoTnVtYmVyKTsgcmV0dXJuIG5ldyBEYXRlKHksIG0tMSwgZCk7IH0sIFtkYXRlU3RyXSk7XG4gICAgY29uc3QgW3BhcnRzLCBzZXRQYXJ0c10gPSB1c2VTdGF0ZShudWxsKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBjYWxjID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGlmZiA9IHRhcmdldCAtIERhdGUubm93KCk7XG4gICAgICAgICAgICBpZiAoZGlmZiA8PSAwKSB7IHNldFBhcnRzKG51bGwpOyByZXR1cm47IH1cbiAgICAgICAgICAgIGNvbnN0IHMgPSBNYXRoLmZsb29yKGRpZmYgLyAxMDAwKTtcbiAgICAgICAgICAgIGNvbnN0IGRheXMgPSBNYXRoLmZsb29yKHMgLyA4NjQwMCk7XG4gICAgICAgICAgICBjb25zdCBocnMgID0gTWF0aC5mbG9vcigocyAlIDg2NDAwKSAvIDM2MDApO1xuICAgICAgICAgICAgY29uc3QgbWlucyA9IE1hdGguZmxvb3IoKHMgJSAzNjAwKSAvIDYwKTtcbiAgICAgICAgICAgIGNvbnN0IHNlY3MgPSBzICUgNjA7XG4gICAgICAgICAgICBzZXRQYXJ0cyh7IGRheXMsIGhycywgbWlucywgc2VjcyB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY2FsYygpO1xuICAgICAgICBjb25zdCBpZCA9IHNldEludGVydmFsKGNhbGMsIDEwMDApO1xuICAgICAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpZCk7XG4gICAgfSwgW3RhcmdldF0pO1xuICAgIHJldHVybiBwYXJ0cztcbn07XG5cbmNvbnN0IENvdW50ZG93bkRpc3BsYXkgPSAoeyBkYXRlU3RyIH0pID0+IHtcbiAgICBjb25zdCBwYXJ0cyA9IHVzZUNvdW50ZG93bihkYXRlU3RyKTtcbiAgICBpZiAoIXBhcnRzKSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nb3ctY291bnRkb3duJz5cbiAgICAgICAgICAgIHtbWydEYXlzJywgcGFydHMuZGF5c10sIFsnSG91cnMnLCBwYXJ0cy5ocnNdLCBbJ01pbnMnLCBwYXJ0cy5taW5zXSwgWydTZWNzJywgcGFydHMuc2Vjc11dLm1hcCgoW2xhYmVsLCB2YWxdKSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J293LWNvdW50ZG93bi11bml0JyBrZXk9e2xhYmVsfT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdvdy1jb3VudGRvd24tbnVtJz57U3RyaW5nKHZhbCkucGFkU3RhcnQoMiwgJzAnKX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nb3ctY291bnRkb3duLWxhYmVsJz57bGFiZWx9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG4vKiAtLS0tIFN0aWNreSBzZWN0aW9uIG5hdiAtLS0tICovXG5jb25zdCBTZWN0aW9uTmF2ID0gKCkgPT4ge1xuICAgIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZSgnaG9tZScpO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IG9icyA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xuICAgICAgICAgICAgZW50cmllcy5mb3JFYWNoKGUgPT4geyBpZiAoZS5pc0ludGVyc2VjdGluZykgc2V0QWN0aXZlKGUudGFyZ2V0LmlkKTsgfSk7XG4gICAgICAgIH0sIHsgcm9vdE1hcmdpbjogJy00MCUgMHB4IC01NSUgMHB4JyB9KTtcbiAgICAgICAgU0VDVElPTlMuZm9yRWFjaChzID0+IHsgY29uc3QgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzLmlkKTsgaWYgKGVsKSBvYnMub2JzZXJ2ZShlbCk7IH0pO1xuICAgICAgICByZXR1cm4gKCkgPT4gb2JzLmRpc2Nvbm5lY3QoKTtcbiAgICB9LCBbXSk7XG4gICAgY29uc3Qgc2Nyb2xsVG8gPSAoaWQpID0+IHtcbiAgICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgICAgIGlmIChlbCkgZWwuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcsIGJsb2NrOiAnc3RhcnQnIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIChcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9J293LXNlY3Rpb24tbmF2JyBhcmlhLWxhYmVsPSdQYWdlIHNlY3Rpb25zJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdvdy1zZWN0aW9uLW5hdi1pbm5lcic+XG4gICAgICAgICAgICAgICAge1NFQ1RJT05TLm1hcChzID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtzLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgb3ctc2VjdGlvbi1uYXYtYnRuJHthY3RpdmUgPT09IHMuaWQgPyAnIG93LXNlY3Rpb24tbmF2LWJ0bi1hY3RpdmUnIDogJyd9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNjcm9sbFRvKHMuaWQpfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cy5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uYXY+XG4gICAgKTtcbn07XG5cbi8qIC0tLS0gUGFnZSAtLS0tICovXG5jb25zdCBPV2Vla1BhZ2UgPSAoKSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J3BhZ2UgcGFnZS1saWdodCc+XG4gICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgPFNpdGVOYXZiYXIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J293LXBhZ2UnPlxuXG4gICAgICAgICAgICB7LyogPT09PT0gSE9NRSA9PT09PSAqL31cbiAgICAgICAgICAgIDxzZWN0aW9uIGlkPSdob21lJyBjbGFzc05hbWU9J293LXNlY3Rpb24nPlxuICAgICAgICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPSdldi1oZXJvIG93LWhlcm8nPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz0nL3N0YXRpYy9pY29ucy9hYm91dC1zd29vc2guc3ZnJyBhbHQ9JycgY2xhc3NOYW1lPSdldi1oZXJvLXN3b29zaCcgYXJpYS1oaWRkZW49J3RydWUnIC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPScvc3RhdGljL2ljb25zL2VsbGlwc2UtbGFyZ2Uuc3ZnJyBhbHQ9JycgY2xhc3NOYW1lPSdldi1oZXJvLWVsbGlwc2UtbGFyZ2UnIGFyaWEtaGlkZGVuPSd0cnVlJyAvPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz0nL3N0YXRpYy9pY29ucy9lbGxpcHNlLXNtYWxsLnN2ZycgYWx0PScnIGNsYXNzTmFtZT0nZXYtaGVyby1lbGxpcHNlLXNtYWxsJyBhcmlhLWhpZGRlbj0ndHJ1ZScgLz5cbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0nZXYtaGVyby1oZWFkaW5nJz5XZWxjb21lIHRvIE1jTXVydHJ5ITwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nZXYtaGVyby1sZWRlJz57Y29uZmlnLnRoZW1lU3VidGl0bGV9PC9wPlxuICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdvdy1jYXJvdXNlbC13cmFwJz5cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlQ2Fyb3VzZWwgaW1hZ2VzPXtjYXJvdXNlbEltYWdlc30gYXV0b3BsYXk9e3RydWV9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J293LWluZm8tZ3JpZCc+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdvdy1pbmZvLWNhcmQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0nb3ctaW5mby1jYXJkLXRpdGxlJz5XaGF0IGlzIE8tV2Vlaz88L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdvdy1pbmZvLWNhcmQtYm9keSc+T3JpZW50YXRpb24gV2VlayAoTy1XZWVrKSBpcyBhbiBleGNpdGluZyBpbnRyb2R1Y3Rpb24gdG8gbGlmZSBhdCBSaWNlIFVuaXZlcnNpdHkgYW5kIE1jTXVydHJ5IENvbGxlZ2UuIExlZCBieSBvdXIgZGVkaWNhdGVkIE8tV2VlayBjb29yZGluYXRvcnMgYW5kIGFkdmlzb3JzLCB5b3UnbGwgcGFydGljaXBhdGUgaW4gZnVuIGFjdGl2aXRpZXMsIGNvbGxlZ2UgdHJhZGl0aW9ucywgYW5kIGJvbmRpbmcgZXhwZXJpZW5jZXMgdGhhdCB3aWxsIGhlbHAgeW91IG1ha2UgbGlmZWxvbmcgZnJpZW5kcyBhbmQgZmVlbCBhdCBob21lLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdvdy1pbmZvLWNhcmQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0nb3ctaW5mby1jYXJkLXRpdGxlJz5XaGF0IHRvIEV4cGVjdDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J293LWluZm8tY2FyZC1ib2R5Jz5Gcm9tIGljZWJyZWFrZXJzIGFuZCB0ZWFtLWJ1aWxkaW5nIGFjdGl2aXRpZXMgdG8gZXhwbG9yaW5nIGNhbXB1cyBhbmQgbGVhcm5pbmcgYWJvdXQgUmljZSB0cmFkaXRpb25zLCBPLVdlZWsgaXMgcGFja2VkIHdpdGggbWVtb3JhYmxlIG1vbWVudHMuIFlvdSdsbCBtZWV0IHlvdXIgY29sbGVnZSBmYW1pbHksIGRpc2NvdmVyIHJlc291cmNlcywgYW5kIHByZXBhcmUgZm9yIHlvdXIgYWNhZGVtaWMgam91cm5leSB3aGlsZSBoYXZpbmcgYW4gaW5jcmVkaWJsZSB0aW1lITwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgICAgIDxTZWN0aW9uTmF2IC8+XG5cbiAgICAgICAgICAgIHsvKiA9PT09PSBUSEVNRSA9PT09PSAqL31cbiAgICAgICAgICAgIDxzZWN0aW9uIGlkPSd0aGVtZScgY2xhc3NOYW1lPSdvdy1zZWN0aW9uIG93LWNvbnRlbnQtc2VjdGlvbic+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0nb3ctc2VjdGlvbi10aXRsZSc+QWJvdXQgdGhlIFRoZW1lPC9oMj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nb3ctcHJvc2Utd3JhcCc+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtJTUcodGhlbWVEYXRhLmhlcm9JbWFnZSl9IGFsdD0nJyBjbGFzc05hbWU9J293LWZsb2F0LWltZyBvdy1mbG9hdC1sZWZ0JyAvPlxuICAgICAgICAgICAgICAgICAgICB7dGhlbWVEYXRhLnBhcmFncmFwaHMubWFwKChwLCBpKSA9PiA8cCBrZXk9e2l9IGNsYXNzTmFtZT0nb3ctcHJvc2UnPntwfTwvcD4pfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgICAgICB7LyogPT09PT0gQ09PUkRTID09PT09ICovfVxuICAgICAgICAgICAgPHNlY3Rpb24gaWQ9J2Nvb3JkcycgY2xhc3NOYW1lPSdvdy1zZWN0aW9uIG93LWNvbnRlbnQtc2VjdGlvbic+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0nb3ctc2VjdGlvbi10aXRsZSc+TWVldCB0aGUgQ29vcmRzPC9oMj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nb3ctY29vcmQtY2FyZHMnPlxuICAgICAgICAgICAgICAgICAgICB7Y29vcmRzLm1hcCgoeyBuYW1lLCBwcm9ub3VucywgeWVhciwgbWFqb3IsIGZyb20sIGltYWdlLCBsaW5rZWRpbiB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nb3ctY29vcmQtY2FyZCcga2V5PXtuYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGlua2VkaW4gPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2xpbmtlZGlufSB0YXJnZXQ9J19ibGFuaycgcmVsPSdub29wZW5lciBub3JlZmVycmVyJyBjbGFzc05hbWU9J293LWNvb3JkLWltZy1saW5rJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtJTUcoaW1hZ2UpfSBhbHQ9e25hbWV9IGNsYXNzTmFtZT0nb3ctY29vcmQtaW1nJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0lNRyhpbWFnZSl9IGFsdD17bmFtZX0gY2xhc3NOYW1lPSdvdy1jb29yZC1pbWcnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nb3ctY29vcmQtaW5mbyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nb3ctY29vcmQtbmFtZSc+e25hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J293LWNvb3JkLW1ldGEnPntwcm9ub3Vuc308L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nb3ctY29vcmQtbWV0YSc+e3llYXJ9ICZtaWRkb3Q7IHttYWpvcn08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nb3ctY29vcmQtbWV0YSc+e2Zyb219PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHtjb29yZHMubWFwKCh7IG5hbWUsIGltYWdlLCBiaW8sIGJpb0ltYWdlQWxpZ24gfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17bmFtZX0gY2xhc3NOYW1lPSdvdy1wcm9zZS13cmFwIG93LWNvb3JkLWJpbyc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPSdvdy1zdWJzZWN0aW9uLXRpdGxlJz57bmFtZX08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17SU1HKGltYWdlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e25hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgb3ctZmxvYXQtaW1nICR7YmlvSW1hZ2VBbGlnbiA9PT0gJ3JpZ2h0JyA/ICdvdy1mbG9hdC1yaWdodCcgOiAnb3ctZmxvYXQtbGVmdCd9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB7YmlvLm1hcCgobGluZSwgaSkgPT4gPHAga2V5PXtpfSBjbGFzc05hbWU9J293LXByb3NlJz57bGluZX08L3A+KX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgICAgIHsvKiA9PT09PSBHUk9VUFMgPT09PT0gKi99XG4gICAgICAgICAgICA8c2VjdGlvbiBpZD0nZ3JvdXBzJyBjbGFzc05hbWU9J293LXNlY3Rpb24gb3ctY29udGVudC1zZWN0aW9uJz5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdvdy1zZWN0aW9uLXRpdGxlJz5PLVdlZWsgR3JvdXBzPC9oMj5cbiAgICAgICAgICAgICAgICB7W1xuICAgICAgICAgICAgICAgICAgICBbJ1doYXQgaXMgYW4gTy1XZWVrIEdyb3VwPycsIFwiWW91ciBPLVdlZWsgZ3JvdXAgY29uc2lzdHMgb2YgMTAtMTQgTmV3IFN0dWRlbnRzIGFuZCA0LTUgdXBwZXJjbGFzc21lbiBBZHZpc29ycyAob25lIHdpbGwgYmUgYSBDby1BZHZpc29yIGFuZCBvbmUgbWF5IGJlIGFuIEFmZmlsaWF0ZSkgd2hvIGFyZSBiZXlvbmQgZXhjaXRlZCB0byB3ZWxjb21lIHlvdSB0byB0aGUgYmVzdCByZXNpZGVudGlhbCBjb2xsZWdlIG9uIGNhbXB1cyEgQWxsIHRocm91Z2hvdXQgTy1XZWVrLCB5b3Ugd2lsbCBiZSBwcmVwYXJpbmcgZm9yIHJlZ2lzdHJhdGlvbiBhbmQgYWNhZGVtaWMgbGlmZSBhdCBSaWNlIGFuZCBpbnRlcmFjdGluZyB3aXRoIHRoZSByZXN0IG9mIHlvdXIgaW5jb21pbmcgY2xhc3MgYXQgTWNNdXJ0cnksIGJ1dCB5b3VyIE8tV2VlayBncm91cCBpcyBkZXNpZ25lZCBwcmltYXJpbHkgdG8gZ2l2ZSB5b3UgbW9yZSBvZiBhIHBlcnNvbmFsIHN1cHBvcnQgc3lzdGVtIGR1cmluZyB0aGUgd2VlayBhbmQgdGhyb3VnaG91dCB0aGUgeWVhci5cIl0sXG4gICAgICAgICAgICAgICAgICAgIFsnV2hhdCBpcyBhbiBBZHZpc29yPycsIFwiQWR2aXNvcnMgYXJlIGEgZGl2ZXJzZSBncm91cCBvZiBzdHVkZW50cyBmcm9tIE1jTXVydHJ5IHdobyBhcmUgc28gZW50aHVzaWFzdGljIGFib3V0IHdlbGNvbWluZyB5b3UgdG8gUmljZSB0aGF0IHRoZXkgZG9uJ3QgbWluZCByZXR1cm5pbmcgaGVyZSBhbG1vc3QgdHdvIGZ1bGwgd2Vla3MgYmVmb3JlIGNsYXNzZXMgc3RhcnQgdG8gaGVscCB5b3UgbW92ZSBpbiBhbmQgc3RhcnQgeW91ciB0aW1lIGF0IFJpY2UhIFRoZXNlIGZhbnRhc3RpYyBwZW9wbGUgaGF2ZSBiZWVuIGhhbmQtc2VsZWN0ZWQgdG8gYWN0IGFzIHlvdXIgZ3VpZGVzIHRocm91Z2hvdXQgTy1XZWVrOyB0aGV5J2xsIG1ha2Ugc3VyZSB5b3UgZ2V0IHRvIGFsbCBhY3Rpdml0aWVzIGFuZCBtZWV0aW5ncywgYW5zd2VyIGFueSBxdWVzdGlvbnMgeW91IG1pZ2h0IGhhdmUsIGFuZCBzZXJ2ZSBhcyBhbGwtYXJvdW5kIHJlc291cmNlcy5cIl0sXG4gICAgICAgICAgICAgICAgICAgIFsnV2hhdCBpcyBhIENvLUFkdmlzb3I/JywgXCJDby1BZHZpc29ycyBtYWtlIHVwIGFib3V0IGEgZm91cnRoIG9mIG91ciB0ZWFtIGFuZCBhcmUgc3R1ZGVudHMgd2hvIGFyZSBlcXVhbGx5IGZyaWVuZGx5IGFuZCBlbnRodXNpYXN0aWMgYWJvdXQgd2VsY29taW5nIHlvdSB0byBSaWNlLCBidXQgdGhleSBoYWlsIGZyb20gb3RoZXIgcmVzaWRlbnRpYWwgY29sbGVnZXMhIENvLUFkdmlzb3JzIGxvdmUgTWNNdXJ0cnkgc28gbXVjaCB0aGF0IHRoZXkgY2hvb3NlIHRvIGpvaW4gTWNNdXJ0cnkncyBPLVdlZWsgYXMgYW4gYW1iYXNzYWRvciBvZiB0aGVpciBob21lIGNvbGxlZ2UuXCJdLFxuICAgICAgICAgICAgICAgICAgICBbJ1doYXQgaXMgYW4gQWZmaWxpYXRlPycsIFwiQWZmaWxpYXRlcyBhcmUgTy1XZWVrIHBlcnNvbm5lbCB3aG8gc2VydmUgc3BlY2lmaWMgcm9sZXMgZGVzaWduZWQgdG8gaGVscCB5b3Ugd2l0aCB5b3VyIHRyYW5zaXRpb24gdG8gUmljZS4gTW9zdCBPLVdlZWsgZ3JvdXBzIHdpbGwgaGF2ZSBhdCBsZWFzdCBvbmUgQWZmaWxpYXRlLiBUaGVzZSBBZmZpbGlhdGUgcG9zaXRpb25zIGluY2x1ZGU6IFBlZXIgQWNhZGVtaWMgQWR2aXNvcnMsIERpdmVyc2l0eSBGYWNpbGl0YXRvcnMsIFBob3RvZ3JhcGhlciwgVmlkZW9ncmFwaGVyLCBHb3BoZXIsIFJpY2UgSGVhbHRoIEFkdmlzb3IsIEFzc29jaWF0ZXMgTGlhaXNvbiwgQXRobGV0aWMgTGlhaXNvbiwgU3R1ZGVudCBNYWludGVuYW5jZSBSZXByZXNlbnRhdGl2ZSwgQ2hpZWYgSnVzdGljZSwgYW5kIFByZXNpZGVudC5cIl0sXG4gICAgICAgICAgICAgICAgXS5tYXAoKFt0aXRsZSwgYm9keV0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3RpdGxlfSBjbGFzc05hbWU9J293LXByb3NlLXdyYXAnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0nb3ctc3Vic2VjdGlvbi10aXRsZSc+e3RpdGxlfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J293LXByb3NlJz57Ym9keX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9J293LXN1YnNlY3Rpb24tdGl0bGUnIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicsIG1hcmdpbkJvdHRvbTogJzMycHgnIH19PkZpbmQgWW91ciBPLVdlZWsgR3JvdXA8L2gzPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdvdy1ncm91cHMtZ3JpZCc+XG4gICAgICAgICAgICAgICAgICAgIHtncm91cHMubWFwKCh7IG5hbWUsIGltYWdlIH0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdvdy1ncm91cC1jYXJkJyBrZXk9e25hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtJTUcoaW1hZ2UpfSBhbHQ9e25hbWV9IGNsYXNzTmFtZT0nb3ctZ3JvdXAtaW1nJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nb3ctZ3JvdXAtbmFtZSc+e25hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgICAgICB7LyogPT09PT0gTUNNIFRPVVIgPT09PT0gKi99XG4gICAgICAgICAgICA8c2VjdGlvbiBpZD0nbWNtdG91cicgY2xhc3NOYW1lPSdvdy1zZWN0aW9uIG93LWNvbnRlbnQtc2VjdGlvbic+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0nb3ctc2VjdGlvbi10aXRsZSc+VG91ciBvZiBNY011cnRyeTwvaDI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J293LXByb3NlLXdyYXAnPlxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPSdvdy1zdWJzZWN0aW9uLXRpdGxlJz5NY011cnRyeSBEb3VibGUgYW5kIEZhY2lsaXRpZXMgVG91cjwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdvdy12aWRlby13cmFwJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpZnJhbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9J2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLzA5YlQ2cVc3bUR3J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lQm9yZGVyPScwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93PSdhY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxvd0Z1bGxTY3JlZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT0nTWNNdXJ0cnkgVG91ciBWaWRlbydcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J293LXByb3NlJyBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInLCBtYXJnaW5Ub3A6ICcyNHB4JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIElmIHlvdSB3ZXJlIGFzc2lnbmVkIGEgc2luZ2xlLCBwbGVhc2UgZW1haWwgPGEgaHJlZj0nbWFpbHRvOm1jbXVydHJ5b3dlZWtAZ21haWwuY29tJyBjbGFzc05hbWU9J293LWxpbmsnPm1jbXVydHJ5b3dlZWtAZ21haWwuY29tPC9hPiBmb3IgeW91ciByb29tIHZpZGVvLlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgICAgIHsvKiA9PT09PSBZT1VSIFJPT00gPT09PT0gKi99XG4gICAgICAgICAgICA8c2VjdGlvbiBpZD0neW91cnJvb20nIGNsYXNzTmFtZT0nb3ctc2VjdGlvbiBvdy1jb250ZW50LXNlY3Rpb24nPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J293LXNlY3Rpb24tdGl0bGUnPllvdXIgUm9vbTwvaDI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J293LXByb3NlLXdyYXAnPlxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPSdvdy1zdWJzZWN0aW9uLXRpdGxlJz5NY011cnRyeSBEb3VibGVzPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdvdy1wcm9zZSc+Q29taW5nIGluIGFzIG5ldyBzdHVkZW50cyB0byBNY011cnRyeSwgeW91IHdpbGwgbW9zdCBsaWtlbHkgYmUgcGxhY2VkIGluIGRvdWJsZXMgKGEgcm9vbSBmb3IgdHdvIHBlb3BsZSkgd2l0aCB5b3VyIHJvb21tYXRlLiBXZSBoYXZlIGF0dGFjaGVkIGEgZmxvb3IgcGxhbiBvZiB5b3VyIDE4eDE4IHRvIGdpdmUgeW91IGFuIGlkZWEgb2Ygd2hhdCB5b3VyIHJvb20gd2lsbCBsb29rIGxpa2UuIFdoZW4geW91IGdldCB0byB5b3VyIHJvb20gb24gdGhlIGZpcnN0IGRheSwgdGhlcmUgd2lsbCBiZSBhIGJlZCwgZGVzaywgZHJlc3NlciwgbmlnaHRzdGFuZCwgYW5kIGNoYWlyLiBGZWVsIGZyZWUgdG8gbW92ZSB0aGVzZSBhcm91bmQgYXMgZGVzaXJlZCE8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J293LXByb3NlLXdyYXAnPlxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPSdvdy1zdWJzZWN0aW9uLXRpdGxlJz5JbmNsdWRlZCBGdXJuaXR1cmU8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17SU1HKCdoZXJvL3Jvb20uSlBHJyl9IGFsdD0nTWNNdXJ0cnkgUm9vbScgY2xhc3NOYW1lPSdvdy1mbG9hdC1pbWcgb3ctZmxvYXQtcmlnaHQnIC8+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nb3ctcHJvc2UnPjxzdHJvbmc+UGVyIFBlcnNvbjo8L3N0cm9uZz48L3A+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9J293LWxpc3QnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjEgVHdpbiBYTCBTaXplZCBCZWQgRnJhbWU8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjEgVHdpbiBYTCBTaXplZCBNYXR0cmVzczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+MSBMYXJnZSBEcmVzc2VyPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT4xIFNtYWxsIERyZXNzZXIgLyBOaWdodHN0YW5kPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT4xIERlc2s8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjEgQ2hhaXI8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgICAgICB7LyogPT09PT0gTy1XRUVLIEJPT0sgPT09PT0gKi99XG4gICAgICAgICAgICA8c2VjdGlvbiBpZD0nb3dlZWtib29rJyBjbGFzc05hbWU9J293LXNlY3Rpb24gb3ctY29udGVudC1zZWN0aW9uJz5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdvdy1zZWN0aW9uLXRpdGxlJz5PLVdlZWsgQm9vazwvaDI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J293LWJvb2stYWN0aW9ucyc+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e1BERl9QQVRIfSBkb3dubG9hZD17Y29uZmlnLnBkZkRvd25sb2FkTmFtZX0gY2xhc3NOYW1lPSdvdy1ib29rLWJ0bic+XG4gICAgICAgICAgICAgICAgICAgICAgICBEb3dubG9hZCBPLVdlZWsgQm9va1xuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J293LWJvb2stdmlld2VyJz5cbiAgICAgICAgICAgICAgICAgICAgPFBERlZpZXdlciBzcmM9e1BERl9QQVRIfSB0aXRsZT0nTWNNdXJ0cnkgTy1XZWVrIEJvb2snIGhlaWdodD17OTAwfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgICAgICB7LyogPT09PT0gQ09OVEFDVCA9PT09PSAqL31cbiAgICAgICAgICAgIDxzZWN0aW9uIGlkPSdjb250YWN0JyBjbGFzc05hbWU9J293LXNlY3Rpb24gb3ctY29udGVudC1zZWN0aW9uJz5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdvdy1zZWN0aW9uLXRpdGxlJz5Db250YWN0IEluZm88L2gyPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J293LXByb3NlLXdyYXAnPlxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPSdvdy1zdWJzZWN0aW9uLXRpdGxlJz5Zb3VyIE1jTXVydHJ5IE1haWxpbmcgQWRkcmVzczwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdvdy1hZGRyZXNzLWNhcmQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J293LWFkZHJlc3MtbGluZXMnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttYWlsaW5nQWRkcmVzcy5saW5lcy5tYXAoKGxpbmUsIGkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAga2V5PXtpfSBjbGFzc05hbWU9J293LWFkZHJlc3MtbGluZSc+e2kgPT09IDAgPyA8c3Ryb25nPntsaW5lfTwvc3Ryb25nPiA6IGxpbmV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nb3ctYWRkcmVzcy1ub3RlJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPkltcG9ydGFudDo8L3N0cm9uZz4ge21haWxpbmdBZGRyZXNzLm5vdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nb3ctcHJvc2Utd3JhcCc+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9J293LXN1YnNlY3Rpb24tdGl0bGUnPk8tV2VlayBDb29yZGluYXRvcnM8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J293LWNvbnRhY3QtZW1haWwtcm93Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgIEdlbmVyYWwgZW1haWw6IDxhIGhyZWY9e2BtYWlsdG86JHtjb25maWcuZ2VuZXJhbEVtYWlsfWB9IGNsYXNzTmFtZT0nb3ctbGluayc+e2NvbmZpZy5nZW5lcmFsRW1haWx9PC9hPlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdvdy1jb250YWN0LWdyaWQnPlxuICAgICAgICAgICAgICAgICAgICAgICAge2Nvb3Jkcy5tYXAoKGMpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17Yy5uYW1lfSBjbGFzc05hbWU9J293LWNvbnRhY3QtY2FyZCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nb3ctY29udGFjdC1uYW1lJz57Yy5uYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YG1haWx0bzoke2MuZW1haWx9YH0gY2xhc3NOYW1lPSdvdy1saW5rIG93LWNvbnRhY3QtZGV0YWlsJz57Yy5lbWFpbH08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2B0ZWw6JHtjLnBob25lLnJlcGxhY2UoL1teMC05XS9nLCAnJyl9YH0gY2xhc3NOYW1lPSdvdy1saW5rIG93LWNvbnRhY3QtZGV0YWlsJz57Yy5waG9uZX08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nb3ctcHJvc2Utd3JhcCc+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9J293LXN1YnNlY3Rpb24tdGl0bGUnPkNvbGxlZ2UgTGVhZGVyc2hpcDwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdvdy1jb250YWN0LWdyaWQnPlxuICAgICAgICAgICAgICAgICAgICAgICAge1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHJvbGU6IHByZXNpZGVudC5yb2xlLCBuYW1lOiBwcmVzaWRlbnQubmFtZSwgZGV0YWlsczogW3sgbGFiZWw6IHByZXNpZGVudC5lbWFpbCwgaHJlZjogYG1haWx0bzoke3ByZXNpZGVudC5lbWFpbH1gIH1dIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyByb2xlOiBjb29yZGluYXRvci5yb2xlLCBuYW1lOiBjb29yZGluYXRvci5uYW1lLCBkZXRhaWxzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6IGNvb3JkaW5hdG9yLmVtYWlsLCBocmVmOiBgbWFpbHRvOiR7Y29vcmRpbmF0b3IuZW1haWx9YCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiBgT2ZmaWNlOiAke2Nvb3JkaW5hdG9yLm9mZmljZX1gIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6IGBGYXg6ICR7Y29vcmRpbmF0b3IuZmF4fWAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHJvbGU6IG1hZ2lzdGVycy5yb2xlLCBuYW1lOiBtYWdpc3RlcnMubmFtZSwgZGV0YWlsczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5tYWdpc3RlcnMuZW1haWxzLm1hcChlID0+ICh7IGxhYmVsOiBlLCBocmVmOiBgbWFpbHRvOiR7ZX1gIH0pKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogbWFnaXN0ZXJzLnBob25lIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXX0sXG4gICAgICAgICAgICAgICAgICAgICAgICBdLm1hcCgoeyByb2xlLCBuYW1lLCBkZXRhaWxzIH0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17bmFtZX0gY2xhc3NOYW1lPSdvdy1jb250YWN0LWNhcmQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J293LWNvbnRhY3Qtcm9sZSc+e3JvbGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J293LWNvbnRhY3QtbmFtZSc+e25hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGV0YWlscy5tYXAoKGQsIGkpID0+IGQuaHJlZlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyA8YSBrZXk9e2l9IGhyZWY9e2QuaHJlZn0gY2xhc3NOYW1lPSdvdy1saW5rIG93LWNvbnRhY3QtZGV0YWlsJz57ZC5sYWJlbH08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxzcGFuIGtleT17aX0gY2xhc3NOYW1lPSdvdy1jb250YWN0LWRldGFpbCc+e2QubGFiZWx9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8U2l0ZUZvb3RlciAvPlxuICAgIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgT1dlZWtQYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==