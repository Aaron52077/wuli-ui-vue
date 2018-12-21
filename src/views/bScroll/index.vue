<template>
    <div class="container">
        <wp-header title="better-scroll" fixed>
            <template slot="left">
                <wp-icon iconClass="back" className="wuli-header__hd" @click.native="$router.go(-1)"></wp-icon>
            </template>
            <template slot="right">
                <wp-icon iconClass="category" className="wuli-header__ft"></wp-icon>
            </template>
        </wp-header>
        <div class="wuli-aside wuli-page">
            <div class="wuli-aside__menus" ref="menuWrapper">
                <div class="menu__item" 
                    v-for="(item,index) in config" 
                    :class="tabIndex == index ? 'menu__item-active' : ''" 
                    @click="changeTab(index, $event)" :key="index">
                    <span>{{item.name}}</span>
                </div>
            </div>
            <div class="wuli-aside__bd" ref="bodyWrapper">
                <div>
                    <div class="wuli-aside__wrapper" v-for="(item, i) in config" :key="i">
                        <div class="wuli-aside__menu">{{item.name}}</div>
                        <wuli-checklist
                            align="right"
                            v-model="checkValue"
                            :options="item.list"
                            :title="item.name"
                            @change="checkHandle">
                        </wuli-checklist> 
                    </div> 
                </div>  
            </div>
            <div class="wuli-aside__ft">
                <div class="wuli-aside__ft--lt">
                    <div class="lt-icon">
                        <wp-icon iconClass="component" className="icon"></wp-icon>
                        <div class="lt-icon__point" v-show="checkValue.length > 0">{{checkValue.length}}</div>
                    </div>
                    <div class="lt-info">
                        <div class="lt-info__title">滑动类</div>
                        <div class="lt-info__desc">楼层导航实例</div>
                    </div>
                </div>
                <div class="wuli-aside__ft--rt">确定添加</div>
            </div>
        </div>   
    </div>
</template>

<script>
import BScroll from "better-scroll"
import { getScroll } from '@/api'
import wuliChecklist from "./checklist"

export default {
    name: "resetChoose",
    data() {
        return {
            bodyScrollY: 0,
            listHeight: [],
            checkValue: [],
            config: []
        }
    },
    mounted() {
        getScroll().then(res => {
            this.config = res.data
            this.$nextTick(() => {
                this.init(); // 初始化scroll
                this.calcHeight(); // 初始化列表高度列表
            });
        })
    },
    methods: {
        init() {
            if(!this.menuWrapper && !this.bodyScroll){
                this.menuWrapper = new BScroll(this.$refs.menuWrapper, { click: true });
                this.bodyScroll = new BScroll(this.$refs.bodyWrapper, {
                    click: true,
                    probeType: 3
                });
                // 监控滚动事件
                this.bodyScroll.on("scroll", pos => {
                    this.bodyScrollY = Math.abs(Math.round(pos.y));
                });
            }else {
                this.menuWrapper.refresh()
                this.bodyScroll.refresh()
            }
        },
        calcHeight() {
            let bodyList = this.$refs.bodyWrapper.querySelectorAll(".wuli-aside__wrapper");
            let height = 0;
            this.listHeight.push(height);
            for(let i = 0, l = bodyList.length; i < l; i++) {
                let item = bodyList[i];
                height += item.clientHeight;
                this.listHeight.push(height);
            }
        },
        changeTab(i, event) {
            this.$store.commit("SET_TABINDEX", i, { root: true });
            if(!event._constructed) return;
            this.bodyScroll.scrollTo(0, -this.listHeight[this.tabIndex], 300);
        },
        checkHandle(data) {
            this.checkValue = data
        },
    },
    computed: {
        tabIndex() {
            return this.$store.state.app.tabIndex
        },
        currentIndex() {
            let list = this.listHeight, len = list.length;

            for(let i = 0; i < len; i++) {
                let topHeight = list[i];
                let bottomHeight = list[i + 1];
                if(!bottomHeight || (this.bodyScrollY >= topHeight && this.bodyScrollY < bottomHeight)) {
                    return i
                }
            }
            return 0
        }
    },
  components: { wuliChecklist },
    watch: {
        checkValue: {
            handler: function(val, oldVal) {
                
            },
            deep: true
        },
        currentIndex(val) {
            this.$store.state.app.tabIndex = val
        }
    }
}
</script>

<style lang="less" scoped>
@import '~@/assets/styles/packages/_scroll.less';
</style>

