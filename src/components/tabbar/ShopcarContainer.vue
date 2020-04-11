<template>
    <div class="shopcar-container">
        <div class="goods-list">
            <div class="mui-card">
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                        <mt-switch v-model="selected" @change="changed"></mt-switch>
                        <img src="../../images/9.png">
                    </div>
                </div>
            </div>
        </div>
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                   
                </div>
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
    data(){
        return {
            selected:true
        }
    },
    methods:{
        changed(){
           // console.log('22')
        }
    }
}
</script>
<style lang='scss' scoped>
.shopcar-container{
    background-color: #eee;
    overflow: hidden;
    .goods-list{
        .mui-card-content-inner{
            display: flex;
            align-items: center;
        }
        
        img{
            width: 60px;
            height: 60px;
        }
    }
}
</style>