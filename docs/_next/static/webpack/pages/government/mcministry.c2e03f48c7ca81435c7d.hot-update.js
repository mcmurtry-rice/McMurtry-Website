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
    className: "mcm-badge mcm-badge-".concat(type),
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

/* Mobile detail view: zoom-in modal, same interaction pattern as the
 * committees page. While `closing` the reverse animation plays before
 * the component unmounts. */
_c3 = RoleCard;
var RoleModal = function RoleModal(_ref5) {
  var role = _ref5.role,
    closing = _ref5.closing,
    onClose = _ref5.onClose;
  return __jsx("div", {
    className: "mcm-modal-scrim".concat(closing ? ' mcm-modal-scrim-closing' : ''),
    onClick: onClose,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
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
      lineNumber: 165,
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
      lineNumber: 172,
      columnNumber: 13
    }
  }, __jsx("i", {
    className: "ph ph-x",
    "aria-hidden": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 17
    }
  })), role.subtitle ? __jsx("p", {
    className: "mcm-modal-eyebrow",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 30
    }
  }, role.subtitle) : null, __jsx("h2", {
    className: "mcm-modal-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 13
    }
  }, role.primary ? __jsx("i", {
    className: "ph ph-crown mcm-role-crown",
    "aria-hidden": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 33
    }
  }) : null, role.title), (role.badges || []).length > 0 && __jsx("div", {
    className: "mcm-role-badges mcm-modal-badges",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 17
    }
  }, role.badges.map(function (b) {
    return __jsx(Badge, {
      key: b,
      type: b,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 45
      }
    });
  })), __jsx("p", {
    className: "mcm-modal-blurb",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 13
    }
  }, role.blurb), (role.people || []).length > 0 && __jsx(_components_PersonChip_PersonChip__WEBPACK_IMPORTED_MODULE_5__["default"], {
    content: toChips(role.people, true),
    accent: role.accent,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 17
    }
  }), (role.committees || []).length > 0 && __jsx("div", {
    className: "mcm-role-committees mcm-modal-committees",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: "mcm-role-committees-label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 21
    }
  }, "Committees"), __jsx("div", {
    className: "mcm-committee-list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
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
        lineNumber: 199,
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
      lineNumber: 204,
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
      lineNumber: 294,
      columnNumber: 9
    }
  }, __jsx(_components_Header_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 13
    }
  }), __jsx(_components_navbar_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "mcministry-page",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 13
    }
  }, __jsx("header", {
    className: "ev-hero",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
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
      lineNumber: 300,
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
      lineNumber: 301,
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
      lineNumber: 302,
      columnNumber: 21
    }
  }), __jsx("h1", {
    className: "ev-hero-heading",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 21
    }
  }, "McMinistry")), __jsx("div", {
    className: "mcm-intro",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "mcm-intro-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 21
    }
  }, "McMurtry\u2019s government is made up of the ", __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 71
    }
  }, "Executive Council"), " and the ", __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 29
    }
  }, "People\u2019s Council"), ". The chart below shows the hierarchy of responsibility at the college: who leads what, and which committees live under each division."), __jsx("div", {
    className: "mcm-legend",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "mcm-legend-row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 25
    }
  }, __jsx(Badge, {
    type: "key",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 29
    }
  }), __jsx("span", {
    className: "mcm-legend-hint",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 29
    }
  }, "oversees committees and the committee closet")), __jsx("div", {
    className: "mcm-legend-row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318,
      columnNumber: 25
    }
  }, __jsx(Badge, {
    type: "pcard",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319,
      columnNumber: 29
    }
  }), __jsx("span", {
    className: "mcm-legend-hint",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 29
    }
  }, "makes purchases on behalf of the college")))), isLoading ? __jsx("div", {
    className: "loading-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "loading-spinner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327,
      columnNumber: 25
    }
  }), __jsx("p", {
    className: "loading-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328,
      columnNumber: 25
    }
  }, "Loading...")) : __jsx("div", {
    className: "fade-in",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331,
      columnNumber: 21
    }
  }, __jsx("h2", {
    className: "division-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332,
      columnNumber: 25
    }
  }, "Executive Council"), __jsx("div", {
    className: "mcm-chart",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "mcm-tier mcm-tier-top",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335,
      columnNumber: 29
    }
  }, __jsx(TierLabel, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336,
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
        lineNumber: 338,
        columnNumber: 37
      }
    });
  })), __jsx("div", {
    className: "mcm-connector",
    "aria-hidden": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342,
      columnNumber: 29
    }
  }), __jsx("div", {
    className: "mcm-tier mcm-tier-divisions",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344,
      columnNumber: 29
    }
  }, __jsx(TierLabel, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345,
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
        lineNumber: 347,
        columnNumber: 37
      }
    });
  })), bottomCards.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "mcm-connector",
    "aria-hidden": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353,
      columnNumber: 37
    }
  }), __jsx("div", {
    className: "mcm-tier mcm-tier-bottom",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 354,
      columnNumber: 37
    }
  }, __jsx(TierLabel, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355,
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
        lineNumber: 357,
        columnNumber: 45
      }
    });
  })))), __jsx("h2", {
    className: "division-title mcm-pc-title",
    id: "peoples-council",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 364,
      columnNumber: 25
    }
  }, "People\u2019s Council"), __jsx("div", {
    className: "mcm-intro mcm-intro-tight",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365,
      columnNumber: 25
    }
  }, __jsx("p", {
    className: "mcm-intro-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 366,
      columnNumber: 29
    }
  }, "Every floor, class, and off-campus Murt gets a voice (and a vote), led by the At-Large Representative.")), pcLead.length > 0 && __jsx("div", {
    className: "mcm-pc-lead",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373,
      columnNumber: 29
    }
  }, __jsx(_components_PersonChip_PersonChip__WEBPACK_IMPORTED_MODULE_5__["default"], {
    content: toChips(pcLead, true),
    accent: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374,
      columnNumber: 33
    }
  })), __jsx("div", {
    className: "mcm-pc-groups",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378,
      columnNumber: 25
    }
  }, pcGrouped.map(function (g) {
    return __jsx("section", {
      key: g.title,
      className: "mcm-pc-group",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 380,
        columnNumber: 33
      }
    }, __jsx("h3", {
      className: "mcm-pc-group-title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 381,
        columnNumber: 37
      }
    }, g.title), __jsx(_components_PersonChip_PersonChip__WEBPACK_IMPORTED_MODULE_5__["default"], {
      content: toChips(g.people, true),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 382,
        columnNumber: 37
      }
    }));
  }), pcOther.length > 0 && __jsx("section", {
    className: "mcm-pc-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 386,
      columnNumber: 33
    }
  }, __jsx("h3", {
    className: "mcm-pc-group-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 387,
      columnNumber: 37
    }
  }, "More Representatives"), __jsx(_components_PersonChip_PersonChip__WEBPACK_IMPORTED_MODULE_5__["default"], {
    content: toChips(pcOther, true),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 388,
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
      lineNumber: 396,
      columnNumber: 21
    }
  }) : null), __jsx(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 400,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ292ZXJubWVudC9tY21pbmlzdHJ5L2luZGV4LmpzIl0sIm5hbWVzIjpbImxjIiwiciIsInBvc2l0aW9uIiwidG9Mb3dlckNhc2UiLCJUUkVBU1VSRVJTIiwidGl0bGUiLCJiYWRnZXMiLCJibHVyYiIsIm1hdGNoIiwicCIsImluY2x1ZGVzIiwic2hvd1Bvc2l0aW9ucyIsIkJPVFRPTV9ST0xFUyIsIkRJVklTSU9OX1JPTEVTIiwiY29tbWl0dGVlRGl2aXNpb24iLCJzdWJ0aXRsZSIsImxpbmsiLCJocmVmIiwibGFiZWwiLCJQQ19HUk9VUFMiLCJjb21taXR0ZWVIcmVmIiwibmFtZSIsImNvbmNhdCIsImVuY29kZVVSSUNvbXBvbmVudCIsIkJhZGdlIiwiX3JlZiIsInR5cGUiLCJfX2pzeCIsImNsYXNzTmFtZSIsIl9fc2VsZiIsIl90aGlzIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJfYyIsInRvQ2hpcHMiLCJyb3dzIiwibWFwIiwiX3JlZjIiLCJlbWFpbCIsInVuZGVmaW5lZCIsIlRpZXJMYWJlbCIsIl9yZWYzIiwiY2hpbGRyZW4iLCJfYzIiLCJSb2xlQ2FyZCIsIl9yZWY0Iiwicm9sZSIsIm9uU2VsZWN0IiwicHJpbWFyeSIsIm9uQ2xpY2siLCJsZW5ndGgiLCJiIiwia2V5IiwicGVvcGxlIiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsIlBlcnNvbkNoaXBzIiwiY29udGVudCIsImFjY2VudCIsImNvbW1pdHRlZXMiLCJjIiwiX2MzIiwiUm9sZU1vZGFsIiwiX3JlZjUiLCJjbG9zaW5nIiwib25DbG9zZSIsIl9jNCIsIk1jTWluaXN0cnlQYWdlIiwiX3MiLCJfdXNlU3VwYWJhc2VUYWJsZSIsInVzZVN1cGFiYXNlVGFibGUiLCJpc0xvYWRpbmciLCJfdXNlU3VwYWJhc2VUYWJsZTIiLCJfdXNlU3VwYWJhc2VUYWJsZTMiLCJjb3VydCIsIl91c2VTdGF0ZSIsInVzZVN0YXRlIiwic2VsZWN0ZWRSb2xlIiwic2V0U2VsZWN0ZWRSb2xlIiwicGNSb3dzIiwiZmlsdGVyIiwidGFiIiwiZWNSb3dzIiwicHJlc2lkZW50IiwidGVzdCIsInRyZWFzdXJlcnMiLCJjaGllZkp1c3RpY2UiLCJjb21taXR0ZWVzQnlEaXZpc2lvbiIsInJlZHVjZSIsImFjYyIsImRpdmlzaW9uIiwicHVzaCIsInRvcENhcmRzIiwiX29iamVjdFNwcmVhZCIsIkJvb2xlYW4iLCJkaXZpc2lvbkNhcmRzIiwiYm90dG9tQ2FyZHMiLCJwY0xlYWQiLCJpc09mZkNhbXB1cyIsInBjR3JvdXBlZCIsImciLCJzb3J0IiwiYSIsInBjT3RoZXIiLCJzb21lIiwib3BlblJvbGUiLCJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsInVzZUVmZmVjdCIsInByZXZPdmVyZmxvdyIsImRvY3VtZW50IiwiYm9keSIsInN0eWxlIiwib3ZlcmZsb3ciLCJvbktleSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiSGVhZGVyIiwiU2l0ZU5hdmJhciIsInNyYyIsImFsdCIsIlJlYWN0IiwiRnJhZ21lbnQiLCJpZCIsIlNpdGVGb290ZXIiLCJfYzUiLCIkUmVmcmVzaFJlZyQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDSTtBQUNJO0FBQ0E7QUFDUztBQUNRO0FBQ3ZEOztBQUVyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLEVBQUUsR0FBRyxTQUFMQSxFQUFFQSxDQUFJQyxDQUFDO0VBQUEsT0FBSyxDQUFDQSxDQUFDLENBQUNDLFFBQVEsSUFBSSxFQUFFLEVBQUVDLFdBQVcsQ0FBQyxDQUFDO0FBQUE7QUFFbEQsSUFBTUMsVUFBVSxHQUFHO0VBQ2ZDLEtBQUss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LEVBQUFDLEtBQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxDQUFFLENBQzFDLENBRVosQ0FDSixDQUNSLEVBRUE2QyxZQUFZLEdBQ1RyRCxLQUFBLENBQUNzQyxTQUFTO0lBQUNoQixJQUFJLEVBQUUrQixZQUFhO0lBQUNaLE9BQU8sRUFBRSxTQUFBQSxRQUFBO01BQUEsT0FBTWEsZUFBZSxDQUFDLElBQUksQ0FBQztJQUFBLENBQUM7SUFBQXBELE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLENBQUUsQ0FBQyxHQUN2RSxJQUNILENBQUMsRUFFTlIsS0FBQSxDQUFDcUcsaUVBQVU7SUFBQW5HLE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLENBQUUsQ0FDWixDQUFDO0FBRWQsQ0FBQztBQUFDb0MsRUFBQSxDQWxNSUQsY0FBYztFQUFBLFFBQ1lHLGlGQUFnQixFQUNmQSxpRkFBZ0IsRUFDckJBLGlGQUFnQjtBQUFBO0FBQUF3RCxHQUFBLEdBSHRDM0QsY0FBYztBQW9NTEEsNkVBQWMsRUFBQztBQUFBLElBQUFsQyxFQUFBLEVBQUFVLEdBQUEsRUFBQWtCLEdBQUEsRUFBQUssR0FBQSxFQUFBNEQsR0FBQTtBQUFBQyxZQUFBLENBQUE5RixFQUFBO0FBQUE4RixZQUFBLENBQUFwRixHQUFBO0FBQUFvRixZQUFBLENBQUFsRSxHQUFBO0FBQUFrRSxZQUFBLENBQUE3RCxHQUFBO0FBQUE2RCxZQUFBLENBQUFELEdBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZ292ZXJubWVudC9tY21pbmlzdHJ5LmMyZTAzZjQ4YzdjYTgxNDM1YzdkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyJztcbmltcG9ydCBTaXRlTmF2YmFyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvbmF2YmFyL05hdmJhcic7XG5pbXBvcnQgU2l0ZUZvb3RlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXInO1xuaW1wb3J0IFBlcnNvbkNoaXBzIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvUGVyc29uQ2hpcC9QZXJzb25DaGlwJztcbmltcG9ydCB7IHVzZVN1cGFiYXNlVGFibGUgfSBmcm9tICcuLi8uLi8uLi90b29scy9kYXRhYmFzZS91c2VTdXBhYmFzZVRhYmxlJztcbmltcG9ydCAnLi9pbmRleC5jc3MnO1xuXG4vKlxuICogTWNNaW5pc3RyeSAtIG9yZy1jaGFydCBsYXlvdXQgb2YgTWNNdXJ0cnkncyBzdHVkZW50IGdvdmVybm1lbnQsXG4gKiBtaXJyb3JpbmcgdGhlIEV4ZWN1dGl2ZSBDb3VuY2lsICYgQ29tbWl0dGVlIFN0cnVjdHVyZSBzcHJlYWQgaW4gdGhlXG4gKiBPLVdlZWsgQm9vayAocHAuIDEyOS0xMzApOlxuICpcbiAqICAgcm93IDE6IFRyZWFzdXJlcnMgfCBNY1ByZXNpZGVudCB8IENoaWVmIEp1c3RpY2VcbiAqICAgcm93IDI6IEV4dGVybmFsIFZQIHwgSW50ZXJuYWwgVlAgfCBQcmltZSBNaW5pc3RlciB8IEF0LUxhcmdlIFJlcFxuICogICByb3cgMzogU2VjcmV0YXJpZXMgfCAoUlNBIFNlbmF0b3IpIHwgUGFybGlhbWVudGFyaWFuXG4gKlxuICogRGVza3RvcCBzaG93cyBmdWxsIGNhcmRzLiBNb2JpbGUga2VlcHMgdGhlIHNhbWUgZGlhZ3JhbSBTSEFQRSB3aXRoXG4gKiBjb21wYWN0IHNpZGUtYnktc2lkZSBub2RlcyBhcm91bmQgYSBjZW50cmFsIHNwaW5lOyB0YXBwaW5nIGEgbm9kZVxuICogem9vbXMgaW50byBhIG1vZGFsIHdpdGggdGhlIHJvbGUncyBmdWxsIGRldGFpbHMgKHNhbWUgaW50ZXJhY3Rpb25cbiAqIGFzIHRoZSBjb21taXR0ZWVzIGRpYWdyYW0pLlxuICpcbiAqIFBlb3BsZSBjb21lIGZyb20gdGhlIGBtY21pbmlzdHJ5YCB0YWJsZSAoQ2hpZWYgSnVzdGljZSBmcm9tIGBtY2NvdXJ0YClcbiAqIGFuZCBjb21taXR0ZWUgbGlzdHMgZnJvbSB0aGUgYGNvbW1pdHRlZXNgIHRhYmxlLCBzbyB0aGUgY2hhcnQgc3RheXMgaW5cbiAqIHN5bmMgd2l0aCBTdXBhYmFzZS4gVGhlIGNvbmZpZyBiZWxvdyBvbmx5IGVuY29kZXMgc3RydWN0dXJlOiB3aGljaFxuICogcG9zaXRpb25zIHNpdCBpbiB3aGljaCByb3csIHJvbGUgYmx1cmJzLCBhbmQga2V5L1AtQ2FyZCBiYWRnZXMuXG4gKiBSb2xlcyB3aXRoIG5vIHBlb3BsZSBpbiB0aGUgdGFibGUgKGUuZy4gUlNBIFNlbmF0b3IpIHNpbXBseSBkb24ndCByZW5kZXIuXG4gKi9cblxuY29uc3QgbGMgPSAocikgPT4gKHIucG9zaXRpb24gfHwgJycpLnRvTG93ZXJDYXNlKCk7XG5cbmNvbnN0IFRSRUFTVVJFUlMgPSB7XG4gICAgdGl0bGU6ICdUcmVhc3VyZXJzJyxcbiAgICBiYWRnZXM6IFsncGNhcmQnXSxcbiAgICBibHVyYjogJ0hhbmRsZSBidWRnZXQgYWxsb2NhdGlvbnMgYW5kIGFwcHJvdmUgYWxsIGNvbGxlZ2UgcHVyY2hhc2VzLicsXG4gICAgbWF0Y2g6IChwKSA9PiBwLmluY2x1ZGVzKCd0cmVhc3VyZXInKSxcbiAgICBzaG93UG9zaXRpb25zOiB0cnVlLFxufTtcblxuY29uc3QgQk9UVE9NX1JPTEVTID0gW1xuICAgIHtcbiAgICAgICAgdGl0bGU6ICdTZWNyZXRhcmllcycsXG4gICAgICAgIGJsdXJiOiAnS2VlcCBtZWV0aW5nIG1pbnV0ZXMsIG1hbmFnZSByb29tIHJlc2VydmF0aW9ucywgYW5kIHNlbmQgb3V0IHRoZSB3ZWVrbHkgbGlzdHNlcnYuJyxcbiAgICAgICAgbWF0Y2g6IChwKSA9PiBwLmluY2x1ZGVzKCdzZWNyZXRhcnknKSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6ICdSU0EgU2VuYXRvcicsXG4gICAgICAgIGJsdXJiOiAnUmVwcmVzZW50cyBNY011cnRyeSBhdCB0aGUgUlNBIFNlbmF0ZSBhbmQgYnJpbmdzIGNhbXB1cy13aWRlIHVwZGF0ZXMgYmFjayB0byB0aGUgY29sbGVnZS4nLFxuICAgICAgICBtYXRjaDogKHApID0+IHAuaW5jbHVkZXMoJ3NlbmF0b3InKSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6ICdQYXJsaWFtZW50YXJpYW4nLFxuICAgICAgICBibHVyYjogJ1VwaG9sZHMgYWNjb3VudGFiaWxpdHkgaW4gZ292ZXJubWVudCwgaG9sZHMgdm90ZXMsIGFuZCBwYXNzZXMgY2hhbmdlcyB0byBNY0xlZ2lzbGF0aW9uLicsXG4gICAgICAgIG1hdGNoOiAocCkgPT4gcC5pbmNsdWRlcygncGFybGlhbWVudCcpLFxuICAgIH0sXG5dO1xuXG5jb25zdCBESVZJU0lPTl9ST0xFUyA9IFtcbiAgICB7XG4gICAgICAgIHRpdGxlOiAnRXh0ZXJuYWwgVmljZSBQcmVzaWRlbnQnLFxuICAgICAgICBiYWRnZXM6IFsna2V5J10sXG4gICAgICAgIGJsdXJiOiAnRXhlY3V0ZXMgbG9uZ3N0YW5kaW5nIHRyYWRpdGlvbnMgYW5kIHByZXNlcnZlcyBNY011cnRyeeKAmXMgbGVnYWN5LicsXG4gICAgICAgIG1hdGNoOiAocCkgPT4gcC5pbmNsdWRlcygnZXh0ZXJuYWwgdmljZScpLFxuICAgICAgICBjb21taXR0ZWVEaXZpc2lvbjogJ0V4dGVybmFsIENvbW1pdHRlZXMnLFxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogJ0ludGVybmFsIFZpY2UgUHJlc2lkZW50JyxcbiAgICAgICAgYmFkZ2VzOiBbJ2tleSddLFxuICAgICAgICBibHVyYjogJ01haW50YWlucyBhbmQgaW1wcm92ZXMgaW50ZXJuYWwgYW1lbml0aWVzIGFuZCBzZXJ2aWNlcyB3aXRoaW4gdGhlIGNvbGxlZ2UuJyxcbiAgICAgICAgbWF0Y2g6IChwKSA9PiBwLmluY2x1ZGVzKCdpbnRlcm5hbCB2aWNlJyksXG4gICAgICAgIGNvbW1pdHRlZURpdmlzaW9uOiAnSW50ZXJuYWwgQ29tbWl0dGVlcycsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiAnUHJpbWUgTWluaXN0ZXInLFxuICAgICAgICBzdWJ0aXRsZTogJ1NvY2lhbHMgVmljZSBQcmVzaWRlbnQnLFxuICAgICAgICBiYWRnZXM6IFsna2V5JywgJ3BjYXJkJ10sXG4gICAgICAgIGJsdXJiOiAnUGxhbnMgTWNNdXJ0cnnigJlzIGxhcmdlIHNvY2lhbCBnYXRoZXJpbmdzIGFuZCBhY3RzIGFzIGxpYWlzb24gdG8gc3R1ZGVudCBhY3Rpdml0aWVzLicsXG4gICAgICAgIG1hdGNoOiAocCkgPT4gcC5pbmNsdWRlcygncHJpbWUgbWluaXN0ZXInKSxcbiAgICAgICAgY29tbWl0dGVlRGl2aXNpb246ICdTb2NpYWwgQ29tbWl0dGVlcycsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiAnQXQtTGFyZ2UgUmVwcmVzZW50YXRpdmUnLFxuICAgICAgICBiYWRnZXM6IFsna2V5J10sXG4gICAgICAgIGJsdXJiOiAnTGVhZHMgdGhlIFBlb3BsZeKAmXMgQ291bmNpbCBhbmQgbWFpbnRhaW5zIGhhbGwgYW5kIGNvbW1vbnMgY3VsdHVyZS4nLFxuICAgICAgICBtYXRjaDogKHApID0+IHAuaW5jbHVkZXMoJ2F0LWxhcmdlJyksXG4gICAgICAgIGNvbW1pdHRlZURpdmlzaW9uOiAnQXQtTGFyZ2UgQ29tbWl0dGVlcycsXG4gICAgICAgIGxpbms6IHsgaHJlZjogJyNwZW9wbGVzLWNvdW5jaWwnLCBsYWJlbDogJ1Blb3BsZeKAmXMgQ291bmNpbCDihpMnIH0sXG4gICAgfSxcbl07XG5cbmNvbnN0IFBDX0dST1VQUyA9IFtcbiAgICB7IHRpdGxlOiAnSGFsbCBSZXBzJywgbWF0Y2g6IChwKSA9PiBwLmluY2x1ZGVzKCdoYWxsIHJlcCcpIH0sXG4gICAgeyB0aXRsZTogJ0NsYXNzIFJlcHMnLCBtYXRjaDogKHApID0+IHAuaW5jbHVkZXMoJ2NsYXNzIHJlcCcpIHx8IHAuaW5jbHVkZXMoJ29mZiBjYW1wdXMnKSB8fCBwLmluY2x1ZGVzKCdvZmYtY2FtcHVzJykgfSxcbl07XG5cbmNvbnN0IGNvbW1pdHRlZUhyZWYgPSAobmFtZSkgPT4gYC9nb3Zlcm5tZW50L2NvbW1pdHRlZXMjJHtlbmNvZGVVUklDb21wb25lbnQobmFtZSl9YDtcblxuY29uc3QgQmFkZ2UgPSAoeyB0eXBlIH0pID0+IChcbiAgICA8c3BhbiBjbGFzc05hbWU9e2BtY20tYmFkZ2UgbWNtLWJhZGdlLSR7dHlwZX1gfT5cbiAgICAgICAgPGkgY2xhc3NOYW1lPXtgcGggJHt0eXBlID09PSAna2V5JyA/ICdwaC1rZXknIDogJ3BoLWNyZWRpdC1jYXJkJ31gfSBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtY20tYmFkZ2UtdGV4dFwiPnt0eXBlID09PSAna2V5JyA/ICdLZXkgSG9sZGVyJyA6ICdQLUNhcmQgSG9sZGVyJ308L3NwYW4+XG4gICAgPC9zcGFuPlxuKTtcblxuY29uc3QgdG9DaGlwcyA9IChyb3dzLCBzaG93UG9zaXRpb25zKSA9PlxuICAgIHJvd3MubWFwKCh7IG5hbWUsIGVtYWlsLCBwb3NpdGlvbiB9KSA9PiAoe1xuICAgICAgICBuYW1lLFxuICAgICAgICBlbWFpbCxcbiAgICAgICAgcG9zaXRpb246IHNob3dQb3NpdGlvbnMgPyBwb3NpdGlvbiA6IHVuZGVmaW5lZCxcbiAgICB9KSk7XG5cbmNvbnN0IFRpZXJMYWJlbCA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgICA8c3BhbiBjbGFzc05hbWU9J21jbS10aWVyLWxhYmVsJz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdtY20tdGllci1sYWJlbC1waWxsJz57Y2hpbGRyZW59PC9zcGFuPlxuICAgIDwvc3Bhbj5cbik7XG5cbi8qIFRoZSAubWNtLW5vZGUgd3JhcHBlciBpcyBkaXNwbGF5OmNvbnRlbnRzIG9uIGRlc2t0b3AgKGludmlzaWJsZSB0byB0aGVcbiAqIGZsZXggdGllcnMpIGFuZCBiZWNvbWVzIHRoZSBzaXplZCBncmlkIGNlbGwgb24gbW9iaWxlLiAqL1xuY29uc3QgUm9sZUNhcmQgPSAoeyByb2xlLCBvblNlbGVjdCB9KSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2BtY20tbm9kZSR7cm9sZS5wcmltYXJ5ID8gJyBtY20tbm9kZS1wcmltYXJ5JyA6ICcnfWB9PlxuICAgICAgICA8YXJ0aWNsZVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgbWNtLXJvbGUtY2FyZCR7cm9sZS5wcmltYXJ5ID8gJyBtY20tcm9sZS1jYXJkLXByaW1hcnknIDogJyd9YH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uU2VsZWN0KHJvbGUpfVxuICAgICAgICA+XG4gICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cIm1jbS1yb2xlLWhlYWRcIj5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibWNtLXJvbGUtdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAge3JvbGUucHJpbWFyeSA/IDxpIGNsYXNzTmFtZT1cInBoIHBoLWNyb3duIG1jbS1yb2xlLWNyb3duXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz4gOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICB7cm9sZS50aXRsZX1cbiAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgIHtyb2xlLnN1YnRpdGxlID8gPHAgY2xhc3NOYW1lPVwibWNtLXJvbGUtc3VidGl0bGVcIj57cm9sZS5zdWJ0aXRsZX08L3A+IDogbnVsbH1cbiAgICAgICAgICAgICAgICB7KHJvbGUuYmFkZ2VzIHx8IFtdKS5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtY20tcm9sZS1iYWRnZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtyb2xlLmJhZGdlcy5tYXAoKGIpID0+IDxCYWRnZSBrZXk9e2J9IHR5cGU9e2J9IC8+KX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWNtLXJvbGUtYmx1cmJcIj57cm9sZS5ibHVyYn08L3A+XG4gICAgICAgICAgICB7KHJvbGUucGVvcGxlIHx8IFtdKS5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eyhlKSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpfT5cbiAgICAgICAgICAgICAgICAgICAgPFBlcnNvbkNoaXBzIGNvbnRlbnQ9e3RvQ2hpcHMocm9sZS5wZW9wbGUsIHJvbGUuc2hvd1Bvc2l0aW9ucyl9IGFjY2VudD17cm9sZS5hY2NlbnR9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgeyhyb2xlLmNvbW1pdHRlZXMgfHwgW10pLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWNtLXJvbGUtY29tbWl0dGVlc1wiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtY20tcm9sZS1jb21taXR0ZWVzLWxhYmVsXCI+Q29tbWl0dGVlczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtY20tY29tbWl0dGVlLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtyb2xlLmNvbW1pdHRlZXMubWFwKChjKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEga2V5PXtjfSBocmVmPXtjb21taXR0ZWVIcmVmKGMpfSBjbGFzc05hbWU9XCJtY20tY29tbWl0dGVlLWNoaXBcIj57Y308L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge3JvbGUubGluayA/IDxhIGhyZWY9e3JvbGUubGluay5ocmVmfSBjbGFzc05hbWU9XCJtY20tcm9sZS1saW5rXCI+e3JvbGUubGluay5sYWJlbH08L2E+IDogbnVsbH1cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1jbS1yb2xlLW1vcmVcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5EZXRhaWxzIOKAujwvc3Bhbj5cbiAgICAgICAgPC9hcnRpY2xlPlxuICAgIDwvZGl2PlxuKTtcblxuLyogTW9iaWxlIGRldGFpbCB2aWV3OiB6b29tLWluIG1vZGFsLCBzYW1lIGludGVyYWN0aW9uIHBhdHRlcm4gYXMgdGhlXG4gKiBjb21taXR0ZWVzIHBhZ2UuIFdoaWxlIGBjbG9zaW5nYCB0aGUgcmV2ZXJzZSBhbmltYXRpb24gcGxheXMgYmVmb3JlXG4gKiB0aGUgY29tcG9uZW50IHVubW91bnRzLiAqL1xuY29uc3QgUm9sZU1vZGFsID0gKHsgcm9sZSwgY2xvc2luZywgb25DbG9zZSB9KSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2BtY20tbW9kYWwtc2NyaW0ke2Nsb3NpbmcgPyAnIG1jbS1tb2RhbC1zY3JpbS1jbG9zaW5nJyA6ICcnfWB9IG9uQ2xpY2s9e29uQ2xvc2V9PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9J21jbS1tb2RhbCdcbiAgICAgICAgICAgIHJvbGU9J2RpYWxvZydcbiAgICAgICAgICAgIGFyaWEtbW9kYWw9J3RydWUnXG4gICAgICAgICAgICBhcmlhLWxhYmVsPXtyb2xlLnRpdGxlfVxuICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGUuc3RvcFByb3BhZ2F0aW9uKCl9XG4gICAgICAgID5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzc05hbWU9J21jbS1tb2RhbC1jbG9zZScgb25DbGljaz17b25DbG9zZX0gYXJpYS1sYWJlbD0nQ2xvc2UnPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0ncGggcGgteCcgYXJpYS1oaWRkZW49J3RydWUnIC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAge3JvbGUuc3VidGl0bGUgPyA8cCBjbGFzc05hbWU9J21jbS1tb2RhbC1leWVicm93Jz57cm9sZS5zdWJ0aXRsZX08L3A+IDogbnVsbH1cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J21jbS1tb2RhbC10aXRsZSc+XG4gICAgICAgICAgICAgICAge3JvbGUucHJpbWFyeSA/IDxpIGNsYXNzTmFtZT1cInBoIHBoLWNyb3duIG1jbS1yb2xlLWNyb3duXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz4gOiBudWxsfVxuICAgICAgICAgICAgICAgIHtyb2xlLnRpdGxlfVxuICAgICAgICAgICAgPC9oMj5cblxuICAgICAgICAgICAgeyhyb2xlLmJhZGdlcyB8fCBbXSkubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21jbS1yb2xlLWJhZGdlcyBtY20tbW9kYWwtYmFkZ2VzJz5cbiAgICAgICAgICAgICAgICAgICAge3JvbGUuYmFkZ2VzLm1hcCgoYikgPT4gPEJhZGdlIGtleT17Yn0gdHlwZT17Yn0gLz4pfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdtY20tbW9kYWwtYmx1cmInPntyb2xlLmJsdXJifTwvcD5cblxuICAgICAgICAgICAgeyhyb2xlLnBlb3BsZSB8fCBbXSkubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgPFBlcnNvbkNoaXBzIGNvbnRlbnQ9e3RvQ2hpcHMocm9sZS5wZW9wbGUsIHRydWUpfSBhY2NlbnQ9e3JvbGUuYWNjZW50fSAvPlxuICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgeyhyb2xlLmNvbW1pdHRlZXMgfHwgW10pLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtY20tcm9sZS1jb21taXR0ZWVzIG1jbS1tb2RhbC1jb21taXR0ZWVzJz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdtY20tcm9sZS1jb21taXR0ZWVzLWxhYmVsJz5Db21taXR0ZWVzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWNtLWNvbW1pdHRlZS1saXN0Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtyb2xlLmNvbW1pdHRlZXMubWFwKChjKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEga2V5PXtjfSBocmVmPXtjb21taXR0ZWVIcmVmKGMpfSBjbGFzc05hbWU9J21jbS1jb21taXR0ZWUtY2hpcCc+e2N9PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHtyb2xlLmxpbmsgPyA8YSBocmVmPXtyb2xlLmxpbmsuaHJlZn0gY2xhc3NOYW1lPSdtY20tcm9sZS1saW5rJyBvbkNsaWNrPXtvbkNsb3NlfT57cm9sZS5saW5rLmxhYmVsfTwvYT4gOiBudWxsfVxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbik7XG5cbmNvbnN0IE1jTWluaXN0cnlQYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgcm93cywgaXNMb2FkaW5nIH0gPSB1c2VTdXBhYmFzZVRhYmxlKCdtY21pbmlzdHJ5Jyk7XG4gICAgY29uc3QgeyByb3dzOiBjb21taXR0ZWVzIH0gPSB1c2VTdXBhYmFzZVRhYmxlKCdjb21taXR0ZWVzJyk7XG4gICAgY29uc3QgeyByb3dzOiBjb3VydCB9ID0gdXNlU3VwYWJhc2VUYWJsZSgnbWNjb3VydCcpO1xuXG4gICAgY29uc3QgW3NlbGVjdGVkUm9sZSwgc2V0U2VsZWN0ZWRSb2xlXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gICAgY29uc3QgcGNSb3dzID0gcm93cy5maWx0ZXIoKHIpID0+IHIudGFiID09PSBcIlBlb3BsZSdzIENvdW5jaWxcIik7XG4gICAgY29uc3QgZWNSb3dzID0gcm93cy5maWx0ZXIoKHIpID0+IHIudGFiICE9PSBcIlBlb3BsZSdzIENvdW5jaWxcIik7XG5cbiAgICBjb25zdCBwcmVzaWRlbnQgPSBlY1Jvd3MuZmlsdGVyKChyKSA9PiAvXihtYyk/cHJlc2lkZW50Ly50ZXN0KGxjKHIpKSk7XG4gICAgY29uc3QgdHJlYXN1cmVycyA9IGVjUm93cy5maWx0ZXIoKHIpID0+IFRSRUFTVVJFUlMubWF0Y2gobGMocikpKTtcbiAgICBjb25zdCBjaGllZkp1c3RpY2UgPSBjb3VydC5maWx0ZXIoKHIpID0+IGxjKHIpLmluY2x1ZGVzKCdjaGllZiBqdXN0aWNlJykpO1xuXG4gICAgY29uc3QgY29tbWl0dGVlc0J5RGl2aXNpb24gPSBjb21taXR0ZWVzLnJlZHVjZSgoYWNjLCBjKSA9PiB7XG4gICAgICAgIChhY2NbYy5kaXZpc2lvbl0gPSBhY2NbYy5kaXZpc2lvbl0gfHwgW10pLnB1c2goYy5uYW1lKTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSk7XG5cbiAgICBjb25zdCB0b3BDYXJkcyA9IFtcbiAgICAgICAgdHJlYXN1cmVycy5sZW5ndGggPiAwID8geyAuLi5UUkVBU1VSRVJTLCBwZW9wbGU6IHRyZWFzdXJlcnMgfSA6IG51bGwsXG4gICAgICAgIHByZXNpZGVudC5sZW5ndGggPiAwXG4gICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ01jUHJlc2lkZW50JyxcbiAgICAgICAgICAgICAgICBiYWRnZXM6IFsna2V5JywgJ3BjYXJkJ10sXG4gICAgICAgICAgICAgICAgYmx1cmI6ICdMZWFkZXIgb2YgdGhlIEV4ZWN1dGl2ZSBDb3VuY2lsLCBzdGVlcmluZyBNY011cnRyeeKAmXMgeWVhcmx5IG9wZXJhdGlvbnMsIGxvbmctdGVybSBnb2FscywgYW5kIGluaXRpYXRpdmVzLicsXG4gICAgICAgICAgICAgICAgcGVvcGxlOiBwcmVzaWRlbnQsXG4gICAgICAgICAgICAgICAgYWNjZW50OiB0cnVlLFxuICAgICAgICAgICAgICAgIHByaW1hcnk6IHRydWUsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA6IG51bGwsXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnQ2hpZWYgSnVzdGljZScsXG4gICAgICAgICAgICBibHVyYjogJ0NyaXRpY2FsIGF1dGhvcml0eSBvbiB3ZWxsYmVpbmcsIGNvbmR1Y3QsIGFuZCBhbGNvaG9sIHBvbGljaWVzIGNvbGxlZ2Utd2lkZSwgbGVhZGluZyB0aGUgY291cnQgb2YgQXNzb2NpYXRlIEp1c3RpY2VzLicsXG4gICAgICAgICAgICBwZW9wbGU6IGNoaWVmSnVzdGljZSxcbiAgICAgICAgICAgIGxpbms6IHsgaHJlZjogJy9nb3Zlcm5tZW50L2NvdXJ0JywgbGFiZWw6ICdNZWV0IE1jQ291cnQg4oaSJyB9LFxuICAgICAgICB9LFxuICAgIF0uZmlsdGVyKEJvb2xlYW4pO1xuXG4gICAgY29uc3QgZGl2aXNpb25DYXJkcyA9IERJVklTSU9OX1JPTEVTLm1hcCgocm9sZSkgPT4gKHtcbiAgICAgICAgLi4ucm9sZSxcbiAgICAgICAgYWNjZW50OiB0cnVlLFxuICAgICAgICBwZW9wbGU6IGVjUm93cy5maWx0ZXIoKHIpID0+IHJvbGUubWF0Y2gobGMocikpKSxcbiAgICAgICAgY29tbWl0dGVlczogY29tbWl0dGVlc0J5RGl2aXNpb25bcm9sZS5jb21taXR0ZWVEaXZpc2lvbl0gfHwgW10sXG4gICAgfSkpO1xuXG4gICAgY29uc3QgYm90dG9tQ2FyZHMgPSBCT1RUT01fUk9MRVNcbiAgICAgICAgLm1hcCgocm9sZSkgPT4gKHsgLi4ucm9sZSwgcGVvcGxlOiBlY1Jvd3MuZmlsdGVyKChyKSA9PiByb2xlLm1hdGNoKGxjKHIpKSkgfSkpXG4gICAgICAgIC5maWx0ZXIoKHJvbGUpID0+IHJvbGUucGVvcGxlLmxlbmd0aCA+IDApO1xuXG4gICAgY29uc3QgcGNMZWFkID0gcGNSb3dzLmZpbHRlcigocikgPT4gbGMocikuaW5jbHVkZXMoJ2F0LWxhcmdlJykpO1xuICAgIGNvbnN0IGlzT2ZmQ2FtcHVzID0gKHIpID0+IGxjKHIpLmluY2x1ZGVzKCdvZmYgY2FtcHVzJykgfHwgbGMocikuaW5jbHVkZXMoJ29mZi1jYW1wdXMnKTtcbiAgICBjb25zdCBwY0dyb3VwZWQgPSBQQ19HUk9VUFNcbiAgICAgICAgLm1hcCgoZykgPT4gKHtcbiAgICAgICAgICAgIC4uLmcsXG4gICAgICAgICAgICAvLyBzdGFibGUgc29ydDogb2ZmLWNhbXB1cyByZXBzIHNpbmsgYmVsb3cgdGhlIGNsYXNzLXllYXIgcmVwc1xuICAgICAgICAgICAgcGVvcGxlOiBwY1Jvd3NcbiAgICAgICAgICAgICAgICAuZmlsdGVyKChyKSA9PiBnLm1hdGNoKGxjKHIpKSlcbiAgICAgICAgICAgICAgICAuc29ydCgoYSwgYikgPT4gKGlzT2ZmQ2FtcHVzKGEpID8gMSA6IDApIC0gKGlzT2ZmQ2FtcHVzKGIpID8gMSA6IDApKSxcbiAgICAgICAgfSkpXG4gICAgICAgIC5maWx0ZXIoKGcpID0+IGcucGVvcGxlLmxlbmd0aCA+IDApO1xuICAgIGNvbnN0IHBjT3RoZXIgPSBwY1Jvd3MuZmlsdGVyKFxuICAgICAgICAocikgPT4gIWxjKHIpLmluY2x1ZGVzKCdhdC1sYXJnZScpICYmICFQQ19HUk9VUFMuc29tZSgoZykgPT4gZy5tYXRjaChsYyhyKSkpXG4gICAgKTtcblxuICAgIC8vIHRoZSBtb2RhbCBpcyBhIG1vYmlsZSBhZmZvcmRhbmNlOiBvbiBkZXNrdG9wIHRoZSBjYXJkcyBhbHJlYWR5IHNob3dcbiAgICAvLyBldmVyeXRoaW5nLCBzbyBjbGlja3MgZG8gbm90aGluZyB0aGVyZVxuICAgIGNvbnN0IG9wZW5Sb2xlID0gKHJvbGUpID0+IHtcbiAgICAgICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiA2NDBweCknKS5tYXRjaGVzKSBzZXRTZWxlY3RlZFJvbGUocm9sZSk7XG4gICAgfTtcblxuICAgIC8vIGxvY2sgcGFnZSBzY3JvbGwgYW5kIGNsb3NlIG9uIEVzY2FwZSB3aGlsZSB0aGUgbW9kYWwgaXMgb3BlblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmICghc2VsZWN0ZWRSb2xlKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICBjb25zdCBwcmV2T3ZlcmZsb3cgPSBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93O1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgICAgIGNvbnN0IG9uS2V5ID0gKGUpID0+IHsgaWYgKGUua2V5ID09PSAnRXNjYXBlJykgc2V0U2VsZWN0ZWRSb2xlKG51bGwpOyB9O1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uS2V5KTtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBwcmV2T3ZlcmZsb3c7XG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uS2V5KTtcbiAgICAgICAgfTtcbiAgICB9LCBbc2VsZWN0ZWRSb2xlXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGFnZSBwYWdlLWxpZ2h0IHBhZ2Utd2l0aC1zdGFnZ2VyZWQtbWVudSc+XG4gICAgICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgICAgICA8U2l0ZU5hdmJhciAvPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWNtaW5pc3RyeS1wYWdlJz5cbiAgICAgICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT0nZXYtaGVybyc+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPScvc3RhdGljL2ljb25zL2Fib3V0LXN3b29zaC5zdmcnIGFsdD0nJyBjbGFzc05hbWU9J2V2LWhlcm8tc3dvb3NoJyBhcmlhLWhpZGRlbj0ndHJ1ZScgLz5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9Jy9zdGF0aWMvaWNvbnMvZWxsaXBzZS1sYXJnZS5zdmcnIGFsdD0nJyBjbGFzc05hbWU9J2V2LWhlcm8tZWxsaXBzZS1sYXJnZScgYXJpYS1oaWRkZW49J3RydWUnIC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPScvc3RhdGljL2ljb25zL2VsbGlwc2Utc21hbGwuc3ZnJyBhbHQ9JycgY2xhc3NOYW1lPSdldi1oZXJvLWVsbGlwc2Utc21hbGwnIGFyaWEtaGlkZGVuPSd0cnVlJyAvPlxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdldi1oZXJvLWhlYWRpbmcnPk1jTWluaXN0cnk8L2gxPlxuICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21jbS1pbnRybyc+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbWNtLWludHJvLXRleHQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgTWNNdXJ0cnkmcnNxdW87cyBnb3Zlcm5tZW50IGlzIG1hZGUgdXAgb2YgdGhlIDxzdHJvbmc+RXhlY3V0aXZlIENvdW5jaWw8L3N0cm9uZz4gYW5kXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGUgPHN0cm9uZz5QZW9wbGUmcnNxdW87cyBDb3VuY2lsPC9zdHJvbmc+LiBUaGUgY2hhcnQgYmVsb3cgc2hvd3MgdGhlIGhpZXJhcmNoeSBvZlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2liaWxpdHkgYXQgdGhlIGNvbGxlZ2U6IHdobyBsZWFkcyB3aGF0LCBhbmQgd2hpY2ggY29tbWl0dGVlcyBsaXZlIHVuZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICBlYWNoIGRpdmlzaW9uLlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtY20tbGVnZW5kJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtY20tbGVnZW5kLXJvdyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJhZGdlIHR5cGU9J2tleScgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J21jbS1sZWdlbmQtaGludCc+b3ZlcnNlZXMgY29tbWl0dGVlcyBhbmQgdGhlIGNvbW1pdHRlZSBjbG9zZXQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtY20tbGVnZW5kLXJvdyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJhZGdlIHR5cGU9J3BjYXJkJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nbWNtLWxlZ2VuZC1oaW50Jz5tYWtlcyBwdXJjaGFzZXMgb24gYmVoYWxmIG9mIHRoZSBjb2xsZWdlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAge2lzTG9hZGluZyA/IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xvYWRpbmctY29udGFpbmVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsb2FkaW5nLXNwaW5uZXInPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdsb2FkaW5nLXRleHQnPkxvYWRpbmcuLi48L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmYWRlLWluJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J2RpdmlzaW9uLXRpdGxlJz5FeGVjdXRpdmUgQ291bmNpbDwvaDI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtY20tY2hhcnQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtY20tdGllciBtY20tdGllci10b3AnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGllckxhYmVsPkxlZ2lzbGF0aXZlPC9UaWVyTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0b3BDYXJkcy5tYXAoKHJvbGUpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb2xlQ2FyZCBrZXk9e3JvbGUudGl0bGV9IHJvbGU9e3JvbGV9IG9uU2VsZWN0PXtvcGVuUm9sZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWNtLWNvbm5lY3RvcicgYXJpYS1oaWRkZW49J3RydWUnIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWNtLXRpZXIgbWNtLXRpZXItZGl2aXNpb25zJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRpZXJMYWJlbD5WaWNlIFByZXNpZGVudHM8L1RpZXJMYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RpdmlzaW9uQ2FyZHMubWFwKChyb2xlKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um9sZUNhcmQga2V5PXtyb2xlLnRpdGxlfSByb2xlPXtyb2xlfSBvblNlbGVjdD17b3BlblJvbGV9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2JvdHRvbUNhcmRzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWNtLWNvbm5lY3RvcicgYXJpYS1oaWRkZW49J3RydWUnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWNtLXRpZXIgbWNtLXRpZXItYm90dG9tJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGllckxhYmVsPkFkbWluaXN0cmF0aW9uPC9UaWVyTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2JvdHRvbUNhcmRzLm1hcCgocm9sZSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um9sZUNhcmQga2V5PXtyb2xlLnRpdGxlfSByb2xlPXtyb2xlfSBvblNlbGVjdD17b3BlblJvbGV9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J2RpdmlzaW9uLXRpdGxlIG1jbS1wYy10aXRsZScgaWQ9J3Blb3BsZXMtY291bmNpbCc+UGVvcGxlJnJzcXVvO3MgQ291bmNpbDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWNtLWludHJvIG1jbS1pbnRyby10aWdodCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdtY20taW50cm8tdGV4dCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEV2ZXJ5IGZsb29yLCBjbGFzcywgYW5kIG9mZi1jYW1wdXMgTXVydCBnZXRzIGEgdm9pY2UgKGFuZCBhIHZvdGUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWQgYnkgdGhlIEF0LUxhcmdlIFJlcHJlc2VudGF0aXZlLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7cGNMZWFkLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtY20tcGMtbGVhZCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQZXJzb25DaGlwcyBjb250ZW50PXt0b0NoaXBzKHBjTGVhZCwgdHJ1ZSl9IGFjY2VudCAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21jbS1wYy1ncm91cHMnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwY0dyb3VwZWQubWFwKChnKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGtleT17Zy50aXRsZX0gY2xhc3NOYW1lPSdtY20tcGMtZ3JvdXAnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0nbWNtLXBjLWdyb3VwLXRpdGxlJz57Zy50aXRsZX08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBlcnNvbkNoaXBzIGNvbnRlbnQ9e3RvQ2hpcHMoZy5wZW9wbGUsIHRydWUpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3BjT3RoZXIubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nbWNtLXBjLWdyb3VwJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9J21jbS1wYy1ncm91cC10aXRsZSc+TW9yZSBSZXByZXNlbnRhdGl2ZXM8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBlcnNvbkNoaXBzIGNvbnRlbnQ9e3RvQ2hpcHMocGNPdGhlciwgdHJ1ZSl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICB7c2VsZWN0ZWRSb2xlID8gKFxuICAgICAgICAgICAgICAgICAgICA8Um9sZU1vZGFsIHJvbGU9e3NlbGVjdGVkUm9sZX0gb25DbG9zZT17KCkgPT4gc2V0U2VsZWN0ZWRSb2xlKG51bGwpfSAvPlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxTaXRlRm9vdGVyIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNY01pbmlzdHJ5UGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=