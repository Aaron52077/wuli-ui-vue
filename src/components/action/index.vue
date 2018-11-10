<template>
    <div class="wuli-actionsheet" :class="[visible ? 'wuli-actionsheet__show' : '']">
        <div class="wuli-actionsheet__mask"></div>
        <div class="wuli-actionsheet__container">
            <solt></solt>
            <!-- 关闭按钮 -->
            <div class="wuli-actionsheet__footer">
                <button class="wuli-actionsheet__btn wuli-btn" @cilik="close">关闭</button>
            </div>
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
 * @param {string} [classify] - 自定义样式
 * @example
 *  <wp-popup v-model="visible"></wp-popup>
 */

export default {
    props: {
        closeOnClickModal: Boolean,
        value: Boolean
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
    }
}
</script>

<style lang="less" scoped>

</style>

