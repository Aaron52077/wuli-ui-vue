<template>
    <div class="container">
        <wp-header title="Switch" fixed>
            <template slot="left">
                <wp-icon iconClass="back" className="wuli-header__hd" @click.native="$router.go(-1)"></wp-icon>
            </template>
        </wp-header>
        <div class="doc-title wuli-hairline__bottom">Switch</div>
        <div class="doc-description">Switch 开关</div>
        <div class="wuli-panel__title">switch组件</div>
        <div class="wuli-panel">
            <div class="wuli-btns">
                <wp-switch v-model="checked" @input="getValue" />
                <wp-switch />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            checked: true
        }
    },
    methods: {
        getValue(val) {
            console.log('改变的值', val)
        }
    }
}
</script>

