# wo-mode



<!-- Auto Generated Below -->


## Properties

| Property           | Attribute           | Description | Type     | Default |
| ------------------ | ------------------- | ----------- | -------- | ------- |
| `activeBackground` | `active-background` | 选中时的背景颜色    | `string` | `''`    |
| `activeColor`      | `active-color`      | 选中时的文字颜色    | `string` | `''`    |
| `background`       | `background`        | 未选中时的背景颜色   | `string` | `''`    |
| `color`            | `color`             | 未选中时的文字颜色   | `string` | `''`    |
| `lists`            | --                  | 模式数组        | `Mode[]` | `[]`    |


## Events

| Event    | Description | Type                |
| -------- | ----------- | ------------------- |
| `change` | 对外提供当前模式数据  | `CustomEvent<void>` |


## Methods

### `setMode(item: any) => void`

设置当前的模式

#### Parameters

| Name   | Type  | Description |
| ------ | ----- | ----------- |
| `item` | `any` |             |

#### Returns

Type: `void`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
