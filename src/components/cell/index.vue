<template>
    <div class="wuli-cell" :class="{'wuli-cell__access': isLink}">
        <view class="wuli-cell__hd" v-if="icon">
            <i class="iconfont" :class="icon"></i>
        </view>
        <div class="wuli-cell__bd" @click="clickHandle">
            <slot name="title">
                <div class="wuli-cell__text" v-text="title"></div>
                <div class="wuli-cell__desc" v-if="label" v-text="label"></div>
            </slot>
        </div>
        <div class="wuli-cell__ft" v-if="value || isLink">
            <slot name="right">
                <div v-text="value"></div>
            </slot>
        </div>
    </div>
</template>

<script>
/**
 * wp-cell
 * @module components/cell
 * @desc 单元格
 * @param {string} [title] - 标题
 * @param {string} [icon] - icon
 * @param {string} [label] - 备注信息
 * @param {boolean} [is-link=false] - 可点击的链接
 * @param {string} [value] - 右侧显示文字
 * @param {slot} - 同 value, 会覆盖 value 属性
 * @param {slot} [title] - 同 title, 会覆盖 title 属性
 *
 * @example
 * <wp-cell title="标题文字" is-link value="描述文字"></wp-cell>
 * <wp-cell title="标题文字">
 *   <div slot="value">描述文字啊哈</div>
 * </wp-cell>
 */
export default {
    props: {
        icon: String,
        title: String,
        label: String,
        isLink: Boolean,
        value: String
    },
    methods: {
        clickHandle(e) {
            if (this.isLink) {
                this.$emit('click', e)
            }
        }
    }
}
</script>
