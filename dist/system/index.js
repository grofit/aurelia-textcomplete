System.register(["./generator/strategy-generator", "./generator/default-strategy-generatorr"], function (_export) {
    "use strict";

    var StrategyGenerator, DefaultStrategyGenerator;

    _export("configure", configure);

    function configure(aurelia) {
        aurelia.container.registerInstance(StrategyGenerator, new DefaultStrategyGenerator());
        aurelia.globalizeResources("./elements/text-complete-element");
        aurelia.globalizeResources("./elements/token-complete-element");
    }

    return {
        setters: [function (_generatorStrategyGenerator) {
            StrategyGenerator = _generatorStrategyGenerator.StrategyGenerator;
        }, function (_generatorDefaultStrategyGeneratorr) {
            DefaultStrategyGenerator = _generatorDefaultStrategyGeneratorr.DefaultStrategyGenerator;
        }],
        execute: function () {}
    };
});