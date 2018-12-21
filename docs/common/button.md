# Button 

按钮

> `<wp-button />` 通用按钮组件

## 演示demo

[DEMO](https://aaron52077.github.io/wuli-ui-dev/#/button) 

?> `<wp-button />` 使用实例
``` vue
<template>
    <div class="container">
        <div class="wuli-btns">
            <wp-button type="normal" block @click="clickHandle">默认按钮</wp-button>
            <wp-button type="primary" block>主要按钮</wp-button>
            <wp-button type="success" block>成功按钮</wp-button>
            <wp-button type="info" block>信息按钮</wp-button>
            <wp-button type="danger" block>危险按钮</wp-button>
            <wp-button type="warn" block>警告按钮</wp-button>
        </div>
    </div>
</template>
```
?> `<wp-button />` 参数说明

> props Attributes

|参数|说明|类型|可选值|默认|
| ------ | ------ | ------ |------ |------ |
| size | 按钮的大小 | String | small/mini | large |
| type | 按钮的样式类型 | String | normal/primary/success/info/danger/warn | normal |
| plain | 按钮是否镂空，背景色透明 | Boolean | true/false | false |
| disabled | 是否禁用 | Boolean | true/false | false |
| loading | 名称前是否带 loading 图标 | Boolean | true/false | false |
| disabled | 是否禁用 | Boolean | true/false | false |
| styles | 自定义类名,可用于自定义按钮样式颜色等 | String | true/false | - |

