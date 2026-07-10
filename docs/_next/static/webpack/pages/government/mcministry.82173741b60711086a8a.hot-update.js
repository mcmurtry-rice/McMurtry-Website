webpackHotUpdate_N_E("pages/government/mcministry",{

/***/ "./components/navbar/Navbar.js":
/*!*************************************!*\
  !*** ./components/navbar/Navbar.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Navbar_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navbar.css */ "./components/navbar/Navbar.css");
/* harmony import */ var _Navbar_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Navbar_css__WEBPACK_IMPORTED_MODULE_2__);
var _this = undefined,
  _jsxFileName = "C:\\Users\\anton\\Documents\\Projects\\MurtWebsite\\components\\navbar\\Navbar.js",
  _s = $RefreshSig$();
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var navbar_headers = [{
  "name": "Home",
  "subheaders": [{
    "name": "McMurtry",
    "to": "/home/index"
  }, {
    "name": "About",
    "to": "/home/about"
  }, {
    "name": "Calendar",
    "to": "/home/calendar"
  }]
}, {
  "name": "Government",
  "subheaders": [{
    "name": "McMinistry",
    "to": "/government/mcministry"
  }, {
    "name": "Committees",
    "to": "/government/committees"
  }, {
    "name": "McCourt",
    "to": "/government/court"
  }]
}, {
  "name": "People",
  "subheaders": [{
    "name": "McTeam",
    "to": "/people/mcteam"
  }, {
    "name": "RHAs",
    "to": "/people/RHAs"
  }, {
    "name": "Associates",
    "to": "/people/associates"
  }, {
    "name": "Head Caregivers",
    "to": "/people/headcaregivers"
  }, {
    "name": "Affinity Groups",
    "to": "/people/mcmurtryaffinitygroups"
  }, {
    "name": "Peer Academic Advisors",
    "to": "/people/paas"
  }, {
    "name": "Academic Fellows",
    "to": "/people/academicfellows"
  }, {
    "name": "Divisional Advisors",
    "to": "/people/divisionaladvisors"
  }, {
    "name": "SMR",
    "to": "/people/SMR"
  }]
}, {
  "name": "Resources",
  "subheaders": [{
    "name": "Room Reservations",
    "to": "/resources/room-reservations"
  }, {
    "name": "P-Card Requests",
    "to": "/resources/pcard-requests"
  }, {
    "name": "McItems Check Out",
    "to": "/resources/mcitems-checkout"
  }, {
    "name": "McMakerspace",
    "to": "/resources/mcmakerspace"
  }, {
    "name": "McLegislation",
    "to": "/resources/mclegislation"
  }, {
    "name": "McFUNd Requests",
    "to": "/resources/mcfund-requests"
  }, {
    "name": "Budget Sheet",
    "to": "https://docs.google.com/spreadsheets/d/1imNFy7cyadxieh7JPcPRvMzB-LgMHozNkRzUX_Lwp1A/edit?usp=sharing"
  }, {
    "name": "Financial Inclusivity",
    "to": "/resources/financial-inclusivity"
  }]
}, {
  "name": "O-Weeks",
  "subheaders": [{
    "name": "2026",
    "to": "/oweek/2026"
  }, {
    "name": "2025",
    "to": "/oweek/2025"
  }, {
    "name": "2024",
    "to": "/oweek/2024"
  }, {
    "name": "2023",
    "to": "/oweek/2023"
  }]
}];
var SiteNavbar = function SiteNavbar() {
  _s();
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    menuOpen = _useState[0],
    setMenuOpen = _useState[1];
  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
    openDropdown = _useState2[0],
    setOpenDropdown = _useState2[1]; // top-level item name
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
    openMobileSection = _useState3[0],
    setOpenMobileSection = _useState3[1];

  // Lock body scroll while the mobile drawer is open
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (typeof document === 'undefined') return;
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return function () {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);
  var closeAll = function closeAll() {
    setMenuOpen(false);
    setOpenDropdown(null);
    setOpenMobileSection(null);
  };
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }
  }, __jsx("header", {
    className: "mc-navbar",
    role: "banner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/home/index",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "mc-navbar-brand",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/static/logos/hero-crest.png",
    alt: "",
    className: "mc-navbar-crest",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 25
    }
  }), __jsx("span", {
    className: "mc-navbar-wordmark",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 25
    }
  }, "McMurtry College"))), __jsx("nav", {
    className: "mc-navbar-links",
    "aria-label": "Main",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 17
    }
  }, navbar_headers.map(function (header) {
    var hasDropdown = header.subheaders && header.subheaders.length > 0;
    if (!hasDropdown) {
      return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: header.to || '#',
        key: header.name,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 33
        }
      }, __jsx("a", {
        className: "mc-navbar-link",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 37
        }
      }, header.name));
    }
    return __jsx("div", {
      key: header.name,
      className: "mc-navbar-item",
      onMouseEnter: function onMouseEnter() {
        return setOpenDropdown(header.name);
      },
      onMouseLeave: function onMouseLeave() {
        return setOpenDropdown(null);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 29
      }
    }, __jsx("button", {
      type: "button",
      className: "mc-navbar-link mc-navbar-trigger",
      "aria-expanded": openDropdown === header.name,
      "aria-haspopup": "menu",
      onClick: function onClick() {
        return setOpenDropdown(openDropdown === header.name ? null : header.name);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 33
      }
    }, header.name, __jsx("span", {
      className: "mc-navbar-caret" + (openDropdown === header.name ? " mc-navbar-caret-open" : ""),
      "aria-hidden": "true",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 29
      }
    })), __jsx("div", {
      className: 'mc-navbar-dropdown' + (openDropdown === header.name ? ' mc-navbar-dropdown-open' : ''),
      role: "menu",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 33
      }
    }, header.subheaders.map(function (sub) {
      // Nested submenu &rdquo;” `children` array, no `to`.
      if (sub.children && sub.children.length > 0) {
        return __jsx("div", {
          key: sub.name,
          className: "mc-navbar-dropdown-link mc-navbar-submenu",
          role: "menuitem",
          "aria-haspopup": "menu",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 49
          }
        }, __jsx("span", {
          className: "mc-navbar-submenu-label",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 53
          }
        }, __jsx("span", {
          className: "mc-navbar-submenu-caret",
          "aria-hidden": "true",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 53
          }
        }), sub.name), __jsx("div", {
          className: "mc-navbar-submenu-panel",
          role: "menu",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 53
          }
        }, sub.children.map(function (leaf) {
          var leafExt = leaf.to && leaf.to.startsWith('http');
          return leafExt ? __jsx("a", {
            key: leaf.name,
            href: leaf.to,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "mc-navbar-dropdown-link",
            role: "menuitem",
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 156,
              columnNumber: 65
            }
          }, leaf.name) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
            href: leaf.to,
            key: leaf.name,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 167,
              columnNumber: 65
            }
          }, __jsx("a", {
            className: "mc-navbar-dropdown-link",
            role: "menuitem",
            onClick: function onClick() {
              return setOpenDropdown(null);
            },
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 168,
              columnNumber: 69
            }
          }, leaf.name));
        })));
      }
      var external = sub.to && sub.to.startsWith('http');
      if (external) {
        return __jsx("a", {
          key: sub.name,
          href: sub.to,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "mc-navbar-dropdown-link",
          role: "menuitem",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 185,
            columnNumber: 49
          }
        }, sub.name);
      }
      return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: sub.to,
        key: sub.name,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198,
          columnNumber: 45
        }
      }, __jsx("a", {
        className: "mc-navbar-dropdown-link",
        role: "menuitem",
        onClick: function onClick() {
          return setOpenDropdown(null);
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199,
          columnNumber: 49
        }
      }, sub.name));
    })));
  })), __jsx("button", {
    type: "button",
    className: "mc-navbar-hamburger",
    "aria-label": menuOpen ? 'Close menu' : 'Open menu',
    "aria-expanded": menuOpen,
    "aria-controls": "mc-mobile-drawer",
    onClick: function onClick() {
      return setMenuOpen(true);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: "mc-hamburger-line",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 21
    }
  }), __jsx("span", {
    className: "mc-hamburger-line",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 21
    }
  }), __jsx("span", {
    className: "mc-hamburger-line",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 21
    }
  }))), __jsx("div", {
    className: 'mc-mobile-scrim' + (menuOpen ? ' mc-mobile-scrim-open' : ''),
    onClick: closeAll,
    "aria-hidden": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 13
    }
  }), __jsx("aside", {
    id: "mc-mobile-drawer",
    className: 'mc-mobile-drawer' + (menuOpen ? ' mc-mobile-drawer-open' : ''),
    "aria-hidden": !menuOpen,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 13
    }
  }, __jsx("button", {
    type: "button",
    className: "mc-mobile-drawer-close",
    "aria-label": "Close menu",
    onClick: closeAll,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 17
    }
  }), __jsx("nav", {
    className: "mc-mobile-drawer-links",
    "aria-label": "Mobile",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 17
    }
  }, navbar_headers.map(function (header) {
    var hasDropdown = header.subheaders && header.subheaders.length > 0;
    var isOpen = openMobileSection === header.name;
    if (!hasDropdown) {
      return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: header.to || '#',
        key: header.name,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251,
          columnNumber: 33
        }
      }, __jsx("a", {
        className: "mc-mobile-drawer-link",
        onClick: closeAll,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252,
          columnNumber: 37
        }
      }, header.name));
    }
    return __jsx("div", {
      key: header.name,
      className: "mc-mobile-drawer-section",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 259,
        columnNumber: 29
      }
    }, __jsx("button", {
      type: "button",
      className: "mc-mobile-drawer-link mc-mobile-drawer-trigger",
      "aria-expanded": isOpen,
      onClick: function onClick() {
        return setOpenMobileSection(isOpen ? null : header.name);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 260,
        columnNumber: 33
      }
    }, header.name, __jsx("span", {
      className: "mc-mobile-drawer-caret" + (isOpen ? " mc-mobile-drawer-caret-open" : ""),
      "aria-hidden": "true",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 269,
        columnNumber: 37
      }
    })), __jsx("div", {
      className: 'mc-mobile-drawer-sublinks' + (isOpen ? ' mc-mobile-drawer-sublinks-open' : ''),
      "aria-hidden": !isOpen,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 278,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: "mc-mobile-drawer-sublinks-inner",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 285,
        columnNumber: 37
      }
    }, header.subheaders.map(function (sub) {
      // Nested group on mobile: render a small section
      // header followed by its indented children.
      if (sub.children && sub.children.length > 0) {
        return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
          key: sub.name,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 291,
            columnNumber: 49
          }
        }, __jsx("div", {
          className: "mc-mobile-drawer-subsection",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 292,
            columnNumber: 53
          }
        }, sub.name), sub.children.map(function (leaf) {
          var leafExt = leaf.to && leaf.to.startsWith('http');
          return leafExt ? __jsx("a", {
            key: leaf.name,
            href: leaf.to,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "mc-mobile-drawer-sublink mc-mobile-drawer-sublink-nested",
            tabIndex: isOpen ? 0 : -1,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 298,
              columnNumber: 61
            }
          }, leaf.name) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
            href: leaf.to,
            key: leaf.name,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 309,
              columnNumber: 61
            }
          }, __jsx("a", {
            className: "mc-mobile-drawer-sublink mc-mobile-drawer-sublink-nested",
            onClick: closeAll,
            tabIndex: isOpen ? 0 : -1,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 310,
              columnNumber: 65
            }
          }, leaf.name));
        }));
      }
      var external = sub.to && sub.to.startsWith('http');
      if (external) {
        return __jsx("a", {
          key: sub.name,
          href: sub.to,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "mc-mobile-drawer-sublink",
          tabIndex: isOpen ? 0 : -1,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 327,
            columnNumber: 49
          }
        }, sub.name);
      }
      return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: sub.to,
        key: sub.name,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 340,
          columnNumber: 45
        }
      }, __jsx("a", {
        className: "mc-mobile-drawer-sublink",
        onClick: closeAll,
        tabIndex: isOpen ? 0 : -1,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 341,
          columnNumber: 49
        }
      }, sub.name));
    }))));
  }))));
};
_s(SiteNavbar, "TGCyv3w0htaRC92ZfW5DSZMLGCM=");
_c = SiteNavbar;
/* harmony default export */ __webpack_exports__["default"] = (SiteNavbar);
var _c;
$RefreshReg$(_c, "SiteNavbar");

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

/***/ }),

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
  }, __jsx("span", {
    className: "mcm-tier-label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 33
    }
  }, "Leadership"), treasurers.length > 0 && __jsx(RoleCard, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, TREASURERS, {
    people: treasurers,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
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
      lineNumber: 234,
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
      lineNumber: 243,
      columnNumber: 33
    }
  })), __jsx("div", {
    className: "mcm-connector",
    "aria-hidden": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 29
    }
  }), __jsx("div", {
    className: "mcm-tier mcm-tier-divisions",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: "mcm-tier-label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 33
    }
  }, "Division Leads"), divisionCards.map(function (role) {
    return __jsx(RoleCard, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: role.title
    }, role, {
      accent: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 256,
        columnNumber: 37
      }
    }));
  })), bottomCards.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "mcm-connector",
    "aria-hidden": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 37
    }
  }), __jsx("div", {
    className: "mcm-tier mcm-tier-bottom",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "mcm-tier-label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 41
    }
  }, "Support Roles"), bottomCards.map(function (role) {
    return __jsx(RoleCard, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: role.title
    }, role, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 266,
        columnNumber: 45
      }
    }));
  })))), __jsx("h2", {
    className: "division-title mcm-pc-title",
    id: "peoples-council",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 25
    }
  }, "People\u2019s Council"), __jsx("div", {
    className: "mcm-intro mcm-intro-tight",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 25
    }
  }, __jsx("p", {
    className: "mcm-intro-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 29
    }
  }, "Every floor, class, and off-campus Murt gets a voice (and a vote), led by the At-Large Representative.")), pcLead.length > 0 && __jsx("div", {
    className: "mcm-pc-lead",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 29
    }
  }, __jsx(_components_PersonChip_PersonChip__WEBPACK_IMPORTED_MODULE_6__["default"], {
    content: toChips(pcLead, true),
    accent: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 33
    }
  })), __jsx("div", {
    className: "mcm-pc-groups",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 25
    }
  }, pcGrouped.map(function (g) {
    return __jsx("section", {
      key: g.title,
      className: "mcm-pc-group",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 289,
        columnNumber: 33
      }
    }, __jsx("h3", {
      className: "mcm-pc-group-title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 290,
        columnNumber: 37
      }
    }, g.title), __jsx(_components_PersonChip_PersonChip__WEBPACK_IMPORTED_MODULE_6__["default"], {
      content: toChips(g.people, true),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 291,
        columnNumber: 37
      }
    }));
  }), pcOther.length > 0 && __jsx("section", {
    className: "mcm-pc-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 33
    }
  }, __jsx("h3", {
    className: "mcm-pc-group-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 37
    }
  }, "More Representatives"), __jsx(_components_PersonChip_PersonChip__WEBPACK_IMPORTED_MODULE_6__["default"], {
    content: toChips(pcOther, true),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 37
    }
  }))))), __jsx(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXIvTmF2YmFyLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9nb3Zlcm5tZW50L21jbWluaXN0cnkvaW5kZXguanMiXSwibmFtZXMiOlsibmF2YmFyX2hlYWRlcnMiLCJTaXRlTmF2YmFyIiwiX3MiLCJfdXNlU3RhdGUiLCJ1c2VTdGF0ZSIsIm1lbnVPcGVuIiwic2V0TWVudU9wZW4iLCJfdXNlU3RhdGUyIiwib3BlbkRyb3Bkb3duIiwic2V0T3BlbkRyb3Bkb3duIiwiX3VzZVN0YXRlMyIsIm9wZW5Nb2JpbGVTZWN0aW9uIiwic2V0T3Blbk1vYmlsZVNlY3Rpb24iLCJ1c2VFZmZlY3QiLCJkb2N1bWVudCIsImJvZHkiLCJzdHlsZSIsIm92ZXJmbG93IiwiY2xvc2VBbGwiLCJfX2pzeCIsIlJlYWN0IiwiRnJhZ21lbnQiLCJfX3NlbGYiLCJfdGhpcyIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiY2xhc3NOYW1lIiwicm9sZSIsIkxpbmsiLCJocmVmIiwic3JjIiwiYWx0IiwibWFwIiwiaGVhZGVyIiwiaGFzRHJvcGRvd24iLCJzdWJoZWFkZXJzIiwibGVuZ3RoIiwidG8iLCJrZXkiLCJuYW1lIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwidHlwZSIsIm9uQ2xpY2siLCJzdWIiLCJjaGlsZHJlbiIsImxlYWYiLCJsZWFmRXh0Iiwic3RhcnRzV2l0aCIsInRhcmdldCIsInJlbCIsImV4dGVybmFsIiwiaWQiLCJpc09wZW4iLCJ0YWJJbmRleCIsIl9jIiwiJFJlZnJlc2hSZWckIiwibGMiLCJyIiwicG9zaXRpb24iLCJ0b0xvd2VyQ2FzZSIsIlRSRUFTVVJFUlMiLCJ0aXRsZSIsImJhZGdlcyIsImJsdXJiIiwibWF0Y2giLCJwIiwiaW5jbHVkZXMiLCJzaG93UG9zaXRpb25zIiwiQk9UVE9NX1JPTEVTIiwiRElWSVNJT05fUk9MRVMiLCJjb21taXR0ZWVEaXZpc2lvbiIsInN1YnRpdGxlIiwibGluayIsImxhYmVsIiwiUENfR1JPVVBTIiwiY29tbWl0dGVlSHJlZiIsImNvbmNhdCIsImVuY29kZVVSSUNvbXBvbmVudCIsIkJhZGdlIiwiX3JlZiIsInRvQ2hpcHMiLCJyb3dzIiwiX3JlZjIiLCJlbWFpbCIsInVuZGVmaW5lZCIsIlJvbGVDYXJkIiwiX3JlZjMiLCJfcmVmMyRiYWRnZXMiLCJfcmVmMyRwZW9wbGUiLCJwZW9wbGUiLCJfcmVmMyRjb21taXR0ZWVzIiwiY29tbWl0dGVlcyIsImFjY2VudCIsInByaW1hcnkiLCJiIiwiUGVyc29uQ2hpcHMiLCJjb250ZW50IiwiYyIsIl9jMiIsIk1jTWluaXN0cnlQYWdlIiwiX3VzZVN1cGFiYXNlVGFibGUiLCJ1c2VTdXBhYmFzZVRhYmxlIiwiaXNMb2FkaW5nIiwiX3VzZVN1cGFiYXNlVGFibGUyIiwiX3VzZVN1cGFiYXNlVGFibGUzIiwiY291cnQiLCJwY1Jvd3MiLCJmaWx0ZXIiLCJ0YWIiLCJlY1Jvd3MiLCJwcmVzaWRlbnQiLCJ0ZXN0IiwidHJlYXN1cmVycyIsImNoaWVmSnVzdGljZSIsImNvbW1pdHRlZXNCeURpdmlzaW9uIiwicmVkdWNlIiwiYWNjIiwiZGl2aXNpb24iLCJwdXNoIiwiZGl2aXNpb25DYXJkcyIsIl9vYmplY3RTcHJlYWQiLCJib3R0b21DYXJkcyIsInBjTGVhZCIsImlzT2ZmQ2FtcHVzIiwicGNHcm91cGVkIiwiZyIsInNvcnQiLCJhIiwicGNPdGhlciIsInNvbWUiLCJIZWFkZXIiLCJfZXh0ZW5kcyIsIlNpdGVGb290ZXIiLCJfYzMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUN0QjtBQUNQO0FBRXRCLElBQU1BLGNBQWMsR0FBRyxDQUNuQjtFQUNJLE1BQU0sRUFBRSxNQUFNO0VBQ2QsWUFBWSxFQUFFLENBQ1Y7SUFBRSxNQUFNLEVBQUUsVUFBVTtJQUFFLElBQUksRUFBRTtFQUFjLENBQUMsRUFDM0M7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QUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSx5QkFBeUIsQ0FBQyxFQUM1RFQsS0FBQSxDQUFDZ0YseUVBQVc7SUFBQ0MsT0FBTyxFQUFFaEIsT0FBTyxDQUFDZ0QsT0FBTyxFQUFFLElBQUksQ0FBRTtJQUFBOUcsTUFBQSxFQUFBQyxLQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsQ0FBRSxDQUMxQyxDQUVaLENBQ0osQ0FFUixDQUFDLEVBRU5ULEtBQUEsQ0FBQ3FILGlFQUFVO0lBQUFsSCxNQUFBLEVBQUFDLEtBQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxDQUFFLENBQ1osQ0FBQztBQUVkLENBQUM7QUFBQzFCLEVBQUEsQ0FwS0lxRyxjQUFjO0VBQUEsUUFDWUUsaUZBQWdCLEVBQ2ZBLGlGQUFnQixFQUNyQkEsaUZBQWdCO0FBQUE7QUFBQWdDLEdBQUEsR0FIdENsQyxjQUFjO0FBc0tMQSw2RUFBYyxFQUFDO0FBQUEsSUFBQTdDLEVBQUEsRUFBQTRDLEdBQUEsRUFBQW1DLEdBQUE7QUFBQTlFLFlBQUEsQ0FBQUQsRUFBQTtBQUFBQyxZQUFBLENBQUEyQyxHQUFBO0FBQUEzQyxZQUFBLENBQUE4RSxHQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2dvdmVybm1lbnQvbWNtaW5pc3RyeS44MjE3Mzc0MWI2MDcxMTA4NmE4YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0ICcuL05hdmJhci5jc3MnO1xuXG5jb25zdCBuYXZiYXJfaGVhZGVycyA9IFtcbiAgICB7XG4gICAgICAgIFwibmFtZVwiOiBcIkhvbWVcIixcbiAgICAgICAgXCJzdWJoZWFkZXJzXCI6IFtcbiAgICAgICAgICAgIHsgXCJuYW1lXCI6IFwiTWNNdXJ0cnlcIiwgXCJ0b1wiOiBcIi9ob21lL2luZGV4XCIgfSxcbiAgICAgICAgICAgIHsgXCJuYW1lXCI6IFwiQWJvdXRcIiwgXCJ0b1wiOiBcIi9ob21lL2Fib3V0XCIgfSxcbiAgICAgICAgICAgIHsgXCJuYW1lXCI6IFwiQ2FsZW5kYXJcIiwgXCJ0b1wiOiBcIi9ob21lL2NhbGVuZGFyXCIgfSxcbiAgICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgICBcIm5hbWVcIjogXCJHb3Zlcm5tZW50XCIsXG4gICAgICAgIFwic3ViaGVhZGVyc1wiOiBbXG4gICAgICAgICAgICB7IFwibmFtZVwiOiBcIk1jTWluaXN0cnlcIiwgXCJ0b1wiOiBcIi9nb3Zlcm5tZW50L21jbWluaXN0cnlcIiB9LFxuICAgICAgICAgICAgeyBcIm5hbWVcIjogXCJDb21taXR0ZWVzXCIsIFwidG9cIjogXCIvZ292ZXJubWVudC9jb21taXR0ZWVzXCIgfSxcbiAgICAgICAgICAgIHsgXCJuYW1lXCI6IFwiTWNDb3VydFwiLCBcInRvXCI6IFwiL2dvdmVybm1lbnQvY291cnRcIiB9LFxuICAgICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwibmFtZVwiOiBcIlBlb3BsZVwiLFxuICAgICAgICBcInN1YmhlYWRlcnNcIjogW1xuICAgICAgICAgICAgeyBcIm5hbWVcIjogXCJNY1RlYW1cIiwgXCJ0b1wiOiBcIi9wZW9wbGUvbWN0ZWFtXCIgfSxcbiAgICAgICAgICAgIHsgXCJuYW1lXCI6IFwiUkhBc1wiLCBcInRvXCI6IFwiL3Blb3BsZS9SSEFzXCIgfSxcbiAgICAgICAgICAgIHsgXCJuYW1lXCI6IFwiQXNzb2NpYXRlc1wiLCBcInRvXCI6IFwiL3Blb3BsZS9hc3NvY2lhdGVzXCIgfSxcbiAgICAgICAgICAgIHsgXCJuYW1lXCI6IFwiSGVhZCBDYXJlZ2l2ZXJzXCIsIFwidG9cIjogXCIvcGVvcGxlL2hlYWRjYXJlZ2l2ZXJzXCIgfSxcbiAgICAgICAgICAgIHsgXCJuYW1lXCI6IFwiQWZmaW5pdHkgR3JvdXBzXCIsIFwidG9cIjogXCIvcGVvcGxlL21jbXVydHJ5YWZmaW5pdHlncm91cHNcIiB9LFxuICAgICAgICAgICAgeyBcIm5hbWVcIjogXCJQZWVyIEFjYWRlbWljIEFkdmlzb3JzXCIsIFwidG9cIjogXCIvcGVvcGxlL3BhYXNcIiB9LFxuICAgICAgICAgICAgeyBcIm5hbWVcIjogXCJBY2FkZW1pYyBGZWxsb3dzXCIsIFwidG9cIjogXCIvcGVvcGxlL2FjYWRlbWljZmVsbG93c1wiIH0sXG4gICAgICAgICAgICB7IFwibmFtZVwiOiBcIkRpdmlzaW9uYWwgQWR2aXNvcnNcIiwgXCJ0b1wiOiBcIi9wZW9wbGUvZGl2aXNpb25hbGFkdmlzb3JzXCIgfSxcbiAgICAgICAgICAgIHsgXCJuYW1lXCI6IFwiU01SXCIsIFwidG9cIjogXCIvcGVvcGxlL1NNUlwiIH0sXG4gICAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJuYW1lXCI6IFwiUmVzb3VyY2VzXCIsXG4gICAgICAgIFwic3ViaGVhZGVyc1wiOiBbXG4gICAgICAgICAgICB7IFwibmFtZVwiOiBcIlJvb20gUmVzZXJ2YXRpb25zXCIsIFwidG9cIjogXCIvcmVzb3VyY2VzL3Jvb20tcmVzZXJ2YXRpb25zXCIgfSxcbiAgICAgICAgICAgIHsgXCJuYW1lXCI6IFwiUC1DYXJkIFJlcXVlc3RzXCIsIFwidG9cIjogXCIvcmVzb3VyY2VzL3BjYXJkLXJlcXVlc3RzXCIgfSxcbiAgICAgICAgICAgIHsgXCJuYW1lXCI6IFwiTWNJdGVtcyBDaGVjayBPdXRcIiwgXCJ0b1wiOiBcIi9yZXNvdXJjZXMvbWNpdGVtcy1jaGVja291dFwiIH0sXG4gICAgICAgICAgICB7IFwibmFtZVwiOiBcIk1jTWFrZXJzcGFjZVwiLCBcInRvXCI6IFwiL3Jlc291cmNlcy9tY21ha2Vyc3BhY2VcIiB9LFxuICAgICAgICAgICAgeyBcIm5hbWVcIjogXCJNY0xlZ2lzbGF0aW9uXCIsIFwidG9cIjogXCIvcmVzb3VyY2VzL21jbGVnaXNsYXRpb25cIiB9LFxuICAgICAgICAgICAgeyBcIm5hbWVcIjogXCJNY0ZVTmQgUmVxdWVzdHNcIiwgXCJ0b1wiOiBcIi9yZXNvdXJjZXMvbWNmdW5kLXJlcXVlc3RzXCIgfSxcbiAgICAgICAgICAgIHsgXCJuYW1lXCI6IFwiQnVkZ2V0IFNoZWV0XCIsIFwidG9cIjogXCJodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9zcHJlYWRzaGVldHMvZC8xaW1ORnk3Y3lhZHhpZWg3SlBjUFJ2TXpCLUxnTUhvek5rUnpVWF9Md3AxQS9lZGl0P3VzcD1zaGFyaW5nXCIgfSxcbiAgICAgICAgICAgIHsgXCJuYW1lXCI6IFwiRmluYW5jaWFsIEluY2x1c2l2aXR5XCIsIFwidG9cIjogXCIvcmVzb3VyY2VzL2ZpbmFuY2lhbC1pbmNsdXNpdml0eVwiIH1cbiAgICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgICBcIm5hbWVcIjogXCJPLVdlZWtzXCIsXG4gICAgICAgIFwic3ViaGVhZGVyc1wiOiBbXG4gICAgICAgICAgICB7IFwibmFtZVwiOiBcIjIwMjZcIiwgXCJ0b1wiOiBcIi9vd2Vlay8yMDI2XCIgfSxcbiAgICAgICAgICAgIHsgXCJuYW1lXCI6IFwiMjAyNVwiLCBcInRvXCI6IFwiL293ZWVrLzIwMjVcIiB9LFxuICAgICAgICAgICAgeyBcIm5hbWVcIjogXCIyMDI0XCIsIFwidG9cIjogXCIvb3dlZWsvMjAyNFwiIH0sXG4gICAgICAgICAgICB7IFwibmFtZVwiOiBcIjIwMjNcIiwgXCJ0b1wiOiBcIi9vd2Vlay8yMDIzXCIgfVxuICAgICAgICBdXG4gICAgfVxuXTtcblxuY29uc3QgU2l0ZU5hdmJhciA9ICgpID0+IHtcbiAgICBjb25zdCBbbWVudU9wZW4sIHNldE1lbnVPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbb3BlbkRyb3Bkb3duLCBzZXRPcGVuRHJvcGRvd25dID0gdXNlU3RhdGUobnVsbCk7ICAgLy8gdG9wLWxldmVsIGl0ZW0gbmFtZVxuICAgIGNvbnN0IFtvcGVuTW9iaWxlU2VjdGlvbiwgc2V0T3Blbk1vYmlsZVNlY3Rpb25dID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgICAvLyBMb2NrIGJvZHkgc2Nyb2xsIHdoaWxlIHRoZSBtb2JpbGUgZHJhd2VyIGlzIG9wZW5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykgcmV0dXJuO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gbWVudU9wZW4gPyAnaGlkZGVuJyA6ICcnO1xuICAgICAgICByZXR1cm4gKCkgPT4geyBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJyc7IH07XG4gICAgfSwgW21lbnVPcGVuXSk7XG5cbiAgICBjb25zdCBjbG9zZUFsbCA9ICgpID0+IHtcbiAgICAgICAgc2V0TWVudU9wZW4oZmFsc2UpO1xuICAgICAgICBzZXRPcGVuRHJvcGRvd24obnVsbCk7XG4gICAgICAgIHNldE9wZW5Nb2JpbGVTZWN0aW9uKG51bGwpO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cIm1jLW5hdmJhclwiIHJvbGU9XCJiYW5uZXJcIj5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2hvbWUvaW5kZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibWMtbmF2YmFyLWJyYW5kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL3N0YXRpYy9sb2dvcy9oZXJvLWNyZXN0LnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYy1uYXZiYXItY3Jlc3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1jLW5hdmJhci13b3JkbWFya1wiPk1jTXVydHJ5IENvbGxlZ2U8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm1jLW5hdmJhci1saW5rc1wiIGFyaWEtbGFiZWw9XCJNYWluXCI+XG4gICAgICAgICAgICAgICAgICAgIHtuYXZiYXJfaGVhZGVycy5tYXAoKGhlYWRlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaGFzRHJvcGRvd24gPSBoZWFkZXIuc3ViaGVhZGVycyAmJiBoZWFkZXIuc3ViaGVhZGVycy5sZW5ndGggPiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFoYXNEcm9wZG93bikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2hlYWRlci50byB8fCAnIyd9IGtleT17aGVhZGVyLm5hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibWMtbmF2YmFyLWxpbmtcIj57aGVhZGVyLm5hbWV9PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2hlYWRlci5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYy1uYXZiYXItaXRlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0T3BlbkRyb3Bkb3duKGhlYWRlci5uYW1lKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRPcGVuRHJvcGRvd24obnVsbCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWMtbmF2YmFyLWxpbmsgbWMtbmF2YmFyLXRyaWdnZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9e29wZW5Ecm9wZG93biA9PT0gaGVhZGVyLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD1cIm1lbnVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldE9wZW5Ecm9wZG93bihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5Ecm9wZG93biA9PT0gaGVhZGVyLm5hbWUgPyBudWxsIDogaGVhZGVyLm5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aGVhZGVyLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcIm1jLW5hdmJhci1jYXJldFwiICsgKG9wZW5Ecm9wZG93biA9PT0gaGVhZGVyLm5hbWUgPyBcIiBtYy1uYXZiYXItY2FyZXQtb3BlblwiIDogXCJcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ21jLW5hdmJhci1kcm9wZG93bicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvcGVuRHJvcGRvd24gPT09IGhlYWRlci5uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJyBtYy1uYXZiYXItZHJvcGRvd24tb3BlbidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJtZW51XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2hlYWRlci5zdWJoZWFkZXJzLm1hcCgoc3ViKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTmVzdGVkIHN1Ym1lbnUgJnJkcXVvO+KAnSBgY2hpbGRyZW5gIGFycmF5LCBubyBgdG9gLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdWIuY2hpbGRyZW4gJiYgc3ViLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3N1Yi5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1jLW5hdmJhci1kcm9wZG93bi1saW5rIG1jLW5hdmJhci1zdWJtZW51XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb2xlPVwibWVudWl0ZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGFzcG9wdXA9XCJtZW51XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtYy1uYXZiYXItc3VibWVudS1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1jLW5hdmJhci1zdWJtZW51LWNhcmV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdWIubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYy1uYXZiYXItc3VibWVudS1wYW5lbFwiIHJvbGU9XCJtZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdWIuY2hpbGRyZW4ubWFwKChsZWFmKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsZWFmRXh0ID0gbGVhZi50byAmJiBsZWFmLnRvLnN0YXJ0c1dpdGgoJ2h0dHAnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBsZWFmRXh0ID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17bGVhZi5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtsZWFmLnRvfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWMtbmF2YmFyLWRyb3Bkb3duLWxpbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb2xlPVwibWVudWl0ZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xlYWYubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2xlYWYudG99IGtleT17bGVhZi5uYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1jLW5hdmJhci1kcm9wZG93bi1saW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJtZW51aXRlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuRHJvcGRvd24obnVsbCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsZWFmLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBleHRlcm5hbCA9IHN1Yi50byAmJiBzdWIudG8uc3RhcnRzV2l0aCgnaHR0cCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChleHRlcm5hbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3N1Yi5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e3N1Yi50b31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1jLW5hdmJhci1kcm9wZG93bi1saW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb2xlPVwibWVudWl0ZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdWIubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17c3ViLnRvfSBrZXk9e3N1Yi5uYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWMtbmF2YmFyLWRyb3Bkb3duLWxpbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJtZW51aXRlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0T3BlbkRyb3Bkb3duKG51bGwpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdWIubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L25hdj5cblxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1jLW5hdmJhci1oYW1idXJnZXJcIlxuICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPXttZW51T3BlbiA/ICdDbG9zZSBtZW51JyA6ICdPcGVuIG1lbnUnfVxuICAgICAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPXttZW51T3Blbn1cbiAgICAgICAgICAgICAgICAgICAgYXJpYS1jb250cm9scz1cIm1jLW1vYmlsZS1kcmF3ZXJcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRNZW51T3Blbih0cnVlKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1jLWhhbWJ1cmdlci1saW5lXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWMtaGFtYnVyZ2VyLWxpbmVcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtYy1oYW1idXJnZXItbGluZVwiIC8+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2hlYWRlcj5cblxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17J21jLW1vYmlsZS1zY3JpbScgKyAobWVudU9wZW4gPyAnIG1jLW1vYmlsZS1zY3JpbS1vcGVuJyA6ICcnKX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtjbG9zZUFsbH1cbiAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxhc2lkZVxuICAgICAgICAgICAgICAgIGlkPVwibWMtbW9iaWxlLWRyYXdlclwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsnbWMtbW9iaWxlLWRyYXdlcicgKyAobWVudU9wZW4gPyAnIG1jLW1vYmlsZS1kcmF3ZXItb3BlbicgOiAnJyl9XG4gICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49eyFtZW51T3Blbn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYy1tb2JpbGUtZHJhd2VyLWNsb3NlXCJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkNsb3NlIG1lbnVcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtjbG9zZUFsbH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibWMtbW9iaWxlLWRyYXdlci1saW5rc1wiIGFyaWEtbGFiZWw9XCJNb2JpbGVcIj5cbiAgICAgICAgICAgICAgICAgICAge25hdmJhcl9oZWFkZXJzLm1hcCgoaGVhZGVyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBoYXNEcm9wZG93biA9IGhlYWRlci5zdWJoZWFkZXJzICYmIGhlYWRlci5zdWJoZWFkZXJzLmxlbmd0aCA+IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpc09wZW4gPSBvcGVuTW9iaWxlU2VjdGlvbiA9PT0gaGVhZGVyLm5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWhhc0Ryb3Bkb3duKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17aGVhZGVyLnRvIHx8ICcjJ30ga2V5PXtoZWFkZXIubmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJtYy1tb2JpbGUtZHJhd2VyLWxpbmtcIiBvbkNsaWNrPXtjbG9zZUFsbH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2hlYWRlci5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2hlYWRlci5uYW1lfSBjbGFzc05hbWU9XCJtYy1tb2JpbGUtZHJhd2VyLXNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYy1tb2JpbGUtZHJhd2VyLWxpbmsgbWMtbW9iaWxlLWRyYXdlci10cmlnZ2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9e2lzT3Blbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0T3Blbk1vYmlsZVNlY3Rpb24oaXNPcGVuID8gbnVsbCA6IGhlYWRlci5uYW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aGVhZGVyLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWMtbW9iaWxlLWRyYXdlci1jYXJldFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGlzT3BlbiA/IFwiIG1jLW1vYmlsZS1kcmF3ZXItY2FyZXQtb3BlblwiIDogXCJcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogU3VibGlua3MgYWx3YXlzIG1vdW50ZWQ7IENTUyBhbmltYXRlcyB0aGUgZ3JpZC1yb3cgZnJvbSAwZnIgdG8gMWZyICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdtYy1tb2JpbGUtZHJhd2VyLXN1YmxpbmtzJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGlzT3BlbiA/ICcgbWMtbW9iaWxlLWRyYXdlci1zdWJsaW5rcy1vcGVuJyA6ICcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49eyFpc09wZW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWMtbW9iaWxlLWRyYXdlci1zdWJsaW5rcy1pbm5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2hlYWRlci5zdWJoZWFkZXJzLm1hcCgoc3ViKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTmVzdGVkIGdyb3VwIG9uIG1vYmlsZTogcmVuZGVyIGEgc21hbGwgc2VjdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGhlYWRlciBmb2xsb3dlZCBieSBpdHMgaW5kZW50ZWQgY2hpbGRyZW4uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN1Yi5jaGlsZHJlbiAmJiBzdWIuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17c3ViLm5hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWMtbW9iaWxlLWRyYXdlci1zdWJzZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdWIubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3ViLmNoaWxkcmVuLm1hcCgobGVhZikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsZWFmRXh0ID0gbGVhZi50byAmJiBsZWFmLnRvLnN0YXJ0c1dpdGgoJ2h0dHAnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxlYWZFeHQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17bGVhZi5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2xlYWYudG99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYy1tb2JpbGUtZHJhd2VyLXN1YmxpbmsgbWMtbW9iaWxlLWRyYXdlci1zdWJsaW5rLW5lc3RlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9e2lzT3BlbiA/IDAgOiAtMX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGVhZi5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17bGVhZi50b30ga2V5PXtsZWFmLm5hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1jLW1vYmlsZS1kcmF3ZXItc3VibGluayBtYy1tb2JpbGUtZHJhd2VyLXN1YmxpbmstbmVzdGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17Y2xvc2VBbGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXtpc09wZW4gPyAwIDogLTF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGVhZi5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGV4dGVybmFsID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ViLnRvICYmIHN1Yi50by5zdGFydHNXaXRoKCdodHRwJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV4dGVybmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17c3ViLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17c3ViLnRvfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWMtbW9iaWxlLWRyYXdlci1zdWJsaW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17aXNPcGVuID8gMCA6IC0xfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdWIubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17c3ViLnRvfSBrZXk9e3N1Yi5uYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWMtbW9iaWxlLWRyYXdlci1zdWJsaW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtjbG9zZUFsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17aXNPcGVuID8gMCA6IC0xfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdWIubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgPC9hc2lkZT5cbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2l0ZU5hdmJhcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlcic7XG5pbXBvcnQgU2l0ZU5hdmJhciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL25hdmJhci9OYXZiYXInO1xuaW1wb3J0IFNpdGVGb290ZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyJztcbmltcG9ydCBQZXJzb25DaGlwcyBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL1BlcnNvbkNoaXAvUGVyc29uQ2hpcCc7XG5pbXBvcnQgeyB1c2VTdXBhYmFzZVRhYmxlIH0gZnJvbSAnLi4vLi4vLi4vdG9vbHMvZGF0YWJhc2UvdXNlU3VwYWJhc2VUYWJsZSc7XG5pbXBvcnQgJy4vaW5kZXguY3NzJztcblxuLypcbiAqIE1jTWluaXN0cnkgLSBvcmctY2hhcnQgbGF5b3V0IG9mIE1jTXVydHJ5J3Mgc3R1ZGVudCBnb3Zlcm5tZW50LFxuICogbWlycm9yaW5nIHRoZSBFeGVjdXRpdmUgQ291bmNpbCAmIENvbW1pdHRlZSBTdHJ1Y3R1cmUgc3ByZWFkIGluIHRoZVxuICogTy1XZWVrIEJvb2sgKHBwLiAxMjktMTMwKTpcbiAqXG4gKiAgIHJvdyAxOiBUcmVhc3VyZXJzIHwgTWNQcmVzaWRlbnQgfCBDaGllZiBKdXN0aWNlXG4gKiAgIHJvdyAyOiBFeHRlcm5hbCBWUCB8IEludGVybmFsIFZQIHwgUHJpbWUgTWluaXN0ZXIgfCBBdC1MYXJnZSBSZXBcbiAqICAgcm93IDM6IFNlY3JldGFyaWVzIHwgKFJTQSBTZW5hdG9yKSB8IFBhcmxpYW1lbnRhcmlhblxuICpcbiAqIFBlb3BsZSBjb21lIGZyb20gdGhlIGBtY21pbmlzdHJ5YCB0YWJsZSAoQ2hpZWYgSnVzdGljZSBmcm9tIGBtY2NvdXJ0YClcbiAqIGFuZCBjb21taXR0ZWUgbGlzdHMgZnJvbSB0aGUgYGNvbW1pdHRlZXNgIHRhYmxlLCBzbyB0aGUgY2hhcnQgc3RheXMgaW5cbiAqIHN5bmMgd2l0aCBTdXBhYmFzZS4gVGhlIGNvbmZpZyBiZWxvdyBvbmx5IGVuY29kZXMgc3RydWN0dXJlOiB3aGljaFxuICogcG9zaXRpb25zIHNpdCBpbiB3aGljaCByb3csIHJvbGUgYmx1cmJzLCBhbmQga2V5L1AtQ2FyZCBiYWRnZXMuXG4gKiBSb2xlcyB3aXRoIG5vIHBlb3BsZSBpbiB0aGUgdGFibGUgKGUuZy4gUlNBIFNlbmF0b3IpIHNpbXBseSBkb24ndCByZW5kZXIuXG4gKi9cblxuY29uc3QgbGMgPSAocikgPT4gKHIucG9zaXRpb24gfHwgJycpLnRvTG93ZXJDYXNlKCk7XG5cbmNvbnN0IFRSRUFTVVJFUlMgPSB7XG4gICAgdGl0bGU6ICdUcmVhc3VyZXJzJyxcbiAgICBiYWRnZXM6IFsncGNhcmQnXSxcbiAgICBibHVyYjogJ0hhbmRsZSBidWRnZXQgYWxsb2NhdGlvbnMgYW5kIGFwcHJvdmUgYWxsIGNvbGxlZ2UgcHVyY2hhc2VzLicsXG4gICAgbWF0Y2g6IChwKSA9PiBwLmluY2x1ZGVzKCd0cmVhc3VyZXInKSxcbiAgICBzaG93UG9zaXRpb25zOiB0cnVlLFxufTtcblxuY29uc3QgQk9UVE9NX1JPTEVTID0gW1xuICAgIHtcbiAgICAgICAgdGl0bGU6ICdTZWNyZXRhcmllcycsXG4gICAgICAgIGJsdXJiOiAnS2VlcCBtZWV0aW5nIG1pbnV0ZXMsIG1hbmFnZSByb29tIHJlc2VydmF0aW9ucywgYW5kIHNlbmQgb3V0IHRoZSB3ZWVrbHkgbGlzdHNlcnYuJyxcbiAgICAgICAgbWF0Y2g6IChwKSA9PiBwLmluY2x1ZGVzKCdzZWNyZXRhcnknKSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6ICdSU0EgU2VuYXRvcicsXG4gICAgICAgIGJsdXJiOiAnUmVwcmVzZW50cyBNY011cnRyeSBhdCB0aGUgUlNBIFNlbmF0ZSBhbmQgYnJpbmdzIGNhbXB1cy13aWRlIHVwZGF0ZXMgYmFjayB0byB0aGUgY29sbGVnZS4nLFxuICAgICAgICBtYXRjaDogKHApID0+IHAuaW5jbHVkZXMoJ3NlbmF0b3InKSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6ICdQYXJsaWFtZW50YXJpYW4nLFxuICAgICAgICBibHVyYjogJ1VwaG9sZHMgYWNjb3VudGFiaWxpdHkgaW4gZ292ZXJubWVudCwgaG9sZHMgdm90ZXMsIGFuZCBwYXNzZXMgY2hhbmdlcyB0byBNY0xlZ2lzbGF0aW9uLicsXG4gICAgICAgIG1hdGNoOiAocCkgPT4gcC5pbmNsdWRlcygncGFybGlhbWVudCcpLFxuICAgIH0sXG5dO1xuXG5jb25zdCBESVZJU0lPTl9ST0xFUyA9IFtcbiAgICB7XG4gICAgICAgIHRpdGxlOiAnRXh0ZXJuYWwgVmljZSBQcmVzaWRlbnQnLFxuICAgICAgICBiYWRnZXM6IFsna2V5J10sXG4gICAgICAgIGJsdXJiOiAnRXhlY3V0ZXMgbG9uZ3N0YW5kaW5nIHRyYWRpdGlvbnMgYW5kIHByZXNlcnZlcyBNY011cnRyeeKAmXMgbGVnYWN5LicsXG4gICAgICAgIG1hdGNoOiAocCkgPT4gcC5pbmNsdWRlcygnZXh0ZXJuYWwgdmljZScpLFxuICAgICAgICBjb21taXR0ZWVEaXZpc2lvbjogJ0V4dGVybmFsIENvbW1pdHRlZXMnLFxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogJ0ludGVybmFsIFZpY2UgUHJlc2lkZW50JyxcbiAgICAgICAgYmFkZ2VzOiBbJ2tleSddLFxuICAgICAgICBibHVyYjogJ01haW50YWlucyBhbmQgaW1wcm92ZXMgaW50ZXJuYWwgYW1lbml0aWVzIGFuZCBzZXJ2aWNlcyB3aXRoaW4gdGhlIGNvbGxlZ2UuJyxcbiAgICAgICAgbWF0Y2g6IChwKSA9PiBwLmluY2x1ZGVzKCdpbnRlcm5hbCB2aWNlJyksXG4gICAgICAgIGNvbW1pdHRlZURpdmlzaW9uOiAnSW50ZXJuYWwgQ29tbWl0dGVlcycsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiAnUHJpbWUgTWluaXN0ZXInLFxuICAgICAgICBzdWJ0aXRsZTogJ1NvY2lhbHMgVmljZSBQcmVzaWRlbnQnLFxuICAgICAgICBiYWRnZXM6IFsna2V5JywgJ3BjYXJkJ10sXG4gICAgICAgIGJsdXJiOiAnUGxhbnMgTWNNdXJ0cnnigJlzIGxhcmdlIHNvY2lhbCBnYXRoZXJpbmdzIGFuZCBhY3RzIGFzIGxpYWlzb24gdG8gc3R1ZGVudCBhY3Rpdml0aWVzLicsXG4gICAgICAgIG1hdGNoOiAocCkgPT4gcC5pbmNsdWRlcygncHJpbWUgbWluaXN0ZXInKSxcbiAgICAgICAgY29tbWl0dGVlRGl2aXNpb246ICdTb2NpYWwgQ29tbWl0dGVlcycsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiAnQXQtTGFyZ2UgUmVwcmVzZW50YXRpdmUnLFxuICAgICAgICBiYWRnZXM6IFsna2V5J10sXG4gICAgICAgIGJsdXJiOiAnTGVhZHMgdGhlIFBlb3BsZeKAmXMgQ291bmNpbCBhbmQgbWFpbnRhaW5zIGhhbGwgYW5kIGNvbW1vbnMgY3VsdHVyZS4nLFxuICAgICAgICBtYXRjaDogKHApID0+IHAuaW5jbHVkZXMoJ2F0LWxhcmdlJyksXG4gICAgICAgIGNvbW1pdHRlZURpdmlzaW9uOiAnQXQtTGFyZ2UgQ29tbWl0dGVlcycsXG4gICAgICAgIGxpbms6IHsgaHJlZjogJyNwZW9wbGVzLWNvdW5jaWwnLCBsYWJlbDogJ1Blb3BsZeKAmXMgQ291bmNpbCDihpMnIH0sXG4gICAgfSxcbl07XG5cbmNvbnN0IFBDX0dST1VQUyA9IFtcbiAgICB7IHRpdGxlOiAnSGFsbCBSZXBzJywgbWF0Y2g6IChwKSA9PiBwLmluY2x1ZGVzKCdoYWxsIHJlcCcpIH0sXG4gICAgeyB0aXRsZTogJ0NsYXNzIFJlcHMnLCBtYXRjaDogKHApID0+IHAuaW5jbHVkZXMoJ2NsYXNzIHJlcCcpIHx8IHAuaW5jbHVkZXMoJ29mZiBjYW1wdXMnKSB8fCBwLmluY2x1ZGVzKCdvZmYtY2FtcHVzJykgfSxcbl07XG5cbmNvbnN0IGNvbW1pdHRlZUhyZWYgPSAobmFtZSkgPT4gYC9nb3Zlcm5tZW50L2NvbW1pdHRlZXMjJHtlbmNvZGVVUklDb21wb25lbnQobmFtZSl9YDtcblxuY29uc3QgQmFkZ2UgPSAoeyB0eXBlIH0pID0+IChcbiAgICA8c3BhbiBjbGFzc05hbWU9XCJtY20tYmFkZ2VcIj5cbiAgICAgICAgPGkgY2xhc3NOYW1lPXtgcGggJHt0eXBlID09PSAna2V5JyA/ICdwaC1rZXknIDogJ3BoLWNyZWRpdC1jYXJkJ31gfSBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxuICAgICAgICB7dHlwZSA9PT0gJ2tleScgPyAnS2V5IEhvbGRlcicgOiAnUC1DYXJkIEhvbGRlcid9XG4gICAgPC9zcGFuPlxuKTtcblxuY29uc3QgdG9DaGlwcyA9IChyb3dzLCBzaG93UG9zaXRpb25zKSA9PlxuICAgIHJvd3MubWFwKCh7IG5hbWUsIGVtYWlsLCBwb3NpdGlvbiB9KSA9PiAoe1xuICAgICAgICBuYW1lLFxuICAgICAgICBlbWFpbCxcbiAgICAgICAgcG9zaXRpb246IHNob3dQb3NpdGlvbnMgPyBwb3NpdGlvbiA6IHVuZGVmaW5lZCxcbiAgICB9KSk7XG5cbi8qIFRoZSAubWNtLW5vZGUgd3JhcHBlciBpcyBkaXNwbGF5OmNvbnRlbnRzIG9uIGRlc2t0b3AgKGludmlzaWJsZSB0byB0aGVcbiAqIGZsZXggdGllcnMpIGFuZCBiZWNvbWVzIHRoZSBhbmNob3IgZm9yIHRoZSB0cmVlLWNvbm5lY3RvciBwc2V1ZG8tZWxlbWVudHNcbiAqIG9uIG1vYmlsZSwgc2luY2UgdGhlIGNhcmQgaXRzZWxmIGNsaXBzIG92ZXJmbG93IGZvciBpdHMgY2FwIGJhci4gKi9cbmNvbnN0IFJvbGVDYXJkID0gKHsgdGl0bGUsIHN1YnRpdGxlLCBiYWRnZXMgPSBbXSwgYmx1cmIsIHBlb3BsZSA9IFtdLCBjb21taXR0ZWVzID0gW10sIHNob3dQb3NpdGlvbnMsIGFjY2VudCwgbGluaywgcHJpbWFyeSB9KSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2BtY20tbm9kZSR7cHJpbWFyeSA/ICcgbWNtLW5vZGUtcHJpbWFyeScgOiAnJ31gfT5cbiAgICA8YXJ0aWNsZSBjbGFzc05hbWU9e2BtY20tcm9sZS1jYXJkJHtwcmltYXJ5ID8gJyBtY20tcm9sZS1jYXJkLXByaW1hcnknIDogJyd9YH0+XG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwibWNtLXJvbGUtaGVhZFwiPlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1jbS1yb2xlLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAge3ByaW1hcnkgPyA8aSBjbGFzc05hbWU9XCJwaCBwaC1jcm93biBtY20tcm9sZS1jcm93blwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+IDogbnVsbH1cbiAgICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAge3N1YnRpdGxlID8gPHAgY2xhc3NOYW1lPVwibWNtLXJvbGUtc3VidGl0bGVcIj57c3VidGl0bGV9PC9wPiA6IG51bGx9XG4gICAgICAgICAgICB7YmFkZ2VzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWNtLXJvbGUtYmFkZ2VzXCI+XG4gICAgICAgICAgICAgICAgICAgIHtiYWRnZXMubWFwKChiKSA9PiA8QmFkZ2Uga2V5PXtifSB0eXBlPXtifSAvPil9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibWNtLXJvbGUtYmx1cmJcIj57Ymx1cmJ9PC9wPlxuICAgICAgICB7cGVvcGxlLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgPFBlcnNvbkNoaXBzIGNvbnRlbnQ9e3RvQ2hpcHMocGVvcGxlLCBzaG93UG9zaXRpb25zKX0gYWNjZW50PXthY2NlbnR9IC8+XG4gICAgICAgICl9XG4gICAgICAgIHtjb21taXR0ZWVzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtY20tcm9sZS1jb21taXR0ZWVzXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWNtLXJvbGUtY29tbWl0dGVlcy1sYWJlbFwiPkNvbW1pdHRlZXM8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtY20tY29tbWl0dGVlLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAge2NvbW1pdHRlZXMubWFwKChjKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBrZXk9e2N9IGhyZWY9e2NvbW1pdHRlZUhyZWYoYyl9IGNsYXNzTmFtZT1cIm1jbS1jb21taXR0ZWUtY2hpcFwiPntjfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAge2xpbmsgPyA8YSBocmVmPXtsaW5rLmhyZWZ9IGNsYXNzTmFtZT1cIm1jbS1yb2xlLWxpbmtcIj57bGluay5sYWJlbH08L2E+IDogbnVsbH1cbiAgICA8L2FydGljbGU+XG4gICAgPC9kaXY+XG4pO1xuXG5jb25zdCBNY01pbmlzdHJ5UGFnZSA9ICgpID0+IHtcbiAgICBjb25zdCB7IHJvd3MsIGlzTG9hZGluZyB9ID0gdXNlU3VwYWJhc2VUYWJsZSgnbWNtaW5pc3RyeScpO1xuICAgIGNvbnN0IHsgcm93czogY29tbWl0dGVlcyB9ID0gdXNlU3VwYWJhc2VUYWJsZSgnY29tbWl0dGVlcycpO1xuICAgIGNvbnN0IHsgcm93czogY291cnQgfSA9IHVzZVN1cGFiYXNlVGFibGUoJ21jY291cnQnKTtcblxuICAgIGNvbnN0IHBjUm93cyA9IHJvd3MuZmlsdGVyKChyKSA9PiByLnRhYiA9PT0gXCJQZW9wbGUncyBDb3VuY2lsXCIpO1xuICAgIGNvbnN0IGVjUm93cyA9IHJvd3MuZmlsdGVyKChyKSA9PiByLnRhYiAhPT0gXCJQZW9wbGUncyBDb3VuY2lsXCIpO1xuXG4gICAgY29uc3QgcHJlc2lkZW50ID0gZWNSb3dzLmZpbHRlcigocikgPT4gL14obWMpP3ByZXNpZGVudC8udGVzdChsYyhyKSkpO1xuICAgIGNvbnN0IHRyZWFzdXJlcnMgPSBlY1Jvd3MuZmlsdGVyKChyKSA9PiBUUkVBU1VSRVJTLm1hdGNoKGxjKHIpKSk7XG4gICAgY29uc3QgY2hpZWZKdXN0aWNlID0gY291cnQuZmlsdGVyKChyKSA9PiBsYyhyKS5pbmNsdWRlcygnY2hpZWYganVzdGljZScpKTtcblxuICAgIGNvbnN0IGNvbW1pdHRlZXNCeURpdmlzaW9uID0gY29tbWl0dGVlcy5yZWR1Y2UoKGFjYywgYykgPT4ge1xuICAgICAgICAoYWNjW2MuZGl2aXNpb25dID0gYWNjW2MuZGl2aXNpb25dIHx8IFtdKS5wdXNoKGMubmFtZSk7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30pO1xuXG4gICAgY29uc3QgZGl2aXNpb25DYXJkcyA9IERJVklTSU9OX1JPTEVTLm1hcCgocm9sZSkgPT4gKHtcbiAgICAgICAgLi4ucm9sZSxcbiAgICAgICAgcGVvcGxlOiBlY1Jvd3MuZmlsdGVyKChyKSA9PiByb2xlLm1hdGNoKGxjKHIpKSksXG4gICAgICAgIGNvbW1pdHRlZXM6IGNvbW1pdHRlZXNCeURpdmlzaW9uW3JvbGUuY29tbWl0dGVlRGl2aXNpb25dIHx8IFtdLFxuICAgIH0pKTtcblxuICAgIGNvbnN0IGJvdHRvbUNhcmRzID0gQk9UVE9NX1JPTEVTXG4gICAgICAgIC5tYXAoKHJvbGUpID0+ICh7IC4uLnJvbGUsIHBlb3BsZTogZWNSb3dzLmZpbHRlcigocikgPT4gcm9sZS5tYXRjaChsYyhyKSkpIH0pKVxuICAgICAgICAuZmlsdGVyKChyb2xlKSA9PiByb2xlLnBlb3BsZS5sZW5ndGggPiAwKTtcblxuICAgIGNvbnN0IHBjTGVhZCA9IHBjUm93cy5maWx0ZXIoKHIpID0+IGxjKHIpLmluY2x1ZGVzKCdhdC1sYXJnZScpKTtcbiAgICBjb25zdCBpc09mZkNhbXB1cyA9IChyKSA9PiBsYyhyKS5pbmNsdWRlcygnb2ZmIGNhbXB1cycpIHx8IGxjKHIpLmluY2x1ZGVzKCdvZmYtY2FtcHVzJyk7XG4gICAgY29uc3QgcGNHcm91cGVkID0gUENfR1JPVVBTXG4gICAgICAgIC5tYXAoKGcpID0+ICh7XG4gICAgICAgICAgICAuLi5nLFxuICAgICAgICAgICAgLy8gc3RhYmxlIHNvcnQ6IG9mZi1jYW1wdXMgcmVwcyBzaW5rIGJlbG93IHRoZSBjbGFzcy15ZWFyIHJlcHNcbiAgICAgICAgICAgIHBlb3BsZTogcGNSb3dzXG4gICAgICAgICAgICAgICAgLmZpbHRlcigocikgPT4gZy5tYXRjaChsYyhyKSkpXG4gICAgICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IChpc09mZkNhbXB1cyhhKSA/IDEgOiAwKSAtIChpc09mZkNhbXB1cyhiKSA/IDEgOiAwKSksXG4gICAgICAgIH0pKVxuICAgICAgICAuZmlsdGVyKChnKSA9PiBnLnBlb3BsZS5sZW5ndGggPiAwKTtcbiAgICBjb25zdCBwY090aGVyID0gcGNSb3dzLmZpbHRlcihcbiAgICAgICAgKHIpID0+ICFsYyhyKS5pbmNsdWRlcygnYXQtbGFyZ2UnKSAmJiAhUENfR1JPVVBTLnNvbWUoKGcpID0+IGcubWF0Y2gobGMocikpKVxuICAgICk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGFnZSBwYWdlLWxpZ2h0IHBhZ2Utd2l0aC1zdGFnZ2VyZWQtbWVudSc+XG4gICAgICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgICAgICA8U2l0ZU5hdmJhciAvPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWNtaW5pc3RyeS1wYWdlJz5cbiAgICAgICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT0nZXYtaGVybyc+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPScvc3RhdGljL2ljb25zL2Fib3V0LXN3b29zaC5zdmcnIGFsdD0nJyBjbGFzc05hbWU9J2V2LWhlcm8tc3dvb3NoJyBhcmlhLWhpZGRlbj0ndHJ1ZScgLz5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9Jy9zdGF0aWMvaWNvbnMvZWxsaXBzZS1sYXJnZS5zdmcnIGFsdD0nJyBjbGFzc05hbWU9J2V2LWhlcm8tZWxsaXBzZS1sYXJnZScgYXJpYS1oaWRkZW49J3RydWUnIC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPScvc3RhdGljL2ljb25zL2VsbGlwc2Utc21hbGwuc3ZnJyBhbHQ9JycgY2xhc3NOYW1lPSdldi1oZXJvLWVsbGlwc2Utc21hbGwnIGFyaWEtaGlkZGVuPSd0cnVlJyAvPlxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdldi1oZXJvLWhlYWRpbmcnPk1jTWluaXN0cnk8L2gxPlxuICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21jbS1pbnRybyc+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbWNtLWludHJvLXRleHQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgTWNNdXJ0cnkmcnNxdW87cyBnb3Zlcm5tZW50IGlzIG1hZGUgdXAgb2YgdGhlIDxzdHJvbmc+RXhlY3V0aXZlIENvdW5jaWw8L3N0cm9uZz4gYW5kXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGUgPHN0cm9uZz5QZW9wbGUmcnNxdW87cyBDb3VuY2lsPC9zdHJvbmc+LiBUaGUgY2hhcnQgYmVsb3cgc2hvd3MgdGhlIGhpZXJhcmNoeSBvZlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2liaWxpdHkgYXQgdGhlIGNvbGxlZ2U6IHdobyBsZWFkcyB3aGF0LCBhbmQgd2hpY2ggY29tbWl0dGVlcyBsaXZlIHVuZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICBlYWNoIGRpdmlzaW9uLlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtY20tbGVnZW5kJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtY20tbGVnZW5kLXJvdyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJhZGdlIHR5cGU9J2tleScgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J21jbS1sZWdlbmQtaGludCc+b3ZlcnNlZXMgY29tbWl0dGVlcyBhbmQgdGhlIGNvbW1pdHRlZSBjbG9zZXQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtY20tbGVnZW5kLXJvdyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJhZGdlIHR5cGU9J3BjYXJkJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nbWNtLWxlZ2VuZC1oaW50Jz5tYWtlcyBwdXJjaGFzZXMgb24gYmVoYWxmIG9mIHRoZSBjb2xsZWdlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAge2lzTG9hZGluZyA/IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xvYWRpbmctY29udGFpbmVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsb2FkaW5nLXNwaW5uZXInPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdsb2FkaW5nLXRleHQnPkxvYWRpbmcuLi48L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmYWRlLWluJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J2RpdmlzaW9uLXRpdGxlJz5FeGVjdXRpdmUgQ291bmNpbDwvaDI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtY20tY2hhcnQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtY20tdGllciBtY20tdGllci10b3AnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J21jbS10aWVyLWxhYmVsJz5MZWFkZXJzaGlwPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dHJlYXN1cmVycy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb2xlQ2FyZCB7Li4uVFJFQVNVUkVSU30gcGVvcGxlPXt0cmVhc3VyZXJzfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJlc2lkZW50Lmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvbGVDYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9J01jUHJlc2lkZW50J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhZGdlcz17WydrZXknLCAncGNhcmQnXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBibHVyYj17J0xlYWRlciBvZiB0aGUgRXhlY3V0aXZlIENvdW5jaWwsIHN0ZWVyaW5nIE1jTXVydHJ54oCZcyB5ZWFybHkgb3BlcmF0aW9ucywgbG9uZy10ZXJtIGdvYWxzLCBhbmQgaW5pdGlhdGl2ZXMuJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZW9wbGU9e3ByZXNpZGVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmltYXJ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um9sZUNhcmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPSdDaGllZiBKdXN0aWNlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmx1cmI9eydDcml0aWNhbCBhdXRob3JpdHkgb24gd2VsbGJlaW5nLCBjb25kdWN0LCBhbmQgYWxjb2hvbCBwb2xpY2llcyBjb2xsZWdlLXdpZGUsIGxlYWRpbmcgdGhlIGNvdXJ0IG9mIEFzc29jaWF0ZSBKdXN0aWNlcy4nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVvcGxlPXtjaGllZkp1c3RpY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rPXt7IGhyZWY6ICcvZ292ZXJubWVudC9jb3VydCcsIGxhYmVsOiAnTWVldCBNY0NvdXJ0IOKGkicgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtY20tY29ubmVjdG9yJyBhcmlhLWhpZGRlbj0ndHJ1ZScgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtY20tdGllciBtY20tdGllci1kaXZpc2lvbnMnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J21jbS10aWVyLWxhYmVsJz5EaXZpc2lvbiBMZWFkczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RpdmlzaW9uQ2FyZHMubWFwKChyb2xlKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um9sZUNhcmQga2V5PXtyb2xlLnRpdGxlfSB7Li4ucm9sZX0gYWNjZW50IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2JvdHRvbUNhcmRzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWNtLWNvbm5lY3RvcicgYXJpYS1oaWRkZW49J3RydWUnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWNtLXRpZXIgbWNtLXRpZXItYm90dG9tJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J21jbS10aWVyLWxhYmVsJz5TdXBwb3J0IFJvbGVzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtib3R0b21DYXJkcy5tYXAoKHJvbGUpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvbGVDYXJkIGtleT17cm9sZS50aXRsZX0gey4uLnJvbGV9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J2RpdmlzaW9uLXRpdGxlIG1jbS1wYy10aXRsZScgaWQ9J3Blb3BsZXMtY291bmNpbCc+UGVvcGxlJnJzcXVvO3MgQ291bmNpbDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWNtLWludHJvIG1jbS1pbnRyby10aWdodCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdtY20taW50cm8tdGV4dCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEV2ZXJ5IGZsb29yLCBjbGFzcywgYW5kIG9mZi1jYW1wdXMgTXVydCBnZXRzIGEgdm9pY2UgKGFuZCBhIHZvdGUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWQgYnkgdGhlIEF0LUxhcmdlIFJlcHJlc2VudGF0aXZlLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7cGNMZWFkLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtY20tcGMtbGVhZCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQZXJzb25DaGlwcyBjb250ZW50PXt0b0NoaXBzKHBjTGVhZCwgdHJ1ZSl9IGFjY2VudCAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21jbS1wYy1ncm91cHMnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwY0dyb3VwZWQubWFwKChnKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGtleT17Zy50aXRsZX0gY2xhc3NOYW1lPSdtY20tcGMtZ3JvdXAnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0nbWNtLXBjLWdyb3VwLXRpdGxlJz57Zy50aXRsZX08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBlcnNvbkNoaXBzIGNvbnRlbnQ9e3RvQ2hpcHMoZy5wZW9wbGUsIHRydWUpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3BjT3RoZXIubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nbWNtLXBjLWdyb3VwJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9J21jbS1wYy1ncm91cC10aXRsZSc+TW9yZSBSZXByZXNlbnRhdGl2ZXM8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBlcnNvbkNoaXBzIGNvbnRlbnQ9e3RvQ2hpcHMocGNPdGhlciwgdHJ1ZSl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPFNpdGVGb290ZXIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1jTWluaXN0cnlQYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==