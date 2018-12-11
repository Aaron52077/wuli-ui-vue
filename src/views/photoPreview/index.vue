<template>
    <div class="container wuli-page">
        <wp-header title="vue-photo-preview" fixed>
            <template slot="left">
                <wp-icon iconClass="back" className="wuli-header__hd" @click.native="$router.go(-1)"></wp-icon>
            </template>
            <template slot="right">
                <wp-icon iconClass="category" className="wuli-header__ft"></wp-icon>
            </template>
        </wp-header>
        <div class="doc-title wuli-hairline__bottom">vue-photo-preview</div>
        <div class="wuli-panel__title">图片预览</div>
        <div class="wuli-panel wuli-panel__bd">
            <div class="wuli-gallery">
                <img class="wuli-gallery__img" 
                    v-for="(item, index) of mockImgs" 
                    preview="0" 
                    :key="index"
                    :src="item.src" 
                    :preview-text="item.title">
            </div>
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
    methods: {

    },
}
</script>

<style lang="less" scoped>
.wuli-gallery {
    position: relative;
    min-height: 170px;
    width: 100%;
    &__img {
        padding: 2px 4px;
        display: inline-block;
        width: 25%;
        height: 79px;
        object-fit: cover;
    }
}
</style>


