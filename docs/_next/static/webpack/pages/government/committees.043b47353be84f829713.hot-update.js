webpackHotUpdate_N_E("pages/government/committees",{

/***/ "./pages/government/committees/index.js":
/*!**********************************************!*\
  !*** ./pages/government/committees/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/Header/Header */ "./components/Header/Header.js");
/* harmony import */ var _components_navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/navbar/Navbar */ "./components/navbar/Navbar.js");
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/Footer/Footer */ "./components/Footer/Footer.js");
/* harmony import */ var _components_PersonChip_PersonChip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/PersonChip/PersonChip */ "./components/PersonChip/PersonChip.js");
/* harmony import */ var _tools_database_useSupabaseTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../tools/database/useSupabaseTable */ "./tools/database/useSupabaseTable.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.css */ "./pages/government/committees/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_6__);
var _this = undefined,
  _jsxFileName = "C:\\Users\\anton\\Documents\\Projects\\MurtWebsite\\pages\\government\\committees\\index.js",
  _s = $RefreshSig$();
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








/*
 * Committees - diagram layout following the O-Week Book (p. 128):
 * a band per division lead with its committee boxes underneath, each
 * box showing the committee name and three quick bullets. Clicking a
 * box zooms into a modal with the full description, heads, and members.
 *
 * Committees and their people come from Supabase; the bullets below are
 * a static summary layer (new committees without bullets still render).
 */

// division value in the `committees` table -> band title (the book labels
// bands by the division lead)
var DIVISION_LEADS = {
  'External Committees': 'External Vice President',
  'Internal Committees': 'Internal Vice President',
  'Social Committees': 'Prime Minister',
  'At-Large Committees': 'At-Large Representative'
};

// three-line summaries per committee (book p. 128, adapted), keyed by
// lowercased committee name
var BULLETS = {
  'arts': ['Creative community engagement', 'Designs birthday banners and themed decorations', 'Connects the college through visual arts'],
  'alumni': ['Publishes the semiannual alumni newsletter', 'Maintains connections with graduates', 'Bridges past and present Murt communities'],
  'associates': ['Liaises between students and faculty/staff associates', 'Hosts Associates Nights twice a year', 'Builds mentorship and networking'],
  'social media and history': ['Documents traditions, events, and history', 'Manages the college social media presence', 'Captures and preserves campus life'],
  'murtchandise': ['Manages design and ordering of college gear', 'Handles logistics for merchandise', 'Connects creativity with college spirit'],
  'sports': ['Promotes Rice sporting events', 'Hosts the Super Bowl watch party', 'Organizes intramural activities'],
  'traditions': ['Plans McScottish, Murt-O-Ween, and Murty Holidays', 'Preserves and evolves Murt traditions', 'Strengthens college identity'],
  'charity and philanthropy': ['Organizes charitable initiatives', 'Connects Murt with community causes', 'Fosters a culture of giving back'],
  'amenities': ['Improves college spaces and interior design', 'Manages the budget for facility upgrades', 'Responds to student needs for spaces'],
  'culinary': ['Hosts food events including Sunday Sundaes', 'Caters to diverse tastes across the college', 'Builds community through shared food'],
  'website': ['Maintains and improves the online presence', 'Provides web development experience', 'Keeps the website current and user-friendly'],
  'environmental': ['Promotes sustainability at McMurtry', 'Plans Sustainable Sunday Sundaes', 'Combines eco-consciousness with college life'],
  'mcmakerspace': ['Manages the McMakerspace for all Rice students', 'Offers tools for building and creating', 'Fosters hands-on innovation'],
  'expeditions': ['Plans monthly Murts on the Move outings', 'Organizes McExpeditions trips each semester', 'Takes McMurtry on the road'],
  'internal socials': ['Plans FITQ every Friday in the Quad', 'Promotes week-to-week community', 'The most active social committee'],
  'external socials': ['Plans the Y2K party and Pub Night events', 'Organizes cross-college socials', 'Connects Murts with other colleges'],
  'beer bike': ['Coordinates Beer Bike participation', 'Plans the biggest event of the year', 'Manages team, chug, and race logistics'],
  'seniors': ['Plans champagne toasts and senior events', 'Organizes Senior Gala and graduation', 'Creates memorable final-year experiences'],
  'college night': ['Hosts low-key themed hangouts with other colleges', 'Plans College Night events each semester', 'A new committee you can help shape'],
  'culturals & diversity': ['Promotes cultural awareness through events', 'Organizes Restaurant Day with international cuisines', 'Serves as an inclusion resource for the college']
};
var bulletsFor = function bulletsFor(name) {
  return BULLETS[(name || '').toLowerCase()] || [];
};
var toChips = function toChips(rows) {
  return rows.map(function (_ref) {
    var name = _ref.name,
      email = _ref.email;
    return {
      name: name,
      email: email
    };
  });
};
var CommitteesPage = function CommitteesPage() {
  _s();
  var _useSupabaseTable = Object(_tools_database_useSupabaseTable__WEBPACK_IMPORTED_MODULE_5__["useSupabaseTable"])('committees'),
    committees = _useSupabaseTable.rows,
    loadingCommittees = _useSupabaseTable.isLoading;
  var _useSupabaseTable2 = Object(_tools_database_useSupabaseTable__WEBPACK_IMPORTED_MODULE_5__["useSupabaseTable"])('committee_members'),
    members = _useSupabaseTable2.rows,
    loadingMembers = _useSupabaseTable2.isLoading;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
    selected = _useState[0],
    setSelected = _useState[1];
  var divisionNames = Object(_tools_database_useSupabaseTable__WEBPACK_IMPORTED_MODULE_5__["distinctInOrder"])(committees, 'division');
  var isLoading = loadingCommittees || loadingMembers;

  // Deep link support: /government/committees#Arts opens the Arts modal
  // (used by the McMinistry org chart).
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (committees.length === 0) return;
    var hash = decodeURIComponent(window.location.hash.replace(/^#/, ''));
    if (!hash) return;
    var target = committees.find(function (c) {
      return c.name.toLowerCase() === hash.toLowerCase();
    });
    if (target) setSelected(target);
  }, [committees]);

  // lock page scroll and close on Escape while the modal is open
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!selected) return undefined;
    var prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    var onKey = function onKey(e) {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', onKey);
    return function () {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [selected]);
  var openModal = function openModal(committee) {
    setSelected(committee);
    window.history.replaceState(null, '', "#".concat(encodeURIComponent(committee.name)));
  };
  var closeModal = function closeModal() {
    setSelected(null);
    window.history.replaceState(null, '', window.location.pathname);
  };
  var heads = selected ? members.filter(function (m) {
    return m.committee_name === selected.name && m.role === 'head';
  }) : [];
  var regular = selected ? members.filter(function (m) {
    return m.committee_name === selected.name && m.role === 'member';
  }) : [];
  return __jsx("div", {
    className: "page page-light page-with-staggered-menu",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 9
    }
  }, __jsx(_components_Header_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 13
    }
  }), __jsx(_components_navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "committee-page",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    }
  }, __jsx("header", {
    className: "ev-hero",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
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
      lineNumber: 109,
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
      lineNumber: 110,
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
      lineNumber: 111,
      columnNumber: 21
    }
  }), __jsx("h1", {
    className: "ev-hero-heading",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 21
    }
  }, "Committees")), __jsx("p", {
    className: "cm-lede",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 17
    }
  }, "Committees are student-run, student-led groups that shape McMurtry\u2019s culture and community. Click any committee to meet its heads and members."), isLoading ? __jsx("div", {
    className: "loading-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "loading-spinner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 25
    }
  }), __jsx("p", {
    className: "loading-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 25
    }
  }, "Loading...")) : __jsx("div", {
    className: "cm-diagram fade-in",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 21
    }
  }, divisionNames.map(function (division) {
    return __jsx("section", {
      key: division,
      className: "cm-division",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 29
      }
    }, __jsx("h2", {
      className: "cm-band",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 33
      }
    }, DIVISION_LEADS[division] || division), __jsx("div", {
      className: "cm-grid",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 33
      }
    }, committees.filter(function (c) {
      return c.division === division;
    }).map(function (c) {
      return __jsx("button", {
        key: c.id,
        type: "button",
        className: "cm-box",
        onClick: function onClick() {
          return openModal(c);
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 41
        }
      }, __jsx("h3", {
        className: "cm-box-title",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 45
        }
      }, c.name), bulletsFor(c.name).length > 0 && __jsx("ul", {
        className: "cm-box-bullets",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 49
        }
      }, bulletsFor(c.name).map(function (b) {
        return __jsx("li", {
          key: b,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 84
          }
        }, b);
      })), __jsx("span", {
        className: "cm-box-more",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 45
        }
      }, __jsx("i", {
        className: "ph ph-users-three",
        "aria-hidden": "true",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 49
        }
      }), " Meet the committee"));
    })));
  })), selected ? __jsx("div", {
    className: "cm-modal-scrim",
    onClick: closeModal,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "cm-modal",
    role: "dialog",
    "aria-modal": "true",
    "aria-label": selected.name,
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 25
    }
  }, __jsx("button", {
    type: "button",
    className: "cm-modal-close",
    onClick: closeModal,
    "aria-label": "Close",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 29
    }
  }, __jsx("i", {
    className: "ph ph-x",
    "aria-hidden": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 33
    }
  })), __jsx("p", {
    className: "cm-modal-eyebrow",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 29
    }
  }, DIVISION_LEADS[selected.division] || selected.division), __jsx("h2", {
    className: "cm-modal-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 29
    }
  }, selected.name), selected.image ? __jsx("div", {
    className: "cm-image-wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 33
    }
  }, __jsx("img", {
    src: selected.image,
    alt: selected.name,
    className: "cm-image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 37
    }
  })) : null, selected.description ? __jsx("div", {
    className: "cm-description",
    dangerouslySetInnerHTML: {
      __html: selected.description
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 33
    }
  }) : null, __jsx("h3", {
    className: "cm-subtitle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 29
    }
  }, "Committee Heads"), heads.length > 0 ? __jsx(_components_PersonChip_PersonChip__WEBPACK_IMPORTED_MODULE_4__["default"], {
    content: toChips(heads),
    accent: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 33
    }
  }) : __jsx("p", {
    className: "cm-modal-empty",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 33
    }
  }, "To be announced."), __jsx("h3", {
    className: "cm-subtitle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 29
    }
  }, "Committee Members"), regular.length > 0 ? __jsx(_components_PersonChip_PersonChip__WEBPACK_IMPORTED_MODULE_4__["default"], {
    content: toChips(regular),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 33
    }
  }) : __jsx("p", {
    className: "cm-modal-empty",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 33
    }
  }, "To be announced."))) : null), __jsx(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 13
    }
  }));
};
_s(CommitteesPage, "JhpSD3yZYNOgUi8fQ91kkDJLbhA=", false, function () {
  return [_tools_database_useSupabaseTable__WEBPACK_IMPORTED_MODULE_5__["useSupabaseTable"], _tools_database_useSupabaseTable__WEBPACK_IMPORTED_MODULE_5__["useSupabaseTable"]];
});
_c = CommitteesPage;
/* harmony default export */ __webpack_exports__["default"] = (CommitteesPage);
var _c;
$RefreshReg$(_c, "CommitteesPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ292ZXJubWVudC9jb21taXR0ZWVzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkRJVklTSU9OX0xFQURTIiwiQlVMTEVUUyIsImJ1bGxldHNGb3IiLCJuYW1lIiwidG9Mb3dlckNhc2UiLCJ0b0NoaXBzIiwicm93cyIsIm1hcCIsIl9yZWYiLCJlbWFpbCIsIkNvbW1pdHRlZXNQYWdlIiwiX3MiLCJfdXNlU3VwYWJhc2VUYWJsZSIsInVzZVN1cGFiYXNlVGFibGUiLCJjb21taXR0ZWVzIiwibG9hZGluZ0NvbW1pdHRlZXMiLCJpc0xvYWRpbmciLCJfdXNlU3VwYWJhc2VUYWJsZTIiLCJtZW1iZXJzIiwibG9hZGluZ01lbWJlcnMiLCJfdXNlU3RhdGUiLCJ1c2VTdGF0ZSIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJkaXZpc2lvbk5hbWVzIiwiZGlzdGluY3RJbk9yZGVyIiwidXNlRWZmZWN0IiwibGVuZ3RoIiwiaGFzaCIsImRlY29kZVVSSUNvbXBvbmVudCIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVwbGFjZSIsInRhcmdldCIsImZpbmQiLCJjIiwidW5kZWZpbmVkIiwicHJldk92ZXJmbG93IiwiZG9jdW1lbnQiLCJib2R5Iiwic3R5bGUiLCJvdmVyZmxvdyIsIm9uS2V5IiwiZSIsImtleSIsImNsb3NlTW9kYWwiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm9wZW5Nb2RhbCIsImNvbW1pdHRlZSIsImhpc3RvcnkiLCJyZXBsYWNlU3RhdGUiLCJjb25jYXQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJwYXRobmFtZSIsImhlYWRzIiwiZmlsdGVyIiwibSIsImNvbW1pdHRlZV9uYW1lIiwicm9sZSIsInJlZ3VsYXIiLCJfX2pzeCIsImNsYXNzTmFtZSIsIl9fc2VsZiIsIl90aGlzIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJIZWFkZXIiLCJTaXRlTmF2YmFyIiwic3JjIiwiYWx0IiwiZGl2aXNpb24iLCJpZCIsInR5cGUiLCJvbkNsaWNrIiwiYiIsInN0b3BQcm9wYWdhdGlvbiIsImltYWdlIiwiZGVzY3JpcHRpb24iLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsIlBlcnNvbkNoaXBzIiwiY29udGVudCIsImFjY2VudCIsIlNpdGVGb290ZXIiLCJfYyIsIiRSZWZyZXNoUmVnJCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ0k7QUFDSTtBQUNBO0FBQ1M7QUFDeUI7QUFDeEU7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBTUEsY0FBYyxHQUFHO0VBQ25CLHFCQUFxQixFQUFFLHlCQUF5QjtFQUNoRCxxQkFBcUIsRUFBRSx5QkFBeUI7RUFDaEQsbUJBQW1CLEVBQUUsZ0JBQWdCO0VBQ3JDLHFCQUFxQixFQUFFO0FBQzNCLENBQUM7O0FBRUQ7QUFDQTtBQUNBLElBQU1DLE9BQU8sR0FBRztFQUNaLE1BQU0sRUFBRSxDQUFDLCtCQUErQixFQUFFLGlEQUFpRCxFQUFFLDBDQUEwQyxDQUFDO0VBQ3hJLFFBQVEsRUFBRSxDQUFDLDRDQUE0QyxFQUFFLHNDQUFzQyxFQUFFLDJDQUEyQyxDQUFDO0VBQzdJLFlBQVksRUFBRSxDQUFDLHVEQUF1RCxFQUFFLHNDQUFzQyxFQUFFLGtDQUFrQyxDQUFDO0VBQ25KLDBCQUEwQixFQUFFLENBQUMsMkNBQTJDLEVBQUUsMkNBQTJDLEVBQUUsb0NBQW9DLENBQUM7RUFDNUosY0FBYyxFQUFFLENBQUMsNkNBQTZDLEVBQUUsbUNBQW1DLEVBQUUseUNBQXlDLENBQUM7RUFDL0ksUUFBUSxFQUFFLENBQUMsK0JBQStCLEVBQUUsa0NBQWtDLEVBQUUsaUNBQWlDLENBQUM7RUFDbEgsWUFBWSxFQUFFLENBQUMsbURBQW1ELEVBQUUsdUNBQXVDLEVBQUUsOEJB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QUFjO0FBc0pMQSw2RUFBYyxFQUFDO0FBQUEsSUFBQThFLEVBQUE7QUFBQUMsWUFBQSxDQUFBRCxFQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2dvdmVybm1lbnQvY29tbWl0dGVlcy4wNDNiNDczNTNiZTg0ZjgyOTcxMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlcic7XG5pbXBvcnQgU2l0ZU5hdmJhciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL25hdmJhci9OYXZiYXInO1xuaW1wb3J0IFNpdGVGb290ZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyJztcbmltcG9ydCBQZXJzb25DaGlwcyBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL1BlcnNvbkNoaXAvUGVyc29uQ2hpcCc7XG5pbXBvcnQgeyB1c2VTdXBhYmFzZVRhYmxlLCBkaXN0aW5jdEluT3JkZXIgfSBmcm9tICcuLi8uLi8uLi90b29scy9kYXRhYmFzZS91c2VTdXBhYmFzZVRhYmxlJztcbmltcG9ydCAnLi9pbmRleC5jc3MnO1xuXG4vKlxuICogQ29tbWl0dGVlcyAtIGRpYWdyYW0gbGF5b3V0IGZvbGxvd2luZyB0aGUgTy1XZWVrIEJvb2sgKHAuIDEyOCk6XG4gKiBhIGJhbmQgcGVyIGRpdmlzaW9uIGxlYWQgd2l0aCBpdHMgY29tbWl0dGVlIGJveGVzIHVuZGVybmVhdGgsIGVhY2hcbiAqIGJveCBzaG93aW5nIHRoZSBjb21taXR0ZWUgbmFtZSBhbmQgdGhyZWUgcXVpY2sgYnVsbGV0cy4gQ2xpY2tpbmcgYVxuICogYm94IHpvb21zIGludG8gYSBtb2RhbCB3aXRoIHRoZSBmdWxsIGRlc2NyaXB0aW9uLCBoZWFkcywgYW5kIG1lbWJlcnMuXG4gKlxuICogQ29tbWl0dGVlcyBhbmQgdGhlaXIgcGVvcGxlIGNvbWUgZnJvbSBTdXBhYmFzZTsgdGhlIGJ1bGxldHMgYmVsb3cgYXJlXG4gKiBhIHN0YXRpYyBzdW1tYXJ5IGxheWVyIChuZXcgY29tbWl0dGVlcyB3aXRob3V0IGJ1bGxldHMgc3RpbGwgcmVuZGVyKS5cbiAqL1xuXG4vLyBkaXZpc2lvbiB2YWx1ZSBpbiB0aGUgYGNvbW1pdHRlZXNgIHRhYmxlIC0+IGJhbmQgdGl0bGUgKHRoZSBib29rIGxhYmVsc1xuLy8gYmFuZHMgYnkgdGhlIGRpdmlzaW9uIGxlYWQpXG5jb25zdCBESVZJU0lPTl9MRUFEUyA9IHtcbiAgICAnRXh0ZXJuYWwgQ29tbWl0dGVlcyc6ICdFeHRlcm5hbCBWaWNlIFByZXNpZGVudCcsXG4gICAgJ0ludGVybmFsIENvbW1pdHRlZXMnOiAnSW50ZXJuYWwgVmljZSBQcmVzaWRlbnQnLFxuICAgICdTb2NpYWwgQ29tbWl0dGVlcyc6ICdQcmltZSBNaW5pc3RlcicsXG4gICAgJ0F0LUxhcmdlIENvbW1pdHRlZXMnOiAnQXQtTGFyZ2UgUmVwcmVzZW50YXRpdmUnLFxufTtcblxuLy8gdGhyZWUtbGluZSBzdW1tYXJpZXMgcGVyIGNvbW1pdHRlZSAoYm9vayBwLiAxMjgsIGFkYXB0ZWQpLCBrZXllZCBieVxuLy8gbG93ZXJjYXNlZCBjb21taXR0ZWUgbmFtZVxuY29uc3QgQlVMTEVUUyA9IHtcbiAgICAnYXJ0cyc6IFsnQ3JlYXRpdmUgY29tbXVuaXR5IGVuZ2FnZW1lbnQnLCAnRGVzaWducyBiaXJ0aGRheSBiYW5uZXJzIGFuZCB0aGVtZWQgZGVjb3JhdGlvbnMnLCAnQ29ubmVjdHMgdGhlIGNvbGxlZ2UgdGhyb3VnaCB2aXN1YWwgYXJ0cyddLFxuICAgICdhbHVtbmknOiBbJ1B1Ymxpc2hlcyB0aGUgc2VtaWFubnVhbCBhbHVtbmkgbmV3c2xldHRlcicsICdNYWludGFpbnMgY29ubmVjdGlvbnMgd2l0aCBncmFkdWF0ZXMnLCAnQnJpZGdlcyBwYXN0IGFuZCBwcmVzZW50IE11cnQgY29tbXVuaXRpZXMnXSxcbiAgICAnYXNzb2NpYXRlcyc6IFsnTGlhaXNlcyBiZXR3ZWVuIHN0dWRlbnRzIGFuZCBmYWN1bHR5L3N0YWZmIGFzc29jaWF0ZXMnLCAnSG9zdHMgQXNzb2NpYXRlcyBOaWdodHMgdHdpY2UgYSB5ZWFyJywgJ0J1aWxkcyBtZW50b3JzaGlwIGFuZCBuZXR3b3JraW5nJ10sXG4gICAgJ3NvY2lhbCBtZWRpYSBhbmQgaGlzdG9yeSc6IFsnRG9jdW1lbnRzIHRyYWRpdGlvbnMsIGV2ZW50cywgYW5kIGhpc3RvcnknLCAnTWFuYWdlcyB0aGUgY29sbGVnZSBzb2NpYWwgbWVkaWEgcHJlc2VuY2UnLCAnQ2FwdHVyZXMgYW5kIHByZXNlcnZlcyBjYW1wdXMgbGlmZSddLFxuICAgICdtdXJ0Y2hhbmRpc2UnOiBbJ01hbmFnZXMgZGVzaWduIGFuZCBvcmRlcmluZyBvZiBjb2xsZWdlIGdlYXInLCAnSGFuZGxlcyBsb2dpc3RpY3MgZm9yIG1lcmNoYW5kaXNlJywgJ0Nvbm5lY3RzIGNyZWF0aXZpdHkgd2l0aCBjb2xsZWdlIHNwaXJpdCddLFxuICAgICdzcG9ydHMnOiBbJ1Byb21vdGVzIFJpY2Ugc3BvcnRpbmcgZXZlbnRzJywgJ0hvc3RzIHRoZSBTdXBlciBCb3dsIHdhdGNoIHBhcnR5JywgJ09yZ2FuaXplcyBpbnRyYW11cmFsIGFjdGl2aXRpZXMnXSxcbiAgICAndHJhZGl0aW9ucyc6IFsnUGxhbnMgTWNTY290dGlzaCwgTXVydC1PLVdlZW4sIGFuZCBNdXJ0eSBIb2xpZGF5cycsICdQcmVzZXJ2ZXMgYW5kIGV2b2x2ZXMgTXVydCB0cmFkaXRpb25zJywgJ1N0cmVuZ3RoZW5zIGNvbGxlZ2UgaWRlbnRpdHknXSxcbiAgICAnY2hhcml0eSBhbmQgcGhpbGFudGhyb3B5JzogWydPcmdhbml6ZXMgY2hhcml0YWJsZSBpbml0aWF0aXZlcycsICdDb25uZWN0cyBNdXJ0IHdpdGggY29tbXVuaXR5IGNhdXNlcycsICdGb3N0ZXJzIGEgY3VsdHVyZSBvZiBnaXZpbmcgYmFjayddLFxuICAgICdhbWVuaXRpZXMnOiBbJ0ltcHJvdmVzIGNvbGxlZ2Ugc3BhY2VzIGFuZCBpbnRlcmlvciBkZXNpZ24nLCAnTWFuYWdlcyB0aGUgYnVkZ2V0IGZvciBmYWNpbGl0eSB1cGdyYWRlcycsICdSZXNwb25kcyB0byBzdHVkZW50IG5lZWRzIGZvciBzcGFjZXMnXSxcbiAgICAnY3VsaW5hcnknOiBbJ0hvc3RzIGZvb2QgZXZlbnRzIGluY2x1ZGluZyBTdW5kYXkgU3VuZGFlcycsICdDYXRlcnMgdG8gZGl2ZXJzZSB0YXN0ZXMgYWNyb3NzIHRoZSBjb2xsZWdlJywgJ0J1aWxkcyBjb21tdW5pdHkgdGhyb3VnaCBzaGFyZWQgZm9vZCddLFxuICAgICd3ZWJzaXRlJzogWydNYWludGFpbnMgYW5kIGltcHJvdmVzIHRoZSBvbmxpbmUgcHJlc2VuY2UnLCAnUHJvdmlkZXMgd2ViIGRldmVsb3BtZW50IGV4cGVyaWVuY2UnLCAnS2VlcHMgdGhlIHdlYnNpdGUgY3VycmVudCBhbmQgdXNlci1mcmllbmRseSddLFxuICAgICdlbnZpcm9ubWVudGFsJzogWydQcm9tb3RlcyBzdXN0YWluYWJpbGl0eSBhdCBNY011cnRyeScsICdQbGFucyBTdXN0YWluYWJsZSBTdW5kYXkgU3VuZGFlcycsICdDb21iaW5lcyBlY28tY29uc2Npb3VzbmVzcyB3aXRoIGNvbGxlZ2UgbGlmZSddLFxuICAgICdtY21ha2Vyc3BhY2UnOiBbJ01hbmFnZXMgdGhlIE1jTWFrZXJzcGFjZSBmb3IgYWxsIFJpY2Ugc3R1ZGVudHMnLCAnT2ZmZXJzIHRvb2xzIGZvciBidWlsZGluZyBhbmQgY3JlYXRpbmcnLCAnRm9zdGVycyBoYW5kcy1vbiBpbm5vdmF0aW9uJ10sXG4gICAgJ2V4cGVkaXRpb25zJzogWydQbGFucyBtb250aGx5IE11cnRzIG9uIHRoZSBNb3ZlIG91dGluZ3MnLCAnT3JnYW5pemVzIE1jRXhwZWRpdGlvbnMgdHJpcHMgZWFjaCBzZW1lc3RlcicsICdUYWtlcyBNY011cnRyeSBvbiB0aGUgcm9hZCddLFxuICAgICdpbnRlcm5hbCBzb2NpYWxzJzogWydQbGFucyBGSVRRIGV2ZXJ5IEZyaWRheSBpbiB0aGUgUXVhZCcsICdQcm9tb3RlcyB3ZWVrLXRvLXdlZWsgY29tbXVuaXR5JywgJ1RoZSBtb3N0IGFjdGl2ZSBzb2NpYWwgY29tbWl0dGVlJ10sXG4gICAgJ2V4dGVybmFsIHNvY2lhbHMnOiBbJ1BsYW5zIHRoZSBZMksgcGFydHkgYW5kIFB1YiBOaWdodCBldmVudHMnLCAnT3JnYW5pemVzIGNyb3NzLWNvbGxlZ2Ugc29jaWFscycsICdDb25uZWN0cyBNdXJ0cyB3aXRoIG90aGVyIGNvbGxlZ2VzJ10sXG4gICAgJ2JlZXIgYmlrZSc6IFsnQ29vcmRpbmF0ZXMgQmVlciBCaWtlIHBhcnRpY2lwYXRpb24nLCAnUGxhbnMgdGhlIGJpZ2dlc3QgZXZlbnQgb2YgdGhlIHllYXInLCAnTWFuYWdlcyB0ZWFtLCBjaHVnLCBhbmQgcmFjZSBsb2dpc3RpY3MnXSxcbiAgICAnc2VuaW9ycyc6IFsnUGxhbnMgY2hhbXBhZ25lIHRvYXN0cyBhbmQgc2VuaW9yIGV2ZW50cycsICdPcmdhbml6ZXMgU2VuaW9yIEdhbGEgYW5kIGdyYWR1YXRpb24nLCAnQ3JlYXRlcyBtZW1vcmFibGUgZmluYWwteWVhciBleHBlcmllbmNlcyddLFxuICAgICdjb2xsZWdlIG5pZ2h0JzogWydIb3N0cyBsb3cta2V5IHRoZW1lZCBoYW5nb3V0cyB3aXRoIG90aGVyIGNvbGxlZ2VzJywgJ1BsYW5zIENvbGxlZ2UgTmlnaHQgZXZlbnRzIGVhY2ggc2VtZXN0ZXInLCAnQSBuZXcgY29tbWl0dGVlIHlvdSBjYW4gaGVscCBzaGFwZSddLFxuICAgICdjdWx0dXJhbHMgJiBkaXZlcnNpdHknOiBbJ1Byb21vdGVzIGN1bHR1cmFsIGF3YXJlbmVzcyB0aHJvdWdoIGV2ZW50cycsICdPcmdhbml6ZXMgUmVzdGF1cmFudCBEYXkgd2l0aCBpbnRlcm5hdGlvbmFsIGN1aXNpbmVzJywgJ1NlcnZlcyBhcyBhbiBpbmNsdXNpb24gcmVzb3VyY2UgZm9yIHRoZSBjb2xsZWdlJ10sXG59O1xuXG5jb25zdCBidWxsZXRzRm9yID0gKG5hbWUpID0+IEJVTExFVFNbKG5hbWUgfHwgJycpLnRvTG93ZXJDYXNlKCldIHx8IFtdO1xuXG5jb25zdCB0b0NoaXBzID0gKHJvd3MpID0+IHJvd3MubWFwKCh7IG5hbWUsIGVtYWlsIH0pID0+ICh7IG5hbWUsIGVtYWlsIH0pKTtcblxuY29uc3QgQ29tbWl0dGVlc1BhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgeyByb3dzOiBjb21taXR0ZWVzLCBpc0xvYWRpbmc6IGxvYWRpbmdDb21taXR0ZWVzIH0gPSB1c2VTdXBhYmFzZVRhYmxlKCdjb21taXR0ZWVzJyk7XG4gICAgY29uc3QgeyByb3dzOiBtZW1iZXJzLCAgIGlzTG9hZGluZzogbG9hZGluZ01lbWJlcnMgfSAgICA9IHVzZVN1cGFiYXNlVGFibGUoJ2NvbW1pdHRlZV9tZW1iZXJzJyk7XG5cbiAgICBjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gICAgY29uc3QgZGl2aXNpb25OYW1lcyA9IGRpc3RpbmN0SW5PcmRlcihjb21taXR0ZWVzLCAnZGl2aXNpb24nKTtcbiAgICBjb25zdCBpc0xvYWRpbmcgPSBsb2FkaW5nQ29tbWl0dGVlcyB8fCBsb2FkaW5nTWVtYmVycztcblxuICAgIC8vIERlZXAgbGluayBzdXBwb3J0OiAvZ292ZXJubWVudC9jb21taXR0ZWVzI0FydHMgb3BlbnMgdGhlIEFydHMgbW9kYWxcbiAgICAvLyAodXNlZCBieSB0aGUgTWNNaW5pc3RyeSBvcmcgY2hhcnQpLlxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChjb21taXR0ZWVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICAgICAgICBjb25zdCBoYXNoID0gZGVjb2RlVVJJQ29tcG9uZW50KHdpbmRvdy5sb2NhdGlvbi5oYXNoLnJlcGxhY2UoL14jLywgJycpKTtcbiAgICAgICAgaWYgKCFoYXNoKSByZXR1cm47XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGNvbW1pdHRlZXMuZmluZChjID0+IGMubmFtZS50b0xvd2VyQ2FzZSgpID09PSBoYXNoLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICBpZiAodGFyZ2V0KSBzZXRTZWxlY3RlZCh0YXJnZXQpO1xuICAgIH0sIFtjb21taXR0ZWVzXSk7XG5cbiAgICAvLyBsb2NrIHBhZ2Ugc2Nyb2xsIGFuZCBjbG9zZSBvbiBFc2NhcGUgd2hpbGUgdGhlIG1vZGFsIGlzIG9wZW5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoIXNlbGVjdGVkKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICBjb25zdCBwcmV2T3ZlcmZsb3cgPSBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93O1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgICAgIGNvbnN0IG9uS2V5ID0gKGUpID0+IHsgaWYgKGUua2V5ID09PSAnRXNjYXBlJykgY2xvc2VNb2RhbCgpOyB9O1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uS2V5KTtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBwcmV2T3ZlcmZsb3c7XG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uS2V5KTtcbiAgICAgICAgfTtcbiAgICB9LCBbc2VsZWN0ZWRdKTtcblxuICAgIGNvbnN0IG9wZW5Nb2RhbCA9IChjb21taXR0ZWUpID0+IHtcbiAgICAgICAgc2V0U2VsZWN0ZWQoY29tbWl0dGVlKTtcbiAgICAgICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKG51bGwsICcnLCBgIyR7ZW5jb2RlVVJJQ29tcG9uZW50KGNvbW1pdHRlZS5uYW1lKX1gKTtcbiAgICB9O1xuXG4gICAgY29uc3QgY2xvc2VNb2RhbCA9ICgpID0+IHtcbiAgICAgICAgc2V0U2VsZWN0ZWQobnVsbCk7XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZShudWxsLCAnJywgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGVhZHMgICA9IHNlbGVjdGVkID8gbWVtYmVycy5maWx0ZXIobSA9PiBtLmNvbW1pdHRlZV9uYW1lID09PSBzZWxlY3RlZC5uYW1lICYmIG0ucm9sZSA9PT0gJ2hlYWQnKSAgIDogW107XG4gICAgY29uc3QgcmVndWxhciA9IHNlbGVjdGVkID8gbWVtYmVycy5maWx0ZXIobSA9PiBtLmNvbW1pdHRlZV9uYW1lID09PSBzZWxlY3RlZC5uYW1lICYmIG0ucm9sZSA9PT0gJ21lbWJlcicpIDogW107XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGFnZSBwYWdlLWxpZ2h0IHBhZ2Utd2l0aC1zdGFnZ2VyZWQtbWVudSc+XG4gICAgICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgICAgICA8U2l0ZU5hdmJhciAvPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29tbWl0dGVlLXBhZ2UnPlxuICAgICAgICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPSdldi1oZXJvJz5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9Jy9zdGF0aWMvaWNvbnMvYWJvdXQtc3dvb3NoLnN2ZycgYWx0PScnIGNsYXNzTmFtZT0nZXYtaGVyby1zd29vc2gnIGFyaWEtaGlkZGVuPSd0cnVlJyAvPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz0nL3N0YXRpYy9pY29ucy9lbGxpcHNlLWxhcmdlLnN2ZycgYWx0PScnIGNsYXNzTmFtZT0nZXYtaGVyby1lbGxpcHNlLWxhcmdlJyBhcmlhLWhpZGRlbj0ndHJ1ZScgLz5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9Jy9zdGF0aWMvaWNvbnMvZWxsaXBzZS1zbWFsbC5zdmcnIGFsdD0nJyBjbGFzc05hbWU9J2V2LWhlcm8tZWxsaXBzZS1zbWFsbCcgYXJpYS1oaWRkZW49J3RydWUnIC8+XG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J2V2LWhlcm8taGVhZGluZyc+Q29tbWl0dGVlczwvaDE+XG4gICAgICAgICAgICAgICAgPC9oZWFkZXI+XG5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2NtLWxlZGUnPlxuICAgICAgICAgICAgICAgICAgICBDb21taXR0ZWVzIGFyZSBzdHVkZW50LXJ1biwgc3R1ZGVudC1sZWQgZ3JvdXBzIHRoYXQgc2hhcGUgTWNNdXJ0cnkmcnNxdW87c1xuICAgICAgICAgICAgICAgICAgICBjdWx0dXJlIGFuZCBjb21tdW5pdHkuIENsaWNrIGFueSBjb21taXR0ZWUgdG8gbWVldCBpdHMgaGVhZHMgYW5kIG1lbWJlcnMuXG4gICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAge2lzTG9hZGluZyA/IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xvYWRpbmctY29udGFpbmVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsb2FkaW5nLXNwaW5uZXInPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdsb2FkaW5nLXRleHQnPkxvYWRpbmcuLi48L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjbS1kaWFncmFtIGZhZGUtaW4nPlxuICAgICAgICAgICAgICAgICAgICAgICAge2RpdmlzaW9uTmFtZXMubWFwKChkaXZpc2lvbikgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGtleT17ZGl2aXNpb259IGNsYXNzTmFtZT0nY20tZGl2aXNpb24nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdjbS1iYW5kJz57RElWSVNJT05fTEVBRFNbZGl2aXNpb25dIHx8IGRpdmlzaW9ufTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjbS1ncmlkJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb21taXR0ZWVzLmZpbHRlcihjID0+IGMuZGl2aXNpb24gPT09IGRpdmlzaW9uKS5tYXAoKGMpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Yy5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0nYnV0dG9uJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2NtLWJveCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb3Blbk1vZGFsKGMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0nY20tYm94LXRpdGxlJz57Yy5uYW1lfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtidWxsZXRzRm9yKGMubmFtZSkubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdjbS1ib3gtYnVsbGV0cyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2J1bGxldHNGb3IoYy5uYW1lKS5tYXAoKGIpID0+IDxsaSBrZXk9e2J9PntifTwvbGk+KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nY20tYm94LW1vcmUnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdwaCBwaC11c2Vycy10aHJlZScgYXJpYS1oaWRkZW49J3RydWUnIC8+IE1lZXQgdGhlIGNvbW1pdHRlZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICB7c2VsZWN0ZWQgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjbS1tb2RhbC1zY3JpbScgb25DbGljaz17Y2xvc2VNb2RhbH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjbS1tb2RhbCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb2xlPSdkaWFsb2cnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1tb2RhbD0ndHJ1ZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPXtzZWxlY3RlZC5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzc05hbWU9J2NtLW1vZGFsLWNsb3NlJyBvbkNsaWNrPXtjbG9zZU1vZGFsfSBhcmlhLWxhYmVsPSdDbG9zZSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0ncGggcGgteCcgYXJpYS1oaWRkZW49J3RydWUnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2NtLW1vZGFsLWV5ZWJyb3cnPntESVZJU0lPTl9MRUFEU1tzZWxlY3RlZC5kaXZpc2lvbl0gfHwgc2VsZWN0ZWQuZGl2aXNpb259PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J2NtLW1vZGFsLXRpdGxlJz57c2VsZWN0ZWQubmFtZX08L2gyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlbGVjdGVkLmltYWdlID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY20taW1hZ2Utd3JhcCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17c2VsZWN0ZWQuaW1hZ2V9IGFsdD17c2VsZWN0ZWQubmFtZX0gY2xhc3NOYW1lPSdjbS1pbWFnZScgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWQuZGVzY3JpcHRpb24gPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nY20tZGVzY3JpcHRpb24nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHNlbGVjdGVkLmRlc2NyaXB0aW9uIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPSdjbS1zdWJ0aXRsZSc+Q29tbWl0dGVlIEhlYWRzPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aGVhZHMubGVuZ3RoID4gMCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBlcnNvbkNoaXBzIGNvbnRlbnQ9e3RvQ2hpcHMoaGVhZHMpfSBhY2NlbnQgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2NtLW1vZGFsLWVtcHR5Jz5UbyBiZSBhbm5vdW5jZWQuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPSdjbS1zdWJ0aXRsZSc+Q29tbWl0dGVlIE1lbWJlcnM8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZWd1bGFyLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQZXJzb25DaGlwcyBjb250ZW50PXt0b0NoaXBzKHJlZ3VsYXIpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nY20tbW9kYWwtZW1wdHknPlRvIGJlIGFubm91bmNlZC48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8U2l0ZUZvb3RlciAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29tbWl0dGVlc1BhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9