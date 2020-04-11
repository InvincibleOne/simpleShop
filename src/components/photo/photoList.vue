<template>
    <div>
       <div id="slider" class="mui-slider ">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html">
							推荐
						</a>
						<a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">
							热点
						</a>
						<a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">
							北京
						</a>
						<a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
							社会
						</a>
						<a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
							娱乐
						</a>
					</div>
				</div>

			</div>
			<div > 
				<!-- <img  src="../../images/9.png"> -->
				<ul  class="imgTest">
						<router-link v-for="item in photos" :key="item.id"  :to="'/home/photoInfo/'+item.id"  tag="li">
							<img v-lazy="item.img_url">
							<div class="info">
								<h3  class="info-title">{{ item.title  }}</h3>
								<div class="info-body">
								{{ item.content}}
								</div>
							</div>
						</router-link>
				</ul>
			</div>
    </div>
</template>
<script>
// import mui from '../../lib/mui/js/mui.min.js'
// mui('.mui-scroll-wrapper').scroll({
// 	deceleration:0.0006
// })
export default {
    data(){
		return {
				photos:[
				{
					id:1,
					img_url:"http://i1.sinaimg.cn/ent/d/2008-06-04/U105P28T3D2048907F326DT20080604225106.jpg",
					title:"消息",
					content:"吸气谷关环境阿萨哈结合关汉卿为和环境阿书画家2和气候21浣纱记哈是和结婚登记阿环境和2计划"
				}
			]
		}
	}
}
</script>
<style lang="scss" scoped>
.imgTest{
	background-color: #ffffff;
	
	list-style: none;
	margin: 0;
	padding: 5px;
	li{
			text-align: center;
			position: relative;
			img{
				width: 100%;
				height: 100%;
				vertical-align: middle;
				box-shadow: 0,0,10px #999;
			}
			// 懒加载图片样式  不修改
			img[lazy="loading"]{
				width: 40px;
				height: 300px;
				margin: auto;
			}
			.info{
				color: rgb(245, 247, 247);
				text-align: left;
				position:absolute;
				bottom: 0px;
				background-color:rgba(0,0,0,0.4);
				max-height: 60px;
				.info-title{
					font-size: 16px;
				}
				.info-body{
					font-size: 14px; 
				}
			}
	};
}
</style>