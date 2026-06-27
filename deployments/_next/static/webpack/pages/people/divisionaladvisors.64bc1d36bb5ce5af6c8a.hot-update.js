webpackHotUpdate_N_E("pages/people/divisionaladvisors",{

/***/ "./pages/people/divisionaladvisors/index.js":
/*!**************************************************!*\
  !*** ./pages/people/divisionaladvisors/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.js");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/Header/Header */ "./components/Header/Header.js");
/* harmony import */ var _components_navbar_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/navbar/Navbar */ "./components/navbar/Navbar.js");
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/Footer/Footer */ "./components/Footer/Footer.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.css */ "./pages/people/divisionaladvisors/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_5__);
var _this = undefined,
  _jsxFileName = "C:\\Users\\anton\\Documents\\Projects\\MurtWebsite\\pages\\people\\divisionaladvisors\\index.js",
  _s = $RefreshSig$(),
  _s2 = $RefreshSig$();
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var DESCRIPTION = 'Divisional Advisors are faculty members from each of Rice’s academic divisions ' + 'who serve as a resource and point of contact for McMurtry students.';
var advisors = [{
  name: 'Christopher Jermaine',
  career: 'School of Engineering, Computer Science',
  email: 'cmj4@rice.edu',
  office: '3011 Duncan Hall',
  bio: 'I received a BA from the Mathematics Department at UCSD, an MSc from the Computer Science and Engineering Department at OSU, and a PhD from the College of Computing at Georgia Tech. I am the recipient of a 2008 Alfred P. Sloan Foundation Research Fellowship, a National Science Foundation CAREER award, and a 2007 ACM SIGMOD Best Paper Award. I have been at Rice since January 2009.\n\nIn my spare time, I enjoy running, gardening, and outdoor activities such as hiking, climbing, and whitewater boating. I’ve walked the John Muir Trail twice (250+ miles total each time) as well as Glyndwr’s Way in Wales, carrying my then-3-year-old son on my back. I’ve hiked and/or climbed 12 out of the 13 14,000-foot peaks in California. In one particular exploit, my wife and I floated a whitewater raft (home-made from scratch) over 100 miles down the Nizina River in Alaska.'
}, {
  name: 'Emily Houlik-Ritchey',
  career: 'School of Humanities, English',
  email: 'emily.houlik-ritchey@rice.edu',
  office: '235 Herring Hall',
  bio: 'I teach and research the literature of the Middle Ages written in medieval English and Spanish, studying the interaction of these cultural traditions with the wider medieval Mediterranean world. I received my Ph.D. at Indiana University, Bloomington, and was the Arnold Postdoctoral Fellow at UCSB before coming to Rice in 2015.\n\nI love teaching and regularly offer classes in Arthurian Literature, Geoffrey Chaucer, Medieval Romance, Race in the Middle Ages, and introductory courses to the English major. I am originally from Colorado, and my family travels back there regularly to hike, camp, ski, and see family. I use feminine pronouns, I am a sucker for really good chocolate, and I foster monarch butterfly caterpillars through their metamorphosis into butterflies.'
}, {
  name: 'Laura Kabiri',
  career: 'School of Natural Sciences, Kinesiology',
  email: 'laura.kabiri@rice.edu',
  office: 'S203 Tudor Field House',
  bio: 'Laura Kabiri is a human anatomy and physiology instructor in the Wiess School of Natural Sciences. She is also a licensed physical therapist with previous experience in the hospital setting. Her undergraduate degree is a BA in music (piano/voice), which made for an interesting transition into her graduate work (MS, DPT, PhD) in physical therapy.\n\nResearch interests cover pediatric health and wellness, including body composition, cardiorespiratory fitness, and motor skills. She is known to feed hungry stressed-out McMurts during finals with her regular Sweet and Salty event. Dr. Kabiri is a busy wife and mother of twin boys who enjoys reading, live music, playing with her Vizsla Hannah, and anything outdoors.'
}, {
  name: 'Ozge Gurcanli',
  career: 'School of Social Sciences, Psychology',
  email: 'ozge.gurcanli@rice.edu',
  office: '456 Sewall Hall',
  bio: 'Özge Gürcanlı received her Ph.D. in Cognitive Science from Johns Hopkins University in 2012 and joined Rice in January 2013. She teaches Introduction to Psychology, Developmental Psychology, Language Acquisition, and Research Methods.\n\nIn her research, she explores how monolingual and bilingual speakers—both children and adults—talk about the spatial world around them. She is a huge believer in experiential learning, and her developmental psychology course has received university-wide recognition. She also serves as a major advisor and director of the honors program in the Department of Psychology.'
}];
var AdvisorModal = function AdvisorModal(_ref) {
  _s();
  var advisor = _ref.advisor,
    onClose = _ref.onClose;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var handleEsc = function handleEsc(e) {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return function () {
      return window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    document.body.style.overflow = 'hidden';
    return function () {
      document.body.style.overflow = 'unset';
    };
  }, []);
  if (!advisor) return null;
  return __jsx("div", {
    className: "as-modal-overlay",
    onClick: onClose,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "as-modal",
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, __jsx("button", {
    className: "as-modal-close",
    onClick: onClose,
    "aria-label": "Close",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  }, "\xD7"), __jsx("div", {
    className: "as-modal-media",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "as-modal-placeholder",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 21
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 25
    }
  }, advisor.name.charAt(0)))), __jsx("div", {
    className: "as-modal-body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 17
    }
  }, __jsx("h2", {
    className: "as-modal-name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 21
    }
  }, advisor.name), __jsx("p", {
    className: "as-modal-career",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 21
    }
  }, advisor.career), __jsx("div", {
    className: "as-modal-section",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "as-modal-label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 25
    }
  }, "Bio"), advisor.bio.split('\n\n').map(function (para, i) {
    return __jsx("p", {
      key: i,
      className: "as-modal-text",
      style: i > 0 ? {
        marginTop: '1em'
      } : {},
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 29
      }
    }, para);
  })), __jsx("div", {
    className: "as-modal-section",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "as-modal-label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 25
    }
  }, "Contact"), __jsx("p", {
    className: "as-modal-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "mailto:".concat(advisor.email),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 29
    }
  }, advisor.email), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 29
    }
  }), advisor.office)))));
};
_s(AdvisorModal, "3ubReDTFssvu4DHeldAg55cW/CI=");
_c = AdvisorModal;
var DivisionalAdvisorsPage = function DivisionalAdvisorsPage() {
  _s2();
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
    selected = _useState[0],
    setSelected = _useState[1];
  return __jsx("div", {
    className: "page page-light page-with-staggered-menu",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }
  }, __jsx(_components_Header_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 13
    }
  }), __jsx(_components_navbar_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "associates-page",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }
  }, __jsx("header", {
    className: "ev-hero",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
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
      lineNumber: 102,
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
      lineNumber: 103,
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
      lineNumber: 104,
      columnNumber: 21
    }
  }), __jsx("h1", {
    className: "ev-hero-heading",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 21
    }
  }, "Divisional Advisors")), __jsx(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    width: [0.9, 0.7, 0.6],
    ml: "auto",
    mr: "auto",
    className: "associates-mission",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 17
    }
  }, DESCRIPTION), __jsx("div", {
    className: "as-grid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 17
    }
  }, advisors.map(function (advisor) {
    return __jsx("button", {
      key: advisor.name,
      type: "button",
      className: "as-card",
      onClick: function onClick() {
        return setSelected(advisor);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "as-card-media",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "as-card-placeholder",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 33
      }
    }, __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 37
      }
    }, advisor.name.charAt(0)))), __jsx("div", {
      className: "as-card-body",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 29
      }
    }, __jsx("h3", {
      className: "as-card-name",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 33
      }
    }, advisor.name), __jsx("p", {
      className: "as-card-career",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 33
      }
    }, advisor.career), __jsx("span", {
      className: "as-card-cta",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 33
      }
    }, "View profile ", __jsx("span", {
      "aria-hidden": "true",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 76
      }
    }, "\u203A"))));
  })), selected ? __jsx(AdvisorModal, {
    advisor: selected,
    onClose: function onClose() {
      return setSelected(null);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 21
    }
  }) : null), __jsx(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 13
    }
  }));
};
_s2(DivisionalAdvisorsPage, "PVKrpNrydW4BpnDEq9OT3cVmCk4=");
_c2 = DivisionalAdvisorsPage;
/* harmony default export */ __webpack_exports__["default"] = (DivisionalAdvisorsPage);
var _c, _c2;
$RefreshReg$(_c, "AdvisorModal");
$RefreshReg$(_c2, "DivisionalAdvisorsPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGVvcGxlL2RpdmlzaW9uYWxhZHZpc29ycy9pbmRleC5qcyJdLCJuYW1lcyI6WyJERVNDUklQVElPTiIsImFkdmlzb3JzIiwibmFtZSIsImNhcmVlciIsImVtYWlsIiwib2ZmaWNlIiwiYmlvIiwiQWR2aXNvck1vZGFsIiwiX3JlZiIsIl9zIiwiYWR2aXNvciIsIm9uQ2xvc2UiLCJ1c2VFZmZlY3QiLCJoYW5kbGVFc2MiLCJlIiwia2V5Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkb2N1bWVudCIsImJvZHkiLCJzdHlsZSIsIm92ZXJmbG93IiwiX19qc3giLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiX19zZWxmIiwiX3RoaXMiLCJfX3NvdXJjZSIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsInN0b3BQcm9wYWdhdGlvbiIsImNoYXJBdCIsInNwbGl0IiwibWFwIiwicGFyYSIsImkiLCJtYXJnaW5Ub3AiLCJocmVmIiwiY29uY2F0IiwiX2MiLCJEaXZpc2lvbmFsQWR2aXNvcnNQYWdlIiwiX3MyIiwiX3VzZVN0YXRlIiwidXNlU3RhdGUiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwiSGVhZGVyIiwiU2l0ZU5hdmJhciIsInNyYyIsImFsdCIsIkJveCIsIndpZHRoIiwibWwiLCJtciIsInR5cGUiLCJTaXRlRm9vdGVyIiwiX2MyIiwiJFJlZnJlc2hSZWckIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ3RCO0FBQzBCO0FBQ0k7QUFDQTtBQUN0QztBQUVyQixJQUFNQSxXQUFXLEdBQ2IsaUZBQWlGLEdBQ2pGLHFFQUFxRTtBQUV6RSxJQUFNQyxRQUFRLEdBQUcsQ0FDYjtFQUNJQyxJQUFJLEVBQUUsc0JBQXNCO0VBQzVCQyxNQUFNLEVBQUUseUNBQXlDO0VBQ2pEQyxLQUFLLEVBQUUsZUFBZTtFQUN0QkMsTUFBTSxFQUFFLGtCQUFrQjtFQUMxQkMsR0FBRyxFQUFFO0FBQ1QsQ0FBQyxFQUNEO0VBQ0lKLElBQUksRUFBRSxzQkFBc0I7RUFDNUJDLE1BQU0sRUFBRSwrQkFBK0I7RUFDdkNDLEtBQUssRUFBRSwrQkFBK0I7RUFDdENDLE1BQU0sRUFBRSxrQkFBa0I7RUFDMUJDLEdBQUcsRUFBRTtBQUNULENBQUMsRUFDRDtFQUNJSixJQUFJLEVBQUUsY0FBYztFQUNwQkMsTUFBTSxFQUFFLHlDQUF5QztFQUNqREMsS0FBSyxFQUFFLHVCQUF1QjtFQUM5QkMsTUFBTSxFQUFFLHdCQUF3QjtFQUNoQ0MsR0FBRyxFQUFFO0FBQ1QsQ0FBQyxFQUNEO0VBQ0lKLElBQUksRUFBRSxlQUFlO0VBQ3JCQyxNQUFNLEVBQUUsdUNBQXVDO0VBQy9DQyxLQUFLLEVBQUUsd0JBQXdCO0VBQy9CQyxNQUFNLEVBQUUsaUJBQWlCO0VBQ3pCQyxHQUFHLEVBQUU7QUFDVCxDQUFDLENBQ0o7QUFFRCxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBWUEsQ0FBQUMsSUFBQSxFQUE2QjtFQUFBQyxFQUFBO0VBQUEsSUFBdkJDLE9BQU8sR0FBQUYsSUFBQSxDQUFQRSxPQUFPO0lBQUVDLE9BQU8sR0FBQUgsSUFBQSxDQUFQRyxPQUFPO0VBQ3BDQyx1REFBUyxDQUFDLFlBQU07SUFDWixJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBU0EsQ0FBSUMsQ0FBQyxFQUFLO01BQUUsSUFBSUEsQ0FBQyxDQUFDQyxHQUFHLEtBQUssUUFBUSxFQUFFSixPQUFPLENBQUMsQ0FBQztJQUFFLENBQUM7SUFDL0RLLE1BQU0sQ0FBQ0MsZ0JBQWdCLENBQUMsU0FBUyxFQUFFSixTQUFTLENBQUM7SUFDN0MsT0FBTztNQUFBLE9BQU1HLE1BQU0sQ0FBQ0UsbUJBQW1CLENBQUMsU0FBUyxFQUFFTCxTQUFTLENBQUM7SUFBQTtFQUNqRSxDQUFDLEVBQUUsQ0FBQ0YsT0FBTyxDQUFDLENBQUM7RUFFYkMsdURBQVMsQ0FBQyxZQUFNO0lBQ1pPLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDQyxLQUFLLENBQUNDLFFBQVEsR0FBRyxRQUFRO0lBQ3ZDLE9BQU8sWUFBTTtNQUFFSCxRQUFRLENBQUNDLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxRQUFRLEdBQUcsT0FBTztJQUFFLENBQUM7RUFDNUQsQ0FBQyxFQUFFLEVBQUUsQ0FBQztFQUVOLElBQUksQ0FBQ1osT0FBTyxFQUFFLE9BQU8sSUFBSTtFQUV6QixPQUNJYSxLQUFBO0lBQUtDLFNBQVMsRUFBQyxrQkFBa0I7SUFBQ0MsT0FBTyxFQUFFZCxPQUFRO0lBQUFlLE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQy9DVCxLQUFBO0lBQUtDLFNBQVMsRUFBQyxVQUFVO0lBQUNDLE9BQU8sRUFBRSxTQUFBQSxRQUFBWCxDQUFDO01BQUEsT0FBSUEsQ0FBQyxDQUFDbUIsZUFBZSxDQUFDLENBQUM7SUFBQSxDQUFDO0lBQUFQLE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQ3hEVCxLQUFBO0lBQVFDLFNBQVMsRUFBQyxnQkFBZ0I7SUFBQ0MsT0FBTyxFQUFFZCxPQUFRO0lBQUMsY0FBVyxPQUFPO0lBQUFlLE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLFNBQWdCLENBQUMsRUFFeEZULEtBQUE7SUFBS0MsU0FBUyxFQUFDLGdCQUFnQjtJQUFBRSxNQUFBLEVBQUFDLEtBQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUMzQlQsS0FBQTtJQUFLQyxTQUFTLEVBQUMsc0JBQXNCO0lBQUFFLE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQ2pDVCxLQUFBO0lBQUFHLE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQU90QixPQUFPLENBQUNSLElBQUksQ0FBQ2dDLE1BQU0sQ0FBQyxDQUFDLENBQVEsQ0FDbkMsQ0FDSixDQUFDLEVBRU5YLEtBQUE7SUFBS0MsU0FBUyxFQUFDLGVBQWU7SUFBQUUsTUFBQSxFQUFBQyxLQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDMUJULEtBQUE7SUFBSUMsU0FBUyxFQUFDLGVBQWU7SUFBQUUsTUFBQSxFQUFBQyxLQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FBRXRCLE9BQU8sQ0FBQ1IsSUFBUyxDQUFDLEVBQ2pEcUIsS0FBQTtJQUFHQyxTQUFTLEVBQUMsaUJBQWlCO0lBQUFFLE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQUV0QixPQUFPLENBQUNQLE1BQVUsQ0FBQyxFQUVuRG9CLEtBQUE7SUFBS0MsU0FBUyxFQUFDLGtCQUFrQjtJQUFBRSxNQUFBLEVBQUFDLEtBQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUM3QlQsS0FBQTtJQUFNQyxTQUFTLEVBQUMsZ0JBQWdCO0lBQUFFLE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLFFBQVUsQ0FBQyxFQUMxQ3RCLE9BQU8sQ0FBQ0osR0FBRyxDQUFDNkIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDQyxHQUFHLENBQUMsVUFBQ0MsSUFBSSxFQUFFQyxDQUFDO0lBQUEsT0FDbkNmLEtBQUE7TUFBR1IsR0FBRyxFQUFFdUIsQ0FBRTtNQUFDZCxTQUFTLEVBQUMsZUFBZTtNQUFDSCxLQUFLLEVBQUVpQixDQUFDLEdBQUcsQ0FBQyxHQUFHO1FBQUVDLFNBQVMsRUFBRTtNQUFNLENBQUMsR0FBRyxDQUFDLENBQUU7TUFBQWIsTUFBQSxFQUFBQyxLQUFBO01BQUFDLFFBQUE7UUFBQUMsUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBO0lBQUEsR0FBRUssSUFBUSxDQUFDO0VBQUEsQ0FDNUYsQ0FDQSxDQUFDLEVBRU5kLEtBQUE7SUFBS0MsU0FBUyxFQUFDLGtCQUFrQjtJQUFBRSxNQUFBLEVBQUFDLEtBQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUM3QlQsS0FBQTtJQUFNQyxTQUFTLEVBQUMsZ0JBQWdCO0lBQUFFLE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLFlBQWMsQ0FBQyxFQUMvQ1QsS0FBQTtJQUFHQyxTQUFTLEVBQUMsZUFBZTtJQUFBRSxNQUFBLEVBQUFDLEtBQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUN4QlQsS0FBQTtJQUFHaUIsSUFBSSxZQUFBQyxNQUFBLENBQVkvQixPQUFPLENBQUNOLEtBQUssQ0FBRztJQUFBc0IsTUFBQSxFQUFBQyxLQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FBRXRCLE9BQU8sQ0FBQ04sS0FBUyxDQUFDLEVBQ3ZEbUIsS0FBQTtJQUFBRyxNQUFBLEVBQUFDLEtBQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxDQUFLLENBQUMsRUFBQ3RCLE9BQU8sQ0FBQ0wsTUFDaEIsQ0FDRixDQUNKLENBQ0osQ0FDSixDQUFDO0FBRWQsQ0FBQztBQUFDSSxFQUFBLENBL0NJRixZQUFZO0FBQUFtQyxFQUFBLEdBQVpuQyxZQUFZO0FBaURsQixJQUFNb0Msc0JBQXNCLEdBQUcsU0FBekJBLHNCQUFzQkEsQ0FBQSxFQUFTO0VBQUFDLEdBQUE7RUFDakMsSUFBQUMsU0FBQSxHQUFnQ0Msc0RBQVEsQ0FBQyxJQUFJLENBQUM7SUFBdkNDLFFBQVEsR0FBQUYsU0FBQTtJQUFFRyxXQUFXLEdBQUFILFNBQUE7RUFFNUIsT0FDSXRCLEtBQUE7SUFBS0MsU0FBUyxFQUFDLDBDQUEwQztJQUFBRSxNQUFBLEVBQUFDLEtBQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUNyRFQsS0FBQSxDQUFDMEIsaUVBQU07SUFBQXZCLE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLENBQUUsQ0FBQyxFQUNWVCxLQUFBLENBQUMyQixpRUFBVTtJQUFBeEIsTUFBQSxFQUFBQyxLQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsQ0FBRSxDQUFDLEVBRWRULEtBQUE7SUFBS0MsU0FBUyxFQUFDLGlCQUFpQjtJQUFBRSxNQUFBLEVBQUFDLEtBQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUM1QlQsS0FBQTtJQUFRQyxTQUFTLEVBQUMsU0FBUztJQUFBRSxNQUFBLEVBQUFDLEtBQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUN2QlQsS0FBQTtJQUFLNEIsR0FBRyxFQUFDLGdDQUFnQztJQUFDQyxHQUFHLEVBQUMsRUFBRTtJQUFDNUIsU0FBUyxFQUFDLGdCQUFnQjtJQUFDLGVBQVksTUFBTTtJQUFBRSxNQUFBLEVBQUFDLEtBQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxDQUFFLENBQUMsRUFDakdULEtBQUE7SUFBSzRCLEdBQUcsRUFBQyxpQ0FBaUM7SUFBQ0MsR0FBRyxFQUFDLEVBQUU7SUFBQzVCLFNBQVMsRUFBQyx1QkFBdUI7SUFBQyxlQUFZLE1BQU07SUFBQUUsTUFBQSxFQUFBQyxLQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsQ0FBRSxDQUFDLEVBQ3pHVCxLQUFBO0lBQUs0QixHQUFHLEVBQUMsaUNBQWlDO0lBQUNDLEdBQUcsRUFBQyxFQUFFO0lBQUM1QixTQUFTLEVBQUMsdUJBQXVCO0lBQUMsZUFBWSxNQUFNO0lBQUFFLE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLENBQUUsQ0FBQyxFQUN6R1QsS0FBQTtJQUFJQyxTQUFTLEVBQUMsaUJBQWlCO0lBQUFFLE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLHdCQUF3QixDQUNuRCxDQUFDLEVBRVRULEtBQUEsQ0FBQzhCLDBDQUFHO0lBQUNDLEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFFO0lBQUNDLEVBQUUsRUFBQyxNQUFNO0lBQUNDLEVBQUUsRUFBQyxNQUFNO0lBQUNoQyxTQUFTLEVBQUMsb0JBQW9CO0lBQUFFLE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQzFFaEMsV0FDQSxDQUFDLEVBRU51QixLQUFBO0lBQUtDLFNBQVMsRUFBQyxTQUFTO0lBQUFFLE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQ25CL0IsUUFBUSxDQUFDbUMsR0FBRyxDQUFDLFVBQUMxQixPQUFPO0lBQUEsT0FDbEJhLEtBQUE7TUFDSVIsR0FBRyxFQUFFTCxPQUFPLENBQUNSLElBQUs7TUFDbEJ1RCxJQUFJLEVBQUMsUUFBUTtNQUNiakMsU0FBUyxFQUFDLFNBQVM7TUFDbkJDLE9BQU8sRUFBRSxTQUFBQSxRQUFBO1FBQUEsT0FBTXVCLFdBQVcsQ0FBQ3RDLE9BQU8sQ0FBQztNQUFBLENBQUM7TUFBQWdCLE1BQUEsRUFBQUMsS0FBQTtNQUFBQyxRQUFBO1FBQUFDLFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQTtJQUFBLEdBRXBDVCxLQUFBO01BQUtDLFNBQVMsRUFBQyxlQUFlO01BQUFFLE1BQUEsRUFBQUMsS0FBQTtNQUFBQyxRQUFBO1FBQUFDLFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQTtJQUFBLEdBQzFCVCxLQUFBO01BQUtDLFNBQVMsRUFBQyxxQkFBcUI7TUFBQUUsTUFBQSxFQUFBQyxLQUFBO01BQUFDLFFBQUE7UUFBQUMsUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBO0lBQUEsR0FDaENULEtBQUE7TUFBQUcsTUFBQSxFQUFBQyxLQUFBO01BQUFDLFFBQUE7UUFBQUMsUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBO0lBQUEsR0FBT3RCLE9BQU8sQ0FBQ1IsSUFBSSxDQUFDZ0MsTUFBTSxDQUFDLENBQUMsQ0FBUSxDQUNuQyxDQUNKLENBQUMsRUFDTlgsS0FBQTtNQUFLQyxTQUFTLEVBQUMsY0FBYztNQUFBRSxNQUFBLEVBQUFDLEtBQUE7TUFBQUMsUUFBQTtRQUFBQyxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUE7SUFBQSxHQUN6QlQsS0FBQTtNQUFJQyxTQUFTLEVBQUMsY0FBYztNQUFBRSxNQUFBLEVBQUFDLEtBQUE7TUFBQUMsUUFBQTtRQUFBQyxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUE7SUFBQSxHQUFFdEIsT0FBTyxDQUFDUixJQUFTLENBQUMsRUFDaERxQixLQUFBO01BQUdDLFNBQVMsRUFBQyxnQkFBZ0I7TUFBQUUsTUFBQSxFQUFBQyxLQUFBO01BQUFDLFFBQUE7UUFBQUMsUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBO0lBQUEsR0FBRXRCLE9BQU8sQ0FBQ1AsTUFBVSxDQUFDLEVBQ2xEb0IsS0FBQTtNQUFNQyxTQUFTLEVBQUMsYUFBYTtNQUFBRSxNQUFBLEVBQUFDLEtBQUE7TUFBQUMsUUFBQTtRQUFBQyxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUE7SUFBQSxvQkFBY1QsS0FBQTtNQUFNLGVBQVksTUFBTTtNQUFBRyxNQUFBLEVBQUFDLEtBQUE7TUFBQUMsUUFBQTtRQUFBQyxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUE7SUFBQSxXQUFlLENBQU8sQ0FDeEYsQ0FDRCxDQUFDO0VBQUEsQ0FDWixDQUNBLENBQUMsRUFFTGUsUUFBUSxHQUNMeEIsS0FBQSxDQUFDaEIsWUFBWTtJQUFDRyxPQUFPLEVBQUVxQyxRQUFTO0lBQUNwQyxPQUFPLEVBQUUsU0FBQUEsUUFBQTtNQUFBLE9BQU1xQyxXQUFXLENBQUMsSUFBSSxDQUFDO0lBQUEsQ0FBQztJQUFBdEIsTUFBQSxFQUFBQyxLQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsQ0FBRSxDQUFDLEdBQ3JFLElBQ0gsQ0FBQyxFQUVOVCxLQUFBLENBQUNtQyxpRUFBVTtJQUFBaEMsTUFBQSxFQUFBQyxLQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsQ0FBRSxDQUNaLENBQUM7QUFFZCxDQUFDO0FBQUNZLEdBQUEsQ0FsRElELHNCQUFzQjtBQUFBZ0IsR0FBQSxHQUF0QmhCLHNCQUFzQjtBQW9EYkEscUZBQXNCLEVBQUM7QUFBQSxJQUFBRCxFQUFBLEVBQUFpQixHQUFBO0FBQUFDLFlBQUEsQ0FBQWxCLEVBQUE7QUFBQWtCLFlBQUEsQ0FBQUQsR0FBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wZW9wbGUvZGl2aXNpb25hbGFkdmlzb3JzLjY0YmMxZDM2YmI1Y2U1YWY2YzhhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJveCB9IGZyb20gJ3JlYmFzcyc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlcic7XG5pbXBvcnQgU2l0ZU5hdmJhciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL25hdmJhci9OYXZiYXInO1xuaW1wb3J0IFNpdGVGb290ZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyJztcbmltcG9ydCAnLi9pbmRleC5jc3MnO1xuXG5jb25zdCBERVNDUklQVElPTiA9XG4gICAgJ0RpdmlzaW9uYWwgQWR2aXNvcnMgYXJlIGZhY3VsdHkgbWVtYmVycyBmcm9tIGVhY2ggb2YgUmljZeKAmXMgYWNhZGVtaWMgZGl2aXNpb25zICcgK1xuICAgICd3aG8gc2VydmUgYXMgYSByZXNvdXJjZSBhbmQgcG9pbnQgb2YgY29udGFjdCBmb3IgTWNNdXJ0cnkgc3R1ZGVudHMuJztcblxuY29uc3QgYWR2aXNvcnMgPSBbXG4gICAge1xuICAgICAgICBuYW1lOiAnQ2hyaXN0b3BoZXIgSmVybWFpbmUnLFxuICAgICAgICBjYXJlZXI6ICdTY2hvb2wgb2YgRW5naW5lZXJpbmcsIENvbXB1dGVyIFNjaWVuY2UnLFxuICAgICAgICBlbWFpbDogJ2NtajRAcmljZS5lZHUnLFxuICAgICAgICBvZmZpY2U6ICczMDExIER1bmNhbiBIYWxsJyxcbiAgICAgICAgYmlvOiAnSSByZWNlaXZlZCBhIEJBIGZyb20gdGhlIE1hdGhlbWF0aWNzIERlcGFydG1lbnQgYXQgVUNTRCwgYW4gTVNjIGZyb20gdGhlIENvbXB1dGVyIFNjaWVuY2UgYW5kIEVuZ2luZWVyaW5nIERlcGFydG1lbnQgYXQgT1NVLCBhbmQgYSBQaEQgZnJvbSB0aGUgQ29sbGVnZSBvZiBDb21wdXRpbmcgYXQgR2VvcmdpYSBUZWNoLiBJIGFtIHRoZSByZWNpcGllbnQgb2YgYSAyMDA4IEFsZnJlZCBQLiBTbG9hbiBGb3VuZGF0aW9uIFJlc2VhcmNoIEZlbGxvd3NoaXAsIGEgTmF0aW9uYWwgU2NpZW5jZSBGb3VuZGF0aW9uIENBUkVFUiBhd2FyZCwgYW5kIGEgMjAwNyBBQ00gU0lHTU9EIEJlc3QgUGFwZXIgQXdhcmQuIEkgaGF2ZSBiZWVuIGF0IFJpY2Ugc2luY2UgSmFudWFyeSAyMDA5LlxcblxcbkluIG15IHNwYXJlIHRpbWUsIEkgZW5qb3kgcnVubmluZywgZ2FyZGVuaW5nLCBhbmQgb3V0ZG9vciBhY3Rpdml0aWVzIHN1Y2ggYXMgaGlraW5nLCBjbGltYmluZywgYW5kIHdoaXRld2F0ZXIgYm9hdGluZy4gSeKAmXZlIHdhbGtlZCB0aGUgSm9obiBNdWlyIFRyYWlsIHR3aWNlICgyNTArIG1pbGVzIHRvdGFsIGVhY2ggdGltZSkgYXMgd2VsbCBhcyBHbHluZHdy4oCZcyBXYXkgaW4gV2FsZXMsIGNhcnJ5aW5nIG15IHRoZW4tMy15ZWFyLW9sZCBzb24gb24gbXkgYmFjay4gSeKAmXZlIGhpa2VkIGFuZC9vciBjbGltYmVkIDEyIG91dCBvZiB0aGUgMTMgMTQsMDAwLWZvb3QgcGVha3MgaW4gQ2FsaWZvcm5pYS4gSW4gb25lIHBhcnRpY3VsYXIgZXhwbG9pdCwgbXkgd2lmZSBhbmQgSSBmbG9hdGVkIGEgd2hpdGV3YXRlciByYWZ0IChob21lLW1hZGUgZnJvbSBzY3JhdGNoKSBvdmVyIDEwMCBtaWxlcyBkb3duIHRoZSBOaXppbmEgUml2ZXIgaW4gQWxhc2thLicsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdFbWlseSBIb3VsaWstUml0Y2hleScsXG4gICAgICAgIGNhcmVlcjogJ1NjaG9vbCBvZiBIdW1hbml0aWVzLCBFbmdsaXNoJyxcbiAgICAgICAgZW1haWw6ICdlbWlseS5ob3VsaWstcml0Y2hleUByaWNlLmVkdScsXG4gICAgICAgIG9mZmljZTogJzIzNSBIZXJyaW5nIEhhbGwnLFxuICAgICAgICBiaW86ICdJIHRlYWNoIGFuZCByZXNlYXJjaCB0aGUgbGl0ZXJhdHVyZSBvZiB0aGUgTWlkZGxlIEFnZXMgd3JpdHRlbiBpbiBtZWRpZXZhbCBFbmdsaXNoIGFuZCBTcGFuaXNoLCBzdHVkeWluZyB0aGUgaW50ZXJhY3Rpb24gb2YgdGhlc2UgY3VsdHVyYWwgdHJhZGl0aW9ucyB3aXRoIHRoZSB3aWRlciBtZWRpZXZhbCBNZWRpdGVycmFuZWFuIHdvcmxkLiBJIHJlY2VpdmVkIG15IFBoLkQuIGF0IEluZGlhbmEgVW5pdmVyc2l0eSwgQmxvb21pbmd0b24sIGFuZCB3YXMgdGhlIEFybm9sZCBQb3N0ZG9jdG9yYWwgRmVsbG93IGF0IFVDU0IgYmVmb3JlIGNvbWluZyB0byBSaWNlIGluIDIwMTUuXFxuXFxuSSBsb3ZlIHRlYWNoaW5nIGFuZCByZWd1bGFybHkgb2ZmZXIgY2xhc3NlcyBpbiBBcnRodXJpYW4gTGl0ZXJhdHVyZSwgR2VvZmZyZXkgQ2hhdWNlciwgTWVkaWV2YWwgUm9tYW5jZSwgUmFjZSBpbiB0aGUgTWlkZGxlIEFnZXMsIGFuZCBpbnRyb2R1Y3RvcnkgY291cnNlcyB0byB0aGUgRW5nbGlzaCBtYWpvci4gSSBhbSBvcmlnaW5hbGx5IGZyb20gQ29sb3JhZG8sIGFuZCBteSBmYW1pbHkgdHJhdmVscyBiYWNrIHRoZXJlIHJlZ3VsYXJseSB0byBoaWtlLCBjYW1wLCBza2ksIGFuZCBzZWUgZmFtaWx5LiBJIHVzZSBmZW1pbmluZSBwcm9ub3VucywgSSBhbSBhIHN1Y2tlciBmb3IgcmVhbGx5IGdvb2QgY2hvY29sYXRlLCBhbmQgSSBmb3N0ZXIgbW9uYXJjaCBidXR0ZXJmbHkgY2F0ZXJwaWxsYXJzIHRocm91Z2ggdGhlaXIgbWV0YW1vcnBob3NpcyBpbnRvIGJ1dHRlcmZsaWVzLicsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdMYXVyYSBLYWJpcmknLFxuICAgICAgICBjYXJlZXI6ICdTY2hvb2wgb2YgTmF0dXJhbCBTY2llbmNlcywgS2luZXNpb2xvZ3knLFxuICAgICAgICBlbWFpbDogJ2xhdXJhLmthYmlyaUByaWNlLmVkdScsXG4gICAgICAgIG9mZmljZTogJ1MyMDMgVHVkb3IgRmllbGQgSG91c2UnLFxuICAgICAgICBiaW86ICdMYXVyYSBLYWJpcmkgaXMgYSBodW1hbiBhbmF0b215IGFuZCBwaHlzaW9sb2d5IGluc3RydWN0b3IgaW4gdGhlIFdpZXNzIFNjaG9vbCBvZiBOYXR1cmFsIFNjaWVuY2VzLiBTaGUgaXMgYWxzbyBhIGxpY2Vuc2VkIHBoeXNpY2FsIHRoZXJhcGlzdCB3aXRoIHByZXZpb3VzIGV4cGVyaWVuY2UgaW4gdGhlIGhvc3BpdGFsIHNldHRpbmcuIEhlciB1bmRlcmdyYWR1YXRlIGRlZ3JlZSBpcyBhIEJBIGluIG11c2ljIChwaWFuby92b2ljZSksIHdoaWNoIG1hZGUgZm9yIGFuIGludGVyZXN0aW5nIHRyYW5zaXRpb24gaW50byBoZXIgZ3JhZHVhdGUgd29yayAoTVMsIERQVCwgUGhEKSBpbiBwaHlzaWNhbCB0aGVyYXB5LlxcblxcblJlc2VhcmNoIGludGVyZXN0cyBjb3ZlciBwZWRpYXRyaWMgaGVhbHRoIGFuZCB3ZWxsbmVzcywgaW5jbHVkaW5nIGJvZHkgY29tcG9zaXRpb24sIGNhcmRpb3Jlc3BpcmF0b3J5IGZpdG5lc3MsIGFuZCBtb3RvciBza2lsbHMuIFNoZSBpcyBrbm93biB0byBmZWVkIGh1bmdyeSBzdHJlc3NlZC1vdXQgTWNNdXJ0cyBkdXJpbmcgZmluYWxzIHdpdGggaGVyIHJlZ3VsYXIgU3dlZXQgYW5kIFNhbHR5IGV2ZW50LiBEci4gS2FiaXJpIGlzIGEgYnVzeSB3aWZlIGFuZCBtb3RoZXIgb2YgdHdpbiBib3lzIHdobyBlbmpveXMgcmVhZGluZywgbGl2ZSBtdXNpYywgcGxheWluZyB3aXRoIGhlciBWaXpzbGEgSGFubmFoLCBhbmQgYW55dGhpbmcgb3V0ZG9vcnMuJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ096Z2UgR3VyY2FubGknLFxuICAgICAgICBjYXJlZXI6ICdTY2hvb2wgb2YgU29jaWFsIFNjaWVuY2VzLCBQc3ljaG9sb2d5JyxcbiAgICAgICAgZW1haWw6ICdvemdlLmd1cmNhbmxpQHJpY2UuZWR1JyxcbiAgICAgICAgb2ZmaWNlOiAnNDU2IFNld2FsbCBIYWxsJyxcbiAgICAgICAgYmlvOiAnw5Z6Z2UgR8O8cmNhbmzEsSByZWNlaXZlZCBoZXIgUGguRC4gaW4gQ29nbml0aXZlIFNjaWVuY2UgZnJvbSBKb2hucyBIb3BraW5zIFVuaXZlcnNpdHkgaW4gMjAxMiBhbmQgam9pbmVkIFJpY2UgaW4gSmFudWFyeSAyMDEzLiBTaGUgdGVhY2hlcyBJbnRyb2R1Y3Rpb24gdG8gUHN5Y2hvbG9neSwgRGV2ZWxvcG1lbnRhbCBQc3ljaG9sb2d5LCBMYW5ndWFnZSBBY3F1aXNpdGlvbiwgYW5kIFJlc2VhcmNoIE1ldGhvZHMuXFxuXFxuSW4gaGVyIHJlc2VhcmNoLCBzaGUgZXhwbG9yZXMgaG93IG1vbm9saW5ndWFsIGFuZCBiaWxpbmd1YWwgc3BlYWtlcnPigJRib3RoIGNoaWxkcmVuIGFuZCBhZHVsdHPigJR0YWxrIGFib3V0IHRoZSBzcGF0aWFsIHdvcmxkIGFyb3VuZCB0aGVtLiBTaGUgaXMgYSBodWdlIGJlbGlldmVyIGluIGV4cGVyaWVudGlhbCBsZWFybmluZywgYW5kIGhlciBkZXZlbG9wbWVudGFsIHBzeWNob2xvZ3kgY291cnNlIGhhcyByZWNlaXZlZCB1bml2ZXJzaXR5LXdpZGUgcmVjb2duaXRpb24uIFNoZSBhbHNvIHNlcnZlcyBhcyBhIG1ham9yIGFkdmlzb3IgYW5kIGRpcmVjdG9yIG9mIHRoZSBob25vcnMgcHJvZ3JhbSBpbiB0aGUgRGVwYXJ0bWVudCBvZiBQc3ljaG9sb2d5LicsXG4gICAgfSxcbl07XG5cbmNvbnN0IEFkdmlzb3JNb2RhbCA9ICh7IGFkdmlzb3IsIG9uQ2xvc2UgfSkgPT4ge1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGhhbmRsZUVzYyA9IChlKSA9PiB7IGlmIChlLmtleSA9PT0gJ0VzY2FwZScpIG9uQ2xvc2UoKTsgfTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVFc2MpO1xuICAgICAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVFc2MpO1xuICAgIH0sIFtvbkNsb3NlXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgICAgIHJldHVybiAoKSA9PiB7IGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAndW5zZXQnOyB9O1xuICAgIH0sIFtdKTtcblxuICAgIGlmICghYWR2aXNvcikgcmV0dXJuIG51bGw7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXMtbW9kYWwtb3ZlcmxheScgb25DbGljaz17b25DbG9zZX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXMtbW9kYWwnIG9uQ2xpY2s9e2UgPT4gZS5zdG9wUHJvcGFnYXRpb24oKX0+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2FzLW1vZGFsLWNsb3NlJyBvbkNsaWNrPXtvbkNsb3NlfSBhcmlhLWxhYmVsPSdDbG9zZSc+JnRpbWVzOzwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FzLW1vZGFsLW1lZGlhJz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FzLW1vZGFsLXBsYWNlaG9sZGVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnthZHZpc29yLm5hbWUuY2hhckF0KDApfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXMtbW9kYWwtYm9keSc+XG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J2FzLW1vZGFsLW5hbWUnPnthZHZpc29yLm5hbWV9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdhcy1tb2RhbC1jYXJlZXInPnthZHZpc29yLmNhcmVlcn08L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FzLW1vZGFsLXNlY3Rpb24nPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdhcy1tb2RhbC1sYWJlbCc+QmlvPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAge2Fkdmlzb3IuYmlvLnNwbGl0KCdcXG5cXG4nKS5tYXAoKHBhcmEsIGkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBrZXk9e2l9IGNsYXNzTmFtZT0nYXMtbW9kYWwtdGV4dCcgc3R5bGU9e2kgPiAwID8geyBtYXJnaW5Ub3A6ICcxZW0nIH0gOiB7fX0+e3BhcmF9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhcy1tb2RhbC1zZWN0aW9uJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nYXMtbW9kYWwtbGFiZWwnPkNvbnRhY3Q8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2FzLW1vZGFsLXRleHQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2BtYWlsdG86JHthZHZpc29yLmVtYWlsfWB9PnthZHZpc29yLmVtYWlsfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz57YWR2aXNvci5vZmZpY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5jb25zdCBEaXZpc2lvbmFsQWR2aXNvcnNQYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWRdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGFnZSBwYWdlLWxpZ2h0IHBhZ2Utd2l0aC1zdGFnZ2VyZWQtbWVudSc+XG4gICAgICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgICAgICA8U2l0ZU5hdmJhciAvPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXNzb2NpYXRlcy1wYWdlJz5cbiAgICAgICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT0nZXYtaGVybyc+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPScvc3RhdGljL2ljb25zL2Fib3V0LXN3b29zaC5zdmcnIGFsdD0nJyBjbGFzc05hbWU9J2V2LWhlcm8tc3dvb3NoJyBhcmlhLWhpZGRlbj0ndHJ1ZScgLz5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9Jy9zdGF0aWMvaWNvbnMvZWxsaXBzZS1sYXJnZS5zdmcnIGFsdD0nJyBjbGFzc05hbWU9J2V2LWhlcm8tZWxsaXBzZS1sYXJnZScgYXJpYS1oaWRkZW49J3RydWUnIC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPScvc3RhdGljL2ljb25zL2VsbGlwc2Utc21hbGwuc3ZnJyBhbHQ9JycgY2xhc3NOYW1lPSdldi1oZXJvLWVsbGlwc2Utc21hbGwnIGFyaWEtaGlkZGVuPSd0cnVlJyAvPlxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdldi1oZXJvLWhlYWRpbmcnPkRpdmlzaW9uYWwgQWR2aXNvcnM8L2gxPlxuICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxuXG4gICAgICAgICAgICAgICAgPEJveCB3aWR0aD17WzAuOSwgMC43LCAwLjZdfSBtbD0nYXV0bycgbXI9J2F1dG8nIGNsYXNzTmFtZT0nYXNzb2NpYXRlcy1taXNzaW9uJz5cbiAgICAgICAgICAgICAgICAgICAge0RFU0NSSVBUSU9OfVxuICAgICAgICAgICAgICAgIDwvQm94PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FzLWdyaWQnPlxuICAgICAgICAgICAgICAgICAgICB7YWR2aXNvcnMubWFwKChhZHZpc29yKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXthZHZpc29yLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0nYnV0dG9uJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYXMtY2FyZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZChhZHZpc29yKX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXMtY2FyZC1tZWRpYSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhcy1jYXJkLXBsYWNlaG9sZGVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnthZHZpc29yLm5hbWUuY2hhckF0KDApfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FzLWNhcmQtYm9keSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9J2FzLWNhcmQtbmFtZSc+e2Fkdmlzb3IubmFtZX08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2FzLWNhcmQtY2FyZWVyJz57YWR2aXNvci5jYXJlZXJ9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2FzLWNhcmQtY3RhJz5WaWV3IHByb2ZpbGUgPHNwYW4gYXJpYS1oaWRkZW49J3RydWUnPiZyc2FxdW87PC9zcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIHtzZWxlY3RlZCA/IChcbiAgICAgICAgICAgICAgICAgICAgPEFkdmlzb3JNb2RhbCBhZHZpc29yPXtzZWxlY3RlZH0gb25DbG9zZT17KCkgPT4gc2V0U2VsZWN0ZWQobnVsbCl9IC8+XG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPFNpdGVGb290ZXIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERpdmlzaW9uYWxBZHZpc29yc1BhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9