"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _procedures = _interopRequireDefault(require("./procedures"));

var _default = function _default(dp) {
  return {
    fetch: function () {
      var _fetch = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _procedures["default"].fetch({
                  query: {},
                  db: dp.topicsDB,
                  orderBy: 'timestamp',
                  filter: ''
                });

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function fetch() {
        return _fetch.apply(this, arguments);
      }

      return fetch;
    }()
  };
};

exports["default"] = _default;