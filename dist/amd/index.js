define(["exports", "./generator/strategy-generator", "./generator/default-strategy-generator"], function (exports, _generatorStrategyGenerator, _generatorDefaultStrategyGenerator) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.configure = configure;

    function configure(aurelia) {
        aurelia.container.registerInstance(_generatorStrategyGenerator.StrategyGenerator, new _generatorDefaultStrategyGenerator.DefaultStrategyGenerator());
        aurelia.globalizeResources("./elements/text-complete-element");
        aurelia.globalizeResources("./elements/token-complete-element");
    }
});