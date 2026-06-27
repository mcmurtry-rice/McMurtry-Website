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
  "name": "O-Weeks",
  "subheaders": [{
    "name": "O-Week Home",
    "to": "/oweek"
  }, {
    "name": "About the Theme",
    "to": "/oweek/theme"
  }, {
    "name": "Meet the Coords",
    "to": "/oweek/coords"
  }, {
    "name": "O-Week Groups",
    "to": "/oweek/oweekgroups"
  }, {
    "name": "Tour of McMurtry",
    "to": "/oweek/mcmtour"
  }, {
    "name": "Your Room",
    "to": "/oweek/yourroom"
  }, {
    "name": "O-Week Book",
    "to": "/oweek/oweekbook"
  }, {
    "name": "Contact Info",
    "to": "/oweek/oweekcontact"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXIvTmF2YmFyLmpzIl0sIm5hbWVzIjpbIm5hdmJhcl9oZWFkZXJzIiwiU2l0ZU5hdmJhciIsIl9zIiwiX3VzZVN0YXRlIiwidXNlU3RhdGUiLCJtZW51T3BlbiIsInNldE1lbnVPcGVuIiwiX3VzZVN0YXRlMiIsIm9wZW5Ecm9wZG93biIsInNldE9wZW5Ecm9wZG93biIsIl91c2VTdGF0ZTMiLCJvcGVuTW9iaWxlU2VjdGlvbiIsInNldE9wZW5Nb2JpbGVTZWN0aW9uIiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJib2R5Iiwic3R5bGUiLCJvdmVyZmxvdyIsImNsb3NlQWxsIiwiX19qc3giLCJSZWFjdCIsIkZyYWdtZW50IiwiX19zZWxmIiwiX3RoaXMiLCJfX3NvdXJjZSIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsImNsYXNzTmFtZSIsInJvbGUiLCJMaW5rIiwiaHJlZiIsInNyYyIsImFsdCIsIm1hcCIsImhlYWRlciIsImhhc0Ryb3Bkb3duIiwic3ViaGVhZGVycyIsImxlbmd0aCIsInRvIiwia2V5IiwibmFtZSIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsInR5cGUiLCJvbkNsaWNrIiwic3ViIiwiY2hpbGRyZW4iLCJsZWFmIiwibGVhZkV4dCIsInN0YXJ0c1dpdGgiLCJ0YXJnZXQiLCJyZWwiLCJleHRlcm5hbCIsImlkIiwiaXNPcGVuIiwidGFiSW5kZXgiLCJfYyIsIiRSZWZyZXNoUmVnJCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ3RCO0FBQ1A7QUFFdEIsSUFBTUEsY0FBYyxHQUFHLENBQ25CO0VBQ0ksTUFBTSxFQUFFLE1BQU07RUFDZCxZQUFZLEVBQUUsQ0FDVjtJQUFFLE1BQU0sRUFBRSxVQUFVO0lBQUUsSUFBSSxFQUFFO0VBQWMsQ0FBQyxFQUMzQztJQUFFLE1BQU0sRUFBRSxP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QyxVQUFBO1VBQUFDLFlBQUE7UUFBQTtNQUFBLEdBQzlCVCxLQUFBO1FBQ0lVLFNBQVMsRUFBQywwQkFBMEI7UUFDcENpQixPQUFPLEVBQUU1QixRQUFTO1FBQ2xCdUMsUUFBUSxFQUFFRCxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBRTtRQUFBbEMsTUFBQSxFQUFBQyxLQUFBO1FBQUFDLFFBQUE7VUFBQUMsUUFBQSxFQUFBQyxZQUFBO1VBQUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBO01BQUEsR0FFekJtQixHQUFHLENBQUNMLElBQ04sQ0FDRCxDQUFDO0lBRWYsQ0FBQyxDQUNJLENBQ0osQ0FDSixDQUFDO0VBRWQsQ0FBQyxDQUNBLENBQ0YsQ0FDSyxDQUFDO0FBRXpCLENBQUM7QUFBQ3hDLEVBQUEsQ0E1U0lELFVBQVU7QUFBQXlELEVBQUEsR0FBVnpELFVBQVU7QUE4U0RBLHlFQUFVLEVBQUM7QUFBQSxJQUFBeUQsRUFBQTtBQUFBQyxZQUFBLENBQUFELEVBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGVvcGxlL1JIQXMuZTI3NDA5ZTVlYjlkNTg5MmVjZjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCAnLi9OYXZiYXIuY3NzJztcblxuY29uc3QgbmF2YmFyX2hlYWRlcnMgPSBbXG4gICAge1xuICAgICAgICBcIm5hbWVcIjogXCJIb21lXCIsXG4gICAgICAgIFwic3ViaGVhZGVyc1wiOiBbXG4gICAgICAgICAgICB7IFwibmFtZVwiOiBcIk1jTXVydHJ5XCIsIFwidG9cIjogXCIvaG9tZS9pbmRleFwiIH0sXG4gICAgICAgICAgICB7IFwibmFtZVwiOiBcIkFib3V0XCIsIFwidG9cIjogXCIvaG9tZS9hYm91dFwiIH0sXG4gICAgICAgICAgICB7IFwibmFtZVwiOiBcIkNhbGVuZGFyXCIsIFwidG9cIjogXCIvaG9tZS9jYWxlbmRhclwiIH0sXG4gICAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJuYW1lXCI6IFwiUGVvcGxlXCIsXG4gICAgICAgIFwic3ViaGVhZGVyc1wiOiBbXG4gICAgICAgICAgICB7IFwibmFtZVwiOiBcIk1jVGVhbVwiLCBcInRvXCI6IFwiL3Blb3BsZS9tY3RlYW1cIiB9LFxuICAgICAgICAgICAgeyBcIm5hbWVcIjogXCJBc3NvY2lhdGVzXCIsIFwidG9cIjogXCIvcGVvcGxlL2Fzc29jaWF0ZXNcIiB9LFxuICAgICAgICAgICAgeyBcIm5hbWVcIjogXCJBZmZpbml0eSBHcm91cHNcIiwgXCJ0b1wiOiBcIi9wZW9wbGUvbWNtdXJ0cnlhZmZpbml0eWdyb3Vwc1wiIH0sXG4gICAgICAgICAgICB7IFwibmFtZVwiOiBcIkFjYWRlbWljIEZlbGxvd3NcIiwgXCJ0b1wiOiBcIi9wZW9wbGUvYWNhZGVtaWNmZWxsb3dzXCIgfSxcbiAgICAgICAgICAgIHsgXCJuYW1lXCI6IFwiUGVlciBBY2FkZW1pYyBBZHZpc29yc1wiLCBcInRvXCI6IFwiL3Blb3BsZS9wYWFzXCIgfSxcbiAgICAgICAgICAgIHsgXCJuYW1lXCI6IFwiUkhBc1wiLCBcInRvXCI6IFwiL3Blb3BsZS9SSEFzXCIgfSxcbiAgICAgICAgICAgIHsgXCJuYW1lXCI6IFwiSGVhZCBDYXJlZ2l2ZXJzXCIsIFwidG9cIjogXCIvcGVvcGxlL2hlYWRjYXJlZ2l2ZXJzXCIgfSxcbiAgICAgICAgICAgIHsgXCJuYW1lXCI6IFwiU01SXCIsIFwidG9cIjogXCIvcGVvcGxlL1NNUlwiIH1cbiAgICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgICBcIm5hbWVcIjogXCJHb3Zlcm5tZW50XCIsXG4gICAgICAgIFwic3ViaGVhZGVyc1wiOiBbXG4gICAgICAgICAgICB7IFwibmFtZVwiOiBcIk1jQ291cnRcIiwgXCJ0b1wiOiBcIi9nb3Zlcm5tZW50L2NvdXJ0XCIgfSxcbiAgICAgICAgICAgIHsgXCJuYW1lXCI6IFwiQ29tbWl0dGVlc1wiLCBcInRvXCI6IFwiL2dvdmVybm1lbnQvY29tbWl0dGVlc1wiIH0sXG4gICAgICAgICAgICB7IFwibmFtZVwiOiBcIk1jTWluaXN0cnlcIiwgXCJ0b1wiOiBcIi9nb3Zlcm5tZW50L21jbWluaXN0cnlcIiB9XG4gICAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJuYW1lXCI6IFwiUmVzb3VyY2VzXCIsXG4gICAgICAgIFwic3ViaGVhZGVyc1wiOiBbXG4gICAgICAgICAgICB7IFwibmFtZVwiOiBcIlJvb20gUmVzZXJ2YXRpb25zXCIsIFwidG9cIjogXCIvcmVzb3VyY2VzL3Jvb20tcmVzZXJ2YXRpb25zXCIgfSxcbiAgICAgICAgICAgIHsgXCJuYW1lXCI6IFwiUC1DYXJkIFJlcXVlc3RzXCIsIFwidG9cIjogXCIvcmVzb3VyY2VzL3BjYXJkLXJlcXVlc3RzXCIgfSxcbiAgICAgICAgICAgIHsgXCJuYW1lXCI6IFwiTWNJdGVtcyBDaGVjayBPdXRcIiwgXCJ0b1wiOiBcIi9yZXNvdXJjZXMvbWNpdGVtcy1jaGVja291dFwiIH0sXG4gICAgICAgICAgICB7IFwibmFtZVwiOiBcIk1jTXVydHJ5IElubm92YXRpb24gU3BhY2VcIiwgXCJ0b1wiOiBcIi9yZXNvdXJjZXMvbWNtdXJ0cnktaW5ub3ZhdGlvbi1zcGFjZVwiIH0sXG4gICAgICAgICAgICB7IFwibmFtZVwiOiBcIk1jTGVnaXNsYXRpb25cIiwgXCJ0b1wiOiBcIi9yZXNvdXJjZXMvbWNsZWdpc2xhdGlvblwiIH0sXG4gICAgICAgICAgICB7IFwibmFtZVwiOiBcIkRpdmVyc2l0eSBSZXNvdXJjZXNcIiwgXCJ0b1wiOiBcIi9yZXNvdXJjZXMvZGl2ZXJzaXR5LXJlc291cmNlc1wiIH0sXG5cbiAgICAgICAgICAgIHsgXCJuYW1lXCI6IFwiTWNGVU5kIFJlcXVlc3RzXCIsIFwidG9cIjogXCIvcmVzb3VyY2VzL21jZnVuZC1yZXF1ZXN0c1wiIH0sXG4gICAgICAgICAgICB7IFwibmFtZVwiOiBcIkJ1ZGdldCBTaGVldFwiLCBcInRvXCI6IFwiaHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vc3ByZWFkc2hlZXRzL2QvMWltTkZ5N2N5YWR4aWVoN0pQY1BSdk16Qi1MZ01Ib3pOa1J6VVhfTHdwMUEvZWRpdD91c3A9c2hhcmluZ1wiIH0sXG4gICAgICAgICAgICB7IFwibmFtZVwiOiBcIkZpbmFuY2lhbCBJbmNsdXNpdml0eVwiLCBcInRvXCI6IFwiL3Jlc291cmNlcy9maW5hbmNpYWwtaW5jbHVzaXZpdHlcIiB9XG4gICAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJuYW1lXCI6IFwiTy1XZWVrc1wiLFxuICAgICAgICBcInN1YmhlYWRlcnNcIjogW1xuICAgICAgICAgICAgeyBcIm5hbWVcIjogXCJPLVdlZWsgSG9tZVwiLCBcInRvXCI6IFwiL293ZWVrXCIgfSxcbiAgICAgICAgICAgIHsgXCJuYW1lXCI6IFwiQWJvdXQgdGhlIFRoZW1lXCIsIFwidG9cIjogXCIvb3dlZWsvdGhlbWVcIiB9LFxuICAgICAgICAgICAgeyBcIm5hbWVcIjogXCJNZWV0IHRoZSBDb29yZHNcIiwgXCJ0b1wiOiBcIi9vd2Vlay9jb29yZHNcIiB9LFxuICAgICAgICAgICAgeyBcIm5hbWVcIjogXCJPLVdlZWsgR3JvdXBzXCIsIFwidG9cIjogXCIvb3dlZWsvb3dlZWtncm91cHNcIiB9LFxuICAgICAgICAgICAgeyBcIm5hbWVcIjogXCJUb3VyIG9mIE1jTXVydHJ5XCIsIFwidG9cIjogXCIvb3dlZWsvbWNtdG91clwiIH0sXG4gICAgICAgICAgICB7IFwibmFtZVwiOiBcIllvdXIgUm9vbVwiLCBcInRvXCI6IFwiL293ZWVrL3lvdXJyb29tXCIgfSxcbiAgICAgICAgICAgIHsgXCJuYW1lXCI6IFwiTy1XZWVrIEJvb2tcIiwgXCJ0b1wiOiBcIi9vd2Vlay9vd2Vla2Jvb2tcIiB9LFxuICAgICAgICAgICAgeyBcIm5hbWVcIjogXCJDb250YWN0IEluZm9cIiwgXCJ0b1wiOiBcIi9vd2Vlay9vd2Vla2NvbnRhY3RcIiB9XG4gICAgICAgIF1cbiAgICB9XG5dO1xuXG5jb25zdCBTaXRlTmF2YmFyID0gKCkgPT4ge1xuICAgIGNvbnN0IFttZW51T3Blbiwgc2V0TWVudU9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtvcGVuRHJvcGRvd24sIHNldE9wZW5Ecm9wZG93bl0gPSB1c2VTdGF0ZShudWxsKTsgICAvLyB0b3AtbGV2ZWwgaXRlbSBuYW1lXG4gICAgY29uc3QgW29wZW5Nb2JpbGVTZWN0aW9uLCBzZXRPcGVuTW9iaWxlU2VjdGlvbl0gPSB1c2VTdGF0ZShudWxsKTtcblxuICAgIC8vIExvY2sgYm9keSBzY3JvbGwgd2hpbGUgdGhlIG1vYmlsZSBkcmF3ZXIgaXMgb3BlblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSByZXR1cm47XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBtZW51T3BlbiA/ICdoaWRkZW4nIDogJyc7XG4gICAgICAgIHJldHVybiAoKSA9PiB7IGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnJzsgfTtcbiAgICB9LCBbbWVudU9wZW5dKTtcblxuICAgIGNvbnN0IGNsb3NlQWxsID0gKCkgPT4ge1xuICAgICAgICBzZXRNZW51T3BlbihmYWxzZSk7XG4gICAgICAgIHNldE9wZW5Ecm9wZG93bihudWxsKTtcbiAgICAgICAgc2V0T3Blbk1vYmlsZVNlY3Rpb24obnVsbCk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwibWMtbmF2YmFyXCIgcm9sZT1cImJhbm5lclwiPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvaG9tZS9pbmRleFwiPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJtYy1uYXZiYXItYnJhbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvc3RhdGljL2xvZ29zL2hlcm8tY3Jlc3QucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1jLW5hdmJhci1jcmVzdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWMtbmF2YmFyLXdvcmRtYXJrXCI+TWNNdXJ0cnkgQ29sbGVnZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibWMtbmF2YmFyLWxpbmtzXCIgYXJpYS1sYWJlbD1cIk1haW5cIj5cbiAgICAgICAgICAgICAgICAgICAge25hdmJhcl9oZWFkZXJzLm1hcCgoaGVhZGVyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBoYXNEcm9wZG93biA9IGhlYWRlci5zdWJoZWFkZXJzICYmIGhlYWRlci5zdWJoZWFkZXJzLmxlbmd0aCA+IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWhhc0Ryb3Bkb3duKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17aGVhZGVyLnRvIHx8ICcjJ30ga2V5PXtoZWFkZXIubmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJtYy1uYXZiYXItbGlua1wiPntoZWFkZXIubmFtZX08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aGVhZGVyLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1jLW5hdmJhci1pdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRPcGVuRHJvcGRvd24oaGVhZGVyLm5hbWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldE9wZW5Ecm9wZG93bihudWxsKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYy1uYXZiYXItbGluayBtYy1uYXZiYXItdHJpZ2dlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD17b3BlbkRyb3Bkb3duID09PSBoZWFkZXIubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhhc3BvcHVwPVwibWVudVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0T3BlbkRyb3Bkb3duKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlbkRyb3Bkb3duID09PSBoZWFkZXIubmFtZSA/IG51bGwgOiBoZWFkZXIubmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtoZWFkZXIubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1wibWMtbmF2YmFyLWNhcmV0XCIgKyAob3BlbkRyb3Bkb3duID09PSBoZWFkZXIubmFtZSA/IFwiIG1jLW5hdmJhci1jYXJldC1vcGVuXCIgOiBcIlwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbWMtbmF2YmFyLWRyb3Bkb3duJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9wZW5Ecm9wZG93biA9PT0gaGVhZGVyLm5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnIG1jLW5hdmJhci1kcm9wZG93bi1vcGVuJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9sZT1cIm1lbnVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aGVhZGVyLnN1YmhlYWRlcnMubWFwKChzdWIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBOZXN0ZWQgc3VibWVudSAmcmRxdW874oCdIGBjaGlsZHJlbmAgYXJyYXksIG5vIGB0b2AuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN1Yi5jaGlsZHJlbiAmJiBzdWIuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17c3ViLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWMtbmF2YmFyLWRyb3Bkb3duLWxpbmsgbWMtbmF2YmFyLXN1Ym1lbnVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJtZW51aXRlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD1cIm1lbnVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1jLW5hdmJhci1zdWJtZW51LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWMtbmF2YmFyLXN1Ym1lbnUtY2FyZXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N1Yi5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1jLW5hdmJhci1zdWJtZW51LXBhbmVsXCIgcm9sZT1cIm1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N1Yi5jaGlsZHJlbi5tYXAoKGxlYWYpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxlYWZFeHQgPSBsZWFmLnRvICYmIGxlYWYudG8uc3RhcnRzV2l0aCgnaHR0cCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxlYWZFeHQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtsZWFmLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2xlYWYudG99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYy1uYXZiYXItZHJvcGRvd24tbGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJtZW51aXRlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGVhZi5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17bGVhZi50b30ga2V5PXtsZWFmLm5hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWMtbmF2YmFyLWRyb3Bkb3duLWxpbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9sZT1cIm1lbnVpdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE9wZW5Ecm9wZG93bihudWxsKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xlYWYubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGV4dGVybmFsID0gc3ViLnRvICYmIHN1Yi50by5zdGFydHNXaXRoKCdodHRwJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV4dGVybmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17c3ViLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17c3ViLnRvfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWMtbmF2YmFyLWRyb3Bkb3duLWxpbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJtZW51aXRlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N1Yi5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtzdWIudG99IGtleT17c3ViLm5hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYy1uYXZiYXItZHJvcGRvd24tbGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9sZT1cIm1lbnVpdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuRHJvcGRvd24obnVsbCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N1Yi5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvbmF2PlxuXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWMtbmF2YmFyLWhhbWJ1cmdlclwiXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9e21lbnVPcGVuID8gJ0Nsb3NlIG1lbnUnIDogJ09wZW4gbWVudSd9XG4gICAgICAgICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9e21lbnVPcGVufVxuICAgICAgICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwibWMtbW9iaWxlLWRyYXdlclwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE1lbnVPcGVuKHRydWUpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWMtaGFtYnVyZ2VyLWxpbmVcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtYy1oYW1idXJnZXItbGluZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1jLWhhbWJ1cmdlci1saW5lXCIgLz5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvaGVhZGVyPlxuXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsnbWMtbW9iaWxlLXNjcmltJyArIChtZW51T3BlbiA/ICcgbWMtbW9iaWxlLXNjcmltLW9wZW4nIDogJycpfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Nsb3NlQWxsfVxuICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGFzaWRlXG4gICAgICAgICAgICAgICAgaWQ9XCJtYy1tb2JpbGUtZHJhd2VyXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9eydtYy1tb2JpbGUtZHJhd2VyJyArIChtZW51T3BlbiA/ICcgbWMtbW9iaWxlLWRyYXdlci1vcGVuJyA6ICcnKX1cbiAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj17IW1lbnVPcGVufVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1jLW1vYmlsZS1kcmF3ZXItY2xvc2VcIlxuICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiQ2xvc2UgbWVudVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Nsb3NlQWxsfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJtYy1tb2JpbGUtZHJhd2VyLWxpbmtzXCIgYXJpYS1sYWJlbD1cIk1vYmlsZVwiPlxuICAgICAgICAgICAgICAgICAgICB7bmF2YmFyX2hlYWRlcnMubWFwKChoZWFkZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGhhc0Ryb3Bkb3duID0gaGVhZGVyLnN1YmhlYWRlcnMgJiYgaGVhZGVyLnN1YmhlYWRlcnMubGVuZ3RoID4gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzT3BlbiA9IG9wZW5Nb2JpbGVTZWN0aW9uID09PSBoZWFkZXIubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaGFzRHJvcGRvd24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtoZWFkZXIudG8gfHwgJyMnfSBrZXk9e2hlYWRlci5uYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm1jLW1vYmlsZS1kcmF3ZXItbGlua1wiIG9uQ2xpY2s9e2Nsb3NlQWxsfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aGVhZGVyLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aGVhZGVyLm5hbWV9IGNsYXNzTmFtZT1cIm1jLW1vYmlsZS1kcmF3ZXItc2VjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1jLW1vYmlsZS1kcmF3ZXItbGluayBtYy1tb2JpbGUtZHJhd2VyLXRyaWdnZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD17aXNPcGVufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRPcGVuTW9iaWxlU2VjdGlvbihpc09wZW4gPyBudWxsIDogaGVhZGVyLm5hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtoZWFkZXIubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtYy1tb2JpbGUtZHJhd2VyLWNhcmV0XCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaXNPcGVuID8gXCIgbWMtbW9iaWxlLWRyYXdlci1jYXJldC1vcGVuXCIgOiBcIlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBTdWJsaW5rcyBhbHdheXMgbW91bnRlZDsgQ1NTIGFuaW1hdGVzIHRoZSBncmlkLXJvdyBmcm9tIDBmciB0byAxZnIgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ21jLW1vYmlsZS1kcmF3ZXItc3VibGlua3MnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaXNPcGVuID8gJyBtYy1tb2JpbGUtZHJhd2VyLXN1YmxpbmtzLW9wZW4nIDogJycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj17IWlzT3Blbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYy1tb2JpbGUtZHJhd2VyLXN1YmxpbmtzLWlubmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aGVhZGVyLnN1YmhlYWRlcnMubWFwKChzdWIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBOZXN0ZWQgZ3JvdXAgb24gbW9iaWxlOiByZW5kZXIgYSBzbWFsbCBzZWN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaGVhZGVyIGZvbGxvd2VkIGJ5IGl0cyBpbmRlbnRlZCBjaGlsZHJlbi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3ViLmNoaWxkcmVuICYmIHN1Yi5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtzdWIubmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYy1tb2JpbGUtZHJhd2VyLXN1YnNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N1Yi5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdWIuY2hpbGRyZW4ubWFwKChsZWFmKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxlYWZFeHQgPSBsZWFmLnRvICYmIGxlYWYudG8uc3RhcnRzV2l0aCgnaHR0cCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbGVhZkV4dCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtsZWFmLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17bGVhZi50b31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1jLW1vYmlsZS1kcmF3ZXItc3VibGluayBtYy1tb2JpbGUtZHJhd2VyLXN1YmxpbmstbmVzdGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17aXNPcGVuID8gMCA6IC0xfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsZWFmLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtsZWFmLnRvfSBrZXk9e2xlYWYubmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWMtbW9iaWxlLWRyYXdlci1zdWJsaW5rIG1jLW1vYmlsZS1kcmF3ZXItc3VibGluay1uZXN0ZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtjbG9zZUFsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9e2lzT3BlbiA/IDAgOiAtMX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsZWFmLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXh0ZXJuYWwgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWIudG8gJiYgc3ViLnRvLnN0YXJ0c1dpdGgoJ2h0dHAnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXh0ZXJuYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtzdWIubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtzdWIudG99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYy1tb2JpbGUtZHJhd2VyLXN1YmxpbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXtpc09wZW4gPyAwIDogLTF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N1Yi5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtzdWIudG99IGtleT17c3ViLm5hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYy1tb2JpbGUtZHJhd2VyLXN1YmxpbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Nsb3NlQWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXtpc09wZW4gPyAwIDogLTF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N1Yi5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICA8L2FzaWRlPlxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaXRlTmF2YmFyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==