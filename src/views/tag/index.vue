<template>
    <div class="container wuli-page">
        <wp-header title="TAG" fixed>
            <template slot="left">
                <wp-icon iconClass="back" className="wuli-header__hd" @click.native="$router.go(-1)"></wp-icon>
            </template>
        </wp-header>
        <div class="doc-title wuli-hairline__bottom">TAG</div>
        <div class="doc-description">标签</div>
        <div class="wuli-panel__title">普通标签</div>
        <div class="wuli-panel wuli-panel__bd">
            <wp-tag>标签一</wp-tag>
            <wp-tag type="success">标签二</wp-tag>
            <wp-tag type="info">标签三</wp-tag>
            <wp-tag type="warning">标签四</wp-tag>
            <wp-tag type="danger">标签五</wp-tag>
            <wp-tag type="primary">标签六</wp-tag>
        </div>

        <div class="wuli-panel__title">圆角标签</div>
        <div class="wuli-panel wuli-panel__bd">
            <wp-tag type="danger" round>标签一</wp-tag>
            <wp-tag type="primary" round>标签二</wp-tag>
        </div>

        <div class="wuli-panel__title">有边框标签</div>
        <div class="wuli-panel wuli-panel__bd">
            <wp-tag border="danger">标签一</wp-tag>
            <wp-tag border="primary">标签二</wp-tag>
            <wp-tag border="success">标签三</wp-tag>
            <wp-tag border="warning">标签四</wp-tag>
            <wp-tag border="info">标签五</wp-tag>
        </div>

        <div class="wuli-panel__title">可编辑标签</div>
        <div class="wuli-panel wuli-panel__bd">
            <wp-tag round :border="p.type" v-for="(p, index) of tagsList" :key="index" closable @click="delHandle(index)">标签</wp-tag>
        </div>
        <div class="wuli-panel wuli-panel__bd">
            <wp-tag :border="p.type" v-for="(p, index) of tagsList" :key="index">
                标签{{index + 1}}
                <template slot="right">
                    <wp-icon iconClass="moreunfold" @click.native="editHandle(index)"></wp-icon>
                </template>
            </wp-tag>
        </div>

        <div class="wuli-panel__title">标签大小</div>
        <div class="wuli-panel wuli-panel__bd">
            <wp-tag type="primary" size="medium">中等标签</wp-tag>
            <wp-tag type="primary" size>默认标签</wp-tag>
            <wp-tag type="primary" size="small">小型标签</wp-tag>
        </div>
    </div>
</template>

<script>
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
        },
        editHandle(idx) {
            console.log(`点击了[wp-tag]标签${idx + 1}的操作`)
        }
    }
}
</script>


