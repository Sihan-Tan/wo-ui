import {
  Component,
  Prop,
  Event,
  EventEmitter,
  Method,
  State
} from "@stencil/core";

@Component({
  tag: "wo-color-choose",
  styleUrl: "index.less",
  shadow: true
})
export class ColorControl {
  @Prop() label: string;
  @Prop() activeColor: string | null = "#09f";
  @Prop() size: string | null = "normal";
  @Prop() labelSize: number = 16;
  @Prop() labelColor: string = "#333";

  @Prop({ mutable: true, reflectToAttr: true })
  colorArr: Array<any> = [];

  @State()
  width: string = "12px";

  setWidth() {
    if (this.size === "small") this.width = "10px";
    if (this.size === "large") this.width = "15px";
  }

  @Event()
  getColor: EventEmitter;
  showColorHandler(item, index) {
    if (item.selected) return;
    this.setColor(item);
    this.getColor.emit({
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

    this.setWidth();
  }

  render() {
    return (
      <div class="control-item">
        <span class="label" style={{ fontSize: this.labelSize + "px", color: this.labelColor }}>
          {this.label}
        </span>
        <span class="item">
          <div class="color-container">
            {this.colorArr.map((item, index) => {
              if (item.selected) {
                return (
                  <span
                    class="color-item active"
                    style={{
                      "background-color": item.color,
                      "border-color": this.activeColor,
                      width: this.width,
                      height: this.width
                    }}
                  />
                );
              } else {
                return (
                  <span
                    class="color-item"
                    onClick={() => this.showColorHandler(item, index)}
                    style={{
                      "background-color": item.color,
                      width: this.width,
                      height: this.width
                    }}
                  />
                );
              }
            })}
          </div>
        </span>
      </div>
    );
  }
}
