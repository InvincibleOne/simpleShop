<template>
    <div>
         <mt-swipe :auto="4000">
                <mt-swipe-item v-for="item in lunbotuList" :key="item.url">
                    <img :src="item.img" alt="">
                </mt-swipe-item>
               
        </mt-swipe>
    </div>
</template>
<script>
export default {
    props:['lunbotuList','isFull']
}
</script>
<style lang="scss" scoped>
        .mint-swipe{
        height: 200px;
        .mint-swipe-item{
            &:nth-child(1){
                background-color: blue;
            }
            &:nth-child(2){
                background-color: pink;
            }
            &:nth-child(3){
                background-color: yellow;
            }
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
</style>