System.register(["./generator/strategy-generator", "./generator/default-strategy-generator"], function (_export) {
    "use strict";

    var StrategyGenerator, DefaultStrategyGenerator;

    _export("configure", configure);

    function configure(aurelia) {
        aurelia.globalResources("./elements/text-complete-element");
        aurelia.globalResources("./elements/token-complete-element");
        aurelia.globalResources("./attributes/text-complete-attribute");
        aurelia.globalResources("./attributes/token-complete-attribute");

        aurelia.container.registerInstance(StrategyGenerator, new DefaultStrategyGenerator());
    }

    return {
        setters: [function (_generatorStrategyGenerator) {
            StrategyGenerator = _generatorStrategyGenerator.StrategyGenerator;

            _export("StrategyGenerator", _generatorStrategyGenerator.StrategyGenerator);
        }, function (_generatorDefaultStrategyGenerator) {
            DefaultStrategyGenerator = _generatorDefaultStrategyGenerator.DefaultStrategyGenerator;

            _export("DefaultStrategyGenerator", _generatorDefaultStrategyGenerator.DefaultStrategyGenerator);
        }],
        execute: function () {}
    };
});