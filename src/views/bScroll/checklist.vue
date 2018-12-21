<template>
    <div class="wuli-checklist" @change="$emit('change', currentValue)">
        <div class="wuli-aside__item"  
            v-for="(option, index) in options"
            :key="index">
            <label class="wuli-aside__checkbox--label" slot="title">
                <span
                    :class="{'is-right': align === 'right'}"
                    class="wuli-aside__checkbox">
                    <input
                        class="wuli-aside__checkbox--input"
                        type="checkbox"
                        v-model="currentValue"
                        :value="option.value || option" />
                    <span class="wuli-aside__checkbox--core"></span>
                </span>
                <div class="wuli-aside__title">{{option.title}}</div>
                <div class="wuli-aside__desc">{{option.description}}</div>
            </label>
        </div>
    </div>
</template>

<script>
/**
 * wuli-checklist
 * @param {(string[]|object[])} options - 选项数组，可以传入 [{label: 'label', value: 'value', disabled: true}] 或者 ['ab', 'cd', 'ef']
 * @param {string[]} value - 选中值的数组
 * @param {string} title - 标题
 * @param {number} [max] - 最多可选的个数
 * @param {string} [align=left] - checkbox 对齐位置，`left`, `right`
 */
export default {
    name: 'wuli-checklist',
    props: {
        max: Number,
        title: String,
        align: String,
        options: {
            type: Array,
            required: true
        },
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
};
</script>

<style lang="less" scoped>
.wuli-aside {
    &__item {
        position: relative;
        padding: 10px 15px;
        display: flex;
        align-items: center;
        height: 100px;
        &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 15px;
            width: 200%;
            height: 200%;
            transform: scale(0.5);
            transform-origin: 0 0;
            pointer-events: none;
            box-sizing: border-box;
            border: 0 solid #ddd;
            border-bottom-width: 1px;
        }
    }
    &__title {
        margin-bottom: 5px;
        font-size: 15px;
        color: #000;
    }
    &__desc {
        padding-right: 40px;
        line-height: 1.6;
        font-size: 12px;
        color: #989898;
    }
    &__checkbox {
        &.is-right {
            position: absolute;
            top: 50%;
            right: 15px;
            width: 14px;
            height: 14px;
            transform: translateY(-50%);
        }
        &--label {
            width: 100%;
            cursor: pointer;
        }
        &--input {
            opacity: 0;
            position: absolute;
            top: 50%;
            right: 15px;
            margin: 0;
            width: 0;
            height: 0;
            transform: translateY(-50%);
            outline: none;
            z-index: -1;
            &:checked {
                & + .wuli-aside__checkbox--core {
                    background-color: #eb3546;
                    border-color: #eb3546;
                    &::after {
                        transform: rotate(45deg) scaleY(1);
                    }
                }
            }
        }
        &--core {
            display: inline-block;
            position: relative;
            width: 16px;
            height: 16px;
            background-color: #fff;
            border: 1px solid #dcdfe6;
            border-radius: 2px;
            transition: border-color .25s cubic-bezier(.71,-.46,.29,1.46),background-color .25s cubic-bezier(.71,-.46,.29,1.46);
            z-index: 1;
            &::after {
                content: "";
                position: absolute;
                border: 1px solid #fff;
                border-left: 0;
                border-top: 0;
                height: 8px;
                left: 5px;
                top: 2px;
                transform: rotate(45deg) scaleY(0);
                width: 4px;
                transition: transform .15s ease-in .05s;
                transform-origin: center;
            }
        }
    }
}
</style>