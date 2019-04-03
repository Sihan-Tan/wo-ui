/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface WoCellGroup {
    /**
    * 是否显示底线
    */
    'bottomLine': boolean;
    /**
    * 是否显示顶线
    */
    'topLine': boolean;
  }
  interface WoCellGroupAttributes extends StencilHTMLAttributes {
    /**
    * 是否显示底线
    */
    'bottomLine'?: boolean;
    /**
    * 是否显示顶线
    */
    'topLine'?: boolean;
  }

  interface WoCell {
    'bottomLine': boolean;
    'isScroll': boolean;
    'label': string;
    /**
    * 说明文字颜色
    */
    'labelColor': string;
    /**
    * 说明文字大小
    */
    'labelSize': string;
    /**
    * 单元格 上/下 线
    */
    'topLine': boolean;
  }
  interface WoCellAttributes extends StencilHTMLAttributes {
    'bottomLine'?: boolean;
    'isScroll'?: boolean;
    'label'?: string;
    /**
    * 说明文字颜色
    */
    'labelColor'?: string;
    /**
    * 说明文字大小
    */
    'labelSize'?: string;
    /**
    * 单元格 上/下 线
    */
    'topLine'?: boolean;
  }

  interface WoColorChoose {
    'activeColor': string | null;
    'colorArr': Array<any>;
    'setColor': (item: any) => void;
    'size': string;
  }
  interface WoColorChooseAttributes extends StencilHTMLAttributes {
    'activeColor'?: string | null;
    'colorArr'?: Array<any>;
    'onChange'?: (event: CustomEvent) => void;
    'size'?: string;
  }

  interface WoCount {
    /**
    * 输入
    */
    'changeValue': () => void;
    /**
    * 减小
    */
    'decreaseValue': () => void;
    /**
    * 增大
    */
    'increaseValue': () => void;
    /**
    * 最大值
    */
    'max': number;
    /**
    * 最小值
    */
    'min': number;
    /**
    * 默认值
    */
    'value': number;
  }
  interface WoCountAttributes extends StencilHTMLAttributes {
    /**
    * 最大值
    */
    'max'?: number;
    /**
    * 最小值
    */
    'min'?: number;
    /**
    * 对外提供当前模式数据
    */
    'onChange'?: (event: CustomEvent) => void;
    /**
    * 默认值
    */
    'value'?: number;
  }

  interface WoMode {
    /**
    * 选中时的背景颜色
    */
    'activeBackground': string | null;
    /**
    * 选中时的文字颜色
    */
    'activeColor': string | null;
    /**
    * 未选中时的背景颜色
    */
    'background': string | null;
    /**
    * 未选中时的文字颜色
    */
    'color': string | null;
    /**
    * 模式数组
    */
    'modeArr': Array<Mode>;
    /**
    * 设置当前的模式
    */
    'setMode': (item: any) => void;
  }
  interface WoModeAttributes extends StencilHTMLAttributes {
    /**
    * 选中时的背景颜色
    */
    'activeBackground'?: string | null;
    /**
    * 选中时的文字颜色
    */
    'activeColor'?: string | null;
    /**
    * 未选中时的背景颜色
    */
    'background'?: string | null;
    /**
    * 未选中时的文字颜色
    */
    'color'?: string | null;
    /**
    * 模式数组
    */
    'modeArr'?: Array<Mode>;
    /**
    * 对外提供当前模式数据
    */
    'onChange'?: (event: CustomEvent) => void;
  }

  interface WoProgress {
    /**
    * 进度条激活状态颜色
    */
    'activeColor': string;
    'calculateValue': (left: any) => void;
    'clickMode': (e: any) => void;
    'getCirclePos': (e: any) => void;
    /**
    * 进度条默认状态颜色
    */
    'inactiveColor': string;
    /**
    * 最大值
    */
    'max': number;
    /**
    * 最小值
    */
    'min': number;
    /**
    * 是否显示百分比
    */
    'percent': boolean;
    'touchEventEnd': () => void;
    /**
    * 传入的值
    */
    'value': number;
  }
  interface WoProgressAttributes extends StencilHTMLAttributes {
    /**
    * 进度条激活状态颜色
    */
    'activeColor'?: string;
    /**
    * 进度条默认状态颜色
    */
    'inactiveColor'?: string;
    /**
    * 最大值
    */
    'max'?: number;
    /**
    * 最小值
    */
    'min'?: number;
    'onChange'?: (event: CustomEvent) => void;
    /**
    * 是否显示百分比
    */
    'percent'?: boolean;
    /**
    * 传入的值
    */
    'value'?: number;
  }

  interface WoSwitch {
    'activeColor': string;
    'checked': boolean;
    /**
    * 是否禁用
    */
    'disabled': boolean;
    /**
    * 关闭时的背景色
    */
    'inactiveColor': string;
    /**
    * 开关大小
    */
    'size': string;
  }
  interface WoSwitchAttributes extends StencilHTMLAttributes {
    'activeColor'?: string;
    'checked'?: boolean;
    /**
    * 是否禁用
    */
    'disabled'?: boolean;
    /**
    * 关闭时的背景色
    */
    'inactiveColor'?: string;
    /**
    * 对外提供当前模式数据
    */
    'onChange'?: (event: CustomEvent) => void;
    /**
    * 开关大小
    */
    'size'?: string;
  }

  interface WoColorPicker {}
  interface WoColorPickerAttributes extends StencilHTMLAttributes {}

  interface WoMain {
    /**
    * 更改设备开关状态
    */
    'changeState': () => void;
    /**
    * 设备图片路径
    */
    'imageUrl': string;
    /**
    * 设备开关状态
    */
    'isOpen': boolean;
    /**
    * 设备所属房间
    */
    'location': string;
  }
  interface WoMainAttributes extends StencilHTMLAttributes {
    /**
    * 设备图片路径
    */
    'imageUrl'?: string;
    /**
    * 设备开关状态
    */
    'isOpen'?: boolean;
    /**
    * 设备所属房间
    */
    'location'?: string;
    /**
    * 获取设备开关状态
    */
    'onChange'?: (event: CustomEvent) => void;
  }
}

declare global {
  interface StencilElementInterfaces {
    'WoCellGroup': Components.WoCellGroup;
    'WoCell': Components.WoCell;
    'WoColorChoose': Components.WoColorChoose;
    'WoCount': Components.WoCount;
    'WoMode': Components.WoMode;
    'WoProgress': Components.WoProgress;
    'WoSwitch': Components.WoSwitch;
    'WoColorPicker': Components.WoColorPicker;
    'WoMain': Components.WoMain;
  }

  interface StencilIntrinsicElements {
    'wo-cell-group': Components.WoCellGroupAttributes;
    'wo-cell': Components.WoCellAttributes;
    'wo-color-choose': Components.WoColorChooseAttributes;
    'wo-count': Components.WoCountAttributes;
    'wo-mode': Components.WoModeAttributes;
    'wo-progress': Components.WoProgressAttributes;
    'wo-switch': Components.WoSwitchAttributes;
    'wo-color-picker': Components.WoColorPickerAttributes;
    'wo-main': Components.WoMainAttributes;
  }


  interface HTMLWoCellGroupElement extends Components.WoCellGroup, HTMLStencilElement {}
  var HTMLWoCellGroupElement: {
    prototype: HTMLWoCellGroupElement;
    new (): HTMLWoCellGroupElement;
  };

  interface HTMLWoCellElement extends Components.WoCell, HTMLStencilElement {}
  var HTMLWoCellElement: {
    prototype: HTMLWoCellElement;
    new (): HTMLWoCellElement;
  };

  interface HTMLWoColorChooseElement extends Components.WoColorChoose, HTMLStencilElement {}
  var HTMLWoColorChooseElement: {
    prototype: HTMLWoColorChooseElement;
    new (): HTMLWoColorChooseElement;
  };

  interface HTMLWoCountElement extends Components.WoCount, HTMLStencilElement {}
  var HTMLWoCountElement: {
    prototype: HTMLWoCountElement;
    new (): HTMLWoCountElement;
  };

  interface HTMLWoModeElement extends Components.WoMode, HTMLStencilElement {}
  var HTMLWoModeElement: {
    prototype: HTMLWoModeElement;
    new (): HTMLWoModeElement;
  };

  interface HTMLWoProgressElement extends Components.WoProgress, HTMLStencilElement {}
  var HTMLWoProgressElement: {
    prototype: HTMLWoProgressElement;
    new (): HTMLWoProgressElement;
  };

  interface HTMLWoSwitchElement extends Components.WoSwitch, HTMLStencilElement {}
  var HTMLWoSwitchElement: {
    prototype: HTMLWoSwitchElement;
    new (): HTMLWoSwitchElement;
  };

  interface HTMLWoColorPickerElement extends Components.WoColorPicker, HTMLStencilElement {}
  var HTMLWoColorPickerElement: {
    prototype: HTMLWoColorPickerElement;
    new (): HTMLWoColorPickerElement;
  };

  interface HTMLWoMainElement extends Components.WoMain, HTMLStencilElement {}
  var HTMLWoMainElement: {
    prototype: HTMLWoMainElement;
    new (): HTMLWoMainElement;
  };

  interface HTMLElementTagNameMap {
    'wo-cell-group': HTMLWoCellGroupElement
    'wo-cell': HTMLWoCellElement
    'wo-color-choose': HTMLWoColorChooseElement
    'wo-count': HTMLWoCountElement
    'wo-mode': HTMLWoModeElement
    'wo-progress': HTMLWoProgressElement
    'wo-switch': HTMLWoSwitchElement
    'wo-color-picker': HTMLWoColorPickerElement
    'wo-main': HTMLWoMainElement
  }

  interface ElementTagNameMap {
    'wo-cell-group': HTMLWoCellGroupElement;
    'wo-cell': HTMLWoCellElement;
    'wo-color-choose': HTMLWoColorChooseElement;
    'wo-count': HTMLWoCountElement;
    'wo-mode': HTMLWoModeElement;
    'wo-progress': HTMLWoProgressElement;
    'wo-switch': HTMLWoSwitchElement;
    'wo-color-picker': HTMLWoColorPickerElement;
    'wo-main': HTMLWoMainElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
