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
      var mccabinet = [];
      var peoples_council = [];

      // Expected sheet structure (based on similar sheets):
      // Row 1: Header (McMinistry)
      // Row 2: Column headers - EC Position | Name | Year | Email | McCabinet Position | Name | Year | Email | PC Position | Name | Year | Email
      // Row 3+: Data

      // Parse data rows (starting from row 3, index 2)
      for (var rowIdx = 2; rowIdx < lines.length; rowIdx++) {
        var row = lines[rowIdx];

        // Executive Council (columns 0-3): Position, Name, Year, Email
        if (row[0] || row[1]) {
          var position = (row[0] || '').trim();
          var name = (row[1] || '').trim();
          if (name && name !== '' && position !== '') {
            executive_council.push({
              position: position,
              name: name,
              year: (row[2] || '').trim(),
              email: (row[3] || '').trim()
            });
          }
        }

        // McCabinet (columns 4-7): Position, Name, Year, Email
        if (row[4] || row[5]) {
          var _position = (row[4] || '').trim();
          var _name = (row[5] || '').trim();
          if (_name && _name !== '' && _position !== '') {
            mccabinet.push({
              position: _position,
              name: _name,
              year: (row[6] || '').trim(),
              email: (row[7] || '').trim()
            });
          }
        }

        // People's Council (columns 8-11): Position, Name, Year, Email
        if (row[8] || row[9]) {
          var _position2 = (row[8] || '').trim();
          var _name2 = (row[9] || '').trim();
          if (_name2 && _name2 !== '' && _position2 !== '') {
            peoples_council.push({
              position: _position2,
              name: _name2,
              year: (row[10] || '').trim(),
              email: (row[11] || '').trim()
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
          lineNumber: 137,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "mcministry-hero",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 17
        }
      }, __jsx("h1", {
        className: "mcministry-main-title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 21
        }
      }, "McMinistry")), __jsx("div", {
        className: "mcministry-tabs",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142,
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
            lineNumber: 144,
            columnNumber: 25
          }
        }, tab.id);
      })), isLoading ? __jsx("div", {
        className: "loading-container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "loading-spinner",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 25
        }
      }), __jsx("p", {
        className: "loading-text",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 25
        }
      }, "Loading...")) : __jsx("div", {
        className: "fade-in",
        key: activeTab,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 21
        }
      }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_7__["Box"], {
        width: [330],
        ml: "auto",
        mr: "auto",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 25
        }
      }, __jsx("h2", {
        className: "division-title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 29
        }
      }, activeTab)), __jsx(_general_contactcards__WEBPACK_IMPORTED_MODULE_8__["default"], {
        content: activeData,
        width: [270],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164,
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

/***/ }),

/***/ "./components/people/mcministry/mcministry.json":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wZW9wbGUvbWNtaW5pc3RyeS9tY21pbmlzdHJ5LmpzIl0sIm5hbWVzIjpbIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJlIiwidCIsInIiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJuIiwiaGFzT3duUHJvcGVydHkiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImkiLCJTeW1ib2wiLCJhIiwiaXRlcmF0b3IiLCJjIiwiYXN5bmNJdGVyYXRvciIsInUiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIndyYXAiLCJHZW5lcmF0b3IiLCJjcmVhdGUiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwidHlwZSIsImFyZyIsImNhbGwiLCJoIiwibCIsImYiLCJzIiwieSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJwIiwiZCIsImdldFByb3RvdHlwZU9mIiwidiIsInZhbHVlcyIsImciLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJpbnZva2UiLCJyZXNvbHZlIiwiX19hd2FpdCIsInRoZW4iLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsIkVycm9yIiwiZG9uZSIsIm1ldGhvZCIsImRlbGVnYXRlIiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiVHlwZUVycm9yIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpc05hTiIsImxlbmd0aCIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwia2V5cyIsInJldmVyc2UiLCJwb3AiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicnZhbCIsImhhbmRsZSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwiZGVsZWdhdGVZaWVsZCIsIl9jYWxsU3VwZXIiLCJfZ2V0UHJvdG90eXBlT2YiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJSZWZsZWN0IiwiY29uc3RydWN0IiwiYXBwbHkiLCJCb29sZWFuIiwidmFsdWVPZiIsIk1jTWluaXN0cnkiLCJfUmVhY3QkQ29tcG9uZW50IiwicHJvcHMiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjayIsInN0YXRlIiwiYWN0aXZlVGFiIiwiZXhlY3V0aXZlX2NvdW5jaWwiLCJtY2NhYmluZXQiLCJwZW9wbGVzX2NvdW5jaWwiLCJpc0xvYWRpbmciLCJfaW5oZXJpdHMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJfY29tcG9uZW50RGlkTW91bnQiLCJfYXN5bmNUb0dlbmVyYXRvciIsIl9jYWxsZWUiLCJkYXRhIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsImZldGNoTWluaXN0cnlEYXRhIiwic2V0U3RhdGUiLCJ0MCIsImNvbnNvbGUiLCJ3YXJuIiwiY29tcG9uZW50RGlkTW91bnQiLCJhcmd1bWVudHMiLCJfZmV0Y2hNaW5pc3RyeURhdGEiLCJfY2FsbGVlMiIsInB1Ymxpc2hlZElkIiwiZ2lkIiwiY2FjaGVCdXN0ZXIiLCJ1cmwiLCJyZXNwb25zZSIsInRleHQiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJEYXRlIiwibm93IiwiY29uY2F0IiwiZmV0Y2giLCJ0cmFuc2Zvcm1DU1ZEYXRhIiwiY3N2VGV4dCIsImxpbmVzIiwic3BsaXQiLCJtYXAiLCJsaW5lIiwicmVzdWx0IiwiY3VycmVudCIsImluUXVvdGVzIiwiY2hhciIsInRyaW0iLCJyb3dJZHgiLCJyb3ciLCJwb3NpdGlvbiIsInllYXIiLCJlbWFpbCIsInJlbmRlciIsIl90YWJzJGZpbmQiLCJfdGhpczIiLCJfdGhpcyRzdGF0ZSIsInRhYnMiLCJpZCIsImFjdGl2ZURhdGEiLCJmaW5kIiwiX19qc3giLCJjbGFzc05hbWUiLCJfX3NlbGYiLCJfX3NvdXJjZSIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsInRhYiIsIm9uQ2xpY2siLCJCb3giLCJ3aWR0aCIsIm1sIiwibXIiLCJDYXJkcyIsImNvbnRlbnQiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OytDQUNBLHFKQUFBQSxtQkFBQSxZQUFBQSxvQkFBQSxXQUFBQyxDQUFBLFNBQUFDLENBQUEsRUFBQUQsQ0FBQSxPQUFBRSxDQUFBLEdBQUFDLE1BQUEsQ0FBQUMsU0FBQSxFQUFBQyxDQUFBLEdBQUFILENBQUEsQ0FBQUksY0FBQSxFQUFBQyxDQUFBLEdBQUFKLE1BQUEsQ0FBQUssY0FBQSxjQUFBUCxDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxJQUFBRCxDQUFBLENBQUFELENBQUEsSUFBQUUsQ0FBQSxDQUFBTyxLQUFBLEtBQUFDLENBQUEsd0JBQUFDLE1BQUEsR0FBQUEsTUFBQSxPQUFBQyxDQUFBLEdBQUFGLENBQUEsQ0FBQUcsUUFBQSxrQkFBQUMsQ0FBQSxHQUFBSixDQUFBLENBQUFLLGFBQUEsdUJBQUFDLENBQUEsR0FBQU4sQ0FBQSxDQUFBTyxXQUFBLDhCQUFBQyxPQUFBakIsQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsV0FBQUMsTUFBQSxDQUFBSyxjQUFBLENBQUFQLENBQUEsRUFBQUQsQ0FBQSxJQUFBUyxLQUFBLEVBQUFQLENBQUEsRUFBQWlC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dkNQLEtBQUE7UUFBR0MsU0FBUyxFQUFDLGNBQWM7UUFBQUMsTUFBQTtRQUFBQyxRQUFBO1VBQUFDLFFBQUEsRUFBQUMsWUFBQTtVQUFBQyxVQUFBO1VBQUFDLFlBQUE7UUFBQTtNQUFBLGVBQWMsQ0FDeEMsQ0FBQyxHQUVOUCxLQUFBO1FBQUtDLFNBQVMsRUFBQyxTQUFTO1FBQUNyRCxHQUFHLEVBQUVQLFNBQVU7UUFBQTZELE1BQUE7UUFBQUMsUUFBQTtVQUFBQyxRQUFBLEVBQUFDLFlBQUE7VUFBQUMsVUFBQTtVQUFBQyxZQUFBO1FBQUE7TUFBQSxHQUNwQ1AsS0FBQSxDQUFDVSwwQ0FBRztRQUFDQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUU7UUFBQ0MsRUFBRSxFQUFDLE1BQU07UUFBQ0MsRUFBRSxFQUFDLE1BQU07UUFBQVgsTUFBQTtRQUFBQyxRQUFBO1VBQUFDLFFBQUEsRUFBQUMsWUFBQTtVQUFBQyxVQUFBO1VBQUFDLFlBQUE7UUFBQTtNQUFBLEdBQ2xDUCxLQUFBO1FBQUlDLFNBQVMsRUFBQyxnQkFBZ0I7UUFBQUMsTUFBQTtRQUFBQyxRQUFBO1VBQUFDLFFBQUEsRUFBQUMsWUFBQTtVQUFBQyxVQUFBO1VBQUFDLFlBQUE7UUFBQTtNQUFBLEdBQUVsRSxTQUFjLENBQzdDLENBQUMsRUFDTjJELEtBQUEsQ0FBQ2MsNkRBQUs7UUFBQ0MsT0FBTyxFQUFFakIsVUFBVztRQUFDYSxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUU7UUFBQVQsTUFBQTtRQUFBQyxRQUFBO1VBQUFDLFFBQUEsRUFBQUMsWUFBQTtVQUFBQyxVQUFBO1VBQUFDLFlBQUE7UUFBQTtNQUFBLENBQUUsQ0FDMUMsQ0FFUixDQUFDO0lBRWQ7RUFBQztBQUFBLEVBcEtvQlMsNENBQUssQ0FBQ0MsU0FBUztBQXVLekJsRix5RUFBVSxFQUFDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Blb3BsZS9tY21pbmlzdHJ5LjA3YmEyOTI0OTk1NzJlYTI5ZTk3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCb3ggfSBmcm9tICdyZWJhc3MnO1xyXG5pbXBvcnQgQ2FyZHMgZnJvbSAnLi4vLi4vZ2VuZXJhbC9jb250YWN0Y2FyZHMnO1xyXG5cclxuY2xhc3MgTWNNaW5pc3RyeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBhY3RpdmVUYWI6ICdFeGVjdXRpdmUgQ291bmNpbCcsXHJcbiAgICAgICAgICAgIGV4ZWN1dGl2ZV9jb3VuY2lsOiBbXSxcclxuICAgICAgICAgICAgbWNjYWJpbmV0OiBbXSxcclxuICAgICAgICAgICAgcGVvcGxlc19jb3VuY2lsOiBbXSxcclxuICAgICAgICAgICAgaXNMb2FkaW5nOiB0cnVlXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5mZXRjaE1pbmlzdHJ5RGF0YSgpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGV4ZWN1dGl2ZV9jb3VuY2lsOiBkYXRhLmV4ZWN1dGl2ZV9jb3VuY2lsLFxyXG4gICAgICAgICAgICAgICAgbWNjYWJpbmV0OiBkYXRhLm1jY2FiaW5ldCxcclxuICAgICAgICAgICAgICAgIHBlb3BsZXNfY291bmNpbDogZGF0YS5wZW9wbGVzX2NvdW5jaWwsXHJcbiAgICAgICAgICAgICAgICBpc0xvYWRpbmc6IGZhbHNlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignRmFpbGVkIHRvIGZldGNoIG1pbmlzdHJ5IGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNMb2FkaW5nOiBmYWxzZSB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZmV0Y2hNaW5pc3RyeURhdGEoKSB7XHJcbiAgICAgICAgY29uc3QgcHVibGlzaGVkSWQgPSAnMlBBQ1gtMXZRVnVjVFF5Y2JrZ1pMVjM3d3BieE9WWFRUdjByVVBkTmplWDQyakl2ZVd4QlVPZlhiNlJOWEFlZnlsdzNJRVNhOGhjWU9WdWNQUExBSnonO1xyXG4gICAgICAgIGNvbnN0IGdpZCA9ICc0MDU4NTg3NDgnOyAvLyBNY01pbmlzdHJ5IHNoZWV0XHJcbiAgICAgICAgY29uc3QgY2FjaGVCdXN0ZXIgPSBEYXRlLm5vdygpO1xyXG5cclxuICAgICAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vc3ByZWFkc2hlZXRzL2QvZS8ke3B1Ymxpc2hlZElkfS9wdWI/Z2lkPSR7Z2lkfSZzaW5nbGU9dHJ1ZSZvdXRwdXQ9Y3N2Jl89JHtjYWNoZUJ1c3Rlcn1gO1xyXG5cclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XHJcbiAgICAgICAgY29uc3QgdGV4dCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtQ1NWRGF0YSh0ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICB0cmFuc2Zvcm1DU1ZEYXRhKGNzdlRleHQpIHtcclxuICAgICAgICAvLyBQYXJzZSBDU1ZcclxuICAgICAgICBjb25zdCBsaW5lcyA9IGNzdlRleHQuc3BsaXQoJ1xcbicpLm1hcChsaW5lID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50ID0gJyc7XHJcbiAgICAgICAgICAgIGxldCBpblF1b3RlcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNoYXIgPSBsaW5lW2ldO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNoYXIgPT09ICdcIicpIHtcclxuICAgICAgICAgICAgICAgICAgICBpblF1b3RlcyA9ICFpblF1b3RlcztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2hhciA9PT0gJywnICYmICFpblF1b3Rlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGN1cnJlbnQudHJpbSgpKTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50ID0gJyc7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnQgKz0gY2hhcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXN1bHQucHVzaChjdXJyZW50LnRyaW0oKSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGV4ZWN1dGl2ZV9jb3VuY2lsID0gW107XHJcbiAgICAgICAgY29uc3QgbWNjYWJpbmV0ID0gW107XHJcbiAgICAgICAgY29uc3QgcGVvcGxlc19jb3VuY2lsID0gW107XHJcblxyXG4gICAgICAgIC8vIEV4cGVjdGVkIHNoZWV0IHN0cnVjdHVyZSAoYmFzZWQgb24gc2ltaWxhciBzaGVldHMpOlxyXG4gICAgICAgIC8vIFJvdyAxOiBIZWFkZXIgKE1jTWluaXN0cnkpXHJcbiAgICAgICAgLy8gUm93IDI6IENvbHVtbiBoZWFkZXJzIC0gRUMgUG9zaXRpb24gfCBOYW1lIHwgWWVhciB8IEVtYWlsIHwgTWNDYWJpbmV0IFBvc2l0aW9uIHwgTmFtZSB8IFllYXIgfCBFbWFpbCB8IFBDIFBvc2l0aW9uIHwgTmFtZSB8IFllYXIgfCBFbWFpbFxyXG4gICAgICAgIC8vIFJvdyAzKzogRGF0YVxyXG5cclxuICAgICAgICAvLyBQYXJzZSBkYXRhIHJvd3MgKHN0YXJ0aW5nIGZyb20gcm93IDMsIGluZGV4IDIpXHJcbiAgICAgICAgZm9yIChsZXQgcm93SWR4ID0gMjsgcm93SWR4IDwgbGluZXMubGVuZ3RoOyByb3dJZHgrKykge1xyXG4gICAgICAgICAgICBjb25zdCByb3cgPSBsaW5lc1tyb3dJZHhdO1xyXG5cclxuICAgICAgICAgICAgLy8gRXhlY3V0aXZlIENvdW5jaWwgKGNvbHVtbnMgMC0zKTogUG9zaXRpb24sIE5hbWUsIFllYXIsIEVtYWlsXHJcbiAgICAgICAgICAgIGlmIChyb3dbMF0gfHwgcm93WzFdKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwb3NpdGlvbiA9IChyb3dbMF0gfHwgJycpLnRyaW0oKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSAocm93WzFdIHx8ICcnKS50cmltKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAobmFtZSAmJiBuYW1lICE9PSAnJyAmJiBwb3NpdGlvbiAhPT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICBleGVjdXRpdmVfY291bmNpbC5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHBvc2l0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5ZWFyOiAocm93WzJdIHx8ICcnKS50cmltKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiAocm93WzNdIHx8ICcnKS50cmltKClcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gTWNDYWJpbmV0IChjb2x1bW5zIDQtNyk6IFBvc2l0aW9uLCBOYW1lLCBZZWFyLCBFbWFpbFxyXG4gICAgICAgICAgICBpZiAocm93WzRdIHx8IHJvd1s1XSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcG9zaXRpb24gPSAocm93WzRdIHx8ICcnKS50cmltKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gKHJvd1s1XSB8fCAnJykudHJpbSgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgJiYgbmFtZSAhPT0gJycgJiYgcG9zaXRpb24gIT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWNjYWJpbmV0LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcG9zaXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHllYXI6IChyb3dbNl0gfHwgJycpLnRyaW0oKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW1haWw6IChyb3dbN10gfHwgJycpLnRyaW0oKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBQZW9wbGUncyBDb3VuY2lsIChjb2x1bW5zIDgtMTEpOiBQb3NpdGlvbiwgTmFtZSwgWWVhciwgRW1haWxcclxuICAgICAgICAgICAgaWYgKHJvd1s4XSB8fCByb3dbOV0pIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9uID0gKHJvd1s4XSB8fCAnJykudHJpbSgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IChyb3dbOV0gfHwgJycpLnRyaW0oKTtcclxuICAgICAgICAgICAgICAgIGlmIChuYW1lICYmIG5hbWUgIT09ICcnICYmIHBvc2l0aW9uICE9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHBlb3BsZXNfY291bmNpbC5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHBvc2l0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5ZWFyOiAocm93WzEwXSB8fCAnJykudHJpbSgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbWFpbDogKHJvd1sxMV0gfHwgJycpLnRyaW0oKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4geyBleGVjdXRpdmVfY291bmNpbCwgbWNjYWJpbmV0LCBwZW9wbGVzX2NvdW5jaWwgfTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBhY3RpdmVUYWIsIGV4ZWN1dGl2ZV9jb3VuY2lsLCBtY2NhYmluZXQsIHBlb3BsZXNfY291bmNpbCwgaXNMb2FkaW5nIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgICAgICBjb25zdCB0YWJzID0gW1xyXG4gICAgICAgICAgICB7IGlkOiAnRXhlY3V0aXZlIENvdW5jaWwnLCBkYXRhOiBleGVjdXRpdmVfY291bmNpbCB9LFxyXG4gICAgICAgICAgICB7IGlkOiAnTWNDYWJpbmV0JywgZGF0YTogbWNjYWJpbmV0IH0sXHJcbiAgICAgICAgICAgIHsgaWQ6IFwiUGVvcGxlJ3MgQ291bmNpbFwiLCBkYXRhOiBwZW9wbGVzX2NvdW5jaWwgfVxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIGNvbnN0IGFjdGl2ZURhdGEgPSB0YWJzLmZpbmQodCA9PiB0LmlkID09PSBhY3RpdmVUYWIpPy5kYXRhIHx8IFtdO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWNtaW5pc3RyeS1wYWdlJz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtY21pbmlzdHJ5LWhlcm8nPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J21jbWluaXN0cnktbWFpbi10aXRsZSc+TWNNaW5pc3RyeTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWNtaW5pc3RyeS10YWJzJz5cclxuICAgICAgICAgICAgICAgICAgICB7dGFicy5tYXAodGFiID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXt0YWIuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BtaW5pc3RyeS10YWIgJHthY3RpdmVUYWIgPT09IHRhYi5pZCA/ICdhY3RpdmUnIDogJyd9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBhY3RpdmVUYWI6IHRhYi5pZCB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhYi5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7aXNMb2FkaW5nID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZy1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nLXNwaW5uZXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibG9hZGluZy10ZXh0XCI+TG9hZGluZy4uLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZhZGUtaW4nIGtleT17YWN0aXZlVGFifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJveCB3aWR0aD17WzMzMF19IG1sPSdhdXRvJyBtcj0nYXV0byc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdkaXZpc2lvbi10aXRsZSc+e2FjdGl2ZVRhYn08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRzIGNvbnRlbnQ9e2FjdGl2ZURhdGF9IHdpZHRoPXtbMjcwXX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1jTWluaXN0cnk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=