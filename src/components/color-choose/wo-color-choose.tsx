import {
  Component,
  Prop,
  Event,
  EventEmitter,
  Method
} from "@stencil/core";

@Component({
  tag: "wo-color-choose",
  styleUrl: "index.less",
  shadow: true
})
export class ColorControl {
  @Prop() activeColor: string | null = "#09f";
  @Prop() size: string = "12px";

  @Prop({ mutable: true, reflectToAttr: true })
  colorArr: Array<any> = [];

  @Event()
  change: EventEmitter;
  showColorHandler(item, index) {
    if (item.selected) return;
    this.setColor(item);
    this.change.emit({
      current: item,
      index: index,
      all: this.colorArr
    });
  }

  @Method()
  setColor(item) {
    this.colorArr = this.colorArr.map(it => {
      it.selected = false;
      return it;
    });
    item.selected = true;
  }

  // 对数据校验和初始化
  componentWillLoad() {
    let count = 0;
    this.colorArr.forEach(item => {
      count = item.selected ? count + 1 : count;
    });
    if (!count) {
      this.colorArr[0].selected = true;
    }
    if (count > 1) {
      throw `'colorArr' 的成员最多只能有一个 selected 为 true`;
    }

  }

  render() {
    return (
          <div class="wo-color">
            {this.colorArr.map((item, index) => {
              if (item.selected) {
                return (
                  <span
                    class="wo-color__item active"
                    style={{
                      "background-color": item.color,
                      "border-color": this.activeColor,
                      width: this.size,
                      height: this.size
                    }}
                  />
                );
              } else {
                return (
                  <span
                    class="wo-color__item"
                    onClick={() => this.showColorHandler(item, index)}
                    style={{
                      "background-color": item.color,
                      width: this.size,
                      height: this.size
                    }}
                  />
                );
              }
            })}
          </div>
    );
  }
}
