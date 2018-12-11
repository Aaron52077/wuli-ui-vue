<template>
    <div class="wuli-switch" 
        :class="[ currentValue ? 'wuli-switch__on' : 'wuli-switch__off' ]" 
        @click="$emit('change', currentValue)">
        <div class="wuli-switch__circle"></div>
        <div class="wuli-switch__bg"></div>
    </div>
</template>

<script>
export default {
    name: 'wp-switch',
    props:{
        checked: Boolean,
        disabled: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {

        }
    },
    computed: {
        currentValue: {
            get() {
                return this.checked
            },
            set(val) {
                this.$emit('input', val)
            }
        }
    }
}
</script>

