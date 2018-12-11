<template>
    <svg :class="svgClass" aria-hidden="true">
        <use :xlink:href="iconName"></use>
    </svg>
</template>

<script>
/**
 * wp-icon
 * @module components/icon
 * @desc 顶部导航
 * @param {String} [iconClass] - 图标类型及样式
 * @param {string} [className] - 自定义图标样式
 * @example
 */
export default {
    name: 'wp-icon',
    props: {
        iconClass: String,
        className: String
    },
    computed: {
        iconName() {
            return `#wp-${this.iconClass}`
        },
        svgClass() {
            if (this.className) {
                return 'wp-icons ' + this.className
            } else {
                return 'wp-icons'
            }
        }
    }
}
</script>

<style scoped>
.wp-icons {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
}
</style>
