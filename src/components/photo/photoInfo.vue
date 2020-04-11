<template>
    <div>
        <h3>标题</h3>
        <p class="subtitle">
            <span>发表时间:2020-1-10</span>
            <span>点击:0次</span>
        </p>
        <hr>
          <vue-preview :slides="slide1" @close="handleClose"></vue-preview>

        <cmt-box :id="id"></cmt-box>
    </div>
</template>
<script>
import comment from '../subconponents/coments.vue'
export default {
    data(){
        return{
            id:this.$route.params.id,
            photoInfo:{

            },

            slide1: [
                {
                    src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
                    msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
                    alt: 'picture1',
                    title: 'Image Caption 1',
                    w: 300,
                    h: 200
                },
                {
                    src: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg',
                    msrc: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg',
                    alt: 'picture2',
                    title: 'Image Caption 2',
                    w: 300,
                    h: 200
                },
                 {
                    src: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg',
                    msrc: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg',
                    alt: 'picture2',
                    title: 'Image Caption 2',
                    w: 300,
                    h: 200
                }
            ]

         };
    },
    components:{
        'cmt-box':comment
    },
    methods: {
      handleClose () {
        console.log('close event')
      }
    }
}
</script>
<style lang="scss" scoped>
h3{
    text-align: center;
    color: aqua;
}
    .subtitle{
        display: flex;
        justify-content: space-between;
        font-size: 13px;
    }
</style>