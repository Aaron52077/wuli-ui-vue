<template>
    <div class="container wuli-page">
        <wp-header title="ACTIONSHEET" fixed>
            <template slot="left">
                <wp-icon iconClass="back" className="wuli-header__hd" @click.native="$router.go(-1)"></wp-icon>
            </template>
        </wp-header>
        <div class="doc-title wuli-hairline__bottom">ACTIONSHEET</div>
        <div class="doc-description">行动按钮</div>
        <div class="wuli-panel__title">上拉菜单</div>
        <div class="wuli-panel">
            <div class="wuli-btns">
                <wp-button type="normal" @click="togglePopup">Actionsheet</wp-button>
            </div>
        </div>

        <wp-action v-model="popupVisible">
            <wp-button type="primary" size="large" @click="togglePopup">关闭按钮</wp-button>
        </wp-action>
    </div>
</template>

<script>

export default {
    data() {
        return {
            popupVisible: false
        }
    },
    methods: {
        togglePopup() {
            this.popupVisible = !this.popupVisible
        }
    }
}
</script>
