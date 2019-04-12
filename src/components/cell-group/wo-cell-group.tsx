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
  @Prop() topLine: boolean = true;
  /**
   * 是否显示底线
   */
  @Prop() bottomLine: boolean = true;


  render() {
    return (
      <div 
      class={`wo-cell-group`}
      >
        <slot/>
      </div>
    );
  }
}
