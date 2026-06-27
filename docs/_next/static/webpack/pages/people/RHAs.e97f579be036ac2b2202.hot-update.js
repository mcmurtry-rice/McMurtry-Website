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
  }, {
    "name": "Divisional Advisors",
    "to": "/people/divisionaladvisors"
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
    "name": "2026-2027",
    "to": "/oweek/2026-2027"
  }, {
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
      lineNumber: 81,
      columnNumber: 9
    }
  }, __jsx("header", {
    className: "mc-navbar",
    role: "banner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/home/index",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "mc-navbar-brand",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/static/logos/hero-crest.png",
    alt: "",
    className: "mc-navbar-crest",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 25
    }
  }), __jsx("span", {
    className: "mc-navbar-wordmark",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 25
    }
  }, "McMurtry College"))), __jsx("nav", {
    className: "mc-navbar-links",
    "aria-label": "Main",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
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
          lineNumber: 99,
          columnNumber: 33
        }
      }, __jsx("a", {
        className: "mc-navbar-link",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100,
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
        lineNumber: 105,
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
        lineNumber: 111,
        columnNumber: 33
      }
    }, header.name, __jsx("span", {
      className: "mc-navbar-caret" + (openDropdown === header.name ? " mc-navbar-caret-open" : ""),
      "aria-hidden": "true",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 29
      }
    })), __jsx("div", {
      className: 'mc-navbar-dropdown' + (openDropdown === header.name ? ' mc-navbar-dropdown-open' : ''),
      role: "menu",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
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
            lineNumber: 141,
            columnNumber: 49
          }
        }, __jsx("span", {
          className: "mc-navbar-submenu-label",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 53
          }
        }, __jsx("span", {
          className: "mc-navbar-submenu-caret",
          "aria-hidden": "true",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 53
          }
        }), sub.name), __jsx("div", {
          className: "mc-navbar-submenu-panel",
          role: "menu",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 154,
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
              lineNumber: 158,
              columnNumber: 65
            }
          }, leaf.name) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
            href: leaf.to,
            key: leaf.name,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 169,
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
              lineNumber: 170,
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
            lineNumber: 187,
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
          lineNumber: 200,
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
          lineNumber: 201,
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
      lineNumber: 217,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: "mc-hamburger-line",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 21
    }
  }), __jsx("span", {
    className: "mc-hamburger-line",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 21
    }
  }), __jsx("span", {
    className: "mc-hamburger-line",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 21
    }
  }))), __jsx("div", {
    className: 'mc-mobile-scrim' + (menuOpen ? ' mc-mobile-scrim-open' : ''),
    onClick: closeAll,
    "aria-hidden": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 13
    }
  }), __jsx("aside", {
    id: "mc-mobile-drawer",
    className: 'mc-mobile-drawer' + (menuOpen ? ' mc-mobile-drawer-open' : ''),
    "aria-hidden": !menuOpen,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
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
      lineNumber: 241,
      columnNumber: 17
    }
  }), __jsx("nav", {
    className: "mc-mobile-drawer-links",
    "aria-label": "Mobile",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
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
          lineNumber: 253,
          columnNumber: 33
        }
      }, __jsx("a", {
        className: "mc-mobile-drawer-link",
        onClick: closeAll,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254,
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
        lineNumber: 261,
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
        lineNumber: 262,
        columnNumber: 33
      }
    }, header.name, __jsx("span", {
      className: "mc-mobile-drawer-caret" + (isOpen ? " mc-mobile-drawer-caret-open" : ""),
      "aria-hidden": "true",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 271,
        columnNumber: 37
      }
    })), __jsx("div", {
      className: 'mc-mobile-drawer-sublinks' + (isOpen ? ' mc-mobile-drawer-sublinks-open' : ''),
      "aria-hidden": !isOpen,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 280,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: "mc-mobile-drawer-sublinks-inner",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 287,
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
            lineNumber: 293,
            columnNumber: 49
          }
        }, __jsx("div", {
          className: "mc-mobile-drawer-subsection",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 294,
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
              lineNumber: 300,
              columnNumber: 61
            }
          }, leaf.name) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
            href: leaf.to,
            key: leaf.name,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 311,
              columnNumber: 61
            }
          }, __jsx("a", {
            className: "mc-mobile-drawer-sublink mc-mobile-drawer-sublink-nested",
            onClick: closeAll,
            tabIndex: isOpen ? 0 : -1,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 312,
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
            lineNumber: 329,
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
          lineNumber: 342,
          columnNumber: 45
        }
      }, __jsx("a", {
        className: "mc-mobile-drawer-sublink",
        onClick: closeAll,
        tabIndex: isOpen ? 0 : -1,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 343,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXIvTmF2YmFyLmpzIl0sIm5hbWVzIjpbIm5hdmJhcl9oZWFkZXJzIiwiU2l0ZU5hdmJhciIsIl9zIiwiX3VzZVN0YXRlIiwidXNlU3RhdGUiLCJtZW51T3BlbiIsInNldE1lbnVPcGVuIiwiX3VzZVN0YXRlMiIsIm9wZW5Ecm9wZG93biIsInNldE9wZW5Ecm9wZG93biIsIl91c2VTdGF0ZTMiLCJvcGVuTW9iaWxlU2VjdGlvbiIsInNldE9wZW5Nb2JpbGVTZWN0aW9uIiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJib2R5Iiwic3R5bGUiLCJvdmVyZmxvdyIsImNsb3NlQWxsIiwiX19qc3giLCJSZWFjdCIsIkZyYWdtZW50IiwiX19zZWxmIiwiX3RoaXMiLCJfX3NvdXJjZSIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsImNsYXNzTmFtZSIsInJvbGUiLCJMaW5rIiwiaHJlZiIsInNyYyIsImFsdCIsIm1hcCIsImhlYWRlciIsImhhc0Ryb3Bkb3duIiwic3ViaGVhZGVycyIsImxlbmd0aCIsInRvIiwia2V5IiwibmFtZSIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsInR5cGUiLCJvbkNsaWNrIiwic3ViIiwiY2hpbGRyZW4iLCJsZWFmIiwibGVhZkV4dCIsInN0YXJ0c1dpdGgiLCJ0YXJnZXQiLCJyZWwiLCJleHRlcm5hbCIsImlkIiwiaXNPcGVuIiwidGFiSW5kZXgiLCJfYyIsIiRSZWZyZXNoUmVnJCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ3RCO0FBQ1A7QUFFdEIsSUFBTUEsY0FBYyxHQUFHLENBQ25CO0VBQ0ksTUFBTSxFQUFFLE1BQU07RUFDZCxZQUFZLEVBQUUsQ0FDVjtJQUFFLE1BQU0sRUFBRSxVQUFVO0lBQUUsSUFBSSxFQUFFO0VBQWMsQ0FBQyxFQUMzQztJQUFFLE1BQU0sRUFBRSxP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QTtRQUFBQyxRQUFBO1VBQUFDLFFBQUEsRUFBQUMsWUFBQTtVQUFBQyxVQUFBO1VBQUFDLFlBQUE7UUFBQTtNQUFBLEdBRXpCbUIsR0FBRyxDQUFDTCxJQUNOLENBQ0QsQ0FBQztJQUVmLENBQUMsQ0FDSSxDQUNKLENBQ0osQ0FBQztFQUVkLENBQUMsQ0FDQSxDQUNGLENBQ0ssQ0FBQztBQUV6QixDQUFDO0FBQUN4QyxFQUFBLENBNVNJRCxVQUFVO0FBQUF5RCxFQUFBLEdBQVZ6RCxVQUFVO0FBOFNEQSx5RUFBVSxFQUFDO0FBQUEsSUFBQXlELEVBQUE7QUFBQUMsWUFBQSxDQUFBRCxFQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Blb3BsZS9SSEFzLmU5N2Y1NzliZTAzNmFjMmIyMjAyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgJy4vTmF2YmFyLmNzcyc7XG5cbmNvbnN0IG5hdmJhcl9oZWFkZXJzID0gW1xuICAgIHtcbiAgICAgICAgXCJuYW1lXCI6IFwiSG9tZVwiLFxuICAgICAgICBcInN1YmhlYWRlcnNcIjogW1xuICAgICAgICAgICAgeyBcIm5hbWVcIjogXCJNY011cnRyeVwiLCBcInRvXCI6IFwiL2hvbWUvaW5kZXhcIiB9LFxuICAgICAgICAgICAgeyBcIm5hbWVcIjogXCJBYm91dFwiLCBcInRvXCI6IFwiL2hvbWUvYWJvdXRcIiB9LFxuICAgICAgICAgICAgeyBcIm5hbWVcIjogXCJDYWxlbmRhclwiLCBcInRvXCI6IFwiL2hvbWUvY2FsZW5kYXJcIiB9LFxuICAgICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwibmFtZVwiOiBcIlBlb3BsZVwiLFxuICAgICAgICBcInN1YmhlYWRlcnNcIjogW1xuICAgICAgICAgICAgeyBcIm5hbWVcIjogXCJNY1RlYW1cIiwgXCJ0b1wiOiBcIi9wZW9wbGUvbWN0ZWFtXCIgfSxcbiAgICAgICAgICAgIHsgXCJuYW1lXCI6IFwiQXNzb2NpYXRlc1wiLCBcInRvXCI6IFwiL3Blb3BsZS9hc3NvY2lhdGVzXCIgfSxcbiAgICAgICAgICAgIHsgXCJuYW1lXCI6IFwiQWZmaW5pdHkgR3JvdXBzXCIsIFwidG9cIjogXCIvcGVvcGxlL21jbXVydHJ5YWZmaW5pdHlncm91cHNcIiB9LFxuICAgICAgICAgICAgeyBcIm5hbWVcIjogXCJBY2FkZW1pYyBGZWxsb3dzXCIsIFwidG9cIjogXCIvcGVvcGxlL2FjYWRlbWljZmVsbG93c1wiIH0sXG4gICAgICAgICAgICB7IFwibmFtZVwiOiBcIlBlZXIgQWNhZGVtaWMgQWR2aXNvcnNcIiwgXCJ0b1wiOiBcIi9wZW9wbGUvcGFhc1wiIH0sXG4gICAgICAgICAgICB7IFwibmFtZVwiOiBcIlJIQXNcIiwgXCJ0b1wiOiBcIi9wZW9wbGUvUkhBc1wiIH0sXG4gICAgICAgICAgICB7IFwibmFtZVwiOiBcIkhlYWQgQ2FyZWdpdmVyc1wiLCBcInRvXCI6IFwiL3Blb3BsZS9oZWFkY2FyZWdpdmVyc1wiIH0sXG4gICAgICAgICAgICB7IFwibmFtZVwiOiBcIlNNUlwiLCBcInRvXCI6IFwiL3Blb3BsZS9TTVJcIiB9LFxuICAgICAgICAgICAgeyBcIm5hbWVcIjogXCJEaXZpc2lvbmFsIEFkdmlzb3JzXCIsIFwidG9cIjogXCIvcGVvcGxlL2RpdmlzaW9uYWxhZHZpc29yc1wiIH1cbiAgICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgICBcIm5hbWVcIjogXCJHb3Zlcm5tZW50XCIsXG4gICAgICAgIFwic3ViaGVhZGVyc1wiOiBbXG4gICAgICAgICAgICB7IFwibmFtZVwiOiBcIk1jQ291cnRcIiwgXCJ0b1wiOiBcIi9nb3Zlcm5tZW50L2NvdXJ0XCIgfSxcbiAgICAgICAgICAgIHsgXCJuYW1lXCI6IFwiQ29tbWl0dGVlc1wiLCBcInRvXCI6IFwiL2dvdmVybm1lbnQvY29tbWl0dGVlc1wiIH0sXG4gICAgICAgICAgICB7IFwibmFtZVwiOiBcIk1jTWluaXN0cnlcIiwgXCJ0b1wiOiBcIi9nb3Zlcm5tZW50L21jbWluaXN0cnlcIiB9XG4gICAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJuYW1lXCI6IFwiUmVzb3VyY2VzXCIsXG4gICAgICAgIFwic3ViaGVhZGVyc1wiOiBbXG4gICAgICAgICAgICB7IFwibmFtZVwiOiBcIlJvb20gUmVzZXJ2YXRpb25zXCIsIFwidG9cIjogXCIvcmVzb3VyY2VzL3Jvb20tcmVzZXJ2YXRpb25zXCIgfSxcbiAgICAgICAgICAgIHsgXCJuYW1lXCI6IFwiUC1DYXJkIFJlcXVlc3RzXCIsIFwidG9cIjogXCIvcmVzb3VyY2VzL3BjYXJkLXJlcXVlc3RzXCIgfSxcbiAgICAgICAgICAgIHsgXCJuYW1lXCI6IFwiTWNJdGVtcyBDaGVjayBPdXRcIiwgXCJ0b1wiOiBcIi9yZXNvdXJjZXMvbWNpdGVtcy1jaGVja291dFwiIH0sXG4gICAgICAgICAgICB7IFwibmFtZVwiOiBcIk1jTXVydHJ5IElubm92YXRpb24gU3BhY2VcIiwgXCJ0b1wiOiBcIi9yZXNvdXJjZXMvbWNtdXJ0cnktaW5ub3ZhdGlvbi1zcGFjZVwiIH0sXG4gICAgICAgICAgICB7IFwibmFtZVwiOiBcIk1jTGVnaXNsYXRpb25cIiwgXCJ0b1wiOiBcIi9yZXNvdXJjZXMvbWNsZWdpc2xhdGlvblwiIH0sXG4gICAgICAgICAgICB7IFwibmFtZVwiOiBcIkRpdmVyc2l0eSBSZXNvdXJjZXNcIiwgXCJ0b1wiOiBcIi9yZXNvdXJjZXMvZGl2ZXJzaXR5LXJlc291cmNlc1wiIH0sXG5cbiAgICAgICAgICAgIHsgXCJuYW1lXCI6IFwiTWNGVU5kIFJlcXVlc3RzXCIsIFwidG9cIjogXCIvcmVzb3VyY2VzL21jZnVuZC1yZXF1ZXN0c1wiIH0sXG4gICAgICAgICAgICB7IFwibmFtZVwiOiBcIkJ1ZGdldCBTaGVldFwiLCBcInRvXCI6IFwiaHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vc3ByZWFkc2hlZXRzL2QvMWltTkZ5N2N5YWR4aWVoN0pQY1BSdk16Qi1MZ01Ib3pOa1J6VVhfTHdwMUEvZWRpdD91c3A9c2hhcmluZ1wiIH0sXG4gICAgICAgICAgICB7IFwibmFtZVwiOiBcIkZpbmFuY2lhbCBJbmNsdXNpdml0eVwiLCBcInRvXCI6IFwiL3Jlc291cmNlcy9maW5hbmNpYWwtaW5jbHVzaXZpdHlcIiB9XG4gICAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJuYW1lXCI6IFwiTy1XZWVrc1wiLFxuICAgICAgICBcInN1YmhlYWRlcnNcIjogW1xuICAgICAgICAgICAgeyBcIm5hbWVcIjogXCIyMDI2LTIwMjdcIiwgXCJ0b1wiOiBcIi9vd2Vlay8yMDI2LTIwMjdcIiB9LFxuICAgICAgICAgICAgeyBcIm5hbWVcIjogXCIyMDI1LTIwMjZcIiwgXCJ0b1wiOiBcIi9vd2Vlay8yMDI1LTIwMjZcIiB9LFxuICAgICAgICAgICAgeyBcIm5hbWVcIjogXCIyMDI0LTIwMjVcIiwgXCJ0b1wiOiBcIi9vd2Vlay8yMDI0LTIwMjVcIiB9LFxuICAgICAgICAgICAgeyBcIm5hbWVcIjogXCIyMDIzLTIwMjRcIiwgXCJ0b1wiOiBcIi9vd2Vlay8yMDIzLTIwMjRcIiB9XG4gICAgICAgIF1cbiAgICB9XG5dO1xuXG5jb25zdCBTaXRlTmF2YmFyID0gKCkgPT4ge1xuICAgIGNvbnN0IFttZW51T3Blbiwgc2V0TWVudU9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtvcGVuRHJvcGRvd24sIHNldE9wZW5Ecm9wZG93bl0gPSB1c2VTdGF0ZShudWxsKTsgICAvLyB0b3AtbGV2ZWwgaXRlbSBuYW1lXG4gICAgY29uc3QgW29wZW5Nb2JpbGVTZWN0aW9uLCBzZXRPcGVuTW9iaWxlU2VjdGlvbl0gPSB1c2VTdGF0ZShudWxsKTtcblxuICAgIC8vIExvY2sgYm9keSBzY3JvbGwgd2hpbGUgdGhlIG1vYmlsZSBkcmF3ZXIgaXMgb3BlblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSByZXR1cm47XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBtZW51T3BlbiA/ICdoaWRkZW4nIDogJyc7XG4gICAgICAgIHJldHVybiAoKSA9PiB7IGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnJzsgfTtcbiAgICB9LCBbbWVudU9wZW5dKTtcblxuICAgIGNvbnN0IGNsb3NlQWxsID0gKCkgPT4ge1xuICAgICAgICBzZXRNZW51T3BlbihmYWxzZSk7XG4gICAgICAgIHNldE9wZW5Ecm9wZG93bihudWxsKTtcbiAgICAgICAgc2V0T3Blbk1vYmlsZVNlY3Rpb24obnVsbCk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwibWMtbmF2YmFyXCIgcm9sZT1cImJhbm5lclwiPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvaG9tZS9pbmRleFwiPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJtYy1uYXZiYXItYnJhbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvc3RhdGljL2xvZ29zL2hlcm8tY3Jlc3QucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1jLW5hdmJhci1jcmVzdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWMtbmF2YmFyLXdvcmRtYXJrXCI+TWNNdXJ0cnkgQ29sbGVnZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibWMtbmF2YmFyLWxpbmtzXCIgYXJpYS1sYWJlbD1cIk1haW5cIj5cbiAgICAgICAgICAgICAgICAgICAge25hdmJhcl9oZWFkZXJzLm1hcCgoaGVhZGVyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBoYXNEcm9wZG93biA9IGhlYWRlci5zdWJoZWFkZXJzICYmIGhlYWRlci5zdWJoZWFkZXJzLmxlbmd0aCA+IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWhhc0Ryb3Bkb3duKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17aGVhZGVyLnRvIHx8ICcjJ30ga2V5PXtoZWFkZXIubmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJtYy1uYXZiYXItbGlua1wiPntoZWFkZXIubmFtZX08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aGVhZGVyLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1jLW5hdmJhci1pdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRPcGVuRHJvcGRvd24oaGVhZGVyLm5hbWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldE9wZW5Ecm9wZG93bihudWxsKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYy1uYXZiYXItbGluayBtYy1uYXZiYXItdHJpZ2dlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD17b3BlbkRyb3Bkb3duID09PSBoZWFkZXIubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhhc3BvcHVwPVwibWVudVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0T3BlbkRyb3Bkb3duKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlbkRyb3Bkb3duID09PSBoZWFkZXIubmFtZSA/IG51bGwgOiBoZWFkZXIubmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtoZWFkZXIubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1wibWMtbmF2YmFyLWNhcmV0XCIgKyAob3BlbkRyb3Bkb3duID09PSBoZWFkZXIubmFtZSA/IFwiIG1jLW5hdmJhci1jYXJldC1vcGVuXCIgOiBcIlwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbWMtbmF2YmFyLWRyb3Bkb3duJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9wZW5Ecm9wZG93biA9PT0gaGVhZGVyLm5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnIG1jLW5hdmJhci1kcm9wZG93bi1vcGVuJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9sZT1cIm1lbnVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aGVhZGVyLnN1YmhlYWRlcnMubWFwKChzdWIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBOZXN0ZWQgc3VibWVudSAmcmRxdW874oCdIGBjaGlsZHJlbmAgYXJyYXksIG5vIGB0b2AuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN1Yi5jaGlsZHJlbiAmJiBzdWIuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17c3ViLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWMtbmF2YmFyLWRyb3Bkb3duLWxpbmsgbWMtbmF2YmFyLXN1Ym1lbnVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJtZW51aXRlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD1cIm1lbnVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1jLW5hdmJhci1zdWJtZW51LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWMtbmF2YmFyLXN1Ym1lbnUtY2FyZXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N1Yi5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1jLW5hdmJhci1zdWJtZW51LXBhbmVsXCIgcm9sZT1cIm1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N1Yi5jaGlsZHJlbi5tYXAoKGxlYWYpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxlYWZFeHQgPSBsZWFmLnRvICYmIGxlYWYudG8uc3RhcnRzV2l0aCgnaHR0cCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxlYWZFeHQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtsZWFmLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2xlYWYudG99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYy1uYXZiYXItZHJvcGRvd24tbGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJtZW51aXRlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGVhZi5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17bGVhZi50b30ga2V5PXtsZWFmLm5hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWMtbmF2YmFyLWRyb3Bkb3duLWxpbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9sZT1cIm1lbnVpdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE9wZW5Ecm9wZG93bihudWxsKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xlYWYubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGV4dGVybmFsID0gc3ViLnRvICYmIHN1Yi50by5zdGFydHNXaXRoKCdodHRwJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV4dGVybmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17c3ViLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17c3ViLnRvfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWMtbmF2YmFyLWRyb3Bkb3duLWxpbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJtZW51aXRlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N1Yi5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtzdWIudG99IGtleT17c3ViLm5hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYy1uYXZiYXItZHJvcGRvd24tbGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9sZT1cIm1lbnVpdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuRHJvcGRvd24obnVsbCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N1Yi5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvbmF2PlxuXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWMtbmF2YmFyLWhhbWJ1cmdlclwiXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9e21lbnVPcGVuID8gJ0Nsb3NlIG1lbnUnIDogJ09wZW4gbWVudSd9XG4gICAgICAgICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9e21lbnVPcGVufVxuICAgICAgICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwibWMtbW9iaWxlLWRyYXdlclwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE1lbnVPcGVuKHRydWUpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWMtaGFtYnVyZ2VyLWxpbmVcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtYy1oYW1idXJnZXItbGluZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1jLWhhbWJ1cmdlci1saW5lXCIgLz5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvaGVhZGVyPlxuXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsnbWMtbW9iaWxlLXNjcmltJyArIChtZW51T3BlbiA/ICcgbWMtbW9iaWxlLXNjcmltLW9wZW4nIDogJycpfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Nsb3NlQWxsfVxuICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGFzaWRlXG4gICAgICAgICAgICAgICAgaWQ9XCJtYy1tb2JpbGUtZHJhd2VyXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9eydtYy1tb2JpbGUtZHJhd2VyJyArIChtZW51T3BlbiA/ICcgbWMtbW9iaWxlLWRyYXdlci1vcGVuJyA6ICcnKX1cbiAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj17IW1lbnVPcGVufVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1jLW1vYmlsZS1kcmF3ZXItY2xvc2VcIlxuICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiQ2xvc2UgbWVudVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Nsb3NlQWxsfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJtYy1tb2JpbGUtZHJhd2VyLWxpbmtzXCIgYXJpYS1sYWJlbD1cIk1vYmlsZVwiPlxuICAgICAgICAgICAgICAgICAgICB7bmF2YmFyX2hlYWRlcnMubWFwKChoZWFkZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGhhc0Ryb3Bkb3duID0gaGVhZGVyLnN1YmhlYWRlcnMgJiYgaGVhZGVyLnN1YmhlYWRlcnMubGVuZ3RoID4gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzT3BlbiA9IG9wZW5Nb2JpbGVTZWN0aW9uID09PSBoZWFkZXIubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaGFzRHJvcGRvd24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtoZWFkZXIudG8gfHwgJyMnfSBrZXk9e2hlYWRlci5uYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm1jLW1vYmlsZS1kcmF3ZXItbGlua1wiIG9uQ2xpY2s9e2Nsb3NlQWxsfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aGVhZGVyLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aGVhZGVyLm5hbWV9IGNsYXNzTmFtZT1cIm1jLW1vYmlsZS1kcmF3ZXItc2VjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1jLW1vYmlsZS1kcmF3ZXItbGluayBtYy1tb2JpbGUtZHJhd2VyLXRyaWdnZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD17aXNPcGVufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRPcGVuTW9iaWxlU2VjdGlvbihpc09wZW4gPyBudWxsIDogaGVhZGVyLm5hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtoZWFkZXIubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtYy1tb2JpbGUtZHJhd2VyLWNhcmV0XCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaXNPcGVuID8gXCIgbWMtbW9iaWxlLWRyYXdlci1jYXJldC1vcGVuXCIgOiBcIlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBTdWJsaW5rcyBhbHdheXMgbW91bnRlZDsgQ1NTIGFuaW1hdGVzIHRoZSBncmlkLXJvdyBmcm9tIDBmciB0byAxZnIgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ21jLW1vYmlsZS1kcmF3ZXItc3VibGlua3MnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaXNPcGVuID8gJyBtYy1tb2JpbGUtZHJhd2VyLXN1YmxpbmtzLW9wZW4nIDogJycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj17IWlzT3Blbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYy1tb2JpbGUtZHJhd2VyLXN1YmxpbmtzLWlubmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aGVhZGVyLnN1YmhlYWRlcnMubWFwKChzdWIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBOZXN0ZWQgZ3JvdXAgb24gbW9iaWxlOiByZW5kZXIgYSBzbWFsbCBzZWN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaGVhZGVyIGZvbGxvd2VkIGJ5IGl0cyBpbmRlbnRlZCBjaGlsZHJlbi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3ViLmNoaWxkcmVuICYmIHN1Yi5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtzdWIubmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYy1tb2JpbGUtZHJhd2VyLXN1YnNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N1Yi5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdWIuY2hpbGRyZW4ubWFwKChsZWFmKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxlYWZFeHQgPSBsZWFmLnRvICYmIGxlYWYudG8uc3RhcnRzV2l0aCgnaHR0cCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbGVhZkV4dCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtsZWFmLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17bGVhZi50b31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1jLW1vYmlsZS1kcmF3ZXItc3VibGluayBtYy1tb2JpbGUtZHJhd2VyLXN1YmxpbmstbmVzdGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17aXNPcGVuID8gMCA6IC0xfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsZWFmLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtsZWFmLnRvfSBrZXk9e2xlYWYubmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWMtbW9iaWxlLWRyYXdlci1zdWJsaW5rIG1jLW1vYmlsZS1kcmF3ZXItc3VibGluay1uZXN0ZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtjbG9zZUFsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9e2lzT3BlbiA/IDAgOiAtMX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsZWFmLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXh0ZXJuYWwgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWIudG8gJiYgc3ViLnRvLnN0YXJ0c1dpdGgoJ2h0dHAnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXh0ZXJuYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtzdWIubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtzdWIudG99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYy1tb2JpbGUtZHJhd2VyLXN1YmxpbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXtpc09wZW4gPyAwIDogLTF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N1Yi5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtzdWIudG99IGtleT17c3ViLm5hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYy1tb2JpbGUtZHJhd2VyLXN1YmxpbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Nsb3NlQWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXtpc09wZW4gPyAwIDogLTF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N1Yi5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICA8L2FzaWRlPlxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaXRlTmF2YmFyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==