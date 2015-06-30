"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StrategyGenerator = (function () {
    function StrategyGenerator() {
        _classCallCheck(this, StrategyGenerator);
    }

    _createClass(StrategyGenerator, [{
        key: "createStrategy",
        value: function createStrategy(match, search, replace, index, template, cache, context, idProperty) {}
    }, {
        key: "getDefaultReplace",
        value: function getDefaultReplace(token) {}
    }, {
        key: "getDefaultMatch",
        value: function getDefaultMatch(token) {}
    }, {
        key: "getDefaultTemplate",
        value: function getDefaultTemplate() {}
    }]);

    return StrategyGenerator;
})();

exports.StrategyGenerator = StrategyGenerator;