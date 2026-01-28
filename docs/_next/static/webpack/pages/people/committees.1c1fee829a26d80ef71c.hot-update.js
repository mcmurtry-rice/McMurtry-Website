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

      // Parse committee names, tracking which columns have emails
      // Structure: CommitteeName, Email, CommitteeName, Email, ...
      for (var col = 0; col < committeeRow.length; col++) {
        var name = committeeRow[col];
        if (name && name !== 'Email') {
          // Remove emoji from name for matching
          var cleanName = name.replace(/[^\w\s()]/g, '').trim();
          if (committeeNameMapping[cleanName]) {
            cleanName = committeeNameMapping[cleanName];
          }
          // Check if next column is an Email column
          var hasEmailColumn = committeeRow[col + 1] === 'Email';
          committees[col] = {
            name: cleanName,
            heads: [],
            members: [],
            emailCol: hasEmailColumn ? col + 1 : null
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
            // Get email from adjacent Email column if it exists
            var email = committee.emailCol !== null ? row[committee.emailCol] || '' : '';

            // Check if name ends with asterisk (head)
            if (memberName.trim().endsWith('*')) {
              var _cleanName = memberName.trim().replace(/\*$/, '').trim();
              committee.heads.push({
                name: _cleanName,
                email: email.trim()
              });
            } else {
              committee.members.push({
                name: memberName.trim(),
                email: email.trim()
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
            lineNumber: 142,
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
            lineNumber: 143,
            columnNumber: 21
          }
        }, __jsx("p", {
          className: "division-key",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 144,
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
            lineNumber: 153,
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
            lineNumber: 154,
            columnNumber: 21
          }
        }, __jsx("p", {
          className: "committee-key",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 155,
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
          lineNumber: 162,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "committee-hero",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 17
        }
      }, __jsx("h1", {
        className: "committee-main-title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 21
        }
      }, "Committees")), __jsx("div", {
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
      }, division_keys)), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 17
        }
      }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_8__["Flex"], {
        justifyContent: "center",
        flexWrap: "wrap",
        flexDirection: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 21
        }
      }, committee_keys)), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178,
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
          lineNumber: 179,
          columnNumber: 21
        }
      }, __jsx("h1", {
        className: "division-title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 25
        }
      }, _committees_json__WEBPACK_IMPORTED_MODULE_10__["committee_divisions"][this.state.division].committees[this.state.committee].name), __jsx(rebass__WEBPACK_IMPORTED_MODULE_8__["Box"], {
        width: [1, .75],
        mx: "auto",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 25
        }
      }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_8__["Image"], {
        key: _committees_json__WEBPACK_IMPORTED_MODULE_10__["committee_divisions"][this.state.division].committees[this.state.committee].image,
        src: _committees_json__WEBPACK_IMPORTED_MODULE_10__["committee_divisions"][this.state.division].committees[this.state.committee].image,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 29
        }
      })), __jsx("div", {
        dangerouslySetInnerHTML: {
          __html: _committees_json__WEBPACK_IMPORTED_MODULE_10__["committee_divisions"][this.state.division].committees[this.state.committee].description
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185,
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
            lineNumber: 207,
            columnNumber: 17
          }
        }, __jsx("div", {
          className: "loading-spinner",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 208,
            columnNumber: 21
          }
        }), __jsx("p", {
          className: "loading-text",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 209,
            columnNumber: 21
          }
        }, "Loading..."));
      }
      return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, heads.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx("h2", {
        className: "committee-subtitle",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218,
          columnNumber: 25
        }
      }, "Committee Heads"), __jsx(_general_contactcards__WEBPACK_IMPORTED_MODULE_9__["default"], {
        content: heads,
        minHeight: "110px",
        width: 240,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219,
          columnNumber: 25
        }
      })), members.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx("h2", {
        className: "committee-subtitle",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224,
          columnNumber: 25
        }
      }, "Committee Members"), __jsx(_general_contactcards__WEBPACK_IMPORTED_MODULE_9__["default"], {
        content: members,
        minHeight: "110px",
        width: 240,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wZW9wbGUvY29tbWl0dGVlcy9jb21taXR0ZWVzLmpzIl0sIm5hbWVzIjpbIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJlIiwidCIsInIiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJuIiwiaGFzT3duUHJvcGVydHkiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImkiLCJTeW1ib2wiLCJhIiwiaXRlcmF0b3IiLCJjIiwiYXN5bmNJdGVyYXRvciIsInUiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIndyYXAiLCJHZW5lcmF0b3IiLCJjcmVhdGUiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwidHlwZSIsImFyZyIsImNhbGwiLCJoIiwibCIsImYiLCJzIiwieSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJwIiwiZCIsImdldFByb3RvdHlwZU9mIiwidiIsInZhbHVlcyIsImciLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJpbnZva2UiLCJyZXNvbHZlIiwiX19hd2FpdCIsInRoZW4iLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsIkVycm9yIiwiZG9uZSIsIm1ldGhvZCIsImRlbGVnYXRlIiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiVHlwZUVycm9yIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpc05hTiIsImxlbmd0aCIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwia2V5cyIsInJldmVyc2UiLCJwb3AiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicnZhbCIsImhhbmRsZSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwiZGVsZWdhdGVZaWVsZCIsIl9jYWxsU3VwZXIiLCJfZ2V0UHJvdG90eXBlT2YiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJSZWZsZWN0IiwiY29uc3RydWN0IiwiYXBwbHkiLCJCb29sZWFuIiwidmFsdWVPZiIsIkNvbW1pdHRlZXMiLCJfUmVhY3QkQ29tcG9uZW50IiwicHJvcHMiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjayIsInN0YXRlIiwiZGl2aXNpb24iLCJjb21taXR0ZWUiLCJtZW1iZXJzRGF0YSIsImlzTG9hZGluZyIsImNoYW5nZURpdmlzaW9uIiwiYmluZCIsImNoYW5nZUNvbW1pdHRlZSIsIl9pbmhlcml0cyIsIl9jcmVhdGVDbGFzcyIsImtleSIsIl9jb21wb25lbnREaWRNb3VudCIsIl9hc3luY1RvR2VuZXJhdG9yIiwiX2NhbGxlZSIsIm1lbWJlcnMiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwiZmV0Y2hNZW1iZXJzRGF0YSIsInNldFN0YXRlIiwidDAiLCJjb25zb2xlIiwid2FybiIsImNvbXBvbmVudERpZE1vdW50IiwiYXJndW1lbnRzIiwiX2ZldGNoTWVtYmVyc0RhdGEiLCJfY2FsbGVlMiIsInB1Ymxpc2hlZElkIiwiZ2lkIiwiY2FjaGVCdXN0ZXIiLCJ1cmwiLCJyZXNwb25zZSIsInRleHQiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJEYXRlIiwibm93IiwiY29uY2F0IiwiZmV0Y2giLCJ0cmFuc2Zvcm1DU1ZEYXRhIiwiY3N2VGV4dCIsImxpbmVzIiwic3BsaXQiLCJtYXAiLCJsaW5lIiwicmVzdWx0IiwiY3VycmVudCIsImluUXVvdGVzIiwiY2hhciIsInRyaW0iLCJjb21taXR0ZWVOYW1lTWFwcGluZyIsImNvbW1pdHRlZVJvdyIsImNvbW1pdHRlZXMiLCJjb2wiLCJjbGVhbk5hbWUiLCJyZXBsYWNlIiwiaGFzRW1haWxDb2x1bW4iLCJoZWFkcyIsImVtYWlsQ29sIiwicm93SWR4Iiwicm93IiwiX2kiLCJfT2JqZWN0JGVudHJpZXMiLCJlbnRyaWVzIiwiX09iamVjdCRlbnRyaWVzJF9pIiwiX3NsaWNlZFRvQXJyYXkiLCJjb2xTdHIiLCJwYXJzZUludCIsIm1lbWJlck5hbWUiLCJlbWFpbCIsImVuZHNXaXRoIiwiX2kyIiwiX09iamVjdCR2YWx1ZXMiLCJpbmRleCIsInJlbmRlciIsIl90aGlzMiIsImRpdmlzaW9uX2tleXMiLCJfbG9vcCIsIl9fanN4IiwiQm94IiwiY29tbWl0dGVlX2RpdmlzaW9ucyIsIl9fc2VsZiIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwib25DbGljayIsImNsYXNzTmFtZSIsImN1cnJlbnRfZGl2aXNpb24iLCJjb21taXR0ZWVfa2V5cyIsIl9sb29wMiIsImoiLCJGbGV4IiwianVzdGlmeUNvbnRlbnQiLCJmbGV4V3JhcCIsImZsZXhEaXJlY3Rpb24iLCJ3aWR0aCIsIm1sIiwibXIiLCJteCIsIkltYWdlIiwiaW1hZ2UiLCJzcmMiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsImRlc2NyaXB0aW9uIiwicmVuZGVySGVhZHNBbmRNZW1iZXJzIiwiY3VycmVudENvbW1pdHRlZSIsInNoZWV0RGF0YSIsImxpdmVIZWFkcyIsInN0YXRpY0hlYWRzIiwiUmVhY3QiLCJGcmFnbWVudCIsIkNhcmRzIiwiY29udGVudCIsIm1pbkhlaWdodCIsIkNvbXBvbmVudCJdLCJtYXBwaW5n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LFFBQ0t4RCxLQUFLLENBQUM5RixNQUFNLEdBQUcsQ0FBQyxJQUNibUgsS0FBQSxDQUFBa0MsNENBQUEsQ0FBQUMsUUFBQSxRQUNJbkMsS0FBQTtRQUFJVSxTQUFTLEVBQUMsb0JBQW9CO1FBQUFQLE1BQUE7UUFBQUMsUUFBQTtVQUFBQyxRQUFBLEVBQUFDLFlBQUE7VUFBQUMsVUFBQTtVQUFBQyxZQUFBO1FBQUE7TUFBQSxvQkFBb0IsQ0FBQyxFQUN2RFIsS0FBQSxDQUFDb0MsNkRBQUs7UUFBQ0MsT0FBTyxFQUFFMUQsS0FBTTtRQUFDMkQsU0FBUyxFQUFDLE9BQU87UUFBQ25CLEtBQUssRUFBRSxHQUFJO1FBQUFoQixNQUFBO1FBQUFDLFFBQUE7VUFBQUMsUUFBQSxFQUFBQyxZQUFBO1VBQUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBO01BQUEsQ0FBRSxDQUN4RCxDQUNMLEVBQ0F2RSxPQUFPLENBQUNwRCxNQUFNLEdBQUcsQ0FBQyxJQUNmbUgsS0FBQSxDQUFBa0MsNENBQUEsQ0FBQUMsUUFBQSxRQUNJbkMsS0FBQTtRQUFJVSxTQUFTLEVBQUMsb0JBQW9CO1FBQUFQLE1BQUE7UUFBQUMsUUFBQTtVQUFBQyxRQUFBLEVBQUFDLFlBQUE7VUFBQUMsVUFBQTtVQUFBQyxZQUFBO1FBQUE7TUFBQSxzQkFBc0IsQ0FBQyxFQUN6RFIsS0FBQSxDQUFDb0MsNkRBQUs7UUFBQ0MsT0FBTyxFQUFFcEcsT0FBUTtRQUFDcUcsU0FBUyxFQUFDLE9BQU87UUFBQ25CLEtBQUssRUFBRSxHQUFJO1FBQUFoQixNQUFBO1FBQUFDLFFBQUE7VUFBQUMsUUFBQSxFQUFBQyxZQUFBO1VBQUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBO01BQUEsQ0FBRSxDQUMxRCxDQUVSLENBQUM7SUFFWDtFQUFDO0FBQUEsRUFoT21DMEIsNENBQUssQ0FBQ0ssU0FBUztBQUF4QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wZW9wbGUvY29tbWl0dGVlcy4xYzFmZWU4MjlhMjZkODBlZjcxYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQm94LCBGbGV4LCBJbWFnZSB9IGZyb20gJ3JlYmFzcyc7XHJcbmltcG9ydCBDYXJkcyBmcm9tICcuLi8uLi9nZW5lcmFsL2NvbnRhY3RjYXJkcyc7XHJcbmltcG9ydCB7IGNvbW1pdHRlZV9kaXZpc2lvbnMgfSBmcm9tICcuL2NvbW1pdHRlZXMuanNvbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21taXR0ZWVzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGRpdmlzaW9uOiAwLFxyXG4gICAgICAgICAgICBjb21taXR0ZWU6IDAsXHJcbiAgICAgICAgICAgIG1lbWJlcnNEYXRhOiB7fSxcclxuICAgICAgICAgICAgaXNMb2FkaW5nOiB0cnVlXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmNoYW5nZURpdmlzaW9uID0gdGhpcy5jaGFuZ2VEaXZpc2lvbi5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuY2hhbmdlQ29tbWl0dGVlID0gdGhpcy5jaGFuZ2VDb21taXR0ZWUuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBtZW1iZXJzID0gYXdhaXQgdGhpcy5mZXRjaE1lbWJlcnNEYXRhKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtZW1iZXJzRGF0YTogbWVtYmVycywgaXNMb2FkaW5nOiBmYWxzZSB9KTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ0ZhaWxlZCB0byBmZXRjaCBtZW1iZXJzOicsIGVycm9yKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzTG9hZGluZzogZmFsc2UgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGZldGNoTWVtYmVyc0RhdGEoKSB7XHJcbiAgICAgICAgLy8gVXNlIHRoZSBwdWJsaXNoZWQgc3ByZWFkc2hlZXQgVVJMIGZvciBmYXN0ZXIgdXBkYXRlc1xyXG4gICAgICAgIGNvbnN0IHB1Ymxpc2hlZElkID0gJzJQQUNYLTF2UVZ1Y1RReWNia2daTFYzN3dwYnhPVlhUVHYwclVQZE5qZVg0MmpJdmVXeEJVT2ZYYjZSTlhBZWZ5bHczSUVTYThoY1lPVnVjUFBMQUp6JztcclxuICAgICAgICBjb25zdCBnaWQgPSAnMTgzMjMzOTgwNSc7IC8vIENvbW1pdHRlZXMgc2hlZXRcclxuICAgICAgICBjb25zdCBjYWNoZUJ1c3RlciA9IERhdGUubm93KCk7XHJcbiAgICAgICAgY29uc3QgdXJsID0gYGh0dHBzOi8vZG9jcy5nb29nbGUuY29tL3NwcmVhZHNoZWV0cy9kL2UvJHtwdWJsaXNoZWRJZH0vcHViP2dpZD0ke2dpZH0mc2luZ2xlPXRydWUmb3V0cHV0PWNzdiZfPSR7Y2FjaGVCdXN0ZXJ9YDtcclxuXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gICAgICAgIGNvbnN0IHRleHQgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybUNTVkRhdGEodGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJhbnNmb3JtQ1NWRGF0YShjc3ZUZXh0KSB7XHJcbiAgICAgICAgLy8gUGFyc2UgQ1NWXHJcbiAgICAgICAgY29uc3QgbGluZXMgPSBjc3ZUZXh0LnNwbGl0KCdcXG4nKS5tYXAobGluZSA9PiB7XHJcbiAgICAgICAgICAgIC8vIFNpbXBsZSBDU1YgcGFyc2luZyAoaGFuZGxlcyBiYXNpYyBjYXNlcylcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50ID0gJyc7XHJcbiAgICAgICAgICAgIGxldCBpblF1b3RlcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNoYXIgPSBsaW5lW2ldO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNoYXIgPT09ICdcIicpIHtcclxuICAgICAgICAgICAgICAgICAgICBpblF1b3RlcyA9ICFpblF1b3RlcztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2hhciA9PT0gJywnICYmICFpblF1b3Rlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGN1cnJlbnQudHJpbSgpKTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50ID0gJyc7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnQgKz0gY2hhcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXN1bHQucHVzaChjdXJyZW50LnRyaW0oKSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIE1hcCBzaGVldCBjb21taXR0ZWUgbmFtZXMgdG8gSlNPTiBjb21taXR0ZWUgbmFtZXNcclxuICAgICAgICBjb25zdCBjb21taXR0ZWVOYW1lTWFwcGluZyA9IHtcclxuICAgICAgICAgICAgJ0FsdW1uaSBhbmQgRmFtaWx5JzogJ0FsdW1uaScsXHJcbiAgICAgICAgICAgICdNdXJ0Y2gnOiAnTXVydGNoYW5kaXNlJyxcclxuICAgICAgICAgICAgJ01JUyc6ICdNY011cnRyeSBJbm5vdmF0aW9uIFNwYWNlIChNSVMpJyxcclxuICAgICAgICAgICAgJ1dlYnNpdGUgYW5kIEFwcCc6ICdXZWJzaXRlJyxcclxuICAgICAgICAgICAgJ0V4dGVybmFscyBTb2NpYWxzJzogJ0V4dGVybmFsIFNvY2lhbHMnLFxyXG4gICAgICAgICAgICAnSW50ZXJuYWxzIFNvY2lhbHMnOiAnSW50ZXJuYWwgU29jaWFscydcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBSb3cgMiAoaW5kZXggMSkgaGFzIGNvbW1pdHRlZSBuYW1lc1xyXG4gICAgICAgIGNvbnN0IGNvbW1pdHRlZVJvdyA9IGxpbmVzWzFdIHx8IFtdO1xyXG4gICAgICAgIGNvbnN0IGNvbW1pdHRlZXMgPSB7fTtcclxuXHJcbiAgICAgICAgLy8gUGFyc2UgY29tbWl0dGVlIG5hbWVzLCB0cmFja2luZyB3aGljaCBjb2x1bW5zIGhhdmUgZW1haWxzXHJcbiAgICAgICAgLy8gU3RydWN0dXJlOiBDb21taXR0ZWVOYW1lLCBFbWFpbCwgQ29tbWl0dGVlTmFtZSwgRW1haWwsIC4uLlxyXG4gICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IGNvbW1pdHRlZVJvdy5sZW5ndGg7IGNvbCsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBjb21taXR0ZWVSb3dbY29sXTtcclxuICAgICAgICAgICAgaWYgKG5hbWUgJiYgbmFtZSAhPT0gJ0VtYWlsJykge1xyXG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIGVtb2ppIGZyb20gbmFtZSBmb3IgbWF0Y2hpbmdcclxuICAgICAgICAgICAgICAgIGxldCBjbGVhbk5hbWUgPSBuYW1lLnJlcGxhY2UoL1teXFx3XFxzKCldL2csICcnKS50cmltKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29tbWl0dGVlTmFtZU1hcHBpbmdbY2xlYW5OYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFuTmFtZSA9IGNvbW1pdHRlZU5hbWVNYXBwaW5nW2NsZWFuTmFtZV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiBuZXh0IGNvbHVtbiBpcyBhbiBFbWFpbCBjb2x1bW5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGhhc0VtYWlsQ29sdW1uID0gY29tbWl0dGVlUm93W2NvbCArIDFdID09PSAnRW1haWwnO1xyXG4gICAgICAgICAgICAgICAgY29tbWl0dGVlc1tjb2xdID0geyBuYW1lOiBjbGVhbk5hbWUsIGhlYWRzOiBbXSwgbWVtYmVyczogW10sIGVtYWlsQ29sOiBoYXNFbWFpbENvbHVtbiA/IGNvbCArIDEgOiBudWxsIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFBhcnNlIG1lbWJlcnMgZnJvbSByb3cgMysgKGluZGV4IDIrKVxyXG4gICAgICAgIGZvciAobGV0IHJvd0lkeCA9IDI7IHJvd0lkeCA8IGxpbmVzLmxlbmd0aDsgcm93SWR4KyspIHtcclxuICAgICAgICAgICAgY29uc3Qgcm93ID0gbGluZXNbcm93SWR4XTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBbY29sU3RyLCBjb21taXR0ZWVdIG9mIE9iamVjdC5lbnRyaWVzKGNvbW1pdHRlZXMpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb2wgPSBwYXJzZUludChjb2xTdHIpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWVtYmVyTmFtZSA9IHJvd1tjb2xdO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1lbWJlck5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBHZXQgZW1haWwgZnJvbSBhZGphY2VudCBFbWFpbCBjb2x1bW4gaWYgaXQgZXhpc3RzXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZW1haWwgPSBjb21taXR0ZWUuZW1haWxDb2wgIT09IG51bGwgPyAocm93W2NvbW1pdHRlZS5lbWFpbENvbF0gfHwgJycpIDogJyc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIG5hbWUgZW5kcyB3aXRoIGFzdGVyaXNrIChoZWFkKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtZW1iZXJOYW1lLnRyaW0oKS5lbmRzV2l0aCgnKicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNsZWFuTmFtZSA9IG1lbWJlck5hbWUudHJpbSgpLnJlcGxhY2UoL1xcKiQvLCAnJykudHJpbSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21taXR0ZWUuaGVhZHMucHVzaCh7IG5hbWU6IGNsZWFuTmFtZSwgZW1haWw6IGVtYWlsLnRyaW0oKSB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21taXR0ZWUubWVtYmVycy5wdXNoKHsgbmFtZTogbWVtYmVyTmFtZS50cmltKCksIGVtYWlsOiBlbWFpbC50cmltKCkgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBSZXR1cm4gYXMgeyBjb21taXR0ZWVOYW1lOiB7IGhlYWRzOiBbLi4uXSwgbWVtYmVyczogWy4uLl0gfSB9XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0ge307XHJcbiAgICAgICAgZm9yIChjb25zdCBjb21taXR0ZWUgb2YgT2JqZWN0LnZhbHVlcyhjb21taXR0ZWVzKSkge1xyXG4gICAgICAgICAgICByZXN1bHRbY29tbWl0dGVlLm5hbWVdID0ge1xyXG4gICAgICAgICAgICAgICAgaGVhZHM6IGNvbW1pdHRlZS5oZWFkcyxcclxuICAgICAgICAgICAgICAgIG1lbWJlcnM6IGNvbW1pdHRlZS5tZW1iZXJzXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlRGl2aXNpb24oaW5kZXgpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgZGl2aXNpb246IGluZGV4LFxyXG4gICAgICAgICAgICBjb21taXR0ZWU6IDBcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZUNvbW1pdHRlZShpbmRleCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb21taXR0ZWU6IGluZGV4IH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG5cclxuICAgICAgICBsZXQgZGl2aXNpb25fa2V5cyA9IFtdXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb21taXR0ZWVfZGl2aXNpb25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGRpdmlzaW9uX2tleXMucHVzaChcclxuICAgICAgICAgICAgICAgIDxCb3gga2V5PXtjb21taXR0ZWVfZGl2aXNpb25zW2ldLmRpdmlzaW9ufT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHRoaXMuY2hhbmdlRGl2aXNpb24oaSl9IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5kaXZpc2lvbiA9PT0gaSA/IFwiYWN0aXZlLWRpdmlzaW9uXCIgOiBcImluYWN0aXZlLWRpdmlzaW9uXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2RpdmlzaW9uLWtleSc+e2Ake2NvbW1pdHRlZV9kaXZpc2lvbnNbaV0uZGl2aXNpb259YH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBjdXJyZW50X2RpdmlzaW9uID0gY29tbWl0dGVlX2RpdmlzaW9uc1t0aGlzLnN0YXRlLmRpdmlzaW9uXVxyXG4gICAgICAgIGxldCBjb21taXR0ZWVfa2V5cyA9IFtdXHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjdXJyZW50X2RpdmlzaW9uLmNvbW1pdHRlZXMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgY29tbWl0dGVlX2tleXMucHVzaChcclxuICAgICAgICAgICAgICAgIDxCb3gga2V5PXtjdXJyZW50X2RpdmlzaW9uLmNvbW1pdHRlZXNbal0ubmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiB0aGlzLmNoYW5nZUNvbW1pdHRlZShqKX0gY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmNvbW1pdHRlZSA9PT0gaiA/IFwiYWN0aXZlLWNvbW1pdHRlZVwiIDogXCJpbmFjdGl2ZS1jb21taXR0ZWVcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nY29tbWl0dGVlLWtleSc+e2N1cnJlbnRfZGl2aXNpb24uY29tbWl0dGVlc1tqXS5uYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1pdHRlZS1wYWdlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29tbWl0dGVlLWhlcm8nPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J2NvbW1pdHRlZS1tYWluLXRpdGxlJz5Db21taXR0ZWVzPC9oMT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICB7LyogRml4ZWQgZmxleFdyYXAgcHJvcCAqL31cclxuICAgICAgICAgICAgICAgICAgICA8RmxleCBqdXN0aWZ5Q29udGVudD0nY2VudGVyJyBmbGV4V3JhcD0nd3JhcCcgZmxleERpcmVjdGlvbj0ncm93Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2RpdmlzaW9uX2tleXN9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBGaXhlZCBmbGV4V3JhcCBwcm9wICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxGbGV4IGp1c3RpZnlDb250ZW50PSdjZW50ZXInIGZsZXhXcmFwPSd3cmFwJyBmbGV4RGlyZWN0aW9uPSdyb3cnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y29tbWl0dGVlX2tleXN9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCb3ggd2lkdGg9e1swLjksIDAuNywgMC42LCAwLjVdfSBtbD0nYXV0bycgbXI9J2F1dG8nIGNsYXNzTmFtZT0nY29tbWl0dGVlLWRlc2NyaXB0aW9uJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0nZGl2aXNpb24tdGl0bGUnPntjb21taXR0ZWVfZGl2aXNpb25zW3RoaXMuc3RhdGUuZGl2aXNpb25dLmNvbW1pdHRlZXNbdGhpcy5zdGF0ZS5jb21taXR0ZWVdLm5hbWV9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJveCB3aWR0aD17WzEsIC43NV19IG14PSdhdXRvJyA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Uga2V5PXtjb21taXR0ZWVfZGl2aXNpb25zW3RoaXMuc3RhdGUuZGl2aXNpb25dLmNvbW1pdHRlZXNbdGhpcy5zdGF0ZS5jb21taXR0ZWVdLmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17Y29tbWl0dGVlX2RpdmlzaW9uc1t0aGlzLnN0YXRlLmRpdmlzaW9uXS5jb21taXR0ZWVzW3RoaXMuc3RhdGUuY29tbWl0dGVlXS5pbWFnZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBjb21taXR0ZWVfZGl2aXNpb25zW3RoaXMuc3RhdGUuZGl2aXNpb25dLmNvbW1pdHRlZXNbdGhpcy5zdGF0ZS5jb21taXR0ZWVdLmRlc2NyaXB0aW9uIH19PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckhlYWRzQW5kTWVtYmVycygpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJIZWFkc0FuZE1lbWJlcnMoKSB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudENvbW1pdHRlZSA9IGNvbW1pdHRlZV9kaXZpc2lvbnNbdGhpcy5zdGF0ZS5kaXZpc2lvbl0uY29tbWl0dGVlc1t0aGlzLnN0YXRlLmNvbW1pdHRlZV07XHJcbiAgICAgICAgY29uc3Qgc2hlZXREYXRhID0gdGhpcy5zdGF0ZS5tZW1iZXJzRGF0YVtjdXJyZW50Q29tbWl0dGVlLm5hbWVdO1xyXG5cclxuICAgICAgICAvLyBHZXQgaGVhZHM6IHByZWZlciBsaXZlIGRhdGEgZnJvbSBzaGVldCwgZmFsbCBiYWNrIHRvIHN0YXRpYyBKU09OXHJcbiAgICAgICAgY29uc3QgbGl2ZUhlYWRzID0gc2hlZXREYXRhPy5oZWFkcyB8fCBbXTtcclxuICAgICAgICBjb25zdCBzdGF0aWNIZWFkcyA9IGN1cnJlbnRDb21taXR0ZWUuaGVhZHMgfHwgW107XHJcbiAgICAgICAgY29uc3QgaGVhZHMgPSBsaXZlSGVhZHMubGVuZ3RoID4gMCA/IGxpdmVIZWFkcyA6IHN0YXRpY0hlYWRzO1xyXG5cclxuICAgICAgICAvLyBHZXQgbWVtYmVycyBmcm9tIHNoZWV0XHJcbiAgICAgICAgY29uc3QgbWVtYmVycyA9IHNoZWV0RGF0YT8ubWVtYmVycyB8fCBbXTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuaXNMb2FkaW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmctY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nLXNwaW5uZXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsb2FkaW5nLXRleHRcIj5Mb2FkaW5nLi4uPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAge2hlYWRzLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J2NvbW1pdHRlZS1zdWJ0aXRsZSc+Q29tbWl0dGVlIEhlYWRzPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRzIGNvbnRlbnQ9e2hlYWRzfSBtaW5IZWlnaHQ9XCIxMTBweFwiIHdpZHRoPXsyNDB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAge21lbWJlcnMubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0nY29tbWl0dGVlLXN1YnRpdGxlJz5Db21taXR0ZWUgTWVtYmVyczwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkcyBjb250ZW50PXttZW1iZXJzfSBtaW5IZWlnaHQ9XCIxMTBweFwiIHdpZHRoPXsyNDB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==