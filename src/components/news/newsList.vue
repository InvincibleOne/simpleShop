<template>
    <ul class="mui-table-view">
        <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id"> 
            <router-link :to="'/home/newsList/newsInfo/'+item.id">
                <img class="mui-media-object mui-pull-left" src="../../images/1.png">
                <div class="mui-media-body">
                   <h1> {{ item.msg}}</h1>
                    <p class='mui-ellipsis'>
                        <span>{{item.time | dateFormat()}}</span>
                        <span>点击0次</span>
                    </p>
                </div>
            </router-link>
        </li>
        <li class="mui-table-view-cell mui-media">
            <a href="javascript:;">
                <img class="mui-media-object mui-pull-left" src="../../images/2.png">
                <div class="mui-media-body">
                    木屋
                    <p class='mui-ellipsis'>想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖.</p>
                </div>
            </a>
        </li>
        <li class="mui-table-view-cell mui-media">
            <a href="javascript:;">
                <img class="mui-media-object mui-pull-left" src="../../images/3.png">
                <div class="mui-media-body">
                    CBD
                    <p class='mui-ellipsis'>烤炉模式的城，到黄昏，如同打翻的调色盘一般.</p>
                </div>
            </a>
        </li>

    </ul>
</template>
<script>
export default {
    data(){
        return{ 
            newsList:[
                {
                    "msg":"消息1",
                    "time":"2020-1-11",
                    "id":1
                },
                 {
                    "msg":"消息2",
                    "time":"2020-1-12",
                    "id":2
                }
            ]
        }
    },
    created(){
         //this.getNewsList();
    },
    methods:{
        getNewsList(){
            this.$http.get("../message.json ").then(result => {
                if(result.body.status === 0){
                    this.newsList = result.body.message;
                }
                else{

                }
            })
        }
    }
    
}
</script>
<style lang="scss"  scoped>
.mui-table-view{
    li{
        h1{font-size: 14px;}
        .mui-ellipsis{
            font-size:12px;
            color: #226aff;
            display: flex;
            justify-content: space-between;
        }
    }
}
</style>