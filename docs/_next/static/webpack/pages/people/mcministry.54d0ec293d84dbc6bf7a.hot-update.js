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

      // Find section boundaries in row 1
      var row1 = lines[0] || [];
      var mcCabinetStartCol = -1;
      var pcStartCol = -1;
      for (var i = 0; i < row1.length; i++) {
        if (row1[i] && row1[i].includes("McCabinet")) {
          mcCabinetStartCol = i;
        }
        if (row1[i] && row1[i].includes("People's Council")) {
          pcStartCol = i;
        }
      }

      // Find all position columns (columns that are not "Email" or "Year" and have a value)
      var ecPositions = []; // { col: number, name: string }
      var mcCabinetPositions = [];
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
          } else if (mcCabinetStartCol !== -1 && col >= mcCabinetStartCol) {
            mcCabinetPositions.push(positionInfo);
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

      // Parse McCabinet positions
      var mccabinet = [];
      for (var _i2 = 0, _mcCabinetPositions = mcCabinetPositions; _i2 < _mcCabinetPositions.length; _i2++) {
        var _pos = _mcCabinetPositions[_i2];
        for (var _rowIdx = 2; _rowIdx < lines.length; _rowIdx++) {
          var _row = lines[_rowIdx];
          var _name = (_row[_pos.col] || '').trim();
          if (_name) {
            mccabinet.push({
              position: _pos.name,
              name: _name,
              email: (_row[_pos.col + 1] || '').trim(),
              year: (_row[_pos.col + 2] || '').trim()
            });
          }
        }
      }

      // Parse PC positions
      for (var _i3 = 0, _pcPositions = pcPositions; _i3 < _pcPositions.length; _i3++) {
        var _pos2 = _pcPositions[_i3];
        for (var _rowIdx2 = 2; _rowIdx2 < lines.length; _rowIdx2++) {
          var _row2 = lines[_rowIdx2];
          var _name2 = (_row2[_pos2.col] || '').trim();
          if (_name2) {
            peoples_council.push({
              position: _pos2.name,
              name: _name2,
              email: (_row2[_pos2.col + 1] || '').trim(),
              year: (_row2[_pos2.col + 2] || '').trim()
            });
          }
        }
      }
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
          lineNumber: 174,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "mcministry-hero",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 17
        }
      }, __jsx("h1", {
        className: "mcministry-main-title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 21
        }
      }, "McMinistry")), __jsx("div", {
        className: "mcministry-tabs",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179,
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
            lineNumber: 181,
            columnNumber: 25
          }
        }, tab.id);
      })), isLoading ? __jsx("div", {
        className: "loading-container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "loading-spinner",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 25
        }
      }), __jsx("p", {
        className: "loading-text",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194,
          columnNumber: 25
        }
      }, "Loading...")) : __jsx("div", {
        className: "fade-in",
        key: activeTab,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 21
        }
      }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_7__["Box"], {
        width: [330],
        ml: "auto",
        mr: "auto",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198,
          columnNumber: 25
        }
      }, __jsx("h2", {
        className: "division-title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199,
          columnNumber: 29
        }
      }, activeTab)), __jsx(_general_contactcards__WEBPACK_IMPORTED_MODULE_8__["default"], {
        content: activeData,
        width: [270],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wZW9wbGUvbWNtaW5pc3RyeS9tY21pbmlzdHJ5LmpzIl0sIm5hbWVzIjpbIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJlIiwidCIsInIiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJuIiwiaGFzT3duUHJvcGVydHkiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImkiLCJTeW1ib2wiLCJhIiwiaXRlcmF0b3IiLCJjIiwiYXN5bmNJdGVyYXRvciIsInUiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIndyYXAiLCJHZW5lcmF0b3IiLCJjcmVhdGUiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwidHlwZSIsImFyZyIsImNhbGwiLCJoIiwibCIsImYiLCJzIiwieSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJwIiwiZCIsImdldFByb3RvdHlwZU9mIiwidiIsInZhbHVlcyIsImciLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJpbnZva2UiLCJyZXNvbHZlIiwiX19hd2FpdCIsInRoZW4iLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsIkVycm9yIiwiZG9uZSIsIm1ldGhvZCIsImRlbGVnYXRlIiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiVHlwZUVycm9yIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpc05hTiIsImxlbmd0aCIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwia2V5cyIsInJldmVyc2UiLCJwb3AiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicnZhbCIsImhhbmRsZSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwiZGVsZWdhdGVZaWVsZCIsIl9jYWxsU3VwZXIiLCJfZ2V0UHJvdG90eXBlT2YiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJSZWZsZWN0IiwiY29uc3RydWN0IiwiYXBwbHkiLCJCb29sZWFuIiwidmFsdWVPZiIsIk1jTWluaXN0cnkiLCJfUmVhY3QkQ29tcG9uZW50IiwicHJvcHMiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjayIsInN0YXRlIiwiYWN0aXZlVGFiIiwiZXhlY3V0aXZlX2NvdW5jaWwiLCJtY2NhYmluZXQiLCJwZW9wbGVzX2NvdW5jaWwiLCJpc0xvYWRpbmciLCJfaW5oZXJpdHMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJfY29tcG9uZW50RGlkTW91bnQiLCJfYXN5bmNUb0dlbmVyYXRvciIsIl9jYWxsZWUiLCJkYXRhIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsImZldGNoTWluaXN0cnlEYXRhIiwic2V0U3RhdGUiLCJ0MCIsImNvbnNvbGUiLCJ3YXJuIiwiY29tcG9uZW50RGlkTW91bnQiLCJhcmd1bWVudHMiLCJfZmV0Y2hNaW5pc3RyeURhdGEiLCJfY2FsbGVlMiIsInB1Ymxpc2hlZElkIiwiZ2lkIiwiY2FjaGVCdXN0ZXIiLCJ1cmwiLCJyZXNwb25zZSIsInRleHQiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJEYXRlIiwibm93IiwiY29uY2F0IiwiZmV0Y2giLCJ0cmFuc2Zvcm1DU1ZEYXRhIiwiY3N2VGV4dCIsImxpbmVzIiwic3BsaXQiLCJtYXAiLCJsaW5lIiwicmVzdWx0IiwiY3VycmVudCIsImluUXVvdGVzIiwiY2hhciIsInRyaW0iLCJoZWFkZXJSb3ciLCJyb3cxIiwibWNDYWJpbmV0U3RhcnRDb2wiLCJwY1N0YXJ0Q29sIiwiaW5jbHVkZXMiLCJlY1Bvc2l0aW9ucyIsIm1jQ2FiaW5ldFBvc2l0aW9ucyIsInBjUG9zaXRpb25zIiwiY29sIiwiaGVhZGVyIiwicG9zaXRpb25JbmZvIiwicmVwbGFjZSIsIl9pIiwiX2VjUG9zaXRpb25zIiwicG9zIiwicm93SWR4Iiwicm93IiwicG9zaXRpb24iLCJlbWFpbCIsInllYXIiLCJfaTIiLCJfbWNDYWJpbmV0UG9zaXRpb25zIiwiX2kzIiwiX3BjUG9zaXRpb25zIiwicmVuZGVyIiwiX3RhYnMkZmluZCIsIl90aGlzMiIsIl90aGlzJHN0YXRlIiwidGFicyIsImlkIiwiYWN0aXZlRGF0YSIsImZpbmQiLCJfX2pzeCIsImNsYXNzTmFtZSIsIl9fc2VsZiIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwidGFiIiwib25DbGljayIsIkJveCIsIndpZHRoIiwibWwiLCJtciIsIkNhcmRzIiwiY29udGVudCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7K0NBQ0EscUpBQUFBLG1CQUFBLFlBQUFBLG9CQUFBLFdBQUFDLENBQUEsU0FBQUMsQ0FBQSxFQUFBRCxDQUFBLE9BQUFFLENBQUEsR0FBQUMsTUFBQSxDQUFBQyxTQUFBLEVBQUFDLENBQUEsR0FBQUgsQ0FBQSxDQUFBSSxjQUFBLEVBQUFDLENBQUEsR0FBQUosTUFBQSxDQUFBSyxjQUFBLGNBQUFQLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLElBQUFELENBQUEsQ0FBQUQsQ0FBQSxJQUFBRSxDQUFBLENBQUFPLEtBQUEsS0FBQUMsQ0FBQSx3QkFBQUMsTUFB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QUE7UUFBR0MsU0FBUyxFQUFDLGNBQWM7UUFBQUMsTUFBQTtRQUFBQyxRQUFBO1VBQUFDLFFBQUEsRUFBQUMsWUFBQTtVQUFBQyxVQUFBO1VBQUFDLFlBQUE7UUFBQTtNQUFBLGVBQWMsQ0FDeEMsQ0FBQyxHQUVOUCxLQUFBO1FBQUtDLFNBQVMsRUFBQyxTQUFTO1FBQUN4RSxHQUFHLEVBQUVQLFNBQVU7UUFBQWdGLE1BQUE7UUFBQUMsUUFBQTtVQUFBQyxRQUFBLEVBQUFDLFlBQUE7VUFBQUMsVUFBQTtVQUFBQyxZQUFBO1FBQUE7TUFBQSxHQUNwQ1AsS0FBQSxDQUFDVSwwQ0FBRztRQUFDQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUU7UUFBQ0MsRUFBRSxFQUFDLE1BQU07UUFBQ0MsRUFBRSxFQUFDLE1BQU07UUFBQVgsTUFBQTtRQUFBQyxRQUFBO1VBQUFDLFFBQUEsRUFBQUMsWUFBQTtVQUFBQyxVQUFBO1VBQUFDLFlBQUE7UUFBQTtNQUFBLEdBQ2xDUCxLQUFBO1FBQUlDLFNBQVMsRUFBQyxnQkFBZ0I7UUFBQUMsTUFBQTtRQUFBQyxRQUFBO1VBQUFDLFFBQUEsRUFBQUMsWUFBQTtVQUFBQyxVQUFBO1VBQUFDLFlBQUE7UUFBQTtNQUFBLEdBQUVyRixTQUFjLENBQzdDLENBQUMsRUFDTjhFLEtBQUEsQ0FBQ2MsNkRBQUs7UUFBQ0MsT0FBTyxFQUFFakIsVUFBVztRQUFDYSxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUU7UUFBQVQsTUFBQTtRQUFBQyxRQUFBO1VBQUFDLFFBQUEsRUFBQUMsWUFBQTtVQUFBQyxVQUFBO1VBQUFDLFlBQUE7UUFBQTtNQUFBLENBQUUsQ0FDMUMsQ0FFUixDQUFDO0lBRWQ7RUFBQztBQUFBLEVBek1vQlMsNENBQUssQ0FBQ0MsU0FBUztBQTRNekJyRyx5RUFBVSxFQUFDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Blb3BsZS9tY21pbmlzdHJ5LjU0ZDBlYzI5M2Q4NGRiYzZiZjdhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCb3ggfSBmcm9tICdyZWJhc3MnO1xyXG5pbXBvcnQgQ2FyZHMgZnJvbSAnLi4vLi4vZ2VuZXJhbC9jb250YWN0Y2FyZHMnO1xyXG5cclxuY2xhc3MgTWNNaW5pc3RyeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBhY3RpdmVUYWI6ICdFeGVjdXRpdmUgQ291bmNpbCcsXHJcbiAgICAgICAgICAgIGV4ZWN1dGl2ZV9jb3VuY2lsOiBbXSxcclxuICAgICAgICAgICAgbWNjYWJpbmV0OiBbXSxcclxuICAgICAgICAgICAgcGVvcGxlc19jb3VuY2lsOiBbXSxcclxuICAgICAgICAgICAgaXNMb2FkaW5nOiB0cnVlXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5mZXRjaE1pbmlzdHJ5RGF0YSgpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGV4ZWN1dGl2ZV9jb3VuY2lsOiBkYXRhLmV4ZWN1dGl2ZV9jb3VuY2lsLFxyXG4gICAgICAgICAgICAgICAgbWNjYWJpbmV0OiBkYXRhLm1jY2FiaW5ldCxcclxuICAgICAgICAgICAgICAgIHBlb3BsZXNfY291bmNpbDogZGF0YS5wZW9wbGVzX2NvdW5jaWwsXHJcbiAgICAgICAgICAgICAgICBpc0xvYWRpbmc6IGZhbHNlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignRmFpbGVkIHRvIGZldGNoIG1pbmlzdHJ5IGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNMb2FkaW5nOiBmYWxzZSB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZmV0Y2hNaW5pc3RyeURhdGEoKSB7XHJcbiAgICAgICAgY29uc3QgcHVibGlzaGVkSWQgPSAnMlBBQ1gtMXZRVnVjVFF5Y2JrZ1pMVjM3d3BieE9WWFRUdjByVVBkTmplWDQyakl2ZVd4QlVPZlhiNlJOWEFlZnlsdzNJRVNhOGhjWU9WdWNQUExBSnonO1xyXG4gICAgICAgIGNvbnN0IGdpZCA9ICc0MDU4NTg3NDgnOyAvLyBNY01pbmlzdHJ5IHNoZWV0XHJcbiAgICAgICAgY29uc3QgY2FjaGVCdXN0ZXIgPSBEYXRlLm5vdygpO1xyXG5cclxuICAgICAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vc3ByZWFkc2hlZXRzL2QvZS8ke3B1Ymxpc2hlZElkfS9wdWI/Z2lkPSR7Z2lkfSZzaW5nbGU9dHJ1ZSZvdXRwdXQ9Y3N2Jl89JHtjYWNoZUJ1c3Rlcn1gO1xyXG5cclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XHJcbiAgICAgICAgY29uc3QgdGV4dCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtQ1NWRGF0YSh0ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICB0cmFuc2Zvcm1DU1ZEYXRhKGNzdlRleHQpIHtcclxuICAgICAgICAvLyBQYXJzZSBDU1ZcclxuICAgICAgICBjb25zdCBsaW5lcyA9IGNzdlRleHQuc3BsaXQoJ1xcbicpLm1hcChsaW5lID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50ID0gJyc7XHJcbiAgICAgICAgICAgIGxldCBpblF1b3RlcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNoYXIgPSBsaW5lW2ldO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNoYXIgPT09ICdcIicpIHtcclxuICAgICAgICAgICAgICAgICAgICBpblF1b3RlcyA9ICFpblF1b3RlcztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2hhciA9PT0gJywnICYmICFpblF1b3Rlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGN1cnJlbnQudHJpbSgpKTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50ID0gJyc7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnQgKz0gY2hhcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXN1bHQucHVzaChjdXJyZW50LnRyaW0oKSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGV4ZWN1dGl2ZV9jb3VuY2lsID0gW107XHJcbiAgICAgICAgY29uc3QgcGVvcGxlc19jb3VuY2lsID0gW107XHJcblxyXG4gICAgICAgIC8vIFNoZWV0IHN0cnVjdHVyZTpcclxuICAgICAgICAvLyBSb3cgMTogXCJFeGVjdXRpdmUgQ291bmNpbCAoRUMp8J+Mn1wiIGhlYWRlciB8IGVtcHR5IGNvbHMgfCBcIlBlb3BsZSdzIENvdW5jaWwgKFBDKVwiIGhlYWRlclxyXG4gICAgICAgIC8vIFJvdyAyOiBQb3NpdGlvbiBoZWFkZXJzIC0gZWFjaCBwb3NpdGlvbiBmb2xsb3dlZCBieSBFbWFpbCwgWWVhciBjb2x1bW5zXHJcbiAgICAgICAgLy8gUm93IDMrOiBEYXRhIC0gbXVsdGlwbGUgcm93cyBjYW4gaGF2ZSBuYW1lcyB1bmRlciBlYWNoIHBvc2l0aW9uXHJcblxyXG4gICAgICAgIC8vIEdldCB0aGUgaGVhZGVyIHJvdyAocm93IDIsIGluZGV4IDEpIHRvIGZpbmQgcG9zaXRpb24gbmFtZXNcclxuICAgICAgICBjb25zdCBoZWFkZXJSb3cgPSBsaW5lc1sxXSB8fCBbXTtcclxuXHJcbiAgICAgICAgLy8gRmluZCBzZWN0aW9uIGJvdW5kYXJpZXMgaW4gcm93IDFcclxuICAgICAgICBjb25zdCByb3cxID0gbGluZXNbMF0gfHwgW107XHJcbiAgICAgICAgbGV0IG1jQ2FiaW5ldFN0YXJ0Q29sID0gLTE7XHJcbiAgICAgICAgbGV0IHBjU3RhcnRDb2wgPSAtMTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3cxLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChyb3cxW2ldICYmIHJvdzFbaV0uaW5jbHVkZXMoXCJNY0NhYmluZXRcIikpIHtcclxuICAgICAgICAgICAgICAgIG1jQ2FiaW5ldFN0YXJ0Q29sID0gaTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocm93MVtpXSAmJiByb3cxW2ldLmluY2x1ZGVzKFwiUGVvcGxlJ3MgQ291bmNpbFwiKSkge1xyXG4gICAgICAgICAgICAgICAgcGNTdGFydENvbCA9IGk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEZpbmQgYWxsIHBvc2l0aW9uIGNvbHVtbnMgKGNvbHVtbnMgdGhhdCBhcmUgbm90IFwiRW1haWxcIiBvciBcIlllYXJcIiBhbmQgaGF2ZSBhIHZhbHVlKVxyXG4gICAgICAgIGNvbnN0IGVjUG9zaXRpb25zID0gW107IC8vIHsgY29sOiBudW1iZXIsIG5hbWU6IHN0cmluZyB9XHJcbiAgICAgICAgY29uc3QgbWNDYWJpbmV0UG9zaXRpb25zID0gW107XHJcbiAgICAgICAgY29uc3QgcGNQb3NpdGlvbnMgPSBbXTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgaGVhZGVyUm93Lmxlbmd0aDsgY29sKyspIHtcclxuICAgICAgICAgICAgY29uc3QgaGVhZGVyID0gaGVhZGVyUm93W2NvbF07XHJcbiAgICAgICAgICAgIGlmIChoZWFkZXIgJiYgaGVhZGVyICE9PSAnRW1haWwnICYmIGhlYWRlciAhPT0gJ1llYXInKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwb3NpdGlvbkluZm8gPSB7IGNvbCwgbmFtZTogaGVhZGVyLnJlcGxhY2UoL1xccypcXChbXildKlxcKVxccyovZywgJycpLnRyaW0oKSB9O1xyXG4gICAgICAgICAgICAgICAgaWYgKHBjU3RhcnRDb2wgIT09IC0xICYmIGNvbCA+PSBwY1N0YXJ0Q29sKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGNQb3NpdGlvbnMucHVzaChwb3NpdGlvbkluZm8pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtY0NhYmluZXRTdGFydENvbCAhPT0gLTEgJiYgY29sID49IG1jQ2FiaW5ldFN0YXJ0Q29sKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWNDYWJpbmV0UG9zaXRpb25zLnB1c2gocG9zaXRpb25JbmZvKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWNQb3NpdGlvbnMucHVzaChwb3NpdGlvbkluZm8pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBQYXJzZSBFQyBwb3NpdGlvbnNcclxuICAgICAgICBmb3IgKGNvbnN0IHBvcyBvZiBlY1Bvc2l0aW9ucykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCByb3dJZHggPSAyOyByb3dJZHggPCBsaW5lcy5sZW5ndGg7IHJvd0lkeCsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByb3cgPSBsaW5lc1tyb3dJZHhdO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IChyb3dbcG9zLmNvbF0gfHwgJycpLnRyaW0oKTtcclxuICAgICAgICAgICAgICAgIGlmIChuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXhlY3V0aXZlX2NvdW5jaWwucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBwb3MubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW1haWw6IChyb3dbcG9zLmNvbCArIDFdIHx8ICcnKS50cmltKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHllYXI6IChyb3dbcG9zLmNvbCArIDJdIHx8ICcnKS50cmltKClcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gUGFyc2UgTWNDYWJpbmV0IHBvc2l0aW9uc1xyXG4gICAgICAgIGNvbnN0IG1jY2FiaW5ldCA9IFtdO1xyXG4gICAgICAgIGZvciAoY29uc3QgcG9zIG9mIG1jQ2FiaW5ldFBvc2l0aW9ucykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCByb3dJZHggPSAyOyByb3dJZHggPCBsaW5lcy5sZW5ndGg7IHJvd0lkeCsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByb3cgPSBsaW5lc1tyb3dJZHhdO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IChyb3dbcG9zLmNvbF0gfHwgJycpLnRyaW0oKTtcclxuICAgICAgICAgICAgICAgIGlmIChuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWNjYWJpbmV0LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcG9zLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiAocm93W3Bvcy5jb2wgKyAxXSB8fCAnJykudHJpbSgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5ZWFyOiAocm93W3Bvcy5jb2wgKyAyXSB8fCAnJykudHJpbSgpXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFBhcnNlIFBDIHBvc2l0aW9uc1xyXG4gICAgICAgIGZvciAoY29uc3QgcG9zIG9mIHBjUG9zaXRpb25zKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHJvd0lkeCA9IDI7IHJvd0lkeCA8IGxpbmVzLmxlbmd0aDsgcm93SWR4KyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJvdyA9IGxpbmVzW3Jvd0lkeF07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gKHJvd1twb3MuY29sXSB8fCAnJykudHJpbSgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBwZW9wbGVzX2NvdW5jaWwucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBwb3MubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW1haWw6IChyb3dbcG9zLmNvbCArIDFdIHx8ICcnKS50cmltKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHllYXI6IChyb3dbcG9zLmNvbCArIDJdIHx8ICcnKS50cmltKClcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHsgZXhlY3V0aXZlX2NvdW5jaWwsIG1jY2FiaW5ldCwgcGVvcGxlc19jb3VuY2lsIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgYWN0aXZlVGFiLCBleGVjdXRpdmVfY291bmNpbCwgbWNjYWJpbmV0LCBwZW9wbGVzX2NvdW5jaWwsIGlzTG9hZGluZyB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAgICAgY29uc3QgdGFicyA9IFtcclxuICAgICAgICAgICAgeyBpZDogJ0V4ZWN1dGl2ZSBDb3VuY2lsJywgZGF0YTogZXhlY3V0aXZlX2NvdW5jaWwgfSxcclxuICAgICAgICAgICAgeyBpZDogJ01jQ2FiaW5ldCcsIGRhdGE6IG1jY2FiaW5ldCB9LFxyXG4gICAgICAgICAgICB7IGlkOiBcIlBlb3BsZSdzIENvdW5jaWxcIiwgZGF0YTogcGVvcGxlc19jb3VuY2lsIH1cclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICBjb25zdCBhY3RpdmVEYXRhID0gdGFicy5maW5kKHQgPT4gdC5pZCA9PT0gYWN0aXZlVGFiKT8uZGF0YSB8fCBbXTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21jbWluaXN0cnktcGFnZSc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWNtaW5pc3RyeS1oZXJvJz5cclxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdtY21pbmlzdHJ5LW1haW4tdGl0bGUnPk1jTWluaXN0cnk8L2gxPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21jbWluaXN0cnktdGFicyc+XHJcbiAgICAgICAgICAgICAgICAgICAge3RhYnMubWFwKHRhYiA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17dGFiLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgbWluaXN0cnktdGFiICR7YWN0aXZlVGFiID09PSB0YWIuaWQgPyAnYWN0aXZlJyA6ICcnfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgYWN0aXZlVGFiOiB0YWIuaWQgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWIuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAge2lzTG9hZGluZyA/IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmctY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZy1zcGlubmVyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxvYWRpbmctdGV4dFwiPkxvYWRpbmcuLi48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmYWRlLWluJyBrZXk9e2FjdGl2ZVRhYn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggd2lkdGg9e1szMzBdfSBtbD0nYXV0bycgbXI9J2F1dG8nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0nZGl2aXNpb24tdGl0bGUnPnthY3RpdmVUYWJ9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkcyBjb250ZW50PXthY3RpdmVEYXRhfSB3aWR0aD17WzI3MF19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNY01pbmlzdHJ5O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9