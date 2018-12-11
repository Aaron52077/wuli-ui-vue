<template>
    <div class="container wuli-page">
        <wp-header title="vue-awesome-swiper" fixed>
            <template slot="left">
                <wp-icon iconClass="back" className="wuli-header__hd" @click.native="$router.go(-1)"></wp-icon>
            </template>
            <template slot="right">
                <wp-icon iconClass="category" className="wuli-header__ft"></wp-icon>
            </template>
        </wp-header>
        <div class="doc-title wuli-hairline__bottom">vue-awesome-swiper</div>
        <div class="wuli-panel__title">Swiper滑动特效1 多行Slides分布</div>
        <div class="wuli-panel wuli-panel__bd">
            <!-- swiper -->
            <swiper :options="swiperOption1" class="wuli-swiper">
                <swiper-slide v-for="(item,index) in mockImgs" :key="index">
                    <img class="wuli-swiper__img" :src="item.src">
                    <div class="wuli-swiper__desc wuli-ellipsis">{{item.title}}</div>
                </swiper-slide>
            </swiper>
        </div>
        <div class="wuli-panel__title">Swiper滑动特效2 Slides居中+自适应</div>
        <div class="wuli-panel wuli-panel__bd">
            <!-- swiper -->
            <swiper :options="swiperOption2">
                <swiper-slide v-for="(item,index) in mockImgs" :key="index">
                    <img class="wuli-swiper__pic" :src="item.src">
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
        <div class="wuli-panel__title">3D Cube Effect 3D方块效果</div>
        <div class="wuli-panel wuli-panel__bd">
            <!-- swiper -->
            <swiper :options="swiperOption3">
                <swiper-slide v-for="(item,index) in mockImgs" :key="index">
                    <img class="wuli-swiper__cube" :src="item.src">
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
        <div class="wuli-panel__title">3D Coverflow Effect 3D滚动切换</div>
        <div class="wuli-panel wuli-panel__bd">
            <!-- swiper -->
            <swiper :options="swiperOption4" class="wuli-3d">
                <swiper-slide v-for="(item,index) in mockImgs" :key="index">
                    <img class="wuli-swiper__pic" :src="item.src">
                </swiper-slide>
            </swiper>
        </div>
        <div class="wuli-panel__title">3D Flip Effect 3D翻转切换</div>
        <div class="wuli-panel wuli-panel__bd">
            <!-- swiper -->
            <swiper :options="swiperOption5" class="wuli-3d">
                <swiper-slide v-for="(item,index) in mockImgs" :key="index">
                    <img class="wuli-swiper__pic" :src="item.src">
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
        <div class="wuli-panel__title">Loop 缩略图控制循环</div>
        <div class="wuli-panel wuli-panel__bd wuli-loop">
            <!-- swiper1 -->
            <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop">
                <swiper-slide v-for="(item,index) in mockImgs" :key="index">
                    <img class="gallery-top" :src="item.src">
                </swiper-slide>
                <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
                <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
            </swiper>
            <!-- swiper2 -->
            <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs">
                <swiper-slide v-for="(item,index) in mockImgs" :key="index">
                    <img class="gallery-thumbs" :src="item.src">
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
import { getImages } from '@/api'

export default {
    data() {
        return {
            mockImgs: [],
            swiperOption1: {
                slidesPerView: 2,
                slidesPerColumn: 2,
                spaceBetween: 10
            },
            swiperOption2: {
                spaceBetween: 10,
                slidesPerView: 'auto',
                centeredSlides: true,
                freeMode: true,
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                }
            },
            swiperOption3: {
                effect: 'cube',
                grabCursor: true,
                centeredSlides: true,
                cubeEffect: {
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 20,
                    shadowScale: 0.94
                },
                pagination: {
                    el: '.swiper-pagination'
                }
            },
            swiperOption4: {
                effect: 'coverflow',
                grabCursor: true,
                centeredSlides: true,
                slidesPerView: 'auto',
                coverflowEffect: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows : true
                }
            },
            swiperOption5: {
                effect: 'flip',
                grabCursor: true,
                pagination: {
                    el: '.swiper-pagination'
                }
            },
            swiperOptionTop: {
                spaceBetween: 10,
                loop: true,
                loopedSlides: 5, //looped slides should be the same
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
            },
            swiperOptionThumbs: {
                spaceBetween: 5,
                slidesPerView: 4,
                touchRatio: 0.2,
                loop: true,
                loopedSlides: 5, //looped slides should be the same
                slideToClickedSlide: true,
            }
        }
    },
    created() {
        getImages().then(res => {
            this.mockImgs = res.data.pic
        })
    },
    mounted() {
        this.$nextTick(() => {
            const swiperTop = this.$refs.swiperTop.swiper
            const swiperThumbs = this.$refs.swiperThumbs.swiper
            swiperTop.controller.control = swiperThumbs
            swiperThumbs.controller.control = swiperTop
        })
    },
    methods: {

    },
}
</script>

<style lang="less" scoped>
.wuli-swiper {
    position: relative;
    min-height: 170px;
    width: 100%;
    &__img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    &__desc {
        padding: 0 10px;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 2px;
        height: 24px;
        line-height: 24px;
        text-align: center;
        font-size: 12px;
        color: #fff;
        background: rgba(0, 0, 0, .2);
    }
    &__pic {
        width: 100%;
        height: 150px;
        object-fit: cover;
    }
    &__cube {
        width: 100%;
        height: 350px;
        object-fit: cover;
    }
}
.wuli-3d {
    width: 100%;
    height: 150px;
    .swiper-slide {
        background-position: center;
        background-size: cover;
        width: 100%;
        height: 150px;
    }
}
.wuli-loop {
    .gallery-top {
        height: 80%!important;
        width: 100%;
    }
    .gallery-thumbs {
        width: 100%;
        height: 60px;
        padding: 5px 0;
        object-fit: cover;
        .swiper-slide {
            width: 25%;
            height: 100%;
            opacity: 0.4;
            &-active {
                opacity: 1;
            }
        }
    }
}
</style>


