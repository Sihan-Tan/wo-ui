import { Component, Prop, Event, EventEmitter, Method } from "@stencil/core";

interface Mode{
  name: string,
  selected: boolean
}

@Component({
  tag: "wo-mode",
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
   *选中时的文字颜色
   *
   * @type {(string | null)}
   * @memberof ModeControl
   */
  @Prop() activeColor: string | null;
  /**
   *选中时的背景颜色
   *
   * @type {(string | null)}
   * @memberof ModeControl
   */
  @Prop() activeBackground: string | null;
  /**
   *未选中时的文字颜色
   *
   * @type {(string | null)}
   * @memberof ModeControl
   */
  @Prop() color: string | null;
  /**
   *未选中时的背景颜色
   *
   * @type {(string | null)}
   * @memberof ModeControl
   */
  @Prop() background: string | null;

  /**
   *模式数组
   *
   * @type {Array<Mode>}
   * @memberof ModeControl
   */
  @Prop({ mutable: true, reflectToAttr: true })
  modeArr: Array<Mode> = [];

  /**
   *对外提供当前模式数据
   *
   * @type {EventEmitter}
   * @memberof ModeControl
   */
  @Event()
  getMode: EventEmitter;
  showModeHandler(item, index) {
    if (item.selected) return;
    this.setMode(item);
    this.getMode.emit({
      current: item,
      index: index,
      all: this.modeArr
    });
  }

  /**
   * 设置当前的模式
   * @param item 
   */
  @Method()
  setMode(item) {
    this.modeArr = this.modeArr.map(it => {
      it.selected = false;
      return it;
    });
    item.selected = true;
  }

  /**
   * 数据校验
   */
  componentWillLoad() {
    let count = 0;
    this.modeArr.forEach(item => {
      count = item.selected ? count + 1 : count;
    });
    if (count > 1) {
      throw `'modeArr' 的成员最多只能有一个 selected 为 true`;
    }
  }

  render() {
    return (
      <div class="control-item">
       <span class="label" style={{ fontSize: this.labelSize + "px", color: this.labelColor }}>
          {this.label}
        </span>
        <p class="item">
          {this.modeArr.map((item, index) => {
            if (item.selected) {
              return (<span
                class='mode-item active'
                style={{'color':this.activeColor, 'background-color': this.activeBackground}}
              >
                {item.name}
              </span>)
            } else {
              return (<span
                class='mode-item'
                onClick={() => this.showModeHandler(item, index)}
                style={{'color':this.color, 'background-color': this.background}}
              >
                {item.name}
              </span>)
            }
          })}
        </p>
      </div>
    );
  }
}
