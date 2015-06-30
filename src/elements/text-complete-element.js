import {inject, customElement, useView, bindable} from 'aurelia-framework'
import {StrategyGenerator} from "../generator/strategy-generator"
import jquery from "jquery"

@customElement('text-complete')
@useView("./text-complete-element.html")
@inject(StrategyGenerator)
export class TokenCompleteElement {
  @bindable token;
  @bindable search;
  @bindable replace;
  @bindable template;
  @bindable nativeOptions;

  _textArea;

  constructor(strategyGenerator) {
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

    jquery(_textArea).textcomplete([strategy], this.nativeOptions);
  }
}
