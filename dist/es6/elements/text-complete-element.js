import {customElement, useView, bindable} from 'aurelia-framework'
import jquery from "jquery"
import "jquery-textcomplete"

@customElement('text-complete')
@useView("./text-complete-element.html")
export class TextCompleteElement
{
  @bindable strategies;
  @bindable options;

  _textArea;

  attached() {
    jquery(this._textArea).textcomplete(this.strategies, this.options);
  }
}