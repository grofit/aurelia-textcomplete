import {inject, customElement, useView, bindable} from 'aurelia-framework'
import jquery from "jquery"

@customElement('text-complete')
@useView("./text-complete-element.html")
export class TextCompleteElement {
  @bindable strategies;
  @bindable nativeOptions;

  _textArea;

  attached() {
    jquery(_textArea).textcomplete(this.strategies, this.nativeOptions);
  }
}