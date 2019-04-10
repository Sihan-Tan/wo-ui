import { Component, Prop } from "@stencil/core";

@Component({
  tag: "wo-cell-group",
  styleUrl: "index.less",
  shadow: true
})
export class CellGroup {

  /**
   * 是否显示顶线
   */
  @Prop() topLine: boolean = false;
  /**
   * 是否显示底线
   */
  @Prop() bottomLine: boolean = false;


  render() {
    return (
      <div class={`wo-cell-group ${!this.topLine?'wo-cell-group--no-top':''} ${!this.bottomLine?'wo-cell-group--no-bottom':''}`}>
        <slot/>
      </div>
    );
  }
}
