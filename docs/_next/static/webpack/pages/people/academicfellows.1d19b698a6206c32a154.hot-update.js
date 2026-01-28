webpackHotUpdate_N_E("pages/people/academicfellows",{

/***/ "./components/people/fellows/fellows.js":
/*!**********************************************!*\
  !*** ./components/people/fellows/fellows.js ***!
  \**********************************************/
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






var _jsxFileName = "C:\\Users\\anton\\Documents\\Projects\\MurtWebsite\\components\\people\\fellows\\fellows.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _callSuper(t, o, e) { return o = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(o), Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }



var AcademicFellows = /*#__PURE__*/function (_React$Component) {
  function AcademicFellows(props) {
    var _this;
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AcademicFellows);
    _this = _callSuper(this, AcademicFellows, [props]);
    _this.state = {
      activeTab: 'Head Academic Fellows',
      headFellows: [],
      fellows: [],
      isLoading: true
    };
    return _this;
  }
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(AcademicFellows, _React$Component);
  return Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(AcademicFellows, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var data;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return this.fetchFellowsData();
            case 3:
              data = _context.sent;
              this.setState({
                headFellows: data.headFellows,
                fellows: data.fellows,
                isLoading: false
              });
              _context.next = 11;
              break;
            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              console.warn('Failed to fetch Fellows data:', _context.t0);
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
    key: "fetchFellowsData",
    value: function () {
      var _fetchFellowsData = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var publishedId, gid, cacheBuster, url, response, text;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              publishedId = '2PACX-1vQVucTQycbkgZLV37wpbxOVXTTv0rUPdNjeX42jIveWxBUOfXb6RNXAefylw3IESa8hcYOVucPPLAJz';
              gid = '519315703';
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
      function fetchFellowsData() {
        return _fetchFellowsData.apply(this, arguments);
      }
      return fetchFellowsData;
    }()
  }, {
    key: "transformCSVData",
    value: function transformCSVData(csvText) {
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

      // Find Academic Fellows columns by looking at header row
      // Sheet structure: PAAs sections (cols 0-17), then Academic Fellows section
      // Academic Fellows: Head Academic Fellows | Name | Email | Major | Course | Track
      // Then: Academic Fellows | Name | Email | Major | Course | Track
      var headerRow = lines[0] || [];
      var headFellowsStartCol = -1;
      var fellowsStartCol = -1;

      // Find column indices for Head Academic Fellows and Academic Fellows
      for (var i = 0; i < headerRow.length; i++) {
        var header = (headerRow[i] || '').toLowerCase().trim();
        if (header.includes('head academic fellow') || header.includes('head fellow')) {
          headFellowsStartCol = i;
        } else if ((header.includes('academic fellow') || header === 'fellows') && !header.includes('head')) {
          fellowsStartCol = i;
        }
      }
      var headFellows = [];
      var fellows = [];

      // Parse data rows (starting from row 1, after header)
      for (var rowIdx = 1; rowIdx < lines.length; rowIdx++) {
        var row = lines[rowIdx];

        // Parse Head Academic Fellows (columns: Name, Email, Major, Course, Track)
        if (headFellowsStartCol >= 0) {
          var name = (row[headFellowsStartCol] || '').trim();
          if (name) {
            headFellows.push({
              name: name,
              email: (row[headFellowsStartCol + 1] || '').trim(),
              major: (row[headFellowsStartCol + 2] || '').trim(),
              subjects: (row[headFellowsStartCol + 3] || '').trim(),
              pre_prof_path: (row[headFellowsStartCol + 4] || '').trim()
            });
          }
        }

        // Parse Academic Fellows (columns: Name, Email, Major, Course, Track)
        if (fellowsStartCol >= 0) {
          var _name = (row[fellowsStartCol] || '').trim();
          if (_name) {
            fellows.push({
              name: _name,
              email: (row[fellowsStartCol + 1] || '').trim(),
              major: (row[fellowsStartCol + 2] || '').trim(),
              subjects: (row[fellowsStartCol + 3] || '').trim(),
              pre_prof_path: (row[fellowsStartCol + 4] || '').trim()
            });
          }
        }
      }
      return {
        headFellows: headFellows,
        fellows: fellows
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _tabs$find,
        _this2 = this;
      var _this$state = this.state,
        activeTab = _this$state.activeTab,
        headFellows = _this$state.headFellows,
        fellows = _this$state.fellows,
        isLoading = _this$state.isLoading;
      var tabs = [{
        id: 'Head Academic Fellows',
        data: headFellows
      }, {
        id: 'Academic Fellows',
        data: fellows
      }];
      var activeData = ((_tabs$find = tabs.find(function (t) {
        return t.id === activeTab;
      })) === null || _tabs$find === void 0 ? void 0 : _tabs$find.data) || [];
      return __jsx("div", {
        className: "fellows-page",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "fellows-hero",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 17
        }
      }, __jsx("h1", {
        className: "fellows-main-title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 21
        }
      }, "Academic Fellows")), __jsx(rebass__WEBPACK_IMPORTED_MODULE_7__["Box"], {
        width: [1, 0.8, 0.7],
        ml: "auto",
        mr: "auto",
        className: "fellows-description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 17
        }
      }, "Fellows are upperclassmen who were selected based on proven academic achievement and demonstrated willingness to help fellow students. As part of their charge, Fellows provide free academic assistance on a regular basis through advertised review sessions, \"office hours\" in the college commons, and individual tutoring by request."), __jsx("div", {
        className: "fellows-tabs",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 17
        }
      }, tabs.map(function (tab) {
        return __jsx("button", {
          key: tab.id,
          className: "fellows-tab ".concat(activeTab === tab.id ? 'active' : ''),
          onClick: function onClick() {
            return _this2.setState({
              activeTab: tab.id
            });
          },
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 25
          }
        }, tab.id);
      })), isLoading ? __jsx("div", {
        className: "loading-container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "loading-spinner",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 25
        }
      }), __jsx("p", {
        className: "loading-text",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 25
        }
      }, "Loading...")) : __jsx("div", {
        className: "fade-in",
        key: activeTab,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 21
        }
      }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_7__["Box"], {
        width: [0.8, 0.5],
        className: "subtitle",
        ml: "auto",
        mr: "auto",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 25
        }
      }, __jsx("h2", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 29
        }
      }, activeTab)), __jsx("div", {
        style: {
          marginTop: '2%'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 25
        }
      }, __jsx(_general_contactcards__WEBPACK_IMPORTED_MODULE_8__["default"], {
        content: activeData,
        width: 280,
        minHeight: "230px",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 29
        }
      }))));
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);
/* harmony default export */ __webpack_exports__["default"] = (AcademicFellows);

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

/***/ "./components/people/fellows/fellows.json":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wZW9wbGUvZmVsbG93cy9mZWxsb3dzLmpzIl0sIm5hbWVzIjpbIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJlIiwidCIsInIiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJuIiwiaGFzT3duUHJvcGVydHkiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImkiLCJTeW1ib2wiLCJhIiwiaXRlcmF0b3IiLCJjIiwiYXN5bmNJdGVyYXRvciIsInUiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIndyYXAiLCJHZW5lcmF0b3IiLCJjcmVhdGUiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwidHlwZSIsImFyZyIsImNhbGwiLCJoIiwibCIsImYiLCJzIiwieSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJwIiwiZCIsImdldFByb3RvdHlwZU9mIiwidiIsInZhbHVlcyIsImciLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJpbnZva2UiLCJyZXNvbHZlIiwiX19hd2FpdCIsInRoZW4iLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsIkVycm9yIiwiZG9uZSIsIm1ldGhvZCIsImRlbGVnYXRlIiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiVHlwZUVycm9yIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpc05hTiIsImxlbmd0aCIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwia2V5cyIsInJldmVyc2UiLCJwb3AiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicnZhbCIsImhhbmRsZSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwiZGVsZWdhdGVZaWVsZCIsIl9jYWxsU3VwZXIiLCJfZ2V0UHJvdG90eXBlT2YiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJSZWZsZWN0IiwiY29uc3RydWN0IiwiYXBwbHkiLCJCb29sZWFuIiwidmFsdWVPZiIsIkFjYWRlbWljRmVsbG93cyIsIl9SZWFjdCRDb21wb25lbnQiLCJwcm9wcyIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrIiwic3RhdGUiLCJhY3RpdmVUYWIiLCJoZWFkRmVsbG93cyIsImZlbGxvd3MiLCJpc0xvYWRpbmciLCJfaW5oZXJpdHMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJfY29tcG9uZW50RGlkTW91bnQiLCJfYXN5bmNUb0dlbmVyYXRvciIsIl9jYWxsZWUiLCJkYXRhIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsImZldGNoRmVsbG93c0RhdGEiLCJzZXRTdGF0ZSIsInQwIiwiY29uc29sZSIsIndhcm4iLCJjb21wb25lbnREaWRNb3VudCIsImFyZ3VtZW50cyIsIl9mZXRjaEZlbGxvd3NEYXRhIiwiX2NhbGxlZTIiLCJwdWJsaXNoZWRJZCIsImdpZCIsImNhY2hlQnVzdGVyIiwidXJsIiwicmVzcG9uc2UiLCJ0ZXh0IiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwiRGF0ZSIsIm5vdyIsImNvbmNhdCIsImZldGNoIiwidHJhbnNmb3JtQ1NWRGF0YSIsImNzdlRleHQiLCJsaW5lcyIsInNwbGl0IiwibWFwIiwibGluZSIsInJlc3VsdCIsImN1cnJlbnQiLCJpblF1b3RlcyIsImNoYXIiLCJ0cmltIiwiaGVhZGVyUm93IiwiaGVhZEZlbGxvd3NTdGFydENvbCIsImZlbGxvd3NTdGFydENvbCIsImhlYWRlciIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJyb3dJZHgiLCJyb3ciLCJlbWFpbCIsIm1ham9yIiwic3ViamVjdHMiLCJwcmVfcHJvZl9wYXRoIiwicmVuZGVyIiwiX3RhYnMkZmluZCIsIl90aGlzMiIsIl90aGlzJHN0YXRlIiwidGFicyIsImlkIiwiYWN0aXZlRGF0YSIsImZpbmQiLCJfX2pzeCIsImNsYXNzTmFtZSIsIl9fc2VsZiIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiQm94Iiwid2lkdGgiLCJtbCIsIm1yIiwidGFiIiwib25DbGljayIsInN0eWxlIiwibWFyZ2luVG9wIiwiQ29udGFjdENhcmRzIiwiY29udGVudCIsIm1pbkhlaWdodCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7K0NBQ0EscUpBQUFBLG1CQUFBLFlBQUFBLG9CQUFBLFdBQUFDLENBQUEsU0FBQUMsQ0FBQSxFQUFBRCxDQUFBLE9BQUFFLENBQUEsR0FBQUMsTUFBQSxDQUFBQyxTQUFBLEVBQUFDLENBQUEsR0FBQUgsQ0FBQSxDQUFBSSxjQUFBLEVBQUFDLENBQUEsR0FBQUosTUFBQSxDQUFBSyxjQUFBLGNBQUFQLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLElBQUFELENBQUEsQ0FBQUQsQ0FBQSxJQUFBRSxDQUFBLENBQUFPLEtBQUEsS0FBQUMsQ0FBQSx3QkFBQUMsTUFBQSxHQUFBQSxNQUFBLE9BQUFDLENBQUEsR0FBQUYsQ0FBQSxDQUFBRyxRQUFBLGtCQUFBQyxDQUFBLEdBQUFKLENBQUEsQ0FBQUssYUFBQSx1QkFBQUMsQ0FBQSxHQUFBTixDQUFBLENBQUFPLFdBQUEs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QSxHQUM1QlAsS0FBQSxDQUFDZ0IsNkRBQVk7UUFBQ0MsT0FBTyxFQUFFbkIsVUFBVztRQUFDVyxLQUFLLEVBQUUsR0FBSTtRQUFDUyxTQUFTLEVBQUMsT0FBTztRQUFBaEIsTUFBQTtRQUFBQyxRQUFBO1VBQUFDLFFBQUEsRUFBQUMsWUFBQTtVQUFBQyxVQUFBO1VBQUFDLFlBQUE7UUFBQTtNQUFBLENBQUUsQ0FDakUsQ0FDSixDQUVSLENBQUM7SUFFZDtFQUFDO0FBQUEsRUFyS3lCWSw0Q0FBSyxDQUFDQyxTQUFTO0FBd0s5QjNGLDhFQUFlLEVBQUMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGVvcGxlL2FjYWRlbWljZmVsbG93cy4xZDE5YjY5OGE2MjA2YzMyYTE1NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQm94IH0gZnJvbSAncmViYXNzJztcclxuaW1wb3J0IENvbnRhY3RDYXJkcyBmcm9tICcuLi8uLi9nZW5lcmFsL2NvbnRhY3RjYXJkcyc7XHJcblxyXG5jbGFzcyBBY2FkZW1pY0ZlbGxvd3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgYWN0aXZlVGFiOiAnSGVhZCBBY2FkZW1pYyBGZWxsb3dzJyxcclxuICAgICAgICAgICAgaGVhZEZlbGxvd3M6IFtdLFxyXG4gICAgICAgICAgICBmZWxsb3dzOiBbXSxcclxuICAgICAgICAgICAgaXNMb2FkaW5nOiB0cnVlXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5mZXRjaEZlbGxvd3NEYXRhKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgaGVhZEZlbGxvd3M6IGRhdGEuaGVhZEZlbGxvd3MsXHJcbiAgICAgICAgICAgICAgICBmZWxsb3dzOiBkYXRhLmZlbGxvd3MsXHJcbiAgICAgICAgICAgICAgICBpc0xvYWRpbmc6IGZhbHNlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignRmFpbGVkIHRvIGZldGNoIEZlbGxvd3MgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0xvYWRpbmc6IGZhbHNlIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBmZXRjaEZlbGxvd3NEYXRhKCkge1xyXG4gICAgICAgIGNvbnN0IHB1Ymxpc2hlZElkID0gJzJQQUNYLTF2UVZ1Y1RReWNia2daTFYzN3dwYnhPVlhUVHYwclVQZE5qZVg0MmpJdmVXeEJVT2ZYYjZSTlhBZWZ5bHczSUVTYThoY1lPVnVjUFBMQUp6JztcclxuICAgICAgICBjb25zdCBnaWQgPSAnNTE5MzE1NzAzJztcclxuICAgICAgICBjb25zdCBjYWNoZUJ1c3RlciA9IERhdGUubm93KCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHVybCA9IGBodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9zcHJlYWRzaGVldHMvZC9lLyR7cHVibGlzaGVkSWR9L3B1Yj9naWQ9JHtnaWR9JnNpbmdsZT10cnVlJm91dHB1dD1jc3YmXz0ke2NhY2hlQnVzdGVyfWA7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcclxuICAgICAgICBjb25zdCB0ZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy50cmFuc2Zvcm1DU1ZEYXRhKHRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHRyYW5zZm9ybUNTVkRhdGEoY3N2VGV4dCkge1xyXG4gICAgICAgIGNvbnN0IGxpbmVzID0gY3N2VGV4dC5zcGxpdCgnXFxuJykubWFwKGxpbmUgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnQgPSAnJztcclxuICAgICAgICAgICAgbGV0IGluUXVvdGVzID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2hhciA9IGxpbmVbaV07XHJcbiAgICAgICAgICAgICAgICBpZiAoY2hhciA9PT0gJ1wiJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGluUXVvdGVzID0gIWluUXVvdGVzO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjaGFyID09PSAnLCcgJiYgIWluUXVvdGVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goY3VycmVudC50cmltKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnQgPSAnJztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudCArPSBjaGFyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGN1cnJlbnQudHJpbSgpKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gRmluZCBBY2FkZW1pYyBGZWxsb3dzIGNvbHVtbnMgYnkgbG9va2luZyBhdCBoZWFkZXIgcm93XHJcbiAgICAgICAgLy8gU2hlZXQgc3RydWN0dXJlOiBQQUFzIHNlY3Rpb25zIChjb2xzIDAtMTcpLCB0aGVuIEFjYWRlbWljIEZlbGxvd3Mgc2VjdGlvblxyXG4gICAgICAgIC8vIEFjYWRlbWljIEZlbGxvd3M6IEhlYWQgQWNhZGVtaWMgRmVsbG93cyB8IE5hbWUgfCBFbWFpbCB8IE1ham9yIHwgQ291cnNlIHwgVHJhY2tcclxuICAgICAgICAvLyBUaGVuOiBBY2FkZW1pYyBGZWxsb3dzIHwgTmFtZSB8IEVtYWlsIHwgTWFqb3IgfCBDb3Vyc2UgfCBUcmFja1xyXG4gICAgICAgIGNvbnN0IGhlYWRlclJvdyA9IGxpbmVzWzBdIHx8IFtdO1xyXG5cclxuICAgICAgICBsZXQgaGVhZEZlbGxvd3NTdGFydENvbCA9IC0xO1xyXG4gICAgICAgIGxldCBmZWxsb3dzU3RhcnRDb2wgPSAtMTtcclxuXHJcbiAgICAgICAgLy8gRmluZCBjb2x1bW4gaW5kaWNlcyBmb3IgSGVhZCBBY2FkZW1pYyBGZWxsb3dzIGFuZCBBY2FkZW1pYyBGZWxsb3dzXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBoZWFkZXJSb3cubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgaGVhZGVyID0gKGhlYWRlclJvd1tpXSB8fCAnJykudG9Mb3dlckNhc2UoKS50cmltKCk7XHJcbiAgICAgICAgICAgIGlmIChoZWFkZXIuaW5jbHVkZXMoJ2hlYWQgYWNhZGVtaWMgZmVsbG93JykgfHwgaGVhZGVyLmluY2x1ZGVzKCdoZWFkIGZlbGxvdycpKSB7XHJcbiAgICAgICAgICAgICAgICBoZWFkRmVsbG93c1N0YXJ0Q29sID0gaTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICgoaGVhZGVyLmluY2x1ZGVzKCdhY2FkZW1pYyBmZWxsb3cnKSB8fCBoZWFkZXIgPT09ICdmZWxsb3dzJykgJiYgIWhlYWRlci5pbmNsdWRlcygnaGVhZCcpKSB7XHJcbiAgICAgICAgICAgICAgICBmZWxsb3dzU3RhcnRDb2wgPSBpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBoZWFkRmVsbG93cyA9IFtdO1xyXG4gICAgICAgIGNvbnN0IGZlbGxvd3MgPSBbXTtcclxuXHJcbiAgICAgICAgLy8gUGFyc2UgZGF0YSByb3dzIChzdGFydGluZyBmcm9tIHJvdyAxLCBhZnRlciBoZWFkZXIpXHJcbiAgICAgICAgZm9yIChsZXQgcm93SWR4ID0gMTsgcm93SWR4IDwgbGluZXMubGVuZ3RoOyByb3dJZHgrKykge1xyXG4gICAgICAgICAgICBjb25zdCByb3cgPSBsaW5lc1tyb3dJZHhdO1xyXG5cclxuICAgICAgICAgICAgLy8gUGFyc2UgSGVhZCBBY2FkZW1pYyBGZWxsb3dzIChjb2x1bW5zOiBOYW1lLCBFbWFpbCwgTWFqb3IsIENvdXJzZSwgVHJhY2spXHJcbiAgICAgICAgICAgIGlmIChoZWFkRmVsbG93c1N0YXJ0Q29sID49IDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSAocm93W2hlYWRGZWxsb3dzU3RhcnRDb2xdIHx8ICcnKS50cmltKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAobmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRGZWxsb3dzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbWFpbDogKHJvd1toZWFkRmVsbG93c1N0YXJ0Q29sICsgMV0gfHwgJycpLnRyaW0oKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFqb3I6IChyb3dbaGVhZEZlbGxvd3NTdGFydENvbCArIDJdIHx8ICcnKS50cmltKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YmplY3RzOiAocm93W2hlYWRGZWxsb3dzU3RhcnRDb2wgKyAzXSB8fCAnJykudHJpbSgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVfcHJvZl9wYXRoOiAocm93W2hlYWRGZWxsb3dzU3RhcnRDb2wgKyA0XSB8fCAnJykudHJpbSgpXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIFBhcnNlIEFjYWRlbWljIEZlbGxvd3MgKGNvbHVtbnM6IE5hbWUsIEVtYWlsLCBNYWpvciwgQ291cnNlLCBUcmFjaylcclxuICAgICAgICAgICAgaWYgKGZlbGxvd3NTdGFydENvbCA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gKHJvd1tmZWxsb3dzU3RhcnRDb2xdIHx8ICcnKS50cmltKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAobmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZlbGxvd3MucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiAocm93W2ZlbGxvd3NTdGFydENvbCArIDFdIHx8ICcnKS50cmltKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ham9yOiAocm93W2ZlbGxvd3NTdGFydENvbCArIDJdIHx8ICcnKS50cmltKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YmplY3RzOiAocm93W2ZlbGxvd3NTdGFydENvbCArIDNdIHx8ICcnKS50cmltKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZV9wcm9mX3BhdGg6IChyb3dbZmVsbG93c1N0YXJ0Q29sICsgNF0gfHwgJycpLnRyaW0oKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4geyBoZWFkRmVsbG93cywgZmVsbG93cyB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGFjdGl2ZVRhYiwgaGVhZEZlbGxvd3MsIGZlbGxvd3MsIGlzTG9hZGluZyB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAgICAgY29uc3QgdGFicyA9IFtcclxuICAgICAgICAgICAgeyBpZDogJ0hlYWQgQWNhZGVtaWMgRmVsbG93cycsIGRhdGE6IGhlYWRGZWxsb3dzIH0sXHJcbiAgICAgICAgICAgIHsgaWQ6ICdBY2FkZW1pYyBGZWxsb3dzJywgZGF0YTogZmVsbG93cyB9XHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgY29uc3QgYWN0aXZlRGF0YSA9IHRhYnMuZmluZCh0ID0+IHQuaWQgPT09IGFjdGl2ZVRhYik/LmRhdGEgfHwgW107XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmZWxsb3dzLXBhZ2UnPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZlbGxvd3MtaGVybyc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0nZmVsbG93cy1tYWluLXRpdGxlJz5BY2FkZW1pYyBGZWxsb3dzPC9oMT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxCb3ggd2lkdGg9e1sxLCAwLjgsIDAuN119IG1sPSdhdXRvJyBtcj0nYXV0bycgY2xhc3NOYW1lPSdmZWxsb3dzLWRlc2NyaXB0aW9uJz5cclxuICAgICAgICAgICAgICAgICAgICBGZWxsb3dzIGFyZSB1cHBlcmNsYXNzbWVuIHdobyB3ZXJlIHNlbGVjdGVkIGJhc2VkIG9uIHByb3ZlbiBhY2FkZW1pYyBhY2hpZXZlbWVudCBhbmQgZGVtb25zdHJhdGVkIHdpbGxpbmduZXNzIHRvIGhlbHAgZmVsbG93IHN0dWRlbnRzLiBBcyBwYXJ0IG9mIHRoZWlyIGNoYXJnZSwgRmVsbG93cyBwcm92aWRlIGZyZWUgYWNhZGVtaWMgYXNzaXN0YW5jZSBvbiBhIHJlZ3VsYXIgYmFzaXMgdGhyb3VnaCBhZHZlcnRpc2VkIHJldmlldyBzZXNzaW9ucywgXCJvZmZpY2UgaG91cnNcIiBpbiB0aGUgY29sbGVnZSBjb21tb25zLCBhbmQgaW5kaXZpZHVhbCB0dXRvcmluZyBieSByZXF1ZXN0LlxyXG4gICAgICAgICAgICAgICAgPC9Cb3g+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZlbGxvd3MtdGFicyc+XHJcbiAgICAgICAgICAgICAgICAgICAge3RhYnMubWFwKHRhYiA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17dGFiLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmVsbG93cy10YWIgJHthY3RpdmVUYWIgPT09IHRhYi5pZCA/ICdhY3RpdmUnIDogJyd9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBhY3RpdmVUYWI6IHRhYi5pZCB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhYi5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7aXNMb2FkaW5nID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZy1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nLXNwaW5uZXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibG9hZGluZy10ZXh0XCI+TG9hZGluZy4uLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZhZGUtaW4nIGtleT17YWN0aXZlVGFifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJveCB3aWR0aD17WzAuOCwgMC41XX0gY2xhc3NOYW1lPSdzdWJ0aXRsZScgbWw9J2F1dG8nIG1yPSdhdXRvJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj57YWN0aXZlVGFifTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogJzIlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250YWN0Q2FyZHMgY29udGVudD17YWN0aXZlRGF0YX0gd2lkdGg9ezI4MH0gbWluSGVpZ2h0PVwiMjMwcHhcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFjYWRlbWljRmVsbG93cztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==