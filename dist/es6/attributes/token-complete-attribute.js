import {inject, customAttribute, bindable} from 'aurelia-framework'
import {StrategyGenerator} from "../generator/strategy-generator"
import jquery from "jquery"
import "jquery-textcomplete"

@customAttribute('token-complete')
@inject(Element, StrategyGenerator)
export class TokenCompleteAttribute
{
  @bindable token;
  @bindable search;
  @bindable replace;
  @bindable template;
  @bindable options;

  constructor(element, strategyGenerator) {
    this.element = element;
    this.strategyGenerator = strategyGenerator;
  }

  attached()
  {
    if(!this.template)
    { console.log("no template"); this.template = this.strategyGenerator.getDefaultTemplate(); }

    if(!this.replace)
    { console.log("no replace"); this.replace = this.strategyGenerator.getDefaultReplace(this.token); }

    var matchRegex = this.strategyGenerator.getDefaultMatch(this.token);
    var strategy = this.strategyGenerator.createStrategy(matchRegex, this.search, this.replace, 2, this.template);

    console.log("strat", strategy);
    jquery(this.element).textcomplete([strategy], this.options);
  }
}
