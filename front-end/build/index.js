"use strict";

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var video = document.querySelector(".video");
var PRO_URL = "http://192.168.1.8:5000";
var DEV_URL = "http://127.0.0.1:5000";
var videolist = document.querySelector(".list-item");
var videoitem = document.querySelector(".lid");

var FetchApi = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var reso, data;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch(PRO_URL + "/call");

          case 2:
            reso = _context.sent;
            _context.next = 5;
            return reso.json();

          case 5:
            data = _context.sent;
            return _context.abrupt("return", data);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function FetchApi() {
    return _ref.apply(this, arguments);
  };
}();
var renderItem = function renderItem(el) {
  var markup = "<li class=\"lid\">\n  <a href=\"#" + el.id + "\" class=\"linkto\">\n  <div class=\"item-box\">\n  \n    <span class=\"anime-title\">" + el.name + "</span>\n    \n  </div>\n</a>\n</li>";
  videoitem.insertAdjacentHTML("afterend", markup);
};
var UpdateDom = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var data;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return FetchApi();

          case 2:
            data = _context2.sent;


            data.forEach(function (el) {
              return renderItem(el);
            });

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));

  return function UpdateDom() {
    return _ref2.apply(this, arguments);
  };
}();
var getVideoById = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(id) {
    var data, link;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return FetchApi();

          case 2:
            data = _context3.sent;
            link = void 0;

            data.map(function (item) {
              if (item.id == id) {
                link = item.link;
              }
            });
            return _context3.abrupt("return", link);

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, undefined);
  }));

  return function getVideoById(_x) {
    return _ref3.apply(this, arguments);
  };
}();

var changeVideo = function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    var videoid, link;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            videoid = window.location.hash.replace("#", "");
            _context4.next = 3;
            return getVideoById(videoid);

          case 3:
            link = _context4.sent;

            console.log(link);
            video.src = "" + PRO_URL + link;

          case 6:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, undefined);
  }));

  return function changeVideo() {
    return _ref4.apply(this, arguments);
  };
}();
videolist.addEventListener("scroll", UpdateDom());
window.addEventListener("hashchange", changeVideo);