<template>
    <div class="container">
        <div class="doc-title wuli-hairline__bottom">POPUP</div>
        <div class="doc-description">弹出层</div>
        <div class="wuli-panel__title">位置</div>
        <div class="wuli-panel">
            <div class="wuli-btns">
                <wp-button type="normal" @click="togglePopup">默认弹出层</wp-button>
                <wp-button type="primary" @click="toggleTopPopup">顶部弹出</wp-button>
                <wp-button type="success" @click="toggleBottomPopup">底部弹出</wp-button>
                <wp-button type="info" @click="toggleLeftPopup">左边弹出</wp-button>
                <wp-button type="warn" @click="toggleRightPopup">右边弹出</wp-button>
            </div>
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
import wpPopup from '@/components/popup'
import wpButton from '@/components/button'

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
    onShow() {
       
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
    },
    components: { wpPopup, wpButton }
}
</script>
