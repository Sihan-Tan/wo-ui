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

  @State()
  valueEle: any = null;

  /**
   * 默认值
   */
  @Prop({ mutable: true, reflectToAttr: true }) value: number;

  /**
   * 底线颜色
   */
  @Prop() lineColor: string = '';

  /**
   * 最大输入长度
   */
  @Prop() length: number = 3;

  /**
   * 输入框内文字颜色
   */
  @Prop() color: string = '';

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
    this.value = this.valueEle.value - 0
    this.valueEle.style.borderColor = ''
    if(this.value > this.max) {
      this.value = this.max
      this.inDisabled = true
    }
    this.changeHandler()
  }

  /**
   * 改变底线颜色
   */
  @Method()
  changeColor() {
    this.valueEle.style.borderColor = this.lineColor
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

  componentDidLoad() {
    this.valueEle = this.el.shadowRoot.querySelector('.wo-count__value')
  }

  render() {
    return (
      <div class="wo-count">
        <span class={`wo-count__decrease ${this.deDisabled?'disabled':''}`} onClick={()=>this.decreaseValue()}> - </span>
        <input type="tel" class="wo-count__value" maxlength="length" style={{color:this.color}} onFocus={()=>{this.changeColor()}} value={this.value} onBlur={()=>this.changeValue()}/>
        <span class={`wo-count__increase ${this.inDisabled?'disabled':''}`} onClick={()=>this.increaseValue()}> + </span>
      </div>
    );
  }
}
