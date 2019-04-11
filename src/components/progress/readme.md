# wo-progress



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute        | Description | Type      | Default     |
| --------------- | ---------------- | ----------- | --------- | ----------- |
| `activeColor`   | `active-color`   | 进度条激活状态颜色   | `string`  | `undefined` |
| `color`         | `color`          | 字颜色         | `string`  | `''`        |
| `inactiveColor` | `inactive-color` | 进度条默认状态颜色   | `string`  | `undefined` |
| `max`           | `max`            | 最大值         | `number`  | `100`       |
| `min`           | `min`            | 最小值         | `number`  | `0`         |
| `percent`       | `percent`        | 是否显示百分比     | `boolean` | `true`      |
| `value`         | `value`          | 传入的值        | `number`  | `this.min`  |


## Events

| Event    | Description | Type                |
| -------- | ----------- | ------------------- |
| `change` |             | `CustomEvent<void>` |


## Methods

### `calculateValue(left: any) => void`



#### Parameters

| Name   | Type  | Description |
| ------ | ----- | ----------- |
| `left` | `any` |             |

#### Returns

Type: `void`



### `clickMode(e: any) => void`



#### Parameters

| Name | Type  | Description |
| ---- | ----- | ----------- |
| `e`  | `any` |             |

#### Returns

Type: `void`



### `getCirclePos(e: any) => void`



#### Parameters

| Name | Type  | Description |
| ---- | ----- | ----------- |
| `e`  | `any` |             |

#### Returns

Type: `void`



### `touchEventEnd() => void`



#### Returns

Type: `void`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
