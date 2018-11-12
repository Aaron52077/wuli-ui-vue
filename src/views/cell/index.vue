<template>
    <div class="container">
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
import wpCell from '@/components/cell'

export default {
    data() {
        return {
            
        }
    },
    methods: {
        tap() {
            
        }
    },
    components: {
        wpCell
    }
}
</script>
