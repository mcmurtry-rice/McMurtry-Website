webpackHotUpdate_N_E("pages/people/court",{

/***/ "./components/people/court/court.js":
/*!******************************************!*\
  !*** ./components/people/court/court.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.js");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _general_contactcards__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../general/contactcards */ "./components/general/contactcards.js");






var _jsxFileName = "C:\\Users\\anton\\Documents\\Projects\\MurtWebsite\\components\\people\\court\\court.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _callSuper(t, o, e) { return o = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(o), Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }



var Court = /*#__PURE__*/function (_React$Component) {
  function Court(props) {
    var _this;
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Court);
    _this = _callSuper(this, Court, [props]);
    _this.state = {
      activeTab: 'Chief Justices',
      justices: [],
      isLoading: true
    };
    return _this;
  }
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Court, _React$Component);
  return Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Court, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var justices;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return this.fetchCourtData();
            case 3:
              justices = _context.sent;
              this.setState({
                justices: justices,
                isLoading: false
              });
              _context.next = 11;
              break;
            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              console.warn('Failed to fetch court data:', _context.t0);
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
    key: "fetchCourtData",
    value: function () {
      var _fetchCourtData = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var publishedId, gid, cacheBuster, url, response, text;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              // Use the published spreadsheet URL
              publishedId = '2PACX-1vQVucTQycbkgZLV37wpbxOVXTTv0rUPdNjeX42jIveWxBUOfXb6RNXAefylw3IESa8hcYOVucPPLAJz';
              gid = '1aborvW0Tu5Bg4EWpqHvgLXgZLK88xVhvvKX1bvqSfgE'; // Mccourt sheet - need to get correct gid
              cacheBuster = Date.now(); // Try to get the Mccourt sheet
              url = "https://docs.google.com/spreadsheets/d/e/".concat(publishedId, "/pub?gid=1647498975&single=true&output=csv&_=").concat(cacheBuster);
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
      function fetchCourtData() {
        return _fetchCourtData.apply(this, arguments);
      }
      return fetchCourtData;
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
      var justices = [];

      // Sheet structure:
      // Row 1: McMurtry Court header
      // Row 2: Chief Justice (CJ) | Email | Room | Associate Justices (AJs) | Email | Room
      // Row 3+: Data

      // Parse Chief Justices (column A=0, B=1 email, C=2 room)
      for (var rowIdx = 2; rowIdx < lines.length; rowIdx++) {
        var row = lines[rowIdx];
        var name = row[0];
        if (name) {
          justices.push({
            position: 'Chief Justice',
            name: name.trim(),
            email: (row[1] || '').trim(),
            room: (row[2] || '').trim()
          });
        }
      }

      // Parse Associate Justices (column D=3, E=4 email, F=5 room)
      for (var _rowIdx = 2; _rowIdx < lines.length; _rowIdx++) {
        var _row = lines[_rowIdx];
        var _name = _row[3];
        if (_name) {
          justices.push({
            position: 'Associate Justice',
            name: _name.trim(),
            email: (_row[4] || '').trim(),
            room: (_row[5] || '').trim()
          });
        }
      }
      return justices;
    }
  }, {
    key: "render",
    value: function render() {
      var _tabs$find,
        _this2 = this;
      var _this$state = this.state,
        activeTab = _this$state.activeTab,
        justices = _this$state.justices,
        isLoading = _this$state.isLoading;
      var chiefs = justices.filter(function (justice) {
        return justice.position === "Chief Justice";
      });
      var associates = justices.filter(function (justice) {
        return justice.position === "Associate Justice";
      });
      var tabs = [{
        id: 'Chief Justices',
        data: chiefs
      }, {
        id: 'Associate Justices',
        data: associates
      }];
      var activeData = ((_tabs$find = tabs.find(function (t) {
        return t.id === activeTab;
      })) === null || _tabs$find === void 0 ? void 0 : _tabs$find.data) || [];
      return __jsx("div", {
        className: "court-page",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "court-hero",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 9
        }
      }, __jsx("h1", {
        className: "court-main-title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 11
        }
      }, "McCourt")), __jsx("div", {
        className: "court-tabs",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 9
        }
      }, tabs.map(function (tab) {
        return __jsx("button", {
          key: tab.id,
          className: "court-tab ".concat(activeTab === tab.id ? 'active' : ''),
          onClick: function onClick() {
            return _this2.setState({
              activeTab: tab.id
            });
          },
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 13
          }
        }, tab.id);
      })), isLoading ? __jsx("div", {
        className: "loading-container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "loading-spinner",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 13
        }
      }), __jsx("p", {
        className: "loading-text",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 13
        }
      }, "Loading...")) : __jsx("div", {
        className: "fade-in",
        key: activeTab,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 11
        }
      }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_7__["Box"], {
        width: [330],
        ml: "auto",
        mr: "auto",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 13
        }
      }, __jsx("h2", {
        className: "division-title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 15
        }
      }, activeTab)), __jsx(_general_contactcards__WEBPACK_IMPORTED_MODULE_8__["default"], {
        content: activeData,
        width: [270],
        minHeight: "160px",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 13
        }
      })));
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);
/* harmony default export */ __webpack_exports__["default"] = (Court);

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

/***/ "./components/people/court/court.json":
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wZW9wbGUvY291cnQvY291cnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hc3luY1RvR2VuZXJhdG9yLmpzIl0sIm5hbWVzIjpbIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJlIiwidCIsInIiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJuIiwiaGFzT3duUHJvcGVydHkiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImkiLCJTeW1ib2wiLCJhIiwiaXRlcmF0b3IiLCJjIiwiYXN5bmNJdGVyYXRvciIsInUiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIndyYXAiLCJHZW5lcmF0b3IiLCJjcmVhdGUiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwidHlwZSIsImFyZyIsImNhbGwiLCJoIiwibCIsImYiLCJzIiwieSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJwIiwiZCIsImdldFByb3RvdHlwZU9mIiwidiIsInZhbHVlcyIsImciLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJpbnZva2UiLCJyZXNvbHZlIiwiX19hd2FpdCIsInRoZW4iLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsIkVycm9yIiwiZG9uZSIsIm1ldGhvZCIsImRlbGVnYXRlIiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiVHlwZUVycm9yIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpc05hTiIsImxlbmd0aCIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwia2V5cyIsInJldmVyc2UiLCJwb3AiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicnZhbCIsImhhbmRsZSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwiZGVsZWdhdGVZaWVsZCIsIl9jYWxsU3VwZXIiLCJfZ2V0UHJvdG90eXBlT2YiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJSZWZsZWN0IiwiY29uc3RydWN0IiwiYXBwbHkiLCJCb29sZWFuIiwidmFsdWVPZiIsIkNvdXJ0IiwiX1JlYWN0JENvbXBvbmVudCIsInByb3BzIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2siLCJzdGF0ZSIsImFjdGl2ZVRhYiIsImp1c3RpY2VzIiwiaXNMb2FkaW5nIiwiX2luaGVyaXRzIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwiX2NvbXBvbmVudERpZE1vdW50IiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJfY2FsbGVlIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsImZldGNoQ291cnREYXRhIiwic2V0U3RhdGUiLCJ0MCIsImNvbnNvbGUiLCJ3YXJuIiwiY29tcG9uZW50RGlkTW91bnQiLCJhcmd1bWVudHMiLCJfZmV0Y2hDb3VydERhdGEiLCJfY2FsbGVlMiIsInB1Ymxpc2hlZElkIiwiZ2lkIiwiY2FjaGVCdXN0ZXIiLCJ1cmwiLCJyZXNwb25zZSIsInRleHQiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJEYXRlIiwibm93IiwiY29uY2F0IiwiZmV0Y2giLCJ0cmFuc2Zvcm1DU1ZEYXRhIiwiY3N2VGV4dCIsImxpbmVzIiwic3BsaXQiLCJtYXAiLCJsaW5lIiwicmVzdWx0IiwiY3VycmVudCIsImluUXVvdGVzIiwiY2hhciIsInRyaW0iLCJyb3dJZHgiLCJyb3ciLCJwb3NpdGlvbiIsImVtYWlsIiwicm9vbSIsInJlbmRlciIsIl90YWJzJGZpbmQiLCJfdGhpczIiLCJfdGhpcyRzdGF0ZSIsImNoaWVmcyIsImZpbHRlciIsImp1c3RpY2UiLCJhc3NvY2lhdGVzIiwidGFicyIsImlkIiwiZGF0YSIsImFjdGl2ZURhdGEiLCJmaW5kIiwiX19qc3giLCJjbGFzc05hbWUiLCJfX3NlbGYiLCJfX3NvdXJjZSIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsInRhYiIsIm9uQ2xpY2siLCJCb3giLCJ3aWR0aCIsIm1sIiwibXIiLCJDYXJkcyIsImNvbnRlbnQiLCJtaW5IZWlnaHQiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OytDQUNBLHFKQUFBQSxtQkFBQSxZQUFBQSxvQkFBQSxXQUFBQyxDQUFBLFNBQUFDLENBQUEsRUFBQUQsQ0FBQSxPQUFBRSxDQUFBLEdBQUFDLE1BQUEsQ0FBQUMsU0FBQSxFQUFBQyxDQUFBLEdBQUFILENBQUEsQ0FBQUksY0FBQSxFQUFBQyxDQUFBLEdBQUFKLE1BQUEsQ0FBQUssY0FBQSxjQUFBUCxDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxJQUFBRCxDQUFBLENBQUFELENBQUEsSUFBQUUsQ0FBQSxDQUFBTyxLQUFBLEtBQUFDLENBQUEsd0JBQUFDLE1BQUEsR0FBQUEsTUFBQSxPQUFBQyxDQUFBLEdBQUFGLENBQUEsQ0FBQUcsUUFBQSxrQkFBQUMsQ0FBQSxHQUFBSixDQUFBLENBQUFLLGFBQUEsdUJBQUFDLENBQUEsR0FBQU4sQ0FBQSxDQUFBTyxXQUFBLDhCQUFBQyxPQUFBakIsQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEs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QUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wZW9wbGUvY291cnQuMWQzYTdhMTcxNzEzZGNkYWQyM2MuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQm94IH0gZnJvbSBcInJlYmFzc1wiO1xyXG5pbXBvcnQgQ2FyZHMgZnJvbSBcIi4uLy4uL2dlbmVyYWwvY29udGFjdGNhcmRzXCI7XHJcblxyXG5jbGFzcyBDb3VydCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGFjdGl2ZVRhYjogJ0NoaWVmIEp1c3RpY2VzJyxcclxuICAgICAganVzdGljZXM6IFtdLFxyXG4gICAgICBpc0xvYWRpbmc6IHRydWVcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGp1c3RpY2VzID0gYXdhaXQgdGhpcy5mZXRjaENvdXJ0RGF0YSgpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsganVzdGljZXMsIGlzTG9hZGluZzogZmFsc2UgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLndhcm4oJ0ZhaWxlZCB0byBmZXRjaCBjb3VydCBkYXRhOicsIGVycm9yKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzTG9hZGluZzogZmFsc2UgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyBmZXRjaENvdXJ0RGF0YSgpIHtcclxuICAgIC8vIFVzZSB0aGUgcHVibGlzaGVkIHNwcmVhZHNoZWV0IFVSTFxyXG4gICAgY29uc3QgcHVibGlzaGVkSWQgPSAnMlBBQ1gtMXZRVnVjVFF5Y2JrZ1pMVjM3d3BieE9WWFRUdjByVVBkTmplWDQyakl2ZVd4QlVPZlhiNlJOWEFlZnlsdzNJRVNhOGhjWU9WdWNQUExBSnonO1xyXG4gICAgY29uc3QgZ2lkID0gJzFhYm9ydlcwVHU1Qmc0RVdwcUh2Z0xYZ1pMSzg4eFZodnZLWDFidnFTZmdFJzsgLy8gTWNjb3VydCBzaGVldCAtIG5lZWQgdG8gZ2V0IGNvcnJlY3QgZ2lkXHJcbiAgICBjb25zdCBjYWNoZUJ1c3RlciA9IERhdGUubm93KCk7XHJcblxyXG4gICAgLy8gVHJ5IHRvIGdldCB0aGUgTWNjb3VydCBzaGVldFxyXG4gICAgY29uc3QgdXJsID0gYGh0dHBzOi8vZG9jcy5nb29nbGUuY29tL3NwcmVhZHNoZWV0cy9kL2UvJHtwdWJsaXNoZWRJZH0vcHViP2dpZD0xNjQ3NDk4OTc1JnNpbmdsZT10cnVlJm91dHB1dD1jc3YmXz0ke2NhY2hlQnVzdGVyfWA7XHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gICAgY29uc3QgdGV4dCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy50cmFuc2Zvcm1DU1ZEYXRhKHRleHQpO1xyXG4gIH1cclxuXHJcbiAgdHJhbnNmb3JtQ1NWRGF0YShjc3ZUZXh0KSB7XHJcbiAgICAvLyBQYXJzZSBDU1ZcclxuICAgIGNvbnN0IGxpbmVzID0gY3N2VGV4dC5zcGxpdCgnXFxuJykubWFwKGxpbmUgPT4ge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBbXTtcclxuICAgICAgbGV0IGN1cnJlbnQgPSAnJztcclxuICAgICAgbGV0IGluUXVvdGVzID0gZmFsc2U7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGNoYXIgPSBsaW5lW2ldO1xyXG4gICAgICAgIGlmIChjaGFyID09PSAnXCInKSB7XHJcbiAgICAgICAgICBpblF1b3RlcyA9ICFpblF1b3RlcztcclxuICAgICAgICB9IGVsc2UgaWYgKGNoYXIgPT09ICcsJyAmJiAhaW5RdW90ZXMpIHtcclxuICAgICAgICAgIHJlc3VsdC5wdXNoKGN1cnJlbnQudHJpbSgpKTtcclxuICAgICAgICAgIGN1cnJlbnQgPSAnJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY3VycmVudCArPSBjaGFyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXN1bHQucHVzaChjdXJyZW50LnRyaW0oKSk7XHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBqdXN0aWNlcyA9IFtdO1xyXG5cclxuICAgIC8vIFNoZWV0IHN0cnVjdHVyZTpcclxuICAgIC8vIFJvdyAxOiBNY011cnRyeSBDb3VydCBoZWFkZXJcclxuICAgIC8vIFJvdyAyOiBDaGllZiBKdXN0aWNlIChDSikgfCBFbWFpbCB8IFJvb20gfCBBc3NvY2lhdGUgSnVzdGljZXMgKEFKcykgfCBFbWFpbCB8IFJvb21cclxuICAgIC8vIFJvdyAzKzogRGF0YVxyXG5cclxuICAgIC8vIFBhcnNlIENoaWVmIEp1c3RpY2VzIChjb2x1bW4gQT0wLCBCPTEgZW1haWwsIEM9MiByb29tKVxyXG4gICAgZm9yIChsZXQgcm93SWR4ID0gMjsgcm93SWR4IDwgbGluZXMubGVuZ3RoOyByb3dJZHgrKykge1xyXG4gICAgICBjb25zdCByb3cgPSBsaW5lc1tyb3dJZHhdO1xyXG4gICAgICBjb25zdCBuYW1lID0gcm93WzBdO1xyXG4gICAgICBpZiAobmFtZSkge1xyXG4gICAgICAgIGp1c3RpY2VzLnB1c2goe1xyXG4gICAgICAgICAgcG9zaXRpb246ICdDaGllZiBKdXN0aWNlJyxcclxuICAgICAgICAgIG5hbWU6IG5hbWUudHJpbSgpLFxyXG4gICAgICAgICAgZW1haWw6IChyb3dbMV0gfHwgJycpLnRyaW0oKSxcclxuICAgICAgICAgIHJvb206IChyb3dbMl0gfHwgJycpLnRyaW0oKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUGFyc2UgQXNzb2NpYXRlIEp1c3RpY2VzIChjb2x1bW4gRD0zLCBFPTQgZW1haWwsIEY9NSByb29tKVxyXG4gICAgZm9yIChsZXQgcm93SWR4ID0gMjsgcm93SWR4IDwgbGluZXMubGVuZ3RoOyByb3dJZHgrKykge1xyXG4gICAgICBjb25zdCByb3cgPSBsaW5lc1tyb3dJZHhdO1xyXG4gICAgICBjb25zdCBuYW1lID0gcm93WzNdO1xyXG4gICAgICBpZiAobmFtZSkge1xyXG4gICAgICAgIGp1c3RpY2VzLnB1c2goe1xyXG4gICAgICAgICAgcG9zaXRpb246ICdBc3NvY2lhdGUgSnVzdGljZScsXHJcbiAgICAgICAgICBuYW1lOiBuYW1lLnRyaW0oKSxcclxuICAgICAgICAgIGVtYWlsOiAocm93WzRdIHx8ICcnKS50cmltKCksXHJcbiAgICAgICAgICByb29tOiAocm93WzVdIHx8ICcnKS50cmltKClcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBqdXN0aWNlcztcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgYWN0aXZlVGFiLCBqdXN0aWNlcywgaXNMb2FkaW5nIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgIGNvbnN0IGNoaWVmcyA9IGp1c3RpY2VzLmZpbHRlcigoanVzdGljZSkgPT4ganVzdGljZS5wb3NpdGlvbiA9PT0gXCJDaGllZiBKdXN0aWNlXCIpO1xyXG4gICAgY29uc3QgYXNzb2NpYXRlcyA9IGp1c3RpY2VzLmZpbHRlcigoanVzdGljZSkgPT4ganVzdGljZS5wb3NpdGlvbiA9PT0gXCJBc3NvY2lhdGUgSnVzdGljZVwiKTtcclxuXHJcbiAgICBjb25zdCB0YWJzID0gW1xyXG4gICAgICB7IGlkOiAnQ2hpZWYgSnVzdGljZXMnLCBkYXRhOiBjaGllZnMgfSxcclxuICAgICAgeyBpZDogJ0Fzc29jaWF0ZSBKdXN0aWNlcycsIGRhdGE6IGFzc29jaWF0ZXMgfVxyXG4gICAgXTtcclxuXHJcbiAgICBjb25zdCBhY3RpdmVEYXRhID0gdGFicy5maW5kKHQgPT4gdC5pZCA9PT0gYWN0aXZlVGFiKT8uZGF0YSB8fCBbXTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdXJ0LXBhZ2VcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY291cnQtaGVybyc+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdjb3VydC1tYWluLXRpdGxlJz5NY0NvdXJ0PC9oMT5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvdXJ0LXRhYnMnPlxyXG4gICAgICAgICAge3RhYnMubWFwKHRhYiA9PiAoXHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBrZXk9e3RhYi5pZH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bjb3VydC10YWIgJHthY3RpdmVUYWIgPT09IHRhYi5pZCA/ICdhY3RpdmUnIDogJyd9YH1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgYWN0aXZlVGFiOiB0YWIuaWQgfSl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7dGFiLmlkfVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7aXNMb2FkaW5nID8gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmctc3Bpbm5lclwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsb2FkaW5nLXRleHRcIj5Mb2FkaW5nLi4uPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmYWRlLWluJyBrZXk9e2FjdGl2ZVRhYn0+XHJcbiAgICAgICAgICAgIDxCb3ggd2lkdGg9e1szMzBdfSBtbD1cImF1dG9cIiBtcj1cImF1dG9cIj5cclxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZGl2aXNpb24tdGl0bGVcIj57YWN0aXZlVGFifTwvaDI+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8Q2FyZHMgY29udGVudD17YWN0aXZlRGF0YX0gd2lkdGg9e1syNzBdfSBtaW5IZWlnaHQ9XCIxNjBweFwiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb3VydDtcclxuIiwiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59Il0sInNvdXJjZVJvb3QiOiIifQ==