<template>
    <div>
        
        <transition 
            @before-enter="beforeEnter"
            @enter="enter"
            @after-enter="afterEnter">
            <div class="ball" v-show="ballFlag"  ref="ball"></div>
        </transition>

        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <swiper :lunbotuList="lunbotu" :isFull='false'></swiper>
                </div>
            </div>
		</div>
        <div class="mui-card">
            <div class="mui-card-header">页眉</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p class="price">
                        市场价:<del>￥2999&nbsp;&nbsp;</del>
                        <span class="now_price"> ￥2699</span>
                    </p>
                    <p>购买数量:<num-box></num-box></p>
                    <p>
                        <mt-button type="primary" size="small">立即购买</mt-button>
                        <mt-button type="danger" size="small" @click="addShopCar()">加入购物车</mt-button>
                    </p>
                </div>
            </div>
            <div class="mui-card-footer">页脚</div>
        </div>

    </div>
</template>
<script>
import swiper from '../subconponents/swipe.vue'
import numBox from '../subconponents/goodsInfo_numBox.vue'
//import mui from '../../lib/mui/js/mui.min.js'
export default {
    data(){
        return{
            ballFlag:false,
            count:1,
            id:this.$route.params.id,
            lunbotu:[
                {img:'../../images/7.png'},
                {img:'../../images/8.png'},
                {img:'../../images/9.png'},
            ]
        }
    },
    methods:{
        addShopCar(){
            this.ballFlag = !this.ballFlag;
            var goodsInfo = {
                id:this.id,
                count:this.count,
                price:2699,
            };

            this.$store.commit('addToCar',goodsInfo);

            // setTimeout(function(){
            //     this.$store.commit('addToCar',goodsInfo);
            // },600)
    
        },
        beforeEnter(el){
            el.style.transform = "translate(0,0)";
        },
        enter(el,done){
            const  ballPosition = this.$refs.ball.getBoundingClientRect();
            const badgePosition = document.getElementById('badge').getBoundingClientRect();
            const xDist = badgePosition.left - ballPosition.left;
            const yDist = badgePosition.top - ballPosition.top;
            el.offsetWidth;
            el.style.transform = `translate(${xDist}px,${yDist}px)`;
            el.style.transition = "all 0.6s cubic-bezier(.4,-0.3,1,.68)";
            done()
        },
        afterEnter(el){        
                this.ballFlag = !this.ballFlag;
        },

        getCount(count){
            this.count = count;
        }

    },
    components:{
        swiper,
        numBox,
    },
    mounted(){
       // mui('.mui-numbox').numBox
    }
}
</script>
<style lang="scss" scoped>

.now_price{
    color: red;
    font-size: 16px;
    font-weight: bold;
}
.ball{
    width: 15px;
    height: 15px;
    border-radius: 50% ;
    background: red;
    position: absolute;
    z-index: 99;
    top: 404px;
    left:78px;
    
    
}
</style>