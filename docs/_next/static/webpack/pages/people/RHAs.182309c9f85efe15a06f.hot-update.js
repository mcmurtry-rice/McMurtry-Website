webpackHotUpdate_N_E("pages/people/RHAs",{

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
  "name": "People",
  "subheaders": [{
    "name": "McTeam",
    "to": "/people/mcteam"
  }, {
    "name": "Associates",
    "to": "/people/associates"
  }, {
    "name": "Affinity Groups",
    "to": "/people/mcmurtryaffinitygroups"
  }, {
    "name": "Academic Fellows",
    "to": "/people/academicfellows"
  }, {
    "name": "Peer Academic Advisors",
    "to": "/people/paas"
  }, {
    "name": "RHAs",
    "to": "/people/RHAs"
  }, {
    "name": "Head Caregivers",
    "to": "/people/headcaregivers"
  }, {
    "name": "SMR",
    "to": "/people/SMR"
  }]
}, {
  "name": "Government",
  "subheaders": [{
    "name": "McCourt",
    "to": "/government/court"
  }, {
    "name": "Committees",
    "to": "/government/committees"
  }, {
    "name": "McMinistry",
    "to": "/government/mcministry"
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
    "name": "McMurtry Innovation Space",
    "to": "/resources/mcmurtry-innovation-space"
  }, {
    "name": "McLegislation",
    "to": "/resources/mclegislation"
  }, {
    "name": "Diversity Resources",
    "to": "/resources/diversity-resources"
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
  "name": "O-Week",
  "subheaders": [{
    "name": "O-Week Home",
    "to": "/oweek/2025-2026#home"
  }, {
    "name": "About the Theme",
    "to": "/oweek/2025-2026#theme"
  }, {
    "name": "Meet the Coords",
    "to": "/oweek/2025-2026#coords"
  }, {
    "name": "O-Week Groups",
    "to": "/oweek/2025-2026#groups"
  }, {
    "name": "Tour of McMurtry",
    "to": "/oweek/2025-2026#mcmtour"
  }, {
    "name": "Your Room",
    "to": "/oweek/2025-2026#yourroom"
  }, {
    "name": "O-Week Book",
    "to": "/oweek/2025-2026#oweekbook"
  }, {
    "name": "Contact Info",
    "to": "/oweek/2025-2026#contact"
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
      lineNumber: 84,
      columnNumber: 9
    }
  }, __jsx("header", {
    className: "mc-navbar",
    role: "banner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/home/index",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "mc-navbar-brand",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/static/logos/hero-crest.png",
    alt: "",
    className: "mc-navbar-crest",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 25
    }
  }), __jsx("span", {
    className: "mc-navbar-wordmark",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 25
    }
  }, "McMurtry College"))), __jsx("nav", {
    className: "mc-navbar-links",
    "aria-label": "Main",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
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
          lineNumber: 102,
          columnNumber: 33
        }
      }, __jsx("a", {
        className: "mc-navbar-link",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103,
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
        lineNumber: 108,
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
        lineNumber: 114,
        columnNumber: 33
      }
    }, header.name, __jsx("span", {
      className: "mc-navbar-caret" + (openDropdown === header.name ? " mc-navbar-caret-open" : ""),
      "aria-hidden": "true",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 29
      }
    })), __jsx("div", {
      className: 'mc-navbar-dropdown' + (openDropdown === header.name ? ' mc-navbar-dropdown-open' : ''),
      role: "menu",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
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
            lineNumber: 144,
            columnNumber: 49
          }
        }, __jsx("span", {
          className: "mc-navbar-submenu-label",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 53
          }
        }, __jsx("span", {
          className: "mc-navbar-submenu-caret",
          "aria-hidden": "true",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 53
          }
        }), sub.name), __jsx("div", {
          className: "mc-navbar-submenu-panel",
          role: "menu",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 157,
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
              lineNumber: 161,
              columnNumber: 65
            }
          }, leaf.name) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
            href: leaf.to,
            key: leaf.name,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 172,
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
              lineNumber: 173,
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
            lineNumber: 190,
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
          lineNumber: 203,
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
          lineNumber: 204,
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
      lineNumber: 220,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: "mc-hamburger-line",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 21
    }
  }), __jsx("span", {
    className: "mc-hamburger-line",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 21
    }
  }), __jsx("span", {
    className: "mc-hamburger-line",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 21
    }
  }))), __jsx("div", {
    className: 'mc-mobile-scrim' + (menuOpen ? ' mc-mobile-scrim-open' : ''),
    onClick: closeAll,
    "aria-hidden": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 13
    }
  }), __jsx("aside", {
    id: "mc-mobile-drawer",
    className: 'mc-mobile-drawer' + (menuOpen ? ' mc-mobile-drawer-open' : ''),
    "aria-hidden": !menuOpen,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
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
      lineNumber: 244,
      columnNumber: 17
    }
  }), __jsx("nav", {
    className: "mc-mobile-drawer-links",
    "aria-label": "Mobile",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
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
          lineNumber: 256,
          columnNumber: 33
        }
      }, __jsx("a", {
        className: "mc-mobile-drawer-link",
        onClick: closeAll,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257,
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
        lineNumber: 264,
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
        lineNumber: 265,
        columnNumber: 33
      }
    }, header.name, __jsx("span", {
      className: "mc-mobile-drawer-caret" + (isOpen ? " mc-mobile-drawer-caret-open" : ""),
      "aria-hidden": "true",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 274,
        columnNumber: 37
      }
    })), __jsx("div", {
      className: 'mc-mobile-drawer-sublinks' + (isOpen ? ' mc-mobile-drawer-sublinks-open' : ''),
      "aria-hidden": !isOpen,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 283,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: "mc-mobile-drawer-sublinks-inner",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 290,
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
            lineNumber: 296,
            columnNumber: 49
          }
        }, __jsx("div", {
          className: "mc-mobile-drawer-subsection",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 297,
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
              lineNumber: 303,
              columnNumber: 61
            }
          }, leaf.name) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
            href: leaf.to,
            key: leaf.name,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 314,
              columnNumber: 61
            }
          }, __jsx("a", {
            className: "mc-mobile-drawer-sublink mc-mobile-drawer-sublink-nested",
            onClick: closeAll,
            tabIndex: isOpen ? 0 : -1,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 315,
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
            lineNumber: 332,
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
          lineNumber: 345,
          columnNumber: 45
        }
      }, __jsx("a", {
        className: "mc-mobile-drawer-sublink",
        onClick: closeAll,
        tabIndex: isOpen ? 0 : -1,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 346,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXIvTmF2YmFyLmpzIl0sIm5hbWVzIjpbIm5hdmJhcl9oZWFkZXJzIiwiU2l0ZU5hdmJhciIsIl9zIiwiX3VzZVN0YXRlIiwidXNlU3RhdGUiLCJtZW51T3BlbiIsInNldE1lbnVPcGVuIiwiX3VzZVN0YXRlMiIsIm9wZW5Ecm9wZG93biIsInNldE9wZW5Ecm9wZG93biIsIl91c2VTdGF0ZTMiLCJvcGVuTW9iaWxlU2VjdGlvbiIsInNldE9wZW5Nb2JpbGVTZWN0aW9uIiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJib2R5Iiwic3R5bGUiLCJvdmVyZmxvdyIsImNsb3NlQWxsIiwiX19qc3giLCJSZWFjdCIsIkZyYWdtZW50IiwiX19zZWxmIiwiX3RoaXMiLCJfX3NvdXJjZSIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsImNsYXNzTmFtZSIsInJvbGUiLCJMaW5rIiwiaHJlZiIsInNyYyIsImFsdCIsIm1hcCIsImhlYWRlciIsImhhc0Ryb3Bkb3duIiwic3ViaGVhZGVycyIsImxlbmd0aCIsInRvIiwia2V5IiwibmFtZSIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsInR5cGUiLCJvbkNsaWNrIiwic3ViIiwiY2hpbGRyZW4iLCJsZWFmIiwibGVhZkV4dCIsInN0YXJ0c1dpdGgiLCJ0YXJnZXQiLCJyZWwiLCJleHRlcm5hbCIsImlkIiwiaXNPcGVuIiwidGFiSW5kZXgiLCJfYyIsIiRSZWZyZXNoUmVnJCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ3RCO0FBQ1A7QUFFdEIsSUFBTUEsY0FBYyxHQUFHLENBQ25CO0VBQ0ksTUFBTSxFQUFFLE1BQU07RUFDZCxZQUFZLEVBQUUsQ0FDVjtJQUFFLE1BQU0sRUFBRSxVQUFVO0lBQUUsSUFBSSxFQUFFO0VBQWMsQ0FBQyxFQUMzQztJQUFFLE1BQU0sRUFBRSxP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QUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBO01BQUEsR0FDOUJULEtBQUE7UUFDSVUsU0FBUyxFQUFDLDBCQUEwQjtRQUNwQ2lCLE9BQU8sRUFBRTVCLFFBQVM7UUFDbEJ1QyxRQUFRLEVBQUVELE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFFO1FBQUFsQyxNQUFBLEVBQUFDLEtBQUE7UUFBQUMsUUFBQTtVQUFBQyxRQUFBLEVBQUFDLFlBQUE7VUFBQUMsVUFBQTtVQUFBQyxZQUFBO1FBQUE7TUFBQSxHQUV6Qm1CLEdBQUcsQ0FBQ0wsSUFDTixDQUNELENBQUM7SUFFZixDQUFDLENBQ0ksQ0FDSixDQUNKLENBQUM7RUFFZCxDQUFDLENBQ0EsQ0FDRixDQUNLLENBQUM7QUFFekIsQ0FBQztBQUFDeEMsRUFBQSxDQTVTSUQsVUFBVTtBQUFBeUQsRUFBQSxHQUFWekQsVUFBVTtBQThTREEseUVBQVUsRUFBQztBQUFBLElBQUF5RCxFQUFBO0FBQUFDLFlBQUEsQ0FBQUQsRUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wZW9wbGUvUkhBcy4xODIzMDljOWY4NWVmZTE1YTA2Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0ICcuL05hdmJhci5jc3MnO1xuXG5jb25zdCBuYXZiYXJfaGVhZGVycyA9IFtcbiAgICB7XG4gICAgICAgIFwibmFtZVwiOiBcIkhvbWVcIixcbiAgICAgICAgXCJzdWJoZWFkZXJzXCI6IFtcbiAgICAgICAgICAgIHsgXCJuYW1lXCI6IFwiTWNNdXJ0cnlcIiwgXCJ0b1wiOiBcIi9ob21lL2luZGV4XCIgfSxcbiAgICAgICAgICAgIHsgXCJuYW1lXCI6IFwiQWJvdXRcIiwgXCJ0b1wiOiBcIi9ob21lL2Fib3V0XCIgfSxcbiAgICAgICAgICAgIHsgXCJuYW1lXCI6IFwiQ2FsZW5kYXJcIiwgXCJ0b1wiOiBcIi9ob21lL2NhbGVuZGFyXCIgfSxcbiAgICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgICBcIm5hbWVcIjogXCJQZW9wbGVcIixcbiAgICAgICAgXCJzdWJoZWFkZXJzXCI6IFtcbiAgICAgICAgICAgIHsgXCJuYW1lXCI6IFwiTWNUZWFtXCIsIFwidG9cIjogXCIvcGVvcGxlL21jdGVhbVwiIH0sXG4gICAgICAgICAgICB7IFwibmFtZVwiOiBcIkFzc29jaWF0ZXNcIiwgXCJ0b1wiOiBcIi9wZW9wbGUvYXNzb2NpYXRlc1wiIH0sXG4gICAgICAgICAgICB7IFwibmFtZVwiOiBcIkFmZmluaXR5IEdyb3Vwc1wiLCBcInRvXCI6IFwiL3Blb3BsZS9tY211cnRyeWFmZmluaXR5Z3JvdXBzXCIgfSxcbiAgICAgICAgICAgIHsgXCJuYW1lXCI6IFwiQWNhZGVtaWMgRmVsbG93c1wiLCBcInRvXCI6IFwiL3Blb3BsZS9hY2FkZW1pY2ZlbGxvd3NcIiB9LFxuICAgICAgICAgICAgeyBcIm5hbWVcIjogXCJQZWVyIEFjYWRlbWljIEFkdmlzb3JzXCIsIFwidG9cIjogXCIvcGVvcGxlL3BhYXNcIiB9LFxuICAgICAgICAgICAgeyBcIm5hbWVcIjogXCJSSEFzXCIsIFwidG9cIjogXCIvcGVvcGxlL1JIQXNcIiB9LFxuICAgICAgICAgICAgeyBcIm5hbWVcIjogXCJIZWFkIENhcmVnaXZlcnNcIiwgXCJ0b1wiOiBcIi9wZW9wbGUvaGVhZGNhcmVnaXZlcnNcIiB9LFxuICAgICAgICAgICAgeyBcIm5hbWVcIjogXCJTTVJcIiwgXCJ0b1wiOiBcIi9wZW9wbGUvU01SXCIgfVxuICAgICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwibmFtZVwiOiBcIkdvdmVybm1lbnRcIixcbiAgICAgICAgXCJzdWJoZWFkZXJzXCI6IFtcbiAgICAgICAgICAgIHsgXCJuYW1lXCI6IFwiTWNDb3VydFwiLCBcInRvXCI6IFwiL2dvdmVybm1lbnQvY291cnRcIiB9LFxuICAgICAgICAgICAgeyBcIm5hbWVcIjogXCJDb21taXR0ZWVzXCIsIFwidG9cIjogXCIvZ292ZXJubWVudC9jb21taXR0ZWVzXCIgfSxcbiAgICAgICAgICAgIHsgXCJuYW1lXCI6IFwiTWNNaW5pc3RyeVwiLCBcInRvXCI6IFwiL2dvdmVybm1lbnQvbWNtaW5pc3RyeVwiIH1cbiAgICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgICBcIm5hbWVcIjogXCJSZXNvdXJjZXNcIixcbiAgICAgICAgXCJzdWJoZWFkZXJzXCI6IFtcbiAgICAgICAgICAgIHsgXCJuYW1lXCI6IFwiUm9vbSBSZXNlcnZhdGlvbnNcIiwgXCJ0b1wiOiBcIi9yZXNvdXJjZXMvcm9vbS1yZXNlcnZhdGlvbnNcIiB9LFxuICAgICAgICAgICAgeyBcIm5hbWVcIjogXCJQLUNhcmQgUmVxdWVzdHNcIiwgXCJ0b1wiOiBcIi9yZXNvdXJjZXMvcGNhcmQtcmVxdWVzdHNcIiB9LFxuICAgICAgICAgICAgeyBcIm5hbWVcIjogXCJNY0l0ZW1zIENoZWNrIE91dFwiLCBcInRvXCI6IFwiL3Jlc291cmNlcy9tY2l0ZW1zLWNoZWNrb3V0XCIgfSxcbiAgICAgICAgICAgIHsgXCJuYW1lXCI6IFwiTWNNdXJ0cnkgSW5ub3ZhdGlvbiBTcGFjZVwiLCBcInRvXCI6IFwiL3Jlc291cmNlcy9tY211cnRyeS1pbm5vdmF0aW9uLXNwYWNlXCIgfSxcbiAgICAgICAgICAgIHsgXCJuYW1lXCI6IFwiTWNMZWdpc2xhdGlvblwiLCBcInRvXCI6IFwiL3Jlc291cmNlcy9tY2xlZ2lzbGF0aW9uXCIgfSxcbiAgICAgICAgICAgIHsgXCJuYW1lXCI6IFwiRGl2ZXJzaXR5IFJlc291cmNlc1wiLCBcInRvXCI6IFwiL3Jlc291cmNlcy9kaXZlcnNpdHktcmVzb3VyY2VzXCIgfSxcblxuICAgICAgICAgICAgeyBcIm5hbWVcIjogXCJNY0ZVTmQgUmVxdWVzdHNcIiwgXCJ0b1wiOiBcIi9yZXNvdXJjZXMvbWNmdW5kLXJlcXVlc3RzXCIgfSxcbiAgICAgICAgICAgIHsgXCJuYW1lXCI6IFwiQnVkZ2V0IFNoZWV0XCIsIFwidG9cIjogXCJodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9zcHJlYWRzaGVldHMvZC8xaW1ORnk3Y3lhZHhpZWg3SlBjUFJ2TXpCLUxnTUhvek5rUnpVWF9Md3AxQS9lZGl0P3VzcD1zaGFyaW5nXCIgfSxcbiAgICAgICAgICAgIHsgXCJuYW1lXCI6IFwiRmluYW5jaWFsIEluY2x1c2l2aXR5XCIsIFwidG9cIjogXCIvcmVzb3VyY2VzL2ZpbmFuY2lhbC1pbmNsdXNpdml0eVwiIH1cbiAgICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgICBcIm5hbWVcIjogXCJPLVdlZWtcIixcbiAgICAgICAgXCJzdWJoZWFkZXJzXCI6IFtcbiAgICAgICAgICAgIHsgXCJuYW1lXCI6IFwiTy1XZWVrIEhvbWVcIiwgICAgICBcInRvXCI6IFwiL293ZWVrLzIwMjUtMjAyNiNob21lXCIgfSxcbiAgICAgICAgICAgIHsgXCJuYW1lXCI6IFwiQWJvdXQgdGhlIFRoZW1lXCIsICBcInRvXCI6IFwiL293ZWVrLzIwMjUtMjAyNiN0aGVtZVwiIH0sXG4gICAgICAgICAgICB7IFwibmFtZVwiOiBcIk1lZXQgdGhlIENvb3Jkc1wiLCAgXCJ0b1wiOiBcIi9vd2Vlay8yMDI1LTIwMjYjY29vcmRzXCIgfSxcbiAgICAgICAgICAgIHsgXCJuYW1lXCI6IFwiTy1XZWVrIEdyb3Vwc1wiLCAgICBcInRvXCI6IFwiL293ZWVrLzIwMjUtMjAyNiNncm91cHNcIiB9LFxuICAgICAgICAgICAgeyBcIm5hbWVcIjogXCJUb3VyIG9mIE1jTXVydHJ5XCIsIFwidG9cIjogXCIvb3dlZWsvMjAyNS0yMDI2I21jbXRvdXJcIiB9LFxuICAgICAgICAgICAgeyBcIm5hbWVcIjogXCJZb3VyIFJvb21cIiwgICAgICAgIFwidG9cIjogXCIvb3dlZWsvMjAyNS0yMDI2I3lvdXJyb29tXCIgfSxcbiAgICAgICAgICAgIHsgXCJuYW1lXCI6IFwiTy1XZWVrIEJvb2tcIiwgICAgICBcInRvXCI6IFwiL293ZWVrLzIwMjUtMjAyNiNvd2Vla2Jvb2tcIiB9LFxuICAgICAgICAgICAgeyBcIm5hbWVcIjogXCJDb250YWN0IEluZm9cIiwgICAgIFwidG9cIjogXCIvb3dlZWsvMjAyNS0yMDI2I2NvbnRhY3RcIiB9XG4gICAgICAgIF1cbiAgICB9XG5dO1xuXG5jb25zdCBTaXRlTmF2YmFyID0gKCkgPT4ge1xuICAgIGNvbnN0IFttZW51T3Blbiwgc2V0TWVudU9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtvcGVuRHJvcGRvd24sIHNldE9wZW5Ecm9wZG93bl0gPSB1c2VTdGF0ZShudWxsKTsgICAvLyB0b3AtbGV2ZWwgaXRlbSBuYW1lXG4gICAgY29uc3QgW29wZW5Nb2JpbGVTZWN0aW9uLCBzZXRPcGVuTW9iaWxlU2VjdGlvbl0gPSB1c2VTdGF0ZShudWxsKTtcblxuICAgIC8vIExvY2sgYm9keSBzY3JvbGwgd2hpbGUgdGhlIG1vYmlsZSBkcmF3ZXIgaXMgb3BlblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSByZXR1cm47XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBtZW51T3BlbiA/ICdoaWRkZW4nIDogJyc7XG4gICAgICAgIHJldHVybiAoKSA9PiB7IGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnJzsgfTtcbiAgICB9LCBbbWVudU9wZW5dKTtcblxuICAgIGNvbnN0IGNsb3NlQWxsID0gKCkgPT4ge1xuICAgICAgICBzZXRNZW51T3BlbihmYWxzZSk7XG4gICAgICAgIHNldE9wZW5Ecm9wZG93bihudWxsKTtcbiAgICAgICAgc2V0T3Blbk1vYmlsZVNlY3Rpb24obnVsbCk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwibWMtbmF2YmFyXCIgcm9sZT1cImJhbm5lclwiPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvaG9tZS9pbmRleFwiPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJtYy1uYXZiYXItYnJhbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvc3RhdGljL2xvZ29zL2hlcm8tY3Jlc3QucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1jLW5hdmJhci1jcmVzdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWMtbmF2YmFyLXdvcmRtYXJrXCI+TWNNdXJ0cnkgQ29sbGVnZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibWMtbmF2YmFyLWxpbmtzXCIgYXJpYS1sYWJlbD1cIk1haW5cIj5cbiAgICAgICAgICAgICAgICAgICAge25hdmJhcl9oZWFkZXJzLm1hcCgoaGVhZGVyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBoYXNEcm9wZG93biA9IGhlYWRlci5zdWJoZWFkZXJzICYmIGhlYWRlci5zdWJoZWFkZXJzLmxlbmd0aCA+IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWhhc0Ryb3Bkb3duKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17aGVhZGVyLnRvIHx8ICcjJ30ga2V5PXtoZWFkZXIubmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJtYy1uYXZiYXItbGlua1wiPntoZWFkZXIubmFtZX08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aGVhZGVyLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1jLW5hdmJhci1pdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRPcGVuRHJvcGRvd24oaGVhZGVyLm5hbWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldE9wZW5Ecm9wZG93bihudWxsKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYy1uYXZiYXItbGluayBtYy1uYXZiYXItdHJpZ2dlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD17b3BlbkRyb3Bkb3duID09PSBoZWFkZXIubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhhc3BvcHVwPVwibWVudVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0T3BlbkRyb3Bkb3duKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlbkRyb3Bkb3duID09PSBoZWFkZXIubmFtZSA/IG51bGwgOiBoZWFkZXIubmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtoZWFkZXIubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1wibWMtbmF2YmFyLWNhcmV0XCIgKyAob3BlbkRyb3Bkb3duID09PSBoZWFkZXIubmFtZSA/IFwiIG1jLW5hdmJhci1jYXJldC1vcGVuXCIgOiBcIlwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbWMtbmF2YmFyLWRyb3Bkb3duJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9wZW5Ecm9wZG93biA9PT0gaGVhZGVyLm5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnIG1jLW5hdmJhci1kcm9wZG93bi1vcGVuJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9sZT1cIm1lbnVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aGVhZGVyLnN1YmhlYWRlcnMubWFwKChzdWIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBOZXN0ZWQgc3VibWVudSAmcmRxdW874oCdIGBjaGlsZHJlbmAgYXJyYXksIG5vIGB0b2AuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN1Yi5jaGlsZHJlbiAmJiBzdWIuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17c3ViLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWMtbmF2YmFyLWRyb3Bkb3duLWxpbmsgbWMtbmF2YmFyLXN1Ym1lbnVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJtZW51aXRlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD1cIm1lbnVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1jLW5hdmJhci1zdWJtZW51LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWMtbmF2YmFyLXN1Ym1lbnUtY2FyZXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N1Yi5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1jLW5hdmJhci1zdWJtZW51LXBhbmVsXCIgcm9sZT1cIm1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N1Yi5jaGlsZHJlbi5tYXAoKGxlYWYpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxlYWZFeHQgPSBsZWFmLnRvICYmIGxlYWYudG8uc3RhcnRzV2l0aCgnaHR0cCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxlYWZFeHQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtsZWFmLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2xlYWYudG99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYy1uYXZiYXItZHJvcGRvd24tbGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJtZW51aXRlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGVhZi5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17bGVhZi50b30ga2V5PXtsZWFmLm5hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWMtbmF2YmFyLWRyb3Bkb3duLWxpbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9sZT1cIm1lbnVpdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE9wZW5Ecm9wZG93bihudWxsKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xlYWYubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGV4dGVybmFsID0gc3ViLnRvICYmIHN1Yi50by5zdGFydHNXaXRoKCdodHRwJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV4dGVybmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17c3ViLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17c3ViLnRvfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWMtbmF2YmFyLWRyb3Bkb3duLWxpbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJtZW51aXRlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N1Yi5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtzdWIudG99IGtleT17c3ViLm5hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYy1uYXZiYXItZHJvcGRvd24tbGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9sZT1cIm1lbnVpdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuRHJvcGRvd24obnVsbCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N1Yi5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvbmF2PlxuXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWMtbmF2YmFyLWhhbWJ1cmdlclwiXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9e21lbnVPcGVuID8gJ0Nsb3NlIG1lbnUnIDogJ09wZW4gbWVudSd9XG4gICAgICAgICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9e21lbnVPcGVufVxuICAgICAgICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwibWMtbW9iaWxlLWRyYXdlclwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE1lbnVPcGVuKHRydWUpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWMtaGFtYnVyZ2VyLWxpbmVcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtYy1oYW1idXJnZXItbGluZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1jLWhhbWJ1cmdlci1saW5lXCIgLz5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvaGVhZGVyPlxuXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsnbWMtbW9iaWxlLXNjcmltJyArIChtZW51T3BlbiA/ICcgbWMtbW9iaWxlLXNjcmltLW9wZW4nIDogJycpfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Nsb3NlQWxsfVxuICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGFzaWRlXG4gICAgICAgICAgICAgICAgaWQ9XCJtYy1tb2JpbGUtZHJhd2VyXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9eydtYy1tb2JpbGUtZHJhd2VyJyArIChtZW51T3BlbiA/ICcgbWMtbW9iaWxlLWRyYXdlci1vcGVuJyA6ICcnKX1cbiAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj17IW1lbnVPcGVufVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1jLW1vYmlsZS1kcmF3ZXItY2xvc2VcIlxuICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiQ2xvc2UgbWVudVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Nsb3NlQWxsfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJtYy1tb2JpbGUtZHJhd2VyLWxpbmtzXCIgYXJpYS1sYWJlbD1cIk1vYmlsZVwiPlxuICAgICAgICAgICAgICAgICAgICB7bmF2YmFyX2hlYWRlcnMubWFwKChoZWFkZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGhhc0Ryb3Bkb3duID0gaGVhZGVyLnN1YmhlYWRlcnMgJiYgaGVhZGVyLnN1YmhlYWRlcnMubGVuZ3RoID4gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzT3BlbiA9IG9wZW5Nb2JpbGVTZWN0aW9uID09PSBoZWFkZXIubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaGFzRHJvcGRvd24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtoZWFkZXIudG8gfHwgJyMnfSBrZXk9e2hlYWRlci5uYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm1jLW1vYmlsZS1kcmF3ZXItbGlua1wiIG9uQ2xpY2s9e2Nsb3NlQWxsfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aGVhZGVyLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aGVhZGVyLm5hbWV9IGNsYXNzTmFtZT1cIm1jLW1vYmlsZS1kcmF3ZXItc2VjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1jLW1vYmlsZS1kcmF3ZXItbGluayBtYy1tb2JpbGUtZHJhd2VyLXRyaWdnZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD17aXNPcGVufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRPcGVuTW9iaWxlU2VjdGlvbihpc09wZW4gPyBudWxsIDogaGVhZGVyLm5hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtoZWFkZXIubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtYy1tb2JpbGUtZHJhd2VyLWNhcmV0XCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaXNPcGVuID8gXCIgbWMtbW9iaWxlLWRyYXdlci1jYXJldC1vcGVuXCIgOiBcIlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBTdWJsaW5rcyBhbHdheXMgbW91bnRlZDsgQ1NTIGFuaW1hdGVzIHRoZSBncmlkLXJvdyBmcm9tIDBmciB0byAxZnIgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ21jLW1vYmlsZS1kcmF3ZXItc3VibGlua3MnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaXNPcGVuID8gJyBtYy1tb2JpbGUtZHJhd2VyLXN1YmxpbmtzLW9wZW4nIDogJycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj17IWlzT3Blbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYy1tb2JpbGUtZHJhd2VyLXN1YmxpbmtzLWlubmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aGVhZGVyLnN1YmhlYWRlcnMubWFwKChzdWIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBOZXN0ZWQgZ3JvdXAgb24gbW9iaWxlOiByZW5kZXIgYSBzbWFsbCBzZWN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaGVhZGVyIGZvbGxvd2VkIGJ5IGl0cyBpbmRlbnRlZCBjaGlsZHJlbi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3ViLmNoaWxkcmVuICYmIHN1Yi5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtzdWIubmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYy1tb2JpbGUtZHJhd2VyLXN1YnNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N1Yi5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdWIuY2hpbGRyZW4ubWFwKChsZWFmKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxlYWZFeHQgPSBsZWFmLnRvICYmIGxlYWYudG8uc3RhcnRzV2l0aCgnaHR0cCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbGVhZkV4dCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtsZWFmLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17bGVhZi50b31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1jLW1vYmlsZS1kcmF3ZXItc3VibGluayBtYy1tb2JpbGUtZHJhd2VyLXN1YmxpbmstbmVzdGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17aXNPcGVuID8gMCA6IC0xfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsZWFmLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtsZWFmLnRvfSBrZXk9e2xlYWYubmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWMtbW9iaWxlLWRyYXdlci1zdWJsaW5rIG1jLW1vYmlsZS1kcmF3ZXItc3VibGluay1uZXN0ZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtjbG9zZUFsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9e2lzT3BlbiA/IDAgOiAtMX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsZWFmLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXh0ZXJuYWwgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWIudG8gJiYgc3ViLnRvLnN0YXJ0c1dpdGgoJ2h0dHAnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXh0ZXJuYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtzdWIubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtzdWIudG99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYy1tb2JpbGUtZHJhd2VyLXN1YmxpbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXtpc09wZW4gPyAwIDogLTF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N1Yi5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtzdWIudG99IGtleT17c3ViLm5hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYy1tb2JpbGUtZHJhd2VyLXN1YmxpbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Nsb3NlQWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXtpc09wZW4gPyAwIDogLTF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N1Yi5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICA8L2FzaWRlPlxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaXRlTmF2YmFyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==