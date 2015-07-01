import {inject, customAttribute, useView, bindable} from 'aurelia-framework'
import {StrategyGenerator} from "../generator/strategy-generator"
import jquery from "jquery"
import textcomplete from "yuku-t/jquery-textcomplete"

@customAttribute('token-complete')
@inject(Element, StrategyGenerator)
export class TokenCompleteAttribute
{
  @bindable token;
  @bindable search;
  @bindable replace;
  @bindable template;
  @bindable nativeOptions;

  constructor(element, strategyGenerator) {
    this.element = element;
    this.strategyGenerator = strategyGenerator;
  }

  attached()
  {
    if(!this.template)
    { this.template = this.strategyGenerator.getDefaultTemplate(); }

    if(!this.replace)
    { this.replace = this.strategyGenerator.getDefaultReplace(this.token); }

    var matchRegex = this.strategyGenerator.getDefaultMatch(this.token);
    var strategy = this.strategyGenerator.createStrategy(matchRegex, this.search, this.replace, 2, this.template);

    jquery(this.element).textcomplete([strategy], this.nativeOptions);
  }
}
