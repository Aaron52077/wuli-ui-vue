# Cell

单元格

> `<wp-cell />` 通用单元格组件。

## 演示demo

[DEMO](https://aaron52077.github.io/wuli-ui-dev/#/cell) 

?> `<wp-cell />` 使用实例

``` vue
<template>
    <div class="container">
        <div class="wuli-panel">
            <wp-cell title="单行列表" ></wp-cell>
        </div>
        <div class="wuli-panel">
            <wp-cell title="单行列表" value="详细信息"></wp-cell>
        </div>
        <div class="wuli-panel">
            <wp-cell title="单行列表" label="附加描述" value="详细信息"></wp-cell>
        </div>
        <div class="wuli-panel">
            <wp-cell title="单行列表" is-link icon="smile"></wp-cell>
            <wp-cell title="单行列表" is-link value="详细信息"></wp-cell>
        </div>
    </div>
</template>
```

?> `<wp-cell />` 参数说明

> props Attributes

|参数|说明|类型|可选值|默认|
| ------ | ------ | ------ |------ |------ |
| title | 标题 | String | - | - |
| icon | 名称前是否带 `icon` 图标，主要用于 [Iconfont](http://www.iconfont.cn) 的使用，所以只接收当前项目中的icon字体类名 | String | - | iconfont |
| label | 附加描述 | String | - | - |
| isLink | 是否可点击跳转 | Boolean | true/false | false |
| value | 备注信息 | string | - | - |
