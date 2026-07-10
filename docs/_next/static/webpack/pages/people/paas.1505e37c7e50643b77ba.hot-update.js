webpackHotUpdate_N_E("pages/people/paas",{

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
  }, {
    "name": "Divisional Advisors",
    "to": "/people/divisionaladvisors"
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXIvTmF2YmFyLmpzIl0sIm5hbWVzIjpbIm5hdmJhcl9oZWFkZXJzIiwiU2l0ZU5hdmJhciIsIl9zIiwiX3VzZVN0YXRlIiwidXNlU3RhdGUiLCJtZW51T3BlbiIsInNldE1lbnVPcGVuIiwiX3VzZVN0YXRlMiIsIm9wZW5Ecm9wZG93biIsInNldE9wZW5Ecm9wZG93biIsIl91c2VTdGF0ZTMiLCJvcGVuTW9iaWxlU2VjdGlvbiIsInNldE9wZW5Nb2JpbGVTZWN0aW9uIiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJib2R5Iiwic3R5bGUiLCJvdmVyZmxvdyIsImNsb3NlQWxsIiwiX19qc3giLCJSZWFjdCIsIkZyYWdtZW50IiwiX19zZWxmIiwiX3RoaXMiLCJfX3NvdXJjZSIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsImNsYXNzTmFtZSIsInJvbGUiLCJMaW5rIiwiaHJlZiIsInNyYyIsImFsdCIsIm1hcCIsImhlYWRlciIsImhhc0Ryb3Bkb3duIiwic3ViaGVhZGVycyIsImxlbmd0aCIsInRvIiwia2V5IiwibmFtZSIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsInR5cGUiLCJvbkNsaWNrIiwic3ViIiwiY2hpbGRyZW4iLCJsZWFmIiwibGVhZkV4dCIsInN0YXJ0c1dpdGgiLCJ0YXJnZXQiLCJyZWwiLCJleHRlcm5hbCIsImlkIiwiaXNPcGVuIiwidGFiSW5kZXgiLCJfYyIsIiRSZWZyZXNoUmVnJCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ3RCO0FBQ1A7QUFFdEIsSUFBTUEsY0FBYyxHQUFHLENBQ25CO0VBQ0ksTUFBTSxFQUFFLE1BQU07RUFDZCxZQUFZLEVBQUUsQ0FDVjtJQUFFLE1BQU0sRUFBRSxVQUFVO0lBQUUsSUFBSSxFQUFFO0VBQWMsQ0FBQyxFQUMzQztJQUFFLE1BQU0sRUFBRSxP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QTtNQUFBLEdBRXpCbUIsR0FBRyxDQUFDTCxJQUNOLENBQ0QsQ0FBQztJQUVmLENBQUMsQ0FDSSxDQUNKLENBQ0osQ0FBQztFQUVkLENBQUMsQ0FDQSxDQUNGLENBQ0ssQ0FBQztBQUV6QixDQUFDO0FBQUN4QyxFQUFBLENBNVNJRCxVQUFVO0FBQUF5RCxFQUFBLEdBQVZ6RCxVQUFVO0FBOFNEQSx5RUFBVSxFQUFDO0FBQUEsSUFBQXlELEVBQUE7QUFBQUMsWUFBQSxDQUFBRCxFQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Blb3BsZS9wYWFzLjE1MDVlMzdjN2U1MDY0M2I3N2JhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgJy4vTmF2YmFyLmNzcyc7XG5cbmNvbnN0IG5hdmJhcl9oZWFkZXJzID0gW1xuICAgIHtcbiAgICAgICAgXCJuYW1lXCI6IFwiSG9tZVwiLFxuICAgICAgICBcInN1YmhlYWRlcnNcIjogW1xuICAgICAgICAgICAgeyBcIm5hbWVcIjogXCJNY011cnRyeVwiLCBcInRvXCI6IFwiL2hvbWUvaW5kZXhcIiB9LFxuICAgICAgICAgICAgeyBcIm5hbWVcIjogXCJBYm91dFwiLCBcInRvXCI6IFwiL2hvbWUvYWJvdXRcIiB9LFxuICAgICAgICAgICAgeyBcIm5hbWVcIjogXCJDYWxlbmRhclwiLCBcInRvXCI6IFwiL2hvbWUvY2FsZW5kYXJcIiB9LFxuICAgICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwibmFtZVwiOiBcIkdvdmVybm1lbnRcIixcbiAgICAgICAgXCJzdWJoZWFkZXJzXCI6IFtcbiAgICAgICAgICAgIHsgXCJuYW1lXCI6IFwiTWNDb3VydFwiLCBcInRvXCI6IFwiL2dvdmVybm1lbnQvY291cnRcIiB9LFxuICAgICAgICAgICAgeyBcIm5hbWVcIjogXCJDb21taXR0ZWVzXCIsIFwidG9cIjogXCIvZ292ZXJubWVudC9jb21taXR0ZWVzXCIgfSxcbiAgICAgICAgICAgIHsgXCJuYW1lXCI6IFwiTWNNaW5pc3RyeVwiLCBcInRvXCI6IFwiL2dvdmVybm1lbnQvbWNtaW5pc3RyeVwiIH1cbiAgICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgICBcIm5hbWVcIjogXCJQZW9wbGVcIixcbiAgICAgICAgXCJzdWJoZWFkZXJzXCI6IFtcbiAgICAgICAgICAgIHsgXCJuYW1lXCI6IFwiTWNUZWFtXCIsIFwidG9cIjogXCIvcGVvcGxlL21jdGVhbVwiIH0sXG4gICAgICAgICAgICB7IFwibmFtZVwiOiBcIkFzc29jaWF0ZXNcIiwgXCJ0b1wiOiBcIi9wZW9wbGUvYXNzb2NpYXRlc1wiIH0sXG4gICAgICAgICAgICB7IFwibmFtZVwiOiBcIkFmZmluaXR5IEdyb3Vwc1wiLCBcInRvXCI6IFwiL3Blb3BsZS9tY211cnRyeWFmZmluaXR5Z3JvdXBzXCIgfSxcbiAgICAgICAgICAgIHsgXCJuYW1lXCI6IFwiQWNhZGVtaWMgRmVsbG93c1wiLCBcInRvXCI6IFwiL3Blb3BsZS9hY2FkZW1pY2ZlbGxvd3NcIiB9LFxuICAgICAgICAgICAgeyBcIm5hbWVcIjogXCJQZWVyIEFjYWRlbWljIEFkdmlzb3JzXCIsIFwidG9cIjogXCIvcGVvcGxlL3BhYXNcIiB9LFxuICAgICAgICAgICAgeyBcIm5hbWVcIjogXCJSSEFzXCIsIFwidG9cIjogXCIvcGVvcGxlL1JIQXNcIiB9LFxuICAgICAgICAgICAgeyBcIm5hbWVcIjogXCJIZWFkIENhcmVnaXZlcnNcIiwgXCJ0b1wiOiBcIi9wZW9wbGUvaGVhZGNhcmVnaXZlcnNcIiB9LFxuICAgICAgICAgICAgeyBcIm5hbWVcIjogXCJTTVJcIiwgXCJ0b1wiOiBcIi9wZW9wbGUvU01SXCIgfSxcbiAgICAgICAgICAgIHsgXCJuYW1lXCI6IFwiRGl2aXNpb25hbCBBZHZpc29yc1wiLCBcInRvXCI6IFwiL3Blb3BsZS9kaXZpc2lvbmFsYWR2aXNvcnNcIiB9XG4gICAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJuYW1lXCI6IFwiUmVzb3VyY2VzXCIsXG4gICAgICAgIFwic3ViaGVhZGVyc1wiOiBbXG4gICAgICAgICAgICB7IFwibmFtZVwiOiBcIlJvb20gUmVzZXJ2YXRpb25zXCIsIFwidG9cIjogXCIvcmVzb3VyY2VzL3Jvb20tcmVzZXJ2YXRpb25zXCIgfSxcbiAgICAgICAgICAgIHsgXCJuYW1lXCI6IFwiUC1DYXJkIFJlcXVlc3RzXCIsIFwidG9cIjogXCIvcmVzb3VyY2VzL3BjYXJkLXJlcXVlc3RzXCIgfSxcbiAgICAgICAgICAgIHsgXCJuYW1lXCI6IFwiTWNJdGVtcyBDaGVjayBPdXRcIiwgXCJ0b1wiOiBcIi9yZXNvdXJjZXMvbWNpdGVtcy1jaGVja291dFwiIH0sXG4gICAgICAgICAgICB7IFwibmFtZVwiOiBcIk1jTWFrZXJzcGFjZVwiLCBcInRvXCI6IFwiL3Jlc291cmNlcy9tY21ha2Vyc3BhY2VcIiB9LFxuICAgICAgICAgICAgeyBcIm5hbWVcIjogXCJNY0xlZ2lzbGF0aW9uXCIsIFwidG9cIjogXCIvcmVzb3VyY2VzL21jbGVnaXNsYXRpb25cIiB9LFxuICAgICAgICAgICAgeyBcIm5hbWVcIjogXCJNY0ZVTmQgUmVxdWVzdHNcIiwgXCJ0b1wiOiBcIi9yZXNvdXJjZXMvbWNmdW5kLXJlcXVlc3RzXCIgfSxcbiAgICAgICAgICAgIHsgXCJuYW1lXCI6IFwiQnVkZ2V0IFNoZWV0XCIsIFwidG9cIjogXCJodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9zcHJlYWRzaGVldHMvZC8xaW1ORnk3Y3lhZHhpZWg3SlBjUFJ2TXpCLUxnTUhvek5rUnpVWF9Md3AxQS9lZGl0P3VzcD1zaGFyaW5nXCIgfSxcbiAgICAgICAgICAgIHsgXCJuYW1lXCI6IFwiRmluYW5jaWFsIEluY2x1c2l2aXR5XCIsIFwidG9cIjogXCIvcmVzb3VyY2VzL2ZpbmFuY2lhbC1pbmNsdXNpdml0eVwiIH1cbiAgICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgICBcIm5hbWVcIjogXCJPLVdlZWtzXCIsXG4gICAgICAgIFwic3ViaGVhZGVyc1wiOiBbXG4gICAgICAgICAgICB7IFwibmFtZVwiOiBcIjIwMjZcIiwgXCJ0b1wiOiBcIi9vd2Vlay8yMDI2XCIgfSxcbiAgICAgICAgICAgIHsgXCJuYW1lXCI6IFwiMjAyNVwiLCBcInRvXCI6IFwiL293ZWVrLzIwMjVcIiB9LFxuICAgICAgICAgICAgeyBcIm5hbWVcIjogXCIyMDI0XCIsIFwidG9cIjogXCIvb3dlZWsvMjAyNFwiIH0sXG4gICAgICAgICAgICB7IFwibmFtZVwiOiBcIjIwMjNcIiwgXCJ0b1wiOiBcIi9vd2Vlay8yMDIzXCIgfVxuICAgICAgICBdXG4gICAgfVxuXTtcblxuY29uc3QgU2l0ZU5hdmJhciA9ICgpID0+IHtcbiAgICBjb25zdCBbbWVudU9wZW4sIHNldE1lbnVPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbb3BlbkRyb3Bkb3duLCBzZXRPcGVuRHJvcGRvd25dID0gdXNlU3RhdGUobnVsbCk7ICAgLy8gdG9wLWxldmVsIGl0ZW0gbmFtZVxuICAgIGNvbnN0IFtvcGVuTW9iaWxlU2VjdGlvbiwgc2V0T3Blbk1vYmlsZVNlY3Rpb25dID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgICAvLyBMb2NrIGJvZHkgc2Nyb2xsIHdoaWxlIHRoZSBtb2JpbGUgZHJhd2VyIGlzIG9wZW5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykgcmV0dXJuO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gbWVudU9wZW4gPyAnaGlkZGVuJyA6ICcnO1xuICAgICAgICByZXR1cm4gKCkgPT4geyBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJyc7IH07XG4gICAgfSwgW21lbnVPcGVuXSk7XG5cbiAgICBjb25zdCBjbG9zZUFsbCA9ICgpID0+IHtcbiAgICAgICAgc2V0TWVudU9wZW4oZmFsc2UpO1xuICAgICAgICBzZXRPcGVuRHJvcGRvd24obnVsbCk7XG4gICAgICAgIHNldE9wZW5Nb2JpbGVTZWN0aW9uKG51bGwpO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cIm1jLW5hdmJhclwiIHJvbGU9XCJiYW5uZXJcIj5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2hvbWUvaW5kZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibWMtbmF2YmFyLWJyYW5kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL3N0YXRpYy9sb2dvcy9oZXJvLWNyZXN0LnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYy1uYXZiYXItY3Jlc3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1jLW5hdmJhci13b3JkbWFya1wiPk1jTXVydHJ5IENvbGxlZ2U8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm1jLW5hdmJhci1saW5rc1wiIGFyaWEtbGFiZWw9XCJNYWluXCI+XG4gICAgICAgICAgICAgICAgICAgIHtuYXZiYXJfaGVhZGVycy5tYXAoKGhlYWRlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaGFzRHJvcGRvd24gPSBoZWFkZXIuc3ViaGVhZGVycyAmJiBoZWFkZXIuc3ViaGVhZGVycy5sZW5ndGggPiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFoYXNEcm9wZG93bikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2hlYWRlci50byB8fCAnIyd9IGtleT17aGVhZGVyLm5hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibWMtbmF2YmFyLWxpbmtcIj57aGVhZGVyLm5hbWV9PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2hlYWRlci5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYy1uYXZiYXItaXRlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0T3BlbkRyb3Bkb3duKGhlYWRlci5uYW1lKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRPcGVuRHJvcGRvd24obnVsbCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWMtbmF2YmFyLWxpbmsgbWMtbmF2YmFyLXRyaWdnZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9e29wZW5Ecm9wZG93biA9PT0gaGVhZGVyLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD1cIm1lbnVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldE9wZW5Ecm9wZG93bihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5Ecm9wZG93biA9PT0gaGVhZGVyLm5hbWUgPyBudWxsIDogaGVhZGVyLm5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aGVhZGVyLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcIm1jLW5hdmJhci1jYXJldFwiICsgKG9wZW5Ecm9wZG93biA9PT0gaGVhZGVyLm5hbWUgPyBcIiBtYy1uYXZiYXItY2FyZXQtb3BlblwiIDogXCJcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ21jLW5hdmJhci1kcm9wZG93bicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvcGVuRHJvcGRvd24gPT09IGhlYWRlci5uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJyBtYy1uYXZiYXItZHJvcGRvd24tb3BlbidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJtZW51XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2hlYWRlci5zdWJoZWFkZXJzLm1hcCgoc3ViKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTmVzdGVkIHN1Ym1lbnUgJnJkcXVvO+KAnSBgY2hpbGRyZW5gIGFycmF5LCBubyBgdG9gLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdWIuY2hpbGRyZW4gJiYgc3ViLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3N1Yi5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1jLW5hdmJhci1kcm9wZG93bi1saW5rIG1jLW5hdmJhci1zdWJtZW51XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb2xlPVwibWVudWl0ZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGFzcG9wdXA9XCJtZW51XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtYy1uYXZiYXItc3VibWVudS1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1jLW5hdmJhci1zdWJtZW51LWNhcmV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdWIubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYy1uYXZiYXItc3VibWVudS1wYW5lbFwiIHJvbGU9XCJtZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdWIuY2hpbGRyZW4ubWFwKChsZWFmKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsZWFmRXh0ID0gbGVhZi50byAmJiBsZWFmLnRvLnN0YXJ0c1dpdGgoJ2h0dHAnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBsZWFmRXh0ID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17bGVhZi5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtsZWFmLnRvfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWMtbmF2YmFyLWRyb3Bkb3duLWxpbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb2xlPVwibWVudWl0ZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xlYWYubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2xlYWYudG99IGtleT17bGVhZi5uYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1jLW5hdmJhci1kcm9wZG93bi1saW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJtZW51aXRlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuRHJvcGRvd24obnVsbCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsZWFmLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBleHRlcm5hbCA9IHN1Yi50byAmJiBzdWIudG8uc3RhcnRzV2l0aCgnaHR0cCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChleHRlcm5hbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3N1Yi5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e3N1Yi50b31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1jLW5hdmJhci1kcm9wZG93bi1saW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb2xlPVwibWVudWl0ZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdWIubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17c3ViLnRvfSBrZXk9e3N1Yi5uYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWMtbmF2YmFyLWRyb3Bkb3duLWxpbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJtZW51aXRlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0T3BlbkRyb3Bkb3duKG51bGwpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdWIubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L25hdj5cblxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1jLW5hdmJhci1oYW1idXJnZXJcIlxuICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPXttZW51T3BlbiA/ICdDbG9zZSBtZW51JyA6ICdPcGVuIG1lbnUnfVxuICAgICAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPXttZW51T3Blbn1cbiAgICAgICAgICAgICAgICAgICAgYXJpYS1jb250cm9scz1cIm1jLW1vYmlsZS1kcmF3ZXJcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRNZW51T3Blbih0cnVlKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1jLWhhbWJ1cmdlci1saW5lXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWMtaGFtYnVyZ2VyLWxpbmVcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtYy1oYW1idXJnZXItbGluZVwiIC8+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2hlYWRlcj5cblxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17J21jLW1vYmlsZS1zY3JpbScgKyAobWVudU9wZW4gPyAnIG1jLW1vYmlsZS1zY3JpbS1vcGVuJyA6ICcnKX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtjbG9zZUFsbH1cbiAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxhc2lkZVxuICAgICAgICAgICAgICAgIGlkPVwibWMtbW9iaWxlLWRyYXdlclwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsnbWMtbW9iaWxlLWRyYXdlcicgKyAobWVudU9wZW4gPyAnIG1jLW1vYmlsZS1kcmF3ZXItb3BlbicgOiAnJyl9XG4gICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49eyFtZW51T3Blbn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYy1tb2JpbGUtZHJhd2VyLWNsb3NlXCJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkNsb3NlIG1lbnVcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtjbG9zZUFsbH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibWMtbW9iaWxlLWRyYXdlci1saW5rc1wiIGFyaWEtbGFiZWw9XCJNb2JpbGVcIj5cbiAgICAgICAgICAgICAgICAgICAge25hdmJhcl9oZWFkZXJzLm1hcCgoaGVhZGVyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBoYXNEcm9wZG93biA9IGhlYWRlci5zdWJoZWFkZXJzICYmIGhlYWRlci5zdWJoZWFkZXJzLmxlbmd0aCA+IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpc09wZW4gPSBvcGVuTW9iaWxlU2VjdGlvbiA9PT0gaGVhZGVyLm5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWhhc0Ryb3Bkb3duKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17aGVhZGVyLnRvIHx8ICcjJ30ga2V5PXtoZWFkZXIubmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJtYy1tb2JpbGUtZHJhd2VyLWxpbmtcIiBvbkNsaWNrPXtjbG9zZUFsbH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2hlYWRlci5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2hlYWRlci5uYW1lfSBjbGFzc05hbWU9XCJtYy1tb2JpbGUtZHJhd2VyLXNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYy1tb2JpbGUtZHJhd2VyLWxpbmsgbWMtbW9iaWxlLWRyYXdlci10cmlnZ2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9e2lzT3Blbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0T3Blbk1vYmlsZVNlY3Rpb24oaXNPcGVuID8gbnVsbCA6IGhlYWRlci5uYW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aGVhZGVyLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWMtbW9iaWxlLWRyYXdlci1jYXJldFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGlzT3BlbiA/IFwiIG1jLW1vYmlsZS1kcmF3ZXItY2FyZXQtb3BlblwiIDogXCJcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogU3VibGlua3MgYWx3YXlzIG1vdW50ZWQ7IENTUyBhbmltYXRlcyB0aGUgZ3JpZC1yb3cgZnJvbSAwZnIgdG8gMWZyICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdtYy1tb2JpbGUtZHJhd2VyLXN1YmxpbmtzJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGlzT3BlbiA/ICcgbWMtbW9iaWxlLWRyYXdlci1zdWJsaW5rcy1vcGVuJyA6ICcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49eyFpc09wZW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWMtbW9iaWxlLWRyYXdlci1zdWJsaW5rcy1pbm5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2hlYWRlci5zdWJoZWFkZXJzLm1hcCgoc3ViKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTmVzdGVkIGdyb3VwIG9uIG1vYmlsZTogcmVuZGVyIGEgc21hbGwgc2VjdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGhlYWRlciBmb2xsb3dlZCBieSBpdHMgaW5kZW50ZWQgY2hpbGRyZW4uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN1Yi5jaGlsZHJlbiAmJiBzdWIuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17c3ViLm5hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWMtbW9iaWxlLWRyYXdlci1zdWJzZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdWIubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3ViLmNoaWxkcmVuLm1hcCgobGVhZikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsZWFmRXh0ID0gbGVhZi50byAmJiBsZWFmLnRvLnN0YXJ0c1dpdGgoJ2h0dHAnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxlYWZFeHQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17bGVhZi5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2xlYWYudG99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYy1tb2JpbGUtZHJhd2VyLXN1YmxpbmsgbWMtbW9iaWxlLWRyYXdlci1zdWJsaW5rLW5lc3RlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9e2lzT3BlbiA/IDAgOiAtMX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGVhZi5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17bGVhZi50b30ga2V5PXtsZWFmLm5hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1jLW1vYmlsZS1kcmF3ZXItc3VibGluayBtYy1tb2JpbGUtZHJhd2VyLXN1YmxpbmstbmVzdGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17Y2xvc2VBbGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXtpc09wZW4gPyAwIDogLTF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGVhZi5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGV4dGVybmFsID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ViLnRvICYmIHN1Yi50by5zdGFydHNXaXRoKCdodHRwJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV4dGVybmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17c3ViLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17c3ViLnRvfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWMtbW9iaWxlLWRyYXdlci1zdWJsaW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17aXNPcGVuID8gMCA6IC0xfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdWIubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17c3ViLnRvfSBrZXk9e3N1Yi5uYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWMtbW9iaWxlLWRyYXdlci1zdWJsaW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtjbG9zZUFsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17aXNPcGVuID8gMCA6IC0xfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdWIubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgPC9hc2lkZT5cbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2l0ZU5hdmJhcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=