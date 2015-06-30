import {StrategyGenerator} from "./generator/strategy-generator"
import {DefaultStrategyGenerator} from "./generator/default-strategy-generator"

export function configure(aurelia) {
    aurelia.container.registerInstance(StrategyGenerator, new DefaultStrategyGenerator());
    aurelia.globalizeResources("./elements/text-complete-element");
    aurelia.globalizeResources("./elements/token-complete-element");
}