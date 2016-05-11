import {inject, customAttribute, bindable} from 'aurelia-framework'
import jquery from "jquery"
import "jquery-textcomplete"

@customAttribute('text-complete')
@inject(Element)
export class TextCompleteAttribute
{
  @bindable strategies;
  @bindable options;

  constructor(element)
  {
    this.element = element;
  }

  attached() {
    jquery(this.element).textcomplete(this.strategies, this.options);
  }
}