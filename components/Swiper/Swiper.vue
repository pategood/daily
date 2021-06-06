<template>
	<view>
		<swiper :indicator-dots="indicatorDots" :autoplay="true" circular="true" interval="3000">
			<swiper-item v-for="(item,index) in bannerList" :key="index">
				<view class="swiper-item">
					<image :src="item" mode="widthFix"></image>
				</view>
			</swiper-item>
		</swiper>
		
		<!-- <cl-swiper  :list="bannerList"></cl-swiper> -->
		

	</view>
</template>

<script>
	export default {
		name:"Swiper",
		data() {
			return {
				bannerList: [
					"/static/img/banner/3.jpg",
					"/static/img/banner/4.jpeg"
				],
				indicatorDots: "true",
			};
		}
	}
</script>

<style lang="scss">
	swiper {
		padding: 0 10rpx 0 10rpx;
		height: calc(100vw * 300 /960);
	
		image {
			width: 100vw;
			height: 100vh;
		}
	}
</style>
