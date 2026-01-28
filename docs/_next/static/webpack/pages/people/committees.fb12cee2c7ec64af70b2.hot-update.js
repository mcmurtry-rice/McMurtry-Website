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
    key: "transformData",
    value: function transformData(sheetsData) {
      var rows = sheetsData.table.rows;
      var getCellValue = function getCellValue(row, col) {
        var _row$c, _row$c$col;
        return (row === null || row === void 0 ? void 0 : (_row$c = row.c) === null || _row$c === void 0 ? void 0 : (_row$c$col = _row$c[col]) === null || _row$c$col === void 0 ? void 0 : _row$c$col.v) || null;
      };

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
      var committeeRow = rows[1];
      var committees = {};

      // Parse committee names from row 2, skipping "Email" columns
      for (var col = 0; col < ((committeeRow === null || committeeRow === void 0 ? void 0 : (_committeeRow$c = committeeRow.c) === null || _committeeRow$c === void 0 ? void 0 : _committeeRow$c.length) || 0); col++) {
        var _committeeRow$c;
        var name = getCellValue(committeeRow, col);
        if (name && name !== 'Email') {
          // Remove emoji from name for matching
          var cleanName = name.replace(/[^\w\s()]/g, '').trim();

          // Apply name mapping if exists
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
      // Names ending with * are heads
      for (var rowIdx = 2; rowIdx < rows.length; rowIdx++) {
        var row = rows[rowIdx];
        for (var _i3 = 0, _Object$entries2 = Object.entries(committees); _i3 < _Object$entries2.length; _i3++) {
          var _Object$entries2$_i = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_Object$entries2[_i3], 2),
            colStr = _Object$entries2$_i[0],
            committee = _Object$entries2$_i[1];
          var _col2 = parseInt(colStr);
          var memberName = getCellValue(row, _col2);
          if (memberName) {
            // Check if name ends with asterisk (head)
            if (memberName.trim().endsWith('*')) {
              var _cleanName2 = memberName.trim().replace(/\*$/, '').trim();
              committee.heads.push({
                name: _cleanName2
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
      for (var _i4 = 0, _Object$values2 = Object.values(committees); _i4 < _Object$values2.length; _i4++) {
        var _committee2 = _Object$values2[_i4];
        result[_committee2.name] = {
          heads: _committee2.heads,
          members: _committee2.members
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
            lineNumber: 200,
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
            lineNumber: 201,
            columnNumber: 21
          }
        }, __jsx("p", {
          className: "division-key",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 202,
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
            lineNumber: 211,
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
            lineNumber: 212,
            columnNumber: 21
          }
        }, __jsx("p", {
          className: "committee-key",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 213,
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
          lineNumber: 220,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "committee-hero",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221,
          columnNumber: 17
        }
      }, __jsx("h1", {
        className: "committee-main-title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222,
          columnNumber: 21
        }
      }, "Committees")), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224,
          columnNumber: 17
        }
      }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_8__["Flex"], {
        justifyContent: "center",
        flexWrap: "wrap",
        flexDirection: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226,
          columnNumber: 21
        }
      }, division_keys)), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230,
          columnNumber: 17
        }
      }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_8__["Flex"], {
        justifyContent: "center",
        flexWrap: "wrap",
        flexDirection: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232,
          columnNumber: 21
        }
      }, committee_keys)), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236,
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
          lineNumber: 237,
          columnNumber: 21
        }
      }, __jsx("h1", {
        className: "division-title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238,
          columnNumber: 25
        }
      }, _committees_json__WEBPACK_IMPORTED_MODULE_10__["committee_divisions"][this.state.division].committees[this.state.committee].name), __jsx(rebass__WEBPACK_IMPORTED_MODULE_8__["Box"], {
        width: [1, .75],
        mx: "auto",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239,
          columnNumber: 25
        }
      }, __jsx(rebass__WEBPACK_IMPORTED_MODULE_8__["Image"], {
        key: _committees_json__WEBPACK_IMPORTED_MODULE_10__["committee_divisions"][this.state.division].committees[this.state.committee].image,
        src: _committees_json__WEBPACK_IMPORTED_MODULE_10__["committee_divisions"][this.state.division].committees[this.state.committee].image,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240,
          columnNumber: 29
        }
      })), __jsx("div", {
        dangerouslySetInnerHTML: {
          __html: _committees_json__WEBPACK_IMPORTED_MODULE_10__["committee_divisions"][this.state.division].committees[this.state.committee].description
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243,
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
            lineNumber: 265,
            columnNumber: 17
          }
        }, __jsx("div", {
          className: "loading-spinner",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 266,
            columnNumber: 21
          }
        }), __jsx("p", {
          className: "loading-text",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 267,
            columnNumber: 21
          }
        }, "Loading..."));
      }
      return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, heads.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx("h2", {
        className: "committee-subtitle",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276,
          columnNumber: 25
        }
      }, "Committee Heads"), __jsx(_general_contactcards__WEBPACK_IMPORTED_MODULE_9__["default"], {
        content: heads,
        minHeight: "110px",
        width: 240,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277,
          columnNumber: 25
        }
      })), members.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx("h2", {
        className: "committee-subtitle",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282,
          columnNumber: 25
        }
      }, "Committee Members"), __jsx(_general_contactcards__WEBPACK_IMPORTED_MODULE_9__["default"], {
        content: members,
        minHeight: "110px",
        width: 240,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wZW9wbGUvY29tbWl0dGVlcy9jb21taXR0ZWVzLmpzIl0sIm5hbWVzIjpbIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJlIiwidCIsInIiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJuIiwiaGFzT3duUHJvcGVydHkiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImkiLCJTeW1ib2wiLCJhIiwiaXRlcmF0b3IiLCJjIiwiYXN5bmNJdGVyYXRvciIsInUiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIndyYXAiLCJHZW5lcmF0b3IiLCJjcmVhdGUiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwidHlwZSIsImFyZyIsImNhbGwiLCJoIiwibCIsImYiLCJzIiwieSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJwIiwiZCIsImdldFByb3RvdHlwZU9mIiwidiIsInZhbHVlcyIsImciLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJpbnZva2UiLCJyZXNvbHZlIiwiX19hd2FpdCIsInRoZW4iLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsIkVycm9yIiwiZG9uZSIsIm1ldGhvZCIsImRlbGVnYXRlIiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiVHlwZUVycm9yIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpc05hTiIsImxlbmd0aCIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwia2V5cyIsInJldmVyc2UiLCJwb3AiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicnZhbCIsImhhbmRsZSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwiZGVsZWdhdGVZaWVsZCIsIl9jYWxsU3VwZXIiLCJfZ2V0UHJvdG90eXBlT2YiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJSZWZsZWN0IiwiY29uc3RydWN0IiwiYXBwbHkiLCJCb29sZWFuIiwidmFsdWVPZiIsIkNvbW1pdHRlZXMiLCJfUmVhY3QkQ29tcG9uZW50IiwicHJvcHMiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjayIsInN0YXRlIiwiZGl2aXNpb24iLCJjb21taXR0ZWUiLCJtZW1iZXJzRGF0YSIsImlzTG9hZGluZyIsImNoYW5nZURpdmlzaW9uIiwiYmluZCIsImNoYW5nZUNvbW1pdHRlZSIsIl9pbmhlcml0cyIsIl9jcmVhdGVDbGFzcyIsImtleSIsIl9jb21wb25lbnREaWRNb3VudCIsIl9hc3luY1RvR2VuZXJhdG9yIiwiX2NhbGxlZSIsIm1lbWJlcnMiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwiZmV0Y2hNZW1iZXJzRGF0YSIsInNldFN0YXRlIiwidDAiLCJjb25zb2xlIiwid2FybiIsImNvbXBvbmVudERpZE1vdW50IiwiYXJndW1lbnRzIiwiX2ZldGNoTWVtYmVyc0RhdGEiLCJfY2FsbGVlMiIsInB1Ymxpc2hlZElkIiwiZ2lkIiwiY2FjaGVCdXN0ZXIiLCJ1cmwiLCJyZXNwb25zZSIsInRleHQiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJEYXRlIiwibm93IiwiY29uY2F0IiwiZmV0Y2giLCJ0cmFuc2Zvcm1DU1ZEYXRhIiwiY3N2VGV4dCIsImxpbmVzIiwic3BsaXQiLCJtYXAiLCJsaW5lIiwicmVzdWx0IiwiY3VycmVudCIsImluUXVvdGVzIiwiY2hhciIsInRyaW0iLCJjb21taXR0ZWVOYW1lTWFwcGluZyIsImNvbW1pdHRlZVJvdyIsImNvbW1pdHRlZXMiLCJjb2wiLCJjbGVhbk5hbWUiLCJyZXBsYWNlIiwiaGVhZHMiLCJyb3dJZHgiLCJyb3ciLCJfaSIsIl9PYmplY3QkZW50cmllcyIsImVudHJpZXMiLCJfT2JqZWN0JGVudHJpZXMkX2kiLCJfc2xpY2VkVG9BcnJheSIsImNvbFN0ciIsInBhcnNlSW50IiwibWVtYmVyTmFtZSIsImVuZHNXaXRoIiwiX2kyIiwiX09iamVjdCR2YWx1ZXMiLCJ0cmFuc2Zvcm1EYXRhIiwic2hlZXRzRGF0YSIsInJvd3MiLCJ0YWJsZSIsImdldENlbGxWYWx1ZSIsIl9yb3ckYyIsIl9yb3ckYyRjb2wiLCJfY29tbWl0dGVlUm93JGMiLCJfaTMiLCJfT2JqZWN0JGVudHJpZXMyIiwiX09iamVjdCRlbnRyaWVzMiRfaSIsIl9pNCIsIl9PYmplY3QkdmFsdWVzMiIsImluZGV4IiwicmVuZGVyIiwiX3RoaXMyIiwiZGl2aXNpb25fa2V5cyIsIl9sb29wIiwiX19qc3giLCJCb3giLCJjb21taXR0ZWVfZGl2aXNpb25zIiwiX19zZWxmIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJvbkNsaWNrIiwiY2xhc3NOYW1lIiwiY3VycmVudF9kaXZpc2lvbiIsImNvbW1pdHRlZV9rZXlzIiwiX2xvb3AyIiwiaiIsIkZsZXgiLCJqdXN0aWZ5Q29udGVudCIsImZsZXhXcmFwIiwiZmxleERpcmVjdGlvbiIsIndpZHRoIiwibWwiLCJtciIsIm14IiwiSW1hZ2UiLCJpbWFnZSIsInNyYyIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiZGVzY3JpcHRpb24iLCJyZW5kZXJIZWFkc0FuZE1lbWJlcnMiLCJjdXJyZW50Q29tbWl0dGVlIiwic2hlZXREYXRhIiwibGl2ZUhlYWRzIiwic3RhdGljSGVhZHMiLCJSZWFjdCIsIkZyYWdtZW50IiwiQ2FyZHMiLCJjb250ZW50IiwibWluSGVpZ2h0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQ0FDQSxxSkFBQUEsbUJBQUEsWUFBQUEsb0JBQUEsV0FBQUMsQ0FBQSxTQUFBQyxDQUFBLEVBQUFELENBQUEsT0FBQUUsQ0FBQSxHQUFBQyxNQUFBLENBQUFDLFNBQUEsRUFBQUMsQ0FBQSxHQUFBSCxDQUFBLENBQUFJLGNBQUEsRUFBQUMsQ0FBQSxHQUFBSixNQUFBLENBQUFLLGNBQUEsY0FBQVAsQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsSUFBQUQsQ0FBQSxDQUFBRCxDQUFBLElBQUFFLENBQUEsQ0FBQU8sS0FBQSxLQUFBQyxDQUFBLHdCQUFBQyxNQUFBLEdBQUFBLE1BQUEsT0FBQUMsQ0FBQSxHQUFBRixDQUFBLENBQUFHLFFBQUEsa0JBQUFDLENBQUEsR0FBQUosQ0FBQSxDQUFBSyxhQUFBLHVCQUFBQyxDQUFBLEdBQUFOLENBQUEsQ0FBQU8sV0FBQSw4QkFBQUMsT0FBQWpCLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLFdBQUFDLE1BQUEsQ0FBQUssY0FBQSxDQUFBUCxDQUFBLEVBQUFELENBQUEsSUFBQVMsS0FBQSxFQUFBUCxDQUFBLEVBQUFpQixVQUFBLE1BQUFDLFlBQUEsTUFBQUMsUUFBQSxTQUFBcEIsQ0FBQSxDQUFBRCxDQUFBLFdBQUFrQixNQUFBLG1CQUFBakIsQ0FBQSxJQUFBaUIsTUFBQSxZQUFBQSxPQUFBakIsQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsV0FBQUQsQ0FBQSxDQUFBRCxDQUFBLElBQUFFLENBQUEsZ0JBQUFvQixLQUFBckIsQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsRUFBQUcsQ0FBQSxRQUFBSyxDQUFBLEdBQUFWLENBQUEsSUFB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QUFBLENBQUFDLFFBQUEsUUFDSW5DLEtBQUE7UUFBSVUsU0FBUyxFQUFDLG9CQUFvQjtRQUFBUCxNQUFBO1FBQUFDLFFBQUE7VUFBQUMsUUFBQSxFQUFBQyxZQUFBO1VBQUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBO01BQUEsc0JBQXNCLENBQUMsRUFDekRSLEtBQUEsQ0FBQ29DLDZEQUFLO1FBQUNDLE9BQU8sRUFBRTlHLE9BQVE7UUFBQytHLFNBQVMsRUFBQyxPQUFPO1FBQUNuQixLQUFLLEVBQUUsR0FBSTtRQUFBaEIsTUFBQTtRQUFBQyxRQUFBO1VBQUFDLFFBQUEsRUFBQUMsWUFBQTtVQUFBQyxVQUFBO1VBQUFDLFlBQUE7UUFBQTtNQUFBLENBQUUsQ0FDMUQsQ0FFUixDQUFDO0lBRVg7RUFBQztBQUFBLEVBMVJtQzBCLDRDQUFLLENBQUNLLFNBQVM7QUFBeEIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGVvcGxlL2NvbW1pdHRlZXMuZmIxMmNlZTJjN2VjNjRhZjcwYjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJveCwgRmxleCwgSW1hZ2UgfSBmcm9tICdyZWJhc3MnO1xyXG5pbXBvcnQgQ2FyZHMgZnJvbSAnLi4vLi4vZ2VuZXJhbC9jb250YWN0Y2FyZHMnO1xyXG5pbXBvcnQgeyBjb21taXR0ZWVfZGl2aXNpb25zIH0gZnJvbSAnLi9jb21taXR0ZWVzLmpzb24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tbWl0dGVlcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBkaXZpc2lvbjogMCxcclxuICAgICAgICAgICAgY29tbWl0dGVlOiAwLFxyXG4gICAgICAgICAgICBtZW1iZXJzRGF0YToge30sXHJcbiAgICAgICAgICAgIGlzTG9hZGluZzogdHJ1ZVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VEaXZpc2lvbiA9IHRoaXMuY2hhbmdlRGl2aXNpb24uYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmNoYW5nZUNvbW1pdHRlZSA9IHRoaXMuY2hhbmdlQ29tbWl0dGVlLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgbWVtYmVycyA9IGF3YWl0IHRoaXMuZmV0Y2hNZW1iZXJzRGF0YSgpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbWVtYmVyc0RhdGE6IG1lbWJlcnMsIGlzTG9hZGluZzogZmFsc2UgfSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCdGYWlsZWQgdG8gZmV0Y2ggbWVtYmVyczonLCBlcnJvcik7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0xvYWRpbmc6IGZhbHNlIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBmZXRjaE1lbWJlcnNEYXRhKCkge1xyXG4gICAgICAgIC8vIFVzZSB0aGUgcHVibGlzaGVkIHNwcmVhZHNoZWV0IFVSTCBmb3IgZmFzdGVyIHVwZGF0ZXNcclxuICAgICAgICBjb25zdCBwdWJsaXNoZWRJZCA9ICcyUEFDWC0xdlFWdWNUUXljYmtnWkxWMzd3cGJ4T1ZYVFR2MHJVUGROamVYNDJqSXZlV3hCVU9mWGI2Uk5YQWVmeWx3M0lFU2E4aGNZT1Z1Y1BQTEFKeic7XHJcbiAgICAgICAgY29uc3QgZ2lkID0gJzE4MzIzMzk4MDUnOyAvLyBDb21taXR0ZWVzIHNoZWV0XHJcbiAgICAgICAgY29uc3QgY2FjaGVCdXN0ZXIgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgIGNvbnN0IHVybCA9IGBodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9zcHJlYWRzaGVldHMvZC9lLyR7cHVibGlzaGVkSWR9L3B1Yj9naWQ9JHtnaWR9JnNpbmdsZT10cnVlJm91dHB1dD1jc3YmXz0ke2NhY2hlQnVzdGVyfWA7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcclxuICAgICAgICBjb25zdCB0ZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy50cmFuc2Zvcm1DU1ZEYXRhKHRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHRyYW5zZm9ybUNTVkRhdGEoY3N2VGV4dCkge1xyXG4gICAgICAgIC8vIFBhcnNlIENTVlxyXG4gICAgICAgIGNvbnN0IGxpbmVzID0gY3N2VGV4dC5zcGxpdCgnXFxuJykubWFwKGxpbmUgPT4ge1xyXG4gICAgICAgICAgICAvLyBTaW1wbGUgQ1NWIHBhcnNpbmcgKGhhbmRsZXMgYmFzaWMgY2FzZXMpXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgICAgICBsZXQgY3VycmVudCA9ICcnO1xyXG4gICAgICAgICAgICBsZXQgaW5RdW90ZXMgPSBmYWxzZTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjaGFyID0gbGluZVtpXTtcclxuICAgICAgICAgICAgICAgIGlmIChjaGFyID09PSAnXCInKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5RdW90ZXMgPSAhaW5RdW90ZXM7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNoYXIgPT09ICcsJyAmJiAhaW5RdW90ZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChjdXJyZW50LnRyaW0oKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50ICs9IGNoYXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVzdWx0LnB1c2goY3VycmVudC50cmltKCkpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBNYXAgc2hlZXQgY29tbWl0dGVlIG5hbWVzIHRvIEpTT04gY29tbWl0dGVlIG5hbWVzXHJcbiAgICAgICAgY29uc3QgY29tbWl0dGVlTmFtZU1hcHBpbmcgPSB7XHJcbiAgICAgICAgICAgICdBbHVtbmkgYW5kIEZhbWlseSc6ICdBbHVtbmknLFxyXG4gICAgICAgICAgICAnTXVydGNoJzogJ011cnRjaGFuZGlzZScsXHJcbiAgICAgICAgICAgICdNSVMnOiAnTWNNdXJ0cnkgSW5ub3ZhdGlvbiBTcGFjZSAoTUlTKScsXHJcbiAgICAgICAgICAgICdXZWJzaXRlIGFuZCBBcHAnOiAnV2Vic2l0ZScsXHJcbiAgICAgICAgICAgICdFeHRlcm5hbHMgU29jaWFscyc6ICdFeHRlcm5hbCBTb2NpYWxzJyxcclxuICAgICAgICAgICAgJ0ludGVybmFscyBTb2NpYWxzJzogJ0ludGVybmFsIFNvY2lhbHMnXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gUm93IDIgKGluZGV4IDEpIGhhcyBjb21taXR0ZWUgbmFtZXNcclxuICAgICAgICBjb25zdCBjb21taXR0ZWVSb3cgPSBsaW5lc1sxXSB8fCBbXTtcclxuICAgICAgICBjb25zdCBjb21taXR0ZWVzID0ge307XHJcblxyXG4gICAgICAgIC8vIFBhcnNlIGNvbW1pdHRlZSBuYW1lcywgc2tpcHBpbmcgXCJFbWFpbFwiIGNvbHVtbnNcclxuICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCBjb21taXR0ZWVSb3cubGVuZ3RoOyBjb2wrKykge1xyXG4gICAgICAgICAgICBjb25zdCBuYW1lID0gY29tbWl0dGVlUm93W2NvbF07XHJcbiAgICAgICAgICAgIGlmIChuYW1lICYmIG5hbWUgIT09ICdFbWFpbCcpIHtcclxuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBlbW9qaSBmcm9tIG5hbWUgZm9yIG1hdGNoaW5nXHJcbiAgICAgICAgICAgICAgICBsZXQgY2xlYW5OYW1lID0gbmFtZS5yZXBsYWNlKC9bXlxcd1xccygpXS9nLCAnJykudHJpbSgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbW1pdHRlZU5hbWVNYXBwaW5nW2NsZWFuTmFtZV0pIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhbk5hbWUgPSBjb21taXR0ZWVOYW1lTWFwcGluZ1tjbGVhbk5hbWVdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29tbWl0dGVlc1tjb2xdID0geyBuYW1lOiBjbGVhbk5hbWUsIGhlYWRzOiBbXSwgbWVtYmVyczogW10gfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gUGFyc2UgbWVtYmVycyBmcm9tIHJvdyAzKyAoaW5kZXggMispXHJcbiAgICAgICAgZm9yIChsZXQgcm93SWR4ID0gMjsgcm93SWR4IDwgbGluZXMubGVuZ3RoOyByb3dJZHgrKykge1xyXG4gICAgICAgICAgICBjb25zdCByb3cgPSBsaW5lc1tyb3dJZHhdO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IFtjb2xTdHIsIGNvbW1pdHRlZV0gb2YgT2JqZWN0LmVudHJpZXMoY29tbWl0dGVlcykpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbCA9IHBhcnNlSW50KGNvbFN0cik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtZW1iZXJOYW1lID0gcm93W2NvbF07XHJcbiAgICAgICAgICAgICAgICBpZiAobWVtYmVyTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIG5hbWUgZW5kcyB3aXRoIGFzdGVyaXNrIChoZWFkKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtZW1iZXJOYW1lLnRyaW0oKS5lbmRzV2l0aCgnKicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNsZWFuTmFtZSA9IG1lbWJlck5hbWUudHJpbSgpLnJlcGxhY2UoL1xcKiQvLCAnJykudHJpbSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21taXR0ZWUuaGVhZHMucHVzaCh7IG5hbWU6IGNsZWFuTmFtZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21taXR0ZWUubWVtYmVycy5wdXNoKHsgbmFtZTogbWVtYmVyTmFtZS50cmltKCkgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBSZXR1cm4gYXMgeyBjb21taXR0ZWVOYW1lOiB7IGhlYWRzOiBbLi4uXSwgbWVtYmVyczogWy4uLl0gfSB9XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0ge307XHJcbiAgICAgICAgZm9yIChjb25zdCBjb21taXR0ZWUgb2YgT2JqZWN0LnZhbHVlcyhjb21taXR0ZWVzKSkge1xyXG4gICAgICAgICAgICByZXN1bHRbY29tbWl0dGVlLm5hbWVdID0ge1xyXG4gICAgICAgICAgICAgICAgaGVhZHM6IGNvbW1pdHRlZS5oZWFkcyxcclxuICAgICAgICAgICAgICAgIG1lbWJlcnM6IGNvbW1pdHRlZS5tZW1iZXJzXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgdHJhbnNmb3JtRGF0YShzaGVldHNEYXRhKSB7XHJcbiAgICAgICAgY29uc3Qgcm93cyA9IHNoZWV0c0RhdGEudGFibGUucm93cztcclxuICAgICAgICBjb25zdCBnZXRDZWxsVmFsdWUgPSAocm93LCBjb2wpID0+IHJvdz8uYz8uW2NvbF0/LnYgfHwgbnVsbDtcclxuXHJcbiAgICAgICAgLy8gTWFwIHNoZWV0IGNvbW1pdHRlZSBuYW1lcyB0byBKU09OIGNvbW1pdHRlZSBuYW1lc1xyXG4gICAgICAgIGNvbnN0IGNvbW1pdHRlZU5hbWVNYXBwaW5nID0ge1xyXG4gICAgICAgICAgICAnQWx1bW5pIGFuZCBGYW1pbHknOiAnQWx1bW5pJyxcclxuICAgICAgICAgICAgJ011cnRjaCc6ICdNdXJ0Y2hhbmRpc2UnLFxyXG4gICAgICAgICAgICAnTUlTJzogJ01jTXVydHJ5IElubm92YXRpb24gU3BhY2UgKE1JUyknLFxyXG4gICAgICAgICAgICAnV2Vic2l0ZSBhbmQgQXBwJzogJ1dlYnNpdGUnLFxyXG4gICAgICAgICAgICAnRXh0ZXJuYWxzIFNvY2lhbHMnOiAnRXh0ZXJuYWwgU29jaWFscycsXHJcbiAgICAgICAgICAgICdJbnRlcm5hbHMgU29jaWFscyc6ICdJbnRlcm5hbCBTb2NpYWxzJ1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIFJvdyAyIChpbmRleCAxKSBoYXMgY29tbWl0dGVlIG5hbWVzXHJcbiAgICAgICAgY29uc3QgY29tbWl0dGVlUm93ID0gcm93c1sxXTtcclxuICAgICAgICBjb25zdCBjb21taXR0ZWVzID0ge307XHJcblxyXG4gICAgICAgIC8vIFBhcnNlIGNvbW1pdHRlZSBuYW1lcyBmcm9tIHJvdyAyLCBza2lwcGluZyBcIkVtYWlsXCIgY29sdW1uc1xyXG4gICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IChjb21taXR0ZWVSb3c/LmM/Lmxlbmd0aCB8fCAwKTsgY29sKyspIHtcclxuICAgICAgICAgICAgY29uc3QgbmFtZSA9IGdldENlbGxWYWx1ZShjb21taXR0ZWVSb3csIGNvbCk7XHJcbiAgICAgICAgICAgIGlmIChuYW1lICYmIG5hbWUgIT09ICdFbWFpbCcpIHtcclxuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBlbW9qaSBmcm9tIG5hbWUgZm9yIG1hdGNoaW5nXHJcbiAgICAgICAgICAgICAgICBsZXQgY2xlYW5OYW1lID0gbmFtZS5yZXBsYWNlKC9bXlxcd1xccygpXS9nLCAnJykudHJpbSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIEFwcGx5IG5hbWUgbWFwcGluZyBpZiBleGlzdHNcclxuICAgICAgICAgICAgICAgIGlmIChjb21taXR0ZWVOYW1lTWFwcGluZ1tjbGVhbk5hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYW5OYW1lID0gY29tbWl0dGVlTmFtZU1hcHBpbmdbY2xlYW5OYW1lXTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb21taXR0ZWVzW2NvbF0gPSB7IG5hbWU6IGNsZWFuTmFtZSwgaGVhZHM6IFtdLCBtZW1iZXJzOiBbXSB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBQYXJzZSBtZW1iZXJzIGZyb20gcm93IDMrIChpbmRleCAyKylcclxuICAgICAgICAvLyBOYW1lcyBlbmRpbmcgd2l0aCAqIGFyZSBoZWFkc1xyXG4gICAgICAgIGZvciAobGV0IHJvd0lkeCA9IDI7IHJvd0lkeCA8IHJvd3MubGVuZ3RoOyByb3dJZHgrKykge1xyXG4gICAgICAgICAgICBjb25zdCByb3cgPSByb3dzW3Jvd0lkeF07XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgW2NvbFN0ciwgY29tbWl0dGVlXSBvZiBPYmplY3QuZW50cmllcyhjb21taXR0ZWVzKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29sID0gcGFyc2VJbnQoY29sU3RyKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1lbWJlck5hbWUgPSBnZXRDZWxsVmFsdWUocm93LCBjb2wpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1lbWJlck5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiBuYW1lIGVuZHMgd2l0aCBhc3RlcmlzayAoaGVhZClcclxuICAgICAgICAgICAgICAgICAgICBpZiAobWVtYmVyTmFtZS50cmltKCkuZW5kc1dpdGgoJyonKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjbGVhbk5hbWUgPSBtZW1iZXJOYW1lLnRyaW0oKS5yZXBsYWNlKC9cXCokLywgJycpLnRyaW0oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tbWl0dGVlLmhlYWRzLnB1c2goeyBuYW1lOiBjbGVhbk5hbWUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tbWl0dGVlLm1lbWJlcnMucHVzaCh7IG5hbWU6IG1lbWJlck5hbWUudHJpbSgpIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gUmV0dXJuIGFzIHsgY29tbWl0dGVlTmFtZTogeyBoZWFkczogWy4uLl0sIG1lbWJlcnM6IFsuLi5dIH0gfVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xyXG4gICAgICAgIGZvciAoY29uc3QgY29tbWl0dGVlIG9mIE9iamVjdC52YWx1ZXMoY29tbWl0dGVlcykpIHtcclxuICAgICAgICAgICAgcmVzdWx0W2NvbW1pdHRlZS5uYW1lXSA9IHtcclxuICAgICAgICAgICAgICAgIGhlYWRzOiBjb21taXR0ZWUuaGVhZHMsXHJcbiAgICAgICAgICAgICAgICBtZW1iZXJzOiBjb21taXR0ZWUubWVtYmVyc1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZURpdmlzaW9uKGluZGV4KSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGRpdmlzaW9uOiBpbmRleCxcclxuICAgICAgICAgICAgY29tbWl0dGVlOiAwXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VDb21taXR0ZWUoaW5kZXgpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgY29tbWl0dGVlOiBpbmRleCB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuXHJcbiAgICAgICAgbGV0IGRpdmlzaW9uX2tleXMgPSBbXVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29tbWl0dGVlX2RpdmlzaW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBkaXZpc2lvbl9rZXlzLnB1c2goXHJcbiAgICAgICAgICAgICAgICA8Qm94IGtleT17Y29tbWl0dGVlX2RpdmlzaW9uc1tpXS5kaXZpc2lvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiB0aGlzLmNoYW5nZURpdmlzaW9uKGkpfSBjbGFzc05hbWU9e3RoaXMuc3RhdGUuZGl2aXNpb24gPT09IGkgPyBcImFjdGl2ZS1kaXZpc2lvblwiIDogXCJpbmFjdGl2ZS1kaXZpc2lvblwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdkaXZpc2lvbi1rZXknPntgJHtjb21taXR0ZWVfZGl2aXNpb25zW2ldLmRpdmlzaW9ufWB9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgY3VycmVudF9kaXZpc2lvbiA9IGNvbW1pdHRlZV9kaXZpc2lvbnNbdGhpcy5zdGF0ZS5kaXZpc2lvbl1cclxuICAgICAgICBsZXQgY29tbWl0dGVlX2tleXMgPSBbXVxyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY3VycmVudF9kaXZpc2lvbi5jb21taXR0ZWVzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIGNvbW1pdHRlZV9rZXlzLnB1c2goXHJcbiAgICAgICAgICAgICAgICA8Qm94IGtleT17Y3VycmVudF9kaXZpc2lvbi5jb21taXR0ZWVzW2pdLm5hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gdGhpcy5jaGFuZ2VDb21taXR0ZWUoail9IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5jb21taXR0ZWUgPT09IGogPyBcImFjdGl2ZS1jb21taXR0ZWVcIiA6IFwiaW5hY3RpdmUtY29tbWl0dGVlXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2NvbW1pdHRlZS1rZXknPntjdXJyZW50X2RpdmlzaW9uLmNvbW1pdHRlZXNbal0ubmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21taXR0ZWUtcGFnZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbW1pdHRlZS1oZXJvJz5cclxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdjb21taXR0ZWUtbWFpbi10aXRsZSc+Q29tbWl0dGVlczwvaDE+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIEZpeGVkIGZsZXhXcmFwIHByb3AgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPEZsZXgganVzdGlmeUNvbnRlbnQ9J2NlbnRlcicgZmxleFdyYXA9J3dyYXAnIGZsZXhEaXJlY3Rpb249J3Jvdyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtkaXZpc2lvbl9rZXlzfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICB7LyogRml4ZWQgZmxleFdyYXAgcHJvcCAqL31cclxuICAgICAgICAgICAgICAgICAgICA8RmxleCBqdXN0aWZ5Q29udGVudD0nY2VudGVyJyBmbGV4V3JhcD0nd3JhcCcgZmxleERpcmVjdGlvbj0ncm93Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NvbW1pdHRlZV9rZXlzfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Qm94IHdpZHRoPXtbMC45LCAwLjcsIDAuNiwgMC41XX0gbWw9J2F1dG8nIG1yPSdhdXRvJyBjbGFzc05hbWU9J2NvbW1pdHRlZS1kZXNjcmlwdGlvbic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J2RpdmlzaW9uLXRpdGxlJz57Y29tbWl0dGVlX2RpdmlzaW9uc1t0aGlzLnN0YXRlLmRpdmlzaW9uXS5jb21taXR0ZWVzW3RoaXMuc3RhdGUuY29tbWl0dGVlXS5uYW1lfTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggd2lkdGg9e1sxLCAuNzVdfSBteD0nYXV0bycgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIGtleT17Y29tbWl0dGVlX2RpdmlzaW9uc1t0aGlzLnN0YXRlLmRpdmlzaW9uXS5jb21taXR0ZWVzW3RoaXMuc3RhdGUuY29tbWl0dGVlXS5pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2NvbW1pdHRlZV9kaXZpc2lvbnNbdGhpcy5zdGF0ZS5kaXZpc2lvbl0uY29tbWl0dGVlc1t0aGlzLnN0YXRlLmNvbW1pdHRlZV0uaW1hZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogY29tbWl0dGVlX2RpdmlzaW9uc1t0aGlzLnN0YXRlLmRpdmlzaW9uXS5jb21taXR0ZWVzW3RoaXMuc3RhdGUuY29tbWl0dGVlXS5kZXNjcmlwdGlvbiB9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJIZWFkc0FuZE1lbWJlcnMoKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVySGVhZHNBbmRNZW1iZXJzKCkge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRDb21taXR0ZWUgPSBjb21taXR0ZWVfZGl2aXNpb25zW3RoaXMuc3RhdGUuZGl2aXNpb25dLmNvbW1pdHRlZXNbdGhpcy5zdGF0ZS5jb21taXR0ZWVdO1xyXG4gICAgICAgIGNvbnN0IHNoZWV0RGF0YSA9IHRoaXMuc3RhdGUubWVtYmVyc0RhdGFbY3VycmVudENvbW1pdHRlZS5uYW1lXTtcclxuXHJcbiAgICAgICAgLy8gR2V0IGhlYWRzOiBwcmVmZXIgbGl2ZSBkYXRhIGZyb20gc2hlZXQsIGZhbGwgYmFjayB0byBzdGF0aWMgSlNPTlxyXG4gICAgICAgIGNvbnN0IGxpdmVIZWFkcyA9IHNoZWV0RGF0YT8uaGVhZHMgfHwgW107XHJcbiAgICAgICAgY29uc3Qgc3RhdGljSGVhZHMgPSBjdXJyZW50Q29tbWl0dGVlLmhlYWRzIHx8IFtdO1xyXG4gICAgICAgIGNvbnN0IGhlYWRzID0gbGl2ZUhlYWRzLmxlbmd0aCA+IDAgPyBsaXZlSGVhZHMgOiBzdGF0aWNIZWFkcztcclxuXHJcbiAgICAgICAgLy8gR2V0IG1lbWJlcnMgZnJvbSBzaGVldFxyXG4gICAgICAgIGNvbnN0IG1lbWJlcnMgPSBzaGVldERhdGE/Lm1lbWJlcnMgfHwgW107XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmlzTG9hZGluZykge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZy1zcGlubmVyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibG9hZGluZy10ZXh0XCI+TG9hZGluZy4uLjwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIHtoZWFkcy5sZW5ndGggPiAwICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdjb21taXR0ZWUtc3VidGl0bGUnPkNvbW1pdHRlZSBIZWFkczwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkcyBjb250ZW50PXtoZWFkc30gbWluSGVpZ2h0PVwiMTEwcHhcIiB3aWR0aD17MjQwfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIHttZW1iZXJzLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J2NvbW1pdHRlZS1zdWJ0aXRsZSc+Q29tbWl0dGVlIE1lbWJlcnM8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZHMgY29udGVudD17bWVtYmVyc30gbWluSGVpZ2h0PVwiMTEwcHhcIiB3aWR0aD17MjQwfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=