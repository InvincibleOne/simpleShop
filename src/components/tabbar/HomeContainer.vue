<template>
     <div>

        <swiper :lunbotuList="lunbotuList" :isFull='true'></swiper>
        

        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="/home/newsList">
		                   <img src="../../images/1.png">
		                    <div class="mui-media-body">Home</div>
                        </router-link>
                    </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="/home/photoList">
		                    <img src="../../images/2.png">
		                    <div class="mui-media-body">Email</div>
                        </router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="/home/goodsList">
		                    <img src="../../images/3.png">
		                    <div class="mui-media-body">Chat</div>
                        </router-link>
                    </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../images/4.png">
		                    <div class="mui-media-body">location</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                   <img src="../../images/5.png">
		                    <div class="mui-media-body">Search</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../images/6.png">
		                    <div class="mui-media-body">Phone</div></a></li>
		           
		        </ul> 
    </div>
</template>
<script>
import { Toast } from 'mint-ui'
import swiper from '../subconponents/swipe.vue'
export default {
    data(){
        return {
            lunbotuList:[
                {img:require('../../images/7.png')},
                {img:require('../../images/8.png')},
                {img:require('../../images/9.png')},
            ]
        };
    },
    created(){
        //this.getLunbotu();
    },
    methods:{
        getLunbotu(){
            this.$http.get("http://www.liulongbin.top:3005/api/getlunbo").then(result =>{
                if(result.body.status === 0){
                    console.log(result);
                    this.lunbotuList = result.body.message;
                }
                else{
                    Toast("加载轮播图失败！");
                }
            })
        }
    },
    components:{
        swiper
    }
}
</script>
<style lang="scss" scoped>

    .mui-grid-view.mui-grid-9{
        background-color: white;
       img{
            width: 60px;
            height: 60px;
       }
    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell {
        border: none;
    }
</style>