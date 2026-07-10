webpackHotUpdate_N_E("pages/government/mcministry",{

/***/ "./pages/government/mcministry/index.js":
/*!**********************************************!*\
  !*** ./pages/government/mcministry/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/Header/Header */ "./components/Header/Header.js");
/* harmony import */ var _components_navbar_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/navbar/Navbar */ "./components/navbar/Navbar.js");
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/Footer/Footer */ "./components/Footer/Footer.js");
/* harmony import */ var _components_PersonChip_PersonChip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/PersonChip/PersonChip */ "./components/PersonChip/PersonChip.js");
/* harmony import */ var _tools_database_useSupabaseTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../tools/database/useSupabaseTable */ "./tools/database/useSupabaseTable.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index.css */ "./pages/government/mcministry/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_8__);


var _this = undefined,
  _jsxFileName = "C:\\Users\\anton\\Documents\\Projects\\MurtWebsite\\pages\\government\\mcministry\\index.js",
  _s = $RefreshSig$();
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }








/*
 * McMinistry - org-chart layout of McMurtry's student government,
 * mirroring the Executive Council & Committee Structure spread in the
 * O-Week Book (pp. 129-130):
 *
 *   row 1: Treasurers | McPresident | Chief Justice
 *   row 2: External VP | Internal VP | Prime Minister | At-Large Rep
 *   row 3: Secretaries | (RSA Senator) | Parliamentarian
 *
 * People come from the `mcministry` table (Chief Justice from `mccourt`)
 * and committee lists from the `committees` table, so the chart stays in
 * sync with Supabase. The config below only encodes structure: which
 * positions sit in which row, role blurbs, and key/P-Card badges.
 * Roles with no people in the table (e.g. RSA Senator) simply don't render.
 */

var lc = function lc(r) {
  return (r.position || '').toLowerCase();
};
var TREASURERS = {
  title: 'Treasurers',
  badges: ['pcard'],
  blurb: 'Handle budget allocations and approve all college purchases.',
  match: function match(p) {
    return p.includes('treasurer');
  },
  showPositions: true
};
var BOTTOM_ROLES = [{
  title: 'Secretaries',
  blurb: 'Keep meeting minutes, manage room reservations, and send out the weekly listserv.',
  match: function match(p) {
    return p.includes('secretary');
  }
}, {
  title: 'RSA Senator',
  blurb: 'Represents McMurtry at the RSA Senate and brings campus-wide updates back to the college.',
  match: function match(p) {
    return p.includes('senator');
  }
}, {
  title: 'Parliamentarian',
  blurb: 'Upholds accountability in government, holds votes, and passes changes to McLegislation.',
  match: function match(p) {
    return p.includes('parliament');
  }
}];
var DIVISION_ROLES = [{
  title: 'External Vice President',
  badges: ['key'],
  blurb: 'Executes longstanding traditions and preserves McMurtry’s legacy.',
  match: function match(p) {
    return p.includes('external vice');
  },
  committeeDivision: 'External Committees'
}, {
  title: 'Internal Vice President',
  badges: ['key'],
  blurb: 'Maintains and improves internal amenities and services within the college.',
  match: function match(p) {
    return p.includes('internal vice');
  },
  committeeDivision: 'Internal Committees'
}, {
  title: 'Prime Minister',
  subtitle: 'Socials Vice President',
  badges: ['key', 'pcard'],
  blurb: 'Plans McMurtry’s large social gatherings and acts as liaison to student activities.',
  match: function match(p) {
    return p.includes('prime minister');
  },
  committeeDivision: 'Social Committees'
}, {
  title: 'At-Large Representative',
  badges: ['key'],
  blurb: 'Leads the People’s Council and maintains hall and commons culture.',
  match: function match(p) {
    return p.includes('at-large');
  },
  committeeDivision: 'At-Large Committees',
  link: {
    href: '#peoples-council',
    label: 'People’s Council ↓'
  }
}];
var PC_GROUPS = [{
  title: 'Hall Reps',
  match: function match(p) {
    return p.includes('hall rep');
  }
}, {
  title: 'Class Reps',
  match: function match(p) {
    return p.includes('class rep') || p.includes('off campus') || p.includes('off-campus');
  }
}];
var committeeHref = function committeeHref(name) {
  return "/government/committees#".concat(encodeURIComponent(name));
};
var Badge = function Badge(_ref) {
  var type = _ref.type;
  return __jsx("span", {
    className: "mcm-badge",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 5
    }
  }, __jsx("i", {
    className: "ph ".concat(type === 'key' ? 'ph-key' : 'ph-credit-card'),
    "aria-hidden": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 9
    }
  }), type === 'key' ? 'Key Holder' : 'P-Card Holder');
};
_c = Badge;
var toChips = function toChips(rows, showPositions) {
  return rows.map(function (_ref2) {
    var name = _ref2.name,
      email = _ref2.email,
      position = _ref2.position;
    return {
      name: name,
      email: email,
      position: showPositions ? position : undefined
    };
  });
};

/* The .mcm-node wrapper is display:contents on desktop (invisible to the
 * flex tiers) and becomes the anchor for the tree-connector pseudo-elements
 * on mobile, since the card itself clips overflow for its cap bar. */
var RoleCard = function RoleCard(_ref3) {
  var title = _ref3.title,
    subtitle = _ref3.subtitle,
    _ref3$badges = _ref3.badges,
    badges = _ref3$badges === void 0 ? [] : _ref3$badges,
    blurb = _ref3.blurb,
    _ref3$people = _ref3.people,
    people = _ref3$people === void 0 ? [] : _ref3$people,
    _ref3$committees = _ref3.committees,
    committees = _ref3$committees === void 0 ? [] : _ref3$committees,
    showPositions = _ref3.showPositions,
    accent = _ref3.accent,
    link = _ref3.link,
    primary = _ref3.primary;
  return __jsx("div", {
    className: "mcm-node".concat(primary ? ' mcm-node-primary' : ''),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 5
    }
  }, __jsx("article", {
    className: "mcm-role-card".concat(primary ? ' mcm-role-card-primary' : ''),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 5
    }
  }, __jsx("header", {
    className: "mcm-role-head",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 9
    }
  }, __jsx("h3", {
    className: "mcm-role-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 13
    }
  }, primary ? __jsx("i", {
    className: "ph ph-crown mcm-role-crown",
    "aria-hidden": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 28
    }
  }) : null, title), subtitle ? __jsx("p", {
    className: "mcm-role-subtitle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 25
    }
  }, subtitle) : null, badges.length > 0 && __jsx("div", {
    className: "mcm-role-badges",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 17
    }
  }, badges.map(function (b) {
    return __jsx(Badge, {
      key: b,
      type: b,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 40
      }
    });
  }))), __jsx("p", {
    className: "mcm-role-blurb",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 9
    }
  }, blurb), people.length > 0 && __jsx(_components_PersonChip_PersonChip__WEBPACK_IMPORTED_MODULE_6__["default"], {
    content: toChips(people, showPositions),
    accent: accent,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 13
    }
  }), committees.length > 0 && __jsx("div", {
    className: "mcm-role-committees",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "mcm-role-committees-label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 17
    }
  }, "Committees"), __jsx("div", {
    className: "mcm-committee-list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 17
    }
  }, committees.map(function (c) {
    return __jsx("a", {
      key: c,
      href: committeeHref(c),
      className: "mcm-committee-chip",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 25
      }
    }, c);
  }))), link ? __jsx("a", {
    href: link.href,
    className: "mcm-role-link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 17
    }
  }, link.label) : null));
};
_c2 = RoleCard;
var McMinistryPage = function McMinistryPage() {
  _s();
  var _useSupabaseTable = Object(_tools_database_useSupabaseTable__WEBPACK_IMPORTED_MODULE_7__["useSupabaseTable"])('mcministry'),
    rows = _useSupabaseTable.rows,
    isLoading = _useSupabaseTable.isLoading;
  var _useSupabaseTable2 = Object(_tools_database_useSupabaseTable__WEBPACK_IMPORTED_MODULE_7__["useSupabaseTable"])('committees'),
    committees = _useSupabaseTable2.rows;
  var _useSupabaseTable3 = Object(_tools_database_useSupabaseTable__WEBPACK_IMPORTED_MODULE_7__["useSupabaseTable"])('mccourt'),
    court = _useSupabaseTable3.rows;
  var pcRows = rows.filter(function (r) {
    return r.tab === "People's Council";
  });
  var ecRows = rows.filter(function (r) {
    return r.tab !== "People's Council";
  });
  var president = ecRows.filter(function (r) {
    return /^(mc)?president/.test(lc(r));
  });
  var treasurers = ecRows.filter(function (r) {
    return TREASURERS.match(lc(r));
  });
  var chiefJustice = court.filter(function (r) {
    return lc(r).includes('chief justice');
  });
  var committeesByDivision = committees.reduce(function (acc, c) {
    (acc[c.division] = acc[c.division] || []).push(c.name);
    return acc;
  }, {});
  var divisionCards = DIVISION_ROLES.map(function (role) {
    return _objectSpread(_objectSpread({}, role), {}, {
      people: ecRows.filter(function (r) {
        return role.match(lc(r));
      }),
      committees: committeesByDivision[role.committeeDivision] || []
    });
  });
  var bottomCards = BOTTOM_ROLES.map(function (role) {
    return _objectSpread(_objectSpread({}, role), {}, {
      people: ecRows.filter(function (r) {
        return role.match(lc(r));
      })
    });
  }).filter(function (role) {
    return role.people.length > 0;
  });
  var pcLead = pcRows.filter(function (r) {
    return lc(r).includes('at-large');
  });
  var isOffCampus = function isOffCampus(r) {
    return lc(r).includes('off campus') || lc(r).includes('off-campus');
  };
  var pcGrouped = PC_GROUPS.map(function (g) {
    return _objectSpread(_objectSpread({}, g), {}, {
      // stable sort: off-campus reps sink below the class-year reps
      people: pcRows.filter(function (r) {
        return g.match(lc(r));
      }).sort(function (a, b) {
        return (isOffCampus(a) ? 1 : 0) - (isOffCampus(b) ? 1 : 0);
      })
    });
  }).filter(function (g) {
    return g.people.length > 0;
  });
  var pcOther = pcRows.filter(function (r) {
    return !lc(r).includes('at-large') && !PC_GROUPS.some(function (g) {
      return g.match(lc(r));
    });
  });
  return __jsx("div", {
    className: "page page-light page-with-staggered-menu",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 9
    }
  }, __jsx(_components_Header_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 13
    }
  }), __jsx(_components_navbar_Navbar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "mcministry-page",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 13
    }
  }, __jsx("header", {
    className: "ev-hero",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
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
      lineNumber: 193,
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
      lineNumber: 194,
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
      lineNumber: 195,
      columnNumber: 21
    }
  }), __jsx("h1", {
    className: "ev-hero-heading",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 21
    }
  }, "McMinistry")), __jsx("div", {
    className: "mcm-intro",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "mcm-intro-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 21
    }
  }, "McMurtry\u2019s government is made up of the ", __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 71
    }
  }, "Executive Council"), " and the ", __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 29
    }
  }, "People\u2019s Council"), ". The chart below shows the hierarchy of responsibility at the college: who leads what, and which committees live under each division."), __jsx("div", {
    className: "mcm-legend",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "mcm-legend-row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 25
    }
  }, __jsx(Badge, {
    type: "key",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 29
    }
  }), __jsx("span", {
    className: "mcm-legend-hint",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 29
    }
  }, "oversees committees and the committee closet")), __jsx("div", {
    className: "mcm-legend-row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 25
    }
  }, __jsx(Badge, {
    type: "pcard",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 29
    }
  }), __jsx("span", {
    className: "mcm-legend-hint",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 29
    }
  }, "makes purchases on behalf of the college")))), isLoading ? __jsx("div", {
    className: "loading-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "loading-spinner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 25
    }
  }), __jsx("p", {
    className: "loading-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 25
    }
  }, "Loading...")) : __jsx("div", {
    className: "fade-in",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 21
    }
  }, __jsx("h2", {
    className: "division-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 25
    }
  }, "Executive Council"), __jsx("div", {
    className: "mcm-chart",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "mcm-tier mcm-tier-top",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 29
    }
  }, treasurers.length > 0 && __jsx(RoleCard, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, TREASURERS, {
    people: treasurers,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 37
    }
  })), president.length > 0 && __jsx(RoleCard, {
    title: "McPresident",
    badges: ['key', 'pcard'],
    blurb: 'Leader of the Executive Council, steering McMurtry’s yearly operations, long-term goals, and initiatives.',
    people: president,
    accent: true,
    primary: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 37
    }
  }), __jsx(RoleCard, {
    title: "Chief Justice",
    blurb: 'Critical authority on wellbeing, conduct, and alcohol policies college-wide, leading the court of Associate Justices.',
    people: chiefJustice,
    link: {
      href: '/government/court',
      label: 'Meet McCourt →'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 33
    }
  })), __jsx("div", {
    className: "mcm-connector",
    "aria-hidden": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 29
    }
  }), __jsx("div", {
    className: "mcm-tier mcm-tier-divisions",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 29
    }
  }, divisionCards.map(function (role) {
    return __jsx(RoleCard, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: role.title
    }, role, {
      accent: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 254,
        columnNumber: 37
      }
    }));
  })), bottomCards.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "mcm-connector",
    "aria-hidden": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 37
    }
  }), __jsx("div", {
    className: "mcm-tier mcm-tier-bottom",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 37
    }
  }, bottomCards.map(function (role) {
    return __jsx(RoleCard, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: role.title
    }, role, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 263,
        columnNumber: 45
      }
    }));
  })))), __jsx("h2", {
    className: "division-title mcm-pc-title",
    id: "peoples-council",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 25
    }
  }, "People\u2019s Council"), __jsx("div", {
    className: "mcm-intro mcm-intro-tight",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 25
    }
  }, __jsx("p", {
    className: "mcm-intro-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 29
    }
  }, "Every floor, class, and off-campus Murt gets a voice (and a vote), led by the At-Large Representative.")), pcLead.length > 0 && __jsx("div", {
    className: "mcm-pc-lead",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 29
    }
  }, __jsx(_components_PersonChip_PersonChip__WEBPACK_IMPORTED_MODULE_6__["default"], {
    content: toChips(pcLead, true),
    accent: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 33
    }
  })), __jsx("div", {
    className: "mcm-pc-groups",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 25
    }
  }, pcGrouped.map(function (g) {
    return __jsx("section", {
      key: g.title,
      className: "mcm-pc-group",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 286,
        columnNumber: 33
      }
    }, __jsx("h3", {
      className: "mcm-pc-group-title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 287,
        columnNumber: 37
      }
    }, g.title), __jsx(_components_PersonChip_PersonChip__WEBPACK_IMPORTED_MODULE_6__["default"], {
      content: toChips(g.people, true),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 288,
        columnNumber: 37
      }
    }));
  }), pcOther.length > 0 && __jsx("section", {
    className: "mcm-pc-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 33
    }
  }, __jsx("h3", {
    className: "mcm-pc-group-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 37
    }
  }, "More Representatives"), __jsx(_components_PersonChip_PersonChip__WEBPACK_IMPORTED_MODULE_6__["default"], {
    content: toChips(pcOther, true),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 37
    }
  }))))), __jsx(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 13
    }
  }));
};
_s(McMinistryPage, "jcY7a915chYjrgWU7+qlQGsQz3M=", false, function () {
  return [_tools_database_useSupabaseTable__WEBPACK_IMPORTED_MODULE_7__["useSupabaseTable"], _tools_database_useSupabaseTable__WEBPACK_IMPORTED_MODULE_7__["useSupabaseTable"], _tools_database_useSupabaseTable__WEBPACK_IMPORTED_MODULE_7__["useSupabaseTable"]];
});
_c3 = McMinistryPage;
/* harmony default export */ __webpack_exports__["default"] = (McMinistryPage);
var _c, _c2, _c3;
$RefreshReg$(_c, "Badge");
$RefreshReg$(_c2, "RoleCard");
$RefreshReg$(_c3, "McMinistryPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ292ZXJubWVudC9tY21pbmlzdHJ5L2luZGV4LmpzIl0sIm5hbWVzIjpbImxjIiwiciIsInBvc2l0aW9uIiwidG9Mb3dlckNhc2UiLCJUUkVBU1VSRVJTIiwidGl0bGUiLCJiYWRnZXMiLCJibHVyYiIsIm1hdGNoIiwicCIsImluY2x1ZGVzIiwic2hvd1Bvc2l0aW9ucyIsIkJPVFRPTV9ST0xFUyIsIkRJVklTSU9OX1JPTEVTIiwiY29tbWl0dGVlRGl2aXNpb24iLCJzdWJ0aXRsZSIsImxpbmsiLCJocmVmIiwibGFiZWwiLCJQQ19HUk9VUFMiLCJjb21taXR0ZWVIcmVmIiwibmFtZSIsImNvbmNhdCIsImVuY29kZVVSSUNvbXBvbmVudCIsIkJhZGdlIiwiX3JlZiIsInR5cGUiLCJfX2pzeCIsImNsYXNzTmFtZSIsIl9fc2VsZiIsIl90aGlzIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJfYyIsInRvQ2hpcHMiLCJyb3dzIiwibWFwIiwiX3JlZjIiLCJlbWFpbCIsInVuZGVmaW5lZCIsIlJvbGVDYXJkIiwiX3JlZjMiLCJfcmVmMyRiYWRnZXMiLCJfcmVmMyRwZW9wbGUiLCJwZW9wbGUiLCJfcmVmMyRjb21taXR0ZWVzIiwiY29tbWl0dGVlcyIsImFjY2VudCIsInByaW1hcnkiLCJsZW5ndGgiLCJiIiwia2V5IiwiUGVyc29uQ2hpcHMiLCJjb250ZW50IiwiYyIsIl9jMiIsIk1jTWluaXN0cnlQYWdlIiwiX3MiLCJfdXNlU3VwYWJhc2VUYWJsZSIsInVzZVN1cGFiYXNlVGFibGUiLCJpc0xvYWRpbmciLCJfdXNlU3VwYWJhc2VUYWJsZTIiLCJfdXNlU3VwYWJhc2VUYWJsZTMiLCJjb3VydCIsInBjUm93cyIsImZpbHRlciIsInRhYiIsImVjUm93cyIsInByZXNpZGVudCIsInRlc3QiLCJ0cmVhc3VyZXJzIiwiY2hpZWZKdXN0aWNlIiwiY29tbWl0dGVlc0J5RGl2aXNpb24iLCJyZWR1Y2UiLCJhY2MiLCJkaXZpc2lvbiIsInB1c2giLCJkaXZpc2lvbkNhcmRzIiwicm9sZSIsIl9vYmplY3RTcHJlYWQiLCJib3R0b21DYXJkcyIsInBjTGVhZCIsImlzT2ZmQ2FtcHVzIiwicGNHcm91cGVkIiwiZyIsInNvcnQiLCJhIiwicGNPdGhlciIsInNvbWUiLCJIZWFkZXIiLCJTaXRlTmF2YmFyIiwic3JjIiwiYWx0IiwiX2V4dGVuZHMiLCJSZWFjdCIsIkZyYWdtZW50IiwiaWQiLCJTaXRlRm9vdGVyIiwiX2MzIiwiJFJlZnJlc2hSZWckIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDNkI7QUFDSTtBQUNBO0FBQ1M7QUFDUTtBQUN2RDs7QUFFckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLEVBQUUsR0FBRyxTQUFMQSxFQUFFQSxDQUFJQyxDQUFDO0VBQUEsT0FBSyxDQUFDQSxDQUFDLENBQUNDLFFBQVEsSUFBSSxFQUFFLEVBQUVDLFdBQVcsQ0FBQyxDQUFDO0FBQUE7QUFFbEQsSUFBTUMsVUFBVSxHQUFHO0VBQ2ZDLEtBQUssRUFBRSxZQUFZO0VBQ25CQyxNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUM7RUFDakJDLEtBQUssRUFBRSw4REFBOEQ7RUFDckVDLEtBQUssRUFBRSxTQUFBQSxNQUFDQyxDQUFDO0lBQUEsT0FBS0EsQ0FBQyxDQUFDQyxRQUFRLENBQUMsV0FBVyxDQUFDO0VBQUE7RUFDckNDLGFBQWEsRUFBRTtBQUNuQixDQUFDO0FBRUQsSUFBTUMsWUFBWSxHQUFHLENBQ2pCO0VBQ0lQLEtBQUssRUFBRSxhQUFhO0VBQ3BCRSxLQUFLLEVBQUUsbUZBQW1GO0VBQzFGQyxLQUFLLEVBQUUsU0FBQUEsTUFBQ0MsQ0FBQztJQUFBLE9BQUtBLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLFdBQVcsQ0FB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QWM7RUFBQSxRQUNZRyxpRkFBZ0IsRUFDZkEsaUZBQWdCLEVBQ3JCQSxpRkFBZ0I7QUFBQTtBQUFBdUMsR0FBQSxHQUh0QzFDLGNBQWM7QUFtS0xBLDZFQUFjLEVBQUM7QUFBQSxJQUFBdkIsRUFBQSxFQUFBc0IsR0FBQSxFQUFBMkMsR0FBQTtBQUFBQyxZQUFBLENBQUFsRSxFQUFBO0FBQUFrRSxZQUFBLENBQUE1QyxHQUFBO0FBQUE0QyxZQUFBLENBQUFELEdBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZ292ZXJubWVudC9tY21pbmlzdHJ5LmIyNDVjYjMyZGViNTFkNjNjMWY0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL0hlYWRlci9IZWFkZXInO1xuaW1wb3J0IFNpdGVOYXZiYXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9uYXZiYXIvTmF2YmFyJztcbmltcG9ydCBTaXRlRm9vdGVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlcic7XG5pbXBvcnQgUGVyc29uQ2hpcHMgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9QZXJzb25DaGlwL1BlcnNvbkNoaXAnO1xuaW1wb3J0IHsgdXNlU3VwYWJhc2VUYWJsZSB9IGZyb20gJy4uLy4uLy4uL3Rvb2xzL2RhdGFiYXNlL3VzZVN1cGFiYXNlVGFibGUnO1xuaW1wb3J0ICcuL2luZGV4LmNzcyc7XG5cbi8qXG4gKiBNY01pbmlzdHJ5IC0gb3JnLWNoYXJ0IGxheW91dCBvZiBNY011cnRyeSdzIHN0dWRlbnQgZ292ZXJubWVudCxcbiAqIG1pcnJvcmluZyB0aGUgRXhlY3V0aXZlIENvdW5jaWwgJiBDb21taXR0ZWUgU3RydWN0dXJlIHNwcmVhZCBpbiB0aGVcbiAqIE8tV2VlayBCb29rIChwcC4gMTI5LTEzMCk6XG4gKlxuICogICByb3cgMTogVHJlYXN1cmVycyB8IE1jUHJlc2lkZW50IHwgQ2hpZWYgSnVzdGljZVxuICogICByb3cgMjogRXh0ZXJuYWwgVlAgfCBJbnRlcm5hbCBWUCB8IFByaW1lIE1pbmlzdGVyIHwgQXQtTGFyZ2UgUmVwXG4gKiAgIHJvdyAzOiBTZWNyZXRhcmllcyB8IChSU0EgU2VuYXRvcikgfCBQYXJsaWFtZW50YXJpYW5cbiAqXG4gKiBQZW9wbGUgY29tZSBmcm9tIHRoZSBgbWNtaW5pc3RyeWAgdGFibGUgKENoaWVmIEp1c3RpY2UgZnJvbSBgbWNjb3VydGApXG4gKiBhbmQgY29tbWl0dGVlIGxpc3RzIGZyb20gdGhlIGBjb21taXR0ZWVzYCB0YWJsZSwgc28gdGhlIGNoYXJ0IHN0YXlzIGluXG4gKiBzeW5jIHdpdGggU3VwYWJhc2UuIFRoZSBjb25maWcgYmVsb3cgb25seSBlbmNvZGVzIHN0cnVjdHVyZTogd2hpY2hcbiAqIHBvc2l0aW9ucyBzaXQgaW4gd2hpY2ggcm93LCByb2xlIGJsdXJicywgYW5kIGtleS9QLUNhcmQgYmFkZ2VzLlxuICogUm9sZXMgd2l0aCBubyBwZW9wbGUgaW4gdGhlIHRhYmxlIChlLmcuIFJTQSBTZW5hdG9yKSBzaW1wbHkgZG9uJ3QgcmVuZGVyLlxuICovXG5cbmNvbnN0IGxjID0gKHIpID0+IChyLnBvc2l0aW9uIHx8ICcnKS50b0xvd2VyQ2FzZSgpO1xuXG5jb25zdCBUUkVBU1VSRVJTID0ge1xuICAgIHRpdGxlOiAnVHJlYXN1cmVycycsXG4gICAgYmFkZ2VzOiBbJ3BjYXJkJ10sXG4gICAgYmx1cmI6ICdIYW5kbGUgYnVkZ2V0IGFsbG9jYXRpb25zIGFuZCBhcHByb3ZlIGFsbCBjb2xsZWdlIHB1cmNoYXNlcy4nLFxuICAgIG1hdGNoOiAocCkgPT4gcC5pbmNsdWRlcygndHJlYXN1cmVyJyksXG4gICAgc2hvd1Bvc2l0aW9uczogdHJ1ZSxcbn07XG5cbmNvbnN0IEJPVFRPTV9ST0xFUyA9IFtcbiAgICB7XG4gICAgICAgIHRpdGxlOiAnU2VjcmV0YXJpZXMnLFxuICAgICAgICBibHVyYjogJ0tlZXAgbWVldGluZyBtaW51dGVzLCBtYW5hZ2Ugcm9vbSByZXNlcnZhdGlvbnMsIGFuZCBzZW5kIG91dCB0aGUgd2Vla2x5IGxpc3RzZXJ2LicsXG4gICAgICAgIG1hdGNoOiAocCkgPT4gcC5pbmNsdWRlcygnc2VjcmV0YXJ5JyksXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiAnUlNBIFNlbmF0b3InLFxuICAgICAgICBibHVyYjogJ1JlcHJlc2VudHMgTWNNdXJ0cnkgYXQgdGhlIFJTQSBTZW5hdGUgYW5kIGJyaW5ncyBjYW1wdXMtd2lkZSB1cGRhdGVzIGJhY2sgdG8gdGhlIGNvbGxlZ2UuJyxcbiAgICAgICAgbWF0Y2g6IChwKSA9PiBwLmluY2x1ZGVzKCdzZW5hdG9yJyksXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiAnUGFybGlhbWVudGFyaWFuJyxcbiAgICAgICAgYmx1cmI6ICdVcGhvbGRzIGFjY291bnRhYmlsaXR5IGluIGdvdmVybm1lbnQsIGhvbGRzIHZvdGVzLCBhbmQgcGFzc2VzIGNoYW5nZXMgdG8gTWNMZWdpc2xhdGlvbi4nLFxuICAgICAgICBtYXRjaDogKHApID0+IHAuaW5jbHVkZXMoJ3BhcmxpYW1lbnQnKSxcbiAgICB9LFxuXTtcblxuY29uc3QgRElWSVNJT05fUk9MRVMgPSBbXG4gICAge1xuICAgICAgICB0aXRsZTogJ0V4dGVybmFsIFZpY2UgUHJlc2lkZW50JyxcbiAgICAgICAgYmFkZ2VzOiBbJ2tleSddLFxuICAgICAgICBibHVyYjogJ0V4ZWN1dGVzIGxvbmdzdGFuZGluZyB0cmFkaXRpb25zIGFuZCBwcmVzZXJ2ZXMgTWNNdXJ0cnnigJlzIGxlZ2FjeS4nLFxuICAgICAgICBtYXRjaDogKHApID0+IHAuaW5jbHVkZXMoJ2V4dGVybmFsIHZpY2UnKSxcbiAgICAgICAgY29tbWl0dGVlRGl2aXNpb246ICdFeHRlcm5hbCBDb21taXR0ZWVzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6ICdJbnRlcm5hbCBWaWNlIFByZXNpZGVudCcsXG4gICAgICAgIGJhZGdlczogWydrZXknXSxcbiAgICAgICAgYmx1cmI6ICdNYWludGFpbnMgYW5kIGltcHJvdmVzIGludGVybmFsIGFtZW5pdGllcyBhbmQgc2VydmljZXMgd2l0aGluIHRoZSBjb2xsZWdlLicsXG4gICAgICAgIG1hdGNoOiAocCkgPT4gcC5pbmNsdWRlcygnaW50ZXJuYWwgdmljZScpLFxuICAgICAgICBjb21taXR0ZWVEaXZpc2lvbjogJ0ludGVybmFsIENvbW1pdHRlZXMnLFxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogJ1ByaW1lIE1pbmlzdGVyJyxcbiAgICAgICAgc3VidGl0bGU6ICdTb2NpYWxzIFZpY2UgUHJlc2lkZW50JyxcbiAgICAgICAgYmFkZ2VzOiBbJ2tleScsICdwY2FyZCddLFxuICAgICAgICBibHVyYjogJ1BsYW5zIE1jTXVydHJ54oCZcyBsYXJnZSBzb2NpYWwgZ2F0aGVyaW5ncyBhbmQgYWN0cyBhcyBsaWFpc29uIHRvIHN0dWRlbnQgYWN0aXZpdGllcy4nLFxuICAgICAgICBtYXRjaDogKHApID0+IHAuaW5jbHVkZXMoJ3ByaW1lIG1pbmlzdGVyJyksXG4gICAgICAgIGNvbW1pdHRlZURpdmlzaW9uOiAnU29jaWFsIENvbW1pdHRlZXMnLFxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogJ0F0LUxhcmdlIFJlcHJlc2VudGF0aXZlJyxcbiAgICAgICAgYmFkZ2VzOiBbJ2tleSddLFxuICAgICAgICBibHVyYjogJ0xlYWRzIHRoZSBQZW9wbGXigJlzIENvdW5jaWwgYW5kIG1haW50YWlucyBoYWxsIGFuZCBjb21tb25zIGN1bHR1cmUuJyxcbiAgICAgICAgbWF0Y2g6IChwKSA9PiBwLmluY2x1ZGVzKCdhdC1sYXJnZScpLFxuICAgICAgICBjb21taXR0ZWVEaXZpc2lvbjogJ0F0LUxhcmdlIENvbW1pdHRlZXMnLFxuICAgICAgICBsaW5rOiB7IGhyZWY6ICcjcGVvcGxlcy1jb3VuY2lsJywgbGFiZWw6ICdQZW9wbGXigJlzIENvdW5jaWwg4oaTJyB9LFxuICAgIH0sXG5dO1xuXG5jb25zdCBQQ19HUk9VUFMgPSBbXG4gICAgeyB0aXRsZTogJ0hhbGwgUmVwcycsIG1hdGNoOiAocCkgPT4gcC5pbmNsdWRlcygnaGFsbCByZXAnKSB9LFxuICAgIHsgdGl0bGU6ICdDbGFzcyBSZXBzJywgbWF0Y2g6IChwKSA9PiBwLmluY2x1ZGVzKCdjbGFzcyByZXAnKSB8fCBwLmluY2x1ZGVzKCdvZmYgY2FtcHVzJykgfHwgcC5pbmNsdWRlcygnb2ZmLWNhbXB1cycpIH0sXG5dO1xuXG5jb25zdCBjb21taXR0ZWVIcmVmID0gKG5hbWUpID0+IGAvZ292ZXJubWVudC9jb21taXR0ZWVzIyR7ZW5jb2RlVVJJQ29tcG9uZW50KG5hbWUpfWA7XG5cbmNvbnN0IEJhZGdlID0gKHsgdHlwZSB9KSA9PiAoXG4gICAgPHNwYW4gY2xhc3NOYW1lPVwibWNtLWJhZGdlXCI+XG4gICAgICAgIDxpIGNsYXNzTmFtZT17YHBoICR7dHlwZSA9PT0gJ2tleScgPyAncGgta2V5JyA6ICdwaC1jcmVkaXQtY2FyZCd9YH0gYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cbiAgICAgICAge3R5cGUgPT09ICdrZXknID8gJ0tleSBIb2xkZXInIDogJ1AtQ2FyZCBIb2xkZXInfVxuICAgIDwvc3Bhbj5cbik7XG5cbmNvbnN0IHRvQ2hpcHMgPSAocm93cywgc2hvd1Bvc2l0aW9ucykgPT5cbiAgICByb3dzLm1hcCgoeyBuYW1lLCBlbWFpbCwgcG9zaXRpb24gfSkgPT4gKHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgZW1haWwsXG4gICAgICAgIHBvc2l0aW9uOiBzaG93UG9zaXRpb25zID8gcG9zaXRpb24gOiB1bmRlZmluZWQsXG4gICAgfSkpO1xuXG4vKiBUaGUgLm1jbS1ub2RlIHdyYXBwZXIgaXMgZGlzcGxheTpjb250ZW50cyBvbiBkZXNrdG9wIChpbnZpc2libGUgdG8gdGhlXG4gKiBmbGV4IHRpZXJzKSBhbmQgYmVjb21lcyB0aGUgYW5jaG9yIGZvciB0aGUgdHJlZS1jb25uZWN0b3IgcHNldWRvLWVsZW1lbnRzXG4gKiBvbiBtb2JpbGUsIHNpbmNlIHRoZSBjYXJkIGl0c2VsZiBjbGlwcyBvdmVyZmxvdyBmb3IgaXRzIGNhcCBiYXIuICovXG5jb25zdCBSb2xlQ2FyZCA9ICh7IHRpdGxlLCBzdWJ0aXRsZSwgYmFkZ2VzID0gW10sIGJsdXJiLCBwZW9wbGUgPSBbXSwgY29tbWl0dGVlcyA9IFtdLCBzaG93UG9zaXRpb25zLCBhY2NlbnQsIGxpbmssIHByaW1hcnkgfSkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgbWNtLW5vZGUke3ByaW1hcnkgPyAnIG1jbS1ub2RlLXByaW1hcnknIDogJyd9YH0+XG4gICAgPGFydGljbGUgY2xhc3NOYW1lPXtgbWNtLXJvbGUtY2FyZCR7cHJpbWFyeSA/ICcgbWNtLXJvbGUtY2FyZC1wcmltYXJ5JyA6ICcnfWB9PlxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cIm1jbS1yb2xlLWhlYWRcIj5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtY20tcm9sZS10aXRsZVwiPlxuICAgICAgICAgICAgICAgIHtwcmltYXJ5ID8gPGkgY2xhc3NOYW1lPVwicGggcGgtY3Jvd24gbWNtLXJvbGUtY3Jvd25cIiBhcmlhLWhpZGRlbj1cInRydWVcIiAvPiA6IG51bGx9XG4gICAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgIHtzdWJ0aXRsZSA/IDxwIGNsYXNzTmFtZT1cIm1jbS1yb2xlLXN1YnRpdGxlXCI+e3N1YnRpdGxlfTwvcD4gOiBudWxsfVxuICAgICAgICAgICAge2JhZGdlcy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1jbS1yb2xlLWJhZGdlc1wiPlxuICAgICAgICAgICAgICAgICAgICB7YmFkZ2VzLm1hcCgoYikgPT4gPEJhZGdlIGtleT17Yn0gdHlwZT17Yn0gLz4pfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIm1jbS1yb2xlLWJsdXJiXCI+e2JsdXJifTwvcD5cbiAgICAgICAge3Blb3BsZS5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgIDxQZXJzb25DaGlwcyBjb250ZW50PXt0b0NoaXBzKHBlb3BsZSwgc2hvd1Bvc2l0aW9ucyl9IGFjY2VudD17YWNjZW50fSAvPlxuICAgICAgICApfVxuICAgICAgICB7Y29tbWl0dGVlcy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWNtLXJvbGUtY29tbWl0dGVlc1wiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1jbS1yb2xlLWNvbW1pdHRlZXMtbGFiZWxcIj5Db21taXR0ZWVzPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWNtLWNvbW1pdHRlZS1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgIHtjb21taXR0ZWVzLm1hcCgoYykgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGEga2V5PXtjfSBocmVmPXtjb21taXR0ZWVIcmVmKGMpfSBjbGFzc05hbWU9XCJtY20tY29tbWl0dGVlLWNoaXBcIj57Y308L2E+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIHtsaW5rID8gPGEgaHJlZj17bGluay5ocmVmfSBjbGFzc05hbWU9XCJtY20tcm9sZS1saW5rXCI+e2xpbmsubGFiZWx9PC9hPiA6IG51bGx9XG4gICAgPC9hcnRpY2xlPlxuICAgIDwvZGl2PlxuKTtcblxuY29uc3QgTWNNaW5pc3RyeVBhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgeyByb3dzLCBpc0xvYWRpbmcgfSA9IHVzZVN1cGFiYXNlVGFibGUoJ21jbWluaXN0cnknKTtcbiAgICBjb25zdCB7IHJvd3M6IGNvbW1pdHRlZXMgfSA9IHVzZVN1cGFiYXNlVGFibGUoJ2NvbW1pdHRlZXMnKTtcbiAgICBjb25zdCB7IHJvd3M6IGNvdXJ0IH0gPSB1c2VTdXBhYmFzZVRhYmxlKCdtY2NvdXJ0Jyk7XG5cbiAgICBjb25zdCBwY1Jvd3MgPSByb3dzLmZpbHRlcigocikgPT4gci50YWIgPT09IFwiUGVvcGxlJ3MgQ291bmNpbFwiKTtcbiAgICBjb25zdCBlY1Jvd3MgPSByb3dzLmZpbHRlcigocikgPT4gci50YWIgIT09IFwiUGVvcGxlJ3MgQ291bmNpbFwiKTtcblxuICAgIGNvbnN0IHByZXNpZGVudCA9IGVjUm93cy5maWx0ZXIoKHIpID0+IC9eKG1jKT9wcmVzaWRlbnQvLnRlc3QobGMocikpKTtcbiAgICBjb25zdCB0cmVhc3VyZXJzID0gZWNSb3dzLmZpbHRlcigocikgPT4gVFJFQVNVUkVSUy5tYXRjaChsYyhyKSkpO1xuICAgIGNvbnN0IGNoaWVmSnVzdGljZSA9IGNvdXJ0LmZpbHRlcigocikgPT4gbGMocikuaW5jbHVkZXMoJ2NoaWVmIGp1c3RpY2UnKSk7XG5cbiAgICBjb25zdCBjb21taXR0ZWVzQnlEaXZpc2lvbiA9IGNvbW1pdHRlZXMucmVkdWNlKChhY2MsIGMpID0+IHtcbiAgICAgICAgKGFjY1tjLmRpdmlzaW9uXSA9IGFjY1tjLmRpdmlzaW9uXSB8fCBbXSkucHVzaChjLm5hbWUpO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHt9KTtcblxuICAgIGNvbnN0IGRpdmlzaW9uQ2FyZHMgPSBESVZJU0lPTl9ST0xFUy5tYXAoKHJvbGUpID0+ICh7XG4gICAgICAgIC4uLnJvbGUsXG4gICAgICAgIHBlb3BsZTogZWNSb3dzLmZpbHRlcigocikgPT4gcm9sZS5tYXRjaChsYyhyKSkpLFxuICAgICAgICBjb21taXR0ZWVzOiBjb21taXR0ZWVzQnlEaXZpc2lvbltyb2xlLmNvbW1pdHRlZURpdmlzaW9uXSB8fCBbXSxcbiAgICB9KSk7XG5cbiAgICBjb25zdCBib3R0b21DYXJkcyA9IEJPVFRPTV9ST0xFU1xuICAgICAgICAubWFwKChyb2xlKSA9PiAoeyAuLi5yb2xlLCBwZW9wbGU6IGVjUm93cy5maWx0ZXIoKHIpID0+IHJvbGUubWF0Y2gobGMocikpKSB9KSlcbiAgICAgICAgLmZpbHRlcigocm9sZSkgPT4gcm9sZS5wZW9wbGUubGVuZ3RoID4gMCk7XG5cbiAgICBjb25zdCBwY0xlYWQgPSBwY1Jvd3MuZmlsdGVyKChyKSA9PiBsYyhyKS5pbmNsdWRlcygnYXQtbGFyZ2UnKSk7XG4gICAgY29uc3QgaXNPZmZDYW1wdXMgPSAocikgPT4gbGMocikuaW5jbHVkZXMoJ29mZiBjYW1wdXMnKSB8fCBsYyhyKS5pbmNsdWRlcygnb2ZmLWNhbXB1cycpO1xuICAgIGNvbnN0IHBjR3JvdXBlZCA9IFBDX0dST1VQU1xuICAgICAgICAubWFwKChnKSA9PiAoe1xuICAgICAgICAgICAgLi4uZyxcbiAgICAgICAgICAgIC8vIHN0YWJsZSBzb3J0OiBvZmYtY2FtcHVzIHJlcHMgc2luayBiZWxvdyB0aGUgY2xhc3MteWVhciByZXBzXG4gICAgICAgICAgICBwZW9wbGU6IHBjUm93c1xuICAgICAgICAgICAgICAgIC5maWx0ZXIoKHIpID0+IGcubWF0Y2gobGMocikpKVxuICAgICAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiAoaXNPZmZDYW1wdXMoYSkgPyAxIDogMCkgLSAoaXNPZmZDYW1wdXMoYikgPyAxIDogMCkpLFxuICAgICAgICB9KSlcbiAgICAgICAgLmZpbHRlcigoZykgPT4gZy5wZW9wbGUubGVuZ3RoID4gMCk7XG4gICAgY29uc3QgcGNPdGhlciA9IHBjUm93cy5maWx0ZXIoXG4gICAgICAgIChyKSA9PiAhbGMocikuaW5jbHVkZXMoJ2F0LWxhcmdlJykgJiYgIVBDX0dST1VQUy5zb21lKChnKSA9PiBnLm1hdGNoKGxjKHIpKSlcbiAgICApO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BhZ2UgcGFnZS1saWdodCBwYWdlLXdpdGgtc3RhZ2dlcmVkLW1lbnUnPlxuICAgICAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICAgICAgPFNpdGVOYXZiYXIgLz5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21jbWluaXN0cnktcGFnZSc+XG4gICAgICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9J2V2LWhlcm8nPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz0nL3N0YXRpYy9pY29ucy9hYm91dC1zd29vc2guc3ZnJyBhbHQ9JycgY2xhc3NOYW1lPSdldi1oZXJvLXN3b29zaCcgYXJpYS1oaWRkZW49J3RydWUnIC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPScvc3RhdGljL2ljb25zL2VsbGlwc2UtbGFyZ2Uuc3ZnJyBhbHQ9JycgY2xhc3NOYW1lPSdldi1oZXJvLWVsbGlwc2UtbGFyZ2UnIGFyaWEtaGlkZGVuPSd0cnVlJyAvPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz0nL3N0YXRpYy9pY29ucy9lbGxpcHNlLXNtYWxsLnN2ZycgYWx0PScnIGNsYXNzTmFtZT0nZXYtaGVyby1lbGxpcHNlLXNtYWxsJyBhcmlhLWhpZGRlbj0ndHJ1ZScgLz5cbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0nZXYtaGVyby1oZWFkaW5nJz5NY01pbmlzdHJ5PC9oMT5cbiAgICAgICAgICAgICAgICA8L2hlYWRlcj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtY20taW50cm8nPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J21jbS1pbnRyby10ZXh0Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgIE1jTXVydHJ5JnJzcXVvO3MgZ292ZXJubWVudCBpcyBtYWRlIHVwIG9mIHRoZSA8c3Ryb25nPkV4ZWN1dGl2ZSBDb3VuY2lsPC9zdHJvbmc+IGFuZFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhlIDxzdHJvbmc+UGVvcGxlJnJzcXVvO3MgQ291bmNpbDwvc3Ryb25nPi4gVGhlIGNoYXJ0IGJlbG93IHNob3dzIHRoZSBoaWVyYXJjaHkgb2ZcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNpYmlsaXR5IGF0IHRoZSBjb2xsZWdlOiB3aG8gbGVhZHMgd2hhdCwgYW5kIHdoaWNoIGNvbW1pdHRlZXMgbGl2ZSB1bmRlclxuICAgICAgICAgICAgICAgICAgICAgICAgZWFjaCBkaXZpc2lvbi5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWNtLWxlZ2VuZCc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWNtLWxlZ2VuZC1yb3cnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYWRnZSB0eXBlPSdrZXknIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdtY20tbGVnZW5kLWhpbnQnPm92ZXJzZWVzIGNvbW1pdHRlZXMgYW5kIHRoZSBjb21taXR0ZWUgY2xvc2V0PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWNtLWxlZ2VuZC1yb3cnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYWRnZSB0eXBlPSdwY2FyZCcgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J21jbS1sZWdlbmQtaGludCc+bWFrZXMgcHVyY2hhc2VzIG9uIGJlaGFsZiBvZiB0aGUgY29sbGVnZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIHtpc0xvYWRpbmcgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsb2FkaW5nLWNvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbG9hZGluZy1zcGlubmVyJz48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbG9hZGluZy10ZXh0Jz5Mb2FkaW5nLi4uPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmFkZS1pbic+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdkaXZpc2lvbi10aXRsZSc+RXhlY3V0aXZlIENvdW5jaWw8L2gyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWNtLWNoYXJ0Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWNtLXRpZXIgbWNtLXRpZXItdG9wJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RyZWFzdXJlcnMubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um9sZUNhcmQgey4uLlRSRUFTVVJFUlN9IHBlb3BsZT17dHJlYXN1cmVyc30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ByZXNpZGVudC5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb2xlQ2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPSdNY1ByZXNpZGVudCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWRnZXM9e1sna2V5JywgJ3BjYXJkJ119XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmx1cmI9eydMZWFkZXIgb2YgdGhlIEV4ZWN1dGl2ZSBDb3VuY2lsLCBzdGVlcmluZyBNY011cnRyeeKAmXMgeWVhcmx5IG9wZXJhdGlvbnMsIGxvbmctdGVybSBnb2FscywgYW5kIGluaXRpYXRpdmVzLid9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVvcGxlPXtwcmVzaWRlbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbWFyeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvbGVDYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT0nQ2hpZWYgSnVzdGljZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsdXJiPXsnQ3JpdGljYWwgYXV0aG9yaXR5IG9uIHdlbGxiZWluZywgY29uZHVjdCwgYW5kIGFsY29ob2wgcG9saWNpZXMgY29sbGVnZS13aWRlLCBsZWFkaW5nIHRoZSBjb3VydCBvZiBBc3NvY2lhdGUgSnVzdGljZXMuJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlb3BsZT17Y2hpZWZKdXN0aWNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluaz17eyBocmVmOiAnL2dvdmVybm1lbnQvY291cnQnLCBsYWJlbDogJ01lZXQgTWNDb3VydCDihpInIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWNtLWNvbm5lY3RvcicgYXJpYS1oaWRkZW49J3RydWUnIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWNtLXRpZXIgbWNtLXRpZXItZGl2aXNpb25zJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RpdmlzaW9uQ2FyZHMubWFwKChyb2xlKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um9sZUNhcmQga2V5PXtyb2xlLnRpdGxlfSB7Li4ucm9sZX0gYWNjZW50IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2JvdHRvbUNhcmRzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWNtLWNvbm5lY3RvcicgYXJpYS1oaWRkZW49J3RydWUnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWNtLXRpZXIgbWNtLXRpZXItYm90dG9tJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Ym90dG9tQ2FyZHMubWFwKChyb2xlKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb2xlQ2FyZCBrZXk9e3JvbGUudGl0bGV9IHsuLi5yb2xlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdkaXZpc2lvbi10aXRsZSBtY20tcGMtdGl0bGUnIGlkPSdwZW9wbGVzLWNvdW5jaWwnPlBlb3BsZSZyc3F1bztzIENvdW5jaWw8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21jbS1pbnRybyBtY20taW50cm8tdGlnaHQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbWNtLWludHJvLXRleHQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFdmVyeSBmbG9vciwgY2xhc3MsIGFuZCBvZmYtY2FtcHVzIE11cnQgZ2V0cyBhIHZvaWNlIChhbmQgYSB2b3RlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVkIGJ5IHRoZSBBdC1MYXJnZSBSZXByZXNlbnRhdGl2ZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAge3BjTGVhZC5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWNtLXBjLWxlYWQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGVyc29uQ2hpcHMgY29udGVudD17dG9DaGlwcyhwY0xlYWQsIHRydWUpfSBhY2NlbnQgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtY20tcGMtZ3JvdXBzJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGNHcm91cGVkLm1hcCgoZykgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBrZXk9e2cudGl0bGV9IGNsYXNzTmFtZT0nbWNtLXBjLWdyb3VwJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9J21jbS1wYy1ncm91cC10aXRsZSc+e2cudGl0bGV9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQZXJzb25DaGlwcyBjb250ZW50PXt0b0NoaXBzKGcucGVvcGxlLCB0cnVlKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwY090aGVyLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J21jbS1wYy1ncm91cCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPSdtY20tcGMtZ3JvdXAtdGl0bGUnPk1vcmUgUmVwcmVzZW50YXRpdmVzPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQZXJzb25DaGlwcyBjb250ZW50PXt0b0NoaXBzKHBjT3RoZXIsIHRydWUpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxTaXRlRm9vdGVyIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNY01pbmlzdHJ5UGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=