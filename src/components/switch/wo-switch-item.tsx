import { Component, Prop, Event, EventEmitter, Method } from "@stencil/core";

@Component({
  tag: "wo-switch",
  styleUrl: "index.less",
  shadow: true
})
export class ModeControl {
  /*
  * 说明文字描述
  */
  @Prop() label: string;
  /**
   *说明文字大小
   *
   * @type {number}
   * @memberof ModeControl
   */
  @Prop() labelSize: number = 16;
  /**
   *说明文字颜色
   *
   * @type {string}
   * @memberof ModeControl
   */
  @Prop() labelColor: string = "#333";

  /**
   *对外提供当前模式数据
   *
   * @type {EventEmitter}
   * @memberof ModeControl
   */
  @Event()
  getMode: EventEmitter;
  showModeHandler(item) {
    if (item.selected) return;
    this.setMode();
    this.getMode.emit({
    });
  }

  /**
   * 设置当前的模式
   * @param item 
   */
  @Method()
  setMode() {
  }

  /**
   * 数据校验
   */
  componentWillLoad() {
  }

  render() {
    return (
      <div class="control-item">
       <span class="label" style={{ fontSize: this.labelSize + "px", color: this.labelColor }}>
          {this.label}
        </span>
        <div class="item">
            <div class="switch switch--on">
                <div class="switch__node"></div>
            </div>
        </div>
      </div>
    );
  }
}
