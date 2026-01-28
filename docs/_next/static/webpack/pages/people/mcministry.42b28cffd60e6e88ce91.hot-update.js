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
      var mcCabinetHeaderCol = -1;
      var pcHeaderCol = -1;
      for (var i = 0; i < row1.length; i++) {
        if (row1[i] && row1[i].includes("McCabinet")) {
          mcCabinetHeaderCol = i;
        }
        if (row1[i] && row1[i].includes("People's Council")) {
          pcHeaderCol = i;
        }
      }

      // McCabinet section: from McCabinet header to one column before PC header
      // PC section: from PC header onwards
      // EC section: everything before McCabinet header

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

          // Determine which section this column belongs to based on row 1 headers
          // McCabinet: from mcCabinetHeaderCol up to (but not including) pcHeaderCol
          // PC: from pcHeaderCol onwards
          // EC: before mcCabinetHeaderCol
          if (pcHeaderCol !== -1 && col >= pcHeaderCol) {
            pcPositions.push(positionInfo);
          } else if (mcCabinetHeaderCol !== -1 && col >= mcCabinetHeaderCol && col < pcHeaderCol) {
            mcCabinetPositions.push(positionInfo);
          } else if (mcCabinetHeaderCol === -1 || col < mcCabinetHeaderCol) {
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
          lineNumber: 183,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "mcministry-hero",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 17
        }
      }, __jsx("h1", {
        className: "mcministry-main-title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 21
        }
      }, "McMinistry")), __jsx("div", {
        className: "mcministry-tabs",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188,
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
            lineNumber: 190,
            columnNumber: 25
          }
        }, tab.id);
      })), isLoading ? __jsx("div", {
        className: "loading-container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "loading-spinner",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202,
          columnNumber: 25
        }
      }), __jsx("p", {
        className: "loading-text",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 25
        }
      }, "Loading...")) : __jsx("div", {
        className: "fade-in",
        key: activeTab,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206,
          columnNumber: 21
        }
      }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_7__["Box"], {
        width: [330],
        ml: "auto",
        mr: "auto",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207,
          columnNumber: 25
        }
      }, __jsx("h2", {
        className: "division-title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208,
          columnNumber: 29
        }
      }, activeTab)), __jsx(_general_contactcards__WEBPACK_IMPORTED_MODULE_8__["default"], {
        content: activeData,
        width: [270],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wZW9wbGUvbWNtaW5pc3RyeS9tY21pbmlzdHJ5LmpzIl0sIm5hbWVzIjpbIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJlIiwidCIsInIiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJuIiwiaGFzT3duUHJvcGVydHkiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImkiLCJTeW1ib2wiLCJhIiwiaXRlcmF0b3IiLCJjIiwiYXN5bmNJdGVyYXRvciIsInUiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIndyYXAiLCJHZW5lcmF0b3IiLCJjcmVhdGUiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwidHlwZSIsImFyZyIsImNhbGwiLCJoIiwibCIsImYiLCJzIiwieSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJwIiwiZCIsImdldFByb3RvdHlwZU9mIiwidiIsInZhbHVlcyIsImciLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJpbnZva2UiLCJyZXNvbHZlIiwiX19hd2FpdCIsInRoZW4iLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsIkVycm9yIiwiZG9uZSIsIm1ldGhvZCIsImRlbGVnYXRlIiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiVHlwZUVycm9yIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpc05hTiIsImxlbmd0aCIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwia2V5cyIsInJldmVyc2UiLCJwb3AiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicnZhbCIsImhhbmRsZSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwiZGVsZWdhdGVZaWVsZCIsIl9jYWxsU3VwZXIiLCJfZ2V0UHJvdG90eXBlT2YiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJSZWZsZWN0IiwiY29uc3RydWN0IiwiYXBwbHkiLCJCb29sZWFuIiwidmFsdWVPZiIsIk1jTWluaXN0cnkiLCJfUmVhY3QkQ29tcG9uZW50IiwicHJvcHMiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjayIsInN0YXRlIiwiYWN0aXZlVGFiIiwiZXhlY3V0aXZlX2NvdW5jaWwiLCJtY2NhYmluZXQiLCJwZW9wbGVzX2NvdW5jaWwiLCJpc0xvYWRpbmciLCJfaW5oZXJpdHMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJfY29tcG9uZW50RGlkTW91bnQiLCJfYXN5bmNUb0dlbmVyYXRvciIsIl9jYWxsZWUiLCJkYXRhIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsImZldGNoTWluaXN0cnlEYXRhIiwic2V0U3RhdGUiLCJ0MCIsImNvbnNvbGUiLCJ3YXJuIiwiY29tcG9uZW50RGlkTW91bnQiLCJhcmd1bWVudHMiLCJfZmV0Y2hNaW5pc3RyeURhdGEiLCJfY2FsbGVlMiIsInB1Ymxpc2hlZElkIiwiZ2lkIiwiY2FjaGVCdXN0ZXIiLCJ1cmwiLCJyZXNwb25zZSIsInRleHQiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJEYXRlIiwibm93IiwiY29uY2F0IiwiZmV0Y2giLCJ0cmFuc2Zvcm1DU1ZEYXRhIiwiY3N2VGV4dCIsImxpbmVzIiwic3BsaXQiLCJtYXAiLCJsaW5lIiwicmVzdWx0IiwiY3VycmVudCIsImluUXVvdGVzIiwiY2hhciIsInRyaW0iLCJoZWFkZXJSb3ciLCJyb3cxIiwibWNDYWJpbmV0SGVhZGVyQ29sIiwicGNIZWFkZXJDb2wiLCJpbmNsdWRlcyIsImVjUG9zaXRpb25zIiwibWNDYWJpbmV0UG9zaXRpb25zIiwicGNQb3NpdGlvbnMiLCJjb2wiLCJoZWFkZXIiLCJwb3NpdGlvbkluZm8iLCJyZXBsYWNlIiwiX2kiLCJfZWNQb3NpdGlvbnMiLCJwb3MiLCJyb3dJZHgiLCJyb3ciLCJwb3NpdGlvbiIsImVtYWlsIiwieWVhciIsIl9pMiIsIl9tY0NhYmluZXRQb3NpdGlvbnMiLCJfaTMiLCJfcGNQb3NpdGlvbnMiLCJyZW5kZXIiLCJfdGFicyRmaW5kIiwiX3RoaXMyIiwiX3RoaXMkc3RhdGUiLCJ0YWJzIiwiaWQiLCJhY3RpdmVEYXRhIiwiZmluZCIsIl9fanN4IiwiY2xhc3NOYW1lIiwiX19zZWxmIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJ0YWIiLCJvbkNsaWNrIiwiQm94Iiwid2lkdGgiLCJtbCIsIm1yIiwiQ2FyZHMiLCJjb250ZW50IiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQ0FDQSxxSkFBQUEsbUJBQUEsWUFBQUEsb0JBQUEsV0FBQUMsQ0FBQSxTQUFBQyxDQUFBLEVBQUFELENBQUEsT0FBQUUsQ0FBQSxHQUFBQyxNQUFBLENBQUFDLFNBQUEsRUFBQUMsQ0FBQSxHQUFBSCxDQUFBLENBQUFJLGNBQUEsRUFBQUMsQ0FBQSxHQUFBSixNQUFBLENBQUFLLGNBQUEsY0FBQVAsQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsSUFBQUQsQ0FBQSxDQUFBRCxDQUFBLElBQUFFLENBQUEsQ0FBQU8sS0FBQSxLQUFBQyxDQUFBLHdCQUFBQyxN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QUFVLEVBQUMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGVvcGxlL21jbWluaXN0cnkuNDJiMjhjZmZkNjBlNmU4OGNlOTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJveCB9IGZyb20gJ3JlYmFzcyc7XHJcbmltcG9ydCBDYXJkcyBmcm9tICcuLi8uLi9nZW5lcmFsL2NvbnRhY3RjYXJkcyc7XHJcblxyXG5jbGFzcyBNY01pbmlzdHJ5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGFjdGl2ZVRhYjogJ0V4ZWN1dGl2ZSBDb3VuY2lsJyxcclxuICAgICAgICAgICAgZXhlY3V0aXZlX2NvdW5jaWw6IFtdLFxyXG4gICAgICAgICAgICBtY2NhYmluZXQ6IFtdLFxyXG4gICAgICAgICAgICBwZW9wbGVzX2NvdW5jaWw6IFtdLFxyXG4gICAgICAgICAgICBpc0xvYWRpbmc6IHRydWVcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLmZldGNoTWluaXN0cnlEYXRhKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgZXhlY3V0aXZlX2NvdW5jaWw6IGRhdGEuZXhlY3V0aXZlX2NvdW5jaWwsXHJcbiAgICAgICAgICAgICAgICBtY2NhYmluZXQ6IGRhdGEubWNjYWJpbmV0LFxyXG4gICAgICAgICAgICAgICAgcGVvcGxlc19jb3VuY2lsOiBkYXRhLnBlb3BsZXNfY291bmNpbCxcclxuICAgICAgICAgICAgICAgIGlzTG9hZGluZzogZmFsc2VcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCdGYWlsZWQgdG8gZmV0Y2ggbWluaXN0cnkgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0xvYWRpbmc6IGZhbHNlIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBmZXRjaE1pbmlzdHJ5RGF0YSgpIHtcclxuICAgICAgICBjb25zdCBwdWJsaXNoZWRJZCA9ICcyUEFDWC0xdlFWdWNUUXljYmtnWkxWMzd3cGJ4T1ZYVFR2MHJVUGROamVYNDJqSXZlV3hCVU9mWGI2Uk5YQWVmeWx3M0lFU2E4aGNZT1Z1Y1BQTEFKeic7XHJcbiAgICAgICAgY29uc3QgZ2lkID0gJzQwNTg1ODc0OCc7IC8vIE1jTWluaXN0cnkgc2hlZXRcclxuICAgICAgICBjb25zdCBjYWNoZUJ1c3RlciA9IERhdGUubm93KCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHVybCA9IGBodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9zcHJlYWRzaGVldHMvZC9lLyR7cHVibGlzaGVkSWR9L3B1Yj9naWQ9JHtnaWR9JnNpbmdsZT10cnVlJm91dHB1dD1jc3YmXz0ke2NhY2hlQnVzdGVyfWA7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcclxuICAgICAgICBjb25zdCB0ZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy50cmFuc2Zvcm1DU1ZEYXRhKHRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHRyYW5zZm9ybUNTVkRhdGEoY3N2VGV4dCkge1xyXG4gICAgICAgIC8vIFBhcnNlIENTVlxyXG4gICAgICAgIGNvbnN0IGxpbmVzID0gY3N2VGV4dC5zcGxpdCgnXFxuJykubWFwKGxpbmUgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnQgPSAnJztcclxuICAgICAgICAgICAgbGV0IGluUXVvdGVzID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2hhciA9IGxpbmVbaV07XHJcbiAgICAgICAgICAgICAgICBpZiAoY2hhciA9PT0gJ1wiJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGluUXVvdGVzID0gIWluUXVvdGVzO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjaGFyID09PSAnLCcgJiYgIWluUXVvdGVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goY3VycmVudC50cmltKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnQgPSAnJztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudCArPSBjaGFyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGN1cnJlbnQudHJpbSgpKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgZXhlY3V0aXZlX2NvdW5jaWwgPSBbXTtcclxuICAgICAgICBjb25zdCBwZW9wbGVzX2NvdW5jaWwgPSBbXTtcclxuXHJcbiAgICAgICAgLy8gU2hlZXQgc3RydWN0dXJlOlxyXG4gICAgICAgIC8vIFJvdyAxOiBcIkV4ZWN1dGl2ZSBDb3VuY2lsIChFQynwn4yfXCIgaGVhZGVyIHwgZW1wdHkgY29scyB8IFwiUGVvcGxlJ3MgQ291bmNpbCAoUEMpXCIgaGVhZGVyXHJcbiAgICAgICAgLy8gUm93IDI6IFBvc2l0aW9uIGhlYWRlcnMgLSBlYWNoIHBvc2l0aW9uIGZvbGxvd2VkIGJ5IEVtYWlsLCBZZWFyIGNvbHVtbnNcclxuICAgICAgICAvLyBSb3cgMys6IERhdGEgLSBtdWx0aXBsZSByb3dzIGNhbiBoYXZlIG5hbWVzIHVuZGVyIGVhY2ggcG9zaXRpb25cclxuXHJcbiAgICAgICAgLy8gR2V0IHRoZSBoZWFkZXIgcm93IChyb3cgMiwgaW5kZXggMSkgdG8gZmluZCBwb3NpdGlvbiBuYW1lc1xyXG4gICAgICAgIGNvbnN0IGhlYWRlclJvdyA9IGxpbmVzWzFdIHx8IFtdO1xyXG5cclxuICAgICAgICAvLyBGaW5kIHNlY3Rpb24gYm91bmRhcmllcyBpbiByb3cgMVxyXG4gICAgICAgIGNvbnN0IHJvdzEgPSBsaW5lc1swXSB8fCBbXTtcclxuICAgICAgICBsZXQgbWNDYWJpbmV0SGVhZGVyQ29sID0gLTE7XHJcbiAgICAgICAgbGV0IHBjSGVhZGVyQ29sID0gLTE7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93MS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAocm93MVtpXSAmJiByb3cxW2ldLmluY2x1ZGVzKFwiTWNDYWJpbmV0XCIpKSB7XHJcbiAgICAgICAgICAgICAgICBtY0NhYmluZXRIZWFkZXJDb2wgPSBpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChyb3cxW2ldICYmIHJvdzFbaV0uaW5jbHVkZXMoXCJQZW9wbGUncyBDb3VuY2lsXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBwY0hlYWRlckNvbCA9IGk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIE1jQ2FiaW5ldCBzZWN0aW9uOiBmcm9tIE1jQ2FiaW5ldCBoZWFkZXIgdG8gb25lIGNvbHVtbiBiZWZvcmUgUEMgaGVhZGVyXHJcbiAgICAgICAgLy8gUEMgc2VjdGlvbjogZnJvbSBQQyBoZWFkZXIgb253YXJkc1xyXG4gICAgICAgIC8vIEVDIHNlY3Rpb246IGV2ZXJ5dGhpbmcgYmVmb3JlIE1jQ2FiaW5ldCBoZWFkZXJcclxuXHJcbiAgICAgICAgLy8gRmluZCBhbGwgcG9zaXRpb24gY29sdW1ucyAoY29sdW1ucyB0aGF0IGFyZSBub3QgXCJFbWFpbFwiIG9yIFwiWWVhclwiIGFuZCBoYXZlIGEgdmFsdWUpXHJcbiAgICAgICAgY29uc3QgZWNQb3NpdGlvbnMgPSBbXTsgLy8geyBjb2w6IG51bWJlciwgbmFtZTogc3RyaW5nIH1cclxuICAgICAgICBjb25zdCBtY0NhYmluZXRQb3NpdGlvbnMgPSBbXTtcclxuICAgICAgICBjb25zdCBwY1Bvc2l0aW9ucyA9IFtdO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCBoZWFkZXJSb3cubGVuZ3RoOyBjb2wrKykge1xyXG4gICAgICAgICAgICBjb25zdCBoZWFkZXIgPSBoZWFkZXJSb3dbY29sXTtcclxuICAgICAgICAgICAgaWYgKGhlYWRlciAmJiBoZWFkZXIgIT09ICdFbWFpbCcgJiYgaGVhZGVyICE9PSAnWWVhcicpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9uSW5mbyA9IHsgY29sLCBuYW1lOiBoZWFkZXIucmVwbGFjZSgvXFxzKlxcKFteKV0qXFwpXFxzKi9nLCAnJykudHJpbSgpIH07XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gRGV0ZXJtaW5lIHdoaWNoIHNlY3Rpb24gdGhpcyBjb2x1bW4gYmVsb25ncyB0byBiYXNlZCBvbiByb3cgMSBoZWFkZXJzXHJcbiAgICAgICAgICAgICAgICAvLyBNY0NhYmluZXQ6IGZyb20gbWNDYWJpbmV0SGVhZGVyQ29sIHVwIHRvIChidXQgbm90IGluY2x1ZGluZykgcGNIZWFkZXJDb2xcclxuICAgICAgICAgICAgICAgIC8vIFBDOiBmcm9tIHBjSGVhZGVyQ29sIG9ud2FyZHNcclxuICAgICAgICAgICAgICAgIC8vIEVDOiBiZWZvcmUgbWNDYWJpbmV0SGVhZGVyQ29sXHJcbiAgICAgICAgICAgICAgICBpZiAocGNIZWFkZXJDb2wgIT09IC0xICYmIGNvbCA+PSBwY0hlYWRlckNvbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBjUG9zaXRpb25zLnB1c2gocG9zaXRpb25JbmZvKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobWNDYWJpbmV0SGVhZGVyQ29sICE9PSAtMSAmJiBjb2wgPj0gbWNDYWJpbmV0SGVhZGVyQ29sICYmIGNvbCA8IHBjSGVhZGVyQ29sKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWNDYWJpbmV0UG9zaXRpb25zLnB1c2gocG9zaXRpb25JbmZvKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobWNDYWJpbmV0SGVhZGVyQ29sID09PSAtMSB8fCBjb2wgPCBtY0NhYmluZXRIZWFkZXJDb2wpIHtcclxuICAgICAgICAgICAgICAgICAgICBlY1Bvc2l0aW9ucy5wdXNoKHBvc2l0aW9uSW5mbyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFBhcnNlIEVDIHBvc2l0aW9uc1xyXG4gICAgICAgIGZvciAoY29uc3QgcG9zIG9mIGVjUG9zaXRpb25zKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHJvd0lkeCA9IDI7IHJvd0lkeCA8IGxpbmVzLmxlbmd0aDsgcm93SWR4KyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJvdyA9IGxpbmVzW3Jvd0lkeF07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gKHJvd1twb3MuY29sXSB8fCAnJykudHJpbSgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBleGVjdXRpdmVfY291bmNpbC5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHBvcy5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbWFpbDogKHJvd1twb3MuY29sICsgMV0gfHwgJycpLnRyaW0oKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeWVhcjogKHJvd1twb3MuY29sICsgMl0gfHwgJycpLnRyaW0oKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBQYXJzZSBNY0NhYmluZXQgcG9zaXRpb25zXHJcbiAgICAgICAgY29uc3QgbWNjYWJpbmV0ID0gW107XHJcbiAgICAgICAgZm9yIChjb25zdCBwb3Mgb2YgbWNDYWJpbmV0UG9zaXRpb25zKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHJvd0lkeCA9IDI7IHJvd0lkeCA8IGxpbmVzLmxlbmd0aDsgcm93SWR4KyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJvdyA9IGxpbmVzW3Jvd0lkeF07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gKHJvd1twb3MuY29sXSB8fCAnJykudHJpbSgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBtY2NhYmluZXQucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBwb3MubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW1haWw6IChyb3dbcG9zLmNvbCArIDFdIHx8ICcnKS50cmltKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHllYXI6IChyb3dbcG9zLmNvbCArIDJdIHx8ICcnKS50cmltKClcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gUGFyc2UgUEMgcG9zaXRpb25zXHJcbiAgICAgICAgZm9yIChjb25zdCBwb3Mgb2YgcGNQb3NpdGlvbnMpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgcm93SWR4ID0gMjsgcm93SWR4IDwgbGluZXMubGVuZ3RoOyByb3dJZHgrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgcm93ID0gbGluZXNbcm93SWR4XTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSAocm93W3Bvcy5jb2xdIHx8ICcnKS50cmltKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAobmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBlb3BsZXNfY291bmNpbC5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHBvcy5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbWFpbDogKHJvd1twb3MuY29sICsgMV0gfHwgJycpLnRyaW0oKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeWVhcjogKHJvd1twb3MuY29sICsgMl0gfHwgJycpLnRyaW0oKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4geyBleGVjdXRpdmVfY291bmNpbCwgbWNjYWJpbmV0LCBwZW9wbGVzX2NvdW5jaWwgfTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBhY3RpdmVUYWIsIGV4ZWN1dGl2ZV9jb3VuY2lsLCBtY2NhYmluZXQsIHBlb3BsZXNfY291bmNpbCwgaXNMb2FkaW5nIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgICAgICBjb25zdCB0YWJzID0gW1xyXG4gICAgICAgICAgICB7IGlkOiAnRXhlY3V0aXZlIENvdW5jaWwnLCBkYXRhOiBleGVjdXRpdmVfY291bmNpbCB9LFxyXG4gICAgICAgICAgICB7IGlkOiAnTWNDYWJpbmV0JywgZGF0YTogbWNjYWJpbmV0IH0sXHJcbiAgICAgICAgICAgIHsgaWQ6IFwiUGVvcGxlJ3MgQ291bmNpbFwiLCBkYXRhOiBwZW9wbGVzX2NvdW5jaWwgfVxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIGNvbnN0IGFjdGl2ZURhdGEgPSB0YWJzLmZpbmQodCA9PiB0LmlkID09PSBhY3RpdmVUYWIpPy5kYXRhIHx8IFtdO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWNtaW5pc3RyeS1wYWdlJz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtY21pbmlzdHJ5LWhlcm8nPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J21jbWluaXN0cnktbWFpbi10aXRsZSc+TWNNaW5pc3RyeTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWNtaW5pc3RyeS10YWJzJz5cclxuICAgICAgICAgICAgICAgICAgICB7dGFicy5tYXAodGFiID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXt0YWIuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BtaW5pc3RyeS10YWIgJHthY3RpdmVUYWIgPT09IHRhYi5pZCA/ICdhY3RpdmUnIDogJyd9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBhY3RpdmVUYWI6IHRhYi5pZCB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhYi5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7aXNMb2FkaW5nID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZy1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nLXNwaW5uZXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibG9hZGluZy10ZXh0XCI+TG9hZGluZy4uLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZhZGUtaW4nIGtleT17YWN0aXZlVGFifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJveCB3aWR0aD17WzMzMF19IG1sPSdhdXRvJyBtcj0nYXV0byc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdkaXZpc2lvbi10aXRsZSc+e2FjdGl2ZVRhYn08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRzIGNvbnRlbnQ9e2FjdGl2ZURhdGF9IHdpZHRoPXtbMjcwXX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1jTWluaXN0cnk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=