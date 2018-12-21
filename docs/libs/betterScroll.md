# 滚动场景

better-scroll 是一款重点解决移动端（已支持 PC）各种滚动场景需求的插件

> 终端安装使用 `npm i better-scroll -S`

## 演示demo

[DEMO](https://aaron52077.github.io/wuli-ui-dev/#/scroll) 

?> `vue-photo-preview` 使用实例

``` vue
<template>
    <div class="wrapper">
        <ul class="content">
            <li>...</li>
            <li>...</li>
            ...
        </ul>
        <!-- 这里可以放一些其它的 DOM，但不会影响滚动 -->
    </div>
</template>

<script>
import BScroll from 'better-scroll'
let wrapper = document.querySelector('.wrapper')
let scroll = new BScroll(wrapper)
</script>
```

?> [更多文档说明](http://ustbhuangyi.github.io/better-scroll/doc/zh-hans/)

