<template>
    <div class="wuli-tag" 
        :class="[
            type ? 'wuli-tag__' + type : '',
            color ? 'wuli-tag__custom' : '',
            round ? 'wuli-tag__round':'',
            border ? 'wuli-tag__border--' + border: '',
            size?'wuli-tag__size--'+size:'']" 
        :style="[color ? 'background-color:' + color : '' ]"
        @click="click">
        <slot></slot>
        <i class="wuliFonts icon-cha-copy wuli-tag__icon" v-if="closable"></i>
    </div>
</template>

<script>
export default {
    props: {
        type: String,
        color: String,
        round: Boolean,
        border: String,
        closable: Boolean,
        size: String
    },
    data() {
        return {

        }
    },
    methods: {
        click(e) {
            this.$emit('click', e)
        }
    }
}
</script>
