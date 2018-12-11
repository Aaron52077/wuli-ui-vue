<template>
    <div class="container wuli-page">
        <wp-header title="BUTTON" fixed>
            <template slot="left">
                <wp-icon iconClass="back" className="wuli-header__hd" @click.native="$router.go(-1)"></wp-icon>
            </template>
            <template slot="right">
                <wp-icon iconClass="help" className="wuli-header__ft"></wp-icon>
            </template>
        </wp-header>
        <div class="doc-title wuli-hairline__bottom">CELL</div>
        <div class="doc-description">单元格</div>
        <div class="wuli-panel">
            <wp-cell title="单行列表" ></wp-cell>
        </div>
        <div class="wuli-panel">
            <wp-cell title="单行列表" value="详细信息"></wp-cell>
        </div>
        <div class="wuli-panel">
            <wp-cell title="单行列表" label="附加描述" value="详细信息"></wp-cell>
        </div>
        <div class="wuli-panel">
            <wp-cell title="单行列表" is-link icon="smile"></wp-cell>
            <wp-cell title="单行列表" is-link value="详细信息"></wp-cell>
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
        tap() {
            
        }
    }
}
</script>
