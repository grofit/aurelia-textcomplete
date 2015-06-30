"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.configure = configure;

var _generatorStrategyGenerator = require("./generator/strategy-generator");

var _generatorDefaultStrategyGeneratorr = require("./generator/default-strategy-generatorr");

function configure(aurelia) {
    aurelia.container.registerInstance(_generatorStrategyGenerator.StrategyGenerator, new _generatorDefaultStrategyGeneratorr.DefaultStrategyGenerator());
    aurelia.globalizeResources("./elements/text-complete-element");
    aurelia.globalizeResources("./elements/token-complete-element");
}