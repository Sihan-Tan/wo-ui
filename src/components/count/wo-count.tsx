import { Component, Event, EventEmitter, Prop, Method, Element, State } from "@stencil/core";

@Component({
  tag: "wo-count",
  styleUrl: "index.less",
  shadow: true
})
export class ModeControl {
  @Element()
  el: HTMLElement;

  @State()
  deDisabled: boolean = false;

  @State()
  inDisabled: boolean = false;

  /**
   * 默认值
   */
  @Prop({ mutable: true, reflectToAttr: true }) value: number;

  /**
   * 最大值
   */
  @Prop() max: number = 100;

  /**
   * 最小值
   */
  @Prop() min: number = 0;

  /**
   * 减小
   */
  @Method()
  decreaseValue() {
    if(this.deDisabled) return ;
    this.value --
    this.inDisabled = false
    if(this.value <= this.min) {
      this.value = this.min
      this.deDisabled = true
    }
    this.changeHandler()
  }

  /**
   * 增大
   */
  @Method()
  increaseValue() {
    if(this.inDisabled) return ;
    this.value ++
    this.deDisabled = false
    if(this.value >= this.max) {
      this.value = this.max
      this.inDisabled = true
    }
    this.changeHandler()
  }

  /**
   * 输入
   */
  @Method()
  changeValue() {
    this.value = (this.el.shadowRoot.querySelector('.wo-count__value') as any).value
    if(this.value > this.max) {
      this.value = this.max
      this.inDisabled = true
    }
    this.changeHandler()
  }

  /**
   *对外提供当前模式数据
   */
  @Event()
  change: EventEmitter;
  changeHandler() {
    this.change.emit({
      value: this.value
    })
  }

  componentWillLoad() {
    this.value = this.value ? this.value : this.min
    this.value = this.value < this.min ? this.min : this.value 
    this.value = this.value > this.max ? this.max : this.value 
  }

  render() {
    return (
      <div class="wo-count">
        <span class={`wo-count__decrease ${this.deDisabled?'disabled':''}`} onClick={()=>this.decreaseValue()}> - </span>
        <input type="tel" class="wo-count__value" maxlength="3" value={this.value} onBlur={()=>this.changeValue()}/>
        <span class={`wo-count__increase ${this.inDisabled?'disabled':''}`} onClick={()=>this.increaseValue()}> + </span>
      </div>
    );
  }
}
