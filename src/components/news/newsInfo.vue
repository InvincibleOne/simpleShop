<template>
    <div class="newsInfo-container"> 
        <h3 class="title">新闻详情{{ id }}</h3>
        <p class="subtitle">
            <span>发布时间：</span>
            <span>点击次数：</span>
        </p>
        <hr>
        <components-box  :id = "this.id"></components-box>
    </div>
</template>
<script>
import coments from '../subconponents/coments.vue'
export default {
    data(){
        return{ id:this.$route.params.id }
    },
    components:{
        "components-box":coments
    }
}
</script>
<style lang="scss" scoped>
.newsInfo-container{
    padding: 0 4px;
    .title{
        font-size: 16px;
        text-align: center;
        margin: 15px 0;
        color:red;
    }
    .subtitle{
        font-size: 13px;
        color: blue;
        display: flex;
        justify-content: space-between;
    }
}
</style>