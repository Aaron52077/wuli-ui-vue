<template>
    <div class="container">
        <div class="doc-title wuli-hairline__bottom">BUTTON</div>
        <div class="doc-description">按钮</div>
        <div class="wuli-panel__title">普通按钮</div>
        <div class="wuli-panel">
            <div class="wuli-btns">
                <wp-button type="normal" @click="clickHandle">默认按钮</wp-button>
                <wp-button type="primary">主要按钮</wp-button>
                <wp-button type="success">成功按钮</wp-button>
                <wp-button type="info">信息按钮</wp-button>
                <wp-button type="danger">危险按钮</wp-button>
                <wp-button type="warn">警告按钮</wp-button>
            </div>
        </div>

        <div class="wuli-panel__title">大号按钮，没有边框线及圆角</div>
        <div class="wuli-panel">
            <wp-button type="normal" size="large">默认按钮</wp-button>
            <wp-button type="primary" size="large" >主要按钮</wp-button>
            <wp-button type="warn" size="large">警告按钮</wp-button>
            <wp-button type="danger" size="large">危险按钮</wp-button>
        </div>

        <div class="wuli-panel__title">小号按钮</div>
        <div class="wuli-panel">
            <div class="wuli-btns">
                <wp-button type="normal" size="small">默认按钮</wp-button>
                <wp-button type="primary" size="small" round>主要按钮</wp-button>
            </div>
        </div>

        <div class="wuli-panel__title">迷你按钮</div>
        <div class="wuli-panel">
            <div class="wuli-btns">
                <wp-button type="primary" size="mini">主要按钮</wp-button>
                <wp-button type="info" size="mini">信息按钮</wp-button>
                <wp-button type="warn" size="mini" round>警告按钮</wp-button>
                <wp-button type="danger" size="mini" round>危险按钮</wp-button>
            </div>
        </div>

        <div class="wuli-panel__title">Loading</div>
        <div class="wuli-panel">
            <div class="wuli-btns">
                <wp-button type="normal" loading>默认按钮</wp-button>
                <wp-button type="primary" loading>主要按钮</wp-button>
                <wp-button type="danger" loading>危险按钮</wp-button>
                <wp-button type="warn" loading>警告按钮</wp-button>
            </div>
        </div>

        <div class="wuli-panel__title">Disabled</div>
        <div class="wuli-panel">
            <div class="wuli-btns">
                <wp-button type="normal" disabled>默认按钮</wp-button>
                <wp-button type="primary" disabled>默认按钮</wp-button>
                <wp-button type="danger" disabled>默认按钮</wp-button>
                <wp-button type="warn" disabled>默认按钮</wp-button>
            </div>
        </div>
    </div>
</template>

<script>
import wpButton from '@/components/button'

export default {
    data() {
        return {
            
        }
    },
    onShow() {
       
    },
    methods: {
        clickHandle() {
            
        },
        getuserinfo(e) {

        }
    },
    components: {
        wpButton
    }
}
</script>
