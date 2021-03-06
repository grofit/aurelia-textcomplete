System.register(["aurelia-framework", "jquery", "jquery-textcomplete"], function (_export) {
  "use strict";

  var inject, customAttribute, bindable, jquery, TextCompleteAttribute;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === "function") { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError("The decorator for method " + descriptor.key + " is of the invalid type " + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
      customAttribute = _aureliaFramework.customAttribute;
      bindable = _aureliaFramework.bindable;
    }, function (_jquery) {
      jquery = _jquery["default"];
    }, function (_jqueryTextcomplete) {}],
    execute: function () {
      TextCompleteAttribute = (function () {
        var _instanceInitializers = {};
        var _instanceInitializers = {};

        _createDecoratedClass(TextCompleteAttribute, [{
          key: "strategies",
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: "options",
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }], null, _instanceInitializers);

        function TextCompleteAttribute(element) {
          _classCallCheck(this, _TextCompleteAttribute);

          _defineDecoratedPropertyDescriptor(this, "strategies", _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, "options", _instanceInitializers);

          this.element = element;
        }

        _createDecoratedClass(TextCompleteAttribute, [{
          key: "attached",
          value: function attached() {
            jquery(this.element).textcomplete(this.strategies, this.options);
          }
        }], null, _instanceInitializers);

        var _TextCompleteAttribute = TextCompleteAttribute;
        TextCompleteAttribute = inject(Element)(TextCompleteAttribute) || TextCompleteAttribute;
        TextCompleteAttribute = customAttribute('text-complete')(TextCompleteAttribute) || TextCompleteAttribute;
        return TextCompleteAttribute;
      })();

      _export("TextCompleteAttribute", TextCompleteAttribute);
    }
  };
});