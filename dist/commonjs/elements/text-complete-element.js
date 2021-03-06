"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === "function") { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError("The decorator for method " + descriptor.key + " is of the invalid type " + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

var _aureliaFramework = require('aurelia-framework');

var _jquery = require("jquery");

var _jquery2 = _interopRequireDefault(_jquery);

require("jquery-textcomplete");

var TextCompleteElement = (function () {
  var _instanceInitializers = {};

  function TextCompleteElement() {
    _classCallCheck(this, _TextCompleteElement);

    _defineDecoratedPropertyDescriptor(this, "strategies", _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, "options", _instanceInitializers);
  }

  _createDecoratedClass(TextCompleteElement, [{
    key: "attached",
    value: function attached() {
      (0, _jquery2["default"])(this._textArea).textcomplete(this.strategies, this.options);
    }
  }, {
    key: "strategies",
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: "options",
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers);

  var _TextCompleteElement = TextCompleteElement;
  TextCompleteElement = (0, _aureliaFramework.useView)("./text-complete-element.html")(TextCompleteElement) || TextCompleteElement;
  TextCompleteElement = (0, _aureliaFramework.customElement)('text-complete')(TextCompleteElement) || TextCompleteElement;
  return TextCompleteElement;
})();

exports.TextCompleteElement = TextCompleteElement;