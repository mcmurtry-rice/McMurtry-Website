webpackHotUpdate_N_E("pages/government/mcministry",{

/***/ "./pages/government/mcministry/index.js":
/*!**********************************************!*\
  !*** ./pages/government/mcministry/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/Header/Header */ "./components/Header/Header.js");
/* harmony import */ var _components_navbar_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/navbar/Navbar */ "./components/navbar/Navbar.js");
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/Footer/Footer */ "./components/Footer/Footer.js");
/* harmony import */ var _components_PersonChip_PersonChip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/PersonChip/PersonChip */ "./components/PersonChip/PersonChip.js");
/* harmony import */ var _tools_database_useSupabaseTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../tools/database/useSupabaseTable */ "./tools/database/useSupabaseTable.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index.css */ "./pages/government/mcministry/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_7__);

var _this = undefined,
  _jsxFileName = "C:\\Users\\anton\\Documents\\Projects\\MurtWebsite\\pages\\government\\mcministry\\index.js",
  _s = $RefreshSig$();
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }








/*
 * McMinistry - org-chart layout of McMurtry's student government,
 * mirroring the Executive Council & Committee Structure spread in the
 * O-Week Book (pp. 129-130):
 *
 *   row 1: Treasurers | McPresident | Chief Justice
 *   row 2: External VP | Internal VP | Prime Minister | At-Large Rep
 *   row 3: Secretaries | (RSA Senator) | Parliamentarian
 *
 * Desktop shows full cards. Mobile keeps the same diagram SHAPE with
 * compact side-by-side nodes around a central spine; tapping a node
 * zooms into a modal with the role's full details (same interaction
 * as the committees diagram).
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
      lineNumber: 99,
      columnNumber: 5
    }
  }, __jsx("i", {
    className: "ph ".concat(type === 'key' ? 'ph-key' : 'ph-credit-card'),
    "aria-hidden": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 9
    }
  }), __jsx("span", {
    className: "mcm-badge-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 9
    }
  }, type === 'key' ? 'Key Holder' : 'P-Card Holder'));
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
var TierLabel = function TierLabel(_ref3) {
  var children = _ref3.children;
  return __jsx("span", {
    className: "mcm-tier-label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 5
    }
  }, __jsx("span", {
    className: "mcm-tier-label-pill",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 9
    }
  }, children));
};

/* The .mcm-node wrapper is display:contents on desktop (invisible to the
 * flex tiers) and becomes the sized grid cell on mobile. */
_c2 = TierLabel;
var RoleCard = function RoleCard(_ref4) {
  var role = _ref4.role,
    onSelect = _ref4.onSelect;
  return __jsx("div", {
    className: "mcm-node".concat(role.primary ? ' mcm-node-primary' : ''),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 5
    }
  }, __jsx("article", {
    className: "mcm-role-card".concat(role.primary ? ' mcm-role-card-primary' : ''),
    onClick: function onClick() {
      return onSelect(role);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 9
    }
  }, __jsx("header", {
    className: "mcm-role-head",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 13
    }
  }, __jsx("h3", {
    className: "mcm-role-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 17
    }
  }, role.primary ? __jsx("i", {
    className: "ph ph-crown mcm-role-crown",
    "aria-hidden": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 37
    }
  }) : null, role.title), role.subtitle ? __jsx("p", {
    className: "mcm-role-subtitle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 34
    }
  }, role.subtitle) : null, (role.badges || []).length > 0 && __jsx("div", {
    className: "mcm-role-badges",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 21
    }
  }, role.badges.map(function (b) {
    return __jsx(Badge, {
      key: b,
      type: b,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 49
      }
    });
  }))), __jsx("p", {
    className: "mcm-role-blurb",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 13
    }
  }, role.blurb), (role.people || []).length > 0 && __jsx("div", {
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 17
    }
  }, __jsx(_components_PersonChip_PersonChip__WEBPACK_IMPORTED_MODULE_5__["default"], {
    content: toChips(role.people, role.showPositions),
    accent: role.accent,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 21
    }
  })), (role.committees || []).length > 0 && __jsx("div", {
    className: "mcm-role-committees",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: "mcm-role-committees-label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 21
    }
  }, "Committees"), __jsx("div", {
    className: "mcm-committee-list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 21
    }
  }, role.committees.map(function (c) {
    return __jsx("a", {
      key: c,
      href: committeeHref(c),
      className: "mcm-committee-chip",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 29
      }
    }, c);
  }))), role.link ? __jsx("a", {
    href: role.link.href,
    className: "mcm-role-link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 26
    }
  }, role.link.label) : null, __jsx("span", {
    className: "mcm-role-more",
    "aria-hidden": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 13
    }
  }, "Details \u203A")));
};

/* Mobile detail view: same zoom-in modal pattern as the committees page
 * (reuses the cm-modal styles from that page's global CSS). */
_c3 = RoleCard;
var RoleModal = function RoleModal(_ref5) {
  var role = _ref5.role,
    onClose = _ref5.onClose;
  return __jsx("div", {
    className: "mcm-modal-scrim",
    onClick: onClose,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "mcm-modal",
    role: "dialog",
    "aria-modal": "true",
    "aria-label": role.title,
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 9
    }
  }, __jsx("button", {
    type: "button",
    className: "mcm-modal-close",
    onClick: onClose,
    "aria-label": "Close",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 13
    }
  }, __jsx("i", {
    className: "ph ph-x",
    "aria-hidden": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 17
    }
  })), role.subtitle ? __jsx("p", {
    className: "mcm-modal-eyebrow",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 30
    }
  }, role.subtitle) : null, __jsx("h2", {
    className: "mcm-modal-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 13
    }
  }, role.primary ? __jsx("i", {
    className: "ph ph-crown mcm-role-crown",
    "aria-hidden": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 33
    }
  }) : null, role.title), (role.badges || []).length > 0 && __jsx("div", {
    className: "mcm-role-badges mcm-modal-badges",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 17
    }
  }, role.badges.map(function (b) {
    return __jsx(Badge, {
      key: b,
      type: b,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 45
      }
    });
  })), __jsx("p", {
    className: "mcm-modal-blurb",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 13
    }
  }, role.blurb), (role.people || []).length > 0 && __jsx(_components_PersonChip_PersonChip__WEBPACK_IMPORTED_MODULE_5__["default"], {
    content: toChips(role.people, true),
    accent: role.accent,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 17
    }
  }), (role.committees || []).length > 0 && __jsx("div", {
    className: "mcm-role-committees mcm-modal-committees",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: "mcm-role-committees-label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 21
    }
  }, "Committees"), __jsx("div", {
    className: "mcm-committee-list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 21
    }
  }, role.committees.map(function (c) {
    return __jsx("a", {
      key: c,
      href: committeeHref(c),
      className: "mcm-committee-chip",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 29
      }
    }, c);
  }))), role.link ? __jsx("a", {
    href: role.link.href,
    className: "mcm-role-link",
    onClick: onClose,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 26
    }
  }, role.link.label) : null));
};
_c4 = RoleModal;
var McMinistryPage = function McMinistryPage() {
  _s();
  var _useSupabaseTable = Object(_tools_database_useSupabaseTable__WEBPACK_IMPORTED_MODULE_6__["useSupabaseTable"])('mcministry'),
    rows = _useSupabaseTable.rows,
    isLoading = _useSupabaseTable.isLoading;
  var _useSupabaseTable2 = Object(_tools_database_useSupabaseTable__WEBPACK_IMPORTED_MODULE_6__["useSupabaseTable"])('committees'),
    committees = _useSupabaseTable2.rows;
  var _useSupabaseTable3 = Object(_tools_database_useSupabaseTable__WEBPACK_IMPORTED_MODULE_6__["useSupabaseTable"])('mccourt'),
    court = _useSupabaseTable3.rows;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
    selectedRole = _useState[0],
    setSelectedRole = _useState[1];
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
  var topCards = [treasurers.length > 0 ? _objectSpread(_objectSpread({}, TREASURERS), {}, {
    people: treasurers
  }) : null, president.length > 0 ? {
    title: 'McPresident',
    badges: ['key', 'pcard'],
    blurb: 'Leader of the Executive Council, steering McMurtry’s yearly operations, long-term goals, and initiatives.',
    people: president,
    accent: true,
    primary: true
  } : null, {
    title: 'Chief Justice',
    blurb: 'Critical authority on wellbeing, conduct, and alcohol policies college-wide, leading the court of Associate Justices.',
    people: chiefJustice,
    link: {
      href: '/government/court',
      label: 'Meet McCourt →'
    }
  }].filter(Boolean);
  var divisionCards = DIVISION_ROLES.map(function (role) {
    return _objectSpread(_objectSpread({}, role), {}, {
      accent: true,
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

  // the modal is a mobile affordance: on desktop the cards already show
  // everything, so clicks do nothing there
  var openRole = function openRole(role) {
    if (window.matchMedia('(max-width: 640px)').matches) setSelectedRole(role);
  };

  // lock page scroll and close on Escape while the modal is open
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (!selectedRole) return undefined;
    var prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    var onKey = function onKey(e) {
      if (e.key === 'Escape') setSelectedRole(null);
    };
    window.addEventListener('keydown', onKey);
    return function () {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [selectedRole]);
  return __jsx("div", {
    className: "page page-light page-with-staggered-menu",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 9
    }
  }, __jsx(_components_Header_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 13
    }
  }), __jsx(_components_navbar_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "mcministry-page",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 13
    }
  }, __jsx("header", {
    className: "ev-hero",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
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
      lineNumber: 299,
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
      lineNumber: 300,
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
      lineNumber: 301,
      columnNumber: 21
    }
  }), __jsx("h1", {
    className: "ev-hero-heading",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 21
    }
  }, "McMinistry")), __jsx("div", {
    className: "mcm-intro",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "mcm-intro-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 21
    }
  }, "McMurtry\u2019s government is made up of the ", __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 71
    }
  }, "Executive Council"), " and the ", __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 29
    }
  }, "People\u2019s Council"), ". The chart below shows the hierarchy of responsibility at the college: who leads what, and which committees live under each division."), __jsx("div", {
    className: "mcm-legend",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "mcm-legend-row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 25
    }
  }, __jsx(Badge, {
    type: "key",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 29
    }
  }), __jsx("span", {
    className: "mcm-legend-hint",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 29
    }
  }, "oversees committees and the committee closet")), __jsx("div", {
    className: "mcm-legend-row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 25
    }
  }, __jsx(Badge, {
    type: "pcard",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318,
      columnNumber: 29
    }
  }), __jsx("span", {
    className: "mcm-legend-hint",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319,
      columnNumber: 29
    }
  }, "makes purchases on behalf of the college")))), isLoading ? __jsx("div", {
    className: "loading-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "loading-spinner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 25
    }
  }), __jsx("p", {
    className: "loading-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327,
      columnNumber: 25
    }
  }, "Loading...")) : __jsx("div", {
    className: "fade-in",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 21
    }
  }, __jsx("h2", {
    className: "division-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331,
      columnNumber: 25
    }
  }, "Executive Council"), __jsx("div", {
    className: "mcm-chart",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "mcm-tier mcm-tier-top",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334,
      columnNumber: 29
    }
  }, __jsx(TierLabel, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335,
      columnNumber: 33
    }
  }, "Legislative"), topCards.map(function (role) {
    return __jsx(RoleCard, {
      key: role.title,
      role: role,
      onSelect: openRole,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 337,
        columnNumber: 37
      }
    });
  })), __jsx("div", {
    className: "mcm-connector",
    "aria-hidden": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341,
      columnNumber: 29
    }
  }), __jsx("div", {
    className: "mcm-tier mcm-tier-divisions",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343,
      columnNumber: 29
    }
  }, __jsx(TierLabel, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344,
      columnNumber: 33
    }
  }, "Vice Presidents"), divisionCards.map(function (role) {
    return __jsx(RoleCard, {
      key: role.title,
      role: role,
      onSelect: openRole,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 346,
        columnNumber: 37
      }
    });
  })), bottomCards.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 351,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "mcm-connector",
    "aria-hidden": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352,
      columnNumber: 37
    }
  }), __jsx("div", {
    className: "mcm-tier mcm-tier-bottom",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353,
      columnNumber: 37
    }
  }, __jsx(TierLabel, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 354,
      columnNumber: 41
    }
  }, "Administration"), bottomCards.map(function (role) {
    return __jsx(RoleCard, {
      key: role.title,
      role: role,
      onSelect: openRole,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 356,
        columnNumber: 45
      }
    });
  })))), __jsx("h2", {
    className: "division-title mcm-pc-title",
    id: "peoples-council",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363,
      columnNumber: 25
    }
  }, "People\u2019s Council"), __jsx("div", {
    className: "mcm-intro mcm-intro-tight",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 364,
      columnNumber: 25
    }
  }, __jsx("p", {
    className: "mcm-intro-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365,
      columnNumber: 29
    }
  }, "Every floor, class, and off-campus Murt gets a voice (and a vote), led by the At-Large Representative.")), pcLead.length > 0 && __jsx("div", {
    className: "mcm-pc-lead",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372,
      columnNumber: 29
    }
  }, __jsx(_components_PersonChip_PersonChip__WEBPACK_IMPORTED_MODULE_5__["default"], {
    content: toChips(pcLead, true),
    accent: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373,
      columnNumber: 33
    }
  })), __jsx("div", {
    className: "mcm-pc-groups",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377,
      columnNumber: 25
    }
  }, pcGrouped.map(function (g) {
    return __jsx("section", {
      key: g.title,
      className: "mcm-pc-group",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 379,
        columnNumber: 33
      }
    }, __jsx("h3", {
      className: "mcm-pc-group-title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 380,
        columnNumber: 37
      }
    }, g.title), __jsx(_components_PersonChip_PersonChip__WEBPACK_IMPORTED_MODULE_5__["default"], {
      content: toChips(g.people, true),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 381,
        columnNumber: 37
      }
    }));
  }), pcOther.length > 0 && __jsx("section", {
    className: "mcm-pc-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 385,
      columnNumber: 33
    }
  }, __jsx("h3", {
    className: "mcm-pc-group-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 386,
      columnNumber: 37
    }
  }, "More Representatives"), __jsx(_components_PersonChip_PersonChip__WEBPACK_IMPORTED_MODULE_5__["default"], {
    content: toChips(pcOther, true),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 387,
      columnNumber: 37
    }
  })))), selectedRole ? __jsx(RoleModal, {
    role: selectedRole,
    onClose: function onClose() {
      return setSelectedRole(null);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 395,
      columnNumber: 21
    }
  }) : null), __jsx(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 399,
      columnNumber: 13
    }
  }));
};
_s(McMinistryPage, "giaPt7h6V/n+o/7EQjgrZvl8QQw=", false, function () {
  return [_tools_database_useSupabaseTable__WEBPACK_IMPORTED_MODULE_6__["useSupabaseTable"], _tools_database_useSupabaseTable__WEBPACK_IMPORTED_MODULE_6__["useSupabaseTable"], _tools_database_useSupabaseTable__WEBPACK_IMPORTED_MODULE_6__["useSupabaseTable"]];
});
_c5 = McMinistryPage;
/* harmony default export */ __webpack_exports__["default"] = (McMinistryPage);
var _c, _c2, _c3, _c4, _c5;
$RefreshReg$(_c, "Badge");
$RefreshReg$(_c2, "TierLabel");
$RefreshReg$(_c3, "RoleCard");
$RefreshReg$(_c4, "RoleModal");
$RefreshReg$(_c5, "McMinistryPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ292ZXJubWVudC9tY21pbmlzdHJ5L2luZGV4LmpzIl0sIm5hbWVzIjpbImxjIiwiciIsInBvc2l0aW9uIiwidG9Mb3dlckNhc2UiLCJUUkVBU1VSRVJTIiwidGl0bGUiLCJiYWRnZXMiLCJibHVyYiIsIm1hdGNoIiwicCIsImluY2x1ZGVzIiwic2hvd1Bvc2l0aW9ucyIsIkJPVFRPTV9ST0xFUyIsIkRJVklTSU9OX1JPTEVTIiwiY29tbWl0dGVlRGl2aXNpb24iLCJzdWJ0aXRsZSIsImxpbmsiLCJocmVmIiwibGFiZWwiLCJQQ19HUk9VUFMiLCJjb21taXR0ZWVIcmVmIiwibmFtZSIsImNvbmNhdCIsImVuY29kZVVSSUNvbXBvbmVudCIsIkJhZGdlIiwiX3JlZiIsInR5cGUiLCJfX2pzeCIsImNsYXNzTmFtZSIsIl9fc2VsZiIsIl90aGlzIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJfYyIsInRvQ2hpcHMiLCJyb3dzIiwibWFwIiwiX3JlZjIiLCJlbWFpbCIsInVuZGVmaW5lZCIsIlRpZXJMYWJlbCIsIl9yZWYzIiwiY2hpbGRyZW4iLCJfYzIiLCJSb2xlQ2FyZCIsIl9yZWY0Iiwicm9sZSIsIm9uU2VsZWN0IiwicHJpbWFyeSIsIm9uQ2xpY2siLCJsZW5ndGgiLCJiIiwia2V5IiwicGVvcGxlIiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsIlBlcnNvbkNoaXBzIiwiY29udGVudCIsImFjY2VudCIsImNvbW1pdHRlZXMiLCJjIiwiX2MzIiwiUm9sZU1vZGFsIiwiX3JlZjUiLCJvbkNsb3NlIiwiX2M0IiwiTWNNaW5pc3RyeVBhZ2UiLCJfcyIsIl91c2VTdXBhYmFzZVRhYmxlIiwidXNlU3VwYWJhc2VUYWJsZSIsImlzTG9hZGluZyIsIl91c2VTdXBhYmFzZVRhYmxlMiIsIl91c2VTdXBhYmFzZVRhYmxlMyIsImNvdXJ0IiwiX3VzZVN0YXRlIiwidXNlU3RhdGUiLCJzZWxlY3RlZFJvbGUiLCJzZXRTZWxlY3RlZFJvbGUiLCJwY1Jvd3MiLCJmaWx0ZXIiLCJ0YWIiLCJlY1Jvd3MiLCJwcmVzaWRlbnQiLCJ0ZXN0IiwidHJlYXN1cmVycyIsImNoaWVmSnVzdGljZSIsImNvbW1pdHRlZXNCeURpdmlzaW9uIiwicmVkdWNlIiwiYWNjIiwiZGl2aXNpb24iLCJwdXNoIiwidG9wQ2FyZHMiLCJfb2JqZWN0U3ByZWFkIiwiQm9vbGVhbiIsImRpdmlzaW9uQ2FyZHMiLCJib3R0b21DYXJkcyIsInBjTGVhZCIsImlzT2ZmQ2FtcHVzIiwicGNHcm91cGVkIiwiZyIsInNvcnQiLCJhIiwicGNPdGhlciIsInNvbWUiLCJvcGVuUm9sZSIsIndpbmRvdyIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwidXNlRWZmZWN0IiwicHJldk92ZXJmbG93IiwiZG9jdW1lbnQiLCJib2R5Iiwic3R5bGUiLCJvdmVyZmxvdyIsIm9uS2V5IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJIZWFkZXIiLCJTaXRlTmF2YmFyIiwic3JjIiwiYWx0IiwiUmVhY3QiLCJGcmFnbWVudCIsImlkIiwiU2l0ZUZvb3RlciIsIl9jNSIsIiRSZWZyZXNoUmVnJCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNJO0FBQ0k7QUFDQTtBQUNTO0FBQ1E7QUFDdkQ7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsRUFBRSxHQUFHLFNBQUxBLEVBQUVBLENBQUlDLENBQUM7RUFBQSxPQUFLLENBQUNBLENBQUMsQ0FBQ0MsUUFBUSxJQUFJLEVBQUUsRUFBRUMsV0FBVyxDQUFDLENBQUM7QUFBQTtBQUVsRCxJQUFNQyxVQUFVLEdBQUc7RUFDZkMsS0FBSyxFQUFFLFlBQVk7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LFlBQVksR0FDVHBELEtBQUEsQ0FBQ3NDLFNBQVM7SUFBQ2hCLElBQUksRUFBRThCLFlBQWE7SUFBQ1osT0FBTyxFQUFFLFNBQUFBLFFBQUE7TUFBQSxPQUFNYSxlQUFlLENBQUMsSUFBSSxDQUFDO0lBQUEsQ0FBQztJQUFBbkQsTUFBQSxFQUFBQyxLQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsQ0FBRSxDQUFDLEdBQ3ZFLElBQ0gsQ0FBQyxFQUVOUixLQUFBLENBQUNvRyxpRUFBVTtJQUFBbEcsTUFBQSxFQUFBQyxLQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsQ0FBRSxDQUNaLENBQUM7QUFFZCxDQUFDO0FBQUNtQyxFQUFBLENBbE1JRCxjQUFjO0VBQUEsUUFDWUcsaUZBQWdCLEVBQ2ZBLGlGQUFnQixFQUNyQkEsaUZBQWdCO0FBQUE7QUFBQXdELEdBQUEsR0FIdEMzRCxjQUFjO0FBb01MQSw2RUFBYyxFQUFDO0FBQUEsSUFBQWpDLEVBQUEsRUFBQVUsR0FBQSxFQUFBa0IsR0FBQSxFQUFBSSxHQUFBLEVBQUE0RCxHQUFBO0FBQUFDLFlBQUEsQ0FBQTdGLEVBQUE7QUFBQTZGLFlBQUEsQ0FBQW5GLEdBQUE7QUFBQW1GLFlBQUEsQ0FBQWpFLEdBQUE7QUFBQWlFLFlBQUEsQ0FBQTdELEdBQUE7QUFBQTZELFlBQUEsQ0FBQUQsR0FBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9nb3Zlcm5tZW50L21jbWluaXN0cnkuYjQyZDRiZTE0YjZiMGRkYjczM2QuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL0hlYWRlci9IZWFkZXInO1xuaW1wb3J0IFNpdGVOYXZiYXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9uYXZiYXIvTmF2YmFyJztcbmltcG9ydCBTaXRlRm9vdGVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlcic7XG5pbXBvcnQgUGVyc29uQ2hpcHMgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9QZXJzb25DaGlwL1BlcnNvbkNoaXAnO1xuaW1wb3J0IHsgdXNlU3VwYWJhc2VUYWJsZSB9IGZyb20gJy4uLy4uLy4uL3Rvb2xzL2RhdGFiYXNlL3VzZVN1cGFiYXNlVGFibGUnO1xuaW1wb3J0ICcuL2luZGV4LmNzcyc7XG5cbi8qXG4gKiBNY01pbmlzdHJ5IC0gb3JnLWNoYXJ0IGxheW91dCBvZiBNY011cnRyeSdzIHN0dWRlbnQgZ292ZXJubWVudCxcbiAqIG1pcnJvcmluZyB0aGUgRXhlY3V0aXZlIENvdW5jaWwgJiBDb21taXR0ZWUgU3RydWN0dXJlIHNwcmVhZCBpbiB0aGVcbiAqIE8tV2VlayBCb29rIChwcC4gMTI5LTEzMCk6XG4gKlxuICogICByb3cgMTogVHJlYXN1cmVycyB8IE1jUHJlc2lkZW50IHwgQ2hpZWYgSnVzdGljZVxuICogICByb3cgMjogRXh0ZXJuYWwgVlAgfCBJbnRlcm5hbCBWUCB8IFByaW1lIE1pbmlzdGVyIHwgQXQtTGFyZ2UgUmVwXG4gKiAgIHJvdyAzOiBTZWNyZXRhcmllcyB8IChSU0EgU2VuYXRvcikgfCBQYXJsaWFtZW50YXJpYW5cbiAqXG4gKiBEZXNrdG9wIHNob3dzIGZ1bGwgY2FyZHMuIE1vYmlsZSBrZWVwcyB0aGUgc2FtZSBkaWFncmFtIFNIQVBFIHdpdGhcbiAqIGNvbXBhY3Qgc2lkZS1ieS1zaWRlIG5vZGVzIGFyb3VuZCBhIGNlbnRyYWwgc3BpbmU7IHRhcHBpbmcgYSBub2RlXG4gKiB6b29tcyBpbnRvIGEgbW9kYWwgd2l0aCB0aGUgcm9sZSdzIGZ1bGwgZGV0YWlscyAoc2FtZSBpbnRlcmFjdGlvblxuICogYXMgdGhlIGNvbW1pdHRlZXMgZGlhZ3JhbSkuXG4gKlxuICogUGVvcGxlIGNvbWUgZnJvbSB0aGUgYG1jbWluaXN0cnlgIHRhYmxlIChDaGllZiBKdXN0aWNlIGZyb20gYG1jY291cnRgKVxuICogYW5kIGNvbW1pdHRlZSBsaXN0cyBmcm9tIHRoZSBgY29tbWl0dGVlc2AgdGFibGUsIHNvIHRoZSBjaGFydCBzdGF5cyBpblxuICogc3luYyB3aXRoIFN1cGFiYXNlLiBUaGUgY29uZmlnIGJlbG93IG9ubHkgZW5jb2RlcyBzdHJ1Y3R1cmU6IHdoaWNoXG4gKiBwb3NpdGlvbnMgc2l0IGluIHdoaWNoIHJvdywgcm9sZSBibHVyYnMsIGFuZCBrZXkvUC1DYXJkIGJhZGdlcy5cbiAqIFJvbGVzIHdpdGggbm8gcGVvcGxlIGluIHRoZSB0YWJsZSAoZS5nLiBSU0EgU2VuYXRvcikgc2ltcGx5IGRvbid0IHJlbmRlci5cbiAqL1xuXG5jb25zdCBsYyA9IChyKSA9PiAoci5wb3NpdGlvbiB8fCAnJykudG9Mb3dlckNhc2UoKTtcblxuY29uc3QgVFJFQVNVUkVSUyA9IHtcbiAgICB0aXRsZTogJ1RyZWFzdXJlcnMnLFxuICAgIGJhZGdlczogWydwY2FyZCddLFxuICAgIGJsdXJiOiAnSGFuZGxlIGJ1ZGdldCBhbGxvY2F0aW9ucyBhbmQgYXBwcm92ZSBhbGwgY29sbGVnZSBwdXJjaGFzZXMuJyxcbiAgICBtYXRjaDogKHApID0+IHAuaW5jbHVkZXMoJ3RyZWFzdXJlcicpLFxuICAgIHNob3dQb3NpdGlvbnM6IHRydWUsXG59O1xuXG5jb25zdCBCT1RUT01fUk9MRVMgPSBbXG4gICAge1xuICAgICAgICB0aXRsZTogJ1NlY3JldGFyaWVzJyxcbiAgICAgICAgYmx1cmI6ICdLZWVwIG1lZXRpbmcgbWludXRlcywgbWFuYWdlIHJvb20gcmVzZXJ2YXRpb25zLCBhbmQgc2VuZCBvdXQgdGhlIHdlZWtseSBsaXN0c2Vydi4nLFxuICAgICAgICBtYXRjaDogKHApID0+IHAuaW5jbHVkZXMoJ3NlY3JldGFyeScpLFxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogJ1JTQSBTZW5hdG9yJyxcbiAgICAgICAgYmx1cmI6ICdSZXByZXNlbnRzIE1jTXVydHJ5IGF0IHRoZSBSU0EgU2VuYXRlIGFuZCBicmluZ3MgY2FtcHVzLXdpZGUgdXBkYXRlcyBiYWNrIHRvIHRoZSBjb2xsZWdlLicsXG4gICAgICAgIG1hdGNoOiAocCkgPT4gcC5pbmNsdWRlcygnc2VuYXRvcicpLFxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogJ1BhcmxpYW1lbnRhcmlhbicsXG4gICAgICAgIGJsdXJiOiAnVXBob2xkcyBhY2NvdW50YWJpbGl0eSBpbiBnb3Zlcm5tZW50LCBob2xkcyB2b3RlcywgYW5kIHBhc3NlcyBjaGFuZ2VzIHRvIE1jTGVnaXNsYXRpb24uJyxcbiAgICAgICAgbWF0Y2g6IChwKSA9PiBwLmluY2x1ZGVzKCdwYXJsaWFtZW50JyksXG4gICAgfSxcbl07XG5cbmNvbnN0IERJVklTSU9OX1JPTEVTID0gW1xuICAgIHtcbiAgICAgICAgdGl0bGU6ICdFeHRlcm5hbCBWaWNlIFByZXNpZGVudCcsXG4gICAgICAgIGJhZGdlczogWydrZXknXSxcbiAgICAgICAgYmx1cmI6ICdFeGVjdXRlcyBsb25nc3RhbmRpbmcgdHJhZGl0aW9ucyBhbmQgcHJlc2VydmVzIE1jTXVydHJ54oCZcyBsZWdhY3kuJyxcbiAgICAgICAgbWF0Y2g6IChwKSA9PiBwLmluY2x1ZGVzKCdleHRlcm5hbCB2aWNlJyksXG4gICAgICAgIGNvbW1pdHRlZURpdmlzaW9uOiAnRXh0ZXJuYWwgQ29tbWl0dGVlcycsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiAnSW50ZXJuYWwgVmljZSBQcmVzaWRlbnQnLFxuICAgICAgICBiYWRnZXM6IFsna2V5J10sXG4gICAgICAgIGJsdXJiOiAnTWFpbnRhaW5zIGFuZCBpbXByb3ZlcyBpbnRlcm5hbCBhbWVuaXRpZXMgYW5kIHNlcnZpY2VzIHdpdGhpbiB0aGUgY29sbGVnZS4nLFxuICAgICAgICBtYXRjaDogKHApID0+IHAuaW5jbHVkZXMoJ2ludGVybmFsIHZpY2UnKSxcbiAgICAgICAgY29tbWl0dGVlRGl2aXNpb246ICdJbnRlcm5hbCBDb21taXR0ZWVzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6ICdQcmltZSBNaW5pc3RlcicsXG4gICAgICAgIHN1YnRpdGxlOiAnU29jaWFscyBWaWNlIFByZXNpZGVudCcsXG4gICAgICAgIGJhZGdlczogWydrZXknLCAncGNhcmQnXSxcbiAgICAgICAgYmx1cmI6ICdQbGFucyBNY011cnRyeeKAmXMgbGFyZ2Ugc29jaWFsIGdhdGhlcmluZ3MgYW5kIGFjdHMgYXMgbGlhaXNvbiB0byBzdHVkZW50IGFjdGl2aXRpZXMuJyxcbiAgICAgICAgbWF0Y2g6IChwKSA9PiBwLmluY2x1ZGVzKCdwcmltZSBtaW5pc3RlcicpLFxuICAgICAgICBjb21taXR0ZWVEaXZpc2lvbjogJ1NvY2lhbCBDb21taXR0ZWVzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6ICdBdC1MYXJnZSBSZXByZXNlbnRhdGl2ZScsXG4gICAgICAgIGJhZGdlczogWydrZXknXSxcbiAgICAgICAgYmx1cmI6ICdMZWFkcyB0aGUgUGVvcGxl4oCZcyBDb3VuY2lsIGFuZCBtYWludGFpbnMgaGFsbCBhbmQgY29tbW9ucyBjdWx0dXJlLicsXG4gICAgICAgIG1hdGNoOiAocCkgPT4gcC5pbmNsdWRlcygnYXQtbGFyZ2UnKSxcbiAgICAgICAgY29tbWl0dGVlRGl2aXNpb246ICdBdC1MYXJnZSBDb21taXR0ZWVzJyxcbiAgICAgICAgbGluazogeyBocmVmOiAnI3Blb3BsZXMtY291bmNpbCcsIGxhYmVsOiAnUGVvcGxl4oCZcyBDb3VuY2lsIOKGkycgfSxcbiAgICB9LFxuXTtcblxuY29uc3QgUENfR1JPVVBTID0gW1xuICAgIHsgdGl0bGU6ICdIYWxsIFJlcHMnLCBtYXRjaDogKHApID0+IHAuaW5jbHVkZXMoJ2hhbGwgcmVwJykgfSxcbiAgICB7IHRpdGxlOiAnQ2xhc3MgUmVwcycsIG1hdGNoOiAocCkgPT4gcC5pbmNsdWRlcygnY2xhc3MgcmVwJykgfHwgcC5pbmNsdWRlcygnb2ZmIGNhbXB1cycpIHx8IHAuaW5jbHVkZXMoJ29mZi1jYW1wdXMnKSB9LFxuXTtcblxuY29uc3QgY29tbWl0dGVlSHJlZiA9IChuYW1lKSA9PiBgL2dvdmVybm1lbnQvY29tbWl0dGVlcyMke2VuY29kZVVSSUNvbXBvbmVudChuYW1lKX1gO1xuXG5jb25zdCBCYWRnZSA9ICh7IHR5cGUgfSkgPT4gKFxuICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1jbS1iYWRnZVwiPlxuICAgICAgICA8aSBjbGFzc05hbWU9e2BwaCAke3R5cGUgPT09ICdrZXknID8gJ3BoLWtleScgOiAncGgtY3JlZGl0LWNhcmQnfWB9IGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1jbS1iYWRnZS10ZXh0XCI+e3R5cGUgPT09ICdrZXknID8gJ0tleSBIb2xkZXInIDogJ1AtQ2FyZCBIb2xkZXInfTwvc3Bhbj5cbiAgICA8L3NwYW4+XG4pO1xuXG5jb25zdCB0b0NoaXBzID0gKHJvd3MsIHNob3dQb3NpdGlvbnMpID0+XG4gICAgcm93cy5tYXAoKHsgbmFtZSwgZW1haWwsIHBvc2l0aW9uIH0pID0+ICh7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIGVtYWlsLFxuICAgICAgICBwb3NpdGlvbjogc2hvd1Bvc2l0aW9ucyA/IHBvc2l0aW9uIDogdW5kZWZpbmVkLFxuICAgIH0pKTtcblxuY29uc3QgVGllckxhYmVsID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICAgIDxzcGFuIGNsYXNzTmFtZT0nbWNtLXRpZXItbGFiZWwnPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9J21jbS10aWVyLWxhYmVsLXBpbGwnPntjaGlsZHJlbn08L3NwYW4+XG4gICAgPC9zcGFuPlxuKTtcblxuLyogVGhlIC5tY20tbm9kZSB3cmFwcGVyIGlzIGRpc3BsYXk6Y29udGVudHMgb24gZGVza3RvcCAoaW52aXNpYmxlIHRvIHRoZVxuICogZmxleCB0aWVycykgYW5kIGJlY29tZXMgdGhlIHNpemVkIGdyaWQgY2VsbCBvbiBtb2JpbGUuICovXG5jb25zdCBSb2xlQ2FyZCA9ICh7IHJvbGUsIG9uU2VsZWN0IH0pID0+IChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YG1jbS1ub2RlJHtyb2xlLnByaW1hcnkgPyAnIG1jbS1ub2RlLXByaW1hcnknIDogJyd9YH0+XG4gICAgICAgIDxhcnRpY2xlXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BtY20tcm9sZS1jYXJkJHtyb2xlLnByaW1hcnkgPyAnIG1jbS1yb2xlLWNhcmQtcHJpbWFyeScgOiAnJ31gfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25TZWxlY3Qocm9sZSl9XG4gICAgICAgID5cbiAgICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwibWNtLXJvbGUtaGVhZFwiPlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtY20tcm9sZS10aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICB7cm9sZS5wcmltYXJ5ID8gPGkgY2xhc3NOYW1lPVwicGggcGgtY3Jvd24gbWNtLXJvbGUtY3Jvd25cIiBhcmlhLWhpZGRlbj1cInRydWVcIiAvPiA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgIHtyb2xlLnRpdGxlfVxuICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAge3JvbGUuc3VidGl0bGUgPyA8cCBjbGFzc05hbWU9XCJtY20tcm9sZS1zdWJ0aXRsZVwiPntyb2xlLnN1YnRpdGxlfTwvcD4gOiBudWxsfVxuICAgICAgICAgICAgICAgIHsocm9sZS5iYWRnZXMgfHwgW10pLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1jbS1yb2xlLWJhZGdlc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3JvbGUuYmFkZ2VzLm1hcCgoYikgPT4gPEJhZGdlIGtleT17Yn0gdHlwZT17Yn0gLz4pfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtY20tcm9sZS1ibHVyYlwiPntyb2xlLmJsdXJifTwvcD5cbiAgICAgICAgICAgIHsocm9sZS5wZW9wbGUgfHwgW10pLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KGUpID0+IGUuc3RvcFByb3BhZ2F0aW9uKCl9PlxuICAgICAgICAgICAgICAgICAgICA8UGVyc29uQ2hpcHMgY29udGVudD17dG9DaGlwcyhyb2xlLnBlb3BsZSwgcm9sZS5zaG93UG9zaXRpb25zKX0gYWNjZW50PXtyb2xlLmFjY2VudH0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7KHJvbGUuY29tbWl0dGVlcyB8fCBbXSkubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtY20tcm9sZS1jb21taXR0ZWVzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1jbS1yb2xlLWNvbW1pdHRlZXMtbGFiZWxcIj5Db21taXR0ZWVzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1jbS1jb21taXR0ZWUtbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3JvbGUuY29tbWl0dGVlcy5tYXAoKGMpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBrZXk9e2N9IGhyZWY9e2NvbW1pdHRlZUhyZWYoYyl9IGNsYXNzTmFtZT1cIm1jbS1jb21taXR0ZWUtY2hpcFwiPntjfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7cm9sZS5saW5rID8gPGEgaHJlZj17cm9sZS5saW5rLmhyZWZ9IGNsYXNzTmFtZT1cIm1jbS1yb2xlLWxpbmtcIj57cm9sZS5saW5rLmxhYmVsfTwvYT4gOiBudWxsfVxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWNtLXJvbGUtbW9yZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPkRldGFpbHMg4oC6PC9zcGFuPlxuICAgICAgICA8L2FydGljbGU+XG4gICAgPC9kaXY+XG4pO1xuXG4vKiBNb2JpbGUgZGV0YWlsIHZpZXc6IHNhbWUgem9vbS1pbiBtb2RhbCBwYXR0ZXJuIGFzIHRoZSBjb21taXR0ZWVzIHBhZ2VcbiAqIChyZXVzZXMgdGhlIGNtLW1vZGFsIHN0eWxlcyBmcm9tIHRoYXQgcGFnZSdzIGdsb2JhbCBDU1MpLiAqL1xuY29uc3QgUm9sZU1vZGFsID0gKHsgcm9sZSwgb25DbG9zZSB9KSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J21jbS1tb2RhbC1zY3JpbScgb25DbGljaz17b25DbG9zZX0+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nbWNtLW1vZGFsJ1xuICAgICAgICAgICAgcm9sZT0nZGlhbG9nJ1xuICAgICAgICAgICAgYXJpYS1tb2RhbD0ndHJ1ZSdcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9e3JvbGUudGl0bGV9XG4gICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKX1cbiAgICAgICAgPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzTmFtZT0nbWNtLW1vZGFsLWNsb3NlJyBvbkNsaWNrPXtvbkNsb3NlfSBhcmlhLWxhYmVsPSdDbG9zZSc+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdwaCBwaC14JyBhcmlhLWhpZGRlbj0ndHJ1ZScgLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICB7cm9sZS5zdWJ0aXRsZSA/IDxwIGNsYXNzTmFtZT0nbWNtLW1vZGFsLWV5ZWJyb3cnPntyb2xlLnN1YnRpdGxlfTwvcD4gOiBudWxsfVxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0nbWNtLW1vZGFsLXRpdGxlJz5cbiAgICAgICAgICAgICAgICB7cm9sZS5wcmltYXJ5ID8gPGkgY2xhc3NOYW1lPVwicGggcGgtY3Jvd24gbWNtLXJvbGUtY3Jvd25cIiBhcmlhLWhpZGRlbj1cInRydWVcIiAvPiA6IG51bGx9XG4gICAgICAgICAgICAgICAge3JvbGUudGl0bGV9XG4gICAgICAgICAgICA8L2gyPlxuXG4gICAgICAgICAgICB7KHJvbGUuYmFkZ2VzIHx8IFtdKS5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWNtLXJvbGUtYmFkZ2VzIG1jbS1tb2RhbC1iYWRnZXMnPlxuICAgICAgICAgICAgICAgICAgICB7cm9sZS5iYWRnZXMubWFwKChiKSA9PiA8QmFkZ2Uga2V5PXtifSB0eXBlPXtifSAvPil9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9J21jbS1tb2RhbC1ibHVyYic+e3JvbGUuYmx1cmJ9PC9wPlxuXG4gICAgICAgICAgICB7KHJvbGUucGVvcGxlIHx8IFtdKS5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgICAgICA8UGVyc29uQ2hpcHMgY29udGVudD17dG9DaGlwcyhyb2xlLnBlb3BsZSwgdHJ1ZSl9IGFjY2VudD17cm9sZS5hY2NlbnR9IC8+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICB7KHJvbGUuY29tbWl0dGVlcyB8fCBbXSkubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21jbS1yb2xlLWNvbW1pdHRlZXMgbWNtLW1vZGFsLWNvbW1pdHRlZXMnPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J21jbS1yb2xlLWNvbW1pdHRlZXMtbGFiZWwnPkNvbW1pdHRlZXM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtY20tY29tbWl0dGVlLWxpc3QnPlxuICAgICAgICAgICAgICAgICAgICAgICAge3JvbGUuY29tbWl0dGVlcy5tYXAoKGMpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBrZXk9e2N9IGhyZWY9e2NvbW1pdHRlZUhyZWYoYyl9IGNsYXNzTmFtZT0nbWNtLWNvbW1pdHRlZS1jaGlwJz57Y308L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge3JvbGUubGluayA/IDxhIGhyZWY9e3JvbGUubGluay5ocmVmfSBjbGFzc05hbWU9J21jbS1yb2xlLWxpbmsnIG9uQ2xpY2s9e29uQ2xvc2V9Pntyb2xlLmxpbmsubGFiZWx9PC9hPiA6IG51bGx9XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuKTtcblxuY29uc3QgTWNNaW5pc3RyeVBhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgeyByb3dzLCBpc0xvYWRpbmcgfSA9IHVzZVN1cGFiYXNlVGFibGUoJ21jbWluaXN0cnknKTtcbiAgICBjb25zdCB7IHJvd3M6IGNvbW1pdHRlZXMgfSA9IHVzZVN1cGFiYXNlVGFibGUoJ2NvbW1pdHRlZXMnKTtcbiAgICBjb25zdCB7IHJvd3M6IGNvdXJ0IH0gPSB1c2VTdXBhYmFzZVRhYmxlKCdtY2NvdXJ0Jyk7XG5cbiAgICBjb25zdCBbc2VsZWN0ZWRSb2xlLCBzZXRTZWxlY3RlZFJvbGVdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgICBjb25zdCBwY1Jvd3MgPSByb3dzLmZpbHRlcigocikgPT4gci50YWIgPT09IFwiUGVvcGxlJ3MgQ291bmNpbFwiKTtcbiAgICBjb25zdCBlY1Jvd3MgPSByb3dzLmZpbHRlcigocikgPT4gci50YWIgIT09IFwiUGVvcGxlJ3MgQ291bmNpbFwiKTtcblxuICAgIGNvbnN0IHByZXNpZGVudCA9IGVjUm93cy5maWx0ZXIoKHIpID0+IC9eKG1jKT9wcmVzaWRlbnQvLnRlc3QobGMocikpKTtcbiAgICBjb25zdCB0cmVhc3VyZXJzID0gZWNSb3dzLmZpbHRlcigocikgPT4gVFJFQVNVUkVSUy5tYXRjaChsYyhyKSkpO1xuICAgIGNvbnN0IGNoaWVmSnVzdGljZSA9IGNvdXJ0LmZpbHRlcigocikgPT4gbGMocikuaW5jbHVkZXMoJ2NoaWVmIGp1c3RpY2UnKSk7XG5cbiAgICBjb25zdCBjb21taXR0ZWVzQnlEaXZpc2lvbiA9IGNvbW1pdHRlZXMucmVkdWNlKChhY2MsIGMpID0+IHtcbiAgICAgICAgKGFjY1tjLmRpdmlzaW9uXSA9IGFjY1tjLmRpdmlzaW9uXSB8fCBbXSkucHVzaChjLm5hbWUpO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHt9KTtcblxuICAgIGNvbnN0IHRvcENhcmRzID0gW1xuICAgICAgICB0cmVhc3VyZXJzLmxlbmd0aCA+IDAgPyB7IC4uLlRSRUFTVVJFUlMsIHBlb3BsZTogdHJlYXN1cmVycyB9IDogbnVsbCxcbiAgICAgICAgcHJlc2lkZW50Lmxlbmd0aCA+IDBcbiAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnTWNQcmVzaWRlbnQnLFxuICAgICAgICAgICAgICAgIGJhZGdlczogWydrZXknLCAncGNhcmQnXSxcbiAgICAgICAgICAgICAgICBibHVyYjogJ0xlYWRlciBvZiB0aGUgRXhlY3V0aXZlIENvdW5jaWwsIHN0ZWVyaW5nIE1jTXVydHJ54oCZcyB5ZWFybHkgb3BlcmF0aW9ucywgbG9uZy10ZXJtIGdvYWxzLCBhbmQgaW5pdGlhdGl2ZXMuJyxcbiAgICAgICAgICAgICAgICBwZW9wbGU6IHByZXNpZGVudCxcbiAgICAgICAgICAgICAgICBhY2NlbnQ6IHRydWUsXG4gICAgICAgICAgICAgICAgcHJpbWFyeTogdHJ1ZSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDogbnVsbCxcbiAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdDaGllZiBKdXN0aWNlJyxcbiAgICAgICAgICAgIGJsdXJiOiAnQ3JpdGljYWwgYXV0aG9yaXR5IG9uIHdlbGxiZWluZywgY29uZHVjdCwgYW5kIGFsY29ob2wgcG9saWNpZXMgY29sbGVnZS13aWRlLCBsZWFkaW5nIHRoZSBjb3VydCBvZiBBc3NvY2lhdGUgSnVzdGljZXMuJyxcbiAgICAgICAgICAgIHBlb3BsZTogY2hpZWZKdXN0aWNlLFxuICAgICAgICAgICAgbGluazogeyBocmVmOiAnL2dvdmVybm1lbnQvY291cnQnLCBsYWJlbDogJ01lZXQgTWNDb3VydCDihpInIH0sXG4gICAgICAgIH0sXG4gICAgXS5maWx0ZXIoQm9vbGVhbik7XG5cbiAgICBjb25zdCBkaXZpc2lvbkNhcmRzID0gRElWSVNJT05fUk9MRVMubWFwKChyb2xlKSA9PiAoe1xuICAgICAgICAuLi5yb2xlLFxuICAgICAgICBhY2NlbnQ6IHRydWUsXG4gICAgICAgIHBlb3BsZTogZWNSb3dzLmZpbHRlcigocikgPT4gcm9sZS5tYXRjaChsYyhyKSkpLFxuICAgICAgICBjb21taXR0ZWVzOiBjb21taXR0ZWVzQnlEaXZpc2lvbltyb2xlLmNvbW1pdHRlZURpdmlzaW9uXSB8fCBbXSxcbiAgICB9KSk7XG5cbiAgICBjb25zdCBib3R0b21DYXJkcyA9IEJPVFRPTV9ST0xFU1xuICAgICAgICAubWFwKChyb2xlKSA9PiAoeyAuLi5yb2xlLCBwZW9wbGU6IGVjUm93cy5maWx0ZXIoKHIpID0+IHJvbGUubWF0Y2gobGMocikpKSB9KSlcbiAgICAgICAgLmZpbHRlcigocm9sZSkgPT4gcm9sZS5wZW9wbGUubGVuZ3RoID4gMCk7XG5cbiAgICBjb25zdCBwY0xlYWQgPSBwY1Jvd3MuZmlsdGVyKChyKSA9PiBsYyhyKS5pbmNsdWRlcygnYXQtbGFyZ2UnKSk7XG4gICAgY29uc3QgaXNPZmZDYW1wdXMgPSAocikgPT4gbGMocikuaW5jbHVkZXMoJ29mZiBjYW1wdXMnKSB8fCBsYyhyKS5pbmNsdWRlcygnb2ZmLWNhbXB1cycpO1xuICAgIGNvbnN0IHBjR3JvdXBlZCA9IFBDX0dST1VQU1xuICAgICAgICAubWFwKChnKSA9PiAoe1xuICAgICAgICAgICAgLi4uZyxcbiAgICAgICAgICAgIC8vIHN0YWJsZSBzb3J0OiBvZmYtY2FtcHVzIHJlcHMgc2luayBiZWxvdyB0aGUgY2xhc3MteWVhciByZXBzXG4gICAgICAgICAgICBwZW9wbGU6IHBjUm93c1xuICAgICAgICAgICAgICAgIC5maWx0ZXIoKHIpID0+IGcubWF0Y2gobGMocikpKVxuICAgICAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiAoaXNPZmZDYW1wdXMoYSkgPyAxIDogMCkgLSAoaXNPZmZDYW1wdXMoYikgPyAxIDogMCkpLFxuICAgICAgICB9KSlcbiAgICAgICAgLmZpbHRlcigoZykgPT4gZy5wZW9wbGUubGVuZ3RoID4gMCk7XG4gICAgY29uc3QgcGNPdGhlciA9IHBjUm93cy5maWx0ZXIoXG4gICAgICAgIChyKSA9PiAhbGMocikuaW5jbHVkZXMoJ2F0LWxhcmdlJykgJiYgIVBDX0dST1VQUy5zb21lKChnKSA9PiBnLm1hdGNoKGxjKHIpKSlcbiAgICApO1xuXG4gICAgLy8gdGhlIG1vZGFsIGlzIGEgbW9iaWxlIGFmZm9yZGFuY2U6IG9uIGRlc2t0b3AgdGhlIGNhcmRzIGFscmVhZHkgc2hvd1xuICAgIC8vIGV2ZXJ5dGhpbmcsIHNvIGNsaWNrcyBkbyBub3RoaW5nIHRoZXJlXG4gICAgY29uc3Qgb3BlblJvbGUgPSAocm9sZSkgPT4ge1xuICAgICAgICBpZiAod2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDY0MHB4KScpLm1hdGNoZXMpIHNldFNlbGVjdGVkUm9sZShyb2xlKTtcbiAgICB9O1xuXG4gICAgLy8gbG9jayBwYWdlIHNjcm9sbCBhbmQgY2xvc2Ugb24gRXNjYXBlIHdoaWxlIHRoZSBtb2RhbCBpcyBvcGVuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKCFzZWxlY3RlZFJvbGUpIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIGNvbnN0IHByZXZPdmVyZmxvdyA9IGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3c7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICAgICAgY29uc3Qgb25LZXkgPSAoZSkgPT4geyBpZiAoZS5rZXkgPT09ICdFc2NhcGUnKSBzZXRTZWxlY3RlZFJvbGUobnVsbCk7IH07XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgb25LZXkpO1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IHByZXZPdmVyZmxvdztcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgb25LZXkpO1xuICAgICAgICB9O1xuICAgIH0sIFtzZWxlY3RlZFJvbGVdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYWdlIHBhZ2UtbGlnaHQgcGFnZS13aXRoLXN0YWdnZXJlZC1tZW51Jz5cbiAgICAgICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgICAgIDxTaXRlTmF2YmFyIC8+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtY21pbmlzdHJ5LXBhZ2UnPlxuICAgICAgICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPSdldi1oZXJvJz5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9Jy9zdGF0aWMvaWNvbnMvYWJvdXQtc3dvb3NoLnN2ZycgYWx0PScnIGNsYXNzTmFtZT0nZXYtaGVyby1zd29vc2gnIGFyaWEtaGlkZGVuPSd0cnVlJyAvPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz0nL3N0YXRpYy9pY29ucy9lbGxpcHNlLWxhcmdlLnN2ZycgYWx0PScnIGNsYXNzTmFtZT0nZXYtaGVyby1lbGxpcHNlLWxhcmdlJyBhcmlhLWhpZGRlbj0ndHJ1ZScgLz5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9Jy9zdGF0aWMvaWNvbnMvZWxsaXBzZS1zbWFsbC5zdmcnIGFsdD0nJyBjbGFzc05hbWU9J2V2LWhlcm8tZWxsaXBzZS1zbWFsbCcgYXJpYS1oaWRkZW49J3RydWUnIC8+XG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J2V2LWhlcm8taGVhZGluZyc+TWNNaW5pc3RyeTwvaDE+XG4gICAgICAgICAgICAgICAgPC9oZWFkZXI+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWNtLWludHJvJz5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdtY20taW50cm8tdGV4dCc+XG4gICAgICAgICAgICAgICAgICAgICAgICBNY011cnRyeSZyc3F1bztzIGdvdmVybm1lbnQgaXMgbWFkZSB1cCBvZiB0aGUgPHN0cm9uZz5FeGVjdXRpdmUgQ291bmNpbDwvc3Ryb25nPiBhbmRcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoZSA8c3Ryb25nPlBlb3BsZSZyc3F1bztzIENvdW5jaWw8L3N0cm9uZz4uIFRoZSBjaGFydCBiZWxvdyBzaG93cyB0aGUgaGllcmFyY2h5IG9mXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zaWJpbGl0eSBhdCB0aGUgY29sbGVnZTogd2hvIGxlYWRzIHdoYXQsIGFuZCB3aGljaCBjb21taXR0ZWVzIGxpdmUgdW5kZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVhY2ggZGl2aXNpb24uXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21jbS1sZWdlbmQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21jbS1sZWdlbmQtcm93Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmFkZ2UgdHlwZT0na2V5JyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nbWNtLWxlZ2VuZC1oaW50Jz5vdmVyc2VlcyBjb21taXR0ZWVzIGFuZCB0aGUgY29tbWl0dGVlIGNsb3NldDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21jbS1sZWdlbmQtcm93Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmFkZ2UgdHlwZT0ncGNhcmQnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdtY20tbGVnZW5kLWhpbnQnPm1ha2VzIHB1cmNoYXNlcyBvbiBiZWhhbGYgb2YgdGhlIGNvbGxlZ2U8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICB7aXNMb2FkaW5nID8gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbG9hZGluZy1jb250YWluZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xvYWRpbmctc3Bpbm5lcic+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2xvYWRpbmctdGV4dCc+TG9hZGluZy4uLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZhZGUtaW4nPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0nZGl2aXNpb24tdGl0bGUnPkV4ZWN1dGl2ZSBDb3VuY2lsPC9oMj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21jbS1jaGFydCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21jbS10aWVyIG1jbS10aWVyLXRvcCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUaWVyTGFiZWw+TGVnaXNsYXRpdmU8L1RpZXJMYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RvcENhcmRzLm1hcCgocm9sZSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvbGVDYXJkIGtleT17cm9sZS50aXRsZX0gcm9sZT17cm9sZX0gb25TZWxlY3Q9e29wZW5Sb2xlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtY20tY29ubmVjdG9yJyBhcmlhLWhpZGRlbj0ndHJ1ZScgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtY20tdGllciBtY20tdGllci1kaXZpc2lvbnMnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGllckxhYmVsPlZpY2UgUHJlc2lkZW50czwvVGllckxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGl2aXNpb25DYXJkcy5tYXAoKHJvbGUpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb2xlQ2FyZCBrZXk9e3JvbGUudGl0bGV9IHJvbGU9e3JvbGV9IG9uU2VsZWN0PXtvcGVuUm9sZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Ym90dG9tQ2FyZHMubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtY20tY29ubmVjdG9yJyBhcmlhLWhpZGRlbj0ndHJ1ZScgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtY20tdGllciBtY20tdGllci1ib3R0b20nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUaWVyTGFiZWw+QWRtaW5pc3RyYXRpb248L1RpZXJMYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Ym90dG9tQ2FyZHMubWFwKChyb2xlKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb2xlQ2FyZCBrZXk9e3JvbGUudGl0bGV9IHJvbGU9e3JvbGV9IG9uU2VsZWN0PXtvcGVuUm9sZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0nZGl2aXNpb24tdGl0bGUgbWNtLXBjLXRpdGxlJyBpZD0ncGVvcGxlcy1jb3VuY2lsJz5QZW9wbGUmcnNxdW87cyBDb3VuY2lsPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtY20taW50cm8gbWNtLWludHJvLXRpZ2h0Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J21jbS1pbnRyby10ZXh0Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRXZlcnkgZmxvb3IsIGNsYXNzLCBhbmQgb2ZmLWNhbXB1cyBNdXJ0IGdldHMgYSB2b2ljZSAoYW5kIGEgdm90ZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZCBieSB0aGUgQXQtTGFyZ2UgUmVwcmVzZW50YXRpdmUuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtwY0xlYWQubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21jbS1wYy1sZWFkJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBlcnNvbkNoaXBzIGNvbnRlbnQ9e3RvQ2hpcHMocGNMZWFkLCB0cnVlKX0gYWNjZW50IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWNtLXBjLWdyb3Vwcyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3BjR3JvdXBlZC5tYXAoKGcpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24ga2V5PXtnLnRpdGxlfSBjbGFzc05hbWU9J21jbS1wYy1ncm91cCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPSdtY20tcGMtZ3JvdXAtdGl0bGUnPntnLnRpdGxlfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGVyc29uQ2hpcHMgY29udGVudD17dG9DaGlwcyhnLnBlb3BsZSwgdHJ1ZSl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGNPdGhlci5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdtY20tcGMtZ3JvdXAnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0nbWNtLXBjLWdyb3VwLXRpdGxlJz5Nb3JlIFJlcHJlc2VudGF0aXZlczwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGVyc29uQ2hpcHMgY29udGVudD17dG9DaGlwcyhwY090aGVyLCB0cnVlKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgIHtzZWxlY3RlZFJvbGUgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxSb2xlTW9kYWwgcm9sZT17c2VsZWN0ZWRSb2xlfSBvbkNsb3NlPXsoKSA9PiBzZXRTZWxlY3RlZFJvbGUobnVsbCl9IC8+XG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPFNpdGVGb290ZXIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1jTWluaXN0cnlQYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==