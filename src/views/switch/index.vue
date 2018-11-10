<template>
    <div class="container">
        <div class="doc-title wuli-hairline__bottom">Switch</div>
        <div class="doc-description">Switch 开关</div>
        <div class="wuli-panel__title">小程序组件</div>
        <div class="wuli-panel">
            <div class="wuli-btns">
                <switch checked @change="switch1Change" />
                <switch checked color="#409EFF" />
                <switch checked color="#f56c6c" />
                <switch checked color="#e6a23c" />
                <switch @change="switch2Change" />
            </div>
        </div>
        <div class="wuli-panel__title">switch组件</div>
        <div class="wuli-panel">
            <div class="wuli-btns">
                <wp-switch checked @change="getValue" />
                <wp-switch />
            </div>
        </div>
        <div class="wuli-panel__title">带文字提示的(text=1时显示文字为on和off；text=2是显示开和关)</div>
        <div class="wuli-panel">
            <div class="wuli-btns">
                <wp-switch />
                <wp-switch checked text='1' />
                <wp-switch checked text='2' />
            </div>
        </div>
    </div>
</template>

<script>
import wpSwitch from "@/components/switch"

export default {
    data() {
        return {
            
        }
    },
    methods: {
        switch1Change(e) {
            console.log("switch1 发生 change 事件，携带值为", e.mp.detail.value)
        },
        switch2Change(e) {
            console.log("switch2 发生 change 事件，携带值为", e.mp.detail.value)
        },
        getValue(val) {
            console.log('改变的值', val)
        }
    },
    components: {
        wpSwitch
    }
}
</script>

