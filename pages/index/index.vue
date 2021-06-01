<template>
	<view class="container">
		<Tabs :tabs='Tabs'  />
		
		<swiper :indicator-dots="indicatorDots" :autoplay="true">
			<swiper-item v-for="(item,index) in bannerList" :key="index">
				<view class="swiper-item">
					<image :src="item" mode="heightFix"></image>
				</view>
			</swiper-item>
		</swiper>
		
		<view class="icons" >
			<navigator url="../playlist/index" >
				<image src="" mode=""></image>
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
					"/static/img/banner/1.jpeg",
					"/static/img/banner/2.jpg"
					// "/static/img/banner/3.jpg",
					// "/static/img/banner/4.jpeg"
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
				// data:{
					
				// }
			}).then(res=>{
				this.catesList=res;
				console.log(this.catesList);
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
	swiper{ 
		height: calc(100vw * 270 /700);
		
		margin: 0 10rpx 0 10rpx;
	}
/* 	swiper{
		image{
			width: 100vw;
			height: 100vh;
		}
	} */
</style>
