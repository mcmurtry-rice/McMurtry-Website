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
  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
    closingRole = _useState2[0],
    setClosingRole = _useState2[1];
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

  // play the reverse animation, then unmount
  var closeRole = function closeRole() {
    if (closingRole) return;
    setClosingRole(true);
    setTimeout(function () {
      setSelectedRole(null);
      setClosingRole(false);
    }, 220);
  };

  // lock page scroll and close on Escape while the modal is open
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (!selectedRole) return undefined;
    var prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    var onKey = function onKey(e) {
      if (e.key === 'Escape') closeRole();
    };
    window.addEventListener('keydown', onKey);
    return function () {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [selectedRole, closingRole]);
  return __jsx("div", {
    className: "page page-light page-with-staggered-menu",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 9
    }
  }, __jsx(_components_Header_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 13
    }
  }), __jsx(_components_navbar_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "mcministry-page",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 13
    }
  }, __jsx("header", {
    className: "ev-hero",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
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
      lineNumber: 311,
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
      lineNumber: 312,
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
      lineNumber: 313,
      columnNumber: 21
    }
  }), __jsx("h1", {
    className: "ev-hero-heading",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 21
    }
  }, "McMinistry")), __jsx("div", {
    className: "mcm-intro",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "mcm-intro-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318,
      columnNumber: 21
    }
  }, "McMurtry\u2019s government is made up of the ", __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319,
      columnNumber: 71
    }
  }, "Executive Council"), " and the ", __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 29
    }
  }, "People\u2019s Council"), ". The chart below shows the hierarchy of responsibility at the college: who leads what, and which committees live under each division."), __jsx("div", {
    className: "mcm-legend",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "mcm-legend-row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325,
      columnNumber: 25
    }
  }, __jsx(Badge, {
    type: "key",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 29
    }
  }), __jsx("span", {
    className: "mcm-legend-hint",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327,
      columnNumber: 29
    }
  }, "oversees committees and the committee closet")), __jsx("div", {
    className: "mcm-legend-row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 25
    }
  }, __jsx(Badge, {
    type: "pcard",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 29
    }
  }), __jsx("span", {
    className: "mcm-legend-hint",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331,
      columnNumber: 29
    }
  }, "makes purchases on behalf of the college")))), isLoading ? __jsx("div", {
    className: "loading-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "loading-spinner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338,
      columnNumber: 25
    }
  }), __jsx("p", {
    className: "loading-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339,
      columnNumber: 25
    }
  }, "Loading...")) : __jsx("div", {
    className: "fade-in",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342,
      columnNumber: 21
    }
  }, __jsx("h2", {
    className: "division-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343,
      columnNumber: 25
    }
  }, "Executive Council"), __jsx("div", {
    className: "mcm-chart",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "mcm-tier mcm-tier-top",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346,
      columnNumber: 29
    }
  }, __jsx(TierLabel, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347,
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
        lineNumber: 349,
        columnNumber: 37
      }
    });
  })), __jsx("div", {
    className: "mcm-connector",
    "aria-hidden": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353,
      columnNumber: 29
    }
  }), __jsx("div", {
    className: "mcm-tier mcm-tier-divisions",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355,
      columnNumber: 29
    }
  }, __jsx(TierLabel, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356,
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
        lineNumber: 358,
        columnNumber: 37
      }
    });
  })), bottomCards.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "mcm-connector",
    "aria-hidden": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 364,
      columnNumber: 37
    }
  }), __jsx("div", {
    className: "mcm-tier mcm-tier-bottom",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365,
      columnNumber: 37
    }
  }, __jsx(TierLabel, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 366,
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
        lineNumber: 368,
        columnNumber: 45
      }
    });
  })))), __jsx("h2", {
    className: "division-title mcm-pc-title",
    id: "peoples-council",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 375,
      columnNumber: 25
    }
  }, "People\u2019s Council"), __jsx("div", {
    className: "mcm-intro mcm-intro-tight",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 376,
      columnNumber: 25
    }
  }, __jsx("p", {
    className: "mcm-intro-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377,
      columnNumber: 29
    }
  }, "Every floor, class, and off-campus Murt gets a voice (and a vote), led by the At-Large Representative.")), pcLead.length > 0 && __jsx("div", {
    className: "mcm-pc-lead",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 384,
      columnNumber: 29
    }
  }, __jsx(_components_PersonChip_PersonChip__WEBPACK_IMPORTED_MODULE_5__["default"], {
    content: toChips(pcLead, true),
    accent: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 385,
      columnNumber: 33
    }
  })), __jsx("div", {
    className: "mcm-pc-groups",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 389,
      columnNumber: 25
    }
  }, pcGrouped.map(function (g) {
    return __jsx("section", {
      key: g.title,
      className: "mcm-pc-group",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 391,
        columnNumber: 33
      }
    }, __jsx("h3", {
      className: "mcm-pc-group-title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 392,
        columnNumber: 37
      }
    }, g.title), __jsx(_components_PersonChip_PersonChip__WEBPACK_IMPORTED_MODULE_5__["default"], {
      content: toChips(g.people, true),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 393,
        columnNumber: 37
      }
    }));
  }), pcOther.length > 0 && __jsx("section", {
    className: "mcm-pc-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 397,
      columnNumber: 33
    }
  }, __jsx("h3", {
    className: "mcm-pc-group-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 398,
      columnNumber: 37
    }
  }, "More Representatives"), __jsx(_components_PersonChip_PersonChip__WEBPACK_IMPORTED_MODULE_5__["default"], {
    content: toChips(pcOther, true),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 399,
      columnNumber: 37
    }
  })))), selectedRole ? __jsx(RoleModal, {
    role: selectedRole,
    closing: closingRole,
    onClose: closeRole,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 407,
      columnNumber: 21
    }
  }) : null), __jsx(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411,
      columnNumber: 13
    }
  }));
};
_s(McMinistryPage, "BuX8KYJsGx6llh+EMBYBJR4QioY=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ292ZXJubWVudC9tY21pbmlzdHJ5L2luZGV4LmpzIl0sIm5hbWVzIjpbImxjIiwiciIsInBvc2l0aW9uIiwidG9Mb3dlckNhc2UiLCJUUkVBU1VSRVJTIiwidGl0bGUiLCJiYWRnZXMiLCJibHVyYiIsIm1hdGNoIiwicCIsImluY2x1ZGVzIiwic2hvd1Bvc2l0aW9ucyIsIkJPVFRPTV9ST0xFUyIsIkRJVklTSU9OX1JPTEVTIiwiY29tbWl0dGVlRGl2aXNpb24iLCJzdWJ0aXRsZSIsImxpbmsiLCJocmVmIiwibGFiZWwiLCJQQ19HUk9VUFMiLCJjb21taXR0ZWVIcmVmIiwibmFtZSIsImNvbmNhdCIsImVuY29kZVVSSUNvbXBvbmVudCIsIkJhZGdlIiwiX3JlZiIsInR5cGUiLCJfX2pzeCIsImNsYXNzTmFtZSIsIl9fc2VsZiIsIl90aGlzIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJfYyIsInRvQ2hpcHMiLCJyb3dzIiwibWFwIiwiX3JlZjIiLCJlbWFpbCIsInVuZGVmaW5lZCIsIlRpZXJMYWJlbCIsIl9yZWYzIiwiY2hpbGRyZW4iLCJfYzIiLCJSb2xlQ2FyZCIsIl9yZWY0Iiwicm9sZSIsIm9uU2VsZWN0IiwicHJpbWFyeSIsIm9uQ2xpY2siLCJsZW5ndGgiLCJiIiwia2V5IiwicGVvcGxlIiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsIlBlcnNvbkNoaXBzIiwiY29udGVudCIsImFjY2VudCIsImNvbW1pdHRlZXMiLCJjIiwiX2MzIiwiUm9sZU1vZGFsIiwiX3JlZjUiLCJjbG9zaW5nIiwib25DbG9zZSIsIl9jNCIsIk1jTWluaXN0cnlQYWdlIiwiX3MiLCJfdXNlU3VwYWJhc2VUYWJsZSIsInVzZVN1cGFiYXNlVGFibGUiLCJpc0xvYWRpbmciLCJfdXNlU3VwYWJhc2VUYWJsZTIiLCJfdXNlU3VwYWJhc2VUYWJsZTMiLCJjb3VydCIsIl91c2VTdGF0ZSIsInVzZVN0YXRlIiwic2VsZWN0ZWRSb2xlIiwic2V0U2VsZWN0ZWRSb2xlIiwiX3VzZVN0YXRlMiIsImNsb3NpbmdSb2xlIiwic2V0Q2xvc2luZ1JvbGUiLCJwY1Jvd3MiLCJmaWx0ZXIiLCJ0YWIiLCJlY1Jvd3MiLCJwcmVzaWRlbnQiLCJ0ZXN0IiwidHJlYXN1cmVycyIsImNoaWVmSnVzdGljZSIsImNvbW1pdHRlZXNCeURpdmlzaW9uIiwicmVkdWNlIiwiYWNjIiwiZGl2aXNpb24iLCJwdXNoIiwidG9wQ2FyZHMiLCJfb2JqZWN0U3ByZWFkIiwiQm9vbGVhbiIsImRpdmlzaW9uQ2FyZHMiLCJib3R0b21DYXJkcyIsInBjTGVhZCIsImlzT2ZmQ2FtcHVzIiwicGNHcm91cGVkIiwiZyIsInNvcnQiLCJhIiwicGNPdGhlciIsInNvbWUiLCJvcGVuUm9sZSIsIndpbmRvdyIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwiY2xvc2VSb2xlIiwic2V0VGltZW91dCIsInVzZUVmZmVjdCIsInByZXZPdmVyZmxvdyIsImRvY3VtZW50IiwiYm9keSIsInN0eWxlIiwib3ZlcmZsb3ciLCJvbktleSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiSGVhZGVyIiwiU2l0ZU5hdmJhciIsInNyYyIsImFsdCIsIlJlYWN0IiwiRnJhZ21lbnQiLCJpZCIsIlNpdGVGb290ZXIiLCJfYzUiLCIkUmVmcmVzaFJlZyQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDSTtBQUNJO0FBQ0E7QUFDUztBQUNRO0FBQ3ZEOztBQUVyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLEVBQUUsR0FBRyxTQUFMQSxFQUFFQSxDQUFJQyxDQUFDO0VBQUEsT0FBSyxDQUFDQSxDQUFDLENBQUNDLFFBQVEs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RkFBZ0I7QUFBQTtBQUFBNkQsR0FBQSxHQUh0Q2hFLGNBQWM7QUErTUxBLDZFQUFjLEVBQUM7QUFBQSxJQUFBbEMsRUFBQSxFQUFBVSxHQUFBLEVBQUFrQixHQUFBLEVBQUFLLEdBQUEsRUFBQWlFLEdBQUE7QUFBQUMsWUFBQSxDQUFBbkcsRUFBQTtBQUFBbUcsWUFBQSxDQUFBekYsR0FBQTtBQUFBeUYsWUFBQSxDQUFBdkUsR0FBQTtBQUFBdUUsWUFBQSxDQUFBbEUsR0FBQTtBQUFBa0UsWUFBQSxDQUFBRCxHQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2dvdmVybm1lbnQvbWNtaW5pc3RyeS5jYWIxMGE0NzRmMWM2OWE0NmNkZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlcic7XG5pbXBvcnQgU2l0ZU5hdmJhciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL25hdmJhci9OYXZiYXInO1xuaW1wb3J0IFNpdGVGb290ZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyJztcbmltcG9ydCBQZXJzb25DaGlwcyBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL1BlcnNvbkNoaXAvUGVyc29uQ2hpcCc7XG5pbXBvcnQgeyB1c2VTdXBhYmFzZVRhYmxlIH0gZnJvbSAnLi4vLi4vLi4vdG9vbHMvZGF0YWJhc2UvdXNlU3VwYWJhc2VUYWJsZSc7XG5pbXBvcnQgJy4vaW5kZXguY3NzJztcblxuLypcbiAqIE1jTWluaXN0cnkgLSBvcmctY2hhcnQgbGF5b3V0IG9mIE1jTXVydHJ5J3Mgc3R1ZGVudCBnb3Zlcm5tZW50LFxuICogbWlycm9yaW5nIHRoZSBFeGVjdXRpdmUgQ291bmNpbCAmIENvbW1pdHRlZSBTdHJ1Y3R1cmUgc3ByZWFkIGluIHRoZVxuICogTy1XZWVrIEJvb2sgKHBwLiAxMjktMTMwKTpcbiAqXG4gKiAgIHJvdyAxOiBUcmVhc3VyZXJzIHwgTWNQcmVzaWRlbnQgfCBDaGllZiBKdXN0aWNlXG4gKiAgIHJvdyAyOiBFeHRlcm5hbCBWUCB8IEludGVybmFsIFZQIHwgUHJpbWUgTWluaXN0ZXIgfCBBdC1MYXJnZSBSZXBcbiAqICAgcm93IDM6IFNlY3JldGFyaWVzIHwgKFJTQSBTZW5hdG9yKSB8IFBhcmxpYW1lbnRhcmlhblxuICpcbiAqIERlc2t0b3Agc2hvd3MgZnVsbCBjYXJkcy4gTW9iaWxlIGtlZXBzIHRoZSBzYW1lIGRpYWdyYW0gU0hBUEUgd2l0aFxuICogY29tcGFjdCBzaWRlLWJ5LXNpZGUgbm9kZXMgYXJvdW5kIGEgY2VudHJhbCBzcGluZTsgdGFwcGluZyBhIG5vZGVcbiAqIHpvb21zIGludG8gYSBtb2RhbCB3aXRoIHRoZSByb2xlJ3MgZnVsbCBkZXRhaWxzIChzYW1lIGludGVyYWN0aW9uXG4gKiBhcyB0aGUgY29tbWl0dGVlcyBkaWFncmFtKS5cbiAqXG4gKiBQZW9wbGUgY29tZSBmcm9tIHRoZSBgbWNtaW5pc3RyeWAgdGFibGUgKENoaWVmIEp1c3RpY2UgZnJvbSBgbWNjb3VydGApXG4gKiBhbmQgY29tbWl0dGVlIGxpc3RzIGZyb20gdGhlIGBjb21taXR0ZWVzYCB0YWJsZSwgc28gdGhlIGNoYXJ0IHN0YXlzIGluXG4gKiBzeW5jIHdpdGggU3VwYWJhc2UuIFRoZSBjb25maWcgYmVsb3cgb25seSBlbmNvZGVzIHN0cnVjdHVyZTogd2hpY2hcbiAqIHBvc2l0aW9ucyBzaXQgaW4gd2hpY2ggcm93LCByb2xlIGJsdXJicywgYW5kIGtleS9QLUNhcmQgYmFkZ2VzLlxuICogUm9sZXMgd2l0aCBubyBwZW9wbGUgaW4gdGhlIHRhYmxlIChlLmcuIFJTQSBTZW5hdG9yKSBzaW1wbHkgZG9uJ3QgcmVuZGVyLlxuICovXG5cbmNvbnN0IGxjID0gKHIpID0+IChyLnBvc2l0aW9uIHx8ICcnKS50b0xvd2VyQ2FzZSgpO1xuXG5jb25zdCBUUkVBU1VSRVJTID0ge1xuICAgIHRpdGxlOiAnVHJlYXN1cmVycycsXG4gICAgYmFkZ2VzOiBbJ3BjYXJkJ10sXG4gICAgYmx1cmI6ICdIYW5kbGUgYnVkZ2V0IGFsbG9jYXRpb25zIGFuZCBhcHByb3ZlIGFsbCBjb2xsZWdlIHB1cmNoYXNlcy4nLFxuICAgIG1hdGNoOiAocCkgPT4gcC5pbmNsdWRlcygndHJlYXN1cmVyJyksXG4gICAgc2hvd1Bvc2l0aW9uczogdHJ1ZSxcbn07XG5cbmNvbnN0IEJPVFRPTV9ST0xFUyA9IFtcbiAgICB7XG4gICAgICAgIHRpdGxlOiAnU2VjcmV0YXJpZXMnLFxuICAgICAgICBibHVyYjogJ0tlZXAgbWVldGluZyBtaW51dGVzLCBtYW5hZ2Ugcm9vbSByZXNlcnZhdGlvbnMsIGFuZCBzZW5kIG91dCB0aGUgd2Vla2x5IGxpc3RzZXJ2LicsXG4gICAgICAgIG1hdGNoOiAocCkgPT4gcC5pbmNsdWRlcygnc2VjcmV0YXJ5JyksXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiAnUlNBIFNlbmF0b3InLFxuICAgICAgICBibHVyYjogJ1JlcHJlc2VudHMgTWNNdXJ0cnkgYXQgdGhlIFJTQSBTZW5hdGUgYW5kIGJyaW5ncyBjYW1wdXMtd2lkZSB1cGRhdGVzIGJhY2sgdG8gdGhlIGNvbGxlZ2UuJyxcbiAgICAgICAgbWF0Y2g6IChwKSA9PiBwLmluY2x1ZGVzKCdzZW5hdG9yJyksXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiAnUGFybGlhbWVudGFyaWFuJyxcbiAgICAgICAgYmx1cmI6ICdVcGhvbGRzIGFjY291bnRhYmlsaXR5IGluIGdvdmVybm1lbnQsIGhvbGRzIHZvdGVzLCBhbmQgcGFzc2VzIGNoYW5nZXMgdG8gTWNMZWdpc2xhdGlvbi4nLFxuICAgICAgICBtYXRjaDogKHApID0+IHAuaW5jbHVkZXMoJ3BhcmxpYW1lbnQnKSxcbiAgICB9LFxuXTtcblxuY29uc3QgRElWSVNJT05fUk9MRVMgPSBbXG4gICAge1xuICAgICAgICB0aXRsZTogJ0V4dGVybmFsIFZpY2UgUHJlc2lkZW50JyxcbiAgICAgICAgYmFkZ2VzOiBbJ2tleSddLFxuICAgICAgICBibHVyYjogJ0V4ZWN1dGVzIGxvbmdzdGFuZGluZyB0cmFkaXRpb25zIGFuZCBwcmVzZXJ2ZXMgTWNNdXJ0cnnigJlzIGxlZ2FjeS4nLFxuICAgICAgICBtYXRjaDogKHApID0+IHAuaW5jbHVkZXMoJ2V4dGVybmFsIHZpY2UnKSxcbiAgICAgICAgY29tbWl0dGVlRGl2aXNpb246ICdFeHRlcm5hbCBDb21taXR0ZWVzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6ICdJbnRlcm5hbCBWaWNlIFByZXNpZGVudCcsXG4gICAgICAgIGJhZGdlczogWydrZXknXSxcbiAgICAgICAgYmx1cmI6ICdNYWludGFpbnMgYW5kIGltcHJvdmVzIGludGVybmFsIGFtZW5pdGllcyBhbmQgc2VydmljZXMgd2l0aGluIHRoZSBjb2xsZWdlLicsXG4gICAgICAgIG1hdGNoOiAocCkgPT4gcC5pbmNsdWRlcygnaW50ZXJuYWwgdmljZScpLFxuICAgICAgICBjb21taXR0ZWVEaXZpc2lvbjogJ0ludGVybmFsIENvbW1pdHRlZXMnLFxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogJ1ByaW1lIE1pbmlzdGVyJyxcbiAgICAgICAgc3VidGl0bGU6ICdTb2NpYWxzIFZpY2UgUHJlc2lkZW50JyxcbiAgICAgICAgYmFkZ2VzOiBbJ2tleScsICdwY2FyZCddLFxuICAgICAgICBibHVyYjogJ1BsYW5zIE1jTXVydHJ54oCZcyBsYXJnZSBzb2NpYWwgZ2F0aGVyaW5ncyBhbmQgYWN0cyBhcyBsaWFpc29uIHRvIHN0dWRlbnQgYWN0aXZpdGllcy4nLFxuICAgICAgICBtYXRjaDogKHApID0+IHAuaW5jbHVkZXMoJ3ByaW1lIG1pbmlzdGVyJyksXG4gICAgICAgIGNvbW1pdHRlZURpdmlzaW9uOiAnU29jaWFsIENvbW1pdHRlZXMnLFxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogJ0F0LUxhcmdlIFJlcHJlc2VudGF0aXZlJyxcbiAgICAgICAgYmFkZ2VzOiBbJ2tleSddLFxuICAgICAgICBibHVyYjogJ0xlYWRzIHRoZSBQZW9wbGXigJlzIENvdW5jaWwgYW5kIG1haW50YWlucyBoYWxsIGFuZCBjb21tb25zIGN1bHR1cmUuJyxcbiAgICAgICAgbWF0Y2g6IChwKSA9PiBwLmluY2x1ZGVzKCdhdC1sYXJnZScpLFxuICAgICAgICBjb21taXR0ZWVEaXZpc2lvbjogJ0F0LUxhcmdlIENvbW1pdHRlZXMnLFxuICAgICAgICBsaW5rOiB7IGhyZWY6ICcjcGVvcGxlcy1jb3VuY2lsJywgbGFiZWw6ICdQZW9wbGXigJlzIENvdW5jaWwg4oaTJyB9LFxuICAgIH0sXG5dO1xuXG5jb25zdCBQQ19HUk9VUFMgPSBbXG4gICAgeyB0aXRsZTogJ0hhbGwgUmVwcycsIG1hdGNoOiAocCkgPT4gcC5pbmNsdWRlcygnaGFsbCByZXAnKSB9LFxuICAgIHsgdGl0bGU6ICdDbGFzcyBSZXBzJywgbWF0Y2g6IChwKSA9PiBwLmluY2x1ZGVzKCdjbGFzcyByZXAnKSB8fCBwLmluY2x1ZGVzKCdvZmYgY2FtcHVzJykgfHwgcC5pbmNsdWRlcygnb2ZmLWNhbXB1cycpIH0sXG5dO1xuXG5jb25zdCBjb21taXR0ZWVIcmVmID0gKG5hbWUpID0+IGAvZ292ZXJubWVudC9jb21taXR0ZWVzIyR7ZW5jb2RlVVJJQ29tcG9uZW50KG5hbWUpfWA7XG5cbmNvbnN0IEJhZGdlID0gKHsgdHlwZSB9KSA9PiAoXG4gICAgPHNwYW4gY2xhc3NOYW1lPXtgbWNtLWJhZGdlIG1jbS1iYWRnZS0ke3R5cGV9YH0+XG4gICAgICAgIDxpIGNsYXNzTmFtZT17YHBoICR7dHlwZSA9PT0gJ2tleScgPyAncGgta2V5JyA6ICdwaC1jcmVkaXQtY2FyZCd9YH0gYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWNtLWJhZGdlLXRleHRcIj57dHlwZSA9PT0gJ2tleScgPyAnS2V5IEhvbGRlcicgOiAnUC1DYXJkIEhvbGRlcid9PC9zcGFuPlxuICAgIDwvc3Bhbj5cbik7XG5cbmNvbnN0IHRvQ2hpcHMgPSAocm93cywgc2hvd1Bvc2l0aW9ucykgPT5cbiAgICByb3dzLm1hcCgoeyBuYW1lLCBlbWFpbCwgcG9zaXRpb24gfSkgPT4gKHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgZW1haWwsXG4gICAgICAgIHBvc2l0aW9uOiBzaG93UG9zaXRpb25zID8gcG9zaXRpb24gOiB1bmRlZmluZWQsXG4gICAgfSkpO1xuXG5jb25zdCBUaWVyTGFiZWwgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gICAgPHNwYW4gY2xhc3NOYW1lPSdtY20tdGllci1sYWJlbCc+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nbWNtLXRpZXItbGFiZWwtcGlsbCc+e2NoaWxkcmVufTwvc3Bhbj5cbiAgICA8L3NwYW4+XG4pO1xuXG4vKiBUaGUgLm1jbS1ub2RlIHdyYXBwZXIgaXMgZGlzcGxheTpjb250ZW50cyBvbiBkZXNrdG9wIChpbnZpc2libGUgdG8gdGhlXG4gKiBmbGV4IHRpZXJzKSBhbmQgYmVjb21lcyB0aGUgc2l6ZWQgZ3JpZCBjZWxsIG9uIG1vYmlsZS4gKi9cbmNvbnN0IFJvbGVDYXJkID0gKHsgcm9sZSwgb25TZWxlY3QgfSkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgbWNtLW5vZGUke3JvbGUucHJpbWFyeSA/ICcgbWNtLW5vZGUtcHJpbWFyeScgOiAnJ31gfT5cbiAgICAgICAgPGFydGljbGVcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YG1jbS1yb2xlLWNhcmQke3JvbGUucHJpbWFyeSA/ICcgbWNtLXJvbGUtY2FyZC1wcmltYXJ5JyA6ICcnfWB9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblNlbGVjdChyb2xlKX1cbiAgICAgICAgPlxuICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJtY20tcm9sZS1oZWFkXCI+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1jbS1yb2xlLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIHtyb2xlLnByaW1hcnkgPyA8aSBjbGFzc05hbWU9XCJwaCBwaC1jcm93biBtY20tcm9sZS1jcm93blwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+IDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAge3JvbGUudGl0bGV9XG4gICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICB7cm9sZS5zdWJ0aXRsZSA/IDxwIGNsYXNzTmFtZT1cIm1jbS1yb2xlLXN1YnRpdGxlXCI+e3JvbGUuc3VidGl0bGV9PC9wPiA6IG51bGx9XG4gICAgICAgICAgICAgICAgeyhyb2xlLmJhZGdlcyB8fCBbXSkubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWNtLXJvbGUtYmFkZ2VzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cm9sZS5iYWRnZXMubWFwKChiKSA9PiA8QmFkZ2Uga2V5PXtifSB0eXBlPXtifSAvPil9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1jbS1yb2xlLWJsdXJiXCI+e3JvbGUuYmx1cmJ9PC9wPlxuICAgICAgICAgICAgeyhyb2xlLnBlb3BsZSB8fCBbXSkubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoZSkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKX0+XG4gICAgICAgICAgICAgICAgICAgIDxQZXJzb25DaGlwcyBjb250ZW50PXt0b0NoaXBzKHJvbGUucGVvcGxlLCByb2xlLnNob3dQb3NpdGlvbnMpfSBhY2NlbnQ9e3JvbGUuYWNjZW50fSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHsocm9sZS5jb21taXR0ZWVzIHx8IFtdKS5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1jbS1yb2xlLWNvbW1pdHRlZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWNtLXJvbGUtY29tbWl0dGVlcy1sYWJlbFwiPkNvbW1pdHRlZXM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWNtLWNvbW1pdHRlZS1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cm9sZS5jb21taXR0ZWVzLm1hcCgoYykgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGtleT17Y30gaHJlZj17Y29tbWl0dGVlSHJlZihjKX0gY2xhc3NOYW1lPVwibWNtLWNvbW1pdHRlZS1jaGlwXCI+e2N9PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHtyb2xlLmxpbmsgPyA8YSBocmVmPXtyb2xlLmxpbmsuaHJlZn0gY2xhc3NOYW1lPVwibWNtLXJvbGUtbGlua1wiPntyb2xlLmxpbmsubGFiZWx9PC9hPiA6IG51bGx9XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtY20tcm9sZS1tb3JlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+RGV0YWlscyDigLo8L3NwYW4+XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICA8L2Rpdj5cbik7XG5cbi8qIE1vYmlsZSBkZXRhaWwgdmlldzogem9vbS1pbiBtb2RhbCwgc2FtZSBpbnRlcmFjdGlvbiBwYXR0ZXJuIGFzIHRoZVxuICogY29tbWl0dGVlcyBwYWdlLiBXaGlsZSBgY2xvc2luZ2AgdGhlIHJldmVyc2UgYW5pbWF0aW9uIHBsYXlzIGJlZm9yZVxuICogdGhlIGNvbXBvbmVudCB1bm1vdW50cy4gKi9cbmNvbnN0IFJvbGVNb2RhbCA9ICh7IHJvbGUsIGNsb3NpbmcsIG9uQ2xvc2UgfSkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgbWNtLW1vZGFsLXNjcmltJHtjbG9zaW5nID8gJyBtY20tbW9kYWwtc2NyaW0tY2xvc2luZycgOiAnJ31gfSBvbkNsaWNrPXtvbkNsb3NlfT5cbiAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPSdtY20tbW9kYWwnXG4gICAgICAgICAgICByb2xlPSdkaWFsb2cnXG4gICAgICAgICAgICBhcmlhLW1vZGFsPSd0cnVlJ1xuICAgICAgICAgICAgYXJpYS1sYWJlbD17cm9sZS50aXRsZX1cbiAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpfVxuICAgICAgICA+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3NOYW1lPSdtY20tbW9kYWwtY2xvc2UnIG9uQ2xpY2s9e29uQ2xvc2V9IGFyaWEtbGFiZWw9J0Nsb3NlJz5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J3BoIHBoLXgnIGFyaWEtaGlkZGVuPSd0cnVlJyAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgIHtyb2xlLnN1YnRpdGxlID8gPHAgY2xhc3NOYW1lPSdtY20tbW9kYWwtZXllYnJvdyc+e3JvbGUuc3VidGl0bGV9PC9wPiA6IG51bGx9XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdtY20tbW9kYWwtdGl0bGUnPlxuICAgICAgICAgICAgICAgIHtyb2xlLnByaW1hcnkgPyA8aSBjbGFzc05hbWU9XCJwaCBwaC1jcm93biBtY20tcm9sZS1jcm93blwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+IDogbnVsbH1cbiAgICAgICAgICAgICAgICB7cm9sZS50aXRsZX1cbiAgICAgICAgICAgIDwvaDI+XG5cbiAgICAgICAgICAgIHsocm9sZS5iYWRnZXMgfHwgW10pLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtY20tcm9sZS1iYWRnZXMgbWNtLW1vZGFsLWJhZGdlcyc+XG4gICAgICAgICAgICAgICAgICAgIHtyb2xlLmJhZGdlcy5tYXAoKGIpID0+IDxCYWRnZSBrZXk9e2J9IHR5cGU9e2J9IC8+KX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbWNtLW1vZGFsLWJsdXJiJz57cm9sZS5ibHVyYn08L3A+XG5cbiAgICAgICAgICAgIHsocm9sZS5wZW9wbGUgfHwgW10pLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgICAgIDxQZXJzb25DaGlwcyBjb250ZW50PXt0b0NoaXBzKHJvbGUucGVvcGxlLCB0cnVlKX0gYWNjZW50PXtyb2xlLmFjY2VudH0gLz5cbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIHsocm9sZS5jb21taXR0ZWVzIHx8IFtdKS5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWNtLXJvbGUtY29tbWl0dGVlcyBtY20tbW9kYWwtY29tbWl0dGVlcyc+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nbWNtLXJvbGUtY29tbWl0dGVlcy1sYWJlbCc+Q29tbWl0dGVlczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21jbS1jb21taXR0ZWUtbGlzdCc+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cm9sZS5jb21taXR0ZWVzLm1hcCgoYykgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGtleT17Y30gaHJlZj17Y29tbWl0dGVlSHJlZihjKX0gY2xhc3NOYW1lPSdtY20tY29tbWl0dGVlLWNoaXAnPntjfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7cm9sZS5saW5rID8gPGEgaHJlZj17cm9sZS5saW5rLmhyZWZ9IGNsYXNzTmFtZT0nbWNtLXJvbGUtbGluaycgb25DbGljaz17b25DbG9zZX0+e3JvbGUubGluay5sYWJlbH08L2E+IDogbnVsbH1cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4pO1xuXG5jb25zdCBNY01pbmlzdHJ5UGFnZSA9ICgpID0+IHtcbiAgICBjb25zdCB7IHJvd3MsIGlzTG9hZGluZyB9ID0gdXNlU3VwYWJhc2VUYWJsZSgnbWNtaW5pc3RyeScpO1xuICAgIGNvbnN0IHsgcm93czogY29tbWl0dGVlcyB9ID0gdXNlU3VwYWJhc2VUYWJsZSgnY29tbWl0dGVlcycpO1xuICAgIGNvbnN0IHsgcm93czogY291cnQgfSA9IHVzZVN1cGFiYXNlVGFibGUoJ21jY291cnQnKTtcblxuICAgIGNvbnN0IFtzZWxlY3RlZFJvbGUsIHNldFNlbGVjdGVkUm9sZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbY2xvc2luZ1JvbGUsIHNldENsb3NpbmdSb2xlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IHBjUm93cyA9IHJvd3MuZmlsdGVyKChyKSA9PiByLnRhYiA9PT0gXCJQZW9wbGUncyBDb3VuY2lsXCIpO1xuICAgIGNvbnN0IGVjUm93cyA9IHJvd3MuZmlsdGVyKChyKSA9PiByLnRhYiAhPT0gXCJQZW9wbGUncyBDb3VuY2lsXCIpO1xuXG4gICAgY29uc3QgcHJlc2lkZW50ID0gZWNSb3dzLmZpbHRlcigocikgPT4gL14obWMpP3ByZXNpZGVudC8udGVzdChsYyhyKSkpO1xuICAgIGNvbnN0IHRyZWFzdXJlcnMgPSBlY1Jvd3MuZmlsdGVyKChyKSA9PiBUUkVBU1VSRVJTLm1hdGNoKGxjKHIpKSk7XG4gICAgY29uc3QgY2hpZWZKdXN0aWNlID0gY291cnQuZmlsdGVyKChyKSA9PiBsYyhyKS5pbmNsdWRlcygnY2hpZWYganVzdGljZScpKTtcblxuICAgIGNvbnN0IGNvbW1pdHRlZXNCeURpdmlzaW9uID0gY29tbWl0dGVlcy5yZWR1Y2UoKGFjYywgYykgPT4ge1xuICAgICAgICAoYWNjW2MuZGl2aXNpb25dID0gYWNjW2MuZGl2aXNpb25dIHx8IFtdKS5wdXNoKGMubmFtZSk7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30pO1xuXG4gICAgY29uc3QgdG9wQ2FyZHMgPSBbXG4gICAgICAgIHRyZWFzdXJlcnMubGVuZ3RoID4gMCA/IHsgLi4uVFJFQVNVUkVSUywgcGVvcGxlOiB0cmVhc3VyZXJzIH0gOiBudWxsLFxuICAgICAgICBwcmVzaWRlbnQubGVuZ3RoID4gMFxuICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdNY1ByZXNpZGVudCcsXG4gICAgICAgICAgICAgICAgYmFkZ2VzOiBbJ2tleScsICdwY2FyZCddLFxuICAgICAgICAgICAgICAgIGJsdXJiOiAnTGVhZGVyIG9mIHRoZSBFeGVjdXRpdmUgQ291bmNpbCwgc3RlZXJpbmcgTWNNdXJ0cnnigJlzIHllYXJseSBvcGVyYXRpb25zLCBsb25nLXRlcm0gZ29hbHMsIGFuZCBpbml0aWF0aXZlcy4nLFxuICAgICAgICAgICAgICAgIHBlb3BsZTogcHJlc2lkZW50LFxuICAgICAgICAgICAgICAgIGFjY2VudDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBwcmltYXJ5OiB0cnVlLFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgOiBudWxsLFxuICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ0NoaWVmIEp1c3RpY2UnLFxuICAgICAgICAgICAgYmx1cmI6ICdDcml0aWNhbCBhdXRob3JpdHkgb24gd2VsbGJlaW5nLCBjb25kdWN0LCBhbmQgYWxjb2hvbCBwb2xpY2llcyBjb2xsZWdlLXdpZGUsIGxlYWRpbmcgdGhlIGNvdXJ0IG9mIEFzc29jaWF0ZSBKdXN0aWNlcy4nLFxuICAgICAgICAgICAgcGVvcGxlOiBjaGllZkp1c3RpY2UsXG4gICAgICAgICAgICBsaW5rOiB7IGhyZWY6ICcvZ292ZXJubWVudC9jb3VydCcsIGxhYmVsOiAnTWVldCBNY0NvdXJ0IOKGkicgfSxcbiAgICAgICAgfSxcbiAgICBdLmZpbHRlcihCb29sZWFuKTtcblxuICAgIGNvbnN0IGRpdmlzaW9uQ2FyZHMgPSBESVZJU0lPTl9ST0xFUy5tYXAoKHJvbGUpID0+ICh7XG4gICAgICAgIC4uLnJvbGUsXG4gICAgICAgIGFjY2VudDogdHJ1ZSxcbiAgICAgICAgcGVvcGxlOiBlY1Jvd3MuZmlsdGVyKChyKSA9PiByb2xlLm1hdGNoKGxjKHIpKSksXG4gICAgICAgIGNvbW1pdHRlZXM6IGNvbW1pdHRlZXNCeURpdmlzaW9uW3JvbGUuY29tbWl0dGVlRGl2aXNpb25dIHx8IFtdLFxuICAgIH0pKTtcblxuICAgIGNvbnN0IGJvdHRvbUNhcmRzID0gQk9UVE9NX1JPTEVTXG4gICAgICAgIC5tYXAoKHJvbGUpID0+ICh7IC4uLnJvbGUsIHBlb3BsZTogZWNSb3dzLmZpbHRlcigocikgPT4gcm9sZS5tYXRjaChsYyhyKSkpIH0pKVxuICAgICAgICAuZmlsdGVyKChyb2xlKSA9PiByb2xlLnBlb3BsZS5sZW5ndGggPiAwKTtcblxuICAgIGNvbnN0IHBjTGVhZCA9IHBjUm93cy5maWx0ZXIoKHIpID0+IGxjKHIpLmluY2x1ZGVzKCdhdC1sYXJnZScpKTtcbiAgICBjb25zdCBpc09mZkNhbXB1cyA9IChyKSA9PiBsYyhyKS5pbmNsdWRlcygnb2ZmIGNhbXB1cycpIHx8IGxjKHIpLmluY2x1ZGVzKCdvZmYtY2FtcHVzJyk7XG4gICAgY29uc3QgcGNHcm91cGVkID0gUENfR1JPVVBTXG4gICAgICAgIC5tYXAoKGcpID0+ICh7XG4gICAgICAgICAgICAuLi5nLFxuICAgICAgICAgICAgLy8gc3RhYmxlIHNvcnQ6IG9mZi1jYW1wdXMgcmVwcyBzaW5rIGJlbG93IHRoZSBjbGFzcy15ZWFyIHJlcHNcbiAgICAgICAgICAgIHBlb3BsZTogcGNSb3dzXG4gICAgICAgICAgICAgICAgLmZpbHRlcigocikgPT4gZy5tYXRjaChsYyhyKSkpXG4gICAgICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IChpc09mZkNhbXB1cyhhKSA/IDEgOiAwKSAtIChpc09mZkNhbXB1cyhiKSA/IDEgOiAwKSksXG4gICAgICAgIH0pKVxuICAgICAgICAuZmlsdGVyKChnKSA9PiBnLnBlb3BsZS5sZW5ndGggPiAwKTtcbiAgICBjb25zdCBwY090aGVyID0gcGNSb3dzLmZpbHRlcihcbiAgICAgICAgKHIpID0+ICFsYyhyKS5pbmNsdWRlcygnYXQtbGFyZ2UnKSAmJiAhUENfR1JPVVBTLnNvbWUoKGcpID0+IGcubWF0Y2gobGMocikpKVxuICAgICk7XG5cbiAgICAvLyB0aGUgbW9kYWwgaXMgYSBtb2JpbGUgYWZmb3JkYW5jZTogb24gZGVza3RvcCB0aGUgY2FyZHMgYWxyZWFkeSBzaG93XG4gICAgLy8gZXZlcnl0aGluZywgc28gY2xpY2tzIGRvIG5vdGhpbmcgdGhlcmVcbiAgICBjb25zdCBvcGVuUm9sZSA9IChyb2xlKSA9PiB7XG4gICAgICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogNjQwcHgpJykubWF0Y2hlcykgc2V0U2VsZWN0ZWRSb2xlKHJvbGUpO1xuICAgIH07XG5cbiAgICAvLyBwbGF5IHRoZSByZXZlcnNlIGFuaW1hdGlvbiwgdGhlbiB1bm1vdW50XG4gICAgY29uc3QgY2xvc2VSb2xlID0gKCkgPT4ge1xuICAgICAgICBpZiAoY2xvc2luZ1JvbGUpIHJldHVybjtcbiAgICAgICAgc2V0Q2xvc2luZ1JvbGUodHJ1ZSk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgc2V0U2VsZWN0ZWRSb2xlKG51bGwpO1xuICAgICAgICAgICAgc2V0Q2xvc2luZ1JvbGUoZmFsc2UpO1xuICAgICAgICB9LCAyMjApO1xuICAgIH07XG5cbiAgICAvLyBsb2NrIHBhZ2Ugc2Nyb2xsIGFuZCBjbG9zZSBvbiBFc2NhcGUgd2hpbGUgdGhlIG1vZGFsIGlzIG9wZW5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoIXNlbGVjdGVkUm9sZSkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgY29uc3QgcHJldk92ZXJmbG93ID0gZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdztcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgICAgICBjb25zdCBvbktleSA9IChlKSA9PiB7IGlmIChlLmtleSA9PT0gJ0VzY2FwZScpIGNsb3NlUm9sZSgpOyB9O1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uS2V5KTtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBwcmV2T3ZlcmZsb3c7XG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uS2V5KTtcbiAgICAgICAgfTtcbiAgICB9LCBbc2VsZWN0ZWRSb2xlLCBjbG9zaW5nUm9sZV0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BhZ2UgcGFnZS1saWdodCBwYWdlLXdpdGgtc3RhZ2dlcmVkLW1lbnUnPlxuICAgICAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICAgICAgPFNpdGVOYXZiYXIgLz5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21jbWluaXN0cnktcGFnZSc+XG4gICAgICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9J2V2LWhlcm8nPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz0nL3N0YXRpYy9pY29ucy9hYm91dC1zd29vc2guc3ZnJyBhbHQ9JycgY2xhc3NOYW1lPSdldi1oZXJvLXN3b29zaCcgYXJpYS1oaWRkZW49J3RydWUnIC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPScvc3RhdGljL2ljb25zL2VsbGlwc2UtbGFyZ2Uuc3ZnJyBhbHQ9JycgY2xhc3NOYW1lPSdldi1oZXJvLWVsbGlwc2UtbGFyZ2UnIGFyaWEtaGlkZGVuPSd0cnVlJyAvPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz0nL3N0YXRpYy9pY29ucy9lbGxpcHNlLXNtYWxsLnN2ZycgYWx0PScnIGNsYXNzTmFtZT0nZXYtaGVyby1lbGxpcHNlLXNtYWxsJyBhcmlhLWhpZGRlbj0ndHJ1ZScgLz5cbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0nZXYtaGVyby1oZWFkaW5nJz5NY01pbmlzdHJ5PC9oMT5cbiAgICAgICAgICAgICAgICA8L2hlYWRlcj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtY20taW50cm8nPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J21jbS1pbnRyby10ZXh0Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgIE1jTXVydHJ5JnJzcXVvO3MgZ292ZXJubWVudCBpcyBtYWRlIHVwIG9mIHRoZSA8c3Ryb25nPkV4ZWN1dGl2ZSBDb3VuY2lsPC9zdHJvbmc+IGFuZFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhlIDxzdHJvbmc+UGVvcGxlJnJzcXVvO3MgQ291bmNpbDwvc3Ryb25nPi4gVGhlIGNoYXJ0IGJlbG93IHNob3dzIHRoZSBoaWVyYXJjaHkgb2ZcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNpYmlsaXR5IGF0IHRoZSBjb2xsZWdlOiB3aG8gbGVhZHMgd2hhdCwgYW5kIHdoaWNoIGNvbW1pdHRlZXMgbGl2ZSB1bmRlclxuICAgICAgICAgICAgICAgICAgICAgICAgZWFjaCBkaXZpc2lvbi5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWNtLWxlZ2VuZCc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWNtLWxlZ2VuZC1yb3cnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYWRnZSB0eXBlPSdrZXknIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdtY20tbGVnZW5kLWhpbnQnPm92ZXJzZWVzIGNvbW1pdHRlZXMgYW5kIHRoZSBjb21taXR0ZWUgY2xvc2V0PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWNtLWxlZ2VuZC1yb3cnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYWRnZSB0eXBlPSdwY2FyZCcgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J21jbS1sZWdlbmQtaGludCc+bWFrZXMgcHVyY2hhc2VzIG9uIGJlaGFsZiBvZiB0aGUgY29sbGVnZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIHtpc0xvYWRpbmcgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsb2FkaW5nLWNvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbG9hZGluZy1zcGlubmVyJz48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbG9hZGluZy10ZXh0Jz5Mb2FkaW5nLi4uPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmFkZS1pbic+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdkaXZpc2lvbi10aXRsZSc+RXhlY3V0aXZlIENvdW5jaWw8L2gyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWNtLWNoYXJ0Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWNtLXRpZXIgbWNtLXRpZXItdG9wJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRpZXJMYWJlbD5MZWdpc2xhdGl2ZTwvVGllckxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dG9wQ2FyZHMubWFwKChyb2xlKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um9sZUNhcmQga2V5PXtyb2xlLnRpdGxlfSByb2xlPXtyb2xlfSBvblNlbGVjdD17b3BlblJvbGV9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21jbS1jb25uZWN0b3InIGFyaWEtaGlkZGVuPSd0cnVlJyAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21jbS10aWVyIG1jbS10aWVyLWRpdmlzaW9ucyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUaWVyTGFiZWw+VmljZSBQcmVzaWRlbnRzPC9UaWVyTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkaXZpc2lvbkNhcmRzLm1hcCgocm9sZSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvbGVDYXJkIGtleT17cm9sZS50aXRsZX0gcm9sZT17cm9sZX0gb25TZWxlY3Q9e29wZW5Sb2xlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtib3R0b21DYXJkcy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21jbS1jb25uZWN0b3InIGFyaWEtaGlkZGVuPSd0cnVlJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21jbS10aWVyIG1jbS10aWVyLWJvdHRvbSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRpZXJMYWJlbD5BZG1pbmlzdHJhdGlvbjwvVGllckxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtib3R0b21DYXJkcy5tYXAoKHJvbGUpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvbGVDYXJkIGtleT17cm9sZS50aXRsZX0gcm9sZT17cm9sZX0gb25TZWxlY3Q9e29wZW5Sb2xlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdkaXZpc2lvbi10aXRsZSBtY20tcGMtdGl0bGUnIGlkPSdwZW9wbGVzLWNvdW5jaWwnPlBlb3BsZSZyc3F1bztzIENvdW5jaWw8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21jbS1pbnRybyBtY20taW50cm8tdGlnaHQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbWNtLWludHJvLXRleHQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFdmVyeSBmbG9vciwgY2xhc3MsIGFuZCBvZmYtY2FtcHVzIE11cnQgZ2V0cyBhIHZvaWNlIChhbmQgYSB2b3RlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVkIGJ5IHRoZSBBdC1MYXJnZSBSZXByZXNlbnRhdGl2ZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAge3BjTGVhZC5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWNtLXBjLWxlYWQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGVyc29uQ2hpcHMgY29udGVudD17dG9DaGlwcyhwY0xlYWQsIHRydWUpfSBhY2NlbnQgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtY20tcGMtZ3JvdXBzJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGNHcm91cGVkLm1hcCgoZykgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBrZXk9e2cudGl0bGV9IGNsYXNzTmFtZT0nbWNtLXBjLWdyb3VwJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9J21jbS1wYy1ncm91cC10aXRsZSc+e2cudGl0bGV9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQZXJzb25DaGlwcyBjb250ZW50PXt0b0NoaXBzKGcucGVvcGxlLCB0cnVlKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwY090aGVyLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J21jbS1wYy1ncm91cCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPSdtY20tcGMtZ3JvdXAtdGl0bGUnPk1vcmUgUmVwcmVzZW50YXRpdmVzPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQZXJzb25DaGlwcyBjb250ZW50PXt0b0NoaXBzKHBjT3RoZXIsIHRydWUpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAge3NlbGVjdGVkUm9sZSA/IChcbiAgICAgICAgICAgICAgICAgICAgPFJvbGVNb2RhbCByb2xlPXtzZWxlY3RlZFJvbGV9IGNsb3Npbmc9e2Nsb3NpbmdSb2xlfSBvbkNsb3NlPXtjbG9zZVJvbGV9IC8+XG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPFNpdGVGb290ZXIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1jTWluaXN0cnlQYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==