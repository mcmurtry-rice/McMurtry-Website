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
  // Drawer is only ever off-canvas via `transform`, which still occupies
  // layout space at the viewport's edge and pushes document scrollWidth
  // past clientWidth (confirmed: real horizontal scroll reveals it, even
  // with `overflow-x: clip` on <html>). Give it `display:none` whenever
  // fully closed so it has no box at all, and only drop back to none
  // after the close transition finishes so the slide-out still plays.
  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    drawerInDom = _useState4[0],
    setDrawerInDom = _useState4[1];
  // Mirrors menuOpen but flips a frame later on open, so the drawer first
  // paints mounted-but-closed (display:flex, translateX(100%)) before the
  // "-open" class is added - otherwise display:none -> flex and the open
  // transform land in the same paint and the drawer just pops in instead
  // of sliding.
  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    drawerOpen = _useState5[0],
    setDrawerOpen = _useState5[1];

  // Lock body scroll while the mobile drawer is open
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (typeof document === 'undefined') return;
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return function () {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (menuOpen) {
      setDrawerInDom(true);
    } else {
      setDrawerOpen(false);
    }
  }, [menuOpen]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!menuOpen || !drawerInDom) return;
    var raf = requestAnimationFrame(function () {
      return setDrawerOpen(true);
    });
    return function () {
      return cancelAnimationFrame(raf);
    };
  }, [menuOpen, drawerInDom]);
  var closeAll = function closeAll() {
    setMenuOpen(false);
    setOpenDropdown(null);
    setOpenMobileSection(null);
  };
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 9
    }
  }, __jsx("header", {
    className: "mc-navbar",
    role: "banner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/home/index",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "mc-navbar-brand",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/static/logos/hero-crest.png",
    alt: "",
    className: "mc-navbar-crest",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 25
    }
  }), __jsx("span", {
    className: "mc-navbar-wordmark",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 25
    }
  }, "McMurtry College"))), __jsx("nav", {
    className: "mc-navbar-links",
    "aria-label": "Main",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
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
          lineNumber: 124,
          columnNumber: 33
        }
      }, __jsx("a", {
        className: "mc-navbar-link",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125,
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
        lineNumber: 130,
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
        lineNumber: 136,
        columnNumber: 33
      }
    }, header.name, __jsx("span", {
      className: "mc-navbar-caret" + (openDropdown === header.name ? " mc-navbar-caret-open" : ""),
      "aria-hidden": "true",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 29
      }
    })), __jsx("div", {
      className: 'mc-navbar-dropdown' + (openDropdown === header.name ? ' mc-navbar-dropdown-open' : ''),
      role: "menu",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
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
            lineNumber: 166,
            columnNumber: 49
          }
        }, __jsx("span", {
          className: "mc-navbar-submenu-label",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 53
          }
        }, __jsx("span", {
          className: "mc-navbar-submenu-caret",
          "aria-hidden": "true",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 173,
            columnNumber: 53
          }
        }), sub.name), __jsx("div", {
          className: "mc-navbar-submenu-panel",
          role: "menu",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 179,
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
              lineNumber: 183,
              columnNumber: 65
            }
          }, leaf.name) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
            href: leaf.to,
            key: leaf.name,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 194,
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
              lineNumber: 195,
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
            lineNumber: 212,
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
          lineNumber: 225,
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
          lineNumber: 226,
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
      lineNumber: 242,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: "mc-hamburger-line",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 21
    }
  }), __jsx("span", {
    className: "mc-hamburger-line",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 21
    }
  }), __jsx("span", {
    className: "mc-hamburger-line",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 21
    }
  }))), __jsx("div", {
    className: 'mc-mobile-scrim' + (menuOpen ? ' mc-mobile-scrim-open' : ''),
    onClick: closeAll,
    "aria-hidden": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 13
    }
  }), __jsx("aside", {
    id: "mc-mobile-drawer",
    className: 'mc-mobile-drawer' + (menuOpen ? ' mc-mobile-drawer-open' : ''),
    style: {
      display: drawerInDom ? 'flex' : 'none'
    },
    onTransitionEnd: function onTransitionEnd(e) {
      if (e.propertyName === 'transform' && !menuOpen) setDrawerInDom(false);
    },
    "aria-hidden": !menuOpen,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
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
      lineNumber: 270,
      columnNumber: 17
    }
  }), __jsx("nav", {
    className: "mc-mobile-drawer-links",
    "aria-label": "Mobile",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
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
          lineNumber: 282,
          columnNumber: 33
        }
      }, __jsx("a", {
        className: "mc-mobile-drawer-link",
        onClick: closeAll,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283,
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
        lineNumber: 290,
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
        lineNumber: 291,
        columnNumber: 33
      }
    }, header.name, __jsx("span", {
      className: "mc-mobile-drawer-caret" + (isOpen ? " mc-mobile-drawer-caret-open" : ""),
      "aria-hidden": "true",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 300,
        columnNumber: 37
      }
    })), __jsx("div", {
      className: 'mc-mobile-drawer-sublinks' + (isOpen ? ' mc-mobile-drawer-sublinks-open' : ''),
      "aria-hidden": !isOpen,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 309,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: "mc-mobile-drawer-sublinks-inner",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 316,
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
            lineNumber: 322,
            columnNumber: 49
          }
        }, __jsx("div", {
          className: "mc-mobile-drawer-subsection",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 323,
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
              lineNumber: 329,
              columnNumber: 61
            }
          }, leaf.name) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
            href: leaf.to,
            key: leaf.name,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 340,
              columnNumber: 61
            }
          }, __jsx("a", {
            className: "mc-mobile-drawer-sublink mc-mobile-drawer-sublink-nested",
            onClick: closeAll,
            tabIndex: isOpen ? 0 : -1,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 341,
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
            lineNumber: 358,
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
          lineNumber: 371,
          columnNumber: 45
        }
      }, __jsx("a", {
        className: "mc-mobile-drawer-sublink",
        onClick: closeAll,
        tabIndex: isOpen ? 0 : -1,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 372,
          columnNumber: 49
        }
      }, sub.name));
    }))));
  }))));
};
_s(SiteNavbar, "hfbWReSfbatjCBrTQgmyx1d2/DU=");
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXIvTmF2YmFyLmpzIl0sIm5hbWVzIjpbIm5hdmJhcl9oZWFkZXJzIiwiU2l0ZU5hdmJhciIsIl9zIiwiX3VzZVN0YXRlIiwidXNlU3RhdGUiLCJtZW51T3BlbiIsInNldE1lbnVPcGVuIiwiX3VzZVN0YXRlMiIsIm9wZW5Ecm9wZG93biIsInNldE9wZW5Ecm9wZG93biIsIl91c2VTdGF0ZTMiLCJvcGVuTW9iaWxlU2VjdGlvbiIsInNldE9wZW5Nb2JpbGVTZWN0aW9uIiwiX3VzZVN0YXRlNCIsImRyYXdlckluRG9tIiwic2V0RHJhd2VySW5Eb20iLCJfdXNlU3RhdGU1IiwiZHJhd2VyT3BlbiIsInNldERyYXdlck9wZW4iLCJ1c2VFZmZlY3QiLCJkb2N1bWVudCIsImJvZHkiLCJzdHlsZSIsIm92ZXJmbG93IiwicmFmIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJjbG9zZUFsbCIsIl9fanN4IiwiUmVhY3QiLCJGcmFnbWVudCIsIl9fc2VsZiIsIl90aGlzIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJjbGFzc05hbWUiLCJyb2xlIiwiTGluayIsImhyZWYiLCJzcmMiLCJhbHQiLCJtYXAiLCJoZWFkZXIiLCJoYXNEcm9wZG93biIsInN1YmhlYWRlcnMiLCJsZW5ndGgiLCJ0byIsImtleSIsIm5hbWUiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJ0eXBlIiwib25DbGljayIsInN1YiIsImNoaWxkcmVuIiwibGVhZiIsImxlYWZFeHQiLCJzdGFydHNXaXRoIiwidGFyZ2V0IiwicmVsIiwiZXh0ZXJuYWwiLCJpZCIsImRpc3BsYXkiLCJvblRyYW5zaXRpb25FbmQiLCJlIiwicHJvcGVydHlOYW1lIiwiaXNPcGVuIiwidGFiSW5kZXgiLCJfYyIsIiRSZWZyZXNoUmVnJCJd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QVEsRUFBRUQsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUU7UUFBQXRDLE1BQUEsRUFBQUMsS0FBQTtRQUFBQyxRQUFBO1VBQUFDLFFBQUEsRUFBQUMsWUFBQTtVQUFBQyxVQUFBO1VBQUFDLFlBQUE7UUFBQTtNQUFBLEdBRXpCbUIsR0FBRyxDQUFDTCxJQUNOLENBQ0QsQ0FBQztJQUVmLENBQUMsQ0FDSSxDQUNKLENBQ0osQ0FBQztFQUVkLENBQUMsQ0FDQSxDQUNGLENBQ0ssQ0FBQztBQUV6QixDQUFDO0FBQUNqRCxFQUFBLENBM1VJRCxVQUFVO0FBQUFzRSxFQUFBLEdBQVZ0RSxVQUFVO0FBNlVEQSx5RUFBVSxFQUFDO0FBQUEsSUFBQXNFLEVBQUE7QUFBQUMsWUFBQSxDQUFBRCxFQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2dvdmVybm1lbnQvbWNtaW5pc3RyeS5hMTM4YTA1ZGI5YmFiZjUzOTdkNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCAnLi9OYXZiYXIuY3NzJztcclxuXHJcbmNvbnN0IG5hdmJhcl9oZWFkZXJzID0gW1xyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIkhvbWVcIixcclxuICAgICAgICBcInN1YmhlYWRlcnNcIjogW1xyXG4gICAgICAgICAgICB7IFwibmFtZVwiOiBcIk1jTXVydHJ5XCIsIFwidG9cIjogXCIvaG9tZS9pbmRleFwiIH0sXHJcbiAgICAgICAgICAgIHsgXCJuYW1lXCI6IFwiQWJvdXRcIiwgXCJ0b1wiOiBcIi9ob21lL2Fib3V0XCIgfSxcclxuICAgICAgICAgICAgeyBcIm5hbWVcIjogXCJDYWxlbmRhclwiLCBcInRvXCI6IFwiL2hvbWUvY2FsZW5kYXJcIiB9LFxyXG4gICAgICAgIF1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiR292ZXJubWVudFwiLFxyXG4gICAgICAgIFwic3ViaGVhZGVyc1wiOiBbXHJcbiAgICAgICAgICAgIHsgXCJuYW1lXCI6IFwiTWNNaW5pc3RyeVwiLCBcInRvXCI6IFwiL2dvdmVybm1lbnQvbWNtaW5pc3RyeVwiIH0sXHJcbiAgICAgICAgICAgIHsgXCJuYW1lXCI6IFwiQ29tbWl0dGVlc1wiLCBcInRvXCI6IFwiL2dvdmVybm1lbnQvY29tbWl0dGVlc1wiIH0sXHJcbiAgICAgICAgICAgIHsgXCJuYW1lXCI6IFwiTWNDb3VydFwiLCBcInRvXCI6IFwiL2dvdmVybm1lbnQvY291cnRcIiB9LFxyXG4gICAgICAgIF1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiUGVvcGxlXCIsXHJcbiAgICAgICAgXCJzdWJoZWFkZXJzXCI6IFtcclxuICAgICAgICAgICAgeyBcIm5hbWVcIjogXCJNY1RlYW1cIiwgXCJ0b1wiOiBcIi9wZW9wbGUvbWN0ZWFtXCIgfSxcclxuICAgICAgICAgICAgeyBcIm5hbWVcIjogXCJSSEFzXCIsIFwidG9cIjogXCIvcGVvcGxlL1JIQXNcIiB9LFxyXG4gICAgICAgICAgICB7IFwibmFtZVwiOiBcIkFzc29jaWF0ZXNcIiwgXCJ0b1wiOiBcIi9wZW9wbGUvYXNzb2NpYXRlc1wiIH0sXHJcbiAgICAgICAgICAgIHsgXCJuYW1lXCI6IFwiSGVhZCBDYXJlZ2l2ZXJzXCIsIFwidG9cIjogXCIvcGVvcGxlL2hlYWRjYXJlZ2l2ZXJzXCIgfSxcclxuICAgICAgICAgICAgeyBcIm5hbWVcIjogXCJBZmZpbml0eSBHcm91cHNcIiwgXCJ0b1wiOiBcIi9wZW9wbGUvbWNtdXJ0cnlhZmZpbml0eWdyb3Vwc1wiIH0sXHJcbiAgICAgICAgICAgIHsgXCJuYW1lXCI6IFwiUGVlciBBY2FkZW1pYyBBZHZpc29yc1wiLCBcInRvXCI6IFwiL3Blb3BsZS9wYWFzXCIgfSxcclxuICAgICAgICAgICAgeyBcIm5hbWVcIjogXCJBY2FkZW1pYyBGZWxsb3dzXCIsIFwidG9cIjogXCIvcGVvcGxlL2FjYWRlbWljZmVsbG93c1wiIH0sXHJcbiAgICAgICAgICAgIHsgXCJuYW1lXCI6IFwiRGl2aXNpb25hbCBBZHZpc29yc1wiLCBcInRvXCI6IFwiL3Blb3BsZS9kaXZpc2lvbmFsYWR2aXNvcnNcIiB9LFxyXG4gICAgICAgICAgICB7IFwibmFtZVwiOiBcIlNNUlwiLCBcInRvXCI6IFwiL3Blb3BsZS9TTVJcIiB9LFxyXG4gICAgICAgIF1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiUmVzb3VyY2VzXCIsXHJcbiAgICAgICAgXCJzdWJoZWFkZXJzXCI6IFtcclxuICAgICAgICAgICAgeyBcIm5hbWVcIjogXCJSb29tIFJlc2VydmF0aW9uc1wiLCBcInRvXCI6IFwiL3Jlc291cmNlcy9yb29tLXJlc2VydmF0aW9uc1wiIH0sXHJcbiAgICAgICAgICAgIHsgXCJuYW1lXCI6IFwiUC1DYXJkIFJlcXVlc3RzXCIsIFwidG9cIjogXCIvcmVzb3VyY2VzL3BjYXJkLXJlcXVlc3RzXCIgfSxcclxuICAgICAgICAgICAgeyBcIm5hbWVcIjogXCJNY0l0ZW1zIENoZWNrIE91dFwiLCBcInRvXCI6IFwiL3Jlc291cmNlcy9tY2l0ZW1zLWNoZWNrb3V0XCIgfSxcclxuICAgICAgICAgICAgeyBcIm5hbWVcIjogXCJNY01ha2Vyc3BhY2VcIiwgXCJ0b1wiOiBcIi9yZXNvdXJjZXMvbWNtYWtlcnNwYWNlXCIgfSxcclxuICAgICAgICAgICAgeyBcIm5hbWVcIjogXCJNY0xlZ2lzbGF0aW9uXCIsIFwidG9cIjogXCIvcmVzb3VyY2VzL21jbGVnaXNsYXRpb25cIiB9LFxyXG4gICAgICAgICAgICB7IFwibmFtZVwiOiBcIk1jRlVOZCBSZXF1ZXN0c1wiLCBcInRvXCI6IFwiL3Jlc291cmNlcy9tY2Z1bmQtcmVxdWVzdHNcIiB9LFxyXG4gICAgICAgICAgICB7IFwibmFtZVwiOiBcIkJ1ZGdldCBTaGVldFwiLCBcInRvXCI6IFwiaHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vc3ByZWFkc2hlZXRzL2QvMWltTkZ5N2N5YWR4aWVoN0pQY1BSdk16Qi1MZ01Ib3pOa1J6VVhfTHdwMUEvZWRpdD91c3A9c2hhcmluZ1wiIH0sXHJcbiAgICAgICAgICAgIHsgXCJuYW1lXCI6IFwiRmluYW5jaWFsIEluY2x1c2l2aXR5XCIsIFwidG9cIjogXCIvcmVzb3VyY2VzL2ZpbmFuY2lhbC1pbmNsdXNpdml0eVwiIH1cclxuICAgICAgICBdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIk8tV2Vla3NcIixcclxuICAgICAgICBcInN1YmhlYWRlcnNcIjogW1xyXG4gICAgICAgICAgICB7IFwibmFtZVwiOiBcIjIwMjZcIiwgXCJ0b1wiOiBcIi9vd2Vlay8yMDI2XCIgfSxcclxuICAgICAgICAgICAgeyBcIm5hbWVcIjogXCIyMDI1XCIsIFwidG9cIjogXCIvb3dlZWsvMjAyNVwiIH0sXHJcbiAgICAgICAgICAgIHsgXCJuYW1lXCI6IFwiMjAyNFwiLCBcInRvXCI6IFwiL293ZWVrLzIwMjRcIiB9LFxyXG4gICAgICAgICAgICB7IFwibmFtZVwiOiBcIjIwMjNcIiwgXCJ0b1wiOiBcIi9vd2Vlay8yMDIzXCIgfVxyXG4gICAgICAgIF1cclxuICAgIH1cclxuXTtcclxuXHJcbmNvbnN0IFNpdGVOYXZiYXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbbWVudU9wZW4sIHNldE1lbnVPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtvcGVuRHJvcGRvd24sIHNldE9wZW5Ecm9wZG93bl0gPSB1c2VTdGF0ZShudWxsKTsgICAvLyB0b3AtbGV2ZWwgaXRlbSBuYW1lXHJcbiAgICBjb25zdCBbb3Blbk1vYmlsZVNlY3Rpb24sIHNldE9wZW5Nb2JpbGVTZWN0aW9uXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgLy8gRHJhd2VyIGlzIG9ubHkgZXZlciBvZmYtY2FudmFzIHZpYSBgdHJhbnNmb3JtYCwgd2hpY2ggc3RpbGwgb2NjdXBpZXNcclxuICAgIC8vIGxheW91dCBzcGFjZSBhdCB0aGUgdmlld3BvcnQncyBlZGdlIGFuZCBwdXNoZXMgZG9jdW1lbnQgc2Nyb2xsV2lkdGhcclxuICAgIC8vIHBhc3QgY2xpZW50V2lkdGggKGNvbmZpcm1lZDogcmVhbCBob3Jpem9udGFsIHNjcm9sbCByZXZlYWxzIGl0LCBldmVuXHJcbiAgICAvLyB3aXRoIGBvdmVyZmxvdy14OiBjbGlwYCBvbiA8aHRtbD4pLiBHaXZlIGl0IGBkaXNwbGF5Om5vbmVgIHdoZW5ldmVyXHJcbiAgICAvLyBmdWxseSBjbG9zZWQgc28gaXQgaGFzIG5vIGJveCBhdCBhbGwsIGFuZCBvbmx5IGRyb3AgYmFjayB0byBub25lXHJcbiAgICAvLyBhZnRlciB0aGUgY2xvc2UgdHJhbnNpdGlvbiBmaW5pc2hlcyBzbyB0aGUgc2xpZGUtb3V0IHN0aWxsIHBsYXlzLlxyXG4gICAgY29uc3QgW2RyYXdlckluRG9tLCBzZXREcmF3ZXJJbkRvbV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICAvLyBNaXJyb3JzIG1lbnVPcGVuIGJ1dCBmbGlwcyBhIGZyYW1lIGxhdGVyIG9uIG9wZW4sIHNvIHRoZSBkcmF3ZXIgZmlyc3RcclxuICAgIC8vIHBhaW50cyBtb3VudGVkLWJ1dC1jbG9zZWQgKGRpc3BsYXk6ZmxleCwgdHJhbnNsYXRlWCgxMDAlKSkgYmVmb3JlIHRoZVxyXG4gICAgLy8gXCItb3BlblwiIGNsYXNzIGlzIGFkZGVkIC0gb3RoZXJ3aXNlIGRpc3BsYXk6bm9uZSAtPiBmbGV4IGFuZCB0aGUgb3BlblxyXG4gICAgLy8gdHJhbnNmb3JtIGxhbmQgaW4gdGhlIHNhbWUgcGFpbnQgYW5kIHRoZSBkcmF3ZXIganVzdCBwb3BzIGluIGluc3RlYWRcclxuICAgIC8vIG9mIHNsaWRpbmcuXHJcbiAgICBjb25zdCBbZHJhd2VyT3Blbiwgc2V0RHJhd2VyT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgLy8gTG9jayBib2R5IHNjcm9sbCB3aGlsZSB0aGUgbW9iaWxlIGRyYXdlciBpcyBvcGVuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSByZXR1cm47XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IG1lbnVPcGVuID8gJ2hpZGRlbicgOiAnJztcclxuICAgICAgICByZXR1cm4gKCkgPT4geyBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJyc7IH07XHJcbiAgICB9LCBbbWVudU9wZW5dKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChtZW51T3Blbikge1xyXG4gICAgICAgICAgICBzZXREcmF3ZXJJbkRvbSh0cnVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXREcmF3ZXJPcGVuKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbbWVudU9wZW5dKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICghbWVudU9wZW4gfHwgIWRyYXdlckluRG9tKSByZXR1cm47XHJcbiAgICAgICAgY29uc3QgcmFmID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHNldERyYXdlck9wZW4odHJ1ZSkpO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiBjYW5jZWxBbmltYXRpb25GcmFtZShyYWYpO1xyXG4gICAgfSwgW21lbnVPcGVuLCBkcmF3ZXJJbkRvbV0pO1xyXG5cclxuICAgIGNvbnN0IGNsb3NlQWxsID0gKCkgPT4ge1xyXG4gICAgICAgIHNldE1lbnVPcGVuKGZhbHNlKTtcclxuICAgICAgICBzZXRPcGVuRHJvcGRvd24obnVsbCk7XHJcbiAgICAgICAgc2V0T3Blbk1vYmlsZVNlY3Rpb24obnVsbCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cIm1jLW5hdmJhclwiIHJvbGU9XCJiYW5uZXJcIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvaG9tZS9pbmRleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm1jLW5hdmJhci1icmFuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvc3RhdGljL2xvZ29zL2hlcm8tY3Jlc3QucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYy1uYXZiYXItY3Jlc3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtYy1uYXZiYXItd29yZG1hcmtcIj5NY011cnRyeSBDb2xsZWdlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm1jLW5hdmJhci1saW5rc1wiIGFyaWEtbGFiZWw9XCJNYWluXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge25hdmJhcl9oZWFkZXJzLm1hcCgoaGVhZGVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGhhc0Ryb3Bkb3duID0gaGVhZGVyLnN1YmhlYWRlcnMgJiYgaGVhZGVyLnN1YmhlYWRlcnMubGVuZ3RoID4gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFoYXNEcm9wZG93bikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtoZWFkZXIudG8gfHwgJyMnfSBrZXk9e2hlYWRlci5uYW1lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibWMtbmF2YmFyLWxpbmtcIj57aGVhZGVyLm5hbWV9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2hlYWRlci5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1jLW5hdmJhci1pdGVtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldE9wZW5Ecm9wZG93bihoZWFkZXIubmFtZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRPcGVuRHJvcGRvd24obnVsbCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYy1uYXZiYXItbGluayBtYy1uYXZiYXItdHJpZ2dlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPXtvcGVuRHJvcGRvd24gPT09IGhlYWRlci5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD1cIm1lbnVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRPcGVuRHJvcGRvd24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5Ecm9wZG93biA9PT0gaGVhZGVyLm5hbWUgPyBudWxsIDogaGVhZGVyLm5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtoZWFkZXIubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcIm1jLW5hdmJhci1jYXJldFwiICsgKG9wZW5Ecm9wZG93biA9PT0gaGVhZGVyLm5hbWUgPyBcIiBtYy1uYXZiYXItY2FyZXQtb3BlblwiIDogXCJcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ21jLW5hdmJhci1kcm9wZG93bicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9wZW5Ecm9wZG93biA9PT0gaGVhZGVyLm5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICcgbWMtbmF2YmFyLWRyb3Bkb3duLW9wZW4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb2xlPVwibWVudVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aGVhZGVyLnN1YmhlYWRlcnMubWFwKChzdWIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5lc3RlZCBzdWJtZW51ICZyZHF1bzvigJ0gYGNoaWxkcmVuYCBhcnJheSwgbm8gYHRvYC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdWIuY2hpbGRyZW4gJiYgc3ViLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3N1Yi5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWMtbmF2YmFyLWRyb3Bkb3duLWxpbmsgbWMtbmF2YmFyLXN1Ym1lbnVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9sZT1cIm1lbnVpdGVtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGFzcG9wdXA9XCJtZW51XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWMtbmF2YmFyLXN1Ym1lbnUtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWMtbmF2YmFyLXN1Ym1lbnUtY2FyZXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N1Yi5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYy1uYXZiYXItc3VibWVudS1wYW5lbFwiIHJvbGU9XCJtZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N1Yi5jaGlsZHJlbi5tYXAoKGxlYWYpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGVhZkV4dCA9IGxlYWYudG8gJiYgbGVhZi50by5zdGFydHNXaXRoKCdodHRwJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBsZWFmRXh0ID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2xlYWYubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtsZWFmLnRvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWMtbmF2YmFyLWRyb3Bkb3duLWxpbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJtZW51aXRlbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xlYWYubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2xlYWYudG99IGtleT17bGVhZi5uYW1lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYy1uYXZiYXItZHJvcGRvd24tbGlua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJtZW51aXRlbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE9wZW5Ecm9wZG93bihudWxsKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsZWFmLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBleHRlcm5hbCA9IHN1Yi50byAmJiBzdWIudG8uc3RhcnRzV2l0aCgnaHR0cCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV4dGVybmFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17c3ViLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtzdWIudG99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYy1uYXZiYXItZHJvcGRvd24tbGlua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb2xlPVwibWVudWl0ZW1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3ViLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtzdWIudG99IGtleT17c3ViLm5hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWMtbmF2YmFyLWRyb3Bkb3duLWxpbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9sZT1cIm1lbnVpdGVtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE9wZW5Ecm9wZG93bihudWxsKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N1Yi5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvbmF2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYy1uYXZiYXItaGFtYnVyZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPXttZW51T3BlbiA/ICdDbG9zZSBtZW51JyA6ICdPcGVuIG1lbnUnfVxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9e21lbnVPcGVufVxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJtYy1tb2JpbGUtZHJhd2VyXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRNZW51T3Blbih0cnVlKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtYy1oYW1idXJnZXItbGluZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWMtaGFtYnVyZ2VyLWxpbmVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1jLWhhbWJ1cmdlci1saW5lXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2hlYWRlcj5cclxuXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17J21jLW1vYmlsZS1zY3JpbScgKyAobWVudU9wZW4gPyAnIG1jLW1vYmlsZS1zY3JpbS1vcGVuJyA6ICcnKX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Nsb3NlQWxsfVxyXG4gICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGFzaWRlXHJcbiAgICAgICAgICAgICAgICBpZD1cIm1jLW1vYmlsZS1kcmF3ZXJcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsnbWMtbW9iaWxlLWRyYXdlcicgKyAobWVudU9wZW4gPyAnIG1jLW1vYmlsZS1kcmF3ZXItb3BlbicgOiAnJyl9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBkcmF3ZXJJbkRvbSA/ICdmbGV4JyA6ICdub25lJyB9fVxyXG4gICAgICAgICAgICAgICAgb25UcmFuc2l0aW9uRW5kPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlLnByb3BlcnR5TmFtZSA9PT0gJ3RyYW5zZm9ybScgJiYgIW1lbnVPcGVuKSBzZXREcmF3ZXJJbkRvbShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49eyFtZW51T3Blbn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1jLW1vYmlsZS1kcmF3ZXItY2xvc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZSBtZW51XCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtjbG9zZUFsbH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm1jLW1vYmlsZS1kcmF3ZXItbGlua3NcIiBhcmlhLWxhYmVsPVwiTW9iaWxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge25hdmJhcl9oZWFkZXJzLm1hcCgoaGVhZGVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGhhc0Ryb3Bkb3duID0gaGVhZGVyLnN1YmhlYWRlcnMgJiYgaGVhZGVyLnN1YmhlYWRlcnMubGVuZ3RoID4gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNPcGVuID0gb3Blbk1vYmlsZVNlY3Rpb24gPT09IGhlYWRlci5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWhhc0Ryb3Bkb3duKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2hlYWRlci50byB8fCAnIyd9IGtleT17aGVhZGVyLm5hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJtYy1tb2JpbGUtZHJhd2VyLWxpbmtcIiBvbkNsaWNrPXtjbG9zZUFsbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aGVhZGVyLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aGVhZGVyLm5hbWV9IGNsYXNzTmFtZT1cIm1jLW1vYmlsZS1kcmF3ZXItc2VjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1jLW1vYmlsZS1kcmF3ZXItbGluayBtYy1tb2JpbGUtZHJhd2VyLXRyaWdnZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPXtpc09wZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRPcGVuTW9iaWxlU2VjdGlvbihpc09wZW4gPyBudWxsIDogaGVhZGVyLm5hbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtoZWFkZXIubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtYy1tb2JpbGUtZHJhd2VyLWNhcmV0XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpc09wZW4gPyBcIiBtYy1tb2JpbGUtZHJhd2VyLWNhcmV0LW9wZW5cIiA6IFwiXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBTdWJsaW5rcyBhbHdheXMgbW91bnRlZDsgQ1NTIGFuaW1hdGVzIHRoZSBncmlkLXJvdyBmcm9tIDBmciB0byAxZnIgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ21jLW1vYmlsZS1kcmF3ZXItc3VibGlua3MnICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpc09wZW4gPyAnIG1jLW1vYmlsZS1kcmF3ZXItc3VibGlua3Mtb3BlbicgOiAnJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj17IWlzT3Blbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWMtbW9iaWxlLWRyYXdlci1zdWJsaW5rcy1pbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aGVhZGVyLnN1YmhlYWRlcnMubWFwKChzdWIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5lc3RlZCBncm91cCBvbiBtb2JpbGU6IHJlbmRlciBhIHNtYWxsIHNlY3Rpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGhlYWRlciBmb2xsb3dlZCBieSBpdHMgaW5kZW50ZWQgY2hpbGRyZW4uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3ViLmNoaWxkcmVuICYmIHN1Yi5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17c3ViLm5hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYy1tb2JpbGUtZHJhd2VyLXN1YnNlY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3ViLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdWIuY2hpbGRyZW4ubWFwKChsZWFmKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGVhZkV4dCA9IGxlYWYudG8gJiYgbGVhZi50by5zdGFydHNXaXRoKCdodHRwJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxlYWZFeHQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2xlYWYubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2xlYWYudG99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYy1tb2JpbGUtZHJhd2VyLXN1YmxpbmsgbWMtbW9iaWxlLWRyYXdlci1zdWJsaW5rLW5lc3RlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17aXNPcGVuID8gMCA6IC0xfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGVhZi5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17bGVhZi50b30ga2V5PXtsZWFmLm5hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYy1tb2JpbGUtZHJhd2VyLXN1YmxpbmsgbWMtbW9iaWxlLWRyYXdlci1zdWJsaW5rLW5lc3RlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17Y2xvc2VBbGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9e2lzT3BlbiA/IDAgOiAtMX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGVhZi5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBleHRlcm5hbCA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ViLnRvICYmIHN1Yi50by5zdGFydHNXaXRoKCdodHRwJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXh0ZXJuYWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtzdWIubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e3N1Yi50b31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1jLW1vYmlsZS1kcmF3ZXItc3VibGlua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17aXNPcGVuID8gMCA6IC0xfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3ViLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtzdWIudG99IGtleT17c3ViLm5hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWMtbW9iaWxlLWRyYXdlci1zdWJsaW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Nsb3NlQWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9e2lzT3BlbiA/IDAgOiAtMX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N1Yi5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgPC9hc2lkZT5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpdGVOYXZiYXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=