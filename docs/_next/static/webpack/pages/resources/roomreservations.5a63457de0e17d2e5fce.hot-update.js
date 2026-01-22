webpackHotUpdate_N_E("pages/resources/roomreservations",{

/***/ "./components/events/CustomCalendar.js":
/*!*********************************************!*\
  !*** ./components/events/CustomCalendar.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fullcalendar_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fullcalendar/react */ "./node_modules/@fullcalendar/react/dist/index.js");
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fullcalendar/daygrid */ "./node_modules/@fullcalendar/daygrid/index.js");
/* harmony import */ var _fullcalendar_google_calendar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fullcalendar/google-calendar */ "./node_modules/@fullcalendar/google-calendar/index.js");
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fullcalendar/interaction */ "./node_modules/@fullcalendar/interaction/index.js");
/* harmony import */ var _CustomCalendar_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CustomCalendar.css */ "./components/events/CustomCalendar.css");
/* harmony import */ var _CustomCalendar_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_CustomCalendar_css__WEBPACK_IMPORTED_MODULE_5__);
var _this = undefined,
  _jsxFileName = "C:\\Users\\anton\\Documents\\Projects\\MurtWebsite\\components\\events\\CustomCalendar.js",
  _s = $RefreshSig$();
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







// SVG Icons as components
var ClockIcon = function ClockIcon() {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx("circle", {
    cx: "12",
    cy: "12",
    r: "10",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }), __jsx("polyline", {
    points: "12 6 12 12 16 14",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }));
};
_c = ClockIcon;
var LocationIcon = function LocationIcon() {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, __jsx("path", {
    d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }), __jsx("circle", {
    cx: "12",
    cy: "10",
    r: "3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }));
};
_c2 = LocationIcon;
var DescriptionIcon = function DescriptionIcon() {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, __jsx("path", {
    d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }), __jsx("polyline", {
    points: "14 2 14 8 20 8",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }), __jsx("line", {
    x1: "16",
    y1: "13",
    x2: "8",
    y2: "13",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }), __jsx("line", {
    x1: "16",
    y1: "17",
    x2: "8",
    y2: "17",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }), __jsx("polyline", {
    points: "10 9 9 9 8 9",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }));
};
_c3 = DescriptionIcon;
var ExternalLinkIcon = function ExternalLinkIcon() {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, __jsx("path", {
    d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }), __jsx("polyline", {
    points: "15 3 21 3 21 9",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }), __jsx("line", {
    x1: "10",
    y1: "14",
    x2: "21",
    y2: "3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }));
};
_c4 = ExternalLinkIcon;
var CustomCalendar = function CustomCalendar(_ref) {
  _s();
  var _ref$calendarId = _ref.calendarId,
    calendarId = _ref$calendarId === void 0 ? 'mcmsecretary@gmail.com' : _ref$calendarId;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
    selectedEvent = _useState[0],
    setSelectedEvent = _useState[1];
  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
    initialView = _useState2[0],
    setInitialView = _useState2[1];
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    // Check if the device is mobile
    var isMobile = window.innerWidth <= 768;
    setInitialView(isMobile ? 'dayGridWeek' : 'dayGridMonth');
  }, []);
  var handleEventClick = function handleEventClick(info) {
    info.jsEvent.preventDefault();
    setSelectedEvent({
      title: info.event.title,
      start: info.event.start,
      end: info.event.end,
      description: info.event.extendedProps.description || '',
      location: info.event.extendedProps.location || '',
      url: info.event.url
    });
  };
  var closePopup = function closePopup() {
    setSelectedEvent(null);
  };
  var formatDate = function formatDate(date) {
    if (!date) return '';
    return new Intl.DateTimeFormat('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    }).format(date);
  };
  return __jsx("div", {
    className: "custom-calendar-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }
  }, initialView && __jsx(_fullcalendar_react__WEBPACK_IMPORTED_MODULE_1__["default"], {
    plugins: [_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_2__["default"], _fullcalendar_google_calendar__WEBPACK_IMPORTED_MODULE_3__["default"], _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_4__["default"]],
    initialView: initialView,
    googleCalendarApiKey: "AIzaSyBNlYH01_9Hc5S1J9vuFmu2nUqBZJNAXxs",
    events: {
      googleCalendarId: calendarId
    },
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,dayGridWeek'
    },
    buttonText: {
      today: 'Today',
      month: 'Month',
      week: 'Week'
    },
    height: "auto",
    eventDisplay: "block",
    displayEventTime: true,
    eventTimeFormat: {
      hour: 'numeric',
      minute: '2-digit',
      meridiem: 'short'
    },
    eventClick: handleEventClick,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 17
    }
  }), selectedEvent && __jsx("div", {
    className: "event-popup-overlay",
    onClick: closePopup,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "event-popup",
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 21
    }
  }, __jsx("button", {
    className: "event-popup-close",
    onClick: closePopup,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 25
    }
  }, "\xD7"), __jsx("h3", {
    className: "event-popup-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 25
    }
  }, selectedEvent.title), __jsx("div", {
    className: "event-popup-details",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "event-popup-time",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: "https://icon.now.sh/schedule/FFFFFF/24",
    alt: "Time",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 33
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 33
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 37
    }
  }, __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 40
    }
  }, "Start:"), " ", formatDate(selectedEvent.start)), selectedEvent.end && __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 41
    }
  }, __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 44
    }
  }, "End:"), " ", formatDate(selectedEvent.end)))), selectedEvent.location && __jsx("div", {
    className: "event-popup-location",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 33
    }
  }, __jsx("img", {
    src: "https://icon.now.sh/place/FFFFFF/24",
    alt: "Location",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 37
    }
  }), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 37
    }
  }, selectedEvent.location)), selectedEvent.description && __jsx("div", {
    className: "event-popup-description",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 33
    }
  }, __jsx("img", {
    src: "https://icon.now.sh/description/FFFFFF/24",
    alt: "Description",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 37
    }
  }), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 37
    }
  }, selectedEvent.description)), selectedEvent.url && __jsx("a", {
    href: selectedEvent.url,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "event-popup-link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 33
    }
  }, __jsx("img", {
    src: "https://icon.now.sh/open_in_new/FFFFFF/20",
    alt: "Open",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 37
    }
  }), "View in Google Calendar")))));
};
_s(CustomCalendar, "3Vfqh+HJzziF/HKYgZ+sroTFN4Q=");
_c5 = CustomCalendar;
/* harmony default export */ __webpack_exports__["default"] = (CustomCalendar);
var _c, _c2, _c3, _c4, _c5;
$RefreshReg$(_c, "ClockIcon");
$RefreshReg$(_c2, "LocationIcon");
$RefreshReg$(_c3, "DescriptionIcon");
$RefreshReg$(_c4, "ExternalLinkIcon");
$RefreshReg$(_c5, "CustomCalendar");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ldmVudHMvQ3VzdG9tQ2FsZW5kYXIuanMiXSwibmFtZXMiOlsiQ2xvY2tJY29uIiwiX19qc3giLCJ4bWxucyIsIndpZHRoIiwiaGVpZ2h0Iiwidmlld0JveCIsImZpbGwiLCJzdHJva2UiLCJzdHJva2VXaWR0aCIsInN0cm9rZUxpbmVjYXAiLCJzdHJva2VMaW5lam9pbiIsIl9fc2VsZiIsIl90aGlzIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJjeCIsImN5IiwiciIsInBvaW50cyIsIl9jIiwiTG9jYXRpb25JY29uIiwiZCIsIl9jMiIsIkRlc2NyaXB0aW9uSWNvbiIsIngxIiwieTEiLCJ4MiIsInkyIiwiX2MzIiwiRXh0ZXJuYWxMaW5rSWNvbiIsIl9jNCIsIkN1c3RvbUNhbGVuZGFyIiwiX3JlZiIsIl9zIiwiX3JlZiRjYWxlbmRhcklkIiwiY2FsZW5kYXJJZCIsIl91c2VTdGF0ZSIsInVzZVN0YXRlIiwic2VsZWN0ZWRFdmVudCIsInNldFNlbGVjdGVkRXZlbnQiLCJfdXNlU3RhdGUyIiwiaW5pdGlhbFZpZXciLCJzZXRJbml0aWFsVmlldyIsInVzZUVmZmVjdCIsImlzTW9iaWxlIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImhhbmRsZUV2ZW50Q2xpY2siLCJpbmZvIiwianNFdmVudCIsInByZXZlbnREZWZhdWx0IiwidGl0bGUiLCJldmVudCIsInN0YXJ0IiwiZW5kIiwiZGVzY3JpcHRpb24iLCJleHRlbmRlZFByb3BzIiwibG9jYXRpb24iLCJ1cmwiLCJjbG9zZVBvcHVwIiwiZm9ybWF0RGF0ZSIsImRhdGUiLCJJbnRsIiwiRGF0ZVRpbWVGb3JtYXQiLCJ3ZWVrZGF5IiwieWVhciIsIm1vbnRoIiwiZGF5IiwiaG91ciIsIm1pbnV0ZSIsImhvdXIxMiIsImZvcm1hdCIsImNsYXNzTmFtZSIsIkZ1bGxDYWxlbmRhciIsInBsdWdpbnMiLCJkYXlHcmlkUGx1Z2luIiwiZ29vZ2xlQ2FsZW5kYXJQbHVnaW4iLCJpbnRlcmFjdGlvblBsdWdpbiIsImdvb2dsZUNhbGVuZGFyQXBpS2V5IiwiZXZlbnRzIiwiZ29vZ2xlQ2FsZW5kYXJJZCIsImhlYWRlclRvb2xiYXIiLCJsZWZ0IiwiY2VudGVyIiwicmlnaHQiLCJidXR0b25UZXh0IiwidG9kYXkiLCJ3ZWVrIiwiZXZlbnREaXNwbGF5IiwiZGlzcGxheUV2ZW50VGltZSIsImV2ZW50VGltZUZvcm1hdCIsIm1lcmlkaWVtIiwiZXZlbnRDbGljayIsIm9uQ2xpY2siLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwic3JjIiwiYWx0IiwiaHJlZiIsInRhcmdldCIsInJlbCIsIl9jNSIsIiRSZWZyZXNoUmVnJCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDSjtBQUNHO0FBQ2U7QUFDUDtBQUM1Qjs7QUFFOUI7QUFDQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBU0EsQ0FBQTtFQUFBLE9BQ1hDLEtBQUE7SUFBS0MsS0FBSyxFQUFDLDRCQUE0QjtJQUFDQyxLQUFLLEVBQUMsSUFBSTtJQUFDQyxNQUFNLEVBQUMsSUFBSTtJQUFDQyxPQUFPLEVBQUMsV0FBVztJQUFDQyxJQUFJLEVBQUMsTUFBTTtJQUFDQyxNQUFNLEVBQUMsY0FBYztJQUFDQyxXQUFXLEVBQUMsR0FBRztJQUFDQyxhQUFhLEVBQUMsT0FBTztJQUFDQyxjQUFjLEVBQUMsT0FBTztJQUFBQyxNQUFBLEVBQUFDLEtBQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUM3S2hCLEtBQUE7SUFBUWlCLEVBQUUsRUFBQyxJQUFJO0lBQUNDLEVBQUUsRUFBQyxJQUFJO0lBQUNDLENBQUMsRUFBQyxJQUFJO0lBQUFULE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01B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QTJITEEsNkVBQWMsRUFBQztBQUFBLElBQUFaLEVBQUEsRUFBQUcsR0FBQSxFQUFBTSxHQUFBLEVBQUFFLEdBQUEsRUFBQXVFLEdBQUE7QUFBQUMsWUFBQSxDQUFBbkYsRUFBQTtBQUFBbUYsWUFBQSxDQUFBaEYsR0FBQTtBQUFBZ0YsWUFBQSxDQUFBMUUsR0FBQTtBQUFBMEUsWUFBQSxDQUFBeEUsR0FBQTtBQUFBd0UsWUFBQSxDQUFBRCxHQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Jlc291cmNlcy9yb29tcmVzZXJ2YXRpb25zLjVhNjM0NTdkZTBlMTdkMmU1ZmNlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEZ1bGxDYWxlbmRhciBmcm9tICdAZnVsbGNhbGVuZGFyL3JlYWN0JztcclxuaW1wb3J0IGRheUdyaWRQbHVnaW4gZnJvbSAnQGZ1bGxjYWxlbmRhci9kYXlncmlkJztcclxuaW1wb3J0IGdvb2dsZUNhbGVuZGFyUGx1Z2luIGZyb20gJ0BmdWxsY2FsZW5kYXIvZ29vZ2xlLWNhbGVuZGFyJztcclxuaW1wb3J0IGludGVyYWN0aW9uUGx1Z2luIGZyb20gJ0BmdWxsY2FsZW5kYXIvaW50ZXJhY3Rpb24nO1xyXG5pbXBvcnQgJy4vQ3VzdG9tQ2FsZW5kYXIuY3NzJztcclxuXHJcbi8vIFNWRyBJY29ucyBhcyBjb21wb25lbnRzXHJcbmNvbnN0IENsb2NrSWNvbiA9ICgpID0+IChcclxuICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMThcIiBoZWlnaHQ9XCIxOFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZVdpZHRoPVwiMlwiIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIj5cclxuICAgICAgICA8Y2lyY2xlIGN4PVwiMTJcIiBjeT1cIjEyXCIgcj1cIjEwXCI+PC9jaXJjbGU+XHJcbiAgICAgICAgPHBvbHlsaW5lIHBvaW50cz1cIjEyIDYgMTIgMTIgMTYgMTRcIj48L3BvbHlsaW5lPlxyXG4gICAgPC9zdmc+XHJcbik7XHJcblxyXG5jb25zdCBMb2NhdGlvbkljb24gPSAoKSA9PiAoXHJcbiAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE4XCIgaGVpZ2h0PVwiMThcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD1cIjJcIiBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCI+XHJcbiAgICAgICAgPHBhdGggZD1cIk0yMSAxMGMwIDctOSAxMy05IDEzcy05LTYtOS0xM2E5IDkgMCAwIDEgMTggMHpcIj48L3BhdGg+XHJcbiAgICAgICAgPGNpcmNsZSBjeD1cIjEyXCIgY3k9XCIxMFwiIHI9XCIzXCI+PC9jaXJjbGU+XHJcbiAgICA8L3N2Zz5cclxuKTtcclxuXHJcbmNvbnN0IERlc2NyaXB0aW9uSWNvbiA9ICgpID0+IChcclxuICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMThcIiBoZWlnaHQ9XCIxOFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZVdpZHRoPVwiMlwiIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIj5cclxuICAgICAgICA8cGF0aCBkPVwiTTE0IDJINmEyIDIgMCAwIDAtMiAydjE2YTIgMiAwIDAgMCAyIDJoMTJhMiAyIDAgMCAwIDItMlY4elwiPjwvcGF0aD5cclxuICAgICAgICA8cG9seWxpbmUgcG9pbnRzPVwiMTQgMiAxNCA4IDIwIDhcIj48L3BvbHlsaW5lPlxyXG4gICAgICAgIDxsaW5lIHgxPVwiMTZcIiB5MT1cIjEzXCIgeDI9XCI4XCIgeTI9XCIxM1wiPjwvbGluZT5cclxuICAgICAgICA8bGluZSB4MT1cIjE2XCIgeTE9XCIxN1wiIHgyPVwiOFwiIHkyPVwiMTdcIj48L2xpbmU+XHJcbiAgICAgICAgPHBvbHlsaW5lIHBvaW50cz1cIjEwIDkgOSA5IDggOVwiPjwvcG9seWxpbmU+XHJcbiAgICA8L3N2Zz5cclxuKTtcclxuXHJcbmNvbnN0IEV4dGVybmFsTGlua0ljb24gPSAoKSA9PiAoXHJcbiAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE4XCIgaGVpZ2h0PVwiMThcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD1cIjJcIiBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCI+XHJcbiAgICAgICAgPHBhdGggZD1cIk0xOCAxM3Y2YTIgMiAwIDAgMS0yIDJINWEyIDIgMCAwIDEtMi0yVjhhMiAyIDAgMCAxIDItMmg2XCI+PC9wYXRoPlxyXG4gICAgICAgIDxwb2x5bGluZSBwb2ludHM9XCIxNSAzIDIxIDMgMjEgOVwiPjwvcG9seWxpbmU+XHJcbiAgICAgICAgPGxpbmUgeDE9XCIxMFwiIHkxPVwiMTRcIiB4Mj1cIjIxXCIgeTI9XCIzXCI+PC9saW5lPlxyXG4gICAgPC9zdmc+XHJcbik7XHJcblxyXG5jb25zdCBDdXN0b21DYWxlbmRhciA9ICh7IGNhbGVuZGFySWQgPSAnbWNtc2VjcmV0YXJ5QGdtYWlsLmNvbScgfSkgPT4ge1xyXG4gICAgY29uc3QgW3NlbGVjdGVkRXZlbnQsIHNldFNlbGVjdGVkRXZlbnRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbaW5pdGlhbFZpZXcsIHNldEluaXRpYWxWaWV3XSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIGRldmljZSBpcyBtb2JpbGVcclxuICAgICAgICBjb25zdCBpc01vYmlsZSA9IHdpbmRvdy5pbm5lcldpZHRoIDw9IDc2ODtcclxuICAgICAgICBzZXRJbml0aWFsVmlldyhpc01vYmlsZSA/ICdkYXlHcmlkV2VlaycgOiAnZGF5R3JpZE1vbnRoJyk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlRXZlbnRDbGljayA9IChpbmZvKSA9PiB7XHJcbiAgICAgICAgaW5mby5qc0V2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgc2V0U2VsZWN0ZWRFdmVudCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiBpbmZvLmV2ZW50LnRpdGxlLFxyXG4gICAgICAgICAgICBzdGFydDogaW5mby5ldmVudC5zdGFydCxcclxuICAgICAgICAgICAgZW5kOiBpbmZvLmV2ZW50LmVuZCxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGluZm8uZXZlbnQuZXh0ZW5kZWRQcm9wcy5kZXNjcmlwdGlvbiB8fCAnJyxcclxuICAgICAgICAgICAgbG9jYXRpb246IGluZm8uZXZlbnQuZXh0ZW5kZWRQcm9wcy5sb2NhdGlvbiB8fCAnJyxcclxuICAgICAgICAgICAgdXJsOiBpbmZvLmV2ZW50LnVybFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBjbG9zZVBvcHVwID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFNlbGVjdGVkRXZlbnQobnVsbCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGZvcm1hdERhdGUgPSAoZGF0ZSkgPT4ge1xyXG4gICAgICAgIGlmICghZGF0ZSkgcmV0dXJuICcnO1xyXG4gICAgICAgIHJldHVybiBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCgnZW4tVVMnLCB7XHJcbiAgICAgICAgICAgIHdlZWtkYXk6ICdsb25nJyxcclxuICAgICAgICAgICAgeWVhcjogJ251bWVyaWMnLFxyXG4gICAgICAgICAgICBtb250aDogJ2xvbmcnLFxyXG4gICAgICAgICAgICBkYXk6ICdudW1lcmljJyxcclxuICAgICAgICAgICAgaG91cjogJ251bWVyaWMnLFxyXG4gICAgICAgICAgICBtaW51dGU6ICcyLWRpZ2l0JyxcclxuICAgICAgICAgICAgaG91cjEyOiB0cnVlXHJcbiAgICAgICAgfSkuZm9ybWF0KGRhdGUpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tLWNhbGVuZGFyLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAge2luaXRpYWxWaWV3ICYmIChcclxuICAgICAgICAgICAgICAgIDxGdWxsQ2FsZW5kYXJcclxuICAgICAgICAgICAgICAgICAgICBwbHVnaW5zPXtbZGF5R3JpZFBsdWdpbiwgZ29vZ2xlQ2FsZW5kYXJQbHVnaW4sIGludGVyYWN0aW9uUGx1Z2luXX1cclxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsVmlldz17aW5pdGlhbFZpZXd9XHJcbiAgICAgICAgICAgICAgICAgICAgZ29vZ2xlQ2FsZW5kYXJBcGlLZXk9XCJBSXphU3lCTmxZSDAxXzlIYzVTMUo5dnVGbXUyblVxQlpKTkFYeHNcIlxyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50cz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnb29nbGVDYWxlbmRhcklkOiBjYWxlbmRhcklkXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJUb29sYmFyPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6ICdwcmV2LG5leHQgdG9kYXknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXI6ICd0aXRsZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAnZGF5R3JpZE1vbnRoLGRheUdyaWRXZWVrJ1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uVGV4dD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2RheTogJ1RvZGF5JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9udGg6ICdNb250aCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlZWs6ICdXZWVrJ1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiYXV0b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnREaXNwbGF5PVwiYmxvY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlFdmVudFRpbWU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRUaW1lRm9ybWF0PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvdXI6ICdudW1lcmljJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWludXRlOiAnMi1kaWdpdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lcmlkaWVtOiAnc2hvcnQnXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBldmVudENsaWNrPXtoYW5kbGVFdmVudENsaWNrfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHtzZWxlY3RlZEV2ZW50ICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXZlbnQtcG9wdXAtb3ZlcmxheVwiIG9uQ2xpY2s9e2Nsb3NlUG9wdXB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXZlbnQtcG9wdXBcIiBvbkNsaWNrPXsoZSkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZXZlbnQtcG9wdXAtY2xvc2VcIiBvbkNsaWNrPXtjbG9zZVBvcHVwfT7DlzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImV2ZW50LXBvcHVwLXRpdGxlXCI+e3NlbGVjdGVkRXZlbnQudGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXZlbnQtcG9wdXAtZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJldmVudC1wb3B1cC10aW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2ljb24ubm93LnNoL3NjaGVkdWxlL0ZGRkZGRi8yNFwiIGFsdD1cIlRpbWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxzdHJvbmc+U3RhcnQ6PC9zdHJvbmc+IHtmb3JtYXREYXRlKHNlbGVjdGVkRXZlbnQuc3RhcnQpfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlbGVjdGVkRXZlbnQuZW5kICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxzdHJvbmc+RW5kOjwvc3Ryb25nPiB7Zm9ybWF0RGF0ZShzZWxlY3RlZEV2ZW50LmVuZCl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZEV2ZW50LmxvY2F0aW9uICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV2ZW50LXBvcHVwLWxvY2F0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pY29uLm5vdy5zaC9wbGFjZS9GRkZGRkYvMjRcIiBhbHQ9XCJMb2NhdGlvblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntzZWxlY3RlZEV2ZW50LmxvY2F0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZEV2ZW50LmRlc2NyaXB0aW9uICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV2ZW50LXBvcHVwLWRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pY29uLm5vdy5zaC9kZXNjcmlwdGlvbi9GRkZGRkYvMjRcIiBhbHQ9XCJEZXNjcmlwdGlvblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntzZWxlY3RlZEV2ZW50LmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZEV2ZW50LnVybCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e3NlbGVjdGVkRXZlbnQudXJsfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJldmVudC1wb3B1cC1saW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pY29uLm5vdy5zaC9vcGVuX2luX25ldy9GRkZGRkYvMjBcIiBhbHQ9XCJPcGVuXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmlldyBpbiBHb29nbGUgQ2FsZW5kYXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEN1c3RvbUNhbGVuZGFyO1xyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==