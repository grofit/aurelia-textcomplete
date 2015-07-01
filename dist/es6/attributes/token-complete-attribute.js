import {inject, customAttribute, useView, bindable} from 'aurelia-framework'
import jquery from "jquery"
import textcomplete from "yuku-t/jquery-textcomplete"

@customAttribute('text-complete')
@inject(Element)
export class TextCompleteAttribute
{
  @bindable strategies;
  @bindable nativeOptions;

  constructor(element)
  {
    this.element = element;
  }

  attached() {
    jquery(this.element).textcomplete(this.strategies, this.nativeOptions);
  }
}