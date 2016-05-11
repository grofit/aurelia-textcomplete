"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.configure = configure;

var _generatorStrategyGenerator = require("./generator/strategy-generator");

var _generatorDefaultStrategyGenerator = require("./generator/default-strategy-generator");

Object.defineProperty(exports, "StrategyGenerator", {
    enumerable: true,
    get: function get() {
        return _generatorStrategyGenerator.StrategyGenerator;
    }
});
Object.defineProperty(exports, "DefaultStrategyGenerator", {
    enumerable: true,
    get: function get() {
        return _generatorDefaultStrategyGenerator.DefaultStrategyGenerator;
    }
});

function configure(aurelia) {
    aurelia.globalResources("./elements/text-complete-element");
    aurelia.globalResources("./elements/token-complete-element");
    aurelia.globalResources("./attributes/text-complete-attribute");
    aurelia.globalResources("./attributes/token-complete-attribute");

    aurelia.container.registerInstance(_generatorStrategyGenerator.StrategyGenerator, new _generatorDefaultStrategyGenerator.DefaultStrategyGenerator());
}