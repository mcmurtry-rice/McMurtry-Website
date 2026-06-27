webpackHotUpdate_N_E("pages/home/index",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXIvTmF2YmFyLmpzIl0sIm5hbWVzIjpbIm5hdmJhcl9oZWFkZXJzIiwiU2l0ZU5hdmJhciIsIl9zIiwiX3VzZVN0YXRlIiwidXNlU3RhdGUiLCJtZW51T3BlbiIsInNldE1lbnVPcGVuIiwiX3VzZVN0YXRlMiIsIm9wZW5Ecm9wZG93biIsInNldE9wZW5Ecm9wZG93biIsIl91c2VTdGF0ZTMiLCJvcGVuTW9iaWxlU2VjdGlvbiIsInNldE9wZW5Nb2JpbGVTZWN0aW9uIiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJib2R5Iiwic3R5bGUiLCJvdmVyZmxvdyIsImNsb3NlQWxsIiwiX19qc3giLCJSZWFjdCIsIkZyYWdtZW50IiwiX19zZWxmIiwiX3RoaXMiLCJfX3NvdXJjZSIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsImNsYXNzTmFtZSIsInJvbGUiLCJMaW5rIiwiaHJlZiIsInNyYyIsImFsdCIsIm1hcCIsImhlYWRlciIsImhhc0Ryb3Bkb3duIiwic3ViaGVhZGVycyIsImxlbmd0aCIsInRvIiwia2V5IiwibmFtZSIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsInR5cGUiLCJvbkNsaWNrIiwic3ViIiwiY2hpbGRyZW4iLCJsZWFmIiwibGVhZkV4dCIsInN0YXJ0c1dpdGgiLCJ0YXJnZXQiLCJyZWwiLCJleHRlcm5hbCIsImlkIiwiaXNPcGVuIiwidGFiSW5kZXgiLCJfYyIsIiRSZWZyZXNoUmVnJCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ3RCO0FBQ1A7QUFFdEIsSUFBTUEsY0FBYyxHQUFHLENBQ25CO0VBQ0ksTUFBTSxFQUFFLE1BQU07RUFDZCxZQUFZLEVBQUUsQ0FDVjtJQUFFLE1BQU0sRUFBRSxVQUFVO0lBQUUsSUFBSSxFQUFFO0VBQWMsQ0FBQyxFQUMzQztJQUFFLE1BQU0sRUFBRSxP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QUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBO01BQUEsR0FDOUJULEtBQUE7UUFDSVUsU0FBUyxFQUFDLDBCQUEwQjtRQUNwQ2lCLE9BQU8sRUFBRTVCLFFBQVM7UUFDbEJ1QyxRQUFRLEVBQUVELE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFFO1FBQUFsQyxNQUFBLEVBQUFDLEtBQUE7UUFBQUMsUUFBQTtVQUFBQyxRQUFBLEVBQUFDLFlBQUE7VUFBQUMsVUFBQTtVQUFBQyxZQUFBO1FBQUE7TUFBQSxHQUV6Qm1CLEdBQUcsQ0FBQ0wsSUFDTixDQUNELENBQUM7SUFFZixDQUFDLENBQ0ksQ0FDSixDQUNKLENBQUM7RUFFZCxDQUFDLENBQ0EsQ0FDRixDQUNLLENBQUM7QUFFekIsQ0FBQztBQUFDeEMsRUFBQSxDQTVTSUQsVUFBVTtBQUFBeUQsRUFBQSxHQUFWekQsVUFBVTtBQThTREEseUVBQVUsRUFBQztBQUFBLElBQUF5RCxFQUFBO0FBQUFDLFlBQUEsQ0FBQUQsRUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ob21lL2luZGV4LjE4MjMwOWM5Zjg1ZWZlMTVhMDZmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgJy4vTmF2YmFyLmNzcyc7XG5cbmNvbnN0IG5hdmJhcl9oZWFkZXJzID0gW1xuICAgIHtcbiAgICAgICAgXCJuYW1lXCI6IFwiSG9tZVwiLFxuICAgICAgICBcInN1YmhlYWRlcnNcIjogW1xuICAgICAgICAgICAgeyBcIm5hbWVcIjogXCJNY011cnRyeVwiLCBcInRvXCI6IFwiL2hvbWUvaW5kZXhcIiB9LFxuICAgICAgICAgICAgeyBcIm5hbWVcIjogXCJBYm91dFwiLCBcInRvXCI6IFwiL2hvbWUvYWJvdXRcIiB9LFxuICAgICAgICAgICAgeyBcIm5hbWVcIjogXCJDYWxlbmRhclwiLCBcInRvXCI6IFwiL2hvbWUvY2FsZW5kYXJcIiB9LFxuICAgICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwibmFtZVwiOiBcIlBlb3BsZVwiLFxuICAgICAgICBcInN1YmhlYWRlcnNcIjogW1xuICAgICAgICAgICAgeyBcIm5hbWVcIjogXCJNY1RlYW1cIiwgXCJ0b1wiOiBcIi9wZW9wbGUvbWN0ZWFtXCIgfSxcbiAgICAgICAgICAgIHsgXCJuYW1lXCI6IFwiQXNzb2NpYXRlc1wiLCBcInRvXCI6IFwiL3Blb3BsZS9hc3NvY2lhdGVzXCIgfSxcbiAgICAgICAgICAgIHsgXCJuYW1lXCI6IFwiQWZmaW5pdHkgR3JvdXBzXCIsIFwidG9cIjogXCIvcGVvcGxlL21jbXVydHJ5YWZmaW5pdHlncm91cHNcIiB9LFxuICAgICAgICAgICAgeyBcIm5hbWVcIjogXCJBY2FkZW1pYyBGZWxsb3dzXCIsIFwidG9cIjogXCIvcGVvcGxlL2FjYWRlbWljZmVsbG93c1wiIH0sXG4gICAgICAgICAgICB7IFwibmFtZVwiOiBcIlBlZXIgQWNhZGVtaWMgQWR2aXNvcnNcIiwgXCJ0b1wiOiBcIi9wZW9wbGUvcGFhc1wiIH0sXG4gICAgICAgICAgICB7IFwibmFtZVwiOiBcIlJIQXNcIiwgXCJ0b1wiOiBcIi9wZW9wbGUvUkhBc1wiIH0sXG4gICAgICAgICAgICB7IFwibmFtZVwiOiBcIkhlYWQgQ2FyZWdpdmVyc1wiLCBcInRvXCI6IFwiL3Blb3BsZS9oZWFkY2FyZWdpdmVyc1wiIH0sXG4gICAgICAgICAgICB7IFwibmFtZVwiOiBcIlNNUlwiLCBcInRvXCI6IFwiL3Blb3BsZS9TTVJcIiB9XG4gICAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJuYW1lXCI6IFwiR292ZXJubWVudFwiLFxuICAgICAgICBcInN1YmhlYWRlcnNcIjogW1xuICAgICAgICAgICAgeyBcIm5hbWVcIjogXCJNY0NvdXJ0XCIsIFwidG9cIjogXCIvZ292ZXJubWVudC9jb3VydFwiIH0sXG4gICAgICAgICAgICB7IFwibmFtZVwiOiBcIkNvbW1pdHRlZXNcIiwgXCJ0b1wiOiBcIi9nb3Zlcm5tZW50L2NvbW1pdHRlZXNcIiB9LFxuICAgICAgICAgICAgeyBcIm5hbWVcIjogXCJNY01pbmlzdHJ5XCIsIFwidG9cIjogXCIvZ292ZXJubWVudC9tY21pbmlzdHJ5XCIgfVxuICAgICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwibmFtZVwiOiBcIlJlc291cmNlc1wiLFxuICAgICAgICBcInN1YmhlYWRlcnNcIjogW1xuICAgICAgICAgICAgeyBcIm5hbWVcIjogXCJSb29tIFJlc2VydmF0aW9uc1wiLCBcInRvXCI6IFwiL3Jlc291cmNlcy9yb29tLXJlc2VydmF0aW9uc1wiIH0sXG4gICAgICAgICAgICB7IFwibmFtZVwiOiBcIlAtQ2FyZCBSZXF1ZXN0c1wiLCBcInRvXCI6IFwiL3Jlc291cmNlcy9wY2FyZC1yZXF1ZXN0c1wiIH0sXG4gICAgICAgICAgICB7IFwibmFtZVwiOiBcIk1jSXRlbXMgQ2hlY2sgT3V0XCIsIFwidG9cIjogXCIvcmVzb3VyY2VzL21jaXRlbXMtY2hlY2tvdXRcIiB9LFxuICAgICAgICAgICAgeyBcIm5hbWVcIjogXCJNY011cnRyeSBJbm5vdmF0aW9uIFNwYWNlXCIsIFwidG9cIjogXCIvcmVzb3VyY2VzL21jbXVydHJ5LWlubm92YXRpb24tc3BhY2VcIiB9LFxuICAgICAgICAgICAgeyBcIm5hbWVcIjogXCJNY0xlZ2lzbGF0aW9uXCIsIFwidG9cIjogXCIvcmVzb3VyY2VzL21jbGVnaXNsYXRpb25cIiB9LFxuICAgICAgICAgICAgeyBcIm5hbWVcIjogXCJEaXZlcnNpdHkgUmVzb3VyY2VzXCIsIFwidG9cIjogXCIvcmVzb3VyY2VzL2RpdmVyc2l0eS1yZXNvdXJjZXNcIiB9LFxuXG4gICAgICAgICAgICB7IFwibmFtZVwiOiBcIk1jRlVOZCBSZXF1ZXN0c1wiLCBcInRvXCI6IFwiL3Jlc291cmNlcy9tY2Z1bmQtcmVxdWVzdHNcIiB9LFxuICAgICAgICAgICAgeyBcIm5hbWVcIjogXCJCdWRnZXQgU2hlZXRcIiwgXCJ0b1wiOiBcImh0dHBzOi8vZG9jcy5nb29nbGUuY29tL3NwcmVhZHNoZWV0cy9kLzFpbU5GeTdjeWFkeGllaDdKUGNQUnZNekItTGdNSG96TmtSelVYX0x3cDFBL2VkaXQ/dXNwPXNoYXJpbmdcIiB9LFxuICAgICAgICAgICAgeyBcIm5hbWVcIjogXCJGaW5hbmNpYWwgSW5jbHVzaXZpdHlcIiwgXCJ0b1wiOiBcIi9yZXNvdXJjZXMvZmluYW5jaWFsLWluY2x1c2l2aXR5XCIgfVxuICAgICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwibmFtZVwiOiBcIk8tV2Vla1wiLFxuICAgICAgICBcInN1YmhlYWRlcnNcIjogW1xuICAgICAgICAgICAgeyBcIm5hbWVcIjogXCJPLVdlZWsgSG9tZVwiLCAgICAgIFwidG9cIjogXCIvb3dlZWsvMjAyNS0yMDI2I2hvbWVcIiB9LFxuICAgICAgICAgICAgeyBcIm5hbWVcIjogXCJBYm91dCB0aGUgVGhlbWVcIiwgIFwidG9cIjogXCIvb3dlZWsvMjAyNS0yMDI2I3RoZW1lXCIgfSxcbiAgICAgICAgICAgIHsgXCJuYW1lXCI6IFwiTWVldCB0aGUgQ29vcmRzXCIsICBcInRvXCI6IFwiL293ZWVrLzIwMjUtMjAyNiNjb29yZHNcIiB9LFxuICAgICAgICAgICAgeyBcIm5hbWVcIjogXCJPLVdlZWsgR3JvdXBzXCIsICAgIFwidG9cIjogXCIvb3dlZWsvMjAyNS0yMDI2I2dyb3Vwc1wiIH0sXG4gICAgICAgICAgICB7IFwibmFtZVwiOiBcIlRvdXIgb2YgTWNNdXJ0cnlcIiwgXCJ0b1wiOiBcIi9vd2Vlay8yMDI1LTIwMjYjbWNtdG91clwiIH0sXG4gICAgICAgICAgICB7IFwibmFtZVwiOiBcIllvdXIgUm9vbVwiLCAgICAgICAgXCJ0b1wiOiBcIi9vd2Vlay8yMDI1LTIwMjYjeW91cnJvb21cIiB9LFxuICAgICAgICAgICAgeyBcIm5hbWVcIjogXCJPLVdlZWsgQm9va1wiLCAgICAgIFwidG9cIjogXCIvb3dlZWsvMjAyNS0yMDI2I293ZWVrYm9va1wiIH0sXG4gICAgICAgICAgICB7IFwibmFtZVwiOiBcIkNvbnRhY3QgSW5mb1wiLCAgICAgXCJ0b1wiOiBcIi9vd2Vlay8yMDI1LTIwMjYjY29udGFjdFwiIH1cbiAgICAgICAgXVxuICAgIH1cbl07XG5cbmNvbnN0IFNpdGVOYXZiYXIgPSAoKSA9PiB7XG4gICAgY29uc3QgW21lbnVPcGVuLCBzZXRNZW51T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW29wZW5Ecm9wZG93biwgc2V0T3BlbkRyb3Bkb3duXSA9IHVzZVN0YXRlKG51bGwpOyAgIC8vIHRvcC1sZXZlbCBpdGVtIG5hbWVcbiAgICBjb25zdCBbb3Blbk1vYmlsZVNlY3Rpb24sIHNldE9wZW5Nb2JpbGVTZWN0aW9uXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gICAgLy8gTG9jayBib2R5IHNjcm9sbCB3aGlsZSB0aGUgbW9iaWxlIGRyYXdlciBpcyBvcGVuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybjtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IG1lbnVPcGVuID8gJ2hpZGRlbicgOiAnJztcbiAgICAgICAgcmV0dXJuICgpID0+IHsgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICcnOyB9O1xuICAgIH0sIFttZW51T3Blbl0pO1xuXG4gICAgY29uc3QgY2xvc2VBbGwgPSAoKSA9PiB7XG4gICAgICAgIHNldE1lbnVPcGVuKGZhbHNlKTtcbiAgICAgICAgc2V0T3BlbkRyb3Bkb3duKG51bGwpO1xuICAgICAgICBzZXRPcGVuTW9iaWxlU2VjdGlvbihudWxsKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJtYy1uYXZiYXJcIiByb2xlPVwiYmFubmVyXCI+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ob21lL2luZGV4XCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm1jLW5hdmJhci1icmFuZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9zdGF0aWMvbG9nb3MvaGVyby1jcmVzdC5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWMtbmF2YmFyLWNyZXN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtYy1uYXZiYXItd29yZG1hcmtcIj5NY011cnRyeSBDb2xsZWdlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJtYy1uYXZiYXItbGlua3NcIiBhcmlhLWxhYmVsPVwiTWFpblwiPlxuICAgICAgICAgICAgICAgICAgICB7bmF2YmFyX2hlYWRlcnMubWFwKChoZWFkZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGhhc0Ryb3Bkb3duID0gaGVhZGVyLnN1YmhlYWRlcnMgJiYgaGVhZGVyLnN1YmhlYWRlcnMubGVuZ3RoID4gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaGFzRHJvcGRvd24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtoZWFkZXIudG8gfHwgJyMnfSBrZXk9e2hlYWRlci5uYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm1jLW5hdmJhci1saW5rXCI+e2hlYWRlci5uYW1lfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtoZWFkZXIubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWMtbmF2YmFyLWl0ZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldE9wZW5Ecm9wZG93bihoZWFkZXIubmFtZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0T3BlbkRyb3Bkb3duKG51bGwpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1jLW5hdmJhci1saW5rIG1jLW5hdmJhci10cmlnZ2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPXtvcGVuRHJvcGRvd24gPT09IGhlYWRlci5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGFzcG9wdXA9XCJtZW51XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRPcGVuRHJvcGRvd24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuRHJvcGRvd24gPT09IGhlYWRlci5uYW1lID8gbnVsbCA6IGhlYWRlci5uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2hlYWRlci5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJtYy1uYXZiYXItY2FyZXRcIiArIChvcGVuRHJvcGRvd24gPT09IGhlYWRlci5uYW1lID8gXCIgbWMtbmF2YmFyLWNhcmV0LW9wZW5cIiA6IFwiXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdtYy1uYXZiYXItZHJvcGRvd24nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob3BlbkRyb3Bkb3duID09PSBoZWFkZXIubmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICcgbWMtbmF2YmFyLWRyb3Bkb3duLW9wZW4nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb2xlPVwibWVudVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtoZWFkZXIuc3ViaGVhZGVycy5tYXAoKHN1YikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5lc3RlZCBzdWJtZW51ICZyZHF1bzvigJ0gYGNoaWxkcmVuYCBhcnJheSwgbm8gYHRvYC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3ViLmNoaWxkcmVuICYmIHN1Yi5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtzdWIubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYy1uYXZiYXItZHJvcGRvd24tbGluayBtYy1uYXZiYXItc3VibWVudVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9sZT1cIm1lbnVpdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhhc3BvcHVwPVwibWVudVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWMtbmF2YmFyLXN1Ym1lbnUtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYy1uYXZiYXItc3VibWVudS1jYXJldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3ViLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWMtbmF2YmFyLXN1Ym1lbnUtcGFuZWxcIiByb2xlPVwibWVudVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3ViLmNoaWxkcmVuLm1hcCgobGVhZikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGVhZkV4dCA9IGxlYWYudG8gJiYgbGVhZi50by5zdGFydHNXaXRoKCdodHRwJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbGVhZkV4dCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2xlYWYubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17bGVhZi50b31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1jLW5hdmJhci1kcm9wZG93bi1saW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9sZT1cIm1lbnVpdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsZWFmLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtsZWFmLnRvfSBrZXk9e2xlYWYubmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYy1uYXZiYXItZHJvcGRvd24tbGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb2xlPVwibWVudWl0ZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0T3BlbkRyb3Bkb3duKG51bGwpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGVhZi5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXh0ZXJuYWwgPSBzdWIudG8gJiYgc3ViLnRvLnN0YXJ0c1dpdGgoJ2h0dHAnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXh0ZXJuYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtzdWIubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtzdWIudG99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYy1uYXZiYXItZHJvcGRvd24tbGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9sZT1cIm1lbnVpdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3ViLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3N1Yi50b30ga2V5PXtzdWIubmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1jLW5hdmJhci1kcm9wZG93bi1saW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb2xlPVwibWVudWl0ZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE9wZW5Ecm9wZG93bihudWxsKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3ViLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC9uYXY+XG5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYy1uYXZiYXItaGFtYnVyZ2VyXCJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17bWVudU9wZW4gPyAnQ2xvc2UgbWVudScgOiAnT3BlbiBtZW51J31cbiAgICAgICAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD17bWVudU9wZW59XG4gICAgICAgICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJtYy1tb2JpbGUtZHJhd2VyXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TWVudU9wZW4odHJ1ZSl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtYy1oYW1idXJnZXItbGluZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1jLWhhbWJ1cmdlci1saW5lXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWMtaGFtYnVyZ2VyLWxpbmVcIiAvPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9oZWFkZXI+XG5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9eydtYy1tb2JpbGUtc2NyaW0nICsgKG1lbnVPcGVuID8gJyBtYy1tb2JpbGUtc2NyaW0tb3BlbicgOiAnJyl9XG4gICAgICAgICAgICAgICAgb25DbGljaz17Y2xvc2VBbGx9XG4gICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8YXNpZGVcbiAgICAgICAgICAgICAgICBpZD1cIm1jLW1vYmlsZS1kcmF3ZXJcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17J21jLW1vYmlsZS1kcmF3ZXInICsgKG1lbnVPcGVuID8gJyBtYy1tb2JpbGUtZHJhd2VyLW9wZW4nIDogJycpfVxuICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPXshbWVudU9wZW59XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWMtbW9iaWxlLWRyYXdlci1jbG9zZVwiXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZSBtZW51XCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17Y2xvc2VBbGx9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm1jLW1vYmlsZS1kcmF3ZXItbGlua3NcIiBhcmlhLWxhYmVsPVwiTW9iaWxlXCI+XG4gICAgICAgICAgICAgICAgICAgIHtuYXZiYXJfaGVhZGVycy5tYXAoKGhlYWRlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaGFzRHJvcGRvd24gPSBoZWFkZXIuc3ViaGVhZGVycyAmJiBoZWFkZXIuc3ViaGVhZGVycy5sZW5ndGggPiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNPcGVuID0gb3Blbk1vYmlsZVNlY3Rpb24gPT09IGhlYWRlci5uYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFoYXNEcm9wZG93bikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2hlYWRlci50byB8fCAnIyd9IGtleT17aGVhZGVyLm5hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibWMtbW9iaWxlLWRyYXdlci1saW5rXCIgb25DbGljaz17Y2xvc2VBbGx9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtoZWFkZXIubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtoZWFkZXIubmFtZX0gY2xhc3NOYW1lPVwibWMtbW9iaWxlLWRyYXdlci1zZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWMtbW9iaWxlLWRyYXdlci1saW5rIG1jLW1vYmlsZS1kcmF3ZXItdHJpZ2dlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPXtpc09wZW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldE9wZW5Nb2JpbGVTZWN0aW9uKGlzT3BlbiA/IG51bGwgOiBoZWFkZXIubmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2hlYWRlci5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1jLW1vYmlsZS1kcmF3ZXItY2FyZXRcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpc09wZW4gPyBcIiBtYy1tb2JpbGUtZHJhd2VyLWNhcmV0LW9wZW5cIiA6IFwiXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFN1YmxpbmtzIGFsd2F5cyBtb3VudGVkOyBDU1MgYW5pbWF0ZXMgdGhlIGdyaWQtcm93IGZyb20gMGZyIHRvIDFmciAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbWMtbW9iaWxlLWRyYXdlci1zdWJsaW5rcycgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpc09wZW4gPyAnIG1jLW1vYmlsZS1kcmF3ZXItc3VibGlua3Mtb3BlbicgOiAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPXshaXNPcGVufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1jLW1vYmlsZS1kcmF3ZXItc3VibGlua3MtaW5uZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtoZWFkZXIuc3ViaGVhZGVycy5tYXAoKHN1YikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5lc3RlZCBncm91cCBvbiBtb2JpbGU6IHJlbmRlciBhIHNtYWxsIHNlY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBoZWFkZXIgZm9sbG93ZWQgYnkgaXRzIGluZGVudGVkIGNoaWxkcmVuLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdWIuY2hpbGRyZW4gJiYgc3ViLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e3N1Yi5uYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1jLW1vYmlsZS1kcmF3ZXItc3Vic2VjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3ViLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N1Yi5jaGlsZHJlbi5tYXAoKGxlYWYpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGVhZkV4dCA9IGxlYWYudG8gJiYgbGVhZi50by5zdGFydHNXaXRoKCdodHRwJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBsZWFmRXh0ID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2xlYWYubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtsZWFmLnRvfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWMtbW9iaWxlLWRyYXdlci1zdWJsaW5rIG1jLW1vYmlsZS1kcmF3ZXItc3VibGluay1uZXN0ZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXtpc09wZW4gPyAwIDogLTF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xlYWYubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2xlYWYudG99IGtleT17bGVhZi5uYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYy1tb2JpbGUtZHJhd2VyLXN1YmxpbmsgbWMtbW9iaWxlLWRyYXdlci1zdWJsaW5rLW5lc3RlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Nsb3NlQWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17aXNPcGVuID8gMCA6IC0xfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xlYWYubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBleHRlcm5hbCA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Yi50byAmJiBzdWIudG8uc3RhcnRzV2l0aCgnaHR0cCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChleHRlcm5hbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3N1Yi5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e3N1Yi50b31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1jLW1vYmlsZS1kcmF3ZXItc3VibGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9e2lzT3BlbiA/IDAgOiAtMX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3ViLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3N1Yi50b30ga2V5PXtzdWIubmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1jLW1vYmlsZS1kcmF3ZXItc3VibGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17Y2xvc2VBbGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9e2lzT3BlbiA/IDAgOiAtMX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3ViLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgIDwvYXNpZGU+XG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpdGVOYXZiYXI7XG4iXSwic291cmNlUm9vdCI6IiJ9