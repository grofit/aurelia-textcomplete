import {StrategyGenerator} from "./generator/strategy-generator"
import {DefaultStrategyGenerator} from "./generator/default-strategy-generator"

export {StrategyGenerator} from "./generator/strategy-generator";
export {DefaultStrategyGenerator} from "./generator/default-strategy-generator";

export function configure(aurelia) {
    aurelia.globalResources("./elements/text-complete-element");
    aurelia.globalResources("./elements/token-complete-element");
    aurelia.globalResources("./attributes/text-complete-attribute");
    aurelia.globalResources("./attributes/token-complete-attribute");

    aurelia.container.registerInstance(StrategyGenerator, new DefaultStrategyGenerator());
}