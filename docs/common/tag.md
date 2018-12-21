# Tag

标签

> `<wp-tag />` 通用单元格组件。

## 演示demo

[DEMO](https://aaron52077.github.io/wuli-ui-dev/#/tag) 

?> `<wp-tag />` 使用实例

``` vue
<template>
    <div class="container">
        <div class="wuli-panel wuli-panel__bd">
            <wp-tag border="danger">标签一</wp-tag>
            <wp-tag border="primary">标签二</wp-tag>
            <wp-tag border="success">标签三</wp-tag>
            <wp-tag border="warning">标签四</wp-tag>
            <wp-tag border="info">标签五</wp-tag>
        </div>
    </div>
</template>
```

?> `<wp-tag />` 参数说明

> props Attributes

|参数|说明|类型|可选值|默认|
| ------ | ------ | ------ |------ |------ |
| type | 标签的样式类型 | String | info/primary/success/danger/warning | — |
| round | 标签是否有圆角 | Boolean | true/false | false |
| border | 标签的边框样式类型 | String | info/primary/success/danger/warning | — |
| size | 标签的样式大小 | String | medium/small | — |
| closable | 标签是否显示关闭 | Boolean | true/false | false |
| color | 标签自定义颜色 | String | - | - |

> solt Attributes 具名插槽

|参数|可选值|说明|
| ------ | ------ | ------ |  
| name | right | 插入至标签栏右侧的内容 |
