define(["exports", "aurelia-framework", "../generator/strategy-generator", "jquery", "jquery-textcomplete"], function (exports, _aureliaFramework, _generatorStrategyGenerator, _jquery, _jqueryTextcomplete) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === "function") { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError("The decorator for method " + descriptor.key + " is of the invalid type " + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  var _jquery2 = _interopRequireDefault(_jquery);

  var TokenCompleteAttribute = (function () {
    var _instanceInitializers = {};
    var _instanceInitializers = {};

    _createDecoratedClass(TokenCompleteAttribute, [{
      key: "token",
      decorators: [_aureliaFramework.bindable],
      initializer: null,
      enumerable: true
    }, {
      key: "search",
      decorators: [_aureliaFramework.bindable],
      initializer: null,
      enumerable: true
    }, {
      key: "replace",
      decorators: [_aureliaFramework.bindable],
      initializer: null,
      enumerable: true
    }, {
      key: "template",
      decorators: [_aureliaFramework.bindable],
      initializer: null,
      enumerable: true
    }, {
      key: "options",
      decorators: [_aureliaFramework.bindable],
      initializer: null,
      enumerable: true
    }], null, _instanceInitializers);

    function TokenCompleteAttribute(element, strategyGenerator) {
      _classCallCheck(this, _TokenCompleteAttribute);

      _defineDecoratedPropertyDescriptor(this, "token", _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, "search", _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, "replace", _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, "template", _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, "options", _instanceInitializers);

      this.element = element;
      this.strategyGenerator = strategyGenerator;
    }

    _createDecoratedClass(TokenCompleteAttribute, [{
      key: "attached",
      value: function attached() {
        if (!this.template) {
          console.log("no template");this.template = this.strategyGenerator.getDefaultTemplate();
        }

        if (!this.replace) {
          console.log("no replace");this.replace = this.strategyGenerator.getDefaultReplace(this.token);
        }

        var matchRegex = this.strategyGenerator.getDefaultMatch(this.token);
        var strategy = this.strategyGenerator.createStrategy(matchRegex, this.search, this.replace, 2, this.template);

        console.log("strat", strategy);
        (0, _jquery2["default"])(this.element).textcomplete([strategy], this.options);
      }
    }], null, _instanceInitializers);

    var _TokenCompleteAttribute = TokenCompleteAttribute;
    TokenCompleteAttribute = (0, _aureliaFramework.inject)(Element, _generatorStrategyGenerator.StrategyGenerator)(TokenCompleteAttribute) || TokenCompleteAttribute;
    TokenCompleteAttribute = (0, _aureliaFramework.customAttribute)('token-complete')(TokenCompleteAttribute) || TokenCompleteAttribute;
    return TokenCompleteAttribute;
  })();

  exports.TokenCompleteAttribute = TokenCompleteAttribute;
});