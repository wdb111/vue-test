<template>
    <div class="recommendPage">
        <span>指示器：</span>
        <i-switch v-model="show"></i-switch>
        <span>间隔：</span>
        <InputNumber :min="0" v-model="loopTime"></InputNumber>
        <span>初始索引：</span>
        <InputNumber :min="0" :max="2" v-model="initialSlide"></InputNumber>
        <span>循环播放：</span>
        <i-switch v-model="isLoop"></i-switch>
        <span>纵向滚动：</span>
        <i-switch v-model="isVertical"></i-switch>
        <swiper :options="swiperOption1" ref="mySwiper1">
            <swiper-slide>
                <img src="../../assets/img/1.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
                <img src="../../assets/img/2.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
                <img src="../../assets/img/3.jpg" alt="">
            </swiper-slide>
            <div v-show="show" class="swiper-pagination" slot="pagination">123</div>
        </swiper>
        <swiper :options="swiperOption2" ref="mySwiper2" @slideChangeTransitionStart="slideChangeTransitionEnd">
            <swiper-slide>
                <img src="../../assets/img/1.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
                <img src="../../assets/img/2.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
                <img src="../../assets/img/3.jpg" alt="">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination">
                <span v-for="(item,index) in 3" class="custom-point" :class="{activePoint:current===index}"
                      @click="choosePoint(index)"></span>
            </div>
        </swiper>
        <swiper :options="swiperOption3" ref="mySwiper3">
            <swiper-slide>
                <img src="../../assets/img/1.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
                <img src="../../assets/img/2.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
                <img src="../../assets/img/3.jpg" alt="">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev">
                <span class="prev-icon"> < </span>
            </div>
            <div class="swiper-button-next" slot="button-next">
                <span class="next-icon"> > </span>
            </div>
        </swiper>
        <swiper :options="swiperOption1" ref="mySwiper1" class="right-swiper">
            <swiper-slide>
                <img src="../../assets/img/1.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
                <img src="../../assets/img/2.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
                <img src="../../assets/img/3.jpg" alt="">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <swiper :options="swiperOption2" ref="mySwiper2" @slideChangeTransitionEnd="slideChangeTransitionEnd">
            <swiper-slide>
                <img src="../../assets/img/1.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
                <img src="../../assets/img/2.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
                <img src="../../assets/img/3.jpg" alt="">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination">
                <div class="with-content">
                    <div class="title">这是内容。。。</div>
                    <div class="point-box">
                        <span v-for="(item,index) in 3" class="custom-point" :class="{activePoint1:current===index}"
                              @click="choosePoint(index)"></span>
                    </div>
                </div>
            </div>
        </swiper>
        <swiper :options="swiperOption2" ref="mySwiper2" @slideChangeTransitionEnd="slideChangeTransitionEnd">
            <swiper-slide>
                <img src="../../assets/img/1.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
                <img src="../../assets/img/2.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
                <img src="../../assets/img/3.jpg" alt="">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination">
                <span v-for="(item,index) in 3" class="custom-point-rect" :class="{activePoint2:current===index}"
                      @click="choosePoint(index)"></span>
            </div>
        </swiper>
    </div>
</template>

<script>
// 引入插件
import {swiper, swiperSlide} from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

export default {
    components: {
        swiper,
        swiperSlide
    },
    data () {
        return {
            initialSlid:0,
            isLoop:false,
            isVertical: false,
            loopTime: 1000,
            initialSlide:1000,
            show: true,
            current: 0,
            swiperOption2: {
                loop: true,
                // direction: "vertical",
                autoplay: {
                    delay: 3000,
                    stopOnLastSlide: false,
                    disableOnInteraction: false
                },
                // 显示分页
                pagination: {
                    el: '.swiper-pagination',
                    type: 'custom',
                    clickable: true //允许分页点击跳转
                },
                // 设置点击箭头
                navigation: {
                    nextEl: '.swiper-button-next1',
                    prevEl: '.swiper-button-prev'
                }
            },
            swiperOption3: {
                loop: true,
                autoplay: {
                    delay: 3000,
                    stopOnLastSlide: false,
                    disableOnInteraction: false
                },
                // 显示分页
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true //允许分页点击跳转
                },
                // 设置点击箭头
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
            }
        }
    },
    computed: {
        swiper () {
            return this.$refs.mySwiper2.swiper
        },
        swiperOption1 () {
            let obj = {
                initialSlide:this.initialSlide,
                loop: this.isLoop,
                autoplay: {
                    delay: this.loopTime,
                    disableOnInteraction: false,//用户操作后停止自动轮播
                },
                // 显示分页
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true //允许分页点击跳转
                }
            }
            if (this.isVertical) {
                obj.direction = 'vertical'
            }
            console.log(obj)
            return obj
        }
    },
    methods: {
        choosePoint (index) {
            this.current = index
            this.$refs.mySwiper2.swiper.slideTo(index + 1)
        },
        slideChangeTransitionEnd: function () {
            this.current = this.$refs.mySwiper2.swiper.realIndex
        }
    },
    mounted () {
        // current swiper instance
        // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
        console.log('this is current swiper instance object', this.swiper)
        // this.swiper.slideTo(3, 1000, false);
    }
}
</script>
<style>
.right-swiper .swiper-pagination {
    text-align: right;
    padding-right: 20px;
    box-sizing: border-box;
}
</style>
<style scoped>
.recommendPage .swiper-container {
    position: relative;
    margin: 10px auto;
    width: 600px;
    height: 200px;
    background: pink;
}

.recommendPage .swiper-container .swiper-slide {
    width: 100%;
    line-height: 200px;
    background: yellowgreen;
    color: #000;
    font-size: 16px;
    text-align: center;
}

.swiper-button-prev,
.swiper-button-next {
    height: 24px;
    background: none;
}

.custom-point {
    display: inline-block;
    margin: 0 5px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: rgba(0, 0, 0, .2);
}

.activePoint {
    background: #fff;
    border-radius: 3px;
    width: 16px;
}

.prev-icon,
.next-icon {
    font-size: 30px;
    color: #fff;
}

.with-content {
    display: flex;
    justify-content: space-between;
    padding-left: 40px;
    padding-right: 20px;
    box-sizing: border-box;
}

.custom-point-rect {
    display: inline-block;
    margin: 0 5px;
    width: 20px;
    height: 5px;
    border-radius: 3px;
    background: rgba(0, 0, 0, .2);
}

.activePoint1,
.activePoint2 {
    background: #3366ff;
}
</style>
