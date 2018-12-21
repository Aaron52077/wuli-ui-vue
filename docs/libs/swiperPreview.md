# 图片滑动

vue-awesome-swiper

> 终端安装使用 `npm i vue-awesome-swiper -S`

## 演示demo

[DEMO](https://aaron52077.github.io/wuli-ui-dev/#/swiper) 

?> `vue-awesome-swiper` 使用实例


``` vue
<template>
    <div class="container">
        <div class="wuli-panel__title">Swiper滑动特效1 多行Slides分布</div>
        <div class="wuli-panel wuli-panel__bd">
            <!-- swiper -->
            <swiper :options="swiperOption1" class="wuli-swiper">
                <swiper-slide v-for="(item,index) in mockImgs" :key="index">
                    <img class="wuli-swiper__img" :src="item.src">
                    <div class="wuli-swiper__desc wuli-ellipsis">{{item.title}}</div>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script>
import { getImages } from '@/api'

export default {
    data() {
        return {
            mockImgs: [],
            swiperOption1: {
                slidesPerView: 2,
                slidesPerColumn: 2,
                spaceBetween: 10
            },
        }
    },
    created() {
        getImages().then(res => {
            this.mockImgs = res.data.pic
        })
    },
}
</script>
```

?> [更多实例说明](https://github.com/Aaron52077/wuli-ui-vue/blob/master/src/views/swiperPreview/index.vue)

