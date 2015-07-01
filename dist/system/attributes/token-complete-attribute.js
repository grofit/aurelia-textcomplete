System.register(["aurelia-framework", "jquery", "yuku-t/jquery-textcomplete"], function (_export) {
  "use strict";

  var inject, customAttribute, useView, bindable, jquery, textcomplete, TextCompleteAttribute;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === "function") { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError("The decorator for method " + descriptor.key + " is of the invalid type " + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer.call(target); Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
      customAttribute = _aureliaFramework.customAttribute;
      useView = _aureliaFramework.useView;
      bindable = _aureliaFramework.bindable;
    }, function (_jquery) {
      jquery = _jquery["default"];
    }, function (_yukuTJqueryTextcomplete) {
      textcomplete = _yukuTJqueryTextcomplete["default"];
    }],
    execute: function () {
      TextCompleteAttribute = (function () {
        var _instanceInitializers = {};

        function TextCompleteAttribute(element) {
          _classCallCheck(this, _TextCompleteAttribute);

          _defineDecoratedPropertyDescriptor(this, "strategies", _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, "nativeOptions", _instanceInitializers);

          this.element = element;
        }

        var _TextCompleteAttribute = TextCompleteAttribute;

        _createDecoratedClass(_TextCompleteAttribute, [{
          key: "attached",
          value: function attached() {
            jquery(this.element).textcomplete(this.strategies, this.nativeOptions);
          }
        }, {
          key: "strategies",
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: "nativeOptions",
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }], null, _instanceInitializers);

        TextCompleteAttribute = inject(Element)(TextCompleteAttribute) || TextCompleteAttribute;
        TextCompleteAttribute = customAttribute("text-complete")(TextCompleteAttribute) || TextCompleteAttribute;
        return TextCompleteAttribute;
      })();

      _export("TextCompleteAttribute", TextCompleteAttribute);
    }
  };
});