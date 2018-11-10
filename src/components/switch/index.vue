<template>
    <div class="wuli-switch" 
        :class="[checked ?'wuli-switch__on':'wuli-switch__off']" 
        @click="click">
        <div class="wuli-switch__word" v-if="type">{{ type == 1 ? 'on' : '开' }}</div>
        <div class="wuli-switch__circle"></div>
        <div class="wuli-switch__bg"><span v-if="type">{{ type == 1 ? 'off' : '关' }}</span></div>
    </div>
</template>

<script>
export default {
    props:{
        checked: Boolean,
        type: Number
    },
    data() {
        return {

        }
    },
    methods: {
        click() {
            this.checked = !this.checked
            this.$emit('change',this.checked)
        }
    }
}
</script>

