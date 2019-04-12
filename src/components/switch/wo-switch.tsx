import { Component, Event, EventEmitter, Prop } from "@stencil/core";

@Component({
  tag: "wo-switch",
  styleUrl: "index.less",
  shadow: true
})
export class Switch {
  /*
   * 开关状态
   */
  @Prop({ mutable: true, reflectToAttr: true }) checked: boolean = false;

  /*
   * 打开时的背景色
   */
  @Prop() activeColor: string ;

  /**
   * 关闭时的背景色
   */
  @Prop() inactiveColor: string;

  /**
   * 开关大小
   */
  @Prop() size: string = '16px'

  /**
   * 是否禁用
   */
  @Prop() disabled :boolean = false;

  /**
   *对外提供当前模式数据
   */
  @Event()
  change: EventEmitter;
  changeHandler() {
    if(this.disabled) return ;
    this.checked = !this.checked;
    this.change.emit({
      checked: this.checked
    });
  }

  render() {
    return (
      <div
        class={`wo-switch ${this.checked ? "wo-switch--on" : ""} ${this.disabled?"wo-switch--disabled":''}`}
        onClick={() => this.changeHandler()}
        style={{fontSize:this.size, backgroundColor: this.checked?this.activeColor:this.inactiveColor}}
      >
        <div class="wo-switch__node" />
      </div>
    );
  }
}
