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
  "name": "O-Weeks",
  "subheaders": [{
    "name": "2025-2026",
    "to": "/oweek/2025-2026"
  }, {
    "name": "2024-2025",
    "to": "/oweek/2024-2025"
  }, {
    "name": "2023-2024",
    "to": "/oweek/2023-2024"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXIvTmF2YmFyLmpzIl0sIm5hbWVzIjpbIm5hdmJhcl9oZWFkZXJzIiwiU2l0ZU5hdmJhciIsIl9zIiwiX3VzZVN0YXRlIiwidXNlU3RhdGUiLCJtZW51T3BlbiIsInNldE1lbnVPcGVuIiwiX3VzZVN0YXRlMiIsIm9wZW5Ecm9wZG93biIsInNldE9wZW5Ecm9wZG93biIsIl91c2VTdGF0ZTMiLCJvcGVuTW9iaWxlU2VjdGlvbiIsInNldE9wZW5Nb2JpbGVTZWN0aW9uIiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJib2R5Iiwic3R5bGUiLCJvdmVyZmxvdyIsImNsb3NlQWxsIiwiX19qc3giLCJSZWFjdCIsIkZyYWdtZW50IiwiX19zZWxmIiwiX3RoaXMiLCJfX3NvdXJjZSIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsImNsYXNzTmFtZSIsInJvbGUiLCJMaW5rIiwiaHJlZiIsInNyYyIsImFsdCIsIm1hcCIsImhlYWRlciIsImhhc0Ryb3Bkb3duIiwic3ViaGVhZGVycyIsImxlbmd0aCIsInRvIiwia2V5IiwibmFtZSIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsInR5cGUiLCJvbkNsaWNrIiwic3ViIiwiY2hpbGRyZW4iLCJsZWFmIiwibGVhZkV4dCIsInN0YXJ0c1dpdGgiLCJ0YXJnZXQiLCJyZWwiLCJleHRlcm5hbCIsImlkIiwiaXNPcGVuIiwidGFiSW5kZXgiLCJfYyIsIiRSZWZyZXNoUmVnJCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ3RCO0FBQ1A7QUFFdEIsSUFBTUEsY0FBYyxHQUFHLENBQ25CO0VBQ0ksTUFBTSxFQUFFLE1BQU07RUFDZCxZQUFZLEVBQUUsQ0FDVjtJQUFFLE1BQU0sRUFBRSxVQUFVO0lBQUUsSUFBSSxFQUFFO0VBQWMsQ0FBQyxFQUMzQztJQUFFLE1BQU0sRUFBRSxP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Q0FBQyxDQUNJLENBQ0osQ0FDSixDQUFDO0VBRWQsQ0FBQyxDQUNBLENBQ0YsQ0FDSyxDQUFDO0FBRXpCLENBQUM7QUFBQ3hDLEVBQUEsQ0E1U0lELFVBQVU7QUFBQXlELEVBQUEsR0FBVnpELFVBQVU7QUE4U0RBLHlFQUFVLEVBQUM7QUFBQSxJQUFBeUQsRUFBQTtBQUFBQyxZQUFBLENBQUFELEVBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaG9tZS9pbmRleC4wYWIxZWZiMjcyYTBmNDE0NjI1Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0ICcuL05hdmJhci5jc3MnO1xuXG5jb25zdCBuYXZiYXJfaGVhZGVycyA9IFtcbiAgICB7XG4gICAgICAgIFwibmFtZVwiOiBcIkhvbWVcIixcbiAgICAgICAgXCJzdWJoZWFkZXJzXCI6IFtcbiAgICAgICAgICAgIHsgXCJuYW1lXCI6IFwiTWNNdXJ0cnlcIiwgXCJ0b1wiOiBcIi9ob21lL2luZGV4XCIgfSxcbiAgICAgICAgICAgIHsgXCJuYW1lXCI6IFwiQWJvdXRcIiwgXCJ0b1wiOiBcIi9ob21lL2Fib3V0XCIgfSxcbiAgICAgICAgICAgIHsgXCJuYW1lXCI6IFwiQ2FsZW5kYXJcIiwgXCJ0b1wiOiBcIi9ob21lL2NhbGVuZGFyXCIgfSxcbiAgICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgICBcIm5hbWVcIjogXCJQZW9wbGVcIixcbiAgICAgICAgXCJzdWJoZWFkZXJzXCI6IFtcbiAgICAgICAgICAgIHsgXCJuYW1lXCI6IFwiTWNUZWFtXCIsIFwidG9cIjogXCIvcGVvcGxlL21jdGVhbVwiIH0sXG4gICAgICAgICAgICB7IFwibmFtZVwiOiBcIkFzc29jaWF0ZXNcIiwgXCJ0b1wiOiBcIi9wZW9wbGUvYXNzb2NpYXRlc1wiIH0sXG4gICAgICAgICAgICB7IFwibmFtZVwiOiBcIkFmZmluaXR5IEdyb3Vwc1wiLCBcInRvXCI6IFwiL3Blb3BsZS9tY211cnRyeWFmZmluaXR5Z3JvdXBzXCIgfSxcbiAgICAgICAgICAgIHsgXCJuYW1lXCI6IFwiQWNhZGVtaWMgRmVsbG93c1wiLCBcInRvXCI6IFwiL3Blb3BsZS9hY2FkZW1pY2ZlbGxvd3NcIiB9LFxuICAgICAgICAgICAgeyBcIm5hbWVcIjogXCJQZWVyIEFjYWRlbWljIEFkdmlzb3JzXCIsIFwidG9cIjogXCIvcGVvcGxlL3BhYXNcIiB9LFxuICAgICAgICAgICAgeyBcIm5hbWVcIjogXCJSSEFzXCIsIFwidG9cIjogXCIvcGVvcGxlL1JIQXNcIiB9LFxuICAgICAgICAgICAgeyBcIm5hbWVcIjogXCJIZWFkIENhcmVnaXZlcnNcIiwgXCJ0b1wiOiBcIi9wZW9wbGUvaGVhZGNhcmVnaXZlcnNcIiB9LFxuICAgICAgICAgICAgeyBcIm5hbWVcIjogXCJTTVJcIiwgXCJ0b1wiOiBcIi9wZW9wbGUvU01SXCIgfVxuICAgICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwibmFtZVwiOiBcIkdvdmVybm1lbnRcIixcbiAgICAgICAgXCJzdWJoZWFkZXJzXCI6IFtcbiAgICAgICAgICAgIHsgXCJuYW1lXCI6IFwiTWNDb3VydFwiLCBcInRvXCI6IFwiL2dvdmVybm1lbnQvY291cnRcIiB9LFxuICAgICAgICAgICAgeyBcIm5hbWVcIjogXCJDb21taXR0ZWVzXCIsIFwidG9cIjogXCIvZ292ZXJubWVudC9jb21taXR0ZWVzXCIgfSxcbiAgICAgICAgICAgIHsgXCJuYW1lXCI6IFwiTWNNaW5pc3RyeVwiLCBcInRvXCI6IFwiL2dvdmVybm1lbnQvbWNtaW5pc3RyeVwiIH1cbiAgICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgICBcIm5hbWVcIjogXCJSZXNvdXJjZXNcIixcbiAgICAgICAgXCJzdWJoZWFkZXJzXCI6IFtcbiAgICAgICAgICAgIHsgXCJuYW1lXCI6IFwiUm9vbSBSZXNlcnZhdGlvbnNcIiwgXCJ0b1wiOiBcIi9yZXNvdXJjZXMvcm9vbS1yZXNlcnZhdGlvbnNcIiB9LFxuICAgICAgICAgICAgeyBcIm5hbWVcIjogXCJQLUNhcmQgUmVxdWVzdHNcIiwgXCJ0b1wiOiBcIi9yZXNvdXJjZXMvcGNhcmQtcmVxdWVzdHNcIiB9LFxuICAgICAgICAgICAgeyBcIm5hbWVcIjogXCJNY0l0ZW1zIENoZWNrIE91dFwiLCBcInRvXCI6IFwiL3Jlc291cmNlcy9tY2l0ZW1zLWNoZWNrb3V0XCIgfSxcbiAgICAgICAgICAgIHsgXCJuYW1lXCI6IFwiTWNNdXJ0cnkgSW5ub3ZhdGlvbiBTcGFjZVwiLCBcInRvXCI6IFwiL3Jlc291cmNlcy9tY211cnRyeS1pbm5vdmF0aW9uLXNwYWNlXCIgfSxcbiAgICAgICAgICAgIHsgXCJuYW1lXCI6IFwiTWNMZWdpc2xhdGlvblwiLCBcInRvXCI6IFwiL3Jlc291cmNlcy9tY2xlZ2lzbGF0aW9uXCIgfSxcbiAgICAgICAgICAgIHsgXCJuYW1lXCI6IFwiRGl2ZXJzaXR5IFJlc291cmNlc1wiLCBcInRvXCI6IFwiL3Jlc291cmNlcy9kaXZlcnNpdHktcmVzb3VyY2VzXCIgfSxcblxuICAgICAgICAgICAgeyBcIm5hbWVcIjogXCJNY0ZVTmQgUmVxdWVzdHNcIiwgXCJ0b1wiOiBcIi9yZXNvdXJjZXMvbWNmdW5kLXJlcXVlc3RzXCIgfSxcbiAgICAgICAgICAgIHsgXCJuYW1lXCI6IFwiQnVkZ2V0IFNoZWV0XCIsIFwidG9cIjogXCJodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9zcHJlYWRzaGVldHMvZC8xaW1ORnk3Y3lhZHhpZWg3SlBjUFJ2TXpCLUxnTUhvek5rUnpVWF9Md3AxQS9lZGl0P3VzcD1zaGFyaW5nXCIgfSxcbiAgICAgICAgICAgIHsgXCJuYW1lXCI6IFwiRmluYW5jaWFsIEluY2x1c2l2aXR5XCIsIFwidG9cIjogXCIvcmVzb3VyY2VzL2ZpbmFuY2lhbC1pbmNsdXNpdml0eVwiIH1cbiAgICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgICBcIm5hbWVcIjogXCJPLVdlZWtzXCIsXG4gICAgICAgIFwic3ViaGVhZGVyc1wiOiBbXG4gICAgICAgICAgICB7IFwibmFtZVwiOiBcIjIwMjUtMjAyNlwiLCBcInRvXCI6IFwiL293ZWVrLzIwMjUtMjAyNlwiIH0sXG4gICAgICAgICAgICB7IFwibmFtZVwiOiBcIjIwMjQtMjAyNVwiLCBcInRvXCI6IFwiL293ZWVrLzIwMjQtMjAyNVwiIH0sXG4gICAgICAgICAgICB7IFwibmFtZVwiOiBcIjIwMjMtMjAyNFwiLCBcInRvXCI6IFwiL293ZWVrLzIwMjMtMjAyNFwiIH1cbiAgICAgICAgXVxuICAgIH1cbl07XG5cbmNvbnN0IFNpdGVOYXZiYXIgPSAoKSA9PiB7XG4gICAgY29uc3QgW21lbnVPcGVuLCBzZXRNZW51T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW29wZW5Ecm9wZG93biwgc2V0T3BlbkRyb3Bkb3duXSA9IHVzZVN0YXRlKG51bGwpOyAgIC8vIHRvcC1sZXZlbCBpdGVtIG5hbWVcbiAgICBjb25zdCBbb3Blbk1vYmlsZVNlY3Rpb24sIHNldE9wZW5Nb2JpbGVTZWN0aW9uXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gICAgLy8gTG9jayBib2R5IHNjcm9sbCB3aGlsZSB0aGUgbW9iaWxlIGRyYXdlciBpcyBvcGVuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybjtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IG1lbnVPcGVuID8gJ2hpZGRlbicgOiAnJztcbiAgICAgICAgcmV0dXJuICgpID0+IHsgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICcnOyB9O1xuICAgIH0sIFttZW51T3Blbl0pO1xuXG4gICAgY29uc3QgY2xvc2VBbGwgPSAoKSA9PiB7XG4gICAgICAgIHNldE1lbnVPcGVuKGZhbHNlKTtcbiAgICAgICAgc2V0T3BlbkRyb3Bkb3duKG51bGwpO1xuICAgICAgICBzZXRPcGVuTW9iaWxlU2VjdGlvbihudWxsKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJtYy1uYXZiYXJcIiByb2xlPVwiYmFubmVyXCI+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ob21lL2luZGV4XCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm1jLW5hdmJhci1icmFuZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9zdGF0aWMvbG9nb3MvaGVyby1jcmVzdC5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWMtbmF2YmFyLWNyZXN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtYy1uYXZiYXItd29yZG1hcmtcIj5NY011cnRyeSBDb2xsZWdlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJtYy1uYXZiYXItbGlua3NcIiBhcmlhLWxhYmVsPVwiTWFpblwiPlxuICAgICAgICAgICAgICAgICAgICB7bmF2YmFyX2hlYWRlcnMubWFwKChoZWFkZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGhhc0Ryb3Bkb3duID0gaGVhZGVyLnN1YmhlYWRlcnMgJiYgaGVhZGVyLnN1YmhlYWRlcnMubGVuZ3RoID4gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaGFzRHJvcGRvd24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtoZWFkZXIudG8gfHwgJyMnfSBrZXk9e2hlYWRlci5uYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm1jLW5hdmJhci1saW5rXCI+e2hlYWRlci5uYW1lfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtoZWFkZXIubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWMtbmF2YmFyLWl0ZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldE9wZW5Ecm9wZG93bihoZWFkZXIubmFtZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0T3BlbkRyb3Bkb3duKG51bGwpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1jLW5hdmJhci1saW5rIG1jLW5hdmJhci10cmlnZ2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPXtvcGVuRHJvcGRvd24gPT09IGhlYWRlci5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGFzcG9wdXA9XCJtZW51XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRPcGVuRHJvcGRvd24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuRHJvcGRvd24gPT09IGhlYWRlci5uYW1lID8gbnVsbCA6IGhlYWRlci5uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2hlYWRlci5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJtYy1uYXZiYXItY2FyZXRcIiArIChvcGVuRHJvcGRvd24gPT09IGhlYWRlci5uYW1lID8gXCIgbWMtbmF2YmFyLWNhcmV0LW9wZW5cIiA6IFwiXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdtYy1uYXZiYXItZHJvcGRvd24nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob3BlbkRyb3Bkb3duID09PSBoZWFkZXIubmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICcgbWMtbmF2YmFyLWRyb3Bkb3duLW9wZW4nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb2xlPVwibWVudVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtoZWFkZXIuc3ViaGVhZGVycy5tYXAoKHN1YikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5lc3RlZCBzdWJtZW51ICZyZHF1bzvigJ0gYGNoaWxkcmVuYCBhcnJheSwgbm8gYHRvYC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3ViLmNoaWxkcmVuICYmIHN1Yi5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtzdWIubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYy1uYXZiYXItZHJvcGRvd24tbGluayBtYy1uYXZiYXItc3VibWVudVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9sZT1cIm1lbnVpdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhhc3BvcHVwPVwibWVudVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWMtbmF2YmFyLXN1Ym1lbnUtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYy1uYXZiYXItc3VibWVudS1jYXJldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3ViLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWMtbmF2YmFyLXN1Ym1lbnUtcGFuZWxcIiByb2xlPVwibWVudVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3ViLmNoaWxkcmVuLm1hcCgobGVhZikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGVhZkV4dCA9IGxlYWYudG8gJiYgbGVhZi50by5zdGFydHNXaXRoKCdodHRwJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbGVhZkV4dCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2xlYWYubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17bGVhZi50b31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1jLW5hdmJhci1kcm9wZG93bi1saW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9sZT1cIm1lbnVpdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsZWFmLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtsZWFmLnRvfSBrZXk9e2xlYWYubmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYy1uYXZiYXItZHJvcGRvd24tbGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb2xlPVwibWVudWl0ZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0T3BlbkRyb3Bkb3duKG51bGwpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGVhZi5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXh0ZXJuYWwgPSBzdWIudG8gJiYgc3ViLnRvLnN0YXJ0c1dpdGgoJ2h0dHAnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXh0ZXJuYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtzdWIubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtzdWIudG99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYy1uYXZiYXItZHJvcGRvd24tbGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9sZT1cIm1lbnVpdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3ViLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3N1Yi50b30ga2V5PXtzdWIubmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1jLW5hdmJhci1kcm9wZG93bi1saW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb2xlPVwibWVudWl0ZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE9wZW5Ecm9wZG93bihudWxsKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3ViLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC9uYXY+XG5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYy1uYXZiYXItaGFtYnVyZ2VyXCJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17bWVudU9wZW4gPyAnQ2xvc2UgbWVudScgOiAnT3BlbiBtZW51J31cbiAgICAgICAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD17bWVudU9wZW59XG4gICAgICAgICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJtYy1tb2JpbGUtZHJhd2VyXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TWVudU9wZW4odHJ1ZSl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtYy1oYW1idXJnZXItbGluZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1jLWhhbWJ1cmdlci1saW5lXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWMtaGFtYnVyZ2VyLWxpbmVcIiAvPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9oZWFkZXI+XG5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9eydtYy1tb2JpbGUtc2NyaW0nICsgKG1lbnVPcGVuID8gJyBtYy1tb2JpbGUtc2NyaW0tb3BlbicgOiAnJyl9XG4gICAgICAgICAgICAgICAgb25DbGljaz17Y2xvc2VBbGx9XG4gICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8YXNpZGVcbiAgICAgICAgICAgICAgICBpZD1cIm1jLW1vYmlsZS1kcmF3ZXJcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17J21jLW1vYmlsZS1kcmF3ZXInICsgKG1lbnVPcGVuID8gJyBtYy1tb2JpbGUtZHJhd2VyLW9wZW4nIDogJycpfVxuICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPXshbWVudU9wZW59XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWMtbW9iaWxlLWRyYXdlci1jbG9zZVwiXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZSBtZW51XCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17Y2xvc2VBbGx9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm1jLW1vYmlsZS1kcmF3ZXItbGlua3NcIiBhcmlhLWxhYmVsPVwiTW9iaWxlXCI+XG4gICAgICAgICAgICAgICAgICAgIHtuYXZiYXJfaGVhZGVycy5tYXAoKGhlYWRlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaGFzRHJvcGRvd24gPSBoZWFkZXIuc3ViaGVhZGVycyAmJiBoZWFkZXIuc3ViaGVhZGVycy5sZW5ndGggPiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNPcGVuID0gb3Blbk1vYmlsZVNlY3Rpb24gPT09IGhlYWRlci5uYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFoYXNEcm9wZG93bikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2hlYWRlci50byB8fCAnIyd9IGtleT17aGVhZGVyLm5hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibWMtbW9iaWxlLWRyYXdlci1saW5rXCIgb25DbGljaz17Y2xvc2VBbGx9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtoZWFkZXIubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtoZWFkZXIubmFtZX0gY2xhc3NOYW1lPVwibWMtbW9iaWxlLWRyYXdlci1zZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWMtbW9iaWxlLWRyYXdlci1saW5rIG1jLW1vYmlsZS1kcmF3ZXItdHJpZ2dlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPXtpc09wZW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldE9wZW5Nb2JpbGVTZWN0aW9uKGlzT3BlbiA/IG51bGwgOiBoZWFkZXIubmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2hlYWRlci5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1jLW1vYmlsZS1kcmF3ZXItY2FyZXRcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpc09wZW4gPyBcIiBtYy1tb2JpbGUtZHJhd2VyLWNhcmV0LW9wZW5cIiA6IFwiXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFN1YmxpbmtzIGFsd2F5cyBtb3VudGVkOyBDU1MgYW5pbWF0ZXMgdGhlIGdyaWQtcm93IGZyb20gMGZyIHRvIDFmciAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbWMtbW9iaWxlLWRyYXdlci1zdWJsaW5rcycgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpc09wZW4gPyAnIG1jLW1vYmlsZS1kcmF3ZXItc3VibGlua3Mtb3BlbicgOiAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPXshaXNPcGVufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1jLW1vYmlsZS1kcmF3ZXItc3VibGlua3MtaW5uZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtoZWFkZXIuc3ViaGVhZGVycy5tYXAoKHN1YikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5lc3RlZCBncm91cCBvbiBtb2JpbGU6IHJlbmRlciBhIHNtYWxsIHNlY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBoZWFkZXIgZm9sbG93ZWQgYnkgaXRzIGluZGVudGVkIGNoaWxkcmVuLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdWIuY2hpbGRyZW4gJiYgc3ViLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e3N1Yi5uYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1jLW1vYmlsZS1kcmF3ZXItc3Vic2VjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3ViLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N1Yi5jaGlsZHJlbi5tYXAoKGxlYWYpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGVhZkV4dCA9IGxlYWYudG8gJiYgbGVhZi50by5zdGFydHNXaXRoKCdodHRwJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBsZWFmRXh0ID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2xlYWYubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtsZWFmLnRvfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWMtbW9iaWxlLWRyYXdlci1zdWJsaW5rIG1jLW1vYmlsZS1kcmF3ZXItc3VibGluay1uZXN0ZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXtpc09wZW4gPyAwIDogLTF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xlYWYubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2xlYWYudG99IGtleT17bGVhZi5uYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYy1tb2JpbGUtZHJhd2VyLXN1YmxpbmsgbWMtbW9iaWxlLWRyYXdlci1zdWJsaW5rLW5lc3RlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Nsb3NlQWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17aXNPcGVuID8gMCA6IC0xfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xlYWYubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBleHRlcm5hbCA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Yi50byAmJiBzdWIudG8uc3RhcnRzV2l0aCgnaHR0cCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChleHRlcm5hbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3N1Yi5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e3N1Yi50b31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1jLW1vYmlsZS1kcmF3ZXItc3VibGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9e2lzT3BlbiA/IDAgOiAtMX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3ViLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3N1Yi50b30ga2V5PXtzdWIubmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1jLW1vYmlsZS1kcmF3ZXItc3VibGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17Y2xvc2VBbGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9e2lzT3BlbiA/IDAgOiAtMX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3ViLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgIDwvYXNpZGU+XG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpdGVOYXZiYXI7XG4iXSwic291cmNlUm9vdCI6IiJ9