<template>
    <div class="wuli-tag" 
        :class="[
            type ? 'wuli-tag__' + type : '',
            border ? 'wuli-tag__border--' + border : '',
            size ? 'wuli-tag__size--' + size : '',
            {
                'is-round': round,
                'is-edit': closable
            }
        ]"
        @click.stop="click">
        <slot></slot>
        <wp-icon iconClass="wrong" v-if="closable"></wp-icon>
        <slot name="right">  
            <div class="wuli-tag__icon" @click="handle"></div>
        </slot>
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
        },
        handle(e) {
            this.$emit('click', e)
        }
    }
}
</script>
