import {
  Component,
  Prop,
  Method,
  Element,
  Event,
  EventEmitter
} from "@stencil/core";

@Component({
  tag: "wo-progress",
  styleUrl: "index.less",
  shadow: true
})
export class ProgressControl {
  @Prop() label: string;
  @Prop() max: number = 100;
  @Prop() min: number = 0;
  @Prop({ mutable: true, reflectToAttr: true }) value: number = this.min;
  @Prop({ mutable: true}) percent: boolean = true;
  @Prop() labelSize: number = 16;
  @Prop() labelColor: string = "#333";

  private width: number;
  private leftWidth: number;

  // 获取组件元素
  @Element()
  el: HTMLElement;

  // 外传事件
  @Event()
  getValue: EventEmitter;

  // 调整圆环位置
  @Method()
  getCirclePos(e) {
    let l = e.touches[0].clientX - this.leftWidth - 3;
    this.calculateValue(l);
  }

  // 圆环移动结束
  @Method()
  touchEventEnd() {
    this.getValue.emit(this.value);
  }

  // 点击进度条
  @Method()
  clickMode(e) {
    let l = e.x - this.leftWidth - 3;
    this.calculateValue(l);
    this.getValue.emit(this.value);
  }

  // 计算值和百分比
  @Method()
  calculateValue(left) {
    let x = parseInt(((left / this.width) * this.max).toFixed(0));
    this.value = x;
    if (x <= this.min) {
      this.value = this.min;
    } else if (x >= this.max) {
      this.value = this.max;
    }
  }

  // 初始化进度条宽度 和 左边空白条长度
  componentDidLoad() {
    this.width = (this.el.getBoundingClientRect().width / 7) * 5 * 0.9;
    this.leftWidth =
      (this.el.getBoundingClientRect().width / 7) * 2 + this.width * 0.05 + 15;
    if(this.percent) {
      this.percent = this.max === 100
    }
  }

  // 数据校验
  componentWillLoad() {
    if(this.value < this.min) {
      throw ('传入得value 不能小于 min')
    }
  }

  render() {
    return (
      <div class="control-item">
        <span class="label" style={{ fontSize: this.labelSize + "px", color: this.labelColor }}>
          {this.label}
        </span>
        <span class="item">
          <p class="progress" onClick={e => this.clickMode(e)}>
            <span class="value">{this.value} {this.percent?'%':''}</span>
            <span
              class="circle"
              onTouchStart={e => this.getCirclePos(e)}
              style={{ left: (this.value / this.max * 100) + "%" }}
              onTouchMove={e => this.getCirclePos(e)}
              onTouchEnd={() => this.touchEventEnd()}
            />
            <span class="mode" style={{ width: (this.value / this.max * 100) + "%" }} />
          </p>
        </span>
      </div>
    );
  }
}
