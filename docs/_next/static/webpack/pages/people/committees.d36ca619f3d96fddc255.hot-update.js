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
          // Check if next column is an Email column (either labeled "Email" or empty)
          var nextCol = committeeRow[col + 1];
          var hasEmailColumn = nextCol === 'Email' || nextCol === '' || nextCol === undefined;
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
            lineNumber: 144,
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
            lineNumber: 145,
            columnNumber: 21
          }
        }, __jsx("p", {
          className: "division-key",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 146,
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
            lineNumber: 155,
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
            lineNumber: 156,
            columnNumber: 21
          }
        }, __jsx("p", {
          className: "committee-key",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 157,
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
          lineNumber: 164,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "committee-hero",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 17
        }
      }, __jsx("h1", {
        className: "committee-main-title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 21
        }
      }, "Committees")), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 17
        }
      }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_8__["Flex"], {
        justifyContent: "center",
        flexWrap: "wrap",
        flexDirection: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 21
        }
      }, division_keys)), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 17
        }
      }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_8__["Flex"], {
        justifyContent: "center",
        flexWrap: "wrap",
        flexDirection: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 21
        }
      }, committee_keys)), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180,
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
          lineNumber: 181,
          columnNumber: 21
        }
      }, __jsx("h1", {
        className: "division-title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 25
        }
      }, _committees_json__WEBPACK_IMPORTED_MODULE_10__["committee_divisions"][this.state.division].committees[this.state.committee].name), __jsx(rebass__WEBPACK_IMPORTED_MODULE_8__["Box"], {
        width: [1, .75],
        mx: "auto",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 25
        }
      }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_8__["Image"], {
        key: _committees_json__WEBPACK_IMPORTED_MODULE_10__["committee_divisions"][this.state.division].committees[this.state.committee].image,
        src: _committees_json__WEBPACK_IMPORTED_MODULE_10__["committee_divisions"][this.state.division].committees[this.state.committee].image,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 29
        }
      })), __jsx("div", {
        dangerouslySetInnerHTML: {
          __html: _committees_json__WEBPACK_IMPORTED_MODULE_10__["committee_divisions"][this.state.division].committees[this.state.committee].description
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187,
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
            lineNumber: 209,
            columnNumber: 17
          }
        }, __jsx("div", {
          className: "loading-spinner",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 210,
            columnNumber: 21
          }
        }), __jsx("p", {
          className: "loading-text",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 211,
            columnNumber: 21
          }
        }, "Loading..."));
      }
      return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, heads.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx("h2", {
        className: "committee-subtitle",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220,
          columnNumber: 25
        }
      }, "Committee Heads"), __jsx(_general_contactcards__WEBPACK_IMPORTED_MODULE_9__["default"], {
        content: heads,
        minHeight: "110px",
        width: 240,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221,
          columnNumber: 25
        }
      })), members.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx("h2", {
        className: "committee-subtitle",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226,
          columnNumber: 25
        }
      }, "Committee Members"), __jsx(_general_contactcards__WEBPACK_IMPORTED_MODULE_9__["default"], {
        content: members,
        minHeight: "110px",
        width: 240,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wZW9wbGUvY29tbWl0dGVlcy9jb21taXR0ZWVzLmpzIl0sIm5hbWVzIjpbIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJlIiwidCIsInIiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJuIiwiaGFzT3duUHJvcGVydHkiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImkiLCJTeW1ib2wiLCJhIiwiaXRlcmF0b3IiLCJjIiwiYXN5bmNJdGVyYXRvciIsInUiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIndyYXAiLCJHZW5lcmF0b3IiLCJjcmVhdGUiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwidHlwZSIsImFyZyIsImNhbGwiLCJoIiwibCIsImYiLCJzIiwieSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJwIiwiZCIsImdldFByb3RvdHlwZU9mIiwidiIsInZhbHVlcyIsImciLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJpbnZva2UiLCJyZXNvbHZlIiwiX19hd2FpdCIsInRoZW4iLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsIkVycm9yIiwiZG9uZSIsIm1ldGhvZCIsImRlbGVnYXRlIiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiVHlwZUVycm9yIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpc05hTiIsImxlbmd0aCIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwia2V5cyIsInJldmVyc2UiLCJwb3AiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicnZhbCIsImhhbmRsZSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwiZGVsZWdhdGVZaWVsZCIsIl9jYWxsU3VwZXIiLCJfZ2V0UHJvdG90eXBlT2YiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJSZWZsZWN0IiwiY29uc3RydWN0IiwiYXBwbHkiLCJCb29sZWFuIiwidmFsdWVPZiIsIkNvbW1pdHRlZXMiLCJfUmVhY3QkQ29tcG9uZW50IiwicHJvcHMiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjayIsInN0YXRlIiwiZGl2aXNpb24iLCJjb21taXR0ZWUiLCJtZW1iZXJzRGF0YSIsImlzTG9hZGluZyIsImNoYW5nZURpdmlzaW9uIiwiYmluZCIsImNoYW5nZUNvbW1pdHRlZSIsIl9pbmhlcml0cyIsIl9jcmVhdGVDbGFzcyIsImtleSIsIl9jb21wb25lbnREaWRNb3VudCIsIl9hc3luY1RvR2VuZXJhdG9yIiwiX2NhbGxlZSIsIm1lbWJlcnMiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwiZmV0Y2hNZW1iZXJzRGF0YSIsInNldFN0YXRlIiwidDAiLCJjb25zb2xlIiwid2FybiIsImNvbXBvbmVudERpZE1vdW50IiwiYXJndW1lbnRzIiwiX2ZldGNoTWVtYmVyc0RhdGEiLCJfY2FsbGVlMiIsInB1Ymxpc2hlZElkIiwiZ2lkIiwiY2FjaGVCdXN0ZXIiLCJ1cmwiLCJyZXNwb25zZSIsInRleHQiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJEYXRlIiwibm93IiwiY29uY2F0IiwiZmV0Y2giLCJ0cmFuc2Zvcm1DU1ZEYXRhIiwiY3N2VGV4dCIsImxpbmVzIiwic3BsaXQiLCJtYXAiLCJsaW5lIiwicmVzdWx0IiwiY3VycmVudCIsImluUXVvdGVzIiwiY2hhciIsInRyaW0iLCJjb21taXR0ZWVOYW1lTWFwcGluZyIsImNvbW1pdHRlZVJvdyIsImNvbW1pdHRlZXMiLCJjb2wiLCJjbGVhbk5hbWUiLCJyZXBsYWNlIiwibmV4dENvbCIsImhhc0VtYWlsQ29sdW1uIiwidW5kZWZpbmVkIiwiaGVhZHMiLCJlbWFpbENvbCIsInJvd0lkeCIsInJvdyIsIl9pIiwiX09iamVjdCRlbnRyaWVzIiwiZW50cmllcyIsIl9PYmplY3QkZW50cmllcyRfaSIsIl9zbGljZWRUb0FycmF5IiwiY29sU3RyIiwicGFyc2VJbnQiLCJtZW1iZXJOYW1lIiwiZW1haWwiLCJlbmRzV2l0aCIsIl9pMiIsIl9PYmplY3QkdmFsdWVzIiwiaW5kZXgiLCJyZW5kZXIiLCJfdGhpczIiLCJkaXZpc2lvbl9rZXlzIiwiX2xvb3AiLCJfX2pzeCIsIkJveCIsImNvbW1pdHRlZV9kaXZpc2lvbnMiLCJfX3NlbGYiLCJfX3NvdXJjZSIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsIm9uQ2xpY2siLCJjbGFzc05hbWUiLCJjdXJyZW50X2RpdmlzaW9uIiwiY29tbWl0dGVlX2tleXMiLCJfbG9vcDIiLCJqIiwiRmxleCIsImp1c3RpZnlDb250ZW50IiwiZmxleFdyYXAiLCJmbGV4RGlyZWN0aW9uIiwid2lkdGgiLCJtbCIsIm1yIiwibXgiLCJJbWFnZSIsImltYWdlIiwic3JjIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJkZXNjcmlwdGlvbiIsInJlbmRlckhlYWRzQW5kTWVtYmVycyIsImN1cnJlbnRDb21taXR0ZWUiLCJzaGVldERhdGEiLCJsaXZlSGVhZHMiLCJzdGF0aWNIZWFkcyIsIlJlYWN0IiwiRnJhZ21lbnQiLCJDYXJkcyIsImNvbnRlbnQiLCJtaW5IZWlnaHQi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bUMwQiw0Q0FBSyxDQUFDSyxTQUFTO0FBQXhCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Blb3BsZS9jb21taXR0ZWVzLmQzNmNhNjE5ZjNkOTZmZGRjMjU1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCb3gsIEZsZXgsIEltYWdlIH0gZnJvbSAncmViYXNzJztcclxuaW1wb3J0IENhcmRzIGZyb20gJy4uLy4uL2dlbmVyYWwvY29udGFjdGNhcmRzJztcclxuaW1wb3J0IHsgY29tbWl0dGVlX2RpdmlzaW9ucyB9IGZyb20gJy4vY29tbWl0dGVlcy5qc29uJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbW1pdHRlZXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgZGl2aXNpb246IDAsXHJcbiAgICAgICAgICAgIGNvbW1pdHRlZTogMCxcclxuICAgICAgICAgICAgbWVtYmVyc0RhdGE6IHt9LFxyXG4gICAgICAgICAgICBpc0xvYWRpbmc6IHRydWVcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuY2hhbmdlRGl2aXNpb24gPSB0aGlzLmNoYW5nZURpdmlzaW9uLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VDb21taXR0ZWUgPSB0aGlzLmNoYW5nZUNvbW1pdHRlZS5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lbWJlcnMgPSBhd2FpdCB0aGlzLmZldGNoTWVtYmVyc0RhdGEoKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1lbWJlcnNEYXRhOiBtZW1iZXJzLCBpc0xvYWRpbmc6IGZhbHNlIH0pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignRmFpbGVkIHRvIGZldGNoIG1lbWJlcnM6JywgZXJyb3IpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNMb2FkaW5nOiBmYWxzZSB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZmV0Y2hNZW1iZXJzRGF0YSgpIHtcclxuICAgICAgICAvLyBVc2UgdGhlIHB1Ymxpc2hlZCBzcHJlYWRzaGVldCBVUkwgZm9yIGZhc3RlciB1cGRhdGVzXHJcbiAgICAgICAgY29uc3QgcHVibGlzaGVkSWQgPSAnMlBBQ1gtMXZRVnVjVFF5Y2JrZ1pMVjM3d3BieE9WWFRUdjByVVBkTmplWDQyakl2ZVd4QlVPZlhiNlJOWEFlZnlsdzNJRVNhOGhjWU9WdWNQUExBSnonO1xyXG4gICAgICAgIGNvbnN0IGdpZCA9ICcxODMyMzM5ODA1JzsgLy8gQ29tbWl0dGVlcyBzaGVldFxyXG4gICAgICAgIGNvbnN0IGNhY2hlQnVzdGVyID0gRGF0ZS5ub3coKTtcclxuICAgICAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vc3ByZWFkc2hlZXRzL2QvZS8ke3B1Ymxpc2hlZElkfS9wdWI/Z2lkPSR7Z2lkfSZzaW5nbGU9dHJ1ZSZvdXRwdXQ9Y3N2Jl89JHtjYWNoZUJ1c3Rlcn1gO1xyXG5cclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XHJcbiAgICAgICAgY29uc3QgdGV4dCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtQ1NWRGF0YSh0ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICB0cmFuc2Zvcm1DU1ZEYXRhKGNzdlRleHQpIHtcclxuICAgICAgICAvLyBQYXJzZSBDU1ZcclxuICAgICAgICBjb25zdCBsaW5lcyA9IGNzdlRleHQuc3BsaXQoJ1xcbicpLm1hcChsaW5lID0+IHtcclxuICAgICAgICAgICAgLy8gU2ltcGxlIENTViBwYXJzaW5nIChoYW5kbGVzIGJhc2ljIGNhc2VzKVxyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnQgPSAnJztcclxuICAgICAgICAgICAgbGV0IGluUXVvdGVzID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2hhciA9IGxpbmVbaV07XHJcbiAgICAgICAgICAgICAgICBpZiAoY2hhciA9PT0gJ1wiJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGluUXVvdGVzID0gIWluUXVvdGVzO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjaGFyID09PSAnLCcgJiYgIWluUXVvdGVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goY3VycmVudC50cmltKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnQgPSAnJztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudCArPSBjaGFyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGN1cnJlbnQudHJpbSgpKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gTWFwIHNoZWV0IGNvbW1pdHRlZSBuYW1lcyB0byBKU09OIGNvbW1pdHRlZSBuYW1lc1xyXG4gICAgICAgIGNvbnN0IGNvbW1pdHRlZU5hbWVNYXBwaW5nID0ge1xyXG4gICAgICAgICAgICAnQWx1bW5pIGFuZCBGYW1pbHknOiAnQWx1bW5pJyxcclxuICAgICAgICAgICAgJ011cnRjaCc6ICdNdXJ0Y2hhbmRpc2UnLFxyXG4gICAgICAgICAgICAnTUlTJzogJ01jTXVydHJ5IElubm92YXRpb24gU3BhY2UgKE1JUyknLFxyXG4gICAgICAgICAgICAnV2Vic2l0ZSBhbmQgQXBwJzogJ1dlYnNpdGUnLFxyXG4gICAgICAgICAgICAnRXh0ZXJuYWxzIFNvY2lhbHMnOiAnRXh0ZXJuYWwgU29jaWFscycsXHJcbiAgICAgICAgICAgICdJbnRlcm5hbHMgU29jaWFscyc6ICdJbnRlcm5hbCBTb2NpYWxzJyxcclxuICAgICAgICAgICAgJ0NoYXJpdHknOiAnQ2hhcml0eSBhbmQgUGhpbGFudGhyb3B5J1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIFJvdyAyIChpbmRleCAxKSBoYXMgY29tbWl0dGVlIG5hbWVzXHJcbiAgICAgICAgY29uc3QgY29tbWl0dGVlUm93ID0gbGluZXNbMV0gfHwgW107XHJcbiAgICAgICAgY29uc3QgY29tbWl0dGVlcyA9IHt9O1xyXG5cclxuICAgICAgICAvLyBQYXJzZSBjb21taXR0ZWUgbmFtZXMsIHRyYWNraW5nIHdoaWNoIGNvbHVtbnMgaGF2ZSBlbWFpbHNcclxuICAgICAgICAvLyBTdHJ1Y3R1cmU6IENvbW1pdHRlZU5hbWUsIEVtYWlsLCBDb21taXR0ZWVOYW1lLCBFbWFpbCwgLi4uXHJcbiAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgY29tbWl0dGVlUm93Lmxlbmd0aDsgY29sKyspIHtcclxuICAgICAgICAgICAgY29uc3QgbmFtZSA9IGNvbW1pdHRlZVJvd1tjb2xdO1xyXG4gICAgICAgICAgICBpZiAobmFtZSAmJiBuYW1lICE9PSAnRW1haWwnKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgZW1vamkgZnJvbSBuYW1lIGZvciBtYXRjaGluZ1xyXG4gICAgICAgICAgICAgICAgbGV0IGNsZWFuTmFtZSA9IG5hbWUucmVwbGFjZSgvW15cXHdcXHMoKV0vZywgJycpLnRyaW0oKTtcclxuICAgICAgICAgICAgICAgIGlmIChjb21taXR0ZWVOYW1lTWFwcGluZ1tjbGVhbk5hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYW5OYW1lID0gY29tbWl0dGVlTmFtZU1hcHBpbmdbY2xlYW5OYW1lXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIG5leHQgY29sdW1uIGlzIGFuIEVtYWlsIGNvbHVtbiAoZWl0aGVyIGxhYmVsZWQgXCJFbWFpbFwiIG9yIGVtcHR5KVxyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV4dENvbCA9IGNvbW1pdHRlZVJvd1tjb2wgKyAxXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGhhc0VtYWlsQ29sdW1uID0gbmV4dENvbCA9PT0gJ0VtYWlsJyB8fCBuZXh0Q29sID09PSAnJyB8fCBuZXh0Q29sID09PSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICBjb21taXR0ZWVzW2NvbF0gPSB7IG5hbWU6IGNsZWFuTmFtZSwgaGVhZHM6IFtdLCBtZW1iZXJzOiBbXSwgZW1haWxDb2w6IGhhc0VtYWlsQ29sdW1uID8gY29sICsgMSA6IG51bGwgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gUGFyc2UgbWVtYmVycyBmcm9tIHJvdyAzKyAoaW5kZXggMispXHJcbiAgICAgICAgZm9yIChsZXQgcm93SWR4ID0gMjsgcm93SWR4IDwgbGluZXMubGVuZ3RoOyByb3dJZHgrKykge1xyXG4gICAgICAgICAgICBjb25zdCByb3cgPSBsaW5lc1tyb3dJZHhdO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IFtjb2xTdHIsIGNvbW1pdHRlZV0gb2YgT2JqZWN0LmVudHJpZXMoY29tbWl0dGVlcykpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbCA9IHBhcnNlSW50KGNvbFN0cik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtZW1iZXJOYW1lID0gcm93W2NvbF07XHJcbiAgICAgICAgICAgICAgICBpZiAobWVtYmVyTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEdldCBlbWFpbCBmcm9tIGFkamFjZW50IEVtYWlsIGNvbHVtbiBpZiBpdCBleGlzdHNcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbWFpbCA9IGNvbW1pdHRlZS5lbWFpbENvbCAhPT0gbnVsbCA/IChyb3dbY29tbWl0dGVlLmVtYWlsQ29sXSB8fCAnJykgOiAnJztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgbmFtZSBlbmRzIHdpdGggYXN0ZXJpc2sgKGhlYWQpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1lbWJlck5hbWUudHJpbSgpLmVuZHNXaXRoKCcqJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2xlYW5OYW1lID0gbWVtYmVyTmFtZS50cmltKCkucmVwbGFjZSgvXFwqJC8sICcnKS50cmltKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1pdHRlZS5oZWFkcy5wdXNoKHsgbmFtZTogY2xlYW5OYW1lLCBlbWFpbDogZW1haWwudHJpbSgpIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1pdHRlZS5tZW1iZXJzLnB1c2goeyBuYW1lOiBtZW1iZXJOYW1lLnRyaW0oKSwgZW1haWw6IGVtYWlsLnRyaW0oKSB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFJldHVybiBhcyB7IGNvbW1pdHRlZU5hbWU6IHsgaGVhZHM6IFsuLi5dLCBtZW1iZXJzOiBbLi4uXSB9IH1cclxuICAgICAgICBjb25zdCByZXN1bHQgPSB7fTtcclxuICAgICAgICBmb3IgKGNvbnN0IGNvbW1pdHRlZSBvZiBPYmplY3QudmFsdWVzKGNvbW1pdHRlZXMpKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdFtjb21taXR0ZWUubmFtZV0gPSB7XHJcbiAgICAgICAgICAgICAgICBoZWFkczogY29tbWl0dGVlLmhlYWRzLFxyXG4gICAgICAgICAgICAgICAgbWVtYmVyczogY29tbWl0dGVlLm1lbWJlcnNcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VEaXZpc2lvbihpbmRleCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBkaXZpc2lvbjogaW5kZXgsXHJcbiAgICAgICAgICAgIGNvbW1pdHRlZTogMFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlQ29tbWl0dGVlKGluZGV4KSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvbW1pdHRlZTogaW5kZXggfSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcblxyXG4gICAgICAgIGxldCBkaXZpc2lvbl9rZXlzID0gW11cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbW1pdHRlZV9kaXZpc2lvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgZGl2aXNpb25fa2V5cy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgPEJveCBrZXk9e2NvbW1pdHRlZV9kaXZpc2lvbnNbaV0uZGl2aXNpb259PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gdGhpcy5jaGFuZ2VEaXZpc2lvbihpKX0gY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmRpdmlzaW9uID09PSBpID8gXCJhY3RpdmUtZGl2aXNpb25cIiA6IFwiaW5hY3RpdmUtZGl2aXNpb25cIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nZGl2aXNpb24ta2V5Jz57YCR7Y29tbWl0dGVlX2RpdmlzaW9uc1tpXS5kaXZpc2lvbn1gfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRfZGl2aXNpb24gPSBjb21taXR0ZWVfZGl2aXNpb25zW3RoaXMuc3RhdGUuZGl2aXNpb25dXHJcbiAgICAgICAgbGV0IGNvbW1pdHRlZV9rZXlzID0gW11cclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGN1cnJlbnRfZGl2aXNpb24uY29tbWl0dGVlcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICBjb21taXR0ZWVfa2V5cy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgPEJveCBrZXk9e2N1cnJlbnRfZGl2aXNpb24uY29tbWl0dGVlc1tqXS5uYW1lfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHRoaXMuY2hhbmdlQ29tbWl0dGVlKGopfSBjbGFzc05hbWU9e3RoaXMuc3RhdGUuY29tbWl0dGVlID09PSBqID8gXCJhY3RpdmUtY29tbWl0dGVlXCIgOiBcImluYWN0aXZlLWNvbW1pdHRlZVwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdjb21taXR0ZWUta2V5Jz57Y3VycmVudF9kaXZpc2lvbi5jb21taXR0ZWVzW2pdLm5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbWl0dGVlLXBhZ2VcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb21taXR0ZWUtaGVybyc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0nY29tbWl0dGVlLW1haW4tdGl0bGUnPkNvbW1pdHRlZXM8L2gxPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBGaXhlZCBmbGV4V3JhcCBwcm9wICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxGbGV4IGp1c3RpZnlDb250ZW50PSdjZW50ZXInIGZsZXhXcmFwPSd3cmFwJyBmbGV4RGlyZWN0aW9uPSdyb3cnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGl2aXNpb25fa2V5c31cclxuICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIEZpeGVkIGZsZXhXcmFwIHByb3AgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPEZsZXgganVzdGlmeUNvbnRlbnQ9J2NlbnRlcicgZmxleFdyYXA9J3dyYXAnIGZsZXhEaXJlY3Rpb249J3Jvdyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb21taXR0ZWVfa2V5c31cclxuICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJveCB3aWR0aD17WzAuOSwgMC43LCAwLjYsIDAuNV19IG1sPSdhdXRvJyBtcj0nYXV0bycgY2xhc3NOYW1lPSdjb21taXR0ZWUtZGVzY3JpcHRpb24nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdkaXZpc2lvbi10aXRsZSc+e2NvbW1pdHRlZV9kaXZpc2lvbnNbdGhpcy5zdGF0ZS5kaXZpc2lvbl0uY29tbWl0dGVlc1t0aGlzLnN0YXRlLmNvbW1pdHRlZV0ubmFtZX08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm94IHdpZHRoPXtbMSwgLjc1XX0gbXg9J2F1dG8nID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBrZXk9e2NvbW1pdHRlZV9kaXZpc2lvbnNbdGhpcy5zdGF0ZS5kaXZpc2lvbl0uY29tbWl0dGVlc1t0aGlzLnN0YXRlLmNvbW1pdHRlZV0uaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtjb21taXR0ZWVfZGl2aXNpb25zW3RoaXMuc3RhdGUuZGl2aXNpb25dLmNvbW1pdHRlZXNbdGhpcy5zdGF0ZS5jb21taXR0ZWVdLmltYWdlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGNvbW1pdHRlZV9kaXZpc2lvbnNbdGhpcy5zdGF0ZS5kaXZpc2lvbl0uY29tbWl0dGVlc1t0aGlzLnN0YXRlLmNvbW1pdHRlZV0uZGVzY3JpcHRpb24gfX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVySGVhZHNBbmRNZW1iZXJzKCl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckhlYWRzQW5kTWVtYmVycygpIHtcclxuICAgICAgICBjb25zdCBjdXJyZW50Q29tbWl0dGVlID0gY29tbWl0dGVlX2RpdmlzaW9uc1t0aGlzLnN0YXRlLmRpdmlzaW9uXS5jb21taXR0ZWVzW3RoaXMuc3RhdGUuY29tbWl0dGVlXTtcclxuICAgICAgICBjb25zdCBzaGVldERhdGEgPSB0aGlzLnN0YXRlLm1lbWJlcnNEYXRhW2N1cnJlbnRDb21taXR0ZWUubmFtZV07XHJcblxyXG4gICAgICAgIC8vIEdldCBoZWFkczogcHJlZmVyIGxpdmUgZGF0YSBmcm9tIHNoZWV0LCBmYWxsIGJhY2sgdG8gc3RhdGljIEpTT05cclxuICAgICAgICBjb25zdCBsaXZlSGVhZHMgPSBzaGVldERhdGE/LmhlYWRzIHx8IFtdO1xyXG4gICAgICAgIGNvbnN0IHN0YXRpY0hlYWRzID0gY3VycmVudENvbW1pdHRlZS5oZWFkcyB8fCBbXTtcclxuICAgICAgICBjb25zdCBoZWFkcyA9IGxpdmVIZWFkcy5sZW5ndGggPiAwID8gbGl2ZUhlYWRzIDogc3RhdGljSGVhZHM7XHJcblxyXG4gICAgICAgIC8vIEdldCBtZW1iZXJzIGZyb20gc2hlZXRcclxuICAgICAgICBjb25zdCBtZW1iZXJzID0gc2hlZXREYXRhPy5tZW1iZXJzIHx8IFtdO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5pc0xvYWRpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZy1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmctc3Bpbm5lclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxvYWRpbmctdGV4dFwiPkxvYWRpbmcuLi48L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICB7aGVhZHMubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0nY29tbWl0dGVlLXN1YnRpdGxlJz5Db21taXR0ZWUgSGVhZHM8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZHMgY29udGVudD17aGVhZHN9IG1pbkhlaWdodD1cIjExMHB4XCIgd2lkdGg9ezI0MH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICB7bWVtYmVycy5sZW5ndGggPiAwICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdjb21taXR0ZWUtc3VidGl0bGUnPkNvbW1pdHRlZSBNZW1iZXJzPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRzIGNvbnRlbnQ9e21lbWJlcnN9IG1pbkhlaWdodD1cIjExMHB4XCIgd2lkdGg9ezI0MH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9