import { Component, Prop, Event, EventEmitter } from '@stencil/core'

@Component({
    tag: 'wo-button',
    styleUrl: 'index.less',
    shadow: true
})
export class Button {

    /**
     * 按钮类型
     * 默认值 default
     * 可选值 primary info danger warning
     */
    @Prop() type: string = 'default'

    /**
     * 幽灵按钮
     * 默认值  false
     * 可选值   true
     */
    @Prop() plain: boolean = false

    /**
     * 按钮尺寸
     * 默认值   normal
     * 可选值   small  large
     */
    @Prop() size: string = 'normal'

    /**
     * 是否禁用
     * 默认值   false
     * 可选值   true
     */
    @Prop() disabled: boolean = false // 是否可用

    /**
     * 按钮形状
     * 默认值   -
     * 可选值   square  round
     */
    @Prop() shape: string = '' // 形状

    /**
    * 对外提供当前模式数据
    */
    @Event()
    touched: EventEmitter;
    touchHandler() {
        if(this.disabled) return
        this.touched.emit({
            disabled: this.disabled,
            clicked: true
        })
    }

    render() {
        return (
            <button 
                class={`wo-button 
                wo-button--${this.type}
                wo-button--${this.plain ? 'plain' : ''}
                wo-button--${this.shape}
                wo-button--${this.disabled ? 'disabled': ''}
                wo-button--${this.size}`}
                onTouchStart={()=>this.touchHandler()}
                >
                <span class="wo-button__text" >
                    <slot></slot>
                </span>
            </button>
        )
    }
}