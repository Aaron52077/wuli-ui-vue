<template>
    <div class="wuli-tabbar">
       <div class="wuli-tabbar__bd">
           <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: ['value']
}
</script>

<style lang="less">
.wuli-tabbar { 
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    overflow: hidden;
    height: 52px;
    border-top: 1px solid #e4e4e4;
    z-index: 999;
    &__bd {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        height: 52px;
        background: #fff;
    }
}
</style>