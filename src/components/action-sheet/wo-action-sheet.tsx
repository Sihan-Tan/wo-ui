import { Component, Prop, Event, EventEmitter, Method, State } from "@stencil/core";

@Component({
  tag: "wo-action-sheet",
  styleUrl: "index.less",
  shadow: true
})
export class ActionSheet {

  /**
   * 是否支持点击遮罩层关闭当前actionsheet
   */
  @Prop() overlay: boolean = true;

  /**
   * 标题字体大小
   */
  @Prop() titleSize: string = '';

  /**
   * 显示
   */
  @State() show: boolean = false;

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

  /**
   * 当前激活项
   */
  @State() activeItem: any

  @Event()
  change: EventEmitter;
  showActionHandler(item, index) {
    if (item.selected) return;
    this.setAction(index);
    this.activeItem = item
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

  componentWillLoad() {
    let flag = false
    this.lists.forEach(item => {
      if (item.selected) {
        flag = true
        this.activeItem = item
      }
    });
    if (!flag) {
      this.lists[0].selected = true
      this.activeItem = this.lists[0]
    }
  }

  render() {
    return (
      <div class="wo-action">
        <span class="select" onClick={() => this.show = true}>{this.activeItem.name || '未选择'}</span>
        <div class="wo-overlay"
          style={{ display: this.show ? 'block' : 'none' }}
          onClick={() => { this.overlay ? this.show = false : '' }}
        >
          <div class="wo-actionsheet">
            <div
              class="wo-actionsheet__header wo-hairline--top-bottom"
              style={{ display: this.title ? 'block' : 'none', fontSize: this.titleSize }}
            >
              {this.title}
            </div>
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
            </div>
            <div class="wo-actionsheet__footer">
              <p class="height-12"></p>
              <p class="action-sheet-item no-border" onClick={() => this.show = false}>取消</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}