<template>
    <div class="container">
        <div class="doc-title wuli-hairline__bottom">TAG</div>
        <div class="doc-description">标签</div>
        <div class="wuli-panel__title">普通标签</div>
        <div class="wuli-panel">
            <wp-tag>标签一</wp-tag>
            <wp-tag type="success">标签二</wp-tag>
            <wp-tag type="info">标签三</wp-tag>
            <wp-tag type="warning">标签四</wp-tag>
            <wp-tag type="danger">标签五</wp-tag>
            <wp-tag type="primary">标签六</wp-tag>
            <wp-tag color="#ff0000">自定义颜色(十六进制)</wp-tag>
            <wp-tag color="rgba(145,213,255,.9)">自定义颜色(rgba)</wp-tag>
        </div>

        <div class="wuli-panel__title">圆角标签</div>
        <div class="wuli-panel">
            <wp-tag type="danger" round>标签一</wp-tag>
            <wp-tag type="primary" round>标签二</wp-tag>
        </div>

        <div class="wuli-panel__title">有边框标签</div>
        <div class="wuli-panel">
            <wp-tag border="danger">标签一</wp-tag>
            <wp-tag border="primary">标签二</wp-tag>
            <wp-tag border="success">标签三</wp-tag>
            <wp-tag border="warning">标签四</wp-tag>
            <wp-tag border="info">标签五</wp-tag>
        </div>

        <div class="wuli-panel__title">可删除标签</div>
        <div class="wuli-panel">
            <wp-tag :border="p.type" v-for="(p, index) of tagsList" :key="index" closable @click="delHandle(index)">标签</wp-tag>
        </div>

        <div class="wuli-panel__title">标签大小</div>
        <div class="wuli-panel">
            <wp-tag type="primary" size="medium">中等标签</wp-tag>
            <wp-tag type="primary" size>默认标签</wp-tag>
            <wp-tag type="primary" size="small">小型标签</wp-tag>
        </div>
    </div>
</template>

<script>
import wpTag from "@/components/tag"

export default {
    data() {
        return {
            tagsList: [
                {
                    type: 'danger'
                },
                {
                    type: 'primary'
                },
                {
                    type: 'success'
                },
                {
                    type: 'warning'
                },
                {
                    type: 'info'
                }
            ]
        }
    },
    methods: {
        delHandle(idx){
            this.tagsList = this.tagsList.filter((item, index) => index !== idx)
        }
    },
    components: {
        wpTag
    }
}
</script>


