<template>
    <div class="container wuli-page">
        <wp-header title="vue-qart" fixed>
            <template slot="left">
                <wp-icon iconClass="back" className="wuli-header__hd" @click.native="$router.go(-1)"></wp-icon>
            </template>
            <template slot="right">
                <wp-icon iconClass="category" className="wuli-header__ft"></wp-icon>
            </template>
        </wp-header>
        <div class="doc-title wuli-hairline__bottom">vue-qart</div>
        <div class="wuli-panel__title">生成动态二维码</div>
        <div class="wuli-panel wuli-panel__bd">
            <vue-qart :config="config" :download="config.button"></vue-qart>
        </div>
    </div>
</template>

<script>
import VueQart from 'vue-qart'
export default {
    data() {
        return {
            config: {
                value: 'https://aaron52077.github.io/wuli-ui-vue/#/',
                imagePath: require('@/assets/images/img-user.jpg'),
                filter: 'color',
                button: {
                    text: '下载二维码',
                    visible: true,
                    style: 'display: block; width: 195px; text-align: center',
                    type: 'png',
                    filename: 'qrcode'
                }
            }
        }
    },
    methods: {

    },
    components: { VueQart }
}
</script>

<style lang="less" scoped>

</style>


