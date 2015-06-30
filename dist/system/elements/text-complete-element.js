System.register(["aurelia-framework", "../generator/strategy-generator", "jquery"], function (_export) {
  "use strict";

  var inject, customElement, useView, bindable, StrategyGenerator, jquery, TokenCompleteElement;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === "function") { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError("The decorator for method " + descriptor.key + " is of the invalid type " + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer.call(target); Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
      customElement = _aureliaFramework.customElement;
      useView = _aureliaFramework.useView;
      bindable = _aureliaFramework.bindable;
    }, function (_generatorStrategyGenerator) {
      StrategyGenerator = _generatorStrategyGenerator.StrategyGenerator;
    }, function (_jquery) {
      jquery = _jquery["default"];
    }],
    execute: function () {
      TokenCompleteElement = (function () {
        var _instanceInitializers = {};

        function TokenCompleteElement(strategyGenerator) {
          _classCallCheck(this, _TokenCompleteElement);

          _defineDecoratedPropertyDescriptor(this, "token", _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, "search", _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, "replace", _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, "template", _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, "nativeOptions", _instanceInitializers);

          this.strategyGenerator = strategyGenerator;
        }

        var _TokenCompleteElement = TokenCompleteElement;

        _createDecoratedClass(_TokenCompleteElement, [{
          key: "attached",
          value: function attached() {
            if (!this.template) {
              this.template = this.strategyGenerator.getDefaultTemplate();
            }

            if (!this.replace) {
              this.replace = this.strategyGenerator.getDefaultReplace(this.token);
            }

            var matchRegex = this.strategyGenerator.getDefaultMatch(this.token);
            var strategy = this.strategyGenerator.createStrategy(matchRegex, this.search, this.replace, 2, this.template);

            jquery(_textArea).textcomplete([strategy], this.nativeOptions);
          }
        }, {
          key: "token",
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: "search",
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: "replace",
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: "template",
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: "nativeOptions",
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }], null, _instanceInitializers);

        TokenCompleteElement = inject(StrategyGenerator)(TokenCompleteElement) || TokenCompleteElement;
        TokenCompleteElement = useView("./text-complete-element.html")(TokenCompleteElement) || TokenCompleteElement;
        TokenCompleteElement = customElement("text-complete")(TokenCompleteElement) || TokenCompleteElement;
        return TokenCompleteElement;
      })();

      _export("TokenCompleteElement", TokenCompleteElement);
    }
  };
});