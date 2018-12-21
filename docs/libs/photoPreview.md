# 图片预览

vue-photo-preview

> 终端安装使用 `npm i vue-photo-preview -S`

## 演示demo

[DEMO](https://aaron52077.github.io/wuli-ui-dev/#/photo) 

?> `vue-photo-preview` 使用实例

``` vue
<template>
    <div class="container">
        <div class="wuli-gallery">
            <img class="wuli-gallery__img" 
                v-for="(item, index) of mockImgs" 
                preview="0" 
                :key="index"
                :src="item.src" 
                :preview-text="item.title">
        </div>
    </div>
</template>

<script>
import { getImages } from '@/api'

export default {
    data() {
        return {
            mockImgs: []
        }
    },
    created() {
        getImages().then(res => {
            this.mockImgs = res.data.pic
            // 如果图片是异步生成的，在图片数据更新后调用
            this.$previewRefresh()
        })
    },
}
</script>
```

?> [更多参数说明](http://photoswipe.com/documentation/options.html)

