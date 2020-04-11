<template>
    <div class="test">
        <mt-header title="多个按钮">
            <!-- <router-link to="/" slot="left"> -->
                <mt-button icon="back" slot="left">返回</mt-button>
            <!-- </router-link> -->
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="css" scoped>
    .mint-header{
    z-index: 99;
}
.test {
    overflow: auto
}
</style>