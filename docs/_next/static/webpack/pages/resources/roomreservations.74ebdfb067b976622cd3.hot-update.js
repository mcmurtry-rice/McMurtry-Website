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
      lineNumber: 49,
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
      lineNumber: 51,
      columnNumber: 17
    }
  }), selectedEvent && __jsx("div", {
    className: "event-popup-overlay",
    onClick: closePopup,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
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
      lineNumber: 82,
      columnNumber: 21
    }
  }, __jsx("button", {
    className: "event-popup-close",
    onClick: closePopup,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 25
    }
  }, "\xD7"), __jsx("h3", {
    className: "event-popup-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 25
    }
  }, selectedEvent.title), __jsx("div", {
    className: "event-popup-details",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "event-popup-time",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: "https://icon.now.sh/schedule/FFFFFF/24",
    alt: "Time",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 33
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 33
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 37
    }
  }, __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 40
    }
  }, "Start:"), " ", formatDate(selectedEvent.start)), selectedEvent.end && __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 41
    }
  }, __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 44
    }
  }, "End:"), " ", formatDate(selectedEvent.end)))), selectedEvent.location && __jsx("div", {
    className: "event-popup-location",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 33
    }
  }, __jsx("img", {
    src: "https://icon.now.sh/place/FFFFFF/24",
    alt: "Location",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 37
    }
  }), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 37
    }
  }, selectedEvent.location)), selectedEvent.description && __jsx("div", {
    className: "event-popup-description",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 33
    }
  }, __jsx("img", {
    src: "https://icon.now.sh/description/FFFFFF/24",
    alt: "Description",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 37
    }
  }), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
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
      lineNumber: 113,
      columnNumber: 33
    }
  }, __jsx("img", {
    src: "https://icon.now.sh/open_in_new/FFFFFF/20",
    alt: "Open",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 37
    }
  }), "View in Google Calendar")))));
};
_s(CustomCalendar, "3Vfqh+HJzziF/HKYgZ+sroTFN4Q=");
_c = CustomCalendar;
/* harmony default export */ __webpack_exports__["default"] = (CustomCalendar);
var _c;
$RefreshReg$(_c, "CustomCalendar");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ldmVudHMvQ3VzdG9tQ2FsZW5kYXIuanMiXSwibmFtZXMiOlsiQ3VzdG9tQ2FsZW5kYXIiLCJfcmVmIiwiX3MiLCJfcmVmJGNhbGVuZGFySWQiLCJjYWxlbmRhcklkIiwiX3VzZVN0YXRlIiwidXNlU3RhdGUiLCJzZWxlY3RlZEV2ZW50Iiwic2V0U2VsZWN0ZWRFdmVudCIsIl91c2VTdGF0ZTIiLCJpbml0aWFsVmlldyIsInNldEluaXRpYWxWaWV3IiwidXNlRWZmZWN0IiwiaXNNb2JpbGUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaGFuZGxlRXZlbnRDbGljayIsImluZm8iLCJqc0V2ZW50IiwicHJldmVudERlZmF1bHQiLCJ0aXRsZSIsImV2ZW50Iiwic3RhcnQiLCJlbmQiLCJkZXNjcmlwdGlvbiIsImV4dGVuZGVkUHJvcHMiLCJsb2NhdGlvbiIsInVybCIsImNsb3NlUG9wdXAiLCJmb3JtYXREYXRlIiwiZGF0ZSIsIkludGwiLCJEYXRlVGltZUZvcm1hdCIsIndlZWtkYXkiLCJ5ZWFyIiwibW9udGgiLCJkYXkiLCJob3VyIiwibWludXRlIiwiaG91cjEyIiwiZm9ybWF0IiwiX19qc3giLCJjbGFzc05hbWUiLCJfX3NlbGYiLCJfdGhpcyIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiRnVsbENhbGVuZGFyIiwicGx1Z2lucyIsImRheUdyaWRQbHVnaW4iLCJnb29nbGVDYWxlbmRhclBsdWdpbiIsImludGVyYWN0aW9uUGx1Z2luIiwiZ29vZ2xlQ2FsZW5kYXJBcGlLZXkiLCJldmVudHMiLCJnb29nbGVDYWxlbmRhcklkIiwiaGVhZGVyVG9vbGJhciIsImxlZnQiLCJjZW50ZXIiLCJyaWdodCIsImJ1dHRvblRleHQiLCJ0b2RheSIsIndlZWsiLCJoZWlnaHQiLCJldmVudERpc3BsYXkiLCJkaXNwbGF5RXZlbnRUaW1lIiwiZXZlbnRUaW1lRm9ybWF0IiwibWVyaWRpZW0iLCJldmVudENsaWNrIiwib25DbGljayIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJzcmMiLCJhbHQiLCJocmVmIiwidGFyZ2V0IiwicmVsIiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ0o7QUFDRztBQUNlO0FBQ1A7QUFDNUI7QUFFOUIsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFjQSxDQUFBQyxJQUFBLEVBQWtEO0VBQUFDLEVBQUE7RUFBQSxJQUFBQyxlQUFBLEdBQUFGLElBQUEsQ0FBNUNHLFVBQVU7SUFBVkEsVUFBVSxHQUFBRCxlQUFBLGNBQUcsd0JBQXdCLEdBQUFBLGVBQUE7RUFDM0QsSUFBQUUsU0FBQSxHQUEwQ0Msc0RBQVEsQ0FBQyxJQUFJLENBQUM7SUFBakRDLGFBQWEsR0FBQUYsU0FBQTtJQUFFRyxnQkFBZ0IsR0FBQUgsU0FBQTtFQUN0QyxJQUFBSSxVQUFBLEdBQXNDSCxzREFBUSxDQUFDLElBQUksQ0FBQztJQUE3Q0ksV0FBVyxHQUFBRCxVQUFBO0lBQUVFLGNBQWMsR0FBQUYsVUFBQTtFQUVsQ0csdURBQVMsQ0FBQyxZQUFNO0lBQ1o7SUFDQSxJQUFNQyxRQUFRLEdBQUdDLE1BQU0sQ0FBQ0MsVUFBVSxJQUFJLEdBQUc7SUFDekNKLGNBQWMsQ0FBQ0UsUUFBUSxHQUFHLGFBQWEsR0FBRyxjQUFjLENBQUM7RUFDN0QsQ0FBQyxFQUFFLEVBQUUsQ0FBQztFQUVOLElBQU1HLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBZ0JBLENBQUlDLElBQUksRUFBSztJQUMvQkEsSUFBSSxDQUFDQyxPQUFPLENBQUNDLGNBQWMsQ0FBQyxDQUFDO0lBRTdCWCxnQkFBZ0IsQ0FBQztNQUNiWSxLQUFLLEVBQUVILElBQUksQ0FBQ0ksS0FBSyxDQUFDRCxLQUFLO01BQ3ZCRSxLQUFLLEVBQUVMLElBQUksQ0FBQ0ksS0FBSyxDQUFDQyxLQUFLO01BQ3ZCQyxHQUFHLEVBQUVOLElBQUks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LFlBQUEsQ0FBQUQsRUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZXNvdXJjZXMvcm9vbXJlc2VydmF0aW9ucy43NGViZGZiMDY3Yjk3NjYyMmNkMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBGdWxsQ2FsZW5kYXIgZnJvbSAnQGZ1bGxjYWxlbmRhci9yZWFjdCc7XHJcbmltcG9ydCBkYXlHcmlkUGx1Z2luIGZyb20gJ0BmdWxsY2FsZW5kYXIvZGF5Z3JpZCc7XHJcbmltcG9ydCBnb29nbGVDYWxlbmRhclBsdWdpbiBmcm9tICdAZnVsbGNhbGVuZGFyL2dvb2dsZS1jYWxlbmRhcic7XHJcbmltcG9ydCBpbnRlcmFjdGlvblBsdWdpbiBmcm9tICdAZnVsbGNhbGVuZGFyL2ludGVyYWN0aW9uJztcclxuaW1wb3J0ICcuL0N1c3RvbUNhbGVuZGFyLmNzcyc7XHJcblxyXG5jb25zdCBDdXN0b21DYWxlbmRhciA9ICh7IGNhbGVuZGFySWQgPSAnbWNtc2VjcmV0YXJ5QGdtYWlsLmNvbScgfSkgPT4ge1xyXG4gICAgY29uc3QgW3NlbGVjdGVkRXZlbnQsIHNldFNlbGVjdGVkRXZlbnRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbaW5pdGlhbFZpZXcsIHNldEluaXRpYWxWaWV3XSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIGRldmljZSBpcyBtb2JpbGVcclxuICAgICAgICBjb25zdCBpc01vYmlsZSA9IHdpbmRvdy5pbm5lcldpZHRoIDw9IDc2ODtcclxuICAgICAgICBzZXRJbml0aWFsVmlldyhpc01vYmlsZSA/ICdkYXlHcmlkV2VlaycgOiAnZGF5R3JpZE1vbnRoJyk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlRXZlbnRDbGljayA9IChpbmZvKSA9PiB7XHJcbiAgICAgICAgaW5mby5qc0V2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgc2V0U2VsZWN0ZWRFdmVudCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiBpbmZvLmV2ZW50LnRpdGxlLFxyXG4gICAgICAgICAgICBzdGFydDogaW5mby5ldmVudC5zdGFydCxcclxuICAgICAgICAgICAgZW5kOiBpbmZvLmV2ZW50LmVuZCxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGluZm8uZXZlbnQuZXh0ZW5kZWRQcm9wcy5kZXNjcmlwdGlvbiB8fCAnJyxcclxuICAgICAgICAgICAgbG9jYXRpb246IGluZm8uZXZlbnQuZXh0ZW5kZWRQcm9wcy5sb2NhdGlvbiB8fCAnJyxcclxuICAgICAgICAgICAgdXJsOiBpbmZvLmV2ZW50LnVybFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBjbG9zZVBvcHVwID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFNlbGVjdGVkRXZlbnQobnVsbCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGZvcm1hdERhdGUgPSAoZGF0ZSkgPT4ge1xyXG4gICAgICAgIGlmICghZGF0ZSkgcmV0dXJuICcnO1xyXG4gICAgICAgIHJldHVybiBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCgnZW4tVVMnLCB7XHJcbiAgICAgICAgICAgIHdlZWtkYXk6ICdsb25nJyxcclxuICAgICAgICAgICAgeWVhcjogJ251bWVyaWMnLFxyXG4gICAgICAgICAgICBtb250aDogJ2xvbmcnLFxyXG4gICAgICAgICAgICBkYXk6ICdudW1lcmljJyxcclxuICAgICAgICAgICAgaG91cjogJ251bWVyaWMnLFxyXG4gICAgICAgICAgICBtaW51dGU6ICcyLWRpZ2l0JyxcclxuICAgICAgICAgICAgaG91cjEyOiB0cnVlXHJcbiAgICAgICAgfSkuZm9ybWF0KGRhdGUpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tLWNhbGVuZGFyLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAge2luaXRpYWxWaWV3ICYmIChcclxuICAgICAgICAgICAgICAgIDxGdWxsQ2FsZW5kYXJcclxuICAgICAgICAgICAgICAgICAgICBwbHVnaW5zPXtbZGF5R3JpZFBsdWdpbiwgZ29vZ2xlQ2FsZW5kYXJQbHVnaW4sIGludGVyYWN0aW9uUGx1Z2luXX1cclxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsVmlldz17aW5pdGlhbFZpZXd9XHJcbiAgICAgICAgICAgICAgICAgICAgZ29vZ2xlQ2FsZW5kYXJBcGlLZXk9XCJBSXphU3lCTmxZSDAxXzlIYzVTMUo5dnVGbXUyblVxQlpKTkFYeHNcIlxyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50cz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnb29nbGVDYWxlbmRhcklkOiBjYWxlbmRhcklkXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJUb29sYmFyPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6ICdwcmV2LG5leHQgdG9kYXknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXI6ICd0aXRsZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAnZGF5R3JpZE1vbnRoLGRheUdyaWRXZWVrJ1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uVGV4dD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2RheTogJ1RvZGF5JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9udGg6ICdNb250aCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlZWs6ICdXZWVrJ1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiYXV0b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnREaXNwbGF5PVwiYmxvY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlFdmVudFRpbWU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRUaW1lRm9ybWF0PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvdXI6ICdudW1lcmljJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWludXRlOiAnMi1kaWdpdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lcmlkaWVtOiAnc2hvcnQnXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBldmVudENsaWNrPXtoYW5kbGVFdmVudENsaWNrfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHtzZWxlY3RlZEV2ZW50ICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXZlbnQtcG9wdXAtb3ZlcmxheVwiIG9uQ2xpY2s9e2Nsb3NlUG9wdXB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXZlbnQtcG9wdXBcIiBvbkNsaWNrPXsoZSkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZXZlbnQtcG9wdXAtY2xvc2VcIiBvbkNsaWNrPXtjbG9zZVBvcHVwfT7DlzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImV2ZW50LXBvcHVwLXRpdGxlXCI+e3NlbGVjdGVkRXZlbnQudGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXZlbnQtcG9wdXAtZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJldmVudC1wb3B1cC10aW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2ljb24ubm93LnNoL3NjaGVkdWxlL0ZGRkZGRi8yNFwiIGFsdD1cIlRpbWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxzdHJvbmc+U3RhcnQ6PC9zdHJvbmc+IHtmb3JtYXREYXRlKHNlbGVjdGVkRXZlbnQuc3RhcnQpfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlbGVjdGVkRXZlbnQuZW5kICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxzdHJvbmc+RW5kOjwvc3Ryb25nPiB7Zm9ybWF0RGF0ZShzZWxlY3RlZEV2ZW50LmVuZCl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZEV2ZW50LmxvY2F0aW9uICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV2ZW50LXBvcHVwLWxvY2F0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pY29uLm5vdy5zaC9wbGFjZS9GRkZGRkYvMjRcIiBhbHQ9XCJMb2NhdGlvblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntzZWxlY3RlZEV2ZW50LmxvY2F0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZEV2ZW50LmRlc2NyaXB0aW9uICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV2ZW50LXBvcHVwLWRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pY29uLm5vdy5zaC9kZXNjcmlwdGlvbi9GRkZGRkYvMjRcIiBhbHQ9XCJEZXNjcmlwdGlvblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntzZWxlY3RlZEV2ZW50LmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZEV2ZW50LnVybCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e3NlbGVjdGVkRXZlbnQudXJsfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJldmVudC1wb3B1cC1saW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pY29uLm5vdy5zaC9vcGVuX2luX25ldy9GRkZGRkYvMjBcIiBhbHQ9XCJPcGVuXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmlldyBpbiBHb29nbGUgQ2FsZW5kYXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEN1c3RvbUNhbGVuZGFyO1xyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==