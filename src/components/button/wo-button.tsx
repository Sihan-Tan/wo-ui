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
     * 自定义文字颜色
     */
    @Prop() color: string = ''


    /**
     * 自定义背景颜色
     */
    @Prop() background: string = ''

    /**
     * 自定义边框颜色
     */
    @Prop() borderColor: string = ''

    /**
    * 对外提供 touchStart事件响应
    */
    @Event()
    touched: EventEmitter;
    touchHandler() {
        if(this.disabled) return
        this.touched.emit({
            disabled: this.disabled,
            touched: true
        })
    }

    /**
    * 对外提供 touchStart事件响应
    */
    @Event()
    clicked: EventEmitter;
    clickHandler() {
        if(this.disabled) return
        this.clicked.emit({
            disabled: this.disabled,
            clicked: true
        })
    }

    render() {
        return (
            <button 
                class={`wo-button 
                wo-button--${this.type}
                ${this.plain ? 'wo-button--plain' : ''}
                wo-button--${this.shape}
                ${this.disabled ? 'wo-button--disabled': ''}
                wo-button--${this.size}`}
                style={{
                    background: this.background,
                    borderColor: this.borderColor
                }}
                onTouchStart={()=>this.touchHandler()}
                onClick={()=>this.clickHandler()}
                >
                <span 
                    class="wo-button__text" 
                    style={{color: this.color}}
                    >
                    <slot></slot>
                </span>
            </button>
        )
    }
}