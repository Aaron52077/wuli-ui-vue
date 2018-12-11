<template>
    <div class="container wuli-page">
        <wp-header title="BUTTON" fixed>
            <template slot="left">
                <wp-icon iconClass="back" className="wuli-header__hd" @click.native="$router.go(-1)"></wp-icon>
            </template>
            <template slot="right">
                <wp-icon iconClass="category" className="wuli-header__ft"></wp-icon>
            </template>
        </wp-header>
        <div class="doc-title wuli-hairline__bottom">BUTTON</div>
        <div class="doc-description">按钮</div>
        <div class="wuli-panel__title">普通按钮</div>
        <div class="wuli-panel">
            <div class="wuli-btns">
                <wp-button type="normal" block @click="clickHandle">默认按钮</wp-button>
                <wp-button type="primary" block>主要按钮</wp-button>
                <wp-button type="success" block>成功按钮</wp-button>
                <wp-button type="info" block>信息按钮</wp-button>
                <wp-button type="danger" block>危险按钮</wp-button>
                <wp-button type="warn" block>警告按钮</wp-button>
            </div>
        </div>

        <div class="wuli-panel__title">大号按钮，没有边框线及圆角</div>
        <div class="wuli-panel">
            <wp-button type="normal" block size="large">默认按钮</wp-button>
            <wp-button type="primary" block size="large" >主要按钮</wp-button>
            <wp-button type="warn" block size="large">警告按钮</wp-button>
            <wp-button type="danger" block size="large">危险按钮</wp-button>
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
                <wp-button type="normal" block loading>默认按钮</wp-button>
                <wp-button type="primary" block loading>主要按钮</wp-button>
                <wp-button type="danger" block loading>危险按钮</wp-button>
                <wp-button type="warn" block loading>警告按钮</wp-button>
            </div>
        </div>

        <div class="wuli-panel__title">Disabled</div>
        <div class="wuli-panel">
            <div class="wuli-btns">
                <wp-button type="normal" block disabled>默认按钮</wp-button>
                <wp-button type="primary" block disabled>默认按钮</wp-button>
                <wp-button type="danger" block disabled>默认按钮</wp-button>
                <wp-button type="warn" block disabled>默认按钮</wp-button>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            
        }
    },
    methods: {
        clickHandle(e) {
            this.$emit('click', e)
        }
    }
}
</script>
