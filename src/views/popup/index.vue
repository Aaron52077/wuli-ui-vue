<template>
    <div class="container wuli-page">
        <wp-header title="POPUP" fixed>
            <template slot="left">
                <wp-icon iconClass="back" className="wuli-header__hd" @click.native="$router.go(-1)"></wp-icon>
            </template>
        </wp-header>
        <div class="doc-title wuli-hairline__bottom">POPUP</div>
        <div class="doc-description">弹出层</div>
        <div class="wuli-panel__title">位置</div>
        <div class="wuli-panel wuli-panel__bd">
            <wp-button type="normal" block @click="togglePopup">默认弹出层</wp-button>
            <wp-button type="primary" block @click="toggleTopPopup">顶部弹出</wp-button>
            <wp-button type="success" block @click="toggleBottomPopup">底部弹出</wp-button>
            <wp-button type="info" block @click="toggleLeftPopup">左边弹出</wp-button>
            <wp-button type="warn" block @click="toggleRightPopup">右边弹出</wp-button>
        </div>

        <wp-popup v-model="popupVisible" :closeOnClickModal="false">
            <wp-button type="primary" size="large" @click="togglePopup">关闭按钮</wp-button>
        </wp-popup>
        <wp-popup v-model="leftPopupVisible" position="left">
            <wp-button type="primary" size="large" @click="toggleLeftPopup">关闭按钮</wp-button>
        </wp-popup>
        <wp-popup v-model="rightPopupVisible" position="right">
            <wp-button type="primary" size="large" @click="toggleRightPopup">关闭按钮</wp-button>
        </wp-popup>
        <wp-popup v-model="bottomPopupVisible" position="bottom">
            <wp-button type="primary" size="large" @click="toggleBottomPopup">关闭按钮</wp-button>
        </wp-popup>
        <wp-popup v-model="topPopupVisible" position="top">
            <wp-button type="primary" size="large" @click="toggleTopPopup">关闭按钮</wp-button>
        </wp-popup>
    </div>
</template>

<script>
export default {
    data() {
        return {
            popupVisible: false,
            leftPopupVisible: false,
            rightPopupVisible: false,
            topPopupVisible: false,
            bottomPopupVisible: false
        }
    },
    methods: {
        togglePopup() {
            this.popupVisible = !this.popupVisible
        },
        toggleLeftPopup() {
            this.leftPopupVisible = !this.leftPopupVisible
        },
        toggleRightPopup() {
            this.rightPopupVisible = !this.rightPopupVisible
        },
        toggleBottomPopup() {
            this.bottomPopupVisible = !this.bottomPopupVisible
        },
        toggleTopPopup() {
            this.topPopupVisible = !this.topPopupVisible
        }
    }
}
</script>
