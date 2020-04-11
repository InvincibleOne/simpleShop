<template>
    <div class="goods-list" >
        <div class="goods-item" v-for="item in goods" :key="item.id">
            <img :src="item.imgUrl" @click="goGoodsInfo(item.id)">
            <h1 class="title">{{ item.title }}</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥{{ item.nowPrice }}</span>
                    <span class="old">￥{{ item.oldPrice }}</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩余6件</span>
                </p>
            </div>
        </div>


        <div class="goods-item" >
            <img src="../../images/9.png" >
            <h1 class="title">哈哈</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥6666</span>
                    <span class="old">￥6999</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩余6件</span>
                </p>
            </div>
        </div>
         
    </div>
</template>
<script>
export default {
    data(){
        return {
            goods:[
                {
                    title:'标题',
                    nowPrice:'6666',
                    oldPrice:'6999',
                    imgUrl:'http://i1.sinaimg.cn/ent/d/2008-06-04/U105P28T3D2048907F326DT20080604225106.jpg',
                    id:1,
                },
                 {
                    title:'标题',
                    nowPrice:'6666',
                    oldPrice:'6999',
                    imgUrl:'../../images/9.png',
                     id:2,
                },
                 {
                    title:'标题',
                    nowPrice:'6666',
                    oldPrice:'6999',
                    imgUrl:'../../images/9.png',
                     id:3,
                }
            ]
        }
    },
    methods:{
        goGoodsInfo(id){
            // this.$router.push("/home/goodsInfo/"+id)
            //this.$router.push({path:"/home/goodsInfo/"+id})
            this.$router.push({name:'goodsInfo',params:{id:id}})
            // this.$router.push()
            //console.log(this)
        }
    }
}
</script>
<style lang="scss" scoped>
img{
    width: 100%;
}
.goods-list{
    display: flex;
    flex-wrap: wrap;
    padding: 7px;
    justify-content: space-between;

    .goods-item{
        width: 49%;
        border: 1px solid #ccc;
        box-shadow: #ccc;
        margin: 3px 0;
        padding: 2px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 280px;
        .title{
            font-size: 15px;
        }

        .info{
            background-color: #eee;
            p{
                margin: 0;
                padding: 5px;
            }
            .price{
                .now{
                    color: red;
                    font-weight: bold;
                    font-size:16px;
                }
                .old{
                    text-decoration: line-through;
                    font-size: 12px;
                    margin-left: 10px;
                }
            }
            .sell{
                display: flex;
                justify-content: space-between;
                font-size: 12px;
            }
        }
    }
}
</style>