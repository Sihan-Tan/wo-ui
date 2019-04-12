import { Component, Prop, Event, EventEmitter, Method } from "@stencil/core";

@Component({
  tag: "wo-action-sheet",
  styleUrl: "index.less",
  shadow: true
})
export class ActionSheet {

  /**
   * 显示
   */
  @Prop({ mutable: true, reflectToAttr: true }) show: boolean = false;

  /**
   * 标题
   */
  @Prop() title: string = '';

  /**
   * 列表数据
   */
  @Prop({ mutable: true, reflectToAttr: true }) lists: Array<any> = []

  /**
   * 激活颜色
   */
  @Prop() activeColor: string = ''

  @Event()
  change: EventEmitter;
  showActionHandler(item, index) {
    if (item.selected) return;
    this.setAction(index);
    this.change.emit({
      current: item,
      index: index,
      all: this.lists
    });
    this.show = false
  }

  @Method()
  setAction(index) {
    this.lists = this.lists.map(it => {
      it.selected = false;
      return it;
    });
    this.lists[index].selected = true
  }

  render() {
    return (
      <div class="wo-overlay" 
        style={{ display: this.show ? 'block' : 'none' }}
        onClick={()=>this.show = false}
        >
        <div class="wo-actionsheet">
          <div class="wo-actionsheet__header wo-hairline--top-bottom" style={{ display: this.title ? 'block' : 'none' }}></div>
          <div class="wo-actionsheet__content">
            {
              this.lists.map((item, index) => {
                if (item.selected) {
                  return (
                    <p class="action-sheet-item active"
                      style={{
                        "color": this.activeColor,
                      }}>
                      {item.name}
                    </p>
                  )
                } else {
                  return (
                    <p class="action-sheet-item"
                      onClick={() => this.showActionHandler(item, index)}>
                      {item.name}
                    </p>
                  )
                }
              })
            }
            <p class="height-12"></p>
            <p class="action-sheet-item" onClick={() => this.show = false}>取消</p>
          </div>
        </div>
      </div>
    )
  }
}