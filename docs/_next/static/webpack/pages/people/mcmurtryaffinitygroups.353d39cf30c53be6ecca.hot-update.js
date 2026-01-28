webpackHotUpdate_N_E("pages/people/mcmurtryaffinitygroups",{

/***/ "./components/people/mcmurtryaffinitygroups/mcmurtryaffinitygroups.js":
/*!****************************************************************************!*\
  !*** ./components/people/mcmurtryaffinitygroups/mcmurtryaffinitygroups.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return McMurtryAffinityGroups; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.js");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _general_contactcards__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../general/contactcards */ "./components/general/contactcards.js");







var _jsxFileName = "C:\\Users\\anton\\Documents\\Projects\\MurtWebsite\\components\\people\\mcmurtryaffinitygroups\\mcmurtryaffinitygroups.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _callSuper(t, o, e) { return o = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(o), Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }



var McMurtryAffinityGroups = /*#__PURE__*/function (_React$Component) {
  function McMurtryAffinityGroups(props) {
    var _this;
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, McMurtryAffinityGroups);
    _this = _callSuper(this, McMurtryAffinityGroups, [props]);
    _this.state = {
      affinityGroups: [],
      isLoading: true
    };
    return _this;
  }
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(McMurtryAffinityGroups, _React$Component);
  return Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(McMurtryAffinityGroups, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var groups;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return this.fetchAffinityData();
            case 3:
              groups = _context.sent;
              this.setState({
                affinityGroups: groups,
                isLoading: false
              });
              _context.next = 11;
              break;
            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              console.warn('Failed to fetch affinity groups data:', _context.t0);
              this.setState({
                isLoading: false
              });
            case 11:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[0, 7]]);
      }));
      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }
      return componentDidMount;
    }()
  }, {
    key: "fetchAffinityData",
    value: function () {
      var _fetchAffinityData = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var publishedId, gid, cacheBuster, url, response, text;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              publishedId = '2PACX-1vQVucTQycbkgZLV37wpbxOVXTTv0rUPdNjeX42jIveWxBUOfXb6RNXAefylw3IESa8hcYOVucPPLAJz';
              gid = '521639587'; // Affinity Groups sheet
              cacheBuster = Date.now();
              url = "https://docs.google.com/spreadsheets/d/e/".concat(publishedId, "/pub?gid=").concat(gid, "&single=true&output=csv&_=").concat(cacheBuster);
              _context2.next = 6;
              return fetch(url);
            case 6:
              response = _context2.sent;
              _context2.next = 9;
              return response.text();
            case 9:
              text = _context2.sent;
              return _context2.abrupt("return", this.transformCSVData(text));
            case 11:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function fetchAffinityData() {
        return _fetchAffinityData.apply(this, arguments);
      }
      return fetchAffinityData;
    }()
  }, {
    key: "transformCSVData",
    value: function transformCSVData(csvText) {
      // Parse CSV
      var lines = csvText.split('\n').map(function (line) {
        var result = [];
        var current = '';
        var inQuotes = false;
        for (var i = 0; i < line.length; i++) {
          var _char = line[i];
          if (_char === '"') {
            inQuotes = !inQuotes;
          } else if (_char === ',' && !inQuotes) {
            result.push(current.trim());
            current = '';
          } else {
            current += _char;
          }
        }
        result.push(current.trim());
        return result;
      });

      // Sheet structure:
      // Row 1: "Diversity Council (DC)" header
      // Row 2: Group names with Email columns - Black Caucus | Email | East Asian | Email | ...
      // Row 3+: Member names and emails

      var headerRow = lines[1] || [];
      var groups = {};

      // Map sheet names to display titles
      var groupTitleMapping = {
        'Black Caucus': 'Black Caucus',
        'East Asian': 'East Asian',
        'FGLI': 'First Gen / Low Income',
        'Jewish': 'Jewish',
        'Latine': 'Latine',
        'LGBTQ+': 'LGBTQ+',
        'South Asian': 'South Asian'
      };

      // Find group columns (columns that are not "Email" and have a value)
      for (var col = 0; col < headerRow.length; col++) {
        var header = headerRow[col];
        if (header && header !== 'Email') {
          var title = groupTitleMapping[header] || header;
          groups[col] = {
            title: title,
            members: []
          };
        }
      }

      // Parse members from row 3+ (index 2+)
      for (var rowIdx = 2; rowIdx < lines.length; rowIdx++) {
        var row = lines[rowIdx];
        for (var _i = 0, _Object$entries = Object.entries(groups); _i < _Object$entries.length; _i++) {
          var _Object$entries$_i = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_Object$entries[_i], 2),
            colStr = _Object$entries$_i[0],
            group = _Object$entries$_i[1];
          var _col = parseInt(colStr);
          var name = (row[_col] || '').trim();
          if (name) {
            var email = (row[_col + 1] || '').trim();
            group.members.push({
              name: name,
              email: email
            });
          }
        }
      }

      // Convert to array and sort by title
      var groupOrder = ['Black Caucus', 'East Asian', 'First Gen / Low Income', 'Jewish', 'Latine', 'LGBTQ+', 'South Asian'];
      return Object.values(groups).filter(function (g) {
        return g.members.length > 0;
      }).sort(function (a, b) {
        var aIdx = groupOrder.indexOf(a.title);
        var bIdx = groupOrder.indexOf(b.title);
        if (aIdx === -1 && bIdx === -1) return a.title.localeCompare(b.title);
        if (aIdx === -1) return 1;
        if (bIdx === -1) return -1;
        return aIdx - bIdx;
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$state = this.state,
        affinityGroups = _this$state.affinityGroups,
        isLoading = _this$state.isLoading;
      return __jsx("div", {
        className: "mcmurtry-affinity-groups-page",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "affinity-hero",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 9
        }
      }, __jsx("h1", {
        className: "affinity-main-title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 11
        }
      }, "McMurtry Affinity Groups")), __jsx(rebass__WEBPACK_IMPORTED_MODULE_8__["Box"], {
        width: [0.8, 0.5],
        ml: "auto",
        mr: "auto",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 9
        }
      }, __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 11
        }
      }, "Affinity Groups at McMurtry, as extensions of the Diversity Council, aim to foster a sense of community among certain student populations including LGBTQ+, Black, Latinx, Jewish, and First-Gen/Low Income. These groups will be hosting movie nights, game nights, and other events throughout the semester in order to support and encourage connections in these groups. If you identify with one or more of these groups, we highly encourage you to join the group chats, meet new Murts and participate in any upcoming events!"), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 11
        }
      }, "Each Affinity group has a designated liaison who acts as a bridge between the group and the Diversity Council. These are some really cool Murts who will be hosting events and activities for you all to enjoy. If you have any questions about a specific group, please feel free to reach out to the associated liaison or any member in the Diversity Council."), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 11
        }
      }, "If you are interested in joining one of the affinity groups, please reach out to the affinity group heads listed below")), isLoading ? __jsx("div", {
        className: "loading-container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "loading-spinner",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 13
        }
      }), __jsx("p", {
        className: "loading-text",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 13
        }
      }, "Loading...")) : affinityGroups.map(function (group) {
        return __jsx("div", {
          key: group.title,
          className: "fade-in",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 13
          }
        }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_8__["Box"], {
          width: 320,
          ml: "auto",
          mr: "auto",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 153,
            columnNumber: 15
          }
        }, __jsx("h1", {
          className: "affinity-group-title",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 154,
            columnNumber: 17
          }
        }, group.title)), __jsx(_general_contactcards__WEBPACK_IMPORTED_MODULE_9__["default"], {
          content: group.members,
          width: 280,
          minHeight: "180px",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 156,
            columnNumber: 15
          }
        }));
      }));
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);


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

/***/ }),

/***/ "./components/people/mcmurtryaffinitygroups/mcmurtryaffinitygroups.json":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wZW9wbGUvbWNtdXJ0cnlhZmZpbml0eWdyb3Vwcy9tY211cnRyeWFmZmluaXR5Z3JvdXBzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXN5bmNUb0dlbmVyYXRvci5qcyJdLCJuYW1lcyI6WyJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZSIsInQiLCJyIiwiT2JqZWN0IiwicHJvdG90eXBlIiwibiIsImhhc093blByb3BlcnR5IiwibyIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJpIiwiU3ltYm9sIiwiYSIsIml0ZXJhdG9yIiwiYyIsImFzeW5jSXRlcmF0b3IiLCJ1IiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ3cmFwIiwiR2VuZXJhdG9yIiwiY3JlYXRlIiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsInR5cGUiLCJhcmciLCJjYWxsIiwiaCIsImwiLCJmIiwicyIsInkiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwicCIsImQiLCJnZXRQcm90b3R5cGVPZiIsInYiLCJ2YWx1ZXMiLCJnIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiaW52b2tlIiwicmVzb2x2ZSIsIl9fYXdhaXQiLCJ0aGVuIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJFcnJvciIsImRvbmUiLCJtZXRob2QiLCJkZWxlZ2F0ZSIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsIlR5cGVFcnJvciIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXNOYU4iLCJsZW5ndGgiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsImtleXMiLCJyZXZlcnNlIiwicG9wIiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJ2YWwiLCJoYW5kbGUiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsImRlbGVnYXRlWWllbGQiLCJfY2FsbFN1cGVyIiwiX2dldFByb3RvdHlwZU9mIiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4iLCJfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IiwiUmVmbGVjdCIsImNvbnN0cnVjdCIsImFwcGx5IiwiQm9vbGVhbiIsInZhbHVlT2YiLCJNY011cnRyeUFmZmluaXR5R3JvdXBzIiwiX1JlYWN0JENvbXBvbmVudCIsInByb3BzIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2siLCJzdGF0ZSIsImFmZmluaXR5R3JvdXBzIiwiaXNMb2FkaW5nIiwiX2luaGVyaXRzIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwiX2NvbXBvbmVudERpZE1vdW50IiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJfY2FsbGVlIiwiZ3JvdXBzIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsImZldGNoQWZmaW5pdHlEYXRhIiwic2V0U3RhdGUiLCJ0MCIsImNvbnNvbGUiLCJ3YXJuIiwiY29tcG9uZW50RGlkTW91bnQiLCJhcmd1bWVudHMiLCJfZmV0Y2hBZmZpbml0eURhdGEiLCJfY2FsbGVlMiIsInB1Ymxpc2hlZElkIiwiZ2lkIiwiY2FjaGVCdXN0ZXIiLCJ1cmwiLCJyZXNwb25zZSIsInRleHQiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJEYXRlIiwibm93IiwiY29uY2F0IiwiZmV0Y2giLCJ0cmFuc2Zvcm1DU1ZEYXRhIiwiY3N2VGV4dCIsImxpbmVzIiwic3BsaXQiLCJtYXAiLCJsaW5lIiwicmVzdWx0IiwiY3VycmVudCIsImluUXVvdGVzIiwiY2hhciIsInRyaW0iLCJoZWFkZXJSb3ciLCJncm91cFRpdGxlTWFwcGluZyIsImNvbCIsImhlYWRlciIsInRpdGxlIiwibWVtYmVycyIsInJvd0lkeCIsInJvdyIsIl9pIiwiX09iamVjdCRlbnRyaWVzIiwiZW50cmllcyIsIl9PYmplY3QkZW50cmllcyRfaSIsIl9zbGljZWRUb0FycmF5IiwiY29sU3RyIiwiZ3JvdXAiLCJwYXJzZUludCIsImVtYWlsIiwiZ3JvdXBPcmRlciIsImZpbHRlciIsInNvcnQiLCJiIiwiYUlkeCIsImluZGV4T2YiLCJiSWR4IiwibG9jYWxlQ29tcGFyZSIsInJlbmRlciIsIl90aGlzMiIsIl90aGlzJHN0YXRlIiwiX19qc3giLCJjbGFzc05hbWUiLCJfX3NlbGYiLCJfX3NvdXJjZSIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsIkJveCIsIndpZHRoIiwibWwiLCJtciIsIkNvbnRhY3RDYXJkcyIsImNvbnRlbnQiLCJtaW5IZWlnaHQiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OytDQUNBLHFKQUFBQSxtQkFBQSxZQUFBQSxvQkFBQSxXQUFBQyxDQUFBLFNBQUFDLENBQUEsRUFBQUQsQ0FBQSxPQUFBRSxDQUFBLEdBQUFDLE1BQUEsQ0FBQUMsU0FBQSxFQUFBQyxDQUFBLEdBQUFILENBQUEsQ0FBQUksY0FBQSxFQUFBQyxDQUFBLEdBQUFKLE1BQUEsQ0FBQUssY0FBQSxjQUFBUCxDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxJQUFBRCxDQUFBLENBQUFELENBQUEsSUFBQUUsQ0FBQSxDQUFBTyxL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RUFBRSxFQUFDLE1BQU07VUFBQ0MsRUFBRSxFQUFDLE1BQU07VUFBQVQsTUFBQSxFQUFBSixNQUFBO1VBQUFLLFFBQUE7WUFBQUMsUUFBQSxFQUFBQyxZQUFBO1lBQUFDLFVBQUE7WUFBQUMsWUFBQTtVQUFBO1FBQUEsR0FDbENQLEtBQUE7VUFBSUMsU0FBUyxFQUFDLHNCQUFzQjtVQUFBQyxNQUFBLEVBQUFKLE1BQUE7VUFBQUssUUFBQTtZQUFBQyxRQUFBLEVBQUFDLFlBQUE7WUFBQUMsVUFBQTtZQUFBQyxZQUFBO1VBQUE7UUFBQSxHQUFFckIsS0FBSyxDQUFDVixLQUFVLENBQ25ELENBQUMsRUFDTndCLEtBQUEsQ0FBQ1ksNkRBQVk7VUFBQ0MsT0FBTyxFQUFFM0IsS0FBSyxDQUFDVCxPQUFRO1VBQUNnQyxLQUFLLEVBQUUsR0FBSTtVQUFDSyxTQUFTLEVBQUMsT0FBTztVQUFBWixNQUFBLEVBQUFKLE1BQUE7VUFBQUssUUFBQTtZQUFBQyxRQUFBLEVBQUFDLFlBQUE7WUFBQUMsVUFBQTtZQUFBQyxZQUFBO1VBQUE7UUFBQSxDQUFFLENBQ2xFLENBQUM7TUFBQSxDQUNQLENBRUEsQ0FBQztJQUVWO0VBQUM7QUFBQSxFQTdKaURRLDRDQUFLLENBQUNDLFNBQVM7QUFBeEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ozQztBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wZW9wbGUvbWNtdXJ0cnlhZmZpbml0eWdyb3Vwcy4zNTNkMzljZjMwYzUzYmU2ZWNjYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCb3ggfSBmcm9tIFwicmViYXNzXCI7XHJcbmltcG9ydCBDb250YWN0Q2FyZHMgZnJvbSBcIi4uLy4uL2dlbmVyYWwvY29udGFjdGNhcmRzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNY011cnRyeUFmZmluaXR5R3JvdXBzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgYWZmaW5pdHlHcm91cHM6IFtdLFxyXG4gICAgICBpc0xvYWRpbmc6IHRydWVcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGdyb3VwcyA9IGF3YWl0IHRoaXMuZmV0Y2hBZmZpbml0eURhdGEoKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFmZmluaXR5R3JvdXBzOiBncm91cHMsIGlzTG9hZGluZzogZmFsc2UgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLndhcm4oJ0ZhaWxlZCB0byBmZXRjaCBhZmZpbml0eSBncm91cHMgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0xvYWRpbmc6IGZhbHNlIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZmV0Y2hBZmZpbml0eURhdGEoKSB7XHJcbiAgICBjb25zdCBwdWJsaXNoZWRJZCA9ICcyUEFDWC0xdlFWdWNUUXljYmtnWkxWMzd3cGJ4T1ZYVFR2MHJVUGROamVYNDJqSXZlV3hCVU9mWGI2Uk5YQWVmeWx3M0lFU2E4aGNZT1Z1Y1BQTEFKeic7XHJcbiAgICBjb25zdCBnaWQgPSAnNTIxNjM5NTg3JzsgLy8gQWZmaW5pdHkgR3JvdXBzIHNoZWV0XHJcbiAgICBjb25zdCBjYWNoZUJ1c3RlciA9IERhdGUubm93KCk7XHJcblxyXG4gICAgY29uc3QgdXJsID0gYGh0dHBzOi8vZG9jcy5nb29nbGUuY29tL3NwcmVhZHNoZWV0cy9kL2UvJHtwdWJsaXNoZWRJZH0vcHViP2dpZD0ke2dpZH0mc2luZ2xlPXRydWUmb3V0cHV0PWNzdiZfPSR7Y2FjaGVCdXN0ZXJ9YDtcclxuXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XHJcbiAgICBjb25zdCB0ZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybUNTVkRhdGEodGV4dCk7XHJcbiAgfVxyXG5cclxuICB0cmFuc2Zvcm1DU1ZEYXRhKGNzdlRleHQpIHtcclxuICAgIC8vIFBhcnNlIENTVlxyXG4gICAgY29uc3QgbGluZXMgPSBjc3ZUZXh0LnNwbGl0KCdcXG4nKS5tYXAobGluZSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xyXG4gICAgICBsZXQgY3VycmVudCA9ICcnO1xyXG4gICAgICBsZXQgaW5RdW90ZXMgPSBmYWxzZTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgY2hhciA9IGxpbmVbaV07XHJcbiAgICAgICAgaWYgKGNoYXIgPT09ICdcIicpIHtcclxuICAgICAgICAgIGluUXVvdGVzID0gIWluUXVvdGVzO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY2hhciA9PT0gJywnICYmICFpblF1b3Rlcykge1xyXG4gICAgICAgICAgcmVzdWx0LnB1c2goY3VycmVudC50cmltKCkpO1xyXG4gICAgICAgICAgY3VycmVudCA9ICcnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjdXJyZW50ICs9IGNoYXI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJlc3VsdC5wdXNoKGN1cnJlbnQudHJpbSgpKTtcclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFNoZWV0IHN0cnVjdHVyZTpcclxuICAgIC8vIFJvdyAxOiBcIkRpdmVyc2l0eSBDb3VuY2lsIChEQylcIiBoZWFkZXJcclxuICAgIC8vIFJvdyAyOiBHcm91cCBuYW1lcyB3aXRoIEVtYWlsIGNvbHVtbnMgLSBCbGFjayBDYXVjdXMgfCBFbWFpbCB8IEVhc3QgQXNpYW4gfCBFbWFpbCB8IC4uLlxyXG4gICAgLy8gUm93IDMrOiBNZW1iZXIgbmFtZXMgYW5kIGVtYWlsc1xyXG5cclxuICAgIGNvbnN0IGhlYWRlclJvdyA9IGxpbmVzWzFdIHx8IFtdO1xyXG4gICAgY29uc3QgZ3JvdXBzID0ge307XHJcblxyXG4gICAgLy8gTWFwIHNoZWV0IG5hbWVzIHRvIGRpc3BsYXkgdGl0bGVzXHJcbiAgICBjb25zdCBncm91cFRpdGxlTWFwcGluZyA9IHtcclxuICAgICAgJ0JsYWNrIENhdWN1cyc6ICdCbGFjayBDYXVjdXMnLFxyXG4gICAgICAnRWFzdCBBc2lhbic6ICdFYXN0IEFzaWFuJyxcclxuICAgICAgJ0ZHTEknOiAnRmlyc3QgR2VuIC8gTG93IEluY29tZScsXHJcbiAgICAgICdKZXdpc2gnOiAnSmV3aXNoJyxcclxuICAgICAgJ0xhdGluZSc6ICdMYXRpbmUnLFxyXG4gICAgICAnTEdCVFErJzogJ0xHQlRRKycsXHJcbiAgICAgICdTb3V0aCBBc2lhbic6ICdTb3V0aCBBc2lhbidcclxuICAgIH07XHJcblxyXG4gICAgLy8gRmluZCBncm91cCBjb2x1bW5zIChjb2x1bW5zIHRoYXQgYXJlIG5vdCBcIkVtYWlsXCIgYW5kIGhhdmUgYSB2YWx1ZSlcclxuICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IGhlYWRlclJvdy5sZW5ndGg7IGNvbCsrKSB7XHJcbiAgICAgIGNvbnN0IGhlYWRlciA9IGhlYWRlclJvd1tjb2xdO1xyXG4gICAgICBpZiAoaGVhZGVyICYmIGhlYWRlciAhPT0gJ0VtYWlsJykge1xyXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZ3JvdXBUaXRsZU1hcHBpbmdbaGVhZGVyXSB8fCBoZWFkZXI7XHJcbiAgICAgICAgZ3JvdXBzW2NvbF0gPSB7IHRpdGxlLCBtZW1iZXJzOiBbXSB9O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUGFyc2UgbWVtYmVycyBmcm9tIHJvdyAzKyAoaW5kZXggMispXHJcbiAgICBmb3IgKGxldCByb3dJZHggPSAyOyByb3dJZHggPCBsaW5lcy5sZW5ndGg7IHJvd0lkeCsrKSB7XHJcbiAgICAgIGNvbnN0IHJvdyA9IGxpbmVzW3Jvd0lkeF07XHJcbiAgICAgIGZvciAoY29uc3QgW2NvbFN0ciwgZ3JvdXBdIG9mIE9iamVjdC5lbnRyaWVzKGdyb3VwcykpIHtcclxuICAgICAgICBjb25zdCBjb2wgPSBwYXJzZUludChjb2xTdHIpO1xyXG4gICAgICAgIGNvbnN0IG5hbWUgPSAocm93W2NvbF0gfHwgJycpLnRyaW0oKTtcclxuICAgICAgICBpZiAobmFtZSkge1xyXG4gICAgICAgICAgY29uc3QgZW1haWwgPSAocm93W2NvbCArIDFdIHx8ICcnKS50cmltKCk7XHJcbiAgICAgICAgICBncm91cC5tZW1iZXJzLnB1c2goeyBuYW1lLCBlbWFpbCB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBDb252ZXJ0IHRvIGFycmF5IGFuZCBzb3J0IGJ5IHRpdGxlXHJcbiAgICBjb25zdCBncm91cE9yZGVyID0gWydCbGFjayBDYXVjdXMnLCAnRWFzdCBBc2lhbicsICdGaXJzdCBHZW4gLyBMb3cgSW5jb21lJywgJ0pld2lzaCcsICdMYXRpbmUnLCAnTEdCVFErJywgJ1NvdXRoIEFzaWFuJ107XHJcbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhncm91cHMpXHJcbiAgICAgIC5maWx0ZXIoZyA9PiBnLm1lbWJlcnMubGVuZ3RoID4gMClcclxuICAgICAgLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICBjb25zdCBhSWR4ID0gZ3JvdXBPcmRlci5pbmRleE9mKGEudGl0bGUpO1xyXG4gICAgICAgIGNvbnN0IGJJZHggPSBncm91cE9yZGVyLmluZGV4T2YoYi50aXRsZSk7XHJcbiAgICAgICAgaWYgKGFJZHggPT09IC0xICYmIGJJZHggPT09IC0xKSByZXR1cm4gYS50aXRsZS5sb2NhbGVDb21wYXJlKGIudGl0bGUpO1xyXG4gICAgICAgIGlmIChhSWR4ID09PSAtMSkgcmV0dXJuIDE7XHJcbiAgICAgICAgaWYgKGJJZHggPT09IC0xKSByZXR1cm4gLTE7XHJcbiAgICAgICAgcmV0dXJuIGFJZHggLSBiSWR4O1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgYWZmaW5pdHlHcm91cHMsIGlzTG9hZGluZyB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1jbXVydHJ5LWFmZmluaXR5LWdyb3Vwcy1wYWdlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FmZmluaXR5LWhlcm8nPlxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT0nYWZmaW5pdHktbWFpbi10aXRsZSc+TWNNdXJ0cnkgQWZmaW5pdHkgR3JvdXBzPC9oMT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Qm94IHdpZHRoPXtbMC44LCAwLjVdfSBtbD1cImF1dG9cIiBtcj1cImF1dG9cIj5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICBBZmZpbml0eSBHcm91cHMgYXQgTWNNdXJ0cnksIGFzIGV4dGVuc2lvbnMgb2YgdGhlIERpdmVyc2l0eSBDb3VuY2lsLFxyXG4gICAgICAgICAgICBhaW0gdG8gZm9zdGVyIGEgc2Vuc2Ugb2YgY29tbXVuaXR5IGFtb25nIGNlcnRhaW4gc3R1ZGVudCBwb3B1bGF0aW9uc1xyXG4gICAgICAgICAgICBpbmNsdWRpbmcgTEdCVFErLCBCbGFjaywgTGF0aW54LCBKZXdpc2gsIGFuZCBGaXJzdC1HZW4vTG93IEluY29tZS5cclxuICAgICAgICAgICAgVGhlc2UgZ3JvdXBzIHdpbGwgYmUgaG9zdGluZyBtb3ZpZSBuaWdodHMsIGdhbWUgbmlnaHRzLCBhbmQgb3RoZXJcclxuICAgICAgICAgICAgZXZlbnRzIHRocm91Z2hvdXQgdGhlIHNlbWVzdGVyIGluIG9yZGVyIHRvIHN1cHBvcnQgYW5kIGVuY291cmFnZVxyXG4gICAgICAgICAgICBjb25uZWN0aW9ucyBpbiB0aGVzZSBncm91cHMuIElmIHlvdSBpZGVudGlmeSB3aXRoIG9uZSBvciBtb3JlIG9mXHJcbiAgICAgICAgICAgIHRoZXNlIGdyb3Vwcywgd2UgaGlnaGx5IGVuY291cmFnZSB5b3UgdG8gam9pbiB0aGUgZ3JvdXAgY2hhdHMsIG1lZXRcclxuICAgICAgICAgICAgbmV3IE11cnRzIGFuZCBwYXJ0aWNpcGF0ZSBpbiBhbnkgdXBjb21pbmcgZXZlbnRzIVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIEVhY2ggQWZmaW5pdHkgZ3JvdXAgaGFzIGEgZGVzaWduYXRlZCBsaWFpc29uIHdobyBhY3RzIGFzIGEgYnJpZGdlXHJcbiAgICAgICAgICAgIGJldHdlZW4gdGhlIGdyb3VwIGFuZCB0aGUgRGl2ZXJzaXR5IENvdW5jaWwuIFRoZXNlIGFyZSBzb21lIHJlYWxseVxyXG4gICAgICAgICAgICBjb29sIE11cnRzIHdobyB3aWxsIGJlIGhvc3RpbmcgZXZlbnRzIGFuZCBhY3Rpdml0aWVzIGZvciB5b3UgYWxsIHRvXHJcbiAgICAgICAgICAgIGVuam95LiBJZiB5b3UgaGF2ZSBhbnkgcXVlc3Rpb25zIGFib3V0IGEgc3BlY2lmaWMgZ3JvdXAsIHBsZWFzZSBmZWVsXHJcbiAgICAgICAgICAgIGZyZWUgdG8gcmVhY2ggb3V0IHRvIHRoZSBhc3NvY2lhdGVkIGxpYWlzb24gb3IgYW55IG1lbWJlciBpbiB0aGVcclxuICAgICAgICAgICAgRGl2ZXJzaXR5IENvdW5jaWwuXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgSWYgeW91IGFyZSBpbnRlcmVzdGVkIGluIGpvaW5pbmcgb25lIG9mIHRoZSBhZmZpbml0eSBncm91cHMsIHBsZWFzZVxyXG4gICAgICAgICAgICByZWFjaCBvdXQgdG8gdGhlIGFmZmluaXR5IGdyb3VwIGhlYWRzIGxpc3RlZCBiZWxvd1xyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICAgIHtpc0xvYWRpbmcgPyAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmctY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZy1zcGlubmVyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxvYWRpbmctdGV4dFwiPkxvYWRpbmcuLi48L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgYWZmaW5pdHlHcm91cHMubWFwKChncm91cCkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2IGtleT17Z3JvdXAudGl0bGV9IGNsYXNzTmFtZT1cImZhZGUtaW5cIj5cclxuICAgICAgICAgICAgICA8Qm94IHdpZHRoPXszMjB9IG1sPVwiYXV0b1wiIG1yPVwiYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImFmZmluaXR5LWdyb3VwLXRpdGxlXCI+e2dyb3VwLnRpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgPENvbnRhY3RDYXJkcyBjb250ZW50PXtncm91cC5tZW1iZXJzfSB3aWR0aD17MjgwfSBtaW5IZWlnaHQ9XCIxODBweFwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSlcclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgdHJ5IHtcbiAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZWplY3QoZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpbmZvLmRvbmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcblxuICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuXG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufSJdLCJzb3VyY2VSb290IjoiIn0=