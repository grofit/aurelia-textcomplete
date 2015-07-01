"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.configure = configure;

var _generatorStrategyGenerator = require("./generator/strategy-generator");

var _generatorDefaultStrategyGenerator = require("./generator/default-strategy-generator");

function configure(aurelia) {
    aurelia.container.registerInstance(_generatorStrategyGenerator.StrategyGenerator, new _generatorDefaultStrategyGenerator.DefaultStrategyGenerator());
    aurelia.globalizeResources("./elements/text-complete-element");
    aurelia.globalizeResources("./elements/token-complete-element");
    aurelia.globalizeResources("./attributes/text-complete-attribute");
    aurelia.globalizeResources("./attributes/token-complete-attribute");
}