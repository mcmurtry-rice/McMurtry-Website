webpackHotUpdate_N_E("pages/people/committees",{

/***/ "./components/people/committees/committees.js":
/*!****************************************************!*\
  !*** ./components/people/committees/committees.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Committees; });
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
/* harmony import */ var _committees_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./committees.json */ "./components/people/committees/committees.json");
var _committees_json__WEBPACK_IMPORTED_MODULE_10___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./committees.json */ "./components/people/committees/committees.json", 1);







var _jsxFileName = "C:\\Users\\anton\\Documents\\Projects\\MurtWebsite\\components\\people\\committees\\committees.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _callSuper(t, o, e) { return o = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(o), Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }




var Committees = /*#__PURE__*/function (_React$Component) {
  function Committees(props) {
    var _this;
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Committees);
    _this = _callSuper(this, Committees, [props]);
    _this.state = {
      division: 0,
      committee: 0,
      membersData: {},
      isLoading: true
    };
    _this.changeDivision = _this.changeDivision.bind(_this);
    _this.changeCommittee = _this.changeCommittee.bind(_this);
    return _this;
  }
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Committees, _React$Component);
  return Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Committees, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var members;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return this.fetchMembersData();
            case 3:
              members = _context.sent;
              this.setState({
                membersData: members,
                isLoading: false
              });
              _context.next = 11;
              break;
            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              console.warn('Failed to fetch members:', _context.t0);
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
    key: "fetchMembersData",
    value: function () {
      var _fetchMembersData = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var publishedId, gid, cacheBuster, url, response, text;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              // Use the published spreadsheet URL for faster updates
              publishedId = '2PACX-1vQVucTQycbkgZLV37wpbxOVXTTv0rUPdNjeX42jIveWxBUOfXb6RNXAefylw3IESa8hcYOVucPPLAJz';
              gid = '1832339805'; // Committees sheet
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
      function fetchMembersData() {
        return _fetchMembersData.apply(this, arguments);
      }
      return fetchMembersData;
    }()
  }, {
    key: "transformCSVData",
    value: function transformCSVData(csvText) {
      // Parse CSV
      var lines = csvText.split('\n').map(function (line) {
        // Simple CSV parsing (handles basic cases)
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

      // Map sheet committee names to JSON committee names
      var committeeNameMapping = {
        'Alumni and Family': 'Alumni',
        'Murtch': 'Murtchandise',
        'MIS': 'McMurtry Innovation Space (MIS)',
        'Website and App': 'Website',
        'Externals Socials': 'External Socials',
        'Internals Socials': 'Internal Socials'
      };

      // Row 2 (index 1) has committee names
      var committeeRow = lines[1] || [];
      var committees = {};

      // Parse committee names, skipping "Email" columns
      for (var col = 0; col < committeeRow.length; col++) {
        var name = committeeRow[col];
        if (name && name !== 'Email') {
          // Remove emoji from name for matching
          var cleanName = name.replace(/[^\w\s()]/g, '').trim();
          if (committeeNameMapping[cleanName]) {
            cleanName = committeeNameMapping[cleanName];
          }
          committees[col] = {
            name: cleanName,
            heads: [],
            members: []
          };
        }
      }

      // Parse members from row 3+ (index 2+)
      for (var rowIdx = 2; rowIdx < lines.length; rowIdx++) {
        var row = lines[rowIdx];
        for (var _i = 0, _Object$entries = Object.entries(committees); _i < _Object$entries.length; _i++) {
          var _Object$entries$_i = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_Object$entries[_i], 2),
            colStr = _Object$entries$_i[0],
            committee = _Object$entries$_i[1];
          var _col = parseInt(colStr);
          var memberName = row[_col];
          if (memberName) {
            // Check if name ends with asterisk (head)
            if (memberName.trim().endsWith('*')) {
              var _cleanName = memberName.trim().replace(/\*$/, '').trim();
              committee.heads.push({
                name: _cleanName
              });
            } else {
              committee.members.push({
                name: memberName.trim()
              });
            }
          }
        }
      }

      // Return as { committeeName: { heads: [...], members: [...] } }
      var result = {};
      for (var _i2 = 0, _Object$values = Object.values(committees); _i2 < _Object$values.length; _i2++) {
        var _committee = _Object$values[_i2];
        result[_committee.name] = {
          heads: _committee.heads,
          members: _committee.members
        };
      }
      return result;
    }
  }, {
    key: "changeDivision",
    value: function changeDivision(index) {
      this.setState({
        division: index,
        committee: 0
      });
    }
  }, {
    key: "changeCommittee",
    value: function changeCommittee(index) {
      this.setState({
        committee: index
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var division_keys = [];
      var _loop = function _loop(i) {
        division_keys.push(__jsx(rebass__WEBPACK_IMPORTED_MODULE_8__["Box"], {
          key: _committees_json__WEBPACK_IMPORTED_MODULE_10__["committee_divisions"][i].division,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 17
          }
        }, __jsx("div", {
          onClick: function onClick() {
            return _this2.changeDivision(i);
          },
          className: _this2.state.division === i ? "active-division" : "inactive-division",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 21
          }
        }, __jsx("p", {
          className: "division-key",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 25
          }
        }, "".concat(_committees_json__WEBPACK_IMPORTED_MODULE_10__["committee_divisions"][i].division)))));
      };
      for (var i = 0; i < _committees_json__WEBPACK_IMPORTED_MODULE_10__["committee_divisions"].length; i++) {
        _loop(i);
      }
      var current_division = _committees_json__WEBPACK_IMPORTED_MODULE_10__["committee_divisions"][this.state.division];
      var committee_keys = [];
      var _loop2 = function _loop2(j) {
        committee_keys.push(__jsx(rebass__WEBPACK_IMPORTED_MODULE_8__["Box"], {
          key: current_division.committees[j].name,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 17
          }
        }, __jsx("div", {
          onClick: function onClick() {
            return _this2.changeCommittee(j);
          },
          className: _this2.state.committee === j ? "active-committee" : "inactive-committee",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 21
          }
        }, __jsx("p", {
          className: "committee-key",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 25
          }
        }, current_division.committees[j].name))));
      };
      for (var j = 0; j < current_division.committees.length; j++) {
        _loop2(j);
      }
      return __jsx("div", {
        className: "committee-page",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "committee-hero",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 17
        }
      }, __jsx("h1", {
        className: "committee-main-title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 21
        }
      }, "Committees")), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 17
        }
      }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_8__["Flex"], {
        justifyContent: "center",
        flexWrap: "wrap",
        flexDirection: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 21
        }
      }, division_keys)), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 17
        }
      }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_8__["Flex"], {
        justifyContent: "center",
        flexWrap: "wrap",
        flexDirection: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 21
        }
      }, committee_keys)), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 17
        }
      }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_8__["Box"], {
        width: [0.9, 0.7, 0.6, 0.5],
        ml: "auto",
        mr: "auto",
        className: "committee-description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 21
        }
      }, __jsx("h1", {
        className: "division-title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 25
        }
      }, _committees_json__WEBPACK_IMPORTED_MODULE_10__["committee_divisions"][this.state.division].committees[this.state.committee].name), __jsx(rebass__WEBPACK_IMPORTED_MODULE_8__["Box"], {
        width: [1, .75],
        mx: "auto",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 25
        }
      }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_8__["Image"], {
        key: _committees_json__WEBPACK_IMPORTED_MODULE_10__["committee_divisions"][this.state.division].committees[this.state.committee].image,
        src: _committees_json__WEBPACK_IMPORTED_MODULE_10__["committee_divisions"][this.state.division].committees[this.state.committee].image,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 29
        }
      })), __jsx("div", {
        dangerouslySetInnerHTML: {
          __html: _committees_json__WEBPACK_IMPORTED_MODULE_10__["committee_divisions"][this.state.division].committees[this.state.committee].description
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 25
        }
      })), this.renderHeadsAndMembers()));
    }
  }, {
    key: "renderHeadsAndMembers",
    value: function renderHeadsAndMembers() {
      var currentCommittee = _committees_json__WEBPACK_IMPORTED_MODULE_10__["committee_divisions"][this.state.division].committees[this.state.committee];
      var sheetData = this.state.membersData[currentCommittee.name];

      // Get heads: prefer live data from sheet, fall back to static JSON
      var liveHeads = (sheetData === null || sheetData === void 0 ? void 0 : sheetData.heads) || [];
      var staticHeads = currentCommittee.heads || [];
      var heads = liveHeads.length > 0 ? liveHeads : staticHeads;

      // Get members from sheet
      var members = (sheetData === null || sheetData === void 0 ? void 0 : sheetData.members) || [];
      if (this.state.isLoading) {
        return __jsx("div", {
          className: "loading-container",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 201,
            columnNumber: 17
          }
        }, __jsx("div", {
          className: "loading-spinner",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 202,
            columnNumber: 21
          }
        }), __jsx("p", {
          className: "loading-text",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 203,
            columnNumber: 21
          }
        }, "Loading..."));
      }
      return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, heads.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx("h2", {
        className: "committee-subtitle",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212,
          columnNumber: 25
        }
      }, "Committee Heads"), __jsx(_general_contactcards__WEBPACK_IMPORTED_MODULE_9__["default"], {
        content: heads,
        minHeight: "110px",
        width: 240,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213,
          columnNumber: 25
        }
      })), members.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx("h2", {
        className: "committee-subtitle",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218,
          columnNumber: 25
        }
      }, "Committee Members"), __jsx(_general_contactcards__WEBPACK_IMPORTED_MODULE_9__["default"], {
        content: members,
        minHeight: "110px",
        width: 240,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219,
          columnNumber: 25
        }
      })));
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wZW9wbGUvY29tbWl0dGVlcy9jb21taXR0ZWVzLmpzIl0sIm5hbWVzIjpbIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJlIiwidCIsInIiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJuIiwiaGFzT3duUHJvcGVydHkiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImkiLCJTeW1ib2wiLCJhIiwiaXRlcmF0b3IiLCJjIiwiYXN5bmNJdGVyYXRvciIsInUiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIndyYXAiLCJHZW5lcmF0b3IiLCJjcmVhdGUiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwidHlwZSIsImFyZyIsImNhbGwiLCJoIiwibCIsImYiLCJzIiwieSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJwIiwiZCIsImdldFByb3RvdHlwZU9mIiwidiIsInZhbHVlcyIsImciLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJpbnZva2UiLCJyZXNvbHZlIiwiX19hd2FpdCIsInRoZW4iLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsIkVycm9yIiwiZG9uZSIsIm1ldGhvZCIsImRlbGVnYXRlIiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiVHlwZUVycm9yIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpc05hTiIsImxlbmd0aCIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwia2V5cyIsInJldmVyc2UiLCJwb3AiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicnZhbCIsImhhbmRsZSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwiZGVsZWdhdGVZaWVsZCIsIl9jYWxsU3VwZXIiLCJfZ2V0UHJvdG90eXBlT2YiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJSZWZsZWN0IiwiY29uc3RydWN0IiwiYXBwbHkiLCJCb29sZWFuIiwidmFsdWVPZiIsIkNvbW1pdHRlZXMiLCJfUmVhY3QkQ29tcG9uZW50IiwicHJvcHMiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjayIsInN0YXRlIiwiZGl2aXNpb24iLCJjb21taXR0ZWUiLCJtZW1iZXJzRGF0YSIsImlzTG9hZGluZyIsImNoYW5nZURpdmlzaW9uIiwiYmluZCIsImNoYW5nZUNvbW1pdHRlZSIsIl9pbmhlcml0cyIsIl9jcmVhdGVDbGFzcyIsImtleSIsIl9jb21wb25lbnREaWRNb3VudCIsIl9hc3luY1RvR2VuZXJhdG9yIiwiX2NhbGxlZSIsIm1lbWJlcnMiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwiZmV0Y2hNZW1iZXJzRGF0YSIsInNldFN0YXRlIiwidDAiLCJjb25zb2xlIiwid2FybiIsImNvbXBvbmVudERpZE1vdW50IiwiYXJndW1lbnRzIiwiX2ZldGNoTWVtYmVyc0RhdGEiLCJfY2FsbGVlMiIsInB1Ymxpc2hlZElkIiwiZ2lkIiwiY2FjaGVCdXN0ZXIiLCJ1cmwiLCJyZXNwb25zZSIsInRleHQiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJEYXRlIiwibm93IiwiY29uY2F0IiwiZmV0Y2giLCJ0cmFuc2Zvcm1DU1ZEYXRhIiwiY3N2VGV4dCIsImxpbmVzIiwic3BsaXQiLCJtYXAiLCJsaW5lIiwicmVzdWx0IiwiY3VycmVudCIsImluUXVvdGVzIiwiY2hhciIsInRyaW0iLCJjb21taXR0ZWVOYW1lTWFwcGluZyIsImNvbW1pdHRlZVJvdyIsImNvbW1pdHRlZXMiLCJjb2wiLCJjbGVhbk5hbWUiLCJyZXBsYWNlIiwiaGVhZHMiLCJyb3dJZHgiLCJyb3ciLCJfaSIsIl9PYmplY3QkZW50cmllcyIsImVudHJpZXMiLCJfT2JqZWN0JGVudHJpZXMkX2kiLCJfc2xpY2VkVG9BcnJheSIsImNvbFN0ciIsInBhcnNlSW50IiwibWVtYmVyTmFtZSIsImVuZHNXaXRoIiwiX2kyIiwiX09iamVjdCR2YWx1ZXMiLCJpbmRleCIsInJlbmRlciIsIl90aGlzMiIsImRpdmlzaW9uX2tleXMiLCJfbG9vcCIsIl9fanN4IiwiQm94IiwiY29tbWl0dGVlX2RpdmlzaW9ucyIsIl9fc2VsZiIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwib25DbGljayIsImNsYXNzTmFtZSIsImN1cnJlbnRfZGl2aXNpb24iLCJjb21taXR0ZWVfa2V5cyIsIl9sb29wMiIsImoiLCJGbGV4IiwianVzdGlmeUNvbnRlbnQiLCJmbGV4V3JhcCIsImZsZXhEaXJlY3Rpb24iLCJ3aWR0aCIsIm1sIiwibXIiLCJteCIsIkltYWdlIiwiaW1hZ2UiLCJzcmMiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsImRlc2NyaXB0aW9uIiwicmVuZGVySGVhZHNBbmRNZW1iZXJzIiwiY3VycmVudENvbW1pdHRlZSIsInNoZWV0RGF0YSIsImxpdmVIZWFkcyIsInN0YXRpY0hlYWRzIiwiUmVhY3QiLCJGcmFnbWVudCIsIkNhcmRzIiwiY29udGVudCIsIm1pbkhlaWdodCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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RCxDQUNMLEVBQ0FwRSxPQUFPLENBQUNwRCxNQUFNLEdBQUcsQ0FBQyxJQUNmZ0gsS0FBQSxDQUFBa0MsNENBQUEsQ0FBQUMsUUFBQSxRQUNJbkMsS0FBQTtRQUFJVSxTQUFTLEVBQUMsb0JBQW9CO1FBQUFQLE1BQUE7UUFBQUMsUUFBQTtVQUFBQyxRQUFBLEVBQUFDLFlBQUE7VUFBQUMsVUFBQTtVQUFBQyxZQUFBO1FBQUE7TUFBQSxzQkFBc0IsQ0FBQyxFQUN6RFIsS0FBQSxDQUFDb0MsNkRBQUs7UUFBQ0MsT0FBTyxFQUFFakcsT0FBUTtRQUFDa0csU0FBUyxFQUFDLE9BQU87UUFBQ25CLEtBQUssRUFBRSxHQUFJO1FBQUFoQixNQUFBO1FBQUFDLFFBQUE7VUFBQUMsUUFBQSxFQUFBQyxZQUFBO1VBQUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBO01BQUEsQ0FBRSxDQUMxRCxDQUVSLENBQUM7SUFFWDtFQUFDO0FBQUEsRUExTm1DMEIsNENBQUssQ0FBQ0ssU0FBUztBQUF4QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wZW9wbGUvY29tbWl0dGVlcy5jMTJlZmM2OGEzOGEyODcwOTEwZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQm94LCBGbGV4LCBJbWFnZSB9IGZyb20gJ3JlYmFzcyc7XHJcbmltcG9ydCBDYXJkcyBmcm9tICcuLi8uLi9nZW5lcmFsL2NvbnRhY3RjYXJkcyc7XHJcbmltcG9ydCB7IGNvbW1pdHRlZV9kaXZpc2lvbnMgfSBmcm9tICcuL2NvbW1pdHRlZXMuanNvbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21taXR0ZWVzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGRpdmlzaW9uOiAwLFxyXG4gICAgICAgICAgICBjb21taXR0ZWU6IDAsXHJcbiAgICAgICAgICAgIG1lbWJlcnNEYXRhOiB7fSxcclxuICAgICAgICAgICAgaXNMb2FkaW5nOiB0cnVlXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmNoYW5nZURpdmlzaW9uID0gdGhpcy5jaGFuZ2VEaXZpc2lvbi5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuY2hhbmdlQ29tbWl0dGVlID0gdGhpcy5jaGFuZ2VDb21taXR0ZWUuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBtZW1iZXJzID0gYXdhaXQgdGhpcy5mZXRjaE1lbWJlcnNEYXRhKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtZW1iZXJzRGF0YTogbWVtYmVycywgaXNMb2FkaW5nOiBmYWxzZSB9KTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ0ZhaWxlZCB0byBmZXRjaCBtZW1iZXJzOicsIGVycm9yKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzTG9hZGluZzogZmFsc2UgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGZldGNoTWVtYmVyc0RhdGEoKSB7XHJcbiAgICAgICAgLy8gVXNlIHRoZSBwdWJsaXNoZWQgc3ByZWFkc2hlZXQgVVJMIGZvciBmYXN0ZXIgdXBkYXRlc1xyXG4gICAgICAgIGNvbnN0IHB1Ymxpc2hlZElkID0gJzJQQUNYLTF2UVZ1Y1RReWNia2daTFYzN3dwYnhPVlhUVHYwclVQZE5qZVg0MmpJdmVXeEJVT2ZYYjZSTlhBZWZ5bHczSUVTYThoY1lPVnVjUFBMQUp6JztcclxuICAgICAgICBjb25zdCBnaWQgPSAnMTgzMjMzOTgwNSc7IC8vIENvbW1pdHRlZXMgc2hlZXRcclxuICAgICAgICBjb25zdCBjYWNoZUJ1c3RlciA9IERhdGUubm93KCk7XHJcbiAgICAgICAgY29uc3QgdXJsID0gYGh0dHBzOi8vZG9jcy5nb29nbGUuY29tL3NwcmVhZHNoZWV0cy9kL2UvJHtwdWJsaXNoZWRJZH0vcHViP2dpZD0ke2dpZH0mc2luZ2xlPXRydWUmb3V0cHV0PWNzdiZfPSR7Y2FjaGVCdXN0ZXJ9YDtcclxuXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gICAgICAgIGNvbnN0IHRleHQgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybUNTVkRhdGEodGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJhbnNmb3JtQ1NWRGF0YShjc3ZUZXh0KSB7XHJcbiAgICAgICAgLy8gUGFyc2UgQ1NWXHJcbiAgICAgICAgY29uc3QgbGluZXMgPSBjc3ZUZXh0LnNwbGl0KCdcXG4nKS5tYXAobGluZSA9PiB7XHJcbiAgICAgICAgICAgIC8vIFNpbXBsZSBDU1YgcGFyc2luZyAoaGFuZGxlcyBiYXNpYyBjYXNlcylcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50ID0gJyc7XHJcbiAgICAgICAgICAgIGxldCBpblF1b3RlcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNoYXIgPSBsaW5lW2ldO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNoYXIgPT09ICdcIicpIHtcclxuICAgICAgICAgICAgICAgICAgICBpblF1b3RlcyA9ICFpblF1b3RlcztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2hhciA9PT0gJywnICYmICFpblF1b3Rlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGN1cnJlbnQudHJpbSgpKTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50ID0gJyc7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnQgKz0gY2hhcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXN1bHQucHVzaChjdXJyZW50LnRyaW0oKSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIE1hcCBzaGVldCBjb21taXR0ZWUgbmFtZXMgdG8gSlNPTiBjb21taXR0ZWUgbmFtZXNcclxuICAgICAgICBjb25zdCBjb21taXR0ZWVOYW1lTWFwcGluZyA9IHtcclxuICAgICAgICAgICAgJ0FsdW1uaSBhbmQgRmFtaWx5JzogJ0FsdW1uaScsXHJcbiAgICAgICAgICAgICdNdXJ0Y2gnOiAnTXVydGNoYW5kaXNlJyxcclxuICAgICAgICAgICAgJ01JUyc6ICdNY011cnRyeSBJbm5vdmF0aW9uIFNwYWNlIChNSVMpJyxcclxuICAgICAgICAgICAgJ1dlYnNpdGUgYW5kIEFwcCc6ICdXZWJzaXRlJyxcclxuICAgICAgICAgICAgJ0V4dGVybmFscyBTb2NpYWxzJzogJ0V4dGVybmFsIFNvY2lhbHMnLFxyXG4gICAgICAgICAgICAnSW50ZXJuYWxzIFNvY2lhbHMnOiAnSW50ZXJuYWwgU29jaWFscydcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBSb3cgMiAoaW5kZXggMSkgaGFzIGNvbW1pdHRlZSBuYW1lc1xyXG4gICAgICAgIGNvbnN0IGNvbW1pdHRlZVJvdyA9IGxpbmVzWzFdIHx8IFtdO1xyXG4gICAgICAgIGNvbnN0IGNvbW1pdHRlZXMgPSB7fTtcclxuXHJcbiAgICAgICAgLy8gUGFyc2UgY29tbWl0dGVlIG5hbWVzLCBza2lwcGluZyBcIkVtYWlsXCIgY29sdW1uc1xyXG4gICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IGNvbW1pdHRlZVJvdy5sZW5ndGg7IGNvbCsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBjb21taXR0ZWVSb3dbY29sXTtcclxuICAgICAgICAgICAgaWYgKG5hbWUgJiYgbmFtZSAhPT0gJ0VtYWlsJykge1xyXG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIGVtb2ppIGZyb20gbmFtZSBmb3IgbWF0Y2hpbmdcclxuICAgICAgICAgICAgICAgIGxldCBjbGVhbk5hbWUgPSBuYW1lLnJlcGxhY2UoL1teXFx3XFxzKCldL2csICcnKS50cmltKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29tbWl0dGVlTmFtZU1hcHBpbmdbY2xlYW5OYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFuTmFtZSA9IGNvbW1pdHRlZU5hbWVNYXBwaW5nW2NsZWFuTmFtZV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb21taXR0ZWVzW2NvbF0gPSB7IG5hbWU6IGNsZWFuTmFtZSwgaGVhZHM6IFtdLCBtZW1iZXJzOiBbXSB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBQYXJzZSBtZW1iZXJzIGZyb20gcm93IDMrIChpbmRleCAyKylcclxuICAgICAgICBmb3IgKGxldCByb3dJZHggPSAyOyByb3dJZHggPCBsaW5lcy5sZW5ndGg7IHJvd0lkeCsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJvdyA9IGxpbmVzW3Jvd0lkeF07XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgW2NvbFN0ciwgY29tbWl0dGVlXSBvZiBPYmplY3QuZW50cmllcyhjb21taXR0ZWVzKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29sID0gcGFyc2VJbnQoY29sU3RyKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1lbWJlck5hbWUgPSByb3dbY29sXTtcclxuICAgICAgICAgICAgICAgIGlmIChtZW1iZXJOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgbmFtZSBlbmRzIHdpdGggYXN0ZXJpc2sgKGhlYWQpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1lbWJlck5hbWUudHJpbSgpLmVuZHNXaXRoKCcqJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2xlYW5OYW1lID0gbWVtYmVyTmFtZS50cmltKCkucmVwbGFjZSgvXFwqJC8sICcnKS50cmltKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1pdHRlZS5oZWFkcy5wdXNoKHsgbmFtZTogY2xlYW5OYW1lIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1pdHRlZS5tZW1iZXJzLnB1c2goeyBuYW1lOiBtZW1iZXJOYW1lLnRyaW0oKSB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFJldHVybiBhcyB7IGNvbW1pdHRlZU5hbWU6IHsgaGVhZHM6IFsuLi5dLCBtZW1iZXJzOiBbLi4uXSB9IH1cclxuICAgICAgICBjb25zdCByZXN1bHQgPSB7fTtcclxuICAgICAgICBmb3IgKGNvbnN0IGNvbW1pdHRlZSBvZiBPYmplY3QudmFsdWVzKGNvbW1pdHRlZXMpKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdFtjb21taXR0ZWUubmFtZV0gPSB7XHJcbiAgICAgICAgICAgICAgICBoZWFkczogY29tbWl0dGVlLmhlYWRzLFxyXG4gICAgICAgICAgICAgICAgbWVtYmVyczogY29tbWl0dGVlLm1lbWJlcnNcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VEaXZpc2lvbihpbmRleCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBkaXZpc2lvbjogaW5kZXgsXHJcbiAgICAgICAgICAgIGNvbW1pdHRlZTogMFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlQ29tbWl0dGVlKGluZGV4KSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvbW1pdHRlZTogaW5kZXggfSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcblxyXG4gICAgICAgIGxldCBkaXZpc2lvbl9rZXlzID0gW11cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbW1pdHRlZV9kaXZpc2lvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgZGl2aXNpb25fa2V5cy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgPEJveCBrZXk9e2NvbW1pdHRlZV9kaXZpc2lvbnNbaV0uZGl2aXNpb259PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gdGhpcy5jaGFuZ2VEaXZpc2lvbihpKX0gY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmRpdmlzaW9uID09PSBpID8gXCJhY3RpdmUtZGl2aXNpb25cIiA6IFwiaW5hY3RpdmUtZGl2aXNpb25cIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nZGl2aXNpb24ta2V5Jz57YCR7Y29tbWl0dGVlX2RpdmlzaW9uc1tpXS5kaXZpc2lvbn1gfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRfZGl2aXNpb24gPSBjb21taXR0ZWVfZGl2aXNpb25zW3RoaXMuc3RhdGUuZGl2aXNpb25dXHJcbiAgICAgICAgbGV0IGNvbW1pdHRlZV9rZXlzID0gW11cclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGN1cnJlbnRfZGl2aXNpb24uY29tbWl0dGVlcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICBjb21taXR0ZWVfa2V5cy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgPEJveCBrZXk9e2N1cnJlbnRfZGl2aXNpb24uY29tbWl0dGVlc1tqXS5uYW1lfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHRoaXMuY2hhbmdlQ29tbWl0dGVlKGopfSBjbGFzc05hbWU9e3RoaXMuc3RhdGUuY29tbWl0dGVlID09PSBqID8gXCJhY3RpdmUtY29tbWl0dGVlXCIgOiBcImluYWN0aXZlLWNvbW1pdHRlZVwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdjb21taXR0ZWUta2V5Jz57Y3VycmVudF9kaXZpc2lvbi5jb21taXR0ZWVzW2pdLm5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbWl0dGVlLXBhZ2VcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb21taXR0ZWUtaGVybyc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0nY29tbWl0dGVlLW1haW4tdGl0bGUnPkNvbW1pdHRlZXM8L2gxPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBGaXhlZCBmbGV4V3JhcCBwcm9wICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxGbGV4IGp1c3RpZnlDb250ZW50PSdjZW50ZXInIGZsZXhXcmFwPSd3cmFwJyBmbGV4RGlyZWN0aW9uPSdyb3cnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGl2aXNpb25fa2V5c31cclxuICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIEZpeGVkIGZsZXhXcmFwIHByb3AgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPEZsZXgganVzdGlmeUNvbnRlbnQ9J2NlbnRlcicgZmxleFdyYXA9J3dyYXAnIGZsZXhEaXJlY3Rpb249J3Jvdyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb21taXR0ZWVfa2V5c31cclxuICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJveCB3aWR0aD17WzAuOSwgMC43LCAwLjYsIDAuNV19IG1sPSdhdXRvJyBtcj0nYXV0bycgY2xhc3NOYW1lPSdjb21taXR0ZWUtZGVzY3JpcHRpb24nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdkaXZpc2lvbi10aXRsZSc+e2NvbW1pdHRlZV9kaXZpc2lvbnNbdGhpcy5zdGF0ZS5kaXZpc2lvbl0uY29tbWl0dGVlc1t0aGlzLnN0YXRlLmNvbW1pdHRlZV0ubmFtZX08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm94IHdpZHRoPXtbMSwgLjc1XX0gbXg9J2F1dG8nID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBrZXk9e2NvbW1pdHRlZV9kaXZpc2lvbnNbdGhpcy5zdGF0ZS5kaXZpc2lvbl0uY29tbWl0dGVlc1t0aGlzLnN0YXRlLmNvbW1pdHRlZV0uaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtjb21taXR0ZWVfZGl2aXNpb25zW3RoaXMuc3RhdGUuZGl2aXNpb25dLmNvbW1pdHRlZXNbdGhpcy5zdGF0ZS5jb21taXR0ZWVdLmltYWdlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGNvbW1pdHRlZV9kaXZpc2lvbnNbdGhpcy5zdGF0ZS5kaXZpc2lvbl0uY29tbWl0dGVlc1t0aGlzLnN0YXRlLmNvbW1pdHRlZV0uZGVzY3JpcHRpb24gfX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVySGVhZHNBbmRNZW1iZXJzKCl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckhlYWRzQW5kTWVtYmVycygpIHtcclxuICAgICAgICBjb25zdCBjdXJyZW50Q29tbWl0dGVlID0gY29tbWl0dGVlX2RpdmlzaW9uc1t0aGlzLnN0YXRlLmRpdmlzaW9uXS5jb21taXR0ZWVzW3RoaXMuc3RhdGUuY29tbWl0dGVlXTtcclxuICAgICAgICBjb25zdCBzaGVldERhdGEgPSB0aGlzLnN0YXRlLm1lbWJlcnNEYXRhW2N1cnJlbnRDb21taXR0ZWUubmFtZV07XHJcblxyXG4gICAgICAgIC8vIEdldCBoZWFkczogcHJlZmVyIGxpdmUgZGF0YSBmcm9tIHNoZWV0LCBmYWxsIGJhY2sgdG8gc3RhdGljIEpTT05cclxuICAgICAgICBjb25zdCBsaXZlSGVhZHMgPSBzaGVldERhdGE/LmhlYWRzIHx8IFtdO1xyXG4gICAgICAgIGNvbnN0IHN0YXRpY0hlYWRzID0gY3VycmVudENvbW1pdHRlZS5oZWFkcyB8fCBbXTtcclxuICAgICAgICBjb25zdCBoZWFkcyA9IGxpdmVIZWFkcy5sZW5ndGggPiAwID8gbGl2ZUhlYWRzIDogc3RhdGljSGVhZHM7XHJcblxyXG4gICAgICAgIC8vIEdldCBtZW1iZXJzIGZyb20gc2hlZXRcclxuICAgICAgICBjb25zdCBtZW1iZXJzID0gc2hlZXREYXRhPy5tZW1iZXJzIHx8IFtdO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5pc0xvYWRpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZy1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmctc3Bpbm5lclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxvYWRpbmctdGV4dFwiPkxvYWRpbmcuLi48L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICB7aGVhZHMubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0nY29tbWl0dGVlLXN1YnRpdGxlJz5Db21taXR0ZWUgSGVhZHM8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZHMgY29udGVudD17aGVhZHN9IG1pbkhlaWdodD1cIjExMHB4XCIgd2lkdGg9ezI0MH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICB7bWVtYmVycy5sZW5ndGggPiAwICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdjb21taXR0ZWUtc3VidGl0bGUnPkNvbW1pdHRlZSBNZW1iZXJzPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRzIGNvbnRlbnQ9e21lbWJlcnN9IG1pbkhlaWdodD1cIjExMHB4XCIgd2lkdGg9ezI0MH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9