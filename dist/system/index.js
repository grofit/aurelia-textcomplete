System.register(["./generator/strategy-generator", "./generator/default-strategy-generator"], function (_export) {
    "use strict";

    var StrategyGenerator, DefaultStrategyGenerator;

    _export("configure", configure);

    function configure(aurelia) {
        aurelia.container.registerInstance(StrategyGenerator, new DefaultStrategyGenerator());
        aurelia.globalizeResources("./elements/text-complete-element");
        aurelia.globalizeResources("./elements/token-complete-element");
        aurelia.globalizeResources("./attributes/text-complete-attribute");
        aurelia.globalizeResources("./attributes/token-complete-attribute");
    }

    return {
        setters: [function (_generatorStrategyGenerator) {
            StrategyGenerator = _generatorStrategyGenerator.StrategyGenerator;
        }, function (_generatorDefaultStrategyGenerator) {
            DefaultStrategyGenerator = _generatorDefaultStrategyGenerator.DefaultStrategyGenerator;
        }],
        execute: function () {}
    };
});