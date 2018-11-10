<template>
    <a class="wuli-tabbar__item" :class="{ 'is-active' : isActive }" @click="$parent.$emit('input', id)">
        <span class="wuli-tabbar__item--icon" v-show="!isActive">
            <slot name="normal"></slot>
        </span>
        <span class="wuli-tabbar__item--icon" v-show="isActive">
            <slot name="active"></slot>
        </span>
        <span class="wuli-tabbar__item--text">
            <slot></slot>
        </span>
    </a>
</template>
<script>
/**
 * wuli-tabbar--item
 * @desc 搭配 tabbar使用
 * @param id - 选中后的返回值，任意类型
 * @param isActive - 根据父组件的value和当前组件的id判断是否为选中状态
 * @param $parent.$emit('input',id) - 触发父组件的自定义事件
 * @param {slot} [normal] - icon-默认图标
 * @param {slot} [active] - icon-选中图标
 * @param {slot} - 文字
 *
 * @example
 * <m-tabbar-item id='tab1'>
 *  <img src="../assets/images/xx_normal.png" alt="" slot="icon-normal"> 
 *  <img src="../assets/images/xx_active.png" alt="" slot="icon-active"> 
 *  <span>首页</span>
 * </m-tabbar-item>
 */
export default {
    props: ['id'],
    computed: {
        isActive() {
            return this.$parent.value === this.id ? true : false
        }
    }
}
</script>

<style lang="less">
.wuli-tabbar__item {
    flex: 1;
    text-align: center;
    &--icon {
        display: block;
        padding-top: 3px;
        img {
            width: 28px;
            height: 28px;
        }
    }
    &--text{
        display: block;
        margin-top: -3px;
        color: #949494;
        font-size: 12px;
    }
    &.is-active{
        .wuli-tabbar__item--text {
            color: #409EFF;
        }
    }
}
</style>