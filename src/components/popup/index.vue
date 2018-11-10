<template>
    <div class="wuli-popup" 
        :class="[
            visible ? 'wuli-popup__show' : '',
            position ? 'wuli-popup__' + position : '',
            style ? style : '' ]" @touchmove.stop.prevent>
        <template v-if="modal && closeOnClickModal">
            <div class="wuli-popup__mask" @click.stop="close"></div>
        </template>
        <template v-else>
            <div class="wuli-popup__mask"></div>
        </template>
        <div class="wuli-popup__container">
            <slot></slot>
        </div>
    </div>
</template>

<script>
/**
 * wp-popup
 * @module components/popup
 * @desc 弹出层
 * @param {boolean} [modal] - 遮罩层蒙版
 * @param {string} [position] - 位置
 * @param {boolean} [value-visible] - 是否出现
 * @param {string} [style] - 自定义样式
 * @example
 *  <wp-popup v-model="visible"></wp-popup>
 */
export default {
    props: {
        modal: {
            type: Boolean,
            default: true
        },
        closeOnClickModal: {
            type: Boolean,
            default: true
        },
        position: String,
        value: Boolean,
        style: String
    },
    data() {
        return {
            visible: false
        }
    },
    mounted() {
        if (this.value) {
            this.visible = true
        }
    },
    methods: {
        close() {
            this.visible = false
            this.$emit('update:closed', false)
        }  
    },
    watch: {
        visible(val) {
            this.$emit('closed', val)
        },
        value(val) {
            this.visible = val
        }
    },
}
</script>

<style lang="less" scoped>
@import '~@/assets/styles/common/_var';

.fade-in-linear-enter-active,
.fade-in-linear-leave-active {
    transition: @--fade-linear-transition;
}
.fade-in-linear-enter,
.fade-in-linear-leave,
.fade-in-linear-leave-active {
    opacity: 0;
}
</style>

