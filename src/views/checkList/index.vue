<template>
    <div class="container wuli-page">
        <wp-header title="checkList" fixed>
            <template slot="left">
                <wp-icon iconClass="back" className="wuli-header__hd" @click.native="$router.go(-1)"></wp-icon>
            </template>
            <template slot="right">
                <wp-icon iconClass="category" className="wuli-header__ft"></wp-icon>
            </template>
        </wp-header>
        <div class="doc-title wuli-hairline__bottom">checkList</div>
        <div class="wuli-panel__title">复选框1</div>
        <div class="wuli-panel">
            <wp-checklist
                title="复选框列表1"
                v-model="value1"
                :options="option1">
            </wp-checklist>
            <wp-cell title="选择值" :value="value1"></wp-cell>
        </div>
        <div class="wuli-panel__title">复选框2</div>
        <div class="wuli-panel">
            <wp-checklist
                title="复选框列表2"
                v-model="value2"
                :max="3"
                align="right"
                type="success"
                :options="option2">
            </wp-checklist>
            <wp-cell title="选择值" :value="value2"></wp-cell>
        </div>
        <div class="wuli-panel__title">复选框3</div>
        <div class="wuli-panel">
            <wp-checklist
                title="复选框列表3"
                v-model="value3"
                align="right"
                type="success"
                :options="option3">
            </wp-checklist>
            <wp-cell title="选择值" :value="value3"></wp-cell>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            option1: ['选项A', '选项B', '选项C'],
            option2: ['测试1', '测试2', '测试3', '测试4'],
            option3: [
                {
                    title: '被禁用',
                    value: '选中禁用的值',
                    disabled: true
                },
                {
                    title: '选项A',
                    value: '值A'
                },
                {
                    title: '选项B',
                    value: '值B'
                }
            ],
            value1: [],
            value2: [],
            value3: [],
        }
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


