webpackHotUpdate_N_E("pages/people/mcministry",{

/***/ "./components/people/mcministry/mcministry.js":
/*!****************************************************!*\
  !*** ./components/people/mcministry/mcministry.js ***!
  \****************************************************/
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






var _jsxFileName = "C:\\Users\\anton\\Documents\\Projects\\MurtWebsite\\components\\people\\mcministry\\mcministry.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _callSuper(t, o, e) { return o = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(o), Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }



var McMinistry = /*#__PURE__*/function (_React$Component) {
  function McMinistry(props) {
    var _this;
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, McMinistry);
    _this = _callSuper(this, McMinistry, [props]);
    _this.state = {
      activeTab: 'Executive Council',
      executive_council: [],
      mccabinet: [],
      peoples_council: [],
      isLoading: true
    };
    return _this;
  }
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(McMinistry, _React$Component);
  return Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(McMinistry, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var data;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return this.fetchMinistryData();
            case 3:
              data = _context.sent;
              this.setState({
                executive_council: data.executive_council,
                mccabinet: data.mccabinet,
                peoples_council: data.peoples_council,
                isLoading: false
              });
              _context.next = 11;
              break;
            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              console.warn('Failed to fetch ministry data:', _context.t0);
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
    key: "fetchMinistryData",
    value: function () {
      var _fetchMinistryData = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var publishedId, gid, cacheBuster, url, response, text;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              publishedId = '2PACX-1vQVucTQycbkgZLV37wpbxOVXTTv0rUPdNjeX42jIveWxBUOfXb6RNXAefylw3IESa8hcYOVucPPLAJz';
              gid = '405858748'; // McMinistry sheet
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
      function fetchMinistryData() {
        return _fetchMinistryData.apply(this, arguments);
      }
      return fetchMinistryData;
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
      var executive_council = [];
      var peoples_council = [];

      // Sheet structure:
      // Row 1: "Executive Council (EC)🌟" header | empty cols | "People's Council (PC)" header
      // Row 2: Position headers - each position followed by Email, Year columns
      // Row 3+: Data - multiple rows can have names under each position

      // Get the header row (row 2, index 1) to find position names
      var headerRow = lines[1] || [];

      // Find where People's Council starts by looking for "People's Council" in row 1
      var row1 = lines[0] || [];
      var pcStartCol = -1;
      for (var i = 0; i < row1.length; i++) {
        if (row1[i] && row1[i].includes("People's Council")) {
          pcStartCol = i;
          break;
        }
      }

      // Find all position columns (columns that are not "Email" or "Year" and have a value)
      var ecPositions = []; // { col: number, name: string }
      var pcPositions = [];
      for (var col = 0; col < headerRow.length; col++) {
        var header = headerRow[col];
        if (header && header !== 'Email' && header !== 'Year') {
          var positionInfo = {
            col: col,
            name: header.replace(/\s*\([^)]*\)\s*/g, '').trim()
          };
          if (pcStartCol !== -1 && col >= pcStartCol) {
            pcPositions.push(positionInfo);
          } else {
            ecPositions.push(positionInfo);
          }
        }
      }

      // Parse EC positions
      for (var _i = 0, _ecPositions = ecPositions; _i < _ecPositions.length; _i++) {
        var pos = _ecPositions[_i];
        for (var rowIdx = 2; rowIdx < lines.length; rowIdx++) {
          var row = lines[rowIdx];
          var name = (row[pos.col] || '').trim();
          if (name) {
            executive_council.push({
              position: pos.name,
              name: name,
              email: (row[pos.col + 1] || '').trim(),
              year: (row[pos.col + 2] || '').trim()
            });
          }
        }
      }

      // Parse PC positions
      for (var _i2 = 0, _pcPositions = pcPositions; _i2 < _pcPositions.length; _i2++) {
        var _pos = _pcPositions[_i2];
        for (var _rowIdx = 2; _rowIdx < lines.length; _rowIdx++) {
          var _row = lines[_rowIdx];
          var _name = (_row[_pos.col] || '').trim();
          if (_name) {
            peoples_council.push({
              position: _pos.name,
              name: _name,
              email: (_row[_pos.col + 1] || '').trim(),
              year: (_row[_pos.col + 2] || '').trim()
            });
          }
        }
      }

      // McCabinet is empty for now (Parliamentarian moved to EC)
      var mccabinet = [];
      return {
        executive_council: executive_council,
        mccabinet: mccabinet,
        peoples_council: peoples_council
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _tabs$find,
        _this2 = this;
      var _this$state = this.state,
        activeTab = _this$state.activeTab,
        executive_council = _this$state.executive_council,
        mccabinet = _this$state.mccabinet,
        peoples_council = _this$state.peoples_council,
        isLoading = _this$state.isLoading;
      var tabs = [{
        id: 'Executive Council',
        data: executive_council
      }, {
        id: 'McCabinet',
        data: mccabinet
      }, {
        id: "People's Council",
        data: peoples_council
      }];
      var activeData = ((_tabs$find = tabs.find(function (t) {
        return t.id === activeTab;
      })) === null || _tabs$find === void 0 ? void 0 : _tabs$find.data) || [];
      return __jsx("div", {
        className: "mcministry-page",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "mcministry-hero",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 17
        }
      }, __jsx("h1", {
        className: "mcministry-main-title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 21
        }
      }, "McMinistry")), __jsx("div", {
        className: "mcministry-tabs",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 17
        }
      }, tabs.map(function (tab) {
        return __jsx("button", {
          key: tab.id,
          className: "ministry-tab ".concat(activeTab === tab.id ? 'active' : ''),
          onClick: function onClick() {
            return _this2.setState({
              activeTab: tab.id
            });
          },
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 160,
            columnNumber: 25
          }
        }, tab.id);
      })), isLoading ? __jsx("div", {
        className: "loading-container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "loading-spinner",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 25
        }
      }), __jsx("p", {
        className: "loading-text",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 25
        }
      }, "Loading...")) : __jsx("div", {
        className: "fade-in",
        key: activeTab,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 21
        }
      }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_7__["Box"], {
        width: [330],
        ml: "auto",
        mr: "auto",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 25
        }
      }, __jsx("h2", {
        className: "division-title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 29
        }
      }, activeTab)), __jsx(_general_contactcards__WEBPACK_IMPORTED_MODULE_8__["default"], {
        content: activeData,
        width: [270],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 25
        }
      })));
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);
/* harmony default export */ __webpack_exports__["default"] = (McMinistry);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wZW9wbGUvbWNtaW5pc3RyeS9tY21pbmlzdHJ5LmpzIl0sIm5hbWVzIjpbIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJlIiwidCIsInIiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJuIiwiaGFzT3duUHJvcGVydHkiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImkiLCJTeW1ib2wiLCJhIiwiaXRlcmF0b3IiLCJjIiwiYXN5bmNJdGVyYXRvciIsInUiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIndyYXAiLCJHZW5lcmF0b3IiLCJjcmVhdGUiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwidHlwZSIsImFyZyIsImNhbGwiLCJoIiwibCIsImYiLCJzIiwieSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJwIiwiZCIsImdldFByb3RvdHlwZU9mIiwidiIsInZhbHVlcyIsImciLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJpbnZva2UiLCJyZXNvbHZlIiwiX19hd2FpdCIsInRoZW4iLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsIkVycm9yIiwiZG9uZSIsIm1ldGhvZCIsImRlbGVnYXRlIiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiVHlwZUVycm9yIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpc05hTiIsImxlbmd0aCIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwia2V5cyIsInJldmVyc2UiLCJwb3AiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicnZhbCIsImhhbmRsZSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwiZGVsZWdhdGVZaWVsZCIsIl9jYWxsU3VwZXIiLCJfZ2V0UHJvdG90eXBlT2YiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJSZWZsZWN0IiwiY29uc3RydWN0IiwiYXBwbHkiLCJCb29sZWFuIiwidmFsdWVPZiIsIk1jTWluaXN0cnkiLCJfUmVhY3QkQ29tcG9uZW50IiwicHJvcHMiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjayIsInN0YXRlIiwiYWN0aXZlVGFiIiwiZXhlY3V0aXZlX2NvdW5jaWwiLCJtY2NhYmluZXQiLCJwZW9wbGVzX2NvdW5jaWwiLCJpc0xvYWRpbmciLCJfaW5oZXJpdHMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJfY29tcG9uZW50RGlkTW91bnQiLCJfYXN5bmNUb0dlbmVyYXRvciIsIl9jYWxsZWUiLCJkYXRhIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsImZldGNoTWluaXN0cnlEYXRhIiwic2V0U3RhdGUiLCJ0MCIsImNvbnNvbGUiLCJ3YXJuIiwiY29tcG9uZW50RGlkTW91bnQiLCJhcmd1bWVudHMiLCJfZmV0Y2hNaW5pc3RyeURhdGEiLCJfY2FsbGVlMiIsInB1Ymxpc2hlZElkIiwiZ2lkIiwiY2FjaGVCdXN0ZXIiLCJ1cmwiLCJyZXNwb25zZSIsInRleHQiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJEYXRlIiwibm93IiwiY29uY2F0IiwiZmV0Y2giLCJ0cmFuc2Zvcm1DU1ZEYXRhIiwiY3N2VGV4dCIsImxpbmVzIiwic3BsaXQiLCJtYXAiLCJsaW5lIiwicmVzdWx0IiwiY3VycmVudCIsImluUXVvdGVzIiwiY2hhciIsInRyaW0iLCJoZWFkZXJSb3ciLCJyb3cxIiwicGNTdGFydENvbCIsImluY2x1ZGVzIiwiZWNQb3NpdGlvbnMiLCJwY1Bvc2l0aW9ucyIsImNvbCIsImhlYWRlciIsInBvc2l0aW9uSW5mbyIsInJlcGxhY2UiLCJfaSIsIl9lY1Bvc2l0aW9ucyIsInBvcyIsInJvd0lkeCIsInJvdyIsInBvc2l0aW9uIiwiZW1haWwiLCJ5ZWFyIiwiX2kyIiwiX3BjUG9zaXRpb25zIiwicmVuZGVyIiwiX3RhYnMkZmluZCIsIl90aGlzMiIsIl90aGlzJHN0YXRlIiwidGFicyIsImlkIiwiYWN0aXZlRGF0YSIsImZpbmQiLCJfX2pzeCIsImNsYXNzTmFtZSIsIl9fc2VsZiIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwidGFiIiwib25DbGljayIsIkJveCIsIndpZHRoIiwibWwiLCJtciIsIkNhcmRzIiwiY29udGVudCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7K0NBQ0EscUpBQUFBLG1CQUFBLFlBQUFBLG9CQUFBLFdBQUFDLENBQUEsU0FBQUMsQ0FBQSxFQUFBRCxDQUFBLE9BQUFFLENBQUEsR0FBQUMsTUFBQSxDQUFBQyxTQUFBLEVBQUFDLENBQUEsR0FBQUgsQ0FBQSxDQUFBSSxjQUFBLEVBQUFDLENBQUEsR0FBQUosTUFBQSxDQUFBSyxjQUFBLGNBQUFQLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLElBQUFELENBQUEsQ0FBQUQsQ0FBQSxJQUFBRSxDQUFBLENBQUFPLEtBQUEsS0FBQUMsQ0FBQSx3QkFBQUMsTUFBQSxHQUFBQSxNQUFBLE9BQUFDLENBQUEsR0FBQUYsQ0FBQSxDQUFBRyxRQUFBLGtCQUFBQyxDQUFBLEdBQUFKLENBQUEs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UCxTQUFVO1FBQUE0RSxNQUFBO1FBQUFDLFFBQUE7VUFBQUMsUUFBQSxFQUFBQyxZQUFBO1VBQUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBO01BQUEsR0FDcENQLEtBQUEsQ0FBQ1UsMENBQUc7UUFBQ0MsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFFO1FBQUNDLEVBQUUsRUFBQyxNQUFNO1FBQUNDLEVBQUUsRUFBQyxNQUFNO1FBQUFYLE1BQUE7UUFBQUMsUUFBQTtVQUFBQyxRQUFBLEVBQUFDLFlBQUE7VUFBQUMsVUFBQTtVQUFBQyxZQUFBO1FBQUE7TUFBQSxHQUNsQ1AsS0FBQTtRQUFJQyxTQUFTLEVBQUMsZ0JBQWdCO1FBQUFDLE1BQUE7UUFBQUMsUUFBQTtVQUFBQyxRQUFBLEVBQUFDLFlBQUE7VUFBQUMsVUFBQTtVQUFBQyxZQUFBO1FBQUE7TUFBQSxHQUFFakYsU0FBYyxDQUM3QyxDQUFDLEVBQ04wRSxLQUFBLENBQUNjLDZEQUFLO1FBQUNDLE9BQU8sRUFBRWpCLFVBQVc7UUFBQ2EsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFFO1FBQUFULE1BQUE7UUFBQUMsUUFBQTtVQUFBQyxRQUFBLEVBQUFDLFlBQUE7VUFBQUMsVUFBQTtVQUFBQyxZQUFBO1FBQUE7TUFBQSxDQUFFLENBQzFDLENBRVIsQ0FBQztJQUVkO0VBQUM7QUFBQSxFQXBMb0JTLDRDQUFLLENBQUNDLFNBQVM7QUF1THpCakcseUVBQVUsRUFBQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wZW9wbGUvbWNtaW5pc3RyeS5jMzRiMDU3ODQ2MjQ3YzQ0ZGZmZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQm94IH0gZnJvbSAncmViYXNzJztcclxuaW1wb3J0IENhcmRzIGZyb20gJy4uLy4uL2dlbmVyYWwvY29udGFjdGNhcmRzJztcclxuXHJcbmNsYXNzIE1jTWluaXN0cnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgYWN0aXZlVGFiOiAnRXhlY3V0aXZlIENvdW5jaWwnLFxyXG4gICAgICAgICAgICBleGVjdXRpdmVfY291bmNpbDogW10sXHJcbiAgICAgICAgICAgIG1jY2FiaW5ldDogW10sXHJcbiAgICAgICAgICAgIHBlb3BsZXNfY291bmNpbDogW10sXHJcbiAgICAgICAgICAgIGlzTG9hZGluZzogdHJ1ZVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMuZmV0Y2hNaW5pc3RyeURhdGEoKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBleGVjdXRpdmVfY291bmNpbDogZGF0YS5leGVjdXRpdmVfY291bmNpbCxcclxuICAgICAgICAgICAgICAgIG1jY2FiaW5ldDogZGF0YS5tY2NhYmluZXQsXHJcbiAgICAgICAgICAgICAgICBwZW9wbGVzX2NvdW5jaWw6IGRhdGEucGVvcGxlc19jb3VuY2lsLFxyXG4gICAgICAgICAgICAgICAgaXNMb2FkaW5nOiBmYWxzZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ0ZhaWxlZCB0byBmZXRjaCBtaW5pc3RyeSBkYXRhOicsIGVycm9yKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzTG9hZGluZzogZmFsc2UgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGZldGNoTWluaXN0cnlEYXRhKCkge1xyXG4gICAgICAgIGNvbnN0IHB1Ymxpc2hlZElkID0gJzJQQUNYLTF2UVZ1Y1RReWNia2daTFYzN3dwYnhPVlhUVHYwclVQZE5qZVg0MmpJdmVXeEJVT2ZYYjZSTlhBZWZ5bHczSUVTYThoY1lPVnVjUFBMQUp6JztcclxuICAgICAgICBjb25zdCBnaWQgPSAnNDA1ODU4NzQ4JzsgLy8gTWNNaW5pc3RyeSBzaGVldFxyXG4gICAgICAgIGNvbnN0IGNhY2hlQnVzdGVyID0gRGF0ZS5ub3coKTtcclxuXHJcbiAgICAgICAgY29uc3QgdXJsID0gYGh0dHBzOi8vZG9jcy5nb29nbGUuY29tL3NwcmVhZHNoZWV0cy9kL2UvJHtwdWJsaXNoZWRJZH0vcHViP2dpZD0ke2dpZH0mc2luZ2xlPXRydWUmb3V0cHV0PWNzdiZfPSR7Y2FjaGVCdXN0ZXJ9YDtcclxuXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gICAgICAgIGNvbnN0IHRleHQgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybUNTVkRhdGEodGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJhbnNmb3JtQ1NWRGF0YShjc3ZUZXh0KSB7XHJcbiAgICAgICAgLy8gUGFyc2UgQ1NWXHJcbiAgICAgICAgY29uc3QgbGluZXMgPSBjc3ZUZXh0LnNwbGl0KCdcXG4nKS5tYXAobGluZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgICAgICBsZXQgY3VycmVudCA9ICcnO1xyXG4gICAgICAgICAgICBsZXQgaW5RdW90ZXMgPSBmYWxzZTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjaGFyID0gbGluZVtpXTtcclxuICAgICAgICAgICAgICAgIGlmIChjaGFyID09PSAnXCInKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5RdW90ZXMgPSAhaW5RdW90ZXM7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNoYXIgPT09ICcsJyAmJiAhaW5RdW90ZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChjdXJyZW50LnRyaW0oKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50ICs9IGNoYXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVzdWx0LnB1c2goY3VycmVudC50cmltKCkpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBleGVjdXRpdmVfY291bmNpbCA9IFtdO1xyXG4gICAgICAgIGNvbnN0IHBlb3BsZXNfY291bmNpbCA9IFtdO1xyXG5cclxuICAgICAgICAvLyBTaGVldCBzdHJ1Y3R1cmU6XHJcbiAgICAgICAgLy8gUm93IDE6IFwiRXhlY3V0aXZlIENvdW5jaWwgKEVDKfCfjJ9cIiBoZWFkZXIgfCBlbXB0eSBjb2xzIHwgXCJQZW9wbGUncyBDb3VuY2lsIChQQylcIiBoZWFkZXJcclxuICAgICAgICAvLyBSb3cgMjogUG9zaXRpb24gaGVhZGVycyAtIGVhY2ggcG9zaXRpb24gZm9sbG93ZWQgYnkgRW1haWwsIFllYXIgY29sdW1uc1xyXG4gICAgICAgIC8vIFJvdyAzKzogRGF0YSAtIG11bHRpcGxlIHJvd3MgY2FuIGhhdmUgbmFtZXMgdW5kZXIgZWFjaCBwb3NpdGlvblxyXG5cclxuICAgICAgICAvLyBHZXQgdGhlIGhlYWRlciByb3cgKHJvdyAyLCBpbmRleCAxKSB0byBmaW5kIHBvc2l0aW9uIG5hbWVzXHJcbiAgICAgICAgY29uc3QgaGVhZGVyUm93ID0gbGluZXNbMV0gfHwgW107XHJcblxyXG4gICAgICAgIC8vIEZpbmQgd2hlcmUgUGVvcGxlJ3MgQ291bmNpbCBzdGFydHMgYnkgbG9va2luZyBmb3IgXCJQZW9wbGUncyBDb3VuY2lsXCIgaW4gcm93IDFcclxuICAgICAgICBjb25zdCByb3cxID0gbGluZXNbMF0gfHwgW107XHJcbiAgICAgICAgbGV0IHBjU3RhcnRDb2wgPSAtMTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdzEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHJvdzFbaV0gJiYgcm93MVtpXS5pbmNsdWRlcyhcIlBlb3BsZSdzIENvdW5jaWxcIikpIHtcclxuICAgICAgICAgICAgICAgIHBjU3RhcnRDb2wgPSBpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEZpbmQgYWxsIHBvc2l0aW9uIGNvbHVtbnMgKGNvbHVtbnMgdGhhdCBhcmUgbm90IFwiRW1haWxcIiBvciBcIlllYXJcIiBhbmQgaGF2ZSBhIHZhbHVlKVxyXG4gICAgICAgIGNvbnN0IGVjUG9zaXRpb25zID0gW107IC8vIHsgY29sOiBudW1iZXIsIG5hbWU6IHN0cmluZyB9XHJcbiAgICAgICAgY29uc3QgcGNQb3NpdGlvbnMgPSBbXTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgaGVhZGVyUm93Lmxlbmd0aDsgY29sKyspIHtcclxuICAgICAgICAgICAgY29uc3QgaGVhZGVyID0gaGVhZGVyUm93W2NvbF07XHJcbiAgICAgICAgICAgIGlmIChoZWFkZXIgJiYgaGVhZGVyICE9PSAnRW1haWwnICYmIGhlYWRlciAhPT0gJ1llYXInKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwb3NpdGlvbkluZm8gPSB7IGNvbCwgbmFtZTogaGVhZGVyLnJlcGxhY2UoL1xccypcXChbXildKlxcKVxccyovZywgJycpLnRyaW0oKSB9O1xyXG4gICAgICAgICAgICAgICAgaWYgKHBjU3RhcnRDb2wgIT09IC0xICYmIGNvbCA+PSBwY1N0YXJ0Q29sKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGNQb3NpdGlvbnMucHVzaChwb3NpdGlvbkluZm8pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBlY1Bvc2l0aW9ucy5wdXNoKHBvc2l0aW9uSW5mbyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFBhcnNlIEVDIHBvc2l0aW9uc1xyXG4gICAgICAgIGZvciAoY29uc3QgcG9zIG9mIGVjUG9zaXRpb25zKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHJvd0lkeCA9IDI7IHJvd0lkeCA8IGxpbmVzLmxlbmd0aDsgcm93SWR4KyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJvdyA9IGxpbmVzW3Jvd0lkeF07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gKHJvd1twb3MuY29sXSB8fCAnJykudHJpbSgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBleGVjdXRpdmVfY291bmNpbC5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHBvcy5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbWFpbDogKHJvd1twb3MuY29sICsgMV0gfHwgJycpLnRyaW0oKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeWVhcjogKHJvd1twb3MuY29sICsgMl0gfHwgJycpLnRyaW0oKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBQYXJzZSBQQyBwb3NpdGlvbnNcclxuICAgICAgICBmb3IgKGNvbnN0IHBvcyBvZiBwY1Bvc2l0aW9ucykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCByb3dJZHggPSAyOyByb3dJZHggPCBsaW5lcy5sZW5ndGg7IHJvd0lkeCsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByb3cgPSBsaW5lc1tyb3dJZHhdO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IChyb3dbcG9zLmNvbF0gfHwgJycpLnRyaW0oKTtcclxuICAgICAgICAgICAgICAgIGlmIChuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGVvcGxlc19jb3VuY2lsLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcG9zLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiAocm93W3Bvcy5jb2wgKyAxXSB8fCAnJykudHJpbSgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5ZWFyOiAocm93W3Bvcy5jb2wgKyAyXSB8fCAnJykudHJpbSgpXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIE1jQ2FiaW5ldCBpcyBlbXB0eSBmb3Igbm93IChQYXJsaWFtZW50YXJpYW4gbW92ZWQgdG8gRUMpXHJcbiAgICAgICAgY29uc3QgbWNjYWJpbmV0ID0gW107XHJcblxyXG4gICAgICAgIHJldHVybiB7IGV4ZWN1dGl2ZV9jb3VuY2lsLCBtY2NhYmluZXQsIHBlb3BsZXNfY291bmNpbCB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGFjdGl2ZVRhYiwgZXhlY3V0aXZlX2NvdW5jaWwsIG1jY2FiaW5ldCwgcGVvcGxlc19jb3VuY2lsLCBpc0xvYWRpbmcgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgICAgIGNvbnN0IHRhYnMgPSBbXHJcbiAgICAgICAgICAgIHsgaWQ6ICdFeGVjdXRpdmUgQ291bmNpbCcsIGRhdGE6IGV4ZWN1dGl2ZV9jb3VuY2lsIH0sXHJcbiAgICAgICAgICAgIHsgaWQ6ICdNY0NhYmluZXQnLCBkYXRhOiBtY2NhYmluZXQgfSxcclxuICAgICAgICAgICAgeyBpZDogXCJQZW9wbGUncyBDb3VuY2lsXCIsIGRhdGE6IHBlb3BsZXNfY291bmNpbCB9XHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgY29uc3QgYWN0aXZlRGF0YSA9IHRhYnMuZmluZCh0ID0+IHQuaWQgPT09IGFjdGl2ZVRhYik/LmRhdGEgfHwgW107XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtY21pbmlzdHJ5LXBhZ2UnPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21jbWluaXN0cnktaGVybyc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0nbWNtaW5pc3RyeS1tYWluLXRpdGxlJz5NY01pbmlzdHJ5PC9oMT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtY21pbmlzdHJ5LXRhYnMnPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0YWJzLm1hcCh0YWIgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3RhYi5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YG1pbmlzdHJ5LXRhYiAke2FjdGl2ZVRhYiA9PT0gdGFiLmlkID8gJ2FjdGl2ZScgOiAnJ31gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZVRhYjogdGFiLmlkIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFiLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIHtpc0xvYWRpbmcgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmctc3Bpbm5lclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsb2FkaW5nLXRleHRcIj5Mb2FkaW5nLi4uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmFkZS1pbicga2V5PXthY3RpdmVUYWJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm94IHdpZHRoPXtbMzMwXX0gbWw9J2F1dG8nIG1yPSdhdXRvJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J2RpdmlzaW9uLXRpdGxlJz57YWN0aXZlVGFifTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZHMgY29udGVudD17YWN0aXZlRGF0YX0gd2lkdGg9e1syNzBdfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWNNaW5pc3RyeTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==