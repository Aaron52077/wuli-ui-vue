<template>
    <div class="wuli-check" @change="$emit('change', currentValue)" :class="{ 'is-limit': max <= currentValue.length }">
        <div class="wuli-check__item"  
            v-for="(option, index) in options"
            :key="index">
            <label class="wuli-check__checkbox--label" :class="[align === 'right' ? '' : 'is-left']" slot="title">
                <span
                    :class="[align === 'right' ? 'is-right' : 'is-left']"
                    class="wuli-check__checkbox">
                    <input
                        class="wuli-check__checkbox--input"
                        type="checkbox"
                        v-model="currentValue"
                        :disabled="option.disabled"
                        :value="option.value || option" />
                    <span class="wuli-check__checkbox--core" :class="[type ? 'is-' + type : '']"></span>
                </span>
                <div class="wuli-check__title" v-text="option.title || option"></div>
                <div class="wuli-check__desc" v-if="option.description">{{option.description}}</div>
            </label>
        </div>
    </div>
</template>

<script>
/**
 * wp-checklist
 * @param {(string[]|object[])} options - 选项数组，可以传入 [{label: 'label', value: 'value', disabled: true}] 或者 ['ab', 'cd', 'ef']
 * @param {string[]} value - 选中值的数组
 * @param {string} title - 标题
 * @param {number} [max] - 最多可选的个数
 * @param {string} [align=left] - checkbox 对齐位置，`left`, `right`
 */
export default {
    name: 'wp-checklist',
    props: {
        max: Number,
        title: String,
        align: String,
        options: {
            type: Array,
            required: true
        },
        type: String,
        value: Array 
    },
    data() {
        return {
            currentValue: this.value
        }
    },
    computed: {
        limit() {
            return this.max < this.currentValue.length
        }
    },
    watch: {
        value(val) {
            this.currentValue = val
        },
        currentValue(val) {
            if (this.limit) val.pop()
            this.$emit('input', val)
        }
    }
}
</script>
