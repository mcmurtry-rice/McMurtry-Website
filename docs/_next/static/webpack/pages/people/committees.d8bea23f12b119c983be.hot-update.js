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
        'Internals Socials': 'Internal Socials',
        'Charity': 'Charity and Philanthropy'
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
            lineNumber: 143,
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
            lineNumber: 144,
            columnNumber: 21
          }
        }, __jsx("p", {
          className: "division-key",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 145,
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
            lineNumber: 154,
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
            lineNumber: 155,
            columnNumber: 21
          }
        }, __jsx("p", {
          className: "committee-key",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 156,
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
          lineNumber: 163,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "committee-hero",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 17
        }
      }, __jsx("h1", {
        className: "committee-main-title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 21
        }
      }, "Committees")), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 17
        }
      }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_8__["Flex"], {
        justifyContent: "center",
        flexWrap: "wrap",
        flexDirection: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 21
        }
      }, division_keys)), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 17
        }
      }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_8__["Flex"], {
        justifyContent: "center",
        flexWrap: "wrap",
        flexDirection: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 21
        }
      }, committee_keys)), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179,
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
          lineNumber: 180,
          columnNumber: 21
        }
      }, __jsx("h1", {
        className: "division-title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 25
        }
      }, _committees_json__WEBPACK_IMPORTED_MODULE_10__["committee_divisions"][this.state.division].committees[this.state.committee].name), __jsx(rebass__WEBPACK_IMPORTED_MODULE_8__["Box"], {
        width: [1, .75],
        mx: "auto",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 25
        }
      }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_8__["Image"], {
        key: _committees_json__WEBPACK_IMPORTED_MODULE_10__["committee_divisions"][this.state.division].committees[this.state.committee].image,
        src: _committees_json__WEBPACK_IMPORTED_MODULE_10__["committee_divisions"][this.state.division].committees[this.state.committee].image,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 29
        }
      })), __jsx("div", {
        dangerouslySetInnerHTML: {
          __html: _committees_json__WEBPACK_IMPORTED_MODULE_10__["committee_divisions"][this.state.division].committees[this.state.committee].description
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186,
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
            lineNumber: 208,
            columnNumber: 17
          }
        }, __jsx("div", {
          className: "loading-spinner",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 209,
            columnNumber: 21
          }
        }), __jsx("p", {
          className: "loading-text",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 210,
            columnNumber: 21
          }
        }, "Loading..."));
      }
      return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, heads.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx("h2", {
        className: "committee-subtitle",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219,
          columnNumber: 25
        }
      }, "Committee Heads"), __jsx(_general_contactcards__WEBPACK_IMPORTED_MODULE_9__["default"], {
        content: heads,
        minHeight: "110px",
        width: 240,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220,
          columnNumber: 25
        }
      })), members.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx("h2", {
        className: "committee-subtitle",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225,
          columnNumber: 25
        }
      }, "Committee Members"), __jsx(_general_contactcards__WEBPACK_IMPORTED_MODULE_9__["default"], {
        content: members,
        minHeight: "110px",
        width: 240,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wZW9wbGUvY29tbWl0dGVlcy9jb21taXR0ZWVzLmpzIl0sIm5hbWVzIjpbIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJlIiwidCIsInIiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJuIiwiaGFzT3duUHJvcGVydHkiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImkiLCJTeW1ib2wiLCJhIiwiaXRlcmF0b3IiLCJjIiwiYXN5bmNJdGVyYXRvciIsInUiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIndyYXAiLCJHZW5lcmF0b3IiLCJjcmVhdGUiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwidHlwZSIsImFyZyIsImNhbGwiLCJoIiwibCIsImYiLCJzIiwieSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJwIiwiZCIsImdldFByb3RvdHlwZU9mIiwidiIsInZhbHVlcyIsImciLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJpbnZva2UiLCJyZXNvbHZlIiwiX19hd2FpdCIsInRoZW4iLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsIkVycm9yIiwiZG9uZSIsIm1ldGhvZCIsImRlbGVnYXRlIiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiVHlwZUVycm9yIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpc05hTiIsImxlbmd0aCIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwia2V5cyIsInJldmVyc2UiLCJwb3AiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicnZhbCIsImhhbmRsZSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwiZGVsZWdhdGVZaWVsZCIsIl9jYWxsU3VwZXIiLCJfZ2V0UHJvdG90eXBlT2YiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJSZWZsZWN0IiwiY29uc3RydWN0IiwiYXBwbHkiLCJCb29sZWFuIiwidmFsdWVPZiIsIkNvbW1pdHRlZXMiLCJfUmVhY3QkQ29tcG9uZW50IiwicHJvcHMiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjayIsInN0YXRlIiwiZGl2aXNpb24iLCJjb21taXR0ZWUiLCJtZW1iZXJzRGF0YSIsImlzTG9hZGluZyIsImNoYW5nZURpdmlzaW9uIiwiYmluZCIsImNoYW5nZUNvbW1pdHRlZSIsIl9pbmhlcml0cyIsIl9jcmVhdGVDbGFzcyIsImtleSIsIl9jb21wb25lbnREaWRNb3VudCIsIl9hc3luY1RvR2VuZXJhdG9yIiwiX2NhbGxlZSIsIm1lbWJlcnMiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwiZmV0Y2hNZW1iZXJzRGF0YSIsInNldFN0YXRlIiwidDAiLCJjb25zb2xlIiwid2FybiIsImNvbXBvbmVudERpZE1vdW50IiwiYXJndW1lbnRzIiwiX2ZldGNoTWVtYmVyc0RhdGEiLCJfY2FsbGVlMiIsInB1Ymxpc2hlZElkIiwiZ2lkIiwiY2FjaGVCdXN0ZXIiLCJ1cmwiLCJyZXNwb25zZSIsInRleHQiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJEYXRlIiwibm93IiwiY29uY2F0IiwiZmV0Y2giLCJ0cmFuc2Zvcm1DU1ZEYXRhIiwiY3N2VGV4dCIsImxpbmVzIiwic3BsaXQiLCJtYXAiLCJsaW5lIiwicmVzdWx0IiwiY3VycmVudCIsImluUXVvdGVzIiwiY2hhciIsInRyaW0iLCJjb21taXR0ZWVOYW1lTWFwcGluZyIsImNvbW1pdHRlZVJvdyIsImNvbW1pdHRlZXMiLCJjb2wiLCJjbGVhbk5hbWUiLCJyZXBsYWNlIiwiaGFzRW1haWxDb2x1bW4iLCJoZWFkcyIsImVtYWlsQ29sIiwicm93SWR4Iiwicm93IiwiX2kiLCJfT2JqZWN0JGVudHJpZXMiLCJlbnRyaWVzIiwiX09iamVjdCRlbnRyaWVzJF9pIiwiX3NsaWNlZFRvQXJyYXkiLCJjb2xTdHIiLCJwYXJzZUludCIsIm1lbWJlck5hbWUiLCJlbWFpbCIsImVuZHNXaXRoIiwiX2kyIiwiX09iamVjdCR2YWx1ZXMiLCJpbmRleCIsInJlbmRlciIsIl90aGlzMiIsImRpdmlzaW9uX2tleXMiLCJfbG9vcCIsIl9fanN4IiwiQm94IiwiY29tbWl0dGVlX2RpdmlzaW9ucyIsIl9fc2VsZiIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwib25DbGljayIsImNsYXNzTmFtZSIsImN1cnJlbnRfZGl2aXNpb24iLCJjb21taXR0ZWVfa2V5cyIsIl9sb29wMiIsImoiLCJGbGV4IiwianVzdGlmeUNvbnRlbnQiLCJmbGV4V3JhcCIsImZsZXhEaXJlY3Rpb24iLCJ3aWR0aCIsIm1sIiwibXIiLCJteCIsIkltYWdlIiwiaW1hZ2UiLCJzcmMiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsImRlc2NyaXB0aW9uIiwicmVuZGVySGVhZHNBbmRNZW1iZXJzIiwiY3VycmVudENvbW1pdHRlZSIsInNoZWV0RGF0YSIsImxpdmVIZWFkcyIsInN0YXRpY0hlYWRzIiwiUmVhY3QiLCJGcmFnbWVudCIsIkNhcmRzIiwiY29udGVudCIsIm1pbkhlaWdodCIsIkNvbXBvbmVudCJdLCJtYXBwaW5n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aG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJveCwgRmxleCwgSW1hZ2UgfSBmcm9tICdyZWJhc3MnO1xyXG5pbXBvcnQgQ2FyZHMgZnJvbSAnLi4vLi4vZ2VuZXJhbC9jb250YWN0Y2FyZHMnO1xyXG5pbXBvcnQgeyBjb21taXR0ZWVfZGl2aXNpb25zIH0gZnJvbSAnLi9jb21taXR0ZWVzLmpzb24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tbWl0dGVlcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBkaXZpc2lvbjogMCxcclxuICAgICAgICAgICAgY29tbWl0dGVlOiAwLFxyXG4gICAgICAgICAgICBtZW1iZXJzRGF0YToge30sXHJcbiAgICAgICAgICAgIGlzTG9hZGluZzogdHJ1ZVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VEaXZpc2lvbiA9IHRoaXMuY2hhbmdlRGl2aXNpb24uYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmNoYW5nZUNvbW1pdHRlZSA9IHRoaXMuY2hhbmdlQ29tbWl0dGVlLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgbWVtYmVycyA9IGF3YWl0IHRoaXMuZmV0Y2hNZW1iZXJzRGF0YSgpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbWVtYmVyc0RhdGE6IG1lbWJlcnMsIGlzTG9hZGluZzogZmFsc2UgfSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCdGYWlsZWQgdG8gZmV0Y2ggbWVtYmVyczonLCBlcnJvcik7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0xvYWRpbmc6IGZhbHNlIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBmZXRjaE1lbWJlcnNEYXRhKCkge1xyXG4gICAgICAgIC8vIFVzZSB0aGUgcHVibGlzaGVkIHNwcmVhZHNoZWV0IFVSTCBmb3IgZmFzdGVyIHVwZGF0ZXNcclxuICAgICAgICBjb25zdCBwdWJsaXNoZWRJZCA9ICcyUEFDWC0xdlFWdWNUUXljYmtnWkxWMzd3cGJ4T1ZYVFR2MHJVUGROamVYNDJqSXZlV3hCVU9mWGI2Uk5YQWVmeWx3M0lFU2E4aGNZT1Z1Y1BQTEFKeic7XHJcbiAgICAgICAgY29uc3QgZ2lkID0gJzE4MzIzMzk4MDUnOyAvLyBDb21taXR0ZWVzIHNoZWV0XHJcbiAgICAgICAgY29uc3QgY2FjaGVCdXN0ZXIgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgIGNvbnN0IHVybCA9IGBodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9zcHJlYWRzaGVldHMvZC9lLyR7cHVibGlzaGVkSWR9L3B1Yj9naWQ9JHtnaWR9JnNpbmdsZT10cnVlJm91dHB1dD1jc3YmXz0ke2NhY2hlQnVzdGVyfWA7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcclxuICAgICAgICBjb25zdCB0ZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy50cmFuc2Zvcm1DU1ZEYXRhKHRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHRyYW5zZm9ybUNTVkRhdGEoY3N2VGV4dCkge1xyXG4gICAgICAgIC8vIFBhcnNlIENTVlxyXG4gICAgICAgIGNvbnN0IGxpbmVzID0gY3N2VGV4dC5zcGxpdCgnXFxuJykubWFwKGxpbmUgPT4ge1xyXG4gICAgICAgICAgICAvLyBTaW1wbGUgQ1NWIHBhcnNpbmcgKGhhbmRsZXMgYmFzaWMgY2FzZXMpXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgICAgICBsZXQgY3VycmVudCA9ICcnO1xyXG4gICAgICAgICAgICBsZXQgaW5RdW90ZXMgPSBmYWxzZTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjaGFyID0gbGluZVtpXTtcclxuICAgICAgICAgICAgICAgIGlmIChjaGFyID09PSAnXCInKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5RdW90ZXMgPSAhaW5RdW90ZXM7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNoYXIgPT09ICcsJyAmJiAhaW5RdW90ZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChjdXJyZW50LnRyaW0oKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50ICs9IGNoYXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVzdWx0LnB1c2goY3VycmVudC50cmltKCkpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBNYXAgc2hlZXQgY29tbWl0dGVlIG5hbWVzIHRvIEpTT04gY29tbWl0dGVlIG5hbWVzXHJcbiAgICAgICAgY29uc3QgY29tbWl0dGVlTmFtZU1hcHBpbmcgPSB7XHJcbiAgICAgICAgICAgICdBbHVtbmkgYW5kIEZhbWlseSc6ICdBbHVtbmknLFxyXG4gICAgICAgICAgICAnTXVydGNoJzogJ011cnRjaGFuZGlzZScsXHJcbiAgICAgICAgICAgICdNSVMnOiAnTWNNdXJ0cnkgSW5ub3ZhdGlvbiBTcGFjZSAoTUlTKScsXHJcbiAgICAgICAgICAgICdXZWJzaXRlIGFuZCBBcHAnOiAnV2Vic2l0ZScsXHJcbiAgICAgICAgICAgICdFeHRlcm5hbHMgU29jaWFscyc6ICdFeHRlcm5hbCBTb2NpYWxzJyxcclxuICAgICAgICAgICAgJ0ludGVybmFscyBTb2NpYWxzJzogJ0ludGVybmFsIFNvY2lhbHMnLFxyXG4gICAgICAgICAgICAnQ2hhcml0eSc6ICdDaGFyaXR5IGFuZCBQaGlsYW50aHJvcHknXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gUm93IDIgKGluZGV4IDEpIGhhcyBjb21taXR0ZWUgbmFtZXNcclxuICAgICAgICBjb25zdCBjb21taXR0ZWVSb3cgPSBsaW5lc1sxXSB8fCBbXTtcclxuICAgICAgICBjb25zdCBjb21taXR0ZWVzID0ge307XHJcblxyXG4gICAgICAgIC8vIFBhcnNlIGNvbW1pdHRlZSBuYW1lcywgdHJhY2tpbmcgd2hpY2ggY29sdW1ucyBoYXZlIGVtYWlsc1xyXG4gICAgICAgIC8vIFN0cnVjdHVyZTogQ29tbWl0dGVlTmFtZSwgRW1haWwsIENvbW1pdHRlZU5hbWUsIEVtYWlsLCAuLi5cclxuICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCBjb21taXR0ZWVSb3cubGVuZ3RoOyBjb2wrKykge1xyXG4gICAgICAgICAgICBjb25zdCBuYW1lID0gY29tbWl0dGVlUm93W2NvbF07XHJcbiAgICAgICAgICAgIGlmIChuYW1lICYmIG5hbWUgIT09ICdFbWFpbCcpIHtcclxuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBlbW9qaSBmcm9tIG5hbWUgZm9yIG1hdGNoaW5nXHJcbiAgICAgICAgICAgICAgICBsZXQgY2xlYW5OYW1lID0gbmFtZS5yZXBsYWNlKC9bXlxcd1xccygpXS9nLCAnJykudHJpbSgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbW1pdHRlZU5hbWVNYXBwaW5nW2NsZWFuTmFtZV0pIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhbk5hbWUgPSBjb21taXR0ZWVOYW1lTWFwcGluZ1tjbGVhbk5hbWVdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgbmV4dCBjb2x1bW4gaXMgYW4gRW1haWwgY29sdW1uXHJcbiAgICAgICAgICAgICAgICBjb25zdCBoYXNFbWFpbENvbHVtbiA9IGNvbW1pdHRlZVJvd1tjb2wgKyAxXSA9PT0gJ0VtYWlsJztcclxuICAgICAgICAgICAgICAgIGNvbW1pdHRlZXNbY29sXSA9IHsgbmFtZTogY2xlYW5OYW1lLCBoZWFkczogW10sIG1lbWJlcnM6IFtdLCBlbWFpbENvbDogaGFzRW1haWxDb2x1bW4gPyBjb2wgKyAxIDogbnVsbCB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBQYXJzZSBtZW1iZXJzIGZyb20gcm93IDMrIChpbmRleCAyKylcclxuICAgICAgICBmb3IgKGxldCByb3dJZHggPSAyOyByb3dJZHggPCBsaW5lcy5sZW5ndGg7IHJvd0lkeCsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJvdyA9IGxpbmVzW3Jvd0lkeF07XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgW2NvbFN0ciwgY29tbWl0dGVlXSBvZiBPYmplY3QuZW50cmllcyhjb21taXR0ZWVzKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29sID0gcGFyc2VJbnQoY29sU3RyKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1lbWJlck5hbWUgPSByb3dbY29sXTtcclxuICAgICAgICAgICAgICAgIGlmIChtZW1iZXJOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gR2V0IGVtYWlsIGZyb20gYWRqYWNlbnQgRW1haWwgY29sdW1uIGlmIGl0IGV4aXN0c1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVtYWlsID0gY29tbWl0dGVlLmVtYWlsQ29sICE9PSBudWxsID8gKHJvd1tjb21taXR0ZWUuZW1haWxDb2xdIHx8ICcnKSA6ICcnO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiBuYW1lIGVuZHMgd2l0aCBhc3RlcmlzayAoaGVhZClcclxuICAgICAgICAgICAgICAgICAgICBpZiAobWVtYmVyTmFtZS50cmltKCkuZW5kc1dpdGgoJyonKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjbGVhbk5hbWUgPSBtZW1iZXJOYW1lLnRyaW0oKS5yZXBsYWNlKC9cXCokLywgJycpLnRyaW0oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tbWl0dGVlLmhlYWRzLnB1c2goeyBuYW1lOiBjbGVhbk5hbWUsIGVtYWlsOiBlbWFpbC50cmltKCkgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tbWl0dGVlLm1lbWJlcnMucHVzaCh7IG5hbWU6IG1lbWJlck5hbWUudHJpbSgpLCBlbWFpbDogZW1haWwudHJpbSgpIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gUmV0dXJuIGFzIHsgY29tbWl0dGVlTmFtZTogeyBoZWFkczogWy4uLl0sIG1lbWJlcnM6IFsuLi5dIH0gfVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xyXG4gICAgICAgIGZvciAoY29uc3QgY29tbWl0dGVlIG9mIE9iamVjdC52YWx1ZXMoY29tbWl0dGVlcykpIHtcclxuICAgICAgICAgICAgcmVzdWx0W2NvbW1pdHRlZS5uYW1lXSA9IHtcclxuICAgICAgICAgICAgICAgIGhlYWRzOiBjb21taXR0ZWUuaGVhZHMsXHJcbiAgICAgICAgICAgICAgICBtZW1iZXJzOiBjb21taXR0ZWUubWVtYmVyc1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZURpdmlzaW9uKGluZGV4KSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGRpdmlzaW9uOiBpbmRleCxcclxuICAgICAgICAgICAgY29tbWl0dGVlOiAwXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VDb21taXR0ZWUoaW5kZXgpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgY29tbWl0dGVlOiBpbmRleCB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuXHJcbiAgICAgICAgbGV0IGRpdmlzaW9uX2tleXMgPSBbXVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29tbWl0dGVlX2RpdmlzaW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBkaXZpc2lvbl9rZXlzLnB1c2goXHJcbiAgICAgICAgICAgICAgICA8Qm94IGtleT17Y29tbWl0dGVlX2RpdmlzaW9uc1tpXS5kaXZpc2lvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiB0aGlzLmNoYW5nZURpdmlzaW9uKGkpfSBjbGFzc05hbWU9e3RoaXMuc3RhdGUuZGl2aXNpb24gPT09IGkgPyBcImFjdGl2ZS1kaXZpc2lvblwiIDogXCJpbmFjdGl2ZS1kaXZpc2lvblwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdkaXZpc2lvbi1rZXknPntgJHtjb21taXR0ZWVfZGl2aXNpb25zW2ldLmRpdmlzaW9ufWB9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgY3VycmVudF9kaXZpc2lvbiA9IGNvbW1pdHRlZV9kaXZpc2lvbnNbdGhpcy5zdGF0ZS5kaXZpc2lvbl1cclxuICAgICAgICBsZXQgY29tbWl0dGVlX2tleXMgPSBbXVxyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY3VycmVudF9kaXZpc2lvbi5jb21taXR0ZWVzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIGNvbW1pdHRlZV9rZXlzLnB1c2goXHJcbiAgICAgICAgICAgICAgICA8Qm94IGtleT17Y3VycmVudF9kaXZpc2lvbi5jb21taXR0ZWVzW2pdLm5hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gdGhpcy5jaGFuZ2VDb21taXR0ZWUoail9IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5jb21taXR0ZWUgPT09IGogPyBcImFjdGl2ZS1jb21taXR0ZWVcIiA6IFwiaW5hY3RpdmUtY29tbWl0dGVlXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2NvbW1pdHRlZS1rZXknPntjdXJyZW50X2RpdmlzaW9uLmNvbW1pdHRlZXNbal0ubmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21taXR0ZWUtcGFnZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbW1pdHRlZS1oZXJvJz5cclxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdjb21taXR0ZWUtbWFpbi10aXRsZSc+Q29tbWl0dGVlczwvaDE+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIEZpeGVkIGZsZXhXcmFwIHByb3AgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPEZsZXgganVzdGlmeUNvbnRlbnQ9J2NlbnRlcicgZmxleFdyYXA9J3dyYXAnIGZsZXhEaXJlY3Rpb249J3Jvdyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtkaXZpc2lvbl9rZXlzfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICB7LyogRml4ZWQgZmxleFdyYXAgcHJvcCAqL31cclxuICAgICAgICAgICAgICAgICAgICA8RmxleCBqdXN0aWZ5Q29udGVudD0nY2VudGVyJyBmbGV4V3JhcD0nd3JhcCcgZmxleERpcmVjdGlvbj0ncm93Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NvbW1pdHRlZV9rZXlzfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Qm94IHdpZHRoPXtbMC45LCAwLjcsIDAuNiwgMC41XX0gbWw9J2F1dG8nIG1yPSdhdXRvJyBjbGFzc05hbWU9J2NvbW1pdHRlZS1kZXNjcmlwdGlvbic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J2RpdmlzaW9uLXRpdGxlJz57Y29tbWl0dGVlX2RpdmlzaW9uc1t0aGlzLnN0YXRlLmRpdmlzaW9uXS5jb21taXR0ZWVzW3RoaXMuc3RhdGUuY29tbWl0dGVlXS5uYW1lfTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggd2lkdGg9e1sxLCAuNzVdfSBteD0nYXV0bycgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIGtleT17Y29tbWl0dGVlX2RpdmlzaW9uc1t0aGlzLnN0YXRlLmRpdmlzaW9uXS5jb21taXR0ZWVzW3RoaXMuc3RhdGUuY29tbWl0dGVlXS5pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2NvbW1pdHRlZV9kaXZpc2lvbnNbdGhpcy5zdGF0ZS5kaXZpc2lvbl0uY29tbWl0dGVlc1t0aGlzLnN0YXRlLmNvbW1pdHRlZV0uaW1hZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogY29tbWl0dGVlX2RpdmlzaW9uc1t0aGlzLnN0YXRlLmRpdmlzaW9uXS5jb21taXR0ZWVzW3RoaXMuc3RhdGUuY29tbWl0dGVlXS5kZXNjcmlwdGlvbiB9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJIZWFkc0FuZE1lbWJlcnMoKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVySGVhZHNBbmRNZW1iZXJzKCkge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRDb21taXR0ZWUgPSBjb21taXR0ZWVfZGl2aXNpb25zW3RoaXMuc3RhdGUuZGl2aXNpb25dLmNvbW1pdHRlZXNbdGhpcy5zdGF0ZS5jb21taXR0ZWVdO1xyXG4gICAgICAgIGNvbnN0IHNoZWV0RGF0YSA9IHRoaXMuc3RhdGUubWVtYmVyc0RhdGFbY3VycmVudENvbW1pdHRlZS5uYW1lXTtcclxuXHJcbiAgICAgICAgLy8gR2V0IGhlYWRzOiBwcmVmZXIgbGl2ZSBkYXRhIGZyb20gc2hlZXQsIGZhbGwgYmFjayB0byBzdGF0aWMgSlNPTlxyXG4gICAgICAgIGNvbnN0IGxpdmVIZWFkcyA9IHNoZWV0RGF0YT8uaGVhZHMgfHwgW107XHJcbiAgICAgICAgY29uc3Qgc3RhdGljSGVhZHMgPSBjdXJyZW50Q29tbWl0dGVlLmhlYWRzIHx8IFtdO1xyXG4gICAgICAgIGNvbnN0IGhlYWRzID0gbGl2ZUhlYWRzLmxlbmd0aCA+IDAgPyBsaXZlSGVhZHMgOiBzdGF0aWNIZWFkcztcclxuXHJcbiAgICAgICAgLy8gR2V0IG1lbWJlcnMgZnJvbSBzaGVldFxyXG4gICAgICAgIGNvbnN0IG1lbWJlcnMgPSBzaGVldERhdGE/Lm1lbWJlcnMgfHwgW107XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmlzTG9hZGluZykge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZy1zcGlubmVyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibG9hZGluZy10ZXh0XCI+TG9hZGluZy4uLjwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIHtoZWFkcy5sZW5ndGggPiAwICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdjb21taXR0ZWUtc3VidGl0bGUnPkNvbW1pdHRlZSBIZWFkczwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkcyBjb250ZW50PXtoZWFkc30gbWluSGVpZ2h0PVwiMTEwcHhcIiB3aWR0aD17MjQwfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIHttZW1iZXJzLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J2NvbW1pdHRlZS1zdWJ0aXRsZSc+Q29tbWl0dGVlIE1lbWJlcnM8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZHMgY29udGVudD17bWVtYmVyc30gbWluSGVpZ2h0PVwiMTEwcHhcIiB3aWR0aD17MjQwfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=