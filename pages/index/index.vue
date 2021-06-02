<template>
	<view class="container">
		<Tabs :tabs='Tabs'  />
		
		<swiper :indicator-dots="indicatorDots" :autoplay="true">
			<swiper-item v-for="(item,index) in bannerList" :key="index">
				<view class="swiper-item">
					<image :src="item" mode="widthFix"></image>
				</view>
			</swiper-item>
		</swiper>
		
		<view class="index_cate" >
			<navigator url="../playlist/index" v-for="item in catesList" 
				class="cates" :key="item.name">
				<image :src="item.image_src" mode="widthFix"></image>
			</navigator>
		</view>
		
		
		
		
		
		
		
	</view>
</template>

<script>
	import Tabs from "../../components/Tabs.vue"
	import Search from "../../components/Search.vue"
	export default {
		data() {
			return {
				Tabs:['精选','电视剧','综艺','电影', '动漫'],
				indicatorDots: "true",
				bannerList:[
					"/static/img/banner/3.jpg",
					"/static/img/banner/4.jpeg"
				],
				catesList:[]
			}
		},
		components:{
			Tabs,Search
		},
		
		onLoad() {
			this.getCateList();
		},
		methods: {
		 async getCateList(){
			 await this.$request({
				url:"/home/catitems" 
				
			}).then(res=>{
				// console.log(res);
				this.catesList=res;		
				// console.log(this.catesList)
			});
		}
	}
}

	
	
	
</script>

<style lang="scss">
	@import url("../../styles/iconfonts.css");
	.container{ 
			 margin: 0 10rpx 0 10rpx;
	}
	// swiper{ 
	// 	height: calc(100vw * 300 /960);
		
	// }
	swiper{
		margin: 0 10rpx 0 10rpx;
		height: calc(100vw * 300 /960);
		image{
			width: 100vw;
			height: 100vh;
		}
	}
	
	//cates
	.index_cate{
		display: flex;
		justify-content: center;
		align-items: center;
		navigator{
			flex:1;
			image{
				padding: 5rpx;
				width: 100%;
			}
		}
	}
	
	
	
	
</style>
