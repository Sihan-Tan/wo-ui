import { Component, Prop } from "@stencil/core";

@Component({
  tag: "wo-cell",
  styleUrl: "index.less",
  shadow: true
})
export class Cell {
    
  /*
   * 说明文字描述
   */
  @Prop() label: string;

  /**
   *说明文字大小
   */
  @Prop() labelSize: string = '14px';

  /**
   *说明文字颜色
   */
  @Prop() labelColor: string = "#333";

  /*
   * 是否超出滚动
   */
  @Prop() isScroll: boolean = false;

  /**
   * 单元格 上/下 线
   */
  @Prop() topLine: boolean = false;
  @Prop() bottomLine: boolean = true;

  render() {
    return (
      <div class={`wo-cell ${!this.topLine?'wo-cell--no-top':''} ${!this.bottomLine?'wo-cell--no-bottom':''}`}>
        <span
          class="wo-cell__label"
          style={{ fontSize: this.labelSize, color: this.labelColor }}
        >
          {this.label}
        </span>
        <div class={`wo-cell__value`}>
          <div class={`wo-cell__value--content ${this.isScroll?'wo-cell__value--scroll':''}`}>
            <slot />
          </div>
        </div>
      </div>
    );
  }
}
