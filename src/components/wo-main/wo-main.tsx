import { Component, Prop, Event, EventEmitter, Method } from '@stencil/core';
@Component({
  tag: 'wo-main',
  styleUrl: 'index.less',
  shadow: true
})
export class WoMain {
  /**
   * 设备所属房间
   */
  @Prop() location: string = '';

  /**
   * 设备图片路径
   */
  @Prop() imageUrl: string = '';

  /**
   *设备开关状态
   */
  @Prop({ mutable: true, reflectToAttr: true }) isOpen: boolean = false;

  /**
   *获取设备开关状态
   */
  @Event()
  getOpen: EventEmitter
  showOpenHandler(){
    this.changeState()
    this.getOpen.emit({
      isOpen : this.isOpen
    })
  }

  /**
   * 更改设备开关状态
   */
  @Method()
  changeState(){
    this.isOpen = !this.isOpen
  }

  /**
   * 数据校验
   */
  componentWillLoad(){
    if(!this.location.length)
      throw new Error("location: required")
    if(!this.imageUrl.length)
      throw new Error('imageUrl: require')
  }

  render() {
    return (
        <main class={this.isOpen?'active':''}>
            <h1 class="local">
              <span>{this.location}</span>
              <i class="iconfont icon-kaiguan" onClick={()=>this.showOpenHandler()}></i>
            </h1>
            <img src={this.imageUrl}> </img>
        </main>
    );
  }
}
