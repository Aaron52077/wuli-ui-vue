<template>
    <div class="container">
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
import wpAction from '@/components/action'
import wpButton from '@/components/button'

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
    },
    components: { wpAction, wpButton }
}
</script>
